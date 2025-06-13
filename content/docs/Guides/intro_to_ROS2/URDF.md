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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7SRSME%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEDHZTyDrL879Q689WRuQIro9t3%2FwNKBHIh7uJ1wmKkUAiBfytqZIT16qp88NXkBIXX9o%2Bk3yWEwmOXlrNLMGFptVyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiIuYqCm8ZYpDmCXKtwDZTtE5DZpY2GXXGlSMziDi%2FnK6Lm4rPlPbe1uDjjngdojIiKcyC8121oQghliecazFE9kOUcMGBQGzqpiUn8KDtal9rO6%2FVb%2BWwbkLkVqFhQKLt8P4dGsqz5ikzgyAu9ywrUoyJWVUzMTz2a7phjM1YjmbmL3alz33nxihqFjATNE31I3po5NV9M1zGKTc8%2BdO%2BZhzAeH1DMmFqaYWH2n9A%2FK2h75B9vIuHaafUERt6zrfC0gUTmL7PykEbVkMYbCPLwOUuhzMWZAP2KnfngY8uJhcB5uUcNCokXzTeA22frVlfb5hsLjQ9O8fnKa3PAGBnzy56xTGwXbhoMb8N4%2FN42HI2fSDPJ45%2Fj3t4xqKAQypKb1K8YBMo0MjiTZN02uArPeCGyhLmUu6OI2nuSelwt7%2BE6OkF7ZOtxHB%2Fhy6ABvjYmHbaO7JzbvX%2FjXQv3bRaO%2BdiqSSjT1195f47XWaApkBjZQSZLfXSX7bQhOjAzubrsPrUjgfjVIdXE52R9DYUXqLQcTSe3GqK5vRUYbGEwzsVJsY4CFttHtVukjWAo%2BCZopXk0xx11%2BihULug%2FSftrGnShEZtvqe54auLSYQ0hW8uJglojKTEfNLHB%2Bba4MSJrDuMk2UQgi8LUwza%2BuwgY6pgFC8cB7irWgqnF3dBEV%2BzJ0%2FJ%2BBXrH7AqIBgPEzdA%2B4rOmZCmyq9v3z3fRnIW1q1Fz%2BdC3eAFFsjAFY8Vi%2FY9y%2FNdh44c7thwYIDvV%2BpvHNOdbQ5nfHFtYBcRiveWh7PyAUsHw%2FSjdhlb%2BJdDO1tKGxdKGi0HUlUKCLLFXPUXuBoZfO4EnphsgEKj1OBhgbdmaX9uhcAfNWv%2BdpU7sZSkn9hIAN5I8F&X-Amz-Signature=6603099183df4e20e269db3f901e93d84af77d1f9bc254ee6bf980cfba9afece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7SRSME%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEDHZTyDrL879Q689WRuQIro9t3%2FwNKBHIh7uJ1wmKkUAiBfytqZIT16qp88NXkBIXX9o%2Bk3yWEwmOXlrNLMGFptVyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiIuYqCm8ZYpDmCXKtwDZTtE5DZpY2GXXGlSMziDi%2FnK6Lm4rPlPbe1uDjjngdojIiKcyC8121oQghliecazFE9kOUcMGBQGzqpiUn8KDtal9rO6%2FVb%2BWwbkLkVqFhQKLt8P4dGsqz5ikzgyAu9ywrUoyJWVUzMTz2a7phjM1YjmbmL3alz33nxihqFjATNE31I3po5NV9M1zGKTc8%2BdO%2BZhzAeH1DMmFqaYWH2n9A%2FK2h75B9vIuHaafUERt6zrfC0gUTmL7PykEbVkMYbCPLwOUuhzMWZAP2KnfngY8uJhcB5uUcNCokXzTeA22frVlfb5hsLjQ9O8fnKa3PAGBnzy56xTGwXbhoMb8N4%2FN42HI2fSDPJ45%2Fj3t4xqKAQypKb1K8YBMo0MjiTZN02uArPeCGyhLmUu6OI2nuSelwt7%2BE6OkF7ZOtxHB%2Fhy6ABvjYmHbaO7JzbvX%2FjXQv3bRaO%2BdiqSSjT1195f47XWaApkBjZQSZLfXSX7bQhOjAzubrsPrUjgfjVIdXE52R9DYUXqLQcTSe3GqK5vRUYbGEwzsVJsY4CFttHtVukjWAo%2BCZopXk0xx11%2BihULug%2FSftrGnShEZtvqe54auLSYQ0hW8uJglojKTEfNLHB%2Bba4MSJrDuMk2UQgi8LUwza%2BuwgY6pgFC8cB7irWgqnF3dBEV%2BzJ0%2FJ%2BBXrH7AqIBgPEzdA%2B4rOmZCmyq9v3z3fRnIW1q1Fz%2BdC3eAFFsjAFY8Vi%2FY9y%2FNdh44c7thwYIDvV%2BpvHNOdbQ5nfHFtYBcRiveWh7PyAUsHw%2FSjdhlb%2BJdDO1tKGxdKGi0HUlUKCLLFXPUXuBoZfO4EnphsgEKj1OBhgbdmaX9uhcAfNWv%2BdpU7sZSkn9hIAN5I8F&X-Amz-Signature=88eea344593f39f328ad863f39d9646590c3730e30328d14f015330d85bef6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
