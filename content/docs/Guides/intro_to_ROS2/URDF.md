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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJY4G7B%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFxRdBUnGBuCXU6jnKQIsBi1UWruiQBSESO5ohKAthThAiEA2mbI5GfgczEF3Hb98YE0M9Ql28fCUQ8NKR%2FODhfCLVIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHuBQpjzfkGqkTJH7yrcA1tm9L2TtB6s0glod1tixPjqZD6C4LtgRIbVxoMOmiO%2FNS5bGADRg6c%2FCzPB%2B%2FlyV5cRbAaHEPiIpN5GNs70ixzpIaH12lGuCeBv1mUrtJT86o7tdVLt9FjGn0NhGrpUFylvj%2FjvvBdFErtB4xo34u4oJ5YfhT8FfVI8%2FLRNOSL0s%2FX56U%2BDg48RQe9%2BoHrQBDqM5rqw4yYP90aqK1%2B8OBoD1QDa0hr%2B3lIXQTEEktBRDjH8brWALMhb6dU9LzJE1Mphrk4rPtI093gEQ7Opgakf8KQNCv0WyGaGxTkzu%2Bkg4ED8FIPrmRAEKcEsV4g%2FM%2Bv4I71FbOUdUfx7gc%2BHlauAUMXNKxyxQFn9r9gZGkQGKOBFzZ9bCuIzD3xGoW1F5F61utVypO0XU2GHwejN8PwBPVurejOQWmyucynPs6CT27NBAfd1Ez%2FNTio%2FAqqQ2xIv69vuzeEphxRU%2B65uedcRWTQLVACrOid3lgDE8UThfHGE1XsQ9R0C9yeNEAiYaFCk9e%2B1yqJ1GWzU2Gvviaxq75zKN67u0DUtrM988aYC13mSaMIf7PbxXIdajBZqkCMJwR6yEdDIQPDrrrN2p2fWprDsYaQoXt7ggm0z4KtMxWEGD8IHGihAng46MK3rqsMGOqUBMk1Es5ZlWUK3VlYA1qZG%2BboPRWFm3gIBl%2B9cxQv%2FL3wYVFBfvH2cLLaITM%2BLB7Rv%2FK8ROqeKZudh4H28aEOZe0s65fumbmax%2F53QK8TAK7lLN57poNM%2BO66M4ZOmSwoUy3XtthAPe1wXJcXCn%2BrQ4LQjthMY%2B%2BrsReNQogQqc0I9wxvu6cXVUO21ZmApMs64GVDICz4BnLfa%2BUxLgfZsPasA2iLW&X-Amz-Signature=699815e3fec05d900fb680542400a4cc7c31dae8f933de9fa1f11c79428c352c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJY4G7B%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFxRdBUnGBuCXU6jnKQIsBi1UWruiQBSESO5ohKAthThAiEA2mbI5GfgczEF3Hb98YE0M9Ql28fCUQ8NKR%2FODhfCLVIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHuBQpjzfkGqkTJH7yrcA1tm9L2TtB6s0glod1tixPjqZD6C4LtgRIbVxoMOmiO%2FNS5bGADRg6c%2FCzPB%2B%2FlyV5cRbAaHEPiIpN5GNs70ixzpIaH12lGuCeBv1mUrtJT86o7tdVLt9FjGn0NhGrpUFylvj%2FjvvBdFErtB4xo34u4oJ5YfhT8FfVI8%2FLRNOSL0s%2FX56U%2BDg48RQe9%2BoHrQBDqM5rqw4yYP90aqK1%2B8OBoD1QDa0hr%2B3lIXQTEEktBRDjH8brWALMhb6dU9LzJE1Mphrk4rPtI093gEQ7Opgakf8KQNCv0WyGaGxTkzu%2Bkg4ED8FIPrmRAEKcEsV4g%2FM%2Bv4I71FbOUdUfx7gc%2BHlauAUMXNKxyxQFn9r9gZGkQGKOBFzZ9bCuIzD3xGoW1F5F61utVypO0XU2GHwejN8PwBPVurejOQWmyucynPs6CT27NBAfd1Ez%2FNTio%2FAqqQ2xIv69vuzeEphxRU%2B65uedcRWTQLVACrOid3lgDE8UThfHGE1XsQ9R0C9yeNEAiYaFCk9e%2B1yqJ1GWzU2Gvviaxq75zKN67u0DUtrM988aYC13mSaMIf7PbxXIdajBZqkCMJwR6yEdDIQPDrrrN2p2fWprDsYaQoXt7ggm0z4KtMxWEGD8IHGihAng46MK3rqsMGOqUBMk1Es5ZlWUK3VlYA1qZG%2BboPRWFm3gIBl%2B9cxQv%2FL3wYVFBfvH2cLLaITM%2BLB7Rv%2FK8ROqeKZudh4H28aEOZe0s65fumbmax%2F53QK8TAK7lLN57poNM%2BO66M4ZOmSwoUy3XtthAPe1wXJcXCn%2BrQ4LQjthMY%2B%2BrsReNQogQqc0I9wxvu6cXVUO21ZmApMs64GVDICz4BnLfa%2BUxLgfZsPasA2iLW&X-Amz-Signature=31e2c843c1caf6e1cbc2dfd54c36b16577baa018cf6c473e26625e08656374bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
