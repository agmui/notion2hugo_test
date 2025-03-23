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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6UBN7R%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDOJw6p8hxfMdYkwHKdYYNHPFqOBDSWhDSchhCTG3Hf1AIhAKgpD0makDXMy%2BVtGwGd%2FdbCjp88R43VxZFF0kXEGiurKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzenLPM3PiGmCzcRmsq3ANLl8EVRVUEAFVJOmF7qd3dkQu%2BA8sxSFr00eMzPnLZlY4P6v51%2BeBT2NqBOMvcwazqd0kKHbJdyzAzfD%2B5JXvuugZGk4%2FzZXAxi47vTMYanW2gGrKpnMEHicFV4PBL3r30Op7MIJE4kXMxW9FKYJhXX%2BWl20PXfnxigBlLSj0cVMxoWMgxzycFmKBGJUT1DmipQTEWdIOW5nYLMELYAi4pr6BoP%2FxSJpkr%2FeDq8u5CYwRTbXw%2FiIi%2FeXaB4cB5plVkTY9cEFGc%2FPzDgdrPEKQ5l2eQIRnsUN3O0CfNUUm%2FY9kyH8oM2RXu7BUPWWrS7CLg7xSmfXJYnxZZR0bHHDriKpDtgBIqxBFpULG69d1687GDJos9DGz0%2BKuKRmvOcld%2FgTyNk43688KLW50ISpWYe9y0Pd4pU1A8ROknw26a%2FClQDqWXoJwdSyiSuVztfxUjsw4ME%2FA%2FemZmgb8urm1WFsiENIuutb26%2BD0sFWi0hETPHOXt1DoEHPWyNfkBDLLpYQU3Cp7pImQtt2nlH1YhugdHQtPVEHzssuwtn7KjsANA5nKrHOgjvGnPfjL%2FAQ0T%2BmsURWEEHZCBtoVVT3ShDcxyXNB9Dd3ktSrkNoRL%2BPOkxCRuepw0GWNrdzCl8v6%2BBjqkAYjbkipxMH2XBx4%2FzuNBqHznaHTNCnSZ5puQkyWTlEj%2Ftce7Oc2xtITuxLArLxcXoiGAg9CwXf363ryxMf5IHynq9delk61EqxY5z%2F%2FRS5UnwutNiIgE9RBkqsB1C8inn5Lh%2F4EBH9qZWyg57k65rt8hEVTQ3IYQMF4a%2B8%2BlWU3g0qJHAhyUZMkTfhVuArUHii5G8J9q42B1TbTsj9%2BihBBBB9SI&X-Amz-Signature=8e4748f4b01c6716502bafacb8eeb81f9cdbd5c9be927aa99884471953cefb92&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6UBN7R%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDOJw6p8hxfMdYkwHKdYYNHPFqOBDSWhDSchhCTG3Hf1AIhAKgpD0makDXMy%2BVtGwGd%2FdbCjp88R43VxZFF0kXEGiurKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzenLPM3PiGmCzcRmsq3ANLl8EVRVUEAFVJOmF7qd3dkQu%2BA8sxSFr00eMzPnLZlY4P6v51%2BeBT2NqBOMvcwazqd0kKHbJdyzAzfD%2B5JXvuugZGk4%2FzZXAxi47vTMYanW2gGrKpnMEHicFV4PBL3r30Op7MIJE4kXMxW9FKYJhXX%2BWl20PXfnxigBlLSj0cVMxoWMgxzycFmKBGJUT1DmipQTEWdIOW5nYLMELYAi4pr6BoP%2FxSJpkr%2FeDq8u5CYwRTbXw%2FiIi%2FeXaB4cB5plVkTY9cEFGc%2FPzDgdrPEKQ5l2eQIRnsUN3O0CfNUUm%2FY9kyH8oM2RXu7BUPWWrS7CLg7xSmfXJYnxZZR0bHHDriKpDtgBIqxBFpULG69d1687GDJos9DGz0%2BKuKRmvOcld%2FgTyNk43688KLW50ISpWYe9y0Pd4pU1A8ROknw26a%2FClQDqWXoJwdSyiSuVztfxUjsw4ME%2FA%2FemZmgb8urm1WFsiENIuutb26%2BD0sFWi0hETPHOXt1DoEHPWyNfkBDLLpYQU3Cp7pImQtt2nlH1YhugdHQtPVEHzssuwtn7KjsANA5nKrHOgjvGnPfjL%2FAQ0T%2BmsURWEEHZCBtoVVT3ShDcxyXNB9Dd3ktSrkNoRL%2BPOkxCRuepw0GWNrdzCl8v6%2BBjqkAYjbkipxMH2XBx4%2FzuNBqHznaHTNCnSZ5puQkyWTlEj%2Ftce7Oc2xtITuxLArLxcXoiGAg9CwXf363ryxMf5IHynq9delk61EqxY5z%2F%2FRS5UnwutNiIgE9RBkqsB1C8inn5Lh%2F4EBH9qZWyg57k65rt8hEVTQ3IYQMF4a%2B8%2BlWU3g0qJHAhyUZMkTfhVuArUHii5G8J9q42B1TbTsj9%2BihBBBB9SI&X-Amz-Signature=2f9acb445278edd3f6776281df313527fac3692e518c697d8f52062affdda592&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
