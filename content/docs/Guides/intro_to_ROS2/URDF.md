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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QE3RSM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp9sU2poNk3cdzeqW6F2RWREFwgCVezZ0Y410SoSA%2BYAIgSAzOsOegExR2FAzsvy%2FeSPZ0lv4ND59xg0sarvGKJpMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcUMWH5hrs98otj9SrcA7%2F6IYGGdC%2BepS9jeO7MJJ3%2FT2Uw5MjXJB%2FHuQ4B7hoblANy6lZrkMSeaad46x%2Bd%2BSTYsbbWBwTFHcSIhxIPCJOxnnSHRCtBp0BfXmNfmY7YZ9y2pJsq0RCPK2GczkpvzPgU%2BW3hhMTo%2FMdOPyxy4rspihXpt3tIyJ3zQXBUTBeNYbSxtIUSNuI9xK8ltbGQJ1IwUeglVPatMs2x1L4rmi2HMUP1WwaRDHkmybUK8TY7yKt41fZtTgdAVfjJHCIBg67ACB%2FNbeRWW1TSPj%2BXTB3C0RQnKPArSrr29dbcYgvqkjHr5zS9pHYOxO1aMJjrhPZPpM%2FrMsiBROdstO4mzFCVkwyJyNTJOz883nC%2B9a5dgwQGUNu6DG54TN6HpLFawfSg3ldoXITLgSCaDy76%2BNJIydpRJNUKTDanQsm0Po3TpnTGdzZ%2FmwzU4F8VhDImc4EZoKXimm1Sd0z9KiQ7pkBEC0OpgiwiifC4HXPgO0IF0KWPQJkUqQlVkqeDKtkuC%2FVkXLNefMlgRMsVMvSv7Wsi%2B6rGiAghbE70I6zxhDjSeagQhO3vsluJDRmnWQsITrsz6SgIYQaw06i%2FLl2oN4r%2FO9B9HRUGHUg2qib40OKWZb6yHC5aOJXLRcZOMOuGyb4GOqUB2OIk2VM8tN0OuOxgCq3Y7ERXDRbbo2%2BWa1V5ag1XdSc1QKIj5PSZz%2FdodODOLFxS1S5pTFzRErZdrNkRhwF8bly3fNWh0ZUOsHutWIu4J7qVNnOpxugxCirwxfHtdJ%2FSStw6u4yhBebosnDclaK7%2BLaPUcCRXGgDOLZoOqHi6rgH3K7YeFM7f41mfEWb8IDufdK05%2BnuQS7ewNzlCwacGCcT3TT1&X-Amz-Signature=d136af14b6431debc095960f00c3b624b626e0df9673df8db070a7e40fe89929&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QE3RSM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp9sU2poNk3cdzeqW6F2RWREFwgCVezZ0Y410SoSA%2BYAIgSAzOsOegExR2FAzsvy%2FeSPZ0lv4ND59xg0sarvGKJpMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcUMWH5hrs98otj9SrcA7%2F6IYGGdC%2BepS9jeO7MJJ3%2FT2Uw5MjXJB%2FHuQ4B7hoblANy6lZrkMSeaad46x%2Bd%2BSTYsbbWBwTFHcSIhxIPCJOxnnSHRCtBp0BfXmNfmY7YZ9y2pJsq0RCPK2GczkpvzPgU%2BW3hhMTo%2FMdOPyxy4rspihXpt3tIyJ3zQXBUTBeNYbSxtIUSNuI9xK8ltbGQJ1IwUeglVPatMs2x1L4rmi2HMUP1WwaRDHkmybUK8TY7yKt41fZtTgdAVfjJHCIBg67ACB%2FNbeRWW1TSPj%2BXTB3C0RQnKPArSrr29dbcYgvqkjHr5zS9pHYOxO1aMJjrhPZPpM%2FrMsiBROdstO4mzFCVkwyJyNTJOz883nC%2B9a5dgwQGUNu6DG54TN6HpLFawfSg3ldoXITLgSCaDy76%2BNJIydpRJNUKTDanQsm0Po3TpnTGdzZ%2FmwzU4F8VhDImc4EZoKXimm1Sd0z9KiQ7pkBEC0OpgiwiifC4HXPgO0IF0KWPQJkUqQlVkqeDKtkuC%2FVkXLNefMlgRMsVMvSv7Wsi%2B6rGiAghbE70I6zxhDjSeagQhO3vsluJDRmnWQsITrsz6SgIYQaw06i%2FLl2oN4r%2FO9B9HRUGHUg2qib40OKWZb6yHC5aOJXLRcZOMOuGyb4GOqUB2OIk2VM8tN0OuOxgCq3Y7ERXDRbbo2%2BWa1V5ag1XdSc1QKIj5PSZz%2FdodODOLFxS1S5pTFzRErZdrNkRhwF8bly3fNWh0ZUOsHutWIu4J7qVNnOpxugxCirwxfHtdJ%2FSStw6u4yhBebosnDclaK7%2BLaPUcCRXGgDOLZoOqHi6rgH3K7YeFM7f41mfEWb8IDufdK05%2BnuQS7ewNzlCwacGCcT3TT1&X-Amz-Signature=5cb8eb4e85847fa5d19a792582abddd6b35e6236208662f0b1002f9790dbbfac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
