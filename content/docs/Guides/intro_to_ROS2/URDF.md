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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665INUWGPB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbjwZ7hJwYxYoiDd7LVelF024sHwSmp49j1K1YIhh6SAIgPW8dnfwJsLRI3CfEryjLAhv%2FkB9CAI7hq2iLsSvmD4IqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFHqxPWcBbVB7caeircA%2BthlEll6loiFeuRPjFJh%2BM7E0OimhAvfdYNJIYvr59LZ%2FrJB0u2EsFELzxo4LZL7X5ed0HirrPtJK9Uv%2BQaVwX%2Beqd11JPSO3Bi4gM%2F5YNZABjumQWMUsI3yczVv%2FrY09zDdozeyDEG44OYlCfAxPX6Ss3JXPYNA1Ec2GnHj6FXvGD56CSjw7G8a%2Fcr%2BaSvV8PLHX8u0CycH8TUe4fvEp49KaH7jb3ltib8t6PokTK9yJKEGY%2FfmjDzAA1ynWn8CDGLeynDOmClLkyRFelsNpzMgzCJYOFDvbI7a4CFClTxzeMc2LPGvykuKB58C4vSN8%2Bh4x0NjmCYwdfiEnPBNQf8RWThtzTDFoWwp8u1TLHlahzJQKOa7d3FaVf4OmVl2c7UnVnyi%2BmZ%2BDkoMhXyUQ7RmlCR6Be5FZkoLIK5q5jcJ17PHn6ZGOZW6YS336%2FpX7lJQ5HKDfvu%2Blx4yqlmIvd0W9Vumf3lWagHZPFXb8ZGxiwnagFJGnxsa8eGNg9OLA7wBT%2Bp6UiT3wauY83kBKJUyTorfjImgXs0Jhh6fLmOaklKct9RRuNhAIUkkNo12hA6h99OGIrYuDOL5XBknj1cWUsEhRJ7r8y82ohP78nAywid%2Ft17z7bqijePMIH8%2BsMGOqUBypif%2F6wAl%2BkGg2y97v3OfvWkXXzPX%2FbZI2u6c6Hr2aoP5sgbLofYlZcvhYqD7j7Y37dczDAtZINTQ8RrgGCj2hVQ8DBP7J4rWt7uOD27oI%2FKGmETH3MVw6MPQLgfq4jWOzXUl7BLPCsV3RFWPpCIJXeAp27pD3Jlm9AN6WftTFefVtHD8BlTm5dx2VUOg3t%2FfmuipjRWYUGrRr%2Ffr1VywfLWXfLi&X-Amz-Signature=29c59ad48820a710de3b14419f7c564437bb2ba210f60844f3b2cffb65ac1e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665INUWGPB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbjwZ7hJwYxYoiDd7LVelF024sHwSmp49j1K1YIhh6SAIgPW8dnfwJsLRI3CfEryjLAhv%2FkB9CAI7hq2iLsSvmD4IqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFHqxPWcBbVB7caeircA%2BthlEll6loiFeuRPjFJh%2BM7E0OimhAvfdYNJIYvr59LZ%2FrJB0u2EsFELzxo4LZL7X5ed0HirrPtJK9Uv%2BQaVwX%2Beqd11JPSO3Bi4gM%2F5YNZABjumQWMUsI3yczVv%2FrY09zDdozeyDEG44OYlCfAxPX6Ss3JXPYNA1Ec2GnHj6FXvGD56CSjw7G8a%2Fcr%2BaSvV8PLHX8u0CycH8TUe4fvEp49KaH7jb3ltib8t6PokTK9yJKEGY%2FfmjDzAA1ynWn8CDGLeynDOmClLkyRFelsNpzMgzCJYOFDvbI7a4CFClTxzeMc2LPGvykuKB58C4vSN8%2Bh4x0NjmCYwdfiEnPBNQf8RWThtzTDFoWwp8u1TLHlahzJQKOa7d3FaVf4OmVl2c7UnVnyi%2BmZ%2BDkoMhXyUQ7RmlCR6Be5FZkoLIK5q5jcJ17PHn6ZGOZW6YS336%2FpX7lJQ5HKDfvu%2Blx4yqlmIvd0W9Vumf3lWagHZPFXb8ZGxiwnagFJGnxsa8eGNg9OLA7wBT%2Bp6UiT3wauY83kBKJUyTorfjImgXs0Jhh6fLmOaklKct9RRuNhAIUkkNo12hA6h99OGIrYuDOL5XBknj1cWUsEhRJ7r8y82ohP78nAywid%2Ft17z7bqijePMIH8%2BsMGOqUBypif%2F6wAl%2BkGg2y97v3OfvWkXXzPX%2FbZI2u6c6Hr2aoP5sgbLofYlZcvhYqD7j7Y37dczDAtZINTQ8RrgGCj2hVQ8DBP7J4rWt7uOD27oI%2FKGmETH3MVw6MPQLgfq4jWOzXUl7BLPCsV3RFWPpCIJXeAp27pD3Jlm9AN6WftTFefVtHD8BlTm5dx2VUOg3t%2FfmuipjRWYUGrRr%2Ffr1VywfLWXfLi&X-Amz-Signature=37f6714a6c26103361fa8560e845a4c9566b0ee270b231d6ed798e68261fa697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
