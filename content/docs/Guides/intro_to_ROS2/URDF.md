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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAZICKA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFKl33x073uiEbPGiGL6Cp9lAQo%2BBW%2BwRkCRCuT1CZPAIhALGnWHPQYLXahM89pPB3HgOFSZVVExNQmD4LhPBMzsuuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnMVq81BVvXq%2BnXeMq3APU33hH977KXT%2BPU5tZKC5z649whf5x3JGlYBLfFBWsPdpSDQw9%2BjIooebVitzSc49avnMKRV1lIrKNWIltE6umOkf4OosVA9ciz2MXM8L9WmwjNLZG%2B81BmjuoDkckzqVmM1dywgiZ%2BoIHFk3k0eCfUZp3Cas45Nn4sjOyePU1AfQsFLXPy%2FxxROrLxTxye4rR9ZbN53k4BDnNjdoCkU%2FXqifpsRP%2Blx6x2vTHe%2BsNPM07zBXjJFd80bMXTQNKEfqS0DAFJy02lb4179mj0RFjp8Hb7AiDLDkuEp8n3KjLdFKOOaw5D1s44o6glzMpDiQOwuHyNB%2BY4S69FqjFVV6XYUtVF7Fmu96mUveb54Bv27qqk76ip4ix3Lsve11%2FImLDWoIu0%2FOa3PyAKlAm7J29TsMoKlax6n69h57Dtmb9tBoNXW9n1IRuUrel3BLQvZ4uIdN%2FPfAsv0mWsX0dW%2BH6YxNB8WrCMyqTbZPy6l8hCmzL03W2ji4aWOE1n4YsJK6%2B7%2FCcPRDKlwCiChfIOpgF%2FzzpQOZx6fjXtXVIKDHoZ6Mb3dP%2BqCwAusXLQcIMC5yExUGk8gctQBqyFVo0Oq41MPFFnp4WMtpveUFdJSs%2B7mZmjT785bVw6lDY0jCp68fABjqkAd3Lja2%2FKXKK3yUTQG0ux19wl91WiZJuvthkBsMXLn9NcddG4Jw%2FijZu7kHxATkQx1VcZXGcMp2AMaP5olRpj0l5GZ8gJUqdWQ5vZfmghWFJtXsakSBKz7XuZ1hsBOg7mhgn6dTDVHX12hDvft32Tdci4SdsNe7eoXc4N%2FM9A20EEKTAkMfG%2FFMFyKPjJeI7Z2gGZ33AwSL27IA0pIXKNVLqgkIV&X-Amz-Signature=f076106a8b0f8a2b029a261bebbec5f4c6de434ff20afa3f83ae5032cb2eda29&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAZICKA%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFKl33x073uiEbPGiGL6Cp9lAQo%2BBW%2BwRkCRCuT1CZPAIhALGnWHPQYLXahM89pPB3HgOFSZVVExNQmD4LhPBMzsuuKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnMVq81BVvXq%2BnXeMq3APU33hH977KXT%2BPU5tZKC5z649whf5x3JGlYBLfFBWsPdpSDQw9%2BjIooebVitzSc49avnMKRV1lIrKNWIltE6umOkf4OosVA9ciz2MXM8L9WmwjNLZG%2B81BmjuoDkckzqVmM1dywgiZ%2BoIHFk3k0eCfUZp3Cas45Nn4sjOyePU1AfQsFLXPy%2FxxROrLxTxye4rR9ZbN53k4BDnNjdoCkU%2FXqifpsRP%2Blx6x2vTHe%2BsNPM07zBXjJFd80bMXTQNKEfqS0DAFJy02lb4179mj0RFjp8Hb7AiDLDkuEp8n3KjLdFKOOaw5D1s44o6glzMpDiQOwuHyNB%2BY4S69FqjFVV6XYUtVF7Fmu96mUveb54Bv27qqk76ip4ix3Lsve11%2FImLDWoIu0%2FOa3PyAKlAm7J29TsMoKlax6n69h57Dtmb9tBoNXW9n1IRuUrel3BLQvZ4uIdN%2FPfAsv0mWsX0dW%2BH6YxNB8WrCMyqTbZPy6l8hCmzL03W2ji4aWOE1n4YsJK6%2B7%2FCcPRDKlwCiChfIOpgF%2FzzpQOZx6fjXtXVIKDHoZ6Mb3dP%2BqCwAusXLQcIMC5yExUGk8gctQBqyFVo0Oq41MPFFnp4WMtpveUFdJSs%2B7mZmjT785bVw6lDY0jCp68fABjqkAd3Lja2%2FKXKK3yUTQG0ux19wl91WiZJuvthkBsMXLn9NcddG4Jw%2FijZu7kHxATkQx1VcZXGcMp2AMaP5olRpj0l5GZ8gJUqdWQ5vZfmghWFJtXsakSBKz7XuZ1hsBOg7mhgn6dTDVHX12hDvft32Tdci4SdsNe7eoXc4N%2FM9A20EEKTAkMfG%2FFMFyKPjJeI7Z2gGZ33AwSL27IA0pIXKNVLqgkIV&X-Amz-Signature=5fa623542586dfc3b00896d2f081f9ff732415ba1eb5ec5ddf47bd54e4361c43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
