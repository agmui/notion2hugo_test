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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6M32CRY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXuLPFbL1Nmamx8VWNecgKg%2FmJPTLyrdVSWj3PhpPAUwIgJdCyroS6aIXYxJhnaeced5OobUop63NoglkZHrqwXucqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRJoe38aNiRVfmeNSrcAyn3Iz71lqjlJ41URm8WlqiOX40e4o%2BcDrseEuG5SbwgnISAufJGuNzJPY50qkCWkBp4uBtpuKo0vFUZwExuDpTmPNipv0t1JkYesYczs0Urm1JENm2o2DEaqiIVWDJROlAyUbjr6kfamDUCHCTNe5sdiZDkM51RCW3OJB2Ti98SZk35eBatQEL4LoZm8%2Fu0Ja96Gb%2BvHAeclpJx06eyNv0hOZdOw07r9toMwlY2OmSNqHUmrA16pju4q31pISOVJWzS2UmSceGkhjoc2WFBWBX6KVu5ryOYrFNRmUFneIM%2FHHOCxck43FbrtekBaacWpSd2xHqcHMbQOSeRga0QO5n2Z%2FCJhHtY2f8Wp0Oj%2B39lxCkDMwBpdEPCq4oYWYQZymhw4JhHFSYsMtaag91x7EIdEvHzdy%2F%2F9FD6LhjiipD2XY0w3bDVVFYibUOAaMXbPft2WbkxwXjdyrWXMSTfo1t0zgmfSgsg8GZi%2F2BKhmzbqI9r2tVU1i%2BRqSVFvnv7Gq90O%2FDaEi8%2FBT5VbYTjK68EutSy9Mu1c6%2BWTxRQ7%2FfHGiwAw4tnUpoeuuF6dOroux0G7BL9SLVuFktqbnE2CEj4xaRUdx4oceFimnKUj7FjquCCrWKwD5n2quuUMLjr67wGOqUBgSYe1aIhj%2BLA4texgjokCcYVoHEwyuS%2FKCRTN7dzbsqi7pkDCajSfeUwQJoxYN%2BXoSUoNkABLEyq7AxBu9Nu9T3fGVBBrNnraGMCLdY4ZskEE5Mqhf5QJKwvRj8HPsQtRMZsFZ7KGiDYhHqTkWGgWvasOfaglKjC4Arn7HPim7Eg3PONIB745B9%2B26AZbnppIwVi1VtzLru2GyQAR5YM6qAM92fd&X-Amz-Signature=2f39fb0a082c674a0c2e3e18fb2f5eaf2cbbc6f162da9b23a55599ad73e2ce60&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6M32CRY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXuLPFbL1Nmamx8VWNecgKg%2FmJPTLyrdVSWj3PhpPAUwIgJdCyroS6aIXYxJhnaeced5OobUop63NoglkZHrqwXucqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRJoe38aNiRVfmeNSrcAyn3Iz71lqjlJ41URm8WlqiOX40e4o%2BcDrseEuG5SbwgnISAufJGuNzJPY50qkCWkBp4uBtpuKo0vFUZwExuDpTmPNipv0t1JkYesYczs0Urm1JENm2o2DEaqiIVWDJROlAyUbjr6kfamDUCHCTNe5sdiZDkM51RCW3OJB2Ti98SZk35eBatQEL4LoZm8%2Fu0Ja96Gb%2BvHAeclpJx06eyNv0hOZdOw07r9toMwlY2OmSNqHUmrA16pju4q31pISOVJWzS2UmSceGkhjoc2WFBWBX6KVu5ryOYrFNRmUFneIM%2FHHOCxck43FbrtekBaacWpSd2xHqcHMbQOSeRga0QO5n2Z%2FCJhHtY2f8Wp0Oj%2B39lxCkDMwBpdEPCq4oYWYQZymhw4JhHFSYsMtaag91x7EIdEvHzdy%2F%2F9FD6LhjiipD2XY0w3bDVVFYibUOAaMXbPft2WbkxwXjdyrWXMSTfo1t0zgmfSgsg8GZi%2F2BKhmzbqI9r2tVU1i%2BRqSVFvnv7Gq90O%2FDaEi8%2FBT5VbYTjK68EutSy9Mu1c6%2BWTxRQ7%2FfHGiwAw4tnUpoeuuF6dOroux0G7BL9SLVuFktqbnE2CEj4xaRUdx4oceFimnKUj7FjquCCrWKwD5n2quuUMLjr67wGOqUBgSYe1aIhj%2BLA4texgjokCcYVoHEwyuS%2FKCRTN7dzbsqi7pkDCajSfeUwQJoxYN%2BXoSUoNkABLEyq7AxBu9Nu9T3fGVBBrNnraGMCLdY4ZskEE5Mqhf5QJKwvRj8HPsQtRMZsFZ7KGiDYhHqTkWGgWvasOfaglKjC4Arn7HPim7Eg3PONIB745B9%2B26AZbnppIwVi1VtzLru2GyQAR5YM6qAM92fd&X-Amz-Signature=8750c76af25534fe1bd129163d41c57a457c10f52d9424d134cc2a24da95fe65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
