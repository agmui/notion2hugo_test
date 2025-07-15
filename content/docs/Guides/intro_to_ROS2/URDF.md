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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXV6O2W%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC6CIPhTMWOeJQ2bD9QlpsNpPHMig51Zxk5Vv7EMVN0ygIhAKoVFtEcB9oWTYjyxkXfXt5470U38wZdceKEK1vu6XoSKv8DCEUQABoMNjM3NDIzMTgzODA1IgwXRmnDJdalNhxMSIAq3AP4KkgiX4c2nFVV%2F5ofsVIBQUWGIDvqSZlOkp%2FodoBlMG8TAUOEeF20Sn5tYnANLqw04oekO2fyUC1RsSgdWC7s%2B13Go2KDB%2FFPLQMiVxU744oH39qOJuGk50YfU1s1tIcf7hS%2Bgl5VIh%2B6PpbcMbXsQBVjGJb01wPYYYrdj7ReUOlntx1rQMOYNRZlkeR0hOmVc0Rdh1tGz2O2NfD1fMnbfrA3S9CThB1qyH6dcgeB5DP1IHCJooDZbUV7m0NYodcyh6gpZ27THkHxgraz24UW6JmY2hgun68k%2B1m%2BkutgRrJFMO%2FU2u2yxwxoU2RJFYZkFAeio%2BS1rBgkNgsnHCgjumO%2B7gKi59zLzxwS8Le6BZkSeslBZAf%2BxwtiGSuMXSvJNqgUq4fTwCxjqZt7t%2FgLU6G7p0NuSsbxxRjVXueTO65OgMU3LX%2FekDlDLPEvZI5A9WULc%2FYWz47TS%2BQL1GcHmRRwvmgCRYoyGepMvphSeZ3DvmMFcpICQqiLZgXC5Yskh%2BYnXUZml9Q6hQw7M0ooXXQRtENArdxgGpQbU4LQUM%2FNf%2FDKWVkK%2BrdfCYuvjc%2BettzHq2skOUY5xC0V3e1AXO4%2BvvRr%2FfK0nmoz9%2B3RZYKLbS5W%2Bm3PXV22iDCgg9nDBjqkAeVLMTeyVDUj92RWbhy6nJs%2F3awnnoqS8kfabuYeJd89JinnjT2KH8Y22Q35groiTwP6e0fO9jAwkht%2F5QSageWdflmqFJPJOQpfMEc6mmT4swK7b4n8WNH5CpsBcXb%2F0ctHoOliFm1MXrqWVrH%2FXvVqqgH66Zq5tK1wovj3d9pBESJmFsKkaiwP4U7D8iknBHIFbIa7PF%2FQ%2FCFWxLE%2Fm6maabw4&X-Amz-Signature=7a2d622c738d3c3d8d1f5a2d2cce3a024a8667452aff9940d8867d606e813bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXV6O2W%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC6CIPhTMWOeJQ2bD9QlpsNpPHMig51Zxk5Vv7EMVN0ygIhAKoVFtEcB9oWTYjyxkXfXt5470U38wZdceKEK1vu6XoSKv8DCEUQABoMNjM3NDIzMTgzODA1IgwXRmnDJdalNhxMSIAq3AP4KkgiX4c2nFVV%2F5ofsVIBQUWGIDvqSZlOkp%2FodoBlMG8TAUOEeF20Sn5tYnANLqw04oekO2fyUC1RsSgdWC7s%2B13Go2KDB%2FFPLQMiVxU744oH39qOJuGk50YfU1s1tIcf7hS%2Bgl5VIh%2B6PpbcMbXsQBVjGJb01wPYYYrdj7ReUOlntx1rQMOYNRZlkeR0hOmVc0Rdh1tGz2O2NfD1fMnbfrA3S9CThB1qyH6dcgeB5DP1IHCJooDZbUV7m0NYodcyh6gpZ27THkHxgraz24UW6JmY2hgun68k%2B1m%2BkutgRrJFMO%2FU2u2yxwxoU2RJFYZkFAeio%2BS1rBgkNgsnHCgjumO%2B7gKi59zLzxwS8Le6BZkSeslBZAf%2BxwtiGSuMXSvJNqgUq4fTwCxjqZt7t%2FgLU6G7p0NuSsbxxRjVXueTO65OgMU3LX%2FekDlDLPEvZI5A9WULc%2FYWz47TS%2BQL1GcHmRRwvmgCRYoyGepMvphSeZ3DvmMFcpICQqiLZgXC5Yskh%2BYnXUZml9Q6hQw7M0ooXXQRtENArdxgGpQbU4LQUM%2FNf%2FDKWVkK%2BrdfCYuvjc%2BettzHq2skOUY5xC0V3e1AXO4%2BvvRr%2FfK0nmoz9%2B3RZYKLbS5W%2Bm3PXV22iDCgg9nDBjqkAeVLMTeyVDUj92RWbhy6nJs%2F3awnnoqS8kfabuYeJd89JinnjT2KH8Y22Q35groiTwP6e0fO9jAwkht%2F5QSageWdflmqFJPJOQpfMEc6mmT4swK7b4n8WNH5CpsBcXb%2F0ctHoOliFm1MXrqWVrH%2FXvVqqgH66Zq5tK1wovj3d9pBESJmFsKkaiwP4U7D8iknBHIFbIa7PF%2FQ%2FCFWxLE%2Fm6maabw4&X-Amz-Signature=ba2d7f5973ff802522d397d231d10f88e99162178026c84fd8e09f2041ff6991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
