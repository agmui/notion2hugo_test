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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQY47AI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsTDoin1FJFI7hAwCtt3tkQKjiXJB1%2Bwu0fdHd2jchswIgbXk9nJdJA2bWg9yzI0vvIgdGrb0cfY7KQXotRxUo2YkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeVT1X%2B9cmqsPVdDCrcA0GMJ5n3Uauhe8T7wdGPUWR2XGh%2Fy4voEK%2FAJDD%2BoEeiHkjIZ7AWLKDd0taa%2BZxLvJ0Vdh8IkaeQyEQO9lfQDArQuX4o58tIGpup0Iu3M5yKyrb0W021ivHGXG8reK%2FLuixbrwkxcu3YOy%2FplkfxZ5nm8SNEGDn5UCZz4R2w%2FpJcxsw%2F2FbRBLpmBmmEVnZtEa8XSBV7kjPPOkBVSPGNkyXrR0zgTKAnrEhtQk%2FDJU%2F7kyS%2B1%2FBxN7eYZwh1IMkQZl6nf7toWgqGCWa%2BkXGLdTfHVE%2FG8lGWZaGGLEzE7AZKt4GmEyPvijPLuDUg%2FT%2FN7whjOgcMEhF0gUnbS53h5v6ZXnAeETz718dbw4BumAMTU8ciPxgdTcddriEhAGsMBkwSM6NE8%2BQGCdHF9dfP4nwcAvZztQd9HPsErE0Kxy66tsRWJNJgUG2NocNaJdlLmMJxGQyBW9IMHCSIAiXQO660Y7Uue8oj8UkaUl0XEzoH6i%2FGLFdRb3qdBY%2Fr8cK6SfGxx4yq4eRgtofCPGyYhDejFvLmsdTDUfa5lrj173Xt7agDbQZbZ%2BtZYcTVPa2bDyBsiMlHfVh4fav9EWd1W5Y%2Ba2gqj9jyuRNt%2BVfjqZJNQP%2Fdi%2FIvmcWMVIDMMN6ov8MGOqUB2eekxZSw6EqcJb%2F2%2FWhLO2X2Os%2F69U1HYjsnvckrZGMc%2BPgtYRZDhjkhUXY0Hk755V361mfSh5aUPRpwCJ0UPNQwWpI3hNuJsBRFXcCh9RmEGkI0wsbDO4YawjP6B89OsbDzZK6LDyj3%2B1OMvgss4iXSX2JUhzygVq2uTtUTl%2FSYN9sdYOV84AgU9PqYWqUN3w32nsaOJO1ybvtTkZy0ny%2BjmheO&X-Amz-Signature=e6413144664b6d7947f54201bbf42dbe70a63e10a887a6a3e1de1f5c92492879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQY47AI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsTDoin1FJFI7hAwCtt3tkQKjiXJB1%2Bwu0fdHd2jchswIgbXk9nJdJA2bWg9yzI0vvIgdGrb0cfY7KQXotRxUo2YkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeVT1X%2B9cmqsPVdDCrcA0GMJ5n3Uauhe8T7wdGPUWR2XGh%2Fy4voEK%2FAJDD%2BoEeiHkjIZ7AWLKDd0taa%2BZxLvJ0Vdh8IkaeQyEQO9lfQDArQuX4o58tIGpup0Iu3M5yKyrb0W021ivHGXG8reK%2FLuixbrwkxcu3YOy%2FplkfxZ5nm8SNEGDn5UCZz4R2w%2FpJcxsw%2F2FbRBLpmBmmEVnZtEa8XSBV7kjPPOkBVSPGNkyXrR0zgTKAnrEhtQk%2FDJU%2F7kyS%2B1%2FBxN7eYZwh1IMkQZl6nf7toWgqGCWa%2BkXGLdTfHVE%2FG8lGWZaGGLEzE7AZKt4GmEyPvijPLuDUg%2FT%2FN7whjOgcMEhF0gUnbS53h5v6ZXnAeETz718dbw4BumAMTU8ciPxgdTcddriEhAGsMBkwSM6NE8%2BQGCdHF9dfP4nwcAvZztQd9HPsErE0Kxy66tsRWJNJgUG2NocNaJdlLmMJxGQyBW9IMHCSIAiXQO660Y7Uue8oj8UkaUl0XEzoH6i%2FGLFdRb3qdBY%2Fr8cK6SfGxx4yq4eRgtofCPGyYhDejFvLmsdTDUfa5lrj173Xt7agDbQZbZ%2BtZYcTVPa2bDyBsiMlHfVh4fav9EWd1W5Y%2Ba2gqj9jyuRNt%2BVfjqZJNQP%2Fdi%2FIvmcWMVIDMMN6ov8MGOqUB2eekxZSw6EqcJb%2F2%2FWhLO2X2Os%2F69U1HYjsnvckrZGMc%2BPgtYRZDhjkhUXY0Hk755V361mfSh5aUPRpwCJ0UPNQwWpI3hNuJsBRFXcCh9RmEGkI0wsbDO4YawjP6B89OsbDzZK6LDyj3%2B1OMvgss4iXSX2JUhzygVq2uTtUTl%2FSYN9sdYOV84AgU9PqYWqUN3w32nsaOJO1ybvtTkZy0ny%2BjmheO&X-Amz-Signature=720e9f95faca5ccaafe2c04dd94ae9a6273fb00be3fd31a9f32513c06b673cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
