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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPBID2B%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE5TTi9aIselVPGAuzWy%2By7gA1EfIbHD76weMCe8nxGGAiEA%2Bo%2FiflCXooIuHVoPLOSSnsrst9uLvJblsWmMEzFH8fAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNySReNIQ9WOxBRZuSrcAwVcnhUKSWVk9RdzxMpUTN15CK7OHhliTMECW27OS03ANx4GBd7F0bDgzC5lSaatqsvhRiUNPptv3GCPbFrwgR2PEo2xDr9uvdESwYGUKeqxfGXyscyTzA7tYALBpjxx4Jy1f7ZPfzzIPn67TOKZs%2FqYlf1nEdQ6vJJKzg4SfBIpglhtO9NqUWWp%2F6TQrhVWqdN60%2FvuUPtlavSTM%2B%2BjK9K2Oj1Rb7i9eqjG%2Bzl2foIW52v5tuFQREEwRuQWlrXAe4%2BrW8%2FKBmEYkTq7H%2BTqT2Kpox5uODAik2hjHXlzrhqARIbUwdmFwiGGHqHaZwa9cw3KupLpU%2FSwzCxjiJLmJXDPeByNV1z%2Fn05OG%2B%2FylXBLM6dZPQPw3ZT5w4RqE4BsbzBNXzjN6VE5RjSsB7PLJqpUSAquOl5mxI83vFueYBdz2Eo5srGC4gbHopwgk3jfRvFFZ3Yu3TTz1hAcxK6rMre8dlPven5ISilki%2BSTgyNl6nbFEpc8Hp8Xx8SD5liZEwJO1lRuY2rZleYcpGpwuPM7kyQ294j4TCea4JzeRZQcdKLiMPuRYBGvkHWfHGfdc6P26UBuMq7Mtrl8hnMNcizbgX0bcTHtujLOUv1GVEr5PULcvlemiRLrZPCsML%2F9xb0GOqUBlOR0JIyajJp5Zc1BpUmiXe6A4uqp3XmniYrcrsgTXuff5KFcrlEk3NcHnXjY4BajkUn%2FGt4lguDk%2Fox36pFn9P2yl31UXqb70OkQXtxeziN3t1un5z05J4LbRGontQQP3M%2Bteng%2BrNviI5cumlrZRaArGCiRXjbAE9%2FZXtFNPWqgJ%2BZ8%2BdIvJb2CGMHkKfi3cnW560NRBW0RtsmXk5e7PegbINyq&X-Amz-Signature=dce00e0cbf76b6bf37fead22dd26a764222b3d241a8e4183230abc0cbdb93742&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPBID2B%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE5TTi9aIselVPGAuzWy%2By7gA1EfIbHD76weMCe8nxGGAiEA%2Bo%2FiflCXooIuHVoPLOSSnsrst9uLvJblsWmMEzFH8fAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNySReNIQ9WOxBRZuSrcAwVcnhUKSWVk9RdzxMpUTN15CK7OHhliTMECW27OS03ANx4GBd7F0bDgzC5lSaatqsvhRiUNPptv3GCPbFrwgR2PEo2xDr9uvdESwYGUKeqxfGXyscyTzA7tYALBpjxx4Jy1f7ZPfzzIPn67TOKZs%2FqYlf1nEdQ6vJJKzg4SfBIpglhtO9NqUWWp%2F6TQrhVWqdN60%2FvuUPtlavSTM%2B%2BjK9K2Oj1Rb7i9eqjG%2Bzl2foIW52v5tuFQREEwRuQWlrXAe4%2BrW8%2FKBmEYkTq7H%2BTqT2Kpox5uODAik2hjHXlzrhqARIbUwdmFwiGGHqHaZwa9cw3KupLpU%2FSwzCxjiJLmJXDPeByNV1z%2Fn05OG%2B%2FylXBLM6dZPQPw3ZT5w4RqE4BsbzBNXzjN6VE5RjSsB7PLJqpUSAquOl5mxI83vFueYBdz2Eo5srGC4gbHopwgk3jfRvFFZ3Yu3TTz1hAcxK6rMre8dlPven5ISilki%2BSTgyNl6nbFEpc8Hp8Xx8SD5liZEwJO1lRuY2rZleYcpGpwuPM7kyQ294j4TCea4JzeRZQcdKLiMPuRYBGvkHWfHGfdc6P26UBuMq7Mtrl8hnMNcizbgX0bcTHtujLOUv1GVEr5PULcvlemiRLrZPCsML%2F9xb0GOqUBlOR0JIyajJp5Zc1BpUmiXe6A4uqp3XmniYrcrsgTXuff5KFcrlEk3NcHnXjY4BajkUn%2FGt4lguDk%2Fox36pFn9P2yl31UXqb70OkQXtxeziN3t1un5z05J4LbRGontQQP3M%2Bteng%2BrNviI5cumlrZRaArGCiRXjbAE9%2FZXtFNPWqgJ%2BZ8%2BdIvJb2CGMHkKfi3cnW560NRBW0RtsmXk5e7PegbINyq&X-Amz-Signature=c82a3780c427b39e42b30695a73c4524194b22fed02b98b963c94ca6a181922e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
