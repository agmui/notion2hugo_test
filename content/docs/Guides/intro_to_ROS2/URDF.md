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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOHR2BD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYK0g0mdHtfF5TeABnIqTR6ZxAXbTTald%2BvoBAz4lk5gIhALqulIUaevPQteUZC5sqOf1D93ITJvHDDC2ehMchGudlKv8DCFgQABoMNjM3NDIzMTgzODA1IgxmXAzqyTN8iasGKDAq3APKsmriRLUbJQsLUOyacu0u8ZuXb%2Fn4esu85YdGi8zHj3Dw1q02btKeb3GRiliPkcTClUV3vu3EILZSTokHyT5UrJ7I29jVzi54p2IZ8T5evZVieJdvzb%2B95B2UPiREUiBukkGJmB8EOvCpQYnu%2BAAY6Oz22cxAWN7rp6TnGqVkV4j5DJ%2Ftqm8F5fqWXHbfXehBjeJFMTokboEcLvts5PlQlky8QcJgwQzbnpHYWn4QIPnJ4qAIJj0D6SRwSCMoSX7ox%2FJuSD5n3JRegpEb4eYTFLEhQhbzF812Sxz1yORD6mUk3rfMXy27r%2FGFYrdsSoJ21SKq90jbqmTtM7lU8V7cF7cKuEMnb0iiURXgEn6MYe8PC7QblRKA9BdgQZ599Wiq57atGqIob445NlIzh3hqu4at%2FOpPDbq%2B4R9O%2FJ7GINT2Nk%2FU3HgikGO53y2hcs7G95yxltslWgbGbtNDP5g5e1Kpu0aQbIfjE8PjKJWuhiZ98rsC3LXwBSwe3c%2B3BEhIB04iSS%2Bp78cUiwf5rVtGT5%2FJ9PI2hCQd3JTsPirQYw26xs28wr9XH0fi0Lb6%2BIGrng7qkZLyL1F3FLRAmv%2F0D8Kousm5PATGoPn591uZExp3Muqk0K2z3fcpyTDwkd3DBjqkAT4I2F6NHzCV6lmdTv2XjxKSL7i8KC27LQSJe5UUwGHtJ%2FxWkMqYbWxYFl1PYWI25TDvurBXR02g49VrS4hXuYEh%2B6RZZyi1NggZuEhyX4hlwDbUdwBKKNKGqGH4C5wM4x%2FK7uT9oueTBTKc2y%2Bho%2F4f2wfuibCHJ7sOuSuoy11eM13YS64EdM61yOs95nm2gWjWUKuuJbGD0UtPzQC3DHH10ooF&X-Amz-Signature=3bada7163372852c28a0d751d964f1f86e5dc5c38063668155d794dd7645dc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOHR2BD%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYK0g0mdHtfF5TeABnIqTR6ZxAXbTTald%2BvoBAz4lk5gIhALqulIUaevPQteUZC5sqOf1D93ITJvHDDC2ehMchGudlKv8DCFgQABoMNjM3NDIzMTgzODA1IgxmXAzqyTN8iasGKDAq3APKsmriRLUbJQsLUOyacu0u8ZuXb%2Fn4esu85YdGi8zHj3Dw1q02btKeb3GRiliPkcTClUV3vu3EILZSTokHyT5UrJ7I29jVzi54p2IZ8T5evZVieJdvzb%2B95B2UPiREUiBukkGJmB8EOvCpQYnu%2BAAY6Oz22cxAWN7rp6TnGqVkV4j5DJ%2Ftqm8F5fqWXHbfXehBjeJFMTokboEcLvts5PlQlky8QcJgwQzbnpHYWn4QIPnJ4qAIJj0D6SRwSCMoSX7ox%2FJuSD5n3JRegpEb4eYTFLEhQhbzF812Sxz1yORD6mUk3rfMXy27r%2FGFYrdsSoJ21SKq90jbqmTtM7lU8V7cF7cKuEMnb0iiURXgEn6MYe8PC7QblRKA9BdgQZ599Wiq57atGqIob445NlIzh3hqu4at%2FOpPDbq%2B4R9O%2FJ7GINT2Nk%2FU3HgikGO53y2hcs7G95yxltslWgbGbtNDP5g5e1Kpu0aQbIfjE8PjKJWuhiZ98rsC3LXwBSwe3c%2B3BEhIB04iSS%2Bp78cUiwf5rVtGT5%2FJ9PI2hCQd3JTsPirQYw26xs28wr9XH0fi0Lb6%2BIGrng7qkZLyL1F3FLRAmv%2F0D8Kousm5PATGoPn591uZExp3Muqk0K2z3fcpyTDwkd3DBjqkAT4I2F6NHzCV6lmdTv2XjxKSL7i8KC27LQSJe5UUwGHtJ%2FxWkMqYbWxYFl1PYWI25TDvurBXR02g49VrS4hXuYEh%2B6RZZyi1NggZuEhyX4hlwDbUdwBKKNKGqGH4C5wM4x%2FK7uT9oueTBTKc2y%2Bho%2F4f2wfuibCHJ7sOuSuoy11eM13YS64EdM61yOs95nm2gWjWUKuuJbGD0UtPzQC3DHH10ooF&X-Amz-Signature=589141af0c52344d86951c99d655c2090b8530a46313baa1d3b6336b519da1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
