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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3K53Z5T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCdDVAnw8CbeH6D4gcbCubZEBmLMDz9ju4eykUvAlkqHwIgJe7yvyEah21hfGXmPSZcsLSEInRd5UjBJqTjkr%2B2sDwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAgUW1WGwOmeA6ptyircA7lPGCW5%2BlqeD8zZ4zAgE92vSb0z7VrhTnmkWFLECEUsZ8%2FsKydraE3VgV319lIedtldGCeUqOdIzTvWX93kje8CaDoue2FfNj159gThgjQRDUB3coAzzAoXlvWBJNQTZv65v09l44WBIEX4tIx7vGugcHEJt1FOezwb4ZYW5VFWETGUOPH7IdEDpa7wmlxOgIzDVHp%2F9JLmM1%2BhSvbvn6xNrMfku4TAGbQOR3dagEqg6Av2dWfNw8ZlcviedE%2FnmiyEuzPNTRyDa1gfJBv%2FimdTOfaGqVX9OpxksuchnJRbegkmU77HGVtf%2B%2BwjNwQe2Qgvbg1db6cC3aHl%2BejKMIumSG6qbW2io9ERWAiK%2FQF9I5yOIYkXYTqmL2Z9xgtm4LGwVBJEf8tne2yW4OJYVfqBEutGUTnavTxL%2FgM8AtpK8bjAp7e%2FgkpB%2BUpuU1nUIfiKrXqWawdTu3PtEBBAcGp61greOC9y2yoVJq7KeArZZ92bF75yIT9utiOIMMrrnb7AlQvZDiWR%2BEkgTrMXJ4CNsraZtGsICsYw08iKV96R5l%2BElLi5WkpSn37p1pcZN81DRWFZxuY1EpQMgIvDBJBH80D7qxVpmaY5V4irUW08eVLPccm1f%2ByQJEXVMOv%2BmMQGOqUBE8bVa489LpEYW3zCwRYEU3zDvDK8Mkkz5VL3k4B8soewUhAvp4QOrdT9awBodF0DRwTlVwruvYCkWyMIEsPUQcsGPvldNdrKX2pCT7WZjNube2%2FHGzrhr9CkiBf%2FiFowuF%2FVhferxFeD%2FMutM%2FAC5p0tHk%2FS3AFMFLno5uvpebMMYi9Voguu2NfWGGkRRVkwNDWTzRfXRGHDHwQG4Oja6GGmlWKP&X-Amz-Signature=d1087fa0273186ea8dcb545fdec178f599b6ef0a77313aba1119d52ec6698598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3K53Z5T%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCdDVAnw8CbeH6D4gcbCubZEBmLMDz9ju4eykUvAlkqHwIgJe7yvyEah21hfGXmPSZcsLSEInRd5UjBJqTjkr%2B2sDwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAgUW1WGwOmeA6ptyircA7lPGCW5%2BlqeD8zZ4zAgE92vSb0z7VrhTnmkWFLECEUsZ8%2FsKydraE3VgV319lIedtldGCeUqOdIzTvWX93kje8CaDoue2FfNj159gThgjQRDUB3coAzzAoXlvWBJNQTZv65v09l44WBIEX4tIx7vGugcHEJt1FOezwb4ZYW5VFWETGUOPH7IdEDpa7wmlxOgIzDVHp%2F9JLmM1%2BhSvbvn6xNrMfku4TAGbQOR3dagEqg6Av2dWfNw8ZlcviedE%2FnmiyEuzPNTRyDa1gfJBv%2FimdTOfaGqVX9OpxksuchnJRbegkmU77HGVtf%2B%2BwjNwQe2Qgvbg1db6cC3aHl%2BejKMIumSG6qbW2io9ERWAiK%2FQF9I5yOIYkXYTqmL2Z9xgtm4LGwVBJEf8tne2yW4OJYVfqBEutGUTnavTxL%2FgM8AtpK8bjAp7e%2FgkpB%2BUpuU1nUIfiKrXqWawdTu3PtEBBAcGp61greOC9y2yoVJq7KeArZZ92bF75yIT9utiOIMMrrnb7AlQvZDiWR%2BEkgTrMXJ4CNsraZtGsICsYw08iKV96R5l%2BElLi5WkpSn37p1pcZN81DRWFZxuY1EpQMgIvDBJBH80D7qxVpmaY5V4irUW08eVLPccm1f%2ByQJEXVMOv%2BmMQGOqUBE8bVa489LpEYW3zCwRYEU3zDvDK8Mkkz5VL3k4B8soewUhAvp4QOrdT9awBodF0DRwTlVwruvYCkWyMIEsPUQcsGPvldNdrKX2pCT7WZjNube2%2FHGzrhr9CkiBf%2FiFowuF%2FVhferxFeD%2FMutM%2FAC5p0tHk%2FS3AFMFLno5uvpebMMYi9Voguu2NfWGGkRRVkwNDWTzRfXRGHDHwQG4Oja6GGmlWKP&X-Amz-Signature=caaf26552f8bf7971e55a75550c3aee03b3426843e5023af2ee3cb02d992ae26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
