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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS2G7HU7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBkFYwQdLmE2GEoy3%2FxwchUBqF0G4fnRhMDmsC2LEdaQIhANikrbb9vne5pINTtlXub8wSNh%2FNyUqQD80nLrft9ckJKv8DCD0QABoMNjM3NDIzMTgzODA1Igzgfrd0GWC%2BKYJ1t0Aq3ANiWyGogbc9Svfo1KMvkPqe0WzPVj18GeLXNDe8eAy8so%2BfVn24KK8BYNeuYQZqRoIsCUV2g%2BJpFlyp6h%2BQaiHCIqOQTtazK5d0tHha1a%2FgR9itwN9NF64iHviru%2FEIGOK3BJV%2FRRkujd348WRphpREsix7te8W9%2FWxlDhuQLh5Rank78MUGPaI3kw72VZ3e%2B6xGgmWQZH32eg0rFL%2Bj7betL9Stu0A0qI8A%2FwCbOV1XUob5byXnTztE4cWKQhWjZH%2BkCCKNodxQ9VjdCma%2BvSv%2B7NiTOasK4IpWBeU6PZv5PWiUtFN%2FCMn5sLYUqNlqbM1LBqJejy%2FnIT2eF7xF6k%2BWQr6SaeuO%2BYLD5blu74FKUfVNrrR%2FKo%2BVvE4z65gO6u%2Bm52zRJuvCOkefcqk%2BDDpsWMAEB9PE8DJ76KNf1e95eHzxB6Fd5Wt8sptwx1lEN67ivuYQtVPdrqyk%2BhMfuSIyb8Kyjip1T6MOy0Vu4QYpt0dse9stcDXy8qMIuccZ8yiLc7I%2Fha53KvMChH6bDw0VYjLqgn7%2FSda%2FpCm8qivV9qj5pAsNX6YbwrVT86YZMDM5jdI5ajtqkGS3EXGWxUYInlvnwkzfzj%2BRDzdNJ1i5TmTZOsg8SAotK8SZjDO1vy%2FBjqkAeHC5DKqb1SHqsP9wbZRe18z6siCrYZdPZBiafI41jf3oOIkgGalQpGs74cORqV3xzy9Igsx%2BvafXUOi6r1BLRQIY5TwQohjgoKihZuI55v1xfl%2FTf1pb8XjwFmz92VNVMEkjwq7%2FKtLyPeLON4gamBJrdSiCe05T6T195qaXgfB%2FvzuJFbCos4RdHIgC9l6ELAa98F4KIGpDaU2XK68YM%2F8tUY1&X-Amz-Signature=f6f2eeff558ffac742a7442c5113462530b65aa54b286237fdb9e434bd079ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS2G7HU7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBkFYwQdLmE2GEoy3%2FxwchUBqF0G4fnRhMDmsC2LEdaQIhANikrbb9vne5pINTtlXub8wSNh%2FNyUqQD80nLrft9ckJKv8DCD0QABoMNjM3NDIzMTgzODA1Igzgfrd0GWC%2BKYJ1t0Aq3ANiWyGogbc9Svfo1KMvkPqe0WzPVj18GeLXNDe8eAy8so%2BfVn24KK8BYNeuYQZqRoIsCUV2g%2BJpFlyp6h%2BQaiHCIqOQTtazK5d0tHha1a%2FgR9itwN9NF64iHviru%2FEIGOK3BJV%2FRRkujd348WRphpREsix7te8W9%2FWxlDhuQLh5Rank78MUGPaI3kw72VZ3e%2B6xGgmWQZH32eg0rFL%2Bj7betL9Stu0A0qI8A%2FwCbOV1XUob5byXnTztE4cWKQhWjZH%2BkCCKNodxQ9VjdCma%2BvSv%2B7NiTOasK4IpWBeU6PZv5PWiUtFN%2FCMn5sLYUqNlqbM1LBqJejy%2FnIT2eF7xF6k%2BWQr6SaeuO%2BYLD5blu74FKUfVNrrR%2FKo%2BVvE4z65gO6u%2Bm52zRJuvCOkefcqk%2BDDpsWMAEB9PE8DJ76KNf1e95eHzxB6Fd5Wt8sptwx1lEN67ivuYQtVPdrqyk%2BhMfuSIyb8Kyjip1T6MOy0Vu4QYpt0dse9stcDXy8qMIuccZ8yiLc7I%2Fha53KvMChH6bDw0VYjLqgn7%2FSda%2FpCm8qivV9qj5pAsNX6YbwrVT86YZMDM5jdI5ajtqkGS3EXGWxUYInlvnwkzfzj%2BRDzdNJ1i5TmTZOsg8SAotK8SZjDO1vy%2FBjqkAeHC5DKqb1SHqsP9wbZRe18z6siCrYZdPZBiafI41jf3oOIkgGalQpGs74cORqV3xzy9Igsx%2BvafXUOi6r1BLRQIY5TwQohjgoKihZuI55v1xfl%2FTf1pb8XjwFmz92VNVMEkjwq7%2FKtLyPeLON4gamBJrdSiCe05T6T195qaXgfB%2FvzuJFbCos4RdHIgC9l6ELAa98F4KIGpDaU2XK68YM%2F8tUY1&X-Amz-Signature=61b91d6d4f0b28a8bf1b060939e5a1b2b42b3a6f4bffe9dba936f287b4193ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
