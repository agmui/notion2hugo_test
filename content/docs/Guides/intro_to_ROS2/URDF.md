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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MI7SX3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHiamz%2BspjYXp%2BkhY3wVkiRfQ28TGNQAffPAjSVFrxKAiBhplzgj1S5l3lA%2F4b0W8KH%2FqYM1VIhgJrZWuNbBBSgyiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrw%2Fzs4vV9MjrlYZKtwDqHBQQnPtLAf8JiBzNGNTGrl%2B9vHrpnUXbsmKVKZukwDdhZy0yNEp3A0awUbLWsHZhB%2BFlnBN6ywBcQH7C7dA%2FpAdMATHpYmuVcsrNhxA4vC0EmjpGN74to%2F7xSnEKxnJ%2FUyfWKL8I9v6sIuFacJ39oHI66FyaYYAmFbk66smcclgVTqQXj85a8K2vxZYGblGqlf8oAIpUXCdhrnaPV91%2BSO3UXqqVRn%2B4%2FLOjXiuLBMav4HBVu2U%2F%2FyASHCCi53BAQ2TVDf5kd5jXX9Z2kTcta8q1a70FNcAtG6dmMlKZIm%2BmKVHAdSkYV7VLHZxkF191DokZdeznruTVVzzj5gZjfotjjUmd0KhAPlYoAhNL2BWs%2BqZXEvTBfoH6qwhG9PhSNSZ0cqtUDfOfmnZN3W%2FJyjJQBmtvlC1yZHn3G2dRwbceJV9dfH0YWti7NxHfnqeTdQ3KnTPt87H%2FDX9vUv3y%2FYdmhwOP2WigvTll2bgOaP2yEZ26aEDQHV4U2G1oOyjekcpMkWmveHe3rXwMSH3HwmlJouHoMSU7fastrsxnpK6vBvauCoNCAHC8yaokvtUC%2BeWCuf%2FofwrYOcctqhGH1Qgqend5w2z8GhVDYJihy8q%2FC6CAUkTCCrSK4Mw8vPKwgY6pgGPb49%2BDwwfEqfENQxmf2chMMzUH%2FIydVEmC3X74F7GC%2BwMyjuT1mIRLte2E4FVxMu%2F6SWJchxFZlOp%2BdmtOZ5jev6CM5CtoFWSg7i6W5k90y0mdq38gEwcaPynrV9Rv2UCTiwmZh3YJpNSFWywx9ihj49VBQggO4SosP8Fp%2BFHn2GOQ02XEG4JWnN%2F1gRA9d2TFaa2pFMOjnvdG9qv9U5vkNM8LmJV&X-Amz-Signature=e8d8c35ff251294971c51eb7f11e3468ffb60f16b7c98c4cf5a0558d7e602677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MI7SX3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHiamz%2BspjYXp%2BkhY3wVkiRfQ28TGNQAffPAjSVFrxKAiBhplzgj1S5l3lA%2F4b0W8KH%2FqYM1VIhgJrZWuNbBBSgyiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrw%2Fzs4vV9MjrlYZKtwDqHBQQnPtLAf8JiBzNGNTGrl%2B9vHrpnUXbsmKVKZukwDdhZy0yNEp3A0awUbLWsHZhB%2BFlnBN6ywBcQH7C7dA%2FpAdMATHpYmuVcsrNhxA4vC0EmjpGN74to%2F7xSnEKxnJ%2FUyfWKL8I9v6sIuFacJ39oHI66FyaYYAmFbk66smcclgVTqQXj85a8K2vxZYGblGqlf8oAIpUXCdhrnaPV91%2BSO3UXqqVRn%2B4%2FLOjXiuLBMav4HBVu2U%2F%2FyASHCCi53BAQ2TVDf5kd5jXX9Z2kTcta8q1a70FNcAtG6dmMlKZIm%2BmKVHAdSkYV7VLHZxkF191DokZdeznruTVVzzj5gZjfotjjUmd0KhAPlYoAhNL2BWs%2BqZXEvTBfoH6qwhG9PhSNSZ0cqtUDfOfmnZN3W%2FJyjJQBmtvlC1yZHn3G2dRwbceJV9dfH0YWti7NxHfnqeTdQ3KnTPt87H%2FDX9vUv3y%2FYdmhwOP2WigvTll2bgOaP2yEZ26aEDQHV4U2G1oOyjekcpMkWmveHe3rXwMSH3HwmlJouHoMSU7fastrsxnpK6vBvauCoNCAHC8yaokvtUC%2BeWCuf%2FofwrYOcctqhGH1Qgqend5w2z8GhVDYJihy8q%2FC6CAUkTCCrSK4Mw8vPKwgY6pgGPb49%2BDwwfEqfENQxmf2chMMzUH%2FIydVEmC3X74F7GC%2BwMyjuT1mIRLte2E4FVxMu%2F6SWJchxFZlOp%2BdmtOZ5jev6CM5CtoFWSg7i6W5k90y0mdq38gEwcaPynrV9Rv2UCTiwmZh3YJpNSFWywx9ihj49VBQggO4SosP8Fp%2BFHn2GOQ02XEG4JWnN%2F1gRA9d2TFaa2pFMOjnvdG9qv9U5vkNM8LmJV&X-Amz-Signature=6ae181c92f06deb63ba8196c10cca3486cd0169d4ab12b07d25e4c493a70512c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
