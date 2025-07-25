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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLWDPS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDuNQKQRt5B3n7gQZZM4Ho5NzDoVvWx%2Bfaqw5zaP%2FcLHAIhAI%2FsLHTuaEQ%2Fn2BTL21mM4jZBFF%2FZOtdtxxdUPc%2BdUjEKv8DCDkQABoMNjM3NDIzMTgzODA1Igx0CdMq%2FzZbQBs%2Fu40q3APHnnw7pkvPZ8c8n7CO9nwBa7xjzTeUjE4IPfX1VE1MuHqQxp9zqnc9qMJPluArfW3JchuXRU5Bagh%2FdCg6KB8hVUtFqlvYWjOd3yCPgeSPfTJK8GNTNPV6pioIwwuMV4v%2BuC0rh4Q3Xuy63MKvjOzWkgSC%2BvA0SxbTdv0WwWHU5tzVcAWB6odBXaVpuEMEjeSAdgLyKY3IQ0yS5vmeWOtp69Dj2E0uy9TcydBrn5gTJDSbUXbzsio9vU0SOf41DUMFyiIIe3q4gaJgSaO1fr5eno3m5CpyBzdze%2FodbmQkcuRK6ie7PXXtTF7hDnU3m2516c%2BuRCIM0mczyQ2e9E%2Fl5F4Sm%2FFbl5YdN13Xa8IaXl1HWDdNXALdBwWdFZ0oBNttfpQ%2BJkyi0%2F5HvZLs98%2BEBX3TNIQ5NEjt9QevQmeOIfCNU24Rd1V1ZcnQBETBpOT1QYXOijcjDPr9vsOVwyrMCp88aiafaI7%2Beoi5ZSga51kw3DmiKPEfGikBHtqV0175Q7rjlSevJOtwYdZQC0nbWXGH57KCVIZOjCNLUvJH1IC2zOv8D2nT3K7Pfu95WHtfLJ3U26LJmqP9ZX07aBxVFKQETfJCahuDLgcALxWYxMUUm6z2OmmCYcjm2DD2iYvEBjqkAbCcd9cmFs%2BvY1h8LVlDdmvpiD98tvpxChEV%2FnlErdumiufvbcbDc9kzeU7qu%2Fc%2FUvz5bP4TOIpE5na%2FvQhfJowylpmoDjoVbtYwudpetPh657bbxZV1q7G9YaMBAgq8NFVp3MCkHfJuf%2Bjc0pw%2FtTSp7AHXae2wAbEbC6Ca%2FIBeli8UHix5%2FsIcNL6TxriirPgPJNjeQ1Zca6OEp62Ew2ncxcUl&X-Amz-Signature=3c6214cb13779b119aeca1eda0de37e04c79264b598f176ad19ed29d4c9b4f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLWDPS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDuNQKQRt5B3n7gQZZM4Ho5NzDoVvWx%2Bfaqw5zaP%2FcLHAIhAI%2FsLHTuaEQ%2Fn2BTL21mM4jZBFF%2FZOtdtxxdUPc%2BdUjEKv8DCDkQABoMNjM3NDIzMTgzODA1Igx0CdMq%2FzZbQBs%2Fu40q3APHnnw7pkvPZ8c8n7CO9nwBa7xjzTeUjE4IPfX1VE1MuHqQxp9zqnc9qMJPluArfW3JchuXRU5Bagh%2FdCg6KB8hVUtFqlvYWjOd3yCPgeSPfTJK8GNTNPV6pioIwwuMV4v%2BuC0rh4Q3Xuy63MKvjOzWkgSC%2BvA0SxbTdv0WwWHU5tzVcAWB6odBXaVpuEMEjeSAdgLyKY3IQ0yS5vmeWOtp69Dj2E0uy9TcydBrn5gTJDSbUXbzsio9vU0SOf41DUMFyiIIe3q4gaJgSaO1fr5eno3m5CpyBzdze%2FodbmQkcuRK6ie7PXXtTF7hDnU3m2516c%2BuRCIM0mczyQ2e9E%2Fl5F4Sm%2FFbl5YdN13Xa8IaXl1HWDdNXALdBwWdFZ0oBNttfpQ%2BJkyi0%2F5HvZLs98%2BEBX3TNIQ5NEjt9QevQmeOIfCNU24Rd1V1ZcnQBETBpOT1QYXOijcjDPr9vsOVwyrMCp88aiafaI7%2Beoi5ZSga51kw3DmiKPEfGikBHtqV0175Q7rjlSevJOtwYdZQC0nbWXGH57KCVIZOjCNLUvJH1IC2zOv8D2nT3K7Pfu95WHtfLJ3U26LJmqP9ZX07aBxVFKQETfJCahuDLgcALxWYxMUUm6z2OmmCYcjm2DD2iYvEBjqkAbCcd9cmFs%2BvY1h8LVlDdmvpiD98tvpxChEV%2FnlErdumiufvbcbDc9kzeU7qu%2Fc%2FUvz5bP4TOIpE5na%2FvQhfJowylpmoDjoVbtYwudpetPh657bbxZV1q7G9YaMBAgq8NFVp3MCkHfJuf%2Bjc0pw%2FtTSp7AHXae2wAbEbC6Ca%2FIBeli8UHix5%2FsIcNL6TxriirPgPJNjeQ1Zca6OEp62Ew2ncxcUl&X-Amz-Signature=85943667a13cff19cd5e4e0d58f6c04cbd0152825c64a6495d85d8e2dd864809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
