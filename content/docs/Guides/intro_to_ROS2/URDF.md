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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSKJMS7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGbAEBNhAsXafBcBh7XeAX6KbpJJDiWDDNG9wnnKleTAAiA4TrZ3IvQqlgEeUwr%2FhDZCfGjevKOPoRA%2BdjNPf1K7rSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMBIXe6VSSymv6m6scKtwDIU0V0Pn5y4mxrgeIBViimIKbO4LzZhzCFDcySe7wEqxoKT%2BV9zoTfkJKzdb96RtWj%2Bbtu78gCuv0B6mVEzvrt8kh4%2FLBQV%2BTlnwXe6pmg5Mp1Mw0ZcI%2FQ%2FwqE2bNrgVnCL%2FNxHPTvRJGaT6G%2FBHaRTF6naM9QhlOPJcouMGr%2FSidUHL7LjE4edJqEkA%2FpZGvj3WowRjbIBQl5nSVbstxmFNhnFXCnGupV%2F5LzW3%2BB1eF9YDswhUPnEoK4Bw%2F6jyBVnrumZOX97FTHh4O3YS0mEFQjtmyJAz%2FpJZPW%2BDhgwFYAQei6RJlgSJEExFCjovpE8FTb6z4pYKxwWC%2BAFKBy%2FwSMnuhxyKboAnqnsULVQvYg%2Ftw9mJ8UK%2B0AZ2z7tLiXYlqB4CLvIMvbBGLbsZn2jE%2FHSQUK5XTcAReTA9DLkrpqqlltRwLmMcX9HYrGeNPDFCJRwUba%2BpCZl6MMveTBayDnDTHlCmqP7%2FQjDFG1szbvyJKXe%2Bw1pNiNRT2GPdUvf337V1zadwd4fdbGdSx%2BJTYDvLMgCcgI3brJ1vAVXOgD2znF4JlnuM8G9NuyFV8daxWh1Wi%2FhTeJxFck190wmo15LO3f29KTJWn4dUMfzjaoPJgkVeqqQR8%2FoEwvtKxwgY6pgEiBqIqhXcMPvM5i8gufPjXPHYbRXy2xzJ5CstRG6mAS3l4bL9mZxWAP8%2Bm43B0TlI%2FvQGnldzrHtPEX46dcBpjr49NSUeFcCuHSvC6WpQE2WqNyxdoVkVcEFrvkBTLTGe2o9llx8Iy2S2RDOMcigavGQqic1gIi3dfwPwjWRU5YcF5anTf%2Fsx5rdseylXXynkNW5EhOIIglEcQzPMbeN%2FiBSZsPmcF&X-Amz-Signature=2f2c38b7e9ea2dc7d4802826c109eda5ab69035eb4bea16864024264a0860019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSKJMS7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGbAEBNhAsXafBcBh7XeAX6KbpJJDiWDDNG9wnnKleTAAiA4TrZ3IvQqlgEeUwr%2FhDZCfGjevKOPoRA%2BdjNPf1K7rSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMBIXe6VSSymv6m6scKtwDIU0V0Pn5y4mxrgeIBViimIKbO4LzZhzCFDcySe7wEqxoKT%2BV9zoTfkJKzdb96RtWj%2Bbtu78gCuv0B6mVEzvrt8kh4%2FLBQV%2BTlnwXe6pmg5Mp1Mw0ZcI%2FQ%2FwqE2bNrgVnCL%2FNxHPTvRJGaT6G%2FBHaRTF6naM9QhlOPJcouMGr%2FSidUHL7LjE4edJqEkA%2FpZGvj3WowRjbIBQl5nSVbstxmFNhnFXCnGupV%2F5LzW3%2BB1eF9YDswhUPnEoK4Bw%2F6jyBVnrumZOX97FTHh4O3YS0mEFQjtmyJAz%2FpJZPW%2BDhgwFYAQei6RJlgSJEExFCjovpE8FTb6z4pYKxwWC%2BAFKBy%2FwSMnuhxyKboAnqnsULVQvYg%2Ftw9mJ8UK%2B0AZ2z7tLiXYlqB4CLvIMvbBGLbsZn2jE%2FHSQUK5XTcAReTA9DLkrpqqlltRwLmMcX9HYrGeNPDFCJRwUba%2BpCZl6MMveTBayDnDTHlCmqP7%2FQjDFG1szbvyJKXe%2Bw1pNiNRT2GPdUvf337V1zadwd4fdbGdSx%2BJTYDvLMgCcgI3brJ1vAVXOgD2znF4JlnuM8G9NuyFV8daxWh1Wi%2FhTeJxFck190wmo15LO3f29KTJWn4dUMfzjaoPJgkVeqqQR8%2FoEwvtKxwgY6pgEiBqIqhXcMPvM5i8gufPjXPHYbRXy2xzJ5CstRG6mAS3l4bL9mZxWAP8%2Bm43B0TlI%2FvQGnldzrHtPEX46dcBpjr49NSUeFcCuHSvC6WpQE2WqNyxdoVkVcEFrvkBTLTGe2o9llx8Iy2S2RDOMcigavGQqic1gIi3dfwPwjWRU5YcF5anTf%2Fsx5rdseylXXynkNW5EhOIIglEcQzPMbeN%2FiBSZsPmcF&X-Amz-Signature=31a057a8600b065b4b539e38f849a675b71b1b97ad1e13dca3281750bffc44ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
