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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LE2B57R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICbWri%2B7VtZ2AO78QbEBjP1hz3DY9A4OAo7SXpPUOCMMAiAZHIskt8NsFxtlg%2F9KEJB0eTrdx8RoGJmrsYBkQdnfpCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnC5SzPu%2BGJhrmki6KtwDZQqDagjZAl1DIaN52O2v5U2gTh7vRcdjFUx0tYiUIWKxcxQRs9y9lEWg7ipYSWgZaSyo4xqIxkI1E0vuuvl2syuIULyYYDnjOgUD51T2gvIjZSEvXVoI866mBMDDTE2ndiEF6fdqFKz5bv48dmzKJCSakUQcTfXqYICF5z6lhMz64ExuTtg4%2B8N28RDXHEvfst3AcVfrETOGZDBTqRFs0VWH75T7qIAXAZMYbvfGu%2Fx6K%2BmNsZojYovFLyNvcRxF%2FTF1Xl1fWYdDfqIiqgNTphpDZmsH0TlYldUQPcHJ%2Ft14t9w%2FImlHGOT%2BXsE7UbPOll6qkO0k%2BDv5IM7W3%2FHYojd46nbU4PblLAi04OFB%2FmyLnTZrhcoZhxHuRbAilDNVtmM6dPAZWIHiBF2tGjWJbGRKMpdiLoyXjbmsGwnx3GAfoHds%2BaWExvE6TLICn%2Fb0XVz4bcWNMdvRQRM%2BmljXXTVjb4JNc34xfDCZjV9tCARS%2BLIx6izsr7PJapkf7G%2FfI0NL4EeqSX2XG%2B4711jF8VWG7vv1NZLGpbBge9Vclu0Muu%2BU4%2B43%2FjGELivAoHfxtwWWu4goVJdmTvzn0sr9XbXcVKLWN7HFLsskpM1MDOLYQL74jEJD5xGYW60wsZ%2FHvQY6pgHVH5q04rknIxPL4X0WuUgDYLcOb4lhZm%2FJgQ%2FOFMrGbjP%2BuDkIxOJ9ttbKXMjIvNQffqiK0hOx7OnULzNAG%2BOZPXFKbDX7WsZc026ZGLKgqGNaKDUjIuqy591Zbz5MYqOTXb3Ce4gpDQDesL8K5%2BkRkQ4EstGM8YBhutDWpuoYpv6EpiZpCdONhKIrW%2BGExHrAg1dnQv%2FIGVisqnZPy%2BbQLhlmAa3N&X-Amz-Signature=e9e7a29ac83f02b46af0e9ad88be0f685853f3accba8bb35e84ba7a8ae64d8b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LE2B57R%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICbWri%2B7VtZ2AO78QbEBjP1hz3DY9A4OAo7SXpPUOCMMAiAZHIskt8NsFxtlg%2F9KEJB0eTrdx8RoGJmrsYBkQdnfpCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnC5SzPu%2BGJhrmki6KtwDZQqDagjZAl1DIaN52O2v5U2gTh7vRcdjFUx0tYiUIWKxcxQRs9y9lEWg7ipYSWgZaSyo4xqIxkI1E0vuuvl2syuIULyYYDnjOgUD51T2gvIjZSEvXVoI866mBMDDTE2ndiEF6fdqFKz5bv48dmzKJCSakUQcTfXqYICF5z6lhMz64ExuTtg4%2B8N28RDXHEvfst3AcVfrETOGZDBTqRFs0VWH75T7qIAXAZMYbvfGu%2Fx6K%2BmNsZojYovFLyNvcRxF%2FTF1Xl1fWYdDfqIiqgNTphpDZmsH0TlYldUQPcHJ%2Ft14t9w%2FImlHGOT%2BXsE7UbPOll6qkO0k%2BDv5IM7W3%2FHYojd46nbU4PblLAi04OFB%2FmyLnTZrhcoZhxHuRbAilDNVtmM6dPAZWIHiBF2tGjWJbGRKMpdiLoyXjbmsGwnx3GAfoHds%2BaWExvE6TLICn%2Fb0XVz4bcWNMdvRQRM%2BmljXXTVjb4JNc34xfDCZjV9tCARS%2BLIx6izsr7PJapkf7G%2FfI0NL4EeqSX2XG%2B4711jF8VWG7vv1NZLGpbBge9Vclu0Muu%2BU4%2B43%2FjGELivAoHfxtwWWu4goVJdmTvzn0sr9XbXcVKLWN7HFLsskpM1MDOLYQL74jEJD5xGYW60wsZ%2FHvQY6pgHVH5q04rknIxPL4X0WuUgDYLcOb4lhZm%2FJgQ%2FOFMrGbjP%2BuDkIxOJ9ttbKXMjIvNQffqiK0hOx7OnULzNAG%2BOZPXFKbDX7WsZc026ZGLKgqGNaKDUjIuqy591Zbz5MYqOTXb3Ce4gpDQDesL8K5%2BkRkQ4EstGM8YBhutDWpuoYpv6EpiZpCdONhKIrW%2BGExHrAg1dnQv%2FIGVisqnZPy%2BbQLhlmAa3N&X-Amz-Signature=a504831f72bbd9abb55dcaea4acbee2393f3a66b7a5e64204bb97aeff05ad2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
