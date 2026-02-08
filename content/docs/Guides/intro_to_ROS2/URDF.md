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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4AL7PA%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpRxlCodlXR9KksD82bZmuEIzgiv2WWmpu5rBZQUK2pAiBn%2FjFlgByDycPStDYLrz34ugA628p6sC%2F4zgp9TX%2BaWir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMtdwC%2B1VqOibvny0bKtwDWEfLbdMFAnJfVAEdU0j4WebUtofGAHAvfl5t%2FdHmLMHFNBCBL8bQwsQBKFCqPvClKg%2BY9%2BFM8Z3IZx3nI6yfW2xz2F64mv1b9amyM0QTFJkx%2FgOc6HsjycWuFcuY0CC3z24KqXmsA92I%2FusC73stDyCS6R05Bitx1UPkf3Ns4T6pIMO80yThLwElztH1gds4J1mlnPHfdJeiAIiDtKU3myHFp%2B6MqnYsOqvxhW5kB3lb7%2BlM31VThUogW7NJH4u%2BJ6YKnsfzMBmGB6mPdnAV0Ta9RnHQINDkMxORWZ0YeZUK%2Ff7a9Ef%2Fz0M1c0IVQ4RJh9gfbuQdtmlqfbPAMQMNTpt2oI9h9VTlqBiGuDviwXJ5mMDni3%2FpikLochefP1RrMxelBe8sbSIq0i3%2BWRi2rHsXsGLyOLsUzt%2B6FBQWzUSPTFgxm9So1e1mc%2BTx6IckGf3uT7nN8APD1Am1%2BEQ8ynMPxVKCUnXNJYoorQM4ga8HP%2FaxDgEsGsj0aEHddUWDt%2FODoeqVJtRCBBx4HvUxVqu%2B0vWJ%2FfKmW49zdlo0UYmcY6Z8AgTQoliwsKbqP0jGaKVNtvgD0QV5ZmjEbMbyOvRqYAKQbr4m%2FD5cxerktpaF3QxtdpRYAhjW6wIwveqfzAY6pgGIsWerPRC6MMeXCNrVITjrko%2FLqgXUx1OXfHJ2vAJuakK1%2FgCxymnXJi2kcHHLqpt8YLl32ZGOUoqFO5nuI6rSVs5JLpmoyUKi1gW6Cg4D%2FbX4VlnCnwULwPINLc4m8tbhniVCJB7isrVeWhYgp8f%2BmGokvYzz%2BYA9%2FkNjWio%2FL6oc5Bt4UN6OPccqRF1qToK9rDBlVHqv1oIfc5WVee5qetMkTBFs&X-Amz-Signature=3badee26ecd8f28cdcd34328189b4cfe3c155e6c21a28327c3b644990628945f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4AL7PA%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpRxlCodlXR9KksD82bZmuEIzgiv2WWmpu5rBZQUK2pAiBn%2FjFlgByDycPStDYLrz34ugA628p6sC%2F4zgp9TX%2BaWir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMtdwC%2B1VqOibvny0bKtwDWEfLbdMFAnJfVAEdU0j4WebUtofGAHAvfl5t%2FdHmLMHFNBCBL8bQwsQBKFCqPvClKg%2BY9%2BFM8Z3IZx3nI6yfW2xz2F64mv1b9amyM0QTFJkx%2FgOc6HsjycWuFcuY0CC3z24KqXmsA92I%2FusC73stDyCS6R05Bitx1UPkf3Ns4T6pIMO80yThLwElztH1gds4J1mlnPHfdJeiAIiDtKU3myHFp%2B6MqnYsOqvxhW5kB3lb7%2BlM31VThUogW7NJH4u%2BJ6YKnsfzMBmGB6mPdnAV0Ta9RnHQINDkMxORWZ0YeZUK%2Ff7a9Ef%2Fz0M1c0IVQ4RJh9gfbuQdtmlqfbPAMQMNTpt2oI9h9VTlqBiGuDviwXJ5mMDni3%2FpikLochefP1RrMxelBe8sbSIq0i3%2BWRi2rHsXsGLyOLsUzt%2B6FBQWzUSPTFgxm9So1e1mc%2BTx6IckGf3uT7nN8APD1Am1%2BEQ8ynMPxVKCUnXNJYoorQM4ga8HP%2FaxDgEsGsj0aEHddUWDt%2FODoeqVJtRCBBx4HvUxVqu%2B0vWJ%2FfKmW49zdlo0UYmcY6Z8AgTQoliwsKbqP0jGaKVNtvgD0QV5ZmjEbMbyOvRqYAKQbr4m%2FD5cxerktpaF3QxtdpRYAhjW6wIwveqfzAY6pgGIsWerPRC6MMeXCNrVITjrko%2FLqgXUx1OXfHJ2vAJuakK1%2FgCxymnXJi2kcHHLqpt8YLl32ZGOUoqFO5nuI6rSVs5JLpmoyUKi1gW6Cg4D%2FbX4VlnCnwULwPINLc4m8tbhniVCJB7isrVeWhYgp8f%2BmGokvYzz%2BYA9%2FkNjWio%2FL6oc5Bt4UN6OPccqRF1qToK9rDBlVHqv1oIfc5WVee5qetMkTBFs&X-Amz-Signature=0c6b17871ed1c75610d2de88901d6eda45a42d693016fd2d6c0ac10c1889d213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
