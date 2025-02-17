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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TSFVKLP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICjdzAko9CfaLvkCSHBcCij5itrtH5qsGS7LCSlG5XH1AiEA%2Bfspu9NTgYAI1EBAQEm1FLnxpoFLHfKt%2Fpqu546Wn5Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA1KaIK%2BQ5RUcbI14ircAzz9sA6mPYg1DRn%2BwYSTMt4NIv5U5ElMxDwWnAazBI8Ln5zyBpTSRnrJlb287NOpspUKnJcifVxDnBajYv1InWXwyDl0QlOJhvKViK2KC7i01m0odmCjcQjiJBNb69aq5kuAoDySl82DHT0jxBqYD28w%2Fn2mvmhOW0MP%2F1GexPqPYEShDIC6n7tvd7LcvfUqS%2BTZfeqE1DIBikdnL8sSMLA4J20M3%2F9Q7P%2BqhN%2F4c77Yd%2B0i%2FnhVepcwarbJDLsrc%2FmOvj7fQtP1soLp1a%2Fr3cd%2F%2FqFCuAifM9QicfJqKkJLWTRpEr4MEDIQIDY8g%2Fqz0VOQfXacY6vkj4eG9LL6K0zll9GkotwQ%2B0F9eYa138PBYbO%2FrgatUAnDtww%2FWDKvqd5Ej6U52ibiFWGnqa1%2FOA4M0F%2BS%2Fb5LuIoKzYdNSSoA8W7ajrdBwDxoFd33MNIgrj%2BV6fMu3EP%2F3be9NQCtDzAiDbIUmDNRwyAB7pecGfWYro%2Fi3Hj2e1p6KtLkkAP8uk0jPYneI2pQhjglWjZKbgAusSW0LcfLNf2PciC9ecHG3JQcTTLiFIgWgPYO7Ae5IWAOtPlZHKPzvsXbq9GTYRhJi%2B4XKjOTb634wAQNiNeAWg7eAiaFsiKBGWtUMKOmzr0GOqUBW5iUvWsp0S3YUs0DMjWuZecGDvJQ95Q55q2pt9pVAEPOu%2FAxHkaUP4MDXxk03gvrssA5dgDUJAsKj4%2Bu452HI6nxNF%2Fyca60Z4aO4s6snK2%2FdIVvLlUGG7oHMr8g0WZnTZqhsGOJi8R0oQpgmS9kQIXMz1ELEYJsZHSjG0EhTO9UchwjD5UAu3jkk2rtu6OjO8f9s22b%2BFalUpsZ3rKsBA8u%2BAX1&X-Amz-Signature=7a1950fbc87ae586e013d75751aa81158a0a4133d12886def9bb6a62f3353ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TSFVKLP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICjdzAko9CfaLvkCSHBcCij5itrtH5qsGS7LCSlG5XH1AiEA%2Bfspu9NTgYAI1EBAQEm1FLnxpoFLHfKt%2Fpqu546Wn5Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA1KaIK%2BQ5RUcbI14ircAzz9sA6mPYg1DRn%2BwYSTMt4NIv5U5ElMxDwWnAazBI8Ln5zyBpTSRnrJlb287NOpspUKnJcifVxDnBajYv1InWXwyDl0QlOJhvKViK2KC7i01m0odmCjcQjiJBNb69aq5kuAoDySl82DHT0jxBqYD28w%2Fn2mvmhOW0MP%2F1GexPqPYEShDIC6n7tvd7LcvfUqS%2BTZfeqE1DIBikdnL8sSMLA4J20M3%2F9Q7P%2BqhN%2F4c77Yd%2B0i%2FnhVepcwarbJDLsrc%2FmOvj7fQtP1soLp1a%2Fr3cd%2F%2FqFCuAifM9QicfJqKkJLWTRpEr4MEDIQIDY8g%2Fqz0VOQfXacY6vkj4eG9LL6K0zll9GkotwQ%2B0F9eYa138PBYbO%2FrgatUAnDtww%2FWDKvqd5Ej6U52ibiFWGnqa1%2FOA4M0F%2BS%2Fb5LuIoKzYdNSSoA8W7ajrdBwDxoFd33MNIgrj%2BV6fMu3EP%2F3be9NQCtDzAiDbIUmDNRwyAB7pecGfWYro%2Fi3Hj2e1p6KtLkkAP8uk0jPYneI2pQhjglWjZKbgAusSW0LcfLNf2PciC9ecHG3JQcTTLiFIgWgPYO7Ae5IWAOtPlZHKPzvsXbq9GTYRhJi%2B4XKjOTb634wAQNiNeAWg7eAiaFsiKBGWtUMKOmzr0GOqUBW5iUvWsp0S3YUs0DMjWuZecGDvJQ95Q55q2pt9pVAEPOu%2FAxHkaUP4MDXxk03gvrssA5dgDUJAsKj4%2Bu452HI6nxNF%2Fyca60Z4aO4s6snK2%2FdIVvLlUGG7oHMr8g0WZnTZqhsGOJi8R0oQpgmS9kQIXMz1ELEYJsZHSjG0EhTO9UchwjD5UAu3jkk2rtu6OjO8f9s22b%2BFalUpsZ3rKsBA8u%2BAX1&X-Amz-Signature=03e02a087d384b87c785ddfad54717e413618c37ea2ee2297dcdf285e39c82b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
