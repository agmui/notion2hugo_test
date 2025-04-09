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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527IIZZ2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC017WG1gFWKSUWYgEaJbmEBfg%2BwIEKvPkStJsjvHI8egIhAOQkzc4BAbgDyQLM43U05%2F2XiO7DwzY5WTdiqaApyrGcKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPfbYw%2BIurE93bg8Iq3APydI93Sc29fBmEmhKfqYB75IL7DCHkNeZ3AQmqYrgXUafUAgdSy3kADzxwBgM6qkxVjFOZCsXNKcgzyw0VrVg5045ZELt0q67uqMVqCXKAka1R4Qs6znfz1z7Vw%2FGZQuhS2Lz7O0i%2BAXmH8%2FYjEBd6W8JkJn%2FjhA%2BbTP1Cow614A8qDhpONMjhMPzP%2B3ASmuWzuq1Lhdk3PhPe3Z33HgF4iUaOUDLApyAbvKDM3nVKF8vlNF5pEVg7papiK4ULE2ZC79EZ6U%2Fm%2FM5DnPqDKXbRJDqP2JVL7Kk0uhlXJwzyih%2FGUodjDWDEIRtu4PhAaCHqp6hafjo8eERHUFr3Q79K9gyxCoLcpx%2Fy5HHSqiAnfuLVwns8SaulW19MW94b733seZqBHg1yVLmfiGv4Gm2gEJbmqtygpnEyZal9S%2BPcM%2BMPCFWhw3o6387cz0Y1YMytbAjy%2FBOur45wS8a2xFSXzCAXltgRxVRUQy1xcbJ%2BVoUy678dzodnnGjmu2Jn5CADfACrGbp1zxz7vO64mzvSTeQoN%2ByaUrlMo3dyGNMU9v04gW7sYaNP%2FZjTw9cJu5b6pUG2%2FtOkoX5eOyqJtKo90aJ4vqegld0d6KskhjxbOZ5eq2yuQHnORDJSFDDYyNq%2FBjqkAVVHGlv7H48EinCTgKFjz35N6SHvmXyLFV%2FWC3DGIxrO%2BoRvuGVVxG0MVXjfdYcxlSxAdmQJmAyFUKDMFUClJFRERffx1Ytxl70dYA0YyunubAhtMGwkr5PybkNlRjOPj7ff5e5kY%2B95f8Yt9CiYEWIeaFuBmTd%2BR%2B5HVb2zoIFsnzUihNfOHNVFmm56imoR6ChXoMKjKfeRZCUOm8TCCk0rJ8kX&X-Amz-Signature=02b5bae6bad5ebe4824345d3a554a02ed4ef03abd4e58e851dfcb06431bd8cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527IIZZ2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC017WG1gFWKSUWYgEaJbmEBfg%2BwIEKvPkStJsjvHI8egIhAOQkzc4BAbgDyQLM43U05%2F2XiO7DwzY5WTdiqaApyrGcKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPfbYw%2BIurE93bg8Iq3APydI93Sc29fBmEmhKfqYB75IL7DCHkNeZ3AQmqYrgXUafUAgdSy3kADzxwBgM6qkxVjFOZCsXNKcgzyw0VrVg5045ZELt0q67uqMVqCXKAka1R4Qs6znfz1z7Vw%2FGZQuhS2Lz7O0i%2BAXmH8%2FYjEBd6W8JkJn%2FjhA%2BbTP1Cow614A8qDhpONMjhMPzP%2B3ASmuWzuq1Lhdk3PhPe3Z33HgF4iUaOUDLApyAbvKDM3nVKF8vlNF5pEVg7papiK4ULE2ZC79EZ6U%2Fm%2FM5DnPqDKXbRJDqP2JVL7Kk0uhlXJwzyih%2FGUodjDWDEIRtu4PhAaCHqp6hafjo8eERHUFr3Q79K9gyxCoLcpx%2Fy5HHSqiAnfuLVwns8SaulW19MW94b733seZqBHg1yVLmfiGv4Gm2gEJbmqtygpnEyZal9S%2BPcM%2BMPCFWhw3o6387cz0Y1YMytbAjy%2FBOur45wS8a2xFSXzCAXltgRxVRUQy1xcbJ%2BVoUy678dzodnnGjmu2Jn5CADfACrGbp1zxz7vO64mzvSTeQoN%2ByaUrlMo3dyGNMU9v04gW7sYaNP%2FZjTw9cJu5b6pUG2%2FtOkoX5eOyqJtKo90aJ4vqegld0d6KskhjxbOZ5eq2yuQHnORDJSFDDYyNq%2FBjqkAVVHGlv7H48EinCTgKFjz35N6SHvmXyLFV%2FWC3DGIxrO%2BoRvuGVVxG0MVXjfdYcxlSxAdmQJmAyFUKDMFUClJFRERffx1Ytxl70dYA0YyunubAhtMGwkr5PybkNlRjOPj7ff5e5kY%2B95f8Yt9CiYEWIeaFuBmTd%2BR%2B5HVb2zoIFsnzUihNfOHNVFmm56imoR6ChXoMKjKfeRZCUOm8TCCk0rJ8kX&X-Amz-Signature=cb2ed591801834c26a133a46fe6a92cf82eb14e108300b24ef9ef5a8a279fd71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
