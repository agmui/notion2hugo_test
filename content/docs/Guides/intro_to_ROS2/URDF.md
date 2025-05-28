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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567JE5HY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWSamqG2Mlf3uLWBqQtPj5DcaNqC4bHnA5ayCGjQUNuAiBQ7mxhWGT2%2BReWHVVhxbj%2BcGcG30AimvhAEzmqKJ5CFSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMjqaZDLpZGrrzup4xKtwDBtbjLwVlHe7Qje%2BciPHJaDYa22IAqJ6ZekaSFzOJWbci9xV9Sw%2FqYx%2B86mKXKNSqsBAXZYgbpEMMdUgq6m9btSxPpn%2BC%2BhzEHSG4hXzQkODox9CkhP6sNsXfKTJ06BXQ6JZRDTnjBHKWlNSSCG6VWEhtHZSZvL4EWSEPP6%2B1mIzkjAs71WG4xpa7vhnw3afLLKqi5fUXch%2F6XaNNiFnUQxKjXQKL%2Ft2VUxBNWyLlQLD5wvBYMc7SUjHkildMxHuS1F3G48%2FmvMQ7aiI%2Fe32PW6qazYRbyh%2BA1JUgCkUOGbx%2F%2BlF9fHPcPaSCdYLyqKdOXNt%2Fssk6q8BcJW6cxGS4037HyJZXBPnQ8KgjBkjZ6RaWQOI2PVClLURm8NIxX%2Bitvp2yk0ZlfZUoRBEFQeENoxhF4JZXKJNvAfNuShb5CUAb%2BnJilNU71WmfMWB0W%2F%2Fqe%2FMGhOgNHrBjHG70QYUq0smNXUgmmBNS5XRdRt5Vs%2FcGsXt%2BcwAIiGihljfKuHpfSBLvMM7TMJzo%2B0jd9nY0ObQiO9yDwTD%2Fmm1o1DriZERR6CEvogMydEAlgHc689geGkS9VAqyERIPqOrcbTxHug6F8MGlKkiQBifjv5CfrejLyrxy3n5IcymV4l8wheTbwQY6pgGEgoyzqUAsgzFWTP2SlJjtInxdbaR%2FfI8H2Xt4NKMyOLkvmpaAVZ2LSZYPUBgvcTafe9ZjSpOgr%2F19uJQNE01BNac3nHDaQlQ9pwbb1vSeb%2FQgPhy6junhQ5Vaa57EkTmbGokfdNEXgJ4Er39a0LYLBcK59vnadMBDaMgzsd9urknMaLmkUn7oPSd4wV70ZfTPItW21Z7jc9U0b2Fhqs5UM%2FzCl%2BZe&X-Amz-Signature=63b9e22f4a051b088f6466d4cf469b5df5fcaf591b5876960e36bb2abfb5b5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567JE5HY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWSamqG2Mlf3uLWBqQtPj5DcaNqC4bHnA5ayCGjQUNuAiBQ7mxhWGT2%2BReWHVVhxbj%2BcGcG30AimvhAEzmqKJ5CFSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMjqaZDLpZGrrzup4xKtwDBtbjLwVlHe7Qje%2BciPHJaDYa22IAqJ6ZekaSFzOJWbci9xV9Sw%2FqYx%2B86mKXKNSqsBAXZYgbpEMMdUgq6m9btSxPpn%2BC%2BhzEHSG4hXzQkODox9CkhP6sNsXfKTJ06BXQ6JZRDTnjBHKWlNSSCG6VWEhtHZSZvL4EWSEPP6%2B1mIzkjAs71WG4xpa7vhnw3afLLKqi5fUXch%2F6XaNNiFnUQxKjXQKL%2Ft2VUxBNWyLlQLD5wvBYMc7SUjHkildMxHuS1F3G48%2FmvMQ7aiI%2Fe32PW6qazYRbyh%2BA1JUgCkUOGbx%2F%2BlF9fHPcPaSCdYLyqKdOXNt%2Fssk6q8BcJW6cxGS4037HyJZXBPnQ8KgjBkjZ6RaWQOI2PVClLURm8NIxX%2Bitvp2yk0ZlfZUoRBEFQeENoxhF4JZXKJNvAfNuShb5CUAb%2BnJilNU71WmfMWB0W%2F%2Fqe%2FMGhOgNHrBjHG70QYUq0smNXUgmmBNS5XRdRt5Vs%2FcGsXt%2BcwAIiGihljfKuHpfSBLvMM7TMJzo%2B0jd9nY0ObQiO9yDwTD%2Fmm1o1DriZERR6CEvogMydEAlgHc689geGkS9VAqyERIPqOrcbTxHug6F8MGlKkiQBifjv5CfrejLyrxy3n5IcymV4l8wheTbwQY6pgGEgoyzqUAsgzFWTP2SlJjtInxdbaR%2FfI8H2Xt4NKMyOLkvmpaAVZ2LSZYPUBgvcTafe9ZjSpOgr%2F19uJQNE01BNac3nHDaQlQ9pwbb1vSeb%2FQgPhy6junhQ5Vaa57EkTmbGokfdNEXgJ4Er39a0LYLBcK59vnadMBDaMgzsd9urknMaLmkUn7oPSd4wV70ZfTPItW21Z7jc9U0b2Fhqs5UM%2FzCl%2BZe&X-Amz-Signature=73e1108a3d590cc4854e7c4a962b6fe9e882ccb26d4bbf840ad28f58fa9b575b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
