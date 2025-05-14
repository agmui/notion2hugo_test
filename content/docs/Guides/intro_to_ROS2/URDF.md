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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHVXF4N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH17O3EGZVIAJCvIfacfCMQoekpfXG3%2FV2CZoR0IiYtYAiB60sX9Sg%2FwlCA%2FDuTQNmb0XcVgu6uOZaFvgRJTqebIGCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMyEul6uEur1jb9GazKtwDVmFQiipfbhOipC7H8%2FhdrN5IFuQjZiGnXw18Ucm9YHUArgCL%2BZ6uLk0tKKgeRI68C1Yd0oj0fPhsAtpn0ayhzmtwjTuPENFN%2Fk2bXlUWO6pQzunaTCgQ2hmcucq7oCCEij7e%2FNqzHwp%2BGjqvGP3nfFs3sg5RystMrwR4Sxb%2FHgiPwlR4oXJP2hxQLOV3d5i0WQhxklApvElhZ5Kan3NghDLIp9DMV5CZK2otEb3LeO%2FpQPRrQlEtYeEbGAqrK4ZdkZGHl4BgSLp8859mpOPr32Gu31wM2uM6912T6sKeuVsd%2FNDqTYokxbxgWvlXSwCW0IJbZXL9Ve%2FbEI3%2BSbi1VpZ%2FNiaFMbGybPSmbEmrM0KVTAxPaBfJLF5rjvVTJL9CvMLw4XTXjx2weNZkCmfqNWwBRo0qgFWCZvsZ%2FkFljJR01%2FoxP4s04ythWVcn8UOO6g5hpL2liFNwoKJ298LCgoy1gTNafmW8Pk7JrN1riaWXnQ%2BKENClDb%2FMVym3C3DEqfqMj0YERrecqZ6llxMEfJAlEuVlzeM6pE9IU3qmKMJtmet8A%2BOSPT%2BZfTKZnakQyhzn1hwok%2FEsexOKLgQCecgLzjJdbYvP%2FCxe5T7pYYPgGrRfkSmltJoZccswz7iRwQY6pgF0ga34p7ABcpVEkVMcImo2CzcfSu%2FjE3k3fbwSzEZ3VQCtKVqjTLg4n8ufqhoKJXc1miOnMd1xwpunxDbHUrVVy5Z8OrQCyvwyNI2cdK%2Bm73kCFJP024SfAkOO4JAhUm%2B5vpXGhT54pECFF4BpVg9miVBLmc8qYZ0J2sFTXxOS3uxnRXcNxDbuYwhj2F%2BOS%2FCRWhYoQf%2FX5M2z6SI2P%2BFZNoo9JFjs&X-Amz-Signature=40e87c0e001e2ce68eade833329b70bee1a1219b5a2807797527ae89c5bea563&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHVXF4N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH17O3EGZVIAJCvIfacfCMQoekpfXG3%2FV2CZoR0IiYtYAiB60sX9Sg%2FwlCA%2FDuTQNmb0XcVgu6uOZaFvgRJTqebIGCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMyEul6uEur1jb9GazKtwDVmFQiipfbhOipC7H8%2FhdrN5IFuQjZiGnXw18Ucm9YHUArgCL%2BZ6uLk0tKKgeRI68C1Yd0oj0fPhsAtpn0ayhzmtwjTuPENFN%2Fk2bXlUWO6pQzunaTCgQ2hmcucq7oCCEij7e%2FNqzHwp%2BGjqvGP3nfFs3sg5RystMrwR4Sxb%2FHgiPwlR4oXJP2hxQLOV3d5i0WQhxklApvElhZ5Kan3NghDLIp9DMV5CZK2otEb3LeO%2FpQPRrQlEtYeEbGAqrK4ZdkZGHl4BgSLp8859mpOPr32Gu31wM2uM6912T6sKeuVsd%2FNDqTYokxbxgWvlXSwCW0IJbZXL9Ve%2FbEI3%2BSbi1VpZ%2FNiaFMbGybPSmbEmrM0KVTAxPaBfJLF5rjvVTJL9CvMLw4XTXjx2weNZkCmfqNWwBRo0qgFWCZvsZ%2FkFljJR01%2FoxP4s04ythWVcn8UOO6g5hpL2liFNwoKJ298LCgoy1gTNafmW8Pk7JrN1riaWXnQ%2BKENClDb%2FMVym3C3DEqfqMj0YERrecqZ6llxMEfJAlEuVlzeM6pE9IU3qmKMJtmet8A%2BOSPT%2BZfTKZnakQyhzn1hwok%2FEsexOKLgQCecgLzjJdbYvP%2FCxe5T7pYYPgGrRfkSmltJoZccswz7iRwQY6pgF0ga34p7ABcpVEkVMcImo2CzcfSu%2FjE3k3fbwSzEZ3VQCtKVqjTLg4n8ufqhoKJXc1miOnMd1xwpunxDbHUrVVy5Z8OrQCyvwyNI2cdK%2Bm73kCFJP024SfAkOO4JAhUm%2B5vpXGhT54pECFF4BpVg9miVBLmc8qYZ0J2sFTXxOS3uxnRXcNxDbuYwhj2F%2BOS%2FCRWhYoQf%2FX5M2z6SI2P%2BFZNoo9JFjs&X-Amz-Signature=91f1dfb4c1247bf149cbe22fba2a4967aced82c53d8b121e01ffc483ca276b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
