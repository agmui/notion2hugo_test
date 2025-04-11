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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSROK72%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHG8ZWESWTgsHrR3OucVf%2Fh%2BSAoCTk%2BjfYFK8c6LL7%2FMAiBc39xriTcdepb2PSzWKOqbztccPppMAP9wkfG8KjejJiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2Fi7NGog6vT8uq8kKtwDGRqIpFoc3rnPJcE78NJ%2FrhcPQCfoPIKeLXVYGbfFK81uM1NVF7NOSLEMs28R%2FAH4GYn9Lstei3e76rN6PM3PNtLu6c1o%2BeC9XMRK17RkEeE9BoRiwCcsqAPTYKACh3Rk3soMICwt7GxDRHgmGbi6Iqvrdxhkvt5E6Gbmq1k9%2BtYkEjvBRvI5P7dM3r%2F7Ije%2Bw0drq%2Bx4eN1GPwwLD%2Bt%2FHo7cPfb6x5gExIDhOiBsrTXBGbgZtikyCkLyQjkms%2FQ3BMLfoXoYaL7geyBSVYmzSTSJ6CS%2BXhdqx3Ni9erGtG4n%2FzJhvaOHB8fbOLIJLGkJZO4k0C86esGWBYwbakMusvgfUfwLLfWimhpexiSh%2FlhThIliQWjp%2BHsycAu6l5gtH%2BchsmnEycTL26eqn6JHa5uptQsLdAZOZS7GiSuoOj1n57fLiF%2BiWwpMBolSCV8HVPAh4Fv7eZvCqih645ty15DCMSyHj9sfAf5PhIbK8mMCe8GIJHnJjsr00GdTkKS%2Fi%2BEUiEBmp0HvSy%2FnNuUQ%2BnGqxFoz6RqWwaEE1BiyMRoLrSFKsJlfMrSkSIELhA85voSdv76sARPHUO%2BRxnS4izCV19wnYWynw2BZHAWssUaWv04dKUW%2FRXlPJ3kwy8vjvwY6pgF9t9rxuI1sE1bqkQsRYOoQsV9apHn%2BH3aoXg%2FRgH7t%2FFRs9Gi6cLhHKFglWsVTBYug5yWQbpVNvY%2FMBsBTOUxAMpSTkfjHek2e0kyzNFgySHS9gthFlqVMGBKOCQHObsOtw%2FdUyAc8vkey49Z46bcTxEcMOqfSpjKy5X3je4XDOkfqj31fzf6yuV3ayukOmtkSGD4wrYARUOCaVMFwsgdaBT5nd%2BO9&X-Amz-Signature=022b2c8e2c5fe8ee5549eed09eeb88eeb0887c8505215f21c0e430b84fe3aa35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSROK72%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHG8ZWESWTgsHrR3OucVf%2Fh%2BSAoCTk%2BjfYFK8c6LL7%2FMAiBc39xriTcdepb2PSzWKOqbztccPppMAP9wkfG8KjejJiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2Fi7NGog6vT8uq8kKtwDGRqIpFoc3rnPJcE78NJ%2FrhcPQCfoPIKeLXVYGbfFK81uM1NVF7NOSLEMs28R%2FAH4GYn9Lstei3e76rN6PM3PNtLu6c1o%2BeC9XMRK17RkEeE9BoRiwCcsqAPTYKACh3Rk3soMICwt7GxDRHgmGbi6Iqvrdxhkvt5E6Gbmq1k9%2BtYkEjvBRvI5P7dM3r%2F7Ije%2Bw0drq%2Bx4eN1GPwwLD%2Bt%2FHo7cPfb6x5gExIDhOiBsrTXBGbgZtikyCkLyQjkms%2FQ3BMLfoXoYaL7geyBSVYmzSTSJ6CS%2BXhdqx3Ni9erGtG4n%2FzJhvaOHB8fbOLIJLGkJZO4k0C86esGWBYwbakMusvgfUfwLLfWimhpexiSh%2FlhThIliQWjp%2BHsycAu6l5gtH%2BchsmnEycTL26eqn6JHa5uptQsLdAZOZS7GiSuoOj1n57fLiF%2BiWwpMBolSCV8HVPAh4Fv7eZvCqih645ty15DCMSyHj9sfAf5PhIbK8mMCe8GIJHnJjsr00GdTkKS%2Fi%2BEUiEBmp0HvSy%2FnNuUQ%2BnGqxFoz6RqWwaEE1BiyMRoLrSFKsJlfMrSkSIELhA85voSdv76sARPHUO%2BRxnS4izCV19wnYWynw2BZHAWssUaWv04dKUW%2FRXlPJ3kwy8vjvwY6pgF9t9rxuI1sE1bqkQsRYOoQsV9apHn%2BH3aoXg%2FRgH7t%2FFRs9Gi6cLhHKFglWsVTBYug5yWQbpVNvY%2FMBsBTOUxAMpSTkfjHek2e0kyzNFgySHS9gthFlqVMGBKOCQHObsOtw%2FdUyAc8vkey49Z46bcTxEcMOqfSpjKy5X3je4XDOkfqj31fzf6yuV3ayukOmtkSGD4wrYARUOCaVMFwsgdaBT5nd%2BO9&X-Amz-Signature=dce72c0ba3a27f409ac6684c80b88be63a0137ac04a0e63cb2d92d457f9107e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
