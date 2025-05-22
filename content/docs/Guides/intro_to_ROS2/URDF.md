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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLH4Q2J%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BjDHlUHWAXdatDujzznEycU4vsJ74XcJW9PQ%2FXjkeqAiBYLwgpz6HRiFgypl2BazvZh3exr0sqsrC4WA58hqoD7CqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOe8N01iamoqh6dbVKtwDFxPFQ5ud%2BbFEoKAbrVgAtNny2hCE%2Bbrvkt8wbnwWnm9pyx6HDjgGQvL0gfNwveWaw3j%2BQSk5TdHLsV6S4%2FuEAIrSyYE4vjdHTSMHJ5tjUByxalWKwdjQVhVAvbX7YBhZTzxGH8N3j4I2R7VC%2FyYl4%2BcMIPkuJHQEujQSG8cXS8UvXJqQnCZagwN7TniN%2Bz7BTP1caqx0zqQU5FwzskBvt%2Bl3A5Ers2q3Sqw5eYpxhA%2F8KO2G%2BR3ky5DHZ2AdKIVlKquZ8o3rbRHPqAE3xX4eydpQ9p2VOzCi3mE8WTvBOzQpN3Utn2c2WPwB4HVlD2qbX7QEf8kt%2Bgm6CM%2BSQQFm8gnW4ODKOybL%2BPuUMnwJMpWDdk9blmjFyjWKt9GN%2FzrvJItxvyLTkdPaBaqfiYE%2FF2m2ih66qThFRor0K1bgSTvUg6h3NRQQ3XPt2BP9VKRICel1H1%2Fg7qVLAXWGUK1XhwW6X3SjNdVHI6bdpOSre%2B1mr8C7GacUXS33MENhwthChQfg4TDZ1HL2LwxXa98aeWJxppVNt3RlS3PtEPf14wVPH6ViZIGItNy8%2FyVL64SUISWGrxM5ifA2CWhba0VU1%2B8kB2q7pm0XgL3cLb7oXskjg7xveIHtoP51haQwi%2BG8wQY6pgEboK%2F8VdxO3rtTXQyTqFS0V4aUmW3Y%2FaVjX38dw6TD9oKtV%2Bp1StcHvA4jnEzWdpam8St9gNboQV%2BqqqOxxrj9rUENfsTqueI0qc5fog8jBVAMZb95Y%2BMrmq6aYgikZvpeIV%2BEf2iYuMn%2FbVJIoYntlOZO1qJUrQmdX2pXK4%2FWIvXzEm038tH970QCxbHonS2wjgGPlEyeejYXD0Ht61DF8BI6uXCD&X-Amz-Signature=5903eaefaacd5976edcd9664545c10db3e82aebc3e24cfe25d6a05337dd6057b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLH4Q2J%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIA%2BjDHlUHWAXdatDujzznEycU4vsJ74XcJW9PQ%2FXjkeqAiBYLwgpz6HRiFgypl2BazvZh3exr0sqsrC4WA58hqoD7CqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOe8N01iamoqh6dbVKtwDFxPFQ5ud%2BbFEoKAbrVgAtNny2hCE%2Bbrvkt8wbnwWnm9pyx6HDjgGQvL0gfNwveWaw3j%2BQSk5TdHLsV6S4%2FuEAIrSyYE4vjdHTSMHJ5tjUByxalWKwdjQVhVAvbX7YBhZTzxGH8N3j4I2R7VC%2FyYl4%2BcMIPkuJHQEujQSG8cXS8UvXJqQnCZagwN7TniN%2Bz7BTP1caqx0zqQU5FwzskBvt%2Bl3A5Ers2q3Sqw5eYpxhA%2F8KO2G%2BR3ky5DHZ2AdKIVlKquZ8o3rbRHPqAE3xX4eydpQ9p2VOzCi3mE8WTvBOzQpN3Utn2c2WPwB4HVlD2qbX7QEf8kt%2Bgm6CM%2BSQQFm8gnW4ODKOybL%2BPuUMnwJMpWDdk9blmjFyjWKt9GN%2FzrvJItxvyLTkdPaBaqfiYE%2FF2m2ih66qThFRor0K1bgSTvUg6h3NRQQ3XPt2BP9VKRICel1H1%2Fg7qVLAXWGUK1XhwW6X3SjNdVHI6bdpOSre%2B1mr8C7GacUXS33MENhwthChQfg4TDZ1HL2LwxXa98aeWJxppVNt3RlS3PtEPf14wVPH6ViZIGItNy8%2FyVL64SUISWGrxM5ifA2CWhba0VU1%2B8kB2q7pm0XgL3cLb7oXskjg7xveIHtoP51haQwi%2BG8wQY6pgEboK%2F8VdxO3rtTXQyTqFS0V4aUmW3Y%2FaVjX38dw6TD9oKtV%2Bp1StcHvA4jnEzWdpam8St9gNboQV%2BqqqOxxrj9rUENfsTqueI0qc5fog8jBVAMZb95Y%2BMrmq6aYgikZvpeIV%2BEf2iYuMn%2FbVJIoYntlOZO1qJUrQmdX2pXK4%2FWIvXzEm038tH970QCxbHonS2wjgGPlEyeejYXD0Ht61DF8BI6uXCD&X-Amz-Signature=8a19a504c9358cd0d682ea108cb00018f0490582bcf6a02f4c79cf53173d22cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
