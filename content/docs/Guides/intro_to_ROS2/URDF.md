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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z5LA3A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZh28BF9mB3OVe5q0YViyBfQOXDaxa%2BiOdOKIyhMitMAiAcQegnFAF%2F3jyu3ThvaWJ16KsO4KEFWHLH3%2BczAI4p1CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2FMDlCG4P0g6aE6tKtwDxYD%2FvPzoV%2FEs%2FR9u1XUV9j3N3rOqYkyq7lmXxqnI5uE%2BitS2bmW74NkK1M0IC%2FmCdBZ6kYBzSYuc3hrRar6UtRfiXx6cA%2FPUzlrXCpKeW9O9TOiEc8sgDoz6DVeUSDWvyT4HmVA61RmPIdxJ2OzOhl3ZGKFEyNZExPxFofKKVZTjk0kDMknGvNqjzvHOT%2FP1F%2FL9jsJRe1pUPletOoY5h5lPuZ8ckSpVCmeMcIsOQugCx5tsXuk3L17kC1QRzRZu6a%2BB4zUMn%2F37Lv%2FPO8PTF9Rh1ydSHBK5Ijzp55%2B46yK5ijd2%2Fdx19TbWCAPh%2BJhWk2OgmPtrliaifaOa0FNd%2BpfWwBFIrHPqDSedk6Wzz0ek0onjhvUNifsXdBztbKFy5ynWtjZY0i8cjOB7%2BKpTok6EFmDp2XyUuREWKBKl%2B6lW8gM2sedwnLddm6pCiHO85FwrNM%2FqaeZdnTU3xh5ibqPTbeznCm8rB7rTypLY%2B9Iho3vu9GfzmVu5ZdiXeEg7NA2vMUQ4FDRUd%2FEHSnloJJFFAobdvivO0dGkOQokGojXv6HT6%2FDpXc9hy3u%2FH%2FLwCWBoPMZG73PtqOsSwGdf8wv4zD1SGA2E35qYMJAcLaancCaC06MlUmfn9VAw8JmYvgY6pgHeQScttwOuygTQVriGv3AixEL7dBV5rTrHsTFhKuRoojlymtYlGmLCt284ifGAwzbcZRotUtzHCWG8Bpz8xkRWhocOXOiSMFi4q6G91pO3LZowv9aUM2TCTE1ZAahHW7LGLA5XMNzc9hLPXX8DdXp9S7BQojgldX460PXOmxlymWbATytwWiDz%2BEpA9K%2BvXPQst6qUfUyDB83j8jk7aFZzqtT%2Fy4Uz&X-Amz-Signature=4a2ad116795d15b869d9dc02d6649d6d338475450ad1369827609aa7a8a8b67f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Z5LA3A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZh28BF9mB3OVe5q0YViyBfQOXDaxa%2BiOdOKIyhMitMAiAcQegnFAF%2F3jyu3ThvaWJ16KsO4KEFWHLH3%2BczAI4p1CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2FMDlCG4P0g6aE6tKtwDxYD%2FvPzoV%2FEs%2FR9u1XUV9j3N3rOqYkyq7lmXxqnI5uE%2BitS2bmW74NkK1M0IC%2FmCdBZ6kYBzSYuc3hrRar6UtRfiXx6cA%2FPUzlrXCpKeW9O9TOiEc8sgDoz6DVeUSDWvyT4HmVA61RmPIdxJ2OzOhl3ZGKFEyNZExPxFofKKVZTjk0kDMknGvNqjzvHOT%2FP1F%2FL9jsJRe1pUPletOoY5h5lPuZ8ckSpVCmeMcIsOQugCx5tsXuk3L17kC1QRzRZu6a%2BB4zUMn%2F37Lv%2FPO8PTF9Rh1ydSHBK5Ijzp55%2B46yK5ijd2%2Fdx19TbWCAPh%2BJhWk2OgmPtrliaifaOa0FNd%2BpfWwBFIrHPqDSedk6Wzz0ek0onjhvUNifsXdBztbKFy5ynWtjZY0i8cjOB7%2BKpTok6EFmDp2XyUuREWKBKl%2B6lW8gM2sedwnLddm6pCiHO85FwrNM%2FqaeZdnTU3xh5ibqPTbeznCm8rB7rTypLY%2B9Iho3vu9GfzmVu5ZdiXeEg7NA2vMUQ4FDRUd%2FEHSnloJJFFAobdvivO0dGkOQokGojXv6HT6%2FDpXc9hy3u%2FH%2FLwCWBoPMZG73PtqOsSwGdf8wv4zD1SGA2E35qYMJAcLaancCaC06MlUmfn9VAw8JmYvgY6pgHeQScttwOuygTQVriGv3AixEL7dBV5rTrHsTFhKuRoojlymtYlGmLCt284ifGAwzbcZRotUtzHCWG8Bpz8xkRWhocOXOiSMFi4q6G91pO3LZowv9aUM2TCTE1ZAahHW7LGLA5XMNzc9hLPXX8DdXp9S7BQojgldX460PXOmxlymWbATytwWiDz%2BEpA9K%2BvXPQst6qUfUyDB83j8jk7aFZzqtT%2Fy4Uz&X-Amz-Signature=84cbdf6789f8d15c276f22356fb2812990e5b3f7e458493734edea78d81f7c63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
