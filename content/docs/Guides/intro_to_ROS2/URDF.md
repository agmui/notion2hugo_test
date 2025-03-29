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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTU555H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIG%2FUN4X186EL0zelWyWNE42%2BSgvs9f54JgAp5n0RPX1uAiEAhx8eD6EpHD7O4tExUR9JiF%2BNd3kDFiCbJ3ZelCWRpVQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCphWBuwQFuEkdP1nCrcA7w9uRRG5DGrDKWJ720XpxOLouwRgSP1kytNhEhkPF9gxdRdOAhWMR4x8ADOkOKvi42iDCTM1xAG6t8Etd9A1ObPbStLQe8y7Q9Uf5n2Nc4wb92tGfnqwC7YMrUNd8SHFPFoCXJVhzAViJQ97iYWOOzda%2FHxrxcGhse2OKzKeCPJ%2FRXbmxDbvRTUn2QZ9Zdr0T1hcjuTW59y20OMYjWHNeSCFzjhs0QkSXjHQ0iqDE2a%2BWzJ%2B2Xz%2F2RMke6C2mUyfkpbqmRRALTaoY6Vexl7V0YE%2BV4qqsu4soe6VzHPOcthcXW7Z7m5BfyC2roTccrSBSR8J5d10%2Bl1FRKBnAGMndmXl9P2%2FCtp842rT%2FCRMr0RWDbQiY19Evu46COckjxHv6r14hM329b0URv0tdWL5ibQDQe4dhzdcjBui4NLxxp1YA%2FcpRnigcKCKHkZCsHB%2BdcPJt%2FmAyUL4P0th3Yc8ieG37l0xKje77gpVd0y0IuHXV3yQePM9TmNV%2FU2D15StxFTaDo4JvJeLJlPDGUgOUo5zbB%2Bn%2B%2FjWgd4VhIsKLqw2IWgPLTkBFGQZYuZGmEReQRyE1P%2BCOg3g0X9ToM43V6p2HwECQ%2Bwyq6Ho7ccGIqquGdIEhgDtLaiStRgMNKQnr8GOqUBdwk78ZoDDEEVT%2BuP7DiwzKhHLWsgpxJKwMAw8Rgk1I4rZqZZVZmR2vEXCwc4QRsby4Zmjln4dziMiPUKNWTbXakp69vvzvENF1I3iPeURhzhRy6ehBw2nL2VDM4SYsJvqmIMwE%2FVc4OBioNH6%2BQ8q%2F0GpnyZVWngLCcwfAIt0OQSqP4dshUxkjM84jZv0wDuRjJBFfJ5aCaJ4lYZOChiL%2F%2B49Q%2BC&X-Amz-Signature=f3562ca795c0a0e44c6da468eaf0c352a00615e4fb430194a0d69fd84c36a07c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTU555H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIG%2FUN4X186EL0zelWyWNE42%2BSgvs9f54JgAp5n0RPX1uAiEAhx8eD6EpHD7O4tExUR9JiF%2BNd3kDFiCbJ3ZelCWRpVQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCphWBuwQFuEkdP1nCrcA7w9uRRG5DGrDKWJ720XpxOLouwRgSP1kytNhEhkPF9gxdRdOAhWMR4x8ADOkOKvi42iDCTM1xAG6t8Etd9A1ObPbStLQe8y7Q9Uf5n2Nc4wb92tGfnqwC7YMrUNd8SHFPFoCXJVhzAViJQ97iYWOOzda%2FHxrxcGhse2OKzKeCPJ%2FRXbmxDbvRTUn2QZ9Zdr0T1hcjuTW59y20OMYjWHNeSCFzjhs0QkSXjHQ0iqDE2a%2BWzJ%2B2Xz%2F2RMke6C2mUyfkpbqmRRALTaoY6Vexl7V0YE%2BV4qqsu4soe6VzHPOcthcXW7Z7m5BfyC2roTccrSBSR8J5d10%2Bl1FRKBnAGMndmXl9P2%2FCtp842rT%2FCRMr0RWDbQiY19Evu46COckjxHv6r14hM329b0URv0tdWL5ibQDQe4dhzdcjBui4NLxxp1YA%2FcpRnigcKCKHkZCsHB%2BdcPJt%2FmAyUL4P0th3Yc8ieG37l0xKje77gpVd0y0IuHXV3yQePM9TmNV%2FU2D15StxFTaDo4JvJeLJlPDGUgOUo5zbB%2Bn%2B%2FjWgd4VhIsKLqw2IWgPLTkBFGQZYuZGmEReQRyE1P%2BCOg3g0X9ToM43V6p2HwECQ%2Bwyq6Ho7ccGIqquGdIEhgDtLaiStRgMNKQnr8GOqUBdwk78ZoDDEEVT%2BuP7DiwzKhHLWsgpxJKwMAw8Rgk1I4rZqZZVZmR2vEXCwc4QRsby4Zmjln4dziMiPUKNWTbXakp69vvzvENF1I3iPeURhzhRy6ehBw2nL2VDM4SYsJvqmIMwE%2FVc4OBioNH6%2BQ8q%2F0GpnyZVWngLCcwfAIt0OQSqP4dshUxkjM84jZv0wDuRjJBFfJ5aCaJ4lYZOChiL%2F%2B49Q%2BC&X-Amz-Signature=414b12b80e542dcb4d6e71f3efe1ab3dd7e225acc6292fc116ff6cf27e0c61ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
