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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRAIEVB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD5m9ltNr6uxkQBZ24rHZ%2FdkPoBKgOv73Lcrm36xNoZ3QIhAPLmiCEQG0XDzJHLIhvn3wwKYjPGxNJfvxmvbFFiVapiKv8DCHUQABoMNjM3NDIzMTgzODA1Igxqf8TDNMyEC4oziFoq3AMckAumr2amOMKGOHtAWPF6tDqWjnLlSZobzLU%2Btqlax9vU9i9sVscRquPYfwDLetUl4NOD8ip6AEyeCt8bDmzq%2Bh63ALFkfjoK%2Bw2sUxVu4kvhf%2FhzinG%2FXi4%2F6uQZ1akEau0FrmM%2FibcIYPovxMm27xAfQiq86tB%2B23AIQSEXtpd5VU9Sn%2FmbIhu7C%2BOk%2BSuwk5a7NEgg9SOgZPtzN0jAhCRcozDqFil%2FSrssxF%2FMhOsp40V658ye9dkWwWPYkt6fmNpMv7HZIwJVDk63iEwfRE2yUmLJa%2Bh3BRVNMDGnyEuIYXO67eXy%2FUNx3lmOPpV9EYGJLTNok91J9zyHp87%2FqvgxLLh%2F5SSSp4rxYa4kN9Q1BUp6S3wKLcfumPodcHNeUDe1VqXkaK%2FKJJg3gj%2FezfMr0rMrCRKcPKAa2ZdSa7KtwceXD9Pa%2BVXk3%2Bz9V%2FHWilzVkCnzZ42DOxCzgNpH4Is1IFN%2F%2BkOzo95B5SkXRNa6A5jjKvs1wKihVSstK2FNTw9nzx4NnQ4r2sYeCzNiJqxEwCfn1Jb8FyeWcpZtn%2FvHU6ncJropOKoZxCH0BYrDqgB4wUUilZmEFtv4%2BjGAZYWzzr28auSWHA3HpEbiFmwAvh9L9ca3rQiBkDCiroG%2BBjqkAV1iTSBLpZRPokxz5amfbM8GyFtgppAO4QX1wjuCKilqgb%2FqUMnCVuULy6M8wVDCT9%2BjMoHtMUeo1AJczlcY7JjJYvceJYqhRkXUDnVCbwFjz1puTtKP1pEDZ7NqZZbuTncwG1mg2EuMWANmLlkfiKG32VrGBpHu7Kv7crfIcJkr7EHNZWTZ3s9Io2gi6ojaOmIuiM9%2BJ9OD%2Bn8FRfDYpaE8Muz0&X-Amz-Signature=c842de72fff8ece652a53f204fcad85a0af18d7996d26260647ad6b25769ec6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRAIEVB%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD5m9ltNr6uxkQBZ24rHZ%2FdkPoBKgOv73Lcrm36xNoZ3QIhAPLmiCEQG0XDzJHLIhvn3wwKYjPGxNJfvxmvbFFiVapiKv8DCHUQABoMNjM3NDIzMTgzODA1Igxqf8TDNMyEC4oziFoq3AMckAumr2amOMKGOHtAWPF6tDqWjnLlSZobzLU%2Btqlax9vU9i9sVscRquPYfwDLetUl4NOD8ip6AEyeCt8bDmzq%2Bh63ALFkfjoK%2Bw2sUxVu4kvhf%2FhzinG%2FXi4%2F6uQZ1akEau0FrmM%2FibcIYPovxMm27xAfQiq86tB%2B23AIQSEXtpd5VU9Sn%2FmbIhu7C%2BOk%2BSuwk5a7NEgg9SOgZPtzN0jAhCRcozDqFil%2FSrssxF%2FMhOsp40V658ye9dkWwWPYkt6fmNpMv7HZIwJVDk63iEwfRE2yUmLJa%2Bh3BRVNMDGnyEuIYXO67eXy%2FUNx3lmOPpV9EYGJLTNok91J9zyHp87%2FqvgxLLh%2F5SSSp4rxYa4kN9Q1BUp6S3wKLcfumPodcHNeUDe1VqXkaK%2FKJJg3gj%2FezfMr0rMrCRKcPKAa2ZdSa7KtwceXD9Pa%2BVXk3%2Bz9V%2FHWilzVkCnzZ42DOxCzgNpH4Is1IFN%2F%2BkOzo95B5SkXRNa6A5jjKvs1wKihVSstK2FNTw9nzx4NnQ4r2sYeCzNiJqxEwCfn1Jb8FyeWcpZtn%2FvHU6ncJropOKoZxCH0BYrDqgB4wUUilZmEFtv4%2BjGAZYWzzr28auSWHA3HpEbiFmwAvh9L9ca3rQiBkDCiroG%2BBjqkAV1iTSBLpZRPokxz5amfbM8GyFtgppAO4QX1wjuCKilqgb%2FqUMnCVuULy6M8wVDCT9%2BjMoHtMUeo1AJczlcY7JjJYvceJYqhRkXUDnVCbwFjz1puTtKP1pEDZ7NqZZbuTncwG1mg2EuMWANmLlkfiKG32VrGBpHu7Kv7crfIcJkr7EHNZWTZ3s9Io2gi6ojaOmIuiM9%2BJ9OD%2Bn8FRfDYpaE8Muz0&X-Amz-Signature=7e08572425314b56cad2c7d394c9e3e7d4e52e361d8c89f5a0d5773fa6850e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
