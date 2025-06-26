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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVCKQ3PK%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDCDH9ARBnPEvB2siIPnoF%2FP06mTFvGPqTtSNcCgytpNAiEApPFBcb1lNyAsYW4HF9AhGanJz2qlHkoajW9GDYHQW8Uq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEtussRzJV5h3QTBVSrcA5UXmH%2BgaOhByUxLWwsdWrcnnr7HeuVWQVoe9tuHTUFDJ5gLHY7Mk4raK3ldgc1qL4CUhh7l%2FDVLlkHjsQ9n1C1%2Bamf60TNE7MVYDzSCbHTiX%2BN70offORdISsAkpksqkeG5RLsKiF%2Bfm9UWGgsi5f0shwuic4wi%2BetNV2Zj7m31ExtoL1flFMvQszh%2BfSpZ7r%2BnxY8IxWjSbUHEkT7RjHSPPkohOB8yFirszpQFTmfSfLO0ZejAbKSAqsE4n7amwDZ5dfk8ZBpoth2SSONC7KN%2B9cjwnqzScVtHuKXWLh1FW6lFRRzog9ECZ16GHbYz7IGJj4fhl0KsXMQ8rVP1%2FmuYIb4iTuGIQ6ar0GDXG1Rm%2FmG49oM8x5w9YNXBy453VDNw2UaCyM%2B3r7FOswdh9g3YmEtthBcrbFJKibPayiDyPdUfFYYfvvNM1ceqTcNMfhfy4086ZtY4jJ8EpLm3lLTvoV643NlT%2BdCqxea2ERd0SqNRcHecT0SB1kosGZK%2BW%2Bb3MNd1OlO9Q6LiPEVmYlKo9O373Ufa1GOKf7Ubgc04r8Fqchn4dkjbfIvxaliHAa96ju4DC7yrEJomIgnqjwrXAI%2Bh7g4KpqupAysEg8psB7gaQG%2FMUrHSYahuMMmx88IGOqUBy5A0nXChxpdPiqDlOU%2BbcAf7c4Bd%2BU6I9tpg3SnFGvHooyTDtyGJscJoz%2Ft%2FZ8RTxNSskE7nkDLWi%2Fdlph54IF3OZGE2P0s6UAJH84d%2Fahyz76ceFhyLsVo8zEQ7wwyZBzb6t7Ld29VwkRifYiZb8PgZ0kBJc0pSE6Vj9dL4034Rjw8xZk%2FnYL3IY3HUgX9ghoUUZjH7%2FulyHfojkUD%2BlCZtnQdK&X-Amz-Signature=e56124180506e865666b96b0596fb4ad6e25a1d081ae5f9513a02bbc25a00675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVCKQ3PK%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDCDH9ARBnPEvB2siIPnoF%2FP06mTFvGPqTtSNcCgytpNAiEApPFBcb1lNyAsYW4HF9AhGanJz2qlHkoajW9GDYHQW8Uq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEtussRzJV5h3QTBVSrcA5UXmH%2BgaOhByUxLWwsdWrcnnr7HeuVWQVoe9tuHTUFDJ5gLHY7Mk4raK3ldgc1qL4CUhh7l%2FDVLlkHjsQ9n1C1%2Bamf60TNE7MVYDzSCbHTiX%2BN70offORdISsAkpksqkeG5RLsKiF%2Bfm9UWGgsi5f0shwuic4wi%2BetNV2Zj7m31ExtoL1flFMvQszh%2BfSpZ7r%2BnxY8IxWjSbUHEkT7RjHSPPkohOB8yFirszpQFTmfSfLO0ZejAbKSAqsE4n7amwDZ5dfk8ZBpoth2SSONC7KN%2B9cjwnqzScVtHuKXWLh1FW6lFRRzog9ECZ16GHbYz7IGJj4fhl0KsXMQ8rVP1%2FmuYIb4iTuGIQ6ar0GDXG1Rm%2FmG49oM8x5w9YNXBy453VDNw2UaCyM%2B3r7FOswdh9g3YmEtthBcrbFJKibPayiDyPdUfFYYfvvNM1ceqTcNMfhfy4086ZtY4jJ8EpLm3lLTvoV643NlT%2BdCqxea2ERd0SqNRcHecT0SB1kosGZK%2BW%2Bb3MNd1OlO9Q6LiPEVmYlKo9O373Ufa1GOKf7Ubgc04r8Fqchn4dkjbfIvxaliHAa96ju4DC7yrEJomIgnqjwrXAI%2Bh7g4KpqupAysEg8psB7gaQG%2FMUrHSYahuMMmx88IGOqUBy5A0nXChxpdPiqDlOU%2BbcAf7c4Bd%2BU6I9tpg3SnFGvHooyTDtyGJscJoz%2Ft%2FZ8RTxNSskE7nkDLWi%2Fdlph54IF3OZGE2P0s6UAJH84d%2Fahyz76ceFhyLsVo8zEQ7wwyZBzb6t7Ld29VwkRifYiZb8PgZ0kBJc0pSE6Vj9dL4034Rjw8xZk%2FnYL3IY3HUgX9ghoUUZjH7%2FulyHfojkUD%2BlCZtnQdK&X-Amz-Signature=af35aae12c1a72b0326795a28d8f56f9e6eedf3c59bf51bf42bf0f921915f46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
