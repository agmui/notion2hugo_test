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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CF34PNQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKV2Cc2g9uPfWjpCMUgen15hXlBPG%2Ffm1ybelSI81HZAIgIGn0YuGnjTARLyjQ%2BcnUTBzAzkBTihoI4by%2BVjNo3hsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDOXgmJ8hbcoFdo5PSrcA4Gc%2FvPiZ0AXcFI%2B8OtMqNweHB2Xr6%2BDsSzyrjPsu%2BEGRz%2BVsn2c7dmYIAHxdJAVfViPBmrD4gZJk0F%2F0NJBW1TQJhCje7QpUdmb12ZydY9Qrly6eh2pGove%2FwIdw7Uv9GlyFM8IC%2Bv%2FIvAGxmiJXk3HbhiR9HXnet7Euw4kJjVXlPT1%2Bax14LJy2f5DVJp9J2PrzkpHkt7dLvhmS2D8GB4qQ%2B67Nuzlbp5XAYPySntg8g22RdcS%2F0Pr6MxadGiXgA91%2BXp1iJLWXfxnrnb%2FWwMzs6y5RSJFSnYelnhzBD%2FWZGNf0pF7V9Zd%2B8oBTQO%2BsH4r0erQy4%2FFCxzfQfzELwK%2Fi0tPsYoBX%2BDAfhCqccf%2BuqmqSr3vqhGaCzLeXQxZgVnCLPQ3hYD1ieTax%2FZA5ZJ7P4draqiGFNvs8SR0vjmFrhrm8xvg06dhJ%2BMT8pW%2BGBNq8iWICR%2FUzgWIdNRnkZtgOtOM9HBIP3dLWYBR5MRaIi3k3rZrn20RP4sBuUnQIVzPrgu0KoZRH8zz2SW15WG3MtwrU8s%2BU1IX6Z69qTPD9Mm%2Bzq4c3fTqBHXQvSAVHYTifwPWmV9Hn90LijhSqlKvmpBP1pGK%2F%2BlKGPmJXMiOi7ji7nV8M0rzah7eMIqi%2Br8GOqUBaE5PPO5mRkp1Gl65fYaxXGvHLJifzE%2B26M37gcf12s36GzLp9csuHLLZIcIyv%2FlnVlF1u5Pw2fnaG849EFnQRrkCA19dD3AVoF6ByA4Ww4L1%2FYLX2Lvr5kZHLRU24puTrgeNauPHUkD4gp1W%2FZ6ivcciJCtHcZ%2FUrWQC8TNg3sdXpug7luV0%2FDFJxkw5KPDHcwIF3U1ntueaS5teztX1TtqCxd%2FG&X-Amz-Signature=a1b451b46d74247ad0da6834f4249a4ad1025299263ca27f6eed387e5066f4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CF34PNQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKV2Cc2g9uPfWjpCMUgen15hXlBPG%2Ffm1ybelSI81HZAIgIGn0YuGnjTARLyjQ%2BcnUTBzAzkBTihoI4by%2BVjNo3hsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDOXgmJ8hbcoFdo5PSrcA4Gc%2FvPiZ0AXcFI%2B8OtMqNweHB2Xr6%2BDsSzyrjPsu%2BEGRz%2BVsn2c7dmYIAHxdJAVfViPBmrD4gZJk0F%2F0NJBW1TQJhCje7QpUdmb12ZydY9Qrly6eh2pGove%2FwIdw7Uv9GlyFM8IC%2Bv%2FIvAGxmiJXk3HbhiR9HXnet7Euw4kJjVXlPT1%2Bax14LJy2f5DVJp9J2PrzkpHkt7dLvhmS2D8GB4qQ%2B67Nuzlbp5XAYPySntg8g22RdcS%2F0Pr6MxadGiXgA91%2BXp1iJLWXfxnrnb%2FWwMzs6y5RSJFSnYelnhzBD%2FWZGNf0pF7V9Zd%2B8oBTQO%2BsH4r0erQy4%2FFCxzfQfzELwK%2Fi0tPsYoBX%2BDAfhCqccf%2BuqmqSr3vqhGaCzLeXQxZgVnCLPQ3hYD1ieTax%2FZA5ZJ7P4draqiGFNvs8SR0vjmFrhrm8xvg06dhJ%2BMT8pW%2BGBNq8iWICR%2FUzgWIdNRnkZtgOtOM9HBIP3dLWYBR5MRaIi3k3rZrn20RP4sBuUnQIVzPrgu0KoZRH8zz2SW15WG3MtwrU8s%2BU1IX6Z69qTPD9Mm%2Bzq4c3fTqBHXQvSAVHYTifwPWmV9Hn90LijhSqlKvmpBP1pGK%2F%2BlKGPmJXMiOi7ji7nV8M0rzah7eMIqi%2Br8GOqUBaE5PPO5mRkp1Gl65fYaxXGvHLJifzE%2B26M37gcf12s36GzLp9csuHLLZIcIyv%2FlnVlF1u5Pw2fnaG849EFnQRrkCA19dD3AVoF6ByA4Ww4L1%2FYLX2Lvr5kZHLRU24puTrgeNauPHUkD4gp1W%2FZ6ivcciJCtHcZ%2FUrWQC8TNg3sdXpug7luV0%2FDFJxkw5KPDHcwIF3U1ntueaS5teztX1TtqCxd%2FG&X-Amz-Signature=49789bd3d4d13e22cff7fbc6f4923a84515eec336b72a55f8c0082a373313f80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
