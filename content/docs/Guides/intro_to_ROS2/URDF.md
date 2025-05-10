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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G2EU7F%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJZTGam%2BmcG6lVk83jfKkwfIgwgqymeN%2BP1eT7qjLtFgIgR9%2F2i4LTyVsPOHQxuxXLeJU51WLc%2BfFcSei8SZHgQNQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcXLgNMmOybikloryrcA%2BcIvTnHzYHojiJHWwAVRSPuTR3ivbI%2FQ3qZS2%2BZPl4LDMo9Z%2FXm7AgVBHmEloQiYM1aASDX58Gtx6gxxyp3ABvGRug8X6f8TERV297aCmdnoXqOKHxHyAgndYPwGxEYEHkWdXhX4a7pQqFKMCeztIYTkOZwefcse7WUxmivo0fvzXjB%2BXpRJX3lohWDXVcw4cqPi1NYqLcoPchudrhQG7YKPZmyQDVhYPa67T6g8dI6tXSWwK2uK3GQzj4%2FWWZ%2BuR%2BIDuJiVq%2Fz6SIqeL5L%2F0rowZ1cK5WacfBxA4HV9iWGJYCNIpauPRxhj%2BgrwESGgAZUbXe50az%2FwcYVZhBYoa41bhudua780PKCu1wyudJGx40779AvJu54m%2FHHjp9alt3FNB20aIumMtN4ljqRcMqcv%2FVvIsxO5cjUYqmdaRATfGX6seFh3bQC7A6cVaQQWKc2SfOq7NUvEQ5o%2BjGm3ZcZYR55648TqgVdAQz3a%2FJu1GnZgGXlohyrlP2Hfk6zCrFPwTYFFFAYWSScoVq9YpaLWyoWzLxhc1FzDgtl5Sd3Hit3BjinDgJjlKg2n1p%2FEwsjGIrmRBq0pZaw4bRTdj76iibdzbOxs%2FyqQWdfG7V3ImtEjnT%2FY8RejyzpMIq7%2B8AGOqUBHuSWiy367Y%2FFasvCk%2B9E0POtoZPANAyqsD4rkxEyX%2FgcLjEXuW%2FzCGllyda5UFBTLFrwHWrw4gVjhldtrS88K%2FqkqfqdY%2B4nzXvThJLy%2FrVysG%2BrYJBEACph7L9nLK23U4SdxyEvcHp0iu7qX6SCgbCvXY0ahSyGIGrQTfD8DQDIcHjHLys87j%2F8QLC35rnI0KRTFVMTjJfNuRFPEmPx47CORj1D&X-Amz-Signature=671b4b53447a7e6e5589d0b6db16081bbe4512648af9119ee5027cf44f289b35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G2EU7F%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJZTGam%2BmcG6lVk83jfKkwfIgwgqymeN%2BP1eT7qjLtFgIgR9%2F2i4LTyVsPOHQxuxXLeJU51WLc%2BfFcSei8SZHgQNQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcXLgNMmOybikloryrcA%2BcIvTnHzYHojiJHWwAVRSPuTR3ivbI%2FQ3qZS2%2BZPl4LDMo9Z%2FXm7AgVBHmEloQiYM1aASDX58Gtx6gxxyp3ABvGRug8X6f8TERV297aCmdnoXqOKHxHyAgndYPwGxEYEHkWdXhX4a7pQqFKMCeztIYTkOZwefcse7WUxmivo0fvzXjB%2BXpRJX3lohWDXVcw4cqPi1NYqLcoPchudrhQG7YKPZmyQDVhYPa67T6g8dI6tXSWwK2uK3GQzj4%2FWWZ%2BuR%2BIDuJiVq%2Fz6SIqeL5L%2F0rowZ1cK5WacfBxA4HV9iWGJYCNIpauPRxhj%2BgrwESGgAZUbXe50az%2FwcYVZhBYoa41bhudua780PKCu1wyudJGx40779AvJu54m%2FHHjp9alt3FNB20aIumMtN4ljqRcMqcv%2FVvIsxO5cjUYqmdaRATfGX6seFh3bQC7A6cVaQQWKc2SfOq7NUvEQ5o%2BjGm3ZcZYR55648TqgVdAQz3a%2FJu1GnZgGXlohyrlP2Hfk6zCrFPwTYFFFAYWSScoVq9YpaLWyoWzLxhc1FzDgtl5Sd3Hit3BjinDgJjlKg2n1p%2FEwsjGIrmRBq0pZaw4bRTdj76iibdzbOxs%2FyqQWdfG7V3ImtEjnT%2FY8RejyzpMIq7%2B8AGOqUBHuSWiy367Y%2FFasvCk%2B9E0POtoZPANAyqsD4rkxEyX%2FgcLjEXuW%2FzCGllyda5UFBTLFrwHWrw4gVjhldtrS88K%2FqkqfqdY%2B4nzXvThJLy%2FrVysG%2BrYJBEACph7L9nLK23U4SdxyEvcHp0iu7qX6SCgbCvXY0ahSyGIGrQTfD8DQDIcHjHLys87j%2F8QLC35rnI0KRTFVMTjJfNuRFPEmPx47CORj1D&X-Amz-Signature=da2b1897b03fb80b941e4bd4cb3bde658615f48ba01f9ddf6ee939f3887ec95a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
