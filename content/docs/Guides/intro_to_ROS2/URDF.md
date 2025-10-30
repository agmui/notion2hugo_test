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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPB5XDE%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAnhrWAyVczVtiDd0%2FjJrRXWkziNQ%2BC9YtXjXTCkgFOYAiAMI8yXjWgqzz5B8x%2Fxmr1vaYDP0mzZaBtplHCjaMshoSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0%2FFQCEQvt2Ln8eUKtwD%2FW3x9nSABPj55h4Qhf0AhctjWqypeF3yqa8pcjCvtIVxo8SjRwZqSyVvYkoPVG2gR%2FviclYdLcrlteOcdGKJYG0R9gq14ousk%2FZGRqeVa84KLyynrVBb1gVbsyQmJLxR5uyHu%2F52D5hIwfYW%2FSLwHWgABN68VD185g0ZyNoID5GpxcPDy71JMgax7cIcaW397Ba8kN6MTr7Cp0%2FrTDKunyV65oQa3dB3ebcVoK1ys8AdIApQpERGp7i6A%2BIwfQoehbgvmJL7mFq4q79ir3JlY8JYCcMLawofhdp%2BfIvJamznU1ungOMsv7LLjvToYmJ72MW8cV8ShRnxOUc1wE1lV6DyfB6%2F80UfvQ%2FAJbotA4cBqQ2rRnMQqwQetzM82PctfTXUILu0%2B1DkILiyH5VMnGqQC%2B4p8Czu853tmsYvkJ6U7nCu0NUm2JYK9wQOPhm1lcjPgp22FpFPGtrH3hF3vRMpbsv7a34ac0tMQOeb0XnB2%2FTKrrKbu4ssL3SvI2LpiI4QQpYTmZxk8nttUYMjKi%2Bsn8Ht0qQgb2%2FwdOqeP9BAsyw%2FwxkdvM6XGAadF4XGuqELX%2F6GKHcxQ7t5Dn99EAehBOV5A9%2BBfvfkAC6kxpr7FV6b7vF2qSVwa3ww8PWKyAY6pgHZLxpcXvEfo9h4Iw9YScG0Qn6MGIKj1FOCktBahG0H9rxOrHoUb9EdczLAG6CW09RrGczBrCTqApxoAiHPE5eqrILtJJ%2F5fgXDTMYVaQu3L1BdKTX6s0FUEpPznykPGHr7vx%2F2G6KSe%2F6XiciSyB3DTTXAt3%2FEHyHzdRTK3PdW9cAINprF0NVdxom7rXJKFWgyp%2FHTNxAaCZXfdt4%2FCa8mEhDw%2F6u4&X-Amz-Signature=e06d18358ff056245e559d338ac2c4e4ba337d32f3219b0b9aac7e3753ec4a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPB5XDE%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAnhrWAyVczVtiDd0%2FjJrRXWkziNQ%2BC9YtXjXTCkgFOYAiAMI8yXjWgqzz5B8x%2Fxmr1vaYDP0mzZaBtplHCjaMshoSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0%2FFQCEQvt2Ln8eUKtwD%2FW3x9nSABPj55h4Qhf0AhctjWqypeF3yqa8pcjCvtIVxo8SjRwZqSyVvYkoPVG2gR%2FviclYdLcrlteOcdGKJYG0R9gq14ousk%2FZGRqeVa84KLyynrVBb1gVbsyQmJLxR5uyHu%2F52D5hIwfYW%2FSLwHWgABN68VD185g0ZyNoID5GpxcPDy71JMgax7cIcaW397Ba8kN6MTr7Cp0%2FrTDKunyV65oQa3dB3ebcVoK1ys8AdIApQpERGp7i6A%2BIwfQoehbgvmJL7mFq4q79ir3JlY8JYCcMLawofhdp%2BfIvJamznU1ungOMsv7LLjvToYmJ72MW8cV8ShRnxOUc1wE1lV6DyfB6%2F80UfvQ%2FAJbotA4cBqQ2rRnMQqwQetzM82PctfTXUILu0%2B1DkILiyH5VMnGqQC%2B4p8Czu853tmsYvkJ6U7nCu0NUm2JYK9wQOPhm1lcjPgp22FpFPGtrH3hF3vRMpbsv7a34ac0tMQOeb0XnB2%2FTKrrKbu4ssL3SvI2LpiI4QQpYTmZxk8nttUYMjKi%2Bsn8Ht0qQgb2%2FwdOqeP9BAsyw%2FwxkdvM6XGAadF4XGuqELX%2F6GKHcxQ7t5Dn99EAehBOV5A9%2BBfvfkAC6kxpr7FV6b7vF2qSVwa3ww8PWKyAY6pgHZLxpcXvEfo9h4Iw9YScG0Qn6MGIKj1FOCktBahG0H9rxOrHoUb9EdczLAG6CW09RrGczBrCTqApxoAiHPE5eqrILtJJ%2F5fgXDTMYVaQu3L1BdKTX6s0FUEpPznykPGHr7vx%2F2G6KSe%2F6XiciSyB3DTTXAt3%2FEHyHzdRTK3PdW9cAINprF0NVdxom7rXJKFWgyp%2FHTNxAaCZXfdt4%2FCa8mEhDw%2F6u4&X-Amz-Signature=176dde9e9e897f68c4eba4cd46e709cc86b727784e53edc9371ab774bffb497d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
