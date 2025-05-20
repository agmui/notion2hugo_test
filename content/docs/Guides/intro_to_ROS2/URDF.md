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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6MVQOJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiuELUTNdKoVc6J8L%2BrkNjPrbSELK3HigG%2Fgy5aXvwiAIhALBHTq5xukqJW5U97Mdn78t2fMNY2E3acvUxx5p79HFCKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqVOKg4XhTmrUZ3gwq3AOd5HIC4w6bbW52I40KVnfDXK3mgPKdfiRaVqJhtmaHUaKyQxga0zyKHCjv998fbqvgaAFBJ1YQrhfObJ%2FDRhoQAKBaHAmByOphPf7tERaR4mO3rOb15R8z71JVSigzbsL1Tn2aDzPs6GfPcXHjpohkCLmRw3X5ImHNIK%2FkHPc0yYyvxn3BnYx3S%2BDGGWPMNMy822clJxQNDZ%2F5nZxOTP5QGHNr7dgJbpm%2F3CQBL1w7B7vpd5RZOwCIVwTs4K3GZoRCFvtjKZMxt7SR%2FgsabHywOH8QH2AxflPY%2BjiwEPCaZ049I%2FK7K0IA%2FiIozgHXAUSFmJGrW2Y0pKIOaBvyG%2B5RmIXVOHPpon6u%2BkZwXedebPBVwORv20nURldCM16GuOSv3kRATx0fwdo2BbVh9ZKtoVtmuPM%2BCqZLqSDJ4uofoUFxTw80y05fo3%2F9EYcwCsHqtUKcLtmM28VfaYtv7kkrGFSkKVy4DsT2L3PgJQcQdA6HaYJGAsYJKdrMN53qxikY53QU5Uw16%2FOPsnWwORfvKOk%2BjYlKl3UNem5xNcoPwUIZlEt9tFFIUFsOhB3WQJPS0IomuXoBrbCqtiW%2B6cXsuikYRkyVrDE%2Fw%2B%2FRsYLOmLwFaVGFWBhUh8mgIjC4s7LBBjqkAYjVJ3Lm6OSdv59jEq7%2Bnd30TXOhqu%2FkDKRjoPV3Fj22UwK%2F0ShfoMxp%2BjzoXkOd4IAwGVVUqJnGvo%2FFQq%2Bu5%2FjOHyWIIf8lneuhTc2xtwqETQRJy%2BCKLL%2BNajF19A3KwIEE9hiXyNYFq%2BC7GhaqgxxAB6E%2Fvxfg0QeFguIDwti%2Bv9drP4Kp8G1fhbrDn%2Ffw6DVqKRafkpBPFDohq20ZulaLIsIe&X-Amz-Signature=2f88a3168de07e7030f5943aeaac6ea06273b5bdb8f2cbd3fe5f7157f7291c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6MVQOJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiuELUTNdKoVc6J8L%2BrkNjPrbSELK3HigG%2Fgy5aXvwiAIhALBHTq5xukqJW5U97Mdn78t2fMNY2E3acvUxx5p79HFCKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqVOKg4XhTmrUZ3gwq3AOd5HIC4w6bbW52I40KVnfDXK3mgPKdfiRaVqJhtmaHUaKyQxga0zyKHCjv998fbqvgaAFBJ1YQrhfObJ%2FDRhoQAKBaHAmByOphPf7tERaR4mO3rOb15R8z71JVSigzbsL1Tn2aDzPs6GfPcXHjpohkCLmRw3X5ImHNIK%2FkHPc0yYyvxn3BnYx3S%2BDGGWPMNMy822clJxQNDZ%2F5nZxOTP5QGHNr7dgJbpm%2F3CQBL1w7B7vpd5RZOwCIVwTs4K3GZoRCFvtjKZMxt7SR%2FgsabHywOH8QH2AxflPY%2BjiwEPCaZ049I%2FK7K0IA%2FiIozgHXAUSFmJGrW2Y0pKIOaBvyG%2B5RmIXVOHPpon6u%2BkZwXedebPBVwORv20nURldCM16GuOSv3kRATx0fwdo2BbVh9ZKtoVtmuPM%2BCqZLqSDJ4uofoUFxTw80y05fo3%2F9EYcwCsHqtUKcLtmM28VfaYtv7kkrGFSkKVy4DsT2L3PgJQcQdA6HaYJGAsYJKdrMN53qxikY53QU5Uw16%2FOPsnWwORfvKOk%2BjYlKl3UNem5xNcoPwUIZlEt9tFFIUFsOhB3WQJPS0IomuXoBrbCqtiW%2B6cXsuikYRkyVrDE%2Fw%2B%2FRsYLOmLwFaVGFWBhUh8mgIjC4s7LBBjqkAYjVJ3Lm6OSdv59jEq7%2Bnd30TXOhqu%2FkDKRjoPV3Fj22UwK%2F0ShfoMxp%2BjzoXkOd4IAwGVVUqJnGvo%2FFQq%2Bu5%2FjOHyWIIf8lneuhTc2xtwqETQRJy%2BCKLL%2BNajF19A3KwIEE9hiXyNYFq%2BC7GhaqgxxAB6E%2Fvxfg0QeFguIDwti%2Bv9drP4Kp8G1fhbrDn%2Ffw6DVqKRafkpBPFDohq20ZulaLIsIe&X-Amz-Signature=5ab4e908ad96d5db02a44e694467b178ccab0b5167d046cbc06a60f1229e5a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
