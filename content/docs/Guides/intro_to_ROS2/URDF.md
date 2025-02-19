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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCWPDIZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9qN8Dq9yz2KgdOaU8ZFGmTpbZzzgOYGndRbSxiahjPAiBsLBbUIotwLUcJ2bqhZTmJMWups9DA241f2zIp7jR5myqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz18wBz2HONq2TZ4mKtwDjY0Tyq9J3EyswHHY0eKJJOejgK0bGyQWs%2FTs%2FdPulLKOq9n2fWxpgwYSxzCpTnQdPgpHkWPDGZzOM0eK2pDqnrJTj1N1ZJgwEB9Qv7zh8QJlH6s6FRLzFvYzjFQ9fYGZlSCgHFxb81p03JVu%2FOYB%2Fhb%2BkTIfGxrRNyjRyZxhzpNyoCGfwSXrbfs8hXmwSAOEkJqGBGodc6TRAhkRvJmc47rDtH05yzjd%2B37NwvXUmhUZl1soiUIR1TVRgEUl2UJdkAkI3p%2FBSvrIgUr5A24swerIcc6tJLER2q4DW5ezgYldkEAixceREPrTqJiStl1pinfP8tpj%2FdM6pyzXfopiGW%2BezY2fzyekBPkZY%2BVNIONWe4HwfgFR70niYbLDr0w48jKfNNmDHM1ZVbLrXMvyVWTaH%2FfEjpeKBVehBT9y6KowC3oGQq9cZsPRhvZzZUnSRBZ7M5qdb6O5kOg6GqPrnjXQh%2FsFL8dGtcKNL3xwSwdSqILTFNItlrHClY13bS%2FN05bu%2F5Ir384m3XN00ITC6VR5Emt7RZZnM5%2Fhy4ihGwlbljCOYTjqL92P8%2FubUZSJ8v14ynR6HDhNO6qhHnkVqfqmDT5JDOEI4Ow7w%2BJGtjtXd8lZ2blhQMl8PAgw7rXYvQY6pgFc5R6vEYwVtoN4ftfbLnIOp2T6XXSmEL6utMgWqJx7QjgDJ3FzgcUCtdCpvqxyMoLeWO5hs%2BpwV9epA3HiROOK0n1DPuonapaJGvdJxMrxU4thArrOKEMtFBJn70B5eWODUv%2B7uj%2BwhiRMtLEqbz7CwS2mhaLEwFTvwvybsceIMid%2B014NNu8%2F%2Fp0QRgLY6S6ZEGehT6ksTvu6tiHdBO%2F2dFa6HyiD&X-Amz-Signature=9fd213091569c167e95e72ccbd6f6cb66eb3b5f3d69703f22e8c96da9904b575&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCWPDIZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9qN8Dq9yz2KgdOaU8ZFGmTpbZzzgOYGndRbSxiahjPAiBsLBbUIotwLUcJ2bqhZTmJMWups9DA241f2zIp7jR5myqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz18wBz2HONq2TZ4mKtwDjY0Tyq9J3EyswHHY0eKJJOejgK0bGyQWs%2FTs%2FdPulLKOq9n2fWxpgwYSxzCpTnQdPgpHkWPDGZzOM0eK2pDqnrJTj1N1ZJgwEB9Qv7zh8QJlH6s6FRLzFvYzjFQ9fYGZlSCgHFxb81p03JVu%2FOYB%2Fhb%2BkTIfGxrRNyjRyZxhzpNyoCGfwSXrbfs8hXmwSAOEkJqGBGodc6TRAhkRvJmc47rDtH05yzjd%2B37NwvXUmhUZl1soiUIR1TVRgEUl2UJdkAkI3p%2FBSvrIgUr5A24swerIcc6tJLER2q4DW5ezgYldkEAixceREPrTqJiStl1pinfP8tpj%2FdM6pyzXfopiGW%2BezY2fzyekBPkZY%2BVNIONWe4HwfgFR70niYbLDr0w48jKfNNmDHM1ZVbLrXMvyVWTaH%2FfEjpeKBVehBT9y6KowC3oGQq9cZsPRhvZzZUnSRBZ7M5qdb6O5kOg6GqPrnjXQh%2FsFL8dGtcKNL3xwSwdSqILTFNItlrHClY13bS%2FN05bu%2F5Ir384m3XN00ITC6VR5Emt7RZZnM5%2Fhy4ihGwlbljCOYTjqL92P8%2FubUZSJ8v14ynR6HDhNO6qhHnkVqfqmDT5JDOEI4Ow7w%2BJGtjtXd8lZ2blhQMl8PAgw7rXYvQY6pgFc5R6vEYwVtoN4ftfbLnIOp2T6XXSmEL6utMgWqJx7QjgDJ3FzgcUCtdCpvqxyMoLeWO5hs%2BpwV9epA3HiROOK0n1DPuonapaJGvdJxMrxU4thArrOKEMtFBJn70B5eWODUv%2B7uj%2BwhiRMtLEqbz7CwS2mhaLEwFTvwvybsceIMid%2B014NNu8%2F%2Fp0QRgLY6S6ZEGehT6ksTvu6tiHdBO%2F2dFa6HyiD&X-Amz-Signature=909393d97c93247829efac54f5088046e304cab860c77549d1d6ac1c9f2b0e88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
