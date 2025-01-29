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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIKQ22K%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd3b3E5vDVcVPuFDiViwm7rTI3Feu66cuqn6FoIlb%2BMgIhAI0plf3eFHHbCFiheuQgJyQdAQj1LbYB6Oih5q9Ulm9xKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCcVkRsxJmuTdlipcq3AMyJ0WxoaIE9t4322ujbb67E4m6aVSKfS5dCHA81Y7T1LYaibaaVJm9hKNCDhqbWXd5ieeG%2FbllK7UIz4neKCxGCQb5AlwOCpGize4m3lBjnWeax0LW0RevRzmfVXGe6aj5N67FoTX2DGOXDD6m9Uv0hYefQSJR7npD42RKPPVO6KIgBVSoeYntAcKEeOv4Po%2FqKPFKhRXnUhcqseLJYHxW4yS75Av0BotmzDvNZ21pCPDjI4wB34nFaHV%2FNHei94b4b%2BI0H10LRuLo0HGXulmUyOTnQBISIoqPbuwClmTM1FIApkd5kcYPXzL6iGS0hcCWsInhvs7szRdX7gfbe85AQSp%2FY%2FCAr0seHALJYdBPl1%2B%2FWzPLVjpOkN1exwqSrK8KG%2FrSl0JsnvC0f6aJic3I6jnhtcDBFUAW92kjzqxTMigM646VUQLx4mYDShFxHVslnUJQfGGbFzU9mO4c%2FTOkhRBeP%2F2uVQba70NamsHpCZP7qoDttolNelgfpULEYWvtNceYd0ITMeqmW8d0vv4hcQXve%2BNi7cl1%2BPaGuh6m3nAejT7B%2FHz13qVMGFYTc9vK%2F8k7v3K%2B2hIoeaqyCaZ%2FkfA9pcmIlffkeY25XN%2FdyaSZZ1AVGU3wGb3Y%2FDDShem8BjqkAcqfEP6NJdIs0W%2FMw5d8Z53Bf%2BUGFZIzwjDxkqtUPV79v1A4Efpu%2FG7tJyOXs1XaokV7czxdU596eRsrHSTO5Z0oTwGvfUYdZSqfSqZkVuEJRhusZngz37u6pU5PUKGr0BMxj15tQL%2FfVex2Jty9k2pnhFo6xjgUPjGPpsDh4HBLHTUNixfrz4MBNZY5LZRBlb2WFRrIgSXiAHje%2BCpZLTZ9vDyS&X-Amz-Signature=4d28d2ce296745ef6c2671b17bf26fc6c8e2698b7ca092e4b2af4e531f58b3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIKQ22K%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd3b3E5vDVcVPuFDiViwm7rTI3Feu66cuqn6FoIlb%2BMgIhAI0plf3eFHHbCFiheuQgJyQdAQj1LbYB6Oih5q9Ulm9xKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCcVkRsxJmuTdlipcq3AMyJ0WxoaIE9t4322ujbb67E4m6aVSKfS5dCHA81Y7T1LYaibaaVJm9hKNCDhqbWXd5ieeG%2FbllK7UIz4neKCxGCQb5AlwOCpGize4m3lBjnWeax0LW0RevRzmfVXGe6aj5N67FoTX2DGOXDD6m9Uv0hYefQSJR7npD42RKPPVO6KIgBVSoeYntAcKEeOv4Po%2FqKPFKhRXnUhcqseLJYHxW4yS75Av0BotmzDvNZ21pCPDjI4wB34nFaHV%2FNHei94b4b%2BI0H10LRuLo0HGXulmUyOTnQBISIoqPbuwClmTM1FIApkd5kcYPXzL6iGS0hcCWsInhvs7szRdX7gfbe85AQSp%2FY%2FCAr0seHALJYdBPl1%2B%2FWzPLVjpOkN1exwqSrK8KG%2FrSl0JsnvC0f6aJic3I6jnhtcDBFUAW92kjzqxTMigM646VUQLx4mYDShFxHVslnUJQfGGbFzU9mO4c%2FTOkhRBeP%2F2uVQba70NamsHpCZP7qoDttolNelgfpULEYWvtNceYd0ITMeqmW8d0vv4hcQXve%2BNi7cl1%2BPaGuh6m3nAejT7B%2FHz13qVMGFYTc9vK%2F8k7v3K%2B2hIoeaqyCaZ%2FkfA9pcmIlffkeY25XN%2FdyaSZZ1AVGU3wGb3Y%2FDDShem8BjqkAcqfEP6NJdIs0W%2FMw5d8Z53Bf%2BUGFZIzwjDxkqtUPV79v1A4Efpu%2FG7tJyOXs1XaokV7czxdU596eRsrHSTO5Z0oTwGvfUYdZSqfSqZkVuEJRhusZngz37u6pU5PUKGr0BMxj15tQL%2FfVex2Jty9k2pnhFo6xjgUPjGPpsDh4HBLHTUNixfrz4MBNZY5LZRBlb2WFRrIgSXiAHje%2BCpZLTZ9vDyS&X-Amz-Signature=9f67a2335cea1f201ae37d33c5a580814a9437f7fa5ad683ce828709d41aa8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
