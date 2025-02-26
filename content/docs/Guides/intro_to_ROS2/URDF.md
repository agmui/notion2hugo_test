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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7UTUSF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICwbrKgDho4t3UuCFgAA%2BupuwMN8D1o17Lj3v1l%2FFtz8AiAiLt8zA51cmH9v5ZPSu6K0bWQ1dR7V49I%2BMsWYUPY7Dyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMLZqL0lf0n4nBUKSVKtwD7xO0qjC7vxo9230MrIb2uK%2BKnIwtHHoyNPLGlcqoaEXx9pvz6Rr5Hz1pCSMUDgXOxzGp3kCYTSEFPG2cWAMVMXOchzXz4cbqGjYqAhLZW4F%2BlaxlGjMIla8t9BtCL%2BELN%2FikqaX2MQ9LrI58qDsy3zlJqIPr0E20IWimG%2B2wmG9r%2FHMyStr6MaRuYNhfNIHu%2B8zerIMnqMDsSFh8f%2BBV1KWakeP7PuHaeQ%2F22GmcFec6jWkcPs22zNJs09yfxoTUPZ7in4K18XBrJakr4e4Ai%2FtGwV9wJvXcTgIwbZEUVgy3aEBnPq9%2FfjwFqwvnbH4%2Fj%2F4qO%2FaWOuRUHce%2BQEG05o%2BHjqkiqvUzAvIyOZGowM5%2FY9qfWpA2IuF5W4%2Bhx%2Bzz%2FD5WIxEC3thYHS9PBboXhlFBYGASYMNZ%2BIhVHYJFJDspYzgECCcW99lrfVon7GFx920kmtm%2FYm2ty0p4WlzIC6pJwS6%2BdO9ecjlgm24Oq%2BVSJE6GUPZ0cB2k6ZADilMD6nZ%2BuINVnG13aByqryj6r7S4mJUPvol24W1MPlt%2BvZ4IrRBZPD1%2B55FygjylQoiWrqUIBQmm3Bk5%2FDdhxIsI9v2IkSb8phUuzc2NB%2BLVeV45PyTmfo5b%2B8eNmaUw3b%2F7vQY6pgHza%2Bg7uyQbiMfJwVPV0rTWK8n3oYjFnOsceWla92DTAvvMiZOroV4%2B1%2FjA7WHudEiQEYRTf4F05mbSVsv%2B%2FWqdPKb%2BC%2FZ01NpkNVQbcaMhrsOM%2FDKYyTSbCfuoL1rcNhJokqoscvjudQctWaHJQZqcxCeYcS3bM6mtKzIo%2FCBxpFSXB%2BXWD0Tc8PqYy20vdC0eQvZW%2B6YlkwTDBpQ2Qcy2KG%2BRTLE9&X-Amz-Signature=a9b9eb49f0f474369271eb5b7f882765f7820245c4a187eba3a36ef40567d640&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH7UTUSF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICwbrKgDho4t3UuCFgAA%2BupuwMN8D1o17Lj3v1l%2FFtz8AiAiLt8zA51cmH9v5ZPSu6K0bWQ1dR7V49I%2BMsWYUPY7Dyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMLZqL0lf0n4nBUKSVKtwD7xO0qjC7vxo9230MrIb2uK%2BKnIwtHHoyNPLGlcqoaEXx9pvz6Rr5Hz1pCSMUDgXOxzGp3kCYTSEFPG2cWAMVMXOchzXz4cbqGjYqAhLZW4F%2BlaxlGjMIla8t9BtCL%2BELN%2FikqaX2MQ9LrI58qDsy3zlJqIPr0E20IWimG%2B2wmG9r%2FHMyStr6MaRuYNhfNIHu%2B8zerIMnqMDsSFh8f%2BBV1KWakeP7PuHaeQ%2F22GmcFec6jWkcPs22zNJs09yfxoTUPZ7in4K18XBrJakr4e4Ai%2FtGwV9wJvXcTgIwbZEUVgy3aEBnPq9%2FfjwFqwvnbH4%2Fj%2F4qO%2FaWOuRUHce%2BQEG05o%2BHjqkiqvUzAvIyOZGowM5%2FY9qfWpA2IuF5W4%2Bhx%2Bzz%2FD5WIxEC3thYHS9PBboXhlFBYGASYMNZ%2BIhVHYJFJDspYzgECCcW99lrfVon7GFx920kmtm%2FYm2ty0p4WlzIC6pJwS6%2BdO9ecjlgm24Oq%2BVSJE6GUPZ0cB2k6ZADilMD6nZ%2BuINVnG13aByqryj6r7S4mJUPvol24W1MPlt%2BvZ4IrRBZPD1%2B55FygjylQoiWrqUIBQmm3Bk5%2FDdhxIsI9v2IkSb8phUuzc2NB%2BLVeV45PyTmfo5b%2B8eNmaUw3b%2F7vQY6pgHza%2Bg7uyQbiMfJwVPV0rTWK8n3oYjFnOsceWla92DTAvvMiZOroV4%2B1%2FjA7WHudEiQEYRTf4F05mbSVsv%2B%2FWqdPKb%2BC%2FZ01NpkNVQbcaMhrsOM%2FDKYyTSbCfuoL1rcNhJokqoscvjudQctWaHJQZqcxCeYcS3bM6mtKzIo%2FCBxpFSXB%2BXWD0Tc8PqYy20vdC0eQvZW%2B6YlkwTDBpQ2Qcy2KG%2BRTLE9&X-Amz-Signature=84b6d118dd9086fd20a1f35823702bcd5b23c312a1d176d42b2c51212b24446e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
