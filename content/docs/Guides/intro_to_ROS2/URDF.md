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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6ENBX5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICYDLAEvT0yBW%2FFuHmlB1kWG%2FmEcu3vmKF7IJaOOZDAKAiAppwNX3QfGVHlHaUmB61eoizRlBlQzM7DldD7sKHQrHir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM2cLZxUsKZqdouubuKtwDU%2BVS5aXwfSaK8H8hwdGJ%2BX5oesyi%2BK5AoTcslnGO8izdh2S4cbl1Fdr9Njb24St5PkFwkHiGjOt9qmeJO8v7NH7DoJVXVVs4bCrwUrpRqI9eusOEy6i3tdDLYpdT%2B0R7PDhOVSOcbruNr9ARk6W9Vas%2Fmrk83qo%2FMMDw3693esFBUQx6N%2FnPyGxxvmULE9a8AJPKitEl0NfIac8FU2ZK2TFwyE0KH2QHbSK6BJqiS1%2B0duLK3P%2BYkEtWmu3gRZQCltnJNx6Q9P69mcebU8dA6TiwFwXZUiH3B2dSaGiqUlb111h3RZHMt%2Fa0MHfZ%2BY9oORg5JI%2Bui9d0mDqNz4WCEcRAh3PD4Biwe2%2BlaK1WI7bWRmbKqM7J%2FNgIzpK19nkKcjEqEHimv3DRkNWjTDifakgci15V7%2B%2F7KfFCVgTOvT6pbX2SDUMFHVxLzPJ5fPavZwsZycTbNce30cgBmKh9s5CzaqDubZ6aGv%2BvO7O9Rceye7zvVq%2BYoQRXGnEXIowVQAk%2FaIgqUNy1msYtO4mPt%2BNejZQOs5NWuvEEXA%2FxLh32hdyMeSdOb39oEMaNaYXrN8CFVt6%2B9ezUfSi5HGYIZCPm%2FXvM0Kv3HXPvN6HtyauKwEpsFzzYowF%2FcLIw7amtwwY6pgFPjHDkw4ahUginWLMEzdJFGGV0cb%2FCxkDNhKJducsCPDMFVBC5Vs6e%2BIsoRw53h3UKraJ4pNAbw95sW12iXJ5lCkhfhF8BW5BAucz9woiIeyo5YmmvHZBY%2F6PPyRHW2OWXuQOhgi1OZrestMjX3yJabQB%2B6Zg3VgItQp%2FoYgNX4oOEqXsMgqUhytcFlME0H%2Ftc8FzLoUDmiZnvzc6d5AkZHLXJDspz&X-Amz-Signature=78192991345c0e524740aeb21f2cddaf1f4896e896e36795988fe524faefef99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6ENBX5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICYDLAEvT0yBW%2FFuHmlB1kWG%2FmEcu3vmKF7IJaOOZDAKAiAppwNX3QfGVHlHaUmB61eoizRlBlQzM7DldD7sKHQrHir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM2cLZxUsKZqdouubuKtwDU%2BVS5aXwfSaK8H8hwdGJ%2BX5oesyi%2BK5AoTcslnGO8izdh2S4cbl1Fdr9Njb24St5PkFwkHiGjOt9qmeJO8v7NH7DoJVXVVs4bCrwUrpRqI9eusOEy6i3tdDLYpdT%2B0R7PDhOVSOcbruNr9ARk6W9Vas%2Fmrk83qo%2FMMDw3693esFBUQx6N%2FnPyGxxvmULE9a8AJPKitEl0NfIac8FU2ZK2TFwyE0KH2QHbSK6BJqiS1%2B0duLK3P%2BYkEtWmu3gRZQCltnJNx6Q9P69mcebU8dA6TiwFwXZUiH3B2dSaGiqUlb111h3RZHMt%2Fa0MHfZ%2BY9oORg5JI%2Bui9d0mDqNz4WCEcRAh3PD4Biwe2%2BlaK1WI7bWRmbKqM7J%2FNgIzpK19nkKcjEqEHimv3DRkNWjTDifakgci15V7%2B%2F7KfFCVgTOvT6pbX2SDUMFHVxLzPJ5fPavZwsZycTbNce30cgBmKh9s5CzaqDubZ6aGv%2BvO7O9Rceye7zvVq%2BYoQRXGnEXIowVQAk%2FaIgqUNy1msYtO4mPt%2BNejZQOs5NWuvEEXA%2FxLh32hdyMeSdOb39oEMaNaYXrN8CFVt6%2B9ezUfSi5HGYIZCPm%2FXvM0Kv3HXPvN6HtyauKwEpsFzzYowF%2FcLIw7amtwwY6pgFPjHDkw4ahUginWLMEzdJFGGV0cb%2FCxkDNhKJducsCPDMFVBC5Vs6e%2BIsoRw53h3UKraJ4pNAbw95sW12iXJ5lCkhfhF8BW5BAucz9woiIeyo5YmmvHZBY%2F6PPyRHW2OWXuQOhgi1OZrestMjX3yJabQB%2B6Zg3VgItQp%2FoYgNX4oOEqXsMgqUhytcFlME0H%2Ftc8FzLoUDmiZnvzc6d5AkZHLXJDspz&X-Amz-Signature=47b5e90710eedd8dd7b1891aa36ab9334fe8edbc04b6bc97addae257f150d0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
