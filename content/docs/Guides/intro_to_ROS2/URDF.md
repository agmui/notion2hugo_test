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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFKTTP6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDPGE%2B5Pr8AT%2FcIUOkqyftPBlkAJjUk7YwOUPkJkaDBQgIgAhp9AV%2BWy%2F5%2B3N%2BLdDqmOHAA6E74lat93B%2BG%2BEquOQYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHCSVPD%2BVUiW3ozw5CrcA0x%2FGKXLAFq1LIG%2FbDsRZlBtdpruRPjvhbq01wh3Se5z%2Fr3XMAbklenc%2FMQxicrC5qiYdudrgPrMtbqiNO%2FV0GrBV4ETBnrwSO7Fpvj%2FOltPk0brm%2FLUVOSNWCGoJZD9I8nT1tfY1Uphjvp4ujNW3JrDvRMhyG6xaNgsNwbhsJQ1fyVBbLeQreijMqDMN7ENOkbz4lTdLnKQN6%2B70luuVxPbYYybQ1W7%2BfXWTlRDYAtsCTr4NNVnrfrg4OYDFULOiTcAuTb1XAlzX9AdSFYR6545%2B3mfT8xEjShg2WoE3vO1jIYazZo0g5D2iitDMX3KXEK6pnT3pp%2BuG%2BoC%2FquAN1Fx3fwC21WFijfw5cv8z1F844OCq6mhL9uPBeIbE7gTANWX8H9fdT05sSTdVrejwV%2Bfy4iSBsMwn5nelGQqLjFgDsFIBw0lyWKrA4vPKUsOeCmvoUMrfeVfel7SIaxNhWHghc8jUzKDWz%2F3NthFvtD67RI2fXyFKx%2F5oXTovafvavtm9n3RHzqZkmg3dTSP5BM7E9D34OEKUkCuNm6H7iAGdU0mGV%2FLByOPr4KEfslw2aUMt2OwXh9tWZq%2Fx%2BNgpJajXpWfcjwj1XeywyagLAo6dZm2A1mpEQIh4tDgMLXc6sIGOqUBfiUukKwWXoK88%2FBMwuoMiYKkAyQJwPjh%2BP6%2BXM429VoP7mUxushCBA60AnRPUrTb%2FyO309mVPoeJtWZ9JcH%2FzhGcAzUi55fJ3T1g3o7eNQ%2BG6gE%2B07CX0IaTF65XMaBg5fhnxVarML0%2BKqOcwqa7V98IHKfHJ%2B0qWZUhyU7%2FjbGD5m9cT02afeDsMIBxF8pouaKwwnYkuOsr%2FEHlWaBl6S2ukh5A&X-Amz-Signature=f6de607665cdc41dd51cda0a55b14a34485601e43622b147ff5b7adff053c079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFKTTP6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDPGE%2B5Pr8AT%2FcIUOkqyftPBlkAJjUk7YwOUPkJkaDBQgIgAhp9AV%2BWy%2F5%2B3N%2BLdDqmOHAA6E74lat93B%2BG%2BEquOQYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHCSVPD%2BVUiW3ozw5CrcA0x%2FGKXLAFq1LIG%2FbDsRZlBtdpruRPjvhbq01wh3Se5z%2Fr3XMAbklenc%2FMQxicrC5qiYdudrgPrMtbqiNO%2FV0GrBV4ETBnrwSO7Fpvj%2FOltPk0brm%2FLUVOSNWCGoJZD9I8nT1tfY1Uphjvp4ujNW3JrDvRMhyG6xaNgsNwbhsJQ1fyVBbLeQreijMqDMN7ENOkbz4lTdLnKQN6%2B70luuVxPbYYybQ1W7%2BfXWTlRDYAtsCTr4NNVnrfrg4OYDFULOiTcAuTb1XAlzX9AdSFYR6545%2B3mfT8xEjShg2WoE3vO1jIYazZo0g5D2iitDMX3KXEK6pnT3pp%2BuG%2BoC%2FquAN1Fx3fwC21WFijfw5cv8z1F844OCq6mhL9uPBeIbE7gTANWX8H9fdT05sSTdVrejwV%2Bfy4iSBsMwn5nelGQqLjFgDsFIBw0lyWKrA4vPKUsOeCmvoUMrfeVfel7SIaxNhWHghc8jUzKDWz%2F3NthFvtD67RI2fXyFKx%2F5oXTovafvavtm9n3RHzqZkmg3dTSP5BM7E9D34OEKUkCuNm6H7iAGdU0mGV%2FLByOPr4KEfslw2aUMt2OwXh9tWZq%2Fx%2BNgpJajXpWfcjwj1XeywyagLAo6dZm2A1mpEQIh4tDgMLXc6sIGOqUBfiUukKwWXoK88%2FBMwuoMiYKkAyQJwPjh%2BP6%2BXM429VoP7mUxushCBA60AnRPUrTb%2FyO309mVPoeJtWZ9JcH%2FzhGcAzUi55fJ3T1g3o7eNQ%2BG6gE%2B07CX0IaTF65XMaBg5fhnxVarML0%2BKqOcwqa7V98IHKfHJ%2B0qWZUhyU7%2FjbGD5m9cT02afeDsMIBxF8pouaKwwnYkuOsr%2FEHlWaBl6S2ukh5A&X-Amz-Signature=b45a8ab3b39287150c44f028c1c1e34997fefa5f604d7e3d42d2a069908f07d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
