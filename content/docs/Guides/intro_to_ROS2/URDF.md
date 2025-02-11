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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLU27PPY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyqQiKNwYf9LVZESLHh1soCGGGVY8vuElgeb75b4c9AAiEA5btWtF8Q2Njn%2FxPXiEfK4GulnEhYIQV%2BgNjbbKIKF58qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHqZCxpytRLcxuMUSrcA0U0ci27mv%2BsjAxI4pDnc0Y0Ab2CIRZRqKgUIVU9Ra1K1cFhwvW%2BeW7z7hAAsw1lc4gN8Ffac4IN%2BCaQONeIt1yPi12bBIKgplzFv9%2BM%2Bm8dWVY8BROZN5%2FLdW5mtmIDya5ad3D6vl8X8%2BmR4PQQedhYYdpcF2imrJoP2Xm95v835B0NEEHgnA2TnbGxUhuvT5BSgMv5qH%2BYAZu7FUOj3qp5%2BtBigbs%2FKekBEdfmQzLOfpyILSk%2BG46gH9cmABofAf%2BhrQgSQiomwBebC2ttvw5We0GKd2PyLIwt9zstq37U3xfZQ1xb18hjh0MaybgO5w7kySIodQshJHiOj9xpKPE9PNn5rOpXw78VOKjm3B%2FOeL20kbkJrazIredgdIwa6Dj%2BRQABgtBaq%2Fy3AqnPISzrOm%2F2VpLbUxz3B8OfS6ZA5uNxbZMDHkC9DYSG6%2BCnt1d79pjkfqND01yo6VPrJrbnXsELB03rsxE57DPubxv7vLjkTozEALgOkShonmqutAh8xRGFBmXpC7dbdPAjpxZ9CknXS163wmxcz68dbZmZ0GaEniD7a5CnAophnX4Bk2AeRyjMqtFKRyCGdDMzO5PjZpi1qoMutlJ2nrUgXYLhgXYx44T2w9Qxz6M%2BMNyArL0GOqUB0ltXQcyhRA91stnQMl25dHh4Hv3b1svedqUO9jGXRDPYC7f34IX%2BY4k1pxln9xwn4awGZ5lM8cjHrcRARVPnLmrl4GrULnIpSSsmX%2FEe9%2Bdy9vbY8xFOQqDCPyqm%2BdaRq%2B6qJxj6ueH6i76xRbqX6CebLB8%2B1HAE96cVAgpI3Bb%2FaQqqngs20Ssb3klY%2F%2BlnmnvU0h3u46HLeVGj55o%2BVpYKWlXG&X-Amz-Signature=2837e9318b3960d8535d83bc69741f218e0cf6e05a59b4baad1f239635d43d96&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLU27PPY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyqQiKNwYf9LVZESLHh1soCGGGVY8vuElgeb75b4c9AAiEA5btWtF8Q2Njn%2FxPXiEfK4GulnEhYIQV%2BgNjbbKIKF58qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHqZCxpytRLcxuMUSrcA0U0ci27mv%2BsjAxI4pDnc0Y0Ab2CIRZRqKgUIVU9Ra1K1cFhwvW%2BeW7z7hAAsw1lc4gN8Ffac4IN%2BCaQONeIt1yPi12bBIKgplzFv9%2BM%2Bm8dWVY8BROZN5%2FLdW5mtmIDya5ad3D6vl8X8%2BmR4PQQedhYYdpcF2imrJoP2Xm95v835B0NEEHgnA2TnbGxUhuvT5BSgMv5qH%2BYAZu7FUOj3qp5%2BtBigbs%2FKekBEdfmQzLOfpyILSk%2BG46gH9cmABofAf%2BhrQgSQiomwBebC2ttvw5We0GKd2PyLIwt9zstq37U3xfZQ1xb18hjh0MaybgO5w7kySIodQshJHiOj9xpKPE9PNn5rOpXw78VOKjm3B%2FOeL20kbkJrazIredgdIwa6Dj%2BRQABgtBaq%2Fy3AqnPISzrOm%2F2VpLbUxz3B8OfS6ZA5uNxbZMDHkC9DYSG6%2BCnt1d79pjkfqND01yo6VPrJrbnXsELB03rsxE57DPubxv7vLjkTozEALgOkShonmqutAh8xRGFBmXpC7dbdPAjpxZ9CknXS163wmxcz68dbZmZ0GaEniD7a5CnAophnX4Bk2AeRyjMqtFKRyCGdDMzO5PjZpi1qoMutlJ2nrUgXYLhgXYx44T2w9Qxz6M%2BMNyArL0GOqUB0ltXQcyhRA91stnQMl25dHh4Hv3b1svedqUO9jGXRDPYC7f34IX%2BY4k1pxln9xwn4awGZ5lM8cjHrcRARVPnLmrl4GrULnIpSSsmX%2FEe9%2Bdy9vbY8xFOQqDCPyqm%2BdaRq%2B6qJxj6ueH6i76xRbqX6CebLB8%2B1HAE96cVAgpI3Bb%2FaQqqngs20Ssb3klY%2F%2BlnmnvU0h3u46HLeVGj55o%2BVpYKWlXG&X-Amz-Signature=38edc99e1c84c3ba7783f5262f43df4c16f7c77ad53c2d2a5f5c55b6cc7a8a89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
