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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3ZT3T3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIG2Lp%2FEmboKDvzUHMjL8Ks2I9e%2BYSsJk5vrQrS%2FYe2ExAiEA1ZWmKkC9GxnnHM8SZSWKYyTcMLLlg6qKrdc%2FwL0DQdoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMUyF8GzxgMn0L3QircA4LAcW4m7%2FUsI6dw7Te6k2h1sKiweBfZ5e3DxGYeEkAIPsG5LXJBE1hX3hwPXdqnNGT2iN%2BdOhGCzCeMmS5efJT7bj%2FfmbAGIJT59o2wfi25v2vW49JtlItE3hiJL5hOT8QqwojeWNNg8IwV0Rs7UKsPFXKEmAgDmdm4KFrvRLN4%2BDuS50%2BOrkXmZAD6tZrg4rRSLNAyWSMls5Qw%2FEhS5NRwIj6Ki2ObIA9GkIDAJfRDNU9b83MoUpBm0OGkaqeAj4SzwFy2pcW%2B7rgC4i261NzRjrP5e90GNjwqZB67msTyQmmERZdNvRsEYxGNmYyOvc9YmtUMIGTirYvioQvxUdyfdlZuStzzdbeEWpvO%2B2Xx3USFMAeRpwFSsUqFdnronXuhZDRP5t587usXnOcNgbuADKQ1X1LjXh8wqdNtJ3VXeXesd4Lq7bOcW5soQN%2BJy%2F7e%2BV9XYmnRvJtTabzeXaW08DQZXnWmMcRADfRdMiBA3syTRqqz6L%2BHjpCExmHC6mO3BoBQFyp7KdbKTUSYpd31Zl2F6h4Lla8A2DsOa7oiSsvuSMBM1l5T8Rk63a8kRWFSSziBqnR1xexJKucrtKH4NHElsbhU4TJkhv%2BcUDSCkMifnaYA05WLUlLqMJ7%2BwsEGOqUBG31yVsODIg2vKsWVHTLZEop4f4it%2B0SU%2B4l07hg9UqP9GjzCp0mfnCb4K2qbljr1xKv6Na9g7kXjNV0g%2FYH0t0%2BTiPp2T6SP16CrbaIrbR85xgkk1RnYki%2B1Zxb13E8CJwJ0TOb5UkT3JTD4RZPTEonTXTueSY59AA94Ud09IdozLGQdxbxuIljL43UyBb%2BdO20Lpx5so9d%2F0%2FPpDLwFCQXyFEsb&X-Amz-Signature=d6c0bccfec2fee2711d3a1fea87234ffadfda30bb3fb585afedaad9c6234be7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3ZT3T3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIG2Lp%2FEmboKDvzUHMjL8Ks2I9e%2BYSsJk5vrQrS%2FYe2ExAiEA1ZWmKkC9GxnnHM8SZSWKYyTcMLLlg6qKrdc%2FwL0DQdoqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMUyF8GzxgMn0L3QircA4LAcW4m7%2FUsI6dw7Te6k2h1sKiweBfZ5e3DxGYeEkAIPsG5LXJBE1hX3hwPXdqnNGT2iN%2BdOhGCzCeMmS5efJT7bj%2FfmbAGIJT59o2wfi25v2vW49JtlItE3hiJL5hOT8QqwojeWNNg8IwV0Rs7UKsPFXKEmAgDmdm4KFrvRLN4%2BDuS50%2BOrkXmZAD6tZrg4rRSLNAyWSMls5Qw%2FEhS5NRwIj6Ki2ObIA9GkIDAJfRDNU9b83MoUpBm0OGkaqeAj4SzwFy2pcW%2B7rgC4i261NzRjrP5e90GNjwqZB67msTyQmmERZdNvRsEYxGNmYyOvc9YmtUMIGTirYvioQvxUdyfdlZuStzzdbeEWpvO%2B2Xx3USFMAeRpwFSsUqFdnronXuhZDRP5t587usXnOcNgbuADKQ1X1LjXh8wqdNtJ3VXeXesd4Lq7bOcW5soQN%2BJy%2F7e%2BV9XYmnRvJtTabzeXaW08DQZXnWmMcRADfRdMiBA3syTRqqz6L%2BHjpCExmHC6mO3BoBQFyp7KdbKTUSYpd31Zl2F6h4Lla8A2DsOa7oiSsvuSMBM1l5T8Rk63a8kRWFSSziBqnR1xexJKucrtKH4NHElsbhU4TJkhv%2BcUDSCkMifnaYA05WLUlLqMJ7%2BwsEGOqUBG31yVsODIg2vKsWVHTLZEop4f4it%2B0SU%2B4l07hg9UqP9GjzCp0mfnCb4K2qbljr1xKv6Na9g7kXjNV0g%2FYH0t0%2BTiPp2T6SP16CrbaIrbR85xgkk1RnYki%2B1Zxb13E8CJwJ0TOb5UkT3JTD4RZPTEonTXTueSY59AA94Ud09IdozLGQdxbxuIljL43UyBb%2BdO20Lpx5so9d%2F0%2FPpDLwFCQXyFEsb&X-Amz-Signature=faa1d0993042fca7c958b4f6b9d9317fd3682901e31171e0d66355173b828c03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
