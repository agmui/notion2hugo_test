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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVFZLHL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3JVmnOh5rsaMgzWm2y5vC9zx5lEKeL2JSJ5J01B3DVAiAi1xDpD1BMCaErIVcNBaJys1vGAAVS%2BMRdosLKVwhMyCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTtKJ7jC76Cep9kBHKtwDWVvGj1tZdfZR2W3IxgAuF4DhhdQC3bgxXQaDJbKdnfB%2BK%2BTWEUn59aJgEPLhtb%2Bexeelv4eReMkGZdgku8l%2BMgrS5mFYE4L9ykXEwFs5uQZ6SlxUx4Ce0ORwWDcHIcfeoiKJg5bWIwv3eOk3F%2BqcSobv8mJYe71S8S3upILD6vi2HMTi8WQZ2ilBR77DL8egAasFArKYk2mazH3DLlxV3EwgBfkJ7bPhtPfu%2FQN5pR%2FPI76Z1PIc7lz77OK%2F9%2BnZSok4dKo6W2kBayDje5dhErISpl3lNvofAstVV2VmkwoBYClzbcWdTDUhmyb8ThomIX6TqsUiVuY%2BTG%2Blgr7gjEJHj6k54mlWiAU8Znn69x9ymqDm%2B8C0JyNspu3FUskLh%2FG2iSxd6GgaPNsCBAlwMqJjKaPV%2BKBifvAWbTENkK2W%2Bcgl4yy10zlGcItdusUEiqtOYqiEi8yXCLBV%2BgIqH%2FFDp50uAjYQKuiuoMzlPjmtOCrD3PpCAOLxqFd9DHhGN%2F2mHZwrcdseNLTBNGazwRYZP9lEGNnmmFGVrHN7ggURPao7LfAoS%2Fkwqk10yAwtPReHnGWppvDykw7TqLLLREkt1CjZxfxmfoEckR56giFAqlTIk872TnAt8%2Bow1qfhvgY6pgFRLKwfFoNwBJdjldCH0ZfLV59inuMDVz%2FGrO6Q1zYdZMb8NCf4JBUIT43ovFuI%2FHpCqvKL0kJHGtbq45ihAL9UBH0WHhyNpcwlkVs7fNgg8yskP1awNL2pLQMFkjuc%2FkbAjorDhA0bIMpZAhNNOFOWKCjBDfWnYSGuAlzjLNl96aBmrbQ2z8G7V6F4PUX4RxgVJNQ0NWs%2FOW%2BxtUW5D9Pu1uozT%2Bpv&X-Amz-Signature=4c864c6a2db4edf46e94ed52fe247e5a9d2f8ff71c9db1bf622d3ccd15fc0575&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVFZLHL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3JVmnOh5rsaMgzWm2y5vC9zx5lEKeL2JSJ5J01B3DVAiAi1xDpD1BMCaErIVcNBaJys1vGAAVS%2BMRdosLKVwhMyCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTtKJ7jC76Cep9kBHKtwDWVvGj1tZdfZR2W3IxgAuF4DhhdQC3bgxXQaDJbKdnfB%2BK%2BTWEUn59aJgEPLhtb%2Bexeelv4eReMkGZdgku8l%2BMgrS5mFYE4L9ykXEwFs5uQZ6SlxUx4Ce0ORwWDcHIcfeoiKJg5bWIwv3eOk3F%2BqcSobv8mJYe71S8S3upILD6vi2HMTi8WQZ2ilBR77DL8egAasFArKYk2mazH3DLlxV3EwgBfkJ7bPhtPfu%2FQN5pR%2FPI76Z1PIc7lz77OK%2F9%2BnZSok4dKo6W2kBayDje5dhErISpl3lNvofAstVV2VmkwoBYClzbcWdTDUhmyb8ThomIX6TqsUiVuY%2BTG%2Blgr7gjEJHj6k54mlWiAU8Znn69x9ymqDm%2B8C0JyNspu3FUskLh%2FG2iSxd6GgaPNsCBAlwMqJjKaPV%2BKBifvAWbTENkK2W%2Bcgl4yy10zlGcItdusUEiqtOYqiEi8yXCLBV%2BgIqH%2FFDp50uAjYQKuiuoMzlPjmtOCrD3PpCAOLxqFd9DHhGN%2F2mHZwrcdseNLTBNGazwRYZP9lEGNnmmFGVrHN7ggURPao7LfAoS%2Fkwqk10yAwtPReHnGWppvDykw7TqLLLREkt1CjZxfxmfoEckR56giFAqlTIk872TnAt8%2Bow1qfhvgY6pgFRLKwfFoNwBJdjldCH0ZfLV59inuMDVz%2FGrO6Q1zYdZMb8NCf4JBUIT43ovFuI%2FHpCqvKL0kJHGtbq45ihAL9UBH0WHhyNpcwlkVs7fNgg8yskP1awNL2pLQMFkjuc%2FkbAjorDhA0bIMpZAhNNOFOWKCjBDfWnYSGuAlzjLNl96aBmrbQ2z8G7V6F4PUX4RxgVJNQ0NWs%2FOW%2BxtUW5D9Pu1uozT%2Bpv&X-Amz-Signature=602fd25e7a0c7d891356ac20ef606011c08ce7f143cbe80cd225396265b5c5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
