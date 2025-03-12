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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJASCDY5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBabVrjLvi19t8gkbxOxjYjhqSGRiHwye69d52iYtmV%2BAiBxM4tFs3me%2BZuCECCw5uIvmg%2FaouXsPnDBo3teDFydRiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioxzrpuIg67wHdSkKtwDKYh1pw%2B%2F1Cn66rNfZpGfX6M3lIFyUHuz2llOfNdpTllxauiRTtGrblrgcenPk4kaSWz1wZixHUxlnMRSuMqy%2B7K9S6F%2BLi8n2aZkvEXFmsHBvinYwm9%2FX67h4OrSqHXWJ3ijlP%2F%2FO9ISxZurLYQHWJKaPadHL4oT5mVFT3A78iwV9oZKi7h1VPzBnMEzlFGW8HMZdvQvsxMBpZrx8YEHJ0mXcEJALVOo%2FY3ZylSvhn4xatCJ%2BsiD73nFxL1wwpXpiDRezA22iPsTBgSC5YDgUL%2Bq90vYTzVHUSBVDNsIfszySgHBdyejBIhS6xbF7am0J6F5piXP01OPvSF%2BSz%2BUSefGXrniKTmG%2BJonBJLY7D8e2p5FkOR1TG9tHWhcj6RqdzVgFTmONJ2toliDpAynrSmZpiBVAqSkTYt0AaDIKLm77t0hO%2Bkr9Vm1oEfFone4fnY0Ilyfij%2FIeOu4mQLjKmizzFJ1IUZOD9gzhEHz3BAqID5GnE5I2v9Hreh1C0OvvDunWksp%2FeK1Iwb4UuuMoQq689AgV7NezElYPhSUHRZef6zadHn2RkYXUKdyd9lQav5UKgnxfIVNYJrKDKg%2FIXwU3rDsMmyORk9Op2oNB2FSoop06c6W21jUHSQwu9rEvgY6pgFtJ%2B%2BI75Q%2FXMj3TS9YfmNyPqWyUrSr%2B%2FFP4m8bcGAGdiIvEY2oTnBeZPedGSljGno2j6GSEnRolPNTCVcNVkAUl0cfNFChkP30XUpW4mCGyIXUvWLQ2UvdI088lPzdys8OEknCWOf%2FMWaeDul1Jb7nwkOTQf8dPVwOYzQBxWXwZTpuMjniQ%2F4wyMb%2BoOMXWFJc6gmm1y9KiEnFjv0USIs1VFhieShn&X-Amz-Signature=e7a4cfca712cf71049bbf6b346a1eb7649f7a19b7da8b393c91e079ec85ab1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJASCDY5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBabVrjLvi19t8gkbxOxjYjhqSGRiHwye69d52iYtmV%2BAiBxM4tFs3me%2BZuCECCw5uIvmg%2FaouXsPnDBo3teDFydRiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioxzrpuIg67wHdSkKtwDKYh1pw%2B%2F1Cn66rNfZpGfX6M3lIFyUHuz2llOfNdpTllxauiRTtGrblrgcenPk4kaSWz1wZixHUxlnMRSuMqy%2B7K9S6F%2BLi8n2aZkvEXFmsHBvinYwm9%2FX67h4OrSqHXWJ3ijlP%2F%2FO9ISxZurLYQHWJKaPadHL4oT5mVFT3A78iwV9oZKi7h1VPzBnMEzlFGW8HMZdvQvsxMBpZrx8YEHJ0mXcEJALVOo%2FY3ZylSvhn4xatCJ%2BsiD73nFxL1wwpXpiDRezA22iPsTBgSC5YDgUL%2Bq90vYTzVHUSBVDNsIfszySgHBdyejBIhS6xbF7am0J6F5piXP01OPvSF%2BSz%2BUSefGXrniKTmG%2BJonBJLY7D8e2p5FkOR1TG9tHWhcj6RqdzVgFTmONJ2toliDpAynrSmZpiBVAqSkTYt0AaDIKLm77t0hO%2Bkr9Vm1oEfFone4fnY0Ilyfij%2FIeOu4mQLjKmizzFJ1IUZOD9gzhEHz3BAqID5GnE5I2v9Hreh1C0OvvDunWksp%2FeK1Iwb4UuuMoQq689AgV7NezElYPhSUHRZef6zadHn2RkYXUKdyd9lQav5UKgnxfIVNYJrKDKg%2FIXwU3rDsMmyORk9Op2oNB2FSoop06c6W21jUHSQwu9rEvgY6pgFtJ%2B%2BI75Q%2FXMj3TS9YfmNyPqWyUrSr%2B%2FFP4m8bcGAGdiIvEY2oTnBeZPedGSljGno2j6GSEnRolPNTCVcNVkAUl0cfNFChkP30XUpW4mCGyIXUvWLQ2UvdI088lPzdys8OEknCWOf%2FMWaeDul1Jb7nwkOTQf8dPVwOYzQBxWXwZTpuMjniQ%2F4wyMb%2BoOMXWFJc6gmm1y9KiEnFjv0USIs1VFhieShn&X-Amz-Signature=d0a633d2d039cff5dd11b635aa0ab4aec42337dbb5f1efe9990ac973dcbea2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
