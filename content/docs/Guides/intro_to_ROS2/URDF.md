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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DPHKT4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCW9QTdV6L2%2FfnqaV%2FOA6povu5gtbZiq3cTA5vZ5j1zwAIhAILpcARpGN9zcvzv6UplNdRLsjLisCxDlRBYm5IzEBH0Kv8DCBQQABoMNjM3NDIzMTgzODA1IgzZqtSL8JEQ9jEoX8Uq3APGd5RP6sf2rbNGtOkAAsnije2%2BifUmS%2FNc0NA87joeFXddymrSLyA5c8xlSM8Tpi3Qi7WxvVwlWpeG8RaD07CcV2a4%2FV3Z0qR1NIbqzp%2FuPI6uUWn6yIn39%2FZuljLel50TzlfOwH3Zk2JyBEAjYSuapdKG%2B%2BgDj2RU7gHhCuqf9NGPmnt2AC4zZerqaj8jxptKjfh30IPEYnwYoeIi3jMPE4P%2BapxoNBUsJAvygJk7gO5OzJYlO5aSSNODS7o0bcJuy9GSJLOBM1BHaekqDAVeGaYUoKYoWDumzVPlSM3ucflgPOOeoxQ0GM%2Ft3U88d7s51Mr4cUmyFmZsWwdC54QxlUMIL1bvjHZ4IqYdZsdr5G5WzUiEcJh%2BW1Lp%2Bfm6sZ7klbCFo5V1ZclOO5MDAXiKmb1yUTxq%2Bpu5aC8IrrV3o2AmSWNFuogpTCfybSeg59pu18dA86O1btHwLGggFOT%2FGWm1QGqFJHL1kcetwHk4tyoPZbD1Cc1%2F0rLLk5cvhC5r5QbgYu9FxfgFqzD7mQ8lyNnlrSfY6NjPtoNcTNTrnQSQx9FGZOTvWRdKKMqOSRwiLpMO4H1%2Bm%2FZBLJvB4OXmWbnTNzU2IwUiBqrdMwQvnYt%2Fa%2Bi%2FaTQJp5RAwTCE7ZHBBjqkAVNm05Gqj5YI%2FHBBmkqstUZwW3dWp%2FepaBflwVmWS7eMOvJGDrLidcUKsQAXPBTRh0hM%2BXVhtaLmmN31i2MLOlITQy7vVe30XXACjdICXnNDsGW4tGOTDda2haTqphR5Q6YNLBUJV22jWQx7GAHaq6UPfn2XSA4tkqkb0fze3tODoYFXu2q97VmjagLlztbIWQJxWL1bh6cEYWLAFdHzwvPRUQNw&X-Amz-Signature=77c303dccc409f7237a267d819866552e7511c4667047d7161371e77a40e3c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DPHKT4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCW9QTdV6L2%2FfnqaV%2FOA6povu5gtbZiq3cTA5vZ5j1zwAIhAILpcARpGN9zcvzv6UplNdRLsjLisCxDlRBYm5IzEBH0Kv8DCBQQABoMNjM3NDIzMTgzODA1IgzZqtSL8JEQ9jEoX8Uq3APGd5RP6sf2rbNGtOkAAsnije2%2BifUmS%2FNc0NA87joeFXddymrSLyA5c8xlSM8Tpi3Qi7WxvVwlWpeG8RaD07CcV2a4%2FV3Z0qR1NIbqzp%2FuPI6uUWn6yIn39%2FZuljLel50TzlfOwH3Zk2JyBEAjYSuapdKG%2B%2BgDj2RU7gHhCuqf9NGPmnt2AC4zZerqaj8jxptKjfh30IPEYnwYoeIi3jMPE4P%2BapxoNBUsJAvygJk7gO5OzJYlO5aSSNODS7o0bcJuy9GSJLOBM1BHaekqDAVeGaYUoKYoWDumzVPlSM3ucflgPOOeoxQ0GM%2Ft3U88d7s51Mr4cUmyFmZsWwdC54QxlUMIL1bvjHZ4IqYdZsdr5G5WzUiEcJh%2BW1Lp%2Bfm6sZ7klbCFo5V1ZclOO5MDAXiKmb1yUTxq%2Bpu5aC8IrrV3o2AmSWNFuogpTCfybSeg59pu18dA86O1btHwLGggFOT%2FGWm1QGqFJHL1kcetwHk4tyoPZbD1Cc1%2F0rLLk5cvhC5r5QbgYu9FxfgFqzD7mQ8lyNnlrSfY6NjPtoNcTNTrnQSQx9FGZOTvWRdKKMqOSRwiLpMO4H1%2Bm%2FZBLJvB4OXmWbnTNzU2IwUiBqrdMwQvnYt%2Fa%2Bi%2FaTQJp5RAwTCE7ZHBBjqkAVNm05Gqj5YI%2FHBBmkqstUZwW3dWp%2FepaBflwVmWS7eMOvJGDrLidcUKsQAXPBTRh0hM%2BXVhtaLmmN31i2MLOlITQy7vVe30XXACjdICXnNDsGW4tGOTDda2haTqphR5Q6YNLBUJV22jWQx7GAHaq6UPfn2XSA4tkqkb0fze3tODoYFXu2q97VmjagLlztbIWQJxWL1bh6cEYWLAFdHzwvPRUQNw&X-Amz-Signature=cc2bf0489754efaf34362c8b1c4c50242c757743902d4bf8fedc130e1094d1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
