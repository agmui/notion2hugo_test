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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GHCWPC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDjd5Weko2ET3WNX1WNyWtOpuLQ%2BOATQ7EIlXJLKqo1hAIhAJRor9UsvvKfML1hm2mWdrrZpC%2BSEd7q9MCd1egshaR9KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX33F%2B77XFkmDacxQq3AN2w1wClT7SmPWJKplPO2AOEqhNg%2F54Mh8gL5qTSYcdbgWDqFBOTnbqy0N2jVK8RbNXcrZT4%2FPTpYhKnkse%2BIG5PA2TFr7ZDadJ9fMZiItvip322z3lDEHh9B%2F%2BpkJwj%2FD%2BxRt3T%2Bc33nbw3CruVIiFjace4rSADhKmw59EhxAySvyachnx2mnXwCpMfyMgytuVIrdFjfCps%2BqA83OyhwGAuThjc8HsRW%2FR0DBKiih11T3oPr3S2b8zpkFQIdYYtSGQWNi6FPR%2Fa2zxKivhcURLdlRFZ1cFw16WRbXoSMxl8Jr4yU9w9zN5TvhH9aeK5KXmujXMYcYz3caKB2tNrWXXn2rBhruZx53keX%2FHcCowVqmrHaDqQyT2M5Tnu0WqZhSPRW8noeKqUL8fPS123iAbFOe4VdWjL5v%2FF3KTcESgag%2BcWKSIeEI3YiXrefHg9sljNt50GeV5n1uEuWaN8%2FEkP7VlQrE5HverM%2FK0GzroEkWyBnYle7b8dolKrD32tWnbZEL8m5Fh3GwxM%2BXpn9q8h%2FRKFfAAAZCzubzrmicVDz1jxHelO%2FFO7CXAvM1ELMqL35PqNkLTU4834k1WFLwTCloznjf4x%2BIcM3RdeY%2FVwBO3Z1b6DhQ4%2BPV7sDCmsuC%2FBjqkAWXcppemc%2FLvaHTcdfKYWspF1lMuuKGqz2XGsfnt5JcN6r3W6VkGUCC4vS7tUlijyaJDJPDdrS3rV69ezR642kmFJWVByaRjpxCzkjWQtNTG4jXAaiqGWcbhanhKYcAx40CIOvb3w3nEZmdgmyVJ3QhSRkvDZfmuxYMzWkX8HBxa3u8%2FU77wb6%2BqSF%2BbKcuwpoU02PWJFIGFqa7jdImynMTsZUlV&X-Amz-Signature=3fedef4c2f4f415e7d9856cf0db27b6c6c5c2b63cf98fef8ce7aba9ea4a94694&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GHCWPC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDjd5Weko2ET3WNX1WNyWtOpuLQ%2BOATQ7EIlXJLKqo1hAIhAJRor9UsvvKfML1hm2mWdrrZpC%2BSEd7q9MCd1egshaR9KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX33F%2B77XFkmDacxQq3AN2w1wClT7SmPWJKplPO2AOEqhNg%2F54Mh8gL5qTSYcdbgWDqFBOTnbqy0N2jVK8RbNXcrZT4%2FPTpYhKnkse%2BIG5PA2TFr7ZDadJ9fMZiItvip322z3lDEHh9B%2F%2BpkJwj%2FD%2BxRt3T%2Bc33nbw3CruVIiFjace4rSADhKmw59EhxAySvyachnx2mnXwCpMfyMgytuVIrdFjfCps%2BqA83OyhwGAuThjc8HsRW%2FR0DBKiih11T3oPr3S2b8zpkFQIdYYtSGQWNi6FPR%2Fa2zxKivhcURLdlRFZ1cFw16WRbXoSMxl8Jr4yU9w9zN5TvhH9aeK5KXmujXMYcYz3caKB2tNrWXXn2rBhruZx53keX%2FHcCowVqmrHaDqQyT2M5Tnu0WqZhSPRW8noeKqUL8fPS123iAbFOe4VdWjL5v%2FF3KTcESgag%2BcWKSIeEI3YiXrefHg9sljNt50GeV5n1uEuWaN8%2FEkP7VlQrE5HverM%2FK0GzroEkWyBnYle7b8dolKrD32tWnbZEL8m5Fh3GwxM%2BXpn9q8h%2FRKFfAAAZCzubzrmicVDz1jxHelO%2FFO7CXAvM1ELMqL35PqNkLTU4834k1WFLwTCloznjf4x%2BIcM3RdeY%2FVwBO3Z1b6DhQ4%2BPV7sDCmsuC%2FBjqkAWXcppemc%2FLvaHTcdfKYWspF1lMuuKGqz2XGsfnt5JcN6r3W6VkGUCC4vS7tUlijyaJDJPDdrS3rV69ezR642kmFJWVByaRjpxCzkjWQtNTG4jXAaiqGWcbhanhKYcAx40CIOvb3w3nEZmdgmyVJ3QhSRkvDZfmuxYMzWkX8HBxa3u8%2FU77wb6%2BqSF%2BbKcuwpoU02PWJFIGFqa7jdImynMTsZUlV&X-Amz-Signature=68d90070825821415708e861477077bbb4c1a745dbfb8dc09ea172b670b66dca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
