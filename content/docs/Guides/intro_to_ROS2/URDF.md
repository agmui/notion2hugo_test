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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOFQG4P%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLr3XN%2F4JdZCW5LEU3oqsZhZBtHO0CDgwRUOm3mt0vqgIhALEjZKzMG8xfj7sSEaDxcxHQemw9hV%2FYKKIRKT5d6pI9Kv8DCGAQABoMNjM3NDIzMTgzODA1IgyZVA8d98VoUyIBarQq3AO6Kzj6x3ywgjEYxMAnX%2BkoyB4PvmOqsUwu2PJ8GXmMuwKWnltIIKL7T1IMhGwC%2FtvDpc2hBvgyuNt%2Bevob4Yl7opldR4Wqd1NZavpFFh3%2BkrVE7fZZqo8BMmpuGUn8lK9milTdlVruunLAYhT2QJtkh8QrP43zBtPCr%2FaFs4JaG%2BDqtVc7XmuDYjH7XovrHTPU0qqKaKVdNXfzgLlYPQpk0o7v%2FlevzmTIUXm8bpNFysaqigtH3w589VHe6HnJIPTM6RZUZaCvUR5rD890uZeHo3GdymTkNNPIMiJzV2kj1KGqcwriKkr60PQpHDL%2Bp3rPqnc9irNeMnzkd9LQK0lqUod219%2FTM1UwKjSG0a%2BM1Eu7AuWpPBqUELTc04fxLP76mSGVo1rUVDw8hLkzpSRJRqIfaaJUCJDwDJQGslmAN9oyX9XXv0FwJsxN1s5ulQSDHWtmQPGJ7KBoVFG511%2BvZCRQnnxfuWN3msmd3AP36qZkENopdb9tQK4fSL%2FlReJ9YwDz1oWHXG619njOImS60WOE%2F%2Fb1PvTUqtFdy7X1rvj6vLFjhu1u6jKvCHgi%2B8KJNFZbKsGFa5HquE6tXoEXjB97Su4RvjdwTmtSVybazslDyeTrRwUz5Mb93zCe7Zq%2FBjqkAS0wzJWc1lHtT9tGdnCwgyU1giPBWCYy2YODHtPoGOd6c2ZrsA4qP8OxEXzM5JDO1f0HIdOOrxF3a0j4cVYOSJ3WeI1GvJisBksqeRw6VXZo0UFmWb9gtWPg1N2BWtxI34g5S7ImQhxPdPZDYhHKceKMpdNfL1Q2FDwOeOZn5UfyXkc4DeOL0U2tEdEnSU7p0QmHnVqUlkQdL%2Bao5fAzO8iRyoon&X-Amz-Signature=51043b54dc8f79b46fa3fde6bd9761b3386249f436b230ce7902c07d7d7af5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOFQG4P%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLr3XN%2F4JdZCW5LEU3oqsZhZBtHO0CDgwRUOm3mt0vqgIhALEjZKzMG8xfj7sSEaDxcxHQemw9hV%2FYKKIRKT5d6pI9Kv8DCGAQABoMNjM3NDIzMTgzODA1IgyZVA8d98VoUyIBarQq3AO6Kzj6x3ywgjEYxMAnX%2BkoyB4PvmOqsUwu2PJ8GXmMuwKWnltIIKL7T1IMhGwC%2FtvDpc2hBvgyuNt%2Bevob4Yl7opldR4Wqd1NZavpFFh3%2BkrVE7fZZqo8BMmpuGUn8lK9milTdlVruunLAYhT2QJtkh8QrP43zBtPCr%2FaFs4JaG%2BDqtVc7XmuDYjH7XovrHTPU0qqKaKVdNXfzgLlYPQpk0o7v%2FlevzmTIUXm8bpNFysaqigtH3w589VHe6HnJIPTM6RZUZaCvUR5rD890uZeHo3GdymTkNNPIMiJzV2kj1KGqcwriKkr60PQpHDL%2Bp3rPqnc9irNeMnzkd9LQK0lqUod219%2FTM1UwKjSG0a%2BM1Eu7AuWpPBqUELTc04fxLP76mSGVo1rUVDw8hLkzpSRJRqIfaaJUCJDwDJQGslmAN9oyX9XXv0FwJsxN1s5ulQSDHWtmQPGJ7KBoVFG511%2BvZCRQnnxfuWN3msmd3AP36qZkENopdb9tQK4fSL%2FlReJ9YwDz1oWHXG619njOImS60WOE%2F%2Fb1PvTUqtFdy7X1rvj6vLFjhu1u6jKvCHgi%2B8KJNFZbKsGFa5HquE6tXoEXjB97Su4RvjdwTmtSVybazslDyeTrRwUz5Mb93zCe7Zq%2FBjqkAS0wzJWc1lHtT9tGdnCwgyU1giPBWCYy2YODHtPoGOd6c2ZrsA4qP8OxEXzM5JDO1f0HIdOOrxF3a0j4cVYOSJ3WeI1GvJisBksqeRw6VXZo0UFmWb9gtWPg1N2BWtxI34g5S7ImQhxPdPZDYhHKceKMpdNfL1Q2FDwOeOZn5UfyXkc4DeOL0U2tEdEnSU7p0QmHnVqUlkQdL%2Bao5fAzO8iRyoon&X-Amz-Signature=000ea0b5c5b852f91c08a45b898d6b537a52e7f6174c90c6598a490ddddd2e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
