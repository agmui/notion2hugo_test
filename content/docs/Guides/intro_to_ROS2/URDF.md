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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPK2GVB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGiN9WP%2FNrAREW8iOWSVut4zYyLQruNG5yGewSQ6nMDEAiAyXV6x9zA8slpXyup7e%2BwzwX6z6kwKErdIe57%2BNrF6RCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIML1Hf09Sn8X0fvN85KtwDM2ltci46GMzurmSy20xLb0t%2BeeV2eckd5iKPXdbFtwG7TQS5DW7V8gxXJph%2FKLWs5SqWxeq8i9CFD1hn0R4WGSvMGG5Ey83EfUiJIFzXg9SjHeRMJwqTWOiyPS%2Fg3rq%2FZARNVdhpkWNtV%2FQb4X1KsRUgFLiWtQKTHc0ZaOpar3b5tvXe5DDo9EX8zw5gA6pFSEjpudzLV1GqGLBWwT4x76mTd8Us3fYMXqoiSkSIB%2Fw6tzoAE7SGQCsiuA7socHYlkcW6n6CM3%2FLJub1xyXnP1IA6wbT1jJu6jNccEU7ao8B%2BoxhszkGkRqYKXuKL81l4%2B5v19MUbYXIM5T4iurFxl%2BS6fVCzWPzvLnwTsU%2BUhlkyq2Jexu%2FSU0ZCnoLdYEC9FztFz2J4Qh7SxQCafjeijYg4p92lV7r5uIqPPdPHn934SD26KS3W0xaGFofCSDr4jzC7bL6UYcb6xK5XSB1gLMNAdOTd0wRMtEXCw2%2FZTwNR9dr5X6dvriaW%2FldBbBhNO7ajhWK7LSUWSHSI5Kg%2BL%2Bt4kRXC0YhaSs0u7xDkUUVdBanB3jhNkOPgqjiP%2Bti%2FOx%2BhdX5jmMl95VoRF%2B%2Fd3%2FS9vTvJaiYKE3yt2ZTDjCoS6Os17X8JNC9KvEwvOCvvgY6pgEHqhxKmoNut045VWAJHHkyOCMh1NDso6vXhH5Z1KZkEI%2FRAyFAwTwS6qZE2TTj8cq%2FRzF5lymwH3eYrTqxv9D3U7AKKFZS9jy0asf4Dbj21NPrnjT%2BoEAEIU2h6u5I21htkoE9pxYer3VlNN3OTLwTsYTwio3Mk8i4%2B56SPEArsVVVqErKu5XD8PqROskSNw9okZ3t3A5Kg4mIIhwMfKm7TEQMVGXv&X-Amz-Signature=104a178fdfc3900a98b68b893c3cc30b282ce6aa6ec14dc6c7b551fb78adef85&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPK2GVB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGiN9WP%2FNrAREW8iOWSVut4zYyLQruNG5yGewSQ6nMDEAiAyXV6x9zA8slpXyup7e%2BwzwX6z6kwKErdIe57%2BNrF6RCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIML1Hf09Sn8X0fvN85KtwDM2ltci46GMzurmSy20xLb0t%2BeeV2eckd5iKPXdbFtwG7TQS5DW7V8gxXJph%2FKLWs5SqWxeq8i9CFD1hn0R4WGSvMGG5Ey83EfUiJIFzXg9SjHeRMJwqTWOiyPS%2Fg3rq%2FZARNVdhpkWNtV%2FQb4X1KsRUgFLiWtQKTHc0ZaOpar3b5tvXe5DDo9EX8zw5gA6pFSEjpudzLV1GqGLBWwT4x76mTd8Us3fYMXqoiSkSIB%2Fw6tzoAE7SGQCsiuA7socHYlkcW6n6CM3%2FLJub1xyXnP1IA6wbT1jJu6jNccEU7ao8B%2BoxhszkGkRqYKXuKL81l4%2B5v19MUbYXIM5T4iurFxl%2BS6fVCzWPzvLnwTsU%2BUhlkyq2Jexu%2FSU0ZCnoLdYEC9FztFz2J4Qh7SxQCafjeijYg4p92lV7r5uIqPPdPHn934SD26KS3W0xaGFofCSDr4jzC7bL6UYcb6xK5XSB1gLMNAdOTd0wRMtEXCw2%2FZTwNR9dr5X6dvriaW%2FldBbBhNO7ajhWK7LSUWSHSI5Kg%2BL%2Bt4kRXC0YhaSs0u7xDkUUVdBanB3jhNkOPgqjiP%2Bti%2FOx%2BhdX5jmMl95VoRF%2B%2Fd3%2FS9vTvJaiYKE3yt2ZTDjCoS6Os17X8JNC9KvEwvOCvvgY6pgEHqhxKmoNut045VWAJHHkyOCMh1NDso6vXhH5Z1KZkEI%2FRAyFAwTwS6qZE2TTj8cq%2FRzF5lymwH3eYrTqxv9D3U7AKKFZS9jy0asf4Dbj21NPrnjT%2BoEAEIU2h6u5I21htkoE9pxYer3VlNN3OTLwTsYTwio3Mk8i4%2B56SPEArsVVVqErKu5XD8PqROskSNw9okZ3t3A5Kg4mIIhwMfKm7TEQMVGXv&X-Amz-Signature=73e494d197898fcefc3801dcd7526c216395449a497fdf633071c361e8617226&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
