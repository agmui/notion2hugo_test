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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKU7ICV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGlvxAZgKktq%2BnHHTP58%2B0neDv7c4An0%2BqaITROAG7UnAiBLBHMzPejsF2Ovmt1whgLppGU2MOQ5Rz7IqmuSdMLzliqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6%2Fy%2Bbw0z8Tcxj8MKtwDRIQ5UGCcxpEaeLbhclGsPbr4KErxq87QLrDY3kowIqw01j2i%2BORmyoUUY%2FS7NQNSyvgwO91Kw10szQTCa454HzgsFSEp2idc3uimPvTz6AG1T%2BdWfkX97MPEYFL3gQw3bTJkJaTIZkfg1bgGWo0QNozcEmpGb3AH3krvBIU7CXsQrH4Gp6zd8NGTA83Nq7%2B93vCgZpgHZIhH8B54mbSby7UTu4r3odCbhDA8FSScPT4tWvbRRmV9tEnsSCeRXmXyJstJNvicZsCLhGtnvMEhTEZiZ7f9hhfI6rdYeFQhYhfYOTHebQo8PooA%2BwJS3Xzn7ja8Jlgjr%2Bs%2FU0Q32451l375m7VLunfk8jihlONIM5TTqD4tCHGmWbePtk8DYPBUSsU8zDB0iz2YhvU%2F9hexJ9HEDmLJttUnm1jxyQz5KoUUZeggafjplW2SZ4xZoiU44%2FOAzYNSLnsubM3mqvHKBYn5T3nORWWQ6%2B%2BiHkaMv6YYVCS%2BevpzcZ%2Fm1TitezK7AbLd9tgCbChkKyQcWuoolvKBd5bthJziKHi3PQkSmsiFZeOekJRbSDlvqtueFYKc7lWvIcKfD5yX6xwe%2BzfktlWRSJjYaUE6a%2BPreZghQoc83leMSLKW1FMdh6MwpcujxAY6pgH5DBaE8OzFgmvd078z3EgNrt%2Fw%2BdSgvmAJn8TD4FAOfZKUt0eQs6JFlZAuizgwGH3uJ6SY3qUztCKpIpLxN%2BHo73YsLHwu%2FkV6HMupP5LCMwWE%2FmA0CUDyRYzil6DVAYcPuzFgPLFIv0xIHN6qk18EVyJeugEHMy5PZhPydagGtJsvjTK0BJurE8AykuHXeweVpf70dcdQZUJHq0kMtmxI6NYLCm%2F0&X-Amz-Signature=94dc245946f9ee891268683d971075cf310038949ed1e90b78ce5934301a3210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKU7ICV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGlvxAZgKktq%2BnHHTP58%2B0neDv7c4An0%2BqaITROAG7UnAiBLBHMzPejsF2Ovmt1whgLppGU2MOQ5Rz7IqmuSdMLzliqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG6%2Fy%2Bbw0z8Tcxj8MKtwDRIQ5UGCcxpEaeLbhclGsPbr4KErxq87QLrDY3kowIqw01j2i%2BORmyoUUY%2FS7NQNSyvgwO91Kw10szQTCa454HzgsFSEp2idc3uimPvTz6AG1T%2BdWfkX97MPEYFL3gQw3bTJkJaTIZkfg1bgGWo0QNozcEmpGb3AH3krvBIU7CXsQrH4Gp6zd8NGTA83Nq7%2B93vCgZpgHZIhH8B54mbSby7UTu4r3odCbhDA8FSScPT4tWvbRRmV9tEnsSCeRXmXyJstJNvicZsCLhGtnvMEhTEZiZ7f9hhfI6rdYeFQhYhfYOTHebQo8PooA%2BwJS3Xzn7ja8Jlgjr%2Bs%2FU0Q32451l375m7VLunfk8jihlONIM5TTqD4tCHGmWbePtk8DYPBUSsU8zDB0iz2YhvU%2F9hexJ9HEDmLJttUnm1jxyQz5KoUUZeggafjplW2SZ4xZoiU44%2FOAzYNSLnsubM3mqvHKBYn5T3nORWWQ6%2B%2BiHkaMv6YYVCS%2BevpzcZ%2Fm1TitezK7AbLd9tgCbChkKyQcWuoolvKBd5bthJziKHi3PQkSmsiFZeOekJRbSDlvqtueFYKc7lWvIcKfD5yX6xwe%2BzfktlWRSJjYaUE6a%2BPreZghQoc83leMSLKW1FMdh6MwpcujxAY6pgH5DBaE8OzFgmvd078z3EgNrt%2Fw%2BdSgvmAJn8TD4FAOfZKUt0eQs6JFlZAuizgwGH3uJ6SY3qUztCKpIpLxN%2BHo73YsLHwu%2FkV6HMupP5LCMwWE%2FmA0CUDyRYzil6DVAYcPuzFgPLFIv0xIHN6qk18EVyJeugEHMy5PZhPydagGtJsvjTK0BJurE8AykuHXeweVpf70dcdQZUJHq0kMtmxI6NYLCm%2F0&X-Amz-Signature=1baef583e2b0b729cf7e31cda4735d1563b9e8ee912c7d8a79f8bc29589fb1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
