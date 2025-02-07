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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTU4ZWJP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCwEBQ6qMdus94p08n9jPRxF%2FTUPDZHzSZF48cjUv1PqwIgOY6wVhs%2FqnQNVcIwMPlGq7RINKLxqHO%2BugbdSceoBRMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLY7JWmuMMVPT43MIircAxhNOtHFQ6vTPkXqM%2BeHVGUxEXnLyS6JchaYCPjRSBjIG%2FxtloEq%2FY0yQKfoTjUyZSmxktDuDJzaeFeeR2OXnvxrL%2FxekRJrOOj06eaehXsTy%2BeyBPeTnwqrW402sN5%2FUPicOblRTBqWkzR2m2VCUMGxusyWoqg0nNqKNnLzXovpn5aUsAVlnEZkKv%2Bo5c4s6CN5K481DbRlTX4Wt1f9CmpqEDGniXWKF%2BuVuLeoDPBz%2Fhk%2FYTKGfCVEZ5TS91O3uBmWByH6jEQfGfTAXiXQSV%2F21z8rNAce5WKh6GADrkKPJyXamrnlYOp4c0qU2VNDb4XjiSnHnyNFTL13C7125KoLORpoAzcATUBOr%2Fx8J6lpbY6ujK3qgRcEiF5OiC2ReMOfs13rKZxUl9S48RaJZ5mp9FZ5Nr91%2FqE57wTdSkISAnRl5RswHEgvDe99U7hpSk21AFcjPFWjsE%2BqEXfXYz8iBOA2ivyiVC42GQR%2FvV52F%2FzF6szul16E86eJVnLQJURp%2BXChp0jboI8HNxIRBvvm9eCHCH1yHNnkka8%2BJ6AGPJDgjwLC72rNSK1Wgde0UnKra5SMs%2Bt85snS2dQ3c00o9A0BHyyctyTIfiJUZFn%2FY2FzebqCZLJJiA5PMN3elr0GOqUB4qXbBgEPlq%2Ft1RSzIEJQwy2r%2BCHMayjh2dbS79QWAItp092XBbbbD2D16aer6bYP9vZfxORzC2LdtZxSZTrItU9Vwzee7kQxOHhbdhGlGYV%2FmOTDy27j2v%2BZKuEzzBs2DPsetu06OBagYDzaD5ecYdahOMhkXU8qlXioPJ6MfmJni6lgbHDbb0Bc42iWyxRDQ0nathN9yYQW2BkCkyMPYhsiEFnQ&X-Amz-Signature=42803ef51b8b6101af518b463a7c5da9a9665f93b56374e79ef98a8bcaa5fa04&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTU4ZWJP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCwEBQ6qMdus94p08n9jPRxF%2FTUPDZHzSZF48cjUv1PqwIgOY6wVhs%2FqnQNVcIwMPlGq7RINKLxqHO%2BugbdSceoBRMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLY7JWmuMMVPT43MIircAxhNOtHFQ6vTPkXqM%2BeHVGUxEXnLyS6JchaYCPjRSBjIG%2FxtloEq%2FY0yQKfoTjUyZSmxktDuDJzaeFeeR2OXnvxrL%2FxekRJrOOj06eaehXsTy%2BeyBPeTnwqrW402sN5%2FUPicOblRTBqWkzR2m2VCUMGxusyWoqg0nNqKNnLzXovpn5aUsAVlnEZkKv%2Bo5c4s6CN5K481DbRlTX4Wt1f9CmpqEDGniXWKF%2BuVuLeoDPBz%2Fhk%2FYTKGfCVEZ5TS91O3uBmWByH6jEQfGfTAXiXQSV%2F21z8rNAce5WKh6GADrkKPJyXamrnlYOp4c0qU2VNDb4XjiSnHnyNFTL13C7125KoLORpoAzcATUBOr%2Fx8J6lpbY6ujK3qgRcEiF5OiC2ReMOfs13rKZxUl9S48RaJZ5mp9FZ5Nr91%2FqE57wTdSkISAnRl5RswHEgvDe99U7hpSk21AFcjPFWjsE%2BqEXfXYz8iBOA2ivyiVC42GQR%2FvV52F%2FzF6szul16E86eJVnLQJURp%2BXChp0jboI8HNxIRBvvm9eCHCH1yHNnkka8%2BJ6AGPJDgjwLC72rNSK1Wgde0UnKra5SMs%2Bt85snS2dQ3c00o9A0BHyyctyTIfiJUZFn%2FY2FzebqCZLJJiA5PMN3elr0GOqUB4qXbBgEPlq%2Ft1RSzIEJQwy2r%2BCHMayjh2dbS79QWAItp092XBbbbD2D16aer6bYP9vZfxORzC2LdtZxSZTrItU9Vwzee7kQxOHhbdhGlGYV%2FmOTDy27j2v%2BZKuEzzBs2DPsetu06OBagYDzaD5ecYdahOMhkXU8qlXioPJ6MfmJni6lgbHDbb0Bc42iWyxRDQ0nathN9yYQW2BkCkyMPYhsiEFnQ&X-Amz-Signature=5db87fe1eaf60d59eb322fee5d473fe69589bf6dfc1292d7fa8d3310ed40a149&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
