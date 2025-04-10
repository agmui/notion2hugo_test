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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRFCRPV%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGXCToxNY0zyJxgSQXtsNXp1InUcNS13i3cyko8kT0WSAiA5Og6k%2FYdfCQBZCoeqlWYqA%2BL2qGA%2BOFaD0HrSHr8YRyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuwF%2FrLAWgGmJaAsKtwDa1vmaS6nqtmma88rhyos1usz1FetcguRZX0KwwMmaqICVZLkbssbz6iCD7BFwI7s8UR1fNnWV04Bx2ygf11nYkLyR3PITF7hLoiVLNXftivt8baKGlOwkpfyVfBZBtaVAKl0T9w6V1YrJswl45h2yZYcITWGGHXBD5ZpqxiBry5w0DuPBoxqP4ppLhO2V%2FnsgOhr8IzEX4833tZ%2Bdqod%2BYmTzpejWCy2wsc94%2B2ublo07eLf0UAdvXd23vSZUAM%2FguHOQ7e6B8buN11jRW1o9xkyIQsQVeEcT0zZWRyqwbCcTAXd1TltD2nQA0WRUoxWTIpdOdQYOdUVgX0COkO0v2UvfE%2FSddYvvQwA6fAwmiwEIA4%2FXH99syzwk%2FCELOFFd1VwFUMCPs234Lkp2mFZaXk%2FnNRAR2k%2BFDltGtxHqHLxptKUbQcakAiOAEs7gtn3pWxZ2OsPZJKi9JDni6RTDFK1UaO1WQnOgoZbipmAvtXch2AsBHuhL2yCFlFioycNrV3%2BCp9WKNpxj1Ov0s%2FEBTiqMa4gBvGi1YyZfhSBGhBs2Cg%2BR89boreLHI48VB5wHRZY8iC3SCHbS9MsuV0jhUd97GGr8a2RpEnfV1ASyLmttIjnO%2BcYMEpDet8w44vevwY6pgEMjwHIO2pWmwRXox47bHO22ttzKauTsLtxrle31qR9nh4qUIcYVFWDq818BJ8huEq6GcC7Hv8c0byNJwW6CMzj6TbgeKFJVaD%2FK294azogoFVz17%2B0Oryl44EpPiNklsZIDi0L7m9ZTIWXXp9pAtTRKQpAe%2FVoZ8jG2lB066RXYO6P27eInUwSkzCiqXkoiMQtHN5WPp7hDZHD09%2Bl7QPOdvxOW%2F9z&X-Amz-Signature=adef8dd466c5931a76fe5cf232e9e5894c214534ed53d0ff8d66a706617b2f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRFCRPV%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGXCToxNY0zyJxgSQXtsNXp1InUcNS13i3cyko8kT0WSAiA5Og6k%2FYdfCQBZCoeqlWYqA%2BL2qGA%2BOFaD0HrSHr8YRyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuwF%2FrLAWgGmJaAsKtwDa1vmaS6nqtmma88rhyos1usz1FetcguRZX0KwwMmaqICVZLkbssbz6iCD7BFwI7s8UR1fNnWV04Bx2ygf11nYkLyR3PITF7hLoiVLNXftivt8baKGlOwkpfyVfBZBtaVAKl0T9w6V1YrJswl45h2yZYcITWGGHXBD5ZpqxiBry5w0DuPBoxqP4ppLhO2V%2FnsgOhr8IzEX4833tZ%2Bdqod%2BYmTzpejWCy2wsc94%2B2ublo07eLf0UAdvXd23vSZUAM%2FguHOQ7e6B8buN11jRW1o9xkyIQsQVeEcT0zZWRyqwbCcTAXd1TltD2nQA0WRUoxWTIpdOdQYOdUVgX0COkO0v2UvfE%2FSddYvvQwA6fAwmiwEIA4%2FXH99syzwk%2FCELOFFd1VwFUMCPs234Lkp2mFZaXk%2FnNRAR2k%2BFDltGtxHqHLxptKUbQcakAiOAEs7gtn3pWxZ2OsPZJKi9JDni6RTDFK1UaO1WQnOgoZbipmAvtXch2AsBHuhL2yCFlFioycNrV3%2BCp9WKNpxj1Ov0s%2FEBTiqMa4gBvGi1YyZfhSBGhBs2Cg%2BR89boreLHI48VB5wHRZY8iC3SCHbS9MsuV0jhUd97GGr8a2RpEnfV1ASyLmttIjnO%2BcYMEpDet8w44vevwY6pgEMjwHIO2pWmwRXox47bHO22ttzKauTsLtxrle31qR9nh4qUIcYVFWDq818BJ8huEq6GcC7Hv8c0byNJwW6CMzj6TbgeKFJVaD%2FK294azogoFVz17%2B0Oryl44EpPiNklsZIDi0L7m9ZTIWXXp9pAtTRKQpAe%2FVoZ8jG2lB066RXYO6P27eInUwSkzCiqXkoiMQtHN5WPp7hDZHD09%2Bl7QPOdvxOW%2F9z&X-Amz-Signature=adf6a1d0c3330ff523c87fd99e4aafa1b1b31c63fe5f513c64d40d21584f0afc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
