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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALUNU24%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGAqer2U7jl%2Bbv21120I0BKeLnQ3M8BpZ31bbttoz%2BYFAiB7YHKiRKYgNBEhwxiiatY6lv9tFEpIEMYgowKHRpFAXCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqZqgTosYAZTdKqvKtwD2a82YJ30iWguGls3iKvqN7OEztcMkTKZppe1cI2t7TUkvlnXIq9ibLzohD2Zbh%2BajbNQ0rEMJJcwzLHqBmtc0xq4sMZTqpEd8Q6G%2BFgAxvStxa%2BNrvvCsGYitJgXoS0sn20MUrxkSd4ycV04DuQg7V7hGJszClhMZbGq5y%2B1XwRcev6yCoKLJK%2F7Itefn3XSgOG%2FzWY9uBc2rIxPfbOFXiIDh7oxekGXUldgtX90aFjxNjwsfClPucfbsg%2FuBOo6PZPp5p259kH43Ilv3xZHQrBat22vmAW5yRAcKmqQaZ%2FWyzUUzVsnVhK4UgVOPBuwz2lCONAK10gD6csDpKTxCeoVQ8EMvVArnm7pU1Yp7oMmdaho4Xt%2BOl06irMqU0V89tWwOn5wEjrM5e%2FCGOZClRjq11Mv46cKiSoqZZdjbYy8t7UcK1ih3GLi3mzIPdda2%2F%2FFRu27as0RgBQlolMYFPNaY7SdW0hFtO4CzpxyjzLZr5mV6TfC8KTmmjeDjLOxAVfgyBK%2FS9MGN2rYlYhSCuL4I6jyimncf1nUn0aa4ejlBvNFrpkulQfn3h4G5AXAq4IzfomOYh3%2FvLn6SHLpXYqfdgqmNr9NAA16T5t%2FPiSpX4REEyZ6vYAoza0wzai%2FwQY6pgGgmr5hNHiEPJ6f5ajz0x7X3PsDPlZSdnvkzkRLCZ%2Bj%2FXVobkLvFjfGUQlomm9X%2FV%2Fg2nY%2F2V3kMiWlaK9EP1x8fW8JjsNHFwATZFMHAA5teHvYR3XBGA3kDE5Z8eY3Y1F5nJa7sbAHvVGnhU8xz7WeuE1Wpcu8ZFv8bLZuIg83c15dPMhErnWO%2BGzb0uu1nznCim%2FOVcWoCAAr7%2B4G%2BN4lk00bcchl&X-Amz-Signature=c3bd87d264dce12aa105db288332cb68b1dbe473bb9657885d5eb61c2f11d070&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALUNU24%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIGAqer2U7jl%2Bbv21120I0BKeLnQ3M8BpZ31bbttoz%2BYFAiB7YHKiRKYgNBEhwxiiatY6lv9tFEpIEMYgowKHRpFAXCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqZqgTosYAZTdKqvKtwD2a82YJ30iWguGls3iKvqN7OEztcMkTKZppe1cI2t7TUkvlnXIq9ibLzohD2Zbh%2BajbNQ0rEMJJcwzLHqBmtc0xq4sMZTqpEd8Q6G%2BFgAxvStxa%2BNrvvCsGYitJgXoS0sn20MUrxkSd4ycV04DuQg7V7hGJszClhMZbGq5y%2B1XwRcev6yCoKLJK%2F7Itefn3XSgOG%2FzWY9uBc2rIxPfbOFXiIDh7oxekGXUldgtX90aFjxNjwsfClPucfbsg%2FuBOo6PZPp5p259kH43Ilv3xZHQrBat22vmAW5yRAcKmqQaZ%2FWyzUUzVsnVhK4UgVOPBuwz2lCONAK10gD6csDpKTxCeoVQ8EMvVArnm7pU1Yp7oMmdaho4Xt%2BOl06irMqU0V89tWwOn5wEjrM5e%2FCGOZClRjq11Mv46cKiSoqZZdjbYy8t7UcK1ih3GLi3mzIPdda2%2F%2FFRu27as0RgBQlolMYFPNaY7SdW0hFtO4CzpxyjzLZr5mV6TfC8KTmmjeDjLOxAVfgyBK%2FS9MGN2rYlYhSCuL4I6jyimncf1nUn0aa4ejlBvNFrpkulQfn3h4G5AXAq4IzfomOYh3%2FvLn6SHLpXYqfdgqmNr9NAA16T5t%2FPiSpX4REEyZ6vYAoza0wzai%2FwQY6pgGgmr5hNHiEPJ6f5ajz0x7X3PsDPlZSdnvkzkRLCZ%2Bj%2FXVobkLvFjfGUQlomm9X%2FV%2Fg2nY%2F2V3kMiWlaK9EP1x8fW8JjsNHFwATZFMHAA5teHvYR3XBGA3kDE5Z8eY3Y1F5nJa7sbAHvVGnhU8xz7WeuE1Wpcu8ZFv8bLZuIg83c15dPMhErnWO%2BGzb0uu1nznCim%2FOVcWoCAAr7%2B4G%2BN4lk00bcchl&X-Amz-Signature=51b4fb316472f1d8e8617b48dd4769af8fdb767ca94a92e92c55793c0dc907c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
