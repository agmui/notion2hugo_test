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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOFDBY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCutOO9uYQSglDGf9COr8t9639ApC%2BDrxxL33tMBB85PgIhALboqnbkvG6Xfp8IYdcibxzWBWXhVGfeHdkNbX%2B1cxv2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH4eudV%2BTF1MPpmOAq3AM5RcNA2O6CH0Jl0KNWPrgkllnnmubVMUSDhQy%2BspHHP7Y%2BPsfSnQ41%2BS3hEMXRnMaW3U%2BIKzBKIP6Rww9CPK1XWIfvzqrQ6C8hlr9lmz5iWoKdkJPMWw0RbvC0M2iMselQGM5W4HxWJgsdiWXK2r0LDjP3QhIEYGIN5JiR%2FegO9C2qCi%2B9FqsilWxn7OSOuDJ%2BKVzB8CcJ5kRDS618O2FDly1jYedS34D22CUa0XicKPxhPHovnOIiWtAJz22YK2zNE3iK9IrtXiXADZzUOyMco5knt1LS5ywZBTBWLNU642jkfZzFAcMzw9M87jMNZUzDq778k%2FzFEt3Q5DnNgONtS180re3OVp6SDbqldsdPjJQm%2B1gw1HxGFzd4HyRNErDJwY07U%2FY8jMB%2FTAkW%2BTOCHWuaZnQXJiQvI4NVXswoQT6xsxikrZHAJs2Xvm8DMv2ZIetW7G7x%2Bh%2B7QmVlp14VsMoO4kF1YDIkpBasv81vZw4k5mdM36HaCweBjsAJMoBVGTn0ub0MDxtDdaDT96IxVwWiqYc0RCc6P%2B48VSJGN95GdD7C5lYM9trkA%2FeDqYeVzp6YHd%2B13Pc4I4i7unYf1hTlaVfaB%2Bnmy%2BHYIsU8bMWv9K9U8c1zZiiLfTDBr7%2B%2BBjqkAcTV7Ii%2B9sBSTgjZFzHZFH5k41VwGq7Q8lOMdc3hR42JOb%2FPVM7kyTW9NxzISCpWo%2FZ7cm7LZYeTnK0NlmN1nOkAPrHdexikR%2BqLWbSVwq1vm9msH59X858Du6bC%2FvYk1NZzEnuUnvD5CWFu%2FNhkxJLy6GPOQVrqTmkZN%2FMTKy94iTGZMJ96fFFbfCC3x6BgUeIEDm2nq0QGba2JV8yJjiMTVTCu&X-Amz-Signature=69903f4c467bf1e61ed1a0acfe145f31c33fcb720d66d72e57039759030dde64&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLOOFDBY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCutOO9uYQSglDGf9COr8t9639ApC%2BDrxxL33tMBB85PgIhALboqnbkvG6Xfp8IYdcibxzWBWXhVGfeHdkNbX%2B1cxv2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyH4eudV%2BTF1MPpmOAq3AM5RcNA2O6CH0Jl0KNWPrgkllnnmubVMUSDhQy%2BspHHP7Y%2BPsfSnQ41%2BS3hEMXRnMaW3U%2BIKzBKIP6Rww9CPK1XWIfvzqrQ6C8hlr9lmz5iWoKdkJPMWw0RbvC0M2iMselQGM5W4HxWJgsdiWXK2r0LDjP3QhIEYGIN5JiR%2FegO9C2qCi%2B9FqsilWxn7OSOuDJ%2BKVzB8CcJ5kRDS618O2FDly1jYedS34D22CUa0XicKPxhPHovnOIiWtAJz22YK2zNE3iK9IrtXiXADZzUOyMco5knt1LS5ywZBTBWLNU642jkfZzFAcMzw9M87jMNZUzDq778k%2FzFEt3Q5DnNgONtS180re3OVp6SDbqldsdPjJQm%2B1gw1HxGFzd4HyRNErDJwY07U%2FY8jMB%2FTAkW%2BTOCHWuaZnQXJiQvI4NVXswoQT6xsxikrZHAJs2Xvm8DMv2ZIetW7G7x%2Bh%2B7QmVlp14VsMoO4kF1YDIkpBasv81vZw4k5mdM36HaCweBjsAJMoBVGTn0ub0MDxtDdaDT96IxVwWiqYc0RCc6P%2B48VSJGN95GdD7C5lYM9trkA%2FeDqYeVzp6YHd%2B13Pc4I4i7unYf1hTlaVfaB%2Bnmy%2BHYIsU8bMWv9K9U8c1zZiiLfTDBr7%2B%2BBjqkAcTV7Ii%2B9sBSTgjZFzHZFH5k41VwGq7Q8lOMdc3hR42JOb%2FPVM7kyTW9NxzISCpWo%2FZ7cm7LZYeTnK0NlmN1nOkAPrHdexikR%2BqLWbSVwq1vm9msH59X858Du6bC%2FvYk1NZzEnuUnvD5CWFu%2FNhkxJLy6GPOQVrqTmkZN%2FMTKy94iTGZMJ96fFFbfCC3x6BgUeIEDm2nq0QGba2JV8yJjiMTVTCu&X-Amz-Signature=104c1ed3fbce8ab72c646f0c269a3a7d51871432dc1924055207dbf064469701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
