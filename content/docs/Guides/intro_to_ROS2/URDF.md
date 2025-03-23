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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBYM4CU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBumBZOLmyqeTKLvtj3pxqWFcymGYBuN9vpWqZJWJPbMAiEAxiWEPCN81Fa0IsF0%2FeYbCwxwwSrUm8VLRLhrJQNN9JcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEeqGdfsGVotUAv3ircAycpt32IhdQ1bTc%2B6UNUi0bA05E3NZT043hJakSpzqBAt540SqTh7ouBGvY3L1ojhRdUPqYu1%2B1157NV9NfAUIlEhWCuXVzj8DQYvB3niqbeyVoSb44CunFf2py0nTaYB4XGebbePQtNyTtvbxNy4MLrj7zzsOoKKGDl1f45hRjtTc9QQnTHgNtUniyUOOORC1YiZohDXj2W1fRoddzeA1G8MW8HS%2BhkVPHdOOOYexqTBluPpH90%2BgcwEX6aQvTSZr02SFJC7GrelUFAgpViM9DRNgc6%2FWZaXu1k2UefWoQiC%2F7XzTeXukTJ45OerII9rgkdpBypgdiUhYVCEN3g74j8p4WsqAipaUh%2BnksL92%2FsTSBx5RLSHA7MKJ6aPgoJCPK2N95t2DJTSzfF22QPB9CUCYuhRWyD8PZ1AXNsEqLfhFmVtaNHd%2Bz8c2Jj3jSdAQEWOGpl6JdDaeQHfFlkp8xGgmZ4Qav735DoYss9iWdvlRnUjmh2duO6tk5d7aqB3DC7A01FpS5%2BzOwmGrei1i5kfOHbCbZHh%2BHA2mSQFF026KzWo1C5ZEh3mXYkuczyMrmEXGQ6o8q2PwY9wCgGamJTLUzCyuvRwaYJcof1sXtw5uQE0oGkwi5QUehhMKby%2Fr4GOqUBfxPkwmsrkwlOwB9EVvg6tLPgMKfTn6k6%2BG%2Br2duR6Eqlu5mzzk38E2dBxoaiHJAtoLD%2FiA2lC4c2VZ02aXpixX04xeBh0nylVVcpy3BPBGSSjcu4dU2VrcDm%2Bw9IJPMHr3WSZYcvgBBlZEsRq5gqa8WTMZp6pzmXBeWR%2BDXGQlHxGuBAud0I412weh4NqcCyIbEI%2BBrJb9%2F2dt3i1DLATt0PvkC7&X-Amz-Signature=6b677a4cb62ca48ed17a11f0ffd9cea4e0885331f50b2e9999d44b11862802b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBYM4CU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBumBZOLmyqeTKLvtj3pxqWFcymGYBuN9vpWqZJWJPbMAiEAxiWEPCN81Fa0IsF0%2FeYbCwxwwSrUm8VLRLhrJQNN9JcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEeqGdfsGVotUAv3ircAycpt32IhdQ1bTc%2B6UNUi0bA05E3NZT043hJakSpzqBAt540SqTh7ouBGvY3L1ojhRdUPqYu1%2B1157NV9NfAUIlEhWCuXVzj8DQYvB3niqbeyVoSb44CunFf2py0nTaYB4XGebbePQtNyTtvbxNy4MLrj7zzsOoKKGDl1f45hRjtTc9QQnTHgNtUniyUOOORC1YiZohDXj2W1fRoddzeA1G8MW8HS%2BhkVPHdOOOYexqTBluPpH90%2BgcwEX6aQvTSZr02SFJC7GrelUFAgpViM9DRNgc6%2FWZaXu1k2UefWoQiC%2F7XzTeXukTJ45OerII9rgkdpBypgdiUhYVCEN3g74j8p4WsqAipaUh%2BnksL92%2FsTSBx5RLSHA7MKJ6aPgoJCPK2N95t2DJTSzfF22QPB9CUCYuhRWyD8PZ1AXNsEqLfhFmVtaNHd%2Bz8c2Jj3jSdAQEWOGpl6JdDaeQHfFlkp8xGgmZ4Qav735DoYss9iWdvlRnUjmh2duO6tk5d7aqB3DC7A01FpS5%2BzOwmGrei1i5kfOHbCbZHh%2BHA2mSQFF026KzWo1C5ZEh3mXYkuczyMrmEXGQ6o8q2PwY9wCgGamJTLUzCyuvRwaYJcof1sXtw5uQE0oGkwi5QUehhMKby%2Fr4GOqUBfxPkwmsrkwlOwB9EVvg6tLPgMKfTn6k6%2BG%2Br2duR6Eqlu5mzzk38E2dBxoaiHJAtoLD%2FiA2lC4c2VZ02aXpixX04xeBh0nylVVcpy3BPBGSSjcu4dU2VrcDm%2Bw9IJPMHr3WSZYcvgBBlZEsRq5gqa8WTMZp6pzmXBeWR%2BDXGQlHxGuBAud0I412weh4NqcCyIbEI%2BBrJb9%2F2dt3i1DLATt0PvkC7&X-Amz-Signature=e542012efd58e9d4082f9d7683248f22de3979ac7286c1fa237968b2cd72aba1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
