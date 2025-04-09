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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IAHJSP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDUzY4Gj7bm2vlD5xGsgDR88DEEDPXF5vlE1vwr6aBSLAIhAPaNQj17kiIlXC%2BPEdqLB%2FHXEU19IChtRnHLFU%2FEp3l3KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0WXmXw5hubVKbkRoq3AMR%2F1SeyzAJi0HLuyfTCI6GnylXQ%2F0g0sIZ363f73gHIF8SSxKnNsGqOz93Wbp1i8o7tymD6c4l3AxW2%2BypnFarChSIUBGYK8p%2BKBpfoe%2FGfG3Vn%2FoVkbMLGNw3jMCi%2FTL0WjyejEcoDrRoEgrlxLSMxhpGfGENQUQ2KdbdOW0hSCS2EkXT9NkExJWMF2zoGU9%2FVMtSzEk7iPyKA47qWVstOGR9TFdzCuL6maPy55%2F2oe9c0WvEVv9s3%2BMhi51RD5BGKf6eTxI3GThjl72%2BrFu1%2FjGVquOZ02Yll6%2FmVKaLdrXfjLCBUVs9g8ArbR1wyKBVSeq2xCkWm0jkkPmivRYUqDTxQQgmGAicWblxh%2BuzEhoqPpyK9f0zeE4n9RG1G5Hxm4NKXhxh%2BQYW0ECrMrX6Ub1PUu%2B39ARVn09SOufSocq81RV0EbRRhVXlMLkE51MC5eNWcj757iHSvNyhO6RzBHf7YSwbefCpQllZxH3jQThrNV1l%2B0V9GaIPiZuIxJJH9GB6yWI1YEttF1Xi0U3UcJk8MLCMAQPkv%2FGNOuzAyP5%2Fzy7NKSnZPcAkn%2Fjoli431musak00nL6ee9qda6D8ZR%2FeH1%2F4wtGvtfFNgQRtEUs%2Fdg6QCICIh2I7bjCkmti%2FBjqkAfVubNF7O0OF3adShy61BsOWu%2F8A6xa5f%2BTG%2FF4QfNbQAdq9F48GSz18RVDu75UTyBisFjtf0U8FKBwTk4aWzcA6FY2eVyLuHtC9kPqVwI8oII9ZWBBvvzGH2BEkdUwEhsA5dx1H3sGIhmEsM%2BK10zhavWXACM%2BqtLpSSnmJXGHI9pNOUdYhfEsCcolpVdHq3q%2BW81WhLxZc2i1y8ZA0GdiH3fm9&X-Amz-Signature=fc0647e7d43d40620e0bd38c3eeba36612de0ddf01cf2003d350b4299287c856&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IAHJSP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDUzY4Gj7bm2vlD5xGsgDR88DEEDPXF5vlE1vwr6aBSLAIhAPaNQj17kiIlXC%2BPEdqLB%2FHXEU19IChtRnHLFU%2FEp3l3KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0WXmXw5hubVKbkRoq3AMR%2F1SeyzAJi0HLuyfTCI6GnylXQ%2F0g0sIZ363f73gHIF8SSxKnNsGqOz93Wbp1i8o7tymD6c4l3AxW2%2BypnFarChSIUBGYK8p%2BKBpfoe%2FGfG3Vn%2FoVkbMLGNw3jMCi%2FTL0WjyejEcoDrRoEgrlxLSMxhpGfGENQUQ2KdbdOW0hSCS2EkXT9NkExJWMF2zoGU9%2FVMtSzEk7iPyKA47qWVstOGR9TFdzCuL6maPy55%2F2oe9c0WvEVv9s3%2BMhi51RD5BGKf6eTxI3GThjl72%2BrFu1%2FjGVquOZ02Yll6%2FmVKaLdrXfjLCBUVs9g8ArbR1wyKBVSeq2xCkWm0jkkPmivRYUqDTxQQgmGAicWblxh%2BuzEhoqPpyK9f0zeE4n9RG1G5Hxm4NKXhxh%2BQYW0ECrMrX6Ub1PUu%2B39ARVn09SOufSocq81RV0EbRRhVXlMLkE51MC5eNWcj757iHSvNyhO6RzBHf7YSwbefCpQllZxH3jQThrNV1l%2B0V9GaIPiZuIxJJH9GB6yWI1YEttF1Xi0U3UcJk8MLCMAQPkv%2FGNOuzAyP5%2Fzy7NKSnZPcAkn%2Fjoli431musak00nL6ee9qda6D8ZR%2FeH1%2F4wtGvtfFNgQRtEUs%2Fdg6QCICIh2I7bjCkmti%2FBjqkAfVubNF7O0OF3adShy61BsOWu%2F8A6xa5f%2BTG%2FF4QfNbQAdq9F48GSz18RVDu75UTyBisFjtf0U8FKBwTk4aWzcA6FY2eVyLuHtC9kPqVwI8oII9ZWBBvvzGH2BEkdUwEhsA5dx1H3sGIhmEsM%2BK10zhavWXACM%2BqtLpSSnmJXGHI9pNOUdYhfEsCcolpVdHq3q%2BW81WhLxZc2i1y8ZA0GdiH3fm9&X-Amz-Signature=19d4755aa3fb5d86eb52a296812d5b488be0ed504ea3af53071faf72d3308962&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
