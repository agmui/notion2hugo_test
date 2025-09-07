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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PX6FOA%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBzuPRiH%2BMvWTzagIpSouKFmDoP95t9BHXn%2FrHiFdQDwAiB1eZntECXyKGwHX2CZaZvLj4Kae5JMM91QeP7M99v7cCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Byxhmcl3sASmZ%2FxxKtwD%2FUY4R6msgIlpMbuVVDFHKA2AOggJxsBdq5INIzvn7NQnOpwUNYwsL7FPdvqXmx%2BfB5vmzKjuwDIqaDILCCqB2JarGyISkjVpA9b%2FKQiujcbPxNoRaEt9M7MyoARQcrLIg2%2FP6ei691blFexv8c39WOE7v6v0AYNSRNtjX2PedlkI5QuuD4%2BEWoLXnbB3csrh2zuiCxcFFlWaBmWzhaXK0rb90kRIviwoCRJr29%2B1IjdHZYWnFkTUm1eQ3GOFjY4KGI9v%2BZtKQSW5p9apwerZr9HbU78FVSiwUL5qU707CZUCaVMF%2FssTrIPP4M6BpwoPRzXmOxLB9T1IymC7Sugz%2FjUu3uh0Xh4h8pf%2Bvkfkd8qE5Kf%2FPyP%2FiQCw1hn%2B%2BhuXOV9Ly2sfD11tlDfCS1GV1Pw1MhSt9c0D3%2B1XCdyTRisRfgBE5ZH6jPSXlRJNYkysZ%2BssrFBbYCCOjzPsFjz6T5XUGiI8c6UMbHWWETJrdhr0sctKx24azxDxGCMCcEaonUOiawjD8gQpYi4R5p%2FmaTS0kJfp8kg1I0ANVm%2FoczcQHzTsirnRFQEkhjHwQnr7xHKDxHolkajP%2FMUbmKep7lnd%2FvGuDiVhEMMbunUc%2Fyz1rvTUqxeCIVy5TFww1MPyxQY6pgHqqIBWALRfOcvR4JGNAoUDICHf5p9baOqDQN7ttHDZFT8W9uVTxZX%2FjDbAtfDJdhzvl%2FXc1Ndsk4QZZnQ7ZThBDnsp03tRN9b5Kh2oG0pfYA%2Bdr5W50WXuKPXyJAglYfY0aSdEFZ%2BbHh0Hd6xWQ%2Bc1iNDdKCSqveNjp7U%2BkG9iwslk6HwougPEBkJdEaYgaePfFtWqHdmlN%2FRQjXScTmk%2BAo%2F3ObFw&X-Amz-Signature=097160d031f393c518a30ce26c50aa605fc0829ab93ac19f9ed52fb1bec05fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PX6FOA%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBzuPRiH%2BMvWTzagIpSouKFmDoP95t9BHXn%2FrHiFdQDwAiB1eZntECXyKGwHX2CZaZvLj4Kae5JMM91QeP7M99v7cCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Byxhmcl3sASmZ%2FxxKtwD%2FUY4R6msgIlpMbuVVDFHKA2AOggJxsBdq5INIzvn7NQnOpwUNYwsL7FPdvqXmx%2BfB5vmzKjuwDIqaDILCCqB2JarGyISkjVpA9b%2FKQiujcbPxNoRaEt9M7MyoARQcrLIg2%2FP6ei691blFexv8c39WOE7v6v0AYNSRNtjX2PedlkI5QuuD4%2BEWoLXnbB3csrh2zuiCxcFFlWaBmWzhaXK0rb90kRIviwoCRJr29%2B1IjdHZYWnFkTUm1eQ3GOFjY4KGI9v%2BZtKQSW5p9apwerZr9HbU78FVSiwUL5qU707CZUCaVMF%2FssTrIPP4M6BpwoPRzXmOxLB9T1IymC7Sugz%2FjUu3uh0Xh4h8pf%2Bvkfkd8qE5Kf%2FPyP%2FiQCw1hn%2B%2BhuXOV9Ly2sfD11tlDfCS1GV1Pw1MhSt9c0D3%2B1XCdyTRisRfgBE5ZH6jPSXlRJNYkysZ%2BssrFBbYCCOjzPsFjz6T5XUGiI8c6UMbHWWETJrdhr0sctKx24azxDxGCMCcEaonUOiawjD8gQpYi4R5p%2FmaTS0kJfp8kg1I0ANVm%2FoczcQHzTsirnRFQEkhjHwQnr7xHKDxHolkajP%2FMUbmKep7lnd%2FvGuDiVhEMMbunUc%2Fyz1rvTUqxeCIVy5TFww1MPyxQY6pgHqqIBWALRfOcvR4JGNAoUDICHf5p9baOqDQN7ttHDZFT8W9uVTxZX%2FjDbAtfDJdhzvl%2FXc1Ndsk4QZZnQ7ZThBDnsp03tRN9b5Kh2oG0pfYA%2Bdr5W50WXuKPXyJAglYfY0aSdEFZ%2BbHh0Hd6xWQ%2Bc1iNDdKCSqveNjp7U%2BkG9iwslk6HwougPEBkJdEaYgaePfFtWqHdmlN%2FRQjXScTmk%2BAo%2F3ObFw&X-Amz-Signature=be1993350fc44be9ce430862a3eb3519bb70bfd785a3cf27c476143686e4beed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
