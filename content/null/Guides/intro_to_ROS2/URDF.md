---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKO4FY5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDvB67DeITzGcuWeN1bUKJz38%2BfmpYXm7zevqzbbZYJ%2FwIhAJPV0er4OQZ57OOuBB8EcAJ%2FnSNS%2B%2Bijsoohf%2BE8RfKTKv8DCDkQABoMNjM3NDIzMTgzODA1IgzARjfAL6amzNy9B9wq3APkPdbn61k4RBiAj%2B5lxcjzBBP84zsDbIkBatqQZFHd0w6Gn%2FBHg6g%2F%2F6yA5OnC6woP1bW0UPvQ202PodqYk%2FQswspHkdSw%2BHdLLXsiVLe7e6rEVUYtHwj%2Fgvy9kOLsF6oKLHO88H7eQGX0DD2g8vJ8aOmn2H2oXDCzbvdCyHCw%2FMhxrGO6JjrBBNGHiqwYRE3QEJ%2FJqfxaPhvfQ77TKVwfltdCXCdw9jorXpcYEds6ukWrNCBoVnIHxRL%2FU%2F0KuvNT1XWY4OpGYHmhY6sm%2B2zM%2BqWqL5rsufqJBX%2F%2FqkPu%2BPaaQERXGVRN4JM13%2B%2FvhUn0GGmabYUDMdTViPeGMQ17D9nyBWYN8Ba7Gs8CaoiPkMHeM50qU3q6TIzAW%2FSMo3r0qBL8yX0381aMQF5cpultIXuZrRU3YGMwt5bIhkZ37psiL1SVc2oCjU6mNY7UbvaygEEwQpvmEGlnHierHGWQJSJ0FYZCsluqw2%2BNh5Sb1lpUFYK9YHS0V8zN3VxmwOxElXXLoz5uEX8vk2tZXnK1vwcaJ5SDvKxqJfLnyHlzpIbbS5p35vdofgcIePW6d%2F2Ski1HStQ1RJFVJe%2F1fakE3IQLYiqq%2Fir7e80GTchtq0i47N9V8jr%2BvJ7eXzCfz4q9BjqkAXOXzXFuXOpsElckzED2TyU380M8FcZywb4KroNZaCx84tbPuL1WutPqtFLV3ZyHdjnkKm3ajS8hUVZUeYJdU4uz7%2BLuSPGHwbPYH8C57gm7ChWKAqIhKf%2BI2Y3LGbCPA5h2CxtiUlYBcaGkx5Kl1LFJxZApAWy9kIN6x8%2Bz%2BOyJX7AT74FlVWO%2FzPfarPfx%2BnvEaylc0nPznxg7gA5DlgpH%2FRgp&X-Amz-Signature=f8a33be9de06ed2395b98864e09fd19d42ee73669a4fcf26c7f1e896b6440907&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKO4FY5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDvB67DeITzGcuWeN1bUKJz38%2BfmpYXm7zevqzbbZYJ%2FwIhAJPV0er4OQZ57OOuBB8EcAJ%2FnSNS%2B%2Bijsoohf%2BE8RfKTKv8DCDkQABoMNjM3NDIzMTgzODA1IgzARjfAL6amzNy9B9wq3APkPdbn61k4RBiAj%2B5lxcjzBBP84zsDbIkBatqQZFHd0w6Gn%2FBHg6g%2F%2F6yA5OnC6woP1bW0UPvQ202PodqYk%2FQswspHkdSw%2BHdLLXsiVLe7e6rEVUYtHwj%2Fgvy9kOLsF6oKLHO88H7eQGX0DD2g8vJ8aOmn2H2oXDCzbvdCyHCw%2FMhxrGO6JjrBBNGHiqwYRE3QEJ%2FJqfxaPhvfQ77TKVwfltdCXCdw9jorXpcYEds6ukWrNCBoVnIHxRL%2FU%2F0KuvNT1XWY4OpGYHmhY6sm%2B2zM%2BqWqL5rsufqJBX%2F%2FqkPu%2BPaaQERXGVRN4JM13%2B%2FvhUn0GGmabYUDMdTViPeGMQ17D9nyBWYN8Ba7Gs8CaoiPkMHeM50qU3q6TIzAW%2FSMo3r0qBL8yX0381aMQF5cpultIXuZrRU3YGMwt5bIhkZ37psiL1SVc2oCjU6mNY7UbvaygEEwQpvmEGlnHierHGWQJSJ0FYZCsluqw2%2BNh5Sb1lpUFYK9YHS0V8zN3VxmwOxElXXLoz5uEX8vk2tZXnK1vwcaJ5SDvKxqJfLnyHlzpIbbS5p35vdofgcIePW6d%2F2Ski1HStQ1RJFVJe%2F1fakE3IQLYiqq%2Fir7e80GTchtq0i47N9V8jr%2BvJ7eXzCfz4q9BjqkAXOXzXFuXOpsElckzED2TyU380M8FcZywb4KroNZaCx84tbPuL1WutPqtFLV3ZyHdjnkKm3ajS8hUVZUeYJdU4uz7%2BLuSPGHwbPYH8C57gm7ChWKAqIhKf%2BI2Y3LGbCPA5h2CxtiUlYBcaGkx5Kl1LFJxZApAWy9kIN6x8%2Bz%2BOyJX7AT74FlVWO%2FzPfarPfx%2BnvEaylc0nPznxg7gA5DlgpH%2FRgp&X-Amz-Signature=c6c639405ecd76723dc1f63dcb19f2c3ca01c51a70019028c1d0eccbcd746244&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
