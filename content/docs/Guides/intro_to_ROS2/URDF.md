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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E3JAPME%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAuAbtqvsMArJLpo%2By1ZhvEsijoALTqu37XyQeQ6l4atAiBmadVt7qsgOU2NyQbm24avL51aZmWA5AcaCWNBRgi0ECqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsT83y%2BCiKD8uTNVUKtwD%2BZsTbVax%2FEgR8fJC%2FfjfvQyJ5ceygeg08RuXh%2BaL24IBMJplg%2FzGbSk9ityHMUsSbdE8i0X95ZUSsYnmS2%2BPIkOW4%2FblWBazKWZ2HxZ0EuMP%2B2iKNDJapx8O9zQZKC5sGEemzHOU%2FCV5rwPXPafVFiECT5wLzDeuwUDnuBEC6UNoEqPdXuV%2FZmprEGV7CO09vyf6xwT70lByvoP9B3Uh6jfJ5WrxPId7H4sOdhZfiKKaZcP%2FQNq9qjQp27WjtgSix5ztNUi0aVPoDOWuqztYxWxlfZb9LQLPS3R%2B55ZQmky45maaqPM4SRR50wF5CkchSIDwBDxDhFO9Hy8zkH4ba2DK9PVq6VVbzCI8FmOwijzOC7UOSnill0M0BMuOODKsIKnsBy%2Fg67rNFtPLWNaHHJr3Wx%2FJgZEvOuuv9uf6GsrLSNMLBN0iZuRP6HTWnYVnyyH8%2Fub51qKhkD6W29ydRUk3%2FINMK%2FlcrWSqOkHDFDuEYfz0UxaX%2F%2FWSxJWLpSnR4syZ6dJu516WLkjagjeUAyokQtS1GnuDmWBtCtYVZzyvS6OGcLmtm4mPN%2FX9ipJaaAF2IY47HWdFOKsjHuxQPBskYFYMkEEEQWPv1RxO6rqDtuwV6I6IJQgiV0Iw0OTZvwY6pgEbmS6QtetXjUpnUcNcl0PQQ5H1aTqViJOpNSxadi%2F3uR9QgYSXlHMjbTf7VW5Cu1BSxVtHeiDCLSfRy8%2BrflWnEQutB86nLoBfTZwwlw8OiF0bJhflhra5MOD8QRuQOhhpNMZb6IlIqxfzr9HjS%2BS2vhEHMu5RpAKpCQdrtbIiV88OvCy06%2Fs0UeFHcOlRlINEVOlKCpve7lvAZ3%2BNC26oQEOIbpwt&X-Amz-Signature=e46c9f573cda311dd20c0828b22546778bfb78d0938d75e9864042132ac3c26a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E3JAPME%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAuAbtqvsMArJLpo%2By1ZhvEsijoALTqu37XyQeQ6l4atAiBmadVt7qsgOU2NyQbm24avL51aZmWA5AcaCWNBRgi0ECqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsT83y%2BCiKD8uTNVUKtwD%2BZsTbVax%2FEgR8fJC%2FfjfvQyJ5ceygeg08RuXh%2BaL24IBMJplg%2FzGbSk9ityHMUsSbdE8i0X95ZUSsYnmS2%2BPIkOW4%2FblWBazKWZ2HxZ0EuMP%2B2iKNDJapx8O9zQZKC5sGEemzHOU%2FCV5rwPXPafVFiECT5wLzDeuwUDnuBEC6UNoEqPdXuV%2FZmprEGV7CO09vyf6xwT70lByvoP9B3Uh6jfJ5WrxPId7H4sOdhZfiKKaZcP%2FQNq9qjQp27WjtgSix5ztNUi0aVPoDOWuqztYxWxlfZb9LQLPS3R%2B55ZQmky45maaqPM4SRR50wF5CkchSIDwBDxDhFO9Hy8zkH4ba2DK9PVq6VVbzCI8FmOwijzOC7UOSnill0M0BMuOODKsIKnsBy%2Fg67rNFtPLWNaHHJr3Wx%2FJgZEvOuuv9uf6GsrLSNMLBN0iZuRP6HTWnYVnyyH8%2Fub51qKhkD6W29ydRUk3%2FINMK%2FlcrWSqOkHDFDuEYfz0UxaX%2F%2FWSxJWLpSnR4syZ6dJu516WLkjagjeUAyokQtS1GnuDmWBtCtYVZzyvS6OGcLmtm4mPN%2FX9ipJaaAF2IY47HWdFOKsjHuxQPBskYFYMkEEEQWPv1RxO6rqDtuwV6I6IJQgiV0Iw0OTZvwY6pgEbmS6QtetXjUpnUcNcl0PQQ5H1aTqViJOpNSxadi%2F3uR9QgYSXlHMjbTf7VW5Cu1BSxVtHeiDCLSfRy8%2BrflWnEQutB86nLoBfTZwwlw8OiF0bJhflhra5MOD8QRuQOhhpNMZb6IlIqxfzr9HjS%2BS2vhEHMu5RpAKpCQdrtbIiV88OvCy06%2Fs0UeFHcOlRlINEVOlKCpve7lvAZ3%2BNC26oQEOIbpwt&X-Amz-Signature=4a30dba44e8f26546b5b9150192982a53f1e77a65f70e281fcb14b8dbac01f08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
