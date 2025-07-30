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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637PMQJQ5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZIUGXCWt1Lf%2BC30Tw%2BjtwxcSrIf%2FVCiw05tZaNL2aKAiEA5Pmo8e4%2F8C8xeGQ8OmJ%2BI84h84BEBNFgWsj6l64BLQ8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVBmCKiqvw%2BaoSQJCrcAw9cfoZCIBGb3c4%2BjtfRZfT8SwiUnrsRRkfFsY3oXLpH36suHfPY71R%2BPdlZoJNs8NP6XE9VWVNr7vp4N8lZva5ItcrzjFQ8FZBzWVMpZnU0KkMCwi%2FF1VyS4oseOYfOlbjjP76Gfz46PSntSD%2Bi23cF14DvSwpvwZIasdjgk5CIuQU2fw%2B3tn52uDqP60Obybj8pjE%2BU6SyP4zhmEOD6qQ91ejjfrJ3LuxNddTo4fHGvQ7%2BOHQYrJFxBtbBjQWV3A7gIYJMAg4vVfLDERAlMee5wynGkQ3TOgRAva67rZ7Q%2B8ybvDFslL8srqF%2Bg3ylniSMlqWxZLRLqrfYUp5trWltwEeZFSHXDr9Y8fTc9fL%2BbXUBHQcG3mBclLbQWj6w0LP%2Fj9%2FFSuUsrLhQ6979QbEQrGSBO81MZu6YsYUOnTCNVOYpqvAbxmAgFR7dgNyVReQ0KWMdQl44rSgkKFfVIoFtNiM0kG3nocnsep0c6TBCfKOQon6RjWVe%2BKQPCCT2t0e2U1jcjsLpAxY4tI7CdmAmyewMgaxTlPOFBneD%2FShU2pzqBW48rngO3bM2AyuCE8xEb9HZdZZbizYCK3y2X%2BuJGI7wOw%2Fv%2F%2F%2BD0eFFa4mJrcFQ0yqGkR8cE1AwMIjBp8QGOqUB6eUFtS%2BArT4B5BDcnpkjoz8VqCKHm64ONZOm2rcRUGPemlBl%2FUpEyjBZVvWWvcxMzU5RywvP%2B4yR2kzt3a%2Bnef9YPMOYdYAj7QQjo3w1eT%2FzNAHVAdPhtu4QaMp%2Bx0tbvctp0LX1H4denDBGhuG9XKRSmpF%2B8aX3eqc1Pgb6MoT4AWSIoWatodYRhOPh8yr68s%2BcbiYhJkXZm%2FaYRoXmSNic5Yqe&X-Amz-Signature=7f5117a1bb52023e4991af442fc5e1ad1f95b9bf224d56075e10e24c54753fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637PMQJQ5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZIUGXCWt1Lf%2BC30Tw%2BjtwxcSrIf%2FVCiw05tZaNL2aKAiEA5Pmo8e4%2F8C8xeGQ8OmJ%2BI84h84BEBNFgWsj6l64BLQ8qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVBmCKiqvw%2BaoSQJCrcAw9cfoZCIBGb3c4%2BjtfRZfT8SwiUnrsRRkfFsY3oXLpH36suHfPY71R%2BPdlZoJNs8NP6XE9VWVNr7vp4N8lZva5ItcrzjFQ8FZBzWVMpZnU0KkMCwi%2FF1VyS4oseOYfOlbjjP76Gfz46PSntSD%2Bi23cF14DvSwpvwZIasdjgk5CIuQU2fw%2B3tn52uDqP60Obybj8pjE%2BU6SyP4zhmEOD6qQ91ejjfrJ3LuxNddTo4fHGvQ7%2BOHQYrJFxBtbBjQWV3A7gIYJMAg4vVfLDERAlMee5wynGkQ3TOgRAva67rZ7Q%2B8ybvDFslL8srqF%2Bg3ylniSMlqWxZLRLqrfYUp5trWltwEeZFSHXDr9Y8fTc9fL%2BbXUBHQcG3mBclLbQWj6w0LP%2Fj9%2FFSuUsrLhQ6979QbEQrGSBO81MZu6YsYUOnTCNVOYpqvAbxmAgFR7dgNyVReQ0KWMdQl44rSgkKFfVIoFtNiM0kG3nocnsep0c6TBCfKOQon6RjWVe%2BKQPCCT2t0e2U1jcjsLpAxY4tI7CdmAmyewMgaxTlPOFBneD%2FShU2pzqBW48rngO3bM2AyuCE8xEb9HZdZZbizYCK3y2X%2BuJGI7wOw%2Fv%2F%2F%2BD0eFFa4mJrcFQ0yqGkR8cE1AwMIjBp8QGOqUB6eUFtS%2BArT4B5BDcnpkjoz8VqCKHm64ONZOm2rcRUGPemlBl%2FUpEyjBZVvWWvcxMzU5RywvP%2B4yR2kzt3a%2Bnef9YPMOYdYAj7QQjo3w1eT%2FzNAHVAdPhtu4QaMp%2Bx0tbvctp0LX1H4denDBGhuG9XKRSmpF%2B8aX3eqc1Pgb6MoT4AWSIoWatodYRhOPh8yr68s%2BcbiYhJkXZm%2FaYRoXmSNic5Yqe&X-Amz-Signature=c3d762059f728664adc3c560473515cc7f754be6c86b5d18f4fed21c0b815b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
