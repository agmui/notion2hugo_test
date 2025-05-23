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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJFVSXG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDTsf6Wfq4nJhgNAAkw5TF%2FDs5%2Fnysn4zokIm%2Bo1Vy4XQIgcv2Vnod2K5LnC4J1Ir7b6hjPOswniTOpzyc2xqf1nl8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3kz%2Bkwh%2Be6ppnjXSrcA3mYfyYADYJi%2FWcSBQFWDA6K%2B%2BJglN21tJAgdcZpayRj%2BvZPMDZP5a%2BXD19oUn%2BOJMCcywiiYIH%2FRs1sU1r9O11oQrd6SpwgA8%2BkN8pcn%2BNQscZKioLIyQOD3kN4DT7kihtJHLcKcn4WwK4jug1ak%2FujZDlNM0aYbijvC3Eomu09VhJ%2Fs%2FBlS7HB3cJlsVYWwpr2aduXGNED0%2F2ReRawKqpWSRU63YGhBcjCCHwvOvC5fmcjiK2i7GikdgR0i%2FrFC8X7EZdbaKHibRAC2s3aSd%2FGdFC%2BTHuZbKStxGeTzj7By6rsSuzhT6Y817nCGNjiWVhImeY4UJw5YBCuOc7g94PykcxKvA%2FFZE4Wkc3sVCdVRx0T92dlwxMUR5HX1dgG2uwdlVDNRPythrP4d454Nyy%2BdkWgdHCqnXW1APARruCYOMISmqyZ6W%2BC74sqVqNCC5wAG2vDD6GbriVRMdgnJUM%2FjCBf9yXUT1uH1gAZWBV0PWz4n%2BuU4wfh8ot9G%2FUVEzM%2Bj8qzBUPDQkV1fNhxaS9zd6Kik2DNKGzdsquMItkaWqB3GNFrPvQXqfxYyLxIQKTUP4vccb8AJiCYOQiGdVgD%2BKMRoIjOx6pilmRKYCI9FqHVxonpy%2FvRobPuMOvYw8EGOqUBbwZhNH0W%2BQYw2%2BemiHpEYCPvSLuMXi5uBUCBbKzCgDyv2WrXsa3ccYmnLhWysaFLGdD5X72vQw%2F8avu2SoQKry30GPNB98VMrxOF7rTKfMyTbDJ7TseJdZLbKBmlGCIOrwrnECjVGai%2F6jJt1HD2CMULFl01YXMYa50fZyEwI2J%2BQvOhS64hjkdPLqqargCgtoumaUQvvW8HHEzIOHijZZ737Jdr&X-Amz-Signature=ba2b953b3c442c7c9ffc807198819af514f97de4591e2a975c2fcffb287dacc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJFVSXG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDTsf6Wfq4nJhgNAAkw5TF%2FDs5%2Fnysn4zokIm%2Bo1Vy4XQIgcv2Vnod2K5LnC4J1Ir7b6hjPOswniTOpzyc2xqf1nl8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3kz%2Bkwh%2Be6ppnjXSrcA3mYfyYADYJi%2FWcSBQFWDA6K%2B%2BJglN21tJAgdcZpayRj%2BvZPMDZP5a%2BXD19oUn%2BOJMCcywiiYIH%2FRs1sU1r9O11oQrd6SpwgA8%2BkN8pcn%2BNQscZKioLIyQOD3kN4DT7kihtJHLcKcn4WwK4jug1ak%2FujZDlNM0aYbijvC3Eomu09VhJ%2Fs%2FBlS7HB3cJlsVYWwpr2aduXGNED0%2F2ReRawKqpWSRU63YGhBcjCCHwvOvC5fmcjiK2i7GikdgR0i%2FrFC8X7EZdbaKHibRAC2s3aSd%2FGdFC%2BTHuZbKStxGeTzj7By6rsSuzhT6Y817nCGNjiWVhImeY4UJw5YBCuOc7g94PykcxKvA%2FFZE4Wkc3sVCdVRx0T92dlwxMUR5HX1dgG2uwdlVDNRPythrP4d454Nyy%2BdkWgdHCqnXW1APARruCYOMISmqyZ6W%2BC74sqVqNCC5wAG2vDD6GbriVRMdgnJUM%2FjCBf9yXUT1uH1gAZWBV0PWz4n%2BuU4wfh8ot9G%2FUVEzM%2Bj8qzBUPDQkV1fNhxaS9zd6Kik2DNKGzdsquMItkaWqB3GNFrPvQXqfxYyLxIQKTUP4vccb8AJiCYOQiGdVgD%2BKMRoIjOx6pilmRKYCI9FqHVxonpy%2FvRobPuMOvYw8EGOqUBbwZhNH0W%2BQYw2%2BemiHpEYCPvSLuMXi5uBUCBbKzCgDyv2WrXsa3ccYmnLhWysaFLGdD5X72vQw%2F8avu2SoQKry30GPNB98VMrxOF7rTKfMyTbDJ7TseJdZLbKBmlGCIOrwrnECjVGai%2F6jJt1HD2CMULFl01YXMYa50fZyEwI2J%2BQvOhS64hjkdPLqqargCgtoumaUQvvW8HHEzIOHijZZ737Jdr&X-Amz-Signature=2f1f032257df877d57e790e90d7c61afb8c6144c13383a1bfdd1c25b5b253df7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
