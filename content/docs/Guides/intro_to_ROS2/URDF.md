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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCLYXNJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDv7XtE3uK6KoPm2P692nnph1gQGDcOByFqM9oeZFtUUQIgYiO3nLfkb7H28L3rezPdfpZ39uBL16WrDEKU6nDIk8EqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd4KCA%2BNdOfa15z8yrcA5vwEN9LCEehFjty%2Bymhra6xHTu%2FFjyCy8NCDYgAPm7j%2BrsSwCQYZl8ct%2Bfb5ER9jramCf7ZXSoeg622XU6c0SLxhH8vQ%2F9rlL8SbHzXBKV9CG9L1gvY9UZZ0vSZyFlxVuDfOUJVoRSmJEsVDpR2X%2F7uRwETlSBZZaUnDvyDtDOGIWfKL4NIJOLbC0zlHTxKPLPc%2BEN%2BJXzdOwuG4fvU%2FLHOx3In2Sg5wtg%2Bhx%2FJcDYTawxrg4QJh5xO%2BjGgO%2FVG2NwX%2BkHvA%2BnmNRSzBdRu3JRqB2k46MzJsPqBwRhYX6NyDFWQ7gCxJrBTJ9cjTBMf%2Fhxqgv8w%2F6Sg9AdRt9eEhx0WNY%2FYXN7ExqRdxOeC%2Bn6V%2BFqFyYx0B5AiJ7GoTE89niUsGZ6uVIZbhqjE77m6bepPnz3dQdMuaI3S4jQxrPGI4mcanTMpwTjtNS5DLkRsC0xOW4%2BApaGjuQTX2%2BVwtF3VceeXz31JrsDsLRT%2FLv9x1BqRzomEV4xJSl2hJZbQMK68fldGsxvMISf7zk9LOLDBR40sCnE34st0K9Bk7pIDIu6OqrKIPhm2ZS8tJYYKTSxQ5i7kQLnpuAm4ejW%2F%2BW%2F2MKxIjhOUJzxHCSjUqtnD%2FyF9TmqU5G0WXTf4MJzo%2BMEGOqUBlNk2HqvqXb7VoAnrwVRa3lQC4w6TAR02V7chnYLFDBIQ%2Fy7plXE3y9voZw%2B8wU2ZRSKVISENxKouA2Ue6vDg0tD3Wyut09Jwc4oTXaMCl%2Bp7XIT4iIYiHybF8kMUISlg7zqsdpx1%2FIDQUBmuKluYftYuwh%2FUgoHW5%2F2l6U3AQF7yk%2Ftj60U73C4%2B3xc5giCueWNkGaTB2sG2CMsCEaDh7bBe%2Frvy&X-Amz-Signature=4bdd65709ac063edd46339c8051887d7733a95c06c565031dfd62ddd79c158f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCLYXNJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDv7XtE3uK6KoPm2P692nnph1gQGDcOByFqM9oeZFtUUQIgYiO3nLfkb7H28L3rezPdfpZ39uBL16WrDEKU6nDIk8EqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd4KCA%2BNdOfa15z8yrcA5vwEN9LCEehFjty%2Bymhra6xHTu%2FFjyCy8NCDYgAPm7j%2BrsSwCQYZl8ct%2Bfb5ER9jramCf7ZXSoeg622XU6c0SLxhH8vQ%2F9rlL8SbHzXBKV9CG9L1gvY9UZZ0vSZyFlxVuDfOUJVoRSmJEsVDpR2X%2F7uRwETlSBZZaUnDvyDtDOGIWfKL4NIJOLbC0zlHTxKPLPc%2BEN%2BJXzdOwuG4fvU%2FLHOx3In2Sg5wtg%2Bhx%2FJcDYTawxrg4QJh5xO%2BjGgO%2FVG2NwX%2BkHvA%2BnmNRSzBdRu3JRqB2k46MzJsPqBwRhYX6NyDFWQ7gCxJrBTJ9cjTBMf%2Fhxqgv8w%2F6Sg9AdRt9eEhx0WNY%2FYXN7ExqRdxOeC%2Bn6V%2BFqFyYx0B5AiJ7GoTE89niUsGZ6uVIZbhqjE77m6bepPnz3dQdMuaI3S4jQxrPGI4mcanTMpwTjtNS5DLkRsC0xOW4%2BApaGjuQTX2%2BVwtF3VceeXz31JrsDsLRT%2FLv9x1BqRzomEV4xJSl2hJZbQMK68fldGsxvMISf7zk9LOLDBR40sCnE34st0K9Bk7pIDIu6OqrKIPhm2ZS8tJYYKTSxQ5i7kQLnpuAm4ejW%2F%2BW%2F2MKxIjhOUJzxHCSjUqtnD%2FyF9TmqU5G0WXTf4MJzo%2BMEGOqUBlNk2HqvqXb7VoAnrwVRa3lQC4w6TAR02V7chnYLFDBIQ%2Fy7plXE3y9voZw%2B8wU2ZRSKVISENxKouA2Ue6vDg0tD3Wyut09Jwc4oTXaMCl%2Bp7XIT4iIYiHybF8kMUISlg7zqsdpx1%2FIDQUBmuKluYftYuwh%2FUgoHW5%2F2l6U3AQF7yk%2Ftj60U73C4%2B3xc5giCueWNkGaTB2sG2CMsCEaDh7bBe%2Frvy&X-Amz-Signature=f2106cb43f3948307d8a394ac3bde7b6a8582b41f8c549139fc143e866258224&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
