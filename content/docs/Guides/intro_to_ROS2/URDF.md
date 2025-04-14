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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIWC3J4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxSDCZkdFABByWy7DW086bWqPgn9xJ43ly7Mb5w90lBAIhAOAGNdQ3XipRTrnwyTQCY%2BUb8XlDf6g1PUxm32pPcPoCKv8DCBYQABoMNjM3NDIzMTgzODA1IgxVXnhuGVCCNf%2Bk%2FOcq3APim5etarv09JQgg3SHUJkKKoLVXGP0aQJ9ksirCrwyjUxibWt4AX%2Bxc3Et16lByAHN5B90j%2BoLEenW2vlXvMoJBSLugggmWJqsw4%2F9MeNV%2F6pnEYgc%2Fv1X68w1U8PmUXS5eMNnN873iJ0nftFxdVPvOncU%2BIvOVwXzLkhirJVIHUGa02bU7cFdFZRdLM96el0ZtSJEarYUiqNaij8lokQ5uzhbgHXDImSGuDdgNIPM6eChHndhNuGErA9s0Jg5nOzMw%2Fz2WB5fxyDVAVb4YuCOL11PCZX8F%2FVu195ftZtx7txIkmaviXzN9L3EaBxNHfZ77i05FKtt5oOVjFzSttR1%2Fa8TNuSKQG%2FopvrKJ%2FVjlvRxSEtX%2B9KhNyfLF2h%2F7XVks7UaPHmDYptIcG3tQ0tnFhFRD1J3HWHKPQBf5vshqc2%2FnwAAnH8106qO8Gx6ih3WOs8qieYnPUGLpF%2F33LY3Fl6P8VsNhMBa2BBUhUBecpjlRdJMealQf0XDAO2UL2ANn7LGRinpEwFj6Sy9bm80rCrnkZ34C%2BrJujNCoe%2Br6r3Rpy0BzgkeCgwycmzIk5xt6j%2Bg7154pQi8NpgeZSU40GnsGSRA6l1Bn1Z%2FuMOA1%2BIq5bpaLMpu3frkkzCgjvS%2FBjqkAQAzQAPxAMfemnslQuC7EnXBUdsxozUE19yR5QR2GsV%2BbxeGDvM0MWJy6SlmeOsuO2jj8LwnpcWQiEmVyTaQKC%2B2L7s%2FWrD1sMAT5BajVT9%2BMqRB8UJbYBdaHUGOLoe5tub0aZKHWx2bqcNrJ553ylArAyJc7IZppYghph%2FCyKEUXEU6arxvJa2e3Lj90mYT7T%2FB9k93NZojqFaIgE2C9UfbZkzz&X-Amz-Signature=badb0173df49f1138d68a31ea6a3834c40bdf9237fc3da81694d016c5375469c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIWC3J4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxSDCZkdFABByWy7DW086bWqPgn9xJ43ly7Mb5w90lBAIhAOAGNdQ3XipRTrnwyTQCY%2BUb8XlDf6g1PUxm32pPcPoCKv8DCBYQABoMNjM3NDIzMTgzODA1IgxVXnhuGVCCNf%2Bk%2FOcq3APim5etarv09JQgg3SHUJkKKoLVXGP0aQJ9ksirCrwyjUxibWt4AX%2Bxc3Et16lByAHN5B90j%2BoLEenW2vlXvMoJBSLugggmWJqsw4%2F9MeNV%2F6pnEYgc%2Fv1X68w1U8PmUXS5eMNnN873iJ0nftFxdVPvOncU%2BIvOVwXzLkhirJVIHUGa02bU7cFdFZRdLM96el0ZtSJEarYUiqNaij8lokQ5uzhbgHXDImSGuDdgNIPM6eChHndhNuGErA9s0Jg5nOzMw%2Fz2WB5fxyDVAVb4YuCOL11PCZX8F%2FVu195ftZtx7txIkmaviXzN9L3EaBxNHfZ77i05FKtt5oOVjFzSttR1%2Fa8TNuSKQG%2FopvrKJ%2FVjlvRxSEtX%2B9KhNyfLF2h%2F7XVks7UaPHmDYptIcG3tQ0tnFhFRD1J3HWHKPQBf5vshqc2%2FnwAAnH8106qO8Gx6ih3WOs8qieYnPUGLpF%2F33LY3Fl6P8VsNhMBa2BBUhUBecpjlRdJMealQf0XDAO2UL2ANn7LGRinpEwFj6Sy9bm80rCrnkZ34C%2BrJujNCoe%2Br6r3Rpy0BzgkeCgwycmzIk5xt6j%2Bg7154pQi8NpgeZSU40GnsGSRA6l1Bn1Z%2FuMOA1%2BIq5bpaLMpu3frkkzCgjvS%2FBjqkAQAzQAPxAMfemnslQuC7EnXBUdsxozUE19yR5QR2GsV%2BbxeGDvM0MWJy6SlmeOsuO2jj8LwnpcWQiEmVyTaQKC%2B2L7s%2FWrD1sMAT5BajVT9%2BMqRB8UJbYBdaHUGOLoe5tub0aZKHWx2bqcNrJ553ylArAyJc7IZppYghph%2FCyKEUXEU6arxvJa2e3Lj90mYT7T%2FB9k93NZojqFaIgE2C9UfbZkzz&X-Amz-Signature=f5eb748900bcc980d2fca7d40fab1a1abf90cb8674d9e3d8a8db0572e99c14df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
