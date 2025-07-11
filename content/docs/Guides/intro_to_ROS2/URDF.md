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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=25463464d6e1bf1ff8f6d6c400a594f6b899b1974dd239e437a709d297bbc54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSE2W4KH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyK7RAst5eqo7qRbNTKeYoJeADf%2Fn5EmmePVcAxuvdQIga6e%2BtQ%2BHTMmAbI8t2xGzYE3ClChEpLX2TZUQU8a6X7YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FDeuS%2BCV%2BHvu7xASrcA7hpVEElO4%2FuyvYlf9bcmPcRiMChclqxGYM0Tmc45z5kHPhKib%2FuZt9eH%2FqmrDgxGakIb2O%2Fl6nd35wpPTm4zOByGKk%2FSLD%2BNVWOpsX9C4FOEruHJ13p0oGRKYswqXD9hiMkQ4MwxNIL%2BHUqbkUyVQeW4rJLj0qnt5XHFSNVaaE2KtxSlCmU4wwhByVO92SZn%2BZNOC3ydiV0bH1tWoQ5vo%2Bn2G0hvHE5SNe%2Fu2LUiRD2U2LZi4%2FJc5peP36iF4O7ywmsya5s6z2jxDaG3%2BrrBF5ElukhqCUgGudkIYDDMbwhmZP%2FadICFvbySFgTISUsJTR2zK1Jj8aby1jqJ1nG9biA48lfDWTQW4g2lI4Pg4oqvpeJkOzCP2BZ80jRi3atBy66ejisW3JzDeRVDqi5Emxk6qWQIHNlPkQPYFbGw4EGTfpoRVlpkZpVUakDR49Rtb86WhVxzzeKQ4bvuixA74pZfnwN1SejNFdxsiUMOjJx5T6pw1HDlkNVeEccdkB8ByWJtGUrb4lAxckrIcytYJPm1y9kXj%2BJtklRTU3wzY0Gd4dydnVriSvxnST9dDJgK5oqgmlcgscH9ViououEx%2FX4SQoqlvT%2BW1XCRn3smlqQ4jSN3J%2FUhqNgIavsMLz%2FxMMGOqUBuq2gHFPvrXPPsV1mJHao1ar3nVEQHzwuPKamKQtFNRJD9WrXKr3ONrlU8mqSB7CaFZ%2Fb2xYOk%2BtcT7tsU27rJTsCIYn%2Fko37xK306ws4eU5MN%2BoN812LLcR3KKoWy2PO%2BaYaYHBrbf7cT5F4qy0WfKR%2FUcSCtKl%2BuLmRl%2B3tFyoPLIUjc7ZK2f8kZS%2FO5EZkdb4zgiTnDFKDsAcZqAsbCLZmwZP6&X-Amz-Signature=6589a2f4642c98d1cec3f4ffb5cffd6fac7f7a12ada480ec531f5d0e2e41d566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
