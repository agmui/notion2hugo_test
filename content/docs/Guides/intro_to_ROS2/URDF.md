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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HMVK37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCfU49hfACqi2f0mJA7x%2FEyzbg0dV8aOo%2FPya5fsMklkwIhAIg6cip1goWG32QSFt0RLmg1Vr1aeqkMs9WQ%2BAdokHkQKv8DCFEQABoMNjM3NDIzMTgzODA1IgxD10GHN95AQK5k%2Fkcq3ANdCqWVIDcHbCqDuRMSpn0cPXXVxUWn%2FmZQyEtUuMy5Qa3QS8yZ1sokcePvehKpRsTYf45YuyFZTq8v%2FJc03ToGX4aMXfXCDAebI3ADlF3FhJH8hE739Umgd5YAm4vwfKB%2B3srs%2BgJwxmriG7tGjdawy4b%2F4ziHBAkiA9E9zjCjgdu16d%2FlRzC2O8RFtr9pyzW7uikORgdsRjhLm0qzDOkANF%2FF2x8xcr%2FD6DCAZGAvq9w%2F%2FZhtngc1lC4POiEDoSlK2X9Mu2wNzLOmc7j9tRf0kH8ZUy8fvztJyYTK%2F8scpEI5cnQdZa%2BPjK9t4gsRp1P5ZXoFwKkJQf090x6rItrziNGvAT%2B4b5QgCTNnTXdWtpIET%2FDckPUn6REPUOR68YFmrN5wmXQ1W83CmZb6jA7II5dZ0C%2Bm8uZkWP4fxYjv0az2JZkMsLtqJQyE2XXqTl96drJWKeckeKd4HEwNl5fadozQbonZAoIKRSQAQQSMrIr3BZ8ZN%2BCoDMxTT17%2Fn6V2BrIjDwrjCnYzVRtc5H8N0y%2Bwtfq%2Bw2XxWLe6SfSUUx19WQ0HU0eyaRz2DFBOULDamIli9RsorJTWrfO7yKir%2BY0V6OxolIYTyi7hJptj4iG%2F4a4bTCv8Otjo9zDjrr3CBjqkAWKQoHSvkAvU4zGLVHd2%2Fm12Ay99X4rclIy0FhHnQJ3I%2B9wgG7LFxk5CJYeZMmwmFzVLnW%2FW2U%2BzKIp%2FLf5c20AnbwV0OMY8Nq13hOcf9wxW0f%2BuquW9d%2Fz1L6DcBsdiF8IqXpWzdvGDwitH6K4%2B%2BIOpMQC1sVHJKRdnuvlaliHNZXEqPkhHdx5vmgPnD0wGT3%2F7euv5E5o9wWx9se8KILlT45Y1&X-Amz-Signature=5a5b12ba98780070fda3781511d75e035ec0691f41566c90ec443b18390b575f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HMVK37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCfU49hfACqi2f0mJA7x%2FEyzbg0dV8aOo%2FPya5fsMklkwIhAIg6cip1goWG32QSFt0RLmg1Vr1aeqkMs9WQ%2BAdokHkQKv8DCFEQABoMNjM3NDIzMTgzODA1IgxD10GHN95AQK5k%2Fkcq3ANdCqWVIDcHbCqDuRMSpn0cPXXVxUWn%2FmZQyEtUuMy5Qa3QS8yZ1sokcePvehKpRsTYf45YuyFZTq8v%2FJc03ToGX4aMXfXCDAebI3ADlF3FhJH8hE739Umgd5YAm4vwfKB%2B3srs%2BgJwxmriG7tGjdawy4b%2F4ziHBAkiA9E9zjCjgdu16d%2FlRzC2O8RFtr9pyzW7uikORgdsRjhLm0qzDOkANF%2FF2x8xcr%2FD6DCAZGAvq9w%2F%2FZhtngc1lC4POiEDoSlK2X9Mu2wNzLOmc7j9tRf0kH8ZUy8fvztJyYTK%2F8scpEI5cnQdZa%2BPjK9t4gsRp1P5ZXoFwKkJQf090x6rItrziNGvAT%2B4b5QgCTNnTXdWtpIET%2FDckPUn6REPUOR68YFmrN5wmXQ1W83CmZb6jA7II5dZ0C%2Bm8uZkWP4fxYjv0az2JZkMsLtqJQyE2XXqTl96drJWKeckeKd4HEwNl5fadozQbonZAoIKRSQAQQSMrIr3BZ8ZN%2BCoDMxTT17%2Fn6V2BrIjDwrjCnYzVRtc5H8N0y%2Bwtfq%2Bw2XxWLe6SfSUUx19WQ0HU0eyaRz2DFBOULDamIli9RsorJTWrfO7yKir%2BY0V6OxolIYTyi7hJptj4iG%2F4a4bTCv8Otjo9zDjrr3CBjqkAWKQoHSvkAvU4zGLVHd2%2Fm12Ay99X4rclIy0FhHnQJ3I%2B9wgG7LFxk5CJYeZMmwmFzVLnW%2FW2U%2BzKIp%2FLf5c20AnbwV0OMY8Nq13hOcf9wxW0f%2BuquW9d%2Fz1L6DcBsdiF8IqXpWzdvGDwitH6K4%2B%2BIOpMQC1sVHJKRdnuvlaliHNZXEqPkhHdx5vmgPnD0wGT3%2F7euv5E5o9wWx9se8KILlT45Y1&X-Amz-Signature=b559cce874af355dc59076586335cc2c718b63dd3dd1eb980f5f689b1c58b9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
