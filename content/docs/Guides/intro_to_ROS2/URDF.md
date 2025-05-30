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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBTV3PS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcvW3L2ugx8RoTPbPUav6n7i2sjH%2FXdxJwLv6iXs8WHAiEA8eOQFuQ0SmVfTOaYupTk1Wi%2By%2FXw8rHciO2FQyllNUYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BOsbZKdBW1lD89zSrcAyVc13BJkHy%2BIjP3YEZEV9g9zUxuD%2B0Nwe0RzuTFwHxEgwi29LBQCwtIpJQE1tla3vniYY5Pd9ZowhhIUTQ5DNMShFEwcO6O0xvdc%2BIDGKUvAB3LtUFKLWNsis5bQq8S2qUjsT6yoSkCJyHOuQumAVDjiV1wSGE2jJhEcqiZr%2BTNxmWpd1ZpUohqZ7HMWhLxFoWKY%2Frmw42mAlH5binPKBgHTsDPJmEF8N4Ay5RpG%2FmyLttV85e2yFUvpqfn1EAZC1xCo51pydxlkIQd6RX7bK3Cvm%2FDF23Qw3U354bttJwo8LCvPv3DVLzbdtxCfY6AJ%2Bi2F6G4kWxr%2Ffy8iHzQDTxDVxEREAXQG8yqvOsmtUhV9URr694VnDHnKWfb1%2FX19KhkzJa01lT%2B5cCCX1KP3AFIV7d5%2FLciAvOObSjUv4WY3FXRnOBJNrwokDGBWaOfujKKcOcPGQIFJuv20zpo%2FON2ivhXeOdr03WD1gTc5kNEVql77vz0qdUxeVy3Xq0RtLqvDjinOfQPBHrTfTvkJQ%2FqZ3wzIF%2B8lHWnzviP%2F%2BjAfG09R2YmW8OyUy25TeV0s%2FxXkIzKEhhGRQ9Z7KZMYY65jp3eGdzcZ0d4JtKokXiVvF1jt54V1X6IQ2vUMIjy6MEGOqUBgpuVg0GiJyTrhnq5NkmxLao59I70dPATn4ZJL5IWmSjzN4xHnhptgIv%2B8JjdNTudGjUhnXJyXOXV%2FNWjvNrOuQH3LqVzHpbpNR1NFA0KSXfkORQK5wb6NdfF4zFoxbPGPIvEs89bNVLaIv4O8kkk2QB4gqa9%2BBsc1wjt8MgBFBZP%2FSR%2BP1HbNTqm5sF%2F543D2HaOKdYzp9icv%2FaaeKjXZIPbOj9g&X-Amz-Signature=b52e2c9eb76870533d99689cbcbb99c1fddec0b93fa959a3d1fc2713e0a2ba0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBTV3PS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcvW3L2ugx8RoTPbPUav6n7i2sjH%2FXdxJwLv6iXs8WHAiEA8eOQFuQ0SmVfTOaYupTk1Wi%2By%2FXw8rHciO2FQyllNUYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BOsbZKdBW1lD89zSrcAyVc13BJkHy%2BIjP3YEZEV9g9zUxuD%2B0Nwe0RzuTFwHxEgwi29LBQCwtIpJQE1tla3vniYY5Pd9ZowhhIUTQ5DNMShFEwcO6O0xvdc%2BIDGKUvAB3LtUFKLWNsis5bQq8S2qUjsT6yoSkCJyHOuQumAVDjiV1wSGE2jJhEcqiZr%2BTNxmWpd1ZpUohqZ7HMWhLxFoWKY%2Frmw42mAlH5binPKBgHTsDPJmEF8N4Ay5RpG%2FmyLttV85e2yFUvpqfn1EAZC1xCo51pydxlkIQd6RX7bK3Cvm%2FDF23Qw3U354bttJwo8LCvPv3DVLzbdtxCfY6AJ%2Bi2F6G4kWxr%2Ffy8iHzQDTxDVxEREAXQG8yqvOsmtUhV9URr694VnDHnKWfb1%2FX19KhkzJa01lT%2B5cCCX1KP3AFIV7d5%2FLciAvOObSjUv4WY3FXRnOBJNrwokDGBWaOfujKKcOcPGQIFJuv20zpo%2FON2ivhXeOdr03WD1gTc5kNEVql77vz0qdUxeVy3Xq0RtLqvDjinOfQPBHrTfTvkJQ%2FqZ3wzIF%2B8lHWnzviP%2F%2BjAfG09R2YmW8OyUy25TeV0s%2FxXkIzKEhhGRQ9Z7KZMYY65jp3eGdzcZ0d4JtKokXiVvF1jt54V1X6IQ2vUMIjy6MEGOqUBgpuVg0GiJyTrhnq5NkmxLao59I70dPATn4ZJL5IWmSjzN4xHnhptgIv%2B8JjdNTudGjUhnXJyXOXV%2FNWjvNrOuQH3LqVzHpbpNR1NFA0KSXfkORQK5wb6NdfF4zFoxbPGPIvEs89bNVLaIv4O8kkk2QB4gqa9%2BBsc1wjt8MgBFBZP%2FSR%2BP1HbNTqm5sF%2F543D2HaOKdYzp9icv%2FaaeKjXZIPbOj9g&X-Amz-Signature=242f6935a0a0158c45c2228d0cbee6660d7f9ff30caf4b16f24dd3ade43c4173&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
