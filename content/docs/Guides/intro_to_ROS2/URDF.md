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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2N5LPV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEvkKlyleReUuNreajNjcIZUhYYbSdifJckf3AgSeYUAiBkgMPqwbUSLfXN9FFs3HF1LZK%2Bg206eFMiP9dxaERxtCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoIIyYssRVk717gTKtwD%2Fn8FFZwABnJwAnbjibKfd9ebPnzcBFapyoCz1es5hK%2Fbv3S%2BCnfyrn1nLS49rokNT8RbTCbk%2ByeQPksoHN0sG3x9QsRfd0GuolSDV22s9%2Foe5aFlhXHA1OLPAcGw%2B%2BxrZ%2FvOloG%2BijGP4NN9mcWn2wuVyHN%2BwzMkZsOvW9%2F0qswj6TxwWKvxUbZPWplW87fFc3PpuE3oKqe%2FPZoAOFxnO%2FM802jfFZkEI1nwxR4cCZy%2BrPJZ1qHE9KRvr1swHo9PUJ692MQOOQIxL%2BoFDZppS0TU3fDRqw8Jb0PyZbtkP%2BIKejMUcAv03MmamybBIuVavEq9oE8XOjwxHhBhkpYaMqq%2FFuaDs8%2F%2BdCIMsJT%2FvTWHcXIcMB%2B5cq2dwq1ccz6rkvGbbwaopedhm%2Fw9lbfXkaDzS9L%2Fslda81f43i6MqXZqdFSIqG9BRLokcVR2PwAeSg86C2nrlvqwu3D%2FDyZ4t9TPPtqOBg3YmVOUheyX7SBMmPtPv3SrBOjks5aPJi9JeDqnDyQvSnjtqAV%2FIlZ%2BC6emVeqrjODzCLtYXwD4wVoJhq610zUe4Q3zdb2hiPe1A0gq%2B%2FwanJOm3ClX8E6Q1fKrosq%2F1xqZcqrXB4g4uLutQ8lcX%2B%2FlXTftASswq5juvAY6pgH6wE6zxKwPPWvRQqesyw7CZrxn6qk8lyboeOYFrrfxynJ7dPlhnDMrxnRD4tlMEMh8S4boPg7re78f4wnj2Q9aFTZGpUhydMcXa4O9WxX%2FQd1j0%2BRWSKO2%2Fb2gzNDsqM6tV%2Fm%2FmCjDlg99C27%2By4WJ6w6Ce47p4%2FoPVmWxYHQcDQ2x3mA54drFy1if0GrKvAvvHUF7g8igayIoKGsQqxnejXiykX%2FU&X-Amz-Signature=454b06dfe7569e3f589d4229f7c3f62a4fe8f56e60812d37f3a978cb9e04356a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2N5LPV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEvkKlyleReUuNreajNjcIZUhYYbSdifJckf3AgSeYUAiBkgMPqwbUSLfXN9FFs3HF1LZK%2Bg206eFMiP9dxaERxtCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoIIyYssRVk717gTKtwD%2Fn8FFZwABnJwAnbjibKfd9ebPnzcBFapyoCz1es5hK%2Fbv3S%2BCnfyrn1nLS49rokNT8RbTCbk%2ByeQPksoHN0sG3x9QsRfd0GuolSDV22s9%2Foe5aFlhXHA1OLPAcGw%2B%2BxrZ%2FvOloG%2BijGP4NN9mcWn2wuVyHN%2BwzMkZsOvW9%2F0qswj6TxwWKvxUbZPWplW87fFc3PpuE3oKqe%2FPZoAOFxnO%2FM802jfFZkEI1nwxR4cCZy%2BrPJZ1qHE9KRvr1swHo9PUJ692MQOOQIxL%2BoFDZppS0TU3fDRqw8Jb0PyZbtkP%2BIKejMUcAv03MmamybBIuVavEq9oE8XOjwxHhBhkpYaMqq%2FFuaDs8%2F%2BdCIMsJT%2FvTWHcXIcMB%2B5cq2dwq1ccz6rkvGbbwaopedhm%2Fw9lbfXkaDzS9L%2Fslda81f43i6MqXZqdFSIqG9BRLokcVR2PwAeSg86C2nrlvqwu3D%2FDyZ4t9TPPtqOBg3YmVOUheyX7SBMmPtPv3SrBOjks5aPJi9JeDqnDyQvSnjtqAV%2FIlZ%2BC6emVeqrjODzCLtYXwD4wVoJhq610zUe4Q3zdb2hiPe1A0gq%2B%2FwanJOm3ClX8E6Q1fKrosq%2F1xqZcqrXB4g4uLutQ8lcX%2B%2FlXTftASswq5juvAY6pgH6wE6zxKwPPWvRQqesyw7CZrxn6qk8lyboeOYFrrfxynJ7dPlhnDMrxnRD4tlMEMh8S4boPg7re78f4wnj2Q9aFTZGpUhydMcXa4O9WxX%2FQd1j0%2BRWSKO2%2Fb2gzNDsqM6tV%2Fm%2FmCjDlg99C27%2By4WJ6w6Ce47p4%2FoPVmWxYHQcDQ2x3mA54drFy1if0GrKvAvvHUF7g8igayIoKGsQqxnejXiykX%2FU&X-Amz-Signature=e3bd56431d8506039ef0f6503a82aac0498222839ad31ea59fb14cf4c5860a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
