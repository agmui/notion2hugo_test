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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664542DTI3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKm1wqCLw1DBGN3HZOy4PzTYyJxTWpNQBQ%2F3yx69%2F9RAiEA%2F0mnqt5NSCMFwIg8LRLCg%2BfmE%2Bsq%2FB49NfRe9z8lxVcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ4uVFs%2FEuMS0JmLircA%2FUCZ5rQUIu7y4ug6gnhM2ODGCXsNTYR8km6tNigG1jrqtMRyH3mGUIuzValsRAe9%2FVqigw7Sv%2BCaPJKA7A4ziZpgEGh5LgDlBrf2KJEBkOhPAoD4EwM9FsMDGUx8i8Su1EIj3h8BbQjHqr9ItMOx9Pa7R4u7xRIRbBJiHZUiZhV%2BeCQvFUGCpWW9X6bwD5y5fZhJJDGsA%2FXSWtt37a51utDRORyJLtEyG7CYiURqtLw75ZJw0rsD2%2FYWCLa1iPR8dXI5PxeoJ9DAuGRkbeO1iCYzZeJmyVJ8L2fyD2vSVnL1dxFREaRD9HN82iJJEgKlXs1msqVrEkP7Ma4NG32GxqmDzg8Z05%2BGnsRc%2B6bM1q100w8EinQ57CL9svB%2Bm8Tszy2PrVutzvFf8SHmQFrD3wkxh9a0ScWu9mUfUvZwY5c5TWvqSezojdkIPnlvQA1y3oW0fKdWNg364gtJsFEf1FREYIC0wi6ZYbWLAmnQX8Kvqv1fNTCdEcmBAe94nRvla1OGJZH198KVatEreRuRmVHlf93NDug2435I%2B0SmvdbjfHOjFDnCBFgUthEYD6uk6oroYKIOOZk7ejHvhs5HXBfV7FMWOgar2l9RpfAoP5yx%2FQ8b6qp5ADCAgZRMIGR87wGOqUBDhC1SmDh2hbxKLdpnDyaySSAOfS6SVr9Blz%2Bci9kuPPfibIZxh3RgYmlc5iaxMrmPBdFI7OWv7UEay5znZ4admU37Q0c%2FrL%2BIaCivSYe2vMNkrtAaTQzM%2BREFmPPl0pDLsCYP1YQ%2FkQfJd7GOGf9r736REPu%2BLBJ3q1ZW9MRzg839ebPGWEiNPk1AYtk%2BpOLq9p77WHxxV%2BXfs9nouOjI3WnlEVq&X-Amz-Signature=4cda32aae464a520d69666eed8755f31c6f6a09b654931cb88ddd3adfedf7cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664542DTI3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKm1wqCLw1DBGN3HZOy4PzTYyJxTWpNQBQ%2F3yx69%2F9RAiEA%2F0mnqt5NSCMFwIg8LRLCg%2BfmE%2Bsq%2FB49NfRe9z8lxVcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ4uVFs%2FEuMS0JmLircA%2FUCZ5rQUIu7y4ug6gnhM2ODGCXsNTYR8km6tNigG1jrqtMRyH3mGUIuzValsRAe9%2FVqigw7Sv%2BCaPJKA7A4ziZpgEGh5LgDlBrf2KJEBkOhPAoD4EwM9FsMDGUx8i8Su1EIj3h8BbQjHqr9ItMOx9Pa7R4u7xRIRbBJiHZUiZhV%2BeCQvFUGCpWW9X6bwD5y5fZhJJDGsA%2FXSWtt37a51utDRORyJLtEyG7CYiURqtLw75ZJw0rsD2%2FYWCLa1iPR8dXI5PxeoJ9DAuGRkbeO1iCYzZeJmyVJ8L2fyD2vSVnL1dxFREaRD9HN82iJJEgKlXs1msqVrEkP7Ma4NG32GxqmDzg8Z05%2BGnsRc%2B6bM1q100w8EinQ57CL9svB%2Bm8Tszy2PrVutzvFf8SHmQFrD3wkxh9a0ScWu9mUfUvZwY5c5TWvqSezojdkIPnlvQA1y3oW0fKdWNg364gtJsFEf1FREYIC0wi6ZYbWLAmnQX8Kvqv1fNTCdEcmBAe94nRvla1OGJZH198KVatEreRuRmVHlf93NDug2435I%2B0SmvdbjfHOjFDnCBFgUthEYD6uk6oroYKIOOZk7ejHvhs5HXBfV7FMWOgar2l9RpfAoP5yx%2FQ8b6qp5ADCAgZRMIGR87wGOqUBDhC1SmDh2hbxKLdpnDyaySSAOfS6SVr9Blz%2Bci9kuPPfibIZxh3RgYmlc5iaxMrmPBdFI7OWv7UEay5znZ4admU37Q0c%2FrL%2BIaCivSYe2vMNkrtAaTQzM%2BREFmPPl0pDLsCYP1YQ%2FkQfJd7GOGf9r736REPu%2BLBJ3q1ZW9MRzg839ebPGWEiNPk1AYtk%2BpOLq9p77WHxxV%2BXfs9nouOjI3WnlEVq&X-Amz-Signature=f036293d73daf04e1531ae1281b53894855fd9c3f807446182a09416212a4250&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
