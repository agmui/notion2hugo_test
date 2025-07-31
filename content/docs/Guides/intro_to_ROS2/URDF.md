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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527PRS2D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAUQQExLayTt0yuvNE0H5oCneIJQS7H3biCqkYyooyVAiAAgCrOIFQ37iKvECg8XxKOUkgYDegW4FnNba%2BZL45R%2BCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWJuorGQU%2BbqcIPwKtwDyRFwtu%2BlZRZVp7%2F5cQ5IqYRLcw%2BkCtW8SgTpywPZmksDO57kZBh8mrtWH0L4vcIQnDbJfZtsC%2Bq4bT%2FcuP9gNNVVZvzQUcIOhacmNEmAl3DH%2Fe2jQMqwCdVchjLvFNC5xTNBR%2Fz5Z1bV70Kd6sTL4p%2Bq6YSCj5A5G%2BN8flivzd4madEB7YqPspb1Yg0UWCAaDtRPeblRS34D%2Fd0yrBN8AnGkG46yppmPhOPavPpWjMehh4o%2BPAM9Y6LMSZhHLwGXz2qJndi6dhKvPBJ48d3bzHqRq9AuKUqWRpjFhJqT8SHbrTg0OQdSDm5tHWC7%2B8ASqjFc9hI9axYld9RzdLRaZhoCirb9Gs%2BEf%2FKn9ZQOSnqyIgWfxwOl8qXQnEQl%2BrMDhssy5oUe5aEIS3KybMVbs4ti%2FaYH3gN%2F0xTcdj6Y6mwtGbW%2FjUqJrsj5MZASGBrvgTMLdb%2F6t47rDCpTA0ntUxHKslgh8JP%2BLPo51cG11tII1uGl73Zcls6ZO8i%2FfBy2Npg3GYH1tFmwspz%2FvDUKDztXHk%2Fyrv4R9rpH7c99pzGCG235CtMdkX3OZV1cpc%2FaPQGne8Ed2L83fmq27oW%2BsyJTup7FYfKf0h%2FIF5mdatVSdDtmoErsuJ%2FJB%2FgwseqtxAY6pgHAlBN6YGUod6orBzHBdJWnJUFLHd%2BZAlMew1jFmgGUBXuQH9I8Znpvsya%2FbGxhVBiPxhwiCyyM8SNDy5gYpd7HlBujBQlWcC2BEl9eWz0GbfYF6rCvyCAkI2afDyZKEqo0Mj%2B6ywRoozWAeJHrUcp1gE5BsptmDLwin2mPQtQFtnauRTNZzfxwsVhcfFGk%2BG0jR7pBqIJZRGczQRv5dObzFR3aXyOl&X-Amz-Signature=eed250c634619e2b3fa8df3a0c76f6964a378595e876c2d235588692d96d856b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527PRS2D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAUQQExLayTt0yuvNE0H5oCneIJQS7H3biCqkYyooyVAiAAgCrOIFQ37iKvECg8XxKOUkgYDegW4FnNba%2BZL45R%2BCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvWJuorGQU%2BbqcIPwKtwDyRFwtu%2BlZRZVp7%2F5cQ5IqYRLcw%2BkCtW8SgTpywPZmksDO57kZBh8mrtWH0L4vcIQnDbJfZtsC%2Bq4bT%2FcuP9gNNVVZvzQUcIOhacmNEmAl3DH%2Fe2jQMqwCdVchjLvFNC5xTNBR%2Fz5Z1bV70Kd6sTL4p%2Bq6YSCj5A5G%2BN8flivzd4madEB7YqPspb1Yg0UWCAaDtRPeblRS34D%2Fd0yrBN8AnGkG46yppmPhOPavPpWjMehh4o%2BPAM9Y6LMSZhHLwGXz2qJndi6dhKvPBJ48d3bzHqRq9AuKUqWRpjFhJqT8SHbrTg0OQdSDm5tHWC7%2B8ASqjFc9hI9axYld9RzdLRaZhoCirb9Gs%2BEf%2FKn9ZQOSnqyIgWfxwOl8qXQnEQl%2BrMDhssy5oUe5aEIS3KybMVbs4ti%2FaYH3gN%2F0xTcdj6Y6mwtGbW%2FjUqJrsj5MZASGBrvgTMLdb%2F6t47rDCpTA0ntUxHKslgh8JP%2BLPo51cG11tII1uGl73Zcls6ZO8i%2FfBy2Npg3GYH1tFmwspz%2FvDUKDztXHk%2Fyrv4R9rpH7c99pzGCG235CtMdkX3OZV1cpc%2FaPQGne8Ed2L83fmq27oW%2BsyJTup7FYfKf0h%2FIF5mdatVSdDtmoErsuJ%2FJB%2FgwseqtxAY6pgHAlBN6YGUod6orBzHBdJWnJUFLHd%2BZAlMew1jFmgGUBXuQH9I8Znpvsya%2FbGxhVBiPxhwiCyyM8SNDy5gYpd7HlBujBQlWcC2BEl9eWz0GbfYF6rCvyCAkI2afDyZKEqo0Mj%2B6ywRoozWAeJHrUcp1gE5BsptmDLwin2mPQtQFtnauRTNZzfxwsVhcfFGk%2BG0jR7pBqIJZRGczQRv5dObzFR3aXyOl&X-Amz-Signature=325802a2ee37fc4c34dc9e9255f41877596baabcc741fab8f9ad3fe373a3b2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
