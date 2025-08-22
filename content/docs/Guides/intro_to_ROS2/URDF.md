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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4XJW3K%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYLKoJpvwoV2Iz0wvHxIwaRnHsS1dNkJn92yvoPPHAwAiALRqCGl%2FJhR%2BHmwUDCdSyMa9qWbrT2dw0Fi%2FiniiySUiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28%2BAtTrqmz2n6aYPKtwDg8%2Fefb0KvNgo4Ew0X72AwYmW5NcFemKN%2BnFFqIFglYnqogBoQ2mxQKUC2sgTV64BLx7C%2Fv%2FESD%2FAN8wNZsPwngG7u0faHQXbJEylblaKWeBWPrO4IBp%2Bb8Xp%2Bv3zG9oJ12uVa4HtSB8GfttcvRKcQKTZ4xrNBBTpifEegmJsoUt4%2BFhKoO9xENnerFw9y3oDEkzqzsWon%2BER1zrzVKxm02nb2w7Hdgb4%2FGwUqB9JEWuZMQ9CrRG6pkSttO0EgEEbt7cv03awWa8cYILirIslapiZ2PgRCnhZev1CA3jkZqD1xQmM%2FIcOMz3sV3ZKAEBsX4ukW61TLlhh5XyPpfo83x0WoFli6h8O6HuBR8QhwnwUQUBWdufIchFCv54QrLhJu9euiwQx4UyKTUoefZkfgRmlbdqO9N3jPINIKBt93GxoFnFNfn36GNpeeO8sdso9ynxVxmKVbeKoM4xMgbi7uDYfBBWoB%2BhQaczvMWkIElMw7D6A7Cu7J%2BTknIu9MmiJI4SaYhrH00PEzv52pUaXmOXWwBbXuEJ4DbkluGIwfzKbdM9UnKexj%2FCpoYtC1PbuQ3dnpXo4woFLc4u%2F8GmDeYjrNhZA0AmQml%2FG%2BayY9cGrzd76gto3%2BLDvTf8w9%2FKexQY6pgFjMUiqoUq3%2BtetvfyjsS5BL0oFrLWO6clYfEp38W21BbnLHgQZdyNjFw3jG9JrhjmwBP8CL7xctHSFCJCvd0p%2Fpcw0i%2Bwazq0W1d1%2F%2Fi7mRlD%2Bl2p0QV5nuPfyknKJxtogh%2B5pb%2FWBZOE0CZQ2KEAmIT3areZS8oJ9qYIyUt1oEruSWnnY1HBkyUd%2Fl2NtV4qjLGa7MIiR6Yq5MZtnN42ha9aDsl6s&X-Amz-Signature=0e2527bd59e13780d12119282e01e325aad3c06201ea3f9d4540627f65355db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4XJW3K%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYLKoJpvwoV2Iz0wvHxIwaRnHsS1dNkJn92yvoPPHAwAiALRqCGl%2FJhR%2BHmwUDCdSyMa9qWbrT2dw0Fi%2FiniiySUiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM28%2BAtTrqmz2n6aYPKtwDg8%2Fefb0KvNgo4Ew0X72AwYmW5NcFemKN%2BnFFqIFglYnqogBoQ2mxQKUC2sgTV64BLx7C%2Fv%2FESD%2FAN8wNZsPwngG7u0faHQXbJEylblaKWeBWPrO4IBp%2Bb8Xp%2Bv3zG9oJ12uVa4HtSB8GfttcvRKcQKTZ4xrNBBTpifEegmJsoUt4%2BFhKoO9xENnerFw9y3oDEkzqzsWon%2BER1zrzVKxm02nb2w7Hdgb4%2FGwUqB9JEWuZMQ9CrRG6pkSttO0EgEEbt7cv03awWa8cYILirIslapiZ2PgRCnhZev1CA3jkZqD1xQmM%2FIcOMz3sV3ZKAEBsX4ukW61TLlhh5XyPpfo83x0WoFli6h8O6HuBR8QhwnwUQUBWdufIchFCv54QrLhJu9euiwQx4UyKTUoefZkfgRmlbdqO9N3jPINIKBt93GxoFnFNfn36GNpeeO8sdso9ynxVxmKVbeKoM4xMgbi7uDYfBBWoB%2BhQaczvMWkIElMw7D6A7Cu7J%2BTknIu9MmiJI4SaYhrH00PEzv52pUaXmOXWwBbXuEJ4DbkluGIwfzKbdM9UnKexj%2FCpoYtC1PbuQ3dnpXo4woFLc4u%2F8GmDeYjrNhZA0AmQml%2FG%2BayY9cGrzd76gto3%2BLDvTf8w9%2FKexQY6pgFjMUiqoUq3%2BtetvfyjsS5BL0oFrLWO6clYfEp38W21BbnLHgQZdyNjFw3jG9JrhjmwBP8CL7xctHSFCJCvd0p%2Fpcw0i%2Bwazq0W1d1%2F%2Fi7mRlD%2Bl2p0QV5nuPfyknKJxtogh%2B5pb%2FWBZOE0CZQ2KEAmIT3areZS8oJ9qYIyUt1oEruSWnnY1HBkyUd%2Fl2NtV4qjLGa7MIiR6Yq5MZtnN42ha9aDsl6s&X-Amz-Signature=562e67347527ab03e7e13fda29a758856e7cc6c28ff4282825c1a5e1146f67a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
