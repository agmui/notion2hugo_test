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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Y5ZB2B%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWU3dBtkLoDMNsPhHfKiGxWg0g0j3qsnCqa7aj8a22MAiAcMqV4k5PeftYnB3QmUoOIczmOiijidcVO406A5zcA%2FyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpjtS7moFCjKRw70JKtwDXVqlS7zMAlPDi842jJVwfl%2BnyrepYxqdv5gFuorUqXkjhVU0kcezMSNr5raxFZg21usxgGCxa9VG12pmngruFS5oQRWmev6FzZxQIXO67S7gOF5HGmK9gIaD0Rwyr2awcB3czfKJfzJ6Fyh5jPK%2FqQlIAu05DafMDBKwjj32y1%2BPnJFpukAPc%2FSfv5hxljzucQ8%2FDmCkM0IIoxHggWnhROb9worGkXAov5utKf9nVhRzHa8omJtiCi2gTMY7ai8UB29ugfWGoJsv2kc9ul2Jivd7WtMtKyrKnDzeY%2FjtY2nQU3y30BUcwC9v5omamsUFhnMUv%2FrNiTVa8syAGLf1cLKnmtarPcc5Cqt44YTaIl0OoDeKp0mTKM5TmSgFyIc4HbtodnmkzReHeMuaU0Syl8n6ODb4ppa%2B1aPG%2BeSnx6pMGaElOnhAbTHFCI07cwo%2FKzBqjHIjRxW5%2BhP9vsJJAsZzidfDjkLYpL2sqTBJfqoRYsUxuhwDA5dT0%2B5fq1Q6N90YQ2AcUp6gi9Npuhhk8JZ3Z4gaJAYQYDaxhmO4SjVLmQYNa87j6HFlg6q28F8%2FFAjEYHnaKyvTwTi6nG3B8fWY36rf8pxjME%2Fi9l2bV5PVVqPiUVPVW4AyBCAwm%2BLvvAY6pgG%2FqtQLR4Yd7%2BZ4iDF1lNn7ro0Mtmc8LFxtjMsSwSLoUp5u2vbZIytMWfDNWiEmD1Bi8UDpvxUftv0kV8QxHjadqJtT7M1VzXsN4vs07lfbnDz7sjeTBPkluMuEXcsypxX84F8Kzp%2BdyzxuAYJKbeRA0dz6HmvG368y90lO%2BZHHg95bQNygsLZ04k0G9yKpsRm2iwdlSUHTjvwSIlzgwpaO4ryyHOzJ&X-Amz-Signature=4a1e8e879a9bc698314815ee71383fb8fae1b5048cb11a4c37ab41217585e617&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Y5ZB2B%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWU3dBtkLoDMNsPhHfKiGxWg0g0j3qsnCqa7aj8a22MAiAcMqV4k5PeftYnB3QmUoOIczmOiijidcVO406A5zcA%2FyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpjtS7moFCjKRw70JKtwDXVqlS7zMAlPDi842jJVwfl%2BnyrepYxqdv5gFuorUqXkjhVU0kcezMSNr5raxFZg21usxgGCxa9VG12pmngruFS5oQRWmev6FzZxQIXO67S7gOF5HGmK9gIaD0Rwyr2awcB3czfKJfzJ6Fyh5jPK%2FqQlIAu05DafMDBKwjj32y1%2BPnJFpukAPc%2FSfv5hxljzucQ8%2FDmCkM0IIoxHggWnhROb9worGkXAov5utKf9nVhRzHa8omJtiCi2gTMY7ai8UB29ugfWGoJsv2kc9ul2Jivd7WtMtKyrKnDzeY%2FjtY2nQU3y30BUcwC9v5omamsUFhnMUv%2FrNiTVa8syAGLf1cLKnmtarPcc5Cqt44YTaIl0OoDeKp0mTKM5TmSgFyIc4HbtodnmkzReHeMuaU0Syl8n6ODb4ppa%2B1aPG%2BeSnx6pMGaElOnhAbTHFCI07cwo%2FKzBqjHIjRxW5%2BhP9vsJJAsZzidfDjkLYpL2sqTBJfqoRYsUxuhwDA5dT0%2B5fq1Q6N90YQ2AcUp6gi9Npuhhk8JZ3Z4gaJAYQYDaxhmO4SjVLmQYNa87j6HFlg6q28F8%2FFAjEYHnaKyvTwTi6nG3B8fWY36rf8pxjME%2Fi9l2bV5PVVqPiUVPVW4AyBCAwm%2BLvvAY6pgG%2FqtQLR4Yd7%2BZ4iDF1lNn7ro0Mtmc8LFxtjMsSwSLoUp5u2vbZIytMWfDNWiEmD1Bi8UDpvxUftv0kV8QxHjadqJtT7M1VzXsN4vs07lfbnDz7sjeTBPkluMuEXcsypxX84F8Kzp%2BdyzxuAYJKbeRA0dz6HmvG368y90lO%2BZHHg95bQNygsLZ04k0G9yKpsRm2iwdlSUHTjvwSIlzgwpaO4ryyHOzJ&X-Amz-Signature=9daf082c3110375d4b554b10a5108a67c3f7d9e11b3ffd578622d140f5d95c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
