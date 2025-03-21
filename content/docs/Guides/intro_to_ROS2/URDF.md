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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BXYPPK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDeuZCoK8jmAnymaGOPqMTK4pBDhea6cg1bfa%2FRBZ40oQIhAJpZlZncUnNxBYXt%2BGuyHEONBUVIDZzxmn%2FxJ6T%2Fhso%2BKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5csR3N2jKUt1h50cq3AP6nY71Q%2BNwaCQWF0NxDHws7HGWCyLsX7L%2FunIrO9cLTVNQNIx2Y%2BnjEP9lLDYTi47z5PQ977XBI1ShuHzkVc1FH0kUea5QV9r4seV3bhsDjL%2BYHv8Aa%2BVFA3T%2BsSTLfXr5cGcXbK8MVBo%2FUD8B2HMRYgy2ahhXoTz85K6pbkErAoZ5mITeRm9NUVBfa4rZuHzKrj%2BBMuaAR5W8aarAfDBY28zmpT%2BBMNeL9TClE7yzbmKX5xxT4CNHFUI3U7fXECIngI7spggmHSFzd5UZmG0GXeT4dr%2FJ5Qte1HBnR5%2BpV1Gjc6ZKJkAYHUOj0wqd9nILG0ojmuzGJr%2FDHlJYs%2BjHZh9BY4ri9pwZo8y3ZbbXtZm3XgQCdWpQ1Eh4k5HnU9Mj3ep%2B1BJVLgAxQkyDEnZTQM2PXvChBcWS8wBuIJNPi%2FavXn5wCbC0qylcDH%2BLdfC7j8I8pqpEhMVNLW%2BTIbqgQcotEw7aJvQXB19cVGHIzQgNDC5KFm13gKUBXwuYEv8g7fEUWQhJVwYt7UJvbwERwQ%2B61E1HgBHIr1kSXqCsRecKq62DP7hyfHf6dz2FzxZcDjrmC4vJ4DMisGJd4z%2BltcOqsjcLkm4QXOI14tKh4a60B%2FscIRNp7rC8gjC92fS%2BBjqkAQ%2FeKLfAzes78H2GHzIMm98SWak1SjiyahXRFAA2PX0Xnx3abnKBwaulytr1hxniupU6DaUvu4VapqhJEj1mepED32Toa8WmCUoa%2BZIcUo1s1LBnRg7aqh9xCDEwiCAAJRxA7%2BcT8tb%2BEUghXvmoBgNxTTA2bJaGCDeytA%2FbYZ18GHzxQjhSENl544kayBx7theIO4IO%2BpMdyW4NJbBon%2BJ8RemY&X-Amz-Signature=6992373d6129cc9173e393c9202c8f9c3b3581cbec7bb1df37be38ca64b24838&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BXYPPK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDeuZCoK8jmAnymaGOPqMTK4pBDhea6cg1bfa%2FRBZ40oQIhAJpZlZncUnNxBYXt%2BGuyHEONBUVIDZzxmn%2FxJ6T%2Fhso%2BKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5csR3N2jKUt1h50cq3AP6nY71Q%2BNwaCQWF0NxDHws7HGWCyLsX7L%2FunIrO9cLTVNQNIx2Y%2BnjEP9lLDYTi47z5PQ977XBI1ShuHzkVc1FH0kUea5QV9r4seV3bhsDjL%2BYHv8Aa%2BVFA3T%2BsSTLfXr5cGcXbK8MVBo%2FUD8B2HMRYgy2ahhXoTz85K6pbkErAoZ5mITeRm9NUVBfa4rZuHzKrj%2BBMuaAR5W8aarAfDBY28zmpT%2BBMNeL9TClE7yzbmKX5xxT4CNHFUI3U7fXECIngI7spggmHSFzd5UZmG0GXeT4dr%2FJ5Qte1HBnR5%2BpV1Gjc6ZKJkAYHUOj0wqd9nILG0ojmuzGJr%2FDHlJYs%2BjHZh9BY4ri9pwZo8y3ZbbXtZm3XgQCdWpQ1Eh4k5HnU9Mj3ep%2B1BJVLgAxQkyDEnZTQM2PXvChBcWS8wBuIJNPi%2FavXn5wCbC0qylcDH%2BLdfC7j8I8pqpEhMVNLW%2BTIbqgQcotEw7aJvQXB19cVGHIzQgNDC5KFm13gKUBXwuYEv8g7fEUWQhJVwYt7UJvbwERwQ%2B61E1HgBHIr1kSXqCsRecKq62DP7hyfHf6dz2FzxZcDjrmC4vJ4DMisGJd4z%2BltcOqsjcLkm4QXOI14tKh4a60B%2FscIRNp7rC8gjC92fS%2BBjqkAQ%2FeKLfAzes78H2GHzIMm98SWak1SjiyahXRFAA2PX0Xnx3abnKBwaulytr1hxniupU6DaUvu4VapqhJEj1mepED32Toa8WmCUoa%2BZIcUo1s1LBnRg7aqh9xCDEwiCAAJRxA7%2BcT8tb%2BEUghXvmoBgNxTTA2bJaGCDeytA%2FbYZ18GHzxQjhSENl544kayBx7theIO4IO%2BpMdyW4NJbBon%2BJ8RemY&X-Amz-Signature=6f37bdf5a43c4db84aa7df07f2d195e59e48b19c8edb4e41367d5931f8d5990e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
