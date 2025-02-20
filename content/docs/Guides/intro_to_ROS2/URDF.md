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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH2LAJRI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcbhqUTU9Na5ge1Zue2dg2zkUFdEW6IGp2bPZfg9M9yAiEA4zaSQRD5AfRFSUeNbsGQt%2BflZeqTWh6N%2Br23aSM1%2Bm0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSoksjb3f4HzuGUUSrcAzRQuqDCUOwzoFl%2BTJekn3KxDaL42ALtB9WdB1j7rvppCn%2B6y9Yu9ltzNXCMpijvfdhNHr3RZCkam9vtK873wT6FsCkJefRTgT1Ibt6%2FMLHR8Q6bNfdvCPMH1emIPM1P%2Bn0gTqieR%2Bj3ncQKtucrscKtvix9HtYEV%2BpxFSS59%2Bj60NKFWsdQbyfetCRFSyNqMcQ2oxnS6gdVaxaWPFCLnoapqOYOjjiLpgoGWu3R05gTw9lg4DPJ4116hqgUMxXQ8zbJYVgbiS6fXvS64GMV5%2FFeDgbkkSCXfvYmi9S3g4qQg4wSxVYlgkIEI%2FvSB044jP60coWg5XBRlIkWTey6ZgpG%2BcGW1AkkAZkXI8w27j94THnR1ZfSmVtpAYoWGgjhsPkeOI%2BuJfq8Gjird0YeyyQodvewKbUTalbTNWEAh4pFwi26JcrjBHQaqpUO9M6BqZu9WMRr%2FFpIUc72DSBjb87%2BbM5zqVOUjNXRYuP2G9n3jV3Iin8hn1YWPgRQ327d22c3f%2B9e1lEWkcZsiSFCK%2BAJhbDdoCwv2Mbe%2BwQfAx6yR%2Bk0qgD5TuMFiuMopFotNRMBL6eLi660IH9LG4O1RLqOCtSTgs76OHlZurbv315Pymec23BO1ehMV7CGMJbg2r0GOqUB5VYzDTcLL1286jztOz%2BrtINnS347D31nn%2BD3mwP4Ha%2FAwkvwxqP2EaagGMeWj6SAuXHNibI448BWuiPimvKeGazUIcuw8chLcFfaECm0SYklXQoInIlu2bcbzFpoT7qW5%2BkXGwhcSGsRZ7CGqaH5JsiSPuU7DyKDROCDgsP76sL9q0akABXX5Xw2W4f8Yqz%2FZt4mREWj2RVqtL%2FV5PW4dK85MP2X&X-Amz-Signature=d45c5a179957ef747985aed2c60ecbf24caa91f933bf533b44ae5b66668ec044&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH2LAJRI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcbhqUTU9Na5ge1Zue2dg2zkUFdEW6IGp2bPZfg9M9yAiEA4zaSQRD5AfRFSUeNbsGQt%2BflZeqTWh6N%2Br23aSM1%2Bm0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSoksjb3f4HzuGUUSrcAzRQuqDCUOwzoFl%2BTJekn3KxDaL42ALtB9WdB1j7rvppCn%2B6y9Yu9ltzNXCMpijvfdhNHr3RZCkam9vtK873wT6FsCkJefRTgT1Ibt6%2FMLHR8Q6bNfdvCPMH1emIPM1P%2Bn0gTqieR%2Bj3ncQKtucrscKtvix9HtYEV%2BpxFSS59%2Bj60NKFWsdQbyfetCRFSyNqMcQ2oxnS6gdVaxaWPFCLnoapqOYOjjiLpgoGWu3R05gTw9lg4DPJ4116hqgUMxXQ8zbJYVgbiS6fXvS64GMV5%2FFeDgbkkSCXfvYmi9S3g4qQg4wSxVYlgkIEI%2FvSB044jP60coWg5XBRlIkWTey6ZgpG%2BcGW1AkkAZkXI8w27j94THnR1ZfSmVtpAYoWGgjhsPkeOI%2BuJfq8Gjird0YeyyQodvewKbUTalbTNWEAh4pFwi26JcrjBHQaqpUO9M6BqZu9WMRr%2FFpIUc72DSBjb87%2BbM5zqVOUjNXRYuP2G9n3jV3Iin8hn1YWPgRQ327d22c3f%2B9e1lEWkcZsiSFCK%2BAJhbDdoCwv2Mbe%2BwQfAx6yR%2Bk0qgD5TuMFiuMopFotNRMBL6eLi660IH9LG4O1RLqOCtSTgs76OHlZurbv315Pymec23BO1ehMV7CGMJbg2r0GOqUB5VYzDTcLL1286jztOz%2BrtINnS347D31nn%2BD3mwP4Ha%2FAwkvwxqP2EaagGMeWj6SAuXHNibI448BWuiPimvKeGazUIcuw8chLcFfaECm0SYklXQoInIlu2bcbzFpoT7qW5%2BkXGwhcSGsRZ7CGqaH5JsiSPuU7DyKDROCDgsP76sL9q0akABXX5Xw2W4f8Yqz%2FZt4mREWj2RVqtL%2FV5PW4dK85MP2X&X-Amz-Signature=c9a724bce0bbe7f58b405d96a2b7e9688a0ee4980d3cc3d66315addb0cf2c139&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
