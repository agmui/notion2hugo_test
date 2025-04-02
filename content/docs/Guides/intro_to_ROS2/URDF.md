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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YALEU3J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD0aMu%2BDWPb2u8Yh3gIuIzOzW0NkOkcWlbapvqrs23BfQIgBvPZwv%2FjvKzjqR6%2BiYSYQnZHE86z0Mu%2F283MLH2v%2BNoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNODcB0UvVbgn3me3CrcA94rRrSK45Wrs1P4aaukuQ9d3jukk%2FI5XvFiZGcGnywK7I171lpUaac72%2BeM%2FlH0BZqKAfYCUpn1ZH2bP5nbU7nA6DL7mj6w0hu1dRanCdNnjUJgKqHpY0sN68%2FNAEkVjskqKlE48XJhys%2FIuc4E33XzWOh7V%2F3TMXscaLwMsNiHEBHY1fHtjcMqE3yrYmihPFWLOrnPYtIPuYvi%2FNKIB7v7kWlrTz42Z8bKQgUuA7Gn9%2FpHxuq4%2BUBVwkGvVgEBQgGpO7zfThyr%2FmIEtcU3mGPerT20j7vFN%2FJj6r4S2S0ITlbMVgMa9dZncztXbOwlFGgIr6uhx349thq6tB0joxFkTG1JyAxSCBtOikPucm%2B83PVYh3I8vFu97mQ61m7wSEVvRukLPj6hz%2FZERRIHn2kY8fJObIa8ThLGtitD3eXbE57FJ6dMCas0dwd3b3PjRvzpm9f8mMZLe0KJjNzFOtU1m8azG%2BgOV0fQQz9wxYkKff%2FMkKPbERPHKLBOGEWkiU5j2S3ve4ZR5WpptOD9BmLaYcLa%2Fev4aIengg6O6r8RvoNU8NYzCVuD8490Hu6BJshM7HuFVsApDVm6pooWo8%2FBmumMA%2F8hHueMWTGu1CuWEFuzkfZOpzJYolwXMMvos78GOqUBjtsxmECFFd6AxyewYnOoHppOIo98XSfr2upUBz%2FuJfqp53born%2BNvhXZn6IzBR%2FO%2B3Ttv3EBEKi1w%2F8G6Etx6P4f9G%2F60MNIhftPCCzrHo9VHEivke%2B6YyGCP6N%2BAhBrCbFz5MhU6tBirAO8KUIepypZWFisAhVc03o4vs9CUvRgG4ORzExT52aKhDuMdlMRDa1dINAn2PFa1lS1hoiyu5Dl5ZMk&X-Amz-Signature=a4e26a9b2f43ce16203fcadbfaf1ec6f64869ecb21b865734dd13b99c6fd2b09&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YALEU3J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD0aMu%2BDWPb2u8Yh3gIuIzOzW0NkOkcWlbapvqrs23BfQIgBvPZwv%2FjvKzjqR6%2BiYSYQnZHE86z0Mu%2F283MLH2v%2BNoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNODcB0UvVbgn3me3CrcA94rRrSK45Wrs1P4aaukuQ9d3jukk%2FI5XvFiZGcGnywK7I171lpUaac72%2BeM%2FlH0BZqKAfYCUpn1ZH2bP5nbU7nA6DL7mj6w0hu1dRanCdNnjUJgKqHpY0sN68%2FNAEkVjskqKlE48XJhys%2FIuc4E33XzWOh7V%2F3TMXscaLwMsNiHEBHY1fHtjcMqE3yrYmihPFWLOrnPYtIPuYvi%2FNKIB7v7kWlrTz42Z8bKQgUuA7Gn9%2FpHxuq4%2BUBVwkGvVgEBQgGpO7zfThyr%2FmIEtcU3mGPerT20j7vFN%2FJj6r4S2S0ITlbMVgMa9dZncztXbOwlFGgIr6uhx349thq6tB0joxFkTG1JyAxSCBtOikPucm%2B83PVYh3I8vFu97mQ61m7wSEVvRukLPj6hz%2FZERRIHn2kY8fJObIa8ThLGtitD3eXbE57FJ6dMCas0dwd3b3PjRvzpm9f8mMZLe0KJjNzFOtU1m8azG%2BgOV0fQQz9wxYkKff%2FMkKPbERPHKLBOGEWkiU5j2S3ve4ZR5WpptOD9BmLaYcLa%2Fev4aIengg6O6r8RvoNU8NYzCVuD8490Hu6BJshM7HuFVsApDVm6pooWo8%2FBmumMA%2F8hHueMWTGu1CuWEFuzkfZOpzJYolwXMMvos78GOqUBjtsxmECFFd6AxyewYnOoHppOIo98XSfr2upUBz%2FuJfqp53born%2BNvhXZn6IzBR%2FO%2B3Ttv3EBEKi1w%2F8G6Etx6P4f9G%2F60MNIhftPCCzrHo9VHEivke%2B6YyGCP6N%2BAhBrCbFz5MhU6tBirAO8KUIepypZWFisAhVc03o4vs9CUvRgG4ORzExT52aKhDuMdlMRDa1dINAn2PFa1lS1hoiyu5Dl5ZMk&X-Amz-Signature=90f6da6872b0d73591487ff924c83f26fef5af4af5a295fbc1ede0fb8fa371fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
