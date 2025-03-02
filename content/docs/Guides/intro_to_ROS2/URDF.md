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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOQK2ZJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAjNP1KVBXkaer00qZK%2FF9taNRnociHpZGBskth6xNjSAiBgGg23Aqvc%2FtyNwxuyQH5wngn5yuWstxPvgn2nhi2M8iqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikLLCQ4n%2FaGpjf8wKtwDTtxG48JB71tUpDxjdHl%2FvqSo4ku2Nzr1j4SU457wiOkKsTzxKKZc0OjLO5NzZvVO5eLC21c5AQQtLyndIlQXs26UrntbmcN%2B7%2BTHSXj4rF6fc5Mwfnl1NGzV9l1ZiGfARdaxp1aOMXOt2g7eRvpuEmvgc47f9nWiwv6VlFa%2BTmMi9uT%2FE0WZGHY7UligQI7P4lHBxA44%2Bqu6RyDYF9BtrioJYqAQTDJZ5mQ1lfElerBaHiXT6o%2BuRJcUlkkGW2r9A%2F5NeSFqT0ndY0dswucEXf%2F3gfIXB3f8zFlC2iIiw8QIOVmeNdEVTAYXshQyQ6x7W3T8GppPMi0GAGLctCbdK9tsjTTkINqBrbfKmf9c6caREChkjlHaHOCTHVQ4XH9esXbuX6BmLQLn2AbXIujXmK1RPQhOzI8hd2bPg%2FSR4p9vN9%2B4lGaUsEEWEPurl0lqPlw3bEl87ErMCEB6ZC686H4GcUwdDY8BQ6MC%2FFIOBqkOyB3RGddYi6YxKRc6md7ck%2F5LOXHbYFlfTDhj6YM3BeuzHCUAKBJb0Z8AuLx%2FiziCEeUGnu162%2FRDeAqy0lUtiofqaHNb31wqrKxlnS9XOb7Rzk%2B5Le3GDHpUaTHApnOIIR4sh1ZG41Y6ypIwj9iPvgY6pgGu925Wz9p1XrX33hU8E%2BeQpZ6DbcMoYFvfKlAnaPPcNMY5%2Fa288Y1fszY3r8X8Qz1MRNRIM4d43nVCaqNYIhNV0R6HSGOiKGjnW%2BQXMq2nJLrI4fJ%2FJGtTuXvacPLVepWqDHmNiWsloCIfKlFBg7kg6r6Z53C9x8v8EdwZPutCbRQrFbGG51NbrONsW4z47CqdSPYceXbN91vJS%2Fyl19Rg01l6%2BARC&X-Amz-Signature=e18d45c8488cb7cb13e7b8b7e23080460bb2d899828b737bbc6fda83a7c741c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSOQK2ZJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAjNP1KVBXkaer00qZK%2FF9taNRnociHpZGBskth6xNjSAiBgGg23Aqvc%2FtyNwxuyQH5wngn5yuWstxPvgn2nhi2M8iqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMikLLCQ4n%2FaGpjf8wKtwDTtxG48JB71tUpDxjdHl%2FvqSo4ku2Nzr1j4SU457wiOkKsTzxKKZc0OjLO5NzZvVO5eLC21c5AQQtLyndIlQXs26UrntbmcN%2B7%2BTHSXj4rF6fc5Mwfnl1NGzV9l1ZiGfARdaxp1aOMXOt2g7eRvpuEmvgc47f9nWiwv6VlFa%2BTmMi9uT%2FE0WZGHY7UligQI7P4lHBxA44%2Bqu6RyDYF9BtrioJYqAQTDJZ5mQ1lfElerBaHiXT6o%2BuRJcUlkkGW2r9A%2F5NeSFqT0ndY0dswucEXf%2F3gfIXB3f8zFlC2iIiw8QIOVmeNdEVTAYXshQyQ6x7W3T8GppPMi0GAGLctCbdK9tsjTTkINqBrbfKmf9c6caREChkjlHaHOCTHVQ4XH9esXbuX6BmLQLn2AbXIujXmK1RPQhOzI8hd2bPg%2FSR4p9vN9%2B4lGaUsEEWEPurl0lqPlw3bEl87ErMCEB6ZC686H4GcUwdDY8BQ6MC%2FFIOBqkOyB3RGddYi6YxKRc6md7ck%2F5LOXHbYFlfTDhj6YM3BeuzHCUAKBJb0Z8AuLx%2FiziCEeUGnu162%2FRDeAqy0lUtiofqaHNb31wqrKxlnS9XOb7Rzk%2B5Le3GDHpUaTHApnOIIR4sh1ZG41Y6ypIwj9iPvgY6pgGu925Wz9p1XrX33hU8E%2BeQpZ6DbcMoYFvfKlAnaPPcNMY5%2Fa288Y1fszY3r8X8Qz1MRNRIM4d43nVCaqNYIhNV0R6HSGOiKGjnW%2BQXMq2nJLrI4fJ%2FJGtTuXvacPLVepWqDHmNiWsloCIfKlFBg7kg6r6Z53C9x8v8EdwZPutCbRQrFbGG51NbrONsW4z47CqdSPYceXbN91vJS%2Fyl19Rg01l6%2BARC&X-Amz-Signature=8d65b031efa45a846c70100b94c1918c29a93d6977ac2a0dfe67d69a8520573f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
