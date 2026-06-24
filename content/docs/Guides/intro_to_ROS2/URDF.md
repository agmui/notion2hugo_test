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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMVEH7O%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCJD0xrRVQsxfrHtOr%2F7Q6xRuqpoj66igFv9KHJJ4w5cQIhANuMrOvsoooDPCMwo28GfVTdmvg%2BUtZS70AQMbVPEMTdKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxsnSOjwIpRY4pzqMq3APTy6JzB2S7g%2F5AwkBxiBOGi108UTySHDOMXS2zfpm%2BY%2Beyt4CO1nd4oepDWqVxo%2FFgxh8hYlgdCLgSb1l0Hn3Cz6K4bSN3TFt35bU1PO6129iyBVfEp3qg17iktKloOV5oqnVnhdJ4HoaU1IGSpH4D%2FGs3IGwBX%2ByYRpd8U4lCkWBSN2qRao%2FCHUeLnasemA9AIPzWri3X%2FQ5NNplRLaq3YLP5BfCzqxQMOD4mu9wcmVxv3ziF0LSjqLVO%2BD4p0nTgJH48l8gCdMhmhDYC3ZFJm3Sg3q73w%2FAjMcEQ6Y5RiwAWl4bvVGO1xutDtIskG7sFKYWfSbvqCOLsxCGx7hGUT3pT%2BZx4EhF67zs5BqjmCjC2fj3AjG2H69yDBRYPXc3mMCzJX64MolikNaCyiSnIhgKz4dC8s%2F50JZnY7H8r4H%2BZz41%2FFqOnTjfviqyeUvy8x271wH%2FwEwEyU%2F3khzP9X5QqZAhX8Riw8dhk8QXqay%2FF9lR%2Bi183yCA7gH3fLLG%2BFsRgB4GUl5YIq9gkI%2B8Z7Mzxb85wAl%2F9WRDPwMAMUiH8QBXlXSRCfGklBbodMEV09ns5Tc7d2WyStGKP2qmE2ASJ%2Fe8WFThr%2BaUWztCK3ZKt1KafNkDwCLZQ%2FTDh7uzRBjqkAZQ1%2BmhV4toG73KmxjZy1rv4Bja8tKDbf2XTmZqz0lguJDo4k4b9GNnBlDwDqsZQmTvXlBpcC2VMtccj1mCFbP0LopKw3%2FX92XW1hvGn%2BT%2F%2BVfeKVWjGRDaJuZkchZJs0UxGYS9wWPO4VK61YQ4kgemUi1vGh0Rv3nThtT2qZMFTfBobu2YJWgJ%2By9dLxClGAv3kfMFqbebGpOEU7UdW9RT8ATRb&X-Amz-Signature=d27cf294a908b48fdbffb46b2adefaec357b50a42612bad8bd29d96192d3c575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMVEH7O%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCJD0xrRVQsxfrHtOr%2F7Q6xRuqpoj66igFv9KHJJ4w5cQIhANuMrOvsoooDPCMwo28GfVTdmvg%2BUtZS70AQMbVPEMTdKv8DCCsQABoMNjM3NDIzMTgzODA1IgyxsnSOjwIpRY4pzqMq3APTy6JzB2S7g%2F5AwkBxiBOGi108UTySHDOMXS2zfpm%2BY%2Beyt4CO1nd4oepDWqVxo%2FFgxh8hYlgdCLgSb1l0Hn3Cz6K4bSN3TFt35bU1PO6129iyBVfEp3qg17iktKloOV5oqnVnhdJ4HoaU1IGSpH4D%2FGs3IGwBX%2ByYRpd8U4lCkWBSN2qRao%2FCHUeLnasemA9AIPzWri3X%2FQ5NNplRLaq3YLP5BfCzqxQMOD4mu9wcmVxv3ziF0LSjqLVO%2BD4p0nTgJH48l8gCdMhmhDYC3ZFJm3Sg3q73w%2FAjMcEQ6Y5RiwAWl4bvVGO1xutDtIskG7sFKYWfSbvqCOLsxCGx7hGUT3pT%2BZx4EhF67zs5BqjmCjC2fj3AjG2H69yDBRYPXc3mMCzJX64MolikNaCyiSnIhgKz4dC8s%2F50JZnY7H8r4H%2BZz41%2FFqOnTjfviqyeUvy8x271wH%2FwEwEyU%2F3khzP9X5QqZAhX8Riw8dhk8QXqay%2FF9lR%2Bi183yCA7gH3fLLG%2BFsRgB4GUl5YIq9gkI%2B8Z7Mzxb85wAl%2F9WRDPwMAMUiH8QBXlXSRCfGklBbodMEV09ns5Tc7d2WyStGKP2qmE2ASJ%2Fe8WFThr%2BaUWztCK3ZKt1KafNkDwCLZQ%2FTDh7uzRBjqkAZQ1%2BmhV4toG73KmxjZy1rv4Bja8tKDbf2XTmZqz0lguJDo4k4b9GNnBlDwDqsZQmTvXlBpcC2VMtccj1mCFbP0LopKw3%2FX92XW1hvGn%2BT%2F%2BVfeKVWjGRDaJuZkchZJs0UxGYS9wWPO4VK61YQ4kgemUi1vGh0Rv3nThtT2qZMFTfBobu2YJWgJ%2By9dLxClGAv3kfMFqbebGpOEU7UdW9RT8ATRb&X-Amz-Signature=e700bff3d66f51540a66602ccff66cc8bf15b7a1398ad7c8e5880c96e6dcc38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
