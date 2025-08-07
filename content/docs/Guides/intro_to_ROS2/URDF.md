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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCF7K7M6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCko4GZKIWnBaHuhlvoFIPxPMNdqP1Cc8%2FLOTwlzwzNQwIhANb1ykBeiGdjwl%2BVxNe1HlBJE5NVgMwsl%2BVc7EzjrtvhKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1cHkL6NCa29WwyEUq3ANXhRK%2FKNkQMLmIFFjdkKDJxjcNFKX82KISJ1oRfJKZBfcvg9IjQ2D2zIlI%2BcMlzZsok993NQsTBnJ96%2Fnlm4XhCNze5oVeM8ts3CN5t4CE9hy2M4YGYpazkCNfgw1bTdJcRq7vis0o7OlvJkACRymqqtnHPIbQH1Gzk0tuvCf6KHxr%2B%2FRDK4mHxVN3lvAjNFnz36rzCBt9n7g45%2BPtTa0htWT%2B9LI9D9lMzT7stTggw5xL%2FGWpFu2Q2dDckfbCR6RkjzEIiQoNX4B%2BTebY3N5ugqIrwIPYY9m1r0isljHOlIamKxqypf9RPZvGxCiEWbcBVbHFOfqf9%2Fvclte25x1RUkP6bl8iNA4aPR9SYTifq3DPhWkHU%2FUFDZOFIPUKmi6NJLGWJyXZ8RNVjLNPOHGzV5owcQ2yQqhBTtEuwTFLLFXokSBFthFZT1oymruqi6WRzY5kWM0lH7aIpmAmZOzJMZjzYN3R0Jf%2BWwKPq6AXOP3k4Uty2OqoAj%2B7xyN%2FiMa1fpgahz7SezFopot7%2BcCm64NsSGgbNVeo%2BTIW%2FV2vCgyKGmK6FO8ecMoTzQ7M%2FHohdwmGWLDI7wKzzAeFKeop3r3zjFr3iXKjM35aUHaWx0mG11Cz%2BExukoNrbzCQ%2BtLEBjqkAUwKKPvATQqeYN7ljCJB48FoILkmAARPy%2FUdskBJFGKoL1%2FtDEi7RZNuvafzF8PJSmdiBgCUln4u%2FfiByr5FOPB0J3Y7eKNPViBlgocaVv9mG8Q2OA58XRDSEZwg8dmqFi0b%2FVRi16NOamqR6jAj5zkUrfv%2FH9Saay9uWfzRo0BnsAHOERcYn%2BiELobCsjTE9iuj6liPB3y%2FdTmqN%2BADavHdSHhB&X-Amz-Signature=f2dc53256e2b66f089b47ceff12ca1e693c8726911a6b428fd7da76859eb5e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCF7K7M6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCko4GZKIWnBaHuhlvoFIPxPMNdqP1Cc8%2FLOTwlzwzNQwIhANb1ykBeiGdjwl%2BVxNe1HlBJE5NVgMwsl%2BVc7EzjrtvhKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1cHkL6NCa29WwyEUq3ANXhRK%2FKNkQMLmIFFjdkKDJxjcNFKX82KISJ1oRfJKZBfcvg9IjQ2D2zIlI%2BcMlzZsok993NQsTBnJ96%2Fnlm4XhCNze5oVeM8ts3CN5t4CE9hy2M4YGYpazkCNfgw1bTdJcRq7vis0o7OlvJkACRymqqtnHPIbQH1Gzk0tuvCf6KHxr%2B%2FRDK4mHxVN3lvAjNFnz36rzCBt9n7g45%2BPtTa0htWT%2B9LI9D9lMzT7stTggw5xL%2FGWpFu2Q2dDckfbCR6RkjzEIiQoNX4B%2BTebY3N5ugqIrwIPYY9m1r0isljHOlIamKxqypf9RPZvGxCiEWbcBVbHFOfqf9%2Fvclte25x1RUkP6bl8iNA4aPR9SYTifq3DPhWkHU%2FUFDZOFIPUKmi6NJLGWJyXZ8RNVjLNPOHGzV5owcQ2yQqhBTtEuwTFLLFXokSBFthFZT1oymruqi6WRzY5kWM0lH7aIpmAmZOzJMZjzYN3R0Jf%2BWwKPq6AXOP3k4Uty2OqoAj%2B7xyN%2FiMa1fpgahz7SezFopot7%2BcCm64NsSGgbNVeo%2BTIW%2FV2vCgyKGmK6FO8ecMoTzQ7M%2FHohdwmGWLDI7wKzzAeFKeop3r3zjFr3iXKjM35aUHaWx0mG11Cz%2BExukoNrbzCQ%2BtLEBjqkAUwKKPvATQqeYN7ljCJB48FoILkmAARPy%2FUdskBJFGKoL1%2FtDEi7RZNuvafzF8PJSmdiBgCUln4u%2FfiByr5FOPB0J3Y7eKNPViBlgocaVv9mG8Q2OA58XRDSEZwg8dmqFi0b%2FVRi16NOamqR6jAj5zkUrfv%2FH9Saay9uWfzRo0BnsAHOERcYn%2BiELobCsjTE9iuj6liPB3y%2FdTmqN%2BADavHdSHhB&X-Amz-Signature=7ccf7b18cfa1514fe5f888d69e38a4f0bad7b8757f694e1637f5870c10ec767c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
