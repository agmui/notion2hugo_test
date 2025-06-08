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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGOYQDT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NUsZYOvvClolVLxgMdP4v6V50cFsWlNKpsrS0OKfpgIgaRhFH4%2BMadCmldMC5xfmYMnotoHHa8IJX6VRl2QVxqsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6tKrPgii4b1mQl7yrcA45GzANygyX1sp0EIpaaqr%2Fd%2BiKybWdt0%2FDkidkowMFseo2e4%2FYKaUgNJcl%2BVdTe%2FuIYKlKZIrXTVhpoXq8qePNJOxqDe7Hoy%2Fp6ge1%2FxGu%2BdXMYuOJgAyJ94%2By%2FLgVTrJoxRk6TunPvg8WS8aLvgA6TqaE4CkrpxVbMgLTzJlSesOCigdxkcXJebjqXPN6DZlWF1RO4xQrNp17BExjjL5B1Ts%2F6Ubveg8kBvhM7nPanqE249fv9DrEypbFcXGRXl3iBQxNk7ap5mJdW6tjTqO3phDIfxat2pjnCoApuBpOv3ccrCfhB1B%2FQeF4X8bVvSRAY4yBdgjpIOCtgj1pNsLOa2ACYyuhYGo3pwxD5nzKhMFdr3nt0qpHmvgOFr9Esg5MnzBpsBeoA%2BT76fCYXhIxoBzW4zTkXyTtAmXjKu0oPnB%2FuawmMGTMAaKwNBlh8KejePzIR35vRCyr7AAyxcr5BfIsn1%2Fzgoe%2F0TLcH4TEJhoZ2UFL4GwhN64SsPCO%2Fy39vMYoTuO8oOoLm2TGXTxsLzGAHZK2UC0hp0ZtcGCHwhSGypVqPbMfmDGPTRdfv5Vk6IXiCLn%2Fjk0ww5q8Xzd4F3M0X2hIblhek6BBBIfhZEIdOfRnxZ%2Fhy04SEMIWdk8IGOqUBvkEJivvqjwo6EBQsR%2BujXboB6QescaLuqcE7m9aaPM7AHIIPK5XrCxwHOeFv7ug9pRSqQJCb2QGzYonUFVjqikN4oyfeg%2FrFlr4PeFx4PtkWxH5o61pWZwGXRd0atZXHw40zsTxG9hgX5T7X1SZwy5AQTr4NTna6n%2FPw4YycfKg3KnkAGABuK2xHZXobTIhHCdtTpoDGOksOvC%2FPWGRM9m8jGlwJ&X-Amz-Signature=9ff9f848e4c593f43cf50c6b42dc3295a674bc0b567beb216de62ce0a583adc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGOYQDT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NUsZYOvvClolVLxgMdP4v6V50cFsWlNKpsrS0OKfpgIgaRhFH4%2BMadCmldMC5xfmYMnotoHHa8IJX6VRl2QVxqsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6tKrPgii4b1mQl7yrcA45GzANygyX1sp0EIpaaqr%2Fd%2BiKybWdt0%2FDkidkowMFseo2e4%2FYKaUgNJcl%2BVdTe%2FuIYKlKZIrXTVhpoXq8qePNJOxqDe7Hoy%2Fp6ge1%2FxGu%2BdXMYuOJgAyJ94%2By%2FLgVTrJoxRk6TunPvg8WS8aLvgA6TqaE4CkrpxVbMgLTzJlSesOCigdxkcXJebjqXPN6DZlWF1RO4xQrNp17BExjjL5B1Ts%2F6Ubveg8kBvhM7nPanqE249fv9DrEypbFcXGRXl3iBQxNk7ap5mJdW6tjTqO3phDIfxat2pjnCoApuBpOv3ccrCfhB1B%2FQeF4X8bVvSRAY4yBdgjpIOCtgj1pNsLOa2ACYyuhYGo3pwxD5nzKhMFdr3nt0qpHmvgOFr9Esg5MnzBpsBeoA%2BT76fCYXhIxoBzW4zTkXyTtAmXjKu0oPnB%2FuawmMGTMAaKwNBlh8KejePzIR35vRCyr7AAyxcr5BfIsn1%2Fzgoe%2F0TLcH4TEJhoZ2UFL4GwhN64SsPCO%2Fy39vMYoTuO8oOoLm2TGXTxsLzGAHZK2UC0hp0ZtcGCHwhSGypVqPbMfmDGPTRdfv5Vk6IXiCLn%2Fjk0ww5q8Xzd4F3M0X2hIblhek6BBBIfhZEIdOfRnxZ%2Fhy04SEMIWdk8IGOqUBvkEJivvqjwo6EBQsR%2BujXboB6QescaLuqcE7m9aaPM7AHIIPK5XrCxwHOeFv7ug9pRSqQJCb2QGzYonUFVjqikN4oyfeg%2FrFlr4PeFx4PtkWxH5o61pWZwGXRd0atZXHw40zsTxG9hgX5T7X1SZwy5AQTr4NTna6n%2FPw4YycfKg3KnkAGABuK2xHZXobTIhHCdtTpoDGOksOvC%2FPWGRM9m8jGlwJ&X-Amz-Signature=7632ea570d0c07feadfd0ca1d71541585432b10aa08533dc10621a3b37281c98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
