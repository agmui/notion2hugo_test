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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKQKFRJJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsBdkj43fvDnJlTfBRwTkIxhMoXeiAsvM24V%2BoYKUbvAIgQkzmAgr9nbzzXoFjr0LmmCpJw3MeTuP3cUmep7FidxoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8hRBZQc6OgKw3EYyrcAxetVfX7stamYcUVlahb0BkR5mkjCjl%2BvDw5y%2B%2BaBeoTvyY0wYiw8nROZCHkPI6l01PPsHT09l00lZ%2FfbzkB0Uw5erCkRM1iaPw6dABssJ0egE6QQQl5GTGBvYZcmLdzxknpKqzQlhVgr2iGNBeZsjn62RYtgZsph8CKQTYGElwygEc2uSe73hWqkjauZ2QRmiPSxh%2F8bvMpR2xs1Jo2f57J%2BDNe1Z7Pp1Zbr8VJCM%2FVKwXzf3mgrbOoaoGCh2EcLErKAjrs0pRj4FppJCXf3KBPAtmF5MlkkuWy1LS0QsJVueKAaCauz9zqO0xJu05wxYRmmXmfdyEP6w33JE%2FXwu2hJg0f%2FVTw4tkb8wWTOfXxAg%2F0%2BMJKCNvkOlHIOVEvXUaDNG6I%2FP8ybCPCF0ZzhyiL1XQCSz23ENC%2BiAKftCF%2FP1dxI%2F4Nx6gzbZ%2FTDBotEG08q70tupNMPnBt3rHXIEz4In%2B17WoQl%2FJi0qWp0KqK8hvFwX7I8QDWb5ZvHcBZso9USHo5W2o7FPLpdKMKVCFWaqL5P5%2BXZFY4y8MDkWXGQpkeATMIWyBvIOYJ7e7dMtBJmrc0gYtgdJB2kIsEwXq1vJsjcC7WoaYbQr2RByVu51JeiHV1jUwVC8EkMPaiqMQGOqUB1hB%2BUN20NcIbOLqREvaX%2FJdG2aridyI1WCRY0p1NaO9KrPt71xVRBSUxpgVLGrfk1o1OncdA4EtSOmO84RPKQZqQDkpIPrxIUuPd3%2F5SaKhIbJTW%2Foxm56YJDcGM6Exb9vmI541UlW1WOP3Hj3flPUIc2NxXq0UxZ1C939K1H86ZiLr1t2NpYRTlgfaWbJJGgFe6P7%2FwlJYFjnO%2BxxWr3KJdsLtm&X-Amz-Signature=6ffd027a226525b91d64dbadbd02a1ba6cc052efd61ee34e44b80fdc583e5a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKQKFRJJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsBdkj43fvDnJlTfBRwTkIxhMoXeiAsvM24V%2BoYKUbvAIgQkzmAgr9nbzzXoFjr0LmmCpJw3MeTuP3cUmep7FidxoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8hRBZQc6OgKw3EYyrcAxetVfX7stamYcUVlahb0BkR5mkjCjl%2BvDw5y%2B%2BaBeoTvyY0wYiw8nROZCHkPI6l01PPsHT09l00lZ%2FfbzkB0Uw5erCkRM1iaPw6dABssJ0egE6QQQl5GTGBvYZcmLdzxknpKqzQlhVgr2iGNBeZsjn62RYtgZsph8CKQTYGElwygEc2uSe73hWqkjauZ2QRmiPSxh%2F8bvMpR2xs1Jo2f57J%2BDNe1Z7Pp1Zbr8VJCM%2FVKwXzf3mgrbOoaoGCh2EcLErKAjrs0pRj4FppJCXf3KBPAtmF5MlkkuWy1LS0QsJVueKAaCauz9zqO0xJu05wxYRmmXmfdyEP6w33JE%2FXwu2hJg0f%2FVTw4tkb8wWTOfXxAg%2F0%2BMJKCNvkOlHIOVEvXUaDNG6I%2FP8ybCPCF0ZzhyiL1XQCSz23ENC%2BiAKftCF%2FP1dxI%2F4Nx6gzbZ%2FTDBotEG08q70tupNMPnBt3rHXIEz4In%2B17WoQl%2FJi0qWp0KqK8hvFwX7I8QDWb5ZvHcBZso9USHo5W2o7FPLpdKMKVCFWaqL5P5%2BXZFY4y8MDkWXGQpkeATMIWyBvIOYJ7e7dMtBJmrc0gYtgdJB2kIsEwXq1vJsjcC7WoaYbQr2RByVu51JeiHV1jUwVC8EkMPaiqMQGOqUB1hB%2BUN20NcIbOLqREvaX%2FJdG2aridyI1WCRY0p1NaO9KrPt71xVRBSUxpgVLGrfk1o1OncdA4EtSOmO84RPKQZqQDkpIPrxIUuPd3%2F5SaKhIbJTW%2Foxm56YJDcGM6Exb9vmI541UlW1WOP3Hj3flPUIc2NxXq0UxZ1C939K1H86ZiLr1t2NpYRTlgfaWbJJGgFe6P7%2FwlJYFjnO%2BxxWr3KJdsLtm&X-Amz-Signature=05a0c865a9cc024bffa912f0d6bf6903cf67b76a1d07e1dbc75d4e54eb8c922e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
