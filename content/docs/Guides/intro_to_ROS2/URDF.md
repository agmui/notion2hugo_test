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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWETBVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGcX7KBLaGdhG6Tzdihi%2BOVeNw4YbJ00RipXTbtFft5EAiBqURIEI2%2BCgRt4MeK%2F6R0WzNtA%2FYvgexOAMcmI3o5R6Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMiywMwzSnK1sEt73IKtwDYOBnk5fztfAftoZ08XUl8g8TDSN9KCSi8HhCVnWz7iHU4V1iOD04Er3AzpIHGcRldOQGxuhNVYXLRpVpV3w376MhR%2FQ7EKTK8CXXzOIf4zbp9fPCy2I5gC4lmOOB7zJ7ChwBL%2BcL2ts4EZPdYcF32u4%2BcR8VkLjMlHWFPeLZPTw7An8Tc9lz3MecfbDn5yyL0OIa4K%2FcFRo29Aa1DXSAKRZrflZs3pK7yjfsJwPrs8JIH%2BTKDdXUvRGBDfuwNoFokxgTuYBbvCk6dB82nr2Hu2elwKa8yuFlfqCTZ7rtGfRRPjYqlYMAk%2BcpZCEO%2Fnt7XVWshyQhekEPHS9a0ZNbYpbOK%2FZBRxI3jSdHhNV%2FrP8OSW2LTAiPa7dh0Vkfg8HP22jt4VCneqxploVsrQc19KwYKbcwyNxhFQ9h03br8eWxo5%2BS%2FaxwfvRKRdPkQyqqaDQQejgLlAdrKba1eainQDNZlC139sBdU2vIKJU8AyoJELRn2qmldfg7y8Qp%2BhWBk3grL1bdPmGZEqRcJD0CsTI6znenCHW6Nn2z5U%2FAL3TyeKh9rnOMot1izG9kErfG8eaVf1KmSr54YMn6rJiH15sN6k4%2Fz2us1r4w9JQKJCfiQCPsW1CB6iA3p3AwiKyzvgY6pgEemJBBRsbPifg7CAyagj6nWd9hIrGlueqrnoYOg%2FUG5xbuRFVXgtz2UYMHNZ8x1iZ2YU1xict24xQY0UmA%2BxP56YNZu7WBXJhXrzZPo1B%2Bhn%2FRocyg2jrkRQ42grzxwmbWffTlH7YuG6g%2BPCoca77WVYCgetfBnKwWc7ln2ztORIupk4GsQfnhjROZTcSHGpK0y2416Etc%2BYVxgpvtIVRr1fxkQo%2BY&X-Amz-Signature=6d19effca1da7af1986b28f6a55fdb9da6e614bba9adf44ccb3b309b6975a9da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FWETBVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGcX7KBLaGdhG6Tzdihi%2BOVeNw4YbJ00RipXTbtFft5EAiBqURIEI2%2BCgRt4MeK%2F6R0WzNtA%2FYvgexOAMcmI3o5R6Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMiywMwzSnK1sEt73IKtwDYOBnk5fztfAftoZ08XUl8g8TDSN9KCSi8HhCVnWz7iHU4V1iOD04Er3AzpIHGcRldOQGxuhNVYXLRpVpV3w376MhR%2FQ7EKTK8CXXzOIf4zbp9fPCy2I5gC4lmOOB7zJ7ChwBL%2BcL2ts4EZPdYcF32u4%2BcR8VkLjMlHWFPeLZPTw7An8Tc9lz3MecfbDn5yyL0OIa4K%2FcFRo29Aa1DXSAKRZrflZs3pK7yjfsJwPrs8JIH%2BTKDdXUvRGBDfuwNoFokxgTuYBbvCk6dB82nr2Hu2elwKa8yuFlfqCTZ7rtGfRRPjYqlYMAk%2BcpZCEO%2Fnt7XVWshyQhekEPHS9a0ZNbYpbOK%2FZBRxI3jSdHhNV%2FrP8OSW2LTAiPa7dh0Vkfg8HP22jt4VCneqxploVsrQc19KwYKbcwyNxhFQ9h03br8eWxo5%2BS%2FaxwfvRKRdPkQyqqaDQQejgLlAdrKba1eainQDNZlC139sBdU2vIKJU8AyoJELRn2qmldfg7y8Qp%2BhWBk3grL1bdPmGZEqRcJD0CsTI6znenCHW6Nn2z5U%2FAL3TyeKh9rnOMot1izG9kErfG8eaVf1KmSr54YMn6rJiH15sN6k4%2Fz2us1r4w9JQKJCfiQCPsW1CB6iA3p3AwiKyzvgY6pgEemJBBRsbPifg7CAyagj6nWd9hIrGlueqrnoYOg%2FUG5xbuRFVXgtz2UYMHNZ8x1iZ2YU1xict24xQY0UmA%2BxP56YNZu7WBXJhXrzZPo1B%2Bhn%2FRocyg2jrkRQ42grzxwmbWffTlH7YuG6g%2BPCoca77WVYCgetfBnKwWc7ln2ztORIupk4GsQfnhjROZTcSHGpK0y2416Etc%2BYVxgpvtIVRr1fxkQo%2BY&X-Amz-Signature=dd50097f9a662529b389b6294c876295a3372a2ea65ed222a0af6f3b9c30406f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
