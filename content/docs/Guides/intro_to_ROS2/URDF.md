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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XGOGGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDtVHYzj4b6UyLeM3HvuD%2FFzjMWYeKEgoVaulfyXoHjXAiA42RZy0UGyJRVQX585deB7Yb8%2BzI373e4D9nGJLuST%2FiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEfeEIJXxaNZyKGR4KtwDPWf7ZpC7JzKZ4JFiIR1ouJATWDquanOhHeHXvpWXsYPbgYCDClKjCWLFBTEwv3WhWT6kS%2FbDOBmfTrB8e42ZkrlLjk45%2BvNG3SLIo7p00rwHK%2BDVIfe5IC2dJGJUNLjvL1DorLudpqsHebSEiH6Eip9nuf0VwPJL5T1ASbEFa6VLFiFyVcov9MRih6I8gDiBXFgvXlfuHPt4wkUSrRnlBIemKKaOzzgbsLU5wu6nBHHu6FrBLyE8ErTftMdzEXOLSX9lQQoKDoHVXtWlZQjZ3k3IWiwyeQwCMafXCMKY3%2BvPjikTA4XdZXc9G50IvJlz2Bt4TQZA6dvdmiVmKFQ3oV8QvzRoJ2FYvzPmDYEpJbCNZvNzHqto3jMI5lNhbGNi6qPzLfPIgSkRKsfj3sJdenCvTYzcRBikTEZMApDCOw%2FD%2BfSjXWlN5ADI2JThu1MMoyv%2FjOTnO1s0VLWtZcOlK%2FWf9EZCJuXWHljIyR9HSKbPiXMJ%2FXuyGdLJjml2exzVL8ww%2FKQjJr1OGWO9sLtwv8nQhWqJWT8ynfiZFibpd7gf7We%2Fm5T%2Fw5N3habppJ%2BXl1FmNzmDfwKiyAmXpydJQxvnbUXY5ZZjpy1tfThLGifGs3HIVu9HuLQsX%2FQw%2FJLZxAY6pgG3TOPfbQELq%2BVmm6uDKwZCJpgu7A9CoSWTyURadhffK6Fffv8LRAi1jdECIhLov6IuuxkaSGb3NyP7H7nI34VQHJIXtRh%2BNIXoRXAbhdNflKdgrEg24t8vuqgKsE7%2BlNNkb%2FrC7COu4NgjYgMeA9xG7IJ7m8OcUSuTZGccntK%2Fb9LFhaIrrqiMVSMCEV7DHmPiIQmadQ4sSSl%2BA8E3III0SdY1G%2FbH&X-Amz-Signature=06e0b5d155ee3f9ebff98504db9f98087094dc3a3b201a8c78e43d61fbd933dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XGOGGS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDtVHYzj4b6UyLeM3HvuD%2FFzjMWYeKEgoVaulfyXoHjXAiA42RZy0UGyJRVQX585deB7Yb8%2BzI373e4D9nGJLuST%2FiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEfeEIJXxaNZyKGR4KtwDPWf7ZpC7JzKZ4JFiIR1ouJATWDquanOhHeHXvpWXsYPbgYCDClKjCWLFBTEwv3WhWT6kS%2FbDOBmfTrB8e42ZkrlLjk45%2BvNG3SLIo7p00rwHK%2BDVIfe5IC2dJGJUNLjvL1DorLudpqsHebSEiH6Eip9nuf0VwPJL5T1ASbEFa6VLFiFyVcov9MRih6I8gDiBXFgvXlfuHPt4wkUSrRnlBIemKKaOzzgbsLU5wu6nBHHu6FrBLyE8ErTftMdzEXOLSX9lQQoKDoHVXtWlZQjZ3k3IWiwyeQwCMafXCMKY3%2BvPjikTA4XdZXc9G50IvJlz2Bt4TQZA6dvdmiVmKFQ3oV8QvzRoJ2FYvzPmDYEpJbCNZvNzHqto3jMI5lNhbGNi6qPzLfPIgSkRKsfj3sJdenCvTYzcRBikTEZMApDCOw%2FD%2BfSjXWlN5ADI2JThu1MMoyv%2FjOTnO1s0VLWtZcOlK%2FWf9EZCJuXWHljIyR9HSKbPiXMJ%2FXuyGdLJjml2exzVL8ww%2FKQjJr1OGWO9sLtwv8nQhWqJWT8ynfiZFibpd7gf7We%2Fm5T%2Fw5N3habppJ%2BXl1FmNzmDfwKiyAmXpydJQxvnbUXY5ZZjpy1tfThLGifGs3HIVu9HuLQsX%2FQw%2FJLZxAY6pgG3TOPfbQELq%2BVmm6uDKwZCJpgu7A9CoSWTyURadhffK6Fffv8LRAi1jdECIhLov6IuuxkaSGb3NyP7H7nI34VQHJIXtRh%2BNIXoRXAbhdNflKdgrEg24t8vuqgKsE7%2BlNNkb%2FrC7COu4NgjYgMeA9xG7IJ7m8OcUSuTZGccntK%2Fb9LFhaIrrqiMVSMCEV7DHmPiIQmadQ4sSSl%2BA8E3III0SdY1G%2FbH&X-Amz-Signature=a8ebaaa69f1f7d0a556d6d0654028525b0dc537fd108730830d6315ba20123c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
