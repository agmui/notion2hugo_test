---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPZCAO2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDAGWdSRrp4XjN%2B0UykWS%2BEwxUc3naI2QT5DDGo2cgqpAIhAMvwtQMFnNLINVxMZ70HWycsJFoWZx1fnKiVFkeDFAptKv8DCDMQABoMNjM3NDIzMTgzODA1Igzc9hZRcojIjmSZJSMq3APKTBErCdbmAk%2BgFTitisdRpQMc1lInEOi1i22SLQ0sUsOx5RUm63sfurHG%2FYL5tCShMThGR3MM9H%2BlkCUYUbw%2BYZ5iiPG7PUc1lyl7zxaFdojDGBKePE1e857NRk1geDx5akYIAmB3TPgGWduMdXOUQux8zywN6b47IIc7a%2Bi1CRnfV%2FpglNAYIaVa8LsHLe6Gy2O2xQPBnJcd%2BJvj0g0vVpOKml%2BnUyqcsjD1jFygq4ilqrboYy62QLLy%2B32Al2kekk8Z9duHKcnR2ok1AYcaWOJKBHyFLhjq7LMzI0xrkHbmrAuDWyjnqS8B5Y%2FIEdFUXGifEJofUtRxp%2FGtOZ71mClkRxsjXz6V4fxjmE%2FZIV%2Bzu6QDcdJfQpvPPMINPiXMx258wRFwy3B5IiebXNsFnXNADBbb5fGWhKmbERiwwSuAU5zX%2BHS1dcjMfIu5oQ0oOfGzqQ5XKDYpnIFJT6QDTFkfnylkG0k%2B%2FKesFuqAfh5etSwJ1Oz5CZy8M9TTleito2Kbj7JP5zxjnaVb7yVXhM36rJj1%2BicFdjvHnN5HjXXThjE5RnmnL%2FzP%2FQPGlE8yUnBXegpA5oz7rD20dkO5GIIhxiq0Z%2BjIJ51uwxpZi55sbRTeQzgbXoKc6TC0yazOBjqkAWmMWjzPHgFhdOtbU7nm4yQQkWWvV3ulhe%2FzYwYQrA7vgVLIpVzBr1WfhIVczZOoubpHW2DTqYDP05h5odVlJWZq1rTIV2n7jcHxYR53RAPo7yA8w9EDm39OsTcjp7PX6weVyXDr6jmmgAse%2BTOPs%2BB%2BPlxrYkrmcPKXPUGF%2FEKblevbbbm2VlGzh5jCVjA8H6MfhSkUSLS51D25GRs2EQ8OKGsr&X-Amz-Signature=5cb9a73075d54e92a57287dee1b5bbbdcf5a8c53af1c60331e83e8b8f3a01ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPZCAO2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDAGWdSRrp4XjN%2B0UykWS%2BEwxUc3naI2QT5DDGo2cgqpAIhAMvwtQMFnNLINVxMZ70HWycsJFoWZx1fnKiVFkeDFAptKv8DCDMQABoMNjM3NDIzMTgzODA1Igzc9hZRcojIjmSZJSMq3APKTBErCdbmAk%2BgFTitisdRpQMc1lInEOi1i22SLQ0sUsOx5RUm63sfurHG%2FYL5tCShMThGR3MM9H%2BlkCUYUbw%2BYZ5iiPG7PUc1lyl7zxaFdojDGBKePE1e857NRk1geDx5akYIAmB3TPgGWduMdXOUQux8zywN6b47IIc7a%2Bi1CRnfV%2FpglNAYIaVa8LsHLe6Gy2O2xQPBnJcd%2BJvj0g0vVpOKml%2BnUyqcsjD1jFygq4ilqrboYy62QLLy%2B32Al2kekk8Z9duHKcnR2ok1AYcaWOJKBHyFLhjq7LMzI0xrkHbmrAuDWyjnqS8B5Y%2FIEdFUXGifEJofUtRxp%2FGtOZ71mClkRxsjXz6V4fxjmE%2FZIV%2Bzu6QDcdJfQpvPPMINPiXMx258wRFwy3B5IiebXNsFnXNADBbb5fGWhKmbERiwwSuAU5zX%2BHS1dcjMfIu5oQ0oOfGzqQ5XKDYpnIFJT6QDTFkfnylkG0k%2B%2FKesFuqAfh5etSwJ1Oz5CZy8M9TTleito2Kbj7JP5zxjnaVb7yVXhM36rJj1%2BicFdjvHnN5HjXXThjE5RnmnL%2FzP%2FQPGlE8yUnBXegpA5oz7rD20dkO5GIIhxiq0Z%2BjIJ51uwxpZi55sbRTeQzgbXoKc6TC0yazOBjqkAWmMWjzPHgFhdOtbU7nm4yQQkWWvV3ulhe%2FzYwYQrA7vgVLIpVzBr1WfhIVczZOoubpHW2DTqYDP05h5odVlJWZq1rTIV2n7jcHxYR53RAPo7yA8w9EDm39OsTcjp7PX6weVyXDr6jmmgAse%2BTOPs%2BB%2BPlxrYkrmcPKXPUGF%2FEKblevbbbm2VlGzh5jCVjA8H6MfhSkUSLS51D25GRs2EQ8OKGsr&X-Amz-Signature=260de45ff0ad5a601dd6f634d0368417fad0acb6dd67b6dd4b20f79e9595c1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
