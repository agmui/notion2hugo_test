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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7Y4RC6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICyiApkS6ZSDOX4Ya75qC4fS%2FDvn7uH6GiSjk95Xsc3QAiAcOAY901VU9uH0YA5ZL1dSJ0hJY8LwRfOTdaXCD8ljiCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMubrtgTnq27e7fJmVKtwDFbquvpYwPz%2FKppUkvaP8YMfQr4EvglmTxL3grbXL12yfTgP1ARNyzE5he5J9X1Mwcl7kho%2FJH%2FKPWGyx0RmbuCbHz4aXGS1Nw4fZyh17cT79Lzt%2FgO%2B0nfuD1MR4HrgHxgDLTilXK2TqGYEeIDAYFdm8Fdslc4u6T4M8Xs%2FO5QSvot5DbuP%2FuUFtJ0%2BRu0JsYgLl6d%2F3t%2BUgNN5iplx0zJ0oivHxaUWOCLC9EVcdJRz9hZyzHA6qmA30wsJFVqXi%2FGX94hPlmzAG523C40CxG9PC1isu3lu%2BvHojzYaaopb0bvfkoR5GkIYbAbveHqCBC%2F6FCFr3YsbpaGBh1ZV%2Fk%2Ft%2BxWD2mtKYa7dkHMC6YUodThgW4qGOh%2BbI%2BDk8IDZCy9Z6%2FRFFfH5Sl5%2BPm2Atj2BfKEFxRethv7zZaCZ2mcoTgOEG0KsO3aVi9RpBqhuGWJEYIL8FbeHAZ%2BNyyR0nn4khVniaMccrw8HNgqDJBjqebClTMfN6lQTZca6gmmnoBVOWgcwNSogFGhrSYzA7rXp60Xa1nZRwxqBtrjwSR%2FwBObrjt5s4tXDgBapfT5hKhJMb9NFp1SMjLmuIGZRAaCbOQEN3ECvRY%2FRwgl3R9E8HvaARyuE51eoAnxgw%2Ft3uwgY6pgG0OtjozrfNfruIyd21t4WBwksAj4PLqH6WvLBOFd%2FDECzzmBGjxSvBDKnYrhAmaj9jHouDQQfBPEppH3bq3awyG84A98M2LgZ7JfxjFCxOz8mf02GpEW7onwlfQ10ocdlIMMw56m2vuybzXJm6TqnNMVdtNbHg6pnheL6ys7WfsYX2YKxccN1gTlrEkhW%2BY6jr6MIsiTep%2BqF%2B%2FdHfOn4gHVs2AYho&X-Amz-Signature=a76341e230871a75bb193f1ddfd8e5bb1f820d56969129dce8446d5ac49a85aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7Y4RC6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICyiApkS6ZSDOX4Ya75qC4fS%2FDvn7uH6GiSjk95Xsc3QAiAcOAY901VU9uH0YA5ZL1dSJ0hJY8LwRfOTdaXCD8ljiCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMubrtgTnq27e7fJmVKtwDFbquvpYwPz%2FKppUkvaP8YMfQr4EvglmTxL3grbXL12yfTgP1ARNyzE5he5J9X1Mwcl7kho%2FJH%2FKPWGyx0RmbuCbHz4aXGS1Nw4fZyh17cT79Lzt%2FgO%2B0nfuD1MR4HrgHxgDLTilXK2TqGYEeIDAYFdm8Fdslc4u6T4M8Xs%2FO5QSvot5DbuP%2FuUFtJ0%2BRu0JsYgLl6d%2F3t%2BUgNN5iplx0zJ0oivHxaUWOCLC9EVcdJRz9hZyzHA6qmA30wsJFVqXi%2FGX94hPlmzAG523C40CxG9PC1isu3lu%2BvHojzYaaopb0bvfkoR5GkIYbAbveHqCBC%2F6FCFr3YsbpaGBh1ZV%2Fk%2Ft%2BxWD2mtKYa7dkHMC6YUodThgW4qGOh%2BbI%2BDk8IDZCy9Z6%2FRFFfH5Sl5%2BPm2Atj2BfKEFxRethv7zZaCZ2mcoTgOEG0KsO3aVi9RpBqhuGWJEYIL8FbeHAZ%2BNyyR0nn4khVniaMccrw8HNgqDJBjqebClTMfN6lQTZca6gmmnoBVOWgcwNSogFGhrSYzA7rXp60Xa1nZRwxqBtrjwSR%2FwBObrjt5s4tXDgBapfT5hKhJMb9NFp1SMjLmuIGZRAaCbOQEN3ECvRY%2FRwgl3R9E8HvaARyuE51eoAnxgw%2Ft3uwgY6pgG0OtjozrfNfruIyd21t4WBwksAj4PLqH6WvLBOFd%2FDECzzmBGjxSvBDKnYrhAmaj9jHouDQQfBPEppH3bq3awyG84A98M2LgZ7JfxjFCxOz8mf02GpEW7onwlfQ10ocdlIMMw56m2vuybzXJm6TqnNMVdtNbHg6pnheL6ys7WfsYX2YKxccN1gTlrEkhW%2BY6jr6MIsiTep%2BqF%2B%2FdHfOn4gHVs2AYho&X-Amz-Signature=f060c954963e239e8b88bb5615ba112aaa017485f848f6aa95788064dbc0ce27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
