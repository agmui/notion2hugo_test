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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBMACXU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC3PXD43Pb%2F%2BCyK6lsk9mx0SE%2F3W4aDgLGjl9vtTKUaRAiBodXALwZdYP7QE7iKMZdjIessD296rL7gqhxZZWe%2Bu7ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMyncvHs8s%2FueCkZaZKtwDd1sigLjWYAvB9AeweePbAdKAdIKrxr1T2nqwTISXj1sb82iIo0s7BlUXMecnxL6G2DcHzzi0jM9rEOJacYu6u6oWk0%2F76fQdoZM26nknNJwmkXnatBmnvZUXtfhzMiS%2FxwOavZsZqv%2FRpvchPaRM34B7FHEXyC4fpd1zXE6P6sMNFPvS1a83cjDICKsSx3FxGi9iLGbjRBGINrcZf10Fm1L1Zn7gfVVxRNBpQSGWErMpMvysglafznNiXr2Q4n6%2BYJiK2EMFnm8gpaUrc836dZ7CuwEh%2FZXds9EBCTZJIfBFK%2BJvJ2VYT5Y12g1G6REAbbfkUi1X1yJLApa%2B42qvIIzpDvJ5huiVFrRSUeq9Jj1H9nA%2Fkl0k0B%2BE9txTjt9jK9CZkQ1J9x0tVvxXk3S%2B1bw%2BMRBlpGbp98zAo4SzDXtGwYvJ2KyNH73t98U%2FMHeh%2FNkEg35PKaGb%2FasjaxxSfD3HunyBwrumPu%2FnLv6bJCc%2BEtyoTM2ttyNFFQBWke2cG07aGvXhS6fmd93N%2FmK26uFZO8QMPJoffkb3Bvb2pPaTJiK9%2BqT8AfEEyhmdnhDOcT52LuM9%2BZjfz4LLZRnlKekKxlfnDZjCb5JPq0WCtXcUXxyLdMLyym9Szogw8arXwwY6pgElGTXO%2BBy%2BK%2BDrBLrAfFiY97fCSgn2f5wOUGVDVVTYwMLwzxQwoeB4Rp6qO12ziWQ14N6AQ1U2IxM5qruQ0t8oKapmz3J2lljplC89Dy2UBh%2BBLzZrNK8VH%2B%2F1JMKGsenSj8WOpQ%2FrAr7HF69XfrjOZcY1dwh2gGpBOAT7CqFAvssHdiOOCsn3zuQMcHVrFwo3AiAtzgv4k%2BgHZK9eYeNJz%2FtNdKoi&X-Amz-Signature=061321a4423edd588d3d06e10763b85609bf98716b4da4070b9a51ea70bf936f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBMACXU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC3PXD43Pb%2F%2BCyK6lsk9mx0SE%2F3W4aDgLGjl9vtTKUaRAiBodXALwZdYP7QE7iKMZdjIessD296rL7gqhxZZWe%2Bu7ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMyncvHs8s%2FueCkZaZKtwDd1sigLjWYAvB9AeweePbAdKAdIKrxr1T2nqwTISXj1sb82iIo0s7BlUXMecnxL6G2DcHzzi0jM9rEOJacYu6u6oWk0%2F76fQdoZM26nknNJwmkXnatBmnvZUXtfhzMiS%2FxwOavZsZqv%2FRpvchPaRM34B7FHEXyC4fpd1zXE6P6sMNFPvS1a83cjDICKsSx3FxGi9iLGbjRBGINrcZf10Fm1L1Zn7gfVVxRNBpQSGWErMpMvysglafznNiXr2Q4n6%2BYJiK2EMFnm8gpaUrc836dZ7CuwEh%2FZXds9EBCTZJIfBFK%2BJvJ2VYT5Y12g1G6REAbbfkUi1X1yJLApa%2B42qvIIzpDvJ5huiVFrRSUeq9Jj1H9nA%2Fkl0k0B%2BE9txTjt9jK9CZkQ1J9x0tVvxXk3S%2B1bw%2BMRBlpGbp98zAo4SzDXtGwYvJ2KyNH73t98U%2FMHeh%2FNkEg35PKaGb%2FasjaxxSfD3HunyBwrumPu%2FnLv6bJCc%2BEtyoTM2ttyNFFQBWke2cG07aGvXhS6fmd93N%2FmK26uFZO8QMPJoffkb3Bvb2pPaTJiK9%2BqT8AfEEyhmdnhDOcT52LuM9%2BZjfz4LLZRnlKekKxlfnDZjCb5JPq0WCtXcUXxyLdMLyym9Szogw8arXwwY6pgElGTXO%2BBy%2BK%2BDrBLrAfFiY97fCSgn2f5wOUGVDVVTYwMLwzxQwoeB4Rp6qO12ziWQ14N6AQ1U2IxM5qruQ0t8oKapmz3J2lljplC89Dy2UBh%2BBLzZrNK8VH%2B%2F1JMKGsenSj8WOpQ%2FrAr7HF69XfrjOZcY1dwh2gGpBOAT7CqFAvssHdiOOCsn3zuQMcHVrFwo3AiAtzgv4k%2BgHZK9eYeNJz%2FtNdKoi&X-Amz-Signature=34b763944ec656b2fa2482cb0edd95c9c13a7334b999eda15ff5168476410509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
