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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I5OWPB6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7xDQKTderpxtxw6udyqxdVOWxYjP2F41LzYYXPBA12QIhAPwmo1xWJyeAd6yK6Yr2lB%2FihUXfy%2BFvCdvYpa0hUmr4Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwPUNyWl5O1WFwHGRUq3APfgRg6sgOcij%2BBdZjsDUqt2G3Ds75umgBK9vktTPgJjyfD%2FymecxPOgPgeq7Iz11e9JKnJ804xVchOzI4LCQNK9tYYFL7sKJcYR40rfMmfXp8wF0RTAIBAa5DGYTETh2inrcGajnyDDC1MFdrtuR%2FANmvyL1shjseBitLRkD7O4PvTjoCUYr0KKES%2FYfqMQVK3kjeFdp9DTuCDe%2FNl2pV4vl60dOqT8hXZsLJZU%2BwgWDIkf7PboTbZolxg3d90SOwrdrOi%2F2ZIcm7cyydPESCmrHahsK8Yyh8w9QBYNF9nZLnJJoO9GBL11Lol9MYhkealMi9qWSOXN8u9haX9Xf1H1AtNlQTyA3JbTXr4xLZ%2FczxC2PnhAJRqsbg21M6JtZBr6g71GS6Iiuw%2B5APY7Wf11GJGbZp3gVYRhtb9vY0FfwYAfiC4LSKGl8ob9vq6HmpPPGCtsWwf2xz6YslSU4WUCTQBx9UcSlm73wC9zVRcvGSPHg2wNmCGp2HR98yOUBKpvkWofZ26Z4SNVo6jUECISHCUFu%2FvLFH2OsiaKZF1JjQGsg6KnqMGUy0fiMOLFVv3GJ8ma5XCbYJgV2oqUrA%2BnZL%2B8V2INHRQIGMICYKI79rwGnH5xoY6bP3CtDDGo6O%2BBjqkAQXjj0%2BuCvluwdo%2BB1pAaOT6Bzu3PXlYKYJpYJRUC5RpE0h2sYyWDgj%2FPf5a9U8serH5S08pDwkiqlDdy0a2ptUyiQh2wN3SS0oU%2Bm5QoyYR6gCJbT35ZYNSNcGn3E69NsE0XeoX5KO4JA4kiOXEJsT1QjcYfwhLJvFY%2FbwDTCFl8k2qo%2BXrBni%2FYhrAWMIB0pqLmIbQGBEEHrCaRD2IIoEDr6Ex&X-Amz-Signature=4a63c3fe8e0f00d916de644af2092db7910867aba269b7eb7cc9c2420339e9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I5OWPB6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7xDQKTderpxtxw6udyqxdVOWxYjP2F41LzYYXPBA12QIhAPwmo1xWJyeAd6yK6Yr2lB%2FihUXfy%2BFvCdvYpa0hUmr4Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwPUNyWl5O1WFwHGRUq3APfgRg6sgOcij%2BBdZjsDUqt2G3Ds75umgBK9vktTPgJjyfD%2FymecxPOgPgeq7Iz11e9JKnJ804xVchOzI4LCQNK9tYYFL7sKJcYR40rfMmfXp8wF0RTAIBAa5DGYTETh2inrcGajnyDDC1MFdrtuR%2FANmvyL1shjseBitLRkD7O4PvTjoCUYr0KKES%2FYfqMQVK3kjeFdp9DTuCDe%2FNl2pV4vl60dOqT8hXZsLJZU%2BwgWDIkf7PboTbZolxg3d90SOwrdrOi%2F2ZIcm7cyydPESCmrHahsK8Yyh8w9QBYNF9nZLnJJoO9GBL11Lol9MYhkealMi9qWSOXN8u9haX9Xf1H1AtNlQTyA3JbTXr4xLZ%2FczxC2PnhAJRqsbg21M6JtZBr6g71GS6Iiuw%2B5APY7Wf11GJGbZp3gVYRhtb9vY0FfwYAfiC4LSKGl8ob9vq6HmpPPGCtsWwf2xz6YslSU4WUCTQBx9UcSlm73wC9zVRcvGSPHg2wNmCGp2HR98yOUBKpvkWofZ26Z4SNVo6jUECISHCUFu%2FvLFH2OsiaKZF1JjQGsg6KnqMGUy0fiMOLFVv3GJ8ma5XCbYJgV2oqUrA%2BnZL%2B8V2INHRQIGMICYKI79rwGnH5xoY6bP3CtDDGo6O%2BBjqkAQXjj0%2BuCvluwdo%2BB1pAaOT6Bzu3PXlYKYJpYJRUC5RpE0h2sYyWDgj%2FPf5a9U8serH5S08pDwkiqlDdy0a2ptUyiQh2wN3SS0oU%2Bm5QoyYR6gCJbT35ZYNSNcGn3E69NsE0XeoX5KO4JA4kiOXEJsT1QjcYfwhLJvFY%2FbwDTCFl8k2qo%2BXrBni%2FYhrAWMIB0pqLmIbQGBEEHrCaRD2IIoEDr6Ex&X-Amz-Signature=447d1693e80ca0ef44d1c4a1803e69496167a42ec1e5965edb4de7d6abe76c20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
