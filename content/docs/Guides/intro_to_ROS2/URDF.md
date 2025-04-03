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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDANW7D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiPXMZmg98tPcpidJIeVNOp028BdGWX1m2Oq%2FLfpEq%2FAIhAIxzfCNE1aRylQ2RMeWXYgPcHrEwUTsKcH9YSvo6zpG2KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Blj%2FpuWMgUGReAeIq3AMe4uSJNOspkuuMohz5yHNrxKshGc%2BFONHy4IqV3temmtYWDanW0YX5Mhv6hJCO8pE6%2BDCRN6V3IMYKfMlQ%2BJdZ6jwI0m4Jx%2FFpUH%2BeQKhl4C%2BA77taxktVuhglJaNIn4tbvWyIWJ67pJ6bhl6psPUtb7%2BDpqYsdveukQBvdpq2tNGEY8wv31TeTJMOliZQu3WaSiN0MGX7j%2B0x65QM9E%2BGcVH1f7LYlcH7bgXXzMkoXC1GuzfwcK%2BcmuQSoH%2Fe4BXLtkwxCYJj5pSetog6FbedSeuTsQ8fzY2xLT0csqM0mSkTOdzuOu1rLI3z9Di2VVXE7434L%2FKDdTEKuy5fHZGSKIjfW74f%2FbV%2FW4ZTBF6zjmjml%2BQYaog%2FJmMoEGbVNJaPKfdwPeM6C1bOjq5f%2BTBYAGIX%2F2vBnz5RjThCAv5b6EszmobdYwk0c9RyWfNB4%2B5b9m03HxLoRjJdbfCNFBxosRJbVn3%2BjRCB36g8scrsbcxxwY7Tg5Kqk3QE5h6pnp9oXKl%2FYsJLI49E7rbxd08tIH2hUbpuL%2B8%2B%2FpsSsV1nz%2BmIe%2BB1AO3ZYO%2FjZZL7Y64Kje0%2FbTL4XlQAkxV%2B78DvYzOHg8D9YACa0o%2FOUG93u4UB0StvbgBL2nbzbDCLhLu%2FBjqkAcvcSgdOmuvsHqoXvX%2BVqC7kWmMy34SMIzdePVzUGBNDKPna%2BNJ%2BrH2126T4OvZABag57gHUX5X1ysjW%2FNdB7cqJ6amkslI0d7d3C3DB16mYN2mU41CAuXBVZ7Puvs0V4oDDGbiKhJCcYXJDG6hqZo5nCXTHr%2B4OZ5ZuZ3OsVmBjW5ibXZyjN4hHniBHw9v0mrE4BHzGsAEHVOvW0R0FNi7eVfz8&X-Amz-Signature=960d16e86dcc81870cf99b96fe2a9bc25f7b5e08a93adf2a12abc523e469b96d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXDANW7D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiPXMZmg98tPcpidJIeVNOp028BdGWX1m2Oq%2FLfpEq%2FAIhAIxzfCNE1aRylQ2RMeWXYgPcHrEwUTsKcH9YSvo6zpG2KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Blj%2FpuWMgUGReAeIq3AMe4uSJNOspkuuMohz5yHNrxKshGc%2BFONHy4IqV3temmtYWDanW0YX5Mhv6hJCO8pE6%2BDCRN6V3IMYKfMlQ%2BJdZ6jwI0m4Jx%2FFpUH%2BeQKhl4C%2BA77taxktVuhglJaNIn4tbvWyIWJ67pJ6bhl6psPUtb7%2BDpqYsdveukQBvdpq2tNGEY8wv31TeTJMOliZQu3WaSiN0MGX7j%2B0x65QM9E%2BGcVH1f7LYlcH7bgXXzMkoXC1GuzfwcK%2BcmuQSoH%2Fe4BXLtkwxCYJj5pSetog6FbedSeuTsQ8fzY2xLT0csqM0mSkTOdzuOu1rLI3z9Di2VVXE7434L%2FKDdTEKuy5fHZGSKIjfW74f%2FbV%2FW4ZTBF6zjmjml%2BQYaog%2FJmMoEGbVNJaPKfdwPeM6C1bOjq5f%2BTBYAGIX%2F2vBnz5RjThCAv5b6EszmobdYwk0c9RyWfNB4%2B5b9m03HxLoRjJdbfCNFBxosRJbVn3%2BjRCB36g8scrsbcxxwY7Tg5Kqk3QE5h6pnp9oXKl%2FYsJLI49E7rbxd08tIH2hUbpuL%2B8%2B%2FpsSsV1nz%2BmIe%2BB1AO3ZYO%2FjZZL7Y64Kje0%2FbTL4XlQAkxV%2B78DvYzOHg8D9YACa0o%2FOUG93u4UB0StvbgBL2nbzbDCLhLu%2FBjqkAcvcSgdOmuvsHqoXvX%2BVqC7kWmMy34SMIzdePVzUGBNDKPna%2BNJ%2BrH2126T4OvZABag57gHUX5X1ysjW%2FNdB7cqJ6amkslI0d7d3C3DB16mYN2mU41CAuXBVZ7Puvs0V4oDDGbiKhJCcYXJDG6hqZo5nCXTHr%2B4OZ5ZuZ3OsVmBjW5ibXZyjN4hHniBHw9v0mrE4BHzGsAEHVOvW0R0FNi7eVfz8&X-Amz-Signature=99b6013d600ea5dfc6bbca71c20b6669dbfeb5284175a380a1528f05e03cf540&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
