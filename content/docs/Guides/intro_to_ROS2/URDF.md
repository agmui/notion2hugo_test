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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPDCBCV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1XPzTWvf%2BrQ9qUI8xsBNgqPNeMx0aHh%2FgpQFMYkTLNgIhALSyFCybVECaPu0gf7fYHrAjfWL3gzcqVLt11ykzmKfQKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHcXtPtsXfAr6PUc4q3ANgzqZTCSFA5sXtlHD7qojbtL2mlK7FyMpSyGlOKZ%2FP8rTXGLZU9fj4UrWyyXuOUwoGvOZz0fVqiqVnQV4sRTQz%2BHf3KDWDTcm8zwhVKrDlERXpkNreyq43GWXflopFxU3cog6zpyqXFiqvXN5wC7mGLUdaStjMxxaaMELD3YVL7H8fJcBef39suY98%2FI7Na18vHxv8TjhqSZMH22TS4iA317tZ0BXXABRdCNGdOiDrNUlYgOqGbdalPsDInGLKtUBFZf0GWRGkaotHqWvweL7SlmVFLxnEKIkz61dXk1IjAPUyXAO45kyaWkNDG43uRQQu32wCwkCC5CDhRvGoQgmaQKgh0khzjk8XfYTPL056apL%2F3MxGpd6nXjJGLC4dcCsqV%2FK47UCq2qRq82W9SudqOG77m3Iknypn4wNtuojHfgigzkh%2FFZUlRuNHi7JMGXCQKFtdMbPvJvf2E5xMdHUzxAoyNQOADtplx%2FZr7DE8SDjCuPK2j39CLsDrD7kAqQONDhvRhi2GAB2z%2FZOLsCFmgPJpYpDZiHC0TOgAo25C%2B%2BxKat9ozQfxCruk3hASZ1h5TdXKQ7p4R6sAZJvLoOIIjHO0xaRBsvtEitQFU7RMpaTPmc19ccH9HhRE0DD8m5e%2BBjqkAXUfdockZ%2BsPVyXsYqnXW5XpuusW1aGYngFHvDIdzMLByLM%2FqNQNw7%2FkI7sZ4k0LMZ9MrWOhNs8bd5BrOHPKYAyEtRXYl0dsobvO6vJ9dUNa%2Fe6SRw9xX6QYbbqEYyjsRaZNJ6c7NtjMKRJSMmCcHeSui3hgyybxsu5E9PysFEHAnxr5BR1na9MjUbzPQREsv64ETEcfaXkTLKBQIm0rgT1q6V3N&X-Amz-Signature=6e31b7fddd81a91172744ad0cb2173442e99eff2a6c4353bb9c9411e64159eab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPDCBCV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1XPzTWvf%2BrQ9qUI8xsBNgqPNeMx0aHh%2FgpQFMYkTLNgIhALSyFCybVECaPu0gf7fYHrAjfWL3gzcqVLt11ykzmKfQKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHcXtPtsXfAr6PUc4q3ANgzqZTCSFA5sXtlHD7qojbtL2mlK7FyMpSyGlOKZ%2FP8rTXGLZU9fj4UrWyyXuOUwoGvOZz0fVqiqVnQV4sRTQz%2BHf3KDWDTcm8zwhVKrDlERXpkNreyq43GWXflopFxU3cog6zpyqXFiqvXN5wC7mGLUdaStjMxxaaMELD3YVL7H8fJcBef39suY98%2FI7Na18vHxv8TjhqSZMH22TS4iA317tZ0BXXABRdCNGdOiDrNUlYgOqGbdalPsDInGLKtUBFZf0GWRGkaotHqWvweL7SlmVFLxnEKIkz61dXk1IjAPUyXAO45kyaWkNDG43uRQQu32wCwkCC5CDhRvGoQgmaQKgh0khzjk8XfYTPL056apL%2F3MxGpd6nXjJGLC4dcCsqV%2FK47UCq2qRq82W9SudqOG77m3Iknypn4wNtuojHfgigzkh%2FFZUlRuNHi7JMGXCQKFtdMbPvJvf2E5xMdHUzxAoyNQOADtplx%2FZr7DE8SDjCuPK2j39CLsDrD7kAqQONDhvRhi2GAB2z%2FZOLsCFmgPJpYpDZiHC0TOgAo25C%2B%2BxKat9ozQfxCruk3hASZ1h5TdXKQ7p4R6sAZJvLoOIIjHO0xaRBsvtEitQFU7RMpaTPmc19ccH9HhRE0DD8m5e%2BBjqkAXUfdockZ%2BsPVyXsYqnXW5XpuusW1aGYngFHvDIdzMLByLM%2FqNQNw7%2FkI7sZ4k0LMZ9MrWOhNs8bd5BrOHPKYAyEtRXYl0dsobvO6vJ9dUNa%2Fe6SRw9xX6QYbbqEYyjsRaZNJ6c7NtjMKRJSMmCcHeSui3hgyybxsu5E9PysFEHAnxr5BR1na9MjUbzPQREsv64ETEcfaXkTLKBQIm0rgT1q6V3N&X-Amz-Signature=846f5a9a6e1eb529303ca233a117d87e6d2a25fcef505a9be1a0c76314cda480&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
