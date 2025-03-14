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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WAESYJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2tbpvTMv8Ena17L6zN5Ex76yn%2FWVY%2BzHs6yJB25tOLAIgX9gxavp4%2Bc6qz8rFNTnu7CWMeIxDSax3kR6vCf%2FsY1oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGB0CXbe4Ys1BU4ySrcA0zesqxQb6ytN2egUMkEHgway1%2BQCSCFPkq8vXMRM8QUcBF22qYXd2jXeIrZ5a9BdKoMngwiUjzJ3yZoL8hg0FJXXaYuVCRYQscU%2BFvFiqFBhHQRvVR9KGzG4hyryOQSPkhuu15mALQf9HjjNWvvlL4gyw2pu2BoxxOOzhnsyPfDNG7epofkxZaEE9%2Fkpa5CQ%2Fmhc6an3V0PjgaJMFuLsQ3ZtraJ61cOwVyzatk1gftmAdYYCixVjdlDeromSQmHoDplHAk%2B%2F7zlyxioUja2WRapJcT9KJPyAigTCFDicyHR2AdN1amoCdXqxv1EhRGilCcJpLKdi5rLqRKl7sLw9q8dFgrDDCwOfpY4dsltAXEuUcGV1whTNhzExs5COxD2%2FIeeli263TJEU9GPv0mHP7DnHBLaJtAgjQsq0xzhWQ4P5%2Fx5jxxDfDdfEVO%2BSz60mJuybczQWlmnVHol6Awvu4SwKMvk%2FeVz0RYEmQxWMV6LXSNDQNEGwX20ONm4l02U4uuLXy3Pa%2BFT3JTToTiicPZkyd26VYPP0FHqNdrEcjr%2BTnaJZCEF%2Fhhe442pV5TXEFO96LXpyXrjLXuqnc2xPjcvg0kNPv0YiMADQR15UnedyvTQ20ji4f7mYusoMISy0r4GOqUBvco6Wsb5jFnC8NNxAl7RXrfyeYxNkLsZIOpqh%2FkHZZbd5FX%2BYRI9awpAdWLPQfVc8OGPQjzLfXhgMzFgtAbhaHmrkT%2FAkUbUVSSNwf5r0PETTAtX6z1av4l4cUc%2FY7hifobpr%2FpXFrwC0cfcibJa7o%2BceyAHh9uagcmyJi8hmNJNetjemzT6erx3FccsE9rq2sBWz80Qiy3eZ7Da3wVhUnFu4bMD&X-Amz-Signature=44e27197841aabf6d0f208862706b732b89a3b179ba474c1b70325a7dd1f2613&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WAESYJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2tbpvTMv8Ena17L6zN5Ex76yn%2FWVY%2BzHs6yJB25tOLAIgX9gxavp4%2Bc6qz8rFNTnu7CWMeIxDSax3kR6vCf%2FsY1oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGB0CXbe4Ys1BU4ySrcA0zesqxQb6ytN2egUMkEHgway1%2BQCSCFPkq8vXMRM8QUcBF22qYXd2jXeIrZ5a9BdKoMngwiUjzJ3yZoL8hg0FJXXaYuVCRYQscU%2BFvFiqFBhHQRvVR9KGzG4hyryOQSPkhuu15mALQf9HjjNWvvlL4gyw2pu2BoxxOOzhnsyPfDNG7epofkxZaEE9%2Fkpa5CQ%2Fmhc6an3V0PjgaJMFuLsQ3ZtraJ61cOwVyzatk1gftmAdYYCixVjdlDeromSQmHoDplHAk%2B%2F7zlyxioUja2WRapJcT9KJPyAigTCFDicyHR2AdN1amoCdXqxv1EhRGilCcJpLKdi5rLqRKl7sLw9q8dFgrDDCwOfpY4dsltAXEuUcGV1whTNhzExs5COxD2%2FIeeli263TJEU9GPv0mHP7DnHBLaJtAgjQsq0xzhWQ4P5%2Fx5jxxDfDdfEVO%2BSz60mJuybczQWlmnVHol6Awvu4SwKMvk%2FeVz0RYEmQxWMV6LXSNDQNEGwX20ONm4l02U4uuLXy3Pa%2BFT3JTToTiicPZkyd26VYPP0FHqNdrEcjr%2BTnaJZCEF%2Fhhe442pV5TXEFO96LXpyXrjLXuqnc2xPjcvg0kNPv0YiMADQR15UnedyvTQ20ji4f7mYusoMISy0r4GOqUBvco6Wsb5jFnC8NNxAl7RXrfyeYxNkLsZIOpqh%2FkHZZbd5FX%2BYRI9awpAdWLPQfVc8OGPQjzLfXhgMzFgtAbhaHmrkT%2FAkUbUVSSNwf5r0PETTAtX6z1av4l4cUc%2FY7hifobpr%2FpXFrwC0cfcibJa7o%2BceyAHh9uagcmyJi8hmNJNetjemzT6erx3FccsE9rq2sBWz80Qiy3eZ7Da3wVhUnFu4bMD&X-Amz-Signature=80c09ea55af9c5f607f5b00e202f2b45c87970e6ed36a9289e632dead6e73cee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
