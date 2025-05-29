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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABNIRWF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFib%2B%2B18%2BQvV0XE6JORzh4lw1aNQlNd9YjhuMiGWhtjmAiEAi%2B0jZHt384qwzgiJsEXBEFu7q2PiE6YQPn1T7BZsrUsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1p9iglXl458vmk8yrcA%2FxM5PWVmlJ%2BdhvaqrM5FLQgkddmFVfB1U9tYfGRaFY3cq4IltIe8EZEdXwXBTgZxsgUEjuDiDX5mFCy4rwldHjgUKX%2Bnq65hopL13oXLOqp9R2b5ocBNOoZe56ayuwtEYzrfsz7zDBzKgQ30FY1peOg2Us4WClU6paNVSPMQpmEnHgCq5blgJ0Ct8cNKT5L1T7cewIE7ou0ig%2BjxpVYtjczJD%2BA9BA4x%2BPe3pf0Zzq%2Fg%2Baam%2FZpHJQaKRu8%2ByW58kBn5Cjs8Ueue3%2FUxSOAGFu6QGoei6W%2BLXbYlgQ6HskWYzEwtoU%2BkXc%2FAO3hH8b8Qg0hU4ukdk1yBZkJ8lZkASDQ%2FWSF%2FUYJyzrvL9kAZC4vKgIpWBbUAD5rvwKQzAEYWukF%2Bv7p02OBTlpFpxjF%2Fw3%2BNx%2FISvT%2BXoA%2FdQV%2BtWXJBlACtXdPkY6NfO4kV1QLMiXC%2BA944xdPb0hyJdgtWenRs3ZMdC5uDFKsSe2YlZZSdPpRDDXHCLOBBWdQLhhYbB0Xh9%2FI39iv288%2B5b1O3FbPKG9N0QC6DDO%2Fg43MXWW%2BiqxiDyyR9gb1CREpwKh1L%2FrUwjH4oTb9zjXb41MocP8i5visn9Vhh%2Bxs1X%2ByNcfFZKapu3D9Ok4crD55MLza38EGOqUB7dg%2Bkqe4PQewHM6cRBA5nCuKzlV7E%2Bz0tIlZnQ2QTx6o76kgPs37DCHNMaLvJ4sr8%2FqEAgYCfmbS3f9wcGoRQa0zly%2FAPCofpPB83kRLrb3W6Sg3eFlfFpSfJLUykyEuOb9XnrwgmUNCIM%2F47rFfUQEAmlLXf1doqhlSO14kYUZ8nuEd0B%2FdEpEWRVZkYkp6RaA9SviPQ6g95cqoI98L78OG16%2FA&X-Amz-Signature=62857a843b16ba43b30f54c8bfe0fffdaf4c00e92dd9c0e725dee2a17105b897&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABNIRWF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFib%2B%2B18%2BQvV0XE6JORzh4lw1aNQlNd9YjhuMiGWhtjmAiEAi%2B0jZHt384qwzgiJsEXBEFu7q2PiE6YQPn1T7BZsrUsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1p9iglXl458vmk8yrcA%2FxM5PWVmlJ%2BdhvaqrM5FLQgkddmFVfB1U9tYfGRaFY3cq4IltIe8EZEdXwXBTgZxsgUEjuDiDX5mFCy4rwldHjgUKX%2Bnq65hopL13oXLOqp9R2b5ocBNOoZe56ayuwtEYzrfsz7zDBzKgQ30FY1peOg2Us4WClU6paNVSPMQpmEnHgCq5blgJ0Ct8cNKT5L1T7cewIE7ou0ig%2BjxpVYtjczJD%2BA9BA4x%2BPe3pf0Zzq%2Fg%2Baam%2FZpHJQaKRu8%2ByW58kBn5Cjs8Ueue3%2FUxSOAGFu6QGoei6W%2BLXbYlgQ6HskWYzEwtoU%2BkXc%2FAO3hH8b8Qg0hU4ukdk1yBZkJ8lZkASDQ%2FWSF%2FUYJyzrvL9kAZC4vKgIpWBbUAD5rvwKQzAEYWukF%2Bv7p02OBTlpFpxjF%2Fw3%2BNx%2FISvT%2BXoA%2FdQV%2BtWXJBlACtXdPkY6NfO4kV1QLMiXC%2BA944xdPb0hyJdgtWenRs3ZMdC5uDFKsSe2YlZZSdPpRDDXHCLOBBWdQLhhYbB0Xh9%2FI39iv288%2B5b1O3FbPKG9N0QC6DDO%2Fg43MXWW%2BiqxiDyyR9gb1CREpwKh1L%2FrUwjH4oTb9zjXb41MocP8i5visn9Vhh%2Bxs1X%2ByNcfFZKapu3D9Ok4crD55MLza38EGOqUB7dg%2Bkqe4PQewHM6cRBA5nCuKzlV7E%2Bz0tIlZnQ2QTx6o76kgPs37DCHNMaLvJ4sr8%2FqEAgYCfmbS3f9wcGoRQa0zly%2FAPCofpPB83kRLrb3W6Sg3eFlfFpSfJLUykyEuOb9XnrwgmUNCIM%2F47rFfUQEAmlLXf1doqhlSO14kYUZ8nuEd0B%2FdEpEWRVZkYkp6RaA9SviPQ6g95cqoI98L78OG16%2FA&X-Amz-Signature=1688039612143268e944cd6a9170cc844cdb1653749adbb2c6fb2be65f1a9a63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
