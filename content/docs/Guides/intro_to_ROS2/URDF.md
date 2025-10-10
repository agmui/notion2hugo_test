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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627P47CSY%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDkPJcfzd2rmFlvPvsbFBGbZ2almCKg0IpA4M9yQWtcWAIgFCmfHCqueBPpQckLa0b7g2ytPYCZof4RSHgQTQNTfhcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQQFYpG42URePC7vCrcA4Y95HED6dz4IYavYcqpSgYz16tB4WK5XxEABqH%2FeDXiiUNQMOIFDzEC%2FxZT%2Bi4zCB7axDt%2FEnk3ye0Kyttb924bW2oGWDZePdp2gOBWd7WJZqbiNVN1WoZHMl6PmFqEdG2E%2BsZT5DO%2BX78mkSY8QhwgUiJFtl%2Fg8mGKwk6q4U7kyWHL0EzVAxaysw4fuQJTdsP%2FOJDesqL7gcAaY%2FPqYp9sBxJwP%2FRVDe6vRz0v2cXVDOppPhT39n2ey%2FxNRmCa2MuH5O0Yf%2FeDLCtUd2CThav1q5mByYWFLN2oYrjEHKRkBMIauv%2FKPcybJS6ZoTLZ6xp0mZEHo84I3vAwe3727T9%2F%2FzAVjxHAX05buVbi5O%2BQyjG19Uc%2BXdIdV%2FWb9kay%2F8hYKlibKmxtRgLWFVUzZw6EHcLoCGd0zK1JNs5EuAyTABqTJIERGoXnsiO2LH7eM4EIQrbeJ6hSABOBAFSUbMgoRLrFDxr%2BwtDGM%2Bkb7qG2MbGYy4X7vApCPjqxMI1436Hhbc7XRdjxpLrq2PejzGurt5OCBs9suEC8O2BLyIETMIq57WABXA7zmuuI4d9pzStqb4xIG3WYKMansLGPkA6zmqQzsZAeXa953VqNiE%2FvEPg%2FAFGmlVIzhn4xMJCpoccGOqUBasSr0M1lQmUCkmMkpOBSmaX0A0XXMkh3sFNnVOdc7YZHzoTvw9ZmzNrIuhE69A1mlKo5Yqzf%2B7VFsWMB11IyuiHIicgI78DBuIwP%2FI9jdqj1c6SpLwmxjX2bTpw%2BM9zhy1h%2Bx44ccinWztAM%2FwqmaBWFPEytMBoYUak1%2FRd9uflbB7PF12lfc7mPlRkHgTih8zzbaGW8wz1nbsJE1gWYyLEcusot&X-Amz-Signature=639dda386e94420900e06c5257ecdbf8969761fc93b7b51f50cccd240bf882d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627P47CSY%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDkPJcfzd2rmFlvPvsbFBGbZ2almCKg0IpA4M9yQWtcWAIgFCmfHCqueBPpQckLa0b7g2ytPYCZof4RSHgQTQNTfhcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQQFYpG42URePC7vCrcA4Y95HED6dz4IYavYcqpSgYz16tB4WK5XxEABqH%2FeDXiiUNQMOIFDzEC%2FxZT%2Bi4zCB7axDt%2FEnk3ye0Kyttb924bW2oGWDZePdp2gOBWd7WJZqbiNVN1WoZHMl6PmFqEdG2E%2BsZT5DO%2BX78mkSY8QhwgUiJFtl%2Fg8mGKwk6q4U7kyWHL0EzVAxaysw4fuQJTdsP%2FOJDesqL7gcAaY%2FPqYp9sBxJwP%2FRVDe6vRz0v2cXVDOppPhT39n2ey%2FxNRmCa2MuH5O0Yf%2FeDLCtUd2CThav1q5mByYWFLN2oYrjEHKRkBMIauv%2FKPcybJS6ZoTLZ6xp0mZEHo84I3vAwe3727T9%2F%2FzAVjxHAX05buVbi5O%2BQyjG19Uc%2BXdIdV%2FWb9kay%2F8hYKlibKmxtRgLWFVUzZw6EHcLoCGd0zK1JNs5EuAyTABqTJIERGoXnsiO2LH7eM4EIQrbeJ6hSABOBAFSUbMgoRLrFDxr%2BwtDGM%2Bkb7qG2MbGYy4X7vApCPjqxMI1436Hhbc7XRdjxpLrq2PejzGurt5OCBs9suEC8O2BLyIETMIq57WABXA7zmuuI4d9pzStqb4xIG3WYKMansLGPkA6zmqQzsZAeXa953VqNiE%2FvEPg%2FAFGmlVIzhn4xMJCpoccGOqUBasSr0M1lQmUCkmMkpOBSmaX0A0XXMkh3sFNnVOdc7YZHzoTvw9ZmzNrIuhE69A1mlKo5Yqzf%2B7VFsWMB11IyuiHIicgI78DBuIwP%2FI9jdqj1c6SpLwmxjX2bTpw%2BM9zhy1h%2Bx44ccinWztAM%2FwqmaBWFPEytMBoYUak1%2FRd9uflbB7PF12lfc7mPlRkHgTih8zzbaGW8wz1nbsJE1gWYyLEcusot&X-Amz-Signature=49a3fece9b48e9cde48b38e889887f5749b87e1ce8d3db8e77a1d42fadee31ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
