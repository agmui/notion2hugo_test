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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3C7M62%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCRg68RfKEJ0E%2Bhv4CrevA%2BRGXB8MJ8gkJ8m%2BQUXapw9gIgfOftsjrRJ8g4GIPlWqLKls8FWkZVA1OAAAQvtEEfOJcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4K1JDmElaTrqiRircA%2FSaaPhZFRVNqPb0tqBi5PJ79OFy%2BkH69CWyEUiMecxiBoAYoIYO3Z84m%2FBH8nZBUTTwc%2BgVGN0JDGLsFwxM%2FNqKapa%2FMc4m8QCUDHYx%2FwFO8CQtUrz5iZ4fm1dsu%2Fae15WWQlgbyVpT7NouXrDTEf3%2BuiG6hJWR%2Fb%2FGnnP4n7vhfhc25tjDKa2rld6R%2FUD0OO%2B%2BMOpS5TU5uZVKzAGd1Yh0iCuWqpIQmrxIyAKujiV8jiRThCw7HfSxbIW6xNmW5pAYfecof1c8QZi7btAp77v%2FxTKhagVFf5m04a%2FUNTHo2rOurInE42ijq9W2u4B6YlMNaXAkT3gNwKxj3hDGB%2BGggHYjgsBIj8o0PSToRc2WZwqyf0p4pVn3SQvv1DHLXpBe5UhiplRZa4hChW00sKR2Uem%2BrS1gsIzcYBp4eBF4XSDIASEpqnB0OszHMmVzvlghCYhtH1vb8K7RhC8RKbDJbEoq7Nyu0KunbFXUpqgHm9nuBiiRBtQ4ZsQn%2FY6Sn5QwT8xfW0ZaDl0Lxn%2BlkS27Ffw2JHs%2F7ajWiK3sauu0%2F4TIwAY0xKzq9BhFsaOrtq2ZItYfkq%2FoR3OCSgSPeLGOidEgeeSub6pF9wFSiHG8HwDDMRpVYlmpXEupMIbZ0cAGOqUBFoV3asnPrEmc5QbEzxMB6ly78oxojye77%2Fsi7gHq7B4Kv2BcrGBy%2Bgd5GKuREA0eEHtLRJbixElxEqJmRbY5UcwoLjKHdkme1DDYGtUXQs0Fc7fv5bOuW6260zOx2ko7c3kLbk1un9vSmPvs0O5DiZdOzpOePV43ubps0C006tGfyXM2ZK0RmhU1bdOkw7M1V9lxbRkZNlIwdspZQ%2BX3Wp9S2etC&X-Amz-Signature=ec60ea105f5720e361bf22fcce95b7dc0fb23f79432c9d4e51e494673dfbe5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3C7M62%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCRg68RfKEJ0E%2Bhv4CrevA%2BRGXB8MJ8gkJ8m%2BQUXapw9gIgfOftsjrRJ8g4GIPlWqLKls8FWkZVA1OAAAQvtEEfOJcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk4K1JDmElaTrqiRircA%2FSaaPhZFRVNqPb0tqBi5PJ79OFy%2BkH69CWyEUiMecxiBoAYoIYO3Z84m%2FBH8nZBUTTwc%2BgVGN0JDGLsFwxM%2FNqKapa%2FMc4m8QCUDHYx%2FwFO8CQtUrz5iZ4fm1dsu%2Fae15WWQlgbyVpT7NouXrDTEf3%2BuiG6hJWR%2Fb%2FGnnP4n7vhfhc25tjDKa2rld6R%2FUD0OO%2B%2BMOpS5TU5uZVKzAGd1Yh0iCuWqpIQmrxIyAKujiV8jiRThCw7HfSxbIW6xNmW5pAYfecof1c8QZi7btAp77v%2FxTKhagVFf5m04a%2FUNTHo2rOurInE42ijq9W2u4B6YlMNaXAkT3gNwKxj3hDGB%2BGggHYjgsBIj8o0PSToRc2WZwqyf0p4pVn3SQvv1DHLXpBe5UhiplRZa4hChW00sKR2Uem%2BrS1gsIzcYBp4eBF4XSDIASEpqnB0OszHMmVzvlghCYhtH1vb8K7RhC8RKbDJbEoq7Nyu0KunbFXUpqgHm9nuBiiRBtQ4ZsQn%2FY6Sn5QwT8xfW0ZaDl0Lxn%2BlkS27Ffw2JHs%2F7ajWiK3sauu0%2F4TIwAY0xKzq9BhFsaOrtq2ZItYfkq%2FoR3OCSgSPeLGOidEgeeSub6pF9wFSiHG8HwDDMRpVYlmpXEupMIbZ0cAGOqUBFoV3asnPrEmc5QbEzxMB6ly78oxojye77%2Fsi7gHq7B4Kv2BcrGBy%2Bgd5GKuREA0eEHtLRJbixElxEqJmRbY5UcwoLjKHdkme1DDYGtUXQs0Fc7fv5bOuW6260zOx2ko7c3kLbk1un9vSmPvs0O5DiZdOzpOePV43ubps0C006tGfyXM2ZK0RmhU1bdOkw7M1V9lxbRkZNlIwdspZQ%2BX3Wp9S2etC&X-Amz-Signature=beeaaaef897e30c8ad2cb863f0990d1410b8d6726eaf6c59093642fbd926b7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
