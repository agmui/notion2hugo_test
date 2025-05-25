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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUQGZMQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFnZguP3upD8qWRI0MyziaigShcY1z%2F2M8TRY8xNGmv0AiAOOT626bmzPI15rggUIkogh0vOpwfsR91OGivZsGa66Cr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMJszzNnpcUOLgxsthKtwDpvjiw7nin1a8x7bKViLnrXusziX3fwaMDi6UVgEs2Sg8%2BS8cj8mah%2FSfe%2FTIcKxuWb0aOJJ1AxUtirysQeJ05VtM4ASk%2Fb5HLe57tbwK8EATBFRANPfMMLHhH6VpFoyEBp%2BKeTbOdCHgtqanY1fRibQqxqtNyLIMa%2B12N8RZnCQKuRokTNJuQPPvdpIBis3lusaUNjjHj33uK6for2BoYcR2nzRiQS1%2F8Gm7oAKrIjIiylnjE4inCF5LtWXItinJd5JPBRFnXJl1f85cwjTwHq0yel4aa6MTQdxdAj20EUHNXB6GAPMeT5eAxuTIr%2FGaQjuYEMv84J6sA1EGy%2FQ0pP9wQ8SHU2zq7pf%2FynoZVj6AZOIPKRXJgubmGrYlUh6G3AVPqMgK2CshdwL52Iyiun7OOVXJslXP9q5ITJk4s7mR5oc6ZLhSNMH1j7ePbYBhlcvIVgYCnoIBmjW687xqjJ9VYmxe6U1lm1%2FyDtgL1omCzGc5gFEoRI28muQgNl8y7c2Hp1Rxzv03x%2BBWJzdkV7cDY62bY95SKt8jLAm4DdanPSkFsNR8GBOj5417%2Fz4OgSefhWQ7cPRxTM89tYhuA2SosvE7OTsvmqEp2x7Bhgs%2BSX9gYbSztTqhcyIwtdXLwQY6pgF4sz0iXhBzdLg7LIIBEH0XKndvNI0qAJHJKjaxPBfCk4AGfOwGFXbeOcZYhdm%2FqJrJ%2BaPxYem8kGH%2F584sHPGvW4yEvGzpbN0V9X64akkmfHsL3Fnuwgoy%2B6Lr9hlYh3Aj6Geqp0MKT23u02QYTT67nEZqgr9eFWpdFeSsLnpx9mEZQu6X9FEqNW4OqnD0w3%2FleuxHXXC6%2B0ui1ejjQBFES9V8Q6oS&X-Amz-Signature=130ae06d7fc34438bf0f5ffcff2fde75f317fe99c5ffa3741d3b93a66eb1f9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUQGZMQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFnZguP3upD8qWRI0MyziaigShcY1z%2F2M8TRY8xNGmv0AiAOOT626bmzPI15rggUIkogh0vOpwfsR91OGivZsGa66Cr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMJszzNnpcUOLgxsthKtwDpvjiw7nin1a8x7bKViLnrXusziX3fwaMDi6UVgEs2Sg8%2BS8cj8mah%2FSfe%2FTIcKxuWb0aOJJ1AxUtirysQeJ05VtM4ASk%2Fb5HLe57tbwK8EATBFRANPfMMLHhH6VpFoyEBp%2BKeTbOdCHgtqanY1fRibQqxqtNyLIMa%2B12N8RZnCQKuRokTNJuQPPvdpIBis3lusaUNjjHj33uK6for2BoYcR2nzRiQS1%2F8Gm7oAKrIjIiylnjE4inCF5LtWXItinJd5JPBRFnXJl1f85cwjTwHq0yel4aa6MTQdxdAj20EUHNXB6GAPMeT5eAxuTIr%2FGaQjuYEMv84J6sA1EGy%2FQ0pP9wQ8SHU2zq7pf%2FynoZVj6AZOIPKRXJgubmGrYlUh6G3AVPqMgK2CshdwL52Iyiun7OOVXJslXP9q5ITJk4s7mR5oc6ZLhSNMH1j7ePbYBhlcvIVgYCnoIBmjW687xqjJ9VYmxe6U1lm1%2FyDtgL1omCzGc5gFEoRI28muQgNl8y7c2Hp1Rxzv03x%2BBWJzdkV7cDY62bY95SKt8jLAm4DdanPSkFsNR8GBOj5417%2Fz4OgSefhWQ7cPRxTM89tYhuA2SosvE7OTsvmqEp2x7Bhgs%2BSX9gYbSztTqhcyIwtdXLwQY6pgF4sz0iXhBzdLg7LIIBEH0XKndvNI0qAJHJKjaxPBfCk4AGfOwGFXbeOcZYhdm%2FqJrJ%2BaPxYem8kGH%2F584sHPGvW4yEvGzpbN0V9X64akkmfHsL3Fnuwgoy%2B6Lr9hlYh3Aj6Geqp0MKT23u02QYTT67nEZqgr9eFWpdFeSsLnpx9mEZQu6X9FEqNW4OqnD0w3%2FleuxHXXC6%2B0ui1ejjQBFES9V8Q6oS&X-Amz-Signature=8b45c36fcaca38d957ff21bc16dd00aed562e984c0e1e463f771d78124f579d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
