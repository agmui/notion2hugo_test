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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7EBFTI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHElpEnkNDBjT0obuMZbAb55B0w71NsiKIg33yS14hkAiEAsVdNh8aFu%2BVZdWy4t1BMXr27%2Fq3wYmtS9Gc9Dmpb5FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDG5ihNkWSmZOwcl8kircA9JYRO708J4fdE6zptKVLrSJXTFuslED9eGOyBmy75umVRtSofow3VeBfQX5QyTMVPHVAv4vKJkWtsp4VAubqY1TaIwbqPBOeq%2FftXKbluFLjwfBlfVmFrEfSRFyiNES4O%2BZdrAe8HX1bjQclutBciT5ZOb3AA3LBvJLCwHnCYRpdYOH0YnQz7eApfUqUOTIAg%2B0ccDDNDYdK%2BxDJc7nUh0Xh66tgctH7KhvDom6ShkeBDjC7zAva3SjHcGZotmGawXSVfyBWT4I9GwnSCN110C5OWt0Dgg%2BHJyDyrvqQgy3kGkd5cleWeJJ%2FtYcZG5%2Fd0TxkRQ4%2BeEz%2Fb81ExiqKU7hQI5%2FjcccI0Xb7HMTWgsvK%2FGBMh4uB7gPfCyi8V6ubN4ztDhFR0d6M2Ja2W4OJfuHMIXTvDjI3uxiAd5VW1HHIvatea5P8QI6qEB3Sr7M5KOt8xi%2FHzPmClA14gmQl4lX9%2BcZT4AfHOO1ug80bxxgRNaG5IWzUB0TmdNLaOiYEg%2B%2FSR0H5MRbzSyZzw6lZ6MWJDD6VTves3HGg5SyBBHXkdSEhaDjdGHj9U8fp8ya9jAmV5a3%2FZI1dwy%2FonoGNITUwT5fAULUeIr%2FKd9Bm1aN4OjarSvaChjaZe%2FJMI%2FttsAGOqUBrbDlmKV0mbwaNc7vf7oZn3vtaYhvXfR1vWd%2BVXJVgQlxHysAQDB9EslmDVQeRwP4r3cUmVOuyTdz8qgG%2F93Hl05ryLfzqpUf6fQWEyPZRjl4oWjCFDOqY1heLtL5mScUwdAexXQMqjegJ%2BO1cF%2FsUTqQGgniZN7Vv08q4LB4NcaPqJMvqQqmkQvGcg%2Fbu7g6M3WmlPQlkLLQjFXcKJKNAA9rViLC&X-Amz-Signature=c5a20b9278124607760ab93f12e5a62f3688616f2bbe0e072d36eaa7ee1db37a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7EBFTI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHElpEnkNDBjT0obuMZbAb55B0w71NsiKIg33yS14hkAiEAsVdNh8aFu%2BVZdWy4t1BMXr27%2Fq3wYmtS9Gc9Dmpb5FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDG5ihNkWSmZOwcl8kircA9JYRO708J4fdE6zptKVLrSJXTFuslED9eGOyBmy75umVRtSofow3VeBfQX5QyTMVPHVAv4vKJkWtsp4VAubqY1TaIwbqPBOeq%2FftXKbluFLjwfBlfVmFrEfSRFyiNES4O%2BZdrAe8HX1bjQclutBciT5ZOb3AA3LBvJLCwHnCYRpdYOH0YnQz7eApfUqUOTIAg%2B0ccDDNDYdK%2BxDJc7nUh0Xh66tgctH7KhvDom6ShkeBDjC7zAva3SjHcGZotmGawXSVfyBWT4I9GwnSCN110C5OWt0Dgg%2BHJyDyrvqQgy3kGkd5cleWeJJ%2FtYcZG5%2Fd0TxkRQ4%2BeEz%2Fb81ExiqKU7hQI5%2FjcccI0Xb7HMTWgsvK%2FGBMh4uB7gPfCyi8V6ubN4ztDhFR0d6M2Ja2W4OJfuHMIXTvDjI3uxiAd5VW1HHIvatea5P8QI6qEB3Sr7M5KOt8xi%2FHzPmClA14gmQl4lX9%2BcZT4AfHOO1ug80bxxgRNaG5IWzUB0TmdNLaOiYEg%2B%2FSR0H5MRbzSyZzw6lZ6MWJDD6VTves3HGg5SyBBHXkdSEhaDjdGHj9U8fp8ya9jAmV5a3%2FZI1dwy%2FonoGNITUwT5fAULUeIr%2FKd9Bm1aN4OjarSvaChjaZe%2FJMI%2FttsAGOqUBrbDlmKV0mbwaNc7vf7oZn3vtaYhvXfR1vWd%2BVXJVgQlxHysAQDB9EslmDVQeRwP4r3cUmVOuyTdz8qgG%2F93Hl05ryLfzqpUf6fQWEyPZRjl4oWjCFDOqY1heLtL5mScUwdAexXQMqjegJ%2BO1cF%2FsUTqQGgniZN7Vv08q4LB4NcaPqJMvqQqmkQvGcg%2Fbu7g6M3WmlPQlkLLQjFXcKJKNAA9rViLC&X-Amz-Signature=6367ba3db8222277fed4658efa64092592346f8390e80b88cf02db1a616ffeb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
