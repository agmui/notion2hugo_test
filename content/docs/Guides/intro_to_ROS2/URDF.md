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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTR246O%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb8VbxcjWGsz1IORg3a7FnANlJ3D64n2jZoVjf9PhsuAiEA90N0F2fuuQA6KdxOrpqW36yJ3MzKoKVXTH0u0VN2SXgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0aippoCkFgkmMU1CrcA4aYGjgwVPEY5lO2y%2F8Eqqg8w05dhGS8xMglPoscY%2F85ncfEGqhnfKBqyFeN8Dzjm3zzTVOkeUjoIIO6Vig1PhQba%2F4nJfeOW5OysEpQaAGwAUTgaUkMZuGf74eHkzstQGwGnPL6XkShu4xDwy%2FzzXhbvIq%2Fxby1p4yS3uwaHufouzS2Pa%2FUVx0JqSmtje3Hs%2Feq9vjIyiGhIgwUMDrtBgXd%2B1DdpCUJJ%2BD%2BPjYbtHzAQtbyQcrPvVuPHIrklLMt8oNf7TIZxpyMHBFVn8vdwxVqWK82SapeloIJ93uueNAWme%2FLAQRPVBopcQBvPCGTME9kToGXgBvB5iGdyE%2FwkXmDWRNf3jRh3cszarbhKcrUeG7W4vPSSqTGbSSrD%2BaaUbbX8VAG3h13H%2FAGSYHoeYUaJdvq99C%2FL2yhV%2B6CXwF6Z%2FvOO7HG5YRfEDjsqGY9JHnNySx0uUCFWuIHeUYr1Bs3Z%2FEZiBGVG2U0R%2Bey7HBrXMnV4M0%2BvzN5%2B5ZjnAk6YOgNCXNnO4%2Bs09PLKJcwa3rmTyo%2FIXGyk3UC4EVzlh%2FeA3fxnTJiK8sc%2BV%2F1xuwSZo4MB2a48w8lXqMyJAydyL6dk4RZdHg65nF3xYQiPHph9z2ct9JGAtPfhBIsMMfo474GOqUBpLTMGMhml1lIk0P6BzmEbbIp%2Buy8M09qBohxnY%2BLXIJ%2BUEKFfdlmIy8LXxRFnb6Ad6g45e%2B6rimRXvn0YjV53GZ%2BS92R3WVHeElkfy%2B5X1CrKVyRIgyOaOD3pyQCbS41DwdzSNEX8n6TsudeZKGZHo%2BzmyQKHlMjJX7orG9TfGi7gwOk4MPZ2QSvreTl4qxomgxv4a3GgAuy9IqUrw161nwEzugH&X-Amz-Signature=2f90444da69a3a7e8c276b6325bc6d9430f44c9254ff0b14906a6191be107863&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTR246O%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb8VbxcjWGsz1IORg3a7FnANlJ3D64n2jZoVjf9PhsuAiEA90N0F2fuuQA6KdxOrpqW36yJ3MzKoKVXTH0u0VN2SXgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK0aippoCkFgkmMU1CrcA4aYGjgwVPEY5lO2y%2F8Eqqg8w05dhGS8xMglPoscY%2F85ncfEGqhnfKBqyFeN8Dzjm3zzTVOkeUjoIIO6Vig1PhQba%2F4nJfeOW5OysEpQaAGwAUTgaUkMZuGf74eHkzstQGwGnPL6XkShu4xDwy%2FzzXhbvIq%2Fxby1p4yS3uwaHufouzS2Pa%2FUVx0JqSmtje3Hs%2Feq9vjIyiGhIgwUMDrtBgXd%2B1DdpCUJJ%2BD%2BPjYbtHzAQtbyQcrPvVuPHIrklLMt8oNf7TIZxpyMHBFVn8vdwxVqWK82SapeloIJ93uueNAWme%2FLAQRPVBopcQBvPCGTME9kToGXgBvB5iGdyE%2FwkXmDWRNf3jRh3cszarbhKcrUeG7W4vPSSqTGbSSrD%2BaaUbbX8VAG3h13H%2FAGSYHoeYUaJdvq99C%2FL2yhV%2B6CXwF6Z%2FvOO7HG5YRfEDjsqGY9JHnNySx0uUCFWuIHeUYr1Bs3Z%2FEZiBGVG2U0R%2Bey7HBrXMnV4M0%2BvzN5%2B5ZjnAk6YOgNCXNnO4%2Bs09PLKJcwa3rmTyo%2FIXGyk3UC4EVzlh%2FeA3fxnTJiK8sc%2BV%2F1xuwSZo4MB2a48w8lXqMyJAydyL6dk4RZdHg65nF3xYQiPHph9z2ct9JGAtPfhBIsMMfo474GOqUBpLTMGMhml1lIk0P6BzmEbbIp%2Buy8M09qBohxnY%2BLXIJ%2BUEKFfdlmIy8LXxRFnb6Ad6g45e%2B6rimRXvn0YjV53GZ%2BS92R3WVHeElkfy%2B5X1CrKVyRIgyOaOD3pyQCbS41DwdzSNEX8n6TsudeZKGZHo%2BzmyQKHlMjJX7orG9TfGi7gwOk4MPZ2QSvreTl4qxomgxv4a3GgAuy9IqUrw161nwEzugH&X-Amz-Signature=ef739ff590018a3d1091e33c01769ad9eeab2a16dfc6216d0b970b0de42aa58b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
