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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667737FMWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHrNDy2MadmsK94y6sWgdZ6WLiHPl9UKRA2tS00Vr6UiAiA3DgoZa2q00y5rU5cnkEsfO55q9ycFMpG5NFnpm0lg8SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6J7HonxiU7SIofrdKtwDluDWOVFO9pFYOSRtZlpiBl4dCGg%2F9H86PlOejmAvfJi5oIBmZwYAAafLBwW1GEla4%2Bc8tS4JP5PR78vV5RfOlkUPCwBEOzEyrOjm14hAlVY2k5AtB52ELVMvqdn95sdzPYV9%2FlH7MvyHAMuxtcj1cwZC42htnrPZDFAS5Ww7Ra9lrAbcbpxVePnjeBpna72rwXCjvMQnbRJO7Ez2KbM1h9YD8pirjMRZyxL7gi4ToA3HkCukr%2FWLXPZn%2BmR8rlnpioJ%2Fd6nA8pH9Gm569M1PgAuaAlO2lwH5NLVYekiihCXPeq8piM8adDQ%2FgNra7NG5zc4pDmwDnn5ZqvP7IeHPAS2o03JuvyHwMF09OT%2BC6eBu5G9NZJOo%2FVilbZKC%2FX%2FE9s0WeZANGBeZ1kKpmm2nPBilojDaZX0b3aeFvb6hW%2FSkip03z%2FJ%2FQeDQF1ve202%2FjnhzPBNgIBQ3i89Q%2ByyoPCE47Dnb0EpVGbuqdiMOHWGh6eL%2BgdEqbyGRWrRw0soP7b9EOcHdyOyb2Pc%2B2iYsO5IaHYKiB4tYC%2B%2FS73WSoq6kOx%2FTQ7rbnt3AO73bOXzJFPTMC9tZgweNFPvJ%2Fem8ePWr9d48FSu6lzS99zCgxXHe%2BM5Rfmd21wCHW18w0OTHvgY6pgEK3PIxd%2BF%2FO%2FYFt6rMSkzRURQIt8aF7d5Nuls7XejyCjRPCfiBnkE14VXvYFRA1TEpJATT6MqIbWB6skUaKJS9zqQiMrxp6QZREitqLwJaMXnhYoklDRigET9F6QYLIXnKtfQUzX%2BiHIuDH7BjCaZqKgyC6OT%2FMw5hloJNW%2B%2Fow59zBCTqe0pP1DZVcNIm0jsFDF2QwQIA6zF7ZIZkwsBY%2BEgj%2Fo31&X-Amz-Signature=7bd2529131021d384263d5b4f7c04a51641e8bd7b1fe4830648dea9fdba8fae8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667737FMWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHrNDy2MadmsK94y6sWgdZ6WLiHPl9UKRA2tS00Vr6UiAiA3DgoZa2q00y5rU5cnkEsfO55q9ycFMpG5NFnpm0lg8SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6J7HonxiU7SIofrdKtwDluDWOVFO9pFYOSRtZlpiBl4dCGg%2F9H86PlOejmAvfJi5oIBmZwYAAafLBwW1GEla4%2Bc8tS4JP5PR78vV5RfOlkUPCwBEOzEyrOjm14hAlVY2k5AtB52ELVMvqdn95sdzPYV9%2FlH7MvyHAMuxtcj1cwZC42htnrPZDFAS5Ww7Ra9lrAbcbpxVePnjeBpna72rwXCjvMQnbRJO7Ez2KbM1h9YD8pirjMRZyxL7gi4ToA3HkCukr%2FWLXPZn%2BmR8rlnpioJ%2Fd6nA8pH9Gm569M1PgAuaAlO2lwH5NLVYekiihCXPeq8piM8adDQ%2FgNra7NG5zc4pDmwDnn5ZqvP7IeHPAS2o03JuvyHwMF09OT%2BC6eBu5G9NZJOo%2FVilbZKC%2FX%2FE9s0WeZANGBeZ1kKpmm2nPBilojDaZX0b3aeFvb6hW%2FSkip03z%2FJ%2FQeDQF1ve202%2FjnhzPBNgIBQ3i89Q%2ByyoPCE47Dnb0EpVGbuqdiMOHWGh6eL%2BgdEqbyGRWrRw0soP7b9EOcHdyOyb2Pc%2B2iYsO5IaHYKiB4tYC%2B%2FS73WSoq6kOx%2FTQ7rbnt3AO73bOXzJFPTMC9tZgweNFPvJ%2Fem8ePWr9d48FSu6lzS99zCgxXHe%2BM5Rfmd21wCHW18w0OTHvgY6pgEK3PIxd%2BF%2FO%2FYFt6rMSkzRURQIt8aF7d5Nuls7XejyCjRPCfiBnkE14VXvYFRA1TEpJATT6MqIbWB6skUaKJS9zqQiMrxp6QZREitqLwJaMXnhYoklDRigET9F6QYLIXnKtfQUzX%2BiHIuDH7BjCaZqKgyC6OT%2FMw5hloJNW%2B%2Fow59zBCTqe0pP1DZVcNIm0jsFDF2QwQIA6zF7ZIZkwsBY%2BEgj%2Fo31&X-Amz-Signature=ec1a3c2ec3160417d731ea68b9e9acda1edfa52c9958869a3131c1f567ad059b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
