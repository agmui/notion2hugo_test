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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQLXJTF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBOjkkvF%2BxhNRuCtPt3t4OlGJq0PuGE0ohuky%2B0zlZ7dAiEAjj%2Bxt62lDp2i6OvazP%2FolmM62whpEgEMyaQVgp3rPgEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaghtwSEDQLBnHF2ircAzLz5ywKU8mSiwnpVuKYKtc%2BKG8G%2B6Txzoge8sDi1nsNCNnBnqMyX0F9j1MFsqRw2UpXxoU3ejpO6aZMEdULuEuMuS4MChiQiaSOclb4BFpsfaNIxcxioTrWkSLxXRlY7s0V%2BNx4XhQAMOi64cB15nArgoPh1KSkzdGyG50VEfUuRllX6VEokchCtXUQEOF5TAkHqZtOpoeQpGVZ2vq8vW3BlKwzlC9ilhGrYA6rclX7oJiY7SQYw1XVIGTH77Gyz45L9iudSZpD7JVefe1vBjDoJi6rA4bx3jpQU%2BjLIO6wHOB8qPe0ujlZUCzEWvijYO8kSOnX9QGVSbzGsxhgGYtOplUBhOlCzAzXjl5f3%2FsNFgZWFBIhWoad1sBY5xH4K0R%2FO4AMpW5z%2BVWKp0Ryoj52qniLJlFWpr1FyehcPAb3qPf6%2Fkfb8zyQJLv0dwQ2dlDLYLo7abxo3kH1dVSiKKq6LUzZCvr3xrYjKTi0EgREOMDXM%2FToLMU%2FsK8cKZb0R1UFqvAHSSDe2vXZ8BbmYwjzo4U6kZh9QWssoDovyIVgwFHIZw6SYu%2F8rf0%2BGy4Xf3wCOLgCJQNSU3wm1dqL9g3f2busPhIzu2YxhiOXaL0L6WjJf0NPRKHs6FY%2BMKmDl8AGOqUBlNHRXO2C%2BdDd6Mxg3cu2FojlsyORNv7WlOdxH4QE64H4Fwq8IezxDgFuhU6E6TFUkonAmlMrG6QjpyWKJhDNxEGz4tjjigpsSBCoU%2FLTg0Y382xDi%2Bfsb%2BWQy9bi3CE9UaAhSx6uXSar%2BwEJwhb3d%2FHDFqPqbK%2FujlDvTZdEo0WKyzGI7igt1iqFOw%2FfFakk3A%2B4C1z%2FzPJQ4DHz7ElRDMcLVpNd&X-Amz-Signature=9a41361f5aa406da5b8944db8d9f217cc6e173cd253db39e07508f26e1631cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQLXJTF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBOjkkvF%2BxhNRuCtPt3t4OlGJq0PuGE0ohuky%2B0zlZ7dAiEAjj%2Bxt62lDp2i6OvazP%2FolmM62whpEgEMyaQVgp3rPgEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaghtwSEDQLBnHF2ircAzLz5ywKU8mSiwnpVuKYKtc%2BKG8G%2B6Txzoge8sDi1nsNCNnBnqMyX0F9j1MFsqRw2UpXxoU3ejpO6aZMEdULuEuMuS4MChiQiaSOclb4BFpsfaNIxcxioTrWkSLxXRlY7s0V%2BNx4XhQAMOi64cB15nArgoPh1KSkzdGyG50VEfUuRllX6VEokchCtXUQEOF5TAkHqZtOpoeQpGVZ2vq8vW3BlKwzlC9ilhGrYA6rclX7oJiY7SQYw1XVIGTH77Gyz45L9iudSZpD7JVefe1vBjDoJi6rA4bx3jpQU%2BjLIO6wHOB8qPe0ujlZUCzEWvijYO8kSOnX9QGVSbzGsxhgGYtOplUBhOlCzAzXjl5f3%2FsNFgZWFBIhWoad1sBY5xH4K0R%2FO4AMpW5z%2BVWKp0Ryoj52qniLJlFWpr1FyehcPAb3qPf6%2Fkfb8zyQJLv0dwQ2dlDLYLo7abxo3kH1dVSiKKq6LUzZCvr3xrYjKTi0EgREOMDXM%2FToLMU%2FsK8cKZb0R1UFqvAHSSDe2vXZ8BbmYwjzo4U6kZh9QWssoDovyIVgwFHIZw6SYu%2F8rf0%2BGy4Xf3wCOLgCJQNSU3wm1dqL9g3f2busPhIzu2YxhiOXaL0L6WjJf0NPRKHs6FY%2BMKmDl8AGOqUBlNHRXO2C%2BdDd6Mxg3cu2FojlsyORNv7WlOdxH4QE64H4Fwq8IezxDgFuhU6E6TFUkonAmlMrG6QjpyWKJhDNxEGz4tjjigpsSBCoU%2FLTg0Y382xDi%2Bfsb%2BWQy9bi3CE9UaAhSx6uXSar%2BwEJwhb3d%2FHDFqPqbK%2FujlDvTZdEo0WKyzGI7igt1iqFOw%2FfFakk3A%2B4C1z%2FzPJQ4DHz7ElRDMcLVpNd&X-Amz-Signature=d649bd1072c10dfaa475aa67ea4b6e7e7a9b53b69f9892984daaa67adebdaf06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
