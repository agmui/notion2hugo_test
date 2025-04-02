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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KGF4P3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDIw8TcejpM5CvW1I4ktgkz18s5VkhoxZj0dgLX%2Bjf9AAiALUx8xQEVf4roYoawgjCAcI0bnWaHwSpHVQBYlUOGzCCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilELMVVMCw62ErUWKtwDKnT6V5G2T8N9aKa%2BZ63OaJEBhTgfs4e7FcdgyxTVYwDnjfSAVr7mHqLpw7q1l6EI3vWgrVmMleJZlIF%2FNXw354dToGAkgniTncbd7Uati%2FutinUJveZ2CF4PSRY6Q4wOAGrzuerKxabQ20EGrVqP8KbeX%2FmYYdOGUSpPmE%2FoXrAZRfMj3l2rKBUOvdxLCrBpZkyUbE0rUS286U58giDAehdWyMIIOuLtRRCoCTkckZq4ghFfxiHByR11xmkGnS%2BbaMRqIeXwEo6XWq3iVQBop%2FlRjyLU4m86U5K1kJzgX7CILCOo873BAshH%2FmU%2FVWUpL8%2Br1owBMNsSk8MPJ1BQFIg6ltUakh0PIY%2BW%2FgaI4IKrTzUZHZF6DaXbYeMaxbOZdynQgikfiwNJBJidqV5H2eBsfqsUhikWX5BM6eJws3Q8u2aHJbsqUAkJ7AYLUlIH40fEmkhtzJP7bcrUEZSnzDH6Bi1FtZm%2BIdfpieLwIoDeSQhoWFSqk1lpZFkN6n%2B49fac7RfObIrgHacvUxq0tlPdMR7tYqxzteVJqG84MX7mmMwONvRe%2BzS9uOYk4VUwRZg3FAh52ixwP%2B%2BF84UrfdM6a6nDl5iODBS7d6vBS86JmygLo6p5Pydf9JAw3KW2vwY6pgEyIgtopBUqVgGciZYENpZbx%2BWf%2BMTtxnko5nTAxcxYHb4B0qfOwac6IOBWbriB7cm6nemOiTlog9jARVIYej7G3kcvLrTOSgI6peQuTffaf6ADTJsmhE4SeZfmzWnSIQuG6wC0viP8dSRAUcH%2BqfHmiIpQ%2BpD%2Fmt1KAZD5Qwc60wPSYud0h3kabcjj05agPRmVKNuP1qV6ZIF%2FcPyYnCVVN3rjVf8X&X-Amz-Signature=1239e7a79fe6567c41705de3d1c7c6349d7a6c9642ae17c8237bb004a8b72598&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KGF4P3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDIw8TcejpM5CvW1I4ktgkz18s5VkhoxZj0dgLX%2Bjf9AAiALUx8xQEVf4roYoawgjCAcI0bnWaHwSpHVQBYlUOGzCCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilELMVVMCw62ErUWKtwDKnT6V5G2T8N9aKa%2BZ63OaJEBhTgfs4e7FcdgyxTVYwDnjfSAVr7mHqLpw7q1l6EI3vWgrVmMleJZlIF%2FNXw354dToGAkgniTncbd7Uati%2FutinUJveZ2CF4PSRY6Q4wOAGrzuerKxabQ20EGrVqP8KbeX%2FmYYdOGUSpPmE%2FoXrAZRfMj3l2rKBUOvdxLCrBpZkyUbE0rUS286U58giDAehdWyMIIOuLtRRCoCTkckZq4ghFfxiHByR11xmkGnS%2BbaMRqIeXwEo6XWq3iVQBop%2FlRjyLU4m86U5K1kJzgX7CILCOo873BAshH%2FmU%2FVWUpL8%2Br1owBMNsSk8MPJ1BQFIg6ltUakh0PIY%2BW%2FgaI4IKrTzUZHZF6DaXbYeMaxbOZdynQgikfiwNJBJidqV5H2eBsfqsUhikWX5BM6eJws3Q8u2aHJbsqUAkJ7AYLUlIH40fEmkhtzJP7bcrUEZSnzDH6Bi1FtZm%2BIdfpieLwIoDeSQhoWFSqk1lpZFkN6n%2B49fac7RfObIrgHacvUxq0tlPdMR7tYqxzteVJqG84MX7mmMwONvRe%2BzS9uOYk4VUwRZg3FAh52ixwP%2B%2BF84UrfdM6a6nDl5iODBS7d6vBS86JmygLo6p5Pydf9JAw3KW2vwY6pgEyIgtopBUqVgGciZYENpZbx%2BWf%2BMTtxnko5nTAxcxYHb4B0qfOwac6IOBWbriB7cm6nemOiTlog9jARVIYej7G3kcvLrTOSgI6peQuTffaf6ADTJsmhE4SeZfmzWnSIQuG6wC0viP8dSRAUcH%2BqfHmiIpQ%2BpD%2Fmt1KAZD5Qwc60wPSYud0h3kabcjj05agPRmVKNuP1qV6ZIF%2FcPyYnCVVN3rjVf8X&X-Amz-Signature=2ef4c593dc7a1e695f73d6f96b45c19ec8f798c706d6a0d210f020db3f5a2cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
