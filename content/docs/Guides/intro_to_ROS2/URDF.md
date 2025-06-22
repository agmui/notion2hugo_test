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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6PIETM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKBDhr6qfA0M1cMQtYgzFiBXby84aa%2BI2ILHVC4yoLTgIhAK%2B5P7oUZaS4B5K80v8iRMqSXgKPIUI3niuTr1gMSTSQKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3CGMApKFyLTEer0gq3APFvFfIPDu86vacJJaQ42bWrosJ1IO%2Bsa47gF2A979IkeutxoaLGObc%2Fwwhy1Iewn92u%2FZ7scnO7wP9DrV8%2FcS%2BaQiLm%2F0Tld%2FwF1GKCq4ERUzwuix9mzLgOQTNZGP48EnLHB7Y5n0VTvds7s9hWY6CELZ%2FAvJpVMJb1NjO02ErH50sOZbigdkLU%2B7LtW%2FhuRSxgeT34mXpVxKBzGuTJ99RkqjHnVKW%2B1ZtP%2Fa7gD6Nuu%2FVEYk5oEhd8Ls2JL4zujH0nvK1JJmV0DTSwrQmr%2BCVNzbiVPmwqj6R4CEVqzjN%2FMt3DyQPXSnX5hUaPM3hcMWLfhiOf9789kUNDmO%2B3W97KXM%2BMORpoiHQ0bkozf6jvD36oChNx%2BLgGfkGKk3DEV42LMVDCfr5ZcWjmr9CBhCstwmZq5NaUvUABOUGyut6ws43g97881HbmycucUYfqKjVVPtaRpXC8w2xWyhmL2WiuElGfhZWE2jgvpLH35nAQ3%2FYTMUKhqrbR6lE%2BCObAWWv%2BG7adRcAm0N48R%2BAUvEZBBQbFMImLsKiL7SDLweKmxExYvq7ILOvpx8WNXyAiRxMak9NnE1WSMaFOgB7STG5UpSpDTZJ7WaZnMhIeNqP43gk8DiQe1oBM0W9GDDxx%2BHCBjqkAcxiuFuX%2F17qmh4HJUhilnHC%2BgkRH4zhzaw%2Ft5rO2eyg8fgQ9suSR6loa0POXyhr6kT9FL5vku%2BBPPJhUsa3DJ%2FEQpkTN8Ymd3Lj%2F%2Bqsd5u1Q1E0JFHk5zv2NQZwFEH%2FW%2B0v%2F2TKvgVkPFYTMfei%2Fb7gGhfHNMnSnpj28FjkrlNfAQGt8ieFDkbgoFw%2BYnahY5wRWEkImfKLrdzeyCu512CBw2wY&X-Amz-Signature=fc7747cf7779177680a82f0ec2efde8f6ab032f5a50eb545583548e0f0be1f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6PIETM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKBDhr6qfA0M1cMQtYgzFiBXby84aa%2BI2ILHVC4yoLTgIhAK%2B5P7oUZaS4B5K80v8iRMqSXgKPIUI3niuTr1gMSTSQKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3CGMApKFyLTEer0gq3APFvFfIPDu86vacJJaQ42bWrosJ1IO%2Bsa47gF2A979IkeutxoaLGObc%2Fwwhy1Iewn92u%2FZ7scnO7wP9DrV8%2FcS%2BaQiLm%2F0Tld%2FwF1GKCq4ERUzwuix9mzLgOQTNZGP48EnLHB7Y5n0VTvds7s9hWY6CELZ%2FAvJpVMJb1NjO02ErH50sOZbigdkLU%2B7LtW%2FhuRSxgeT34mXpVxKBzGuTJ99RkqjHnVKW%2B1ZtP%2Fa7gD6Nuu%2FVEYk5oEhd8Ls2JL4zujH0nvK1JJmV0DTSwrQmr%2BCVNzbiVPmwqj6R4CEVqzjN%2FMt3DyQPXSnX5hUaPM3hcMWLfhiOf9789kUNDmO%2B3W97KXM%2BMORpoiHQ0bkozf6jvD36oChNx%2BLgGfkGKk3DEV42LMVDCfr5ZcWjmr9CBhCstwmZq5NaUvUABOUGyut6ws43g97881HbmycucUYfqKjVVPtaRpXC8w2xWyhmL2WiuElGfhZWE2jgvpLH35nAQ3%2FYTMUKhqrbR6lE%2BCObAWWv%2BG7adRcAm0N48R%2BAUvEZBBQbFMImLsKiL7SDLweKmxExYvq7ILOvpx8WNXyAiRxMak9NnE1WSMaFOgB7STG5UpSpDTZJ7WaZnMhIeNqP43gk8DiQe1oBM0W9GDDxx%2BHCBjqkAcxiuFuX%2F17qmh4HJUhilnHC%2BgkRH4zhzaw%2Ft5rO2eyg8fgQ9suSR6loa0POXyhr6kT9FL5vku%2BBPPJhUsa3DJ%2FEQpkTN8Ymd3Lj%2F%2Bqsd5u1Q1E0JFHk5zv2NQZwFEH%2FW%2B0v%2F2TKvgVkPFYTMfei%2Fb7gGhfHNMnSnpj28FjkrlNfAQGt8ieFDkbgoFw%2BYnahY5wRWEkImfKLrdzeyCu512CBw2wY&X-Amz-Signature=6736fa441c6a114787ffa3fb326a35f2d5c54b163d64b7980f68ed3c133879eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
