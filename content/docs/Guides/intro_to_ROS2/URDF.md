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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIILSI%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFtDjbXrfD9EDytpBdztTR1o%2FTlgEABkNSSPwoHZWd8%2FAiEA6WL5omue8LC%2FU7F4NaINHbGklDApinVnoID4Mjm8fzAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMuV9vwuiVx3TPK5JCrcA0DaL2INnFTCqOY1XmBKWERk5VTZYyBReTyVHvGQmfYycb88%2Fa%2FW4x40LsZ5IWsjK50Cft%2B4SH6lur6sfR7vUJ4WtrefBF%2F6eDYzwil9hzq%2FzJS%2Bn6w4hIv4SFidojjs3pQwr%2BTQnyToVsog8PatAirtUMpsSe%2BhxpkAKkCc169t%2Bdml1Kcgaa68ffTC4jBegHS%2BPxNrW8DN3Rdg2H7EGnuz%2FBf2D2MlqcUX5HKvDWlWS05XL0DiFCXJCitLeNWm02xvGxmDrMk3vRp9n68axZtdwgbAm7VseB1H0B5x4y1aPhaTHYGyU7%2FvmMbG6jbQYl934NHfxrk6k95wL3hNLN5NQ1CZxTxWdEEt0vst9NyyceN9pF2UHN2%2Bql5gOsgcChVXwOxxhCEp3f%2FuBT62xaia7e9KzJ7g2tAs1EZYIwtre%2Fkbis78r6r4KM4R5Wmfw3bPyn1%2Flq5omlCjVjj4CYoUId1jwvAcQTHdOtDmbQiGJIhICURttHh070ACZIiZrXFWJIXQgubiaFORzpmJ9KSkXV2PbcucB9Zu0NNqA%2Bt%2F%2F3mc1Ps3ELFKjqOwpBY9mGPOzOSRplRjxvxXGcpnNFy7C7mK3Pc4PKn1kcGSsLBWoRbyvnSZBTpZ4zhwMLXcptIGOqUBCXxGXbLdEcoHtwYvlKrlxGFgSjZwhMTtAhlP3x3sl7Dpu5Ww3kdyArusniw44em7GGA3S2MqV7upQ6KLpO6ec%2FEZNQyt3KtU71eo6diRnUCfxpX1jGf%2F%2Bs%2FhEy4BXTaNDr9T43tQLLf9pYXvwDQQ8lNkOkuzhcTgEQaiVJNHlDJ12zPbTLfCi7FPO6ioGvzAzaGFHY0dD8bzuLAQzu0m8OMv%2BPeb&X-Amz-Signature=c4da95496b1719ac85c861026a3cf02e65b63c77bef8392e8661a495bb0251fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SIILSI%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFtDjbXrfD9EDytpBdztTR1o%2FTlgEABkNSSPwoHZWd8%2FAiEA6WL5omue8LC%2FU7F4NaINHbGklDApinVnoID4Mjm8fzAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMuV9vwuiVx3TPK5JCrcA0DaL2INnFTCqOY1XmBKWERk5VTZYyBReTyVHvGQmfYycb88%2Fa%2FW4x40LsZ5IWsjK50Cft%2B4SH6lur6sfR7vUJ4WtrefBF%2F6eDYzwil9hzq%2FzJS%2Bn6w4hIv4SFidojjs3pQwr%2BTQnyToVsog8PatAirtUMpsSe%2BhxpkAKkCc169t%2Bdml1Kcgaa68ffTC4jBegHS%2BPxNrW8DN3Rdg2H7EGnuz%2FBf2D2MlqcUX5HKvDWlWS05XL0DiFCXJCitLeNWm02xvGxmDrMk3vRp9n68axZtdwgbAm7VseB1H0B5x4y1aPhaTHYGyU7%2FvmMbG6jbQYl934NHfxrk6k95wL3hNLN5NQ1CZxTxWdEEt0vst9NyyceN9pF2UHN2%2Bql5gOsgcChVXwOxxhCEp3f%2FuBT62xaia7e9KzJ7g2tAs1EZYIwtre%2Fkbis78r6r4KM4R5Wmfw3bPyn1%2Flq5omlCjVjj4CYoUId1jwvAcQTHdOtDmbQiGJIhICURttHh070ACZIiZrXFWJIXQgubiaFORzpmJ9KSkXV2PbcucB9Zu0NNqA%2Bt%2F%2F3mc1Ps3ELFKjqOwpBY9mGPOzOSRplRjxvxXGcpnNFy7C7mK3Pc4PKn1kcGSsLBWoRbyvnSZBTpZ4zhwMLXcptIGOqUBCXxGXbLdEcoHtwYvlKrlxGFgSjZwhMTtAhlP3x3sl7Dpu5Ww3kdyArusniw44em7GGA3S2MqV7upQ6KLpO6ec%2FEZNQyt3KtU71eo6diRnUCfxpX1jGf%2F%2Bs%2FhEy4BXTaNDr9T43tQLLf9pYXvwDQQ8lNkOkuzhcTgEQaiVJNHlDJ12zPbTLfCi7FPO6ioGvzAzaGFHY0dD8bzuLAQzu0m8OMv%2BPeb&X-Amz-Signature=ca24e2c17a60a45cd73ad8b153d08d8bcccacb666798e5c6b1d977eab4372fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
