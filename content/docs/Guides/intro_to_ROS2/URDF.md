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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T23PRJE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGds4JKikBjPjPM8a%2FDjX4yXngyKy%2B7wapuXURj9fh%2BQIhAJduSRPlCP2T5b7dCHP5BNd9m4C4MHLrez7%2FPb6NLq4HKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLef08GTYgrCwhdZYq3AMliALv3lYWqJekLZCXR%2BCFYH9dOHnlUlpHX70kJH5wghcu%2BiWBwblCO3vDdehHMXTxewja1sMjXC%2FS%2Bfg2y0223QSk3GjTfuyQW98IlAKwT9BMpl6%2BM2uczV0ypXgsJhkxcgs9cUv0Smp3ihHvIbyp9l3O9Vet%2F5ikMXanzm1qP61658z729GoxmjvDu%2Fpuz1OMgaTUo0baG7F9aKVuxlsN23kZzv0ZEtF1boAugdwQYtuvLIfa33oN%2BJKTXcrH8Bi4C99KnM8u0ELWqqCOH00ns5Nby51bT%2BxsKA0LKh7Wnb8871AymzdXmzlNdFW4pqfGmglP4H1QXcY3YRy%2F9qYRxXiiKIIVwyAwySFq7LNhbVHkB8g1B0xvxlD%2B0YytAMkE17Adx%2BpCR96S99MYfLAMQbVsTXzRZVaNx%2BjA%2BWp%2BXSzNZh78ZzTi8nXbk6nk0LiT7NNG8L6jee5e%2BrQWbS8kdW%2BJzgbZ6Bu1phy6QYq%2BxPgOSrT0vJkNP%2FnuXAfLVX0hPdUR6tTcueUFCIQAFCpTB%2B0puRzwvgTMJVRJUg53YjUwuX%2FTmi7%2FTvwP7WpvL5l%2B0oGrn9li48EBPkIZ8x9hFRHi8dmLfZ3QFU1JEyFWvg6pinom63TvjOESjDr6JPCBjqkAbt1zboOlRycswqPdWFsiKvk7SEF9jkwwQP42fDVCMj8IukTKD67qSAufTbqU6k1lRyjjqliEkxOvIbl5R8zVpoh3HviG%2F8DAGbZCON%2B5vLhLI2r0xYMSAgM0D1nQG3Te0mgOYuWXFjIE0PrWypfmdkD%2FOxYxbZ4MJKIJ%2Bxpr8XeNKnN%2FYzio0TtIihJAPS%2B2pegKz1Pr%2BvRIjHP%2FuR9vlULy3js&X-Amz-Signature=3dfb0953b376a3985290a81e64e1d5ac97f5aa9f0c921efc77806af223284481&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T23PRJE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGds4JKikBjPjPM8a%2FDjX4yXngyKy%2B7wapuXURj9fh%2BQIhAJduSRPlCP2T5b7dCHP5BNd9m4C4MHLrez7%2FPb6NLq4HKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLef08GTYgrCwhdZYq3AMliALv3lYWqJekLZCXR%2BCFYH9dOHnlUlpHX70kJH5wghcu%2BiWBwblCO3vDdehHMXTxewja1sMjXC%2FS%2Bfg2y0223QSk3GjTfuyQW98IlAKwT9BMpl6%2BM2uczV0ypXgsJhkxcgs9cUv0Smp3ihHvIbyp9l3O9Vet%2F5ikMXanzm1qP61658z729GoxmjvDu%2Fpuz1OMgaTUo0baG7F9aKVuxlsN23kZzv0ZEtF1boAugdwQYtuvLIfa33oN%2BJKTXcrH8Bi4C99KnM8u0ELWqqCOH00ns5Nby51bT%2BxsKA0LKh7Wnb8871AymzdXmzlNdFW4pqfGmglP4H1QXcY3YRy%2F9qYRxXiiKIIVwyAwySFq7LNhbVHkB8g1B0xvxlD%2B0YytAMkE17Adx%2BpCR96S99MYfLAMQbVsTXzRZVaNx%2BjA%2BWp%2BXSzNZh78ZzTi8nXbk6nk0LiT7NNG8L6jee5e%2BrQWbS8kdW%2BJzgbZ6Bu1phy6QYq%2BxPgOSrT0vJkNP%2FnuXAfLVX0hPdUR6tTcueUFCIQAFCpTB%2B0puRzwvgTMJVRJUg53YjUwuX%2FTmi7%2FTvwP7WpvL5l%2B0oGrn9li48EBPkIZ8x9hFRHi8dmLfZ3QFU1JEyFWvg6pinom63TvjOESjDr6JPCBjqkAbt1zboOlRycswqPdWFsiKvk7SEF9jkwwQP42fDVCMj8IukTKD67qSAufTbqU6k1lRyjjqliEkxOvIbl5R8zVpoh3HviG%2F8DAGbZCON%2B5vLhLI2r0xYMSAgM0D1nQG3Te0mgOYuWXFjIE0PrWypfmdkD%2FOxYxbZ4MJKIJ%2Bxpr8XeNKnN%2FYzio0TtIihJAPS%2B2pegKz1Pr%2BvRIjHP%2FuR9vlULy3js&X-Amz-Signature=c39877e3a5d2d2b0836a28a658126e970e5fdb0f15c50b751cc653e921131153&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
