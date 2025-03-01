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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPQYVOW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDb1cP%2BqnciNyRHgJva0X2OVu8Oq%2BYUmgW4gG15S05brgIgTZi9BBAQFuEEBvz9CTvtI1pn5MKzqRnS3XtYj3EJsF8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYWt7fYMqZRYmGsNyrcA0IJM78QxgkCjB963QFEvFwv56TPo4Jq95bIeeXEolmZ8%2Bn1urVctrLqbgzRqzab6O%2FGf8kNrmjyAkcp%2FiYRZtKzLUK6L9wJCNC9qIP7P4BV6%2ByiK0RsXLQoMEakdWt%2Fo2DJW4sTrId%2BpJdCviCmMmsk5fLFQOTpejYTOPeZnmQhuQg4DTnB2J0l9ESzJ3p%2BCZNoB%2B0iT01ImLPGzil7TLFQms%2BSjXwVxRYM2PerTx3V2WtSBMHLodM5Yo8idV6fVxwgAUK5FiAFCE1hVNy1mJKYNN%2FW5%2BeGn9%2F%2FBb8d5sxmzKBlxF%2Bjz4eoSekGivo3wmzuHyP%2F1%2BBTG38aZ1Pk3dGd%2BWGtnNr5g79DJLuc99Yue6a4sZXoxLF07%2F9ju1KvmJgnHoYjO9ig%2FuusJm8FJeO9cRlOEKmQKu%2Bu0rTMVkLeJnqq7rMERZeKpowK2DjMqbVS3DTmSIaq0Ohh%2FAmuCVDXCYiQ2nwSpZX2Y%2Bjm0ajz%2FKDTSBbFRpsjdb5QNqk37bsBsRlH6K1UOeFCk1%2FYSR7xEQvsFuFhPq7WrzFbx1kf6HbmSWJhmrYJT0HgdEA7aT%2FbqiiHEEAa8aLF43Ryey2nZ8Y82gtABFuAgnVyFuRfihff2ZhvulWDAkAWML%2FHjb4GOqUBRwXASnnYr4Sx%2FbqBl23P%2BkxrJ0qxOWMTAlA5Ek3DAQEX%2FLla2zUhuESQqELMmWVWkdJLmU4nQXshkXTEhc39o%2FSgi%2B9Vdozb5C4N8IP71i%2BDjmCHHh91h%2FtGjYWCztZDaAcOdGTXykxPX4Lmmz8sVrXvHJaMpznGvl31waMMel8Mqw2YS52LqyHC%2Fp8T2klljZ7vX62Eqd8wOOKQSDTtPRdKJ0MO&X-Amz-Signature=fbd4caf5d9f9001958f69fc1913d028936b9ba441ba4b69128c31511debc3784&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPQYVOW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDb1cP%2BqnciNyRHgJva0X2OVu8Oq%2BYUmgW4gG15S05brgIgTZi9BBAQFuEEBvz9CTvtI1pn5MKzqRnS3XtYj3EJsF8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYWt7fYMqZRYmGsNyrcA0IJM78QxgkCjB963QFEvFwv56TPo4Jq95bIeeXEolmZ8%2Bn1urVctrLqbgzRqzab6O%2FGf8kNrmjyAkcp%2FiYRZtKzLUK6L9wJCNC9qIP7P4BV6%2ByiK0RsXLQoMEakdWt%2Fo2DJW4sTrId%2BpJdCviCmMmsk5fLFQOTpejYTOPeZnmQhuQg4DTnB2J0l9ESzJ3p%2BCZNoB%2B0iT01ImLPGzil7TLFQms%2BSjXwVxRYM2PerTx3V2WtSBMHLodM5Yo8idV6fVxwgAUK5FiAFCE1hVNy1mJKYNN%2FW5%2BeGn9%2F%2FBb8d5sxmzKBlxF%2Bjz4eoSekGivo3wmzuHyP%2F1%2BBTG38aZ1Pk3dGd%2BWGtnNr5g79DJLuc99Yue6a4sZXoxLF07%2F9ju1KvmJgnHoYjO9ig%2FuusJm8FJeO9cRlOEKmQKu%2Bu0rTMVkLeJnqq7rMERZeKpowK2DjMqbVS3DTmSIaq0Ohh%2FAmuCVDXCYiQ2nwSpZX2Y%2Bjm0ajz%2FKDTSBbFRpsjdb5QNqk37bsBsRlH6K1UOeFCk1%2FYSR7xEQvsFuFhPq7WrzFbx1kf6HbmSWJhmrYJT0HgdEA7aT%2FbqiiHEEAa8aLF43Ryey2nZ8Y82gtABFuAgnVyFuRfihff2ZhvulWDAkAWML%2FHjb4GOqUBRwXASnnYr4Sx%2FbqBl23P%2BkxrJ0qxOWMTAlA5Ek3DAQEX%2FLla2zUhuESQqELMmWVWkdJLmU4nQXshkXTEhc39o%2FSgi%2B9Vdozb5C4N8IP71i%2BDjmCHHh91h%2FtGjYWCztZDaAcOdGTXykxPX4Lmmz8sVrXvHJaMpznGvl31waMMel8Mqw2YS52LqyHC%2Fp8T2klljZ7vX62Eqd8wOOKQSDTtPRdKJ0MO&X-Amz-Signature=6ec06555b3ecebfd5dbf64ae69e94f08cadce545ac330b920b5a077cc7fce250&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
