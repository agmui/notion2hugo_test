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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVPO2R%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASBsJAAAjlsrNrrPuaqTFMqJPrrky0Ll1Z0ebgqJ5AcAiA14ILjF7VVmEBnQpp2C5j5a6TFWicxTEgtUkz3%2BEbl7CqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9AHXp7pPYtfgNDTKtwDaTUDhxeYyOHxwx0s9g0Buqu1seoGIQtZWZnUXgRoSsiATDDSxGwBpLuwf94TAdRmeR6dTG6TSSNGdg2ZQymfk0hjvCRuKQFMoc%2BAd1SGZa8nvopJ4guh9LUTJuykRUz0hu0vijLQrkBVYBjoixgJIJr6Nxt5wqY5dVCs4CU3DuLf3zYRBnuoXZ%2BS%2FWzvRjmoE1tod5sEqqPnX%2BEfzmNNhHw%2BklO1FzQPb15%2B1IBME3PYA3yd6CfkjOiGZo57yLl%2BVTRPXLLhgQieq3NCt7igwHGmIlnn%2FHfdSfgspKVqD5QVqghx1z7dPpC4qCNqVo2KctWfSLGW00JdqS9tzoYVhyRlhJpgD6PlEZDwmoKSRs10hYRXMSgp1wTywayt%2FZPSFyULjK0fUcFDI1hl9XVcWnGUVQvTpTauINgjeFlI4zP2djqF25n%2FbckJyBgM5BLYQmI3uBYVKTIHyTc%2FiWS1L4GSnSxDcbhubP99qvuVlU9AVDU9EpitV7N1UD2b5JZW8vcMTlvlhOQqpzzSr48ApdvHpkT3SE4Xt24eMXvKWUKmN2GrAaBjeEjDj5En7r2RVfVyNMajTV%2FMOD%2FG6MGUGvJKLIhoqVXsz%2FFS3Qsn0Q%2FUPkSJgS0iaI%2Fqb5Mw8ZGHvwY6pgFCHKZRxxX7CWm74ZeboyLfVnlKRDJl33kQdgIbnOogGAzGILD1WLx8ejZNzaATR84sAUncwt5Tkzt04TkzRRnerAymrqmXeNU2QV9ekg3g77pB4cb25EfGt8AHcF8PERt8HqCEXbm09XrFxEOYszBIvpGT3H1AgPByg%2FcU%2F9uxVn7EdpBXgJfaY54Fk5Q3FSN5a6McrqYt9lKtg7r432HF4LgaBMuh&X-Amz-Signature=a65050a603cc0181a1e20b881584c4425a99e049a0c89c9c3d06d06fe1bafbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVPO2R%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASBsJAAAjlsrNrrPuaqTFMqJPrrky0Ll1Z0ebgqJ5AcAiA14ILjF7VVmEBnQpp2C5j5a6TFWicxTEgtUkz3%2BEbl7CqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9AHXp7pPYtfgNDTKtwDaTUDhxeYyOHxwx0s9g0Buqu1seoGIQtZWZnUXgRoSsiATDDSxGwBpLuwf94TAdRmeR6dTG6TSSNGdg2ZQymfk0hjvCRuKQFMoc%2BAd1SGZa8nvopJ4guh9LUTJuykRUz0hu0vijLQrkBVYBjoixgJIJr6Nxt5wqY5dVCs4CU3DuLf3zYRBnuoXZ%2BS%2FWzvRjmoE1tod5sEqqPnX%2BEfzmNNhHw%2BklO1FzQPb15%2B1IBME3PYA3yd6CfkjOiGZo57yLl%2BVTRPXLLhgQieq3NCt7igwHGmIlnn%2FHfdSfgspKVqD5QVqghx1z7dPpC4qCNqVo2KctWfSLGW00JdqS9tzoYVhyRlhJpgD6PlEZDwmoKSRs10hYRXMSgp1wTywayt%2FZPSFyULjK0fUcFDI1hl9XVcWnGUVQvTpTauINgjeFlI4zP2djqF25n%2FbckJyBgM5BLYQmI3uBYVKTIHyTc%2FiWS1L4GSnSxDcbhubP99qvuVlU9AVDU9EpitV7N1UD2b5JZW8vcMTlvlhOQqpzzSr48ApdvHpkT3SE4Xt24eMXvKWUKmN2GrAaBjeEjDj5En7r2RVfVyNMajTV%2FMOD%2FG6MGUGvJKLIhoqVXsz%2FFS3Qsn0Q%2FUPkSJgS0iaI%2Fqb5Mw8ZGHvwY6pgFCHKZRxxX7CWm74ZeboyLfVnlKRDJl33kQdgIbnOogGAzGILD1WLx8ejZNzaATR84sAUncwt5Tkzt04TkzRRnerAymrqmXeNU2QV9ekg3g77pB4cb25EfGt8AHcF8PERt8HqCEXbm09XrFxEOYszBIvpGT3H1AgPByg%2FcU%2F9uxVn7EdpBXgJfaY54Fk5Q3FSN5a6McrqYt9lKtg7r432HF4LgaBMuh&X-Amz-Signature=ea4d9da6829e674c0403584d6d484adbcd2149729a2a6820094181b693cbb5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
