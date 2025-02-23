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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4AMFD2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eM4wUQIKCWXkjIkdMz9fvb2WebMCNGAiwlfxx0Xb3QIhAL61e2Z5P905aX5kX37jaUCMCttw9b60vGRyBoB6jjt8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYM24bKLfMTcS7NZsq3APJeqT1PyHdLW358dV32b2Zz5%2FosUVKr0MJnYYB8wnc7l3nYESGqc0c14Lgu%2FwGYTZ9YjvhZcBAiQhK1fD1g%2Bod7NFUYDoxQbVu0%2F4AjVf2%2FCDtGz5yUiokayPCv%2FcJ2TFuOrla4jlv3WlWK%2BM0L5H0YEwTLDBU3de7LbZyfNKy4XR9Oi%2BfRR5N36l4iGtYC6nhIRslcnO95z0OAKgIWxYBGVB3Uw2VJRhZ1H6vSwoqMkGl1lMOoavGROdUXmYWdyk%2F7uZw%2ByL0qgKE5A8do4m97LBpYfKvfeW2e3d%2BUnXaLF8X8t2LNkUt30S1DnA6flSuvIWC35ZU4uPWlmnK4XMcXIUY5ckww%2Fn9EXMPUT3t%2FDnC%2FuMA%2FntbCmn4ITRw9DGKhlEk5cv1cLYXQIRLfi86EhznjcV0Wy%2FsJOohbYPAi9fLOuF1Uos2JSi9pijSF%2B472DBhqgydAIzkdF7M8FnZqWYmMD%2BWr54K5cSVB0Hb1A7RuakQo741YJ31ONtegdDw1pn4DFts4cm0FDwnJELUg%2BwZTi7VxT5%2BgWmAnGgFath3TgpwdKbPq5NwFJWGjuECR8MbAAtiqPivFdj%2Fume6Z%2BnVIr4%2Bbr2CiUk2uDXG%2Fxal0OW2Cne93VmVEDC%2Bgeq9BjqkAcgRtSpSLS31dTWr6rHmqkUFgHQVvB8XL%2FJFS3X%2FMQL71Zrb%2B6s3Z8KoCszh3Vnuu3RKA%2BwsLs%2BaY8P%2F9vi4ymSaTV93kpJ0nWydmikgnWzylxqQRfnydDv9dtym%2BbMs%2FUOfXRS8DinXaCYNtpF5J4mne4iO%2FR%2Fgv6fEcZhodzOG%2FR16UTAsTEDYXxeQP3yq5GQHx1HvHoU%2FwSr5u2Rnz1Avbkhp&X-Amz-Signature=0827a129be696e50deae8d802f78959d868a7d7a4ab33410a677b1d5b0b9ada6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4AMFD2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eM4wUQIKCWXkjIkdMz9fvb2WebMCNGAiwlfxx0Xb3QIhAL61e2Z5P905aX5kX37jaUCMCttw9b60vGRyBoB6jjt8KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYM24bKLfMTcS7NZsq3APJeqT1PyHdLW358dV32b2Zz5%2FosUVKr0MJnYYB8wnc7l3nYESGqc0c14Lgu%2FwGYTZ9YjvhZcBAiQhK1fD1g%2Bod7NFUYDoxQbVu0%2F4AjVf2%2FCDtGz5yUiokayPCv%2FcJ2TFuOrla4jlv3WlWK%2BM0L5H0YEwTLDBU3de7LbZyfNKy4XR9Oi%2BfRR5N36l4iGtYC6nhIRslcnO95z0OAKgIWxYBGVB3Uw2VJRhZ1H6vSwoqMkGl1lMOoavGROdUXmYWdyk%2F7uZw%2ByL0qgKE5A8do4m97LBpYfKvfeW2e3d%2BUnXaLF8X8t2LNkUt30S1DnA6flSuvIWC35ZU4uPWlmnK4XMcXIUY5ckww%2Fn9EXMPUT3t%2FDnC%2FuMA%2FntbCmn4ITRw9DGKhlEk5cv1cLYXQIRLfi86EhznjcV0Wy%2FsJOohbYPAi9fLOuF1Uos2JSi9pijSF%2B472DBhqgydAIzkdF7M8FnZqWYmMD%2BWr54K5cSVB0Hb1A7RuakQo741YJ31ONtegdDw1pn4DFts4cm0FDwnJELUg%2BwZTi7VxT5%2BgWmAnGgFath3TgpwdKbPq5NwFJWGjuECR8MbAAtiqPivFdj%2Fume6Z%2BnVIr4%2Bbr2CiUk2uDXG%2Fxal0OW2Cne93VmVEDC%2Bgeq9BjqkAcgRtSpSLS31dTWr6rHmqkUFgHQVvB8XL%2FJFS3X%2FMQL71Zrb%2B6s3Z8KoCszh3Vnuu3RKA%2BwsLs%2BaY8P%2F9vi4ymSaTV93kpJ0nWydmikgnWzylxqQRfnydDv9dtym%2BbMs%2FUOfXRS8DinXaCYNtpF5J4mne4iO%2FR%2Fgv6fEcZhodzOG%2FR16UTAsTEDYXxeQP3yq5GQHx1HvHoU%2FwSr5u2Rnz1Avbkhp&X-Amz-Signature=31f45f555c197c68d154633644b4c4186fbd5ad7cc2a16929df8ed48e4233c90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
