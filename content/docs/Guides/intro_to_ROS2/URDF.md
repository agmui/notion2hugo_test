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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECW276V%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDILwr2oxc79eS9W2%2FzoomP7ukQp0vjOj6FtXEh1NwAJAiBbzpyDUIcmlAchHGu2ab0QRtB3yC9f047uWixwtsO%2FISqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHw%2FyiHKO1LSE6lg3KtwDx1VQyzCCaIt%2FyW0cmBEWralZXyjlUa%2F8cI4XJYDCgq80%2FyqmlHGA874mSkfOs4yQzL1PDjWP6WMWIMJ%2F3ZqKtscOkz4BAkaG8iIhGSLBperl0NCJAgwZAutguO5hr5w997tsFaGgDlXmjVcX14nQqnhHzxgAY6oyec7sVUPcQh2aUHEZOO47WeQXX4Nmb8G7r6oNwMEfsr6OxonPa07OW9ihWMM6qvlCZc4YDR%2BIj5j9rSvpesfgeVHWop2FT%2BpvT2r7jDPxSR%2FSlLtIXrLtur%2B%2B%2BOoNjh%2FHmAXqDHGDxuc16hUat3H0a71DVmH567sdw1DuhAsrfZTeDSM%2Fr3TZvdT3JPPsmiwOnWtTwaoikaIWEl8SW4qE9xsRYE18%2FV2CFgFxAY%2B0lpEhU04RBYWIuG6vQzcMvrKK4yMp92w2IUTVLgNGlgQg6UivMZnXQG5Tn0Rh8DULX74me8HRUHdSsbw%2F0VwxhE%2F7PgEuNHsZWvbO99Xe9MJfcBhhC9Ip7XsbzcOn7PJrqk41tLe36oW35aB2x8YT9zTp6pTJXaNwvMOSfehNh0ouetTqYRseny2QOu%2FyTLOYgzCZsXtKffbOyr0XeOQ7GehxpPA8RgI1Ghr98dJ59ldaulsM4dswyO34vAY6pgEBVOv1LJjytsZP35j0EHbuJhZxnCQENokUyG4S1pA3A51XFMnzGMFRiEon1DW62X5EL85N2Oh9KHKzNfxV0S12BEZuKzqy1F3jhNGs5GPK4bX6QA8v5AI1v2%2FgVB%2BpjOVG9hcPPwJQGGDowX2Ukf1VgUYBT2nwlyGkG%2FxK2%2FoP6QraTc8RRIzUiNuHNzcuI7v2UrMB5kYFtxpmZF5DPOj4Z5Xh0Yse&X-Amz-Signature=1119f00258e85b7c300b3c54107d583621b5c5edcd9caf45ec36c8022e91e046&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECW276V%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDILwr2oxc79eS9W2%2FzoomP7ukQp0vjOj6FtXEh1NwAJAiBbzpyDUIcmlAchHGu2ab0QRtB3yC9f047uWixwtsO%2FISqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHw%2FyiHKO1LSE6lg3KtwDx1VQyzCCaIt%2FyW0cmBEWralZXyjlUa%2F8cI4XJYDCgq80%2FyqmlHGA874mSkfOs4yQzL1PDjWP6WMWIMJ%2F3ZqKtscOkz4BAkaG8iIhGSLBperl0NCJAgwZAutguO5hr5w997tsFaGgDlXmjVcX14nQqnhHzxgAY6oyec7sVUPcQh2aUHEZOO47WeQXX4Nmb8G7r6oNwMEfsr6OxonPa07OW9ihWMM6qvlCZc4YDR%2BIj5j9rSvpesfgeVHWop2FT%2BpvT2r7jDPxSR%2FSlLtIXrLtur%2B%2B%2BOoNjh%2FHmAXqDHGDxuc16hUat3H0a71DVmH567sdw1DuhAsrfZTeDSM%2Fr3TZvdT3JPPsmiwOnWtTwaoikaIWEl8SW4qE9xsRYE18%2FV2CFgFxAY%2B0lpEhU04RBYWIuG6vQzcMvrKK4yMp92w2IUTVLgNGlgQg6UivMZnXQG5Tn0Rh8DULX74me8HRUHdSsbw%2F0VwxhE%2F7PgEuNHsZWvbO99Xe9MJfcBhhC9Ip7XsbzcOn7PJrqk41tLe36oW35aB2x8YT9zTp6pTJXaNwvMOSfehNh0ouetTqYRseny2QOu%2FyTLOYgzCZsXtKffbOyr0XeOQ7GehxpPA8RgI1Ghr98dJ59ldaulsM4dswyO34vAY6pgEBVOv1LJjytsZP35j0EHbuJhZxnCQENokUyG4S1pA3A51XFMnzGMFRiEon1DW62X5EL85N2Oh9KHKzNfxV0S12BEZuKzqy1F3jhNGs5GPK4bX6QA8v5AI1v2%2FgVB%2BpjOVG9hcPPwJQGGDowX2Ukf1VgUYBT2nwlyGkG%2FxK2%2FoP6QraTc8RRIzUiNuHNzcuI7v2UrMB5kYFtxpmZF5DPOj4Z5Xh0Yse&X-Amz-Signature=2c5ac5b3e3510e42e6aed932c6b8489efd7d128a39d20e22e77bb276ec6a090f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
