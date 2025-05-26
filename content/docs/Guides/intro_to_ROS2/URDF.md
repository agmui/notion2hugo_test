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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUPSZSY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvxO5ZUCDMbYO2cSluzQpKwley9oA5agwZTvcyWMhQlwIhAPrtsk2imO4Vfxt8PxQQ8I9nJTtGHQQhdibM9P8v4F26Kv8DCE4QABoMNjM3NDIzMTgzODA1Igz6Bx4LI%2FfmGVmaBgAq3ANhXzSplId0cfn31xl2xljSqOBn25Qwech8nFhe%2FIthV%2FfFvM4%2B6gl%2BTym%2FSzQIMjuWj2IRCa%2B1CG1S33qWw737phDd%2BtkrjBN%2BVXWVywQ0EDl1kD0SwYwQe4V7AwmA67s40Ha57sZNCyOxMXsrviVQsRgLm1X693LbCNdAUHxtb73fZ827mYZQ%2FrOWJBYROckBIbk2gHuq4hcaibgZX1GuDlBYT3yQ5bKDmK3CNHbquWmL9SR9H%2B9QfBOBDO79tLOEaYpHbujyMftGGTNawHGJ9m%2F17BT3kMGUH1GXUy4XIaFgedkNztgivvbGd00xNsCOwPU0Kua6bC%2BNWBx%2BNUu39O0wJXlxP%2BaW50nW8Ua%2FYuWH2UWZRqJVRUBE4JWg%2FvFFnh3q08xOYV9nTRHzCSpXQlWKaLrnoeBt4wt36QSUZlEpn90fB1JuHqVmMbz%2BI%2Bxgx%2FWoWnI1NeFawjqgGpJRgsq%2BJ%2FI8cH0rFMW7cNWOUWZydC8HBAPCJqfTzqfNPSy7aZnUvEC6WpYVBlkNjwtpCXpMK4KO6aLOyOZbiaqB0ZO64%2F7sVv9xA0EzR6eci8OMMHKDlbBvrm5LcYEC5wWRBD1MFR7owMhIsoCCwo9TvTYG1pF36IyJlKsoGzC8q9PBBjqkAe25WCsmoFEVK%2BdUbCyrHhIBdaIp%2Br49tAbtPiELzh1BApRz4PdTkDpjvkJTwPc9vJB8JnRX%2Fjx3vkvRKtxW4HGmCJslYb%2B9kL7VLiyssr0LaItaeC139C1A7cHogDOpWQqH0sLSOawFNgqaOyP4JH%2FAXdFtDA%2FxzkcT%2FxwxQBEPazLW6FJ%2BOfC9usKCduWzEo6udLox4fBBtmdlelEplI2QHGJ2&X-Amz-Signature=01715727a129ac86eae4e4a6d2d7ad42bd2b11168cb00fc03c3256d837d078be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUPSZSY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvxO5ZUCDMbYO2cSluzQpKwley9oA5agwZTvcyWMhQlwIhAPrtsk2imO4Vfxt8PxQQ8I9nJTtGHQQhdibM9P8v4F26Kv8DCE4QABoMNjM3NDIzMTgzODA1Igz6Bx4LI%2FfmGVmaBgAq3ANhXzSplId0cfn31xl2xljSqOBn25Qwech8nFhe%2FIthV%2FfFvM4%2B6gl%2BTym%2FSzQIMjuWj2IRCa%2B1CG1S33qWw737phDd%2BtkrjBN%2BVXWVywQ0EDl1kD0SwYwQe4V7AwmA67s40Ha57sZNCyOxMXsrviVQsRgLm1X693LbCNdAUHxtb73fZ827mYZQ%2FrOWJBYROckBIbk2gHuq4hcaibgZX1GuDlBYT3yQ5bKDmK3CNHbquWmL9SR9H%2B9QfBOBDO79tLOEaYpHbujyMftGGTNawHGJ9m%2F17BT3kMGUH1GXUy4XIaFgedkNztgivvbGd00xNsCOwPU0Kua6bC%2BNWBx%2BNUu39O0wJXlxP%2BaW50nW8Ua%2FYuWH2UWZRqJVRUBE4JWg%2FvFFnh3q08xOYV9nTRHzCSpXQlWKaLrnoeBt4wt36QSUZlEpn90fB1JuHqVmMbz%2BI%2Bxgx%2FWoWnI1NeFawjqgGpJRgsq%2BJ%2FI8cH0rFMW7cNWOUWZydC8HBAPCJqfTzqfNPSy7aZnUvEC6WpYVBlkNjwtpCXpMK4KO6aLOyOZbiaqB0ZO64%2F7sVv9xA0EzR6eci8OMMHKDlbBvrm5LcYEC5wWRBD1MFR7owMhIsoCCwo9TvTYG1pF36IyJlKsoGzC8q9PBBjqkAe25WCsmoFEVK%2BdUbCyrHhIBdaIp%2Br49tAbtPiELzh1BApRz4PdTkDpjvkJTwPc9vJB8JnRX%2Fjx3vkvRKtxW4HGmCJslYb%2B9kL7VLiyssr0LaItaeC139C1A7cHogDOpWQqH0sLSOawFNgqaOyP4JH%2FAXdFtDA%2FxzkcT%2FxwxQBEPazLW6FJ%2BOfC9usKCduWzEo6udLox4fBBtmdlelEplI2QHGJ2&X-Amz-Signature=17d16dda58f529721c1d9c223fc2c9eafb2e7b0398b8ac75f3293d875a1e5276&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
