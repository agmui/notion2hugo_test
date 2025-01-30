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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCWF5ED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FYVTWxYvdJ0VQcZj%2FxbMM6LOEugPzNjt6DCOqFpkY4AiAUb8E4dOe99jfL3wNc4WxTxmCTdS%2BcCN23jGUnCGbY4iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRKSKP2QaXYGX9e3KtwDxV7VL36UGXQzI%2Bj5aiiZMMQnbUyz1%2BxHDlV2kpUubymGwfQd5lOqwZ6KJyBKwimol05EOniPG7daGWX8H7x591FmmDf6cRDv3cqGPLzRkU448lQqZivMYwyYREEbgwqrtjskv%2FdWOVhyLtAz%2FOMGYl0YkeKV2UpVbx%2FXnys5jeGnZO8CCK8WUCsO4aOUePNmkaI8AckWkw3OnahINC9mdSht1nHIU1XHNsSQkKMSSKfbppwzjAYFKbesPHlKsjFR0LgXic4ELinZSg1bdYvMTbH0sySZinEYADlvVeUHL6UqKkC3ONkDXAmgu26bkx%2BkK1UcfPYo7eqJhN42JnlCQEiBe7GgBH2JCiTPcAnFGhfb12A41qm6m%2FJS6nSLTDqr05uLCqfVH4Ew9DQmyYg0IU%2BvVE%2FDNiLlRa%2Fp0urBYGy2EGpm%2ByE8rTvfR5FOL5hgwiR6CftPeIQYo7DaFIDgqA2cvP4FFZWkziVfjISlH6%2FtG1cdc61Xl3hIAJNFdTZLgNvt%2BGEVE7vY3IEm2XRdPsFq5j4UCxgxT%2FmR22Y29l9vr%2FkJIhwK75B75YHBsu%2F3OrIVON4AlsaLgeIADAgf3%2FuyKuQWzZ3F%2B%2FNcNIvjuEIZALdFNdgxo8aCp8Mwie7svAY6pgHIBFbdsg5v2NrY%2F4ZLjMx2eonnD3CWymC3w1NTWvIS1uy1WOWty28DEWNIOnUZ3VdaLN9MgbW09f3XrBRyW5muXYwXB%2BrBdrako16ppM%2BtQq2d610Nt5L4pF4wz78fPMC5TvPA%2BgTVck6bnBdjtjuYbKEjl1CLK%2F6RyJFsNNweMb%2BB7gByiMTclhJaIJpiV952lsK63gHbhImyEC6FnV3HPPStLKI%2B&X-Amz-Signature=055f1e331d5a0f521d5bed1094fca850bcc9693c2fecf241eba33461a99eea86&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCWF5ED%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FYVTWxYvdJ0VQcZj%2FxbMM6LOEugPzNjt6DCOqFpkY4AiAUb8E4dOe99jfL3wNc4WxTxmCTdS%2BcCN23jGUnCGbY4iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRKSKP2QaXYGX9e3KtwDxV7VL36UGXQzI%2Bj5aiiZMMQnbUyz1%2BxHDlV2kpUubymGwfQd5lOqwZ6KJyBKwimol05EOniPG7daGWX8H7x591FmmDf6cRDv3cqGPLzRkU448lQqZivMYwyYREEbgwqrtjskv%2FdWOVhyLtAz%2FOMGYl0YkeKV2UpVbx%2FXnys5jeGnZO8CCK8WUCsO4aOUePNmkaI8AckWkw3OnahINC9mdSht1nHIU1XHNsSQkKMSSKfbppwzjAYFKbesPHlKsjFR0LgXic4ELinZSg1bdYvMTbH0sySZinEYADlvVeUHL6UqKkC3ONkDXAmgu26bkx%2BkK1UcfPYo7eqJhN42JnlCQEiBe7GgBH2JCiTPcAnFGhfb12A41qm6m%2FJS6nSLTDqr05uLCqfVH4Ew9DQmyYg0IU%2BvVE%2FDNiLlRa%2Fp0urBYGy2EGpm%2ByE8rTvfR5FOL5hgwiR6CftPeIQYo7DaFIDgqA2cvP4FFZWkziVfjISlH6%2FtG1cdc61Xl3hIAJNFdTZLgNvt%2BGEVE7vY3IEm2XRdPsFq5j4UCxgxT%2FmR22Y29l9vr%2FkJIhwK75B75YHBsu%2F3OrIVON4AlsaLgeIADAgf3%2FuyKuQWzZ3F%2B%2FNcNIvjuEIZALdFNdgxo8aCp8Mwie7svAY6pgHIBFbdsg5v2NrY%2F4ZLjMx2eonnD3CWymC3w1NTWvIS1uy1WOWty28DEWNIOnUZ3VdaLN9MgbW09f3XrBRyW5muXYwXB%2BrBdrako16ppM%2BtQq2d610Nt5L4pF4wz78fPMC5TvPA%2BgTVck6bnBdjtjuYbKEjl1CLK%2F6RyJFsNNweMb%2BB7gByiMTclhJaIJpiV952lsK63gHbhImyEC6FnV3HPPStLKI%2B&X-Amz-Signature=4a3badbe210be1d69c7980dd46512925e2579b4ac4f79236f270daee785cd412&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
