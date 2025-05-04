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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKLLJQ4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDWw1Z9Ke9lLKaHuHSILOIXl2GnDTZog4fLnmGwKV0hLwIhALiWda1787bqeizKYszrBm8MiL8lAEJN160WJbfthAvzKv8DCB4QABoMNjM3NDIzMTgzODA1Igyp%2FPVoVmPaqBzEc9sq3ANHmrnmjIg3ao7mGY3OacfH3aOzM6zsk7j1%2FZmSaJT7FkXlKWGI8mh7x8mM2oFcngtqYhqZEjzVTnXvEN%2FZZv04duvneCPsvre%2FFmCoe0IfIlJu3ezEn3p5O9KsUSfKCK%2Bz5cArORkyYUh68sD2r1EUnm9zM4t3TMX60aPJ6Vrc7NmkF6pTZazQQu%2FKAZrWsVJkC35CDs1o2LplWI7MjTYn9Kn5AsI8X79vzYexw3rODDEqhpCLTUY0ZMSWS6gn2fnelBx4cE7aSRL7S7jd8oRhBy6tiThLlXGnxBJozCKounAfhF3d63LQF4LeDh8cHMbKcFl85o0IFeeZqeIJIP0qc0Pw%2BOyu%2FCVVXC681VqyedLsPsKZiqsQOUTLi1juAbMhsmS6w860VFEBXCsYwnnbxGitosvHm0P5T3vujKL9KKDXKHk7G53gblxtIyIy8q9chjBtmKzzTqRszwKJswuvk44XB0DV0iRtFcMLTIcHhuLvBG98ORyYPXzM8zbEGSphRCD7hNbwvQZ62SFTX74Npbia8t9O0d14riz6eLl9i9Xxeu49VyASLZE%2FtdiAn0Jozt7MdnjI9kV2a48uLdbtZBst3dU7jJF4mTl7MmQHqa9QQ48vSvX4MDR6BjDDrN%2FABjqkAfctvxNhGVaF8Lw2TRpQ3HbIx2EYswmue6VLUCpInXVwi8n8ue%2BBL0s9DvOTzWd9yENJyC0%2Br1AL%2F8t0amuMS9PcShPr9k28H9QiA%2F9tIKhKnMoxUy5RC0uH%2FmEroIbenEjmr6%2BmejdMggm2vrgtEJk9CjhZo6KbegKB2cur7HK4EEXWpvlQsUSH8utgrroTX0pIqjaiWWeSC%2BDdhbPJdgdX5W7%2B&X-Amz-Signature=7cbf2f3f691c0dad60fe7830c8386d5f9e4873d2534d6cce0827f295382f30b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKLLJQ4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDWw1Z9Ke9lLKaHuHSILOIXl2GnDTZog4fLnmGwKV0hLwIhALiWda1787bqeizKYszrBm8MiL8lAEJN160WJbfthAvzKv8DCB4QABoMNjM3NDIzMTgzODA1Igyp%2FPVoVmPaqBzEc9sq3ANHmrnmjIg3ao7mGY3OacfH3aOzM6zsk7j1%2FZmSaJT7FkXlKWGI8mh7x8mM2oFcngtqYhqZEjzVTnXvEN%2FZZv04duvneCPsvre%2FFmCoe0IfIlJu3ezEn3p5O9KsUSfKCK%2Bz5cArORkyYUh68sD2r1EUnm9zM4t3TMX60aPJ6Vrc7NmkF6pTZazQQu%2FKAZrWsVJkC35CDs1o2LplWI7MjTYn9Kn5AsI8X79vzYexw3rODDEqhpCLTUY0ZMSWS6gn2fnelBx4cE7aSRL7S7jd8oRhBy6tiThLlXGnxBJozCKounAfhF3d63LQF4LeDh8cHMbKcFl85o0IFeeZqeIJIP0qc0Pw%2BOyu%2FCVVXC681VqyedLsPsKZiqsQOUTLi1juAbMhsmS6w860VFEBXCsYwnnbxGitosvHm0P5T3vujKL9KKDXKHk7G53gblxtIyIy8q9chjBtmKzzTqRszwKJswuvk44XB0DV0iRtFcMLTIcHhuLvBG98ORyYPXzM8zbEGSphRCD7hNbwvQZ62SFTX74Npbia8t9O0d14riz6eLl9i9Xxeu49VyASLZE%2FtdiAn0Jozt7MdnjI9kV2a48uLdbtZBst3dU7jJF4mTl7MmQHqa9QQ48vSvX4MDR6BjDDrN%2FABjqkAfctvxNhGVaF8Lw2TRpQ3HbIx2EYswmue6VLUCpInXVwi8n8ue%2BBL0s9DvOTzWd9yENJyC0%2Br1AL%2F8t0amuMS9PcShPr9k28H9QiA%2F9tIKhKnMoxUy5RC0uH%2FmEroIbenEjmr6%2BmejdMggm2vrgtEJk9CjhZo6KbegKB2cur7HK4EEXWpvlQsUSH8utgrroTX0pIqjaiWWeSC%2BDdhbPJdgdX5W7%2B&X-Amz-Signature=05a4a97ddbcda56a460bf0b8c192ef769330ff3347b6805df2c2b3bca8b617c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
