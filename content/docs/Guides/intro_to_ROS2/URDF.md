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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AZLWYA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBQprsTmQO8K8cR7rL0cxraYcyU6sr%2B%2FhQ6EXSRftrqUAiEA7syTn%2BI5%2FHdLhAemSHuAD%2FuZk%2Bf9qhiL%2B4%2FFsPgEFqEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp9M3UsKhIp6akKuCrcA%2FDT%2BZ6LyBIQhRqlijhQyLTj%2BIRFfKVOq8RmyLW12EKZsq9IOkabAVIIJ86RJmijN0Vgf2pbgoY6ESKxSQhQrNRBi7C23yd0ztlFM%2Fkpl%2BVP2k1W3SjyFKnXhHNeNQPd8eYcO7MN8ycAgXFWCMcpk%2Fc2UZc5%2FHo%2Fc4gK%2F9nUhRIr1thHeQZYySqwnsk3EsdT1iTS1QgfqES4dL2kJ91XwFwQG9DoNRJmNaCsWyrdYCCLdvgMtPD4d5YmJYVOx4UrUDI2zj46kvbrprFkWAph3JP6yVePcpwBqIfI3zpMmv6bTaDUklBjMwnu9TbTzdJYhjUAaCVdS12s6g%2BpE6RA%2BwZAhPQuHGK%2FT9ygwkKHB1SEfLfPAKF7MaDIMKc%2B9pHdVE4rqmGYJpgA4%2B%2Ba9JLrWQUncl%2FdalqQJrI0dWJIuu0Iz%2BzH5PhY8f4bitV%2Fd8fPBHZNDip9E5N%2B6U7GTLFg4fe%2F5KzSBBchMg4uj99MnL734Al0boIZS1Di4jbME3XsLxj3vEIOZgXIR3MeBP4MfTQh2ftRw2IWrSJj0R9jqUXOfM%2FSX5Vaej%2BVwiwz4yvirlCnuP5RP1vVJwhuvft7eyGhGUM4wwtNQxDp8SSZOuSb%2BtHNQbu5SnRNpyUSMOXgnsAGOqUBCDtX1y8nWjTBEQDE5Z%2BfBOtaC2m24eLRTAJc4MceLRoizGfb3gA7D7RpY%2FlDTZJguN3nEOWWglgeu1V6%2F7mAxbf2U%2BcCLyyXC8B%2BlpSFHJhSKoI1b8fCS2j3ybMRS5AVi7whRYMjdIBQgpCcMIXMfKe2RV0ETwp%2FaHMfFAI%2BUU1LMmZjT7n95V4KPZWJYcmZEEqwvWejZuyMaH49MS7oJYDtO25V&X-Amz-Signature=43010fdfa43766419ca843cf0a9b671eef3b89b2d46d35f233fd693f82fdcc34&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AZLWYA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBQprsTmQO8K8cR7rL0cxraYcyU6sr%2B%2FhQ6EXSRftrqUAiEA7syTn%2BI5%2FHdLhAemSHuAD%2FuZk%2Bf9qhiL%2B4%2FFsPgEFqEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp9M3UsKhIp6akKuCrcA%2FDT%2BZ6LyBIQhRqlijhQyLTj%2BIRFfKVOq8RmyLW12EKZsq9IOkabAVIIJ86RJmijN0Vgf2pbgoY6ESKxSQhQrNRBi7C23yd0ztlFM%2Fkpl%2BVP2k1W3SjyFKnXhHNeNQPd8eYcO7MN8ycAgXFWCMcpk%2Fc2UZc5%2FHo%2Fc4gK%2F9nUhRIr1thHeQZYySqwnsk3EsdT1iTS1QgfqES4dL2kJ91XwFwQG9DoNRJmNaCsWyrdYCCLdvgMtPD4d5YmJYVOx4UrUDI2zj46kvbrprFkWAph3JP6yVePcpwBqIfI3zpMmv6bTaDUklBjMwnu9TbTzdJYhjUAaCVdS12s6g%2BpE6RA%2BwZAhPQuHGK%2FT9ygwkKHB1SEfLfPAKF7MaDIMKc%2B9pHdVE4rqmGYJpgA4%2B%2Ba9JLrWQUncl%2FdalqQJrI0dWJIuu0Iz%2BzH5PhY8f4bitV%2Fd8fPBHZNDip9E5N%2B6U7GTLFg4fe%2F5KzSBBchMg4uj99MnL734Al0boIZS1Di4jbME3XsLxj3vEIOZgXIR3MeBP4MfTQh2ftRw2IWrSJj0R9jqUXOfM%2FSX5Vaej%2BVwiwz4yvirlCnuP5RP1vVJwhuvft7eyGhGUM4wwtNQxDp8SSZOuSb%2BtHNQbu5SnRNpyUSMOXgnsAGOqUBCDtX1y8nWjTBEQDE5Z%2BfBOtaC2m24eLRTAJc4MceLRoizGfb3gA7D7RpY%2FlDTZJguN3nEOWWglgeu1V6%2F7mAxbf2U%2BcCLyyXC8B%2BlpSFHJhSKoI1b8fCS2j3ybMRS5AVi7whRYMjdIBQgpCcMIXMfKe2RV0ETwp%2FaHMfFAI%2BUU1LMmZjT7n95V4KPZWJYcmZEEqwvWejZuyMaH49MS7oJYDtO25V&X-Amz-Signature=a36daaa02fee65861fc8b9adc8bcfde26bd18d7d5f42e209e1c2927a6f8ff920&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
