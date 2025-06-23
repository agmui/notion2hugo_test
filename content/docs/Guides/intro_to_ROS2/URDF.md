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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXCCDBFO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFlObJosCighGU5%2FhxazkzviFTAo7gfEX59bWnBSJTFwAiEArGZF1Q1bwfO9PpsYx%2FFjqaP%2FDf7YizQlJhuXmTRBcuoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDmFSJWiIGd6ATWppircAzNA0dq0mERjYgEgM%2B7Fy%2Fe57S5pRhGb6jf4Ya0tN5A%2FdVm9y9UYYEbONJyivrtnbdvQ9tabq7z%2F8Is6egwsqtREDs8MiMgLU0rPEN0pe02sN%2FtnXMKrLoSesa%2Ffq95moscPA%2BFEl9PcC%2FsI7SrO61%2FblluRCrXUXVtPRENOkLC98%2FBL2FS49VJhp9uJF4CgMtT6DajMSu%2FqGgZLmEwKjfRyYA57Xbg9aWSSBUVB5SgLx%2BViixjpfNPyh%2FjgGnEtzECI60r23DcA9aOfIyUHLy8Tv3Tc63KSr2hLHepTZxygx4L9zOLIcG1KIvqC5sIHWUzjjD%2BitAs5VC%2BVndg3BT%2FtvM46WTDu%2BbGsjtgIwr2rKqhSJe5JTrNGix2an6NSsrUu7CB%2FOV5I6C0XzL6e2J65avoMB05I%2FVJc5mJzsmREx%2Fl6aowPzY4CGEgaWRuKu1zziZvvkS0TkjaSNxiubq%2F69%2FCQjTcQjFFjJTKhklGooals0FfWt8qixwacvxFfxDKITVnLyh8FjVX3i0GlCmJWAQlHvBtXLvOcLPZ0p7wPpz3111DpDppa0laN8blIjf7laxWB9uFcnzX5lb6bkKNjdrhicbMGzzDFOf%2FlnzuqDGac71GYyK6kWMwTMODP5MIGOqUBwnHfuF13z7GrAlQwJHoSaA4GETBjoIo0tiTK0I%2BNv8dWEOidd6%2FTgPUhMSnZbC%2BPSyBzrBKineYre2kmUkwPiWZy15%2F0IKU%2FY3B5gsmrQynfQgWJ%2BBiwIk%2BjTrtq5lO8zol%2FC61GEoodUhN8Zmng3GiDvR1jYfiPTyzNi2iPxSZ%2FDS%2B36N8%2FLGdK5oN1DEBZ%2BFrJbl7UfwTRlR9geUeQqdyt8dso&X-Amz-Signature=997e5ed593173889c1f34fcb7dbfde4027749427d7cc007d4cccf53a6ffc6ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXCCDBFO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFlObJosCighGU5%2FhxazkzviFTAo7gfEX59bWnBSJTFwAiEArGZF1Q1bwfO9PpsYx%2FFjqaP%2FDf7YizQlJhuXmTRBcuoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDmFSJWiIGd6ATWppircAzNA0dq0mERjYgEgM%2B7Fy%2Fe57S5pRhGb6jf4Ya0tN5A%2FdVm9y9UYYEbONJyivrtnbdvQ9tabq7z%2F8Is6egwsqtREDs8MiMgLU0rPEN0pe02sN%2FtnXMKrLoSesa%2Ffq95moscPA%2BFEl9PcC%2FsI7SrO61%2FblluRCrXUXVtPRENOkLC98%2FBL2FS49VJhp9uJF4CgMtT6DajMSu%2FqGgZLmEwKjfRyYA57Xbg9aWSSBUVB5SgLx%2BViixjpfNPyh%2FjgGnEtzECI60r23DcA9aOfIyUHLy8Tv3Tc63KSr2hLHepTZxygx4L9zOLIcG1KIvqC5sIHWUzjjD%2BitAs5VC%2BVndg3BT%2FtvM46WTDu%2BbGsjtgIwr2rKqhSJe5JTrNGix2an6NSsrUu7CB%2FOV5I6C0XzL6e2J65avoMB05I%2FVJc5mJzsmREx%2Fl6aowPzY4CGEgaWRuKu1zziZvvkS0TkjaSNxiubq%2F69%2FCQjTcQjFFjJTKhklGooals0FfWt8qixwacvxFfxDKITVnLyh8FjVX3i0GlCmJWAQlHvBtXLvOcLPZ0p7wPpz3111DpDppa0laN8blIjf7laxWB9uFcnzX5lb6bkKNjdrhicbMGzzDFOf%2FlnzuqDGac71GYyK6kWMwTMODP5MIGOqUBwnHfuF13z7GrAlQwJHoSaA4GETBjoIo0tiTK0I%2BNv8dWEOidd6%2FTgPUhMSnZbC%2BPSyBzrBKineYre2kmUkwPiWZy15%2F0IKU%2FY3B5gsmrQynfQgWJ%2BBiwIk%2BjTrtq5lO8zol%2FC61GEoodUhN8Zmng3GiDvR1jYfiPTyzNi2iPxSZ%2FDS%2B36N8%2FLGdK5oN1DEBZ%2BFrJbl7UfwTRlR9geUeQqdyt8dso&X-Amz-Signature=f262d217ae01191407aad0a08b9a9c250175eb9907b8aa3826f9d374b318e84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
