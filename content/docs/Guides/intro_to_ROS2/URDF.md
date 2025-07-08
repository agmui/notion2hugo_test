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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOMNIJK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSJzSij55eLNoZXSdvPzkErIa9r4636wWrK%2FGq7xIrmgIgBlDuwQO1bqzZ4I%2FApleXiZcNCOVFqXGwrXjJN6v5hpAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrYgrZ3hmwiu5aFCSrcAwa3NuDzd3fhvywSlgeAzTgK9u25wTop5gau4VUTDeb8XKtiSym4fwJB8vo1%2FR2yY6xzB47qo%2FbAedCpJRzkT3KsUaIafsCoog0iegAG%2FGbArxMsQ%2FGfAqrd7CZmGsIhmJ7jzYfaAPt3yCC%2F76a9uzlj3kGdaq1YxUN1u3EqiQ%2BA%2B4OcTl1CNP%2BGMtxgefIP%2BUHucsdSeVETtMDwDXzux9TUSz9AZcRLdCswAvNT1ZWhWEX7bGLGZfOD0VJzvbM62FyHkK7qX90O4xWJmaIIPQCj2u2ukokDmVlNp3xN6TE060G7hR7sKrwk1Y3V6AvkzZWrH2o19rJj8n5gu565dJAnLP32rklEfsajv1t7N%2FGkF7fRJ6mJwtDk9O2UZ80Waf%2FRE8f4sHdA9WSmT6ywhM5A66sfLqz%2FtYQWfFQCZ4X3q1S7njB1iuov75LXf4G5WBGifiuJYSarxnTRzCY2pgXlMj2owgGiYaqytgKxYxoUs11rr2qX2u4dYNK0Vok3pPJfjRwzVIkCljBybL7RYNOOAoRLb62LoCxjb5KIJFU6WvlIfiuFRqJTEHidrEriIcciov%2BwdJFSGWiRkQLeAC7WzNNfEaI%2BIo2Tv5wRaPOw9i8zL%2B2ymeetgX1TMPH%2FtMMGOqUBaPt91CYhhRE88bZuilAamOixJ6tcXv3408pHLT4I0BkC2YOo8wp1F%2FesivyihFuWqyUfn%2Fwh3YwTwyBok6QZ9GGCD4N62on%2FHsTqEzLk%2Bc9C6PsN%2BJHJk2U%2F5jCNLhcdR7Ddt4K5Nrs%2BmopURIOG5dlriYFRI6P6EiAjsgAkfeaVK23Y%2B%2FFLf44m6eWxolo4U%2Fucl7M41Etw2NME86CWQYyTJ5kx&X-Amz-Signature=524125d2e36ba3a50d41374fa14aa5e792422485e177e3d587b0170ff434137c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOMNIJK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSJzSij55eLNoZXSdvPzkErIa9r4636wWrK%2FGq7xIrmgIgBlDuwQO1bqzZ4I%2FApleXiZcNCOVFqXGwrXjJN6v5hpAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrYgrZ3hmwiu5aFCSrcAwa3NuDzd3fhvywSlgeAzTgK9u25wTop5gau4VUTDeb8XKtiSym4fwJB8vo1%2FR2yY6xzB47qo%2FbAedCpJRzkT3KsUaIafsCoog0iegAG%2FGbArxMsQ%2FGfAqrd7CZmGsIhmJ7jzYfaAPt3yCC%2F76a9uzlj3kGdaq1YxUN1u3EqiQ%2BA%2B4OcTl1CNP%2BGMtxgefIP%2BUHucsdSeVETtMDwDXzux9TUSz9AZcRLdCswAvNT1ZWhWEX7bGLGZfOD0VJzvbM62FyHkK7qX90O4xWJmaIIPQCj2u2ukokDmVlNp3xN6TE060G7hR7sKrwk1Y3V6AvkzZWrH2o19rJj8n5gu565dJAnLP32rklEfsajv1t7N%2FGkF7fRJ6mJwtDk9O2UZ80Waf%2FRE8f4sHdA9WSmT6ywhM5A66sfLqz%2FtYQWfFQCZ4X3q1S7njB1iuov75LXf4G5WBGifiuJYSarxnTRzCY2pgXlMj2owgGiYaqytgKxYxoUs11rr2qX2u4dYNK0Vok3pPJfjRwzVIkCljBybL7RYNOOAoRLb62LoCxjb5KIJFU6WvlIfiuFRqJTEHidrEriIcciov%2BwdJFSGWiRkQLeAC7WzNNfEaI%2BIo2Tv5wRaPOw9i8zL%2B2ymeetgX1TMPH%2FtMMGOqUBaPt91CYhhRE88bZuilAamOixJ6tcXv3408pHLT4I0BkC2YOo8wp1F%2FesivyihFuWqyUfn%2Fwh3YwTwyBok6QZ9GGCD4N62on%2FHsTqEzLk%2Bc9C6PsN%2BJHJk2U%2F5jCNLhcdR7Ddt4K5Nrs%2BmopURIOG5dlriYFRI6P6EiAjsgAkfeaVK23Y%2B%2FFLf44m6eWxolo4U%2Fucl7M41Etw2NME86CWQYyTJ5kx&X-Amz-Signature=a746fc9b380449f99f9ae64862c8cc635ace7efca73c9334d3cb805b5031c520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
