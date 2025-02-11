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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5OCYO6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvk4MOQca7AfVm8ccsDS7Po2ZzQwaJg8%2BIcxofO2TAeAiEA10Xzn0dYlY0Ct%2BpLEQr1q2tvizaprW6Jh5TNjsnAl5EqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFSPNtWQcYWcbeRaSrcAxxRCIWcF54UI6D0ccZFkGmoLGgacskHIh6WKM94PprOdjHtpPkcD3LoeycAg%2FdtorigliJJFP8JvZuoA%2BOxJh6OdfjUag5bQsDK1tiqyMGw5867CHdfwg7YYjXD6uCNVVh8JKG4auAqZw6LmlFIjwQ9cvQqr7JoMYQU4olcmxgqTKhXZt81Qc50y1wdVsvMIM1GadDSC5khLu%2BBqD%2BwqCXi0DmNSCuPo2d6JsXt5reHZk5h6Loe3ANP7n7%2FsQpuO4is0I5Lgas9F5yhyDtX%2FODQEqvmfA3sLhjrLEUO0L%2F3VdV5MVXURljHdJgZDAge%2FFYzRfwRsvEsMDE7eH0HALxeZtkolpQXQ0TMr7DQ0ukOkvw%2FtCu2xjOoqFz6AqPPwK4rer5Olr16%2BQSkgRMHSoeeFcvZOB9J%2F8n4tXeyeAb2F%2FZVhro2vI9Yj%2F4VxJRP9hY2GxisvjR%2F5y6fgHq9zfuoLHc%2BUkbWVBw1IOX3f%2FSWrIaGTpOAyAOCA%2FqrdAy35%2F1sUnUZo5nHgRBpzTUmJipttWQvc%2BW1%2FFFtE0VJWZk%2BxfF%2Fu9VBYO2qiYL4BS5oNUB6ibQW2ivFtH3xJ6hUPffdROVlPvVer8g9jbAegwJrWrt2cGDL1BgDUdLFMMfJrr0GOqUB9DvkpUu%2F%2B%2BtnBRz5GJjUpxvHamfPPRuIqmefd8hqS%2BKQeOk4m1J%2B31O0z3fAY9hPnqbxB9K2B9EwuMs%2BQkPA2lgWC9UvIvEc9W3YnE0Pqslj6T7VVG88CpnvG%2BqhzdhzAdU5Cek5vRF4ZjoLW1ajjI8lyc%2B85Ap6y4aAfxGT8Wrdr%2F2EwCdFrsky80v01gb5Itm87oDThhhqUwrBostg7mVNKhN1&X-Amz-Signature=f8c59338bc06b6f656fab9ccf5f051da39db6460b4312b2966a6f4820f0f9497&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5OCYO6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvk4MOQca7AfVm8ccsDS7Po2ZzQwaJg8%2BIcxofO2TAeAiEA10Xzn0dYlY0Ct%2BpLEQr1q2tvizaprW6Jh5TNjsnAl5EqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFSPNtWQcYWcbeRaSrcAxxRCIWcF54UI6D0ccZFkGmoLGgacskHIh6WKM94PprOdjHtpPkcD3LoeycAg%2FdtorigliJJFP8JvZuoA%2BOxJh6OdfjUag5bQsDK1tiqyMGw5867CHdfwg7YYjXD6uCNVVh8JKG4auAqZw6LmlFIjwQ9cvQqr7JoMYQU4olcmxgqTKhXZt81Qc50y1wdVsvMIM1GadDSC5khLu%2BBqD%2BwqCXi0DmNSCuPo2d6JsXt5reHZk5h6Loe3ANP7n7%2FsQpuO4is0I5Lgas9F5yhyDtX%2FODQEqvmfA3sLhjrLEUO0L%2F3VdV5MVXURljHdJgZDAge%2FFYzRfwRsvEsMDE7eH0HALxeZtkolpQXQ0TMr7DQ0ukOkvw%2FtCu2xjOoqFz6AqPPwK4rer5Olr16%2BQSkgRMHSoeeFcvZOB9J%2F8n4tXeyeAb2F%2FZVhro2vI9Yj%2F4VxJRP9hY2GxisvjR%2F5y6fgHq9zfuoLHc%2BUkbWVBw1IOX3f%2FSWrIaGTpOAyAOCA%2FqrdAy35%2F1sUnUZo5nHgRBpzTUmJipttWQvc%2BW1%2FFFtE0VJWZk%2BxfF%2Fu9VBYO2qiYL4BS5oNUB6ibQW2ivFtH3xJ6hUPffdROVlPvVer8g9jbAegwJrWrt2cGDL1BgDUdLFMMfJrr0GOqUB9DvkpUu%2F%2B%2BtnBRz5GJjUpxvHamfPPRuIqmefd8hqS%2BKQeOk4m1J%2B31O0z3fAY9hPnqbxB9K2B9EwuMs%2BQkPA2lgWC9UvIvEc9W3YnE0Pqslj6T7VVG88CpnvG%2BqhzdhzAdU5Cek5vRF4ZjoLW1ajjI8lyc%2B85Ap6y4aAfxGT8Wrdr%2F2EwCdFrsky80v01gb5Itm87oDThhhqUwrBostg7mVNKhN1&X-Amz-Signature=7044e3ad03cd642f11b8687afdfb845cb72a48149162211b0989182868f59295&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
