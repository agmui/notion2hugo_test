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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOWJ7GR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBX4BF2ZSXTZIjWFtva%2FoGiLXdxcI4m3H2Xx2mG9%2BhuAiEA0pJCGRWgpcvNc4lCIxpSKwqgF3SjwIBIWSPx4HtveQ0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5vaANKLNPwXR4mzyrcA1lzrZLeLf%2BwoZPy%2BaCseuNawkL8K0PyhLum2kpS5UEe%2BnrVkRbjX5uHOPYj%2B49DX5a2Wmnml0TgafQhSANsGWDGW37Sh%2BQIoDUuUDZBNtDQ2KRIFjZ7DqV0rFgP4HA7LLAeWLcJLzkkEoLIkz1Uc5DmDfQMunpZxZ9ZVohN0sBdbVDlMkYgceA5B8V9zesdm2VPn25IYNaLLCmy0X5H%2BP7GtSyx9WKqdCgV7atPJEz08NQkCHA%2FPBMlgupED8Ik%2FUJsXyXYKv5Hem7rsYs60F4L7EG6aCdLzYZTRG%2FGDcvPC9q1qElp5yQ2ohs7QUeuX%2BFvHMby4T3wf52VIe%2Fd1cN6VlpxEqZkgZsAezT37Za5ZR0qCUWgtyALqiF%2B21iMyRN4YlkZ%2Br3micmLgo8lVJwBFjHNgn5ymmSNsOi0fkCCMgVxtkoPIyhLGOyK7nng51PPQPGDXmXsLvfBBiPLMy6gjzdp56q0tOtkQsgqH1dEroZFdMXJMLDfRZpS5IximBhwLOxGJkL53UpwfKIa2%2FcTW4pP02V2J8dxmyHnRN8O8UuLHKPiWdC9Er1G%2FkQrFw9L4e3Ra4c6ItHjBYE1JEjTJm3TGtw8stSPu5%2FkR7OhQYqKMkqrllwBK8LTMNC4rL0GOqUBhlsG%2BnYs%2F%2FGoxPvsieCYBJACMg7HJEhwWq4n5572EnS3paem1M0XxgF4CD7F7NfnelP1V1mJ%2FYb7rhKHT9m7WbgUYuNmzdldxqeOayxeiRB7uXr9Ztat99CaatrYFdk2VmE7n3g7K8fMvr5MlIgPpHUOigxbXhM8CNzPEdSPfAQz1homzTPMWkCaH4UXJ3mF9kx4iE%2FT0ibqhy4oucqrMFX8zfkK&X-Amz-Signature=5c7967baa8b688a12864c1d657b9e04aa69d6ea9c22c350eff6f61cb89766051&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JOWJ7GR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBX4BF2ZSXTZIjWFtva%2FoGiLXdxcI4m3H2Xx2mG9%2BhuAiEA0pJCGRWgpcvNc4lCIxpSKwqgF3SjwIBIWSPx4HtveQ0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5vaANKLNPwXR4mzyrcA1lzrZLeLf%2BwoZPy%2BaCseuNawkL8K0PyhLum2kpS5UEe%2BnrVkRbjX5uHOPYj%2B49DX5a2Wmnml0TgafQhSANsGWDGW37Sh%2BQIoDUuUDZBNtDQ2KRIFjZ7DqV0rFgP4HA7LLAeWLcJLzkkEoLIkz1Uc5DmDfQMunpZxZ9ZVohN0sBdbVDlMkYgceA5B8V9zesdm2VPn25IYNaLLCmy0X5H%2BP7GtSyx9WKqdCgV7atPJEz08NQkCHA%2FPBMlgupED8Ik%2FUJsXyXYKv5Hem7rsYs60F4L7EG6aCdLzYZTRG%2FGDcvPC9q1qElp5yQ2ohs7QUeuX%2BFvHMby4T3wf52VIe%2Fd1cN6VlpxEqZkgZsAezT37Za5ZR0qCUWgtyALqiF%2B21iMyRN4YlkZ%2Br3micmLgo8lVJwBFjHNgn5ymmSNsOi0fkCCMgVxtkoPIyhLGOyK7nng51PPQPGDXmXsLvfBBiPLMy6gjzdp56q0tOtkQsgqH1dEroZFdMXJMLDfRZpS5IximBhwLOxGJkL53UpwfKIa2%2FcTW4pP02V2J8dxmyHnRN8O8UuLHKPiWdC9Er1G%2FkQrFw9L4e3Ra4c6ItHjBYE1JEjTJm3TGtw8stSPu5%2FkR7OhQYqKMkqrllwBK8LTMNC4rL0GOqUBhlsG%2BnYs%2F%2FGoxPvsieCYBJACMg7HJEhwWq4n5572EnS3paem1M0XxgF4CD7F7NfnelP1V1mJ%2FYb7rhKHT9m7WbgUYuNmzdldxqeOayxeiRB7uXr9Ztat99CaatrYFdk2VmE7n3g7K8fMvr5MlIgPpHUOigxbXhM8CNzPEdSPfAQz1homzTPMWkCaH4UXJ3mF9kx4iE%2FT0ibqhy4oucqrMFX8zfkK&X-Amz-Signature=9ade8dd8eb93c5aa078afb79942fb5744bfbede8187c8702337cf3850fb9d466&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
