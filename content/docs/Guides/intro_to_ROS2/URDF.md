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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JPDXKI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGWpqS3PCMmU8NmPJz1nG1h7SHg4TnpEL%2BFHKOoY%2FtN5AiEAwL1PP4%2B4Kk%2FG2WdTbh80TnVFhLipyzvGnZV1rw80rvAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIGDUSkv90G6YYhmVSrcA%2FrCmONMvPR1Det7o6sp0tk90m70vBoGPM6R%2FAtnGgIR2WoBxuTkXz5m%2FwYNSZMfBJUysWJSqmXbqRDU59MxQhWCvP3UTsrlHOeDJCxzmp93G5GoP54ooo3UjEBqd5p5lDB%2BSiQesplF1bVJhxou6psDFKhh%2B%2BngVeDQo95RW3%2BztIPgtGLsmhAta8WlTpFlJw9jfEEWy2oX1SigI%2B2EJ9dBy%2BRlWMMy8XoGd8tsjS5i5E7pmafpxtrE9B5ZVMfKt09jQqRBYBq1jIJMnISQL%2Fp8Fn896iI0jnBYGI6KAVFFVIomuXjdzSw5%2FQsjak4OKA%2BkMdigHy3d%2B1gA2ZsN%2FXgXIprrs1aPeywTfYzmnAUVR2e7wz2unwWc365sP0HCBDFn3SjHHypciZ6cY2GKWMZ8BeRH9LFnCCN6KcEYkjez93s0VqrU1bXlW8JMd1gBEzb803yhIROQaaPaVOCtX2ZM9nqj%2Bg50rYHYT7kD7qpIBUyHwKWhmJt5rXT74XH9aXlyhv4xVXGsgOZvRIn%2F%2F%2B0L190GKGkgWsJQuin467iVRDF%2Ft9xA6QC%2FMJB7YbBNscUts2MfChCq%2BJ%2B9P0Ex9NyQacKfzqvBaWNcNflepajctdMFOE3rSHHzsrhLMOr%2B6L4GOqUBlZqnpg0WNzcFqsx4OtSRvd%2Fyp6YrgmBLGvaRXad2vCYvVyAb62CrJzczuBytyYp4zVo30BW8vN198zXXl6QQsdu8DIZj7uHQzjm3lyQZmjkH%2F1GuZ%2FGKi7joS3XABFiciA03%2B8gpe%2BOisDLJr%2B7wFAi9vBgAaNJE3K5zZ47PS9JLa5gZAbjabR%2FWtZztshbo0JwDKRW4pOy90OJ2WwxLhhtFCvhk&X-Amz-Signature=1bc56fe7a395a5457ecccae1a5945471dbc4944b3addd0873908467e06d9975d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JPDXKI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGWpqS3PCMmU8NmPJz1nG1h7SHg4TnpEL%2BFHKOoY%2FtN5AiEAwL1PP4%2B4Kk%2FG2WdTbh80TnVFhLipyzvGnZV1rw80rvAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIGDUSkv90G6YYhmVSrcA%2FrCmONMvPR1Det7o6sp0tk90m70vBoGPM6R%2FAtnGgIR2WoBxuTkXz5m%2FwYNSZMfBJUysWJSqmXbqRDU59MxQhWCvP3UTsrlHOeDJCxzmp93G5GoP54ooo3UjEBqd5p5lDB%2BSiQesplF1bVJhxou6psDFKhh%2B%2BngVeDQo95RW3%2BztIPgtGLsmhAta8WlTpFlJw9jfEEWy2oX1SigI%2B2EJ9dBy%2BRlWMMy8XoGd8tsjS5i5E7pmafpxtrE9B5ZVMfKt09jQqRBYBq1jIJMnISQL%2Fp8Fn896iI0jnBYGI6KAVFFVIomuXjdzSw5%2FQsjak4OKA%2BkMdigHy3d%2B1gA2ZsN%2FXgXIprrs1aPeywTfYzmnAUVR2e7wz2unwWc365sP0HCBDFn3SjHHypciZ6cY2GKWMZ8BeRH9LFnCCN6KcEYkjez93s0VqrU1bXlW8JMd1gBEzb803yhIROQaaPaVOCtX2ZM9nqj%2Bg50rYHYT7kD7qpIBUyHwKWhmJt5rXT74XH9aXlyhv4xVXGsgOZvRIn%2F%2F%2B0L190GKGkgWsJQuin467iVRDF%2Ft9xA6QC%2FMJB7YbBNscUts2MfChCq%2BJ%2B9P0Ex9NyQacKfzqvBaWNcNflepajctdMFOE3rSHHzsrhLMOr%2B6L4GOqUBlZqnpg0WNzcFqsx4OtSRvd%2Fyp6YrgmBLGvaRXad2vCYvVyAb62CrJzczuBytyYp4zVo30BW8vN198zXXl6QQsdu8DIZj7uHQzjm3lyQZmjkH%2F1GuZ%2FGKi7joS3XABFiciA03%2B8gpe%2BOisDLJr%2B7wFAi9vBgAaNJE3K5zZ47PS9JLa5gZAbjabR%2FWtZztshbo0JwDKRW4pOy90OJ2WwxLhhtFCvhk&X-Amz-Signature=46815c003967de478fa8101646ed4eed457833b3c674e3d9f589b154a62948c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
