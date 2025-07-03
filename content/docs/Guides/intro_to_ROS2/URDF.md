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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLT2ZIU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmVEPB%2B%2FgG7ilxrv6a3m7orhuJ69LGKmXJxs8R%2F7N9iQIgUyNzNTGPQ7wljoAWitLnAvumpx9vsWI8%2FCW3cIS7LNAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXy5gPVRZXpF%2F1hzircA6zIUk0jWMIsnREJyQwF%2BqZX0JeWq1Apxke01eDjz9ZxoSmC8%2BGvKlzHyE9zt7m%2BV4lBBrCs7l99tRwHQsXpg0tBBc2AUSRR%2FrCz9l5DuFoj0YjYt74hlsK4uO5DG7R%2BWqPxQ%2BLoRIEFBnNZW4MClqY3N9rdEk35JGV2b%2Bv%2FnXYQAI6GWeK%2FMiJbguljHLe7Leef3sDNne4p40HUwWzGZQS6knKms%2BAcPV8a7UbhL3Z2Hf4S8%2BShb3F7ek0j8%2B643a2o%2BzNY%2FWHTJF0%2FZeoYFkGwIowfPqj4U3PZ%2B8iexkC%2BQizsiRP05MAj4%2BTdsIsC0Tm8HZqzljLKI0m48DxjKsKK6BSg6mhumhcZb0jV6GkB%2BRvn3poB5lbed97JUdmQdG8%2FS3K7OOnsmzCTs9%2F5aULroh6mRiUz2cczQUQAbNg1R5FlbNM%2FdvDwy55Uks7XrPVxdeIAUvnjor1fjaAXykhrYE%2Fc4vU9GV%2FFTPDmKespBXBHRbdHfPCIsr4PvDwx4p8imNtYJQkwqman%2FS6mtyBiY7ArR%2FFnDmkkrkWAWI3MHnJW9bckXyJ0mvTiYAhnTDJAlM%2B2eFoRRIxyoen1EKN8%2BOel%2FAEkIvLStfDAtj32NLlEoLTeDQ%2BrtaQCMLi9lsMGOqUBvGw7cJmpkqgznRl22O3g%2F3dF3DTWA3L6c6cqdiCyfkKe4496AIV%2BvR7S82%2FamQhGeE9Qjz9eSmIMOXdZv1%2FY9%2BtzaN7l%2BliYgpT4ONk0QOd80iWrjjS0dTQjSq4fIi0ccosXmOuNmr04dLgRxNeKvUkpAXUpfRJZef2xHLkz%2FWaS2iresMUGCv3uu5R0BLlUkFIQtdTkUEGRdW6QQr0mP%2Bv79kF3&X-Amz-Signature=ebeaca441724908730ff26ecbc4d3a1fd1245467fb8d014c0df80ea86407e91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLT2ZIU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmVEPB%2B%2FgG7ilxrv6a3m7orhuJ69LGKmXJxs8R%2F7N9iQIgUyNzNTGPQ7wljoAWitLnAvumpx9vsWI8%2FCW3cIS7LNAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXy5gPVRZXpF%2F1hzircA6zIUk0jWMIsnREJyQwF%2BqZX0JeWq1Apxke01eDjz9ZxoSmC8%2BGvKlzHyE9zt7m%2BV4lBBrCs7l99tRwHQsXpg0tBBc2AUSRR%2FrCz9l5DuFoj0YjYt74hlsK4uO5DG7R%2BWqPxQ%2BLoRIEFBnNZW4MClqY3N9rdEk35JGV2b%2Bv%2FnXYQAI6GWeK%2FMiJbguljHLe7Leef3sDNne4p40HUwWzGZQS6knKms%2BAcPV8a7UbhL3Z2Hf4S8%2BShb3F7ek0j8%2B643a2o%2BzNY%2FWHTJF0%2FZeoYFkGwIowfPqj4U3PZ%2B8iexkC%2BQizsiRP05MAj4%2BTdsIsC0Tm8HZqzljLKI0m48DxjKsKK6BSg6mhumhcZb0jV6GkB%2BRvn3poB5lbed97JUdmQdG8%2FS3K7OOnsmzCTs9%2F5aULroh6mRiUz2cczQUQAbNg1R5FlbNM%2FdvDwy55Uks7XrPVxdeIAUvnjor1fjaAXykhrYE%2Fc4vU9GV%2FFTPDmKespBXBHRbdHfPCIsr4PvDwx4p8imNtYJQkwqman%2FS6mtyBiY7ArR%2FFnDmkkrkWAWI3MHnJW9bckXyJ0mvTiYAhnTDJAlM%2B2eFoRRIxyoen1EKN8%2BOel%2FAEkIvLStfDAtj32NLlEoLTeDQ%2BrtaQCMLi9lsMGOqUBvGw7cJmpkqgznRl22O3g%2F3dF3DTWA3L6c6cqdiCyfkKe4496AIV%2BvR7S82%2FamQhGeE9Qjz9eSmIMOXdZv1%2FY9%2BtzaN7l%2BliYgpT4ONk0QOd80iWrjjS0dTQjSq4fIi0ccosXmOuNmr04dLgRxNeKvUkpAXUpfRJZef2xHLkz%2FWaS2iresMUGCv3uu5R0BLlUkFIQtdTkUEGRdW6QQr0mP%2Bv79kF3&X-Amz-Signature=30f71cf5f8cd3dce3b0167cdce4f1023991816232b2453d5e39cf4054aac58a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
