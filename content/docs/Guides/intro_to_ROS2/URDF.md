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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JFFG77%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAqadqbMKx79JXlah0Cs5VV1vIRfCN87b1JmrU%2FpnYtdAiBcl3dfSVNm3b%2BXL763V978tL1FjWeIo7azKeo3QViISCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYy5vrP8b8THt8sH3KtwDEvnORkV7y1O7Q1HpLMsmLNhzqaj8IbF5f8gg7KfuCrQs5bY3Adc3W4TiYjd41b%2FQ6N8gsGtcVRXewe%2BcS04s4Yj%2Ba2igIWSahZzB%2B6Z0lROk%2BSKCHJktbzt8f9wpkh5u%2F8rBD5AOPXNfJp1aBIB%2B9PuUVzdvg5cZepga35D0e15OAVlIo%2BdzbtygErqYd5KsoALciH%2FdNlSMjgTTaqomwLHi8WQRzdBBHnnTzOgJLIpD%2B7CA53pZYYNF%2F%2FiQPebybdCo1Z6NaRPUXAyRLKeJ2EDK4tNZEWw2c0Zf2nVG4KXQdBq%2BxMbGWqOt0Ap0%2FQqo5X14Tc9QIy7HycZeowLDPoUrywwnz1xUNlWtEqQul5EI7nLRY06Zy3alG5wLp4saOINQMMs1%2FPkh5ehnD8oGV%2FFtoQOMFMKhHU1166yJd2DnDcsacjH8RG8ro%2FZJlCrnH91UeCSN4Co0cRGBSLmm1rnCx5WmS8FpETy4C7BjX0Dswv9%2F7%2BP9WM1Ni7d8%2BZyDBLOoFlikhbUIuUwLFHdCFkd%2B431HoI274ALzaSDDzXQsVGUyEejVPhgwfKZsQhr1ssEkPZEqD9gs%2FcSKo%2Bz2Nclw%2F3MzHdDJEUSUOssVLs8r%2FFPiD4bnkrrLKZMw2amJwQY6pgHxaSsAYYeYWsbQg5w58bZi8xz05EfUfyXa0qx59Netd2QfOYqU2n1RCohCxwm0YnN64L%2F0szCV7ZjoGjURstDbpLcCgfwWhmdHWVSMynVUQXJywqWHFbNUnTZ1GHCZOY9uueGdhM%2F%2BrVhNOxgj%2BANbUmJ5DLofHCN3t8wgDdwemSKlMfOC%2FlIMygiHHdDEVKPYjl%2BSrAdRnqnBCu%2BHIOnW8Hr9yFEz&X-Amz-Signature=8f06ce4dce3ad26d3b7361f0e4794364b63db86f4408eccccf90b6789a6f923c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JFFG77%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAqadqbMKx79JXlah0Cs5VV1vIRfCN87b1JmrU%2FpnYtdAiBcl3dfSVNm3b%2BXL763V978tL1FjWeIo7azKeo3QViISCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYy5vrP8b8THt8sH3KtwDEvnORkV7y1O7Q1HpLMsmLNhzqaj8IbF5f8gg7KfuCrQs5bY3Adc3W4TiYjd41b%2FQ6N8gsGtcVRXewe%2BcS04s4Yj%2Ba2igIWSahZzB%2B6Z0lROk%2BSKCHJktbzt8f9wpkh5u%2F8rBD5AOPXNfJp1aBIB%2B9PuUVzdvg5cZepga35D0e15OAVlIo%2BdzbtygErqYd5KsoALciH%2FdNlSMjgTTaqomwLHi8WQRzdBBHnnTzOgJLIpD%2B7CA53pZYYNF%2F%2FiQPebybdCo1Z6NaRPUXAyRLKeJ2EDK4tNZEWw2c0Zf2nVG4KXQdBq%2BxMbGWqOt0Ap0%2FQqo5X14Tc9QIy7HycZeowLDPoUrywwnz1xUNlWtEqQul5EI7nLRY06Zy3alG5wLp4saOINQMMs1%2FPkh5ehnD8oGV%2FFtoQOMFMKhHU1166yJd2DnDcsacjH8RG8ro%2FZJlCrnH91UeCSN4Co0cRGBSLmm1rnCx5WmS8FpETy4C7BjX0Dswv9%2F7%2BP9WM1Ni7d8%2BZyDBLOoFlikhbUIuUwLFHdCFkd%2B431HoI274ALzaSDDzXQsVGUyEejVPhgwfKZsQhr1ssEkPZEqD9gs%2FcSKo%2Bz2Nclw%2F3MzHdDJEUSUOssVLs8r%2FFPiD4bnkrrLKZMw2amJwQY6pgHxaSsAYYeYWsbQg5w58bZi8xz05EfUfyXa0qx59Netd2QfOYqU2n1RCohCxwm0YnN64L%2F0szCV7ZjoGjURstDbpLcCgfwWhmdHWVSMynVUQXJywqWHFbNUnTZ1GHCZOY9uueGdhM%2F%2BrVhNOxgj%2BANbUmJ5DLofHCN3t8wgDdwemSKlMfOC%2FlIMygiHHdDEVKPYjl%2BSrAdRnqnBCu%2BHIOnW8Hr9yFEz&X-Amz-Signature=84846f33e3d1e9e1fea929d350d8ca8c13ecf38d632e17c26a94b0f8ecfb9e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
