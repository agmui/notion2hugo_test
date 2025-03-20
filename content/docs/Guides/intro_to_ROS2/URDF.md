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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBF4XDK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGCz6bTRU1GIEybWaSvrOfoXs3%2FzOINYTcwZd385vKlpAiEA04UcrPsO9cnmrHY5Ctc9wQ5Kugh%2B7dR%2B%2B3yXba8ldyUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJY1giKBsLK6F9V2yrcAzJYtlVaL%2BniOvuM8VRp8D5XPRS4xFGJlfrEEmDasORPWA1cOZ0XpJRbKVFRPlUZHXiXsQcomflf3WkR1ZkALrj%2FSUdjFMFN%2BO2%2FruHgW4%2B1BvwywqlnzmytKlzulRYxk23DaaIp%2BNpTVtbnILLer4tktdNyz7fsaOEsUzh%2FNh14V0aZ559kZzCzAgsDHYs66N1v12cTU5IGq92J93gFY4KBi8j7pmkk9YM7Ed%2FXVu7I1ZvcO9xDYhN0XdgcZ2M3X7ANp%2B9tXofxrcR8N4LpVXeql7SES2o9hujn6nl5FgdQwwDYkI5qgMZK7h6Y03E5wuZrainH4MgQm7vqwUKYlPVJO8DMuZ4ISNC6e6c5K937ass68gx98qQmUZb391NBqCkEA%2BlHX0x6jYjYvKFJgdgrkSzYWQvRSjnUDT5mAlt39sv3%2FLJvYwiEZuzDat3trxReNFtOSqdtBdlktaGUBJ15H18ictWhsXVzgRQQ%2Fwb2sg4ie5PAvW%2Fh2IkaA4oWaqDs7Y60dEvZrayGX1R4i8r0RbOmu9qpKi54Kq1O5cJadlTZKNKZdT%2FI2Si4JtAU1ndqWuQkm0GZvC8ESYgnCVe1fWzdQb7856jr1b%2B7ATsAAceul4l88n6EUN57MKOl8L4GOqUBJYmpJyZjLBUPqtVYDQstRRBuSk81BPFXRyPkJjvnhD9CsfOdFVo0lblDT4H58euHH4VjPuADuCQG6wQ0BaD3zksvjmKc3mKnxVSJh9Mejwa2K4qkTDTI3ISV0kflH3vfnkD7wXuRhzpf7iUmkbXzL8D6o6KVQ1Q9RpFteJpwtS8pTP3Ptb02AMF3mjRxMtaMKlX3ETaMRyqExA8M8e5gMxkXkzy2&X-Amz-Signature=8a9b8ec9971c93bbc7971c8cbc85048482f381769c37a6e9a510d41cbf116f63&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBF4XDK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIGCz6bTRU1GIEybWaSvrOfoXs3%2FzOINYTcwZd385vKlpAiEA04UcrPsO9cnmrHY5Ctc9wQ5Kugh%2B7dR%2B%2B3yXba8ldyUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJY1giKBsLK6F9V2yrcAzJYtlVaL%2BniOvuM8VRp8D5XPRS4xFGJlfrEEmDasORPWA1cOZ0XpJRbKVFRPlUZHXiXsQcomflf3WkR1ZkALrj%2FSUdjFMFN%2BO2%2FruHgW4%2B1BvwywqlnzmytKlzulRYxk23DaaIp%2BNpTVtbnILLer4tktdNyz7fsaOEsUzh%2FNh14V0aZ559kZzCzAgsDHYs66N1v12cTU5IGq92J93gFY4KBi8j7pmkk9YM7Ed%2FXVu7I1ZvcO9xDYhN0XdgcZ2M3X7ANp%2B9tXofxrcR8N4LpVXeql7SES2o9hujn6nl5FgdQwwDYkI5qgMZK7h6Y03E5wuZrainH4MgQm7vqwUKYlPVJO8DMuZ4ISNC6e6c5K937ass68gx98qQmUZb391NBqCkEA%2BlHX0x6jYjYvKFJgdgrkSzYWQvRSjnUDT5mAlt39sv3%2FLJvYwiEZuzDat3trxReNFtOSqdtBdlktaGUBJ15H18ictWhsXVzgRQQ%2Fwb2sg4ie5PAvW%2Fh2IkaA4oWaqDs7Y60dEvZrayGX1R4i8r0RbOmu9qpKi54Kq1O5cJadlTZKNKZdT%2FI2Si4JtAU1ndqWuQkm0GZvC8ESYgnCVe1fWzdQb7856jr1b%2B7ATsAAceul4l88n6EUN57MKOl8L4GOqUBJYmpJyZjLBUPqtVYDQstRRBuSk81BPFXRyPkJjvnhD9CsfOdFVo0lblDT4H58euHH4VjPuADuCQG6wQ0BaD3zksvjmKc3mKnxVSJh9Mejwa2K4qkTDTI3ISV0kflH3vfnkD7wXuRhzpf7iUmkbXzL8D6o6KVQ1Q9RpFteJpwtS8pTP3Ptb02AMF3mjRxMtaMKlX3ETaMRyqExA8M8e5gMxkXkzy2&X-Amz-Signature=f2cd73dc8fc9904ed9c1b914630db254e83c3873b5c9536eed81f7379b217ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
