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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM32LEB5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKNvahzwIQCs78yCOjKlWNsKm%2F%2FY%2BED5o9uVIYaJmTnAiBrx9JMxN2MRocyaBSUL319IF25nAzu18D5w1PpUEdZdyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX8Iq%2FUORbMoQASnZKtwDheypOHI0xKm47mPF6edMYeSjX8ShLQYHqGxMEYWZCj%2BDYn3yVmw8SLSpArvWGsLA2%2BPGy8n1gUDmDw40TGe7jN0Sj6enySSozD8BuAV34sZrru89r0N5SQxQ8N5JvC2WXR0lQ8qhIwb9QMcjvSfb1SXLpL3v%2FLSicIHU4xVjzhZ7%2F17qmmORqfJTsVrckwuHGsJZ4UcBZ65ATVOj8QZqPem7nFjK4GULyf5b0oQpm1e9qO03J%2B%2BVdROzFXTlap9n9XRSiEbCLJpLNJDdwp%2BKExgBDo5pgeE%2F8LnAvACU%2Bt3hBBneUj8Cel85Cg9g%2BAAHgtX2s7ZCvmOLf%2FvnmjgVQSeclWzqz8TbcAY2PPOAI4h4%2FXf2%2B71jxxPrlpisTqyEBxZsg2I8qiq%2FrkSTJOfTx6HnpObrIxPn4iQ3vobvRsuEwMd27vXDs2vroyMsrk8UpcH1CoHtBdYt1mkyk8pi0s1gxZTP%2BNDPI7BF%2Fc5N7m34RbgsiEF2yljrdI3UTeDXTzDXNvsgiDrFi2L7WPWZ%2FBMsqeANcOIBW6A3mdJsczdJcZadf%2BFarseD%2FI7wvL9UdL6coOg89hctOIhxuAXOytxLK2gdk9y2piw3M86%2BseWKjzCPFwqf9egtixswu6jDwwY6pgGlfY6qdTxzZwcB%2FKO4zI%2BF8GA%2BU35hUu9605rWDl8Hz2AQOBnPO9eJu3KA72Fc2MuI%2B%2B4%2FkFfobgeRcMELfhWdIz2C3SPGqJK0iBVQ3R8Pgt5nq%2BY1fSty2OchGlUgFjGCRmVZjBw%2BoX5SwgwZf0LDSPnYZ8pZ3eTPxhtUO2wYX9mh8ps%2ByDH6n6YI1qykFox%2F9%2BglCUv81i5E4PHIrmNZCQ5bK5WP&X-Amz-Signature=21ea6f713c262878185e0e362928ad6f143087b07b30fcc4e16711499d2992b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM32LEB5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKNvahzwIQCs78yCOjKlWNsKm%2F%2FY%2BED5o9uVIYaJmTnAiBrx9JMxN2MRocyaBSUL319IF25nAzu18D5w1PpUEdZdyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX8Iq%2FUORbMoQASnZKtwDheypOHI0xKm47mPF6edMYeSjX8ShLQYHqGxMEYWZCj%2BDYn3yVmw8SLSpArvWGsLA2%2BPGy8n1gUDmDw40TGe7jN0Sj6enySSozD8BuAV34sZrru89r0N5SQxQ8N5JvC2WXR0lQ8qhIwb9QMcjvSfb1SXLpL3v%2FLSicIHU4xVjzhZ7%2F17qmmORqfJTsVrckwuHGsJZ4UcBZ65ATVOj8QZqPem7nFjK4GULyf5b0oQpm1e9qO03J%2B%2BVdROzFXTlap9n9XRSiEbCLJpLNJDdwp%2BKExgBDo5pgeE%2F8LnAvACU%2Bt3hBBneUj8Cel85Cg9g%2BAAHgtX2s7ZCvmOLf%2FvnmjgVQSeclWzqz8TbcAY2PPOAI4h4%2FXf2%2B71jxxPrlpisTqyEBxZsg2I8qiq%2FrkSTJOfTx6HnpObrIxPn4iQ3vobvRsuEwMd27vXDs2vroyMsrk8UpcH1CoHtBdYt1mkyk8pi0s1gxZTP%2BNDPI7BF%2Fc5N7m34RbgsiEF2yljrdI3UTeDXTzDXNvsgiDrFi2L7WPWZ%2FBMsqeANcOIBW6A3mdJsczdJcZadf%2BFarseD%2FI7wvL9UdL6coOg89hctOIhxuAXOytxLK2gdk9y2piw3M86%2BseWKjzCPFwqf9egtixswu6jDwwY6pgGlfY6qdTxzZwcB%2FKO4zI%2BF8GA%2BU35hUu9605rWDl8Hz2AQOBnPO9eJu3KA72Fc2MuI%2B%2B4%2FkFfobgeRcMELfhWdIz2C3SPGqJK0iBVQ3R8Pgt5nq%2BY1fSty2OchGlUgFjGCRmVZjBw%2BoX5SwgwZf0LDSPnYZ8pZ3eTPxhtUO2wYX9mh8ps%2ByDH6n6YI1qykFox%2F9%2BglCUv81i5E4PHIrmNZCQ5bK5WP&X-Amz-Signature=0f0d175bc9f301739c0422b2b5b984df06cdcbed6c8997f013887160f8c7ee67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
