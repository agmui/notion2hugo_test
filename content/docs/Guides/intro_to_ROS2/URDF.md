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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AGSHFB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEpD7e%2F%2FONW0odt33R9yYqxKG9P%2FxfEXiOzPSV6dpYUwIhAKkbdyBJsggx2m6kHF0Sgdv%2BSedd8J6wX7wCfa%2BfUolsKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBY2l58UV%2BAP5Gr6wq3ANDhRiaJ2ZNkDr8Hv4laZbLPggCV3rRNdYY6GFu813AJEkO4uc8rVDgv%2B%2FCYdWXoDHZMJSKcl74Fc0UN6wCIx2Ka9E19kWt7Yzj19jSwSxkXo7RdNrg3yjjpW5g31BU4qiIw05vVg8gr%2BdUAKuxAPhnCw%2BEFPOVYMmm7H56j50MCpELzQ9iNdv3Qwq3Z633dGQWEpikLhmbUoyd3shHjvtyKHVxAQrdkQbwlrAcA2i1dMcwwLN4zZg4NAJN9yEY0YJY0j4U5mZLQ9d8wCSByZpgIxI6OAFR4WxlF8X42yKu9gxjY0%2BsAKhzvEDH6KBKZJloHBWfSiw0kAlW4X6KC05L6Zc6Kj08KoQLRs45E2GI4eAv938GUyJ3CrrCFRu9Wo3IEFiyR%2B70OS7rOYSwTTekHClQli5%2BEKKd9mA6c8uqpUYq5NVZmaM0nLTcC6arBOhPhlTfnARt9UEvujXqMClP2ZKGJQF%2BipECLEuuA4LB7dWbarN12MHNcJ0j%2F30w0biOpBhKiRyRw3o2%2BQAeRQWXUniSfBLLeZk8CkfA%2BplnlbopzXaxBvWOTvUA5dxPviZyCpI3n9EG4W%2B8%2F67iiPPrG5HiXaj8r0OV5BOvVE1Qt4Nl9nqLNOS%2Fvl6e2DC8o7jDBjqkAciQXzUsAIHH1T06sslRGIoZ7Zm3T60Gx4PQwlwx28dfD%2Fai1KGEYhwSTUBJ9c%2Fui22C4S0x0tXFwym1xeDsfwdhAlTUDhcQCCcoJCXvYWckoD84uurWGAS3Qm04cavr%2FcV38TibmANaYCwtznXKQ%2Fhs15VylXp12wZig3xltJvydPfEQrr8ruB1s%2Bagfbz%2FjVGJYyMByLZU9707cGwdLdHdtIrc&X-Amz-Signature=680b91fb55457ff54c3568a37b59e92bbba8b046778015d3925d889b18b45cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AGSHFB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEpD7e%2F%2FONW0odt33R9yYqxKG9P%2FxfEXiOzPSV6dpYUwIhAKkbdyBJsggx2m6kHF0Sgdv%2BSedd8J6wX7wCfa%2BfUolsKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBY2l58UV%2BAP5Gr6wq3ANDhRiaJ2ZNkDr8Hv4laZbLPggCV3rRNdYY6GFu813AJEkO4uc8rVDgv%2B%2FCYdWXoDHZMJSKcl74Fc0UN6wCIx2Ka9E19kWt7Yzj19jSwSxkXo7RdNrg3yjjpW5g31BU4qiIw05vVg8gr%2BdUAKuxAPhnCw%2BEFPOVYMmm7H56j50MCpELzQ9iNdv3Qwq3Z633dGQWEpikLhmbUoyd3shHjvtyKHVxAQrdkQbwlrAcA2i1dMcwwLN4zZg4NAJN9yEY0YJY0j4U5mZLQ9d8wCSByZpgIxI6OAFR4WxlF8X42yKu9gxjY0%2BsAKhzvEDH6KBKZJloHBWfSiw0kAlW4X6KC05L6Zc6Kj08KoQLRs45E2GI4eAv938GUyJ3CrrCFRu9Wo3IEFiyR%2B70OS7rOYSwTTekHClQli5%2BEKKd9mA6c8uqpUYq5NVZmaM0nLTcC6arBOhPhlTfnARt9UEvujXqMClP2ZKGJQF%2BipECLEuuA4LB7dWbarN12MHNcJ0j%2F30w0biOpBhKiRyRw3o2%2BQAeRQWXUniSfBLLeZk8CkfA%2BplnlbopzXaxBvWOTvUA5dxPviZyCpI3n9EG4W%2B8%2F67iiPPrG5HiXaj8r0OV5BOvVE1Qt4Nl9nqLNOS%2Fvl6e2DC8o7jDBjqkAciQXzUsAIHH1T06sslRGIoZ7Zm3T60Gx4PQwlwx28dfD%2Fai1KGEYhwSTUBJ9c%2Fui22C4S0x0tXFwym1xeDsfwdhAlTUDhcQCCcoJCXvYWckoD84uurWGAS3Qm04cavr%2FcV38TibmANaYCwtznXKQ%2Fhs15VylXp12wZig3xltJvydPfEQrr8ruB1s%2Bagfbz%2FjVGJYyMByLZU9707cGwdLdHdtIrc&X-Amz-Signature=a123c41ddc2d3a228c0cbb146f29e696f148fcb37a88caff905b79906e868efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
