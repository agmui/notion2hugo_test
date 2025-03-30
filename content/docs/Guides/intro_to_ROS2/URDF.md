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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PLBNJW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAS0mCn62yjzLnEQZ%2BegTc8I%2BE2U02cu4fSOgKbUHVzZAiEA%2FwCFro1UUHEUlmdxSchiJpMWZsiCohrv5e7v%2FJN2MHoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv7jGNrxbgvTMFCGircA0VTgMBsjnIV8abtA2NUV%2FArqsS2U5bXdq6nWJY5jZKfuYBXn40dngbBY8gDtTWKcGoNA%2BV3iZQGz3gzBDWLDNIsM0EXzaYB1nl%2FGjW8FGMrVi2%2Bwy5pYaQGuGqDCXSFLdu5sDOV4czGQzN1h8wos2OCdO74fGFjoUDVNnpegmsQDvQLBU1PnFg7KPP0eHpODFwU6qmE4WnbYlXL98P5O2Gg3SUNcVUNcaj3%2FnIBHy4V9oAd4RemhNWD3wkDEHQD3LlUxX6L3F%2BzqUMKTeSLW0PKQoOL%2BlJxcCufvekCDuhuY8R6RoMw2ilc9KFEqeXMP9md%2BEFsZO06p6pqET18TkAeQu25wRzZBp2ML7rqZvHtr7ErOMeTwc5LUEgaivc3InaKh7wP0xMlw1w%2Buwj0YRlylJwKlB0rDoPHVwGyW%2Fm0F1JDgE%2FIOjqYGwVCfk4jd2aoA4YxIrlPH%2BFAb20%2FL8Jina27zb%2BtJRH%2BJ5zTlL2cuc8wwfOF9Y9Nw0SaGf9DEsAeANbDPZYtVoM9o6jpONW3izfHhtlooM1ppPnK64hA%2B7qBF174VcfJE2CdcDrwqnBWLssRN1YWztyokNPoVRvRlJZ0GXYGA2YrLvU1s0zTzVV%2FB%2FzwJ5ORPtVWMP6Fp78GOqUBwwKFvRxC3oEWgsANs47i9r5aRukLi%2FS%2BEMaQw%2BQcKq1KpQdTI%2BzEJtR9FJbPQ2Ztty%2Bfk%2B1tnACjUBb9Rtvcng4pndsLsC5XhPX3E2zIFfnN75S9JWqYDBYQ5EsWi1KVPeMXP4XAq3CXIUP2NBZno0PZRf%2FL40odxBPfFy2yjag9hoqbdojcjLgKWku%2Fe679OPZQA1jPhvPmfrNB%2F0HMQDaSbGzk&X-Amz-Signature=f34693ade6647c7e1d1b3028e47ff90a39302d8de67f0981421d0a3c124a8c26&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PLBNJW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAS0mCn62yjzLnEQZ%2BegTc8I%2BE2U02cu4fSOgKbUHVzZAiEA%2FwCFro1UUHEUlmdxSchiJpMWZsiCohrv5e7v%2FJN2MHoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv7jGNrxbgvTMFCGircA0VTgMBsjnIV8abtA2NUV%2FArqsS2U5bXdq6nWJY5jZKfuYBXn40dngbBY8gDtTWKcGoNA%2BV3iZQGz3gzBDWLDNIsM0EXzaYB1nl%2FGjW8FGMrVi2%2Bwy5pYaQGuGqDCXSFLdu5sDOV4czGQzN1h8wos2OCdO74fGFjoUDVNnpegmsQDvQLBU1PnFg7KPP0eHpODFwU6qmE4WnbYlXL98P5O2Gg3SUNcVUNcaj3%2FnIBHy4V9oAd4RemhNWD3wkDEHQD3LlUxX6L3F%2BzqUMKTeSLW0PKQoOL%2BlJxcCufvekCDuhuY8R6RoMw2ilc9KFEqeXMP9md%2BEFsZO06p6pqET18TkAeQu25wRzZBp2ML7rqZvHtr7ErOMeTwc5LUEgaivc3InaKh7wP0xMlw1w%2Buwj0YRlylJwKlB0rDoPHVwGyW%2Fm0F1JDgE%2FIOjqYGwVCfk4jd2aoA4YxIrlPH%2BFAb20%2FL8Jina27zb%2BtJRH%2BJ5zTlL2cuc8wwfOF9Y9Nw0SaGf9DEsAeANbDPZYtVoM9o6jpONW3izfHhtlooM1ppPnK64hA%2B7qBF174VcfJE2CdcDrwqnBWLssRN1YWztyokNPoVRvRlJZ0GXYGA2YrLvU1s0zTzVV%2FB%2FzwJ5ORPtVWMP6Fp78GOqUBwwKFvRxC3oEWgsANs47i9r5aRukLi%2FS%2BEMaQw%2BQcKq1KpQdTI%2BzEJtR9FJbPQ2Ztty%2Bfk%2B1tnACjUBb9Rtvcng4pndsLsC5XhPX3E2zIFfnN75S9JWqYDBYQ5EsWi1KVPeMXP4XAq3CXIUP2NBZno0PZRf%2FL40odxBPfFy2yjag9hoqbdojcjLgKWku%2Fe679OPZQA1jPhvPmfrNB%2F0HMQDaSbGzk&X-Amz-Signature=2e73d04e46c64faa4e08cec7320eaa9fdb35fb555436801b93f1e350c2ca5a85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
