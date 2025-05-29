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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDBVIQG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7LNJr5i1nSL3JCZWSK0p7Go4il7P2eTi7qKvlN1qpOQIgAhORuBuNtOGqjBm0CqGW4iO2upInyqI3V9SaSZzTwrsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDrSUqJJvElmMMWGircAyY94JwciV4Y8Xh%2BmcAu%2BzuktEm%2FptONFQJWeBbV1k7U%2Fzl7GK96AyE2tEbHmPq150VisYYBtYQznq0rKGct%2FBprFPVutk0jlHgIczDMDrPr24wMuiNzwmkE2AvjrnrZh1mIw13P%2FKckVZqT2g1dIwU07OJ0VAzbKnNXrGFDqvcXzH0IA%2BEeZDnQM6CKSov2EUQoaGj7ESfgOlAWvdP4DEF1h2dBoaZGQ83osRhgo0tz26DO%2B8FjgEIg0LNOmUYq%2BMkyHPVlK2cEyehzdvvZBoQ9AhNVi7bjTMVGGGtOwDI%2Bd2Jb29fJCMAh16SJ2tmw01uGSK6ElONvyrQWcfYVzsMIhj%2BqpJiI6fZ8JMl8iukx%2BwFiaeUuvb%2F%2Bvgo4A2%2BeeALzdlUldGlRIWSeD8ilxcT2ApQBh01hXimVSRU7yVX7PlCKCnEcBf54yq%2BlMCgb6wRNb%2BIDVFBAuYcR2L6%2Bl%2Fbxbo11Yy7obHK8wPCaYsaJPzIJlRmYVLioG0xclZxRTrv%2Fb8Am%2BR742hUQsZ59xxnztHX%2FqVqyICM60%2F13P0Q6lOeSZtrNNU8HGTMrvGML4dN1nhgSzWQ3NRlEQGEBEUCEeb4k1bBlasIb89opGEYZrmllZ8FENmRVqp8LMNDi4sEGOqUBdhFWEeu6UicSf066Ba2KdupbFwfA27Lj3uM%2F6oNGm%2BKaKVNIzyzkKJ8wbEmpf4uiaL2u1gyj64i08PXLu%2FYzM3tugCd8m1JEtKjcnkmaPZYfpkBlywgIrok1YBDbZ8ugw6Qz8QeeXE847Pwnxs7fywGvfgsJMYq6wz%2FuZMrbXV9dhvimY29Hz3nYjj3FMt7c6J3H0DXr2wmT2AgI3Q9uYQIM%2Fh5z&X-Amz-Signature=61da1a6b536b2450ec523828dfc1324068236c4812c8c683e8485c69a45e5581&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDBVIQG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7LNJr5i1nSL3JCZWSK0p7Go4il7P2eTi7qKvlN1qpOQIgAhORuBuNtOGqjBm0CqGW4iO2upInyqI3V9SaSZzTwrsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDrSUqJJvElmMMWGircAyY94JwciV4Y8Xh%2BmcAu%2BzuktEm%2FptONFQJWeBbV1k7U%2Fzl7GK96AyE2tEbHmPq150VisYYBtYQznq0rKGct%2FBprFPVutk0jlHgIczDMDrPr24wMuiNzwmkE2AvjrnrZh1mIw13P%2FKckVZqT2g1dIwU07OJ0VAzbKnNXrGFDqvcXzH0IA%2BEeZDnQM6CKSov2EUQoaGj7ESfgOlAWvdP4DEF1h2dBoaZGQ83osRhgo0tz26DO%2B8FjgEIg0LNOmUYq%2BMkyHPVlK2cEyehzdvvZBoQ9AhNVi7bjTMVGGGtOwDI%2Bd2Jb29fJCMAh16SJ2tmw01uGSK6ElONvyrQWcfYVzsMIhj%2BqpJiI6fZ8JMl8iukx%2BwFiaeUuvb%2F%2Bvgo4A2%2BeeALzdlUldGlRIWSeD8ilxcT2ApQBh01hXimVSRU7yVX7PlCKCnEcBf54yq%2BlMCgb6wRNb%2BIDVFBAuYcR2L6%2Bl%2Fbxbo11Yy7obHK8wPCaYsaJPzIJlRmYVLioG0xclZxRTrv%2Fb8Am%2BR742hUQsZ59xxnztHX%2FqVqyICM60%2F13P0Q6lOeSZtrNNU8HGTMrvGML4dN1nhgSzWQ3NRlEQGEBEUCEeb4k1bBlasIb89opGEYZrmllZ8FENmRVqp8LMNDi4sEGOqUBdhFWEeu6UicSf066Ba2KdupbFwfA27Lj3uM%2F6oNGm%2BKaKVNIzyzkKJ8wbEmpf4uiaL2u1gyj64i08PXLu%2FYzM3tugCd8m1JEtKjcnkmaPZYfpkBlywgIrok1YBDbZ8ugw6Qz8QeeXE847Pwnxs7fywGvfgsJMYq6wz%2FuZMrbXV9dhvimY29Hz3nYjj3FMt7c6J3H0DXr2wmT2AgI3Q9uYQIM%2Fh5z&X-Amz-Signature=cac3b9614c030a4548aa6d07ba9f5ce07610f7de4297af0e0064f13e2f4ac020&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
