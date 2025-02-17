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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YB4X3C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvdlYk4vCVU7LSJQGHUNwCssxdgyu9aJNMio%2Fjnd3q5QIgJ86eGvt2RMoYBF4MByQJX%2BriKP8pmoSBX0kAm%2BT8Hj4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHe4sM1XLpPDhF%2FZ5ircA8qzxpgPdhF6am6cxnd8eg5hYsKAjI8Ld4VKdFVTmM2PnbxydsDzY5gZX5jFbbmMcWsMlo9KqWGae6FwdN2DFjz6bk%2BfXfMcdL5iablCbcYZlq%2Bp5VSu9DVuBwIQ3PIEO%2BF8DfYxzznQ894nzvQs5R7ekv9IRrYPh03XovZ7Ajj7fbyiGg3B6Ai5RscMlfRSgJD0yDvvT200o47Vxz%2FxDQ%2BtM2GLTVbiXAoU7q1bY7TqivblDN%2Bjq%2BwV0jOp5RX876JPlnmeDhwF89SI638H0qkNh%2FJnprFQgA%2FKIQdeczMUnYrc0B0r1QBdWNfuhiiWz10clCV9%2FG%2FtsPe1x7JXg0TGF%2FXnLdWvNoAeApmevILUMYS3PM%2F%2BJftwKFFSKieyLkyexeKqhzvwL4v0JnuJ%2BGA8PPcaMaAW%2BnR4EHVSQOqehxOHHRMOeYr1d0F2lxIUpi6au7GVXEDz9U2VlhnA%2BiEm1nLD4FAybuN2zIV3ChXU8%2FmktrnNsLESZErN7m3QmHzeGjhFNZ4rXb2mEdJFhDRgR8AMgAqpHtTykbFCe9ue7jJ2RhOKinvOpEWbT9MZvxTNL9G9rVbTI1GRTXnDYIE9bVgHci8T4%2FqMMHFq52TTlUex%2FgcbQg3eGk1XMPrJyr0GOqUB2czZlqgii7X1a9lxdCNbPidQUHywxFzaHbL%2F1rEC2dOq06azsn3TEb7hTxS4%2B97l82ZFlVkufdbYbxnI3DmVRD5eh9e%2FQWOJqDY3q0D%2BPWQFj%2FarDJI9fK7nDe7aEj0N9px0mwEw9dODkVPFGWiQE321epqpYHuwAvC9v9zV9oxbvqUvrb2YpIL74%2BsFQt2oMtLQ6OftNrpsfVp6%2BfSYd2grVTUj&X-Amz-Signature=87b00194af6519d7471f467d1b962054fcc649e37d28dd6cd52d939b8ccf26b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4YB4X3C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDvdlYk4vCVU7LSJQGHUNwCssxdgyu9aJNMio%2Fjnd3q5QIgJ86eGvt2RMoYBF4MByQJX%2BriKP8pmoSBX0kAm%2BT8Hj4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHe4sM1XLpPDhF%2FZ5ircA8qzxpgPdhF6am6cxnd8eg5hYsKAjI8Ld4VKdFVTmM2PnbxydsDzY5gZX5jFbbmMcWsMlo9KqWGae6FwdN2DFjz6bk%2BfXfMcdL5iablCbcYZlq%2Bp5VSu9DVuBwIQ3PIEO%2BF8DfYxzznQ894nzvQs5R7ekv9IRrYPh03XovZ7Ajj7fbyiGg3B6Ai5RscMlfRSgJD0yDvvT200o47Vxz%2FxDQ%2BtM2GLTVbiXAoU7q1bY7TqivblDN%2Bjq%2BwV0jOp5RX876JPlnmeDhwF89SI638H0qkNh%2FJnprFQgA%2FKIQdeczMUnYrc0B0r1QBdWNfuhiiWz10clCV9%2FG%2FtsPe1x7JXg0TGF%2FXnLdWvNoAeApmevILUMYS3PM%2F%2BJftwKFFSKieyLkyexeKqhzvwL4v0JnuJ%2BGA8PPcaMaAW%2BnR4EHVSQOqehxOHHRMOeYr1d0F2lxIUpi6au7GVXEDz9U2VlhnA%2BiEm1nLD4FAybuN2zIV3ChXU8%2FmktrnNsLESZErN7m3QmHzeGjhFNZ4rXb2mEdJFhDRgR8AMgAqpHtTykbFCe9ue7jJ2RhOKinvOpEWbT9MZvxTNL9G9rVbTI1GRTXnDYIE9bVgHci8T4%2FqMMHFq52TTlUex%2FgcbQg3eGk1XMPrJyr0GOqUB2czZlqgii7X1a9lxdCNbPidQUHywxFzaHbL%2F1rEC2dOq06azsn3TEb7hTxS4%2B97l82ZFlVkufdbYbxnI3DmVRD5eh9e%2FQWOJqDY3q0D%2BPWQFj%2FarDJI9fK7nDe7aEj0N9px0mwEw9dODkVPFGWiQE321epqpYHuwAvC9v9zV9oxbvqUvrb2YpIL74%2BsFQt2oMtLQ6OftNrpsfVp6%2BfSYd2grVTUj&X-Amz-Signature=a5b653eec3636dc31df78441d0ad97bfb0603a7c6b63ba6466b34eacc45e83b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
