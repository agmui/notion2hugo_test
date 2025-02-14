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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGY4PNO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDo17JhufVdVbdiTKkpFBClKjuY2fK6cFaO7TK5M1XY1wIhALZHwgLe0mIScb4qOLKqL5yH2v3ZnQZ01w7FIG1yNHQWKv8DCDgQABoMNjM3NDIzMTgzODA1IgyVRJVgFc6NL43uezMq3AP3Q8E8fyLgPxQDWL%2B7GlsKNJKE2YEi9w9NIzPNknn8eKnKmVVMZEtdcPPVApbS1yOlj9frCFHA5Y7dlDE72KH006D%2F%2FyB7r9jTeQ4tgRP22jqmDSe1zDs4b33ZE%2B1KmJZK4sCdI2EC0FDZltImKI7ubeeUnIwBqMsHFsdDwQt6ohhbPTAAYKplsuzXK7VCbMWoIEFXIs3c2DtG15HCaalzecm2NxCtAEzSfcK3%2FxhCG8WNnhJ4uF775gmQDH1z0fE4NPlU%2FtRrrDSWhbbTSfnZfi7Gde0%2B4KyarMDOukiAi%2FWvlVzVx%2B8cPfFk5dX7VfHq6l%2BJsqP91i4hXZzrZtu14IZ0u%2FMhLiWTVcL8kt73NIWjVf2IfVGj%2Fywg9uZN48opxXJaWTWcPlM9dqmls5tJyLEdZ%2BjhXjO08oS5%2FR1ZQr3lqcUCb%2Bd2mK6Aq6AO8aYYb8v%2B2Sjl0E8FytTCTmhFikYOoSry3GV3CDf%2FFf0I%2Bb5du2KIkIbw6Ueo0ZgsNBGlwLD4ofw1YD4x62liEJEq%2FCw0m5azRBTQ2Ri0MoAY8gT22mXM9Uu7ewxc0PJ3uAcq3c%2FmLUV1wBXleIpLkhHkAbxvVC7U6tRNU2j%2BmVxcjw7jPc%2BXPU6dBH7aHzDUlL%2B9BjqkAV%2Fh983MwREAmAGppWRsvIV3TXJbK%2BSlGG4F51ZA9VeD%2ByTmARnJCD95kgS5rGtlPxDlFRVcZ8ErbbcZdnobb%2BGNTtZxDFQlGVHAUeBkkpEvT2GDjcvUrV67rweEyeCBfkJnVa1ONwMEvfLIhyfAd%2BDKS48O3eNP3CoPw6xU%2BIxbXdxeg1hShnkMIy%2FdKkgw8FAEHWq8qcFPkIrNQrdqW7IS2dH9&X-Amz-Signature=7a2d5cf833d2c28180c94456cdc6075ae9427e868be69cf7865a7e6a3863a046&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGY4PNO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDo17JhufVdVbdiTKkpFBClKjuY2fK6cFaO7TK5M1XY1wIhALZHwgLe0mIScb4qOLKqL5yH2v3ZnQZ01w7FIG1yNHQWKv8DCDgQABoMNjM3NDIzMTgzODA1IgyVRJVgFc6NL43uezMq3AP3Q8E8fyLgPxQDWL%2B7GlsKNJKE2YEi9w9NIzPNknn8eKnKmVVMZEtdcPPVApbS1yOlj9frCFHA5Y7dlDE72KH006D%2F%2FyB7r9jTeQ4tgRP22jqmDSe1zDs4b33ZE%2B1KmJZK4sCdI2EC0FDZltImKI7ubeeUnIwBqMsHFsdDwQt6ohhbPTAAYKplsuzXK7VCbMWoIEFXIs3c2DtG15HCaalzecm2NxCtAEzSfcK3%2FxhCG8WNnhJ4uF775gmQDH1z0fE4NPlU%2FtRrrDSWhbbTSfnZfi7Gde0%2B4KyarMDOukiAi%2FWvlVzVx%2B8cPfFk5dX7VfHq6l%2BJsqP91i4hXZzrZtu14IZ0u%2FMhLiWTVcL8kt73NIWjVf2IfVGj%2Fywg9uZN48opxXJaWTWcPlM9dqmls5tJyLEdZ%2BjhXjO08oS5%2FR1ZQr3lqcUCb%2Bd2mK6Aq6AO8aYYb8v%2B2Sjl0E8FytTCTmhFikYOoSry3GV3CDf%2FFf0I%2Bb5du2KIkIbw6Ueo0ZgsNBGlwLD4ofw1YD4x62liEJEq%2FCw0m5azRBTQ2Ri0MoAY8gT22mXM9Uu7ewxc0PJ3uAcq3c%2FmLUV1wBXleIpLkhHkAbxvVC7U6tRNU2j%2BmVxcjw7jPc%2BXPU6dBH7aHzDUlL%2B9BjqkAV%2Fh983MwREAmAGppWRsvIV3TXJbK%2BSlGG4F51ZA9VeD%2ByTmARnJCD95kgS5rGtlPxDlFRVcZ8ErbbcZdnobb%2BGNTtZxDFQlGVHAUeBkkpEvT2GDjcvUrV67rweEyeCBfkJnVa1ONwMEvfLIhyfAd%2BDKS48O3eNP3CoPw6xU%2BIxbXdxeg1hShnkMIy%2FdKkgw8FAEHWq8qcFPkIrNQrdqW7IS2dH9&X-Amz-Signature=ba28c98013c097118d3682bd821e16bd43e991198ecdf90adbd354aa9a7e9161&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
