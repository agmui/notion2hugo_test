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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRHJGMG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9ZKAWwPxrgO2eKVqLU3ydcqwhlXLqs5cZqgDWePFvtAiEAjjAU%2Fl0x1G8HkEO29us4YL0%2B%2Bt08FGuHBnNnTzbU2HYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGgRVMm7AffA6h44VyrcA12AiSzBTLJVEJb8C%2Fjcai57q8j43uACNJCLEa4QojyXNTsw6T9ApV6VLNrxA6VNE2zC9jfqy9NerawYAVOMh6bLRIZ32ksni3nyt9yRDC4W2vOaFAL1JEH7VAJ3qXHEF22vUsLwYsnz5bSnZL1VFbUPO%2FhZbBJuMxknzIPoP%2BcgU5EIv%2Fea7ryWqu5u1QYb5rqEuDazGwfdyiVJH8zs%2BJrgtuwq6vxVwMSU0%2BypTqXwNnCWfRet3cENI1YLlfGa4x%2B0PGIxk%2Bj5DY4wTdr7BfPWNGDoMmlowIx7BYiueKdUNTKuXJiAyyMnBc1SUo7Ub%2BNB2pOLUcDsi25P5CtmlCXoI%2Fsc9NWyfkYboBSg0PlIjBfAvIkhxI7EnGaqI8v4vIVjf7ISvxPgzcGeK%2FgNc8nNA3W7Z%2Br2d0ETPRRaElLeY8lcIY1iqOqWUlQS%2Bi%2FRtNQ28w9BW%2FHey4y3D9Auu%2B%2BFFFkH4g0DKBOF4Bn9bC8iGdz57%2Bzc26oJMFF8gI9fGlpWfxHN7nsRGpMFkArSn5Phjj%2F9VYvIiXc4MqqfdUVpEo1M7J0%2BpulSuZKjo14aLPG%2F71jiuF156yJDuR5H4U487GbObcdNPjzbrEInaxCNUEs2kjrY%2B8YZ4tUTML%2FxucAGOqUB1E4E6ufQastZ7UpKvIm16QwHts%2BTguOPwmMpudXXHub3FWoCDC%2B7GB%2Bn8Gn8%2FVV3QZ1qKKm7eZbL32Cxo1y%2BhybgZK1AfMwB4aw74DIEnvDP1FEs0tIx60LoX4fQn5oOwNtzc5Z6yjsvno63dYD9dR2GCrShqjBY7%2FfKSgPtzKxGxfsoYdq3hK9fwcELZhgJe2Qk4YL%2FdLSpLcFM3fGUexplnLhW&X-Amz-Signature=12690ab1a4d932a51dea3c6a73a09f5abd4691345d94f80cdbda37c8b07cbe9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRHJGMG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9ZKAWwPxrgO2eKVqLU3ydcqwhlXLqs5cZqgDWePFvtAiEAjjAU%2Fl0x1G8HkEO29us4YL0%2B%2Bt08FGuHBnNnTzbU2HYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGgRVMm7AffA6h44VyrcA12AiSzBTLJVEJb8C%2Fjcai57q8j43uACNJCLEa4QojyXNTsw6T9ApV6VLNrxA6VNE2zC9jfqy9NerawYAVOMh6bLRIZ32ksni3nyt9yRDC4W2vOaFAL1JEH7VAJ3qXHEF22vUsLwYsnz5bSnZL1VFbUPO%2FhZbBJuMxknzIPoP%2BcgU5EIv%2Fea7ryWqu5u1QYb5rqEuDazGwfdyiVJH8zs%2BJrgtuwq6vxVwMSU0%2BypTqXwNnCWfRet3cENI1YLlfGa4x%2B0PGIxk%2Bj5DY4wTdr7BfPWNGDoMmlowIx7BYiueKdUNTKuXJiAyyMnBc1SUo7Ub%2BNB2pOLUcDsi25P5CtmlCXoI%2Fsc9NWyfkYboBSg0PlIjBfAvIkhxI7EnGaqI8v4vIVjf7ISvxPgzcGeK%2FgNc8nNA3W7Z%2Br2d0ETPRRaElLeY8lcIY1iqOqWUlQS%2Bi%2FRtNQ28w9BW%2FHey4y3D9Auu%2B%2BFFFkH4g0DKBOF4Bn9bC8iGdz57%2Bzc26oJMFF8gI9fGlpWfxHN7nsRGpMFkArSn5Phjj%2F9VYvIiXc4MqqfdUVpEo1M7J0%2BpulSuZKjo14aLPG%2F71jiuF156yJDuR5H4U487GbObcdNPjzbrEInaxCNUEs2kjrY%2B8YZ4tUTML%2FxucAGOqUB1E4E6ufQastZ7UpKvIm16QwHts%2BTguOPwmMpudXXHub3FWoCDC%2B7GB%2Bn8Gn8%2FVV3QZ1qKKm7eZbL32Cxo1y%2BhybgZK1AfMwB4aw74DIEnvDP1FEs0tIx60LoX4fQn5oOwNtzc5Z6yjsvno63dYD9dR2GCrShqjBY7%2FfKSgPtzKxGxfsoYdq3hK9fwcELZhgJe2Qk4YL%2FdLSpLcFM3fGUexplnLhW&X-Amz-Signature=25b0cd43bc32539b9b49e4e5fca97ee82c8fd9c092e5f4fbf8b8d3841e6be190&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
