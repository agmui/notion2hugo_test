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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFXYYN5J%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIArpdWUZ5uDxIyr%2BeJxixnd8lJYHOyk3D1zbpbs%2FJBG1AiB37JG%2BjpGhkFutAprdnS4eDD5IK%2FjBcga5iFnWvf%2FYNiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJm%2BbzJRJy%2BzK2vVRKtwDo%2BS1757lhdIbt4JB8RIitsejiQloWWbnMglc1nMuNC7BEDR8sR8ePNlckhPpf%2BViHoNVDTRcNbf5TktGmrSq9YaMuwQ5Y%2BYc%2B4nD99TZvOVNmk4faiY3xCs2RH7Hvct8sfI%2BkAGIPEq%2BDdVphp2%2FztxKXE%2F2lkAYhDL%2FoBAKeZa26N2qsjW%2BSZSTaRhCouHPMPgwa4wgJV8YjPPpWjRD0V%2Bs0V4yAKCPogSz4g5ZxpPzdKGTwKoolsQ6vF3MrqHvnb9LGCCZ%2BaYLZSmyvBcnmhsRHCL0okmLZYtIdi6MBHy88HWBIyC45iNg0QXH7FFpHJr1PNuYzus5I2wksWUSc%2BYcku%2BpEWyWT1rBg94dqB7FcCC80lBrFPmo0TRJPF3OCwZDrwKkSJm7Ye2lvY5w1cu7Jkwo2ZMCESNu6qe4vvWhIUSKZDlIR8%2FmfPLWWTqBaWC4d5IO%2BKrXyexKcl80ku2OCI2o79zBM8kypN5iSiy1FcObLm9UMcYiWCfUttHrx5gB9DTzwkwCJ9jorGYS8qYVTQPS71rtMPx8xCli5fpJVYIoLuNdLZY598KOwPZuFJaGR6RYIq4vTRGh6BCXEFIOsgEGGCq7ET3PeyEi9%2FKe0rzoosNk82ASLScwnurMwAY6pgHcRFKmTOWXWZZjIpmYteqkj1I5JIhDbkRgrSfWEEX2Sfymdz50jTCMapzkDUw%2Bgv%2BJd%2BwLHhl5QDD%2FcgcVWL2L36p4YCeHOdsvNlkiNoTryoApnP2MgMRD%2Fs5GzsEQlFDxPnSPG4OmII3UU%2Fj%2BouW4SscVSw8QfsKrdm%2BNYhvYuBIEAPgJt2DXjJ2pZ0W0bXYooMIKrOaL0kQaL21%2BtIRx4OC3ByXY&X-Amz-Signature=32b3bb7232fabd46f8a2f1f298ab5b9fc79e17c568f8f78d1642ef9772bf934b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFXYYN5J%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIArpdWUZ5uDxIyr%2BeJxixnd8lJYHOyk3D1zbpbs%2FJBG1AiB37JG%2BjpGhkFutAprdnS4eDD5IK%2FjBcga5iFnWvf%2FYNiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJm%2BbzJRJy%2BzK2vVRKtwDo%2BS1757lhdIbt4JB8RIitsejiQloWWbnMglc1nMuNC7BEDR8sR8ePNlckhPpf%2BViHoNVDTRcNbf5TktGmrSq9YaMuwQ5Y%2BYc%2B4nD99TZvOVNmk4faiY3xCs2RH7Hvct8sfI%2BkAGIPEq%2BDdVphp2%2FztxKXE%2F2lkAYhDL%2FoBAKeZa26N2qsjW%2BSZSTaRhCouHPMPgwa4wgJV8YjPPpWjRD0V%2Bs0V4yAKCPogSz4g5ZxpPzdKGTwKoolsQ6vF3MrqHvnb9LGCCZ%2BaYLZSmyvBcnmhsRHCL0okmLZYtIdi6MBHy88HWBIyC45iNg0QXH7FFpHJr1PNuYzus5I2wksWUSc%2BYcku%2BpEWyWT1rBg94dqB7FcCC80lBrFPmo0TRJPF3OCwZDrwKkSJm7Ye2lvY5w1cu7Jkwo2ZMCESNu6qe4vvWhIUSKZDlIR8%2FmfPLWWTqBaWC4d5IO%2BKrXyexKcl80ku2OCI2o79zBM8kypN5iSiy1FcObLm9UMcYiWCfUttHrx5gB9DTzwkwCJ9jorGYS8qYVTQPS71rtMPx8xCli5fpJVYIoLuNdLZY598KOwPZuFJaGR6RYIq4vTRGh6BCXEFIOsgEGGCq7ET3PeyEi9%2FKe0rzoosNk82ASLScwnurMwAY6pgHcRFKmTOWXWZZjIpmYteqkj1I5JIhDbkRgrSfWEEX2Sfymdz50jTCMapzkDUw%2Bgv%2BJd%2BwLHhl5QDD%2FcgcVWL2L36p4YCeHOdsvNlkiNoTryoApnP2MgMRD%2Fs5GzsEQlFDxPnSPG4OmII3UU%2Fj%2BouW4SscVSw8QfsKrdm%2BNYhvYuBIEAPgJt2DXjJ2pZ0W0bXYooMIKrOaL0kQaL21%2BtIRx4OC3ByXY&X-Amz-Signature=c258725cc221b735a18bce718a14256baebecacd0e26e290dec8d57b69ccc11d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
