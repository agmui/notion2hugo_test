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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4XM3LC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmD68cL5%2F7qdHjVG7YNwyGxScc%2B8SFhaytpPJtz6iVAiBajMZ%2F1PlRNas4EIm6qlmUMKLmKlUGIR9YFj1teB0%2FByqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJ6%2BaY3ahaaPbku0KtwD399RiP6PhTwXrJsiJdzKQkDAuLNssNP2u81efSRcq882lamOmwyynYdM3SBgKRKyNGo9zSTyQb4Fni57hz1w14OAmzMdwLY47705lu%2BPn7HCPoaqnms1Wy%2FFDd9Q5ckpKcwk6b5B6XP6ikRcvYtvID0d9NDQa%2FdwVFIGoE6A8WehqWVdeVWi4xes5fMilcgPXXFolbt%2BCAOD5BIe86%2B4nhsPpXMd6jSugNKjPgCgQv1H6fy64aCUgf%2FgbKymuRuMrOrz6ausLq5TI60jL9mxGKovzjv9yFGv7NwO7fmKOJVPcFn%2B0DH11991St0pV%2Fc24Sc3UYKxvpmDQkcSLFk%2BGnWLIUnVodqdVJrvEpNZ9BATaXgSkMV9dJ1Gy%2BdCqYgUfY3bBQUVvNoMkQ8YrB164wArimnuDCJeBQ%2Br%2Buacwtck9Ovf%2BFVRjckOY0eNxGYwDjI4QwNFVpnkLty%2Fasxcy39jAVggs%2Bz3sGpf7ZRPuOwPG%2FeziNTZo%2B9IvnZjGveVlW3uRWbNPjb7B%2B2AzJ3fYP3PxcYTV7lk%2FBLHxu8lBu8IXzM825uz9HUwaGe1Dr8Fck6XuhGZpc2Kohxte98J6DzE7XnQsJhKlPQ7gfP%2BwUY2WE5BYEk%2B6CTboD8w8O2YwgY6pgGdbgaXDE6Isu0Gu6pauRPKSZPZ6lQ1D8kt4EfrOvYSQZLxWIo2ZRQkYB%2FubxtEB1CeiXkCS9g4UPyz4A7xdOHXOP2texdTJECqikpPxiiYL1P6cmPw1%2B0qXUqezCh7rbjrJJgRqwQRseRLCba4Mls14wr7IFzvjhmyMKIUKMk6cy2ecaRaB92Fvjq81knVV05BUXqQbxVM998le6up5p6ydKfinsrd&X-Amz-Signature=19d5af59b828504b1526d8076dcfacac13ad7718994c5564da66759973b7dabd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4XM3LC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmmD68cL5%2F7qdHjVG7YNwyGxScc%2B8SFhaytpPJtz6iVAiBajMZ%2F1PlRNas4EIm6qlmUMKLmKlUGIR9YFj1teB0%2FByqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJ6%2BaY3ahaaPbku0KtwD399RiP6PhTwXrJsiJdzKQkDAuLNssNP2u81efSRcq882lamOmwyynYdM3SBgKRKyNGo9zSTyQb4Fni57hz1w14OAmzMdwLY47705lu%2BPn7HCPoaqnms1Wy%2FFDd9Q5ckpKcwk6b5B6XP6ikRcvYtvID0d9NDQa%2FdwVFIGoE6A8WehqWVdeVWi4xes5fMilcgPXXFolbt%2BCAOD5BIe86%2B4nhsPpXMd6jSugNKjPgCgQv1H6fy64aCUgf%2FgbKymuRuMrOrz6ausLq5TI60jL9mxGKovzjv9yFGv7NwO7fmKOJVPcFn%2B0DH11991St0pV%2Fc24Sc3UYKxvpmDQkcSLFk%2BGnWLIUnVodqdVJrvEpNZ9BATaXgSkMV9dJ1Gy%2BdCqYgUfY3bBQUVvNoMkQ8YrB164wArimnuDCJeBQ%2Br%2Buacwtck9Ovf%2BFVRjckOY0eNxGYwDjI4QwNFVpnkLty%2Fasxcy39jAVggs%2Bz3sGpf7ZRPuOwPG%2FeziNTZo%2B9IvnZjGveVlW3uRWbNPjb7B%2B2AzJ3fYP3PxcYTV7lk%2FBLHxu8lBu8IXzM825uz9HUwaGe1Dr8Fck6XuhGZpc2Kohxte98J6DzE7XnQsJhKlPQ7gfP%2BwUY2WE5BYEk%2B6CTboD8w8O2YwgY6pgGdbgaXDE6Isu0Gu6pauRPKSZPZ6lQ1D8kt4EfrOvYSQZLxWIo2ZRQkYB%2FubxtEB1CeiXkCS9g4UPyz4A7xdOHXOP2texdTJECqikpPxiiYL1P6cmPw1%2B0qXUqezCh7rbjrJJgRqwQRseRLCba4Mls14wr7IFzvjhmyMKIUKMk6cy2ecaRaB92Fvjq81knVV05BUXqQbxVM998le6up5p6ydKfinsrd&X-Amz-Signature=1d187200de578505bb56bf56ecf8001490864da2b1b6d79fd2e2764efb8e7c79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
