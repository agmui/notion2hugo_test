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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWZ56OO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGBlR8m6Kd%2F%2BGPfJunkoF0KArJnC9JvKU1iXugCTskTAiEAxSZ7brU5QNnWvhU1fsbendjjEMGN4trX0poPZoWKSYoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEuCocK%2Bsf3sor6BvSrcAwxCVfqSRdVn1GQyiN%2Bg5gCln%2FP9%2F%2Brj30Vo%2BdSwlrv1PQJgDGasrOEMR8aAxM5ERwOI2JLkFimy33sExUy8NB9uVtatExuamtWSBdNAeSYXJ1y6XW9hIZT3A6KDve830blcCcJ6Bupt8o3vJaAe0qJqu1NgmP%2Fx4SkK3fciSlE9u0z9RFkHKJbxKDELszh6oK8EhZJgBfQvevj0xBVZBIfL4W38ZnT1v54Zguhq0760yABb%2FGyKFNtYOij1e16aM%2FyPC20hFdgx3qL8RCm73aoJd7LBaBLciNF1916YA59TvpzelRHenkcLTxZ8Rrv5j%2BnziyC7huIBNqGvWVziKKvCCykxC70JFpoi4WAH0A0X5yjGbaQp9UMbiIGtCLTg7xrwEPJky0HVT6IZ1lz0PqopyA48p1f%2F%2FFjWHhNdjX7OVjh2omIIhB%2FvfO5YTrshL9Xo%2BI11MrmDTg6foMyvlgovhBQ6cJMNaIaxpyKje3cL33kKuknFE%2FCl7qAba5c8WNzFZZ%2BOBd14JU4BReruythQZjJVWg5k9tNuSOz9ErO5%2Fl23JaSjXpxvHiviuQuTUIlRKF4oOB4o1X15tLgYyE%2F8npKomjy4eyggohA3gesMqNY4kCmeYP%2BWx3BEMMqX6MAGOqUB0bfGABcwU2MBJle4x3IHB1d%2BioO2d4lLjSjYtZwFL0M6tKDf5cY8Z7SyagdX0eQxBffS1XQYz0JF1kxJdbSXDA2sVnGY%2FChjMccgTZsudftZ1qkj8wuM6OarpYekFpdmKdYC5lTHfnkbsPMMKuKFcyFrywAiiUutfcU8g5IHINzV8aEbReW2%2BbULjVmJXKquJbFoqxomhT7c0S5%2BQdMew45qIepf&X-Amz-Signature=5cc0b64ffdce5073f4041b4557e7338ca0ddd58d5dd27b32f8cabec7c55ce37c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWZ56OO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGBlR8m6Kd%2F%2BGPfJunkoF0KArJnC9JvKU1iXugCTskTAiEAxSZ7brU5QNnWvhU1fsbendjjEMGN4trX0poPZoWKSYoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEuCocK%2Bsf3sor6BvSrcAwxCVfqSRdVn1GQyiN%2Bg5gCln%2FP9%2F%2Brj30Vo%2BdSwlrv1PQJgDGasrOEMR8aAxM5ERwOI2JLkFimy33sExUy8NB9uVtatExuamtWSBdNAeSYXJ1y6XW9hIZT3A6KDve830blcCcJ6Bupt8o3vJaAe0qJqu1NgmP%2Fx4SkK3fciSlE9u0z9RFkHKJbxKDELszh6oK8EhZJgBfQvevj0xBVZBIfL4W38ZnT1v54Zguhq0760yABb%2FGyKFNtYOij1e16aM%2FyPC20hFdgx3qL8RCm73aoJd7LBaBLciNF1916YA59TvpzelRHenkcLTxZ8Rrv5j%2BnziyC7huIBNqGvWVziKKvCCykxC70JFpoi4WAH0A0X5yjGbaQp9UMbiIGtCLTg7xrwEPJky0HVT6IZ1lz0PqopyA48p1f%2F%2FFjWHhNdjX7OVjh2omIIhB%2FvfO5YTrshL9Xo%2BI11MrmDTg6foMyvlgovhBQ6cJMNaIaxpyKje3cL33kKuknFE%2FCl7qAba5c8WNzFZZ%2BOBd14JU4BReruythQZjJVWg5k9tNuSOz9ErO5%2Fl23JaSjXpxvHiviuQuTUIlRKF4oOB4o1X15tLgYyE%2F8npKomjy4eyggohA3gesMqNY4kCmeYP%2BWx3BEMMqX6MAGOqUB0bfGABcwU2MBJle4x3IHB1d%2BioO2d4lLjSjYtZwFL0M6tKDf5cY8Z7SyagdX0eQxBffS1XQYz0JF1kxJdbSXDA2sVnGY%2FChjMccgTZsudftZ1qkj8wuM6OarpYekFpdmKdYC5lTHfnkbsPMMKuKFcyFrywAiiUutfcU8g5IHINzV8aEbReW2%2BbULjVmJXKquJbFoqxomhT7c0S5%2BQdMew45qIepf&X-Amz-Signature=673d3b068c9eef571612ba7d6b2d0c51fef7de8ea3188403f7ae15a3865d9664&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
