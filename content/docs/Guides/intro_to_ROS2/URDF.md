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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHFAU2P%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJwfnEsi5O%2Bh94BK8dEUbc8Icjcm8IBeeuss3D0rj51AIhAMp35%2BxZLjll05OKaIXbsDNBY0knbVwniSzyTH3TO78%2BKv8DCCUQABoMNjM3NDIzMTgzODA1Igw2I6cBCWFpSlR7QNYq3AOCPqlTVnoyWduvhv7lwT%2FBdXSDwVy1nGmpjzORu7rXn2zz5lOKiLeIWNdbnQj%2B2654AoTamqLso1MF1HisDACqALGIHb2oNsediUfU2nmRozIrD4uCEvziDlXCTrVEpKt3FqNSunRUmkh6ve1vAUJCaUcsu5Rvdgmo5jYfpdE33msBvtKJOpqKSkpWF%2BRyzBSZh9JJdTToF%2BFRzVYFfub15f02rdrowZfwOBzayidlfVFt2A%2FIudZotG1Pe2B1TBUebTLMrSoRWj0K5a3ML3k9QLmOJvfyxIVwg85ESD%2Butr%2B7rFywwdjGM8fb2iBM%2BegaApxThs90u7aahYNeGQVpgOqNG4mmOQmX80XB%2ByueXT4EhYVmuHgwV%2FoOjpa%2B2%2Fnd9Y7CHIJRhiI1eySxQscRPgmm4IZNYA9hOejvPCCq5c8fFr17AxlRL74QZ4i39xyvWsBtFY8HsgMCnKIWvOK2hB8o5H4wF5%2BBypFKn%2FD24hfHyZMr%2F4OiP8UFI0b%2BeFb2FTsbZZbAsLG3fcjdOWe6CCiCeGkTgb6KHETQ5FeYAy76mJqJz5XOjVuwF5xJOux67miGcnrGcIOSF0Xc4Uxo8WDDJo62fMOJWRr0ttSUyPwH6N4Axx2HX2kl%2FDCD6uDABjqkAUruAmWBuQ5eAESOpW5WeX4VTeH4ibBzWHeFTUQtlpqKQSJi53foD7jrplzeLU%2FyHJRYAKyjDgwe93Q4yQyhoi9aI20%2Bhf2JA1Wrh4RT5%2B5DXrLEghAxoMvfEDg9nWqRaAZZ0HyUFLZpo2fQW6JGX45sZbK1ZM20j43kzh2bSqRJrFuDCbszBgfhJkKE2vBQS4wcRTSMaHvAOMpYA%2FnLl8cnZUBc&X-Amz-Signature=fa7776fd3e4e4d0f24937b87a6357be349c4f35f27013b1bc0cf7682dfda221c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHFAU2P%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCJwfnEsi5O%2Bh94BK8dEUbc8Icjcm8IBeeuss3D0rj51AIhAMp35%2BxZLjll05OKaIXbsDNBY0knbVwniSzyTH3TO78%2BKv8DCCUQABoMNjM3NDIzMTgzODA1Igw2I6cBCWFpSlR7QNYq3AOCPqlTVnoyWduvhv7lwT%2FBdXSDwVy1nGmpjzORu7rXn2zz5lOKiLeIWNdbnQj%2B2654AoTamqLso1MF1HisDACqALGIHb2oNsediUfU2nmRozIrD4uCEvziDlXCTrVEpKt3FqNSunRUmkh6ve1vAUJCaUcsu5Rvdgmo5jYfpdE33msBvtKJOpqKSkpWF%2BRyzBSZh9JJdTToF%2BFRzVYFfub15f02rdrowZfwOBzayidlfVFt2A%2FIudZotG1Pe2B1TBUebTLMrSoRWj0K5a3ML3k9QLmOJvfyxIVwg85ESD%2Butr%2B7rFywwdjGM8fb2iBM%2BegaApxThs90u7aahYNeGQVpgOqNG4mmOQmX80XB%2ByueXT4EhYVmuHgwV%2FoOjpa%2B2%2Fnd9Y7CHIJRhiI1eySxQscRPgmm4IZNYA9hOejvPCCq5c8fFr17AxlRL74QZ4i39xyvWsBtFY8HsgMCnKIWvOK2hB8o5H4wF5%2BBypFKn%2FD24hfHyZMr%2F4OiP8UFI0b%2BeFb2FTsbZZbAsLG3fcjdOWe6CCiCeGkTgb6KHETQ5FeYAy76mJqJz5XOjVuwF5xJOux67miGcnrGcIOSF0Xc4Uxo8WDDJo62fMOJWRr0ttSUyPwH6N4Axx2HX2kl%2FDCD6uDABjqkAUruAmWBuQ5eAESOpW5WeX4VTeH4ibBzWHeFTUQtlpqKQSJi53foD7jrplzeLU%2FyHJRYAKyjDgwe93Q4yQyhoi9aI20%2Bhf2JA1Wrh4RT5%2B5DXrLEghAxoMvfEDg9nWqRaAZZ0HyUFLZpo2fQW6JGX45sZbK1ZM20j43kzh2bSqRJrFuDCbszBgfhJkKE2vBQS4wcRTSMaHvAOMpYA%2FnLl8cnZUBc&X-Amz-Signature=7ff40e6cceece52cd54089b8569b0b80db416395e201e03a946c97cee1894ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
