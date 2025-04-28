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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDMTOJQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3zvrfbyLTRbb7BAisGoCEZE3b4D3o1AYb34ikSXaUKwIgIeOvWbyzUdBNVJ4mK6lTv0yRHNYgmtlMp%2FMuYQfrRjQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSK29VCsIZTsaW7ircA7LJQRq6a3yOPsF1uPRdY3934iyEjyDqUDWXeq62hDWiMe%2FpiLJlIcKKj5PKXowufCBb9hbpnjtKfW7vJePt0NhxC1xv7jeeA5ovS5o7ag6i6O0KW4jWGQU7qa2mjkOf29mRev2Efx5WM67WaU0Zc9XZ8pQvRtz%2BwDRv%2FLyfEvmf6suR3sSXh3o8GbqRrUTUIs5K2TPgokcSX0WFkiADz%2BmsPyEGyM%2BVODmGuu9DyMUHyuZ9sbvN03YNhG2McwAQoAv5zH9S7kHvFye%2BsTPN4fF9kFs19lRrHitz9Wv41JIjFQALZIIN7hUEtTkwK37YExkG0e2Ho%2FA7HrokHJ54TeQ7eUlaR0MifXj9UGXKIRZH9hsiPWfuHCoArhqhY4s4p5hC2rdyLMMA6SIl%2FgIm2WiFtH4Y2XzrPwQbp8poBZDGHeuQ1FRhqNNaNhIReNAVAywC0Em8NLffcPUsg%2BkFVASb2omtgzInG7UupyYX%2BWq2uOkBnqhamPTNk8M1TJzpTuvLtW2nrXqeeCMn0yNhbYz86fDz2G5vNIhCKdkhfBJTmYhVn%2Bn13HWYoGVE%2BpD6rYcN%2FlQhiBC24wSh9vP26xF5EpkahK%2FtMTrqZKV8MqNMeGJ5d6HJcTV4%2Fty0MLCKwMAGOqUBpzWLtbUNOtHh7aLiFYA3qsxUNXvBdHAWeYg7kKFcg7ZMKCDDbIKnfu9aw%2FLLQyfil6yDuY3yUJjFgtS89PhSRtqH6KMcsHGeDJofns%2FeRh5YhOd6n8j0eLqFULbRprltu%2BkaiWYvwA4MDTtyzDl5lrXbczbaACXNUZKGBIx4ssY1l7Ran9xhZY6050vpArklDrxR45vGrwrP6dA2F2f%2FKW3uD3Nh&X-Amz-Signature=0961a382530546196f6f6162bde7ccba5c33e69e397ef04a3e1709fed4333611&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDMTOJQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3zvrfbyLTRbb7BAisGoCEZE3b4D3o1AYb34ikSXaUKwIgIeOvWbyzUdBNVJ4mK6lTv0yRHNYgmtlMp%2FMuYQfrRjQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSK29VCsIZTsaW7ircA7LJQRq6a3yOPsF1uPRdY3934iyEjyDqUDWXeq62hDWiMe%2FpiLJlIcKKj5PKXowufCBb9hbpnjtKfW7vJePt0NhxC1xv7jeeA5ovS5o7ag6i6O0KW4jWGQU7qa2mjkOf29mRev2Efx5WM67WaU0Zc9XZ8pQvRtz%2BwDRv%2FLyfEvmf6suR3sSXh3o8GbqRrUTUIs5K2TPgokcSX0WFkiADz%2BmsPyEGyM%2BVODmGuu9DyMUHyuZ9sbvN03YNhG2McwAQoAv5zH9S7kHvFye%2BsTPN4fF9kFs19lRrHitz9Wv41JIjFQALZIIN7hUEtTkwK37YExkG0e2Ho%2FA7HrokHJ54TeQ7eUlaR0MifXj9UGXKIRZH9hsiPWfuHCoArhqhY4s4p5hC2rdyLMMA6SIl%2FgIm2WiFtH4Y2XzrPwQbp8poBZDGHeuQ1FRhqNNaNhIReNAVAywC0Em8NLffcPUsg%2BkFVASb2omtgzInG7UupyYX%2BWq2uOkBnqhamPTNk8M1TJzpTuvLtW2nrXqeeCMn0yNhbYz86fDz2G5vNIhCKdkhfBJTmYhVn%2Bn13HWYoGVE%2BpD6rYcN%2FlQhiBC24wSh9vP26xF5EpkahK%2FtMTrqZKV8MqNMeGJ5d6HJcTV4%2Fty0MLCKwMAGOqUBpzWLtbUNOtHh7aLiFYA3qsxUNXvBdHAWeYg7kKFcg7ZMKCDDbIKnfu9aw%2FLLQyfil6yDuY3yUJjFgtS89PhSRtqH6KMcsHGeDJofns%2FeRh5YhOd6n8j0eLqFULbRprltu%2BkaiWYvwA4MDTtyzDl5lrXbczbaACXNUZKGBIx4ssY1l7Ran9xhZY6050vpArklDrxR45vGrwrP6dA2F2f%2FKW3uD3Nh&X-Amz-Signature=c561cd0ea1918493d53effb54b0989c68df685dc2e67a72318b28eb88a45ef29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
