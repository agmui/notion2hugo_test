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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=ca7787fca83da404c0d7aa5d7e7e1849b1f4f82f97ba54648c203ff29d6f837e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDH46WAQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH88lx7sFOlFl4oKJ5HHQ42jDv8Dtb2EkNSumw7qPDEnAiEAtHwM6ckdYHHufc3RfuiyRRjLFPnrNEDLJ%2ByFRagEgKMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiGBFuH%2BxY2n6YjoCrcAySvGLbtkG8ASKMBD8f6hvrxbw%2FQZ7NUVfsHAw0exGL9ZvVeqaq4rMoqjFLOAWJt7THGo%2BZoHSBGBuWv2PqftZdcocdQJNb7TQsWXMhKqc1pHBp2aE0OHFJ23klWP7PHLf%2Bu7iJXIX3u3dQKKC9%2F7da%2Bq6jWgf8Koovl0REMLbljyX4Eq2MYC%2F0ST6i1kTbwNr3d7QuovWLZQh8dLf1eii8GDn6TYD6J5gPYUy9dQTCdA9OqZ4lN0iAxWQN78Xw9m6y1%2F25MO8lL5ujxxx2djiFhozBwT%2BCL1yGLxunlpMqZf38Lha6%2F%2BDSUN27WjJj0gwfvViGKuZQbsTySzy7u2q%2BsS7mTc2pFLrfxxPQJosXnmFWcEXc4u%2FBEA%2FTCpMLv3HS2SrazbEJ%2BncO%2BBKFmYaiOS5ty0tpUqQv5ZtB0yQUlvL7T1iGdfKbSrjcSkmOBFj97dxMV8Vg2dBXOQ9APIVzR%2FlFZbdLRqRPp25r2jRVG6i38bYZ9hBLzNtxVBWpZFtvj7sYJfP1cXOCpI69yYesYz95MQbO7CxABYxbYIbM8TE8EeKZc2qR415asQu%2FZ0%2Fa%2FrYZ0Z45U25Ff7qTRd7mCLYXFqhFcYUIKVy%2F2YFrydc2IAxqIkG4iADiNMOq10cIGOqUBI%2Fy8Q6oxBw8RZYsuOQKguZHAUqTu7bYvATU8vD4E2RlK8rdlqYdS2SrYWaINZjeaKLWHBKCOQUDrizK709sX6y1kudaZMVDGqLVWvZzqaUjlGh6jTUy8IHOv57cVwIQsUYTghmllQhc4N83L%2FPQQ5U6aw4gSgl29vp3c%2B2IlOavdH4W1tsuemaxxxFC7eaWwdj%2F7eS8Kh3CmN3aHCDWea2oGLIMS&X-Amz-Signature=50946fefb20f5edca6928e4faddafebe712c1af90a4af5c6276521df9099f142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
