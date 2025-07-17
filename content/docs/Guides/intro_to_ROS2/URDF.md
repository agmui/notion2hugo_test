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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5OXTUU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDBNoONAOg4O97NSkwqmfuF0xYYzCQxaFopmobbtHCzSgIgRyUaXW%2BC0tvLZPqL5vnAwA6lyPV1CV5AJnSJz5QljCEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDG2vHz1Y%2BtRIqFH7iCrcA37JiHUXG0G0rlQkQXv5XqhV6yvmKBVf8DCp9vvifcOV9oxBXqmWM3zyvDEm25HGXTlST%2BBwl9laEuT5yF%2BO7UizoQOlLAhrgu6JUJ3NvAOP4PFiNfDu4QouUaY5xoLOgxzQ%2FYDlebGqs8MKElyoOQH%2Fy%2BWplKCif1bCGrZttUeZdLQjpqNmxBIpxK4cFr%2FXLkhyaXtBfWlISv4T%2BvomMdK%2B0SLHzX69QKKE8gAzDY80l454bgzZ05Jezj%2B3Qg9QokcPkTlqVgi7At5sAK5uWGtpFlRuicZjJvIURZ9ADoAw04P6pcx%2FN0jtl7qnCuZHw4BL5jfUSdbfTI9CiT6porshwyTM%2FlHWKj2ery9rbmg33Kw1vJb%2FlU2KWnmbhVu%2Bg2OWvvmuEZ7864QW%2FIV2ZuM%2BaV%2F%2F9vxYllcP6g2fFqlSSQq8lxfun3PI5UMQnm3UlQ%2FMDZoQ2%2BgT%2Fb94EH8jmBqjAl3vOTlQpzlyLYrk9GwvSzej7x9DaLwBFhBqy3VaVWgsrhO2Qx5bOn4fFSE9NoCRC5pFWjeuSeFoYMSVqwuW0DXopruryicIH1q2GDs4fX10aDCa9d3hkMhhQWvMgskNphvxUI7rOv8XuaTkm9q5aJK5cq%2Fg46Va%2Fp8HMLHh48MGOqUBZ0h5UMSUkKb1jzGuvQCLn1XF4OoZIEv26%2B4kemfXpANEulwLFjxMXWUKZjoY7gF4lNsyEFvFSr7nKPyaxvpeHzPm67A%2Bo8XrdFTAkz7uBjipTzb6gmTjcdoPJcLV31SsMt1bDCFLSXpLSrC5h81Ls5TDiYv6GdJe5QKKz62u1VQwqO7Xg4mBsFe7KkYy22ZGJ9pv3PZe%2FVV3ME0LHhzKZ9n7nTD%2F&X-Amz-Signature=ad0550b9210a49e45b9f6437aa346b2bf4d29ae996615954d357c3d9fe90762d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5OXTUU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDBNoONAOg4O97NSkwqmfuF0xYYzCQxaFopmobbtHCzSgIgRyUaXW%2BC0tvLZPqL5vnAwA6lyPV1CV5AJnSJz5QljCEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDG2vHz1Y%2BtRIqFH7iCrcA37JiHUXG0G0rlQkQXv5XqhV6yvmKBVf8DCp9vvifcOV9oxBXqmWM3zyvDEm25HGXTlST%2BBwl9laEuT5yF%2BO7UizoQOlLAhrgu6JUJ3NvAOP4PFiNfDu4QouUaY5xoLOgxzQ%2FYDlebGqs8MKElyoOQH%2Fy%2BWplKCif1bCGrZttUeZdLQjpqNmxBIpxK4cFr%2FXLkhyaXtBfWlISv4T%2BvomMdK%2B0SLHzX69QKKE8gAzDY80l454bgzZ05Jezj%2B3Qg9QokcPkTlqVgi7At5sAK5uWGtpFlRuicZjJvIURZ9ADoAw04P6pcx%2FN0jtl7qnCuZHw4BL5jfUSdbfTI9CiT6porshwyTM%2FlHWKj2ery9rbmg33Kw1vJb%2FlU2KWnmbhVu%2Bg2OWvvmuEZ7864QW%2FIV2ZuM%2BaV%2F%2F9vxYllcP6g2fFqlSSQq8lxfun3PI5UMQnm3UlQ%2FMDZoQ2%2BgT%2Fb94EH8jmBqjAl3vOTlQpzlyLYrk9GwvSzej7x9DaLwBFhBqy3VaVWgsrhO2Qx5bOn4fFSE9NoCRC5pFWjeuSeFoYMSVqwuW0DXopruryicIH1q2GDs4fX10aDCa9d3hkMhhQWvMgskNphvxUI7rOv8XuaTkm9q5aJK5cq%2Fg46Va%2Fp8HMLHh48MGOqUBZ0h5UMSUkKb1jzGuvQCLn1XF4OoZIEv26%2B4kemfXpANEulwLFjxMXWUKZjoY7gF4lNsyEFvFSr7nKPyaxvpeHzPm67A%2Bo8XrdFTAkz7uBjipTzb6gmTjcdoPJcLV31SsMt1bDCFLSXpLSrC5h81Ls5TDiYv6GdJe5QKKz62u1VQwqO7Xg4mBsFe7KkYy22ZGJ9pv3PZe%2FVV3ME0LHhzKZ9n7nTD%2F&X-Amz-Signature=90d5b0710676e3f0c1bcb7c43fefec839269a41818f8ede7c9f5486b84701fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
