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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERMASYL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUsvhNUYm%2F1y9STf4SutoKn5qpDl2Y6Y717264u8MBtAiBioiTCOjkGdSAvUjBqRmixeg616H9U28eHVoIdTZSPgSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIFg69UV60g3Sed5KtwD9cpQjUWMQgmNHmOIjvCgKgFObY3N0Qv%2FRpSWwO9YilPY4Ab1x%2BYhXbca%2BuRZTZd07CgmLWKYzUw0wfdcRfQJOPOhGwHyuT59OlYLF6qFZyoymTa1EKK85li3sL2C%2BPbDKwbnOaS9ry%2FDdhqeblOy7f9WGzsO6cMhC%2BrYMuyTH83AYefRsnjPcYkNOa7tTsYCY0ByQS53H%2BZjDf5ZP50FXce18aID3oTRkDpWwiUDqF6j2bIjIuUjfDvpNSBeIAUDkg1BufrC1fbmqwmHscG4riKGe9hww%2FXePSh7LZsoaauiYci203vP14A5FT7B3UBuKhFT6keWBRnlf5xm4lgszEK9Jpffd4FQOUnFBe10Xmi2yVd1vgFfTsR4kkPrYKQ3H2guQZps1UU6ISyRdZJaR7mabGl%2FJd%2F8Ua1MygK9ekV%2Bllwmes%2FNGT5fNhPKRpKj8JE99Sw9O67nuE1b%2B%2FN488X%2BaDpKCgAB8JQc8d8UJIH%2FRz4qF2VMHwo8Ghbc4iFhktWGulOlmxKqeF6ZYc%2BdLFL1%2B3BzRkZfVXYkMLJyT%2B%2FeKmnCvt%2BvUwnPAwg1oo30Qz429WViyDPW006uejdJTDkbCIht2YuNFj8XY8ggo9VW4m73YhXfjQaoY6kw4rGuvwY6pgGbE1EIxS5zaTkTwsbAAjdYAhTbPPIUYWXzHe3gHzRFAnDZ58SDo5jOMKIvvTkIQeOVu3hdd3VKEKv0iBhSnhrh9ORhhMedS9oHxkVkF1Sxu5NGbs%2BtvCNvsxrOVtjkAns3b5t9DaMP8Ys8RUxePf1ZlJ88xD%2B2s6PWXSmZvj5RxdVEL7YjIcFrxbRLV420IfSUlFQcrkVR7%2FkIx%2FC%2BbKtyh%2FhNiilA&X-Amz-Signature=05aedcf0aad88bdd88e2a3f869141fce165d8e687c4f7d2c0ca49b45f122626a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ERMASYL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUsvhNUYm%2F1y9STf4SutoKn5qpDl2Y6Y717264u8MBtAiBioiTCOjkGdSAvUjBqRmixeg616H9U28eHVoIdTZSPgSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIFg69UV60g3Sed5KtwD9cpQjUWMQgmNHmOIjvCgKgFObY3N0Qv%2FRpSWwO9YilPY4Ab1x%2BYhXbca%2BuRZTZd07CgmLWKYzUw0wfdcRfQJOPOhGwHyuT59OlYLF6qFZyoymTa1EKK85li3sL2C%2BPbDKwbnOaS9ry%2FDdhqeblOy7f9WGzsO6cMhC%2BrYMuyTH83AYefRsnjPcYkNOa7tTsYCY0ByQS53H%2BZjDf5ZP50FXce18aID3oTRkDpWwiUDqF6j2bIjIuUjfDvpNSBeIAUDkg1BufrC1fbmqwmHscG4riKGe9hww%2FXePSh7LZsoaauiYci203vP14A5FT7B3UBuKhFT6keWBRnlf5xm4lgszEK9Jpffd4FQOUnFBe10Xmi2yVd1vgFfTsR4kkPrYKQ3H2guQZps1UU6ISyRdZJaR7mabGl%2FJd%2F8Ua1MygK9ekV%2Bllwmes%2FNGT5fNhPKRpKj8JE99Sw9O67nuE1b%2B%2FN488X%2BaDpKCgAB8JQc8d8UJIH%2FRz4qF2VMHwo8Ghbc4iFhktWGulOlmxKqeF6ZYc%2BdLFL1%2B3BzRkZfVXYkMLJyT%2B%2FeKmnCvt%2BvUwnPAwg1oo30Qz429WViyDPW006uejdJTDkbCIht2YuNFj8XY8ggo9VW4m73YhXfjQaoY6kw4rGuvwY6pgGbE1EIxS5zaTkTwsbAAjdYAhTbPPIUYWXzHe3gHzRFAnDZ58SDo5jOMKIvvTkIQeOVu3hdd3VKEKv0iBhSnhrh9ORhhMedS9oHxkVkF1Sxu5NGbs%2BtvCNvsxrOVtjkAns3b5t9DaMP8Ys8RUxePf1ZlJ88xD%2B2s6PWXSmZvj5RxdVEL7YjIcFrxbRLV420IfSUlFQcrkVR7%2FkIx%2FC%2BbKtyh%2FhNiilA&X-Amz-Signature=beeec952af10c48e9684b9c10a7fd62057f791ed65c63b5611d4b6951d96b369&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
