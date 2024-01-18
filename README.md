# Task Approval System

Problem: Design a Task Approval System, based on the mock api provided.

Requirements:
1. Integrate with the mock api : `http://localhost:3001/getTasks` to get the list of tasks
<details>
  <summary>Sample response:</summary>
  
   
      [
          {
              "id": "TASK_1ER9",
              "title": "Approve Federal Documents",
              "description": "Due 08/24/22",
              "status": "AWAITING_APPROVAL"
          },
          {
              "id": "TASK_2ER9",
              "title": "Approve Bank documents",
              "description": "Due 08/24/22",
              "status": "AWAITING_APPROVAL"
          },
          {
              "id": "TASK_3ER9",
              "title": "Approve State Income Documents",
              "description": "Due 08/24/22",
              "status": "COMPLETED"
          },
          {
              "id": "TASK_4ER9",
              "title": "Approve YTD Balance files",
              "description": "Due 08/24/22",
              "status": "AWAITING_APPROVAL"
          },
          {
              "id": "TASK_5ER9",
              "title": "Approve Employee Data Files",
              "description": "Due 08/24/22",
              "status": "REJECTED"
          }
      ]

</details>

2. Sort the tasks and ensure that 'AWAITING_APPROVAL' tasks are shown first.
3. Upon approval or rejection of the task, update the store

![coding_intervie](https://github.com/SusmithaH/adp-ui-coding-test/assets/156953431/025df10c-5546-48be-8632-06f818372f50)
Note: You don't have to create any new components as they are ready out of the box. Please refer to the components folder to learn about their usage. 

## Test Environment Setup
In the project directory, run the following commands:

```
cd .\adp-ui-coding-test\
npm install
npm start

cd .\sample-api\
npm install
npm start

```
