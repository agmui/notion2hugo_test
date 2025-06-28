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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GBC7IR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0KqwXYecuLfsKAfEvuvUZHcV3bBhSJKvOheWq1WyibAiEAm9Axhr1EHd1D4OI908ngegP%2BWr7H65wXWxgJM8DXYbMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgYtraUrizPaNn0nircA6UfL4Tz62lIfU9%2FlZuPtfREoSGgQllSmx5Yavc8Mo%2B6ELdo17l71EOvQR08%2B6Zq4q4OOQz1r0d%2BKTa83qH81BYeFEdGORZbQVHvln6syz%2FI5L4i%2BoY43RaNV65llZq4OfyFhsPI2x5YZuStnDcZ3jVMMr%2Bf0jUvHROXaHvST5NspcdlkfUZUr6fLbtpdFu67LPLZT1lu31M8Ks%2BVGac6sil1I%2B62VItproQsu%2FhvXRde1ydROcK6ZLTPSF9QM4f8jtRgAB70i6O4f8%2F3%2F7cfYkNgoask0UxvqX8lZU1uZKKOjph9UB6W527%2BT1aj9ZiXsnr4qHVpyOI37VR5AvwAzoAKdH1RuiwOQLmus9PeJezVmEFOAufHVUjxvqot%2BO68GUMdCDRimqmVWFML13KpQbQRMJ2B7Kjwhadp%2BNeK6Riklx6xvgoReUilw6CuUfp3WR02xaF2gjtjafE86SooBmNk1nunBG9GTVLH4okQ5U8OnLQYYYNC6ozr0zv0PNfn2SxM9YMnuebF59q3dWku0bxv%2FSJ3ZYPzGD4t82UMzdZaSLHDPggwH98tPu4qBOxeapmr8QSZK6XohYoKwpDd767HE2dNz%2BUTKa8LqgNUWjoCEc2Xw7UA6FGK5VuMPf0gMMGOqUBcOC5yvXVaw3k7MJXtVIjrkad5%2FFLbDm9g%2FMdz6pgBd6Nz5W%2BmDup0zIdHfiOXvI0qfSWUGbvNiPAytQeQLVivIdAPOQZOQHlzH95wxTJ2y9e51Pk2KwvbhDpe%2BbZXpjBoxoR3lyQ2DhigOnk5rdXe1tJq%2Bs%2Br3a41YiLZkoFRSXkfcaU4baI0UW1ibBC2WPrs0qu0b%2BO%2FGR0nEqx3GnhrcL4jg1w&X-Amz-Signature=112c28a0f2bc4978def0a007d7a6243d5bf7699ec7b9ded4229974eab6a3e569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GBC7IR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0KqwXYecuLfsKAfEvuvUZHcV3bBhSJKvOheWq1WyibAiEAm9Axhr1EHd1D4OI908ngegP%2BWr7H65wXWxgJM8DXYbMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgYtraUrizPaNn0nircA6UfL4Tz62lIfU9%2FlZuPtfREoSGgQllSmx5Yavc8Mo%2B6ELdo17l71EOvQR08%2B6Zq4q4OOQz1r0d%2BKTa83qH81BYeFEdGORZbQVHvln6syz%2FI5L4i%2BoY43RaNV65llZq4OfyFhsPI2x5YZuStnDcZ3jVMMr%2Bf0jUvHROXaHvST5NspcdlkfUZUr6fLbtpdFu67LPLZT1lu31M8Ks%2BVGac6sil1I%2B62VItproQsu%2FhvXRde1ydROcK6ZLTPSF9QM4f8jtRgAB70i6O4f8%2F3%2F7cfYkNgoask0UxvqX8lZU1uZKKOjph9UB6W527%2BT1aj9ZiXsnr4qHVpyOI37VR5AvwAzoAKdH1RuiwOQLmus9PeJezVmEFOAufHVUjxvqot%2BO68GUMdCDRimqmVWFML13KpQbQRMJ2B7Kjwhadp%2BNeK6Riklx6xvgoReUilw6CuUfp3WR02xaF2gjtjafE86SooBmNk1nunBG9GTVLH4okQ5U8OnLQYYYNC6ozr0zv0PNfn2SxM9YMnuebF59q3dWku0bxv%2FSJ3ZYPzGD4t82UMzdZaSLHDPggwH98tPu4qBOxeapmr8QSZK6XohYoKwpDd767HE2dNz%2BUTKa8LqgNUWjoCEc2Xw7UA6FGK5VuMPf0gMMGOqUBcOC5yvXVaw3k7MJXtVIjrkad5%2FFLbDm9g%2FMdz6pgBd6Nz5W%2BmDup0zIdHfiOXvI0qfSWUGbvNiPAytQeQLVivIdAPOQZOQHlzH95wxTJ2y9e51Pk2KwvbhDpe%2BbZXpjBoxoR3lyQ2DhigOnk5rdXe1tJq%2Bs%2Br3a41YiLZkoFRSXkfcaU4baI0UW1ibBC2WPrs0qu0b%2BO%2FGR0nEqx3GnhrcL4jg1w&X-Amz-Signature=f1577fc3d5162f410a0905f7c2b166ca317abf133984a59b8fcde8a08a800272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
