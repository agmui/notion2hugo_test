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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654K3DKKU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC49hLBhgBqEPvTcWHFB9JeYmEu8EnG9nrqkgew5P6DTQIgV6qO1rFRWT4qw0GOmDbqb2ef%2Fi2Q%2F7h9JqI5FWT%2FTnEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6d%2FWx60NjhbrPX5CrcA5YhLqBmdOOflw%2BRWiFCQlFMeIo%2BVNB6dzeCYTeqrDyEQHtGU9GsK1bxo%2BL8ZGQOmmMaqs%2FnoPuhCwZAjp7wGyNdGeplDTxKJ4Yl9Ou6laxn%2B3ogM0lR%2F2IRvz9NpfltjHccPQx9jGxU1baXAwRjauAnF%2BMXISWb8dLX%2FPHHJMiUwIyZilAGVTHguYdpUEQi%2FfxlQou8ZzZVlJgY%2F5jvuuJtsqAyI62QZNpTR20RlaUgYi9WQKjXSJHiPO18%2BqdeY7yofXZajLH6ty9%2ByD3L9EFtXc3PRRBriSVOociAFNcoLT0V7U6i5Kr39pgp57iEuop2jpZ%2F%2Bje6TREC2SkfhZ5RkSWd0gjkLynUltoaDGBz2tyg4m1cJEotqKBVXadV626XBf5ZvzN73oACjZ4qZhKV%2BPgCmTIzVhoFBVSFMKSwWI1xKr30wSM1tbr83R0%2FTHlmqJlMFNDhPF3brc%2FHp3UR0vB%2BO%2FMcNDLO5Kd4Z%2B0M51d0DoZAFE86UnOfQXVBS%2BTGrJVP7HAq%2BMFKTUzM4DhieyMNiiH%2BxAyjizd5DqSWj85AOLVCxLV6jdHE4qSrAAuMxIAMsIGHKuq5it%2FryB5KLzze3BThqgz31QOr%2F9B%2B1lfXWpMrH3ru4A7UMOq908IGOqUBX3cRxUDcOfoUEpCeoXcEikTEvxSMLiwvDUEUO8YSLEMMIf82NRA%2BnFMT1gAB%2FWv0I6TrV7typyBFFmyNzQpl4DivvkqTg6IMjmGYacULawDj6M4AggyaZYPZesQ10OOd%2B3qV761AxonbEqpn4aJdEl%2BTu0SNI%2FiecGSXUy3TpKa%2F9dka5Q929906hyp7GGWjC7E9ai6tOT8bIM1E%2FtPDAoTmk7bz&X-Amz-Signature=5aa4f537da5c30935207b992fa180142442faf11c44bf1b273efde0e3d031cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654K3DKKU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC49hLBhgBqEPvTcWHFB9JeYmEu8EnG9nrqkgew5P6DTQIgV6qO1rFRWT4qw0GOmDbqb2ef%2Fi2Q%2F7h9JqI5FWT%2FTnEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6d%2FWx60NjhbrPX5CrcA5YhLqBmdOOflw%2BRWiFCQlFMeIo%2BVNB6dzeCYTeqrDyEQHtGU9GsK1bxo%2BL8ZGQOmmMaqs%2FnoPuhCwZAjp7wGyNdGeplDTxKJ4Yl9Ou6laxn%2B3ogM0lR%2F2IRvz9NpfltjHccPQx9jGxU1baXAwRjauAnF%2BMXISWb8dLX%2FPHHJMiUwIyZilAGVTHguYdpUEQi%2FfxlQou8ZzZVlJgY%2F5jvuuJtsqAyI62QZNpTR20RlaUgYi9WQKjXSJHiPO18%2BqdeY7yofXZajLH6ty9%2ByD3L9EFtXc3PRRBriSVOociAFNcoLT0V7U6i5Kr39pgp57iEuop2jpZ%2F%2Bje6TREC2SkfhZ5RkSWd0gjkLynUltoaDGBz2tyg4m1cJEotqKBVXadV626XBf5ZvzN73oACjZ4qZhKV%2BPgCmTIzVhoFBVSFMKSwWI1xKr30wSM1tbr83R0%2FTHlmqJlMFNDhPF3brc%2FHp3UR0vB%2BO%2FMcNDLO5Kd4Z%2B0M51d0DoZAFE86UnOfQXVBS%2BTGrJVP7HAq%2BMFKTUzM4DhieyMNiiH%2BxAyjizd5DqSWj85AOLVCxLV6jdHE4qSrAAuMxIAMsIGHKuq5it%2FryB5KLzze3BThqgz31QOr%2F9B%2B1lfXWpMrH3ru4A7UMOq908IGOqUBX3cRxUDcOfoUEpCeoXcEikTEvxSMLiwvDUEUO8YSLEMMIf82NRA%2BnFMT1gAB%2FWv0I6TrV7typyBFFmyNzQpl4DivvkqTg6IMjmGYacULawDj6M4AggyaZYPZesQ10OOd%2B3qV761AxonbEqpn4aJdEl%2BTu0SNI%2FiecGSXUy3TpKa%2F9dka5Q929906hyp7GGWjC7E9ai6tOT8bIM1E%2FtPDAoTmk7bz&X-Amz-Signature=1b7a75cd671576e00336ebb8daf27363d4b17a8297bedceba8aa663ef0f95aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
