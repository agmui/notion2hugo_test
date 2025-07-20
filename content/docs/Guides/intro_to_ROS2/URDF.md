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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66GKOF7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5HKuJw77oNqbtUiGkwXC96EJJn7Yyn5BhExjuQH4APAiEAoMqSzKcr4cwRVGJnvx%2BSyVWV2cWfC66sEGB%2FBGn7kRMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhoJ5qg2bgAtBICqSrcA%2F7vrHKP3%2FWNg4za88aj2yWr%2Br3WxBtYGnEAIasZSCpEQiogpKd6B8rGuSCMsa4vrEAvws1%2F7PChT5knxtfJZ2UA05wr%2BYlVii02rfSKYbZVQfqwoxEteFqEY%2FS3DF5DBcch%2BVD6dIyfArdLGOXTQHQdEuL3JhjAZVdIZC92fO61aM%2FkMdG7eI05MK2x%2BCNvKX6BvpEAniKi%2BBX0U87j92Z97I6YdXkpA1axFcErojqe%2Fd5MHtuW39TqMbxTdTsY%2Fiw1DX98PNyfEI50hAz5UQgJoQB3XtwP%2BHw%2BmcnFBP5SPFK0FSjwyOQRnxuat%2BFNtw8lm9orb4Y2qrYh1n9O%2Fbp076J6MRwhobvsde%2FKc3J7DyfC%2FIm0tBnH%2BL1B7edAXpdPaIiC9L6IGIWyRNc4kruq1cEWiiiBd5rmeedosTYTFVQ3Xz22R%2BuIwWY%2FjYHZtp7QbhAThyUGEMTvFP%2F3V%2FtSoVmJOKz5Bv5hxK4lYukbTEHdzLXOsZGFAFIHqlh%2B4yxL62sCj81mL3vCjtSkEG3QjrIYpzsjUXYf9LKc763G9a3NouJEM5IY0mNrVoTxGcVtULNf9VKLTcRUjQ84KMOe3OdKuFKvpRrVHAhCDiAeNt27arW5sjrnY670MIX09MMGOqUBTCfJtKUDLtstqB7sCY3jxjwrDsVd7mDyF6OBE%2FcSzD4C1y6TlaEnVIWIkuGp5crjSlBCfcdHCAkU4PlmzWwompxvh2HJqKyk%2FmfGAVLiINUbAr%2FUsrF6XhngWmjGRlpjsKbARC6CTJTruLoJXV85BRrLComgvmYfCbzafJxZ0Jmv6%2FmvX3mct6%2BjO11ow8T3LYtyTcCSQiNTVtV9xUmsoxGFIA%2BV&X-Amz-Signature=172b8e2d409381d8f7425a95513283358f0edf33ff4731d0a4ccacd438a2fc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66GKOF7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5HKuJw77oNqbtUiGkwXC96EJJn7Yyn5BhExjuQH4APAiEAoMqSzKcr4cwRVGJnvx%2BSyVWV2cWfC66sEGB%2FBGn7kRMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhoJ5qg2bgAtBICqSrcA%2F7vrHKP3%2FWNg4za88aj2yWr%2Br3WxBtYGnEAIasZSCpEQiogpKd6B8rGuSCMsa4vrEAvws1%2F7PChT5knxtfJZ2UA05wr%2BYlVii02rfSKYbZVQfqwoxEteFqEY%2FS3DF5DBcch%2BVD6dIyfArdLGOXTQHQdEuL3JhjAZVdIZC92fO61aM%2FkMdG7eI05MK2x%2BCNvKX6BvpEAniKi%2BBX0U87j92Z97I6YdXkpA1axFcErojqe%2Fd5MHtuW39TqMbxTdTsY%2Fiw1DX98PNyfEI50hAz5UQgJoQB3XtwP%2BHw%2BmcnFBP5SPFK0FSjwyOQRnxuat%2BFNtw8lm9orb4Y2qrYh1n9O%2Fbp076J6MRwhobvsde%2FKc3J7DyfC%2FIm0tBnH%2BL1B7edAXpdPaIiC9L6IGIWyRNc4kruq1cEWiiiBd5rmeedosTYTFVQ3Xz22R%2BuIwWY%2FjYHZtp7QbhAThyUGEMTvFP%2F3V%2FtSoVmJOKz5Bv5hxK4lYukbTEHdzLXOsZGFAFIHqlh%2B4yxL62sCj81mL3vCjtSkEG3QjrIYpzsjUXYf9LKc763G9a3NouJEM5IY0mNrVoTxGcVtULNf9VKLTcRUjQ84KMOe3OdKuFKvpRrVHAhCDiAeNt27arW5sjrnY670MIX09MMGOqUBTCfJtKUDLtstqB7sCY3jxjwrDsVd7mDyF6OBE%2FcSzD4C1y6TlaEnVIWIkuGp5crjSlBCfcdHCAkU4PlmzWwompxvh2HJqKyk%2FmfGAVLiINUbAr%2FUsrF6XhngWmjGRlpjsKbARC6CTJTruLoJXV85BRrLComgvmYfCbzafJxZ0Jmv6%2FmvX3mct6%2BjO11ow8T3LYtyTcCSQiNTVtV9xUmsoxGFIA%2BV&X-Amz-Signature=2bf3d495e92304f46e28f02ca30ec9350a2d65ef6bd58d08fa16c9e1903b6017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
