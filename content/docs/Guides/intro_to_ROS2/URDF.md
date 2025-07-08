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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TJQT6BJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZjBFLVIJ7qL6Mnk1J2Bh9RAP75y8Jlc%2F9N2iNbcettAIgKR06L6%2BhSbC8lMWZb%2BrwYgSeKiBgjjE1v3mBDsNhEnMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6hBuKSXHNLnKw8MyrcAwQG%2BDAyJBIOZrOE%2FuFCEeFTbrV%2FeLMS0F%2B3hJLXCelkuOz7%2BaAJcGMDG6Pi3U%2FEINaMXFPT5FgXVNJl%2FIRG2knw5BnCSLZJCQpmf%2FSJklysivx%2Bt%2BsToilafyeQaYowavtbVd8LBrluMBHs1yUl%2FRiFVIzylPyK%2FHY6IOfl4jjIO8XSmaMAJNIP%2BKGOqUwdxeQeu9v0YUgM3X0nzYl0%2FZhs0f7WT3LKr4iAd11%2F5ek9n2AhFgYaeslR%2FnC8Bp0mSw1TxNQdXzzysQg73uUPv1XRiPM483NBoJj1A%2BuBdSptRKrTLVA%2FuLNz9KEim216VVCMi7dlHrFdJyDxYXm4v2fmk2zm%2BaP4WGyyA7AOVLpq%2BVMiw%2BZ69av6Hh17zS%2FzC5iCFnZFRbietXnISJxAfe6dQUEdy%2BzG48QUn0KzkZqYV05f9El93Mu%2BW0CtNMWr3YFmTDfEXubeT9D9IKrWEs0SQf7CR8GvTPNadYiQKxTFo5axvhjD%2Bj54N665Qc5p5pRoRLFnO5KjqlWGMddNflj24Zsxkrbfi74igG%2BgOXRQ6Y%2BvNRLi9jJ1voZny%2BotdU459TWSGGiIxS5absb1jrwz6ZAQ7ENhL6%2BHh7bmWxGup8lu1J68zWPbhVk1MKO0tsMGOqUB23U1Z1tEBh6161fnu5HFFRy8Bsm9ipYD%2FsOuxY27%2FoMSl4BJsWZ2asxm2N%2FEh8y4JnKAmGkZaFhJcinF9oz2WRmQ3GTNeAWktEXfLuT2pJmcAEOFP5Scz9Nnti6ltqHXRuIvjeYvPApjCL9dPmPDxPxxU2DDbhbZtALT39mQ6Bwo1%2BwhHA92xVkkubWQEot75dXiALlWcyQgWTeVEU%2Fqr4F7cN5R&X-Amz-Signature=90aec16b6b880b788d1e4ce7ff0b4ca9905733d0f7d4ec971b7c197ead307a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TJQT6BJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZjBFLVIJ7qL6Mnk1J2Bh9RAP75y8Jlc%2F9N2iNbcettAIgKR06L6%2BhSbC8lMWZb%2BrwYgSeKiBgjjE1v3mBDsNhEnMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6hBuKSXHNLnKw8MyrcAwQG%2BDAyJBIOZrOE%2FuFCEeFTbrV%2FeLMS0F%2B3hJLXCelkuOz7%2BaAJcGMDG6Pi3U%2FEINaMXFPT5FgXVNJl%2FIRG2knw5BnCSLZJCQpmf%2FSJklysivx%2Bt%2BsToilafyeQaYowavtbVd8LBrluMBHs1yUl%2FRiFVIzylPyK%2FHY6IOfl4jjIO8XSmaMAJNIP%2BKGOqUwdxeQeu9v0YUgM3X0nzYl0%2FZhs0f7WT3LKr4iAd11%2F5ek9n2AhFgYaeslR%2FnC8Bp0mSw1TxNQdXzzysQg73uUPv1XRiPM483NBoJj1A%2BuBdSptRKrTLVA%2FuLNz9KEim216VVCMi7dlHrFdJyDxYXm4v2fmk2zm%2BaP4WGyyA7AOVLpq%2BVMiw%2BZ69av6Hh17zS%2FzC5iCFnZFRbietXnISJxAfe6dQUEdy%2BzG48QUn0KzkZqYV05f9El93Mu%2BW0CtNMWr3YFmTDfEXubeT9D9IKrWEs0SQf7CR8GvTPNadYiQKxTFo5axvhjD%2Bj54N665Qc5p5pRoRLFnO5KjqlWGMddNflj24Zsxkrbfi74igG%2BgOXRQ6Y%2BvNRLi9jJ1voZny%2BotdU459TWSGGiIxS5absb1jrwz6ZAQ7ENhL6%2BHh7bmWxGup8lu1J68zWPbhVk1MKO0tsMGOqUB23U1Z1tEBh6161fnu5HFFRy8Bsm9ipYD%2FsOuxY27%2FoMSl4BJsWZ2asxm2N%2FEh8y4JnKAmGkZaFhJcinF9oz2WRmQ3GTNeAWktEXfLuT2pJmcAEOFP5Scz9Nnti6ltqHXRuIvjeYvPApjCL9dPmPDxPxxU2DDbhbZtALT39mQ6Bwo1%2BwhHA92xVkkubWQEot75dXiALlWcyQgWTeVEU%2Fqr4F7cN5R&X-Amz-Signature=b017ec84fb317180045f3a43431a4be69d314f90f5bbe5730178aeffdc8e5c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
