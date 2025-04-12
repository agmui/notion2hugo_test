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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ3FUNW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCT5Ql162MXuLJYBaQgW2%2BIxETBgBzGry7NaDWciRBjoQIhAJwRUF%2FmR6tAttnrN%2FZfm4kcAGgwHR1zufW0COcSmDIdKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqbtIDiao8NmNaBrkq3AMVwWrM2H4SyFJgwVJd1RK5eYt1CVH8ugX4C2PqEq8D%2FcUWXgmZqfcuVVnap4YZLcszjIq9fEsQUyHBHqBPI%2BQTzZjyXtNxJE4dIf0QuFFtoPjn%2Bt%2BuQZPRwq3P4ERY2y5hFsjsxpFNggQH7YUbD7YZALYhcb%2FFO%2BS4X%2BGVtCOcfH0duEq8BoZdCQ08fbv7nKWoyAe%2Bjj3tyvUHt%2F0C9yAcy3q142dtYmlBmyS5cDTTEdL15IAlZDwZ8yxRK6I0nkZGp64jG40Vwn8ugYGusej9PAWUNZqk412N6zTHyZuuG4XopyyMCWsegI03Ng%2BSj%2FCyY8RqXf5qdN057Rp%2B8%2BzVWhnSbAf64iHkTUfxCzX1XBeCu1R1hzJHnliOSYZzATrVx63slDM44yLGIW3ci88y48cyx8R3vPeKT0B4Gr66VXPdIzYDG5fKGA7N2Ob3O3Xat0%2B0Qt%2FotDsnrLJDOILKk3mBe3J7HhQrmimiRs%2FeGhHjruuL8%2BHGmY4zVVNOzLMoNi6eqmN7KL00oOrW3AK0DuxoDvmHHX9xte7Zt3dWO%2BCa99TFedpkQdJdz%2BpPO8WI92n9mCo6fQV4en8D406sY8YApz5Kymmttx2XinMlS%2FFWOr72GmkUioLOcjCZqOi%2FBjqkAS1bh6SOSNq%2F0Nh1zZSp8bHgTTVap3EG7Aqhg%2Fbortvi5qmKe%2FuQNu4LDRFCXhae4x4ritOj%2FLVEfx885bdaB%2FGLFDBCljIBFov2j8PNMsFtlsenO2Y%2BG10eLYE%2F%2Bc6eORJr6bakaGsLEEtprQ5J%2FnFnhnsBJya%2FoRIiHDlFB2vUr2pG9jV7Y79Ntqs3Nzt1icx9XwAj3%2BWInGOyr%2BYCEF1lv%2Fm8&X-Amz-Signature=62e04d6cd75043ba4f82cb68d11db6a2592c5433d3abcd61e78fcb8c8fceecdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJ3FUNW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCT5Ql162MXuLJYBaQgW2%2BIxETBgBzGry7NaDWciRBjoQIhAJwRUF%2FmR6tAttnrN%2FZfm4kcAGgwHR1zufW0COcSmDIdKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqbtIDiao8NmNaBrkq3AMVwWrM2H4SyFJgwVJd1RK5eYt1CVH8ugX4C2PqEq8D%2FcUWXgmZqfcuVVnap4YZLcszjIq9fEsQUyHBHqBPI%2BQTzZjyXtNxJE4dIf0QuFFtoPjn%2Bt%2BuQZPRwq3P4ERY2y5hFsjsxpFNggQH7YUbD7YZALYhcb%2FFO%2BS4X%2BGVtCOcfH0duEq8BoZdCQ08fbv7nKWoyAe%2Bjj3tyvUHt%2F0C9yAcy3q142dtYmlBmyS5cDTTEdL15IAlZDwZ8yxRK6I0nkZGp64jG40Vwn8ugYGusej9PAWUNZqk412N6zTHyZuuG4XopyyMCWsegI03Ng%2BSj%2FCyY8RqXf5qdN057Rp%2B8%2BzVWhnSbAf64iHkTUfxCzX1XBeCu1R1hzJHnliOSYZzATrVx63slDM44yLGIW3ci88y48cyx8R3vPeKT0B4Gr66VXPdIzYDG5fKGA7N2Ob3O3Xat0%2B0Qt%2FotDsnrLJDOILKk3mBe3J7HhQrmimiRs%2FeGhHjruuL8%2BHGmY4zVVNOzLMoNi6eqmN7KL00oOrW3AK0DuxoDvmHHX9xte7Zt3dWO%2BCa99TFedpkQdJdz%2BpPO8WI92n9mCo6fQV4en8D406sY8YApz5Kymmttx2XinMlS%2FFWOr72GmkUioLOcjCZqOi%2FBjqkAS1bh6SOSNq%2F0Nh1zZSp8bHgTTVap3EG7Aqhg%2Fbortvi5qmKe%2FuQNu4LDRFCXhae4x4ritOj%2FLVEfx885bdaB%2FGLFDBCljIBFov2j8PNMsFtlsenO2Y%2BG10eLYE%2F%2Bc6eORJr6bakaGsLEEtprQ5J%2FnFnhnsBJya%2FoRIiHDlFB2vUr2pG9jV7Y79Ntqs3Nzt1icx9XwAj3%2BWInGOyr%2BYCEF1lv%2Fm8&X-Amz-Signature=5cd60782790642607d9fea7965293c7aa1874d3b7b575b10b41727fb0918b575&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
