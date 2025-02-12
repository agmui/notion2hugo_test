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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB46533N%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZptqCcRXwfWBfgZugT9BGMtkiM6NDRPConhWv5konJgIhAIF8sJ%2BJsuMFlV%2FUp9%2FgbcTwJaVD3vZxh%2BeK9YCH1xsdKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B11tVUa35vYxwgoMq3AOLtaBoirVAa0XqxBr63%2FemVvOSrmigsujStcZg1zYXuRav2riqoR%2B3S7BkoWI5DZIQzVkzW5jGepKxaCkdsrnOy0Q%2FGcc6CYCWZmRUf1CNOdepUJ6O7nAQEhZYtFRUS9FUcIPDzia7JZYcgzpZTEmMWchAyaOgPzDn32IT7lemFSFbkUWDYKJdIRHEmSVLZLTnGHSfjNpBfJvF9nhUbzGVuGqUBB6bvnSiK1oN2Mr9ELEGNLRHb0xD%2BppLto1g1MSBnRbQ8SMsF7ftS8fMbkS3zn42%2Ffsd%2B9E%2FDk2LPgIRSioU2pnZeX%2BfOlQe6oyT3H6zAsBBCAk9vBhbS1%2Bc9GusP9kRj18WXovrDgga8FY0bue4606Fb2G4P9KCV%2Bzar7zlAoMusf%2BSdPjHjtAbHwkNU0cY0YsNBbKm5uHLxLCq4CjEOqJxgr4N%2Bgvp46%2FkNjuyC%2BhY%2BTzRe295BAPMHIxzMUmBdHMvgUBUL%2Bvw%2FghYQJklWvjKXh%2FK0yk5yX7iJBNgyc9vcpCxkA1vwYSwQE3zqVFko87N5q6ZQuCxm%2BffzmJkOcznQ8vurcLC4wA9NoLRz2V5cBHiVk%2Fa%2F1EIXAMNcQ5TCQFSOVwlnCaBp7tvwz9J8ofqTEEKTlnwUjCYqbK9BjqkAbvYkOaReCxdKzTxL%2BXye8Kkd9RROQh65SB%2FdD53w%2FdcqiJeK4BbGXTFqTSXuz5ua5Eph8VXT7U9udwJpK4J7%2Bsp86M65UGYRTo0kzT08pj52SjpVvNWAyci0XQ4sraVVzIE%2BrIyQ47etdVaq6%2BYLuCVeI%2BX1WMML%2BWDBneW6PejrJzBfzsRJ8wP0Ar1mkwAYB3cApNK3xMrayOvfAMPX2JchNAY&X-Amz-Signature=385529f6d79a2b44681cc4a41aaba8b989a4b975b33112306112c94d6f21b271&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB46533N%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZptqCcRXwfWBfgZugT9BGMtkiM6NDRPConhWv5konJgIhAIF8sJ%2BJsuMFlV%2FUp9%2FgbcTwJaVD3vZxh%2BeK9YCH1xsdKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B11tVUa35vYxwgoMq3AOLtaBoirVAa0XqxBr63%2FemVvOSrmigsujStcZg1zYXuRav2riqoR%2B3S7BkoWI5DZIQzVkzW5jGepKxaCkdsrnOy0Q%2FGcc6CYCWZmRUf1CNOdepUJ6O7nAQEhZYtFRUS9FUcIPDzia7JZYcgzpZTEmMWchAyaOgPzDn32IT7lemFSFbkUWDYKJdIRHEmSVLZLTnGHSfjNpBfJvF9nhUbzGVuGqUBB6bvnSiK1oN2Mr9ELEGNLRHb0xD%2BppLto1g1MSBnRbQ8SMsF7ftS8fMbkS3zn42%2Ffsd%2B9E%2FDk2LPgIRSioU2pnZeX%2BfOlQe6oyT3H6zAsBBCAk9vBhbS1%2Bc9GusP9kRj18WXovrDgga8FY0bue4606Fb2G4P9KCV%2Bzar7zlAoMusf%2BSdPjHjtAbHwkNU0cY0YsNBbKm5uHLxLCq4CjEOqJxgr4N%2Bgvp46%2FkNjuyC%2BhY%2BTzRe295BAPMHIxzMUmBdHMvgUBUL%2Bvw%2FghYQJklWvjKXh%2FK0yk5yX7iJBNgyc9vcpCxkA1vwYSwQE3zqVFko87N5q6ZQuCxm%2BffzmJkOcznQ8vurcLC4wA9NoLRz2V5cBHiVk%2Fa%2F1EIXAMNcQ5TCQFSOVwlnCaBp7tvwz9J8ofqTEEKTlnwUjCYqbK9BjqkAbvYkOaReCxdKzTxL%2BXye8Kkd9RROQh65SB%2FdD53w%2FdcqiJeK4BbGXTFqTSXuz5ua5Eph8VXT7U9udwJpK4J7%2Bsp86M65UGYRTo0kzT08pj52SjpVvNWAyci0XQ4sraVVzIE%2BrIyQ47etdVaq6%2BYLuCVeI%2BX1WMML%2BWDBneW6PejrJzBfzsRJ8wP0Ar1mkwAYB3cApNK3xMrayOvfAMPX2JchNAY&X-Amz-Signature=660abf4e66c8ad55f70028d83c1ae2bcf7cd2aa32241db90c3168659333ad7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
