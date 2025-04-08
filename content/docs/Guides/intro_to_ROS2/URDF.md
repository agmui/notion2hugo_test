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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQOW3BO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDx6lmSuM93zUHo8%2Fcs3qqOII6ESLHboHBlRSxN72Z3EQIhAM3dn9%2BFC8aKT6gZvo4PRvp7E6B8ItbqmkdIe4xq0ARXKv8DCHwQABoMNjM3NDIzMTgzODA1IgyycAgC0QHFrvLWd0Eq3AOxv55zETqJv8eC%2Bzf3s5sDKVczw9Y7mh3ufO2MeTol4XpBHCkTW77C44hSjEiYuURzd0vPqQILjMsE6asrdd%2FfdcAJum%2FNVBU5yhA6ZGdW5%2BHH5C8VtcUf6yxIKlY160BoGcdjYDz7gssprw%2Br7pvjnEwwzk5Qp6CG0yDno9lokd3wZJvCkNMBwAnre%2BF6EmfQucTF5owcNgdtKbhZy0kEJ7SYEnHqtsnCS2NuUU4qLocX20w6E3tROSMVdgwiCtlsHyoPYu%2BPFUqIVULuZWSy6jQRNLr5IkvfhgVD6%2FB2ZA9Gh2SvrzVio8cwbI%2Fj29%2F3qs0ah8ut9deaslVTaADl1NwkYa5Z4o06xvPRTng1qZs7WxADCnFVvV47muzgXsWrvYPQMRWI8CN%2BFhEBdSErSVui5bJVV5Mo1CCwKw38NvrOF%2B%2BPRtF5ydWHzzTmCTDTtfXQxRgOk4hyWw6Z%2FBrl0bP%2BN9siXcu6OPEAVt5hhC4760twomIieb%2FjfpjOAS147oOzyE1NcwFHCur9hwSwwvYcB8tsnXbYWGez20jeGatlJMZm6wbmWqIQhakjbFdwem3qCcEolB%2FpAsD%2BO5iVzNqX1jiA4rDE0LCC64xQoka1HMu0bofhq1zpLjDz1dW%2FBjqkAZnO88xj7a5b8tmm1jWs7S4BwrJFooWNOXF%2BVeXqCzWltpdEBHUEF2ON9wPkBRDriU%2Bc%2FilK4c9HLS2gPPfYCZtReHQCqw27ZHDFgEaQSuaFwczGwgRwBqBpospNImhd89qFiM5tAnoRHvl13VATXZO5iVV3Jo3DRzlon90YUMOOYqI9%2BtS56nU4HwT1xt%2FAI%2BLED0l9ETeLKMp8%2FVWxCjNrOZa4&X-Amz-Signature=4d2fea108b7a7965e4e0aa2e9d7e4df1d801a12c6630fef18db7031ca5839d77&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQOW3BO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDx6lmSuM93zUHo8%2Fcs3qqOII6ESLHboHBlRSxN72Z3EQIhAM3dn9%2BFC8aKT6gZvo4PRvp7E6B8ItbqmkdIe4xq0ARXKv8DCHwQABoMNjM3NDIzMTgzODA1IgyycAgC0QHFrvLWd0Eq3AOxv55zETqJv8eC%2Bzf3s5sDKVczw9Y7mh3ufO2MeTol4XpBHCkTW77C44hSjEiYuURzd0vPqQILjMsE6asrdd%2FfdcAJum%2FNVBU5yhA6ZGdW5%2BHH5C8VtcUf6yxIKlY160BoGcdjYDz7gssprw%2Br7pvjnEwwzk5Qp6CG0yDno9lokd3wZJvCkNMBwAnre%2BF6EmfQucTF5owcNgdtKbhZy0kEJ7SYEnHqtsnCS2NuUU4qLocX20w6E3tROSMVdgwiCtlsHyoPYu%2BPFUqIVULuZWSy6jQRNLr5IkvfhgVD6%2FB2ZA9Gh2SvrzVio8cwbI%2Fj29%2F3qs0ah8ut9deaslVTaADl1NwkYa5Z4o06xvPRTng1qZs7WxADCnFVvV47muzgXsWrvYPQMRWI8CN%2BFhEBdSErSVui5bJVV5Mo1CCwKw38NvrOF%2B%2BPRtF5ydWHzzTmCTDTtfXQxRgOk4hyWw6Z%2FBrl0bP%2BN9siXcu6OPEAVt5hhC4760twomIieb%2FjfpjOAS147oOzyE1NcwFHCur9hwSwwvYcB8tsnXbYWGez20jeGatlJMZm6wbmWqIQhakjbFdwem3qCcEolB%2FpAsD%2BO5iVzNqX1jiA4rDE0LCC64xQoka1HMu0bofhq1zpLjDz1dW%2FBjqkAZnO88xj7a5b8tmm1jWs7S4BwrJFooWNOXF%2BVeXqCzWltpdEBHUEF2ON9wPkBRDriU%2Bc%2FilK4c9HLS2gPPfYCZtReHQCqw27ZHDFgEaQSuaFwczGwgRwBqBpospNImhd89qFiM5tAnoRHvl13VATXZO5iVV3Jo3DRzlon90YUMOOYqI9%2BtS56nU4HwT1xt%2FAI%2BLED0l9ETeLKMp8%2FVWxCjNrOZa4&X-Amz-Signature=028a5955f38963fb1855c62a087ddda3b3d92f3cbcbc2a033135cfd10ffdbedb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
