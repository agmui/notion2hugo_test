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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5BKGC6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2BsAWaDEBX9iSOeslAuNr76oP3ArbynB2GR%2F59MqS%2FQIgXjR8Ie3kUiXhhGfltxe3%2FeM7U8Pg35p7BbOfvrM4UqQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJnkAt8DI4Edry%2Fw5yrcA1NgXWQF3ckJGlpXesCR77cd2P2Bq0isXrvWdJ9Bdou5zEDN1wIDIxkbpHJKmHYChOEo6v9%2B%2BkSM2KZeSN2vzkXY4zwTeQqqCHpp2XxBalYP0fbTEMne4QiSRwMi3xpIiww9Dsg%2FZK0DxSuLanXrjYyJj09qNt%2FJkItpbZl6DQeCzglypAf9i%2BaGdsVzEbq%2FZoc%2B4SfuE9lp7UbGk6ZIF7Tq81dEDsP%2FQpwfWrOxlicKiUkNqqRx6JbfJH5UyK5IoITDiR4jvKoQ%2BbtQJqVGBFjvE%2BaTOa2jYT%2BqBTSMY8jCDODAP7QhXq9LefI7Hy84zfjzUbof37LabL0%2BehrPb0xVFJAgPYeuWSwyKVqUBwI1S9I8laDe2vwGTAbo3QB7dGZlye8hL9U9xCyASOA7z1OxrWnhbD1REKErv4ZslIX1gqEGNJ4YUgGphdbXMWxGo9PZoSwjKMW3ISGaVXLeoZiyn1hP4Dc302tGjPBHesVbbtJiyz6pm%2BrK8NbmIfJ5GXOKN8bEjwykwdYp3J9VvaJOY4FO8ppYR3K9TKPSfo%2FrpG0GMUTLHTJnR%2FyDz3yjB%2FVrk2Ox42xUcDwfHInuPdYNPk18XYWyl%2FoFcRTPz4jrOYO1MyBA3Ok7iIUpMM2ru70GOqUBT8%2B3JtDWe%2FK0LUjbwcyeQ0c6OTgvCLiXA3eXbAvtL5n%2BvaKN9mitY85S%2F2a1oWkxntvr6LXqSS8IeZI3OjlFFgtAjueXiXSAH%2FgWIBR1F6%2FhhA8DIE2Yu2DzcWCc4hacJ6ZGMK%2Bn59SXq%2FLFhWVEeFVDUWfiBvUwMi%2FtBH%2BmKtKezLALsCSwiHOO1hk05xFD%2B9I6fjWicHoO5hAGESqVW3Mp72Yx&X-Amz-Signature=37c440450ebc14d02ee93baad7805b69b4d1ee3503d6f4172e9030560473befd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5BKGC6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2BsAWaDEBX9iSOeslAuNr76oP3ArbynB2GR%2F59MqS%2FQIgXjR8Ie3kUiXhhGfltxe3%2FeM7U8Pg35p7BbOfvrM4UqQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJnkAt8DI4Edry%2Fw5yrcA1NgXWQF3ckJGlpXesCR77cd2P2Bq0isXrvWdJ9Bdou5zEDN1wIDIxkbpHJKmHYChOEo6v9%2B%2BkSM2KZeSN2vzkXY4zwTeQqqCHpp2XxBalYP0fbTEMne4QiSRwMi3xpIiww9Dsg%2FZK0DxSuLanXrjYyJj09qNt%2FJkItpbZl6DQeCzglypAf9i%2BaGdsVzEbq%2FZoc%2B4SfuE9lp7UbGk6ZIF7Tq81dEDsP%2FQpwfWrOxlicKiUkNqqRx6JbfJH5UyK5IoITDiR4jvKoQ%2BbtQJqVGBFjvE%2BaTOa2jYT%2BqBTSMY8jCDODAP7QhXq9LefI7Hy84zfjzUbof37LabL0%2BehrPb0xVFJAgPYeuWSwyKVqUBwI1S9I8laDe2vwGTAbo3QB7dGZlye8hL9U9xCyASOA7z1OxrWnhbD1REKErv4ZslIX1gqEGNJ4YUgGphdbXMWxGo9PZoSwjKMW3ISGaVXLeoZiyn1hP4Dc302tGjPBHesVbbtJiyz6pm%2BrK8NbmIfJ5GXOKN8bEjwykwdYp3J9VvaJOY4FO8ppYR3K9TKPSfo%2FrpG0GMUTLHTJnR%2FyDz3yjB%2FVrk2Ox42xUcDwfHInuPdYNPk18XYWyl%2FoFcRTPz4jrOYO1MyBA3Ok7iIUpMM2ru70GOqUBT8%2B3JtDWe%2FK0LUjbwcyeQ0c6OTgvCLiXA3eXbAvtL5n%2BvaKN9mitY85S%2F2a1oWkxntvr6LXqSS8IeZI3OjlFFgtAjueXiXSAH%2FgWIBR1F6%2FhhA8DIE2Yu2DzcWCc4hacJ6ZGMK%2Bn59SXq%2FLFhWVEeFVDUWfiBvUwMi%2FtBH%2BmKtKezLALsCSwiHOO1hk05xFD%2B9I6fjWicHoO5hAGESqVW3Mp72Yx&X-Amz-Signature=359df9c3abd0b350606f7415b0b5c9d1027fda4337e40ba9ab65ccf331c62ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
