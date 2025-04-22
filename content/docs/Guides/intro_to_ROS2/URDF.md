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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T3TT52%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH02h5S9Zu%2FelWKxJR1%2FJxQKzIhaBwlKJu5f%2F%2BloBMdQAiEA4HF2i%2Fqj0rj%2BFIAnVKxD7dFaoP%2FaWXJLuNumHRB21poqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpwOLpVwCxp%2B0vzwCrcA%2FROyWVZz8MCZbvDkr5Dvb2CbYubv0LKdRx0JUmjEBe7Vd20KnI1vv%2BCtArYlVFIUEpOiWYczLgySIMv6CkkNCEfvPYwztgSvzENx66hRylO%2FGeXQoerfPAvzKCDouHYEmkdEghCfsEZuuf9%2F0mBQQ%2BEl49aUp2LWqnCcXL134HkgbwXPpjYlT0bFxjXo15EGOj0uh356kMlwzaavKgZtDU2bX3iCkwA1pqLT7fcw8cvOgOIx%2BSxZsFx5uOWEzMGNhajvfmp3gdVGPKEa0%2Bo7dbo%2BZSXNPds%2Bt5DfPd041deGrcmQMTfiTe5Sdnbq1URKD8Zzf3KxLO1FPpBW%2Bp1Ta5fopifXahCqu5IDuccAjTNm%2Bd2jNYBIbplFNaEbgdD%2FXTsZSgZsqqbwouf8o7xfkn21zJvZPkHDZhK9oH3SPMkKr0kkLsMZ01rYPuanMwxZMM8vHtAVVeeew6KM9FuXZppVMWDHmySshg2vMxPVxHhp7vMEADep2Wt41dgu%2F5D6Q9X2yhqiY9QRz0LPLtq5YDvjQP%2FLIx9813DSoOdfopN7YB1yE0VuhHwQs7WgGd4kIDMWwk%2By3qRhUWam1DILLBLLrcw0QfmElUUz20VOGfJw7R2nHT93kb6JSTXMLv2ncAGOqUBzGftbcAgj85K%2FsF2NcuUULQSWTfYIyQnnqTcyvXHLfIGkAqdhUfvqpU7dW3XFyspMe5v3JJJYJYdcjHo0dqGMC6EUaAeVW8pqN0DG05LPy7jhKcmwUGdbXjRIYFzl%2F3%2BFrdACE2ovy356tWNFSh%2BmdUpWJ57BZFBMrHm%2FjKJ3KtRzVEH7mRRlu9J964AlM%2FUKej93Xt3TQ0xaTcJ8oBEjP0QKQ0T&X-Amz-Signature=6fde0856d023140714212dc21dce8494c0754d5c7dd33c0a92d3481eda3a303a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665T3TT52%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIH02h5S9Zu%2FelWKxJR1%2FJxQKzIhaBwlKJu5f%2F%2BloBMdQAiEA4HF2i%2Fqj0rj%2BFIAnVKxD7dFaoP%2FaWXJLuNumHRB21poqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpwOLpVwCxp%2B0vzwCrcA%2FROyWVZz8MCZbvDkr5Dvb2CbYubv0LKdRx0JUmjEBe7Vd20KnI1vv%2BCtArYlVFIUEpOiWYczLgySIMv6CkkNCEfvPYwztgSvzENx66hRylO%2FGeXQoerfPAvzKCDouHYEmkdEghCfsEZuuf9%2F0mBQQ%2BEl49aUp2LWqnCcXL134HkgbwXPpjYlT0bFxjXo15EGOj0uh356kMlwzaavKgZtDU2bX3iCkwA1pqLT7fcw8cvOgOIx%2BSxZsFx5uOWEzMGNhajvfmp3gdVGPKEa0%2Bo7dbo%2BZSXNPds%2Bt5DfPd041deGrcmQMTfiTe5Sdnbq1URKD8Zzf3KxLO1FPpBW%2Bp1Ta5fopifXahCqu5IDuccAjTNm%2Bd2jNYBIbplFNaEbgdD%2FXTsZSgZsqqbwouf8o7xfkn21zJvZPkHDZhK9oH3SPMkKr0kkLsMZ01rYPuanMwxZMM8vHtAVVeeew6KM9FuXZppVMWDHmySshg2vMxPVxHhp7vMEADep2Wt41dgu%2F5D6Q9X2yhqiY9QRz0LPLtq5YDvjQP%2FLIx9813DSoOdfopN7YB1yE0VuhHwQs7WgGd4kIDMWwk%2By3qRhUWam1DILLBLLrcw0QfmElUUz20VOGfJw7R2nHT93kb6JSTXMLv2ncAGOqUBzGftbcAgj85K%2FsF2NcuUULQSWTfYIyQnnqTcyvXHLfIGkAqdhUfvqpU7dW3XFyspMe5v3JJJYJYdcjHo0dqGMC6EUaAeVW8pqN0DG05LPy7jhKcmwUGdbXjRIYFzl%2F3%2BFrdACE2ovy356tWNFSh%2BmdUpWJ57BZFBMrHm%2FjKJ3KtRzVEH7mRRlu9J964AlM%2FUKej93Xt3TQ0xaTcJ8oBEjP0QKQ0T&X-Amz-Signature=e273f4023015eac64cc268a6f73b9e82c6ed9e66bd06fe315309c2ee8d6e35aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
