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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3R3R4V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBJlVTBbJryDS3ohPIau3Kbj4%2F2%2BO3nGrZ1%2Fen0PkjttAiAp3d7PETwAD7EPeCToBZQOS%2BrhEdm075JK9VUQJqHJQyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYa3SvJS3LU1VanVzKtwDYzmp6Drt7lNdqm8xJf0lSYwNfhgxsKf9cB5FYNQq5PBp76XFECYsj6o2c%2FYRcVCKUXFgT%2BN40lb5qeAVLA77H7KtQ1hgVBNr0kSf88dobLzOrpXY1pl38JBsPhbASZCHJFYpsb8jarrhz0HGlkAe%2Fc8lCwIrW%2BRHhTmaHm7JUs9l4W7bWwtN5vllXYZOUILvATSx6c9LGT1ioscZGdt6%2FC4ZNmkHMy%2FAKRQ38UMWGqmEjzieCki8ehXHx49mTh9DCK%2B3hrVIIxmpIm02wE%2Fa5x74n6vxJkqlOEjEiog%2FZNQo1e5lXZaiSFueQ8lQfLXcyXl5C%2F9cgIae1fdp0ypPidj8c%2Bg5jLK9zkR2wENuwm%2B2Yaa%2FCazsYxHzSSkvX8TA%2B831kx4635lilH4%2FqxqRPZmG8ydrHA5mRsfuUAvK5GlAKCSVWUr%2BLaUACpKlkmMgGEmxvenSAyP2e2doYzGW%2By7z64fZaHrWbylAstGGuP7qL0JQ8UkGrYa8rIbwmqnTLUiKc0p%2FWqfS%2BoVvEx1ilHrizqLEMP%2BMgiAL5PdoHYxGa4wK3CDuxtoWKyzsYNroTmxmv%2B75pz1vegw8tUdb82W8vBW84uWprvgaNc4B%2BlFoMs2kURF32lhQBpQw%2B%2Fr0vgY6pgEDk1uA76RnLGeR6ExTnuktaE5%2BmzLm%2Bgrv1W2Z4gOm%2FZ0oUUwKKgxeLTMEXqmHisOAJ4svNhKr0LPjd1epM4YC%2B7s7LzATzHqKzoX9Km6TY9DEOFDrGT4d9OP8kiOPscZsCmC%2FgJyw%2Fz1%2BYX77zWAMon%2B3pk5vCYv1l3zd7LaIlQNAiHE6vr5MJ3xaxhcyNSbeoy6pJTl3ECF98oDrAn1j5nWK8nwB&X-Amz-Signature=985e5247e9ede0b9260398d1b1ea5dd08af9e28a9f16afea91120183c949ce26&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3R3R4V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBJlVTBbJryDS3ohPIau3Kbj4%2F2%2BO3nGrZ1%2Fen0PkjttAiAp3d7PETwAD7EPeCToBZQOS%2BrhEdm075JK9VUQJqHJQyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYa3SvJS3LU1VanVzKtwDYzmp6Drt7lNdqm8xJf0lSYwNfhgxsKf9cB5FYNQq5PBp76XFECYsj6o2c%2FYRcVCKUXFgT%2BN40lb5qeAVLA77H7KtQ1hgVBNr0kSf88dobLzOrpXY1pl38JBsPhbASZCHJFYpsb8jarrhz0HGlkAe%2Fc8lCwIrW%2BRHhTmaHm7JUs9l4W7bWwtN5vllXYZOUILvATSx6c9LGT1ioscZGdt6%2FC4ZNmkHMy%2FAKRQ38UMWGqmEjzieCki8ehXHx49mTh9DCK%2B3hrVIIxmpIm02wE%2Fa5x74n6vxJkqlOEjEiog%2FZNQo1e5lXZaiSFueQ8lQfLXcyXl5C%2F9cgIae1fdp0ypPidj8c%2Bg5jLK9zkR2wENuwm%2B2Yaa%2FCazsYxHzSSkvX8TA%2B831kx4635lilH4%2FqxqRPZmG8ydrHA5mRsfuUAvK5GlAKCSVWUr%2BLaUACpKlkmMgGEmxvenSAyP2e2doYzGW%2By7z64fZaHrWbylAstGGuP7qL0JQ8UkGrYa8rIbwmqnTLUiKc0p%2FWqfS%2BoVvEx1ilHrizqLEMP%2BMgiAL5PdoHYxGa4wK3CDuxtoWKyzsYNroTmxmv%2B75pz1vegw8tUdb82W8vBW84uWprvgaNc4B%2BlFoMs2kURF32lhQBpQw%2B%2Fr0vgY6pgEDk1uA76RnLGeR6ExTnuktaE5%2BmzLm%2Bgrv1W2Z4gOm%2FZ0oUUwKKgxeLTMEXqmHisOAJ4svNhKr0LPjd1epM4YC%2B7s7LzATzHqKzoX9Km6TY9DEOFDrGT4d9OP8kiOPscZsCmC%2FgJyw%2Fz1%2BYX77zWAMon%2B3pk5vCYv1l3zd7LaIlQNAiHE6vr5MJ3xaxhcyNSbeoy6pJTl3ECF98oDrAn1j5nWK8nwB&X-Amz-Signature=15fe4c1995f7342ced007a1c380208fcd8edd06c41a20ec6b0528390f1f73657&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
