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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PBZ6MZL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDEfHvO5ZoAImGDhMW%2B%2BclOAeSvSY3j0DOc4y8dDc0ClAIgTTmq5UJrbxcVPitdSY7y32CP9D2BfTfhturL%2BSZyRK4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAW%2BXq%2BFaDwmE3bK0yrcA9OY8L9MDm3C0m1fn6nbdnjtkc8f9uMpDYQkuLuPA9Jp6B%2BhwrH48vkWKkqHCw8WGKrOnp%2FdzzgMeK%2BLz74UGhckoQLCB2MxMJv6YLr%2B9aLuvDQ2bjmLNj55tx33BTsewv2bOCvduztN8LCxzsmIwMgRf3n%2BUZ%2F79RarDyuAkIDISuMdl32rbDsOwGxtjbDPPbpwGY3AT03%2B8A8VyxAfHH34lwD9LU2B9BfmVD3gct97hyNAdYcXATiVPFX7LVnU%2Bt%2FHbDSv6n%2BztJxOe5uSb7J7YQZ0zU0AKNajeFMn1CtThiNRnWz9TjF%2Fi3tQI%2FcnWIsMrf7UczeZnwBK8913s6fBi4dJa8u5T1qPjO2TcujXgZFCN7As%2FvePMyIUggQ1mF%2Fl7%2BEiw9ThIZcqHyu7wWJIX8h0VQK6D6jnaBzullRz9AghHR%2BlaZiylsI9DvBFfTgYHEmTfpEzI6T6afQYlG3909RWe4Hp7tDwua5%2BKztPHEkuykJAzJDVSQ24u9V5Cd3yM3mVR3stYN89xWTkDrzQP%2FQNGnGv6NAfBbDWiSkeEMvajQN%2BRKPqG5HhaDVeIJ7TmNFNStKH1HPAlHElGnwecjYbKOxi0KFIm9CZR%2BicqCPJeOk1gpOSYFbIMPCz970GOqUBSnptGCqEbyHqjtfbM197JIQ0gwqF49LjfFKxj5GbXtf9UyDNCTNNLlAVfAMa2TVxzbe4q55i%2BYIXeYEmciQTkETHdOFYSPfEypZOpWrv0XJLR6FgSVboeWdONjhWLEJ7IRqCV214MfQKJY7o01O4o0WbpecbyNpfsJco%2FXwZSLWzYVao3IA6qiLDuMAYXsqB9LzfpFEHVMDff2gOmlCLYHupb032&X-Amz-Signature=2a82dc4efb96c8d690dc2cd6f43f00138909665590cf3b7f1bbd0143298cecfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PBZ6MZL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDEfHvO5ZoAImGDhMW%2B%2BclOAeSvSY3j0DOc4y8dDc0ClAIgTTmq5UJrbxcVPitdSY7y32CP9D2BfTfhturL%2BSZyRK4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAW%2BXq%2BFaDwmE3bK0yrcA9OY8L9MDm3C0m1fn6nbdnjtkc8f9uMpDYQkuLuPA9Jp6B%2BhwrH48vkWKkqHCw8WGKrOnp%2FdzzgMeK%2BLz74UGhckoQLCB2MxMJv6YLr%2B9aLuvDQ2bjmLNj55tx33BTsewv2bOCvduztN8LCxzsmIwMgRf3n%2BUZ%2F79RarDyuAkIDISuMdl32rbDsOwGxtjbDPPbpwGY3AT03%2B8A8VyxAfHH34lwD9LU2B9BfmVD3gct97hyNAdYcXATiVPFX7LVnU%2Bt%2FHbDSv6n%2BztJxOe5uSb7J7YQZ0zU0AKNajeFMn1CtThiNRnWz9TjF%2Fi3tQI%2FcnWIsMrf7UczeZnwBK8913s6fBi4dJa8u5T1qPjO2TcujXgZFCN7As%2FvePMyIUggQ1mF%2Fl7%2BEiw9ThIZcqHyu7wWJIX8h0VQK6D6jnaBzullRz9AghHR%2BlaZiylsI9DvBFfTgYHEmTfpEzI6T6afQYlG3909RWe4Hp7tDwua5%2BKztPHEkuykJAzJDVSQ24u9V5Cd3yM3mVR3stYN89xWTkDrzQP%2FQNGnGv6NAfBbDWiSkeEMvajQN%2BRKPqG5HhaDVeIJ7TmNFNStKH1HPAlHElGnwecjYbKOxi0KFIm9CZR%2BicqCPJeOk1gpOSYFbIMPCz970GOqUBSnptGCqEbyHqjtfbM197JIQ0gwqF49LjfFKxj5GbXtf9UyDNCTNNLlAVfAMa2TVxzbe4q55i%2BYIXeYEmciQTkETHdOFYSPfEypZOpWrv0XJLR6FgSVboeWdONjhWLEJ7IRqCV214MfQKJY7o01O4o0WbpecbyNpfsJco%2FXwZSLWzYVao3IA6qiLDuMAYXsqB9LzfpFEHVMDff2gOmlCLYHupb032&X-Amz-Signature=87fb1faa40c9c081b32c2764b219dc96f5e5f65ab87d370f20b860f839a5f5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
