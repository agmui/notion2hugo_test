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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYUATNJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDpV3nyBgvB4GJUik62R6NtdI6%2F9nCFjqJmbEruBrVW2QIhAJgyuV8lziyUpCJqB0zSD%2F8EpinmbaQq4EVD8hr4xKofKv8DCDwQABoMNjM3NDIzMTgzODA1IgxCeik3F2Y3IN7dTk0q3AMcr9hL3yUV8oh6swRuOis5j9LR9%2FwH%2FgaS57q9VclXEKOI8%2BYQzluFJwfQ3E8TObMif9DlzyjRCN%2FAu1DT6Y7O6sF9N6jVYevYZFVWGa7Ch4QDsBAc9XA%2FavsCQzcLrQmBKcOTyErSDa%2FN6yTkAuqaYqEEr1Go204R3oHt30ZpnsTW%2F3njm%2Fv8sNlz0zs0e6Sx3kWBvms%2ByMxMq4NyeopNA2YcuHUP41lzAFlnN%2FrE%2F70EDutZRgiUpcPHEpdm885Wez5NzUeP%2FgYbW5FdWFuCeOsi1VY8o5k70og6vLpDvwU6vuIjR1%2BH0LOgff%2FwcPy1gmtcoJllrjs4fTfvznphSDsMEbGTcG3WacvOaLFhJNr61O8xeGv%2FdqYneZVYgGLUE3aQqvUdFGJkUpTY0VtGDSJ9Hu3Y7jrisHmUJTqet%2FqVUW8qDBxzaoS3mZ9r7imVj5xgAT4MOYboGZipP5wK6ageblwiS0mCgnTFgAh4IfxagnpD80PafvuaiER9msCQdFWVupbc4ePqhIalNYkn6qb85Kjc4osCt3ehS5yp5bAyhImfLH0%2FNW9TqdRuT%2Fw8ETkJFqR5IHOZRvUpEkzWRBPTG8TO0GctPM9zi6PPrJHx0J7XnkdvoC3ZYTCQmYTCBjqkAf66kXKXeC%2Bz8taFFaLipdVX5cCk57Hi7Wrb2MYCt8%2FGtkjC3V%2BmTuEAdVcTu0zd%2FoStZEuKEW1QQiDsjhKIShipUIhwpQ%2Fe8DBHjJ5%2Bze6J3QVt0RAa9u8GkMQrMin63PCuFeVGKff7qyRRwzFFLrD%2FQPCTwrZ7x8T%2FvjGLqnCRvWuHY07XOPvyGAipHIBMu48G9vHR%2BPyfgoYJV5VjxDmLltLH&X-Amz-Signature=ec24d2decbb91713fb771c66157848b7bfca1da30a3371866a3d32e26e0a86f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYUATNJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDpV3nyBgvB4GJUik62R6NtdI6%2F9nCFjqJmbEruBrVW2QIhAJgyuV8lziyUpCJqB0zSD%2F8EpinmbaQq4EVD8hr4xKofKv8DCDwQABoMNjM3NDIzMTgzODA1IgxCeik3F2Y3IN7dTk0q3AMcr9hL3yUV8oh6swRuOis5j9LR9%2FwH%2FgaS57q9VclXEKOI8%2BYQzluFJwfQ3E8TObMif9DlzyjRCN%2FAu1DT6Y7O6sF9N6jVYevYZFVWGa7Ch4QDsBAc9XA%2FavsCQzcLrQmBKcOTyErSDa%2FN6yTkAuqaYqEEr1Go204R3oHt30ZpnsTW%2F3njm%2Fv8sNlz0zs0e6Sx3kWBvms%2ByMxMq4NyeopNA2YcuHUP41lzAFlnN%2FrE%2F70EDutZRgiUpcPHEpdm885Wez5NzUeP%2FgYbW5FdWFuCeOsi1VY8o5k70og6vLpDvwU6vuIjR1%2BH0LOgff%2FwcPy1gmtcoJllrjs4fTfvznphSDsMEbGTcG3WacvOaLFhJNr61O8xeGv%2FdqYneZVYgGLUE3aQqvUdFGJkUpTY0VtGDSJ9Hu3Y7jrisHmUJTqet%2FqVUW8qDBxzaoS3mZ9r7imVj5xgAT4MOYboGZipP5wK6ageblwiS0mCgnTFgAh4IfxagnpD80PafvuaiER9msCQdFWVupbc4ePqhIalNYkn6qb85Kjc4osCt3ehS5yp5bAyhImfLH0%2FNW9TqdRuT%2Fw8ETkJFqR5IHOZRvUpEkzWRBPTG8TO0GctPM9zi6PPrJHx0J7XnkdvoC3ZYTCQmYTCBjqkAf66kXKXeC%2Bz8taFFaLipdVX5cCk57Hi7Wrb2MYCt8%2FGtkjC3V%2BmTuEAdVcTu0zd%2FoStZEuKEW1QQiDsjhKIShipUIhwpQ%2Fe8DBHjJ5%2Bze6J3QVt0RAa9u8GkMQrMin63PCuFeVGKff7qyRRwzFFLrD%2FQPCTwrZ7x8T%2FvjGLqnCRvWuHY07XOPvyGAipHIBMu48G9vHR%2BPyfgoYJV5VjxDmLltLH&X-Amz-Signature=12c223566f7dc52585ed4d5e2dc600a4978ac9ceba4a1f6d2736f0bca5a59c81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
