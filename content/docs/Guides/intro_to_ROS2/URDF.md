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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNNWNZ3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzOVJny93YFHZJg3%2BWUBoNzybIUe5qbgRrkLmM9AApAiB7vJI57CpigS6ng7Rpc2VDMiYOQ8G0Q9sAFzHuSC02mSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQq%2FdBLHoMZwVKx%2FTKtwDQsyjCw%2B9r0tbX88eNzaMPWpfGR5w0faljdQ9iFCppAhNiWOwPz%2FeUFoGlanSlmEwvSFWgMk%2BZJxxvpW13QWMWgZeJSAqcYuQdzOwNuKMTXTi5DhY%2BZZsmKMU1KQIbqMsi%2FMGmLSBhqwAddyNxsWFTRhEebh4a7VCUHeVsSxCf%2F%2FATqoleVdqQFowAnnIklNL9Gu0xKQ0oJY6JdRORh8adi4e94lgPWUTmZoGjukkhILujuUCCcK64LKILIavUdh6tAz%2F3BfJl%2FsbRe2aKuiV2RTZdnzhuc%2FGVjwZmoefeXWaDVKIs1CUWwY5CYR48gide%2FybWNM09BISZ1apE0dLHBRZCN0J178Kz94nzgiJxgEvyJpIzGBVvOE0F8ybDdj4spTVTr4QbOMko9WZKkJG2L3my3TN2bOz8Q%2F35tBtu34HmGqWEBI54XcS68GdtHUigk9Zr33RftoxeNL3BICs6vobqAjN9JkYLUBBsQcSGqV1Qwe6mYznwoQOvFfbWlxYSZI3CHmVoPpYWdRfd2nFd84ve9nD6IJYfUPvbK%2BbmpmJzyfXlSxMYJtMQx8YLne%2FHqxYbon31tyVpH3XtK1G5I%2BQO7VwXSFsH8g6%2FtXEfk2mwzf%2BtYKCXLaWBW4wmIXKvgY6pgFoXhbAv99P5O%2FZYkBE5E8Z3ClDfVZgqNwq7GP2YJZcVSGbIUY5jR9%2BHgiYNsD54OeJpAJzlIpWuLioPhN7pKmIcqkcoaMNbgqI9T1Dsbdn0N%2FtYIF%2B8f6SsN75NIAj9Ana6lnsHfKj6yC0XBRruoxuNxnDUEZ7HzHv9lk3eyssXbCiB3uJmSPrO0apY1nOQsbplRIA%2BdV7mAqde5m7HKiZ2wzEaHH4&X-Amz-Signature=cd2803089bd8afe6f1e0ab1eed1eb5e853aa16505504c80a94eeeb209d6e6f31&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNNWNZ3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOzOVJny93YFHZJg3%2BWUBoNzybIUe5qbgRrkLmM9AApAiB7vJI57CpigS6ng7Rpc2VDMiYOQ8G0Q9sAFzHuSC02mSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQq%2FdBLHoMZwVKx%2FTKtwDQsyjCw%2B9r0tbX88eNzaMPWpfGR5w0faljdQ9iFCppAhNiWOwPz%2FeUFoGlanSlmEwvSFWgMk%2BZJxxvpW13QWMWgZeJSAqcYuQdzOwNuKMTXTi5DhY%2BZZsmKMU1KQIbqMsi%2FMGmLSBhqwAddyNxsWFTRhEebh4a7VCUHeVsSxCf%2F%2FATqoleVdqQFowAnnIklNL9Gu0xKQ0oJY6JdRORh8adi4e94lgPWUTmZoGjukkhILujuUCCcK64LKILIavUdh6tAz%2F3BfJl%2FsbRe2aKuiV2RTZdnzhuc%2FGVjwZmoefeXWaDVKIs1CUWwY5CYR48gide%2FybWNM09BISZ1apE0dLHBRZCN0J178Kz94nzgiJxgEvyJpIzGBVvOE0F8ybDdj4spTVTr4QbOMko9WZKkJG2L3my3TN2bOz8Q%2F35tBtu34HmGqWEBI54XcS68GdtHUigk9Zr33RftoxeNL3BICs6vobqAjN9JkYLUBBsQcSGqV1Qwe6mYznwoQOvFfbWlxYSZI3CHmVoPpYWdRfd2nFd84ve9nD6IJYfUPvbK%2BbmpmJzyfXlSxMYJtMQx8YLne%2FHqxYbon31tyVpH3XtK1G5I%2BQO7VwXSFsH8g6%2FtXEfk2mwzf%2BtYKCXLaWBW4wmIXKvgY6pgFoXhbAv99P5O%2FZYkBE5E8Z3ClDfVZgqNwq7GP2YJZcVSGbIUY5jR9%2BHgiYNsD54OeJpAJzlIpWuLioPhN7pKmIcqkcoaMNbgqI9T1Dsbdn0N%2FtYIF%2B8f6SsN75NIAj9Ana6lnsHfKj6yC0XBRruoxuNxnDUEZ7HzHv9lk3eyssXbCiB3uJmSPrO0apY1nOQsbplRIA%2BdV7mAqde5m7HKiZ2wzEaHH4&X-Amz-Signature=882cb666aacfba1cb8603cf7018d3c957f81c45f089f743d9f97539b2a948430&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
