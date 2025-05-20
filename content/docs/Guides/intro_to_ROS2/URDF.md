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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UWXQIH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI%2Bq%2BWg5UfvbpCp9UFlZ%2F%2BSmLWgGlsCf9xAMt59Pf4KAiB%2FaUANvLMfgLxONEgd4Go3Ry%2BugAr5Fwo0hbKIU8D5RyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOEgYXhzUrh3hQuI1KtwDFkeAftNlO%2B8hpX02qVyaObCoSnKY6kHKtOdGlBjV%2FRL%2Bjq%2FEy%2BaaMiEBCrtF6QsQsHSjqdX%2FfQGAX8I%2FBdNTBpEAQKU9oxfxRX9GvndXZJh2WWlL6GJ1KvXWVeZjUczE0meVnBNmG6E3kpXc5%2BSUFXcLk1XwNFrroylYSET%2FAUR7XvYqNp%2FcBwjJDnxXTBjokEfcOvs%2Fwcxew0MphPXj3iyJ%2BSTpCG9oJeJem9XlmSPbb6W7bfDgj6o6GEvtuNdE1n5b7ZvF2KauY4BJxKuHU4EVc8UEsZbv5UHlIbh0IziS2maLhxHYgkVeUl%2FBN174t9YQvHUitlxImKVC87ymUgrGZUEcDd%2Bu6IozqbDAimQ2W3uHt%2FM6otjhm11ASJXsRzj5YNtaOrZALID5i59sSgNQTbEG4eEFhKaln%2FElEsuldSp%2BKJub1zugtJkzZ4%2FdG%2F3f%2FHhGBkwOonnS7FZ%2FyCRwlZmDtTHGrHTPfqZyFvVAUNmBwy0mtspLDjwVvolL%2F3fFWJeYH0i0ThkghPKhsCys9%2FAMwv%2FZnzep5Tr%2F2JNnxA1ZhgUuuzrLIHVJpObFsuwWWq1i614VixWtdXefxhT3yd3WsVxeSWhaIjYCq9zAxI%2BXRbxFrP8U7CAwjMewwQY6pgFUVgy30w7f78IWtJmD%2FpbhBkuLwwXdDyqlKcc6EjaOHe4m1sHst7uIY7NVxcDyiQkssmvYIlIKummZEMnWE99pHncDbLQAhEY3JH6WRCz2ISZCGKycdDzs4psZ2uSznG0BmNEZsMnJmhZkLnOI5kZptnuuPiaUK58hA4U2ZVpVJJJtdm8OcLDJ2lUeJ1ndUlVsDH0Wd2MW1wCGf5CEo5AQVsCKJ2uX&X-Amz-Signature=978960d65733e1256e180165ca356ab825d8538a59c200ba0fd384afeee50b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UWXQIH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI%2Bq%2BWg5UfvbpCp9UFlZ%2F%2BSmLWgGlsCf9xAMt59Pf4KAiB%2FaUANvLMfgLxONEgd4Go3Ry%2BugAr5Fwo0hbKIU8D5RyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOEgYXhzUrh3hQuI1KtwDFkeAftNlO%2B8hpX02qVyaObCoSnKY6kHKtOdGlBjV%2FRL%2Bjq%2FEy%2BaaMiEBCrtF6QsQsHSjqdX%2FfQGAX8I%2FBdNTBpEAQKU9oxfxRX9GvndXZJh2WWlL6GJ1KvXWVeZjUczE0meVnBNmG6E3kpXc5%2BSUFXcLk1XwNFrroylYSET%2FAUR7XvYqNp%2FcBwjJDnxXTBjokEfcOvs%2Fwcxew0MphPXj3iyJ%2BSTpCG9oJeJem9XlmSPbb6W7bfDgj6o6GEvtuNdE1n5b7ZvF2KauY4BJxKuHU4EVc8UEsZbv5UHlIbh0IziS2maLhxHYgkVeUl%2FBN174t9YQvHUitlxImKVC87ymUgrGZUEcDd%2Bu6IozqbDAimQ2W3uHt%2FM6otjhm11ASJXsRzj5YNtaOrZALID5i59sSgNQTbEG4eEFhKaln%2FElEsuldSp%2BKJub1zugtJkzZ4%2FdG%2F3f%2FHhGBkwOonnS7FZ%2FyCRwlZmDtTHGrHTPfqZyFvVAUNmBwy0mtspLDjwVvolL%2F3fFWJeYH0i0ThkghPKhsCys9%2FAMwv%2FZnzep5Tr%2F2JNnxA1ZhgUuuzrLIHVJpObFsuwWWq1i614VixWtdXefxhT3yd3WsVxeSWhaIjYCq9zAxI%2BXRbxFrP8U7CAwjMewwQY6pgFUVgy30w7f78IWtJmD%2FpbhBkuLwwXdDyqlKcc6EjaOHe4m1sHst7uIY7NVxcDyiQkssmvYIlIKummZEMnWE99pHncDbLQAhEY3JH6WRCz2ISZCGKycdDzs4psZ2uSznG0BmNEZsMnJmhZkLnOI5kZptnuuPiaUK58hA4U2ZVpVJJJtdm8OcLDJ2lUeJ1ndUlVsDH0Wd2MW1wCGf5CEo5AQVsCKJ2uX&X-Amz-Signature=745b9a2389656685d2522c0d154052b42ab8fc53ff37903524d48863ee48c7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
