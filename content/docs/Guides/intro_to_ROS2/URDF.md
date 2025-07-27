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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QFCFWE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHwPwYHz8VC5V%2BE5oV0Dlx8Jpd5tesTUgT527kRFTnqfAiEAr0HfWJUeBp6EJMMiw2EarCO80Ykg%2FPJi0fGnDhwhKSMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJSvX1%2FfSRfVKOKnJyrcA%2FklKv6ZZdQjtaEFDQZVdAlwFXiTHU4YCzMqdGm3FYBAVf8w%2B8ULRxDC4dKASgXjHa%2FSPCq966yI%2FHotf2JAaO4GDdCuh13VbIxV51hxWsUErt5mDTTXBaB0FEl40pSTdWshQI%2FA3vfE3eqbHLfdz6cEGWK0E0brIQBMdxofy52o5jpyFCYHoSKCmSna%2FFZ9Bhkvcsf2Z%2Fcin6pa7t1avUGPSWXsOjCiaYLoq6%2BtYV3J56wjSE1U%2F99wODDz%2FZevTt5JLXd8JLvuXY5Y19hL%2Bo9qjSNJIjCMklmQ6MGotn1WoGjNFXsSOupP48lkyeAUmIAQzWEfMLvKeCLMy1PockXsMFl46ZmRTzN%2F20sMh3RnigtElUuTDNbvmzpx1C6aM6uJTOk5G1x7PGnElbEemsMzVYSslvo9A6salJiyQS7qLVUm6cTtd0lVPElDX8rCkCpyxB0VS42zo8ZDgIckXPLhld7f49gRBEf1%2BtKGyGFT196DMZnnkhgLTqi15N1t2bGE%2FVy%2BVfZZQHy33orTs0%2FIdrs7EGBd566gV9UJfSPisL9ygEJksm52duIFn2fFLGLNrrkwTbpfC5C5aj2rjrTbmrr9gwc7ynaJHjHT%2BQPy00w1E0UGISUoiQm0MLndl8QGOqUBySlnEEcs6wh%2FncGK%2BYT%2Fz5Vdqwdl3XdhM5BciZQ4jEoZSFoWmDcbnPlWJ3c%2BRipt120exAyGF%2Bq%2BU9nuf2Pgji0tCvoSaQ%2Fv3sa3ku1gHYiTfyXEDlgJM1uKbXxFLY0P8U1GdhUr2YDgl57%2Fi8iLW9RrfVchmK4Qceb4GfmaKXtZTiWgBIPfElqxtZZbXF2ZBjHsnRLdw8rNLPOE4yeOo42DiIY8&X-Amz-Signature=188a81441fc682b2bb71ab6cca97b75eba0094ee71e267f9848bfacd750e5335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QFCFWE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHwPwYHz8VC5V%2BE5oV0Dlx8Jpd5tesTUgT527kRFTnqfAiEAr0HfWJUeBp6EJMMiw2EarCO80Ykg%2FPJi0fGnDhwhKSMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJSvX1%2FfSRfVKOKnJyrcA%2FklKv6ZZdQjtaEFDQZVdAlwFXiTHU4YCzMqdGm3FYBAVf8w%2B8ULRxDC4dKASgXjHa%2FSPCq966yI%2FHotf2JAaO4GDdCuh13VbIxV51hxWsUErt5mDTTXBaB0FEl40pSTdWshQI%2FA3vfE3eqbHLfdz6cEGWK0E0brIQBMdxofy52o5jpyFCYHoSKCmSna%2FFZ9Bhkvcsf2Z%2Fcin6pa7t1avUGPSWXsOjCiaYLoq6%2BtYV3J56wjSE1U%2F99wODDz%2FZevTt5JLXd8JLvuXY5Y19hL%2Bo9qjSNJIjCMklmQ6MGotn1WoGjNFXsSOupP48lkyeAUmIAQzWEfMLvKeCLMy1PockXsMFl46ZmRTzN%2F20sMh3RnigtElUuTDNbvmzpx1C6aM6uJTOk5G1x7PGnElbEemsMzVYSslvo9A6salJiyQS7qLVUm6cTtd0lVPElDX8rCkCpyxB0VS42zo8ZDgIckXPLhld7f49gRBEf1%2BtKGyGFT196DMZnnkhgLTqi15N1t2bGE%2FVy%2BVfZZQHy33orTs0%2FIdrs7EGBd566gV9UJfSPisL9ygEJksm52duIFn2fFLGLNrrkwTbpfC5C5aj2rjrTbmrr9gwc7ynaJHjHT%2BQPy00w1E0UGISUoiQm0MLndl8QGOqUBySlnEEcs6wh%2FncGK%2BYT%2Fz5Vdqwdl3XdhM5BciZQ4jEoZSFoWmDcbnPlWJ3c%2BRipt120exAyGF%2Bq%2BU9nuf2Pgji0tCvoSaQ%2Fv3sa3ku1gHYiTfyXEDlgJM1uKbXxFLY0P8U1GdhUr2YDgl57%2Fi8iLW9RrfVchmK4Qceb4GfmaKXtZTiWgBIPfElqxtZZbXF2ZBjHsnRLdw8rNLPOE4yeOo42DiIY8&X-Amz-Signature=52921841489d4950987048dda31402f5e468f10d81361f898081076436f634c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
