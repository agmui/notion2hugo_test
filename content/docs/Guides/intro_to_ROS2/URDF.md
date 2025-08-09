---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55WK5MO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDefHPAcx2m8N1ff%2B4QOm1YAHfd%2B6D78pK63K2EkqRASQIhAOXODEMzZMaI7IHW6E5az%2FUTCe1DCowFoi6Ojfb0Lk7DKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQaPQ9tw0%2F5dzWxycq3ANQRfMhq4P5UcLX1UCOprr%2BtQKX%2F%2B3xKwoaNWZPsLX2DjQj3x1OswQOhz0kxDSO4zmPcdDyfnNhSoTerTkTdZb8KOHxRU8RYLuj2JvF4nEUmawkmkr7sa%2FWaqpBhAgIjEPrkFmAYIzueij4cqZeBx4RUamYajnUHYP8UwXIYG8uCQ4SFuyxGs1%2BTis09Kf0TOYBmHStG98pV6dNsMLqEgOTuo586e%2FoVaYF99RYVyrz0v7%2BnzKwVQ6AE1ZXlzyFFQlZblO%2FzEqJ5JiOziRws5A9iiwwk8GaeVRNyCY2sCwXI6vcnHVEO0Sql6bGSkwpq%2FI5XVrDr8frJ0dBlJU1yhvnJwpWBgOhYsTm%2F6HGYLGTgDgfyIhY2wSbcBWe1P0xtBYeCI32b3zWqsO%2FeOJLLnPxIw33h5DT47SkDSWx9IH99Ol67ScX8V3SeYRZe2ZITTlAIZNZThjdxFbNYpY%2Bqo2BFmI5ZlzTAWo4KEdcHM0k2mBqJYAJ9y9Qlq2Q%2FrwQOk9fPXFJcaAjEVx7DRKKu4P02RW7HR2Yofkc4T6OLeZ02dxusR6DmuReJgg%2FmjePuL9PevjmvA580v50%2FzMhtg6Co%2Bv5IbvgYUEa9air%2B7ZabRXFD%2BjY4cJblX5VBjDKxNvEBjqkATt5OJypVV03j4wtYtqkQgE7L4O5mcTbvAXVcuIiBnxXlaaKXLrmeqwvVzUEwBTaUvoRT0zwYe5A6WvX50Xp3qHyVLJxLN6%2FBpMmqJDD8DcE032NFDYdp7A4R6zMoM6eM%2BD%2FLIuOtH7JFHr278c3Ntcr9Mf12WcaHznLmI31ixmkn%2FdQAg2D90lY%2FpcHo1WCNklya6NA3plzDNeTG%2F%2BdJhyrPSDH&X-Amz-Signature=5f2a681c88e8e1e950ed0099d97ed6518356310de47b9aa505a7746609109534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55WK5MO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDefHPAcx2m8N1ff%2B4QOm1YAHfd%2B6D78pK63K2EkqRASQIhAOXODEMzZMaI7IHW6E5az%2FUTCe1DCowFoi6Ojfb0Lk7DKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQaPQ9tw0%2F5dzWxycq3ANQRfMhq4P5UcLX1UCOprr%2BtQKX%2F%2B3xKwoaNWZPsLX2DjQj3x1OswQOhz0kxDSO4zmPcdDyfnNhSoTerTkTdZb8KOHxRU8RYLuj2JvF4nEUmawkmkr7sa%2FWaqpBhAgIjEPrkFmAYIzueij4cqZeBx4RUamYajnUHYP8UwXIYG8uCQ4SFuyxGs1%2BTis09Kf0TOYBmHStG98pV6dNsMLqEgOTuo586e%2FoVaYF99RYVyrz0v7%2BnzKwVQ6AE1ZXlzyFFQlZblO%2FzEqJ5JiOziRws5A9iiwwk8GaeVRNyCY2sCwXI6vcnHVEO0Sql6bGSkwpq%2FI5XVrDr8frJ0dBlJU1yhvnJwpWBgOhYsTm%2F6HGYLGTgDgfyIhY2wSbcBWe1P0xtBYeCI32b3zWqsO%2FeOJLLnPxIw33h5DT47SkDSWx9IH99Ol67ScX8V3SeYRZe2ZITTlAIZNZThjdxFbNYpY%2Bqo2BFmI5ZlzTAWo4KEdcHM0k2mBqJYAJ9y9Qlq2Q%2FrwQOk9fPXFJcaAjEVx7DRKKu4P02RW7HR2Yofkc4T6OLeZ02dxusR6DmuReJgg%2FmjePuL9PevjmvA580v50%2FzMhtg6Co%2Bv5IbvgYUEa9air%2B7ZabRXFD%2BjY4cJblX5VBjDKxNvEBjqkATt5OJypVV03j4wtYtqkQgE7L4O5mcTbvAXVcuIiBnxXlaaKXLrmeqwvVzUEwBTaUvoRT0zwYe5A6WvX50Xp3qHyVLJxLN6%2FBpMmqJDD8DcE032NFDYdp7A4R6zMoM6eM%2BD%2FLIuOtH7JFHr278c3Ntcr9Mf12WcaHznLmI31ixmkn%2FdQAg2D90lY%2FpcHo1WCNklya6NA3plzDNeTG%2F%2BdJhyrPSDH&X-Amz-Signature=25c246a8b791652bc96c04d43fd73734b9d9a5e325308280b60efc5638d4ca44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
