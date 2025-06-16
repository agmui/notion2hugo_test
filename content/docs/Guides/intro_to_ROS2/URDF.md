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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMXQPZK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEHDFNouOjJWrzw0tdlfradLyZYCgNC4eR2ci58Bs30BAiBhGHyEGUWiLj1r0efVUM%2Bo8oyEwfoiuo7ZipM2xOGsqyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMSL6sQjDUfEAbSnHNKtwDUWZJO49sZoWmiAtUkAb3ohooP8LgpXKALTv4WLetRqqISA%2FSK41hYrPPguRUwZNh1BFHnBAgRB2NqGIzhSoEmzH6%2BCV1RABGBuWO%2BEy%2FW3AtuqwiSluDPdS1NK1gcnS4afEZqGnXEiWm67GexxU4zTX30QnWaOslf%2FrjP1UygLB6H%2BzYSVS%2B8b5LGLa63dwHnO0GAmZ49GinDL%2BSxsxbIXc77sQ5l8wtBHGLRaeOcCyBI9GAB06sdaQDs%2BUnpF5jsjwaJ%2BxVn4STyGblnuf7VtXInGKMnkrgbLsGCgjQt6ldeZhWPO58dpQHacFfpIoDDEaJxGSYHc0ACd0o61lbgS5GCp2g0kgI5EPV7ACf08aeq29R2qStF%2BJ1o82jnxh9W0It5hU%2BKDAASAeag7pKGy8vnQTjefvShFxmk8HSo1h8jebhHm1f%2FlYrtbb41sVmB9oE6N4u7tSjbCiTOuPfj54T9smjF0N1ji9ShbE76HStsG6RK9mKZiJvLgiwMdLCLJnDDRsasxgJp79qzOaM6FuDCGWtHkmLteDTEaLKKehB6Fdtuk%2BF13A4AEfIbQXeFZ%2Bd2XO1b3xmRIgewMj58kdPe2dxOdJjb9YnHEfIAxlsxxf48HDEiGk7YAMwv7nCwgY6pgFF6m7Nx9KDUyRi%2BL3iB3dD0QXluWwGC5TN1vYhv%2FM3WYUJ4BsaA3wrdLlbXSIMyEOpkJX0Ww2MqzmBwIM8FvOdfSmJHU47%2FkCq2o5hQJCzm1tClFi8HyoJuLrbcoNyR7RxSTIt3qSwpGn3Vtjp4AycQdJpfblJ1UcZFXMXVDYog9T4n2giNGfSEl%2BT1VPDCUPulEbJHUgkT4aDdad1aSiLfO8UiWkR&X-Amz-Signature=e4b4944db48be33ff45137ba3e7ecee33f4b4f588ca15842ae0e29e430782ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMXQPZK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEHDFNouOjJWrzw0tdlfradLyZYCgNC4eR2ci58Bs30BAiBhGHyEGUWiLj1r0efVUM%2Bo8oyEwfoiuo7ZipM2xOGsqyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMSL6sQjDUfEAbSnHNKtwDUWZJO49sZoWmiAtUkAb3ohooP8LgpXKALTv4WLetRqqISA%2FSK41hYrPPguRUwZNh1BFHnBAgRB2NqGIzhSoEmzH6%2BCV1RABGBuWO%2BEy%2FW3AtuqwiSluDPdS1NK1gcnS4afEZqGnXEiWm67GexxU4zTX30QnWaOslf%2FrjP1UygLB6H%2BzYSVS%2B8b5LGLa63dwHnO0GAmZ49GinDL%2BSxsxbIXc77sQ5l8wtBHGLRaeOcCyBI9GAB06sdaQDs%2BUnpF5jsjwaJ%2BxVn4STyGblnuf7VtXInGKMnkrgbLsGCgjQt6ldeZhWPO58dpQHacFfpIoDDEaJxGSYHc0ACd0o61lbgS5GCp2g0kgI5EPV7ACf08aeq29R2qStF%2BJ1o82jnxh9W0It5hU%2BKDAASAeag7pKGy8vnQTjefvShFxmk8HSo1h8jebhHm1f%2FlYrtbb41sVmB9oE6N4u7tSjbCiTOuPfj54T9smjF0N1ji9ShbE76HStsG6RK9mKZiJvLgiwMdLCLJnDDRsasxgJp79qzOaM6FuDCGWtHkmLteDTEaLKKehB6Fdtuk%2BF13A4AEfIbQXeFZ%2Bd2XO1b3xmRIgewMj58kdPe2dxOdJjb9YnHEfIAxlsxxf48HDEiGk7YAMwv7nCwgY6pgFF6m7Nx9KDUyRi%2BL3iB3dD0QXluWwGC5TN1vYhv%2FM3WYUJ4BsaA3wrdLlbXSIMyEOpkJX0Ww2MqzmBwIM8FvOdfSmJHU47%2FkCq2o5hQJCzm1tClFi8HyoJuLrbcoNyR7RxSTIt3qSwpGn3Vtjp4AycQdJpfblJ1UcZFXMXVDYog9T4n2giNGfSEl%2BT1VPDCUPulEbJHUgkT4aDdad1aSiLfO8UiWkR&X-Amz-Signature=55885128b2558707ac4fdd080cdf3ec944273913f40329ea4089056f88b3b427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
