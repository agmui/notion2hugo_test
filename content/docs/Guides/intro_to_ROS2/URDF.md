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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTA4FWL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2BnS6WuqwCCQJOs%2FVRJ3tm94R1Z12Gk6Fu8UYubAQUAiEA1lSUsH0FOoT6xj0115RajI52r1%2Bfr9JF3qbNWYjePDEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEL8tba3fJ9Y2kWKmyrcA72gtIuOtIAs2u3qX6T%2BV85KjdG15lBf3jPPn5k4rvsbrvrmNVxEZFOfj%2FYLWSf86Zr0nXqD5usCltqxxJzv6Ks1oKLNJ0qFMr7gYyx%2B4P%2BOyUy%2Fvo6IU5%2FnH110E9WJkwDHZQL6Mjt0e33Ep8rJpqqx0dcz7A%2BWe09KV7pyOTJOyqrFjLlTIJRVslGJAchQ%2BpgszbRr5qgncvARwJ8PgGOAKzx6Yn1ZZph64QroKzW3T6IVwIbSWikovMlv0HBte4MKHr337ynhnS2X6z9bCcGQJgawwOQXBKsj%2FfwVi1HtQFwCP8cZ5IHp%2F3SqnKGRnrGFVaPdSqQXK%2F%2BfNUoYlSPbC6T0U6Ru37qJBwzfdBBKJum9zhixDRlLRlRusgipG3Ge1fON9mxcHiGGs503T9IWa7%2BHbrHixcaNYz8f5cmldPhaTpr29hrfdxJ9DbTJb%2FBSQYbNmLvpSwknK07nQ9TrAGrFZa0yhqZBgQ8sGIF4U7k5ioSlaM0LZkxcR74j2l5Dtk%2BRbsuLi9FgGhNS%2BNJJ4N4XSoZvlgGr8R4%2BNZdbHrMfIOkdLh0Hp5QK6mf%2Bn0PAmgACi7q5BbZR7qbREVYPxjcVs1XWQY9660aOYzl5GmhUzfoBtJUBl3BKMMP3n8EGOqUBwZjzhY6P2sPypasD%2BOXaq2ne1AxMk8O5UIujrf9Z03YPFxzJZ9fYeDmwZgT1XK5TMufY%2BcgyR7brnJif3PoTT1856C0qlWkgFQuc%2BPR%2BwDP%2FP7rfoB3DwJ%2FOwl1ZFQAwyM1ZdoovkWcSKWGWFsXMQtN6MIgx0HiK2I0yI2TGADRgF8QQVEDXjD4V5b2%2Bhdigm2gFx4KcmHD9qCK9lw5P9M1PdWnG&X-Amz-Signature=b83684a77a74d5881a34234e82b4b388cbdbd588684200b4bd069913395c640a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTA4FWL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ%2BnS6WuqwCCQJOs%2FVRJ3tm94R1Z12Gk6Fu8UYubAQUAiEA1lSUsH0FOoT6xj0115RajI52r1%2Bfr9JF3qbNWYjePDEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEL8tba3fJ9Y2kWKmyrcA72gtIuOtIAs2u3qX6T%2BV85KjdG15lBf3jPPn5k4rvsbrvrmNVxEZFOfj%2FYLWSf86Zr0nXqD5usCltqxxJzv6Ks1oKLNJ0qFMr7gYyx%2B4P%2BOyUy%2Fvo6IU5%2FnH110E9WJkwDHZQL6Mjt0e33Ep8rJpqqx0dcz7A%2BWe09KV7pyOTJOyqrFjLlTIJRVslGJAchQ%2BpgszbRr5qgncvARwJ8PgGOAKzx6Yn1ZZph64QroKzW3T6IVwIbSWikovMlv0HBte4MKHr337ynhnS2X6z9bCcGQJgawwOQXBKsj%2FfwVi1HtQFwCP8cZ5IHp%2F3SqnKGRnrGFVaPdSqQXK%2F%2BfNUoYlSPbC6T0U6Ru37qJBwzfdBBKJum9zhixDRlLRlRusgipG3Ge1fON9mxcHiGGs503T9IWa7%2BHbrHixcaNYz8f5cmldPhaTpr29hrfdxJ9DbTJb%2FBSQYbNmLvpSwknK07nQ9TrAGrFZa0yhqZBgQ8sGIF4U7k5ioSlaM0LZkxcR74j2l5Dtk%2BRbsuLi9FgGhNS%2BNJJ4N4XSoZvlgGr8R4%2BNZdbHrMfIOkdLh0Hp5QK6mf%2Bn0PAmgACi7q5BbZR7qbREVYPxjcVs1XWQY9660aOYzl5GmhUzfoBtJUBl3BKMMP3n8EGOqUBwZjzhY6P2sPypasD%2BOXaq2ne1AxMk8O5UIujrf9Z03YPFxzJZ9fYeDmwZgT1XK5TMufY%2BcgyR7brnJif3PoTT1856C0qlWkgFQuc%2BPR%2BwDP%2FP7rfoB3DwJ%2FOwl1ZFQAwyM1ZdoovkWcSKWGWFsXMQtN6MIgx0HiK2I0yI2TGADRgF8QQVEDXjD4V5b2%2Bhdigm2gFx4KcmHD9qCK9lw5P9M1PdWnG&X-Amz-Signature=b3b15069cfedb202208b6b7baa60a7a7c10a1200023da3e9b83f79e6f345eb54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
