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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHM4MYCE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsD2Lxtw%2BOvYEKfCw%2FotTIgndcuprjNwdnYQnzxr348AiAno4LBUzQTwOC5P8Y6iRMiOHqau4%2BldTpk1Jex3CV7ASqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xIJDLEvIGrDScbXKtwDy%2Bjhy3NGYonhnFPZgxwBYJs8hVmJ4TE8alsXdA48YJBjB71Ac8S6Fd%2FytGBJwy%2FBIr7y4KJVgWmhRWDy9Mrj0s3INTOa5nk4TeZSW73sXAJBxt0bdT1xotYDRVz8pROfOXlO3I97T%2BK7cH2i32s1oiEx4qWkMRJyMhmNm9n1CiQfjzpmlMjhvmw%2BTUqJSXPXgp1TKyi%2F8JmUDLS0dRsVsVrwW5nExfsvM%2BqbPGExQXwdk4XDND9mOwBtmAYvW1uWgpTXf52oUjtTlJHH1ULQBKhzl6djtLt7UuGnS2rTMKSgDV0aFPzWpL2G9r7Ix1HxbowJeSfejoRHSzIiKt%2BrxuDqXm1HWWYZg2g27HkEG7hs1pGGdWsE3aDty0dVUE43HkvZu0NoeW8Js38E3tYpQwxeflC01%2B1neoJvFm3r2xVZZuNYxjUKqGt9OSAtKLmC3766ZR%2FqiR11QyoHlT%2F%2B%2B6z%2BrrtxqqsrC9px6uoF2W1eW%2FeMKQGSH%2BGlu9PoEASZCKtJvUIjS3FMMVYcvd0IpmU5YPu5CnpC5H13y3xk6ZHGwxO%2BjbJa91fi5dvPD3EXCEFuh9uX8RWlJLllaqZLDrrBgz%2FWo0eQi03s8gMSkZcrYLKSNolZISQz31Uwx9T4wwY6pgFXMQAqKA8ZOFeTeDzRxfyO5LiIOKOXPCGMp%2Bhe95MJW%2FfmtzYljDcuMC%2BMLIK%2BfmnaSbSZ1OS3ahI05YPYMdrT1nsSZB01EQuro9bIlPUdkEsukFUDtJ6BurXHnDqevgex7BI1sFCuq60YguuSQBYWtS0fe%2B7tEVARnsvoGCwS6ugZQpi80wS4f8Ftfb%2FnhQo%2FJkZlslLfL2WI3j%2BgB8mLRrRCCsdl&X-Amz-Signature=3f18ed1ba14890a753cb1630136fda17efc6ce4d1867ddfa25338bb61dcc30bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHM4MYCE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsD2Lxtw%2BOvYEKfCw%2FotTIgndcuprjNwdnYQnzxr348AiAno4LBUzQTwOC5P8Y6iRMiOHqau4%2BldTpk1Jex3CV7ASqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xIJDLEvIGrDScbXKtwDy%2Bjhy3NGYonhnFPZgxwBYJs8hVmJ4TE8alsXdA48YJBjB71Ac8S6Fd%2FytGBJwy%2FBIr7y4KJVgWmhRWDy9Mrj0s3INTOa5nk4TeZSW73sXAJBxt0bdT1xotYDRVz8pROfOXlO3I97T%2BK7cH2i32s1oiEx4qWkMRJyMhmNm9n1CiQfjzpmlMjhvmw%2BTUqJSXPXgp1TKyi%2F8JmUDLS0dRsVsVrwW5nExfsvM%2BqbPGExQXwdk4XDND9mOwBtmAYvW1uWgpTXf52oUjtTlJHH1ULQBKhzl6djtLt7UuGnS2rTMKSgDV0aFPzWpL2G9r7Ix1HxbowJeSfejoRHSzIiKt%2BrxuDqXm1HWWYZg2g27HkEG7hs1pGGdWsE3aDty0dVUE43HkvZu0NoeW8Js38E3tYpQwxeflC01%2B1neoJvFm3r2xVZZuNYxjUKqGt9OSAtKLmC3766ZR%2FqiR11QyoHlT%2F%2B%2B6z%2BrrtxqqsrC9px6uoF2W1eW%2FeMKQGSH%2BGlu9PoEASZCKtJvUIjS3FMMVYcvd0IpmU5YPu5CnpC5H13y3xk6ZHGwxO%2BjbJa91fi5dvPD3EXCEFuh9uX8RWlJLllaqZLDrrBgz%2FWo0eQi03s8gMSkZcrYLKSNolZISQz31Uwx9T4wwY6pgFXMQAqKA8ZOFeTeDzRxfyO5LiIOKOXPCGMp%2Bhe95MJW%2FfmtzYljDcuMC%2BMLIK%2BfmnaSbSZ1OS3ahI05YPYMdrT1nsSZB01EQuro9bIlPUdkEsukFUDtJ6BurXHnDqevgex7BI1sFCuq60YguuSQBYWtS0fe%2B7tEVARnsvoGCwS6ugZQpi80wS4f8Ftfb%2FnhQo%2FJkZlslLfL2WI3j%2BgB8mLRrRCCsdl&X-Amz-Signature=6a9acd2d53402fd8295f1e7cc462cf40c594fb712dd7b0fc6187572455afcd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
