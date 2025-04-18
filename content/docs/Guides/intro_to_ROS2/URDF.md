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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656STY24C%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbScDD6%2B1Am4sUC9QILnXwfSAeVC6UY8qu%2F73UcoePAAiBInSwcLllrSy%2FerUjyZeSywD9ovUO3ePr9Mgv68pb9sSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMp5CGOYbZt2UItiouKtwDBAg97ml3BuGzxioQPQ5dh3CUxXpufkOiI2PcdCEzLRBlT%2Fsui3n65wl%2BwT0EYGtv7M6COK8FjqgzDMxvIESRFjZ9x1xWoZ6NZ6vRKKwl%2BDystLhTAUWnZ6l3geINXe0jJH7u6OWFl6Rs9Bl2ibQaJZZQNI3xCUu%2BNZWNkXNjOuhN7U9rXMSYxjBsUcCIbtpropVlclWagR2RTThHko0mxdGYUsF4ax9iYhjZSIfj40awtLMNux4WoSqCxWdQDkM3K0Z9KdDVr5xCxldZlLIffjdEjx89FNneAWb1WQsjdj%2FmRcBUvfwY5Lvj2y8wJLF4qmpB2eVpBjCl7KL5OaUOlkNm2vX25lmcsnASj7NyjV%2FNeMASZjPJLYdE5b0%2B0j3h1Ia8bxfKmUupABezDbvinqIVmN2s5Nu00HOLNM3XecFmK44YoLx5RGf6uAqCMWGYWKza%2FnmNTNUildz5CSzn2HscRMHZjE0ikbR%2FtZjqJ3WyiZPqugPCcMCKmSpdOLcFF%2FZA0pLiVDZE5quffYCrZ60PJt6zybTnaPoC%2F6krl2be79LiyCaySC8anoOzTsf21P2UEBLEpbPspdRq8sRpjHTVj861SAre%2B88nqST%2F9p25Xw1WRgxTlqj9x%2FEwnY%2BHwAY6pgHoXX3UxkNXt%2BXE9WEMtCqrhxGHBWAkXEr8f1ExjzTzWtdDyiffKC0CwHM2BZWMDbgi7TNgy0igT%2BNxvKKE6A%2FUG6%2BBZ6mUrQI67iDUmIoowVDJeKUne%2BvmWpJNbNQbtg6g%2FPTfpSaTvqOmGtCHWXs3gtCaFaq%2FmDGQuT%2B92ltvN%2BSQX6ukCP%2Bku4ZKV2Ujiiilv4ogkjnJViq8EN0pZPoE2bSl%2B52u&X-Amz-Signature=84f1d8baf90d3fcfdb0adbe821868e20cf0f614eead1ad989e76378e589f2e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656STY24C%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbScDD6%2B1Am4sUC9QILnXwfSAeVC6UY8qu%2F73UcoePAAiBInSwcLllrSy%2FerUjyZeSywD9ovUO3ePr9Mgv68pb9sSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMp5CGOYbZt2UItiouKtwDBAg97ml3BuGzxioQPQ5dh3CUxXpufkOiI2PcdCEzLRBlT%2Fsui3n65wl%2BwT0EYGtv7M6COK8FjqgzDMxvIESRFjZ9x1xWoZ6NZ6vRKKwl%2BDystLhTAUWnZ6l3geINXe0jJH7u6OWFl6Rs9Bl2ibQaJZZQNI3xCUu%2BNZWNkXNjOuhN7U9rXMSYxjBsUcCIbtpropVlclWagR2RTThHko0mxdGYUsF4ax9iYhjZSIfj40awtLMNux4WoSqCxWdQDkM3K0Z9KdDVr5xCxldZlLIffjdEjx89FNneAWb1WQsjdj%2FmRcBUvfwY5Lvj2y8wJLF4qmpB2eVpBjCl7KL5OaUOlkNm2vX25lmcsnASj7NyjV%2FNeMASZjPJLYdE5b0%2B0j3h1Ia8bxfKmUupABezDbvinqIVmN2s5Nu00HOLNM3XecFmK44YoLx5RGf6uAqCMWGYWKza%2FnmNTNUildz5CSzn2HscRMHZjE0ikbR%2FtZjqJ3WyiZPqugPCcMCKmSpdOLcFF%2FZA0pLiVDZE5quffYCrZ60PJt6zybTnaPoC%2F6krl2be79LiyCaySC8anoOzTsf21P2UEBLEpbPspdRq8sRpjHTVj861SAre%2B88nqST%2F9p25Xw1WRgxTlqj9x%2FEwnY%2BHwAY6pgHoXX3UxkNXt%2BXE9WEMtCqrhxGHBWAkXEr8f1ExjzTzWtdDyiffKC0CwHM2BZWMDbgi7TNgy0igT%2BNxvKKE6A%2FUG6%2BBZ6mUrQI67iDUmIoowVDJeKUne%2BvmWpJNbNQbtg6g%2FPTfpSaTvqOmGtCHWXs3gtCaFaq%2FmDGQuT%2B92ltvN%2BSQX6ukCP%2Bku4ZKV2Ujiiilv4ogkjnJViq8EN0pZPoE2bSl%2B52u&X-Amz-Signature=53ce0579cdcc7e236d988b569df057c8f0449bb711a25e1fd72d43aac4c0cc61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
