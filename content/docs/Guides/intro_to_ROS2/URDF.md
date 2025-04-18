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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVKQMPZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTbB67RV6%2BhscJrW%2FdzqrkSQ8JIJ997m4aqmFHbp7x6AiBKCI3qWQhArWbMti4tn3Hwr2ST7BgiDvtW86b%2FlADc7Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7fam%2B7xAne90NmSCKtwD86QPtI5bQ4PCdMN0iodjOq5RcdjoSSi%2BtrMp6jyMXhMssPKG%2FpdAzbU5HUjHQinJeURTQaQWq55sqHQumsP%2BRTK9BzLEIPCbbFblVc%2FReW4hiQB50wlpz4bV1mg5yLrCOJsfdtbMaeDyZ9uRcbt6Kr4DuGsbeqAM4tlRfdhG0WrTu5C7GskkC6ReoMH82RFjFVCb2lqltg6Jwk1kclJGOLhpGV4aARY%2FVMe%2BVbQYklOfyaL9pPppvtshbqPjP4YYAFolLZ8SezyBfB3OgnaIPYFrRepgQzUML3ZCZsQe0K408IV6CKWcuyjv78nHQFI3pWo7atWJ6Ep%2Fyh29qT0EL0oHDwZD4fKoxr4zFh0YbgtPupESYrZ5n2IvBkZKOU9mLrUOsjGYwWSaKPUbeo78dXgJM%2BdY62RzBGJ3i%2FS0NfsipAPSiODFSpnUJdKp2HyUYy%2BIg%2BJaLmlSAzUpi93fG%2BYMrtDtZ%2FMEUi6uzoV571TYWjPzeJ7IQDBh93rdXE8bpSqsMGCiKylc8UUa8C99WBUPMTSVB6m8eGXV8xdpFY84f3KsM5t35X2pYnftZ2Xu3juyi5rShMQ3e7UzxXLCrhytlGEPcmJW0Hxz0BIIwMzCTM7IilkjTfrPgGUwk5GIwAY6pgFPYEGfOQDieiTut3JhTVuVQ%2BKgAioky39fuDaXLl0BUu4%2FilEHCX68Yl4r0G5uPVs9iLStp4nD%2BIlyeCUS9dOOsET81OCN8Mny%2BDYhKC6leJ3qoBeGIH7NnLKbH77%2FATHEqbmF7x6HFT3qMeD2H6YrLNZOlS5cMDf96GiihNKfAP2Lm9OOMcVC0qYgqOCKM52Mm%2FDN4o33SEO5A9i6R7owt84aicUz&X-Amz-Signature=13f09268ae0fafc39acbdaf5c99caf75b54c8a9f6a451a249ed685c9eb307818&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NVKQMPZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTbB67RV6%2BhscJrW%2FdzqrkSQ8JIJ997m4aqmFHbp7x6AiBKCI3qWQhArWbMti4tn3Hwr2ST7BgiDvtW86b%2FlADc7Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM7fam%2B7xAne90NmSCKtwD86QPtI5bQ4PCdMN0iodjOq5RcdjoSSi%2BtrMp6jyMXhMssPKG%2FpdAzbU5HUjHQinJeURTQaQWq55sqHQumsP%2BRTK9BzLEIPCbbFblVc%2FReW4hiQB50wlpz4bV1mg5yLrCOJsfdtbMaeDyZ9uRcbt6Kr4DuGsbeqAM4tlRfdhG0WrTu5C7GskkC6ReoMH82RFjFVCb2lqltg6Jwk1kclJGOLhpGV4aARY%2FVMe%2BVbQYklOfyaL9pPppvtshbqPjP4YYAFolLZ8SezyBfB3OgnaIPYFrRepgQzUML3ZCZsQe0K408IV6CKWcuyjv78nHQFI3pWo7atWJ6Ep%2Fyh29qT0EL0oHDwZD4fKoxr4zFh0YbgtPupESYrZ5n2IvBkZKOU9mLrUOsjGYwWSaKPUbeo78dXgJM%2BdY62RzBGJ3i%2FS0NfsipAPSiODFSpnUJdKp2HyUYy%2BIg%2BJaLmlSAzUpi93fG%2BYMrtDtZ%2FMEUi6uzoV571TYWjPzeJ7IQDBh93rdXE8bpSqsMGCiKylc8UUa8C99WBUPMTSVB6m8eGXV8xdpFY84f3KsM5t35X2pYnftZ2Xu3juyi5rShMQ3e7UzxXLCrhytlGEPcmJW0Hxz0BIIwMzCTM7IilkjTfrPgGUwk5GIwAY6pgFPYEGfOQDieiTut3JhTVuVQ%2BKgAioky39fuDaXLl0BUu4%2FilEHCX68Yl4r0G5uPVs9iLStp4nD%2BIlyeCUS9dOOsET81OCN8Mny%2BDYhKC6leJ3qoBeGIH7NnLKbH77%2FATHEqbmF7x6HFT3qMeD2H6YrLNZOlS5cMDf96GiihNKfAP2Lm9OOMcVC0qYgqOCKM52Mm%2FDN4o33SEO5A9i6R7owt84aicUz&X-Amz-Signature=dd1ee0fed4ccb4c0079bfe926f544d747fe78338edc78766b902377758fbc6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
