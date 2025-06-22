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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTIW3FG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICb%2B6Bki%2BqDKQvXfQ8Gsj7eVje4gJmPoAR1A3qLMpq8jAiAzMWNeJnvUwjbV9tiOYFkb7CX8R7BC5o9PZvXIUN2U2iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdNx%2BAg88bZaOh46KtwDojoNRv3GKyrhcfXCZMmqgu0RCL9Vq8f6LB%2BkHOIhdPAo852xmOEEd6LN3h%2BcQIvj%2BLKsowIN9eJAubngfZ9t93Vh7yCEzpRgtKVqREy9bUh%2B58UeOERtO4I72Ov21YgmFeua0jbhZ44EWQ85PaDmx938ZsZHsy0pDJecPHbmAVN6PpNGagoPuE00h9MerwuSZWWiDTVn1DNnb5Uh%2Fd8kEjhnG3hhC0piBK1N1yHOwG3SM7Dpxo3SdpRmGnv7AT1tgV8iQxDHnTCaERx6%2F%2B%2FwEA9s8IdnRWs1yHGxCHK%2F2O3Q3d93yylmTQZiZAzKz1L9%2Fq9jpmAu%2BAOHXXi8k7ZQvR0HQ4YhkzsRjvuI4z%2BgDs79SintbyjSw0Hm%2FrgWIZ%2FT1dnXe2wfwmpushArXApy1qUi4tC1x0V%2FjDmzI5sMAHgzT4mmNV6uVxw0lpx8meLOWT3lQXwZNg5%2FPogQKT43hzClFaJaLOoVN7Ze%2Fb6trgFeMSqk3y8cA9z%2BcEjfk9rGOB3Q%2BBBWtxeYZJ7GKgrwnTcd3OzFzyWw1X%2BUJhKMYCcLPfkH4OCcyl2nSn2b9NolLxVeSRvZHJmMAi7V1DTAC8a%2BqciqQWJ7n65J4ustuk%2FTVGP%2B1ndRdyNMoEsw95PhwgY6pgEIgeTh8sqixv%2FzJEWXBbZRU8ORAHjKU7Cwf6iJDuONouDmIwqfFBtffc7l%2F12%2BvzuaKiSzYd6wMUwrO4SOe65JkdREmNu%2BNdB%2BhUbuFKabeSddenJBN04ERRchxHbIr2tEkTC1HGu7S%2FdfGmTkKEYnLczx096tCbDb46Lu9cUOXXAbP0aXVL%2BAPWI826ZSZcttawDqN00%2B09GyUwXwX8iOHKWz34Z4&X-Amz-Signature=a25f2cf031b15bffc4e4fc5b8f23e981d27e8bdd79631cd43f20eb8cecdb2582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTIW3FG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICb%2B6Bki%2BqDKQvXfQ8Gsj7eVje4gJmPoAR1A3qLMpq8jAiAzMWNeJnvUwjbV9tiOYFkb7CX8R7BC5o9PZvXIUN2U2iqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdNx%2BAg88bZaOh46KtwDojoNRv3GKyrhcfXCZMmqgu0RCL9Vq8f6LB%2BkHOIhdPAo852xmOEEd6LN3h%2BcQIvj%2BLKsowIN9eJAubngfZ9t93Vh7yCEzpRgtKVqREy9bUh%2B58UeOERtO4I72Ov21YgmFeua0jbhZ44EWQ85PaDmx938ZsZHsy0pDJecPHbmAVN6PpNGagoPuE00h9MerwuSZWWiDTVn1DNnb5Uh%2Fd8kEjhnG3hhC0piBK1N1yHOwG3SM7Dpxo3SdpRmGnv7AT1tgV8iQxDHnTCaERx6%2F%2B%2FwEA9s8IdnRWs1yHGxCHK%2F2O3Q3d93yylmTQZiZAzKz1L9%2Fq9jpmAu%2BAOHXXi8k7ZQvR0HQ4YhkzsRjvuI4z%2BgDs79SintbyjSw0Hm%2FrgWIZ%2FT1dnXe2wfwmpushArXApy1qUi4tC1x0V%2FjDmzI5sMAHgzT4mmNV6uVxw0lpx8meLOWT3lQXwZNg5%2FPogQKT43hzClFaJaLOoVN7Ze%2Fb6trgFeMSqk3y8cA9z%2BcEjfk9rGOB3Q%2BBBWtxeYZJ7GKgrwnTcd3OzFzyWw1X%2BUJhKMYCcLPfkH4OCcyl2nSn2b9NolLxVeSRvZHJmMAi7V1DTAC8a%2BqciqQWJ7n65J4ustuk%2FTVGP%2B1ndRdyNMoEsw95PhwgY6pgEIgeTh8sqixv%2FzJEWXBbZRU8ORAHjKU7Cwf6iJDuONouDmIwqfFBtffc7l%2F12%2BvzuaKiSzYd6wMUwrO4SOe65JkdREmNu%2BNdB%2BhUbuFKabeSddenJBN04ERRchxHbIr2tEkTC1HGu7S%2FdfGmTkKEYnLczx096tCbDb46Lu9cUOXXAbP0aXVL%2BAPWI826ZSZcttawDqN00%2B09GyUwXwX8iOHKWz34Z4&X-Amz-Signature=8350ae253c692895e109c8f678bc66306385220c37a47ec25549bec96427bc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
