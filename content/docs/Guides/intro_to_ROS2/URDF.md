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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42TXUSN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCArQGoVVG73a%2BFyrQN23fk3RdDyrrfCibkjBF52HHb9AIgCTO8GZPBIbsaeiCUHSa%2BA8D3%2FNa5KQZ%2BzzGkR8%2F7NTgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDkYkOZqzCSITNxTVircA%2BA2YiOY5ytuGY5ay%2BYRxoBS38xKtjARNAPfE4Y3bS0IRo2r0hKStrlEI92Rx1GJOn%2Fuc%2BVZIBrnPbQQqBfL8hnnd6cK2%2FDK%2F67PKFIPx67DGz43XrCb9G5mtxXxhtZLO2%2F6ro9mBqd07vhr5Gj2q1Ez19%2B30XvAmy6mf23K3PXvgDhhJXapBp1Csj2SGhHNPNuthTd%2FuQu74XVOWcnNCWTxSTysp9gwX0v%2FKGT7J36AEfDo0egpcWewc%2B5wm6l9TZ1ebM2KNDPFbEC0hVSzqaMYhW5KpKcR8obRmmAOWGmUyEmtsZI5op4AwCkffmhsMUKNOZCfNaaczmU1UtXZ41t3RfvyPPzUvcicmGOr8fMsyjL2hIMDX9BCF%2FPmo95qvmwsBTQZ%2B1Ahj%2FU5Cb3nwHyAvIjmzWIa5M8PStOGVsNQEJ1bhhQrpVbD6JAJaZssTkhwzrk17gUsvvcZVAMsnoXmNer0pA6SHb6v5e3Imf4gsNMtz8YGs4usyCsaKnla%2FBqQxcOwgS%2F93YXhXuExtl5tgIJUCij1QzknQGdO2xeyZ8oHu1jW6HM%2FkFyes9TC7legj%2FAiJsiZqR%2FsS%2B446Q1aMXnDzWjzyjlXVLKK3Y0%2B5YcXUPAa%2BjogWA3nMOeDor4GOqUB7SZu0ZGcfmS0LK29gi60st89MhNaV7ktPhYDCGBYcYdGBRFe2gm3TKgzktrJ%2BNIcc%2Fhu6r2ahVRRQWX3hOD7DKVIj8ZB2sTV%2FxlEJ745OnBeq1DyhJQMD3Qo2zoc%2BCzD82R7f02%2FnabaCZ9ORTBhgPDiJJJP8lbAvr8gOu0PyggWtx%2BjByUXdA5aT3vNnHyonm7cTW%2FPUK5ZSZQJzVsoBYZYg9KV&X-Amz-Signature=621a5a85f1d267a433e499bd5234e6f2baf760495379bf92090cbc9f91091fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42TXUSN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCArQGoVVG73a%2BFyrQN23fk3RdDyrrfCibkjBF52HHb9AIgCTO8GZPBIbsaeiCUHSa%2BA8D3%2FNa5KQZ%2BzzGkR8%2F7NTgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDkYkOZqzCSITNxTVircA%2BA2YiOY5ytuGY5ay%2BYRxoBS38xKtjARNAPfE4Y3bS0IRo2r0hKStrlEI92Rx1GJOn%2Fuc%2BVZIBrnPbQQqBfL8hnnd6cK2%2FDK%2F67PKFIPx67DGz43XrCb9G5mtxXxhtZLO2%2F6ro9mBqd07vhr5Gj2q1Ez19%2B30XvAmy6mf23K3PXvgDhhJXapBp1Csj2SGhHNPNuthTd%2FuQu74XVOWcnNCWTxSTysp9gwX0v%2FKGT7J36AEfDo0egpcWewc%2B5wm6l9TZ1ebM2KNDPFbEC0hVSzqaMYhW5KpKcR8obRmmAOWGmUyEmtsZI5op4AwCkffmhsMUKNOZCfNaaczmU1UtXZ41t3RfvyPPzUvcicmGOr8fMsyjL2hIMDX9BCF%2FPmo95qvmwsBTQZ%2B1Ahj%2FU5Cb3nwHyAvIjmzWIa5M8PStOGVsNQEJ1bhhQrpVbD6JAJaZssTkhwzrk17gUsvvcZVAMsnoXmNer0pA6SHb6v5e3Imf4gsNMtz8YGs4usyCsaKnla%2FBqQxcOwgS%2F93YXhXuExtl5tgIJUCij1QzknQGdO2xeyZ8oHu1jW6HM%2FkFyes9TC7legj%2FAiJsiZqR%2FsS%2B446Q1aMXnDzWjzyjlXVLKK3Y0%2B5YcXUPAa%2BjogWA3nMOeDor4GOqUB7SZu0ZGcfmS0LK29gi60st89MhNaV7ktPhYDCGBYcYdGBRFe2gm3TKgzktrJ%2BNIcc%2Fhu6r2ahVRRQWX3hOD7DKVIj8ZB2sTV%2FxlEJ745OnBeq1DyhJQMD3Qo2zoc%2BCzD82R7f02%2FnabaCZ9ORTBhgPDiJJJP8lbAvr8gOu0PyggWtx%2BjByUXdA5aT3vNnHyonm7cTW%2FPUK5ZSZQJzVsoBYZYg9KV&X-Amz-Signature=d78dc2896190dc659cb149e1827494f693d67040cf75e539e395b2f76fd6aa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
