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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXW46R7S%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCfLsKjlpsHUqxEuHRQ9G3Js0nsPRsTt2ZIamp%2FSCOmvAIhAKQG9lp7ECga44CNGZoLiYzoukwx1KxebAGloPGoGh6wKv8DCEcQABoMNjM3NDIzMTgzODA1IgwbuYk3Tbfxa0xjmYoq3AM1Pa8WeP%2BmGba%2FzMvgS78HwepRjPN%2BBhyjPHz%2Bhl%2FiriJQiwP5HreT82DC9u3zQ%2FtVcSmghh%2BpzWtp%2BI7C%2F1wpNB%2BM%2FFT680FXzbX%2FdKkFvO9fPj5eCY9KaQp5K1AKoORZYSJzIeLePWohVyUZ78hXUxcMkqR24BvCjoJ9%2Fgx4kvyaC0Ui0%2FdRURkoI%2BB%2Fr0zI0vEd3ppeHYKJZ1wwSAs%2BzGBw193rCex5RDB8rJm5UWCKE7x6LyAyxjhD1gOIrzC%2BXPiuAmnAOsCkuGPCdQMZTgxSYM%2B2S3NDtxrOES9X3xryE733%2FQcndEncDwfJMV9KREMSrXGSMFJrqM0g%2FXYdnCgWPUMnQFpYzfI5bt3ozoceorIyMRfsUawtk9a9yHtaucDEeErdIIXu5dH8soGlbsiwbPCj2mDHggHBqxzf0PE50Cjs%2BzNaTZcAdxjBcShBEX5Jl6IiLixysngKOkdOhOogjKe0wNPNfL2XpO3MwwVfw2wIl7SC6PnO60L7QFYXSzNiB01ilqS8GhS7VRc9uzWSqAIiHF%2FaoqEGaZALo9ojKLOIVx9z812XtrbCNRt0GjKEHyT2Rhr1%2FzbBqZ6Xq19EVO7cDzLmECoHn6kIwNPCS2mRrJLn8Qw68jCqnbvCBjqkAVRoz48xJtcBykE1WM0qlEPFOuhVUSb8Sp6PHk7%2FT7QRpc9vFLf1Nekyx4iNI5REDtk4Iyq%2F44vzM6lr1%2FNS4Y9FyJodIe4oeZJF24FowBiVHGrResSf8JnN3MIWYGDICZVfwamAhhLsrWPFuob28IaQtTSmnGw2DO7ZLg2zIVsmUMftCZEQoJ9mDadFcKWj%2BrZ1KicIXeqR9%2FyiSnhoGYq5lxU5&X-Amz-Signature=a415eb167da0dcc37af4e67789f05c5dd8cb719fac33a6f74913ee19dc2c2933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXW46R7S%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCfLsKjlpsHUqxEuHRQ9G3Js0nsPRsTt2ZIamp%2FSCOmvAIhAKQG9lp7ECga44CNGZoLiYzoukwx1KxebAGloPGoGh6wKv8DCEcQABoMNjM3NDIzMTgzODA1IgwbuYk3Tbfxa0xjmYoq3AM1Pa8WeP%2BmGba%2FzMvgS78HwepRjPN%2BBhyjPHz%2Bhl%2FiriJQiwP5HreT82DC9u3zQ%2FtVcSmghh%2BpzWtp%2BI7C%2F1wpNB%2BM%2FFT680FXzbX%2FdKkFvO9fPj5eCY9KaQp5K1AKoORZYSJzIeLePWohVyUZ78hXUxcMkqR24BvCjoJ9%2Fgx4kvyaC0Ui0%2FdRURkoI%2BB%2Fr0zI0vEd3ppeHYKJZ1wwSAs%2BzGBw193rCex5RDB8rJm5UWCKE7x6LyAyxjhD1gOIrzC%2BXPiuAmnAOsCkuGPCdQMZTgxSYM%2B2S3NDtxrOES9X3xryE733%2FQcndEncDwfJMV9KREMSrXGSMFJrqM0g%2FXYdnCgWPUMnQFpYzfI5bt3ozoceorIyMRfsUawtk9a9yHtaucDEeErdIIXu5dH8soGlbsiwbPCj2mDHggHBqxzf0PE50Cjs%2BzNaTZcAdxjBcShBEX5Jl6IiLixysngKOkdOhOogjKe0wNPNfL2XpO3MwwVfw2wIl7SC6PnO60L7QFYXSzNiB01ilqS8GhS7VRc9uzWSqAIiHF%2FaoqEGaZALo9ojKLOIVx9z812XtrbCNRt0GjKEHyT2Rhr1%2FzbBqZ6Xq19EVO7cDzLmECoHn6kIwNPCS2mRrJLn8Qw68jCqnbvCBjqkAVRoz48xJtcBykE1WM0qlEPFOuhVUSb8Sp6PHk7%2FT7QRpc9vFLf1Nekyx4iNI5REDtk4Iyq%2F44vzM6lr1%2FNS4Y9FyJodIe4oeZJF24FowBiVHGrResSf8JnN3MIWYGDICZVfwamAhhLsrWPFuob28IaQtTSmnGw2DO7ZLg2zIVsmUMftCZEQoJ9mDadFcKWj%2BrZ1KicIXeqR9%2FyiSnhoGYq5lxU5&X-Amz-Signature=894f130336482009c05aaea5760abe72935162f6b01a87ca0fc14ae8589745c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
