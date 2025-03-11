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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDJWZLS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICEAvlQyraAj6DHePFNlc%2BYiIFTf5jHTBADMaaVpMO%2FpAiEAqLpKXDpQSiJXvJXKwCz2MCY3i2XNe0bsDXZ0EFLP2GUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlp54%2Ff8r0DI67EGSrcA0r3wAbNrd5gbMKWNNUL9HpJBnyleGfL8ruzEySiJ3HgP%2FGz4PVUwIuLy%2BpqrmbMDC9odX6VAEtD7aEqOmp4jIQlNpef3whA5I1elGCtvpFSaOs%2Ff5hcIaXkFJ2UPm59vA7PuZiNQ2dD9IesZnWNFAXX5ArVHFyCJW%2FyaYiQKL98f7oPiKuWazkfmpNzznq3FN7Ns%2BO3TvdfuctbXSDt4N8sBhaa1uzDtwWj81gjLzauZCnFGpWpX8Tu4V9O5JlTSJMJRlOyFqNf1k5D0bZ2hCbjUo7hBr8bLGNbHa3PZagJ9Ji7SL3b1x1B5YGcqlypp8Th4nIBQaogB%2Bw51uTb1z9vlp1LrTjAvFIvRLQ%2FPkxjHh6ASHHHz89D9Q42tMtqABwtEnXZsSeB765Y5M1dqtuV1yN76eQ3DzRTk09fu%2FQ6%2FJLEMpqNtDDCggE9KcgGXWiQ%2FBePNrnFG6Kq6c%2Fog1uIyH%2BJlj3XdelJxqpjvGPLU%2Bbl4KebPnpiEFE2PQlWGJQnqMKIGeks%2FmM8R%2BoQ6Fhc7Nm6TgSjv2pVPOJnYXSr8UIoCslMFclU%2F54qaGOwwF%2FsVSwBp5bw9SFL45CL2xkNHq9o0upq%2F9OOl0LETh25RAXmi5g%2FfiqHAhUOMI3rwL4GOqUBGdW2mgUFVyKX2mxUbnbkbNYvIZyVwsf4fmKQpF7BiRzSDBln%2FZoR7Gq%2FIAwVMOk3woLFoLAZaqYLmQAu90sIoOMun2rPeguh5cgXKlGCE07Nma57gM5CaWR6NRC1dHc3KUYz6rJsc9E6FMN%2FyMB8%2FBCxjZfMZ6K%2BjmARqqfJWAttE6PdbByLdmInWFnRmLsYXB3Xs6vYOdmEN60YZg1hFyu6Z7hx&X-Amz-Signature=660ed6e227fbb07e49e6d46cdc7dc2b7e9ae169acd9a1847dc03e834cef57ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDJWZLS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICEAvlQyraAj6DHePFNlc%2BYiIFTf5jHTBADMaaVpMO%2FpAiEAqLpKXDpQSiJXvJXKwCz2MCY3i2XNe0bsDXZ0EFLP2GUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlp54%2Ff8r0DI67EGSrcA0r3wAbNrd5gbMKWNNUL9HpJBnyleGfL8ruzEySiJ3HgP%2FGz4PVUwIuLy%2BpqrmbMDC9odX6VAEtD7aEqOmp4jIQlNpef3whA5I1elGCtvpFSaOs%2Ff5hcIaXkFJ2UPm59vA7PuZiNQ2dD9IesZnWNFAXX5ArVHFyCJW%2FyaYiQKL98f7oPiKuWazkfmpNzznq3FN7Ns%2BO3TvdfuctbXSDt4N8sBhaa1uzDtwWj81gjLzauZCnFGpWpX8Tu4V9O5JlTSJMJRlOyFqNf1k5D0bZ2hCbjUo7hBr8bLGNbHa3PZagJ9Ji7SL3b1x1B5YGcqlypp8Th4nIBQaogB%2Bw51uTb1z9vlp1LrTjAvFIvRLQ%2FPkxjHh6ASHHHz89D9Q42tMtqABwtEnXZsSeB765Y5M1dqtuV1yN76eQ3DzRTk09fu%2FQ6%2FJLEMpqNtDDCggE9KcgGXWiQ%2FBePNrnFG6Kq6c%2Fog1uIyH%2BJlj3XdelJxqpjvGPLU%2Bbl4KebPnpiEFE2PQlWGJQnqMKIGeks%2FmM8R%2BoQ6Fhc7Nm6TgSjv2pVPOJnYXSr8UIoCslMFclU%2F54qaGOwwF%2FsVSwBp5bw9SFL45CL2xkNHq9o0upq%2F9OOl0LETh25RAXmi5g%2FfiqHAhUOMI3rwL4GOqUBGdW2mgUFVyKX2mxUbnbkbNYvIZyVwsf4fmKQpF7BiRzSDBln%2FZoR7Gq%2FIAwVMOk3woLFoLAZaqYLmQAu90sIoOMun2rPeguh5cgXKlGCE07Nma57gM5CaWR6NRC1dHc3KUYz6rJsc9E6FMN%2FyMB8%2FBCxjZfMZ6K%2BjmARqqfJWAttE6PdbByLdmInWFnRmLsYXB3Xs6vYOdmEN60YZg1hFyu6Z7hx&X-Amz-Signature=0136f8c8a2f245217b98d39885d60a7a2d21a1b482b183ef7d53833cf0c8b7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
