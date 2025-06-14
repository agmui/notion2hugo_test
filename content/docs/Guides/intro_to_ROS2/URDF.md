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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIL5NI4H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICBYSM5txk7THtksfcHUIACwCJbjGYo2tgcIqybhxTuJAiEA%2BZpwvw%2FzSYfnmbKKcLp2Zj3rORgSktpjjRtLhWz3uXQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEKdVbS7OUL9r3b47ircA%2FcbIFsDQWCp73G5NuGkKcUQ8H8Zh8GWSs6Ggs%2B%2BIJDmZgoMWWXllhC7JEF7Iwb9BSoujpdf2gf%2FdUx4NMsmd6dXXDtXKILvuIAYn8Jn2l%2B%2FneDkcl%2FFkK3vDc%2FCj7mUFO4Sb6AXxm%2FV7onIU2M9koFinKhh9ShMkqBvQ3oIMoqbA7hXlxTuJ%2B%2BxANT6Pe%2FR9RafOcy%2FWq9eje31x%2Bz0dM1ECLutWFBP9BDZgUtP8mjDi68gDexiG6aGbYhSp09Jb9Sl01ecNMp3kA8Ls%2FMMlpcAM9PM5zUGCgezsBVqv34Y3fXtBcGYvvdkXlf8WX%2FgYe5mLcNqqRYvNGZgwo%2BmmcwBgQnzv%2FG59LTB7h%2Bvmm7DsdxJoYkN0mfS0gCKoeaX8Suqdq%2BT2G46CUajiDxvFTIMR7Ju3eVwySO2TSJnYtXO4F888AcukCgAtPy%2FkJeozbMBR3NSqbd9LiH%2BT6RSBaWGlJHl7jSPPwiJwKrFpCCQZnauLTj%2BfXQU%2FJacXuILtwjKrqaSmTG9nD4RZAXJHCBWhIGHwUVLXv6FVD5mlGqKDH4IHyP2AR7fb6mg03S1xUuNqaCqjDPd0NO78w5jlXeIUAlP0NzqnCmCRsX0mAcegy8W%2BV3dsvu3rC9%2FMKaTtcIGOqUBvwKTMDcQrDqQ9xTEE6jx9oevzKcdY%2BS7cAKu3O6Rk%2BWj%2BBeBAdbtTjwK9M0ttqNa9gzWQFH3UuQkgprPtO1mBV1ruwXw2GqUbm%2FYm3%2F9eheBPfP1Xg7Pl8bTpUTEXU4o7CSudeWl%2B1b0UWDTW02A4lFjCUa%2FWi5zOgOtO29nG2Qu%2FRwdfB9N7OENG7M2z%2FS9cywQzz8J9hAG7%2BRhTg9KshXcq1Ql&X-Amz-Signature=18597cc9f047b7a747b66e4a07dc8f773c2a0fd992dae0eebe631c2c34106022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIL5NI4H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICBYSM5txk7THtksfcHUIACwCJbjGYo2tgcIqybhxTuJAiEA%2BZpwvw%2FzSYfnmbKKcLp2Zj3rORgSktpjjRtLhWz3uXQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEKdVbS7OUL9r3b47ircA%2FcbIFsDQWCp73G5NuGkKcUQ8H8Zh8GWSs6Ggs%2B%2BIJDmZgoMWWXllhC7JEF7Iwb9BSoujpdf2gf%2FdUx4NMsmd6dXXDtXKILvuIAYn8Jn2l%2B%2FneDkcl%2FFkK3vDc%2FCj7mUFO4Sb6AXxm%2FV7onIU2M9koFinKhh9ShMkqBvQ3oIMoqbA7hXlxTuJ%2B%2BxANT6Pe%2FR9RafOcy%2FWq9eje31x%2Bz0dM1ECLutWFBP9BDZgUtP8mjDi68gDexiG6aGbYhSp09Jb9Sl01ecNMp3kA8Ls%2FMMlpcAM9PM5zUGCgezsBVqv34Y3fXtBcGYvvdkXlf8WX%2FgYe5mLcNqqRYvNGZgwo%2BmmcwBgQnzv%2FG59LTB7h%2Bvmm7DsdxJoYkN0mfS0gCKoeaX8Suqdq%2BT2G46CUajiDxvFTIMR7Ju3eVwySO2TSJnYtXO4F888AcukCgAtPy%2FkJeozbMBR3NSqbd9LiH%2BT6RSBaWGlJHl7jSPPwiJwKrFpCCQZnauLTj%2BfXQU%2FJacXuILtwjKrqaSmTG9nD4RZAXJHCBWhIGHwUVLXv6FVD5mlGqKDH4IHyP2AR7fb6mg03S1xUuNqaCqjDPd0NO78w5jlXeIUAlP0NzqnCmCRsX0mAcegy8W%2BV3dsvu3rC9%2FMKaTtcIGOqUBvwKTMDcQrDqQ9xTEE6jx9oevzKcdY%2BS7cAKu3O6Rk%2BWj%2BBeBAdbtTjwK9M0ttqNa9gzWQFH3UuQkgprPtO1mBV1ruwXw2GqUbm%2FYm3%2F9eheBPfP1Xg7Pl8bTpUTEXU4o7CSudeWl%2B1b0UWDTW02A4lFjCUa%2FWi5zOgOtO29nG2Qu%2FRwdfB9N7OENG7M2z%2FS9cywQzz8J9hAG7%2BRhTg9KshXcq1Ql&X-Amz-Signature=ec7af3052408f5639b1870e86fdc3b88018af26df94f8109a66ca7ace605844b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
