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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNRQTCI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2F2UU%2FWeKJpQqgrVv29zb81CzrSvY5Q4uTEcpaLO22wIhALJAp01N5t2IsfwtHflND5saRDx7rhUL8g8R2fI3jrMNKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGq09eNCQrgmNHge0q3ANsU7CifAMqnmOoz%2FC46phk0uONja3LbqLYFEbwfs%2FyQpx%2FPAdHg%2BL%2BE7jxAr%2BLUKYiNxIyIgH%2B%2BABgfDE0y5%2BAfgr7YTBzvkxBaKg0Cz0blYUtqKh34GySPdcxB8ebuf8QK2dwGAHPN0QCQCa1wyjfI1KkbVF%2F34f%2FRfjPP%2BVviNCMO%2BOdYxAAHLDlRSgakTDadKR0iC5MDjua4xf3V%2B%2BQEf%2BRPbaGZeZ%2BKi%2FZFoQXOrH%2FPGgGg7aT3hGtNTMTtnoj3FswzJcTHtNGAPmEa7U0MPir8fK9QP0EAfNC5%2FZEHELR5rpVw2LtUSVS3CyDFm%2FRTvKL4BS11tVCKOMJHA%2Fsvk1IIPEjPjISdSBJdM7a4ij4qqjON4b%2FvTWpxOH6oR4QUxCfro8Ndt2mJg5UY3c6v%2FiWmvgQo7bV%2BMd5Pr%2Fcg%2F8yEdqYwAzACanuRfggX%2FWPJFTNyeTnBkPv1CEh7oHUyZlgUxsvJjlCmb2qlzVb83%2BhSt00WtlXhQnYlnGHUb0LfR1IpVi8thwpAiCQ%2B%2Fk3cbRAQ5dE7UcSce7FF8mRi4qSrsDTZQZ91C5B370XofYJYxSBRrlAGjKi%2Fx0iAF%2BoxCwau%2BjgfsNJqVkb9eDoWprDu7%2BvZgd7lP6IrjCH4pPDBjqkAaTJ41g1%2FT3%2BXo%2FMlDr1R4OIGF9JUTyOYtuO5qwlhNa7096ORjGdIqytb1uukROVTdM9%2BZ%2F0Zp%2FTGepH7wEtdVbBqdbmU3pLpJJcWQLu08i8cjZY%2BYs5nP%2FoEwC33DN3Shu9PmZNYz9NyonFgshBAfTKFBKhQiaFvNSzA8d1NICiU%2BdzFVCt9iqV0qYEU86ZrbJqd7kE1khqZ8EHsUtdL0DOwg4%2F&X-Amz-Signature=61aae1fe2c26ce50b8ec374326bee8980ec39d8f0df5ad9040c00e2632882ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YNRQTCI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2F2UU%2FWeKJpQqgrVv29zb81CzrSvY5Q4uTEcpaLO22wIhALJAp01N5t2IsfwtHflND5saRDx7rhUL8g8R2fI3jrMNKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGq09eNCQrgmNHge0q3ANsU7CifAMqnmOoz%2FC46phk0uONja3LbqLYFEbwfs%2FyQpx%2FPAdHg%2BL%2BE7jxAr%2BLUKYiNxIyIgH%2B%2BABgfDE0y5%2BAfgr7YTBzvkxBaKg0Cz0blYUtqKh34GySPdcxB8ebuf8QK2dwGAHPN0QCQCa1wyjfI1KkbVF%2F34f%2FRfjPP%2BVviNCMO%2BOdYxAAHLDlRSgakTDadKR0iC5MDjua4xf3V%2B%2BQEf%2BRPbaGZeZ%2BKi%2FZFoQXOrH%2FPGgGg7aT3hGtNTMTtnoj3FswzJcTHtNGAPmEa7U0MPir8fK9QP0EAfNC5%2FZEHELR5rpVw2LtUSVS3CyDFm%2FRTvKL4BS11tVCKOMJHA%2Fsvk1IIPEjPjISdSBJdM7a4ij4qqjON4b%2FvTWpxOH6oR4QUxCfro8Ndt2mJg5UY3c6v%2FiWmvgQo7bV%2BMd5Pr%2Fcg%2F8yEdqYwAzACanuRfggX%2FWPJFTNyeTnBkPv1CEh7oHUyZlgUxsvJjlCmb2qlzVb83%2BhSt00WtlXhQnYlnGHUb0LfR1IpVi8thwpAiCQ%2B%2Fk3cbRAQ5dE7UcSce7FF8mRi4qSrsDTZQZ91C5B370XofYJYxSBRrlAGjKi%2Fx0iAF%2BoxCwau%2BjgfsNJqVkb9eDoWprDu7%2BvZgd7lP6IrjCH4pPDBjqkAaTJ41g1%2FT3%2BXo%2FMlDr1R4OIGF9JUTyOYtuO5qwlhNa7096ORjGdIqytb1uukROVTdM9%2BZ%2F0Zp%2FTGepH7wEtdVbBqdbmU3pLpJJcWQLu08i8cjZY%2BYs5nP%2FoEwC33DN3Shu9PmZNYz9NyonFgshBAfTKFBKhQiaFvNSzA8d1NICiU%2BdzFVCt9iqV0qYEU86ZrbJqd7kE1khqZ8EHsUtdL0DOwg4%2F&X-Amz-Signature=02fed46a1a6d2622793821845767fd621e12baf75e1234a3ceb09c9206c6d853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
