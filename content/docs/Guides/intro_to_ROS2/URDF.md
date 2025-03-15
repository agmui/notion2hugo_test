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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WFPICHX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfniVvsSkOw3JSCorzo03CDKpW2xpYm90Du62Tsl26iAiEA7apBdgSar%2FeiesVzmFvLtkNauWBSb758kChwtBz7t48q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKiz8kAUai7t7oPEqircA4Frhgz12yX486rofxEU3ztyWA%2FCf%2By8bWa86KrqhvcCJrsx5UXBM0xIq2RvPySQS7D6IayuU9H5cbw1j1BfNfVNhEAZQyKxEE7WT0X3eja6SozZ64DtDhdRLkoRWP49qNdPEzTXqmOZ9Ra5B74OEIRnn0rnI6xm7encT1%2FBgptx4pDqrqxh12hlpAGLA3CUAWDh5qpKDfJAxn2cveyqE57in4q2GKEMVf%2Fqt1Gyrk6GsFbi2c%2FHnnZ%2BoOYDeO3ScwZBh%2Bf3%2BmXCsDfYdZueGQVKDYFBZtxQ94CHZzW%2FgZRXLVrTOJoasj%2FkNnSrGj5vFXBYQFqsYEY2Vtr7lHE3%2FFeOp6lKfCpDzWojzHX%2BeciVOr%2FmeW8quYxRCjX2mP751cFNu8VyGHXncA0b4urFNRnXkOl8X0%2By458Q36MkP%2FfENYv2mm8Pv0de%2Bb2nve3fBAugiQ4LEZ%2B3il6wq92u6qChVJDFVjiuMI8hzcK%2Be6TRG3wXP82qu7TrSOlHmjDgogUG7SKPRDMOJI2lzjg0Aq%2BfEDBztu5Mo7PMyq3Yycc%2Fqn8TGaVJR9VGcFzjWYLNiflw7znaHLC94DO%2F2dJhBRPmVt1uoF1%2F1K5iJiZZzhJOb5j2yCMmfyp7QGKuMIPv1b4GOqUBIxuLZ25qZsSO%2FejJ%2BlXT75wshNEU7uPfFYCBScfO8etmZrEYXi3JSx0DW1RX9b%2FMKHJCl9VHHLK2cOeTA4aVIKZsmXBZXFHWetEWXC4FF5DMnG3azSFmapa99I3EVQUXACR%2Bbbv9u8mrTkavpSnqIDI9%2FC5%2Bww7uWhlkyrQ9wlkS0XBKIvXjmbldbaNdLqmw2TFnLnbEVUsyeA4DbHstu%2Fwanr0d&X-Amz-Signature=5d14047fdbd491946e223681f48b4a2120b6b915f573e936a9f1d3cac37fbbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WFPICHX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfniVvsSkOw3JSCorzo03CDKpW2xpYm90Du62Tsl26iAiEA7apBdgSar%2FeiesVzmFvLtkNauWBSb758kChwtBz7t48q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKiz8kAUai7t7oPEqircA4Frhgz12yX486rofxEU3ztyWA%2FCf%2By8bWa86KrqhvcCJrsx5UXBM0xIq2RvPySQS7D6IayuU9H5cbw1j1BfNfVNhEAZQyKxEE7WT0X3eja6SozZ64DtDhdRLkoRWP49qNdPEzTXqmOZ9Ra5B74OEIRnn0rnI6xm7encT1%2FBgptx4pDqrqxh12hlpAGLA3CUAWDh5qpKDfJAxn2cveyqE57in4q2GKEMVf%2Fqt1Gyrk6GsFbi2c%2FHnnZ%2BoOYDeO3ScwZBh%2Bf3%2BmXCsDfYdZueGQVKDYFBZtxQ94CHZzW%2FgZRXLVrTOJoasj%2FkNnSrGj5vFXBYQFqsYEY2Vtr7lHE3%2FFeOp6lKfCpDzWojzHX%2BeciVOr%2FmeW8quYxRCjX2mP751cFNu8VyGHXncA0b4urFNRnXkOl8X0%2By458Q36MkP%2FfENYv2mm8Pv0de%2Bb2nve3fBAugiQ4LEZ%2B3il6wq92u6qChVJDFVjiuMI8hzcK%2Be6TRG3wXP82qu7TrSOlHmjDgogUG7SKPRDMOJI2lzjg0Aq%2BfEDBztu5Mo7PMyq3Yycc%2Fqn8TGaVJR9VGcFzjWYLNiflw7znaHLC94DO%2F2dJhBRPmVt1uoF1%2F1K5iJiZZzhJOb5j2yCMmfyp7QGKuMIPv1b4GOqUBIxuLZ25qZsSO%2FejJ%2BlXT75wshNEU7uPfFYCBScfO8etmZrEYXi3JSx0DW1RX9b%2FMKHJCl9VHHLK2cOeTA4aVIKZsmXBZXFHWetEWXC4FF5DMnG3azSFmapa99I3EVQUXACR%2Bbbv9u8mrTkavpSnqIDI9%2FC5%2Bww7uWhlkyrQ9wlkS0XBKIvXjmbldbaNdLqmw2TFnLnbEVUsyeA4DbHstu%2Fwanr0d&X-Amz-Signature=222948db5de44ee461c2b176b4c210e9ac7b08d428b2786d95cebc57760e3d97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
