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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGY3RQ4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3oWFZw1AnKo8wHsmdXm%2FuhXfS%2FinO4LDUcMYB2X5TrAiEAtqFAS29UPLx2EpksCNvxa%2FvCZEFow0yyzSrX0%2FcxLCwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAQws7%2BS7jA%2BhozV1ircA%2FUkPlMVYiSEK6nVtBP2jJDy5jdfjSUEL%2Ff7JH7mQuq52wmi8wCLQceLC7CN6tKoTl2fkJg7VWI816jcE5CgOlxRa44iNXvq4lERPi9wbluQ3UfqvVSW4BG%2BQWl6avj0yosUmNV7jWmM4anCAzxbhSKCJ4e7QwQVD6n1tRMAvhovjiQy%2FpbqlWQsL6W92yNfoR4L498izh5Jb5iwN9SZ1yzttEkwdtBIsp3k86%2F2J0K4RvvgAbawoOi0wjb3QfaP6u2EijvEcX63iHXAzNEGpLPIIgpqdo10bUCPYhIVtuZBRLbzjUPkR5WPz9abK8%2FcBxdEDpKjvmfPHw0%2F0WCGvcIWz3kbhO2uugB99CoP8tZBtHsA1TqZ6MTAS1wxegTuoeRe3rw7yBbRJT6X%2BsGntDEvg5fc7kyluxUE6qj81ykcgjBYHNEE8s4RDun4T6%2Fv5cU3TG6qkdV2q0Eegn%2BNzbSmQEYtngrnA3oMSmsExabTfReuw6mzU1nzSNc60hQPkbZfiBzpgs5233kTK3K44ooGbWwPv03isbFg8p8Bb2dok4Ku5CexAf%2FAuUIWSyuOdHlWEigtM8s%2BRX4jMNUzR2pwo3waWNX%2Bd2xVgkYIE2vkaw4YIqIgp%2FdvVsEUMNzMk78GOqUBcbRfQYUTGU%2F1TYfClZwRTXwau64kWRhtPDP%2BVzfb5pUeNIzeXdAAXfOIKnSWbKnc91XjPWPQpw7Q%2BGxw3ehF5MlAJA%2BD6pxYgKgmimF93UnDXhN%2FB3DYC0130TrJr3hwNiXzhFZmp8ZDDU7CR%2BWuPP8Dv0rQNB1H2Zz1vpnkRVV8wUlwW8fzfdvAfdOM6aeE0Nbl%2BEKGarF%2BxXqjSFPkq2zGHmje&X-Amz-Signature=e7b09ef42ef78c07cebee442c2e1326f1cb7f2f812410029ed68a36908073671&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGY3RQ4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3oWFZw1AnKo8wHsmdXm%2FuhXfS%2FinO4LDUcMYB2X5TrAiEAtqFAS29UPLx2EpksCNvxa%2FvCZEFow0yyzSrX0%2FcxLCwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAQws7%2BS7jA%2BhozV1ircA%2FUkPlMVYiSEK6nVtBP2jJDy5jdfjSUEL%2Ff7JH7mQuq52wmi8wCLQceLC7CN6tKoTl2fkJg7VWI816jcE5CgOlxRa44iNXvq4lERPi9wbluQ3UfqvVSW4BG%2BQWl6avj0yosUmNV7jWmM4anCAzxbhSKCJ4e7QwQVD6n1tRMAvhovjiQy%2FpbqlWQsL6W92yNfoR4L498izh5Jb5iwN9SZ1yzttEkwdtBIsp3k86%2F2J0K4RvvgAbawoOi0wjb3QfaP6u2EijvEcX63iHXAzNEGpLPIIgpqdo10bUCPYhIVtuZBRLbzjUPkR5WPz9abK8%2FcBxdEDpKjvmfPHw0%2F0WCGvcIWz3kbhO2uugB99CoP8tZBtHsA1TqZ6MTAS1wxegTuoeRe3rw7yBbRJT6X%2BsGntDEvg5fc7kyluxUE6qj81ykcgjBYHNEE8s4RDun4T6%2Fv5cU3TG6qkdV2q0Eegn%2BNzbSmQEYtngrnA3oMSmsExabTfReuw6mzU1nzSNc60hQPkbZfiBzpgs5233kTK3K44ooGbWwPv03isbFg8p8Bb2dok4Ku5CexAf%2FAuUIWSyuOdHlWEigtM8s%2BRX4jMNUzR2pwo3waWNX%2Bd2xVgkYIE2vkaw4YIqIgp%2FdvVsEUMNzMk78GOqUBcbRfQYUTGU%2F1TYfClZwRTXwau64kWRhtPDP%2BVzfb5pUeNIzeXdAAXfOIKnSWbKnc91XjPWPQpw7Q%2BGxw3ehF5MlAJA%2BD6pxYgKgmimF93UnDXhN%2FB3DYC0130TrJr3hwNiXzhFZmp8ZDDU7CR%2BWuPP8Dv0rQNB1H2Zz1vpnkRVV8wUlwW8fzfdvAfdOM6aeE0Nbl%2BEKGarF%2BxXqjSFPkq2zGHmje&X-Amz-Signature=47b4eb3cc8974cf7cbb58837c16689ce49717076221c6271d43a47eae24b8fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
