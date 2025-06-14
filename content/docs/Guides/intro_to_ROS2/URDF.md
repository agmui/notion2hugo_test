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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55H6HV7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAkIUz7fFOF9o1QnjNujWCnEy2C5eFEzQsxmFfEojptLAiEA0DNGMYdfyPWr%2F5vYI%2BAdBxNPhW%2FCGfkVyxji5TmcedUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJXoPbDIGCL%2FznYuyrcA5Dy8s5sMYbKU9txiFSMSpBtvVF%2BRGRnWsowmd8tDPwpXUTnDHaKMaVkcy11K%2Bla4IbMK6msexEYBSUWnTfMpw6EW4698WoDts9guuNmGbr1%2FiQ2gsyUrTo5qAhedGVUioHFdsjKbJtu1k5X2ZEejnRaDIMkEgp6Nd5tpIyt%2Bx%2Bc2p5Ffxrdo12xpiUSUCUe8F6KCCmINIr%2BKzgqmpD3WhF5xOSrfZIne2LQ4YdSVq7sVahN9BncygxRT71DrTGeIXLJHsmuzOoDY628uYMA6HGQ9YFpIOoKFKJB7%2BVD6JtWv1VpGFmg3WJs3xxTn4WglvQ4iJxfRcOACsGD%2F3yijkNYo%2B1FN4%2BClXuc2VOyVQc%2B2YUkM8h9C2remx3k%2FJjZ1JiwE27x%2F8ANNQLwRi14MeqmU%2F16yNjGDNe6w2fg8Nj56w2sRCHmsAF1Db4VafOKzh7vII4sjXAnQmOFQ6F6mMqtahn1MxOyaxjvZpFF9dQmhZxyWhJcXkHT%2Fvc51cZSKYCrXi8gD4PU%2F5CqRwqZp2RWi7yG3X6nDHa10wm%2BVQ13xm13pgAvESiRPpf6xnKqpZg8NMw7oeTR3wYnjDTngEDKqtqJ2gOLUwfeaVXSmGze31aJG%2FXFGNeRrf2VMPHBtcIGOqUBhAFxmTUTdZPiCgSDyxWgW11B3mVdsIq4sazT4%2FdC1%2BHiLeEV%2B7RZdLa4lnmyRBa06jDch5CZrwD7e7rRtZ45u%2BEEjl9t0j4vrpAsX8ONfgtt96i4zCNtXH%2Bvu5mx6ScSCZc%2FU7taqBUK5evf10O9zRq6jumQicICO%2FgJQW7wfxgCAQ25E%2F5zYrbkCFsZA5o72Gyn46poosMO2dGImV6AQOBt5rfR&X-Amz-Signature=b134d3a78f47029d7096a90c9679317bde5a82cc62df050dbc313f654c09654a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55H6HV7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAkIUz7fFOF9o1QnjNujWCnEy2C5eFEzQsxmFfEojptLAiEA0DNGMYdfyPWr%2F5vYI%2BAdBxNPhW%2FCGfkVyxji5TmcedUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJXoPbDIGCL%2FznYuyrcA5Dy8s5sMYbKU9txiFSMSpBtvVF%2BRGRnWsowmd8tDPwpXUTnDHaKMaVkcy11K%2Bla4IbMK6msexEYBSUWnTfMpw6EW4698WoDts9guuNmGbr1%2FiQ2gsyUrTo5qAhedGVUioHFdsjKbJtu1k5X2ZEejnRaDIMkEgp6Nd5tpIyt%2Bx%2Bc2p5Ffxrdo12xpiUSUCUe8F6KCCmINIr%2BKzgqmpD3WhF5xOSrfZIne2LQ4YdSVq7sVahN9BncygxRT71DrTGeIXLJHsmuzOoDY628uYMA6HGQ9YFpIOoKFKJB7%2BVD6JtWv1VpGFmg3WJs3xxTn4WglvQ4iJxfRcOACsGD%2F3yijkNYo%2B1FN4%2BClXuc2VOyVQc%2B2YUkM8h9C2remx3k%2FJjZ1JiwE27x%2F8ANNQLwRi14MeqmU%2F16yNjGDNe6w2fg8Nj56w2sRCHmsAF1Db4VafOKzh7vII4sjXAnQmOFQ6F6mMqtahn1MxOyaxjvZpFF9dQmhZxyWhJcXkHT%2Fvc51cZSKYCrXi8gD4PU%2F5CqRwqZp2RWi7yG3X6nDHa10wm%2BVQ13xm13pgAvESiRPpf6xnKqpZg8NMw7oeTR3wYnjDTngEDKqtqJ2gOLUwfeaVXSmGze31aJG%2FXFGNeRrf2VMPHBtcIGOqUBhAFxmTUTdZPiCgSDyxWgW11B3mVdsIq4sazT4%2FdC1%2BHiLeEV%2B7RZdLa4lnmyRBa06jDch5CZrwD7e7rRtZ45u%2BEEjl9t0j4vrpAsX8ONfgtt96i4zCNtXH%2Bvu5mx6ScSCZc%2FU7taqBUK5evf10O9zRq6jumQicICO%2FgJQW7wfxgCAQ25E%2F5zYrbkCFsZA5o72Gyn46poosMO2dGImV6AQOBt5rfR&X-Amz-Signature=d6fa893f4e18b5b8c536c3a6c48a99b49ef469280a5f1cdf4cc080a019d40f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
