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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFC3YIB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xN7j0xCbrOxJQgd0wTKn2b4jrMlyIi3Uh5vHlfdkYQIgc8QK9B4MnmVUAVAw3tLo7S4R%2B%2BnlwmvuUYCYFrGpf%2FMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVlK53rznhIZOOtLCrcA7x0Uqy7QWxCnOnZjkqmGHQZyYQ62g0avkr1VPaDHsn%2BqdURge09VVD546BSi6F%2FRmPSn%2Fo3%2FzAnJy2aLs6a6wgrIza6NVwP3V9ZRmcB5Jkf8q5K3A3DQ35Xge86m0FzoB4bMv58BtbxcKwGSdISGHBz%2B0jjQOqm%2FQxOaXGmc0EC21Z8nd03cNiJ5Ir7tsj%2ByGguTosRteo8W1bK2j5KSWBw8JKp3B%2FPZFngA6gr1YSmv3CZiiK5P781b30ur2BPPokNsTIIguZEsCYbctO9iwdvtEgdVXGYwBKb0AAwu2pkvGDWxD58XpmVZLbXdw%2Bc1Ua5lSuCIUIr9Yp2R4xUIgQv1IBfK16mR7p%2FOAqy1iZWXxazACR9U39IeAlmY4alN23cCZe1XhAa7ZbKKnasbjnvRDmcttLK7fu3w64%2FE1knVKh0qNKmS1%2FeZ17WzPwhAsk9qB27pNrG2qCnkG5iab7JEA9P4NmB4KXlqRRBDkFLBa50NIaIi%2B9CCeZoNe5k4zte6tp%2BgyHmhuRLoSOqLoOD0%2B%2Ff9KosNVjsvPz6vocKOGcxlkHXFcV8erNSPRlF2Pk78nwIfGBQas0Ba%2F4yn1MNQT81iHTL2cxEiByFG8gVyNXlVbAV%2F0HUjdtoMJfjr8EGOqUBWGUfIo6l7BgJeC5wJCOzc5pUaqdvlvEf4Ta6A7RHTkKCyJzcK8%2B8gdp3GMXKQ38j3tTHHDV4WRIltRCpurzOij3AfgkKyGTW1trgufMFypx55ncIGSdoq6B7xL5jWvXWjv7pHb%2BctuTuBgo0PO33TzAJQ%2Fjd4Uv0hvQ%2B85vwt%2B3UrGfCvd%2FhIOx5C099anDowactx033DL2iUKSJ%2BYQsuFgD7x9e&X-Amz-Signature=ca2f100e8a77cefa298aa22bdd555a4cdec3a5dc4986750e3093e3050a27356b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFC3YIB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xN7j0xCbrOxJQgd0wTKn2b4jrMlyIi3Uh5vHlfdkYQIgc8QK9B4MnmVUAVAw3tLo7S4R%2B%2BnlwmvuUYCYFrGpf%2FMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVlK53rznhIZOOtLCrcA7x0Uqy7QWxCnOnZjkqmGHQZyYQ62g0avkr1VPaDHsn%2BqdURge09VVD546BSi6F%2FRmPSn%2Fo3%2FzAnJy2aLs6a6wgrIza6NVwP3V9ZRmcB5Jkf8q5K3A3DQ35Xge86m0FzoB4bMv58BtbxcKwGSdISGHBz%2B0jjQOqm%2FQxOaXGmc0EC21Z8nd03cNiJ5Ir7tsj%2ByGguTosRteo8W1bK2j5KSWBw8JKp3B%2FPZFngA6gr1YSmv3CZiiK5P781b30ur2BPPokNsTIIguZEsCYbctO9iwdvtEgdVXGYwBKb0AAwu2pkvGDWxD58XpmVZLbXdw%2Bc1Ua5lSuCIUIr9Yp2R4xUIgQv1IBfK16mR7p%2FOAqy1iZWXxazACR9U39IeAlmY4alN23cCZe1XhAa7ZbKKnasbjnvRDmcttLK7fu3w64%2FE1knVKh0qNKmS1%2FeZ17WzPwhAsk9qB27pNrG2qCnkG5iab7JEA9P4NmB4KXlqRRBDkFLBa50NIaIi%2B9CCeZoNe5k4zte6tp%2BgyHmhuRLoSOqLoOD0%2B%2Ff9KosNVjsvPz6vocKOGcxlkHXFcV8erNSPRlF2Pk78nwIfGBQas0Ba%2F4yn1MNQT81iHTL2cxEiByFG8gVyNXlVbAV%2F0HUjdtoMJfjr8EGOqUBWGUfIo6l7BgJeC5wJCOzc5pUaqdvlvEf4Ta6A7RHTkKCyJzcK8%2B8gdp3GMXKQ38j3tTHHDV4WRIltRCpurzOij3AfgkKyGTW1trgufMFypx55ncIGSdoq6B7xL5jWvXWjv7pHb%2BctuTuBgo0PO33TzAJQ%2Fjd4Uv0hvQ%2B85vwt%2B3UrGfCvd%2FhIOx5C099anDowactx033DL2iUKSJ%2BYQsuFgD7x9e&X-Amz-Signature=fdd60ce32e8b13ac78a0f3ae6203255a12306d91ac33d9ebfa3f09c067a6f2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
