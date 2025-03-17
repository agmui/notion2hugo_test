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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEOWSJQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHgUhL6OaAdMXRe0UY7CAH%2BPF%2FnAodOMvI3qnO0wVJwIhAMNLK%2FdtPUdlmKVSqLCwj%2FHZWl7nKaH17d4b32oZDiTFKv8DCEIQABoMNjM3NDIzMTgzODA1Igx5lCt9%2BlX%2B0Z4p8lEq3AP7FiIkxR9ceGgNdh3FEPBXIO8FYhove%2BmAid8LBknEdPW7ZLVYWtdjs%2F9Q5KznuPWwmIjqZBj4c%2B%2FjYZ04k%2BNtCTDaFmiaAbl6fhJhzqQiyh6rfm9gV4y13UHiwKMnKmljgtCwJQO345mWVye0omqHySBq5TozMjghrEVYGgp2oCZmK7TSMhu5XABF%2B69qrgA4qHS%2BB8YGexxtDWuwS7N0Zml%2B4pOKTXTrg%2Bi0UrEILErhba31TPzRYCvxbfapXmZ3hyIdUUWaiA2Q6HFZk%2BHWOhjPdlLtW5Uj9I8OYcda2pOUrejVtHR4Jkq9XBKGL5e3iPkQiEhpkQbbJX0RxhN7ARCZF7w8pukSVHGRO8n5dgAse1FtK8pmjACtjrNqPP08%2Bha2fQblCYPwialwqITK7FMKbeC9m%2BpRu5t3ZGqWVUYAyU7o7LCdLaa66T62qPsWSz5%2BcyG%2Bukd0KMXA8JyHbJGb2C0sXNhGbM2tQ6RmLE2LMTOK11S9AmhzroycBnQsPH2F0zuGU6i%2FrMGcgBJ3hZskWWWYimh6%2FZ%2BgnP%2BeRrLDQDpRPxl7Nc%2Bo8Xy8rWPnBWza%2FMrx5wsSJh91Wfad0M4f0jMXurAqzno6t4%2Fj5BNBSw51IK06GC%2BwkjCRz9%2B%2BBjqkATegkYd2hCLYfdXBmgUiOslfHNAKAXTpqgNYJ7OocYFKZX5sAb9oFHIMEMeBzrlLhU3gR4%2BlY0uEodUGUsiLJlHo8Ka%2FSLPR1huVKl3YwiYJAIqqnOus1oU4U%2FWJCaCJ2iaHm5Ong6Kh%2FCqAtziKVmTn%2BFMW7EOBe%2FmCvncdtFIdfS7rc0Lps6f7YPlqE2Y2qTvu8Lqzg1mnB9bmGiOzWVO%2BUu1K&X-Amz-Signature=60e3461a510e9e526c8735827f48fbbcfe65b49612347b57af20f3aa71f3bd82&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEOWSJQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHgUhL6OaAdMXRe0UY7CAH%2BPF%2FnAodOMvI3qnO0wVJwIhAMNLK%2FdtPUdlmKVSqLCwj%2FHZWl7nKaH17d4b32oZDiTFKv8DCEIQABoMNjM3NDIzMTgzODA1Igx5lCt9%2BlX%2B0Z4p8lEq3AP7FiIkxR9ceGgNdh3FEPBXIO8FYhove%2BmAid8LBknEdPW7ZLVYWtdjs%2F9Q5KznuPWwmIjqZBj4c%2B%2FjYZ04k%2BNtCTDaFmiaAbl6fhJhzqQiyh6rfm9gV4y13UHiwKMnKmljgtCwJQO345mWVye0omqHySBq5TozMjghrEVYGgp2oCZmK7TSMhu5XABF%2B69qrgA4qHS%2BB8YGexxtDWuwS7N0Zml%2B4pOKTXTrg%2Bi0UrEILErhba31TPzRYCvxbfapXmZ3hyIdUUWaiA2Q6HFZk%2BHWOhjPdlLtW5Uj9I8OYcda2pOUrejVtHR4Jkq9XBKGL5e3iPkQiEhpkQbbJX0RxhN7ARCZF7w8pukSVHGRO8n5dgAse1FtK8pmjACtjrNqPP08%2Bha2fQblCYPwialwqITK7FMKbeC9m%2BpRu5t3ZGqWVUYAyU7o7LCdLaa66T62qPsWSz5%2BcyG%2Bukd0KMXA8JyHbJGb2C0sXNhGbM2tQ6RmLE2LMTOK11S9AmhzroycBnQsPH2F0zuGU6i%2FrMGcgBJ3hZskWWWYimh6%2FZ%2BgnP%2BeRrLDQDpRPxl7Nc%2Bo8Xy8rWPnBWza%2FMrx5wsSJh91Wfad0M4f0jMXurAqzno6t4%2Fj5BNBSw51IK06GC%2BwkjCRz9%2B%2BBjqkATegkYd2hCLYfdXBmgUiOslfHNAKAXTpqgNYJ7OocYFKZX5sAb9oFHIMEMeBzrlLhU3gR4%2BlY0uEodUGUsiLJlHo8Ka%2FSLPR1huVKl3YwiYJAIqqnOus1oU4U%2FWJCaCJ2iaHm5Ong6Kh%2FCqAtziKVmTn%2BFMW7EOBe%2FmCvncdtFIdfS7rc0Lps6f7YPlqE2Y2qTvu8Lqzg1mnB9bmGiOzWVO%2BUu1K&X-Amz-Signature=3c8d3a51ee04a12da258e59bd66c950f37be5e47400bdb68c064926b3a09669d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
