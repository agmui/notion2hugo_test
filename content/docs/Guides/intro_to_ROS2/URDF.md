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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSKDU2B%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8UtCHfckpHkjTHaKVMhcLJWmxy7GohKNscPRmNf0V1gIhAJzWFHQFyUqDoNNOrrE7jnJsEOmyLgxAKmqPIZ%2Bou3vmKv8DCDQQABoMNjM3NDIzMTgzODA1IgyMpM2h4AOgChiX5pwq3ANDMemP2xyln00UF6P%2B6qOnuIkh54e6WQAav%2BPErkQ9gJj5AjuqBC1im9ObljphKlmB8E7OBcGhcbBln5nJRcdQQzYsdqCdbe574kbqCKq%2FxhLErYQ%2BDLD4w%2FK%2F1%2B2XiFwFrkdcZLWKbXfZq2RNyowtWOWFLfF6ZOcjShE1DR9MuIlXDoP8L6lKNpjM82NgfUyG3XK00TE48JWzlrghMLCWdJFWTon6N3nCD6k6dCq%2FRqCrvSlJNYOOdGwjJ2XN7hTEJ%2Ba%2F0pOKk%2FLoaH9ZLvRmyXfQJz29893NVmQBabkWcOFHUjwrFhJ0A%2Bgjf0D0xYcSpoT1c65k2wFAtedRcHuj3KG9icWTW78SVsZJ9%2BSGiBxpzTsNZOxn%2BMcitzT8wHtncnevGsitJjTReRbD934QXEd3pIRh%2FStcH6W%2F9Pb9DTlfIvRIzU%2F4zFD9GoHm7sQjG%2FCFsbuQP1i0n%2F5ivhYaMNWOBcmxYHSbzNqtA%2BqSZ4nAclwipZTSkb08ymp3mVWMukU5FF491X6ultO1YwofL1MDg1FcLOAafvrfyty2lqMswHJI6gnppxj0UNRMg%2BmwYoqF5copzgqsTR9LdQUU6v0z2QjWp5vnaaj%2BsSjIQ02cpUmwJYmlDpEK%2FTCT%2FfK9BjqkAZkQjBI8jLc3N6jC0oPpbdhIL05rcSwc%2BFU5WUoHSOZjnwSlzdP6BMSeD58JPWRav5qXxvLfzlQNrtubLiRyOVyWosdx%2FuGKoUTEA%2FR3FzU5DgYkVz6P68ZAqBIy5hGa34WQVsrJR85iIdxeaeW81Det3Q2%2BXakzsm72yueEtc5NqB5GW5FVdKLXiTzKg9mVi8hL0ItW6AkdFfcqTa%2BPl4YgNWbm&X-Amz-Signature=965cec73fe12ed7f0cdf52443a71a6ebfb4acf5cda94f8b84d65461a589cc580&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSKDU2B%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8UtCHfckpHkjTHaKVMhcLJWmxy7GohKNscPRmNf0V1gIhAJzWFHQFyUqDoNNOrrE7jnJsEOmyLgxAKmqPIZ%2Bou3vmKv8DCDQQABoMNjM3NDIzMTgzODA1IgyMpM2h4AOgChiX5pwq3ANDMemP2xyln00UF6P%2B6qOnuIkh54e6WQAav%2BPErkQ9gJj5AjuqBC1im9ObljphKlmB8E7OBcGhcbBln5nJRcdQQzYsdqCdbe574kbqCKq%2FxhLErYQ%2BDLD4w%2FK%2F1%2B2XiFwFrkdcZLWKbXfZq2RNyowtWOWFLfF6ZOcjShE1DR9MuIlXDoP8L6lKNpjM82NgfUyG3XK00TE48JWzlrghMLCWdJFWTon6N3nCD6k6dCq%2FRqCrvSlJNYOOdGwjJ2XN7hTEJ%2Ba%2F0pOKk%2FLoaH9ZLvRmyXfQJz29893NVmQBabkWcOFHUjwrFhJ0A%2Bgjf0D0xYcSpoT1c65k2wFAtedRcHuj3KG9icWTW78SVsZJ9%2BSGiBxpzTsNZOxn%2BMcitzT8wHtncnevGsitJjTReRbD934QXEd3pIRh%2FStcH6W%2F9Pb9DTlfIvRIzU%2F4zFD9GoHm7sQjG%2FCFsbuQP1i0n%2F5ivhYaMNWOBcmxYHSbzNqtA%2BqSZ4nAclwipZTSkb08ymp3mVWMukU5FF491X6ultO1YwofL1MDg1FcLOAafvrfyty2lqMswHJI6gnppxj0UNRMg%2BmwYoqF5copzgqsTR9LdQUU6v0z2QjWp5vnaaj%2BsSjIQ02cpUmwJYmlDpEK%2FTCT%2FfK9BjqkAZkQjBI8jLc3N6jC0oPpbdhIL05rcSwc%2BFU5WUoHSOZjnwSlzdP6BMSeD58JPWRav5qXxvLfzlQNrtubLiRyOVyWosdx%2FuGKoUTEA%2FR3FzU5DgYkVz6P68ZAqBIy5hGa34WQVsrJR85iIdxeaeW81Det3Q2%2BXakzsm72yueEtc5NqB5GW5FVdKLXiTzKg9mVi8hL0ItW6AkdFfcqTa%2BPl4YgNWbm&X-Amz-Signature=1c3db39da82d8773359c65e6d4b3f2fe86a054e7d5750a9b451d22b456e1b94a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
