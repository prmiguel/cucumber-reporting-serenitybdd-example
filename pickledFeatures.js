jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "maintain_my_todo_list/completing_todos.feature",
      "Feature": {
        "Name": "Completing todos",
        "Description": "In order to make me feel **a sense of accomplishment**\nAs a forgetful person\nI want to be to _view all of things I have completed_",
        "FeatureElements": [
          {
            "Examples": [],
            "Name": "Mark a task as completed",
            "Slug": "mark-a-task-as-completed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she completes the task called 'Walk the dog'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "she filters her list to show only Completed tasks",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should contain Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [],
            "Name": "List of completed items should be empty if nothing has been completed",
            "Slug": "list-of-completed-items-should-be-empty-if-nothing-has-been-completed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she filters her list to show only Completed tasks",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should be empty",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@cucumber",
          "@completing"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "maintain_my_todo_list/deleting_todos.feature",
      "Feature": {
        "Name": "Deleting todos",
        "Description": "In order to make me feel **a sense of accomplishment**\nAs a tidy person\nI want to be to delete the tasks once I am done with them",
        "FeatureElements": [
          {
            "Examples": [],
            "Name": "Delete an active item",
            "Slug": "delete-an-active-item",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she deletes the task called 'Walk the dog'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should contain Buy some milk",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [],
            "Name": "Delete all the items",
            "Slug": "delete-all-the-items",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she deletes the task called 'Walk the dog'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "she deletes the task called 'Buy some milk'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should be empty",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@cucumber",
          "@deleting"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "maintain_my_todo_list/filtering_todos.feature",
      "Feature": {
        "Name": "Filtering todos",
        "Description": "In order to make me feel **a sense of accomplishment**\nAs a forgetful person\nI want to be to _view all of things I have completed_",
        "FeatureElements": [
          {
            "Examples": [],
            "Name": "View only the completed items",
            "Slug": "view-only-the-completed-items",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "she has completed the task called 'Walk the dog'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she filters her list to show only Completed tasks",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should contain Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "tasks",
                    "filter",
                    "expected"
                  ],
                  "DataRows": [
                    [
                      "Buy some milk, Walk the dog",
                      "Active",
                      "Buy some milk",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Buy some milk, Walk the dog",
                      "Completed",
                      "Walk the dog",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Buy some milk, Walk the dog",
                      "All",
                      "Buy some milk,  Walk the dog",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Viewing the items by status",
            "Slug": "viewing-the-items-by-status",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing <tasks>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "she has completed the task called 'Walk the dog'",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she filters her list to show only <filter> tasks",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should contain <expected>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@cucumber",
          "@filtering"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "record_todos/add_new_items_to_the_todo_list.feature",
      "Feature": {
        "Name": "Add new todos",
        "Description": "In order to avoid having to remember things that need doing\nAs a forgetful person\nI want to be able to record what I need to do in a place where I won't forget about them",
        "FeatureElements": [
          {
            "Examples": [],
            "Name": "Adding an item to an empty list in Cucumber",
            "Slug": "adding-an-item-to-an-empty-list-in-cucumber",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that James has an empty todo list",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "he adds 'Buy some milk' to his list",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "'Buy some milk' should be recorded in his list",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [],
            "Name": "Adding an item to a list with other items in Cucumber",
            "Slug": "adding-an-item-to-a-list-with-other-items-in-cucumber",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that Jane has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she adds 'Buy some cereal' to her list",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "her todo list should contain Buy some milk, Walk the dog, Buy some cereal",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [],
            "Name": "Adding items to several peoples lists in Cucumber",
            "Slug": "adding-items-to-several-peoples-lists-in-cucumber",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "that James has a todo list containing Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "that Jill has a todo list containing Buy some milk, Buy some cheese",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "she adds 'Buy some cereal' to her list",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "Jill's todo list should contain Buy some milk, Buy some cheese, Buy some cereal",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "James's todo list should contain Buy some milk, Walk the dog",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@cucumber",
          "@adding"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@cucumber",
        "Total": 9,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 9
      },
      {
        "Tag": "@completing",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@deleting",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@filtering",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@adding",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      }
    ],
    "Folders": [
      {
        "Folder": "maintain_my_todo_list/completing_todos.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "maintain_my_todo_list/deleting_todos.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "maintain_my_todo_list/filtering_todos.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "record_todos/add_new_items_to_the_todo_list.feature",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "maintain_my_todo_list/completing_todos.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "maintain_my_todo_list/deleting_todos.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "maintain_my_todo_list/filtering_todos.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "record_todos/add_new_items_to_the_todo_list.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 9,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 9
    },
    "Features": {
      "Total": 4,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 4
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "maintain_my_todo_list/completing_todos.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "maintain_my_todo_list/deleting_todos.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "maintain_my_todo_list/filtering_todos.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "record_todos/add_new_items_to_the_todo_list.feature",
        "Total": 3,
        "Automated": 3,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "GeneratedOn": "17 March 2022 20:18:41"
  }
});