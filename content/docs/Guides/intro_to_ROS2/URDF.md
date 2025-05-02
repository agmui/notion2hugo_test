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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZQDF4V%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3eyZkMe4kEcl3W4t4Xkqs2VROP8cMSLTHWf4LOKGmEgIgJs72dXlHYiXL8JdjebMZ3rAkoPHOKJ7AWAV0KSXzoMUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqlygc%2FKsPMB0Of8CrcA3YN9NCsc3RYt8dYzRP7wD6iNeXAYEfx1XRt%2Fk09E4ULyXhUJiveXxeEarxpwEcTHJGRaNCP5GW46QXTn8DF6Jk17aeQX%2Bhz%2BQ8zSv6MCCyYji0wMGelOHUR1wY9C1mxnBF86rLV0BLr%2Bnf8C7cr3DWD2%2B7EBBoMmHkuFO6qilm6MYYlKdVb5OD1J18QtG4mXqc5yo9r3gqqDNgFBidEg7GFjRIVu8n%2Faz0PkGGO9sPLPrYQTQBI65WsbUqPvwzvS%2FUmVL2Ha1QS%2F7OSeYweqyO%2FGCFdGWlKrFd%2FSo8CjqiokrQjlqBZDO3vzckoZXp8KSvRBcRuDhC9ZHNOVFgvjXfj7cVokwrM3eBAe9Z7TsY1JZFr88Du3MBqGE2x7zxygEDldr1NB0y0PBx0gMHAp%2BvEv%2BGJeD%2FdyLJAr4k%2FoXr3yan5syqgx9tfeU7I2PNkMvczgpPmild3o9QwURh%2Bk9TKs%2B2OuSJ9lC4mnB5gnIJTLW5W4oI2lWrRBdx%2BOAf8d9CS6JgLTuC2Rez%2BRiB9eFA4LppPKNLrrR1xG7fp2sDJBaquKDcRQNbkqPky6SWljxuepCWL4E4rpaayEuE4Zw0gjs8FmvGi4PnIEs7iK0uJLlbPySc0Yn3GdIBBMIrl08AGOqUBgD9V%2Fy3zRMLaiIOmnA5d4Oy8NDz7GMN9e9ksixbJs2Lod6IMNENxTy4%2FzVdVLNvTmZtnKXtOkQ5kfZk8KSdvooSyvmB7uI4EejtTCWTNKj%2BJQX71OPUWRgW48tHf9kcDSo5IZ5n%2B4nN8Urcf3CGDq8Mb48JteBMPO1uWG8EIoSvJLR27RuR4drtGnGh%2FSjnxMc9QsmCDb0UW%2FGljllfkMtl736Fu&X-Amz-Signature=f0e56522c6abf83675ffb2a7dbb7163c360cdb736e0c7e4771c2e8b0996e7c61&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZQDF4V%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3eyZkMe4kEcl3W4t4Xkqs2VROP8cMSLTHWf4LOKGmEgIgJs72dXlHYiXL8JdjebMZ3rAkoPHOKJ7AWAV0KSXzoMUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqlygc%2FKsPMB0Of8CrcA3YN9NCsc3RYt8dYzRP7wD6iNeXAYEfx1XRt%2Fk09E4ULyXhUJiveXxeEarxpwEcTHJGRaNCP5GW46QXTn8DF6Jk17aeQX%2Bhz%2BQ8zSv6MCCyYji0wMGelOHUR1wY9C1mxnBF86rLV0BLr%2Bnf8C7cr3DWD2%2B7EBBoMmHkuFO6qilm6MYYlKdVb5OD1J18QtG4mXqc5yo9r3gqqDNgFBidEg7GFjRIVu8n%2Faz0PkGGO9sPLPrYQTQBI65WsbUqPvwzvS%2FUmVL2Ha1QS%2F7OSeYweqyO%2FGCFdGWlKrFd%2FSo8CjqiokrQjlqBZDO3vzckoZXp8KSvRBcRuDhC9ZHNOVFgvjXfj7cVokwrM3eBAe9Z7TsY1JZFr88Du3MBqGE2x7zxygEDldr1NB0y0PBx0gMHAp%2BvEv%2BGJeD%2FdyLJAr4k%2FoXr3yan5syqgx9tfeU7I2PNkMvczgpPmild3o9QwURh%2Bk9TKs%2B2OuSJ9lC4mnB5gnIJTLW5W4oI2lWrRBdx%2BOAf8d9CS6JgLTuC2Rez%2BRiB9eFA4LppPKNLrrR1xG7fp2sDJBaquKDcRQNbkqPky6SWljxuepCWL4E4rpaayEuE4Zw0gjs8FmvGi4PnIEs7iK0uJLlbPySc0Yn3GdIBBMIrl08AGOqUBgD9V%2Fy3zRMLaiIOmnA5d4Oy8NDz7GMN9e9ksixbJs2Lod6IMNENxTy4%2FzVdVLNvTmZtnKXtOkQ5kfZk8KSdvooSyvmB7uI4EejtTCWTNKj%2BJQX71OPUWRgW48tHf9kcDSo5IZ5n%2B4nN8Urcf3CGDq8Mb48JteBMPO1uWG8EIoSvJLR27RuR4drtGnGh%2FSjnxMc9QsmCDb0UW%2FGljllfkMtl736Fu&X-Amz-Signature=19eda5624cf188076345b2a2d7bb362a6b27821716e14c7caf33e4a657ff7f18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
