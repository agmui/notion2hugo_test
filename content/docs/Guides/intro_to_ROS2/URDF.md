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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YEFR2YA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Ys5Ce2NMn56wMbsim0F909DWvPz8gTdunsmGMmeAnwIgC20Kd9d%2FzUvssMR8uU0gL4%2BtOTrAlfDaR16AuHHAVmoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMyXzHWA3o0B8ZGAfCrcA1EWnR4ul1g%2Bt1WE8LSxDN%2B5cBRnMtBH27xikyAuX7jJP8ncN7MwLwW2JQaPdwryOEpBa7MM4JLcFZD2M%2BdNJehpL0WMYRgALZXmlt4Dcoem2OJ3K8iiQvXnaZjeLsi0jPaJXXAJSpupZ3JaoUIvx7JaqERbTGjDEFYx%2FuO5%2B2SEoyE9zaIyjltCdRGvkuaYbeB6VytlujDTxIUe11S5tjy4ouEB0yEsRvvbFiIlwb%2BFxqK6aeyIZtDHc6AknA3Eyg%2FQdBVMuEbpTGQyMX5Z5QTpoHRF8iYpbNtIChgAqjVRiQXwdU1E5QB1rtZ5Z%2BCpnzSnsOFhSKcu2iZBIxlD6v0Oxo7Ypnkp0r1izlqnDdGJyj51rZPkhI7et4F1yerLa6aOkFw5yYSXlZQ6UGEsczufpAitJ1HBPInwVIL1rGe0vo%2BMs16sz1E9a6H4iKK3RQKSPr1mrexHrnuzETvAJjOT9QL2zaTkQxeE%2BauxR5cxqjQiDDXiJehiGCt10kkjvl6LMMqS%2BaN9anhN498XWDOycpG5RBhrJ2iDS3jrLjQNV5Qf0%2FY3zw5SErerEl6srYUCEUlEZ%2B4k9V4mJE93UcHrgTptOv23AgHvpzaDZR6%2FtlZ516pvq%2B4lc7IZMPrI48AGOqUBzXUd2AmA7fcbiF%2BIRIZ%2B0KnAdB4XY6x%2Bz0GmJGvE%2FA7mKP9uwW8zgMnJk0H6XTUtnyDwBUsbYpsWdIJX1dSdjwlVQUIPeNRiI5DOt8djwYVol6soN4rNIpgh8FlkRmO03jGS4X4OGC8v9UTfNC6NPWTjvPb%2FxeziE7W4%2BI7BZYXVxXrnrr%2Bqquw3XiKPISBav1BVHOUJ%2BnuaTJyvjwgRJujnOv5A&X-Amz-Signature=94768b7753cdeb8908d45305896bbcead8c4045d5dd5d21335b0f7e1252baec8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YEFR2YA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Ys5Ce2NMn56wMbsim0F909DWvPz8gTdunsmGMmeAnwIgC20Kd9d%2FzUvssMR8uU0gL4%2BtOTrAlfDaR16AuHHAVmoq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMyXzHWA3o0B8ZGAfCrcA1EWnR4ul1g%2Bt1WE8LSxDN%2B5cBRnMtBH27xikyAuX7jJP8ncN7MwLwW2JQaPdwryOEpBa7MM4JLcFZD2M%2BdNJehpL0WMYRgALZXmlt4Dcoem2OJ3K8iiQvXnaZjeLsi0jPaJXXAJSpupZ3JaoUIvx7JaqERbTGjDEFYx%2FuO5%2B2SEoyE9zaIyjltCdRGvkuaYbeB6VytlujDTxIUe11S5tjy4ouEB0yEsRvvbFiIlwb%2BFxqK6aeyIZtDHc6AknA3Eyg%2FQdBVMuEbpTGQyMX5Z5QTpoHRF8iYpbNtIChgAqjVRiQXwdU1E5QB1rtZ5Z%2BCpnzSnsOFhSKcu2iZBIxlD6v0Oxo7Ypnkp0r1izlqnDdGJyj51rZPkhI7et4F1yerLa6aOkFw5yYSXlZQ6UGEsczufpAitJ1HBPInwVIL1rGe0vo%2BMs16sz1E9a6H4iKK3RQKSPr1mrexHrnuzETvAJjOT9QL2zaTkQxeE%2BauxR5cxqjQiDDXiJehiGCt10kkjvl6LMMqS%2BaN9anhN498XWDOycpG5RBhrJ2iDS3jrLjQNV5Qf0%2FY3zw5SErerEl6srYUCEUlEZ%2B4k9V4mJE93UcHrgTptOv23AgHvpzaDZR6%2FtlZ516pvq%2B4lc7IZMPrI48AGOqUBzXUd2AmA7fcbiF%2BIRIZ%2B0KnAdB4XY6x%2Bz0GmJGvE%2FA7mKP9uwW8zgMnJk0H6XTUtnyDwBUsbYpsWdIJX1dSdjwlVQUIPeNRiI5DOt8djwYVol6soN4rNIpgh8FlkRmO03jGS4X4OGC8v9UTfNC6NPWTjvPb%2FxeziE7W4%2BI7BZYXVxXrnrr%2Bqquw3XiKPISBav1BVHOUJ%2BnuaTJyvjwgRJujnOv5A&X-Amz-Signature=e1a33e44eb80ab9533b59a1592a8ac53defa0d56b82d76daf023b43c4b07ce99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
