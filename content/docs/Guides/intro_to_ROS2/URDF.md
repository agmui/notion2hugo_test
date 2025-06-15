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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRNDPXM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC2xHqnz%2BfpDHG79m3SkUIsRaWhGWIVHn9od%2FwSCwKWAAIgWPbI6hXbjEYwWeoTrLZn1XyKFgHjrvEztLQTsB2QEJIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIsCNm5s4xwsw60xzyrcA9Mict2D0BmsZv0tpAMEfPAojImCNOralcOsjeZx5N0zTOgPyywJqUxL8qECtXDHKAVwOgMBlStFe0bXDLHHhmI7YS2%2BIrjDJG34q8jkwHj6iKKm1E2ne5fHd1Qud0dbyTe4IzLGnSH7PcmCM19DSgkRwyDGXsqpPJC5%2BIZY7Z1jZU%2FgqEU52QzRjCvPg1jawB%2BTnhSk8fwLv5AI5utzsMR%2BEtOteuuhV9GQ29nC1IkO9bAzHgU97ogAj9FNAP0BjQ0HPyL83yc0J1kGTaoirjdeAZNHiPyHuGx42lSJhN2iiFWceL54M2CSD5ebXsrSCKOJH3ewKo3vtwJmN2jXGa3gV9GuJbGmdGhgSLE%2B84Qd5u83f%2BsalA9HAhwhRMOgC%2FemixnKm8h1JdY3SK2%2FSE%2F4HOXP%2BOp2Eo8HO3PqK%2B%2BNLgoxtFotVO8dRLBzrRYc9isNYnnqw%2B5YlhEoJzFH%2FbMToIJFcYJbrsya2OPXTk0y8ehshACaTiIms8ZjT%2BG2ThPnMuMstKc18HZYhrsoxeg0WRfBlQrSWjivnhxyGlpR%2FXrEIkz8805ioHrXsxxAO6RE%2FP8v9oeu4TG1MFO6EP1rLOXvsXky1CATHKbb6W8XCIVghXl4p%2Fvg6MlUMLb8vMIGOqUBzHjy42DMtJjAs1Tz4HkAiYWw80RDZEsmlKcTGJk335b%2BmltecI2NDnC3k00T6QKc1yaun7wZM4AbklxJZTzivkpTsd%2FOSc9BvQeEPXqjHU4xB97eaXTw2LV3abA09%2BO1GYWhFeYpy1QEn%2FGB%2F4X5%2B5mWh8JiN3Px%2Flo5nQTAKy1rOboaBbVtOjMbbE%2BHUNIyXLT6gfS57fZBkPmyT23AmY%2B1dIRv&X-Amz-Signature=f070a6a151805c57a3bcdae8d28e88cdec53bdae339394de64967eb470f82c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRNDPXM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC2xHqnz%2BfpDHG79m3SkUIsRaWhGWIVHn9od%2FwSCwKWAAIgWPbI6hXbjEYwWeoTrLZn1XyKFgHjrvEztLQTsB2QEJIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIsCNm5s4xwsw60xzyrcA9Mict2D0BmsZv0tpAMEfPAojImCNOralcOsjeZx5N0zTOgPyywJqUxL8qECtXDHKAVwOgMBlStFe0bXDLHHhmI7YS2%2BIrjDJG34q8jkwHj6iKKm1E2ne5fHd1Qud0dbyTe4IzLGnSH7PcmCM19DSgkRwyDGXsqpPJC5%2BIZY7Z1jZU%2FgqEU52QzRjCvPg1jawB%2BTnhSk8fwLv5AI5utzsMR%2BEtOteuuhV9GQ29nC1IkO9bAzHgU97ogAj9FNAP0BjQ0HPyL83yc0J1kGTaoirjdeAZNHiPyHuGx42lSJhN2iiFWceL54M2CSD5ebXsrSCKOJH3ewKo3vtwJmN2jXGa3gV9GuJbGmdGhgSLE%2B84Qd5u83f%2BsalA9HAhwhRMOgC%2FemixnKm8h1JdY3SK2%2FSE%2F4HOXP%2BOp2Eo8HO3PqK%2B%2BNLgoxtFotVO8dRLBzrRYc9isNYnnqw%2B5YlhEoJzFH%2FbMToIJFcYJbrsya2OPXTk0y8ehshACaTiIms8ZjT%2BG2ThPnMuMstKc18HZYhrsoxeg0WRfBlQrSWjivnhxyGlpR%2FXrEIkz8805ioHrXsxxAO6RE%2FP8v9oeu4TG1MFO6EP1rLOXvsXky1CATHKbb6W8XCIVghXl4p%2Fvg6MlUMLb8vMIGOqUBzHjy42DMtJjAs1Tz4HkAiYWw80RDZEsmlKcTGJk335b%2BmltecI2NDnC3k00T6QKc1yaun7wZM4AbklxJZTzivkpTsd%2FOSc9BvQeEPXqjHU4xB97eaXTw2LV3abA09%2BO1GYWhFeYpy1QEn%2FGB%2F4X5%2B5mWh8JiN3Px%2Flo5nQTAKy1rOboaBbVtOjMbbE%2BHUNIyXLT6gfS57fZBkPmyT23AmY%2B1dIRv&X-Amz-Signature=be1b1ac8042ec237ba86b8ad9cb16edfda9613c24649e8bd797eb14a74437fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
