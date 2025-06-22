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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PLM6KQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA%2B%2Fy5aZd2lLRayxFBvr8qU4bzfwzcTHzV4oY4SnetpbAiAIwwpqdP6id5Y5BPAmKQDUq%2Fy7%2Bqbj6xHHO5IOmcVKuiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI%2Bl2yqHmY9GAPSvKtwD%2BPsu23PseDJkv%2F6TZwukfydjo6svvdEguAjUfkvCk1sRbD9TnY5n%2B%2BTzB7GA4vzX6wEIYujdrwabPSytd%2BB6AzjfXIRtSgMCyvOC%2Bymgha%2BwcC64WeHz5SQgnIG9DzA2Sln4et0YNuipNGd9OYFCxA0qxcLRXvS9KC0D8JxjJW9keq5l2K%2B2Uwp0wAhGxHuYCLJ1gr8D%2FOI2L4UxDf76H%2BhkKv7M0naFj7OpxnHoZxzwwXq7GD08UQ2GDKbkqbKDRjE7SJwk5NmvUNZCt66hGJ93rnH3Ngjw6cx5Ng6qFq17MEMwq4BVo9gyyp24QPVtIuE8g0wJjPJ%2BtZNUqwZDaSJJp5v1j4lY7QGddVva7Lrz5Fu40FQ%2B8k5e6GuF3Dwyk%2FxKcXZH2lt7B5SJGEpn8pxSV%2BFd7U9rspYseYnGSxnL5FEn66dsqJn0PIv4NnPP6QgtU%2B4SweBhYq%2B%2BjOdlbERpL6Y6Gqs69exeqChAMIRNURTFC2QdbiMebKVj8Hepp6ZoYGrZ37%2BBRm%2FA8QmsxH28GXRFvh%2BtQSQAHx5AzH6gLhpFo4%2BWjkiH6ky%2B0OfotKQcvwZNN1tsHQwvZfK8ges0hEO07wThwua4IXkP%2BjFz43eUz4aDOGd9i0owjcfhwgY6pgGvKktWFUUsMLPNn7gZg8FJADsYayD5PG8w0ylkTMiZtmTsxXFc0oQ4ZIqQIuKjEWyHMRLF9ssd9Ojr6XV%2BDCijB8UQpKvQYUgmvBm3vJQ0gZippCZRRBK2Ol3PRzx4pDk3nTVQ1%2BjxKtaDrnVp8P6A1nDlCvVExshnvSHG%2BBP5cCps3DbwbBNIOV3Hvm4FwvbHYOUFu3amNp58fIOvbZ7LIkMn7GkW&X-Amz-Signature=703575b91d0f1f9be9adedfc0487cc7fc838b26942f82542a9cae0c72451542a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PLM6KQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA%2B%2Fy5aZd2lLRayxFBvr8qU4bzfwzcTHzV4oY4SnetpbAiAIwwpqdP6id5Y5BPAmKQDUq%2Fy7%2Bqbj6xHHO5IOmcVKuiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNI%2Bl2yqHmY9GAPSvKtwD%2BPsu23PseDJkv%2F6TZwukfydjo6svvdEguAjUfkvCk1sRbD9TnY5n%2B%2BTzB7GA4vzX6wEIYujdrwabPSytd%2BB6AzjfXIRtSgMCyvOC%2Bymgha%2BwcC64WeHz5SQgnIG9DzA2Sln4et0YNuipNGd9OYFCxA0qxcLRXvS9KC0D8JxjJW9keq5l2K%2B2Uwp0wAhGxHuYCLJ1gr8D%2FOI2L4UxDf76H%2BhkKv7M0naFj7OpxnHoZxzwwXq7GD08UQ2GDKbkqbKDRjE7SJwk5NmvUNZCt66hGJ93rnH3Ngjw6cx5Ng6qFq17MEMwq4BVo9gyyp24QPVtIuE8g0wJjPJ%2BtZNUqwZDaSJJp5v1j4lY7QGddVva7Lrz5Fu40FQ%2B8k5e6GuF3Dwyk%2FxKcXZH2lt7B5SJGEpn8pxSV%2BFd7U9rspYseYnGSxnL5FEn66dsqJn0PIv4NnPP6QgtU%2B4SweBhYq%2B%2BjOdlbERpL6Y6Gqs69exeqChAMIRNURTFC2QdbiMebKVj8Hepp6ZoYGrZ37%2BBRm%2FA8QmsxH28GXRFvh%2BtQSQAHx5AzH6gLhpFo4%2BWjkiH6ky%2B0OfotKQcvwZNN1tsHQwvZfK8ges0hEO07wThwua4IXkP%2BjFz43eUz4aDOGd9i0owjcfhwgY6pgGvKktWFUUsMLPNn7gZg8FJADsYayD5PG8w0ylkTMiZtmTsxXFc0oQ4ZIqQIuKjEWyHMRLF9ssd9Ojr6XV%2BDCijB8UQpKvQYUgmvBm3vJQ0gZippCZRRBK2Ol3PRzx4pDk3nTVQ1%2BjxKtaDrnVp8P6A1nDlCvVExshnvSHG%2BBP5cCps3DbwbBNIOV3Hvm4FwvbHYOUFu3amNp58fIOvbZ7LIkMn7GkW&X-Amz-Signature=82e7fe622ac574a84b985d6e44f1c6ec73a7fac565c0063ff1e0003a189a6b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
