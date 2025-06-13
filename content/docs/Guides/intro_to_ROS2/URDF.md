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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUMGMPXR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8Wix1zT%2B9EqPzU1Coq9S%2Fok8ymjjnCWZ%2FrWgMha7aegIgV8Mbuw0Tn1x7baxIsr19Ro%2FvdRABQrFpNk2eF0WxSBQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGeCx5G7B27W7TaHuSrcAyG9FYiEBXVJPtCM50rrQpLhCfIFtgyiquWXkhQv3KD6%2FQk0zKJ29WV0aXMIaQspkxKQcpL2PcZIYq%2F5IV7%2BaxCdOpbH3Djqf%2Fig6VrT2EG970VaxB5Wh298kht3qs%2F7csSejXehD%2Fq4FaqpxN%2B4PVBox5SPls7ZR8UtgObgqhssahR%2BB6KSVHe3ONVghdMvKXWXRh1xba14%2Fhwt0pPsj2MOYKM5dN4IWAIbRN3dTo4Mkj45QuFQIZpRce8rBmtsQWyZXry84OnYYvJNuJZisqhH205FxBqX8czkqYwpCAlWV7tA%2Fb6kyp9HLkAW%2BkNfeqjBy5%2B6epipoJOv%2FSuYZwsU4X4l91QNLA6V56aCY3L7KBOzQ%2Bw5%2Faxt0NAbiUTVPjb9YpUfm%2Fnu6QVo0YhmzJsb0nbkD3Er%2F4YG9iEWvUQaiNy1SUo%2FnbOvl5lpO52ZJA9qcuc28i8pSP9l7lJztDQNcNgMWYMQogKjdlzEXlIkGvkKCwB0a4uvcXBTWt4QH628q87vlJAsGR5deaE8a5X4acn3wKqnCoPUtCx4vWb7MWKm9SMXIFQLKQvO3u1hFDKEgbYCwLV3ZBKsL2QDBbZOHu0j%2FAbU7yT3dZU9ei6vrSFr6YLIjyk7%2FeRjMKGpsMIGOqUB9GNBGya0lQ6HTkMwuCEwAR7ff8hkAmTPtRTFhKvQI7KhYlY0nHzUCwZjPll6toZ1X2VknZEP%2B2%2FXbl90FetzVHnRxfAGJ%2BbLRuUjHFEDs4sz17vadg5hna9d4QiYw%2B%2FMZNqNqupoTV4bU6GaMT7dNXNHANYpcdjOmAmrpkInFarPE3zanQ7EYqcjUtiZ1G%2FA0Wn4YtRnU%2FpyYRO1T1H%2Bi66nJbF9&X-Amz-Signature=e38cf0e108a4a933516e69012799866475bf46025d5b3c3095c8539e2fc86007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUMGMPXR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC8Wix1zT%2B9EqPzU1Coq9S%2Fok8ymjjnCWZ%2FrWgMha7aegIgV8Mbuw0Tn1x7baxIsr19Ro%2FvdRABQrFpNk2eF0WxSBQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGeCx5G7B27W7TaHuSrcAyG9FYiEBXVJPtCM50rrQpLhCfIFtgyiquWXkhQv3KD6%2FQk0zKJ29WV0aXMIaQspkxKQcpL2PcZIYq%2F5IV7%2BaxCdOpbH3Djqf%2Fig6VrT2EG970VaxB5Wh298kht3qs%2F7csSejXehD%2Fq4FaqpxN%2B4PVBox5SPls7ZR8UtgObgqhssahR%2BB6KSVHe3ONVghdMvKXWXRh1xba14%2Fhwt0pPsj2MOYKM5dN4IWAIbRN3dTo4Mkj45QuFQIZpRce8rBmtsQWyZXry84OnYYvJNuJZisqhH205FxBqX8czkqYwpCAlWV7tA%2Fb6kyp9HLkAW%2BkNfeqjBy5%2B6epipoJOv%2FSuYZwsU4X4l91QNLA6V56aCY3L7KBOzQ%2Bw5%2Faxt0NAbiUTVPjb9YpUfm%2Fnu6QVo0YhmzJsb0nbkD3Er%2F4YG9iEWvUQaiNy1SUo%2FnbOvl5lpO52ZJA9qcuc28i8pSP9l7lJztDQNcNgMWYMQogKjdlzEXlIkGvkKCwB0a4uvcXBTWt4QH628q87vlJAsGR5deaE8a5X4acn3wKqnCoPUtCx4vWb7MWKm9SMXIFQLKQvO3u1hFDKEgbYCwLV3ZBKsL2QDBbZOHu0j%2FAbU7yT3dZU9ei6vrSFr6YLIjyk7%2FeRjMKGpsMIGOqUB9GNBGya0lQ6HTkMwuCEwAR7ff8hkAmTPtRTFhKvQI7KhYlY0nHzUCwZjPll6toZ1X2VknZEP%2B2%2FXbl90FetzVHnRxfAGJ%2BbLRuUjHFEDs4sz17vadg5hna9d4QiYw%2B%2FMZNqNqupoTV4bU6GaMT7dNXNHANYpcdjOmAmrpkInFarPE3zanQ7EYqcjUtiZ1G%2FA0Wn4YtRnU%2FpyYRO1T1H%2Bi66nJbF9&X-Amz-Signature=6fe9653f330edf8026c2f4b8b894352d97cef1d55c7d928aba20a1d33ca932e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
