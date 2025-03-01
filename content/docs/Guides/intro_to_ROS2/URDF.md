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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6KSMKB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDn740OK%2BPoa3yBFMh5M%2Bi6Lw6WejJvyrty5K8Ga2OExQIhAJ%2FELqinmC63%2Fni61nnhqtkbFixDRMltizXTPlVz8YhCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAOLm0kWo3JVRRAvEq3AP5mNZo%2BRPr63nfRwfgHvtjHN7Jk8k%2FNxVvllD4ZPearUz%2B%2FQ2znaVvn1bByD1CspnGW7vBQNk4BOOrdDgCXWKxPjv3PCD2y%2BzzL3MOaTkbNaf9Ig%2ByBJFFmfQd5Qsu9eT%2B94EcQd8Yuh2DKcn9vZL2AOkQ7yL7P1S2Rc88PHqSggYbg%2FubA6lfaIXcNjeWg2KFDIhZMyR8IB8xLBDEpFJ5G0eN92CBrxRnS0eBsQytenpQ7iGnDvcvpDfAbnVpqX3hnBc11Fq4Z84OCoPXVgv3rVkmSFMzolObVdGihTyAPYjrps2n3v0nAslrqlCEAs9FPeU8IXasS2tHhpetXAsMRuE9XVXW2zw%2BGpvB9bTh4RG3nTejEU9DP2ClSth5LmapZK0DYPfxG4c3wQdGGxmZ6YFfLbAUM6off0kdxnboMk2L0XKixdC%2BIr%2BCR%2F86bosMTRvmUu8j3fHazVi9JHeNX%2BT9rdZ%2FacYFrO6JfhvLA%2Bp8UNj97dkHrYGOhOkviEhPhkO6xZXcqm3DUr7XH1yHlYYb%2FdCWDWc4qBwIYeGJcXimC%2FSWVysdGOvv0kQ8rpc6VyYXpZIOl877NrU7ZkHsycWfwCXiMVexQNbfmpfVJd6QzA%2BEUuT%2FF6QktjDJkIq%2BBjqkAUm5ONb5zAK4fYO6Zc%2FTqDmz73loptKuvlYyEsIcZcce10TeoThIKnsfG7sRWN%2F4Nm0QVtgOhCczx2URd55K8VEFmVYshEYhrMlVxrO8xb6wZUnXvsrsqKsReTl0wk%2BCpPXURcebuw4YrUOHqJXGwM7UOByx284pOtbDf1CXhgav09BNQZBa6PGMVH0QwLBxIYX7CJ8KbK9cIe6H92f%2BcypXBPbj&X-Amz-Signature=2a0a793fc44fa3e301b2f21ceca4d13e02f475ac6e3a2f15a684917264591623&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6KSMKB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDn740OK%2BPoa3yBFMh5M%2Bi6Lw6WejJvyrty5K8Ga2OExQIhAJ%2FELqinmC63%2Fni61nnhqtkbFixDRMltizXTPlVz8YhCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAOLm0kWo3JVRRAvEq3AP5mNZo%2BRPr63nfRwfgHvtjHN7Jk8k%2FNxVvllD4ZPearUz%2B%2FQ2znaVvn1bByD1CspnGW7vBQNk4BOOrdDgCXWKxPjv3PCD2y%2BzzL3MOaTkbNaf9Ig%2ByBJFFmfQd5Qsu9eT%2B94EcQd8Yuh2DKcn9vZL2AOkQ7yL7P1S2Rc88PHqSggYbg%2FubA6lfaIXcNjeWg2KFDIhZMyR8IB8xLBDEpFJ5G0eN92CBrxRnS0eBsQytenpQ7iGnDvcvpDfAbnVpqX3hnBc11Fq4Z84OCoPXVgv3rVkmSFMzolObVdGihTyAPYjrps2n3v0nAslrqlCEAs9FPeU8IXasS2tHhpetXAsMRuE9XVXW2zw%2BGpvB9bTh4RG3nTejEU9DP2ClSth5LmapZK0DYPfxG4c3wQdGGxmZ6YFfLbAUM6off0kdxnboMk2L0XKixdC%2BIr%2BCR%2F86bosMTRvmUu8j3fHazVi9JHeNX%2BT9rdZ%2FacYFrO6JfhvLA%2Bp8UNj97dkHrYGOhOkviEhPhkO6xZXcqm3DUr7XH1yHlYYb%2FdCWDWc4qBwIYeGJcXimC%2FSWVysdGOvv0kQ8rpc6VyYXpZIOl877NrU7ZkHsycWfwCXiMVexQNbfmpfVJd6QzA%2BEUuT%2FF6QktjDJkIq%2BBjqkAUm5ONb5zAK4fYO6Zc%2FTqDmz73loptKuvlYyEsIcZcce10TeoThIKnsfG7sRWN%2F4Nm0QVtgOhCczx2URd55K8VEFmVYshEYhrMlVxrO8xb6wZUnXvsrsqKsReTl0wk%2BCpPXURcebuw4YrUOHqJXGwM7UOByx284pOtbDf1CXhgav09BNQZBa6PGMVH0QwLBxIYX7CJ8KbK9cIe6H92f%2BcypXBPbj&X-Amz-Signature=bf71d9b6b84ea7d25d21d3721b29f33c4869869358a34960d65260426a5554b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
