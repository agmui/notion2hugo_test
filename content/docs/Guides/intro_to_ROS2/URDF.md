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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GKXH7A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAFvBa1zl02aGNIOPUX2OkQkLALGkv0jH70UJ7JRqhEcAiBD8k%2Bu4maMVX%2FGCfUluzth5hQqdTVIXCVxmCIBwR0S4ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkHu7YZdtuWnJfALMKtwDuhJ78FVih7Sqj7HgiIcURQqEPKz55aOf22GdKu%2Bsv3srb54LvLAYRMXa6sBgb9Df9H%2B3vsu5HdvzmU4CsuLOoAyyOsnTZ7RkQBbsRwaZEvhl6dXMgeJH1qY00uw5OBrRLmnig1G%2B9TbCrac8Ec2y3%2Foti6dYlGlMqDnOwDip5DexSZo70V7aDRKTMHljS5Rk9DhxFmeO9gZvHZCXqmbvYyMkH08gfTnSNPSigEfLxPUuuVqG9N7aHG7yOEFQ9pYUoO6nPo1PazPfL9cNPVGQMez1maWiJLKbD4ZGAd1OHvrwRo8lLSliIOUadLIxglj%2FdJ5y5GMNA%2BpF9LjE7cS%2BXXCEdgvVGpbjo64LQl5%2BAY9ok9Y8jtggDb31C9Xpny9GOXLTd%2FORGKsyQtptEd2RNQJCpmRNacNBj%2B5HOhxhRQwubvhnCc%2BLWDicnmXzlmvWkgd7ELQPj9Rn19UStJcegjNxBTm89%2FE8Zqh4PVRzqnjd7y3wRfnzeGMkeMa4csOpYGeSEzc2mKFoLFAy6ebhdAFKrUUz6sYvyLTlgHMHV2e8nw6GuYv%2BwuyAAxcgklseGeeRv1VteJ1BKPYgaIv5bWV%2BaQay7X6Wrx4xAdbk8dACRk8pARi8QrUD17Mw3OqFvQY6pgH7TZvFbsDArHoaFnOKF%2BKLK%2Bh3nPPSWltWeCSvpwnetca7jJZUdmVSzA7ASZa223qbzKJ0dOF1Hjs0FDixLcfMXoZgbmrTcmJQpc7glSN980uB47YI4pVoWSTPZhQdJFXlm20BBUkYUf93zP6JiKdMtV%2FCgzJVv1ORdPYuMxfx82jh4T7WjLMzyKPIFpRpdvFvDn7FNoFrJvnW%2Fq9wr%2B6bl2ngjzxp&X-Amz-Signature=fbbb3f5be5fc0a639da9b15a12b13b893dd88fe879e081276263084535fd632a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GKXH7A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAFvBa1zl02aGNIOPUX2OkQkLALGkv0jH70UJ7JRqhEcAiBD8k%2Bu4maMVX%2FGCfUluzth5hQqdTVIXCVxmCIBwR0S4ir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkHu7YZdtuWnJfALMKtwDuhJ78FVih7Sqj7HgiIcURQqEPKz55aOf22GdKu%2Bsv3srb54LvLAYRMXa6sBgb9Df9H%2B3vsu5HdvzmU4CsuLOoAyyOsnTZ7RkQBbsRwaZEvhl6dXMgeJH1qY00uw5OBrRLmnig1G%2B9TbCrac8Ec2y3%2Foti6dYlGlMqDnOwDip5DexSZo70V7aDRKTMHljS5Rk9DhxFmeO9gZvHZCXqmbvYyMkH08gfTnSNPSigEfLxPUuuVqG9N7aHG7yOEFQ9pYUoO6nPo1PazPfL9cNPVGQMez1maWiJLKbD4ZGAd1OHvrwRo8lLSliIOUadLIxglj%2FdJ5y5GMNA%2BpF9LjE7cS%2BXXCEdgvVGpbjo64LQl5%2BAY9ok9Y8jtggDb31C9Xpny9GOXLTd%2FORGKsyQtptEd2RNQJCpmRNacNBj%2B5HOhxhRQwubvhnCc%2BLWDicnmXzlmvWkgd7ELQPj9Rn19UStJcegjNxBTm89%2FE8Zqh4PVRzqnjd7y3wRfnzeGMkeMa4csOpYGeSEzc2mKFoLFAy6ebhdAFKrUUz6sYvyLTlgHMHV2e8nw6GuYv%2BwuyAAxcgklseGeeRv1VteJ1BKPYgaIv5bWV%2BaQay7X6Wrx4xAdbk8dACRk8pARi8QrUD17Mw3OqFvQY6pgH7TZvFbsDArHoaFnOKF%2BKLK%2Bh3nPPSWltWeCSvpwnetca7jJZUdmVSzA7ASZa223qbzKJ0dOF1Hjs0FDixLcfMXoZgbmrTcmJQpc7glSN980uB47YI4pVoWSTPZhQdJFXlm20BBUkYUf93zP6JiKdMtV%2FCgzJVv1ORdPYuMxfx82jh4T7WjLMzyKPIFpRpdvFvDn7FNoFrJvnW%2Fq9wr%2B6bl2ngjzxp&X-Amz-Signature=1335ecc123938952575e45bbdcd5c627fdb64796736643e004f55d110d0eed31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
