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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKF7D4EW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD914eQWRiECH02nc3BPRUGc2V%2BXbXmEZcDrwQ2B8Wn9wIhANVe%2FzIf7NoMRfFgIBF2oEVMOnLByk4qJJXIWXJJ5pO2Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzwNCGKgsTtruL7%2BD4q3ANcAx4IcZnXCQHzyGMXxytoYYng2TH2xFSLEK8wwBqwWR4KaxmV3qGwr3aOhdwjwmjACjppKGFhPhkJpVfjdwKhHW%2BAnPHOVZgDbyKf3S79VrDunA6GIeharotPJvgmylHlnUFIUuPbHACVatXwYluTc8Q%2F66aewbMUdffb0nvS3uKxAuU6%2B%2B8Yi6Wrv58uAsTYtxnhoaayl2uxWZuEip32JisViC0YkRnzrrxU6VeQQSmeDomAY3cEAF%2FYM4ofAw7s2VPQGx3l0d0Eo%2FOUdHG97uQysmd%2B0PTcgLzlmg%2FuwFII%2F6tNdeZZRrr4DrD7vVU6gycdto5hRzgyqCBVgcBO4NLCRXcU%2BRl1ayi6l3kvHvdAM1QwoLBejrdp41TegIYnDQMmT6kbzKX%2Br0hBC64tI4hg%2BcKBglLVYis6s7CbxwDCSA5rghvcww2CgF7U8Jk2LxGmfQW0mt7ZTiBgm3VtGg0H8nF5LXIimgrQfrOJqYzBhlrXD1I%2B4wOGwEPxzDI21Ha8U6qpBLl8X9sPxSRFtHi4sa33khdr3EJIKFqIOBuiHiUmNF3J6S8Mo2ijcXkPc%2Bosf1p2cpX1gbnM05rW2HN6TsKFIquyar5X2oHpHctSkVciWqh6ZLTIzjDH16TBBjqkAQIlKNV3fA0m57aG0%2F0fWYqYpxG3sMm%2FmI3aKYnQof3hzOTPegGS0uBKVVgtHSj311SAxG5kuPQlqTzyXlXI8fEUUMQusbxPErt8SNYxTSNggK0gLsFDc5nbsKteHyAqxyJUlr0aw%2BmlC1Tq2jbNOm2Q2h1HRi48N0zl6i6Wc803eL929HZYGjvrH0lk3mp4%2Fw7it%2BmG9kKV1q44LtmcapFrqj%2FF&X-Amz-Signature=c0ee1d2889bfb8b40a64a0aeb25c7466c7c228d5aef67e2a11c95c9245e2752f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKF7D4EW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD914eQWRiECH02nc3BPRUGc2V%2BXbXmEZcDrwQ2B8Wn9wIhANVe%2FzIf7NoMRfFgIBF2oEVMOnLByk4qJJXIWXJJ5pO2Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzwNCGKgsTtruL7%2BD4q3ANcAx4IcZnXCQHzyGMXxytoYYng2TH2xFSLEK8wwBqwWR4KaxmV3qGwr3aOhdwjwmjACjppKGFhPhkJpVfjdwKhHW%2BAnPHOVZgDbyKf3S79VrDunA6GIeharotPJvgmylHlnUFIUuPbHACVatXwYluTc8Q%2F66aewbMUdffb0nvS3uKxAuU6%2B%2B8Yi6Wrv58uAsTYtxnhoaayl2uxWZuEip32JisViC0YkRnzrrxU6VeQQSmeDomAY3cEAF%2FYM4ofAw7s2VPQGx3l0d0Eo%2FOUdHG97uQysmd%2B0PTcgLzlmg%2FuwFII%2F6tNdeZZRrr4DrD7vVU6gycdto5hRzgyqCBVgcBO4NLCRXcU%2BRl1ayi6l3kvHvdAM1QwoLBejrdp41TegIYnDQMmT6kbzKX%2Br0hBC64tI4hg%2BcKBglLVYis6s7CbxwDCSA5rghvcww2CgF7U8Jk2LxGmfQW0mt7ZTiBgm3VtGg0H8nF5LXIimgrQfrOJqYzBhlrXD1I%2B4wOGwEPxzDI21Ha8U6qpBLl8X9sPxSRFtHi4sa33khdr3EJIKFqIOBuiHiUmNF3J6S8Mo2ijcXkPc%2Bosf1p2cpX1gbnM05rW2HN6TsKFIquyar5X2oHpHctSkVciWqh6ZLTIzjDH16TBBjqkAQIlKNV3fA0m57aG0%2F0fWYqYpxG3sMm%2FmI3aKYnQof3hzOTPegGS0uBKVVgtHSj311SAxG5kuPQlqTzyXlXI8fEUUMQusbxPErt8SNYxTSNggK0gLsFDc5nbsKteHyAqxyJUlr0aw%2BmlC1Tq2jbNOm2Q2h1HRi48N0zl6i6Wc803eL929HZYGjvrH0lk3mp4%2Fw7it%2BmG9kKV1q44LtmcapFrqj%2FF&X-Amz-Signature=476d3dfc9c30844f8f59c5240e8207d30cb1228f110cd95d47e25987fe6ebda5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
