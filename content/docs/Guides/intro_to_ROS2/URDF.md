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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNVCJUAJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIF%2BQ8p6kRAFH%2BLcwDw2C8NKIrp7vDx6hNBJmRKwaNNdLAiAiuBh4R0JsQub2u0YNoHxRICjBNQldFCafBYNqNBViZCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKlA4jfPkPYwhqejXKtwDXWB6c0%2FWkKrFcC7ZroKW7X9mVnB1auE3RtVpmrlupKA2er5gGkh%2Fm7pq%2BLZpIZ%2Bf2bFcILiyMhOlWbf89Mou7TxMxrPv5cAB4Fdj7yydPB18imy4ZiroAd58a3D%2FRcd7z3FI5%2B8y4bJ09nNjLWxa8xT1HAcVYhHMHKqgxIr3Miu96nQYgyqyP8jJXztNYUmZKEoOtJax3qu4mhxO8Tji1M9FNL9BPqZav4ZuX%2FF%2FA9ap%2B0mkRJxvHIu2HYQEU1qkTzLee5Gt9FZSmOAQH1iOUKWj4HuGnROhaB9k06SU4YXcRfWFxdKCgN68oLL8nqQL4owpLHTsq9mI6TQUVHnyO9blr0WjOrTNtx%2FnCVGppG%2BeoIy3Aacl9dNtLZgMyDZERor1GXsJvqK0%2BLEEkzBv8a3s4Np%2Bu43Eur%2BqMVjgvA97q%2FTP%2FnhcD08J70ISy94XJ0aMshdqixlFxPdbQ%2FuPEdoURKFF%2FyU4U7FJvRSeZdmCBidILLpL4uBDRf%2FgjZXZYZ8mdKQzjo%2FJtu8KLmnmKj3OSLpJYif2lyMkfymMUCy7HGH68xjpqmbviiH8Koz82wZJSg9CYWEvTKr4IFXKbt1uSZ633ZoT%2BcMi7d0TUboIyMAoI4FAOmdpN54ww4GZxAY6pgFMo5M5jIJS72ov9YCK%2FdpcVo3XuCS4nyB%2F8rdKV1jTeGrOWPJkAENx3eobv6QBvz%2BmwFWWbG7sndwYhhOxdlf%2B%2BmZhFG7OBzA6Bea5pc7WNk%2B5cH%2B%2BOpC83smFKXuGdA8V2zFKp5W4nWFVGe%2BHBdvBevfCtM5bORB49ZeX6y1vji1wLSrStAUzPbAIk%2FanhizmL1lUzv5PL6vY72xEH0PtuVlUurN7&X-Amz-Signature=7e83b7f167069143c3bfae02d199c564328d31234d29cabf80c5e0c96c3dbb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNVCJUAJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIF%2BQ8p6kRAFH%2BLcwDw2C8NKIrp7vDx6hNBJmRKwaNNdLAiAiuBh4R0JsQub2u0YNoHxRICjBNQldFCafBYNqNBViZCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKlA4jfPkPYwhqejXKtwDXWB6c0%2FWkKrFcC7ZroKW7X9mVnB1auE3RtVpmrlupKA2er5gGkh%2Fm7pq%2BLZpIZ%2Bf2bFcILiyMhOlWbf89Mou7TxMxrPv5cAB4Fdj7yydPB18imy4ZiroAd58a3D%2FRcd7z3FI5%2B8y4bJ09nNjLWxa8xT1HAcVYhHMHKqgxIr3Miu96nQYgyqyP8jJXztNYUmZKEoOtJax3qu4mhxO8Tji1M9FNL9BPqZav4ZuX%2FF%2FA9ap%2B0mkRJxvHIu2HYQEU1qkTzLee5Gt9FZSmOAQH1iOUKWj4HuGnROhaB9k06SU4YXcRfWFxdKCgN68oLL8nqQL4owpLHTsq9mI6TQUVHnyO9blr0WjOrTNtx%2FnCVGppG%2BeoIy3Aacl9dNtLZgMyDZERor1GXsJvqK0%2BLEEkzBv8a3s4Np%2Bu43Eur%2BqMVjgvA97q%2FTP%2FnhcD08J70ISy94XJ0aMshdqixlFxPdbQ%2FuPEdoURKFF%2FyU4U7FJvRSeZdmCBidILLpL4uBDRf%2FgjZXZYZ8mdKQzjo%2FJtu8KLmnmKj3OSLpJYif2lyMkfymMUCy7HGH68xjpqmbviiH8Koz82wZJSg9CYWEvTKr4IFXKbt1uSZ633ZoT%2BcMi7d0TUboIyMAoI4FAOmdpN54ww4GZxAY6pgFMo5M5jIJS72ov9YCK%2FdpcVo3XuCS4nyB%2F8rdKV1jTeGrOWPJkAENx3eobv6QBvz%2BmwFWWbG7sndwYhhOxdlf%2B%2BmZhFG7OBzA6Bea5pc7WNk%2B5cH%2B%2BOpC83smFKXuGdA8V2zFKp5W4nWFVGe%2BHBdvBevfCtM5bORB49ZeX6y1vji1wLSrStAUzPbAIk%2FanhizmL1lUzv5PL6vY72xEH0PtuVlUurN7&X-Amz-Signature=2d7ef85d616b657cd15b79f763fe6734ad2dc1a6128c91740d61ee575294e51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
