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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MYBLZ5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELUI%2BCAYt0BcWiTSRFMLdwBpbLx058mI0FmZDMNr1j9AiANpxJn4vNH%2BeAm64OIDemdB3YC5alwWZJaSXgnX78esSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMUE89xfBpp%2FEmS%2Bp%2FKtwD4UjBDGBMJn2BUhUvcnsJac%2F5Kt0n20yPFkHCLpkzVvJPoU8k%2BFUs0uz10rd%2Bto8FShSehFWAaCszSrg%2FNjqY%2BrmEWwjnUZ2lwO2A%2FKO3OmkF94AtAQT3R4rAO7gh713VdA7imm55%2FCEJkfcdD9e3B%2BAKo94xz%2BJ44kzHk6e9wq%2Bs93E%2BKDUBzH6sfEg0dYIY1GUl5qVAjI4dl3yKrVuSIziVKDIB5%2BaWWLOiKfrzWBf1ruIKYGv1l62igmeDKPIdDHxUxJWVXnXNysMz8g77sYEfuG7CySBRK1fJi1D7U8E8SyTO9OgOBtTYVipOhSRmx3m3JuB8YoSla3IuziuPESXzIqmLPnpZe7Ax43YWaMWNUNf9h%2BZu7Y%2F8rDvKh6CRC7eRkroMZFCCOciC4BTQGVUA0S07fgIHfqK0qbCzQau7FhHhyYbB6jcI9uSy7mAdkYoBwR2xfZgG8g6y2vKAXvLo2mBMbf57YWNJ1QDPzXqFEvGyTmTl74WzIRgFbZDvt9sXA%2BGhuNrNX0Z8OW%2FTm2lWUYiGL%2F1X7jaVqJY7tudOH8kB6HKcPUvCUYrBowl7i6VwwLpZ9iuyJfaO6tvNXZi8ga68naoJSOhzZO1nxkHl3gDZw9%2FNT0d%2F0T0w%2BYirvgY6pgEKDtOhlF%2FKL86g5KdG3gD4ggw6veu1KLm%2Fl01vMWS2ELSUZGM%2FF8vE4szxlmVcI3lJC0%2BOJ6QwXCdKSYrADEJsLN8ok4ecbhKjonCbxivaImOVEqmdOqs3ORLu3qCjA9KKRCTLUkQjg1ez5g%2FdigeZXrhW%2FCBXyBFkGNjpGK4QBCOxyPg4pmziyI%2BSPsJWkUBz5BQpZ02Q0VYK9P%2BkiGVg4j8DlstR&X-Amz-Signature=496f53c0f1a4d1c16916e9f29559ab0993ca263790004b9d07bf5749a7905c38&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MYBLZ5%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELUI%2BCAYt0BcWiTSRFMLdwBpbLx058mI0FmZDMNr1j9AiANpxJn4vNH%2BeAm64OIDemdB3YC5alwWZJaSXgnX78esSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMUE89xfBpp%2FEmS%2Bp%2FKtwD4UjBDGBMJn2BUhUvcnsJac%2F5Kt0n20yPFkHCLpkzVvJPoU8k%2BFUs0uz10rd%2Bto8FShSehFWAaCszSrg%2FNjqY%2BrmEWwjnUZ2lwO2A%2FKO3OmkF94AtAQT3R4rAO7gh713VdA7imm55%2FCEJkfcdD9e3B%2BAKo94xz%2BJ44kzHk6e9wq%2Bs93E%2BKDUBzH6sfEg0dYIY1GUl5qVAjI4dl3yKrVuSIziVKDIB5%2BaWWLOiKfrzWBf1ruIKYGv1l62igmeDKPIdDHxUxJWVXnXNysMz8g77sYEfuG7CySBRK1fJi1D7U8E8SyTO9OgOBtTYVipOhSRmx3m3JuB8YoSla3IuziuPESXzIqmLPnpZe7Ax43YWaMWNUNf9h%2BZu7Y%2F8rDvKh6CRC7eRkroMZFCCOciC4BTQGVUA0S07fgIHfqK0qbCzQau7FhHhyYbB6jcI9uSy7mAdkYoBwR2xfZgG8g6y2vKAXvLo2mBMbf57YWNJ1QDPzXqFEvGyTmTl74WzIRgFbZDvt9sXA%2BGhuNrNX0Z8OW%2FTm2lWUYiGL%2F1X7jaVqJY7tudOH8kB6HKcPUvCUYrBowl7i6VwwLpZ9iuyJfaO6tvNXZi8ga68naoJSOhzZO1nxkHl3gDZw9%2FNT0d%2F0T0w%2BYirvgY6pgEKDtOhlF%2FKL86g5KdG3gD4ggw6veu1KLm%2Fl01vMWS2ELSUZGM%2FF8vE4szxlmVcI3lJC0%2BOJ6QwXCdKSYrADEJsLN8ok4ecbhKjonCbxivaImOVEqmdOqs3ORLu3qCjA9KKRCTLUkQjg1ez5g%2FdigeZXrhW%2FCBXyBFkGNjpGK4QBCOxyPg4pmziyI%2BSPsJWkUBz5BQpZ02Q0VYK9P%2BkiGVg4j8DlstR&X-Amz-Signature=8488f8a76ce05bb243de6d56b4efcbb31c288e0f7d1eefac64247edb5a5009d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
