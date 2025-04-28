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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3443C%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXrXlqhk2NS%2F%2F%2F3Hqf%2F9aohkJL%2Bym9sY6fU6GXeX6AZAiAbznXZtt2LBQidX2xa15hbvNpQQgZ3am%2BEYOD2cg2K7yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM2GZyTO%2FXW%2BA55p3wKtwDLVN2t5jKovRZdLJcWVBRy883KCl0fHNiw2QXzW%2B%2F1BJZ4UnSippQA83Tu0gOeUpg%2B9SmcKLv2gdiksF6k8cZezK3vHzny6qhrgs465cHMTSvcPzuDLGZcMFRkyQXhTBPJZVdHjV6KJVM9WdP4Vuu%2BPh%2BOSS978HEGJM%2Fr5JTsFQAPn6eucOoHSgg0WGNU3nAp4aZMSaABF%2FPNgH6b%2BfLMZw5aduGhu4GLTqwOlXgnQIKg1WoByGfwGI3rkmfSXmLtunsvV%2Bt8bagiCNo8I49Zoul7tmkj%2B5%2FtVeuHsxCETAXa0m33Dy09IPO7SUiz6IbGqox7Dz1h3GZ4cTmiBJyiXRPiwCZoVT0FcWx9s17Nh248d17zqTJ0aPl0dfzlpRsN2FKeAecplkYXW0OiI%2FEK4EGXQqKTwsx%2BzHukQRvY%2FnrXWJFFbRmtMN2DtiDFSZoZw7iwj5AnHWl2j6DB6NtpaKQJ%2BId2rrI19LlGkomq3xiygf3uaEfXgTsXykEhTch8B26sXk%2FClHO5OvvJfTlh4Zy7TbidPz8Epoakgs7L9bOuRkZW4oY9xjGOuCpNA2agiNTfx7GLKO16YAOf8x8rOHyKRn4CR7dUiGLtqzwTup4QRs17Ae29Qo3kgMw99G%2FwAY6pgHCYAGa%2FZHKMqalc3aU0J6M68WKXI8SbjvfxD35cbpg%2FlE%2FfxNYXJ6Gugs78pi7YCf%2B3bvLamh58OfHRDS264vvrjCWjdITazEpKgH69nmdOkHc5noQR33OJiRRrow2giyXDfEXA%2FsuGNOZl1XNu5yX5mNuPm%2BtdbCctoM1tlZxwxei4tqG7guYBqNZb1sxIf7keG2o6u6drCseDv3hYVs%2FUWYQvxo%2F&X-Amz-Signature=e4bf53fdac50507f8af35d2c9f7005e62cee976d7ea92bab61e510d9ce596d66&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3443C%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXrXlqhk2NS%2F%2F%2F3Hqf%2F9aohkJL%2Bym9sY6fU6GXeX6AZAiAbznXZtt2LBQidX2xa15hbvNpQQgZ3am%2BEYOD2cg2K7yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM2GZyTO%2FXW%2BA55p3wKtwDLVN2t5jKovRZdLJcWVBRy883KCl0fHNiw2QXzW%2B%2F1BJZ4UnSippQA83Tu0gOeUpg%2B9SmcKLv2gdiksF6k8cZezK3vHzny6qhrgs465cHMTSvcPzuDLGZcMFRkyQXhTBPJZVdHjV6KJVM9WdP4Vuu%2BPh%2BOSS978HEGJM%2Fr5JTsFQAPn6eucOoHSgg0WGNU3nAp4aZMSaABF%2FPNgH6b%2BfLMZw5aduGhu4GLTqwOlXgnQIKg1WoByGfwGI3rkmfSXmLtunsvV%2Bt8bagiCNo8I49Zoul7tmkj%2B5%2FtVeuHsxCETAXa0m33Dy09IPO7SUiz6IbGqox7Dz1h3GZ4cTmiBJyiXRPiwCZoVT0FcWx9s17Nh248d17zqTJ0aPl0dfzlpRsN2FKeAecplkYXW0OiI%2FEK4EGXQqKTwsx%2BzHukQRvY%2FnrXWJFFbRmtMN2DtiDFSZoZw7iwj5AnHWl2j6DB6NtpaKQJ%2BId2rrI19LlGkomq3xiygf3uaEfXgTsXykEhTch8B26sXk%2FClHO5OvvJfTlh4Zy7TbidPz8Epoakgs7L9bOuRkZW4oY9xjGOuCpNA2agiNTfx7GLKO16YAOf8x8rOHyKRn4CR7dUiGLtqzwTup4QRs17Ae29Qo3kgMw99G%2FwAY6pgHCYAGa%2FZHKMqalc3aU0J6M68WKXI8SbjvfxD35cbpg%2FlE%2FfxNYXJ6Gugs78pi7YCf%2B3bvLamh58OfHRDS264vvrjCWjdITazEpKgH69nmdOkHc5noQR33OJiRRrow2giyXDfEXA%2FsuGNOZl1XNu5yX5mNuPm%2BtdbCctoM1tlZxwxei4tqG7guYBqNZb1sxIf7keG2o6u6drCseDv3hYVs%2FUWYQvxo%2F&X-Amz-Signature=e68eb446ee6e13cfb5c19de13c8f17095b73d68ba089e7bc9d12dec0b620f74b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
