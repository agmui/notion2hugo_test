---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7R4SVY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDaaoqo%2BDfisZ6YOG9hFG16LlygR%2F5BPtEUjNoaQ6hFWwIhAIx50vYbflLA38rL8c6y3AlRgRqUhfSrbusglgXmm9tfKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIcvEn70paMetzc7Aq3ANjmD3b7rawEmF25iofiPcjxZgfNL2j3w16aI2Q9PoG0m88mqkpNHm8LQgYGdQf8vPy3LL4iCcc%2BWhbpXM0BKIhCQattXai4HzNiCSrvGtjrdiyKey5O85RqgGaKDiDhO66qqKp4%2FrYpQTMOOPLm4Ob%2B%2B7zjCqMdblK1KcHZksJExfyvjYi4IByDf%2F3XtBg6SMWIxiMcV%2BPOx6qZ2zPM2BdCCXgEMfjimzdl9J%2Ffb6OMJyXYdejwwDGmexbu4eLEXyEeSPHgxsUzEq08QRVG%2BNJw8K89l%2F1EvnbsaDfbxlkV6l%2BW4LauejTWsCMDQbqeMzazUm%2F2c5CoxPa9BU0Qj5w9RqfMXEtLvgniTyyWAFlvxWkaDvbNNLb6nzWa4X%2F6t851BOs22tw%2BJfLOodKBpkth9gkov0JgL1u5VWyLKFxcyEHfOmmZ%2FT1juMNplqel4Ba2FQYsOwX8OZlgi3bYQ1SNLGWhQBCTlrHQC3EcLtaPvg%2BeqRKFULbnn%2F1ujUsv9Jxpk3qj4O6D8syokYueOoO2o8YcUwYrmj4OTLmwf%2B9bTQZfN1altRKWN%2F8NLDjQBDOfIy%2FM8H7TxmyXHe8yDKkU59BNmXscqrFY6ZOFmHcCcRcI9WQQxbxvzzcKTC4hc7ABjqkAUZO32pduu1763EOhr9CbRwkpjf6MjT7tXlrtHfY5YkH040LM5OUHUt422niEjGpdyTCiDJnuzfM%2FKqgHArvx6Tci1iri13ykO%2FakH1hNJ9%2FNTS1tg6oNn%2FygRve0V9jkK1YS9APsEexm9SGnjEZSlvfs9nrapG9ejez8ErWCVFcU24lZqSULAVU3i%2F5XJHapKS3lM6L3W0cILOtojMINyYGJcOu&X-Amz-Signature=55ddc28ec66dbeb57c4b8d06e8e2adf681fc8c44da446d1c78aabde5496dd6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7R4SVY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDaaoqo%2BDfisZ6YOG9hFG16LlygR%2F5BPtEUjNoaQ6hFWwIhAIx50vYbflLA38rL8c6y3AlRgRqUhfSrbusglgXmm9tfKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIcvEn70paMetzc7Aq3ANjmD3b7rawEmF25iofiPcjxZgfNL2j3w16aI2Q9PoG0m88mqkpNHm8LQgYGdQf8vPy3LL4iCcc%2BWhbpXM0BKIhCQattXai4HzNiCSrvGtjrdiyKey5O85RqgGaKDiDhO66qqKp4%2FrYpQTMOOPLm4Ob%2B%2B7zjCqMdblK1KcHZksJExfyvjYi4IByDf%2F3XtBg6SMWIxiMcV%2BPOx6qZ2zPM2BdCCXgEMfjimzdl9J%2Ffb6OMJyXYdejwwDGmexbu4eLEXyEeSPHgxsUzEq08QRVG%2BNJw8K89l%2F1EvnbsaDfbxlkV6l%2BW4LauejTWsCMDQbqeMzazUm%2F2c5CoxPa9BU0Qj5w9RqfMXEtLvgniTyyWAFlvxWkaDvbNNLb6nzWa4X%2F6t851BOs22tw%2BJfLOodKBpkth9gkov0JgL1u5VWyLKFxcyEHfOmmZ%2FT1juMNplqel4Ba2FQYsOwX8OZlgi3bYQ1SNLGWhQBCTlrHQC3EcLtaPvg%2BeqRKFULbnn%2F1ujUsv9Jxpk3qj4O6D8syokYueOoO2o8YcUwYrmj4OTLmwf%2B9bTQZfN1altRKWN%2F8NLDjQBDOfIy%2FM8H7TxmyXHe8yDKkU59BNmXscqrFY6ZOFmHcCcRcI9WQQxbxvzzcKTC4hc7ABjqkAUZO32pduu1763EOhr9CbRwkpjf6MjT7tXlrtHfY5YkH040LM5OUHUt422niEjGpdyTCiDJnuzfM%2FKqgHArvx6Tci1iri13ykO%2FakH1hNJ9%2FNTS1tg6oNn%2FygRve0V9jkK1YS9APsEexm9SGnjEZSlvfs9nrapG9ejez8ErWCVFcU24lZqSULAVU3i%2F5XJHapKS3lM6L3W0cILOtojMINyYGJcOu&X-Amz-Signature=404acbcc1e04306731d5bc890cd78cf886869eef24236f63dff42ed50497a903&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
