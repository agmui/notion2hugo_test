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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYUVGGP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Fef%2FdGaF23Dqh1SWrALRNqi2SjRes4w%2FUYHWehXN9nAiB9VzZ4Jdc1tqyo3hP9OeYHQyv6AF4FGDBL%2FI3Ka3c%2BNSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMzgLV1XhFw9ZtNJ7TKtwDuY7TvCC7KJqWDQ2iqKYxgZSYKR2P0GHXM8A7CwXZr%2Fpdtf8M5kvQ7OaH50u8WgqkQChabks7kMB68e3ukBnx5AGBjS5ULksFuJSa1lPNBS5hNmBGWsOnCFq2eLBwSYBZDDiAsMiinntUBJlzVQOpCUu5Q24%2FJMXVEYbKZoBv7I%2FRZDLS1S064ZIAV9BDtq7DTvJqucV9o2r%2B%2BxTHAIUaRvaRwsFeSG5x9GZzyNn%2BsPlsA%2BQI1P%2F9vYywyslUgxLCeyuToRXyUNAPD2Nb4xSUML0Zx3P0pP2omikti5X4u6a7tDGFtvS13bQYnAdhEt3kvrRksYjqQxm4hadq3e%2BpEGZ%2BbfdU%2B2kz0txKO6k7kjg12s8L83zwjBD%2BmlQAptMtDh2rpSIU9JAI%2Bo9iXumEvN1IEAnQV1uHJ%2BEdAOxd1aduQznGZC4NByV%2BIF%2FKc7FBkOqZOlKFro%2BWGUVB6Ze6qxrEFpO6gFU3grjWPOqwD4NeCCe6S7pJvBkG5%2FXtTEOQOsb7%2BmZNu0%2Bzkm0NvYqG9RrAvEGV3PZfsipUWb6L%2FtW22bgRb5kd4Cqeq9BcPBiORxmxCTxBY25jYlEjAIVJ2blfbwIQYMbuuD6BXRYE0OlT91YlSQYG7ty49QQw1p3KvwY6pgGXyO%2BAhe81VxMy9PCJtPUBsiKRq7FNSLv139KRpq0eU3%2BpqWOBj3v4v4p9SnTAd4dreWe%2BtAEr9vA7OLpnZpXvQuSMj9YqDCYMsMLC7xxmndkBgH4qk6tu%2Fz7Qk93drTuFAfF%2BUvQIMGDGIW0dXeH9u%2BIxqSwODdhvKJZsATwlrqdX4R%2BfbWnNdMvsUbcrX8zjNGTdi76Q0e6zRV43mg05S%2Bxjyqb5&X-Amz-Signature=0f41f7e56c045d688dcf5246099a5472b8743c4ce72e7d4afcd67ee8fed9d30d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYUVGGP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Fef%2FdGaF23Dqh1SWrALRNqi2SjRes4w%2FUYHWehXN9nAiB9VzZ4Jdc1tqyo3hP9OeYHQyv6AF4FGDBL%2FI3Ka3c%2BNSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMzgLV1XhFw9ZtNJ7TKtwDuY7TvCC7KJqWDQ2iqKYxgZSYKR2P0GHXM8A7CwXZr%2Fpdtf8M5kvQ7OaH50u8WgqkQChabks7kMB68e3ukBnx5AGBjS5ULksFuJSa1lPNBS5hNmBGWsOnCFq2eLBwSYBZDDiAsMiinntUBJlzVQOpCUu5Q24%2FJMXVEYbKZoBv7I%2FRZDLS1S064ZIAV9BDtq7DTvJqucV9o2r%2B%2BxTHAIUaRvaRwsFeSG5x9GZzyNn%2BsPlsA%2BQI1P%2F9vYywyslUgxLCeyuToRXyUNAPD2Nb4xSUML0Zx3P0pP2omikti5X4u6a7tDGFtvS13bQYnAdhEt3kvrRksYjqQxm4hadq3e%2BpEGZ%2BbfdU%2B2kz0txKO6k7kjg12s8L83zwjBD%2BmlQAptMtDh2rpSIU9JAI%2Bo9iXumEvN1IEAnQV1uHJ%2BEdAOxd1aduQznGZC4NByV%2BIF%2FKc7FBkOqZOlKFro%2BWGUVB6Ze6qxrEFpO6gFU3grjWPOqwD4NeCCe6S7pJvBkG5%2FXtTEOQOsb7%2BmZNu0%2Bzkm0NvYqG9RrAvEGV3PZfsipUWb6L%2FtW22bgRb5kd4Cqeq9BcPBiORxmxCTxBY25jYlEjAIVJ2blfbwIQYMbuuD6BXRYE0OlT91YlSQYG7ty49QQw1p3KvwY6pgGXyO%2BAhe81VxMy9PCJtPUBsiKRq7FNSLv139KRpq0eU3%2BpqWOBj3v4v4p9SnTAd4dreWe%2BtAEr9vA7OLpnZpXvQuSMj9YqDCYMsMLC7xxmndkBgH4qk6tu%2Fz7Qk93drTuFAfF%2BUvQIMGDGIW0dXeH9u%2BIxqSwODdhvKJZsATwlrqdX4R%2BfbWnNdMvsUbcrX8zjNGTdi76Q0e6zRV43mg05S%2Bxjyqb5&X-Amz-Signature=f94ca19b3a418fd170c16a5040b4406b8c8e24dad0b6e32da393cec64984b3d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
