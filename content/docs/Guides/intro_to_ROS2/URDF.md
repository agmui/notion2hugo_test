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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKIVETC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjnjle%2BTp0Q97Bx5CgxCoj8SwU7Qibdb8Q%2BZjV7amvuAiEAmUyazj4mK0SW0iGQ1RVduGRjffuNS0IzkzXU557nw5kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgj%2FU5ml8uGVgzaVyrcA40EYNpsrfe6OK6gJj8nyAct9ykTJ%2FODSwuo5B5vIlRI5Cz4W%2FEykoLcVZ7a0DqgaitjrJNkcrK0TmicCL98k4VjkhlMbPNrSd3rFC05lONwv2lM1LpEyq5ynqArGrVtv0fszcpW2ZUDNHN7eGD5APe%2FLbwA17lcfXb0B5CguVClvG9s%2F9J0ky1CA80ZmlSM56YbN8CrCJi2gLuNXXGF6AsDsinhGx%2Fb%2Fvhf4LnaoyG6Jy%2BNa4Lv78SCPVR%2F%2B3nMWyHsbx53Y0ZNqNywPBYeNf4BiKxcnK4OetBQQHLua%2Bh%2BSTcSoc50i%2FAvd4%2BC6SrQG1uKIzPGBsRlmYSQrsCZ7XRAqIzCDnmfyaGAKpjKU717tnC7cXsiqnS5%2BLwL99DxV5HIbIlg%2Fvyv81xwouTXK2SMPzGLINwXJCgDAkabS873TxbwmGTHHr8LX%2BdzpqnnUWzW7ZMukvAedvrfnfNbdi2SfM7TGI50MSGGE7kh6i7BYAXEJKaYkJxdgBW5eBCAr2Bxa1Qh9XJb%2FU4joT8ncvcm8uRfcGTEgoJ%2FSrdY2aQrp%2BiJTHmKBfHHpIAHXIzGc63VXS5KQEGXUkCK8RuWw84STvgNk%2B1t5TvGM3jtjQMj%2BLZzLwIS9418qbeBMLjour8GOqUB2ztBrqodOKXMbGZwkod1oCXw%2BlrwHLyeYRmH%2BN0itpFF6p6bSTtEOD%2FLciHP43DTkyn%2BxF4naanTHYZW8JGUsCO3AW%2BxD0zeBDleLg1JTKISLYSKvfcoTLXXaH3V60KZbIxasfqMOU2uzydq9cJVsOFz3NRTgB%2Fw0GwScOJ%2FAkpenFO1RLkdNU6s2qvdda3PP9PLocljj9b%2FxHvIqQekSZFlejjm&X-Amz-Signature=0d7d0bc6dd8d16ed682ec616547a32ee62e5d44854590d76537d83c35adf9622&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKIVETC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjnjle%2BTp0Q97Bx5CgxCoj8SwU7Qibdb8Q%2BZjV7amvuAiEAmUyazj4mK0SW0iGQ1RVduGRjffuNS0IzkzXU557nw5kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgj%2FU5ml8uGVgzaVyrcA40EYNpsrfe6OK6gJj8nyAct9ykTJ%2FODSwuo5B5vIlRI5Cz4W%2FEykoLcVZ7a0DqgaitjrJNkcrK0TmicCL98k4VjkhlMbPNrSd3rFC05lONwv2lM1LpEyq5ynqArGrVtv0fszcpW2ZUDNHN7eGD5APe%2FLbwA17lcfXb0B5CguVClvG9s%2F9J0ky1CA80ZmlSM56YbN8CrCJi2gLuNXXGF6AsDsinhGx%2Fb%2Fvhf4LnaoyG6Jy%2BNa4Lv78SCPVR%2F%2B3nMWyHsbx53Y0ZNqNywPBYeNf4BiKxcnK4OetBQQHLua%2Bh%2BSTcSoc50i%2FAvd4%2BC6SrQG1uKIzPGBsRlmYSQrsCZ7XRAqIzCDnmfyaGAKpjKU717tnC7cXsiqnS5%2BLwL99DxV5HIbIlg%2Fvyv81xwouTXK2SMPzGLINwXJCgDAkabS873TxbwmGTHHr8LX%2BdzpqnnUWzW7ZMukvAedvrfnfNbdi2SfM7TGI50MSGGE7kh6i7BYAXEJKaYkJxdgBW5eBCAr2Bxa1Qh9XJb%2FU4joT8ncvcm8uRfcGTEgoJ%2FSrdY2aQrp%2BiJTHmKBfHHpIAHXIzGc63VXS5KQEGXUkCK8RuWw84STvgNk%2B1t5TvGM3jtjQMj%2BLZzLwIS9418qbeBMLjour8GOqUB2ztBrqodOKXMbGZwkod1oCXw%2BlrwHLyeYRmH%2BN0itpFF6p6bSTtEOD%2FLciHP43DTkyn%2BxF4naanTHYZW8JGUsCO3AW%2BxD0zeBDleLg1JTKISLYSKvfcoTLXXaH3V60KZbIxasfqMOU2uzydq9cJVsOFz3NRTgB%2Fw0GwScOJ%2FAkpenFO1RLkdNU6s2qvdda3PP9PLocljj9b%2FxHvIqQekSZFlejjm&X-Amz-Signature=f4d14d533e5fa61ed10d2ee46772807adcacbb7e9e5eb415c8f7fc710401fb9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
