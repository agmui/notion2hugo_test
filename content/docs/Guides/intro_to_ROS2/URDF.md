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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5W6G37%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQTusJqzT%2B122qp2k0Jy3ZfQbBQDq1Oy2caY9kEGAPtwIgfRcZRd%2F4Z%2B5Cm3LtRW2blASWASzJQKMCEU6jjEqNgbsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwS359P88fLEOhr8SrcA%2Bxm0qEPmIMScQ6%2FeX%2B7clTv1aqhxBrMwVzwPt1xnbqWYegfxfzSxIdUdhP3oiwt6ptNRIeIVk%2FQGBLsWbowlwHCMGIQu1ubtu02VeeLArCslFd46ANvNP6RL9iCK8kMUm2rFfcTZXeY7swJSyDSWrRod5lXuYtYpgWes3hTCodGrhjJyLv0dxivVDkkhXSzF%2BIlJC8hEwqqGADCM9NlvQcCKdRR5TZd1yW7FOn6R8%2BmVqwKg6%2Fg7NAc57PTxd5t16YFgb40YBpgcqcJ0Nyol21FHjyzKxuZ0Qk3hvdmT2mrHGGMTgxRXFHA8uq9TQbbIcITm01tspdmFWwbFGAdMbelag3ceLyyZBiayD8V7KftCy2h0V9019uekqSB3ZVrDlmco86dESXj%2BqOEePAqVlPhmAjzD46uWver7%2Bw4c4p2s%2FNx9BZ5jN1HxyhmulrxAC1vxiGNoUypZiRAgxXlU3fhF7k0a9HHuO3Hny3YmAKIzKHHWeUHHL%2Bd%2FkCCJ1PKlODDQC1flaCXZaUyV78%2BLlhHaJhOTxpTzu9%2Bg17tlJCe5qBwg2B3cz0Qa2pi2LIQcciy3rakhj7bFBv2Z3GsqSvu%2B77MQgJQmsJSCtsuc5yU2w0psUgGNiMuBNWWMNeyzM4GOqUBagh82KjwqifcLlhG0779Az7F%2BDYgk43gIBLm7As%2BF9VUhwtiGb%2FXvRAo1DT8fRCWtCoe2tddvbIjOcyU%2BWq2ZpLSyeKWiWdaKDYKxBP2aX4Y5pWI42SdC46u7OnZMqzIqZ9Jxd7n%2BFp3lZqvohrQSKYbi86I79QOXpz0hVm8rVP8mJ7Jf8pPfcul0jXIEHOmAnJ57qlhxamFPlzMtzlSOAd8kSVV&X-Amz-Signature=6be0bea6688e75817a915f51f1c2c4b67c87395a2e8bb45f0c01cb8aefcf3da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5W6G37%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQTusJqzT%2B122qp2k0Jy3ZfQbBQDq1Oy2caY9kEGAPtwIgfRcZRd%2F4Z%2B5Cm3LtRW2blASWASzJQKMCEU6jjEqNgbsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwS359P88fLEOhr8SrcA%2Bxm0qEPmIMScQ6%2FeX%2B7clTv1aqhxBrMwVzwPt1xnbqWYegfxfzSxIdUdhP3oiwt6ptNRIeIVk%2FQGBLsWbowlwHCMGIQu1ubtu02VeeLArCslFd46ANvNP6RL9iCK8kMUm2rFfcTZXeY7swJSyDSWrRod5lXuYtYpgWes3hTCodGrhjJyLv0dxivVDkkhXSzF%2BIlJC8hEwqqGADCM9NlvQcCKdRR5TZd1yW7FOn6R8%2BmVqwKg6%2Fg7NAc57PTxd5t16YFgb40YBpgcqcJ0Nyol21FHjyzKxuZ0Qk3hvdmT2mrHGGMTgxRXFHA8uq9TQbbIcITm01tspdmFWwbFGAdMbelag3ceLyyZBiayD8V7KftCy2h0V9019uekqSB3ZVrDlmco86dESXj%2BqOEePAqVlPhmAjzD46uWver7%2Bw4c4p2s%2FNx9BZ5jN1HxyhmulrxAC1vxiGNoUypZiRAgxXlU3fhF7k0a9HHuO3Hny3YmAKIzKHHWeUHHL%2Bd%2FkCCJ1PKlODDQC1flaCXZaUyV78%2BLlhHaJhOTxpTzu9%2Bg17tlJCe5qBwg2B3cz0Qa2pi2LIQcciy3rakhj7bFBv2Z3GsqSvu%2B77MQgJQmsJSCtsuc5yU2w0psUgGNiMuBNWWMNeyzM4GOqUBagh82KjwqifcLlhG0779Az7F%2BDYgk43gIBLm7As%2BF9VUhwtiGb%2FXvRAo1DT8fRCWtCoe2tddvbIjOcyU%2BWq2ZpLSyeKWiWdaKDYKxBP2aX4Y5pWI42SdC46u7OnZMqzIqZ9Jxd7n%2BFp3lZqvohrQSKYbi86I79QOXpz0hVm8rVP8mJ7Jf8pPfcul0jXIEHOmAnJ57qlhxamFPlzMtzlSOAd8kSVV&X-Amz-Signature=e23607a38ba55bff966f67537952d6442cc24687b4b8d6717cfb2b5c7bbff737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
