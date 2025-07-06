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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNGXCZV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFl04SFLEw6chF5ztXc%2FLotK1ujJmlIUQ5YX7JXVyUNiAiEAmhg6WuNNUnZ68EteqeB%2F2LNCYeLbpDxnq8M7FYrSKnwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLPkhWbuaivqjsCM4yrcAx3hfZQO7Xao9hx5BkuAGtuyTyvKxD5tRnNkVeqDt8TYMqkaQ%2FrlKuEwCrbYbuJmV%2Fc6ENQFTTRV1dR7prPz6DKt6kMsSqAdOGzEbzGv75LJ6hnIX4vQFVTimNmgx89ce08Rux8xTEQN7Lzm8qMdug4bfv0YRkk11UQLJ5CJUMwjSx%2BKXtSPx%2FbNlZe7EypihLKknCe6OukwI3weWMX2%2FSVc70%2ForH9g040kDLUsMEJEpa0sN7V2ptRDXKEY0ldLaYbE%2FsaBYfek3qfO5jE%2BqZXBg76uaAXmPWIYX63zS943yJCNl7Ilvz%2BBJWBe66rNJBsCDdiiEaUDeJxoZU6RxJUpn2FMF3x07fJ8n8amtEOIhFjVmz6YMIQHeCpDBTMwIX5BaVsy8W7OkMm9oXoBZJTlLWcYuwM6TJZ1fktaNPoqc2KGHldOnE19IkCOWP%2FDjNrgo4icWzNGQ0YS8j58uMZFgRUdn%2BApDblHK6pWVTi5t7Y1GCJ4yfjJx5OOSf7WWGIQtF3Ex21LI2Lz5COW970nVCiFulFX63U9B%2ByCm9rZApCaHJgOthdjP2azByL51VIflYmHhkbXdn5mP7aliNZHjXMUFgPRadJbML99tmYHRBQF4TrFKm5WjyahMIeNp8MGOqUBzgZPIsSH%2FRh28cpk5slyM9bHon9hU3B0vNq3L3t%2BHISPAeaRbMb7cVH5fXZytjlTyKu5S1GPC5acdPwYsJZ8yu7OYJsz7QEVegM2tWtka5bnX3vET%2BgKOEcGtBwoVuAj26CLT%2B85%2Bbej%2BAsc0BL57zmOtsWckeqcdN5VmBw9Rf5CeUT5A%2F1LqaifbqSffiuNLv9fp8%2Fs%2Bm7A4K6zNCMqJt%2FhM1B3&X-Amz-Signature=ecd229ef7cb139448b77526b6616942dab909e062d63b93f64b301beca2bf686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNGXCZV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFl04SFLEw6chF5ztXc%2FLotK1ujJmlIUQ5YX7JXVyUNiAiEAmhg6WuNNUnZ68EteqeB%2F2LNCYeLbpDxnq8M7FYrSKnwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLPkhWbuaivqjsCM4yrcAx3hfZQO7Xao9hx5BkuAGtuyTyvKxD5tRnNkVeqDt8TYMqkaQ%2FrlKuEwCrbYbuJmV%2Fc6ENQFTTRV1dR7prPz6DKt6kMsSqAdOGzEbzGv75LJ6hnIX4vQFVTimNmgx89ce08Rux8xTEQN7Lzm8qMdug4bfv0YRkk11UQLJ5CJUMwjSx%2BKXtSPx%2FbNlZe7EypihLKknCe6OukwI3weWMX2%2FSVc70%2ForH9g040kDLUsMEJEpa0sN7V2ptRDXKEY0ldLaYbE%2FsaBYfek3qfO5jE%2BqZXBg76uaAXmPWIYX63zS943yJCNl7Ilvz%2BBJWBe66rNJBsCDdiiEaUDeJxoZU6RxJUpn2FMF3x07fJ8n8amtEOIhFjVmz6YMIQHeCpDBTMwIX5BaVsy8W7OkMm9oXoBZJTlLWcYuwM6TJZ1fktaNPoqc2KGHldOnE19IkCOWP%2FDjNrgo4icWzNGQ0YS8j58uMZFgRUdn%2BApDblHK6pWVTi5t7Y1GCJ4yfjJx5OOSf7WWGIQtF3Ex21LI2Lz5COW970nVCiFulFX63U9B%2ByCm9rZApCaHJgOthdjP2azByL51VIflYmHhkbXdn5mP7aliNZHjXMUFgPRadJbML99tmYHRBQF4TrFKm5WjyahMIeNp8MGOqUBzgZPIsSH%2FRh28cpk5slyM9bHon9hU3B0vNq3L3t%2BHISPAeaRbMb7cVH5fXZytjlTyKu5S1GPC5acdPwYsJZ8yu7OYJsz7QEVegM2tWtka5bnX3vET%2BgKOEcGtBwoVuAj26CLT%2B85%2Bbej%2BAsc0BL57zmOtsWckeqcdN5VmBw9Rf5CeUT5A%2F1LqaifbqSffiuNLv9fp8%2Fs%2Bm7A4K6zNCMqJt%2FhM1B3&X-Amz-Signature=63941e65cb0b8eb2f816cabc1409d0de1f37ca22cd3cc91fd958be2dbaeee89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
