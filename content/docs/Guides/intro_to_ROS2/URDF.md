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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJ4MJV4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrKsESv9v%2FFB4cOyWOUiuD9lxAH6CzO0Hland3rX0Y0wIgD2GF8As%2BpBmvrQy%2FZPD9JWkEcWvhTZPqHmEoYFq0MvIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHCUiF2JdmHPLEblQircA%2Bxc7p2X1JmnCFZ8OFDjcwg8CHIVBb%2BFL67gvqxTIL0bocgkA%2Fhktl7CfVolR4XFE%2BEVeFZfHBZ1Nsc83y%2BGJuUoJBphiU0TLAxxh2JhNVuQi9m3uDVBrb5kCUNPSLwixF9PsvqEHKdbZKjyIGUQ9VeyGsJYGESOJLzVo6PHecZ0InwMiw6eWSIsRsPXmgK48p3NBVKOsI8IoNdGCLEkcdWtna3ZlA7qPttYkzRFj35PigpNRrmCdzGkFjLi5QwAOTtleNYLLRLpQ42Am82GGyVCoRCfrLmjAr%2FGty0k0zyoyLcivSrmbmqSDHSb5zP7FHZdG%2FgBm0tf2%2BYuZoqit7GVXUpkxW9cGJkwpqasJ4EXfKXBee%2FbNDuwZuayqU4%2BT7%2FBiClrvPstbLURI48ChlgHQkBBu4t3BU9YGXkLzKWdvoUDR6zQT7LzDof0Lv%2B7g9v3Ha3arhwHnXeOaAt66upRQfn3dTb7hk9E0v%2FEfjGVWYPfokDFyteSzgv%2Fr60X63ecuHM4Kspse1w6j%2FGZpQKZfubKt5t8ZIajYSqPNkgQFmvUCUqXkh4jyBNQkwnImsFdrZBIvdxSjBMeLHwq39SNOy8vYE6NX%2B5EG0ukbnF4unCFzPfL5nr1zO7yMOuC7sAGOqUBcdvSLicbnd6%2FvqHDbBPG3LrUc6xZKBO%2BIzL6tvBsErB2Abi00ZZ2pxxNoHVeYeDdtmGSdJKZ8RXxYPYUCMsl8e%2B%2FpRvsFX1LhiBejvR6jnbRL%2F7cSCULfcmzD7wbK4c%2FdTMmFK%2FdQDQSpeRueRAhOV11WDpwbbHzYvwLJoW9YaizmuJFqY7JBsvs1YR8zuoQQ9hUwkzyVtnPS%2FRaTWOmheQXoilT&X-Amz-Signature=a13a84fc20f819ecefe05789a6878110ae366efd5f4bc1a6a04109fe18440a63&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJ4MJV4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrKsESv9v%2FFB4cOyWOUiuD9lxAH6CzO0Hland3rX0Y0wIgD2GF8As%2BpBmvrQy%2FZPD9JWkEcWvhTZPqHmEoYFq0MvIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHCUiF2JdmHPLEblQircA%2Bxc7p2X1JmnCFZ8OFDjcwg8CHIVBb%2BFL67gvqxTIL0bocgkA%2Fhktl7CfVolR4XFE%2BEVeFZfHBZ1Nsc83y%2BGJuUoJBphiU0TLAxxh2JhNVuQi9m3uDVBrb5kCUNPSLwixF9PsvqEHKdbZKjyIGUQ9VeyGsJYGESOJLzVo6PHecZ0InwMiw6eWSIsRsPXmgK48p3NBVKOsI8IoNdGCLEkcdWtna3ZlA7qPttYkzRFj35PigpNRrmCdzGkFjLi5QwAOTtleNYLLRLpQ42Am82GGyVCoRCfrLmjAr%2FGty0k0zyoyLcivSrmbmqSDHSb5zP7FHZdG%2FgBm0tf2%2BYuZoqit7GVXUpkxW9cGJkwpqasJ4EXfKXBee%2FbNDuwZuayqU4%2BT7%2FBiClrvPstbLURI48ChlgHQkBBu4t3BU9YGXkLzKWdvoUDR6zQT7LzDof0Lv%2B7g9v3Ha3arhwHnXeOaAt66upRQfn3dTb7hk9E0v%2FEfjGVWYPfokDFyteSzgv%2Fr60X63ecuHM4Kspse1w6j%2FGZpQKZfubKt5t8ZIajYSqPNkgQFmvUCUqXkh4jyBNQkwnImsFdrZBIvdxSjBMeLHwq39SNOy8vYE6NX%2B5EG0ukbnF4unCFzPfL5nr1zO7yMOuC7sAGOqUBcdvSLicbnd6%2FvqHDbBPG3LrUc6xZKBO%2BIzL6tvBsErB2Abi00ZZ2pxxNoHVeYeDdtmGSdJKZ8RXxYPYUCMsl8e%2B%2FpRvsFX1LhiBejvR6jnbRL%2F7cSCULfcmzD7wbK4c%2FdTMmFK%2FdQDQSpeRueRAhOV11WDpwbbHzYvwLJoW9YaizmuJFqY7JBsvs1YR8zuoQQ9hUwkzyVtnPS%2FRaTWOmheQXoilT&X-Amz-Signature=1b9e8df5d11547789a7fec6c6c3497bb9317942837f6f2ea1d4b19cf321348d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
