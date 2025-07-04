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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSBUISI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICGo3K9xsCA%2FJkjFWW9HEuyl8502vnYLcFmBOJb%2FIoEHAiBiGlTvy4akicdaAzidK9JF4qW796wmOEo6JHkqPfWHASr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMvGr45stXuxMMFM3MKtwDZg%2B9FIUIS4nXJbwm5pJZgAHVwWmWM2P8o9Xyzi%2F207jNqd1KYCdIOw22RcQINetOn%2FOHIis8mCqkOMVGE4MYK9NfCcBZ6Cls0rJp8yLzKUmg3XXjsfrBOPRldOnvuqtPhU74h9jx8luHmpV1NIjhoMn%2Fyuj0SXKodvYrZNm0U1D8LRbxaa8M9ICKzUai3jGM52t7RtCCex9m6pR1d8jhS8veXRmzHO%2BCEjOOAJ%2BXMsVLFedCkw%2FmmOD%2FlSkiUTigstS8hpfMAuZInkRqtVzlglCI8IjPd1oiGjObzHkuv3TgxJeQMb%2BbusL5mlltWrtGiYyswjna2lq8Zzk5UYXSfDA6eK31K9eKpxyJJcgDYwf%2FiAlB6LYcYKrmaqdrS71T9UFELmFu8YNl65uOA1RId6KvgnwflkSP1XPXQSdI50d2EBi6UEEHp%2FRPb%2FNlQ09Fj1J3gHcMWI5wyxHVg6uDO4xM3ZxP8%2FfkH0XhQrkW6VVcNn0Ey0CG5OLamLvsTyoAgWkrTqOCVR86PHCux%2FAuNbdLWi%2FC16pKJw5rUJ0ewcrkxt125CDua0uX6RERheWS3CoeKvQVcFPNm0zDEVhlp5kCQSW%2Bt49Nk%2BKY7ZdQ1rpewBndo8n6Me7uWfcw3o2ewwY6pgHSXuUc5ljdmr6Ydo5ufQdN6%2FzYa4968kPcR9dO8zhcKQiFxLfSgBo%2FPNWNOqjQ95EhbMRbynopGJmEW5HDOFySkuJ41GH0s%2BWNu%2BFb2JQDKAk%2Bk5CtRSv28Ke8CDTOc6y0Ee2C70lqm3ylujWsX2glr3UKUgutw9WsfjLWRPqpeKsveWIuJy8drLbajibnDJRKzCi4dViqOVnu3vjYNGQthkUvgewH&X-Amz-Signature=a8389cfb1a282b5aea6d798c9f8e9f64ab9fedf61308ad414f6d1dec438c6cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSBUISI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICGo3K9xsCA%2FJkjFWW9HEuyl8502vnYLcFmBOJb%2FIoEHAiBiGlTvy4akicdaAzidK9JF4qW796wmOEo6JHkqPfWHASr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMvGr45stXuxMMFM3MKtwDZg%2B9FIUIS4nXJbwm5pJZgAHVwWmWM2P8o9Xyzi%2F207jNqd1KYCdIOw22RcQINetOn%2FOHIis8mCqkOMVGE4MYK9NfCcBZ6Cls0rJp8yLzKUmg3XXjsfrBOPRldOnvuqtPhU74h9jx8luHmpV1NIjhoMn%2Fyuj0SXKodvYrZNm0U1D8LRbxaa8M9ICKzUai3jGM52t7RtCCex9m6pR1d8jhS8veXRmzHO%2BCEjOOAJ%2BXMsVLFedCkw%2FmmOD%2FlSkiUTigstS8hpfMAuZInkRqtVzlglCI8IjPd1oiGjObzHkuv3TgxJeQMb%2BbusL5mlltWrtGiYyswjna2lq8Zzk5UYXSfDA6eK31K9eKpxyJJcgDYwf%2FiAlB6LYcYKrmaqdrS71T9UFELmFu8YNl65uOA1RId6KvgnwflkSP1XPXQSdI50d2EBi6UEEHp%2FRPb%2FNlQ09Fj1J3gHcMWI5wyxHVg6uDO4xM3ZxP8%2FfkH0XhQrkW6VVcNn0Ey0CG5OLamLvsTyoAgWkrTqOCVR86PHCux%2FAuNbdLWi%2FC16pKJw5rUJ0ewcrkxt125CDua0uX6RERheWS3CoeKvQVcFPNm0zDEVhlp5kCQSW%2Bt49Nk%2BKY7ZdQ1rpewBndo8n6Me7uWfcw3o2ewwY6pgHSXuUc5ljdmr6Ydo5ufQdN6%2FzYa4968kPcR9dO8zhcKQiFxLfSgBo%2FPNWNOqjQ95EhbMRbynopGJmEW5HDOFySkuJ41GH0s%2BWNu%2BFb2JQDKAk%2Bk5CtRSv28Ke8CDTOc6y0Ee2C70lqm3ylujWsX2glr3UKUgutw9WsfjLWRPqpeKsveWIuJy8drLbajibnDJRKzCi4dViqOVnu3vjYNGQthkUvgewH&X-Amz-Signature=0104c7f4263d496007ba9d486e1097f23d70b9f9a88d77d3155b0ceb277eea22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
