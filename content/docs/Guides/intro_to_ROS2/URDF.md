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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KZO3O3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6CGCZeOHZv3%2F%2BXHJfxeOXLE4S0J4fq2ER2ANawvOpTAiAdxhBaXYnL6RDCzEDvZnv%2FBfdqbm90FeSqC1Xm39Mboyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMoroTROSWRLfee9MYKtwDINqKe3BTGQ93LyvRrA1WoIRbys%2B3UgRDNwJchm10pMzfWEFpyP2u2fl9RtkW5FaLYlL4ub5g10dQ17d%2BB9kCXVTWvKcBURR1nPx%2F7Z%2FVWEN%2B8RZNvhCrRtNqWvSPKUPZCJiktYwQjAjwdKe1IJUcrFZw56JDdm%2BVsgSj%2FbaSz5nZxjzRMlEKTg94SqhZrWwPhD%2BBxhPqVzHMKCDTgBEO3QpQsMKVMF6m81l1jTv%2F2k1v7VjYFvuvt%2B3UWzBovrGWDr%2F9HTrmXp%2FZsXEMzIvHPVbrC2T%2FGI%2BtA2uaZeSu%2BBKhL1R2AlsQjJ3daqUcflS3DrHLOL9wyFTow85%2B0qvKMPgm7u6bajF47HGQujqa5TJC9zncgUfIo%2FFYlfZUuMy5ZJzEEOBhNPlsTvMqLv8dCU2dcRQW7JpcoGsqh7UdYp3JBJBdbF8eNgDj%2BT7lvrSsXCWc7tQFLdmMl3qZAU3dFai2HLj3Ovn56dxgYn6ah4rozkcfHy%2BInEQMS5DoFyCtz7FojPbBRkclJf1qMIOP80br319ZWmkLvdVC%2BbYXwo6y2i9BE%2BWI7JTuZ8q1Bp5AqNmaGQEJCUprAGbFSI2TsdlTayKxNeygTksolcoGbxS4Iyik22cOnKu0dQcwmdD3vwY6pgEQCb4BJCtSk4GlrJpt1tnDxY4pkKIJ5GStX1AqAOg4z89CcUb9klml%2Ftx3TsSdeA90fg%2F243LryEgZkmXQ8gLoGwmWw4L81JKW0MBq%2FW1u45b1dlFgDrEtLPdK481RxTND731W9nRMLQCyM1gm3FzX3XTv69e5pB2rdU%2BFbdYz15QZaXbu0tpMMsy5ODGD1xcozUKd7eDrU4TiMs%2FJtu7OoNZ1FzWK&X-Amz-Signature=6d167176368fe62b025b6a2402045368f840634a3fa1c1b6b295c88072b36430&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KZO3O3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6CGCZeOHZv3%2F%2BXHJfxeOXLE4S0J4fq2ER2ANawvOpTAiAdxhBaXYnL6RDCzEDvZnv%2FBfdqbm90FeSqC1Xm39Mboyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMoroTROSWRLfee9MYKtwDINqKe3BTGQ93LyvRrA1WoIRbys%2B3UgRDNwJchm10pMzfWEFpyP2u2fl9RtkW5FaLYlL4ub5g10dQ17d%2BB9kCXVTWvKcBURR1nPx%2F7Z%2FVWEN%2B8RZNvhCrRtNqWvSPKUPZCJiktYwQjAjwdKe1IJUcrFZw56JDdm%2BVsgSj%2FbaSz5nZxjzRMlEKTg94SqhZrWwPhD%2BBxhPqVzHMKCDTgBEO3QpQsMKVMF6m81l1jTv%2F2k1v7VjYFvuvt%2B3UWzBovrGWDr%2F9HTrmXp%2FZsXEMzIvHPVbrC2T%2FGI%2BtA2uaZeSu%2BBKhL1R2AlsQjJ3daqUcflS3DrHLOL9wyFTow85%2B0qvKMPgm7u6bajF47HGQujqa5TJC9zncgUfIo%2FFYlfZUuMy5ZJzEEOBhNPlsTvMqLv8dCU2dcRQW7JpcoGsqh7UdYp3JBJBdbF8eNgDj%2BT7lvrSsXCWc7tQFLdmMl3qZAU3dFai2HLj3Ovn56dxgYn6ah4rozkcfHy%2BInEQMS5DoFyCtz7FojPbBRkclJf1qMIOP80br319ZWmkLvdVC%2BbYXwo6y2i9BE%2BWI7JTuZ8q1Bp5AqNmaGQEJCUprAGbFSI2TsdlTayKxNeygTksolcoGbxS4Iyik22cOnKu0dQcwmdD3vwY6pgEQCb4BJCtSk4GlrJpt1tnDxY4pkKIJ5GStX1AqAOg4z89CcUb9klml%2Ftx3TsSdeA90fg%2F243LryEgZkmXQ8gLoGwmWw4L81JKW0MBq%2FW1u45b1dlFgDrEtLPdK481RxTND731W9nRMLQCyM1gm3FzX3XTv69e5pB2rdU%2BFbdYz15QZaXbu0tpMMsy5ODGD1xcozUKd7eDrU4TiMs%2FJtu7OoNZ1FzWK&X-Amz-Signature=ba997b60d855ef2697df90b6662a982e55662ab87f97bd34ae60ab4a23569884&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
