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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBLAQWD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN7KahsZ4bi1ZrdftYjAXufKMl3if%2FLFx4NenL2CLuQAiBnN1fOkELeH8bFD0or%2BxQ4skK847RrNH0ccu3vmsJA2SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoGBdnDd6oqteikxKKtwDWlRdgvXFJ6HxDNM9e0vcTSh2hKvyg%2Bs93h2H5vf5GX34I2ax8uGdxFTQra%2FF%2Fk%2FTEKlfo1Km6yPfvY%2FNpA6QUWfHCVKU94j2x%2BU9gxU8eq7RUL8gHTndnYdlYiUE%2Bau8ClZ8TUudXyJsPtwSziXf5GHPgSl%2FG30gxqsrThyoAsasoP%2BvQIjylP2IGe9EcfDHIm5tMRMCUOcXW2fD0wR1iKurUtObgWey6enSDjDTg%2FybVSIo5QPadAei%2Fe%2F9w93G76ZBx7xtXfHyPNUMEJVOzUFvIo5XR%2FszlVW%2Bg5PEWF07nMcdmyeoP1XemoKTvDN9FPcyPideMam2kuOTz6HmrMKwFeusEOjqHoxKf7et%2F49LdiqNLaRO8bBkPhlfhisVbA%2BUgJNZauW6Awh6tjQHBbjsWQPdI7BGP9mAaIuttjWIqxuE4UgBwnS7NP2jkrpyufhO7DTIN9hSjNv1qg2vyzBDdy6hKFtGhDQ2f%2FX2G6Njqhplpo8TQdKKmy1QZJXDujvNCTN1cQCsRwkesOyUyn%2FQAyTu0t5IbR8l%2BrIbwYbKmYfvKsQuNUJGy8RA581kRhAmqrBM4oWvL1quk9hpR2N2BRcNTZD4icaUHO%2BirjrZi9CamJdFnWDxLqUwlK%2FfwQY6pgHwk04IjzCQNHtHlWsejd7qM%2BjrD9bMbBRtcM6hMWAzvSy2QYFCgoDzc32AmJhACju2BQ%2BAZgNXHpQAR2xshlS56Cw%2FXcJmIG3QURgM92%2Bpxu4dkx61e87c%2F5B7Aw3VNzG7MXjhCqtSzLQJLcF%2Br07Z3Xn9QfthWXCyVXXZUSwGhlhuEHyD2wpNb9ks2KcwdnKGel6jo7Xjm0co03JY4ELu5p6DoR2x&X-Amz-Signature=a78c1ec2e1fc5eddfbc6f61f261155009acd5e6ff37b264b032c5da2a13d8ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBLAQWD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN7KahsZ4bi1ZrdftYjAXufKMl3if%2FLFx4NenL2CLuQAiBnN1fOkELeH8bFD0or%2BxQ4skK847RrNH0ccu3vmsJA2SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoGBdnDd6oqteikxKKtwDWlRdgvXFJ6HxDNM9e0vcTSh2hKvyg%2Bs93h2H5vf5GX34I2ax8uGdxFTQra%2FF%2Fk%2FTEKlfo1Km6yPfvY%2FNpA6QUWfHCVKU94j2x%2BU9gxU8eq7RUL8gHTndnYdlYiUE%2Bau8ClZ8TUudXyJsPtwSziXf5GHPgSl%2FG30gxqsrThyoAsasoP%2BvQIjylP2IGe9EcfDHIm5tMRMCUOcXW2fD0wR1iKurUtObgWey6enSDjDTg%2FybVSIo5QPadAei%2Fe%2F9w93G76ZBx7xtXfHyPNUMEJVOzUFvIo5XR%2FszlVW%2Bg5PEWF07nMcdmyeoP1XemoKTvDN9FPcyPideMam2kuOTz6HmrMKwFeusEOjqHoxKf7et%2F49LdiqNLaRO8bBkPhlfhisVbA%2BUgJNZauW6Awh6tjQHBbjsWQPdI7BGP9mAaIuttjWIqxuE4UgBwnS7NP2jkrpyufhO7DTIN9hSjNv1qg2vyzBDdy6hKFtGhDQ2f%2FX2G6Njqhplpo8TQdKKmy1QZJXDujvNCTN1cQCsRwkesOyUyn%2FQAyTu0t5IbR8l%2BrIbwYbKmYfvKsQuNUJGy8RA581kRhAmqrBM4oWvL1quk9hpR2N2BRcNTZD4icaUHO%2BirjrZi9CamJdFnWDxLqUwlK%2FfwQY6pgHwk04IjzCQNHtHlWsejd7qM%2BjrD9bMbBRtcM6hMWAzvSy2QYFCgoDzc32AmJhACju2BQ%2BAZgNXHpQAR2xshlS56Cw%2FXcJmIG3QURgM92%2Bpxu4dkx61e87c%2F5B7Aw3VNzG7MXjhCqtSzLQJLcF%2Br07Z3Xn9QfthWXCyVXXZUSwGhlhuEHyD2wpNb9ks2KcwdnKGel6jo7Xjm0co03JY4ELu5p6DoR2x&X-Amz-Signature=10334cb97a349338ec6f346de415952eac82613197b6c4ddeaf490859e1b833f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
