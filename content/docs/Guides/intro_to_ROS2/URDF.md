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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QXJB3K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnwAuLutnTL4vJ0PTSo4NBsClhLxxk9AvXJih%2F7Wfb7QIhAPPwHtqSacEibVXbsNwtSy81m04V0okK%2FTp7YoljzVL%2FKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwitYcBtTmj1xaMSu0q3APpGBUxi%2Fszq8HCokn8rPphZ4hJvXU0%2Bic5QlD4HgUPhOhV%2BRqa%2FiVHfAuQcJXsYJOS3PWTrVYoLfTihW2S%2BRbuk59jKIgk%2FQ%2Ba1mZ8zkyEWaIztQ7lpHqoMn3jh0%2Bl%2FL2ONU2DzEsyRu127XHrKhXaK4ml13EDbjqwlswHxQlha9Wc5DcOsVlOnuDbWttRRVumC82mdcvF973kS6v0ghooeZeFkmrQEgUN%2B5px9WsS1TlmQbaKrYQUeGVWHVzTVJ9kODbx52IHJYlwPkaNY%2BPq4YXx3NtWTnpXPDwJLGi%2FX%2FTXJet4e3WltRkXkkwoGRTmE7JHEi7ogwyQ%2BXoaSEutg4p%2FfH9zmzcL9Xb5RUYTd%2Fvaagysv4g78lnoU2pxAC9FVo%2FibRG0a0h0DgFbuDvLXN%2F%2BNpdZh%2FxcFglGavqZXCsq3OClLXUfsLJs3V1YM0zOYoepF5BDSjqdgFFDK3iS5Wv2MtiPJZYxQGaX9QMLbV8vOOXE2LqenKV2K45wHTO7RfPmTN6DJxhP%2BwqckEKF%2BSV7g5OKfa8dRadw9hAUSzccrOX4lKUFtwi9RinY5HJob3pC7op2xtWN%2Bh0YyLNi1uGz%2BLL0dnmwmIPSDzMzOkwYSZfgxbIzN8uIoTDdocrDBjqkAfnmc7Bh%2FMq0bxBG6t4YkDUSWwojH1hc1KS6LWKV%2FAZBwbH82bixTLmqw9x5YeP1nKzrONQG3tXQBCQW8pCFgJG%2FPue12hB2s8pDa9I00pep5Qj5sITMl8v6FSCCc5ZCPVk8VdhIkebF69HOcSBvjt2rmqO2ozNum7EoUV7O0%2FiORsvYNoV0RGHy0js3qgqtmjSs4WXGqsfE6RTjhv2jUDF9O83Y&X-Amz-Signature=b7179087dea82cfcc6145db012d6917f84baa5549a4b53856d3c008494914a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QXJB3K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnwAuLutnTL4vJ0PTSo4NBsClhLxxk9AvXJih%2F7Wfb7QIhAPPwHtqSacEibVXbsNwtSy81m04V0okK%2FTp7YoljzVL%2FKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwitYcBtTmj1xaMSu0q3APpGBUxi%2Fszq8HCokn8rPphZ4hJvXU0%2Bic5QlD4HgUPhOhV%2BRqa%2FiVHfAuQcJXsYJOS3PWTrVYoLfTihW2S%2BRbuk59jKIgk%2FQ%2Ba1mZ8zkyEWaIztQ7lpHqoMn3jh0%2Bl%2FL2ONU2DzEsyRu127XHrKhXaK4ml13EDbjqwlswHxQlha9Wc5DcOsVlOnuDbWttRRVumC82mdcvF973kS6v0ghooeZeFkmrQEgUN%2B5px9WsS1TlmQbaKrYQUeGVWHVzTVJ9kODbx52IHJYlwPkaNY%2BPq4YXx3NtWTnpXPDwJLGi%2FX%2FTXJet4e3WltRkXkkwoGRTmE7JHEi7ogwyQ%2BXoaSEutg4p%2FfH9zmzcL9Xb5RUYTd%2Fvaagysv4g78lnoU2pxAC9FVo%2FibRG0a0h0DgFbuDvLXN%2F%2BNpdZh%2FxcFglGavqZXCsq3OClLXUfsLJs3V1YM0zOYoepF5BDSjqdgFFDK3iS5Wv2MtiPJZYxQGaX9QMLbV8vOOXE2LqenKV2K45wHTO7RfPmTN6DJxhP%2BwqckEKF%2BSV7g5OKfa8dRadw9hAUSzccrOX4lKUFtwi9RinY5HJob3pC7op2xtWN%2Bh0YyLNi1uGz%2BLL0dnmwmIPSDzMzOkwYSZfgxbIzN8uIoTDdocrDBjqkAfnmc7Bh%2FMq0bxBG6t4YkDUSWwojH1hc1KS6LWKV%2FAZBwbH82bixTLmqw9x5YeP1nKzrONQG3tXQBCQW8pCFgJG%2FPue12hB2s8pDa9I00pep5Qj5sITMl8v6FSCCc5ZCPVk8VdhIkebF69HOcSBvjt2rmqO2ozNum7EoUV7O0%2FiORsvYNoV0RGHy0js3qgqtmjSs4WXGqsfE6RTjhv2jUDF9O83Y&X-Amz-Signature=b53e5d98572e4526ea5ca4d7436106c223e25e4f5db3dc3bb7b97aabc2a207f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
