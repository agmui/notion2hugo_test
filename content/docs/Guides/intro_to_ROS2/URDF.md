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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7B42BOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIANgvQZNO6EHRjuIIdeqe5S%2BEjZ56ZybsmY9877FM29oAiABh5qqJnQJeALmwoiH9szMIayBR6nw8T7eSVhuPQ8Fcyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM9rJgiUg6YH%2BWNHf3KtwDXW7B8Mqkilzls02%2BAkIzLbv724VTDBvrFNDJbqrN0ETie2YY2GbhIFsHLwto4Kaoz5UPjtj44ZXQdDWdP%2B9Tq1JmbSsxZbK2twtKxtuinliQBQGmZK6BnaYnhgTZh6SBS9WvX%2Bwp%2FNCjgNc89d980dee1YE%2FU5%2FsGYVPvHRXoBfYQsDKi42K%2FNoaA4zLpTONA7upFqnQy8MRO8%2FU8b0okkNTA9T2%2Fr%2BI2aZDVh3DtyCyZoa8m7C28Sp1g%2BhOjn%2FreYRmbVRM%2B%2B2nQPAsSGUTr8qekDC495RicGm4qrk4p5X91fk8cBpTASdKiFIiv%2Fu0ItCt%2BDM%2FTCXOBtN1VanP3OUTJ9OvaykyvlEWxPNr90h2GPrrZfBSY5I0vggrAO%2FItTg%2FB4OYejrbO2Ze2u639ppA1bKfz%2FnYGhlQucp7rY2DBvNsxnD25j9brByPsp1Lf3wHsqdti8VgkZgG9%2FCtyQadg%2FTC8z0hmkNcaLtDJQ6ODN2Ddh9c3EM4XLVUB5JypZK385YCViMnKUqiGUAzXc9ayUJ14GsExHrnBJ2%2FAqY2vqW%2F5pe7gyciPBvLm7ofX%2FtN1l3afJtDfajPqv05yjOBSZ0gE8thSogriVvk8P1OLEmCQLTxPu1hqBgwiumMxAY6pgFcVjxF0AY5kF5WtuuHZ%2FDmhfjyLRcmF0XftQOaNlOJ0FDrK1A4kyy%2F7pzI71%2FjFxeIYIE2Jf%2FAJd7DPCjEAIUO3smfRUGrxWadz1U%2BhpN84TqY0ql7DhdWsa02YoGS3IsIopXyYGiXWtVF1QgVke2CdfDlUgagc1Fv9YqKRXo%2F7qmjNTs9kKsZzpgj2LFMeX801yJaN3qgvV%2B8b41spA%2F5prLGI1qJ&X-Amz-Signature=97dcdd105a9bc147b3988d3a648b46391ca5024d28518f2f6d55525e75bc597f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7B42BOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIANgvQZNO6EHRjuIIdeqe5S%2BEjZ56ZybsmY9877FM29oAiABh5qqJnQJeALmwoiH9szMIayBR6nw8T7eSVhuPQ8Fcyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM9rJgiUg6YH%2BWNHf3KtwDXW7B8Mqkilzls02%2BAkIzLbv724VTDBvrFNDJbqrN0ETie2YY2GbhIFsHLwto4Kaoz5UPjtj44ZXQdDWdP%2B9Tq1JmbSsxZbK2twtKxtuinliQBQGmZK6BnaYnhgTZh6SBS9WvX%2Bwp%2FNCjgNc89d980dee1YE%2FU5%2FsGYVPvHRXoBfYQsDKi42K%2FNoaA4zLpTONA7upFqnQy8MRO8%2FU8b0okkNTA9T2%2Fr%2BI2aZDVh3DtyCyZoa8m7C28Sp1g%2BhOjn%2FreYRmbVRM%2B%2B2nQPAsSGUTr8qekDC495RicGm4qrk4p5X91fk8cBpTASdKiFIiv%2Fu0ItCt%2BDM%2FTCXOBtN1VanP3OUTJ9OvaykyvlEWxPNr90h2GPrrZfBSY5I0vggrAO%2FItTg%2FB4OYejrbO2Ze2u639ppA1bKfz%2FnYGhlQucp7rY2DBvNsxnD25j9brByPsp1Lf3wHsqdti8VgkZgG9%2FCtyQadg%2FTC8z0hmkNcaLtDJQ6ODN2Ddh9c3EM4XLVUB5JypZK385YCViMnKUqiGUAzXc9ayUJ14GsExHrnBJ2%2FAqY2vqW%2F5pe7gyciPBvLm7ofX%2FtN1l3afJtDfajPqv05yjOBSZ0gE8thSogriVvk8P1OLEmCQLTxPu1hqBgwiumMxAY6pgFcVjxF0AY5kF5WtuuHZ%2FDmhfjyLRcmF0XftQOaNlOJ0FDrK1A4kyy%2F7pzI71%2FjFxeIYIE2Jf%2FAJd7DPCjEAIUO3smfRUGrxWadz1U%2BhpN84TqY0ql7DhdWsa02YoGS3IsIopXyYGiXWtVF1QgVke2CdfDlUgagc1Fv9YqKRXo%2F7qmjNTs9kKsZzpgj2LFMeX801yJaN3qgvV%2B8b41spA%2F5prLGI1qJ&X-Amz-Signature=c4c2e2333d0fc066efac59d7cc654697f5137bed3a9c557f12316246d5251897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
