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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUHP4AE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJJZxqxKW9gsorv9sgkkWb5u%2FEkIVgb9nqd8BUJ9eLNAIgbkA7vq%2Be4VWRAWEP8jiQ5auu9SSzaqFmrJSlgYJI9IYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl5hXpxAyHDhEYMECrcA7BuTKLz7YTnksIXzACYYQw91E%2Fdw1D6ZA6TyDn9P2Ny62VQfsCxV4lOVAc8Ut8h4sWLp00ZKiqICXY2O2Q70Yx8Jvkk%2FSt%2FqF3nasIFfhUBUcA9DHmhoB%2BEnhZdOsGyh%2BjjZL6ymEiGykKY8yvW4B4InyNn6qxpIA%2FBD0NGaEzDDpuI8wUXf3PLyGDVv1SfeHYYw5DcM0p8dwHr%2Fd%2F8XDhKWLVsIqUpSeP3P9yB%2FuX9knlZuEWdfjmxuDxI518GTMAuNf2%2BvQJ8yJq875RoohHv6q05gP04ABrGYvTwtxVg6dEJQKZA%2FwjWw0JBG4j9YGkEYT2CPOFWtLuqw4LiAs7kalsOVgye1GMaJwvy1xZvwevN4Rp570S%2F3Q2cY%2FjUkTMQ%2BjA7QAbLgL6l%2BOwv7R%2FnHsd%2FNbudk%2BTA3FXtSG9Ysgzb1w%2Bqvh9vRziJWHpE0%2FM1Lx3NUu06WYWIk%2BJj2H%2Bobwzp4zvV%2F%2F2c7nQiODVrVOVcbIS1mANP5ERwLNtjcUJKPRwWJ6HRJNw7fWhE1%2BKXn64gaKmPNDOi%2BEBCy527EgDguV5KmboOvU2w8vtDUSgVsaTI5mWJwWxws%2B%2BM78SSA0jCH0RJBO4anNP3K1rmKKzSrPjESHe7alThMNmcu78GOqUBL%2FcLJY857bxP3Jq679Mb2Ba%2FtnYU6NCmD51J4FwYVzdOajE5XIcyi%2B%2BgENampJ90Dow3r39D2kgPW7QEIDo7jww6d%2BMzC%2FfY%2F0etEl%2F5JtyDookdhcD8HGqz1St5G6tWHRVMg5pNaD4r%2BujunJFciXaunT8U%2FUDaJ1YN9E3MF6L8eZeh67NiuywLh49ZonhovhIieBtDFip9aUO%2FYNk7%2Bzf7TN3P&X-Amz-Signature=ae30e14cf9a5793b7672b4ec4ab8d099d2d2879a94f5c0772a9a75a328ea80a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUHP4AE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJJZxqxKW9gsorv9sgkkWb5u%2FEkIVgb9nqd8BUJ9eLNAIgbkA7vq%2Be4VWRAWEP8jiQ5auu9SSzaqFmrJSlgYJI9IYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl5hXpxAyHDhEYMECrcA7BuTKLz7YTnksIXzACYYQw91E%2Fdw1D6ZA6TyDn9P2Ny62VQfsCxV4lOVAc8Ut8h4sWLp00ZKiqICXY2O2Q70Yx8Jvkk%2FSt%2FqF3nasIFfhUBUcA9DHmhoB%2BEnhZdOsGyh%2BjjZL6ymEiGykKY8yvW4B4InyNn6qxpIA%2FBD0NGaEzDDpuI8wUXf3PLyGDVv1SfeHYYw5DcM0p8dwHr%2Fd%2F8XDhKWLVsIqUpSeP3P9yB%2FuX9knlZuEWdfjmxuDxI518GTMAuNf2%2BvQJ8yJq875RoohHv6q05gP04ABrGYvTwtxVg6dEJQKZA%2FwjWw0JBG4j9YGkEYT2CPOFWtLuqw4LiAs7kalsOVgye1GMaJwvy1xZvwevN4Rp570S%2F3Q2cY%2FjUkTMQ%2BjA7QAbLgL6l%2BOwv7R%2FnHsd%2FNbudk%2BTA3FXtSG9Ysgzb1w%2Bqvh9vRziJWHpE0%2FM1Lx3NUu06WYWIk%2BJj2H%2Bobwzp4zvV%2F%2F2c7nQiODVrVOVcbIS1mANP5ERwLNtjcUJKPRwWJ6HRJNw7fWhE1%2BKXn64gaKmPNDOi%2BEBCy527EgDguV5KmboOvU2w8vtDUSgVsaTI5mWJwWxws%2B%2BM78SSA0jCH0RJBO4anNP3K1rmKKzSrPjESHe7alThMNmcu78GOqUBL%2FcLJY857bxP3Jq679Mb2Ba%2FtnYU6NCmD51J4FwYVzdOajE5XIcyi%2B%2BgENampJ90Dow3r39D2kgPW7QEIDo7jww6d%2BMzC%2FfY%2F0etEl%2F5JtyDookdhcD8HGqz1St5G6tWHRVMg5pNaD4r%2BujunJFciXaunT8U%2FUDaJ1YN9E3MF6L8eZeh67NiuywLh49ZonhovhIieBtDFip9aUO%2FYNk7%2Bzf7TN3P&X-Amz-Signature=7383b9da01486351726db1429d7971f1b6d728a8eb986886ef492b07210161ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
