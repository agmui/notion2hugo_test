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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJMGCV6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCflsnX0ITCoMWvN%2FP9tmeS5w1vuh9JL5gRslMwPf4IpgIgHcMQcHfRiFOrx2ZTM6N9Br8MdVvtMzp1mUQeoiPtUggq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO0CxBbcojnHrv%2Bd9CrcA0eRPFaUYXh2LtPHaHIjl6dkL7Z5U4%2FBC1LYCxqEYjdOG7vUzqCwbPnn0rY0m7ot%2F8F9q7cNg5UeWt8o6cUK01htwmT7qV7Sz7Qq13Xm%2FyKLd0IJePyWN7aXOmjSxxGnMJ6ntMXoSACgjruiDwK1ZxxB02Bm9vaD3CBofSjI4%2BKPt3OcTeKBBX%2FfLb%2FJ51euarzKM3NYbQnpSN1mSMLHkhuM17B6f%2BiBgl7QwZ2EbnT8tmc3r6GTLSNLqYAVegWCUNTxG7yl6f3%2Fsvu32ca1XBWNkvRrE1k6Jh0yFBEBfXgUzsZEVvnIspRKhYwtnVdUZ%2BYliZ4EIzDteEWn4LKISxrOxkmnd79VaWvyxsOn9CzkxxgWj44r4tYgyr6R24SnbzBhE65w05n2TthoOYBcY%2FndAuALxTdLMA3aXTIjT92xVonGYT%2BEC77CAvx9EBlLbP1epzWPudA34QbcgQW8hWRhyY3%2FA0wVVtDrWEe23dPOWvRAkvdKAgSHm4kLyGAK3MVRMSPy7%2Fng4kAJNMxxL%2BTG9UkPfcTSRoU80u0E4hfS7iIGsYntZYkynxENKqFuQZLNxEPNm35DG%2FWLeE3JOo8IVLaAVBwKEbVDHS%2FzIhbabzw4LTKnWeeMTMKMMKKpsMIGOqUB0ZNXdsuNyvPYlnfCHX%2FjktRYc8vIB4KMQ6nMicgfVe9KPmX%2F7n%2B4x1HO3Kb2NetSkShH4P84qYkkscGUcBRn%2FiZ%2BAnNhPYCgPNrkMT8KyodW2N6GeQObofwFWumXlAfP8%2Fh7PhBB%2FUIzMkTPKIuR5MQV76uqqnVzwrTnWp57KEj24bnfNB96JSvPAOm550iVPoq4%2F%2FCgBX2ddWbnZpU3TG%2FMgUj%2F&X-Amz-Signature=61ea0e7ae921a432a79c86abfb3697dba9c7bec9bfa7c2962304c67a94e0390b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJMGCV6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCflsnX0ITCoMWvN%2FP9tmeS5w1vuh9JL5gRslMwPf4IpgIgHcMQcHfRiFOrx2ZTM6N9Br8MdVvtMzp1mUQeoiPtUggq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO0CxBbcojnHrv%2Bd9CrcA0eRPFaUYXh2LtPHaHIjl6dkL7Z5U4%2FBC1LYCxqEYjdOG7vUzqCwbPnn0rY0m7ot%2F8F9q7cNg5UeWt8o6cUK01htwmT7qV7Sz7Qq13Xm%2FyKLd0IJePyWN7aXOmjSxxGnMJ6ntMXoSACgjruiDwK1ZxxB02Bm9vaD3CBofSjI4%2BKPt3OcTeKBBX%2FfLb%2FJ51euarzKM3NYbQnpSN1mSMLHkhuM17B6f%2BiBgl7QwZ2EbnT8tmc3r6GTLSNLqYAVegWCUNTxG7yl6f3%2Fsvu32ca1XBWNkvRrE1k6Jh0yFBEBfXgUzsZEVvnIspRKhYwtnVdUZ%2BYliZ4EIzDteEWn4LKISxrOxkmnd79VaWvyxsOn9CzkxxgWj44r4tYgyr6R24SnbzBhE65w05n2TthoOYBcY%2FndAuALxTdLMA3aXTIjT92xVonGYT%2BEC77CAvx9EBlLbP1epzWPudA34QbcgQW8hWRhyY3%2FA0wVVtDrWEe23dPOWvRAkvdKAgSHm4kLyGAK3MVRMSPy7%2Fng4kAJNMxxL%2BTG9UkPfcTSRoU80u0E4hfS7iIGsYntZYkynxENKqFuQZLNxEPNm35DG%2FWLeE3JOo8IVLaAVBwKEbVDHS%2FzIhbabzw4LTKnWeeMTMKMMKKpsMIGOqUB0ZNXdsuNyvPYlnfCHX%2FjktRYc8vIB4KMQ6nMicgfVe9KPmX%2F7n%2B4x1HO3Kb2NetSkShH4P84qYkkscGUcBRn%2FiZ%2BAnNhPYCgPNrkMT8KyodW2N6GeQObofwFWumXlAfP8%2Fh7PhBB%2FUIzMkTPKIuR5MQV76uqqnVzwrTnWp57KEj24bnfNB96JSvPAOm550iVPoq4%2F%2FCgBX2ddWbnZpU3TG%2FMgUj%2F&X-Amz-Signature=e82cd840a3c38af8b8ae33bd5a3458ca43cf2c803c2a4dfcd4e7421b241959fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
