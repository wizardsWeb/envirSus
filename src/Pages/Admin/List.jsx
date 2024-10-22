import { createRoot } from 'react-dom/client';
import './list.css';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow, Inject, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { registerLicense } from '@syncfusion/ej2-base';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { Category, ChartComponent, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { employeeDetail, taskDetail } from './data';
import { KanbanComponent, ColumnsDirective as KanbanColumns, ColumnDirective as KanbanColumn } from '@syncfusion/ej2-react-kanban';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1JpRGpGfV5ycEVHYlZTRXxcQU0SNHVRdkdnWH9ccHRVRGZYV0N0XUo=');

function List() {
    let taskData;
    let salesData;
    const emailTemplate = (props) => {
        var src = 'mailto:${MailID}' + props.MailID;
        return (<div className=''>
                <a href={src}>{props.MailID}</a>
            </div>);
    };
    const generateSalesData = (taskData) => {
        const statusCategories = ['Open', 'InProgress', 'Testing', 'Close'];
        const statusData = statusCategories.map((status) => {
            const filteredTasks = taskData.filter((task) => task.Status === status);
            const estimatedHours = filteredTasks.reduce((sum, task) => sum + task.Estimate, 0);
            // Assuming tasks have an EstimatedHours field
            const spentHours = filteredTasks.reduce((sum, task) => sum + task.Spent, 0);
            let taskid = '';
            if (filteredTasks.length) {
                taskid = filteredTasks[0].Id;
            }
            return { spentHours, estimatedHours, status, taskid };
        });
        return statusData;
    };
    const detailDataBound = (args) => {
        var rowData = args.data;
        taskData = taskDetail.filter((task) => task.Assignee === rowData.Name);
        salesData = generateSalesData(taskData);
    };
    const cardTemplate = (props) => {
        return (<div className="card-template ">
          <table className="card-template-wrap" style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td className="e-title">
                  <div className="e-card-header">
                    <div className="e-card-header-caption">
                      <div className="e-card-header-title e-tooltip-text">
                        {props.Id}
                      </div>
                    </div>
                  </div>
                  <table className="card-template-wrap">
                    <tbody>
                      <tr className='e-tooltip-text'>
                        <td>
                          <div className="e-card-content">
                            {props.Summary}
                          </div>
                          <span className="e-card-content"><b>Estimated hour:</b> {props.Estimate}</span>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>);
    };
    const taskTemplate = () => {
        return (<div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <KanbanComponent id="kanban" cssClass="kanban-swimlane-template" keyField="Status" dataSource={taskData} cardSettings={{ template: cardTemplate.bind(this), headerField: 'Id' }}>
                <KanbanColumns>
                    <KanbanColumn headerText="Open" keyField="Open"/>
                    <KanbanColumn headerText="In Progress" keyField="InProgress"/>
                    <KanbanColumn headerText="Testing" keyField="Testing"/>
                    <KanbanColumn headerText="Done" keyField="Close"/>
                </KanbanColumns>
            </KanbanComponent>
        </div>);
    };
    const chartTemplate = () => {
        return (<div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <ChartComponent height="302px" tooltip={{ enable: true }} primaryXAxis={{ valueType: 'Category', title: 'Status' }} title="Burndown Chart">
                <Inject services={[Tooltip, LineSeries, Category, Legend]}/>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={salesData} xName="taskid" yName="estimatedHours" name="Estimated Hours" marker={{ visible: true, width: 10, height: 10 }}/>
                    <SeriesDirective dataSource={salesData} xName="taskid" yName="spentHours" name="Spent Hours" marker={{ visible: true, width: 10, height: 10 }}/>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>);
    };
    const detailTemplate = () => {
        const headertext = [{ text: "Taskboard" }, { text: "Burndown Chart" }];
        return (<div>
            <p style={{ textAlign: "center", paddingTop: "3px", fontSize: "17px" }}><b>Sprint</b></p>
            <TabComponent animation={{
                previous: { effect: 'None', duration: 0, easing: '' },
                next: { effect: 'None', duration: 0, easing: '' }
            }}>
            <TabItemsDirective>
                <TabItemDirective header={headertext[0]} content={taskTemplate}/>
                <TabItemDirective header={headertext[1]} content={chartTemplate}/>
            </TabItemsDirective>
            </TabComponent></div>);
    };
    const employeeTemplate = (props) => {
        var src = 'https://ej2.syncfusion.com/react/demos/src/grid/images/' + props.EmployeeID.replace('Emp100', '') + '.png';
        return (<div className='image flex justify-center'>
            <img src={'/img/profile.png'} alt={props.EmployeeID}/>
        </div>);
    };
    return (<div className='control-pane'>
                <div className='control-section px-5 py-2 rounded-lg'>
                    <GridComponent dataSource={employeeDetail} height='100vh' detailDataBound={detailDataBound} detailTemplate={detailTemplate} width='auto' allowSorting={true} allowFiltering={true} filterSettings={{ type: 'CheckBox' }}>
                      <ColumnsDirective>
                          <ColumnDirective headerText='Image' width='180' template={employeeTemplate} textAlign='Center'/>
                          <ColumnDirective field="EmployeeID" headerText='ID' isPrimaryKey={true} width={70}/>
                          <ColumnDirective field="Name" headerText='Name' width={70}/>
                          <ColumnDirective field="MailID" headerText='Email' width={120} template={emailTemplate}/>
                          <ColumnDirective field="SoftwareTeam" headerText='Team(s)' width={70}/>
                          <ColumnDirective field="ReportTo" headerText='Reporter' width={70}/>
                        </ColumnsDirective>
                        <Inject services={[DetailRow, Sort, Filter]}/>
                    </GridComponent>
                </div>
        </div>);
}
export default List;
