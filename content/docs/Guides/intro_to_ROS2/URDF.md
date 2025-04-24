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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323VGBFW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBRitjchXXA3b1t4AfmAfA1PsCUrsATTGO33VDxxWDxwIgIVeSBHE8YeaK0YL8s8KrU2cQsL07pzJmbJuNAiH2lbcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJu0dUUY4T21CGjfiCrcAyVon1FQhpc9%2BiylcWhmqOIw22mWoNk5j54bbt27%2F5HA%2Fby2xan3AO0jyLJYvN4ac0dFKspMWvHN86WAHErHKo6OJYrWCgj5gLRS3NLUgF1f4LiNIzQxWYL0WvF5cc%2FxWogJYFjKezAibEBmcgfyhdez4iXtfjfALuN5xUaHi0NLIL8IbIAHMD0w4oeUseLNSS42USx67dxOk15zNz87UDJ3pBLkzbOXsVrPBVhnE6EmaPFd4iPazzRDwQahp8O%2FVLAp8nCPN6S2AlVBgRILdTQ%2FVNHGbQo9pelIiF4hejlsi6fhzwhEX5IabRvWt8tQvgx0P7mdHzEIVBQBu%2F4%2B7rnd8dYZo0BVkUpcdVxzPzY%2FMok0yR4bnoTU%2BromuFnKcmudwPhp7JBOdMV4gBOulZlLjMn%2BXvNUQYyiGSPbsv7372iPCnizJSIYzhankrFjbtHVWu4FOVpASzY%2FsGyPlRwKICg2YwhBOJKc0n8JaKeyX%2FsH8FlHKT%2Bxc%2FzWPl8lUv1BYjDVO1NjabWVlyNnaSrEbcYI0Hg4pNRBZrzCH5xAjH8bQquFcD1SyreReLy1XgPQZve8mhaMzZ3ooxVCBUgRlaJhV7t0TSjC0%2B61yPCETEmyfuwPkobZx2HoMMrxqcAGOqUBp9b8422tIDSlYM29m4WpHWVYf74cKqyHouvz6KlkJxqEjh5d2oVwWeWqbeaog3D52h3oDD4mUi%2Bg%2B%2FECzY%2Fvmouo5w1ipkAtfoYtfsouvIAGADaONDk8kwnWDLy%2FS9D%2F%2Fu43i2%2BBtnLsy22zKoneeV6Du%2B5yiVktHP3Uv0yc2bEcqUMuCThgROcZOP7sBqvrz%2BgQHbBoTP9FkT4H6Ba8dxJ30S%2Fm&X-Amz-Signature=1dbe9c66815ec05385e3665deda65fc4b5b9a5f689e2ad0d91dd94b411210fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323VGBFW%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBRitjchXXA3b1t4AfmAfA1PsCUrsATTGO33VDxxWDxwIgIVeSBHE8YeaK0YL8s8KrU2cQsL07pzJmbJuNAiH2lbcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJu0dUUY4T21CGjfiCrcAyVon1FQhpc9%2BiylcWhmqOIw22mWoNk5j54bbt27%2F5HA%2Fby2xan3AO0jyLJYvN4ac0dFKspMWvHN86WAHErHKo6OJYrWCgj5gLRS3NLUgF1f4LiNIzQxWYL0WvF5cc%2FxWogJYFjKezAibEBmcgfyhdez4iXtfjfALuN5xUaHi0NLIL8IbIAHMD0w4oeUseLNSS42USx67dxOk15zNz87UDJ3pBLkzbOXsVrPBVhnE6EmaPFd4iPazzRDwQahp8O%2FVLAp8nCPN6S2AlVBgRILdTQ%2FVNHGbQo9pelIiF4hejlsi6fhzwhEX5IabRvWt8tQvgx0P7mdHzEIVBQBu%2F4%2B7rnd8dYZo0BVkUpcdVxzPzY%2FMok0yR4bnoTU%2BromuFnKcmudwPhp7JBOdMV4gBOulZlLjMn%2BXvNUQYyiGSPbsv7372iPCnizJSIYzhankrFjbtHVWu4FOVpASzY%2FsGyPlRwKICg2YwhBOJKc0n8JaKeyX%2FsH8FlHKT%2Bxc%2FzWPl8lUv1BYjDVO1NjabWVlyNnaSrEbcYI0Hg4pNRBZrzCH5xAjH8bQquFcD1SyreReLy1XgPQZve8mhaMzZ3ooxVCBUgRlaJhV7t0TSjC0%2B61yPCETEmyfuwPkobZx2HoMMrxqcAGOqUBp9b8422tIDSlYM29m4WpHWVYf74cKqyHouvz6KlkJxqEjh5d2oVwWeWqbeaog3D52h3oDD4mUi%2Bg%2B%2FECzY%2Fvmouo5w1ipkAtfoYtfsouvIAGADaONDk8kwnWDLy%2FS9D%2F%2Fu43i2%2BBtnLsy22zKoneeV6Du%2B5yiVktHP3Uv0yc2bEcqUMuCThgROcZOP7sBqvrz%2BgQHbBoTP9FkT4H6Ba8dxJ30S%2Fm&X-Amz-Signature=42f1eb5e353fe1c1d362d9a27475ee383c8e05f3387a47fdd9c2a5741e68d2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
