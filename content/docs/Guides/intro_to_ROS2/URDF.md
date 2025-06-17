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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBDY57W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9RhNCPhtyO0Bi1sNyD2Yg4pAuM78LdzbfC%2FoSchZXhAiBy4bBJGCb5bFbS3O6mt41Jswc10b3%2Fc9tfk2VCG7%2BwDir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmgJYMIC5leM8%2BqDYKtwDo4qEPTs6e9HUvg1TiVlXiyLVNyxTL75xAgbGce0AdnsfvXaENm%2BTxlxY9D59DSLgn8tKF7JXzi%2FtVIFye4pSE0dKZgJl7Di30L%2Ff57%2BZd081u1rLRZegtYdX7WhaJMWVs4wXR2SOXNUdJKu74AhpCkujqAfZCbSe7flSCkNfAcxTce27ymRqhbonhxyFah4AAu8XGpMnWpMmIAmPmzIgVwsGavX49bjVRmm%2BHOKOyR%2B%2FMIQTWqFNnv%2BVacPgnhAYI4rbHQwbuOBrQIyLdOp275lKwZSbvAgGuBAuz1YC9mB6%2F4sD2tBuemqqJPo%2Bhv5%2Bn7MzUD4xaczLgNAWcQ%2Fr42WdkmwdxDjKDgjwwROTfQbr3kyDZDgHiKKWkl%2Ff%2BO8PBC9E26xAhl%2FwlxSEP%2BMHDHvFtdxHcaAMdk5ed66RDLAMTRi6B3uPwv%2FWe%2FF8LsiHTU0XQ33NlTIB1VtiQTJxfarMFw7qeTSCy2tVR1iu%2BYlzACQYzgzf6DoFV4ME2SAmr6kHa0tcSiOYuLoiGlKhSgm5%2BGVyi%2B58mCJYv8pZiq8lAqkrcffHK20UC9EaDwUqnhBb2lzmr6dM0LRWcNL5qespKjox%2FM0uTiyA%2FwOHB6lkkt%2By0RuCmpRTFhMwy9%2FGwgY6pgF3caaMhZGeddPInGkPHMRG%2FSl%2FUcV0D%2F2mHSHwz49Pz5E0dDDjM4yj9x6PUzeuRPnNccorCvQsPtLzLwi7ZMA%2FTV13Je6m9tOL6bUzeeIwR7wDV5Wt63iGfksMQ263DDH%2F8Jkp4IlIjILwjH0K0QsIt5GzCxJ8vJ4dTPBKivPMPeOfFysYyY5L60sKsvHJo0VCSUy5CFexjxCdnP2bQM6RZ8ApxLT1&X-Amz-Signature=60a7ea41dccbc81cec1861eb18a7eca791ce7528ee4fa787ae3c8b8c650d076d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBDY57W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9RhNCPhtyO0Bi1sNyD2Yg4pAuM78LdzbfC%2FoSchZXhAiBy4bBJGCb5bFbS3O6mt41Jswc10b3%2Fc9tfk2VCG7%2BwDir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmgJYMIC5leM8%2BqDYKtwDo4qEPTs6e9HUvg1TiVlXiyLVNyxTL75xAgbGce0AdnsfvXaENm%2BTxlxY9D59DSLgn8tKF7JXzi%2FtVIFye4pSE0dKZgJl7Di30L%2Ff57%2BZd081u1rLRZegtYdX7WhaJMWVs4wXR2SOXNUdJKu74AhpCkujqAfZCbSe7flSCkNfAcxTce27ymRqhbonhxyFah4AAu8XGpMnWpMmIAmPmzIgVwsGavX49bjVRmm%2BHOKOyR%2B%2FMIQTWqFNnv%2BVacPgnhAYI4rbHQwbuOBrQIyLdOp275lKwZSbvAgGuBAuz1YC9mB6%2F4sD2tBuemqqJPo%2Bhv5%2Bn7MzUD4xaczLgNAWcQ%2Fr42WdkmwdxDjKDgjwwROTfQbr3kyDZDgHiKKWkl%2Ff%2BO8PBC9E26xAhl%2FwlxSEP%2BMHDHvFtdxHcaAMdk5ed66RDLAMTRi6B3uPwv%2FWe%2FF8LsiHTU0XQ33NlTIB1VtiQTJxfarMFw7qeTSCy2tVR1iu%2BYlzACQYzgzf6DoFV4ME2SAmr6kHa0tcSiOYuLoiGlKhSgm5%2BGVyi%2B58mCJYv8pZiq8lAqkrcffHK20UC9EaDwUqnhBb2lzmr6dM0LRWcNL5qespKjox%2FM0uTiyA%2FwOHB6lkkt%2By0RuCmpRTFhMwy9%2FGwgY6pgF3caaMhZGeddPInGkPHMRG%2FSl%2FUcV0D%2F2mHSHwz49Pz5E0dDDjM4yj9x6PUzeuRPnNccorCvQsPtLzLwi7ZMA%2FTV13Je6m9tOL6bUzeeIwR7wDV5Wt63iGfksMQ263DDH%2F8Jkp4IlIjILwjH0K0QsIt5GzCxJ8vJ4dTPBKivPMPeOfFysYyY5L60sKsvHJo0VCSUy5CFexjxCdnP2bQM6RZ8ApxLT1&X-Amz-Signature=9d5e65e9c19e30593f476b392b62d8436f1237ff7b1b81ad4f80eee5b0a03c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
