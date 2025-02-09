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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJXUSGS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCFvQwy%2F9SwcS0Uz6JKgM00ii0pna%2FATDctl%2BjJlVHwgIgJqqoaX6kjjk0PTf6zF0qa0nAgQzyiTSpsEG%2FByQZKWwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVxO6McWy1QPOfe0SrcA4MBw98uih8C396LK1zvfRRIZbmSXI73%2FojMNOvJtCWP6Wf%2Bki9gMJ2h1daGPpJWeoQKFSn7XibGObVahNYxUTL0Vkb7Kojylk96MpLzki8RQpsODL6CttaukEW9XSOmqH3wniy8a3yolq0wfFBC2OHeMKM5JEnG9ZR%2BHBxFJ8mipyPUskDrm6LyEbw%2B%2FOqqNZ6bsFAF8IbzH7VvhJzU%2Bj6Brcc8zsbxWwtNaG3grmW4jN1OnKaxImn7E6U011J9ctGKwDEsXds3Z2gzwpi8etzcPtju%2FlmccX2OPpzYyvFvpb%2Fh42uanDlsKBqE6o1T9qqvGB4aSnLXQ2%2ByzDyiYzlhUqRYmfoC6%2BLOSWKILQ%2BsAIjPuShE%2FfvDXI5gd1%2FeaBZJvBhJ83FAL92zZQvIRcIKUSsOLF48Rg1uM2PKXaHJMu7fYG3UrKhAkr92E%2FMOj7DUpFEQhLssSmC4D0o1yrSKFdTgDlua06Jn1Wf%2F5lh9Thihnl6vM5ZrGLRUPvpxp1xEshXnJ5769HmOExP%2FakGFkqG2qi9zBioIId4GAZfvUMVA5s52DWgS57jMbAAO%2B18E61V5kYuqWsp4tSyYk3lUg2O%2FwANWhfrrcN2mHfnmyogKMvQszkPcPRgTMOy%2FoL0GOqUB9e4Gbuz%2BIJBr%2BxuUDzY1903UlaJFnLjaLB2D3godsdqS7ktX7EgC458dyMfSid96Qige7xv56smf%2FPaToODb2uYf5CkMSLnBjFM4me%2BATEBsKdHYTQIQebBVear%2F2w7YMYe7I1g04MdTEvRrIqRGmltTBmrA%2FWDQFh7HhagnAyByBRekOwvddoS0rC37N5AlILz9GUVh1Jc6sTz0nakdLCr6fT4X&X-Amz-Signature=27296dbd838466f20f4aa4bea8b742397018661a24dd5cd25a2fbcd8d617ded0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJXUSGS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCFvQwy%2F9SwcS0Uz6JKgM00ii0pna%2FATDctl%2BjJlVHwgIgJqqoaX6kjjk0PTf6zF0qa0nAgQzyiTSpsEG%2FByQZKWwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVxO6McWy1QPOfe0SrcA4MBw98uih8C396LK1zvfRRIZbmSXI73%2FojMNOvJtCWP6Wf%2Bki9gMJ2h1daGPpJWeoQKFSn7XibGObVahNYxUTL0Vkb7Kojylk96MpLzki8RQpsODL6CttaukEW9XSOmqH3wniy8a3yolq0wfFBC2OHeMKM5JEnG9ZR%2BHBxFJ8mipyPUskDrm6LyEbw%2B%2FOqqNZ6bsFAF8IbzH7VvhJzU%2Bj6Brcc8zsbxWwtNaG3grmW4jN1OnKaxImn7E6U011J9ctGKwDEsXds3Z2gzwpi8etzcPtju%2FlmccX2OPpzYyvFvpb%2Fh42uanDlsKBqE6o1T9qqvGB4aSnLXQ2%2ByzDyiYzlhUqRYmfoC6%2BLOSWKILQ%2BsAIjPuShE%2FfvDXI5gd1%2FeaBZJvBhJ83FAL92zZQvIRcIKUSsOLF48Rg1uM2PKXaHJMu7fYG3UrKhAkr92E%2FMOj7DUpFEQhLssSmC4D0o1yrSKFdTgDlua06Jn1Wf%2F5lh9Thihnl6vM5ZrGLRUPvpxp1xEshXnJ5769HmOExP%2FakGFkqG2qi9zBioIId4GAZfvUMVA5s52DWgS57jMbAAO%2B18E61V5kYuqWsp4tSyYk3lUg2O%2FwANWhfrrcN2mHfnmyogKMvQszkPcPRgTMOy%2FoL0GOqUB9e4Gbuz%2BIJBr%2BxuUDzY1903UlaJFnLjaLB2D3godsdqS7ktX7EgC458dyMfSid96Qige7xv56smf%2FPaToODb2uYf5CkMSLnBjFM4me%2BATEBsKdHYTQIQebBVear%2F2w7YMYe7I1g04MdTEvRrIqRGmltTBmrA%2FWDQFh7HhagnAyByBRekOwvddoS0rC37N5AlILz9GUVh1Jc6sTz0nakdLCr6fT4X&X-Amz-Signature=5d6e29c06c08930136d1357b70c1488fed2cb655f6fb299c530eefc2402b8cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
