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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZJ4WUA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmuZb2ZPbJ4ilpb9yMZh%2FbUB1Z7EuKyU2W8bvnvL3PgAiB6vuAMhloEBORdM23JH3BQSHaY%2FCSNGkdjxvoyoEPbeyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMpj0oaqFcf%2FESyuFZKtwD45Vqg6oua1oj4EXJ2X37dnxn0utGG4v4ZKUGmDkCTONePk954APbZh2hVAoqYo2vXdvZppiG2%2BHGWnRWHsFabpeKU7ASFGFhG9QITVTpPR4CQKsVJeqyE9cwpGN%2F2CipgsV4GPKaszMWmvAEBP26%2BeoPXhKb%2Fj560OgqENiHt%2FxZCqTn4npIfnYUqEj%2FeorWttPIdswOSCOkcfTCDR0Cb9wa9vPMM36D9aOjxQsytLGVjIyRrfV7oqd2jT5uaNYnDh9RlqHGefmS1qLDZRSemQPDnn3GzsLMiKq1gUu2NELK%2B8KB5%2FdHKXG%2FFsdu8jnpBs9mQ49zUi%2F1kVVMDd6D%2BGwJK2GD3SMZrD0%2FfsUGWgS9bPN3paeQZNF3Ey6w7nGOP5P01NTmZLu%2FYpy38bwYRCCj12m4eCDnJXJrggyRrv71zYdPA8rDza%2BP2RQV0M3Fh6MjwLAvvDTbvsM2lGBrLBbUAoFAYpO%2BGaqlwFgRK7S2W4cEp3wF5JX%2FdZ1GjkGj0Glyp2LRJzmUthfwshTp8zdGhi0qy2mBz0IzctfLaNsn5LYFNO58AUa4m7kjhDgf2ypfWds6BTuOhhZbUrfVpC4fFMURCxB6clcDFhxULuhmFoOxUfyAlXgQGaQwuL3cvgY6pgEBHS56FvA504MHH%2ByhQsg8d5x7ILGVnO0InQNBjWR21JNjeHlLRlKhaKT1cnMbDHSQqiKPGbHHhDBXsbFz5SXmff%2BpGFQnLSOisPpbX6L3%2FZzXEz9f72gIMvmtZXrhgM%2F%2BmAywNJg7CjLUhvT6f60dwMTqWrDL8BFrNabOFvziD9Gig9nlVES4WhiG4iPLE3VazKMEAaYNURn%2BHZLoHU3Z9z5gp8lQ&X-Amz-Signature=9cd6d65097a4a910bb783c207f9edc3d51c96b6ef80d121191de7303e2673365&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZJ4WUA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmuZb2ZPbJ4ilpb9yMZh%2FbUB1Z7EuKyU2W8bvnvL3PgAiB6vuAMhloEBORdM23JH3BQSHaY%2FCSNGkdjxvoyoEPbeyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMpj0oaqFcf%2FESyuFZKtwD45Vqg6oua1oj4EXJ2X37dnxn0utGG4v4ZKUGmDkCTONePk954APbZh2hVAoqYo2vXdvZppiG2%2BHGWnRWHsFabpeKU7ASFGFhG9QITVTpPR4CQKsVJeqyE9cwpGN%2F2CipgsV4GPKaszMWmvAEBP26%2BeoPXhKb%2Fj560OgqENiHt%2FxZCqTn4npIfnYUqEj%2FeorWttPIdswOSCOkcfTCDR0Cb9wa9vPMM36D9aOjxQsytLGVjIyRrfV7oqd2jT5uaNYnDh9RlqHGefmS1qLDZRSemQPDnn3GzsLMiKq1gUu2NELK%2B8KB5%2FdHKXG%2FFsdu8jnpBs9mQ49zUi%2F1kVVMDd6D%2BGwJK2GD3SMZrD0%2FfsUGWgS9bPN3paeQZNF3Ey6w7nGOP5P01NTmZLu%2FYpy38bwYRCCj12m4eCDnJXJrggyRrv71zYdPA8rDza%2BP2RQV0M3Fh6MjwLAvvDTbvsM2lGBrLBbUAoFAYpO%2BGaqlwFgRK7S2W4cEp3wF5JX%2FdZ1GjkGj0Glyp2LRJzmUthfwshTp8zdGhi0qy2mBz0IzctfLaNsn5LYFNO58AUa4m7kjhDgf2ypfWds6BTuOhhZbUrfVpC4fFMURCxB6clcDFhxULuhmFoOxUfyAlXgQGaQwuL3cvgY6pgEBHS56FvA504MHH%2ByhQsg8d5x7ILGVnO0InQNBjWR21JNjeHlLRlKhaKT1cnMbDHSQqiKPGbHHhDBXsbFz5SXmff%2BpGFQnLSOisPpbX6L3%2FZzXEz9f72gIMvmtZXrhgM%2F%2BmAywNJg7CjLUhvT6f60dwMTqWrDL8BFrNabOFvziD9Gig9nlVES4WhiG4iPLE3VazKMEAaYNURn%2BHZLoHU3Z9z5gp8lQ&X-Amz-Signature=6696022671bd11768ef6c6a69037397a743bb8b5328f28fa123146751c31d70b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
