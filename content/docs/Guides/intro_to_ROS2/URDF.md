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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADWR57S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB3h5eDCN4ftZ38oMBY6xcBc%2Bd8Q8SOOhMg%2F%2BklLSSzAiBcBj5C0EVc1nfKRBCrKm%2BDlQN%2FuWU4HAxM7%2BgI2HnQ7iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejR8va8BJrHmwxspKtwDLeEHPnvWw8mUixBiVKLhjg8XKSoKD7vua5R974xUNzRtiIP%2BlgUrWqyCpzjP6JnM7Hs4xbOg02mkgMNWrzcFP2LwK%2BaB8pX7slJ%2BJiUQ0%2Fy0kcMO%2BVj9K9i4F%2FLKbQV60b6cdZqKqxclu%2FzErY5j5LwwDtq2GZ%2FIbK0lhk5lapqESQqOfeNBitKrvpGZU4u7WVz%2F0HwLM9HgrGUhjBqXU7Lufg8N1hgd%2BDPa3eaf9gvI0xkicF3NeURsfuPYbBJr09x%2FO%2FXFxX4wkmKbqFfGADVojpbRlOmLIlpTMzuXFAj4BzreNVw9vi39p2RAhf86tQ1C0qkjt0Teqb6N%2FTVZK9E5kjqjkj2QKTyiXxBQo4AKbxRI109X1VdjlzyGDSpdzcLkoDMVakYkqibB4gWzUUNzQxMHPvk3MBp%2FC34B36tTaFpbNOU7GGZTKjc89WVt4Sks050%2FPVZ08C%2B6khSrZpSBOLMhqXMAEn3CJ0Gwg1JRR0VsZMtiFTmk6R340Z1%2BrbTT%2Bd%2Fp%2BRNr3DHFayI29DKrXWWNAbvH6pw5lfL%2Fwa106jka8y%2BAWQgZsSMAvaNfXD1nL5g2FRVnpypEKUgKMdXV%2FlIb1o2SgtKfJ8GDFn3LqrlhMTmPSnwZwDIwxI7mwQY6pgFsMVz6HSxuMvO3JlzeYhvsLToLskoZEBhRLXVmmibJA5Xw9Ut%2FmxLI48utE4Cq8nQmoDGMfSD5AjBcfKzCQjVGv5resAhaoqHQF%2BBUS3PJC4YaBmMudnPEXZoEMSyP%2BWUKkNkWXo6SzTJI9QhG58cxpStWRK7E5zuzYhiAJmsEa%2FRDFizhJy7nNv%2Bh46GhrtEOxFIyF9F%2FHu7GSnX76RQd2JY%2FpiNM&X-Amz-Signature=c0a88a8dee6198ae64ae39ceb2a99e4ce671afa7ba18253f5ce1f6e3aa33deff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADWR57S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB3h5eDCN4ftZ38oMBY6xcBc%2Bd8Q8SOOhMg%2F%2BklLSSzAiBcBj5C0EVc1nfKRBCrKm%2BDlQN%2FuWU4HAxM7%2BgI2HnQ7iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejR8va8BJrHmwxspKtwDLeEHPnvWw8mUixBiVKLhjg8XKSoKD7vua5R974xUNzRtiIP%2BlgUrWqyCpzjP6JnM7Hs4xbOg02mkgMNWrzcFP2LwK%2BaB8pX7slJ%2BJiUQ0%2Fy0kcMO%2BVj9K9i4F%2FLKbQV60b6cdZqKqxclu%2FzErY5j5LwwDtq2GZ%2FIbK0lhk5lapqESQqOfeNBitKrvpGZU4u7WVz%2F0HwLM9HgrGUhjBqXU7Lufg8N1hgd%2BDPa3eaf9gvI0xkicF3NeURsfuPYbBJr09x%2FO%2FXFxX4wkmKbqFfGADVojpbRlOmLIlpTMzuXFAj4BzreNVw9vi39p2RAhf86tQ1C0qkjt0Teqb6N%2FTVZK9E5kjqjkj2QKTyiXxBQo4AKbxRI109X1VdjlzyGDSpdzcLkoDMVakYkqibB4gWzUUNzQxMHPvk3MBp%2FC34B36tTaFpbNOU7GGZTKjc89WVt4Sks050%2FPVZ08C%2B6khSrZpSBOLMhqXMAEn3CJ0Gwg1JRR0VsZMtiFTmk6R340Z1%2BrbTT%2Bd%2Fp%2BRNr3DHFayI29DKrXWWNAbvH6pw5lfL%2Fwa106jka8y%2BAWQgZsSMAvaNfXD1nL5g2FRVnpypEKUgKMdXV%2FlIb1o2SgtKfJ8GDFn3LqrlhMTmPSnwZwDIwxI7mwQY6pgFsMVz6HSxuMvO3JlzeYhvsLToLskoZEBhRLXVmmibJA5Xw9Ut%2FmxLI48utE4Cq8nQmoDGMfSD5AjBcfKzCQjVGv5resAhaoqHQF%2BBUS3PJC4YaBmMudnPEXZoEMSyP%2BWUKkNkWXo6SzTJI9QhG58cxpStWRK7E5zuzYhiAJmsEa%2FRDFizhJy7nNv%2Bh46GhrtEOxFIyF9F%2FHu7GSnX76RQd2JY%2FpiNM&X-Amz-Signature=a0eb993d4b7336aaf960cb7465463155ec779a692cac1323400a08b9b6a34d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
