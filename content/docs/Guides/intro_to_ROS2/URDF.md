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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDLEHTI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjZJq4BpfD3M8h%2FmlC7vPMkVh9vM%2BSSEqRMDIB8QJgVAiEA%2BwGGdUCXkTEXhCkSdrtnLFt1JbN%2B3jJrhDZGaq1DA%2FEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnUAbS%2B%2FPrUf6zm2ircA8BDoLsbTyCLrNpeelVfMa%2FVEJDYbjNTJQe9JN8n%2Fdx50PxaXl6rNXprfcVWO7CBjLvn%2Bo4Je%2BxjdPb48Vm0rfVx7xOIErwO1pwsZoAc6gtCdJXY60GqfRIjkkj%2Ftbi7M2E9xxwM4qi4R3OKX6PApmg1PzxQbi%2FYm5%2FcP4zmzFAlbPYKyeq5j0QId%2FokRO5co9myvZMfy%2BXXXCSfrl9v9IrUmYH0qbLj5ftGAo2ICg8gWzKubUqN4BvMR%2F%2FN0xdtVdgnHaI49xhg0nomxmuF0JDPMJD20yLByFUmQ%2B9to8SkJCm5hskeT0NLhKtzujB44%2BZDdU1OLFS5bYM67SSemP%2BZzQ%2BNLfx1CYxDljX9WKRIx6TClTlzelgShFsTbC6%2BlL4DpD51vhWFg74B5WJe7uSKAjDAog06whORUqidh%2BDLBQI3G6T%2B6E5VvqGQN2e0E7nWBVCJ0geA0QiwsdnX39wHMov%2Bt4t0%2B3Qzw9PedFWonkw44HXI25X9frP9xygDZFVfcd%2FOU%2BxQNU0mAMPOs0zrgw1Hhp%2FNlRFu6I9FhxQifLxJVIR%2Fj2987MMHV49kRrqJ7A2vEB5dVhteqGh1xC0pca0e4Xm9YC0msMX0Rmi7jMF3Qv7SB7wcJEQKMM3b4MEGOqUBJa3NueOm0mgo0kA9ArR%2Fn%2FAHc6Lm5Y8lbyRIuPPsVw0Mj%2FuXrmPFRaZQWWLliqIt1HffA7hRPfg5OwoU2%2FElfCLH8g79lc%2BuketRO7%2BFUUnnn6CTnd2B8F1LCFpUn%2Bis5un7knip9JXU1tZgYtLzUjktABID3hjtyaltnb9WJxHPzKTohD%2FhvIMgIz3OlBoZnlElXLmcGzmVUosi%2FVwkTSGhYreq&X-Amz-Signature=df4a4f2457985a0eca3b369eecbec0b9a96666d446c7332ae4a01ae6f84e5510&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDLEHTI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjZJq4BpfD3M8h%2FmlC7vPMkVh9vM%2BSSEqRMDIB8QJgVAiEA%2BwGGdUCXkTEXhCkSdrtnLFt1JbN%2B3jJrhDZGaq1DA%2FEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnUAbS%2B%2FPrUf6zm2ircA8BDoLsbTyCLrNpeelVfMa%2FVEJDYbjNTJQe9JN8n%2Fdx50PxaXl6rNXprfcVWO7CBjLvn%2Bo4Je%2BxjdPb48Vm0rfVx7xOIErwO1pwsZoAc6gtCdJXY60GqfRIjkkj%2Ftbi7M2E9xxwM4qi4R3OKX6PApmg1PzxQbi%2FYm5%2FcP4zmzFAlbPYKyeq5j0QId%2FokRO5co9myvZMfy%2BXXXCSfrl9v9IrUmYH0qbLj5ftGAo2ICg8gWzKubUqN4BvMR%2F%2FN0xdtVdgnHaI49xhg0nomxmuF0JDPMJD20yLByFUmQ%2B9to8SkJCm5hskeT0NLhKtzujB44%2BZDdU1OLFS5bYM67SSemP%2BZzQ%2BNLfx1CYxDljX9WKRIx6TClTlzelgShFsTbC6%2BlL4DpD51vhWFg74B5WJe7uSKAjDAog06whORUqidh%2BDLBQI3G6T%2B6E5VvqGQN2e0E7nWBVCJ0geA0QiwsdnX39wHMov%2Bt4t0%2B3Qzw9PedFWonkw44HXI25X9frP9xygDZFVfcd%2FOU%2BxQNU0mAMPOs0zrgw1Hhp%2FNlRFu6I9FhxQifLxJVIR%2Fj2987MMHV49kRrqJ7A2vEB5dVhteqGh1xC0pca0e4Xm9YC0msMX0Rmi7jMF3Qv7SB7wcJEQKMM3b4MEGOqUBJa3NueOm0mgo0kA9ArR%2Fn%2FAHc6Lm5Y8lbyRIuPPsVw0Mj%2FuXrmPFRaZQWWLliqIt1HffA7hRPfg5OwoU2%2FElfCLH8g79lc%2BuketRO7%2BFUUnnn6CTnd2B8F1LCFpUn%2Bis5un7knip9JXU1tZgYtLzUjktABID3hjtyaltnb9WJxHPzKTohD%2FhvIMgIz3OlBoZnlElXLmcGzmVUosi%2FVwkTSGhYreq&X-Amz-Signature=37dd7aa27a9217d88198851ab84ee142ee8b24c9362ad94f6cb6a41c227127c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
