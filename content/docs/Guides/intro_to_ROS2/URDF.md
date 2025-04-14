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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7YGSWMJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAsN44T4yXbX5SlR8O2eimUNuItb%2BM4VSanPH7PZg0UAiEAwtNGqVQIJ4mdmi1lab0kDyKgWt5bzTg9ni6Kwk0kBbIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOBarXQa%2BHEb%2FBnXWCrcA2yXBHsrMRioN7PzUael01zckgfaHoAQcPv1i%2B9afDn2SoXY5MBzn86wvkxIXbuXnUysdE3R7HQ0Ux1jsYoj%2FqnS408HO43t9Fhe%2BfGfdMsXl4VtUfXuuGTSQsaqKTFToyn3%2Fs62WLIcWrycaWTr%2BcdG9KxBvcruG0VLdNVjRYPs%2F1FchrkIz4SJ24P2VpXLJ9HbnduqM7xCI7IBnY6MdzCG9zeYVrv9GDu2mzrWRqCC8ni0tLrukDAtlHe9wyKdugeWiaK5WFbDrzhaK1S%2BZIzyVlxUQNrNRUPaf20CvCkOwo4GriB84Bs84kt6UcLryDrjkhXEc0umzQnmQaLRUxHo08bA9DSSQ5V%2BRdpOH2BgzSfwuJKQUEGGpwCE6cGeoKbo8pVtdfWomLeUwW1UinMqumjEHrvObN%2BVHLBR2Ci4CAWnjQV7YvzpsqLdsQxSiNKQsj5T%2BY9RQHvLSj9jsEg6Oen2eM7CKa2TLHrg74BH7ubi5L1hb30ILcNRzpHqwR1qwUfUE0rPNqgWoyYP%2FQ46MoqDysyR5FyR4CPN52O8Ak%2F3EDRkrrTWdbV6eKRGZi1o2WqvDRbeKaIUnhO4c8qRx3L82L4p%2FMDKFBXICRv%2FdhnaTBNZZcYLR18VMP6n9L8GOqUB5Vc5llzKa2R1CWz6eI9wdRCCryewvc0cpjJ58du1zszTH73OGohV1cRIGUwZQI6kh9nLxhaxSH6P8hvLPl70kXGqh9%2FNdHnUtbeHS3yA5V6SbnaX4sD67y%2BWIBssOoYfyuLmJ9g0JTyX7smSiKf%2B1qbsFZfhvz0aMaqk%2FLe5yDbj0wRhXENLXutW%2F4dJMhNQOhUPcVOrjH1%2BpHXikaufy1gxg%2BAY&X-Amz-Signature=106afdb8a76d1bce3e7b6852c0e8e92b60d14ce614c25ef45c07dee82bad69dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7YGSWMJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAsN44T4yXbX5SlR8O2eimUNuItb%2BM4VSanPH7PZg0UAiEAwtNGqVQIJ4mdmi1lab0kDyKgWt5bzTg9ni6Kwk0kBbIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOBarXQa%2BHEb%2FBnXWCrcA2yXBHsrMRioN7PzUael01zckgfaHoAQcPv1i%2B9afDn2SoXY5MBzn86wvkxIXbuXnUysdE3R7HQ0Ux1jsYoj%2FqnS408HO43t9Fhe%2BfGfdMsXl4VtUfXuuGTSQsaqKTFToyn3%2Fs62WLIcWrycaWTr%2BcdG9KxBvcruG0VLdNVjRYPs%2F1FchrkIz4SJ24P2VpXLJ9HbnduqM7xCI7IBnY6MdzCG9zeYVrv9GDu2mzrWRqCC8ni0tLrukDAtlHe9wyKdugeWiaK5WFbDrzhaK1S%2BZIzyVlxUQNrNRUPaf20CvCkOwo4GriB84Bs84kt6UcLryDrjkhXEc0umzQnmQaLRUxHo08bA9DSSQ5V%2BRdpOH2BgzSfwuJKQUEGGpwCE6cGeoKbo8pVtdfWomLeUwW1UinMqumjEHrvObN%2BVHLBR2Ci4CAWnjQV7YvzpsqLdsQxSiNKQsj5T%2BY9RQHvLSj9jsEg6Oen2eM7CKa2TLHrg74BH7ubi5L1hb30ILcNRzpHqwR1qwUfUE0rPNqgWoyYP%2FQ46MoqDysyR5FyR4CPN52O8Ak%2F3EDRkrrTWdbV6eKRGZi1o2WqvDRbeKaIUnhO4c8qRx3L82L4p%2FMDKFBXICRv%2FdhnaTBNZZcYLR18VMP6n9L8GOqUB5Vc5llzKa2R1CWz6eI9wdRCCryewvc0cpjJ58du1zszTH73OGohV1cRIGUwZQI6kh9nLxhaxSH6P8hvLPl70kXGqh9%2FNdHnUtbeHS3yA5V6SbnaX4sD67y%2BWIBssOoYfyuLmJ9g0JTyX7smSiKf%2B1qbsFZfhvz0aMaqk%2FLe5yDbj0wRhXENLXutW%2F4dJMhNQOhUPcVOrjH1%2BpHXikaufy1gxg%2BAY&X-Amz-Signature=ffcb3cfdb17d92df5f0a2dd46ae9c282cff8e1ae0e2617feaf3525b518c66fba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
