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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANHPDZL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFhMWxOnk5OKkqGC0rXEP%2FJe%2F0QWHYj4oboqs9OR9Ug5AiAPk5j4SxphDt%2FpiFA0UMj6IT1JDvwFFOCUbWtFFqXk%2FiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSeAMwp98%2Fi%2BVVgdNKtwDJTKPmXAhWOBJqsWu9Af5kSi095tINrMf5YledMd%2BMmCJGlh4LHwloJgpL%2BIdfZe8D87WkbsgpZqmR1sJA4nDNMS6KxXPhpLm72QrnAjNTpc0%2F2iVL9d5w1nVtO2WTINMXd2m8uOnMgrno2m9Kp8KDvxG2detayIokvsJC040YyKdE9wX%2FqBJtcPs15MuVYpU%2BeoPgBGjL440DjGIcaqcC7o6O0vS7AaQVStRyql584OG6YkVWceH5z7xt5wLVNBoKi6g884iMPmYoghTiInkJwDH82YYdCfTC04rlJte95TLHlffGSfjsZ6oPZKWVy8%2FXz8S9Yf7rShFyUVFiOQMmsfWrG6aIeqvnBEVER7%2F4BNh%2BZKab7QybDe0uCdT%2FVXqHn1x9rfRRKu0cw5AE4A78%2BdD6gzy6OHYpJJyCcfxSLZyIKfB8CgKFE1w7ZFJgeWQdv1joONaFCIYQ7U375QWM1IMtugo0ojgC2llgPaFKXXawwBYWhwq27mjntvSAVFFQe%2FMfe3fOzlCY1e0rsWQpwe9JCtZptuYjRe2PZDd2rVY9YrQ4X4BkLU8JYd%2FHWvBI5Cg%2B6ypioWUDv9VFrzEflrkexbRI6h4d3wKGUomdPT4C7Ah4l9beJxHEaMwjZ%2FXygY6pgFnM1XQ4OULMExge6353I%2Fsxc7ue%2F3GXO3swXwARP7RAuO5RhTqpchub6iVd8vBVutlmQ%2Fr52RwCKxxxKBoXCI0YUUoIrM0aKzK764zAf%2BMb%2B7GrleuuaIA0%2FSL9WRBIUDUas9BdatNv8OoEVJA%2BlGMX%2FTGcjIMHVJn27EyvW%2Fq9wRW9csXj158wttZ4hJ0MM3MzNJu8bADoOEp4Ve3nrd1GJw7Gkku&X-Amz-Signature=1c8197b009f47bc5e8a70712ea1e2f7a69c5c37b69e9a66930a64c0127aad2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANHPDZL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFhMWxOnk5OKkqGC0rXEP%2FJe%2F0QWHYj4oboqs9OR9Ug5AiAPk5j4SxphDt%2FpiFA0UMj6IT1JDvwFFOCUbWtFFqXk%2FiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSeAMwp98%2Fi%2BVVgdNKtwDJTKPmXAhWOBJqsWu9Af5kSi095tINrMf5YledMd%2BMmCJGlh4LHwloJgpL%2BIdfZe8D87WkbsgpZqmR1sJA4nDNMS6KxXPhpLm72QrnAjNTpc0%2F2iVL9d5w1nVtO2WTINMXd2m8uOnMgrno2m9Kp8KDvxG2detayIokvsJC040YyKdE9wX%2FqBJtcPs15MuVYpU%2BeoPgBGjL440DjGIcaqcC7o6O0vS7AaQVStRyql584OG6YkVWceH5z7xt5wLVNBoKi6g884iMPmYoghTiInkJwDH82YYdCfTC04rlJte95TLHlffGSfjsZ6oPZKWVy8%2FXz8S9Yf7rShFyUVFiOQMmsfWrG6aIeqvnBEVER7%2F4BNh%2BZKab7QybDe0uCdT%2FVXqHn1x9rfRRKu0cw5AE4A78%2BdD6gzy6OHYpJJyCcfxSLZyIKfB8CgKFE1w7ZFJgeWQdv1joONaFCIYQ7U375QWM1IMtugo0ojgC2llgPaFKXXawwBYWhwq27mjntvSAVFFQe%2FMfe3fOzlCY1e0rsWQpwe9JCtZptuYjRe2PZDd2rVY9YrQ4X4BkLU8JYd%2FHWvBI5Cg%2B6ypioWUDv9VFrzEflrkexbRI6h4d3wKGUomdPT4C7Ah4l9beJxHEaMwjZ%2FXygY6pgFnM1XQ4OULMExge6353I%2Fsxc7ue%2F3GXO3swXwARP7RAuO5RhTqpchub6iVd8vBVutlmQ%2Fr52RwCKxxxKBoXCI0YUUoIrM0aKzK764zAf%2BMb%2B7GrleuuaIA0%2FSL9WRBIUDUas9BdatNv8OoEVJA%2BlGMX%2FTGcjIMHVJn27EyvW%2Fq9wRW9csXj158wttZ4hJ0MM3MzNJu8bADoOEp4Ve3nrd1GJw7Gkku&X-Amz-Signature=3bdc6cfde318ced45e7d5f1ad4665e7d8ad18c79dd849186761b9ea73940f003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
