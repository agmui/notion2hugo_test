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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOSZRBW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FtBa491tzIj%2B%2BaOYDJDCuOMr9i2Z7iLF8OsfZG8OLsgIhAIJ9a%2FeWVvs%2B80iWO70Dh5AdGrXHfIO45betEwd6KfSaKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2FFP6XF0HOQipII8q3AP1%2FrZ0Bx8F5mnbnn0q2FyJqiSKrLsdq%2Blv%2BjcEnv1cvG013keCLrUIFqILq%2FZeOMrNVmajBTUvQwYi%2FkFQmERal4zHzKYb2hhJuGxglzJz5o0VLwLAwcb%2FK%2ByQKdXN6UXnWvqbLBgeChDMWCjaudBOJeOVeg45zkjPuNpMKqdV8G16WtUaTZkl4t8SdV7olbz3FUvXN11ax%2BxLbhJ8Uqhbma3kVLqnE0V74KI1Dt5kGTyefCSSXM1uJeyijLxHwiWtgBgFMVekqmWPygbEqnMLDvB8o5m81ThrRvfIYe5%2B%2F9Pf08CFbHK5t81YCrPkzkcsgxaZuy2eDOSHOuAIPDNt%2BCZLtXv%2FnC3JYRHP6m%2BwEdqCnQmNdm%2BLbsSWDLle9sG44IkDYqGoibQZ7z51F%2ByD%2BlcdCdwGLYVUkm7l%2F4zKO6O3%2FAizDe5W3JigXEnZGA%2BT3kOVRIr0BwiDy%2FSIeM6BusakNJTI3MDGE2hsNMxtaUxdnmUtazd2RqAbo6WbBVQRKZ9yZfyDUkdTSuZl1Q4DU3MIXZ9bIoT3AHR65xslAJtB7ZiTaqU4dkFP8MifQG7KrT3ySibwB9ENJZQdNHqt0BE8QKGYSc7xGw9VW4ABrkKC7XfELxFG%2B8WI5jDjuuPEBjqkAXHtsxeBq8esmavEcWd0h%2BOBw4k21rcPLaQ3zoFuSJwV8F7SV4Mk%2BB%2BIJ02v8KPcyCgzLJaeMBqsFBKyib77kyHkHPnC30je4RcShCJkjJFx1OGBoANQKxxS1sD%2B4e8FqzBHP%2BJin83uG1L2riMXLS0WjelKn5CIpKVDmzvOMc8rNvaW1IIU3YodF6WyFWW99Z%2B5KBkcfqbYX0VvZlym7F6wRPVK&X-Amz-Signature=d9fea07684c106f7d10e2f6f2534bd47375a4cde5d48d32cd1a36d6189a8e65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOSZRBW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FtBa491tzIj%2B%2BaOYDJDCuOMr9i2Z7iLF8OsfZG8OLsgIhAIJ9a%2FeWVvs%2B80iWO70Dh5AdGrXHfIO45betEwd6KfSaKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2FFP6XF0HOQipII8q3AP1%2FrZ0Bx8F5mnbnn0q2FyJqiSKrLsdq%2Blv%2BjcEnv1cvG013keCLrUIFqILq%2FZeOMrNVmajBTUvQwYi%2FkFQmERal4zHzKYb2hhJuGxglzJz5o0VLwLAwcb%2FK%2ByQKdXN6UXnWvqbLBgeChDMWCjaudBOJeOVeg45zkjPuNpMKqdV8G16WtUaTZkl4t8SdV7olbz3FUvXN11ax%2BxLbhJ8Uqhbma3kVLqnE0V74KI1Dt5kGTyefCSSXM1uJeyijLxHwiWtgBgFMVekqmWPygbEqnMLDvB8o5m81ThrRvfIYe5%2B%2F9Pf08CFbHK5t81YCrPkzkcsgxaZuy2eDOSHOuAIPDNt%2BCZLtXv%2FnC3JYRHP6m%2BwEdqCnQmNdm%2BLbsSWDLle9sG44IkDYqGoibQZ7z51F%2ByD%2BlcdCdwGLYVUkm7l%2F4zKO6O3%2FAizDe5W3JigXEnZGA%2BT3kOVRIr0BwiDy%2FSIeM6BusakNJTI3MDGE2hsNMxtaUxdnmUtazd2RqAbo6WbBVQRKZ9yZfyDUkdTSuZl1Q4DU3MIXZ9bIoT3AHR65xslAJtB7ZiTaqU4dkFP8MifQG7KrT3ySibwB9ENJZQdNHqt0BE8QKGYSc7xGw9VW4ABrkKC7XfELxFG%2B8WI5jDjuuPEBjqkAXHtsxeBq8esmavEcWd0h%2BOBw4k21rcPLaQ3zoFuSJwV8F7SV4Mk%2BB%2BIJ02v8KPcyCgzLJaeMBqsFBKyib77kyHkHPnC30je4RcShCJkjJFx1OGBoANQKxxS1sD%2B4e8FqzBHP%2BJin83uG1L2riMXLS0WjelKn5CIpKVDmzvOMc8rNvaW1IIU3YodF6WyFWW99Z%2B5KBkcfqbYX0VvZlym7F6wRPVK&X-Amz-Signature=7823221824f8394d9fcaca7b7e7432e8c03c5e34a4d3b18058765f0392c2b20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
