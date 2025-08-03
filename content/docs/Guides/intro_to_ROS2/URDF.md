---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZT6XQHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5iwDqzk2R3vF5IFoSZ79Qv8FvXnjO%2FKvM6Xf1UezQJAiBaXp6%2BXqFjhtVCDkv8yIFni9A%2BHCPFWPewKjVOt83igir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMgjyfRYi8Ja2Ka89mKtwD%2BqbZllvfyNgA%2BosQImzF32thoH9vyY6CiCzHWFiyrSUj4ZOoO4n7Pd951WqLFneSxxIPTHt%2Bp10jt%2FNrk%2FKPltlV7uFeLP%2FfKbHwO9rJHAat%2FPqETb235KeuOD90Q%2F8FNV6objAEp277uYyE1nt%2BorvPP60nH9pK4QeKNUNsB2RmEh9dbWPDIX8Q%2FDPz82zAit8nTLdwaOxyh465IgEfvDU9D0q6zkau4d1XfE5mkQZxfijyARnK06PyMV6CKLDJBz%2FvPbXOHNYWomin7Y2WyiRsW4PSN%2FGs0YgCpkfLtiLQhyvEt1sDhOATP0%2BHLjcRGcVcTLa1IY19ojpFTua3aoEnJFaZS%2FzC%2BvianCub0UDdLNllee2hgCT3rjgWdS9F4D6vaqiAYASNJvqfQUWvgQcvYGsJVBweYz50%2Fyi3%2BRiChkGniLiTW2bVeqgJtJGFrPXnyupHKo%2FUoTd%2BMmtKGTzbTNrhpDqbmhs8HxTHa9sQszTeAp2LS3FFcfMXhuLm5mSXf3O4D5MeKLVeG8rRSS%2BoHbuybrtchF%2FowLkB4ENXDTwKXNRpltaBLYjM3oIiYXsuxm6G0IlMP8pRG6ydbT%2FTBpcPKTggS5WBR8LRTmxWHdAhUPEkO8Nls0swuMO8xAY6pgEcsOYcvaJKY749OcpKiy431EyCiMjUgedakJ3DNJ7fdsg1XZR6kcUamuQv%2Bv83v9WFnqE10N3ureKWqf9qFhaGIN0YbNZMJg4K%2BsdKsg%2B7jecUmQ5475Nnok0kOD9tHGSPPCzSYueJog60tFcI5L%2FFejQCrPPctL%2FwTN26a%2FiR2q1LpQSO3dqi%2Fd4aNotVHUHNLSH3JkzEyPWn1hmdH8sOKoxZaxwC&X-Amz-Signature=449090a9f785af320b35fff439fc8f8754a73238bea6ae20b2649585951ab608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZT6XQHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5iwDqzk2R3vF5IFoSZ79Qv8FvXnjO%2FKvM6Xf1UezQJAiBaXp6%2BXqFjhtVCDkv8yIFni9A%2BHCPFWPewKjVOt83igir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMgjyfRYi8Ja2Ka89mKtwD%2BqbZllvfyNgA%2BosQImzF32thoH9vyY6CiCzHWFiyrSUj4ZOoO4n7Pd951WqLFneSxxIPTHt%2Bp10jt%2FNrk%2FKPltlV7uFeLP%2FfKbHwO9rJHAat%2FPqETb235KeuOD90Q%2F8FNV6objAEp277uYyE1nt%2BorvPP60nH9pK4QeKNUNsB2RmEh9dbWPDIX8Q%2FDPz82zAit8nTLdwaOxyh465IgEfvDU9D0q6zkau4d1XfE5mkQZxfijyARnK06PyMV6CKLDJBz%2FvPbXOHNYWomin7Y2WyiRsW4PSN%2FGs0YgCpkfLtiLQhyvEt1sDhOATP0%2BHLjcRGcVcTLa1IY19ojpFTua3aoEnJFaZS%2FzC%2BvianCub0UDdLNllee2hgCT3rjgWdS9F4D6vaqiAYASNJvqfQUWvgQcvYGsJVBweYz50%2Fyi3%2BRiChkGniLiTW2bVeqgJtJGFrPXnyupHKo%2FUoTd%2BMmtKGTzbTNrhpDqbmhs8HxTHa9sQszTeAp2LS3FFcfMXhuLm5mSXf3O4D5MeKLVeG8rRSS%2BoHbuybrtchF%2FowLkB4ENXDTwKXNRpltaBLYjM3oIiYXsuxm6G0IlMP8pRG6ydbT%2FTBpcPKTggS5WBR8LRTmxWHdAhUPEkO8Nls0swuMO8xAY6pgEcsOYcvaJKY749OcpKiy431EyCiMjUgedakJ3DNJ7fdsg1XZR6kcUamuQv%2Bv83v9WFnqE10N3ureKWqf9qFhaGIN0YbNZMJg4K%2BsdKsg%2B7jecUmQ5475Nnok0kOD9tHGSPPCzSYueJog60tFcI5L%2FFejQCrPPctL%2FwTN26a%2FiR2q1LpQSO3dqi%2Fd4aNotVHUHNLSH3JkzEyPWn1hmdH8sOKoxZaxwC&X-Amz-Signature=4db2c0335726aa8247b98a2371b0a009aac7fbc04c923b370648f75ea71922a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
