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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2J6ERV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFSLTffaPH4L8N7HfAzp%2B9G3obJbffIyJXjxGdyi4hsXAiAPGCg1Weagl9EnGwFLF4oTZ6N0Y%2FajJkdTtivNq%2FJOGir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYloqNRrLneADtxDWKtwDI%2Bkzrqdk546b5dTY5mlyqLupJZylTDYTpfElJ5%2FKuJz2ngEuobxaBHTJlyGi%2BlQZ4R1h%2BQspj577H%2Fe9EE1bPG8BfJbfpfJI%2F46SzFEZJsfyJvRzbkJ1cRbcTJfTp5%2F0%2FV0DJ8aXTL722gYrFQMJXHn76CpLA%2BDvEBO%2BDDCvL3bbBOe6Oi6He95%2FLr89E62vkhLPR2EZ1b1Vm47W%2Bbdk9FMOZgsUDNa58FHYiU1jqsRddHFKAAq7YrIjJf1OTX8gaaVeeb%2B7GGr4qqaI9J2yXwWDB4mmU6WAK5fQq8fTvD%2FTlTaoEQo%2BURSZOQNHfZ%2B2Q8S8rfU%2BjudLfZnL3efwj4dAmXvP6D1FH5msdYVgg6QQwI4xtyjvVErwEDadIky4KcpJQ%2BN%2F64%2BowEAkyx%2FyQfNhpcvWFIJlKTDmnDEneDDq7MyPsate6K%2FZsjm52VWfCWS94osRdTXViyAYJGTS9PJgwevTxbuuAB3jix2L%2FQxnW1UCa04O%2BtqV9iGQs26%2ByNSNqTVh5FbFBJl8Kxi3vUP%2BU9VNtg9K8xj38fFMaT4c8tBcMahRW7ZU5VpXsNpbPcwIGROkFD%2BsmlxTwtqfqgyb7yWowHRY7%2BD%2FnYD1DGYTk8rpPVtKhbeTbDgwoYL5vQY6pgFi0%2By%2B8lfMyuOz%2FOoYpEyPTuM5eUqegjioLsEK871s%2Bo0WsszNMyiTsZGm9vGcB6dWeOiKy3e5X%2FekgASIonWzXR8DYP98ZmdBvAd1KPS9DnIIbjh8FTLtVgkylvXTPP3qPiTLS%2BXe%2FMKOrhsJS8cx74%2FMLRUt048PBTY9x9cdTG0VeXjSQ2bp0EBk644yF7uOEstrsPlZa3ydgX5gVeZbN7dbh4Xg&X-Amz-Signature=e5f08fe7d02ab75bbdd6a753f8a6a0fbf139aeb0ab550f60b8be6bde78e01d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2J6ERV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFSLTffaPH4L8N7HfAzp%2B9G3obJbffIyJXjxGdyi4hsXAiAPGCg1Weagl9EnGwFLF4oTZ6N0Y%2FajJkdTtivNq%2FJOGir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMYloqNRrLneADtxDWKtwDI%2Bkzrqdk546b5dTY5mlyqLupJZylTDYTpfElJ5%2FKuJz2ngEuobxaBHTJlyGi%2BlQZ4R1h%2BQspj577H%2Fe9EE1bPG8BfJbfpfJI%2F46SzFEZJsfyJvRzbkJ1cRbcTJfTp5%2F0%2FV0DJ8aXTL722gYrFQMJXHn76CpLA%2BDvEBO%2BDDCvL3bbBOe6Oi6He95%2FLr89E62vkhLPR2EZ1b1Vm47W%2Bbdk9FMOZgsUDNa58FHYiU1jqsRddHFKAAq7YrIjJf1OTX8gaaVeeb%2B7GGr4qqaI9J2yXwWDB4mmU6WAK5fQq8fTvD%2FTlTaoEQo%2BURSZOQNHfZ%2B2Q8S8rfU%2BjudLfZnL3efwj4dAmXvP6D1FH5msdYVgg6QQwI4xtyjvVErwEDadIky4KcpJQ%2BN%2F64%2BowEAkyx%2FyQfNhpcvWFIJlKTDmnDEneDDq7MyPsate6K%2FZsjm52VWfCWS94osRdTXViyAYJGTS9PJgwevTxbuuAB3jix2L%2FQxnW1UCa04O%2BtqV9iGQs26%2ByNSNqTVh5FbFBJl8Kxi3vUP%2BU9VNtg9K8xj38fFMaT4c8tBcMahRW7ZU5VpXsNpbPcwIGROkFD%2BsmlxTwtqfqgyb7yWowHRY7%2BD%2FnYD1DGYTk8rpPVtKhbeTbDgwoYL5vQY6pgFi0%2By%2B8lfMyuOz%2FOoYpEyPTuM5eUqegjioLsEK871s%2Bo0WsszNMyiTsZGm9vGcB6dWeOiKy3e5X%2FekgASIonWzXR8DYP98ZmdBvAd1KPS9DnIIbjh8FTLtVgkylvXTPP3qPiTLS%2BXe%2FMKOrhsJS8cx74%2FMLRUt048PBTY9x9cdTG0VeXjSQ2bp0EBk644yF7uOEstrsPlZa3ydgX5gVeZbN7dbh4Xg&X-Amz-Signature=aeecd9f0e38c04f235642fa277a213858c96d2c14b0adffbb3f3c4838e292a92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
