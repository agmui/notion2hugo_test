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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSH4R7B%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDkwn4R8n3A6%2B3o7ZuvcTJL7AV6e6uWKPk%2F7F5v3NTJzwIgPHXvPkNZe7DAYQhFaOyFneE9SljGQWVhKua6pJCX3n4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9uLZZDk9B82IC17ircA5%2BHmEegrt5ClnJU7ilgd9a%2Bl0tVIo2d0iKA%2BGkFinT7s%2Bx75xnehSgvCyVQaTu6c0Z0%2F%2F9AGZyqXuklAY4%2FPowM40qRzKAV3vUbzApGwS9r6n5705CF%2BFKXI7H2te2Mqb3%2BSZ5mFe%2BrP%2F%2BwajxTJzgAlVQPAlHZhcvjnpMhYttUIgJuRB%2F%2BFkPsEVvpFHR%2BIKw82nnoK5GjmKVCZeeI609%2F6t0l4iWyl958hqm6MK%2BrWYcjPi39O7XW2loekLCmZ8uGMqHypwaCCM1m5q%2FW88IEKiHwlGF%2B5sj5xJctwVksn4yg8c51C5A1XdYRK41s9Cm1SCZobytWg8P2Z1K4bq6krFDvIkGVCEhMwnR%2FrRV1tvyD3Of%2FlrmL66FS1Dbrd2NC69kRaR%2F8EsNvnHjTwE7CcEHwFX5qyfDNRPFQ0l7gYj3o%2FB9JSATS0VKl%2BVTg2HEvMVX7KnGl1DdyOIJCRSLzml%2FqbD%2Bp6rvySZllilBzp3mhWwL6%2BIUocIvsIXHf%2BxZENuWxS6QOT0ZlWZE6cXazRGb2umAKaA8f9FzLwJZeMUB%2BKt3fLO1VXpaK6VjfyyZzHJbo3EXl7AVMlVje94A1NBDAp4MQ0sc7Nq56EWY82feQ%2F%2FuL%2FkDis%2FGiMIXJzcAGOqUBO%2FvHebd5SQojqQoytA15RpzoIzWJ7VzHF0xQ8EPyxXionN%2FzK%2B2sH6ieXLMTdX8GgidjYrqmio208%2BlfO6ClgudhXE332CP%2FRukgWQLKXVMgGuojmqYDuZ8jXie8P6yehnEgDIhLWLeJxhLlNiK%2FpQ%2Ff3cx5OK3aIzJw1gXHhlZfQJgNeFnCiEkK5eTaUmVWkxsJB6oxwsKwAlJ506Yr3h1lqfOg&X-Amz-Signature=b3d60c543fa1cdd3fa9ba21b7d12c60219bdd6e1bfe7f7ec2826be530cf1939b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSH4R7B%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDkwn4R8n3A6%2B3o7ZuvcTJL7AV6e6uWKPk%2F7F5v3NTJzwIgPHXvPkNZe7DAYQhFaOyFneE9SljGQWVhKua6pJCX3n4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9uLZZDk9B82IC17ircA5%2BHmEegrt5ClnJU7ilgd9a%2Bl0tVIo2d0iKA%2BGkFinT7s%2Bx75xnehSgvCyVQaTu6c0Z0%2F%2F9AGZyqXuklAY4%2FPowM40qRzKAV3vUbzApGwS9r6n5705CF%2BFKXI7H2te2Mqb3%2BSZ5mFe%2BrP%2F%2BwajxTJzgAlVQPAlHZhcvjnpMhYttUIgJuRB%2F%2BFkPsEVvpFHR%2BIKw82nnoK5GjmKVCZeeI609%2F6t0l4iWyl958hqm6MK%2BrWYcjPi39O7XW2loekLCmZ8uGMqHypwaCCM1m5q%2FW88IEKiHwlGF%2B5sj5xJctwVksn4yg8c51C5A1XdYRK41s9Cm1SCZobytWg8P2Z1K4bq6krFDvIkGVCEhMwnR%2FrRV1tvyD3Of%2FlrmL66FS1Dbrd2NC69kRaR%2F8EsNvnHjTwE7CcEHwFX5qyfDNRPFQ0l7gYj3o%2FB9JSATS0VKl%2BVTg2HEvMVX7KnGl1DdyOIJCRSLzml%2FqbD%2Bp6rvySZllilBzp3mhWwL6%2BIUocIvsIXHf%2BxZENuWxS6QOT0ZlWZE6cXazRGb2umAKaA8f9FzLwJZeMUB%2BKt3fLO1VXpaK6VjfyyZzHJbo3EXl7AVMlVje94A1NBDAp4MQ0sc7Nq56EWY82feQ%2F%2FuL%2FkDis%2FGiMIXJzcAGOqUBO%2FvHebd5SQojqQoytA15RpzoIzWJ7VzHF0xQ8EPyxXionN%2FzK%2B2sH6ieXLMTdX8GgidjYrqmio208%2BlfO6ClgudhXE332CP%2FRukgWQLKXVMgGuojmqYDuZ8jXie8P6yehnEgDIhLWLeJxhLlNiK%2FpQ%2Ff3cx5OK3aIzJw1gXHhlZfQJgNeFnCiEkK5eTaUmVWkxsJB6oxwsKwAlJ506Yr3h1lqfOg&X-Amz-Signature=002e07b7fbf28e6f6d4d4f99ddca05232d1ea98676c97c4b2af2a24f88c7e7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
