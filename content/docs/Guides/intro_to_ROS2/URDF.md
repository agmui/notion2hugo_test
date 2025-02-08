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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAB3FOAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICnnqsXC43ae8dIXNxvJF4ByfrwVyBM0iVt2z9POIvCQAiAH2t6GR9hCtGZoJgLoNfzWIJXuSv6PKhLGPK38mQvUIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYiONJE7D0pv0XseKtwDDXGdCVtkthS2WuW6d1089DaZ9XJCbmn%2Bh2Fds0eBOdsrHX5%2BpYdsl8pFS2yJ93jz2zZvWHp0%2B%2BApPrSxLgKCti3fzGy5RkTwUlcsgQkeXonhHjlAFR%2Ft2PR6qNd5uZOaLUFX30%2B%2FlNnveMSs%2FLEvVi9CEvsr9ZfQrW8okgPVl6lYgMI2apfZhjc42HG4nmofOn%2FYjUU8Yh9BPRJmFnfeejHPh%2FdRqTU6OlGJsqQt0nRexTUtf7j3Zbxs30j2yTPlViV7Gop%2FCtwom5Dq%2FD8SKn6KouTE1Z45m3GZtLkxS%2Fcfuj2wXe3%2BZZH%2BFjcDGCiEQbL8F%2Fdi5hQpAx%2FZP3%2F0%2FkTxmd1x1K%2BpYwavYYv5DK%2F6GLFGnTvgxyzAattNf46s5WdPgtx1Uf7sEwTzEsNSxkwpYRTJJ7eKJ3L88qQUddb7uY6gxZf3Hu4rJpAS8w34jwmcCiXmHk3rytFS6%2FeNVSsCfjmocqMfCZeQe2a16fV2SVlcXNC9vjmUfubdZLN8PvRyxi0FImwNs7%2BF%2FWsUmhUYcBW8K5g23hUB6dKOvgilEbLI89GuvaqHrKW7o60tzRhiQv2gTAcxAzS7cl2URFzjImFV6ohR2eiLl5qdtqw33Kqjmi9K6htkfOow7JifvQY6pgFp0XEbb6x6S5fUaE2xVWzqd1UhQFhNTGAGFZOah8RgzTD2IBBiA4feP2wYQEq4gide8Hh9JLtG5aaFShwE1iJHgdYXgkxenKIRHr9JrfcMOsnCqn2SlCLq0m%2B7WpI8Qwhb%2FcZSry0l1ZZ%2Fu4l4UIXFOCcrU66xluPmYBf2Xp71oLcohPUjNTUaPCuSKyWEEEw%2B39TYiMVsVI6KOTqCs%2Fgf1BAiAUNe&X-Amz-Signature=870a58aaebc8ce7ed333c0239ac8f7d4c1ed01bafc9906b76570077daa3fca0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAB3FOAW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICnnqsXC43ae8dIXNxvJF4ByfrwVyBM0iVt2z9POIvCQAiAH2t6GR9hCtGZoJgLoNfzWIJXuSv6PKhLGPK38mQvUIiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYiONJE7D0pv0XseKtwDDXGdCVtkthS2WuW6d1089DaZ9XJCbmn%2Bh2Fds0eBOdsrHX5%2BpYdsl8pFS2yJ93jz2zZvWHp0%2B%2BApPrSxLgKCti3fzGy5RkTwUlcsgQkeXonhHjlAFR%2Ft2PR6qNd5uZOaLUFX30%2B%2FlNnveMSs%2FLEvVi9CEvsr9ZfQrW8okgPVl6lYgMI2apfZhjc42HG4nmofOn%2FYjUU8Yh9BPRJmFnfeejHPh%2FdRqTU6OlGJsqQt0nRexTUtf7j3Zbxs30j2yTPlViV7Gop%2FCtwom5Dq%2FD8SKn6KouTE1Z45m3GZtLkxS%2Fcfuj2wXe3%2BZZH%2BFjcDGCiEQbL8F%2Fdi5hQpAx%2FZP3%2F0%2FkTxmd1x1K%2BpYwavYYv5DK%2F6GLFGnTvgxyzAattNf46s5WdPgtx1Uf7sEwTzEsNSxkwpYRTJJ7eKJ3L88qQUddb7uY6gxZf3Hu4rJpAS8w34jwmcCiXmHk3rytFS6%2FeNVSsCfjmocqMfCZeQe2a16fV2SVlcXNC9vjmUfubdZLN8PvRyxi0FImwNs7%2BF%2FWsUmhUYcBW8K5g23hUB6dKOvgilEbLI89GuvaqHrKW7o60tzRhiQv2gTAcxAzS7cl2URFzjImFV6ohR2eiLl5qdtqw33Kqjmi9K6htkfOow7JifvQY6pgFp0XEbb6x6S5fUaE2xVWzqd1UhQFhNTGAGFZOah8RgzTD2IBBiA4feP2wYQEq4gide8Hh9JLtG5aaFShwE1iJHgdYXgkxenKIRHr9JrfcMOsnCqn2SlCLq0m%2B7WpI8Qwhb%2FcZSry0l1ZZ%2Fu4l4UIXFOCcrU66xluPmYBf2Xp71oLcohPUjNTUaPCuSKyWEEEw%2B39TYiMVsVI6KOTqCs%2Fgf1BAiAUNe&X-Amz-Signature=b981f7d6eef274a90868a4e2b49bbba3b88e9d9268dc284513880836fd441825&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
