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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675B5IJO5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICup0AbTEyqPQcwPMhULRCDHL6V5gpaN%2F8hNSdXOnrLhAiEA4N2FEHfPbqvuKKoYzoKdMQGCA22vt1bLtwqgJFtRGkkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMdNwMjYazvFlR7xircA9ftQ7bvRlcRguFz%2FZcl5BaQqzpfqAk4hnE9hiI1SGB0LG2RDsyydeKHt4Dxdc3qfpG6hcXtIzRSZ31EexVNzypk3WB60UkWWJ73w341P4q2lomuKuAAG%2B7wfAuxnE4eEIRujawiBsq%2FkO1RmCJ9VKTNzuSP0VrQePiZlw9evqmQ0ZRgNbNvQDj04Pemu0ZWKQxnyXeUdR1LM6KghFYy6VGQSqfhzq0qX5dajFm3%2FlQa%2Bf92IZ6XbsCqNb6n64O%2FzYa7fWE%2Fv8HIEcxRUXdpnAasj7MY3i3sJYFmHCHLmnNK2bmBG%2BgMu7AhaPLhh7EUViKID7zuyoU40UhG%2FM9%2BdvXhuLk4StLckPhVLWO5bA226iMSwpM%2FArv5v%2FU4iRa4YDVWNGi12DbV6sj8hTV1AMVkVTEbErmGXNGKmlBH7tviceKE9BY2ewQSPsfbS28oaZwcp9x%2F7oP%2FMEvA8tT8XrLpLNzLz5IdniMa85Omfypc3Vq3tcxUluZlmlBPUgsXdeqT99xZUAZIKkbrmt6L6QA5myxIJm2X%2B82hMfs1XFnlBENfZIwT8ZGIDtqkP5T8T8f3ff9ARKA0R9F0EFdAJMxcEZ5hKlhrb05DWpL1RWiadS1TCbUQZLTcmmdBMOmDo8AGOqUB%2FksUAwtc63okYipLufxjboLM7hNfzurSga4nOGkrti9fzz4WxEcMd8VQS%2BIKn2RMAXE%2B5M8NDd59p4rKpt5IUS%2B9Dk5S3i2mZoIbQs2%2BE%2FZ3W3H8nO9mBsBG%2BEl37puwUz3gQeyHu5ozL0EqyfoGn%2BsPiiew4FO%2FwasBqqi2E9FdnvEQcmkvT7KyG41Jgk89r0NrNDXn2DPkY02%2B1XntIt6yV6%2Fr&X-Amz-Signature=b17001395f7c270ee386da718d3834273d2737c62105ed49314ecad8e0258164&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675B5IJO5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICup0AbTEyqPQcwPMhULRCDHL6V5gpaN%2F8hNSdXOnrLhAiEA4N2FEHfPbqvuKKoYzoKdMQGCA22vt1bLtwqgJFtRGkkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMdNwMjYazvFlR7xircA9ftQ7bvRlcRguFz%2FZcl5BaQqzpfqAk4hnE9hiI1SGB0LG2RDsyydeKHt4Dxdc3qfpG6hcXtIzRSZ31EexVNzypk3WB60UkWWJ73w341P4q2lomuKuAAG%2B7wfAuxnE4eEIRujawiBsq%2FkO1RmCJ9VKTNzuSP0VrQePiZlw9evqmQ0ZRgNbNvQDj04Pemu0ZWKQxnyXeUdR1LM6KghFYy6VGQSqfhzq0qX5dajFm3%2FlQa%2Bf92IZ6XbsCqNb6n64O%2FzYa7fWE%2Fv8HIEcxRUXdpnAasj7MY3i3sJYFmHCHLmnNK2bmBG%2BgMu7AhaPLhh7EUViKID7zuyoU40UhG%2FM9%2BdvXhuLk4StLckPhVLWO5bA226iMSwpM%2FArv5v%2FU4iRa4YDVWNGi12DbV6sj8hTV1AMVkVTEbErmGXNGKmlBH7tviceKE9BY2ewQSPsfbS28oaZwcp9x%2F7oP%2FMEvA8tT8XrLpLNzLz5IdniMa85Omfypc3Vq3tcxUluZlmlBPUgsXdeqT99xZUAZIKkbrmt6L6QA5myxIJm2X%2B82hMfs1XFnlBENfZIwT8ZGIDtqkP5T8T8f3ff9ARKA0R9F0EFdAJMxcEZ5hKlhrb05DWpL1RWiadS1TCbUQZLTcmmdBMOmDo8AGOqUB%2FksUAwtc63okYipLufxjboLM7hNfzurSga4nOGkrti9fzz4WxEcMd8VQS%2BIKn2RMAXE%2B5M8NDd59p4rKpt5IUS%2B9Dk5S3i2mZoIbQs2%2BE%2FZ3W3H8nO9mBsBG%2BEl37puwUz3gQeyHu5ozL0EqyfoGn%2BsPiiew4FO%2FwasBqqi2E9FdnvEQcmkvT7KyG41Jgk89r0NrNDXn2DPkY02%2B1XntIt6yV6%2Fr&X-Amz-Signature=f54a8d865605b0592e1db0535b003b44815b0b1e7b7a918af610f5f7659ec5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
