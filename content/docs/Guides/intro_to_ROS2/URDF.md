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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2IIU6D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCNQo4ln6LiDVrOb2z7ToEC2HGWvGrZs%2B3mr0FWcLg4jQIhAPmX3CXd7nQiPkjw449onisFj2OY5L4exO3hdRrMmiz7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR9vNEqMfYxO4J95sq3AOrSyn4T5Oz%2FzAImE1fwaqZ3aPzAYdM6LmU%2B06EbUmh%2B3UJyAo04EW9zimUp%2Bq8WMV93enSn7or5hQMd8iGCyr1jMW6P7Mxlsdgn%2BCxDZTcPYk1zeeMMEYHXvIEr3OV0FHR8V%2BzHQ15TwaycCE5OlWoM9ZqN18A4ht0xz9VLNFaATVOuDEpKpxDowdmOACfP7KoRdGcKBQ5pfEJrZsH8eWAgmt5mJ5SdgkQ14XnqjowzoeB6x%2FBfgUYN5VzsYhI49eB1IRDOTzGBsTmc4DinXTIfMj8ifQJYI9AD2aYjndFO%2Bh2IGHwBnbOUO0Qf6E%2B9DGVOnjS7MHsK7M6YpiGiofxV0mhYcJHTpOpr6C95VeJBk1ISk%2BNMsBhF5iT%2BmFQJ5YxbvHjYCB4WJyAYnOLwsUm2C3z3kQZVPYDi97so%2BlxJ8Mn%2Bmbgd8w0g%2FWbEa%2FvqQhKRDt9agxWeqkoF8JjynQOtSceNdJu4O2cz9yJewkLP94Ppa7RvTqZI3zeqdyicYs6Z%2BIiqYXzbzlRXiCSLBiDnWCNty6Laj1q1khf0lVO%2BbHs506YG352gZxqgtgoQxASoI54oGhanjwag0ffS9QJovCXejSdOMNcxE0l%2F8mdFXT%2FH8HefU19JQLA0zCB97rBBjqkAdGQpJGS%2F6zgITO8ZcshjNXUUA%2FPrkJueHNTRPenwjavPfuXaSp6fnl9s6lR%2F86t5bD3sTLxy1AqlSaNde2TOGC8c1OxkCenH4bkuvA0oFY6T0Xs66CsZDKH7EOCXhkjvC847NMh5hxV2fUINXEkcafOgqcFEIhyB%2FnaWxYfUJGLHnHl4dVPERLKrm7gDf7X3JEPpLoJHkdoOrSTLtH8KrawU6B2&X-Amz-Signature=95096116888a361bbc7fa5d78439e1c8a76b88fcb383f0f0b00a7d551e35c1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J2IIU6D%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCNQo4ln6LiDVrOb2z7ToEC2HGWvGrZs%2B3mr0FWcLg4jQIhAPmX3CXd7nQiPkjw449onisFj2OY5L4exO3hdRrMmiz7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR9vNEqMfYxO4J95sq3AOrSyn4T5Oz%2FzAImE1fwaqZ3aPzAYdM6LmU%2B06EbUmh%2B3UJyAo04EW9zimUp%2Bq8WMV93enSn7or5hQMd8iGCyr1jMW6P7Mxlsdgn%2BCxDZTcPYk1zeeMMEYHXvIEr3OV0FHR8V%2BzHQ15TwaycCE5OlWoM9ZqN18A4ht0xz9VLNFaATVOuDEpKpxDowdmOACfP7KoRdGcKBQ5pfEJrZsH8eWAgmt5mJ5SdgkQ14XnqjowzoeB6x%2FBfgUYN5VzsYhI49eB1IRDOTzGBsTmc4DinXTIfMj8ifQJYI9AD2aYjndFO%2Bh2IGHwBnbOUO0Qf6E%2B9DGVOnjS7MHsK7M6YpiGiofxV0mhYcJHTpOpr6C95VeJBk1ISk%2BNMsBhF5iT%2BmFQJ5YxbvHjYCB4WJyAYnOLwsUm2C3z3kQZVPYDi97so%2BlxJ8Mn%2Bmbgd8w0g%2FWbEa%2FvqQhKRDt9agxWeqkoF8JjynQOtSceNdJu4O2cz9yJewkLP94Ppa7RvTqZI3zeqdyicYs6Z%2BIiqYXzbzlRXiCSLBiDnWCNty6Laj1q1khf0lVO%2BbHs506YG352gZxqgtgoQxASoI54oGhanjwag0ffS9QJovCXejSdOMNcxE0l%2F8mdFXT%2FH8HefU19JQLA0zCB97rBBjqkAdGQpJGS%2F6zgITO8ZcshjNXUUA%2FPrkJueHNTRPenwjavPfuXaSp6fnl9s6lR%2F86t5bD3sTLxy1AqlSaNde2TOGC8c1OxkCenH4bkuvA0oFY6T0Xs66CsZDKH7EOCXhkjvC847NMh5hxV2fUINXEkcafOgqcFEIhyB%2FnaWxYfUJGLHnHl4dVPERLKrm7gDf7X3JEPpLoJHkdoOrSTLtH8KrawU6B2&X-Amz-Signature=71cf4b3dbd7caec906bb9d8ed0ae753badce3896b7f7ab6a2c578b849799964a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
