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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGCN262%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCtI3xKnbn9I%2BFfa9Z2tZGcazuCZGgq1nExzIVZ6UWecAIgHfVbpSidYT3qCn5xgtFHMyLFPx%2Fxs5xDqtR5IHt1ybEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BdoSXAckP1NA1EoircAyjFWMO7AwcUuyKwGpIHTXVyfSEohaGecrJ50Yx0F1WtME4oNRRAX9r%2BqlkH8G0sV2IWoylX6r4FnQXIorh3CSAFgqz3wCexpJmG2ZV%2BwBSllFu0o6zr7kh1Cfl%2BEYH0IR7suMRBzA7KN9zhMJRSXenLbsnoAXgZPD2MjynRGCE8v%2F0QXh0Pub0TKjab5iCGztXQzrlBpPnH7cRd4lZTAO51UMSxiFdMGhtFN09zmnivgJCUfgy6x%2B3AML%2BLtXaMs6D7BXDDQQ%2BQrhTV6TS6kH%2BYf1c2PPsES1nj1kY5zl8ZYn9i%2FSt90uTRdFBZGWaNAu95B%2FkBYtzpYLMZhVr0GhdKER7U4mpJznUUsY2rgYv4dj2RaG7qe0%2Fyw%2FEBqdl9Q4X6mXsiT%2BGEyFm6%2BiNbpXKvIHjrYek5xm28OGQn80QnwdETrv%2BrjBGgwzOKAX3wlJHeDBQqOl8cQppMFzTYPGZBaVyD1gSXjgU9NQ0e9ya7rSj58OIhzB5sY7MTQqBkWp7HRHk0gRvPOQp6f8nf3prfWNuU8lCt%2BSeYh%2Ba%2FJXF1rau%2B21G2ylgsHFHvlmnWOFpI87Fd3PQSPt9b2CPoo6iDE%2BHPG5%2FJtMenRcABsDM0lWx5pYgsn50%2Fg4RcMI2QnL0GOqUBc7Ei11G69scUgN06IqrS4rghyyeoglXwvu48hZdAVk%2B9eNicRJBXOooD1WWCWPPR8TGSy7gMNVKcKhsszDGUFn1PuJyP8ryItFUI6vUdsap7k0LyLc7XbaUP12%2BIaN8IbeJ5JrBaHOG9hFwEp4sIw1U2fI6VBfws8qtBx0FeQ5M3IqOZjdYkiA697L5bPIw8BEDfpCg9p8t%2FmFIGGoqLvv3VeHr6&X-Amz-Signature=048bc05122cd04911e9b2344f86c8482d61eba74c67515d193227f8ccf42e921&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQGCN262%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCtI3xKnbn9I%2BFfa9Z2tZGcazuCZGgq1nExzIVZ6UWecAIgHfVbpSidYT3qCn5xgtFHMyLFPx%2Fxs5xDqtR5IHt1ybEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BdoSXAckP1NA1EoircAyjFWMO7AwcUuyKwGpIHTXVyfSEohaGecrJ50Yx0F1WtME4oNRRAX9r%2BqlkH8G0sV2IWoylX6r4FnQXIorh3CSAFgqz3wCexpJmG2ZV%2BwBSllFu0o6zr7kh1Cfl%2BEYH0IR7suMRBzA7KN9zhMJRSXenLbsnoAXgZPD2MjynRGCE8v%2F0QXh0Pub0TKjab5iCGztXQzrlBpPnH7cRd4lZTAO51UMSxiFdMGhtFN09zmnivgJCUfgy6x%2B3AML%2BLtXaMs6D7BXDDQQ%2BQrhTV6TS6kH%2BYf1c2PPsES1nj1kY5zl8ZYn9i%2FSt90uTRdFBZGWaNAu95B%2FkBYtzpYLMZhVr0GhdKER7U4mpJznUUsY2rgYv4dj2RaG7qe0%2Fyw%2FEBqdl9Q4X6mXsiT%2BGEyFm6%2BiNbpXKvIHjrYek5xm28OGQn80QnwdETrv%2BrjBGgwzOKAX3wlJHeDBQqOl8cQppMFzTYPGZBaVyD1gSXjgU9NQ0e9ya7rSj58OIhzB5sY7MTQqBkWp7HRHk0gRvPOQp6f8nf3prfWNuU8lCt%2BSeYh%2Ba%2FJXF1rau%2B21G2ylgsHFHvlmnWOFpI87Fd3PQSPt9b2CPoo6iDE%2BHPG5%2FJtMenRcABsDM0lWx5pYgsn50%2Fg4RcMI2QnL0GOqUBc7Ei11G69scUgN06IqrS4rghyyeoglXwvu48hZdAVk%2B9eNicRJBXOooD1WWCWPPR8TGSy7gMNVKcKhsszDGUFn1PuJyP8ryItFUI6vUdsap7k0LyLc7XbaUP12%2BIaN8IbeJ5JrBaHOG9hFwEp4sIw1U2fI6VBfws8qtBx0FeQ5M3IqOZjdYkiA697L5bPIw8BEDfpCg9p8t%2FmFIGGoqLvv3VeHr6&X-Amz-Signature=7951219b7ef18641c08b28f990460fb098609bb4f4aeb33e261428676f8730ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
