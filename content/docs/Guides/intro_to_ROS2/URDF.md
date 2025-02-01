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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2YHUE3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlapmBSiH9Bqev9g5EnOhy7FpUAT1UmgS0K5c9XMVV7AiEAvp8ymump5nKmObcw%2BD%2B6N5Zsc8ukj3CWCMHNB7qfq1kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcgaFV91bmMJyTdMyrcA3WmII8xWsLrveD411lCwAg8LEOrDSY8%2B1vtsZUovxfQwKttSGMrXWRbB9CpJz7I79ZqoDfON5ociK1lqQIiiyIfyZUxWx42mWEzQJW7L%2BE4dN8NIGRdyHtzeYG8QW%2BJxX7hFzeIzrUQgfNRECluVy1TOZM6n362IsPXDfLM5ti9T9IJMrhnhR5rINo2xevH0q%2BjlyOusQx1BX%2FJeUfhstxXevsdDzeCvRsHtxF7TM%2Ft%2F9RkIcbuaF3Lut%2FQ2dhZAT0u3JF8vGnNAgvK2qVwPUs%2FQrQTXOROljn%2BQHpQmBZCgN%2FrqAHXLQWgoBlQoSPT%2BFJSKXUGBQePqj8rV36HNJDyTPW%2FgR50ZFaod3ZhXx7INE5LKcEcKOauRdUD3rbzswcyUDA2O4N%2FZ5cxtpvWShHhnpp%2FCJzQnfDDinU5p10v9xmcVxjNbfqyQXqNKePcKezIIJ4e1cNUIC7sQCKfz0kSvW5zvaBIwbmmFdDr4Ufw3CkI%2B627OMiiVFBBbASD7PA%2Bhr4ee19Aact6yvC6bDgNH%2F6WSaTuVLh2Yv7xjqar1gm1PatinrDSl8vSOi2Qq1vnHSuIX%2BagNbQvrfyn72%2FnOomPO0dDfNKjmhZy6b4f0d4%2Fbtc0G%2FFfoSlbMOnH%2BLwGOqUBzTEEzlU7ntiHP6%2FKOWDD7lR6XIrkZPaeUCC2QJKxtqV4djB1eVTVQ0AFBxXlE3l6ABY%2F99hWQEml5ulsQZAXmmTb5J8pwqRpR0istxfladUMNtsn5xCWGn%2BHw4xLYtnFCs2sEnf4po7k3BXh7j%2BvycSmc76%2FEl9%2BivRCZCuQ7V6vrlf36Thxz%2FEoAX%2BSRPLI0%2BN8%2FxfTC2WmQOnHz%2FfLPgZOtRoX&X-Amz-Signature=d943a71de0a0bf7811df472018e07917cf480ebdc0cfa9c1cf90b90818828554&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2YHUE3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlapmBSiH9Bqev9g5EnOhy7FpUAT1UmgS0K5c9XMVV7AiEAvp8ymump5nKmObcw%2BD%2B6N5Zsc8ukj3CWCMHNB7qfq1kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcgaFV91bmMJyTdMyrcA3WmII8xWsLrveD411lCwAg8LEOrDSY8%2B1vtsZUovxfQwKttSGMrXWRbB9CpJz7I79ZqoDfON5ociK1lqQIiiyIfyZUxWx42mWEzQJW7L%2BE4dN8NIGRdyHtzeYG8QW%2BJxX7hFzeIzrUQgfNRECluVy1TOZM6n362IsPXDfLM5ti9T9IJMrhnhR5rINo2xevH0q%2BjlyOusQx1BX%2FJeUfhstxXevsdDzeCvRsHtxF7TM%2Ft%2F9RkIcbuaF3Lut%2FQ2dhZAT0u3JF8vGnNAgvK2qVwPUs%2FQrQTXOROljn%2BQHpQmBZCgN%2FrqAHXLQWgoBlQoSPT%2BFJSKXUGBQePqj8rV36HNJDyTPW%2FgR50ZFaod3ZhXx7INE5LKcEcKOauRdUD3rbzswcyUDA2O4N%2FZ5cxtpvWShHhnpp%2FCJzQnfDDinU5p10v9xmcVxjNbfqyQXqNKePcKezIIJ4e1cNUIC7sQCKfz0kSvW5zvaBIwbmmFdDr4Ufw3CkI%2B627OMiiVFBBbASD7PA%2Bhr4ee19Aact6yvC6bDgNH%2F6WSaTuVLh2Yv7xjqar1gm1PatinrDSl8vSOi2Qq1vnHSuIX%2BagNbQvrfyn72%2FnOomPO0dDfNKjmhZy6b4f0d4%2Fbtc0G%2FFfoSlbMOnH%2BLwGOqUBzTEEzlU7ntiHP6%2FKOWDD7lR6XIrkZPaeUCC2QJKxtqV4djB1eVTVQ0AFBxXlE3l6ABY%2F99hWQEml5ulsQZAXmmTb5J8pwqRpR0istxfladUMNtsn5xCWGn%2BHw4xLYtnFCs2sEnf4po7k3BXh7j%2BvycSmc76%2FEl9%2BivRCZCuQ7V6vrlf36Thxz%2FEoAX%2BSRPLI0%2BN8%2FxfTC2WmQOnHz%2FfLPgZOtRoX&X-Amz-Signature=8a6057142dfeb3427f0773ae8478d839d470c95ab70d9acd0b12b5f6455680ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
