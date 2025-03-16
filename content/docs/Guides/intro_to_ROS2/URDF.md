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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVBTS4W%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwvoqIJb7ohgtPKc4aaaEjOUHe8RD4EgTYzraNU9pvAIhAIrKw8kYgnhg7Qsqte2QZveRC7BwiqKNwEvov%2BOAZfd%2FKv8DCCAQABoMNjM3NDIzMTgzODA1IgzdYwpgbxBhoEv4HUcq3AMZCmk4lf9AfLWwY8ADsdig6iOmQkjPWiSx%2Fj3ZKWAhN0FR4Q%2F7SadsAOn4no0hp0EUKKongQNkIyZUvc5M2RP8Rc5wCRiADTBiRQjacOAJuiW8ncyUo2GsL8GRES0tairnduBJyM3w3azoo2jRfd%2BWrW0YWlZA8AYLVEL3M9SSim8TdvGXlsxlhrZEpyIjBfqvgDzkYzbexEVYHSqF6cQpNZ%2BrWEAkzeRSSpZo4qx6b6TdWqdsDxCRY%2BT8Xgpbc3XMUTH%2FkNChKXLXaf074U6hdKOR2%2BljRrAoTCvrkvl5sK8t06tVryhnPtRWs2isoGWtJBF%2B8RL2WcP%2Bzs1uFG1chRnY3Hnj%2FJahqjw%2BQ%2F5CDSNIvL%2FvuoMCHm5jft8E5FjH2r7XjrrhN%2BaQ%2BHOCvbdu5%2FrsDg1yYykcQABF136N5BpTutYfgd7HR%2BWkzQ9gF5ZDCgq9lG9Is9Ve9kukBhJWFpT3KRO7OI1ZLJfFDg%2Br06xZHXF3Oo8zA%2FsJCTPo9fXOD%2BkusDfg7pI9UkkiDDlFr2PTN96aSYeE2q6uXPNREc%2FexlLJbR8AQx525NxfhvEKvb8SNU%2FS%2Bj8WxST%2FvrRtOgvYdZImItzgWxqWtz44n%2FiW9t5bCM1JwajG%2FDCygdi%2BBjqkAb2cPk0hDiQp2IJqfqAZa%2FKMshzcBhTTx02eNXDA3yoER81TUphWxs5utb1KfixfcPgFcCcFz2tuwMfvnQnnGe1TFRSFLZ64JEBV1iR4Nm4armObYH%2F2JK4GJaGbOTjL1VmN8NXsuW9CoyeyFHa0vo2VTIGRp1o3HeaQaxAaceC8NspFSdQL%2BKOYWrx7e72xkMFIS%2BOsNF6a8jdWP8fEpKD8T7ZC&X-Amz-Signature=d69aca990115d8914377a98d5d76e22b00292e13ceab67b56623e1996d1b89fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SVBTS4W%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkwvoqIJb7ohgtPKc4aaaEjOUHe8RD4EgTYzraNU9pvAIhAIrKw8kYgnhg7Qsqte2QZveRC7BwiqKNwEvov%2BOAZfd%2FKv8DCCAQABoMNjM3NDIzMTgzODA1IgzdYwpgbxBhoEv4HUcq3AMZCmk4lf9AfLWwY8ADsdig6iOmQkjPWiSx%2Fj3ZKWAhN0FR4Q%2F7SadsAOn4no0hp0EUKKongQNkIyZUvc5M2RP8Rc5wCRiADTBiRQjacOAJuiW8ncyUo2GsL8GRES0tairnduBJyM3w3azoo2jRfd%2BWrW0YWlZA8AYLVEL3M9SSim8TdvGXlsxlhrZEpyIjBfqvgDzkYzbexEVYHSqF6cQpNZ%2BrWEAkzeRSSpZo4qx6b6TdWqdsDxCRY%2BT8Xgpbc3XMUTH%2FkNChKXLXaf074U6hdKOR2%2BljRrAoTCvrkvl5sK8t06tVryhnPtRWs2isoGWtJBF%2B8RL2WcP%2Bzs1uFG1chRnY3Hnj%2FJahqjw%2BQ%2F5CDSNIvL%2FvuoMCHm5jft8E5FjH2r7XjrrhN%2BaQ%2BHOCvbdu5%2FrsDg1yYykcQABF136N5BpTutYfgd7HR%2BWkzQ9gF5ZDCgq9lG9Is9Ve9kukBhJWFpT3KRO7OI1ZLJfFDg%2Br06xZHXF3Oo8zA%2FsJCTPo9fXOD%2BkusDfg7pI9UkkiDDlFr2PTN96aSYeE2q6uXPNREc%2FexlLJbR8AQx525NxfhvEKvb8SNU%2FS%2Bj8WxST%2FvrRtOgvYdZImItzgWxqWtz44n%2FiW9t5bCM1JwajG%2FDCygdi%2BBjqkAb2cPk0hDiQp2IJqfqAZa%2FKMshzcBhTTx02eNXDA3yoER81TUphWxs5utb1KfixfcPgFcCcFz2tuwMfvnQnnGe1TFRSFLZ64JEBV1iR4Nm4armObYH%2F2JK4GJaGbOTjL1VmN8NXsuW9CoyeyFHa0vo2VTIGRp1o3HeaQaxAaceC8NspFSdQL%2BKOYWrx7e72xkMFIS%2BOsNF6a8jdWP8fEpKD8T7ZC&X-Amz-Signature=e35354c0979271c189dc0555ea585c8638ca9a508bd7459b4f1c8a1a11b3a1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
