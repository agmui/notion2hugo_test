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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHKT3KC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYnYsVSegFMLC0%2Fgj%2FlfBaZdxbqRxnLXDY1E3BcSlXKAiBXoP9p5LFCi4jbw%2BehhqWLvRTVLrK%2FGMWpYb5dbWFRkSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMW0cDiHAAiz7b%2BpKuKtwDryJTrsGI1AkFJpOvRQTSs7pamT2Xvxys0Kag5TQO8JMyk4GtAlnDWlxHIlAeVK9KlLfsjnwzWw10FJgBp%2FL7uPgo2PzZzNp5iVYg1VtYEn%2BBLKq58fpZ%2F04gbR0MaRXe6h8ksrV5a1EqzQ4iBFF%2BrJ7LaD2Uxw0ZXbygCPZ3YEac%2FzKHgS0SjlNOyAY%2FLemMZYP6VIDlRHUuKueBHYOOdfqlPb1b1S0%2Ftqi8UodrnEoeYLbr7D04JvbKPBWmpfq8DYY9gTn0ygeSWfoNZJDh%2FdYhe%2B2ijVb9N9437bsVftIdhIZRxOFi2C3VAIk556cjnZ3CxgDJV0YHqO9P%2FqivuIimnJ1TSXa21PwbTS1ibC3jvmd96ZG7mvWzskZRmzXEJndMa7HHEpLpGzlxi4DGO%2BKakTVcHjg5%2FExYC1F7v7UTIufZhqO1%2Bgim0%2BS7AxxRMoWiU6SAJrVuLDOsR0LfhdeUxHfxx6sb21W8DfBRC4CEZfBA20tCbZ5tBskixrK%2BEmCmFV7W4tOD2qVDyO8AjWxWPJKmnLIxVOu2s6GDSAew0hAkNaQihBDcojBJSu1wU7%2Bup5yQjy9lEH17CG%2FighxRj61XYXgqWks7qjw7uaYMruPAlpha4YY6U7Uwsf7IvwY6pgGBuwrAEBqGiCwswnswBqnLocGY4aLEzVaoNjR9kNI6wB57VWAmdBrZqURNTNonbFurp77hjScbektY2bJz92Bef4CVJiR1omsBmKmUp6Io0cbRZQKj4yQeDzzKe0ntvuvYzZja59mZRkjtdEu%2FEzni4PQ3cjOXnJdJDk1v8fmsshldzEx18jRFbrc4zFide5g9sDZCVYeguBRmDYVftzvUM8Gqt9YP&X-Amz-Signature=396bed8ab4c51d6d5c0aa42e97caf280fb0f07619940446c6afc686fc617320c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHKT3KC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYnYsVSegFMLC0%2Fgj%2FlfBaZdxbqRxnLXDY1E3BcSlXKAiBXoP9p5LFCi4jbw%2BehhqWLvRTVLrK%2FGMWpYb5dbWFRkSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMW0cDiHAAiz7b%2BpKuKtwDryJTrsGI1AkFJpOvRQTSs7pamT2Xvxys0Kag5TQO8JMyk4GtAlnDWlxHIlAeVK9KlLfsjnwzWw10FJgBp%2FL7uPgo2PzZzNp5iVYg1VtYEn%2BBLKq58fpZ%2F04gbR0MaRXe6h8ksrV5a1EqzQ4iBFF%2BrJ7LaD2Uxw0ZXbygCPZ3YEac%2FzKHgS0SjlNOyAY%2FLemMZYP6VIDlRHUuKueBHYOOdfqlPb1b1S0%2Ftqi8UodrnEoeYLbr7D04JvbKPBWmpfq8DYY9gTn0ygeSWfoNZJDh%2FdYhe%2B2ijVb9N9437bsVftIdhIZRxOFi2C3VAIk556cjnZ3CxgDJV0YHqO9P%2FqivuIimnJ1TSXa21PwbTS1ibC3jvmd96ZG7mvWzskZRmzXEJndMa7HHEpLpGzlxi4DGO%2BKakTVcHjg5%2FExYC1F7v7UTIufZhqO1%2Bgim0%2BS7AxxRMoWiU6SAJrVuLDOsR0LfhdeUxHfxx6sb21W8DfBRC4CEZfBA20tCbZ5tBskixrK%2BEmCmFV7W4tOD2qVDyO8AjWxWPJKmnLIxVOu2s6GDSAew0hAkNaQihBDcojBJSu1wU7%2Bup5yQjy9lEH17CG%2FighxRj61XYXgqWks7qjw7uaYMruPAlpha4YY6U7Uwsf7IvwY6pgGBuwrAEBqGiCwswnswBqnLocGY4aLEzVaoNjR9kNI6wB57VWAmdBrZqURNTNonbFurp77hjScbektY2bJz92Bef4CVJiR1omsBmKmUp6Io0cbRZQKj4yQeDzzKe0ntvuvYzZja59mZRkjtdEu%2FEzni4PQ3cjOXnJdJDk1v8fmsshldzEx18jRFbrc4zFide5g9sDZCVYeguBRmDYVftzvUM8Gqt9YP&X-Amz-Signature=a42d1799ba5c4639d8fa33d16edfe5738c44a389094b2621ea6ce632a2fc5643&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
