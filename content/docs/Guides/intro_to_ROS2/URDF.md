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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPKY43G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDR6CpN81g%2FdlbnPis4dBcwLsa%2Fm%2BfOjHAfGTCsSswEWwIhAMuotSGDkhr6tiYJ0ESv1vf0ncplqJ3OsXy73MnX1Ne6KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhv9vQwQ5xXtrpxXQq3ANLHUWCleeRj%2BxlFyQjBbGoUcnEb31F0u7P4Y%2Bb2VLj22SKOVtKQyiDY3TRPkz4J2Hf9rxFjK56AkyKrONUWwWb9YfgOqtlQw%2Fnpce69%2F%2FiRAiH3%2BEo9HDsFLIk0lw6rP8re1jSDBP60PAKbldjkodL6T4mUtx10AeonWKixZlfkqnTcL9aHOeGTpdfomJKikxd8CKJgrnchHsVTWkDcAqcr2Dv2JZ%2Bom0PmLqzygHo%2FSUFuo%2Bxv%2FaPG3byrWnSszSrhyCToYDTRPQqpo5nVg%2FyF5ZV8PPyYx7vF%2BMREy6OlxRnIaj13wbLh009lzI8WFh2KlHreC%2Bd71eudYbJHcf6KZGpGjCNdUUv6PF1xsZAKOFG0QdRpn33EnNMHBpcaO1SbyfEflFX6XdLsTxwLys1wmDTMYRLQwDKCDESOrq%2FV%2BkEG7MrrlKQJV%2BuFzpP0pHTLmkKd%2BJw3R2B0CwCBl1DrfsQ8zItvv%2FcZlY%2FJXymi3ceDJ05n%2F7%2FCGOFaaa2eW9AoK%2Fcl2EPV5Y%2Bar%2BUKsxeAPgSJKvo13fghL2CFdLZov2cES2tAzrEaxkxhlxDx8M7iYo97%2Bo4BrkTnumca8WRl0Vt0iiXJP%2FqpVOZwWMbdeaSNQiC4%2B5eb349LTCa%2B7i%2BBjqkAcHxLzsENKzo7aeO0yqVsYB8HVwRe7CCY0qWlpTl94o%2Bysc9%2BhPJJfFsJQR%2FRWe0bhUacpRIK8MOShQQbh6d3jzAgtQr08pYGRzPCJ%2BoHuxtFBaPrySGLNQ3NdYnQGHQ3RdxYTohBKyeDPW2mBJgRBmlWWyubO9r%2BJtN0GHwkBFNTeblg5D1HzwStxVbzCa1fpKOZ9RecDa%2B%2FLytP6HZzPySs9mt&X-Amz-Signature=4a9a621f536a9589f22297b9e68263021381313be9c88e0416a5c9a56d40d4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPKY43G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDR6CpN81g%2FdlbnPis4dBcwLsa%2Fm%2BfOjHAfGTCsSswEWwIhAMuotSGDkhr6tiYJ0ESv1vf0ncplqJ3OsXy73MnX1Ne6KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhv9vQwQ5xXtrpxXQq3ANLHUWCleeRj%2BxlFyQjBbGoUcnEb31F0u7P4Y%2Bb2VLj22SKOVtKQyiDY3TRPkz4J2Hf9rxFjK56AkyKrONUWwWb9YfgOqtlQw%2Fnpce69%2F%2FiRAiH3%2BEo9HDsFLIk0lw6rP8re1jSDBP60PAKbldjkodL6T4mUtx10AeonWKixZlfkqnTcL9aHOeGTpdfomJKikxd8CKJgrnchHsVTWkDcAqcr2Dv2JZ%2Bom0PmLqzygHo%2FSUFuo%2Bxv%2FaPG3byrWnSszSrhyCToYDTRPQqpo5nVg%2FyF5ZV8PPyYx7vF%2BMREy6OlxRnIaj13wbLh009lzI8WFh2KlHreC%2Bd71eudYbJHcf6KZGpGjCNdUUv6PF1xsZAKOFG0QdRpn33EnNMHBpcaO1SbyfEflFX6XdLsTxwLys1wmDTMYRLQwDKCDESOrq%2FV%2BkEG7MrrlKQJV%2BuFzpP0pHTLmkKd%2BJw3R2B0CwCBl1DrfsQ8zItvv%2FcZlY%2FJXymi3ceDJ05n%2F7%2FCGOFaaa2eW9AoK%2Fcl2EPV5Y%2Bar%2BUKsxeAPgSJKvo13fghL2CFdLZov2cES2tAzrEaxkxhlxDx8M7iYo97%2Bo4BrkTnumca8WRl0Vt0iiXJP%2FqpVOZwWMbdeaSNQiC4%2B5eb349LTCa%2B7i%2BBjqkAcHxLzsENKzo7aeO0yqVsYB8HVwRe7CCY0qWlpTl94o%2Bysc9%2BhPJJfFsJQR%2FRWe0bhUacpRIK8MOShQQbh6d3jzAgtQr08pYGRzPCJ%2BoHuxtFBaPrySGLNQ3NdYnQGHQ3RdxYTohBKyeDPW2mBJgRBmlWWyubO9r%2BJtN0GHwkBFNTeblg5D1HzwStxVbzCa1fpKOZ9RecDa%2B%2FLytP6HZzPySs9mt&X-Amz-Signature=9feb58f58a71e04e9734ede4eb0a23a6a22c20f3d1fed639e9595bff3db431c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
