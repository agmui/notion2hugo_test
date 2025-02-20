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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSUE7QO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHytgFkILMOpAXjYU1%2B6gMM679gKYUCcKbVAwwBRlffwCIQCC7hGDsTA3WHOtnQshS%2FlE%2FbSqu1EwJK86%2Bma%2BWAL2YCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFDFLQl4JKqqYPlJVKtwDmmOa1bo5eY0xPCG8lbTvQEQyQfKPCTpS2UdLnN32hP8PP7%2FCVquUtUjvBgoxbKe%2B%2F6KN%2FhhD5XlCtLOTRH%2By86s09g6qsRqcBIZEwBb3u8CJuPHfRGtTj0BHiJbCglMJIkkgrdfGnHX7kwRGTE9uWNrkOpqwzh8kNCobeuI4NapMWF62K5ypKa%2Fb%2FrNCxXv7XU2nkj7JkHoCOTsDIDWQRO2b0VBTHQO3Mwzd%2Bl6Yf5gjXAMhQKA2ovHmQS13dwFyLa0zSsUfE4LQHysgfwXZqMCTqbPXrQftM5Tl3FvRFK9mRKjO%2FtfvCepxR7EV8zCo5MuF63RCX2Eof7yH6TcGvkNbcNo8ohaQRz%2BCc0yLc8kPLtoOrE5V%2FipNaKHaYTXV769TjXlUVXYSsoP9tGt59uQAIqHnoPZSocsGFIxWTYgBKSz1BKrashKqUrgWilTpaA0aMxsdPFvBmcgnmmuQ%2BppzTapc83QdKa%2FseA0vs0fNQDsDeyU6%2BhaUCGACJRt3nG1rEJhYF9Ub04V68v68nkTLgXueG%2Bk4JfXGAbjhIGgDypTAkWOYyMnP0rDGu4pk2DfZZ%2BXo6iSBjHRV8sNshn172JGlKnc8PfJ8qRoKUhZQi%2BLYVUlszc8N5lQwnLLdvQY6pgFVXq1OLPeOVykYFZL67tmM6yVFZ1rk2PtlaGbQMDsyN%2FEeeyLQ6WS0lXkVadxkVacGhl2TKF359aoFrstcJDVfSy%2BWGR0GIp6tcjwnc%2FiANFW8FvnsItgQNmS%2BSLYFd2hddJ0cPWQLRjP0m%2B3ZcxvJHcRVzMXNk3mdPOGdtTw3R3XIQMUAujy%2Btj%2BGWdzMDVHYBuTOhkqhDakG%2B5v2NQvM3tcc83I%2F&X-Amz-Signature=f3f8742c9927f9a2de231253d8c1148b640e4d9b2851a49f37c7e00e3356d4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSUE7QO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHytgFkILMOpAXjYU1%2B6gMM679gKYUCcKbVAwwBRlffwCIQCC7hGDsTA3WHOtnQshS%2FlE%2FbSqu1EwJK86%2Bma%2BWAL2YCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFDFLQl4JKqqYPlJVKtwDmmOa1bo5eY0xPCG8lbTvQEQyQfKPCTpS2UdLnN32hP8PP7%2FCVquUtUjvBgoxbKe%2B%2F6KN%2FhhD5XlCtLOTRH%2By86s09g6qsRqcBIZEwBb3u8CJuPHfRGtTj0BHiJbCglMJIkkgrdfGnHX7kwRGTE9uWNrkOpqwzh8kNCobeuI4NapMWF62K5ypKa%2Fb%2FrNCxXv7XU2nkj7JkHoCOTsDIDWQRO2b0VBTHQO3Mwzd%2Bl6Yf5gjXAMhQKA2ovHmQS13dwFyLa0zSsUfE4LQHysgfwXZqMCTqbPXrQftM5Tl3FvRFK9mRKjO%2FtfvCepxR7EV8zCo5MuF63RCX2Eof7yH6TcGvkNbcNo8ohaQRz%2BCc0yLc8kPLtoOrE5V%2FipNaKHaYTXV769TjXlUVXYSsoP9tGt59uQAIqHnoPZSocsGFIxWTYgBKSz1BKrashKqUrgWilTpaA0aMxsdPFvBmcgnmmuQ%2BppzTapc83QdKa%2FseA0vs0fNQDsDeyU6%2BhaUCGACJRt3nG1rEJhYF9Ub04V68v68nkTLgXueG%2Bk4JfXGAbjhIGgDypTAkWOYyMnP0rDGu4pk2DfZZ%2BXo6iSBjHRV8sNshn172JGlKnc8PfJ8qRoKUhZQi%2BLYVUlszc8N5lQwnLLdvQY6pgFVXq1OLPeOVykYFZL67tmM6yVFZ1rk2PtlaGbQMDsyN%2FEeeyLQ6WS0lXkVadxkVacGhl2TKF359aoFrstcJDVfSy%2BWGR0GIp6tcjwnc%2FiANFW8FvnsItgQNmS%2BSLYFd2hddJ0cPWQLRjP0m%2B3ZcxvJHcRVzMXNk3mdPOGdtTw3R3XIQMUAujy%2Btj%2BGWdzMDVHYBuTOhkqhDakG%2B5v2NQvM3tcc83I%2F&X-Amz-Signature=626229ca56366190d9161cfc0cf803ec954ca22af0e918071e91fdf8f51fa2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
