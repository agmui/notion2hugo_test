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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMAOX6LX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnDPRqBOqn06z348btS%2FSw%2FJKRkPmQzCYpFLrV%2Bt7dUAIhAJ3J54bLLYTCYJkALBn0fo7P1JUrot0tTemOfiMcwqPNKv8DCB0QABoMNjM3NDIzMTgzODA1IgxYRUPvY4FZ3s2A044q3APj48IS95Hh%2Bmjshp8nO7crJ0Gh0C316uS%2BUR3tpy8VO9imrovenjC1I0KaONGJLVnqgZN0Gh4S52h%2B05ureFjrhfUu%2BFzvtpWyROLjR9xvAyOrvFEdCIhKi9t0b%2B5ZuTsvV5WoOvP93CyPQ5T1Ea2605arU%2FckGhye8qSx1YrWxPeus2YthmYWB3i4P6X8PYevX4IDge7W5O%2B%2BFOLILcNyS8hdiG6WBvvdTl7SKy3xHfTvmnmvy3Jru7va%2B1A4ygXTX%2F%2FLdj3xbpiV%2B4Ig8MaYNQrIpaZZNRBqd8dOREBvIPikFvYuzRid2GZoobQ6PSPTcafo5wMeyUHDt5DFNuFtPPI%2BzBMVBaGa4H95Xt0ZAZwExn26shFkgElGBn%2FTBpMZKVcPLz6SqCtWy4DYaVNGvtB20z5BzUcV9NnYiDMRB1bdouHoiO5t0O6AY6df%2BHVNu5y1uUu0mLRM67FlNg0zQgL8yetYNAigsmG%2BFWsGZ0G0yXf7x3OoA7EoNGfU9le8B6F4Ajl5OGhf9rclHQxviCb%2F2pBdZptsmWRaFkO3qWI0%2BT4Y9tJYR%2FnkAQjTRGDYZJKTm3QPPOxKsluKxQBZq18apSFXzu5rhSnhVAx8RAn6NE0SHZs0BoVU6TCDge69BjqkAesKXdfz201juQvSFW66H8Y3BURJgYiWxU%2BbyWHkrbpg9hM17hAgd8TeZESxokkqZFgD%2F%2FOQ3EYaZ2Jx%2BUSQLOkXhBEPS2vhb0cuiYXKK%2F6zupn9ElvveuS0Utuq2bvqiMjGbthNpOocFYbq8O9u%2BAc7TTVQ1pAkDzZ%2B0PbU7PkWfkyimBXEjulyS4VDX1m6xMHIZndAn6q8Fj08KnC0Tvg1Wbx6&X-Amz-Signature=532492fb49d4ea4d41f0e20ba9280d1fd617efc536167ebc9ead011e94feeb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMAOX6LX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnDPRqBOqn06z348btS%2FSw%2FJKRkPmQzCYpFLrV%2Bt7dUAIhAJ3J54bLLYTCYJkALBn0fo7P1JUrot0tTemOfiMcwqPNKv8DCB0QABoMNjM3NDIzMTgzODA1IgxYRUPvY4FZ3s2A044q3APj48IS95Hh%2Bmjshp8nO7crJ0Gh0C316uS%2BUR3tpy8VO9imrovenjC1I0KaONGJLVnqgZN0Gh4S52h%2B05ureFjrhfUu%2BFzvtpWyROLjR9xvAyOrvFEdCIhKi9t0b%2B5ZuTsvV5WoOvP93CyPQ5T1Ea2605arU%2FckGhye8qSx1YrWxPeus2YthmYWB3i4P6X8PYevX4IDge7W5O%2B%2BFOLILcNyS8hdiG6WBvvdTl7SKy3xHfTvmnmvy3Jru7va%2B1A4ygXTX%2F%2FLdj3xbpiV%2B4Ig8MaYNQrIpaZZNRBqd8dOREBvIPikFvYuzRid2GZoobQ6PSPTcafo5wMeyUHDt5DFNuFtPPI%2BzBMVBaGa4H95Xt0ZAZwExn26shFkgElGBn%2FTBpMZKVcPLz6SqCtWy4DYaVNGvtB20z5BzUcV9NnYiDMRB1bdouHoiO5t0O6AY6df%2BHVNu5y1uUu0mLRM67FlNg0zQgL8yetYNAigsmG%2BFWsGZ0G0yXf7x3OoA7EoNGfU9le8B6F4Ajl5OGhf9rclHQxviCb%2F2pBdZptsmWRaFkO3qWI0%2BT4Y9tJYR%2FnkAQjTRGDYZJKTm3QPPOxKsluKxQBZq18apSFXzu5rhSnhVAx8RAn6NE0SHZs0BoVU6TCDge69BjqkAesKXdfz201juQvSFW66H8Y3BURJgYiWxU%2BbyWHkrbpg9hM17hAgd8TeZESxokkqZFgD%2F%2FOQ3EYaZ2Jx%2BUSQLOkXhBEPS2vhb0cuiYXKK%2F6zupn9ElvveuS0Utuq2bvqiMjGbthNpOocFYbq8O9u%2BAc7TTVQ1pAkDzZ%2B0PbU7PkWfkyimBXEjulyS4VDX1m6xMHIZndAn6q8Fj08KnC0Tvg1Wbx6&X-Amz-Signature=8279e607474c76d03366572bd7c50b52729dbe782ba52355d13cffaa3008e310&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
