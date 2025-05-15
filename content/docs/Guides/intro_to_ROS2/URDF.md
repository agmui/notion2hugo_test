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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCN4QL3H%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCpGu%2F7TQo7MjDGJ2QUaHxRh45jgKyj7Hf6%2F2R0JZh6rgIgNTHR4jIabyCZZEnlUCzzNUlzt65vJ1jIClgyKcM6ujkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIiMdW6038wyKGfHPyrcAy%2Fymt8LBfe0nLmXMLS1SKiVN5rzEXlFhKY9UWcP8h86gpMA%2FA4l4hVJXWg5E9p8cLqJUD%2BivO7CntkXAgHEZDJr61lrbssRww3eM1MW%2Bo1T33eosMqGyGQ9Wm9cCkUQfScDLyLinC1cZUchNz%2BWppfOEQJwcMK1SH7UHsjLU4%2FNXKiZ1MaHn7qQNh%2FOgJy%2BPjx21rhcjgtjTl5wWgqIsGRweyP8HiiQ5vzFzMlmLl2%2BWPj7QYid5wzwQaOLzap4uLlXJF3DsgkfUobAlDPg7Ed0vSHNYsvwATAqEgT7fXJHICCVHkmz0aAYIOK7%2Bo6NddKV8qf20Qdke%2FVPUEkH0YmeLNNc9kaiMhW53qkYO9K3sISKkpeCNb0SxYFO%2FZKWR8MWs1NN5PhMzoz6LwVoWl1%2Fs%2FPuFuzZo3dM8AA7lub%2FixlJP2SJ3kiHxuf%2Fq9lW6wBlyqgtEvhBjQdxLjlkYtEvaiLzwPeo1Z2nAr9KWRM1zJQlVCVutlBn7ucuATYjt%2BHBdt7IZ%2Fb7CoH%2FeEzB5HRH0HRAX6XeyXBjKc9pNcjOrqrHVkZ1HivMTwciAIDkWA3T3s9Ykh3A0WoJ5jIkCTmaP%2FCW78pMkdabOiarMURRPWjNzev0tP6%2FGt7iMKidlsEGOqUBpkUzNKeoepxBcz%2FLCvhTX4n9wx8EL0GhRd8ws8RVO0X01r37gpnD1cB0xHhOBS9caIVMAjSS42LA9cEX2dum97Rr2b0w3vHSpcMqEDNjX7sJjFucLD1Q8Qbxz1EsAbkSGLSH%2FVec9hiMer1Vew%2FRecCQcUR0hRbdbECW7%2B079TD0nJ0W6xaTvDAEcRyiaEtjfFb2gkQ%2BwXckLT6CSv9%2BnmY1lTC%2F&X-Amz-Signature=2572f2bfc6dfbda4a3a5cec87daab40c385e1657891cea095dc5ff5e647270de&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCN4QL3H%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCpGu%2F7TQo7MjDGJ2QUaHxRh45jgKyj7Hf6%2F2R0JZh6rgIgNTHR4jIabyCZZEnlUCzzNUlzt65vJ1jIClgyKcM6ujkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIiMdW6038wyKGfHPyrcAy%2Fymt8LBfe0nLmXMLS1SKiVN5rzEXlFhKY9UWcP8h86gpMA%2FA4l4hVJXWg5E9p8cLqJUD%2BivO7CntkXAgHEZDJr61lrbssRww3eM1MW%2Bo1T33eosMqGyGQ9Wm9cCkUQfScDLyLinC1cZUchNz%2BWppfOEQJwcMK1SH7UHsjLU4%2FNXKiZ1MaHn7qQNh%2FOgJy%2BPjx21rhcjgtjTl5wWgqIsGRweyP8HiiQ5vzFzMlmLl2%2BWPj7QYid5wzwQaOLzap4uLlXJF3DsgkfUobAlDPg7Ed0vSHNYsvwATAqEgT7fXJHICCVHkmz0aAYIOK7%2Bo6NddKV8qf20Qdke%2FVPUEkH0YmeLNNc9kaiMhW53qkYO9K3sISKkpeCNb0SxYFO%2FZKWR8MWs1NN5PhMzoz6LwVoWl1%2Fs%2FPuFuzZo3dM8AA7lub%2FixlJP2SJ3kiHxuf%2Fq9lW6wBlyqgtEvhBjQdxLjlkYtEvaiLzwPeo1Z2nAr9KWRM1zJQlVCVutlBn7ucuATYjt%2BHBdt7IZ%2Fb7CoH%2FeEzB5HRH0HRAX6XeyXBjKc9pNcjOrqrHVkZ1HivMTwciAIDkWA3T3s9Ykh3A0WoJ5jIkCTmaP%2FCW78pMkdabOiarMURRPWjNzev0tP6%2FGt7iMKidlsEGOqUBpkUzNKeoepxBcz%2FLCvhTX4n9wx8EL0GhRd8ws8RVO0X01r37gpnD1cB0xHhOBS9caIVMAjSS42LA9cEX2dum97Rr2b0w3vHSpcMqEDNjX7sJjFucLD1Q8Qbxz1EsAbkSGLSH%2FVec9hiMer1Vew%2FRecCQcUR0hRbdbECW7%2B079TD0nJ0W6xaTvDAEcRyiaEtjfFb2gkQ%2BwXckLT6CSv9%2BnmY1lTC%2F&X-Amz-Signature=709c65324b727570b58c171e09d129d57693c88561f5aefa559a24398e842f50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
