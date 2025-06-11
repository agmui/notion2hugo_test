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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673OG2TZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBdvCr6LQ6d9KPGQEA4Hh4AN6Wk1%2FhLHRQW7B7lKR7aAiAQ3Tw8rFoO3AJtvGuRy4rOrXFiMOQ6mWcJOumhN2bA9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3tuem5PKpXRQ3BQrKtwDZ4IBgGYwZXIHBUNMz4l5INX%2Bb3NdtkN5R4SEUzibPtHuIkl%2FsfdeU%2FrWAfMqgZtFeouRPX3H12WjNtkvmKLs0KIb7GeVkOFfZf6ddk1EXjKX49yw9gnTxpKt5f0BJGs%2FFQTB3KmTbaGTUQQP%2BY2b0eu0qkzPHNTdjuYNToyhr7v9MgwuCzgXknkcrEqUQwK76g2%2FKZRWiy8YxTr4UcwI9MUVT09bxTFtnj2lCkiDEz%2FN8dUN5F8pjOlo2hXhnht%2Fw2FH7zwGw4V6p1m2V%2Bg9Jl7n0aCYQRv0vuH8qlqi3YrBTpwIE1jLEQo2R7UGhtocWatehWleZ6cZiOifH2tVrG%2B2Z5ya8z8o%2FGTENvaDFB2xNGtaUYDosmgQeLprQnZsEkYdFjTRHakdTntq8WvWIi1NOk6gYnnIVr%2FpESBjeB47dPG1fsF9iX6CG8saijsmzEWSP0%2BvuOIQEOnaRWWOKsGtfAiv2X8WP9XviU8dC%2BcfTRO9ALqIvHINjbzQoOKz09zK09VT%2FY57j5G19%2BO4iNaQCQx3qwfi3DdWAj%2FKFEex23F9nSar5hsvROu0TQC8uZQ1T3tAKz3M4PITAhws7WnyK7VUwh9%2FdVBwyNa70g%2FguzAbG8luay7iKJ4w9c%2BkwgY6pgHnpHb88bBi4iYEBHQh6en%2BiapskkPFhXYxqR82gfoVw13JC129AjGL61iKr%2FyOhtszftIByq6f%2B8jTwKgoxQoIfrA84juv4HinmkJovu%2BVkZzeX3y%2BPR6wsaGKXbuC1KRFswrPqTko4bOjGl2T5G%2BznrM8yj1JL7NG8yb6fIB8TZls1hfXkAuE4g9tQPTVVc9fsdP8askKWb3cJ1nd%2F7d7cIZioTj9&X-Amz-Signature=4da51f5d2537b8bdcf3ce95bad744a74099edbb8601eced042acabe19f4b115f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673OG2TZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBdvCr6LQ6d9KPGQEA4Hh4AN6Wk1%2FhLHRQW7B7lKR7aAiAQ3Tw8rFoO3AJtvGuRy4rOrXFiMOQ6mWcJOumhN2bA9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3tuem5PKpXRQ3BQrKtwDZ4IBgGYwZXIHBUNMz4l5INX%2Bb3NdtkN5R4SEUzibPtHuIkl%2FsfdeU%2FrWAfMqgZtFeouRPX3H12WjNtkvmKLs0KIb7GeVkOFfZf6ddk1EXjKX49yw9gnTxpKt5f0BJGs%2FFQTB3KmTbaGTUQQP%2BY2b0eu0qkzPHNTdjuYNToyhr7v9MgwuCzgXknkcrEqUQwK76g2%2FKZRWiy8YxTr4UcwI9MUVT09bxTFtnj2lCkiDEz%2FN8dUN5F8pjOlo2hXhnht%2Fw2FH7zwGw4V6p1m2V%2Bg9Jl7n0aCYQRv0vuH8qlqi3YrBTpwIE1jLEQo2R7UGhtocWatehWleZ6cZiOifH2tVrG%2B2Z5ya8z8o%2FGTENvaDFB2xNGtaUYDosmgQeLprQnZsEkYdFjTRHakdTntq8WvWIi1NOk6gYnnIVr%2FpESBjeB47dPG1fsF9iX6CG8saijsmzEWSP0%2BvuOIQEOnaRWWOKsGtfAiv2X8WP9XviU8dC%2BcfTRO9ALqIvHINjbzQoOKz09zK09VT%2FY57j5G19%2BO4iNaQCQx3qwfi3DdWAj%2FKFEex23F9nSar5hsvROu0TQC8uZQ1T3tAKz3M4PITAhws7WnyK7VUwh9%2FdVBwyNa70g%2FguzAbG8luay7iKJ4w9c%2BkwgY6pgHnpHb88bBi4iYEBHQh6en%2BiapskkPFhXYxqR82gfoVw13JC129AjGL61iKr%2FyOhtszftIByq6f%2B8jTwKgoxQoIfrA84juv4HinmkJovu%2BVkZzeX3y%2BPR6wsaGKXbuC1KRFswrPqTko4bOjGl2T5G%2BznrM8yj1JL7NG8yb6fIB8TZls1hfXkAuE4g9tQPTVVc9fsdP8askKWb3cJ1nd%2F7d7cIZioTj9&X-Amz-Signature=135f3449b84611cdb23183e0e426887977d096873cecff573d83204d4c42d938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
