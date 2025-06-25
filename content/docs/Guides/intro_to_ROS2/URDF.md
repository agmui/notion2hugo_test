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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOPI33M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF%2F22V0WsIoOKddzdgccAbXw00hGKY5yOzNosSXZSd87AiAK1ARiKzClCyI6t0OM96cTUevvGVrlnuE4IOkkjaEM9Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMX4iV44M20RcZXkPnKtwDxyh%2BbKzdpuRX1z8S47xDUsKjqyLgHOPDCnIyVp1%2B4nt0fhhOgh8ZLHyqDRgqd8n1HSMOepH%2FrDgBrHw0JkQz2IuOYkqzvaou5%2BSFPlN8ayrASswDnErOzWbL%2B5DYOT1zswahUlUqRePPbHjM0tHZn7VGmmxKCgSkPUV4d2a7drF6%2FiTW%2FOkSkUSEX5swQGbIazZGLoSkuSQScDJOsSZHyIKC6KHzStCR3jBtYEdeqMSvolzXC7JC8e68FmH0XvXYDx1pSCiBlW9Osquur%2Ffzcr71VlIQ2%2FL7jCWp4yaQkATEkgXDkgDoz9gkXvwM5Vxo0FbSlERJAjrmfL7AzByerJSMSQfqKHU3S6VueBkXgB0LxsWtMEKv4nJA1mSEXLmX0qCfkXTe9eSYPu2Wb0ENatejZSBIDrExk7DhuTv8xGFHu2F3Wtkh28qqBqnk48VRRDywizgkUoVvYXjGprNzXEYwpG7FH2cfgZQRFi9oiE564r4x9EOR1GGJhY6Ni5E81%2FQt3d8AMBT7uzotkjLXaOKWeIT6b%2Bdzf8nAUv8F8SRvhqpYQ9ydXlG2eMMewiEH6eqx5y7ba7lnOmUdzM8LQC7uIXU6S6MzQKcHMkP8Q4hy%2FnE7jKdWedqr5oQwv8LtwgY6pgGNZ2P8gXcGaSKeZ9wfJQNJtgpOCGoSO5BiC%2B%2BNvk6wLAzEDd50EqekMMMPU3fRQjjGL6siY8NfK4PFn71H6M%2B7GGt56i82DlCY26xMk6JZ4AJWb5YY%2BSFAGFlybp7dXX2tecDjKvUg7vS2QUZrgk3RpZlt8PrK8SwmKzhr45ri%2FWCRup3LgAF4aBk7FnktQUJQh6U5tHL1T%2Bn4%2F4Ks%2FhnCbbwrjWDR&X-Amz-Signature=385fb626d88b7565efe46c5569603506b03170861ad2e3d95ab3641ea34f6604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOPI33M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF%2F22V0WsIoOKddzdgccAbXw00hGKY5yOzNosSXZSd87AiAK1ARiKzClCyI6t0OM96cTUevvGVrlnuE4IOkkjaEM9Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMX4iV44M20RcZXkPnKtwDxyh%2BbKzdpuRX1z8S47xDUsKjqyLgHOPDCnIyVp1%2B4nt0fhhOgh8ZLHyqDRgqd8n1HSMOepH%2FrDgBrHw0JkQz2IuOYkqzvaou5%2BSFPlN8ayrASswDnErOzWbL%2B5DYOT1zswahUlUqRePPbHjM0tHZn7VGmmxKCgSkPUV4d2a7drF6%2FiTW%2FOkSkUSEX5swQGbIazZGLoSkuSQScDJOsSZHyIKC6KHzStCR3jBtYEdeqMSvolzXC7JC8e68FmH0XvXYDx1pSCiBlW9Osquur%2Ffzcr71VlIQ2%2FL7jCWp4yaQkATEkgXDkgDoz9gkXvwM5Vxo0FbSlERJAjrmfL7AzByerJSMSQfqKHU3S6VueBkXgB0LxsWtMEKv4nJA1mSEXLmX0qCfkXTe9eSYPu2Wb0ENatejZSBIDrExk7DhuTv8xGFHu2F3Wtkh28qqBqnk48VRRDywizgkUoVvYXjGprNzXEYwpG7FH2cfgZQRFi9oiE564r4x9EOR1GGJhY6Ni5E81%2FQt3d8AMBT7uzotkjLXaOKWeIT6b%2Bdzf8nAUv8F8SRvhqpYQ9ydXlG2eMMewiEH6eqx5y7ba7lnOmUdzM8LQC7uIXU6S6MzQKcHMkP8Q4hy%2FnE7jKdWedqr5oQwv8LtwgY6pgGNZ2P8gXcGaSKeZ9wfJQNJtgpOCGoSO5BiC%2B%2BNvk6wLAzEDd50EqekMMMPU3fRQjjGL6siY8NfK4PFn71H6M%2B7GGt56i82DlCY26xMk6JZ4AJWb5YY%2BSFAGFlybp7dXX2tecDjKvUg7vS2QUZrgk3RpZlt8PrK8SwmKzhr45ri%2FWCRup3LgAF4aBk7FnktQUJQh6U5tHL1T%2Bn4%2F4Ks%2FhnCbbwrjWDR&X-Amz-Signature=888be84c649fd03ebe81f810a3419efdafe801dcd9a7d782a0a0d6da1884f41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
