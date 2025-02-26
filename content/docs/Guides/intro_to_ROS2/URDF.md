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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633DJ5YOD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGojnRqDVavOP1X2%2FKmosAQOzBG3xVkqj3KlL4vqNSw4AiApFam0N78GtV%2B3kSSsC4GaQw1hDHbjll2A3Y4j7H39mSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMQWRGkx%2Br%2FxXGZsUCKtwDG7Ff1lgc5uvpLK8UI9TNP4nLvsQgB90VfWv9NpoUSm73abCrWyHCa6RszlzlQ4fEjBfiWRVwSJK1d7%2F1F%2BegCu%2Bjn6NtnVfOcfMM7cMITXp9Y%2Ff7Z8rxQNTJUOpaYS7%2FOJAJyC69sFlo0SyAmokH5O6d3cHNVWTuvLJqrw5TIxsZPXHAPMesiXxLwVLodFCZ9v1dyr8nwm3DA0xwV%2FraAiSTwcycJ%2BwVPCFdjrOOOYAduC3MsP00d%2FjHQc0zPHFz4jpC0GrxJLQZJyIBD3LtKiSsYjVLfxS4H8N9x30TP%2BdRpYt9%2BQzYyBCdIf8vpjNeO7YbKeFH9DAglmhWu%2BXLfMg0sZ5cs11OI8gjr%2FgEStHr%2Fhmz6k6F%2F%2FSPZlp4FvPZrJf7%2BQBrPvddHHaipuEcL0oZY1mx5WmoAYFYvy2vCXiHEjpj87OqepHQ8En9OAEQvM5Tl71Vl5K9T0SaSoJe2u5eaeEg14QWLYsBjeLYH1YWc235rhoBYV8JDJh5L6IKbJ1ZkdQXw6sh95AOcX38Fi07%2FMdHZn57htNGAUjSTPE81BWF4nNgi1zUJCzJS9ZgsKjpPKSwg0Fx9ebU%2BVzGrwT3PZiJ6nOoxGVAvW%2FdJhHQryKlZ55SyJU0Aogwi6H6vQY6pgHgJFkAajfLCYtimQ7w6qb5%2FIozh5BNBQJddB5BKA943%2FWAp4XW8m5bTwf78vm9SsZqKeHQsoBBlPQ84Upa6qc0cvbb7tkZ1bFqZrcGudQnurPBYUWtGxHvzX907vPEVbgL6pvC9PC0Bmo8FBDec7KgZzgRMm7KZSVHiLUjKoX3GAJBCbIGAl0yPIVNP93HlPuyvgTbJd67rBhouLSS2DgQ91%2Fr9uIS&X-Amz-Signature=2e25d1a2777020ec059a69a88b67afb86321774f037e4934f6b380375596784f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633DJ5YOD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGojnRqDVavOP1X2%2FKmosAQOzBG3xVkqj3KlL4vqNSw4AiApFam0N78GtV%2B3kSSsC4GaQw1hDHbjll2A3Y4j7H39mSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMQWRGkx%2Br%2FxXGZsUCKtwDG7Ff1lgc5uvpLK8UI9TNP4nLvsQgB90VfWv9NpoUSm73abCrWyHCa6RszlzlQ4fEjBfiWRVwSJK1d7%2F1F%2BegCu%2Bjn6NtnVfOcfMM7cMITXp9Y%2Ff7Z8rxQNTJUOpaYS7%2FOJAJyC69sFlo0SyAmokH5O6d3cHNVWTuvLJqrw5TIxsZPXHAPMesiXxLwVLodFCZ9v1dyr8nwm3DA0xwV%2FraAiSTwcycJ%2BwVPCFdjrOOOYAduC3MsP00d%2FjHQc0zPHFz4jpC0GrxJLQZJyIBD3LtKiSsYjVLfxS4H8N9x30TP%2BdRpYt9%2BQzYyBCdIf8vpjNeO7YbKeFH9DAglmhWu%2BXLfMg0sZ5cs11OI8gjr%2FgEStHr%2Fhmz6k6F%2F%2FSPZlp4FvPZrJf7%2BQBrPvddHHaipuEcL0oZY1mx5WmoAYFYvy2vCXiHEjpj87OqepHQ8En9OAEQvM5Tl71Vl5K9T0SaSoJe2u5eaeEg14QWLYsBjeLYH1YWc235rhoBYV8JDJh5L6IKbJ1ZkdQXw6sh95AOcX38Fi07%2FMdHZn57htNGAUjSTPE81BWF4nNgi1zUJCzJS9ZgsKjpPKSwg0Fx9ebU%2BVzGrwT3PZiJ6nOoxGVAvW%2FdJhHQryKlZ55SyJU0Aogwi6H6vQY6pgHgJFkAajfLCYtimQ7w6qb5%2FIozh5BNBQJddB5BKA943%2FWAp4XW8m5bTwf78vm9SsZqKeHQsoBBlPQ84Upa6qc0cvbb7tkZ1bFqZrcGudQnurPBYUWtGxHvzX907vPEVbgL6pvC9PC0Bmo8FBDec7KgZzgRMm7KZSVHiLUjKoX3GAJBCbIGAl0yPIVNP93HlPuyvgTbJd67rBhouLSS2DgQ91%2Fr9uIS&X-Amz-Signature=6ee68732450c304cc9727dd60ab141db54ead177321d5ae956517ef94613d127&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
