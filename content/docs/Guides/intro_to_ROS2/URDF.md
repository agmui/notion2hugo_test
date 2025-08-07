---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIWCOY3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHqmFxCX9sswTPvZWCAbgnHuycrz09FycNYVsuIzZo93AiAYkzz7OXyw8egJNhvUuMzsGmEZxGpd3OhiUUhbvB1KDCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfGZnAgkDMTPlsEJXKtwDX4z6pKIADvRvBg%2F0gu9CidLoOZnSxkPwSXP%2B%2FPrPP2h9aYz8u%2BNAtzMwkaOwZlbreM3AZKW9cxDHHKV%2BY%2FAI8VJh2xtvWJheAmIXI9pzf%2FGaoM6LA8WEXpgPcrsxBmq6LD7tGc93ppAOyBynnOmPFk6P8C6K7WKpb7MBDPQizQ8%2Fue3WS0vnJPG8r1dLr5PkIUZaogQTfQP26%2Ft91SiVn3bebJ1IAESOWzTUh3XGEQ8jXFzDMVW0obSe7zFOCntgeM3GGDQe7N40A%2FNe7MwV79q%2BNQ53WWwuuPfuBncTUcQKUlSxIn8qafYAhe2GqRzEb%2FusItwYvzMQr4f%2BmqSwwClrnZkTybCMXBz9F94EgswDiUyJLAg76k1y6RVlj9wndvydBIVXlvnkrH6bGrBAQ1PMmSko8cFY2HA366AIiuC8E5LGj8%2F1AwRQc06jPErDU6ctQWHicvpXvFKWKc%2BZjq7ed3GdwO08MnbwIyXLh4xNbrdzWF3rceWa5xHSx15aO4HWQXj3h8rnTbmaqufNoJhEJTgOWW%2BiZVwfHFJ7NeEaooK8JQcMI%2FqCfQ5sAYwHWn5vCo3tqh6xFFV5NpUqNrNFvoq7kL4t77gAZDEFZW%2BpqUeiVBFT5K7nSJEw%2BuzQxAY6pgFgBsSOLSAyYpJo%2BNWd5l8aAaOTD6aPGIrdkKNY8pY50nitHU56P2rFy%2FwszA1FPoORfaKtNZCxMvTVMiRm0ceYJ3nT0wDjWsdYrY0VPxnjgNdpcy4hJuDj8s1GxflMxOj02JPOXBIhY7ck91l4gsvK1csGV%2FCnzFMkomiWfw%2BF8N6oUHuaEjlFLlRWmCKOXBmnx3BPIVI%2BfnPYKLnfz6lyatLxZR83&X-Amz-Signature=a03472873e3b34b8b54b568a4b6a2cc7ff72c3499dd542b150ecb42fcafe03a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIWCOY3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHqmFxCX9sswTPvZWCAbgnHuycrz09FycNYVsuIzZo93AiAYkzz7OXyw8egJNhvUuMzsGmEZxGpd3OhiUUhbvB1KDCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfGZnAgkDMTPlsEJXKtwDX4z6pKIADvRvBg%2F0gu9CidLoOZnSxkPwSXP%2B%2FPrPP2h9aYz8u%2BNAtzMwkaOwZlbreM3AZKW9cxDHHKV%2BY%2FAI8VJh2xtvWJheAmIXI9pzf%2FGaoM6LA8WEXpgPcrsxBmq6LD7tGc93ppAOyBynnOmPFk6P8C6K7WKpb7MBDPQizQ8%2Fue3WS0vnJPG8r1dLr5PkIUZaogQTfQP26%2Ft91SiVn3bebJ1IAESOWzTUh3XGEQ8jXFzDMVW0obSe7zFOCntgeM3GGDQe7N40A%2FNe7MwV79q%2BNQ53WWwuuPfuBncTUcQKUlSxIn8qafYAhe2GqRzEb%2FusItwYvzMQr4f%2BmqSwwClrnZkTybCMXBz9F94EgswDiUyJLAg76k1y6RVlj9wndvydBIVXlvnkrH6bGrBAQ1PMmSko8cFY2HA366AIiuC8E5LGj8%2F1AwRQc06jPErDU6ctQWHicvpXvFKWKc%2BZjq7ed3GdwO08MnbwIyXLh4xNbrdzWF3rceWa5xHSx15aO4HWQXj3h8rnTbmaqufNoJhEJTgOWW%2BiZVwfHFJ7NeEaooK8JQcMI%2FqCfQ5sAYwHWn5vCo3tqh6xFFV5NpUqNrNFvoq7kL4t77gAZDEFZW%2BpqUeiVBFT5K7nSJEw%2BuzQxAY6pgFgBsSOLSAyYpJo%2BNWd5l8aAaOTD6aPGIrdkKNY8pY50nitHU56P2rFy%2FwszA1FPoORfaKtNZCxMvTVMiRm0ceYJ3nT0wDjWsdYrY0VPxnjgNdpcy4hJuDj8s1GxflMxOj02JPOXBIhY7ck91l4gsvK1csGV%2FCnzFMkomiWfw%2BF8N6oUHuaEjlFLlRWmCKOXBmnx3BPIVI%2BfnPYKLnfz6lyatLxZR83&X-Amz-Signature=f33a808c2ff484cb040e1d356280b41d225c3d408090cdb0424864bd80b4ed62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
