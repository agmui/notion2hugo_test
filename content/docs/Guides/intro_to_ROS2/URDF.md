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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQIBJMW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAq994gY%2BPIhmAXmmXqNSz8HlU8wgOxgDvndTdj7kIkOAiEAqcJT6Zz5UQ%2BETvkErD3WDnAIKniNKUHq3qRKD7E%2BGGQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOWCnhA1kHW8SRY6SircA6COywYRQ6uoKECWHzakMLCXJsC5qwHIHYA5u%2F%2Bw3zk5O82GziyMQ9tjJOfP7%2BH2XT2wraJlSTGUhUA58WpaIWt8lrAC9txrusMCF%2FvPJEmbOprsOyxfM6xj2A1FW%2Fg5LT%2BvUqQR6r9xVgwcQwzPdN6vnO3FONItwnbcg2VT%2FDZ%2BNZWM5AO%2BHxT2w%2BdbI8Y6LTnDCqCk%2BdTqSlyjsxaySiXwvm%2FMW4bNzwmS2Gbj9gWxfN4jbROoclDczW69R8sPD8T92gheQNQ4WFGcWBbey3LRchF9pFRJSLLNOhEeGbKn5dyNHAzrkBEGro0Db80dp7PVtGVqWqN%2B4rQdtKw81IjvZjvuWAhCQh9BHt%2BcWuSvlv7n63SfzhPUAQUCwaMyVgL6LvuS3HwDNgHZO%2BNTYpkuX5jNZtfcCFMdjM5IcAloyfGvJ8PrRt1NpT0u1cFC2u55GZWWXpr1Agkef8a0Y5wPG7WmoONCA8k9EGrf9Kwzeiyd4c69LBh%2F2pK2zySDrxjY74DqQYMrzU%2BQMOEJ3WPbPiXfacL2cKqLcbPU1YbsD5%2FSWBUyddgu5j8nz0nqmA0Z03LYNtxW4f2aY9P0hXg6DKBdlXiAlB1Z70rZzwY485kASFH6wFL%2F2EhYMMGRxL0GOqUBhnjC8e8WiUAqr3NDM9WiArJiHmwMywJFZgeUrRz9%2BfsXLHvd4RPoHLnw1vLLrOvWffeebTQJ0UPhnsGIhSCQTrFfQzFUNgp6LuKocqjwxqnx6CxZ%2BPnHW25jnVqkUDp5TOOuaorhdA3Jurx20Iqms9xd%2FKaV%2FT37ANxgF0WWDBhubn%2FVj9xtCl6AKviZvcuO4TXv0jHIJc17QewcKUOCL4RpAjFu&X-Amz-Signature=3562a0ccce1cd997c3f178512a046afbd3d1e9bf1cde765e23c97cfb077a6cce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQIBJMW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAq994gY%2BPIhmAXmmXqNSz8HlU8wgOxgDvndTdj7kIkOAiEAqcJT6Zz5UQ%2BETvkErD3WDnAIKniNKUHq3qRKD7E%2BGGQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOWCnhA1kHW8SRY6SircA6COywYRQ6uoKECWHzakMLCXJsC5qwHIHYA5u%2F%2Bw3zk5O82GziyMQ9tjJOfP7%2BH2XT2wraJlSTGUhUA58WpaIWt8lrAC9txrusMCF%2FvPJEmbOprsOyxfM6xj2A1FW%2Fg5LT%2BvUqQR6r9xVgwcQwzPdN6vnO3FONItwnbcg2VT%2FDZ%2BNZWM5AO%2BHxT2w%2BdbI8Y6LTnDCqCk%2BdTqSlyjsxaySiXwvm%2FMW4bNzwmS2Gbj9gWxfN4jbROoclDczW69R8sPD8T92gheQNQ4WFGcWBbey3LRchF9pFRJSLLNOhEeGbKn5dyNHAzrkBEGro0Db80dp7PVtGVqWqN%2B4rQdtKw81IjvZjvuWAhCQh9BHt%2BcWuSvlv7n63SfzhPUAQUCwaMyVgL6LvuS3HwDNgHZO%2BNTYpkuX5jNZtfcCFMdjM5IcAloyfGvJ8PrRt1NpT0u1cFC2u55GZWWXpr1Agkef8a0Y5wPG7WmoONCA8k9EGrf9Kwzeiyd4c69LBh%2F2pK2zySDrxjY74DqQYMrzU%2BQMOEJ3WPbPiXfacL2cKqLcbPU1YbsD5%2FSWBUyddgu5j8nz0nqmA0Z03LYNtxW4f2aY9P0hXg6DKBdlXiAlB1Z70rZzwY485kASFH6wFL%2F2EhYMMGRxL0GOqUBhnjC8e8WiUAqr3NDM9WiArJiHmwMywJFZgeUrRz9%2BfsXLHvd4RPoHLnw1vLLrOvWffeebTQJ0UPhnsGIhSCQTrFfQzFUNgp6LuKocqjwxqnx6CxZ%2BPnHW25jnVqkUDp5TOOuaorhdA3Jurx20Iqms9xd%2FKaV%2FT37ANxgF0WWDBhubn%2FVj9xtCl6AKviZvcuO4TXv0jHIJc17QewcKUOCL4RpAjFu&X-Amz-Signature=5d228e70431b8253202c0185bc1cc67c727346f7a087255701cdedf270eaddc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
