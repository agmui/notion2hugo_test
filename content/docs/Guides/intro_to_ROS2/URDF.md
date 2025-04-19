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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSR2OWJS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICbrVWTDRJt5Ln0%2B4kv0txvaOOZ2v6m3X9vt3dJrIsjSAiEA0b5n1bp9mFkUwR8NWiYMXwdpThUxDxLmMCJZHVXlfOAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCRS%2F39DFxWsCK0vSrcA%2FI2pmyXyXL7%2BA%2F08UxiaWC5q337EdfkK3eetkaQFUzpptWjz8MLYhN9k6oU%2BadOGOZpOD4%2FA10oAZ%2BK%2FNesiomIibxZqbRNFAT2hPAOKS1ngE13XUtZrcVPCG5IDUWcAunSLhhziyL7e0k2YHtog4qpe2LIFn2KHiI8YO8HubSV%2FOgTBj4wz6kBYk4BmCxisWS2gxQ9yB9Am%2FfjS1Ilh%2FCnSQ%2FwhcY2rOTgAuED0JsI%2BAP19D8aj3cQ6K2%2B3fsrA%2FwcmptUy%2Bdt5NP5NhN3z7hPnJ6KLrFO91F4%2BCNKKINtpeWhl9GuDCs53fH4UlOuPK5AZoj4gvT%2Fb1rxBrPj8USv1qfSAeaDJIrt6kowhWyUvGAJUmJ7i%2FT1lIN29nywu%2BQIKNkYbjrMJZuMnQp6M23zS%2FE5QU0PyOXjHcr%2B5QQYUth4RiV3wlkMlTntwKaymcKXdEtjitu5mjWXy6eZtANIgF6gIaJgcEezkcZOlDBxR7vfcJuX8YFsQtKp6NbXGg304EoejXRKmTnUCOn%2FbryQcvk33et%2BQ4a4baHgxktLQUbbr7I32szC11inqBUjVQQQa%2BuzqUTfAytSrquAJHN%2FbGK95zjC1gKoEF%2BO383yVeV%2BxEa%2BRT0gCoe0MJCgj8AGOqUBZ2%2FePghQu6Y0884po7l0AxMgkhX8Q7uqwKKn%2FafUySnIm1tmRmFWIz0XxZpS1pfH89IoaFxd1hx1DD4v3ySJnKnnfEyRd92dVzBCM6vyUl7pp5kGkyrVEzn7Zegx7IQD%2Bh%2F93YLtPqvlaMJYluH0uRPdtsQdJc6mKIuWOWaguUjFWvHJKuDy4KLEzn54hrvPmBreAgbl9k1Qg%2BRq8%2Bvdu9MvJKXD&X-Amz-Signature=923f8fada79bb5cc1f167b858d4c0935625cf03f0bc00ba8bdc9d7b65a72e9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSR2OWJS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICbrVWTDRJt5Ln0%2B4kv0txvaOOZ2v6m3X9vt3dJrIsjSAiEA0b5n1bp9mFkUwR8NWiYMXwdpThUxDxLmMCJZHVXlfOAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCRS%2F39DFxWsCK0vSrcA%2FI2pmyXyXL7%2BA%2F08UxiaWC5q337EdfkK3eetkaQFUzpptWjz8MLYhN9k6oU%2BadOGOZpOD4%2FA10oAZ%2BK%2FNesiomIibxZqbRNFAT2hPAOKS1ngE13XUtZrcVPCG5IDUWcAunSLhhziyL7e0k2YHtog4qpe2LIFn2KHiI8YO8HubSV%2FOgTBj4wz6kBYk4BmCxisWS2gxQ9yB9Am%2FfjS1Ilh%2FCnSQ%2FwhcY2rOTgAuED0JsI%2BAP19D8aj3cQ6K2%2B3fsrA%2FwcmptUy%2Bdt5NP5NhN3z7hPnJ6KLrFO91F4%2BCNKKINtpeWhl9GuDCs53fH4UlOuPK5AZoj4gvT%2Fb1rxBrPj8USv1qfSAeaDJIrt6kowhWyUvGAJUmJ7i%2FT1lIN29nywu%2BQIKNkYbjrMJZuMnQp6M23zS%2FE5QU0PyOXjHcr%2B5QQYUth4RiV3wlkMlTntwKaymcKXdEtjitu5mjWXy6eZtANIgF6gIaJgcEezkcZOlDBxR7vfcJuX8YFsQtKp6NbXGg304EoejXRKmTnUCOn%2FbryQcvk33et%2BQ4a4baHgxktLQUbbr7I32szC11inqBUjVQQQa%2BuzqUTfAytSrquAJHN%2FbGK95zjC1gKoEF%2BO383yVeV%2BxEa%2BRT0gCoe0MJCgj8AGOqUBZ2%2FePghQu6Y0884po7l0AxMgkhX8Q7uqwKKn%2FafUySnIm1tmRmFWIz0XxZpS1pfH89IoaFxd1hx1DD4v3ySJnKnnfEyRd92dVzBCM6vyUl7pp5kGkyrVEzn7Zegx7IQD%2Bh%2F93YLtPqvlaMJYluH0uRPdtsQdJc6mKIuWOWaguUjFWvHJKuDy4KLEzn54hrvPmBreAgbl9k1Qg%2BRq8%2Bvdu9MvJKXD&X-Amz-Signature=d31505b7da2fe80ff9a60ef754433a3e6784d7b5d16c83d2a2050f42b3c222f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
