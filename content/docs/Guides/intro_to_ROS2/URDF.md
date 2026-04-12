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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5RZYUH%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAur1eafhYGYw6k4DzkDuHIAX4ibnOenAnpoyTpqStueAiEAhF%2BV9Ep6g1l8%2F9zRTXaLarQlQHGtktot9Rby%2BIahDXgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAWfBtnHKjsfSNs6myrcA%2FkC3PGDT8GGmP8%2B%2Folkx%2FxOWh3uFf2fyIjRIx3lIgbAgYqcEwPLuYMYAmYZQ23bhUm8JIPbBMQkmewwrj5lA5F4au50HwBrUDjVrVIQ2LxcNFpanI%2FqJu6HhvxVHSU7xjIinUodWw%2FzYipkln%2B0IsfdujmOWqRhZkaSb0XM7RPxLO4nhzA%2FkLqmR8hA4CE1BnuAqBAogqvUMJOHSOuhmQiUiA2fJVvE0aDWfYB%2FeF4JkFH5qnj94QON1KlRloPG76wzkrFOUXmG%2FkR9y6rKKt%2FHw8zjWi%2FjkNlVQLdTNmueAMG%2F%2B%2FC1Xuv53kS26z7y5d7ZAtsYQVNMCf9rvxe5zcBNpRyZG2R7W1iPyvJy4njqu9IoqdQjyMi6trE8TdYnDmE7z1huDQd0wyfTlVLYKQJX19YE5cjAz38BYDGO5z30879RIMrZ2mkCEk4%2FeKX9bO6XC5efReupAUN81YZx01HtOEfTrEcEu%2Fg4WZJUeXWlIByCQ36HHvqjT0OqXTIjuaX6MikHw%2B7CQFnhAUQiPPmFJUw5bDgZJQdg7QcsbmQeGjlky%2B2kyGBlsDVnUeTtLU4aIzx5pU12DMan16PtZ5NX5hFAKRzHYXCEME3nDAskgfzYT6flE%2FWSPNIlMP6G7M4GOqUBilD8XUU5PZDzg%2Ffsd0ZepMGUZuSMzok23aU7sp27xg7MIukoVH0upj6fBkD94ZHFZzcP3q9hZSiMZe1feZsbIWxacNXE1fovyCRxVJnGbpbON7gALfd%2FY7ZNcAtSbaFFYAhD7bQnm7bi%2BlX4cDtHN3NvykDSV%2FJuIvW1POnc0GKxstX0SUTgbj1CA2PHkjQlDCN91I2YLqtViFbByxMex2lYQxMx&X-Amz-Signature=ed95f3936c10d061e98ad5eac768dc3bab862279ae79ed75b2af26a273c43fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5RZYUH%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAur1eafhYGYw6k4DzkDuHIAX4ibnOenAnpoyTpqStueAiEAhF%2BV9Ep6g1l8%2F9zRTXaLarQlQHGtktot9Rby%2BIahDXgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAWfBtnHKjsfSNs6myrcA%2FkC3PGDT8GGmP8%2B%2Folkx%2FxOWh3uFf2fyIjRIx3lIgbAgYqcEwPLuYMYAmYZQ23bhUm8JIPbBMQkmewwrj5lA5F4au50HwBrUDjVrVIQ2LxcNFpanI%2FqJu6HhvxVHSU7xjIinUodWw%2FzYipkln%2B0IsfdujmOWqRhZkaSb0XM7RPxLO4nhzA%2FkLqmR8hA4CE1BnuAqBAogqvUMJOHSOuhmQiUiA2fJVvE0aDWfYB%2FeF4JkFH5qnj94QON1KlRloPG76wzkrFOUXmG%2FkR9y6rKKt%2FHw8zjWi%2FjkNlVQLdTNmueAMG%2F%2B%2FC1Xuv53kS26z7y5d7ZAtsYQVNMCf9rvxe5zcBNpRyZG2R7W1iPyvJy4njqu9IoqdQjyMi6trE8TdYnDmE7z1huDQd0wyfTlVLYKQJX19YE5cjAz38BYDGO5z30879RIMrZ2mkCEk4%2FeKX9bO6XC5efReupAUN81YZx01HtOEfTrEcEu%2Fg4WZJUeXWlIByCQ36HHvqjT0OqXTIjuaX6MikHw%2B7CQFnhAUQiPPmFJUw5bDgZJQdg7QcsbmQeGjlky%2B2kyGBlsDVnUeTtLU4aIzx5pU12DMan16PtZ5NX5hFAKRzHYXCEME3nDAskgfzYT6flE%2FWSPNIlMP6G7M4GOqUBilD8XUU5PZDzg%2Ffsd0ZepMGUZuSMzok23aU7sp27xg7MIukoVH0upj6fBkD94ZHFZzcP3q9hZSiMZe1feZsbIWxacNXE1fovyCRxVJnGbpbON7gALfd%2FY7ZNcAtSbaFFYAhD7bQnm7bi%2BlX4cDtHN3NvykDSV%2FJuIvW1POnc0GKxstX0SUTgbj1CA2PHkjQlDCN91I2YLqtViFbByxMex2lYQxMx&X-Amz-Signature=f8ef9b7a13831652a02c1a591698002a4c03984c3cfbeabf39f525e53a918fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
