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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBXRPO24%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhzpMcXu0hzmN1eBSNyCrjvo%2BgS1FGS5F6M2BJ9Z6VrAiEAzBttFXE1%2FuY%2FaCyoz8gV84d%2FfcoeOOi35pnpVacKleAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNulWK6skHkM7dhVpSrcA1%2FEBKAq1FL%2BUhw5ajFC7XJKkchhJMiVNNX%2BmMFQykuAKTA%2BJOKxW2xQFbgbB%2BP2UZkZxQ0796y81JiFLoUfskvDvtXMXFT9UgVx7AjHnKNOe%2FrZuMSAJ%2BU%2B5zsfsw%2B%2Fgiy5m41DZIl8zGY%2FzPoO6hdp3XYI62Q%2BjIRlnOQy0AZhoazvF6rq2oCSjIAbpaEgevC8YlqW3BNMQU%2Fj9JKMAMJfST%2FyXg7uSQtndENNHOeVEuxiLZYurd2sgyO7Yia7WBIo86Wu2Csn6OrqREUN6Swdx9L3LT5oqu8GHtjinG%2B4tSjOeKDEk%2F893svIJfJ9NnXUKrVWQkls4K64%2FGWAoSYHOX7Q6jlATAkf%2F4BNn9KRlRrTYw%2F1txTJRaRt3EPwBpZmAznzLZThQgc01GIR5rR0WbNrg%2FOoW1QcRd5y7gTm7wmoTMVgH0%2BzBdy9ZE6BkuFIFxhdxeWmipY4X4yYrcbh8kYULEi5Jkq9MlwgOsFLwXuUqQJUkMzmuGxbFHnSw5PJ0mNI%2FewzKdQWMpS2rG3rXLmVw1a9275nMGuyn6wBT9rb1UHVUtok70i7RhqRX6rvSTm1qOKoPTZoss0o8Q2ySAMuSvz87WZa3U2EZHrdLz5vQh71TeHo1GymMLXLo8EGOqUBA5fxKLKl8ABn4KSdvBP6jEzwiVsbymlX694B8WMSTRs8F%2Fdfb0fH%2BWmj0jl0CvHymUUNDI9ocsOGW0jZ0VSw9NyeYaUgPa8G1gz%2Bckg2wWgLO%2BU4cXpNRRP962hu83bKy1ANjMaNIGjG%2BFxQrl8S8%2FY%2BoPXTqif%2B%2BrdTnXN2eoD6HLFRnQPxAXKgg9niOV54YT3yFDnc5jNnRdRrKPi25LZpOw0R&X-Amz-Signature=245812c287be86239c62cef7d1053ef2e777651a1273647b1acf07b0d2073c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBXRPO24%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhzpMcXu0hzmN1eBSNyCrjvo%2BgS1FGS5F6M2BJ9Z6VrAiEAzBttFXE1%2FuY%2FaCyoz8gV84d%2FfcoeOOi35pnpVacKleAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNulWK6skHkM7dhVpSrcA1%2FEBKAq1FL%2BUhw5ajFC7XJKkchhJMiVNNX%2BmMFQykuAKTA%2BJOKxW2xQFbgbB%2BP2UZkZxQ0796y81JiFLoUfskvDvtXMXFT9UgVx7AjHnKNOe%2FrZuMSAJ%2BU%2B5zsfsw%2B%2Fgiy5m41DZIl8zGY%2FzPoO6hdp3XYI62Q%2BjIRlnOQy0AZhoazvF6rq2oCSjIAbpaEgevC8YlqW3BNMQU%2Fj9JKMAMJfST%2FyXg7uSQtndENNHOeVEuxiLZYurd2sgyO7Yia7WBIo86Wu2Csn6OrqREUN6Swdx9L3LT5oqu8GHtjinG%2B4tSjOeKDEk%2F893svIJfJ9NnXUKrVWQkls4K64%2FGWAoSYHOX7Q6jlATAkf%2F4BNn9KRlRrTYw%2F1txTJRaRt3EPwBpZmAznzLZThQgc01GIR5rR0WbNrg%2FOoW1QcRd5y7gTm7wmoTMVgH0%2BzBdy9ZE6BkuFIFxhdxeWmipY4X4yYrcbh8kYULEi5Jkq9MlwgOsFLwXuUqQJUkMzmuGxbFHnSw5PJ0mNI%2FewzKdQWMpS2rG3rXLmVw1a9275nMGuyn6wBT9rb1UHVUtok70i7RhqRX6rvSTm1qOKoPTZoss0o8Q2ySAMuSvz87WZa3U2EZHrdLz5vQh71TeHo1GymMLXLo8EGOqUBA5fxKLKl8ABn4KSdvBP6jEzwiVsbymlX694B8WMSTRs8F%2Fdfb0fH%2BWmj0jl0CvHymUUNDI9ocsOGW0jZ0VSw9NyeYaUgPa8G1gz%2Bckg2wWgLO%2BU4cXpNRRP962hu83bKy1ANjMaNIGjG%2BFxQrl8S8%2FY%2BoPXTqif%2B%2BrdTnXN2eoD6HLFRnQPxAXKgg9niOV54YT3yFDnc5jNnRdRrKPi25LZpOw0R&X-Amz-Signature=f16b4e14a8d0d439ba97ff0767a403e3e0c3ed38cafaa63f4b7f7d9a1c25d191&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
