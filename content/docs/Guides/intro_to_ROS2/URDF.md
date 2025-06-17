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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGSAR47%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGd3zwYsObnavhFM2YtOXfFI0%2By%2FjFMZ1vhzqY3r%2FUn9AiEAxFyFdRD%2FxbPY67VIkQrZbbLaXV0%2FukTwwOpLwnrbJ34q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZSeY5ALp%2BbWoWSoCrcAzIoN3qbhX1Qv33tZTqqmRCIcg1SRqXOKwS%2BE1YYx1zraA8l%2FWN%2FheKULPq0YVTRsjcARxQmY%2B6fA%2BKL8dIUlhSY0FpIb0x8QAf4vGHAik9wBajizrr5u9c38RAZ5uvNdzq70eFwqxJaheBnB268%2FMoOr1aEG1lenMwxUbVFuRyvWj%2FsaOdMvLJhmwZryeQjQ7L%2BJteqO9v5c%2FhtYe4eFj4qwpXLFuaNVSd2o5iVYevfjfUOTIJQVrfHEb%2BwdPZdFVn8vCm5ISL2ItkPvaRZOJZ10kCS3dCTcwIDWwrztgo4b55FVduru5rZiuwvoWSvzvuG%2BgbMeSmYpNjq6GAg%2BMkfbRskev7bR5%2BovYiSvuJLEJMt8A3j5xV35auElu0WEwMvD%2FOFQ0zazWOCJHoJlylnOJv6kbHMcJQtx3pvNElM2cqy53%2F6vRyYSSnVvhhQWKoYgVeaicQAZxQYA5fHTkBin%2F2p6af1UQbeY4wRZ8hUqoWdMDc8cBd5toDKZZzlz2cdqSpWYkJ3xSsD%2B%2FlGgRXGF1uzhT%2F3jExtxZlJDw5iQC84B7ci%2BwRdgsXLFMc8O4qQvovw9%2BW9MkqxXu9WgGjfYF2mDJ%2FogJq%2B5g7IrrxG6Df5yTX4Ws641hWCMKfBw8IGOqUBDEPtXPFZ5RBfrizjuqV8%2BXRi8VJCTxusZYKOQK0AvdjEBiyJZrt5LrqOT2FqK1XxFHKtcIIGFHIdUVm3V8ipyxbGV7Z9VB1iMIni0TTyQtAmLwz5bHaseVCQ4kvvFsHWhaAM4f95JQTCGsHtGbF66o6TX4%2BG4nVHUJCdP8nFSYtzF%2FW80md4SVjXS3qID4Rx292UngoWdOHYmMxVuvBrJvzRVHV1&X-Amz-Signature=4c3e148d7d8e3f339cb7b9ee26ea988888b4134b363b042b9340f8b3fc94558e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGSAR47%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGd3zwYsObnavhFM2YtOXfFI0%2By%2FjFMZ1vhzqY3r%2FUn9AiEAxFyFdRD%2FxbPY67VIkQrZbbLaXV0%2FukTwwOpLwnrbJ34q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKZSeY5ALp%2BbWoWSoCrcAzIoN3qbhX1Qv33tZTqqmRCIcg1SRqXOKwS%2BE1YYx1zraA8l%2FWN%2FheKULPq0YVTRsjcARxQmY%2B6fA%2BKL8dIUlhSY0FpIb0x8QAf4vGHAik9wBajizrr5u9c38RAZ5uvNdzq70eFwqxJaheBnB268%2FMoOr1aEG1lenMwxUbVFuRyvWj%2FsaOdMvLJhmwZryeQjQ7L%2BJteqO9v5c%2FhtYe4eFj4qwpXLFuaNVSd2o5iVYevfjfUOTIJQVrfHEb%2BwdPZdFVn8vCm5ISL2ItkPvaRZOJZ10kCS3dCTcwIDWwrztgo4b55FVduru5rZiuwvoWSvzvuG%2BgbMeSmYpNjq6GAg%2BMkfbRskev7bR5%2BovYiSvuJLEJMt8A3j5xV35auElu0WEwMvD%2FOFQ0zazWOCJHoJlylnOJv6kbHMcJQtx3pvNElM2cqy53%2F6vRyYSSnVvhhQWKoYgVeaicQAZxQYA5fHTkBin%2F2p6af1UQbeY4wRZ8hUqoWdMDc8cBd5toDKZZzlz2cdqSpWYkJ3xSsD%2B%2FlGgRXGF1uzhT%2F3jExtxZlJDw5iQC84B7ci%2BwRdgsXLFMc8O4qQvovw9%2BW9MkqxXu9WgGjfYF2mDJ%2FogJq%2B5g7IrrxG6Df5yTX4Ws641hWCMKfBw8IGOqUBDEPtXPFZ5RBfrizjuqV8%2BXRi8VJCTxusZYKOQK0AvdjEBiyJZrt5LrqOT2FqK1XxFHKtcIIGFHIdUVm3V8ipyxbGV7Z9VB1iMIni0TTyQtAmLwz5bHaseVCQ4kvvFsHWhaAM4f95JQTCGsHtGbF66o6TX4%2BG4nVHUJCdP8nFSYtzF%2FW80md4SVjXS3qID4Rx292UngoWdOHYmMxVuvBrJvzRVHV1&X-Amz-Signature=985507c24257900b38499e7c5b797a70c4152e0795677814aafc638748ca04a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
