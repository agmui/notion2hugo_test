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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHUPDRR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNtIrbg0%2BVtN6NXxH6eFKtzAaJId%2BmnCMDaZEsScNDeAIhAJcCf3wHlrIPEh6m9uXFldXg3qW6YiTwSbdBeLIKz4JQKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh8wVnU2SwGEhUNrYq3AOXGyl5VRTS05SgLkrGDmRnjFSns9HTatLamjGcUB3FxkX9RRQ2%2B1wrSadgsGV2eH5vplKic0o45w%2FWrSOXo%2FHqnte1FIXdWApbe8rrVCJHZXhTZYKeyGNM%2BFliSfNZvWDUgGAWlBPQwu3e%2FXAyp9lYLU9Im1WO5%2F4dXX09J9NE%2FZ3wTgK9rWFE8LMHJX2FbhIhk0fSDxLWOW35JGM5kK2mJqeC7K3Ux1S3gp34Ax2QV3R8JJ8Zomxv6nvqmVZa93tYB3cCRSyKsQ7OFnGRNz9lTtjeh1xIs43wNzAPw8OBXa5PYPALGILGZe2V48cqszSGc8pF%2FKCJpj8zRiLXIiBaSvjHKngxwc52RpiF1uZVqb%2FmtDn1M4sJE8pEbkhK4sl7Xg1oELcfEWMzevR787aGqjPA9EhaVqy93d1d684fRnBFZ42%2Be8zXzoPHeRo%2BkNjxikoooRAPG3W%2FPDLy72EDSCCzYItI%2BXzR7zm0otEHpQRLXyojx13VC4PPWCkK3PG9WQ42gGosqRI799erycOrdY6jAUvAjF5gfXHHxbJygCCfFuMXeCcULzp6J58vRt3pm%2B2MkS%2BnvL92QrKHjBKr%2BMdHUlcCO17YFx1ZXokdHZd1Yfs6KWj%2B0JytmTDC2Za%2BBjqkARM57jdig7gSIzI5AxBEfVVpJLNxe2VbL%2F%2Ber33algvk%2FPa3YkQAp1GOClTNytDncvmqqWniasPTAlfitgdR73twNjPhjMVIB9Xi6rs63v2oAxRIm9VN57Z0U4F1ByNbAakOckxXuJCVLSdp%2BQ5VbyC9b7NzaX%2BdvG35GTx%2BnvfNoPIVy9myHY4aJas%2BHlTW8jv2NyXismRcMxrbvdHB%2FYUeOb15&X-Amz-Signature=3473902f368a293e7cf145e4ab8315c9f5188c9d39d3c3298dced0a433c6a44e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHUPDRR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNtIrbg0%2BVtN6NXxH6eFKtzAaJId%2BmnCMDaZEsScNDeAIhAJcCf3wHlrIPEh6m9uXFldXg3qW6YiTwSbdBeLIKz4JQKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh8wVnU2SwGEhUNrYq3AOXGyl5VRTS05SgLkrGDmRnjFSns9HTatLamjGcUB3FxkX9RRQ2%2B1wrSadgsGV2eH5vplKic0o45w%2FWrSOXo%2FHqnte1FIXdWApbe8rrVCJHZXhTZYKeyGNM%2BFliSfNZvWDUgGAWlBPQwu3e%2FXAyp9lYLU9Im1WO5%2F4dXX09J9NE%2FZ3wTgK9rWFE8LMHJX2FbhIhk0fSDxLWOW35JGM5kK2mJqeC7K3Ux1S3gp34Ax2QV3R8JJ8Zomxv6nvqmVZa93tYB3cCRSyKsQ7OFnGRNz9lTtjeh1xIs43wNzAPw8OBXa5PYPALGILGZe2V48cqszSGc8pF%2FKCJpj8zRiLXIiBaSvjHKngxwc52RpiF1uZVqb%2FmtDn1M4sJE8pEbkhK4sl7Xg1oELcfEWMzevR787aGqjPA9EhaVqy93d1d684fRnBFZ42%2Be8zXzoPHeRo%2BkNjxikoooRAPG3W%2FPDLy72EDSCCzYItI%2BXzR7zm0otEHpQRLXyojx13VC4PPWCkK3PG9WQ42gGosqRI799erycOrdY6jAUvAjF5gfXHHxbJygCCfFuMXeCcULzp6J58vRt3pm%2B2MkS%2BnvL92QrKHjBKr%2BMdHUlcCO17YFx1ZXokdHZd1Yfs6KWj%2B0JytmTDC2Za%2BBjqkARM57jdig7gSIzI5AxBEfVVpJLNxe2VbL%2F%2Ber33algvk%2FPa3YkQAp1GOClTNytDncvmqqWniasPTAlfitgdR73twNjPhjMVIB9Xi6rs63v2oAxRIm9VN57Z0U4F1ByNbAakOckxXuJCVLSdp%2BQ5VbyC9b7NzaX%2BdvG35GTx%2BnvfNoPIVy9myHY4aJas%2BHlTW8jv2NyXismRcMxrbvdHB%2FYUeOb15&X-Amz-Signature=4599aabd0e72e858db5d159d4f8c7db2bd35a0b280bac3e68b9b1de4a8257450&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
