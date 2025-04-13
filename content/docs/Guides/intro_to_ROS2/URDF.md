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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7GD7MZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDAQdlS3vraC%2FXfbSKa86gvoLVuNk7YCqmDSNtJ5HMxzQIhAL6A9nHZzLAXH0pPFSYr7JWS375cN6A%2FR8RW6dUM%2BDfaKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbKmfY93AAAOswvg4q3AO%2BUTmcCKbgwOrfrstrJE8Dbm3%2FeRcR2AsSJ%2BZYYTeIeyrcHgUQCAZrcH6BDCsbYvUJI6kUpMH6F5GyzEEkhhzZEBURJOK4ryyxT9hwyq%2BG2pT3%2Fb4%2Fvb003Q5DUdyqPzGFdvByCDw7jB%2F9crIhnoSCecNLCB%2B%2B9AyJ3jHTuGfuk3%2FkT3xXJANH1IxAuQmHhEF%2FZ3ZT0c2Mgr46blZJw%2BjNSQC%2BGUnUuUqMqwZmGXrnuOeDVAjO48UV08vTQr%2Fp5z2cubc0vUHjTm9WD%2FPxqs3PMRVTAqv7eimBRTWZ3rvhQZecmstiDu%2BiN%2BEEOkvPiEWgJm0vBl2hy3mOHJy%2BgxxDRqJJHAoGI5NKk5ZaTOeRqKpLbBbgAZsBvCjeyEPvUWkWS%2Bvy0UFerLq4tqu3J9bQqyWLpfkXeo4kV%2FrTECfQrL8uRpCoMDurLmFnvJVmRIULVjTPANwKh6ugdtFm8ZGt5OTRjxjYpZSyMNiEjH78rIXl8mmsYAgWAeAmY8IcIFRg5Qc55VFZs7tyr6WlFh8%2BprpekjFqEPycA8rZDnx%2BbmNpimu3zyYWUHoFh9kjV%2FTaQZNS9CWuPhfNtllrgEKaOe%2FVTUN%2F6yT3zZUxWJEvZVDjJkcNPj9jxBDB0zDbje2%2FBjqkAR5%2BfIAPkmbn0FndwN6VMCohoHDlCaErqaD4oVqUhwKY1%2Fak7fzVc%2BLFnmqaDfee5NvhIJXAqFP61cVevdCzGF9MeWiNTPnX82mtWluE5q90iic3TWnqQYGkmB9RA84l7Tv55045x8f1PpZtPbbBVlZoL3rk%2F4XQpvBysu%2BkQ9kePAoZof8%2B0DW6GufBEsHKy12FeSfbml%2B2y1xNpIQ2D5OUXSm8&X-Amz-Signature=f6f1dbe6c28edf994922a4b2435ec72ac2621107544edca78d0597995ff345fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7GD7MZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDAQdlS3vraC%2FXfbSKa86gvoLVuNk7YCqmDSNtJ5HMxzQIhAL6A9nHZzLAXH0pPFSYr7JWS375cN6A%2FR8RW6dUM%2BDfaKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbKmfY93AAAOswvg4q3AO%2BUTmcCKbgwOrfrstrJE8Dbm3%2FeRcR2AsSJ%2BZYYTeIeyrcHgUQCAZrcH6BDCsbYvUJI6kUpMH6F5GyzEEkhhzZEBURJOK4ryyxT9hwyq%2BG2pT3%2Fb4%2Fvb003Q5DUdyqPzGFdvByCDw7jB%2F9crIhnoSCecNLCB%2B%2B9AyJ3jHTuGfuk3%2FkT3xXJANH1IxAuQmHhEF%2FZ3ZT0c2Mgr46blZJw%2BjNSQC%2BGUnUuUqMqwZmGXrnuOeDVAjO48UV08vTQr%2Fp5z2cubc0vUHjTm9WD%2FPxqs3PMRVTAqv7eimBRTWZ3rvhQZecmstiDu%2BiN%2BEEOkvPiEWgJm0vBl2hy3mOHJy%2BgxxDRqJJHAoGI5NKk5ZaTOeRqKpLbBbgAZsBvCjeyEPvUWkWS%2Bvy0UFerLq4tqu3J9bQqyWLpfkXeo4kV%2FrTECfQrL8uRpCoMDurLmFnvJVmRIULVjTPANwKh6ugdtFm8ZGt5OTRjxjYpZSyMNiEjH78rIXl8mmsYAgWAeAmY8IcIFRg5Qc55VFZs7tyr6WlFh8%2BprpekjFqEPycA8rZDnx%2BbmNpimu3zyYWUHoFh9kjV%2FTaQZNS9CWuPhfNtllrgEKaOe%2FVTUN%2F6yT3zZUxWJEvZVDjJkcNPj9jxBDB0zDbje2%2FBjqkAR5%2BfIAPkmbn0FndwN6VMCohoHDlCaErqaD4oVqUhwKY1%2Fak7fzVc%2BLFnmqaDfee5NvhIJXAqFP61cVevdCzGF9MeWiNTPnX82mtWluE5q90iic3TWnqQYGkmB9RA84l7Tv55045x8f1PpZtPbbBVlZoL3rk%2F4XQpvBysu%2BkQ9kePAoZof8%2B0DW6GufBEsHKy12FeSfbml%2B2y1xNpIQ2D5OUXSm8&X-Amz-Signature=4777547f9e4f2707009d1757a83b10a43f155764e66ec974d3f73ced19f28eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
