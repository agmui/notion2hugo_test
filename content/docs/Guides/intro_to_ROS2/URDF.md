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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWMFDED%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHKu0CHlwIhr5D32Oi6kQoa88i%2BJa%2BVIig%2BGAOJ%2BYamKAiEAp41uyBqh%2B3Jkp5DEdIcuSYX74g%2BanZEPGdQ0dqpZM2oqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH9gIB%2FRyJNQlAACircA2rgQzL88MpMg680d46pjOU%2BzizZ%2FMTNOyENVVm%2FiiIuScYqbBL%2BlTMGced%2FRRRU927CaQwYxVvxdbx7zELpZUCh7sP2AIlIRmK8PuvozSCl30qwNQIeO%2BSLjjO5WhKdj9XXSWab5KuEqlpCcArrgbn9pMHD73jvN9%2FjD6h0urIz3XfYxm%2B8PQ9%2Ft3LJAlcMYanBrSCqmFKhVTjaYBu9osGQLapqIDo4XmImOTioxPi%2F9Td1SEguz3fOk7CBM8HZqCX26tVqiuXBXjg0YsfdAWQwa32r6wi03ns5PKkxV2bwXy7yinbPFQpj7VEytNpudvZTlcWYbAFrKvRHOBQMOYi3gUoG6FI6C3SPoJrBWkjhUBNpFB9sbV0QbyAewMC%2FKnHgBnROAAAh9wVHG6Mlcq3asmc4AMI2ab%2BKfmgvpJ%2BrzKvLk3qKomILjq4H%2FAU5Ek%2BophMYD3ABYt6vO%2FBO36ljO%2BzMtw8Z89yoCzkxSawNLQJM9jSE0aLapVV3uLqBvl4qWi3fMpWy2GC79ybP0NSusdgVUZWH295YdcP8YP%2Bz%2B2Y4F8%2Bv4eqvTSHms3TOUbeqj5UnoZ5kockT2svuGrbnmbSGt1ubRbBDrfNH7yBqxaP3FdpRbQu5ELdIMPuix74GOqUBvFts76G1T965w83Msh3O7HORsu6GJu0ixwnPkVozvChMqdXsH8PEdaoa4fg3njLE4Cx5uX0k1s3Boiwly4ZCTgfqKft7twCLcjhabt5kMiE8IzsfzMvSmN2d59xoTPETIQRN%2Bt%2BbIFTr7CA4BeVTbByhStkkcy72GPgAv48OYeztoZao0CxjNokLPbkCKHYAf02%2FLthd%2FWtkrrHmXIW6oCwnDmwY&X-Amz-Signature=2d20109de124cadb8bf5119afee811bfdea7b8a564a1b50f452b5009b4fb186f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWMFDED%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHKu0CHlwIhr5D32Oi6kQoa88i%2BJa%2BVIig%2BGAOJ%2BYamKAiEAp41uyBqh%2B3Jkp5DEdIcuSYX74g%2BanZEPGdQ0dqpZM2oqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH9gIB%2FRyJNQlAACircA2rgQzL88MpMg680d46pjOU%2BzizZ%2FMTNOyENVVm%2FiiIuScYqbBL%2BlTMGced%2FRRRU927CaQwYxVvxdbx7zELpZUCh7sP2AIlIRmK8PuvozSCl30qwNQIeO%2BSLjjO5WhKdj9XXSWab5KuEqlpCcArrgbn9pMHD73jvN9%2FjD6h0urIz3XfYxm%2B8PQ9%2Ft3LJAlcMYanBrSCqmFKhVTjaYBu9osGQLapqIDo4XmImOTioxPi%2F9Td1SEguz3fOk7CBM8HZqCX26tVqiuXBXjg0YsfdAWQwa32r6wi03ns5PKkxV2bwXy7yinbPFQpj7VEytNpudvZTlcWYbAFrKvRHOBQMOYi3gUoG6FI6C3SPoJrBWkjhUBNpFB9sbV0QbyAewMC%2FKnHgBnROAAAh9wVHG6Mlcq3asmc4AMI2ab%2BKfmgvpJ%2BrzKvLk3qKomILjq4H%2FAU5Ek%2BophMYD3ABYt6vO%2FBO36ljO%2BzMtw8Z89yoCzkxSawNLQJM9jSE0aLapVV3uLqBvl4qWi3fMpWy2GC79ybP0NSusdgVUZWH295YdcP8YP%2Bz%2B2Y4F8%2Bv4eqvTSHms3TOUbeqj5UnoZ5kockT2svuGrbnmbSGt1ubRbBDrfNH7yBqxaP3FdpRbQu5ELdIMPuix74GOqUBvFts76G1T965w83Msh3O7HORsu6GJu0ixwnPkVozvChMqdXsH8PEdaoa4fg3njLE4Cx5uX0k1s3Boiwly4ZCTgfqKft7twCLcjhabt5kMiE8IzsfzMvSmN2d59xoTPETIQRN%2Bt%2BbIFTr7CA4BeVTbByhStkkcy72GPgAv48OYeztoZao0CxjNokLPbkCKHYAf02%2FLthd%2FWtkrrHmXIW6oCwnDmwY&X-Amz-Signature=75009f2b5c7e7c01f83380823d7340887cf6b3fc9d838a1ed774bd516632c4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
