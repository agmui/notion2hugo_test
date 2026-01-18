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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465KQUFQ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk8ok9rnSn%2BSm%2BYnsz6Y8r3LVndeTczpu%2B1LF4dISTJAiBqWiFpzA1MmE9kWcuAQSXdRlQMTTcuH847kU58gjWsOir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWYBPuVSYltwKfHhkKtwDGvuwliwVbR5Hk8ubYNo1LL7%2FgntARK3n2v7UiiDMzzd1voc%2BptrQfQ4TDhlscEEmZPtQnua0UJEXtvSoJNK2xl961xiVZGJZpKPlNbrCED7lU6zfhPcZUQLF%2BKH1X4tbTVfNufdTZ%2B%2FMjOWjVGIrz9wodrWN0vo7MqB502%2FHkP5aQOSwmBjK%2FZTK2WQxCZjfaGoyaSZ2G8dJaQ10EoRgWMg%2BboDFnDTupKgVUR5cNzhO63XXNuM4XmeMeA4%2BOXAtelPwm7bbY19MgQo1byx1EZ1Gn9dQny9Kz%2BlzalgN93woskJl7E6cELZebtfCvovicwIIixuSwlx5SGey2JWuPETAUUYHwgEUwqn%2Bl8rY4zR5dyEw0SD%2FTuPH9zC%2FLX%2Fq8BcygRBDwVnSGmJjS148jOeMyIka1FbCz4wBtP4Zv5hJNLoVqlCD0pfZm06J%2B4F4Xh8dv9MifOSfHgxSSeZ4bTRL5nUTEZoRlJ6C0Ijc4F5o2J%2BEEozOf33dOzkATZr4Urd2OGGB%2FTHvPnzvUAL1zSKF45S2%2FqApWYpBMp%2FHqX5AaCx8TbeFn42nO7A%2FVD%2F51l0EEBB8PEnJizVLxz%2FB%2BNp%2FBC%2FXOaqfO9P4rw6Z%2B4STqvYpKU4pm8KXUscw%2B5ywywY6pgEmK6RHr%2BG4QphtixguPtcqsrReM2Cj9bjvf661Qm8qEoOw20H%2FnaJH%2Bxg%2Bc7A%2BLLYNRShArqnos642DdIZjki1hg4n9lvUFgYT4szxH9fJ%2BIR27y6aEiFi%2BHR52TtfCeGJH2qhChcW8bqhomFW8eB5uudom0aRzrb5DZoSFiLtRB8tZPuZ1Wjh3D3ng9HMZA7hXljQpf664NHPc23Jx3nzgcgqjXYu&X-Amz-Signature=417b93bed224c3139d6ec43dc5430e04950ea766085aba554179eca94a359c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465KQUFQ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHk8ok9rnSn%2BSm%2BYnsz6Y8r3LVndeTczpu%2B1LF4dISTJAiBqWiFpzA1MmE9kWcuAQSXdRlQMTTcuH847kU58gjWsOir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWYBPuVSYltwKfHhkKtwDGvuwliwVbR5Hk8ubYNo1LL7%2FgntARK3n2v7UiiDMzzd1voc%2BptrQfQ4TDhlscEEmZPtQnua0UJEXtvSoJNK2xl961xiVZGJZpKPlNbrCED7lU6zfhPcZUQLF%2BKH1X4tbTVfNufdTZ%2B%2FMjOWjVGIrz9wodrWN0vo7MqB502%2FHkP5aQOSwmBjK%2FZTK2WQxCZjfaGoyaSZ2G8dJaQ10EoRgWMg%2BboDFnDTupKgVUR5cNzhO63XXNuM4XmeMeA4%2BOXAtelPwm7bbY19MgQo1byx1EZ1Gn9dQny9Kz%2BlzalgN93woskJl7E6cELZebtfCvovicwIIixuSwlx5SGey2JWuPETAUUYHwgEUwqn%2Bl8rY4zR5dyEw0SD%2FTuPH9zC%2FLX%2Fq8BcygRBDwVnSGmJjS148jOeMyIka1FbCz4wBtP4Zv5hJNLoVqlCD0pfZm06J%2B4F4Xh8dv9MifOSfHgxSSeZ4bTRL5nUTEZoRlJ6C0Ijc4F5o2J%2BEEozOf33dOzkATZr4Urd2OGGB%2FTHvPnzvUAL1zSKF45S2%2FqApWYpBMp%2FHqX5AaCx8TbeFn42nO7A%2FVD%2F51l0EEBB8PEnJizVLxz%2FB%2BNp%2FBC%2FXOaqfO9P4rw6Z%2B4STqvYpKU4pm8KXUscw%2B5ywywY6pgEmK6RHr%2BG4QphtixguPtcqsrReM2Cj9bjvf661Qm8qEoOw20H%2FnaJH%2Bxg%2Bc7A%2BLLYNRShArqnos642DdIZjki1hg4n9lvUFgYT4szxH9fJ%2BIR27y6aEiFi%2BHR52TtfCeGJH2qhChcW8bqhomFW8eB5uudom0aRzrb5DZoSFiLtRB8tZPuZ1Wjh3D3ng9HMZA7hXljQpf664NHPc23Jx3nzgcgqjXYu&X-Amz-Signature=f508540e941454ad075ec8d1157c98d52eb6ea008d7344d4ea9ce6755d368ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
