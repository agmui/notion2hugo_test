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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYGX4YI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCINiBG6qPySpwqGBBG9hWMo9Hqj8sBBpeub9ZOsCW6gwIhANK3IPqLcRb2Y26ciPIDfNJZUvx%2Fves%2B%2FMZokO9QpCfsKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5pDnQLmYW6CmmbrMq3AM7Ciz9qMz8Z%2FcdrWTsJsZ9UMICGdQ%2BcdEuMkeEYEbJCe93uDe7w036NGePM3ZvAR70m0wGSuVfURhHSqfJTfi5EX5HDpxYWZb3xeWGj76G20dT4FT%2FtGXCfkEJA6xtMdnsk%2BbXP8BYgi6HRZQUSdZp3cW1ZL1KoRijJmHlkiAyZ4BET8a1bUAr0dzh62nR%2BlVPqaENRzBBxsFwNuQES8NMsJ0YOktgj8p6NLF2vcwy1EVYVcT7UnXkx%2FmxMS7%2BGMhVhEHmohGZ4TPEks8zANlx%2BWqRDQuFqKmXnGXtWJW%2Fk3%2BYyU8XmtN8pl6uFK67gLfTALX4XpG6Qj1getIzmt6mLjESfq%2FC4m0EjosuQpUSxI8aQGijPwIRtprI0qYUNYC%2BTcQZYEQZFOARn%2B5ENFEAPmUzUEC7kJ%2FWBCvtCXxXVt1HpnhkJq44Kq8Nh4cOHaXQzqIyMB2SAJsiwKCOx9fEtepauR9eWNJPbJwXh25KHTIc4Mt5VqtXoNcoyy5MrHlXBaSv%2B0NYdeacp2G%2BotQ9yzVL4WDQRk1HQXeexE2qgRCUgdkMws4vN0%2B1Lj8WzSWZYBGeh5sQ0%2F0XdfTWPqSBBccg55vnCMlpyE7pqDd%2Bwo0PubjJJsK90Y%2BqYzDisunCBjqkAaTV5R8EoAIG%2B%2FPbJZxm8CZ67NYDd%2FzoHusChZ5BkSvhd6LvmC5oaI2xWI8QsIrufaHyEDRNetQkeN1ZOq1ZQwhR0Mn3G0LJcY8li9Hp%2FtQaRc%2Ftn5GgRub6PFPIvqohmrwMNIvtrRdZ%2FV3UJIpKcKdNgYcSaPtwxQmMf7AbANPQ4CDSZoc3gwNfRotkuZkqfjH06b4IPgkWvw4YSw7H8rCpr%2Bld&X-Amz-Signature=557f746fdec3421247a8adaf004a7ca1317d445266daed56e0423f4a02d1061d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYGX4YI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCINiBG6qPySpwqGBBG9hWMo9Hqj8sBBpeub9ZOsCW6gwIhANK3IPqLcRb2Y26ciPIDfNJZUvx%2Fves%2B%2FMZokO9QpCfsKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5pDnQLmYW6CmmbrMq3AM7Ciz9qMz8Z%2FcdrWTsJsZ9UMICGdQ%2BcdEuMkeEYEbJCe93uDe7w036NGePM3ZvAR70m0wGSuVfURhHSqfJTfi5EX5HDpxYWZb3xeWGj76G20dT4FT%2FtGXCfkEJA6xtMdnsk%2BbXP8BYgi6HRZQUSdZp3cW1ZL1KoRijJmHlkiAyZ4BET8a1bUAr0dzh62nR%2BlVPqaENRzBBxsFwNuQES8NMsJ0YOktgj8p6NLF2vcwy1EVYVcT7UnXkx%2FmxMS7%2BGMhVhEHmohGZ4TPEks8zANlx%2BWqRDQuFqKmXnGXtWJW%2Fk3%2BYyU8XmtN8pl6uFK67gLfTALX4XpG6Qj1getIzmt6mLjESfq%2FC4m0EjosuQpUSxI8aQGijPwIRtprI0qYUNYC%2BTcQZYEQZFOARn%2B5ENFEAPmUzUEC7kJ%2FWBCvtCXxXVt1HpnhkJq44Kq8Nh4cOHaXQzqIyMB2SAJsiwKCOx9fEtepauR9eWNJPbJwXh25KHTIc4Mt5VqtXoNcoyy5MrHlXBaSv%2B0NYdeacp2G%2BotQ9yzVL4WDQRk1HQXeexE2qgRCUgdkMws4vN0%2B1Lj8WzSWZYBGeh5sQ0%2F0XdfTWPqSBBccg55vnCMlpyE7pqDd%2Bwo0PubjJJsK90Y%2BqYzDisunCBjqkAaTV5R8EoAIG%2B%2FPbJZxm8CZ67NYDd%2FzoHusChZ5BkSvhd6LvmC5oaI2xWI8QsIrufaHyEDRNetQkeN1ZOq1ZQwhR0Mn3G0LJcY8li9Hp%2FtQaRc%2Ftn5GgRub6PFPIvqohmrwMNIvtrRdZ%2FV3UJIpKcKdNgYcSaPtwxQmMf7AbANPQ4CDSZoc3gwNfRotkuZkqfjH06b4IPgkWvw4YSw7H8rCpr%2Bld&X-Amz-Signature=b85b59d35da645ef6b25439987e9459712c05452d9f81097a41e186cb9f54c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
