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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6Z3QBE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDYQtzMM0EMfoqvA6ikCsj31ZXavmIzEaKP4fI%2Bmsr8bAiBOsoV%2BVcbhL%2BUhT3z53Ogmx0lOFPPpm5V7jlYRzYYZpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMYq4xhWeSkCKrgjjvKtwD5108iLRCxoG5Sa4EFjoCCWk1xOVdXbeisS24%2F5fcBAYs0xhysr2mAorRHKvpj3kVurztVvHy2pRHyL%2BN2qWv%2BdeaB9d%2BAWo%2FwJMW9gy8wiAX6wp0CF1yHMmNcdbPa6tgorGJ3amVg9SoUsqBIMGFNY4cLxvs2sdpEGjjLWJIzq5vycQ46ss1h1qbYVM0qG3tETtSq0otniKBUKMw4Q6U4OypNq7Vj2T5c5ajC6mrT0nWe%2B3e86zRjGeDzJXtXVr5Rwm3WoLyRwF2PlioiHbevmXRxKSGClMU%2FQ4dKC10mjTupafB51ssiOasr8yDPeUqmiJnSDixu2NBW6TZnzzOn3%2BzV2GlW9%2FSeskmo4A5lb226Bdl5j%2FP6SEQnDcw2vtz7bqbXbxMnbMyiZGIbYAZg1L4Y9EXLiGAHG6%2FkJIavB75tHZEv37V2NGLq3tYR63Evsait7eMXk%2F9tpO5MWW3dsnaCiybhOutShL%2FGBZuDyaoUC%2BNm3AXqL%2FZPV%2FmTw8af%2FbpPblZ%2FP%2FflJ2XYdZe0rNc2OUFOCJfxbtnAM8hDAiw5s09hE8MkC2%2FbUf3kQiw4C5XcKyuHLTIYSYV%2B%2BV%2BuH%2FtvtcmZbn0rBQJTFOoZONIrFBuhEurkC4%2Bbucw%2B5rhwAY6pgF1Ytbn76Piv8muhyZ0UJqMiNmYvDEL62%2BtZAAD%2FKZydAkJuZY2jCimpNkr67tCFz%2BF%2BbcrnBhP%2BwvnilSzGeqHeKk0kFhodu4OFmPQBThPK7rmX%2Bms7URDQ6tct6aD8JkgVsvjbqq1TW2SNWBGHoyonhgJhBCXbvQOyc76EqYO2Tvy5%2B5%2FeAwVeDfx7orPAwxpUd4aA5px0xc78%2BvPhYNSPolA%2BgHO&X-Amz-Signature=c194f84962857ff5167374706d6a725366a15b67730a40fae2b0c0a29cba9cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6Z3QBE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDYQtzMM0EMfoqvA6ikCsj31ZXavmIzEaKP4fI%2Bmsr8bAiBOsoV%2BVcbhL%2BUhT3z53Ogmx0lOFPPpm5V7jlYRzYYZpir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMYq4xhWeSkCKrgjjvKtwD5108iLRCxoG5Sa4EFjoCCWk1xOVdXbeisS24%2F5fcBAYs0xhysr2mAorRHKvpj3kVurztVvHy2pRHyL%2BN2qWv%2BdeaB9d%2BAWo%2FwJMW9gy8wiAX6wp0CF1yHMmNcdbPa6tgorGJ3amVg9SoUsqBIMGFNY4cLxvs2sdpEGjjLWJIzq5vycQ46ss1h1qbYVM0qG3tETtSq0otniKBUKMw4Q6U4OypNq7Vj2T5c5ajC6mrT0nWe%2B3e86zRjGeDzJXtXVr5Rwm3WoLyRwF2PlioiHbevmXRxKSGClMU%2FQ4dKC10mjTupafB51ssiOasr8yDPeUqmiJnSDixu2NBW6TZnzzOn3%2BzV2GlW9%2FSeskmo4A5lb226Bdl5j%2FP6SEQnDcw2vtz7bqbXbxMnbMyiZGIbYAZg1L4Y9EXLiGAHG6%2FkJIavB75tHZEv37V2NGLq3tYR63Evsait7eMXk%2F9tpO5MWW3dsnaCiybhOutShL%2FGBZuDyaoUC%2BNm3AXqL%2FZPV%2FmTw8af%2FbpPblZ%2FP%2FflJ2XYdZe0rNc2OUFOCJfxbtnAM8hDAiw5s09hE8MkC2%2FbUf3kQiw4C5XcKyuHLTIYSYV%2B%2BV%2BuH%2FtvtcmZbn0rBQJTFOoZONIrFBuhEurkC4%2Bbucw%2B5rhwAY6pgF1Ytbn76Piv8muhyZ0UJqMiNmYvDEL62%2BtZAAD%2FKZydAkJuZY2jCimpNkr67tCFz%2BF%2BbcrnBhP%2BwvnilSzGeqHeKk0kFhodu4OFmPQBThPK7rmX%2Bms7URDQ6tct6aD8JkgVsvjbqq1TW2SNWBGHoyonhgJhBCXbvQOyc76EqYO2Tvy5%2B5%2FeAwVeDfx7orPAwxpUd4aA5px0xc78%2BvPhYNSPolA%2BgHO&X-Amz-Signature=d7bc837f4a27d794be5584c51f5b1ef8baac25bb540774edaab6fa206bc60159&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
