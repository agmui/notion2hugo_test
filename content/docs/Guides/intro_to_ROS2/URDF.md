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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XGWYH5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGTj95tCivG8resCLP92N599OjhLInAdnqzFVkuFHw1wAiBf3Cd0PsxeFusgio%2B1DigWQZAX2Id49NPev2pxUGpP3yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLy33MlAtAaBMMO2KtwD1An8vHz4qNK4pDROYDV6oxcuIAL4k7S3u4A8C4Xca8nbtUGw7Y%2FNQWCDhrOJVedEdcLmoHHaF%2FJuBHYUwNNryGKeLaAcpv%2BBRDZlo6KypttOoqeM%2BbZ36m2WFqbvP7mGc330wbxtEztTaUVpQrKEcGIjPmY0PIY5O0m0FVOfMtH43IPF7KS2hOpAWs6DORgJZpD5ifAlMrdqo%2BwNwDTHk9kTO7kp9K2%2FjujooALPiDBk0L79gFKZPCtKXnxZpMOaljBmHLCNlDS9eq2FEV059YenztuZJGbxCi3cCXsStymg8PMPplm0gOOpOwBWlOtpUna6gJdBbzLlE%2B%2BK90KYg6q1%2FNQnZAeew0vVKcqF6Y1l9jnuFEob5p5MKix11suQTTxqhaCvEcSyCsm%2B%2BYrPpImkhpIo6FfruEeLJZFUZMt2xzUSPjFMYg6SGtHrOdlgVnxW0S8%2BxhJHYifNz2bHeNs0vNDukF7qjgvrCKm33m9qmBM%2FfsCGDg4E%2FvxHX343lXMJInuXDCZiMCnY389xQgMvUgcm0xXeAdp12zKe6kvJ%2FZyIOWbeQr6hupLWFP%2FoXb3cNPTWL0n1YW1sa3TZvEBXMMI6s5n1MoSn8wFH%2FdyMh%2BizlHQ2Rqz4YbwwhoHHvgY6pgF9xi7%2Fp7FlioLj8TI0OqRANn7GbGdKz1X%2B%2BGOOEunF2miB%2Fc2Bwy7eREIJurMFEvhSp7oKfcs9dWUd5sXE0ou0%2BlJsM1SdMg0zEuKiEiLgbB0DhbYjL7mXzeX2zqsWuC%2FVIG5u8zw3MSWsUxv2UX44QGThUuNwBrucMxc6Stmz9%2B1BUwe4Shexdf46%2F94Jd6EuH1dWteNjAqnSz69NhLR238Tk3pyd&X-Amz-Signature=bdaae7224cc6d14588ee86815bb100612b278c00ea7d493e1224e7344da0eaab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XGWYH5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGTj95tCivG8resCLP92N599OjhLInAdnqzFVkuFHw1wAiBf3Cd0PsxeFusgio%2B1DigWQZAX2Id49NPev2pxUGpP3yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLy33MlAtAaBMMO2KtwD1An8vHz4qNK4pDROYDV6oxcuIAL4k7S3u4A8C4Xca8nbtUGw7Y%2FNQWCDhrOJVedEdcLmoHHaF%2FJuBHYUwNNryGKeLaAcpv%2BBRDZlo6KypttOoqeM%2BbZ36m2WFqbvP7mGc330wbxtEztTaUVpQrKEcGIjPmY0PIY5O0m0FVOfMtH43IPF7KS2hOpAWs6DORgJZpD5ifAlMrdqo%2BwNwDTHk9kTO7kp9K2%2FjujooALPiDBk0L79gFKZPCtKXnxZpMOaljBmHLCNlDS9eq2FEV059YenztuZJGbxCi3cCXsStymg8PMPplm0gOOpOwBWlOtpUna6gJdBbzLlE%2B%2BK90KYg6q1%2FNQnZAeew0vVKcqF6Y1l9jnuFEob5p5MKix11suQTTxqhaCvEcSyCsm%2B%2BYrPpImkhpIo6FfruEeLJZFUZMt2xzUSPjFMYg6SGtHrOdlgVnxW0S8%2BxhJHYifNz2bHeNs0vNDukF7qjgvrCKm33m9qmBM%2FfsCGDg4E%2FvxHX343lXMJInuXDCZiMCnY389xQgMvUgcm0xXeAdp12zKe6kvJ%2FZyIOWbeQr6hupLWFP%2FoXb3cNPTWL0n1YW1sa3TZvEBXMMI6s5n1MoSn8wFH%2FdyMh%2BizlHQ2Rqz4YbwwhoHHvgY6pgF9xi7%2Fp7FlioLj8TI0OqRANn7GbGdKz1X%2B%2BGOOEunF2miB%2Fc2Bwy7eREIJurMFEvhSp7oKfcs9dWUd5sXE0ou0%2BlJsM1SdMg0zEuKiEiLgbB0DhbYjL7mXzeX2zqsWuC%2FVIG5u8zw3MSWsUxv2UX44QGThUuNwBrucMxc6Stmz9%2B1BUwe4Shexdf46%2F94Jd6EuH1dWteNjAqnSz69NhLR238Tk3pyd&X-Amz-Signature=3e5435106cc8fd2fd59946b7bf1d3c2050da0f1c480558f7955c536bf7af13fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
