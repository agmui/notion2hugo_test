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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVV4IIW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCRHdQ6UEJ8ZcScpIlj02Su0n8Mssnaj83Bfi1oFsgfkwIhAIMOo1tKiLORwMvh9bJ8zUgYafmRDYcGIyn3I1VESHJNKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA4XWaGEJ02ATEX54q3AOOCpb9eq%2FqXOmzrAKj75gTE0ZjQeWrf2TpVkyJDcS1ulBpR%2FKhrt7glzL17gjzzaIH9BuhTf0zyoYEQAifwDQ1CHTZPnIGpLv8IK1vnU7o6ZESGaK%2Frt6t4%2FmBCkkpdN8qyfL1akcS1WMb18UNBuwv%2FmPSC5y53DdOxqyWxqBPAgFW9qU2ISuI9N78MYgwbGBHEcY9R0plETxn84L2rvV80prg5n2oBMN7vxn%2FufrFFpITgpN8PvZIqGOJz%2BRQdsENxV8d9a2KUw8P%2B94djae1RC6l%2BgQbxXpnsZlxEkdwtCvoJ%2BRrmsJjAgD553UU9nTQIQAw2BgY6SPkC1wSoNnpBG60qYC1j1CocaOX%2F%2FDz3oCZqe67Jj6cxkBCWvWSu4OUYc0fojrn0rCx6E%2BZSXOx4KZUXMdsZ94%2FZDx9M1pd19wXOgDCWW%2BX2qd5hRS3Gtz8j1b1UKkrfUNFRXYiKFEMUhg3lJVFFo%2F%2Bd6NJRnw0sDIQXSaT%2BVaOhvq2EYNeKxcsCpasW1XQrm0xjHVkYkmd9lrEpUkCNUjwzVlC5zKq4vrMT4QG3DzwUeu28QriwNJSFDSU%2BOqu9FOt2cwc0d6CwvYe4Vj7VHWarRxT7hsoc7ejZwTcrS01PEhXHTDX08nABjqkAQvFcRS4Pk0KVMWnRfbaYmcGvdTII%2FuD604%2FcGQqiVenpZqlI8zED5TU2b2lkDWxDDdorXoTgoEV5kOfMsT%2BEJYs7%2FIkAwkvvhNHK041w9DTW7esII3JtLfGAeHJ4VF5iQ45D2j3fH9%2B%2FVzGx2rArJa%2FeA1lesEWAD0bk9XqUDow4W0ZF8llSJck9cYV0V%2F%2FXhOEJ%2F7IJS66x335SkaucJQI%2Bsg7&X-Amz-Signature=692aef2e546a99a41bcf70377604b94742aaa86300da1b947767e54c3f656747&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVV4IIW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCRHdQ6UEJ8ZcScpIlj02Su0n8Mssnaj83Bfi1oFsgfkwIhAIMOo1tKiLORwMvh9bJ8zUgYafmRDYcGIyn3I1VESHJNKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA4XWaGEJ02ATEX54q3AOOCpb9eq%2FqXOmzrAKj75gTE0ZjQeWrf2TpVkyJDcS1ulBpR%2FKhrt7glzL17gjzzaIH9BuhTf0zyoYEQAifwDQ1CHTZPnIGpLv8IK1vnU7o6ZESGaK%2Frt6t4%2FmBCkkpdN8qyfL1akcS1WMb18UNBuwv%2FmPSC5y53DdOxqyWxqBPAgFW9qU2ISuI9N78MYgwbGBHEcY9R0plETxn84L2rvV80prg5n2oBMN7vxn%2FufrFFpITgpN8PvZIqGOJz%2BRQdsENxV8d9a2KUw8P%2B94djae1RC6l%2BgQbxXpnsZlxEkdwtCvoJ%2BRrmsJjAgD553UU9nTQIQAw2BgY6SPkC1wSoNnpBG60qYC1j1CocaOX%2F%2FDz3oCZqe67Jj6cxkBCWvWSu4OUYc0fojrn0rCx6E%2BZSXOx4KZUXMdsZ94%2FZDx9M1pd19wXOgDCWW%2BX2qd5hRS3Gtz8j1b1UKkrfUNFRXYiKFEMUhg3lJVFFo%2F%2Bd6NJRnw0sDIQXSaT%2BVaOhvq2EYNeKxcsCpasW1XQrm0xjHVkYkmd9lrEpUkCNUjwzVlC5zKq4vrMT4QG3DzwUeu28QriwNJSFDSU%2BOqu9FOt2cwc0d6CwvYe4Vj7VHWarRxT7hsoc7ejZwTcrS01PEhXHTDX08nABjqkAQvFcRS4Pk0KVMWnRfbaYmcGvdTII%2FuD604%2FcGQqiVenpZqlI8zED5TU2b2lkDWxDDdorXoTgoEV5kOfMsT%2BEJYs7%2FIkAwkvvhNHK041w9DTW7esII3JtLfGAeHJ4VF5iQ45D2j3fH9%2B%2FVzGx2rArJa%2FeA1lesEWAD0bk9XqUDow4W0ZF8llSJck9cYV0V%2F%2FXhOEJ%2F7IJS66x335SkaucJQI%2Bsg7&X-Amz-Signature=bb14ee4da1d249a0c7e9f7fe6d4f272470e0bf88fa5db61f0514f345959dc2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
