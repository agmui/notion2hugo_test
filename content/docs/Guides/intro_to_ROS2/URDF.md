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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6HNQKN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEHsSjq8qK1gW3sC3Ot5R%2BJDVTMTzwFOM9p0AknTaCHjAiEAqo7kO4P3LxExjIYZ0G1RzMEWt5aQhaW0EGF8SUqpkbwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIVAfGQuY33rE9D%2BIyrcA7yWwKscDoFk8AyjAKXtjHwiY7azzVZmJrQK21157ljUnu8H4Uvswy6Xcxox4ktMQi0HcZ4DGN%2FezoijMb4Twm2%2BOwLvm03fQHGnp7Xpda731lk53cWAXtrKNqws7tp5rCyuWhdW7Pr27hld0JDXF1hfYMTjIMfeWFPC8hRp59WH0w2VH1qqc1l4dioPF72zXnj%2BrAmSvOe9yULtuGJfd5CKYKQwRsk3BdLWBO9f%2BuOHbrhIWARPl02a7wVEEyDxqovfuBSg65dlniseZbBD6gjcE9eRdrPTb30PgTIKxgUsUvLI6KzuZxnoIqNDrZoQgv7dI%2FgmTrbCcAmloHQpL6wuLsbUMIYQJP64NDmMMMH1UsXp2%2FG8pqoAxpa4%2FEJ6uDn0hdm6INu3xTBIzWKh4zXt4vIxH8lVpoZVUF1Pya3oyA5y5eKrYtM1%2BhTrN4l%2BxOwac8LWYm8QS5%2Bn4a4uEmSLoKPeD50SGhMS9X8wOQwnYRp%2FN3eNm%2FEkDp4PUV5M5Ok7Rkbb2r5fY6vWN8JOiQQ7wrGwbuhG%2FcEFU7gFuLu7CVhBk4gHh2cBVbu26r2PkVtwhXQabqbW6ut7wMPyKnIKz8BLoTOwypU1%2Bk8cMU5dcjSzlZ7mg9EWE%2B0DMLifrL4GOqUBIVQc%2Bwa949hnPun1jsSPejWVsZawGuT%2FaH6UV6ubnAwFyry85BWerJI0xEByeJyfNPPkBgi1mzdzaW3uRxj3%2B4peNFPthk%2Fp3Yv3nhQcKurDk3J7hXayQoYoHN97YMAteMvEOL3xEk%2Ftm3%2B9UsSTpBHZzC4bRnMZOFYWFp2SKW02ppdcyKKicrU3JuXST6KcXaUMm0m4MpD9tMxA6aw8B%2FlptVf4&X-Amz-Signature=f093ba5a536aecc0c5d368d171b1502b03019dd072998b28752ea0fb821cd3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6HNQKN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEHsSjq8qK1gW3sC3Ot5R%2BJDVTMTzwFOM9p0AknTaCHjAiEAqo7kO4P3LxExjIYZ0G1RzMEWt5aQhaW0EGF8SUqpkbwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIVAfGQuY33rE9D%2BIyrcA7yWwKscDoFk8AyjAKXtjHwiY7azzVZmJrQK21157ljUnu8H4Uvswy6Xcxox4ktMQi0HcZ4DGN%2FezoijMb4Twm2%2BOwLvm03fQHGnp7Xpda731lk53cWAXtrKNqws7tp5rCyuWhdW7Pr27hld0JDXF1hfYMTjIMfeWFPC8hRp59WH0w2VH1qqc1l4dioPF72zXnj%2BrAmSvOe9yULtuGJfd5CKYKQwRsk3BdLWBO9f%2BuOHbrhIWARPl02a7wVEEyDxqovfuBSg65dlniseZbBD6gjcE9eRdrPTb30PgTIKxgUsUvLI6KzuZxnoIqNDrZoQgv7dI%2FgmTrbCcAmloHQpL6wuLsbUMIYQJP64NDmMMMH1UsXp2%2FG8pqoAxpa4%2FEJ6uDn0hdm6INu3xTBIzWKh4zXt4vIxH8lVpoZVUF1Pya3oyA5y5eKrYtM1%2BhTrN4l%2BxOwac8LWYm8QS5%2Bn4a4uEmSLoKPeD50SGhMS9X8wOQwnYRp%2FN3eNm%2FEkDp4PUV5M5Ok7Rkbb2r5fY6vWN8JOiQQ7wrGwbuhG%2FcEFU7gFuLu7CVhBk4gHh2cBVbu26r2PkVtwhXQabqbW6ut7wMPyKnIKz8BLoTOwypU1%2Bk8cMU5dcjSzlZ7mg9EWE%2B0DMLifrL4GOqUBIVQc%2Bwa949hnPun1jsSPejWVsZawGuT%2FaH6UV6ubnAwFyry85BWerJI0xEByeJyfNPPkBgi1mzdzaW3uRxj3%2B4peNFPthk%2Fp3Yv3nhQcKurDk3J7hXayQoYoHN97YMAteMvEOL3xEk%2Ftm3%2B9UsSTpBHZzC4bRnMZOFYWFp2SKW02ppdcyKKicrU3JuXST6KcXaUMm0m4MpD9tMxA6aw8B%2FlptVf4&X-Amz-Signature=ec8631099cac848e05adf5b127f8e39ef58d9e846f465b8a510930dddc860def&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
