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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4BC2ZIM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiCti2hv35C%2B%2B6xI0H45RsMrvv1osUoRGMZ8t%2F2cRsrQIgR9KdovYOigrH59gFAvdhua0k9mXjApsGJWQkV9Q%2BLTUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVAZNwYAly7SraLNircA1%2BG8LBBTMfzLa7RSfAWYl5ghdE2rrXFxLD3xQstC3LgsanPtm78gVJjoC8bW5Bk9XGPIGY39jGbWn5l57RdkMmXSDTBOybYGLULqputaw7kCX%2B9h0QXQt7bZsZTIiHeqQ4IOdhm2UpE1mTdqDsslGUeJhqsHnRFDkZ%2FmBUnBZje1rtZ5tdiS7Ibd2uHIuw2B%2FnFYMSols455aSZCmbCo5EccOEG1upKKQA74lYJMQhnGU%2FrNgQtgPbnSxcNe1A6rEaTwbOe34lBVCuYthLNVUxJxlOvfkw%2BfNt50H9J6vFTX0DcKtRrN3gjmPwbCG0HzeMEI2DMhHtYRnVknQ%2FgDmyncmnaGqQyWpT3LHi%2BOTgUAIvi9jaNL6WjHiXaNmUvihjIE%2FSLko4Do5koUJfflxcgBV0N7%2Fisq9owLlHXoTm3DOUHSJQyDxs4dXT2bOAD6zt7VfdtzGpc5G78IphkYo%2FkuRBxEcgf88j4aBS9B9P0fXx%2F4EWW%2BVEMQDs96brpJEhxLfc5VGxSGJ2PRAZTo%2BasFEDWRWiSx%2BaQk6fYfsCmWWv6LYbIAgH%2BArmRXKWbycGnDylsmVjO%2FRRRMfggvcQTjd%2BV9%2Bq%2Bynw5DrUv52YEBCpiu%2F%2FOa5oyKJXEMJ%2Bd470GOqUB6jNEDe679HFf%2FAbblsaUgAyO48u5bs4DRdUHvEta%2FaVnH3Jnk3Cir03vSCdRs0pAsqIl3572kZgnhcTFxlBSGfSfXrbAGgrsrfqJw6vX2TnNSPojrmTKiyAbZ9AWeYZjQLSLvGd70WxhTm7mC7tUTwBetkj8%2Fr4ZO4tMdl6Td%2BX4783qGEaOv8htTaoERoAvN6EPoq9%2FsjRMXT62y3QFGEMFoKmT&X-Amz-Signature=93e49f156cfbdaa346d36b5e5b9b1b5d10ccf92eace653d8db6e5e00c86d1ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4BC2ZIM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiCti2hv35C%2B%2B6xI0H45RsMrvv1osUoRGMZ8t%2F2cRsrQIgR9KdovYOigrH59gFAvdhua0k9mXjApsGJWQkV9Q%2BLTUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVAZNwYAly7SraLNircA1%2BG8LBBTMfzLa7RSfAWYl5ghdE2rrXFxLD3xQstC3LgsanPtm78gVJjoC8bW5Bk9XGPIGY39jGbWn5l57RdkMmXSDTBOybYGLULqputaw7kCX%2B9h0QXQt7bZsZTIiHeqQ4IOdhm2UpE1mTdqDsslGUeJhqsHnRFDkZ%2FmBUnBZje1rtZ5tdiS7Ibd2uHIuw2B%2FnFYMSols455aSZCmbCo5EccOEG1upKKQA74lYJMQhnGU%2FrNgQtgPbnSxcNe1A6rEaTwbOe34lBVCuYthLNVUxJxlOvfkw%2BfNt50H9J6vFTX0DcKtRrN3gjmPwbCG0HzeMEI2DMhHtYRnVknQ%2FgDmyncmnaGqQyWpT3LHi%2BOTgUAIvi9jaNL6WjHiXaNmUvihjIE%2FSLko4Do5koUJfflxcgBV0N7%2Fisq9owLlHXoTm3DOUHSJQyDxs4dXT2bOAD6zt7VfdtzGpc5G78IphkYo%2FkuRBxEcgf88j4aBS9B9P0fXx%2F4EWW%2BVEMQDs96brpJEhxLfc5VGxSGJ2PRAZTo%2BasFEDWRWiSx%2BaQk6fYfsCmWWv6LYbIAgH%2BArmRXKWbycGnDylsmVjO%2FRRRMfggvcQTjd%2BV9%2Bq%2Bynw5DrUv52YEBCpiu%2F%2FOa5oyKJXEMJ%2Bd470GOqUB6jNEDe679HFf%2FAbblsaUgAyO48u5bs4DRdUHvEta%2FaVnH3Jnk3Cir03vSCdRs0pAsqIl3572kZgnhcTFxlBSGfSfXrbAGgrsrfqJw6vX2TnNSPojrmTKiyAbZ9AWeYZjQLSLvGd70WxhTm7mC7tUTwBetkj8%2Fr4ZO4tMdl6Td%2BX4783qGEaOv8htTaoERoAvN6EPoq9%2FsjRMXT62y3QFGEMFoKmT&X-Amz-Signature=db99ccfd07a7503fa905d7e1a9d3e06f678c03f8a29ac6e2b4ee3c6361cdf5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
