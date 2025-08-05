---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUFVEX7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCz9CHHCRpn5oUGuPV%2F%2BwAKEdfW5i0IsZMmO6cb3MyyLQIgEMuUYgAT0Lp%2BFv18W9avWGCL0y8U4hbAw6bM7bb%2B6Owq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMKN%2F86EJcIpvQXnhCrcAxaEIKrKWmFwG56a3cnYHmjF73p1Xv1KjJ6rzVXkgJdrhUVFpP3wlbgYfJNB%2FKJzKOxVThYVhHslCjVBy0b%2FobTUkLRXrPfT6UK73pIXiGgyNvfIZ%2BC6J3BMeE3%2BevnrVU6QTdEybKvXElpE45GScbwlwQZLtV1quuUDh2JgnuOGTOA21fxP3IS7OWig6s4O5cpzQwkFQVvnsloqnCvBCFd%2B9j%2BkwfWpzQ0Yp6lopsVRn64lysQt95SoqmgeEBnBN%2FvxdLEo45YM4Pw7TkGGXmKBG7HuFtwXVD7QKq%2FMC7KXeUG4skYQZZOYRlzhadMmMKZPSOIW2wPDLGsaOKvQVYYShDB0s5REONf5PT%2F7mtey82tn5zbI13b94Qt21Uw5aYI5TCaHvV0zmGM3LJ5kSnt3fISDG6w7OYIMDuUW46pfn2PDYSAlZwNLu001XFEZEo74WTSE0o36S74VrWyoyUBu66hx0T86Y936FzsGgntDQbJrAdq7aHBdRJC4dk4huz4J4DWmChJxGLhC1gEblc2TNeWB87kojPuOvag3%2F888kDKpFtQh6ccUV1TU0EiujPQOFRI5SJnsCE4KIHTkRwP%2Bx2vDkJx6z5DMv7YGoo8spyec1lRfU8Fihxo1MJeNxsQGOqUBofm%2BCKxK4McUlGIC4g10FbEHBjmJAEMlTEbDsDC8%2FDHc6B%2B%2BGuGHwXySAzigrWkHB5gjZV7UjeI95ukN915LnPrpss349LSQ3Xc1OO1q8AB%2FzIzqWWTd95d88wj0Dvx%2BqYX5nM9Xa%2Fg%2BmOiOLB0v5gU80hr2o7V2XoAjugwOOtDM2%2FNhQc0ZWITih1b3H20BWrkmfHqohhh9YWVClQbjI1b0TtD8&X-Amz-Signature=c8d0db14f51c3039dbe7788725a2bca9671e5cf804a11f24c670dbbc72107c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUFVEX7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCz9CHHCRpn5oUGuPV%2F%2BwAKEdfW5i0IsZMmO6cb3MyyLQIgEMuUYgAT0Lp%2BFv18W9avWGCL0y8U4hbAw6bM7bb%2B6Owq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMKN%2F86EJcIpvQXnhCrcAxaEIKrKWmFwG56a3cnYHmjF73p1Xv1KjJ6rzVXkgJdrhUVFpP3wlbgYfJNB%2FKJzKOxVThYVhHslCjVBy0b%2FobTUkLRXrPfT6UK73pIXiGgyNvfIZ%2BC6J3BMeE3%2BevnrVU6QTdEybKvXElpE45GScbwlwQZLtV1quuUDh2JgnuOGTOA21fxP3IS7OWig6s4O5cpzQwkFQVvnsloqnCvBCFd%2B9j%2BkwfWpzQ0Yp6lopsVRn64lysQt95SoqmgeEBnBN%2FvxdLEo45YM4Pw7TkGGXmKBG7HuFtwXVD7QKq%2FMC7KXeUG4skYQZZOYRlzhadMmMKZPSOIW2wPDLGsaOKvQVYYShDB0s5REONf5PT%2F7mtey82tn5zbI13b94Qt21Uw5aYI5TCaHvV0zmGM3LJ5kSnt3fISDG6w7OYIMDuUW46pfn2PDYSAlZwNLu001XFEZEo74WTSE0o36S74VrWyoyUBu66hx0T86Y936FzsGgntDQbJrAdq7aHBdRJC4dk4huz4J4DWmChJxGLhC1gEblc2TNeWB87kojPuOvag3%2F888kDKpFtQh6ccUV1TU0EiujPQOFRI5SJnsCE4KIHTkRwP%2Bx2vDkJx6z5DMv7YGoo8spyec1lRfU8Fihxo1MJeNxsQGOqUBofm%2BCKxK4McUlGIC4g10FbEHBjmJAEMlTEbDsDC8%2FDHc6B%2B%2BGuGHwXySAzigrWkHB5gjZV7UjeI95ukN915LnPrpss349LSQ3Xc1OO1q8AB%2FzIzqWWTd95d88wj0Dvx%2BqYX5nM9Xa%2Fg%2BmOiOLB0v5gU80hr2o7V2XoAjugwOOtDM2%2FNhQc0ZWITih1b3H20BWrkmfHqohhh9YWVClQbjI1b0TtD8&X-Amz-Signature=2d21df9141bdb461ca8489ef5bfac81681d4e7c192816eefb16d566dd2b2165c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
