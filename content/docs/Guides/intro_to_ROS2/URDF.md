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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUE4VD76%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHdmMHdtyaewgt%2B5P7Yi1%2Bu0h5wnUTaVaF52Vs4t97bAiB6%2FAG%2BDeQSzxloeZH3SfLG32B9WbPD23Bkd9eN%2FiO6iiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYR1VuviRHxwjXIJKtwDBdNfLKH5SUPzQs%2BCD4zAnnVwNnGYRjmdAFZy4m%2BRi2kV8Bbwiwxp3vJV1qlXmlvWl5vjO%2BXamaO5PdcJc03AX6N4p%2FFovkgdRug6HURYqap2x0xaAXcaV0qBYGRkwRqtAWyi8v5n1t5F0zmFy%2BJtdIBG28Lyv8ebP3YzUxj5SyuY2ubW60R4Kj7%2BIplY6ADd%2F33v8fQkMIemjr1GvgKU2WVv7Wn0HIpW9DnAnD3VBS26SAfbhSQK9KjEmZNGBT2LfZ5IjMc3gT%2FoqCZ%2BMsGbxF%2BKuJQ9FsOqdNdcu8SX7969hJYhHM9R5l4mnFRaa%2BYVA5Ozr7lEQHkf9x3BusYwkHL12hQPZVDMFgXJMLA5ub9tkbNYGHuvXE2a%2BXUhZTbk22wsFyBepgZMmlegmOJFf%2FzsM2dT%2BmpyHkZzbvSMV1Oqes%2BzlWmpuMvk9k%2Fa7FM2B%2FYZJXc%2FX4eUEMHfLiH0FcbDiFgOIKjVq2esCV7wizj3kfjCcx%2B9rDBBYh6SlijaHdNXateAtHQYi83TzK9Zcc2Crp4gq%2BXiI2pn%2BUD1JE53jO1xuHGaWZa7mLrmQZ19VC8BODQQ41JoY%2FTbOOLYcMwivCVwltKwA4FQLjrHgl6OWPuOai0ZOhRHIfkw%2FKGoxAY6pgHjeAfgVAIONmmSuFMSfaaOpthucWLyWoizqtfBhjFwZT0Sh4%2BpCgqRGdEV%2BLuPdpsY1%2F2wBfBVlu%2Fi40kWCCogfv%2BUu3eM8OBoxw45ZycSWhFcYdDB5cxPudpkymz0vVOI0HPvd9eJSekbFF9EfuezegIb5om1xcrMsGRBWbXxXWCpXH%2BMoI0nZB186NPaJbUdG5wia8hjSCG%2FnX%2BGdG2XzPucl0Th&X-Amz-Signature=1c8305a802948039d6c1d4b3fa68f6bb45f3523d8f1aec877c90f8f38c93a320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUE4VD76%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHdmMHdtyaewgt%2B5P7Yi1%2Bu0h5wnUTaVaF52Vs4t97bAiB6%2FAG%2BDeQSzxloeZH3SfLG32B9WbPD23Bkd9eN%2FiO6iiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzYR1VuviRHxwjXIJKtwDBdNfLKH5SUPzQs%2BCD4zAnnVwNnGYRjmdAFZy4m%2BRi2kV8Bbwiwxp3vJV1qlXmlvWl5vjO%2BXamaO5PdcJc03AX6N4p%2FFovkgdRug6HURYqap2x0xaAXcaV0qBYGRkwRqtAWyi8v5n1t5F0zmFy%2BJtdIBG28Lyv8ebP3YzUxj5SyuY2ubW60R4Kj7%2BIplY6ADd%2F33v8fQkMIemjr1GvgKU2WVv7Wn0HIpW9DnAnD3VBS26SAfbhSQK9KjEmZNGBT2LfZ5IjMc3gT%2FoqCZ%2BMsGbxF%2BKuJQ9FsOqdNdcu8SX7969hJYhHM9R5l4mnFRaa%2BYVA5Ozr7lEQHkf9x3BusYwkHL12hQPZVDMFgXJMLA5ub9tkbNYGHuvXE2a%2BXUhZTbk22wsFyBepgZMmlegmOJFf%2FzsM2dT%2BmpyHkZzbvSMV1Oqes%2BzlWmpuMvk9k%2Fa7FM2B%2FYZJXc%2FX4eUEMHfLiH0FcbDiFgOIKjVq2esCV7wizj3kfjCcx%2B9rDBBYh6SlijaHdNXateAtHQYi83TzK9Zcc2Crp4gq%2BXiI2pn%2BUD1JE53jO1xuHGaWZa7mLrmQZ19VC8BODQQ41JoY%2FTbOOLYcMwivCVwltKwA4FQLjrHgl6OWPuOai0ZOhRHIfkw%2FKGoxAY6pgHjeAfgVAIONmmSuFMSfaaOpthucWLyWoizqtfBhjFwZT0Sh4%2BpCgqRGdEV%2BLuPdpsY1%2F2wBfBVlu%2Fi40kWCCogfv%2BUu3eM8OBoxw45ZycSWhFcYdDB5cxPudpkymz0vVOI0HPvd9eJSekbFF9EfuezegIb5om1xcrMsGRBWbXxXWCpXH%2BMoI0nZB186NPaJbUdG5wia8hjSCG%2FnX%2BGdG2XzPucl0Th&X-Amz-Signature=4024b3bd7ce28703ac344c93165b919b1db29fcef67024d3995325c3424dbddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
