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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSYSVG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAj8fon%2FzOc%2BTk%2FgygZY293sPlrc0jBGsoHn6q0f9kLLAiEA2qtKpj0FnB%2FLSqmMiArzA%2FbGerHjz1IZY4sLyDa36zIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJ3J7kCtqC8p0pgUyrcA3M5N7F9RNe8hM56rZkVEBvUbbNYbJaKLpyj043ZWZ43%2F3EhU3M9ABvqRqiYdBC33p%2Bw%2Bai6jtGwoyju2kD2S9UHhvIm0bb69LYmzDzT%2B0FwOUhKaQlyFZhXS25eOynyxtEfV58mDu%2F8RlraoH3dgjWCfNAqC2ypTH%2FiE5A2MAiKB80KE1ufm4waFmNcmB%2BJ4ZkclIAcyKuuG6EqJFqkHrBXnbjg5uHqLSMPLTmpVN5qWxfCpWA6bAJhZvR2vP8p80ISMz9eeYVaMPtqO2agaBguUw9tuvuDXh%2FdB09tIFfwuYjWRc9%2FQ337MCCZJ5xPvVqswrb%2FEM5VmDOP22ygvgKBUU9FbSwNbnpMeF8mF%2ByWoEi5RqNg80sPtHNsQoXEg%2F%2FmCYs%2FhPbyDzQpstDDDOTuLtJmgjuetrYsZGxceATsm5fWuW6wmZdQYocsWYQrfK4YLG7%2FvyuAzj2PK8BJ0ggclxYIOJAMXMf2zM%2FGcgWlWcMDvVUIA2Hhz4W26RBkdfVW4X3Q82ktXggg%2B5tx6%2FOrtKGJ18yw8J2lueTQF8mMuprQZv2D4m1vV8HbOTDjGF1l%2BvmLI4%2Bqvg2Eq3WUTSERz2SScJYLYZAU99LPSHnzkxe5JL5P0HtehZ7fMJiA88EGOqUBixx3kfUmuB3IbQqWqZim22hu2OWLXVYscBY0pc5%2Fs9sDt%2F25cGxIPfogiFvK3qwvTC1mRiNgDTPtseQuyPkHnmIYJKzbvjDsGkJgnrmX%2BjDtfIIKpdhcmlOp%2B3eyJzAFwhIvjdJQsUGQzmFrZh1V71%2BWVJqlqhSpH0eKI%2F%2BXoJtAqBYzQ1RVaSmpgh3ZcEtIztyvH76%2Fkn8pCtcDv4p7HGqaaSaH&X-Amz-Signature=217cd91b815ace2d9f8685c5463023beed3842a15410b2bf41aefd67d71cbc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSYSVG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAj8fon%2FzOc%2BTk%2FgygZY293sPlrc0jBGsoHn6q0f9kLLAiEA2qtKpj0FnB%2FLSqmMiArzA%2FbGerHjz1IZY4sLyDa36zIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJ3J7kCtqC8p0pgUyrcA3M5N7F9RNe8hM56rZkVEBvUbbNYbJaKLpyj043ZWZ43%2F3EhU3M9ABvqRqiYdBC33p%2Bw%2Bai6jtGwoyju2kD2S9UHhvIm0bb69LYmzDzT%2B0FwOUhKaQlyFZhXS25eOynyxtEfV58mDu%2F8RlraoH3dgjWCfNAqC2ypTH%2FiE5A2MAiKB80KE1ufm4waFmNcmB%2BJ4ZkclIAcyKuuG6EqJFqkHrBXnbjg5uHqLSMPLTmpVN5qWxfCpWA6bAJhZvR2vP8p80ISMz9eeYVaMPtqO2agaBguUw9tuvuDXh%2FdB09tIFfwuYjWRc9%2FQ337MCCZJ5xPvVqswrb%2FEM5VmDOP22ygvgKBUU9FbSwNbnpMeF8mF%2ByWoEi5RqNg80sPtHNsQoXEg%2F%2FmCYs%2FhPbyDzQpstDDDOTuLtJmgjuetrYsZGxceATsm5fWuW6wmZdQYocsWYQrfK4YLG7%2FvyuAzj2PK8BJ0ggclxYIOJAMXMf2zM%2FGcgWlWcMDvVUIA2Hhz4W26RBkdfVW4X3Q82ktXggg%2B5tx6%2FOrtKGJ18yw8J2lueTQF8mMuprQZv2D4m1vV8HbOTDjGF1l%2BvmLI4%2Bqvg2Eq3WUTSERz2SScJYLYZAU99LPSHnzkxe5JL5P0HtehZ7fMJiA88EGOqUBixx3kfUmuB3IbQqWqZim22hu2OWLXVYscBY0pc5%2Fs9sDt%2F25cGxIPfogiFvK3qwvTC1mRiNgDTPtseQuyPkHnmIYJKzbvjDsGkJgnrmX%2BjDtfIIKpdhcmlOp%2B3eyJzAFwhIvjdJQsUGQzmFrZh1V71%2BWVJqlqhSpH0eKI%2F%2BXoJtAqBYzQ1RVaSmpgh3ZcEtIztyvH76%2Fkn8pCtcDv4p7HGqaaSaH&X-Amz-Signature=2f62e9bb92b222ce4cebd0371148aaa2cd8f020a1005a27cf9cc90546d05b7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
