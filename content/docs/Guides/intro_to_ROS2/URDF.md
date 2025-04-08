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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6YSCAC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfo9s1Qemvmv7zubc5Bw3%2BPXJz9yQZu%2Faom1XBYNbMOwIhALJNxAXvEhuzKnMLYX6cFAZU%2BG4rKwAEl5tb6sTdFcu7Kv8DCG8QABoMNjM3NDIzMTgzODA1IgwXIbFFEnfX1mFUYScq3APJQdv1LSgzLa99MJjsGH5a3oe7L%2FEopRF%2BMu%2F18SDY4vfkQ9uySrMtHxGvrlmx7mXz0U3P0ZKNJGAXzbaZe8tFxdlqDBskAC9fxR%2FzsNkyV4LDJZDLep4eNVA2wb7eaSn1xDIi0fzgxAcOisJ%2Bfhe71LFxKM%2BRJFPCYrToMF88DqWeR7jTMMbawWWzAh64tOJJeF6Bm%2Bd4Aci6yV2Z%2BwEfeJrWbwXdhKwVzEsZxRXi5Ta%2FUchN%2FcgMxH58Q3w%2BgGbonMTXa8byg0derEMV2EVzpVOi1y6hbYnhN1M8TOrhv4c6Vn01bPr4XmwjA5hBSxCM4bxWc4LVViZgmRNXF4nz85z5gebKVRJvWFLr3SWWym%2BWSrnIywryMSbiIw0ORIgMJHmuAGyhsH96TVS3IT3PxVJ4MrSuR3zwLXN%2FWwN1XTVWfOiIQPRFWUNRwo3ej61G98fl1J5gv0iwQjuyuqBy%2BRKEIIFRtPHnVKdUxQQuS4x9VuvLcGo7JzN4XuDO1yIPx%2BGTkGaHYFlZSjQ%2Bn47DRPsUdhpH1uWLrcL92KPjS2CPApZqdJTL3KMBeNegOC0ezxtmOfHQjZymOQg8Qqirxx6agFBK22%2FMLDR2OwQSjhQiATrkx9Vees%2BEmjCb7dK%2FBjqkARfby2t9a%2B5lUVnnOW%2FKZfFGrqjQ9hZMiMedTsbrLtJ4ORmelqbLsYTI1paajOPLJ%2BMd7y%2FOSqBz3NrZAIFbGYL4JvBqhmiolfgrN0wgQfDSG8SNXmAoIZ3MIa96LR%2BcC%2FitdXZdyW01WlULSD3d6BbW7Bt4SG0RbVennWGJnQNrfzyxezxKlyIYbzYzb77IOXlWntmw%2BrmAHeEwUsEcZGEmX3ym&X-Amz-Signature=1c6f445aa44b43d7f671325ec2d131b241852d4dce10448f7ec700f32bfafcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F6YSCAC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfo9s1Qemvmv7zubc5Bw3%2BPXJz9yQZu%2Faom1XBYNbMOwIhALJNxAXvEhuzKnMLYX6cFAZU%2BG4rKwAEl5tb6sTdFcu7Kv8DCG8QABoMNjM3NDIzMTgzODA1IgwXIbFFEnfX1mFUYScq3APJQdv1LSgzLa99MJjsGH5a3oe7L%2FEopRF%2BMu%2F18SDY4vfkQ9uySrMtHxGvrlmx7mXz0U3P0ZKNJGAXzbaZe8tFxdlqDBskAC9fxR%2FzsNkyV4LDJZDLep4eNVA2wb7eaSn1xDIi0fzgxAcOisJ%2Bfhe71LFxKM%2BRJFPCYrToMF88DqWeR7jTMMbawWWzAh64tOJJeF6Bm%2Bd4Aci6yV2Z%2BwEfeJrWbwXdhKwVzEsZxRXi5Ta%2FUchN%2FcgMxH58Q3w%2BgGbonMTXa8byg0derEMV2EVzpVOi1y6hbYnhN1M8TOrhv4c6Vn01bPr4XmwjA5hBSxCM4bxWc4LVViZgmRNXF4nz85z5gebKVRJvWFLr3SWWym%2BWSrnIywryMSbiIw0ORIgMJHmuAGyhsH96TVS3IT3PxVJ4MrSuR3zwLXN%2FWwN1XTVWfOiIQPRFWUNRwo3ej61G98fl1J5gv0iwQjuyuqBy%2BRKEIIFRtPHnVKdUxQQuS4x9VuvLcGo7JzN4XuDO1yIPx%2BGTkGaHYFlZSjQ%2Bn47DRPsUdhpH1uWLrcL92KPjS2CPApZqdJTL3KMBeNegOC0ezxtmOfHQjZymOQg8Qqirxx6agFBK22%2FMLDR2OwQSjhQiATrkx9Vees%2BEmjCb7dK%2FBjqkARfby2t9a%2B5lUVnnOW%2FKZfFGrqjQ9hZMiMedTsbrLtJ4ORmelqbLsYTI1paajOPLJ%2BMd7y%2FOSqBz3NrZAIFbGYL4JvBqhmiolfgrN0wgQfDSG8SNXmAoIZ3MIa96LR%2BcC%2FitdXZdyW01WlULSD3d6BbW7Bt4SG0RbVennWGJnQNrfzyxezxKlyIYbzYzb77IOXlWntmw%2BrmAHeEwUsEcZGEmX3ym&X-Amz-Signature=d02a855d1b883b49ec7b4e3549599c1ff14147d8fed7c654ce6083a751bed305&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
