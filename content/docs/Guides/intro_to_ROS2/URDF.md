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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNLIFPZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDER8j7M3ve0y9j4%2BWZ8ke0dvfL8RomCZn4Et9ssW7wDAIhAK7dPp%2F6jka9FG8NXEp1uqZVZNiKz6a5nDEls92FmDpBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRe5UOG6OSR5u71Cwq3AM79ki9QhTvXeq1xJimhRt%2BAhwhwPiUGs6H5dwmKxlFFsM2F%2FC0S09Mgw0hdz9nfpIbiUEMitvWowoq7sdtHwvYCThiX%2FWmxHAbmyN0bb%2BAApi5Y%2BBi0e7tuqi1PyB0LvEeVPyN6RWQZXKLklOrFzcpZyfEOtGnkN7cso36r6GAiipZTqpqnD3e0ygAfgdQba%2BR68gCxGaRh6dBy7X2VyC4sseV3YpQGzZr126%2FHXkofI0QKqjlj88FNL03oCSd0giT4F8kWLjFtUhx8bff924WoDGu0j1PRjQD3%2BN2d66V4tgN7RQ9aChJwF%2FulGoW4V2unhLG9qsIkgHUVhyV8pa2unH9gepzRFX2y25zwmjSCc%2Ftl%2BsLB%2FSI%2FVh2u3XDc0A5cwM%2FjlhTUGpmdbsPwRnxaH7FBydvduM%2BpbSNoNv6mhUlEVNbgCWrO%2FnYYpQ7fgA1GmReCnXwS521sYbXKlXjAOif1eoQnvZAvm3HGQOLlQQhkW6lUdAX4bUiIa%2F0S72DCdvCAk9GtBEJM6Odwib%2BuJ1WovXRmFjs2EjZsanGArWEoIYjGQf6kFFJG6i%2FQFeWzNQ4qG1JqCkbR1QbGpI%2FY123hWimadeh5pTiEUYkChonGlKPnxxfXpmWvjDe9eDEBjqkAUwXUUazSz2Tsu46G6jQYGipwQnLg5o1%2FFT0FTNV3QD9XG5NMXTFqLqFTm2QYjOe%2FHLm6LfHg%2FlZdagrN0BThgHS2jlEVPeDrsFdOfP67URuNnFW50hQ63H3dHvB9pugdXvgvtI5qD5mqT1FLz4fULAg1dYW8nbcBqhFZAke6zRStvEkfGviA2xa7sl9dQ2SPBSK1DAYXrj73sB0Ejigxr%2Fd6T8%2F&X-Amz-Signature=e2dd29787f82acbcb043c8338c04a2d49fb6d0e849cdedb5d73af1139fa4dc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNLIFPZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDER8j7M3ve0y9j4%2BWZ8ke0dvfL8RomCZn4Et9ssW7wDAIhAK7dPp%2F6jka9FG8NXEp1uqZVZNiKz6a5nDEls92FmDpBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRe5UOG6OSR5u71Cwq3AM79ki9QhTvXeq1xJimhRt%2BAhwhwPiUGs6H5dwmKxlFFsM2F%2FC0S09Mgw0hdz9nfpIbiUEMitvWowoq7sdtHwvYCThiX%2FWmxHAbmyN0bb%2BAApi5Y%2BBi0e7tuqi1PyB0LvEeVPyN6RWQZXKLklOrFzcpZyfEOtGnkN7cso36r6GAiipZTqpqnD3e0ygAfgdQba%2BR68gCxGaRh6dBy7X2VyC4sseV3YpQGzZr126%2FHXkofI0QKqjlj88FNL03oCSd0giT4F8kWLjFtUhx8bff924WoDGu0j1PRjQD3%2BN2d66V4tgN7RQ9aChJwF%2FulGoW4V2unhLG9qsIkgHUVhyV8pa2unH9gepzRFX2y25zwmjSCc%2Ftl%2BsLB%2FSI%2FVh2u3XDc0A5cwM%2FjlhTUGpmdbsPwRnxaH7FBydvduM%2BpbSNoNv6mhUlEVNbgCWrO%2FnYYpQ7fgA1GmReCnXwS521sYbXKlXjAOif1eoQnvZAvm3HGQOLlQQhkW6lUdAX4bUiIa%2F0S72DCdvCAk9GtBEJM6Odwib%2BuJ1WovXRmFjs2EjZsanGArWEoIYjGQf6kFFJG6i%2FQFeWzNQ4qG1JqCkbR1QbGpI%2FY123hWimadeh5pTiEUYkChonGlKPnxxfXpmWvjDe9eDEBjqkAUwXUUazSz2Tsu46G6jQYGipwQnLg5o1%2FFT0FTNV3QD9XG5NMXTFqLqFTm2QYjOe%2FHLm6LfHg%2FlZdagrN0BThgHS2jlEVPeDrsFdOfP67URuNnFW50hQ63H3dHvB9pugdXvgvtI5qD5mqT1FLz4fULAg1dYW8nbcBqhFZAke6zRStvEkfGviA2xa7sl9dQ2SPBSK1DAYXrj73sB0Ejigxr%2Fd6T8%2F&X-Amz-Signature=8b04e3bb525c2b941fe0f774e87c995cc30b4178aa0560b1e60266d63f34e04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
