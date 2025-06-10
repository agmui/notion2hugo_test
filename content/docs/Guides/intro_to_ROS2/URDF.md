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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGJILK7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOCnDv5EZ4S6%2BGCpsyZbGjB%2BVWDBtVzD6gsWAG0CtJ6wIgCohKW1mYBjw6DqTjj2FmSh81taVBYY8XDH9kZ1UQp54qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdpEkwHe0t8547zRyrcAyZOsOSBwCiAKTmaMEN9QfJHrqnq9%2BMCaDJRu0XivbUhdXIct7Y0%2BIzydLi2ww4BCIteXjD5zCN0FjmetnfueMR6CBgIHCTGtTk7rDz6qqgrMUMdGTVxwUIWvj5dz9nUYHMyDZQVlLpjPqOrWivAuD47mtoPop1BjJmsJnpQ%2BATxMoy13hLpU1muZsdx1D0P4xdOoIhvkK3BLFytWsiRKAuntdhJFFAGJXpF4E9Up5BZVkZem%2FAZMHqtCDH8f27v4b%2F1IznWmt8Ir1nKzVldjvGF%2ForpPMHEGHNlQZ3vWpkh6nLr%2FQQX70TjJ%2B2q6Otko6QXXSM81bnz8Gvvy9IVeh9kxKd9efjFHjTBs8yGDJtnOrUvCizbYSVOE%2BCg4BNw2zI6yvmIdr%2Fiurls%2FIiwnCqpR421Ksx2uA2ULhMSplaoTH1a%2FHDcZV9IiDuIzbE%2FUsOMOTeTBNpU58THbZq4QdCH%2FnF30nMYWolF19v%2Bl9erHCrzTfhrLd2Q1sII5uvz3FRSVHcIxLO355Ld5%2FRKl3BJyu39e0QptIa4U81QIZDRS3Y8sxHAHX51AtF9c6SW7006aw0%2FKr7H12rAPpXhh%2F1N84Y6qZZw8GROBj3Kcqb6K8WCgCNU2W33A%2B0%2BMIDfn8IGOqUBloDiPdYwEDu6ie9Ja2sIywArku5xqn0pnvcqYwHLqOECX1Ko5y%2BKHN1T%2FYOpniApJyAouTRr0RbHVQuALMnPbD3WY3RxQtbsA%2BP870forC52%2FOeJ0uUBsp4%2B7gXfy%2BLqYjhNdfwtBMrqVDCIEBty3sSEq2qyHECO9jpWVCGMcybCbUvMLdax7pHNHpMR5rSiMa1LI%2FtguIZtvUCYkoAf1n1bYKU8&X-Amz-Signature=726ae97c11aca7b557d1748b0f18111e527f58ceb7cc242eef6851b0756c59c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HGJILK7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOCnDv5EZ4S6%2BGCpsyZbGjB%2BVWDBtVzD6gsWAG0CtJ6wIgCohKW1mYBjw6DqTjj2FmSh81taVBYY8XDH9kZ1UQp54qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdpEkwHe0t8547zRyrcAyZOsOSBwCiAKTmaMEN9QfJHrqnq9%2BMCaDJRu0XivbUhdXIct7Y0%2BIzydLi2ww4BCIteXjD5zCN0FjmetnfueMR6CBgIHCTGtTk7rDz6qqgrMUMdGTVxwUIWvj5dz9nUYHMyDZQVlLpjPqOrWivAuD47mtoPop1BjJmsJnpQ%2BATxMoy13hLpU1muZsdx1D0P4xdOoIhvkK3BLFytWsiRKAuntdhJFFAGJXpF4E9Up5BZVkZem%2FAZMHqtCDH8f27v4b%2F1IznWmt8Ir1nKzVldjvGF%2ForpPMHEGHNlQZ3vWpkh6nLr%2FQQX70TjJ%2B2q6Otko6QXXSM81bnz8Gvvy9IVeh9kxKd9efjFHjTBs8yGDJtnOrUvCizbYSVOE%2BCg4BNw2zI6yvmIdr%2Fiurls%2FIiwnCqpR421Ksx2uA2ULhMSplaoTH1a%2FHDcZV9IiDuIzbE%2FUsOMOTeTBNpU58THbZq4QdCH%2FnF30nMYWolF19v%2Bl9erHCrzTfhrLd2Q1sII5uvz3FRSVHcIxLO355Ld5%2FRKl3BJyu39e0QptIa4U81QIZDRS3Y8sxHAHX51AtF9c6SW7006aw0%2FKr7H12rAPpXhh%2F1N84Y6qZZw8GROBj3Kcqb6K8WCgCNU2W33A%2B0%2BMIDfn8IGOqUBloDiPdYwEDu6ie9Ja2sIywArku5xqn0pnvcqYwHLqOECX1Ko5y%2BKHN1T%2FYOpniApJyAouTRr0RbHVQuALMnPbD3WY3RxQtbsA%2BP870forC52%2FOeJ0uUBsp4%2B7gXfy%2BLqYjhNdfwtBMrqVDCIEBty3sSEq2qyHECO9jpWVCGMcybCbUvMLdax7pHNHpMR5rSiMa1LI%2FtguIZtvUCYkoAf1n1bYKU8&X-Amz-Signature=e0b8b6d10cecc557ab518f3d4fc3d59761a70f27fdcaa7f000c442e6318272b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
