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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645YFOGM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCr2ejKxFI1RL4H5yt%2BQXEQaPdTpORLQ%2FR2V5AGorSvQQIhAO8S4uC5V59kJFX%2Bs6o2YD%2FxLN2qgRbF1ZsXbDhz0Wu8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2n9N%2FVHOL%2BomdhUkq3AOthselpMB3p3C51j3qOKXs6xADKXhpxZ%2Bjx1xiNk9dyTD%2FPvT4NRtSTx9IkdvKp1te1r3Jb4LyNL1eTkC9q8y7udkzM3iCSXCKN7flWKDqtQ%2ByUUQWeQzyODOnoB06znoCNCNGPuN06BMS6zCDbD7rllY1D8MaYkWelwgN%2Bb3Ti8QrM55PGTMH%2B5XMZ5aFqtvgj5OexA3RSmb4zey7MmuIilW0qJWTVmBViG3qwrZBs7ZmCCEsjY7CcudHHhp1BqPetqCatN94cF%2BWl7NUs%2FbzpYSs8Zj88iz6FVI8wdn1ZKah6HyIvhru1%2BnsmZR8VJZZMx3EB8JpNd9i4di4no1a1LnyMFJjUVjZVxqxd3W%2BhTE41Km%2BeXr6AJbKX6iHaZxFKoZUs8kuMsXQ6tm0crMyXGi%2BO4fFoEyBDAYjrz6v3TZrvLdS8Oipub%2Bp5ANXPGAlIo09Axl7QO7A4InqilIkPGSXIhKpcXk0N8PX9B3PKT%2Bhkka8lUMj4WuhJ%2B6vlGQnp1Vlj3R6LYy7gGpEAPNg4KUY9HiRiO5b2Lfx27XgU9xh9Qv1j7Dy7LBixJWvEpW1OY85p1sdhuc4%2F0QGNpfIBEwDZun2u6Zf1eoBmUZUmCUzn4535cIeFPgzKDDm2pXABjqkAZKqaChxGmVOEysHnW%2BtgYBMyYCdo5Zy%2FCmgN4t1u1KyY%2FzTVvoSDhT0l0cpcPANeRkWESbmeEbV3%2FUY87pvheJ4jDNw9HLqu6pC6nmkk%2Fecpj5q8uoognqZd2LtftUFkyAaWJ4GM53LHPgalihF1%2B0ubtual6sqptXRHFI74q%2FBc487HZ3lXSPAamHG5fVlE9nx2VIW1AdQFLDblEEjLKeRNyGU&X-Amz-Signature=d913353bd7dba5e39d2f063f44e9c097f94143d71ee62a44aa6bc541cf4bdaf3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645YFOGM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCr2ejKxFI1RL4H5yt%2BQXEQaPdTpORLQ%2FR2V5AGorSvQQIhAO8S4uC5V59kJFX%2Bs6o2YD%2FxLN2qgRbF1ZsXbDhz0Wu8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2n9N%2FVHOL%2BomdhUkq3AOthselpMB3p3C51j3qOKXs6xADKXhpxZ%2Bjx1xiNk9dyTD%2FPvT4NRtSTx9IkdvKp1te1r3Jb4LyNL1eTkC9q8y7udkzM3iCSXCKN7flWKDqtQ%2ByUUQWeQzyODOnoB06znoCNCNGPuN06BMS6zCDbD7rllY1D8MaYkWelwgN%2Bb3Ti8QrM55PGTMH%2B5XMZ5aFqtvgj5OexA3RSmb4zey7MmuIilW0qJWTVmBViG3qwrZBs7ZmCCEsjY7CcudHHhp1BqPetqCatN94cF%2BWl7NUs%2FbzpYSs8Zj88iz6FVI8wdn1ZKah6HyIvhru1%2BnsmZR8VJZZMx3EB8JpNd9i4di4no1a1LnyMFJjUVjZVxqxd3W%2BhTE41Km%2BeXr6AJbKX6iHaZxFKoZUs8kuMsXQ6tm0crMyXGi%2BO4fFoEyBDAYjrz6v3TZrvLdS8Oipub%2Bp5ANXPGAlIo09Axl7QO7A4InqilIkPGSXIhKpcXk0N8PX9B3PKT%2Bhkka8lUMj4WuhJ%2B6vlGQnp1Vlj3R6LYy7gGpEAPNg4KUY9HiRiO5b2Lfx27XgU9xh9Qv1j7Dy7LBixJWvEpW1OY85p1sdhuc4%2F0QGNpfIBEwDZun2u6Zf1eoBmUZUmCUzn4535cIeFPgzKDDm2pXABjqkAZKqaChxGmVOEysHnW%2BtgYBMyYCdo5Zy%2FCmgN4t1u1KyY%2FzTVvoSDhT0l0cpcPANeRkWESbmeEbV3%2FUY87pvheJ4jDNw9HLqu6pC6nmkk%2Fecpj5q8uoognqZd2LtftUFkyAaWJ4GM53LHPgalihF1%2B0ubtual6sqptXRHFI74q%2FBc487HZ3lXSPAamHG5fVlE9nx2VIW1AdQFLDblEEjLKeRNyGU&X-Amz-Signature=9bb6f7f3ed6d605a4835d4954e37c60894e3a506bb87ffd1953633407d387665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
