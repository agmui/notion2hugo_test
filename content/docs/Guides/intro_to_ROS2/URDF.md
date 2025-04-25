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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKBVR3Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOfoMjJDKRFou9RSeJXKZbyth2o9zGIdccRo%2BFnEEOJQIhAIRhs1EMk0W%2B8gHd9qAmLT0EXF0lii9SepIhP%2FB1%2BVZQKv8DCCcQABoMNjM3NDIzMTgzODA1Igw6n2V%2Bx9uuyoGSRKQq3APjhgUlwIOOyUdfWBQC3vnPkd50glsps18jZyOKIlOXtc3fFLyEeVlJO511852a5MD4duNb1WrXyF8HyWSbc5YGQymTdcDJIB0LJ7K1OWtUjXjJYFC0sYkxabkuE7hORLFyjo%2Faqz0oMZOFiEJuorqKRgrek18Om%2F4Ut%2FyVznocNHlQD8EBeVVd5N6j%2F%2Fvzkfn%2BsgS3dVhwSUZ892niDnhvLlghMPgOgSaEHr4ywfbDFxSooHFEyWMvbFYs9dBUWgUD6Tv19z4Ew99h43apjtE6%2BUBlIoBX1aoeWeWUrWo4ElLh0S1eaaHigBTgQptFWcolQ0VAsdcyi5xUZhBwjp%2B1B5tA9upZjQeMJ%2Ba4F%2FDoJnS%2FDgfn05Asc29SUzNOwdrABWwOFH0HD2c7ZqqOW3jREj3Ot3Rvg5G0qQsEc4YnNOt2BLBSBsmcXe2TCkU6ne8oeNuiKnF7TI3ubk9puI2sS96tS%2B1B1kv2H0Bzpz%2FvrQfa8dhPmrDanUGEhrtE5jG198Ij3hvhWIftPl2d8MgHm%2Blt7%2FY3l5JRnOkgw%2B%2FRCFeFz5MOhJLsE5rEySObrzfx9llgkPLvDKYX89I2qn7Qu39vC%2Bb1znj3Go9hfN7A9NsY1%2B3Ek%2BCbXaE0nDD2yazABjqkAdtsqT0MHiKkJW8qmJPVlLjWvPGBEnhFd1OZg02AqDSD1vr3ZU%2FtOWDGKZk%2FKtBMb%2BJdHT1f%2BY8Oo%2BuWOTSvPE8fFac7yiUwikdUvAtG5H0Bnj%2BEqhTKTuImGjd4MK%2BSqc8BvtqstkdxTyhQKSN13GWJ2%2BLMDi2W4dLOlLX9l1qYbxwwv%2FrobMVrwvQQhgkyoYYa6aLleNCRbpnm1LUiuUddkTbq&X-Amz-Signature=4b5e5740c958e6b05e4e9ed8782c2df7ba3d855972f337f30018a5442bf22999&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKBVR3Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOfoMjJDKRFou9RSeJXKZbyth2o9zGIdccRo%2BFnEEOJQIhAIRhs1EMk0W%2B8gHd9qAmLT0EXF0lii9SepIhP%2FB1%2BVZQKv8DCCcQABoMNjM3NDIzMTgzODA1Igw6n2V%2Bx9uuyoGSRKQq3APjhgUlwIOOyUdfWBQC3vnPkd50glsps18jZyOKIlOXtc3fFLyEeVlJO511852a5MD4duNb1WrXyF8HyWSbc5YGQymTdcDJIB0LJ7K1OWtUjXjJYFC0sYkxabkuE7hORLFyjo%2Faqz0oMZOFiEJuorqKRgrek18Om%2F4Ut%2FyVznocNHlQD8EBeVVd5N6j%2F%2Fvzkfn%2BsgS3dVhwSUZ892niDnhvLlghMPgOgSaEHr4ywfbDFxSooHFEyWMvbFYs9dBUWgUD6Tv19z4Ew99h43apjtE6%2BUBlIoBX1aoeWeWUrWo4ElLh0S1eaaHigBTgQptFWcolQ0VAsdcyi5xUZhBwjp%2B1B5tA9upZjQeMJ%2Ba4F%2FDoJnS%2FDgfn05Asc29SUzNOwdrABWwOFH0HD2c7ZqqOW3jREj3Ot3Rvg5G0qQsEc4YnNOt2BLBSBsmcXe2TCkU6ne8oeNuiKnF7TI3ubk9puI2sS96tS%2B1B1kv2H0Bzpz%2FvrQfa8dhPmrDanUGEhrtE5jG198Ij3hvhWIftPl2d8MgHm%2Blt7%2FY3l5JRnOkgw%2B%2FRCFeFz5MOhJLsE5rEySObrzfx9llgkPLvDKYX89I2qn7Qu39vC%2Bb1znj3Go9hfN7A9NsY1%2B3Ek%2BCbXaE0nDD2yazABjqkAdtsqT0MHiKkJW8qmJPVlLjWvPGBEnhFd1OZg02AqDSD1vr3ZU%2FtOWDGKZk%2FKtBMb%2BJdHT1f%2BY8Oo%2BuWOTSvPE8fFac7yiUwikdUvAtG5H0Bnj%2BEqhTKTuImGjd4MK%2BSqc8BvtqstkdxTyhQKSN13GWJ2%2BLMDi2W4dLOlLX9l1qYbxwwv%2FrobMVrwvQQhgkyoYYa6aLleNCRbpnm1LUiuUddkTbq&X-Amz-Signature=1e6fa3ee9e931fa1453235596850cffa5b9ecc20df45eda23d0b15150c80431a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
