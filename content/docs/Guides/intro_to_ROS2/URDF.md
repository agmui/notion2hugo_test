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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKZIJJN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC%2FyvxHiO%2FdKRIRDs8PIqsODcPSTHO7ZmGaoOspmPomVgIgNiMJlXpwqi7TVR2ffhinAGMffYpCc6K0m8Mmp4%2BS7Awq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNPaGJc3DeXDH6NrDCrcA93RAYMAmN4X%2Fbrm7Q1MNit3A5cIufrcVqwd7BjaD2JiRqsN3mI5ykItIjRriX6kZWNOcz8iCh7xEAgvOIkKffYzmYJWFXUxOruLF5oRuyV%2BmkSd4hjeWTEIW1oJTrchzIYoUWhIFtr%2BQM%2FASx31Gxgkb9Wh0v6DUbhu0UMSVPX4O2FvQX3Y3vaSGxxMzmUzV9pkAqZIJrQwJ1S%2Bp%2BSZUGGPyvyQP2eczd4%2FmHcwA660zfCAbv%2BBDTl7qZKaqTO0CpJTMauh1w7AG%2FPwyUN7VSrqkwSNBv09%2BbPiWODnt8e3rBKWwzr7BySSbXRi83FiUCflHzZWfkj%2Bz%2BNwR7eYhNF0onEU4OzL0l6TIyPVH8BPqpg4Xd2%2FM92XqsXTkXEV%2BkR29RXGvGBEapLIQYILRfqXqSFlozFd4QUwNOwUqFtjy7jOf3qB98cuNqvVFI1u%2F39u4d4gpiMdLK7MnbNy%2Fxr%2BemO%2FXvMdH64pvIrikOeR7RwVSgKdOTMjy8IaXuNkZXO5pOFildQGzGyydLTLC8jwrg6V9yWgQoPd51dWowZIb5iINVcSrBv%2B0WeSUJ9DcTGanWjdXrUfxwGoQMMy6LUNw2be1HCd%2BPsrgz2t6CquhJMHysLtCzbjlidtMIzMh70GOqUBlxg%2BM6cFLiXtHEJCzg63ZL63uHb0fvGXfEzelwRUBf74LnFczu2%2FpC7pjfGhNxmMgFm6WZ1PAZFZF0EUo%2F8YwsJN0L9HNBpuOliz%2BjVWttlW9fmNsIR8FPauNgsAAvkRvvgHL4Vfg1%2B%2FHh5bIfDNHudAizQGilRliCdbBaAx9RFpUjZ%2BEWIAciHXSqs3MJER%2BNut1fVoVCcrm75dB2QSwXFTy0e4&X-Amz-Signature=937c5e90a9f3e470dae5bcb055e9782a0fa0a7a45509478af6d71401576a55eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKZIJJN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC%2FyvxHiO%2FdKRIRDs8PIqsODcPSTHO7ZmGaoOspmPomVgIgNiMJlXpwqi7TVR2ffhinAGMffYpCc6K0m8Mmp4%2BS7Awq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNPaGJc3DeXDH6NrDCrcA93RAYMAmN4X%2Fbrm7Q1MNit3A5cIufrcVqwd7BjaD2JiRqsN3mI5ykItIjRriX6kZWNOcz8iCh7xEAgvOIkKffYzmYJWFXUxOruLF5oRuyV%2BmkSd4hjeWTEIW1oJTrchzIYoUWhIFtr%2BQM%2FASx31Gxgkb9Wh0v6DUbhu0UMSVPX4O2FvQX3Y3vaSGxxMzmUzV9pkAqZIJrQwJ1S%2Bp%2BSZUGGPyvyQP2eczd4%2FmHcwA660zfCAbv%2BBDTl7qZKaqTO0CpJTMauh1w7AG%2FPwyUN7VSrqkwSNBv09%2BbPiWODnt8e3rBKWwzr7BySSbXRi83FiUCflHzZWfkj%2Bz%2BNwR7eYhNF0onEU4OzL0l6TIyPVH8BPqpg4Xd2%2FM92XqsXTkXEV%2BkR29RXGvGBEapLIQYILRfqXqSFlozFd4QUwNOwUqFtjy7jOf3qB98cuNqvVFI1u%2F39u4d4gpiMdLK7MnbNy%2Fxr%2BemO%2FXvMdH64pvIrikOeR7RwVSgKdOTMjy8IaXuNkZXO5pOFildQGzGyydLTLC8jwrg6V9yWgQoPd51dWowZIb5iINVcSrBv%2B0WeSUJ9DcTGanWjdXrUfxwGoQMMy6LUNw2be1HCd%2BPsrgz2t6CquhJMHysLtCzbjlidtMIzMh70GOqUBlxg%2BM6cFLiXtHEJCzg63ZL63uHb0fvGXfEzelwRUBf74LnFczu2%2FpC7pjfGhNxmMgFm6WZ1PAZFZF0EUo%2F8YwsJN0L9HNBpuOliz%2BjVWttlW9fmNsIR8FPauNgsAAvkRvvgHL4Vfg1%2B%2FHh5bIfDNHudAizQGilRliCdbBaAx9RFpUjZ%2BEWIAciHXSqs3MJER%2BNut1fVoVCcrm75dB2QSwXFTy0e4&X-Amz-Signature=7b9c0ae476f9c2647612094e4690de0cce35ac75f13d2340b1ed657a06eba263&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
