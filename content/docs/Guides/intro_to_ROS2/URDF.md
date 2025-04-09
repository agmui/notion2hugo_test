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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7264T6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDitc8wogT2aFAemVHue9SV0NGXqV1O5tTUXiIqyf76gAIgRdHTNb4HtkNRxwrEHc4Tr89s8DT8E8CrNeOcVasqGogqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsjewnlFYkgVwOLUCrcA%2B0kpNECjPLtqnRndalyZuaA9GrbQrocS16LMRQVjYDZdTKs7WB9EcSt%2BhvvJnR9dmWjF%2FncNtskO5zjKGerhlhGzu%2FUsA5FZdb%2B9thsYY0JbAzisTPIZpBuiJ6C1baFr7L9mYkZw4OCXeJWoiW3K4eO1glgIag3sgkN5HSbf%2B8WZMzKjBZmNum3mgzRo2X789dmK9yScV16Flgp57xwMdXApopIOs94PvXduvidqcnpttrUwo%2FqmcEeMnhr4ANTnaO3075n9NLIPST6jXxc%2FtMUDkJXg2%2Bdlc2Dk9WSkhEmBZUFNw84Bq9yU0Q2yOaE9eI4gdI2nylnTmaINNpyQpirOkPS6CYO3qj3dXkOlDYH0BMH6P7rkMROAKITGBZjmkUsBVqK7hIhR%2BQJVIxhLbWO%2BXitxzMdsI2GAfjnGrLUolBwOuT3eyHZlMORpWH%2FwtCdLFxYgE3bOEDZ2F3Q03F4yrBsBRmzsUHmfwU5y7jdbzS08PcOjCRi3Ngolo06XMAO5FsUpxoP4u6ev1KifVYIQ5ayiuzzPb%2B5NJuj2poNnbHakp%2Fj8gERvZb0TAQn8xLfH111u8Yi1ZfekzbwLZ61k1wMRC%2FKbDAKBEzwM5MqNpnCvB7o0R%2BmhMhgMLKj178GOqUBcdA1Qfym%2BiZ3C1BTI4BJ94ERCxPzI0Ka9B8WWIQk8FY5NMxgL3jdlvDgM1XtnNyoG2SOvHlpitQhQB2CzOFtpYTchpKG8axB4HuqY0MhVqxHALike7UXS1BkTEhgZmrmktJC9sKy7Oa%2Fy5iiGFPFeLwUBj7ldM8BDzdbhZWekMBgtpw4U%2BKPG%2FEELpTUBHNv3vFPkvNFR2HzkLPe%2FU8e6WiTICSN&X-Amz-Signature=b9f83191df0376beb123d20b3b9daa1dc9da6a59cb58df497b9d8087573add97&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7264T6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDitc8wogT2aFAemVHue9SV0NGXqV1O5tTUXiIqyf76gAIgRdHTNb4HtkNRxwrEHc4Tr89s8DT8E8CrNeOcVasqGogqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsjewnlFYkgVwOLUCrcA%2B0kpNECjPLtqnRndalyZuaA9GrbQrocS16LMRQVjYDZdTKs7WB9EcSt%2BhvvJnR9dmWjF%2FncNtskO5zjKGerhlhGzu%2FUsA5FZdb%2B9thsYY0JbAzisTPIZpBuiJ6C1baFr7L9mYkZw4OCXeJWoiW3K4eO1glgIag3sgkN5HSbf%2B8WZMzKjBZmNum3mgzRo2X789dmK9yScV16Flgp57xwMdXApopIOs94PvXduvidqcnpttrUwo%2FqmcEeMnhr4ANTnaO3075n9NLIPST6jXxc%2FtMUDkJXg2%2Bdlc2Dk9WSkhEmBZUFNw84Bq9yU0Q2yOaE9eI4gdI2nylnTmaINNpyQpirOkPS6CYO3qj3dXkOlDYH0BMH6P7rkMROAKITGBZjmkUsBVqK7hIhR%2BQJVIxhLbWO%2BXitxzMdsI2GAfjnGrLUolBwOuT3eyHZlMORpWH%2FwtCdLFxYgE3bOEDZ2F3Q03F4yrBsBRmzsUHmfwU5y7jdbzS08PcOjCRi3Ngolo06XMAO5FsUpxoP4u6ev1KifVYIQ5ayiuzzPb%2B5NJuj2poNnbHakp%2Fj8gERvZb0TAQn8xLfH111u8Yi1ZfekzbwLZ61k1wMRC%2FKbDAKBEzwM5MqNpnCvB7o0R%2BmhMhgMLKj178GOqUBcdA1Qfym%2BiZ3C1BTI4BJ94ERCxPzI0Ka9B8WWIQk8FY5NMxgL3jdlvDgM1XtnNyoG2SOvHlpitQhQB2CzOFtpYTchpKG8axB4HuqY0MhVqxHALike7UXS1BkTEhgZmrmktJC9sKy7Oa%2Fy5iiGFPFeLwUBj7ldM8BDzdbhZWekMBgtpw4U%2BKPG%2FEELpTUBHNv3vFPkvNFR2HzkLPe%2FU8e6WiTICSN&X-Amz-Signature=d93f48c542e0308c8df6c31965ccaeea92ae0a80c4f66cfa109231dd3f0e54ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
