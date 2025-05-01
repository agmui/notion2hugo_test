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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAKDLPS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFNYhSq2PXB04vMviBez%2Fk4PLXBvFJtOu0hJqRPVLashAiAe4m2HPF9auYW2FoHPvL9LNf4GzZHBG%2BWUvpqs5asPiyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNfQ9salq5Qm3hQ%2FKtwDbHUqwGtFsy%2Fj5hgckkLS46XUaDWasYE1JFurD6%2BkA%2Be69ibEmxtWHA8vW5CxVytvbcorq8qPvzEjujKyfY3czTm2o5%2FTHZnPnbCIR1kcE2nydjoc3SxL6%2FbKbESHhr%2Bz24Knygx0lv6efbpsJW5q5pZ%2BNUD%2FR2O4mwhHbXRGOfUsb5pw1DBAa6R%2Bmf5fPfsoSK6gtNMjHKjGhokyDx9HmHtLbAEeC6%2B6ZRWWu9%2FS94LSmPbp0hYRlqWA2A4Ln1r5HvWajkTlNik4wNNohS2%2FuiODqFK1u03U3T3%2BrDWmFyCW%2BA0c%2FNNbFnVSyJ1fW37k5STou3AtQrZUxEFvEomMsjcaB8ce4acAEAOz7ZwOiezLfQOQrjcUCSNv5pKcEo2p%2BYuj0Tky%2B5JMHLamGWpam1ebbuFfqWu9Kggi%2Fyo6TKxE9JjYXb5SVanmr1pUFGzOF8F4NvpBsOVCgW0t2R%2FKQwQk4rDl11qAujaJqnrxonfoxvG%2BCDwPyz5O%2FPqPkhsIXpe%2BsmKuf3%2BBoqbVUmiiWpgBwm%2F2jrF7k81nZGc%2FkHhsyspFdpzLj60rqZX2eWdTBGOOCoyuMlCUSCjgQzGbK2y93PY8Dxi%2FULZAG%2B2xROR%2FE3lnB4HBPJrfxDYw0NnLwAY6pgEG%2FvajnwcY1bm2RDdU5WeaJOKdWieAKH%2FbbzjyphvHAP7TvGs%2BqPDpAx6q63vyqJVzugs4LZarh3%2Bss6BppO%2Fy0Sv8CfBx9tV%2FMGXzcWBIU4pNwjWJXG3qZB0ygsuaG8gwvcxnT0M%2Fzh0r%2BrKUyVdOfZpPaMVGfDY97ez6zL6O9ZKtAr3hINDzxVbFQmaKjC5lgUMHOTQ%2F1X3vFTtw6UrkS1hAElQm&X-Amz-Signature=70b8c1ef9ca1efb1ababe4ae2f99dbd6b6cc7994fcbec13f7e0da0685f3a64ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAKDLPS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFNYhSq2PXB04vMviBez%2Fk4PLXBvFJtOu0hJqRPVLashAiAe4m2HPF9auYW2FoHPvL9LNf4GzZHBG%2BWUvpqs5asPiyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNfQ9salq5Qm3hQ%2FKtwDbHUqwGtFsy%2Fj5hgckkLS46XUaDWasYE1JFurD6%2BkA%2Be69ibEmxtWHA8vW5CxVytvbcorq8qPvzEjujKyfY3czTm2o5%2FTHZnPnbCIR1kcE2nydjoc3SxL6%2FbKbESHhr%2Bz24Knygx0lv6efbpsJW5q5pZ%2BNUD%2FR2O4mwhHbXRGOfUsb5pw1DBAa6R%2Bmf5fPfsoSK6gtNMjHKjGhokyDx9HmHtLbAEeC6%2B6ZRWWu9%2FS94LSmPbp0hYRlqWA2A4Ln1r5HvWajkTlNik4wNNohS2%2FuiODqFK1u03U3T3%2BrDWmFyCW%2BA0c%2FNNbFnVSyJ1fW37k5STou3AtQrZUxEFvEomMsjcaB8ce4acAEAOz7ZwOiezLfQOQrjcUCSNv5pKcEo2p%2BYuj0Tky%2B5JMHLamGWpam1ebbuFfqWu9Kggi%2Fyo6TKxE9JjYXb5SVanmr1pUFGzOF8F4NvpBsOVCgW0t2R%2FKQwQk4rDl11qAujaJqnrxonfoxvG%2BCDwPyz5O%2FPqPkhsIXpe%2BsmKuf3%2BBoqbVUmiiWpgBwm%2F2jrF7k81nZGc%2FkHhsyspFdpzLj60rqZX2eWdTBGOOCoyuMlCUSCjgQzGbK2y93PY8Dxi%2FULZAG%2B2xROR%2FE3lnB4HBPJrfxDYw0NnLwAY6pgEG%2FvajnwcY1bm2RDdU5WeaJOKdWieAKH%2FbbzjyphvHAP7TvGs%2BqPDpAx6q63vyqJVzugs4LZarh3%2Bss6BppO%2Fy0Sv8CfBx9tV%2FMGXzcWBIU4pNwjWJXG3qZB0ygsuaG8gwvcxnT0M%2Fzh0r%2BrKUyVdOfZpPaMVGfDY97ez6zL6O9ZKtAr3hINDzxVbFQmaKjC5lgUMHOTQ%2F1X3vFTtw6UrkS1hAElQm&X-Amz-Signature=92466d940c6229c540daa0eb974ad2d5d42ac1109ae019b4eb3e3870ae4b11d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
