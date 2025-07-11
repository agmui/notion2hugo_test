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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKVRUN2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bx6rrxohYHr6eh7cesCgrxhXWnyCHpmK6wi01AIXrgIhANIsq0C6iTdIZ6FF07reprTy1MRF%2BSZrTae%2FFd6AMbg%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6LMLWrxJNfS%2BFj9sq3AM1oywBayZuvNXQnicKBFxdE6xsdGopCVvRpFdABKmCQW5BHYxBEwUIabSBeDP%2FGw%2FF1CwwM9AWAnRvgNxiDAyS0fGOQqGL7dyHOSO17TosGhCI8BWBn5rfcOyhnnROJnLg8dthiLGkc9yuCea1%2FgP1sql%2F1yPXEdSdQ4bpTNBjgupxcUp62oVON5swpGykJbfbEiRO%2Fa3GK0Bl9qVfcStV2DIbfohbtZkte0n7xmehHdlxlHSW5eqZqHGp39XBNMjkZKkBoHaq%2FmIxU3zQuQZMY5wQsQV2jsvBGKqm%2FExJn3gZfqf1j7jAFabKvjD3zXy4BOovwg0vhd2r3XKJVqtb%2BkxRu%2FrJCq3i5djxGeboiBbduEKE1qUPdeln5RHT0HE9e9YOHIaNJhgRlgLuFujLJZqfCxLQ4Kk0IVWaWXWngmi9tDgCl4Q7xCrcCa7%2BtImJXoAUuJLMT92eYQdeSxn93Blhw3cK7O2UOkZ3sbwg0jc50gcBXYDQqduN0hhiOARMNCp4KArdhgDLi7E%2F%2FVntYolSqWdY0i9ILkrSQk%2BPnVfJuRLvn%2F2sW3KYNAFf3q3Qu6YporH4hktGLvAv83BXabGmfTaEIJL43NJrv1A0pe88P9KZljSfJu4ebzCAqcTDBjqkAdpSbQbmLNZ64k6i69fWYaXpa6cK%2FVTbmOz3lbEbRcI%2FWI03qRtDZy%2FeW4Iv3FQ7%2FAvmpAd%2FwXuQ514E2Hi9bB6gkoC8Wy4JPwCH%2B8tHZ37RSiruxqcaLPpjWRXsAT7DNQIzTzPHXNxkjXZAQI0f78oQ50ragp1X4FC9Pb0BsAcONJsX0WhoAeo6WmqjKCiEnXCKT6a6cXv%2BC6CO9w7pVmkwQAQG&X-Amz-Signature=f86db009e81e397e997f11e85008cfbcc8b0a97271bf2bc62c84cdfc3359986a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKVRUN2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP%2Bx6rrxohYHr6eh7cesCgrxhXWnyCHpmK6wi01AIXrgIhANIsq0C6iTdIZ6FF07reprTy1MRF%2BSZrTae%2FFd6AMbg%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6LMLWrxJNfS%2BFj9sq3AM1oywBayZuvNXQnicKBFxdE6xsdGopCVvRpFdABKmCQW5BHYxBEwUIabSBeDP%2FGw%2FF1CwwM9AWAnRvgNxiDAyS0fGOQqGL7dyHOSO17TosGhCI8BWBn5rfcOyhnnROJnLg8dthiLGkc9yuCea1%2FgP1sql%2F1yPXEdSdQ4bpTNBjgupxcUp62oVON5swpGykJbfbEiRO%2Fa3GK0Bl9qVfcStV2DIbfohbtZkte0n7xmehHdlxlHSW5eqZqHGp39XBNMjkZKkBoHaq%2FmIxU3zQuQZMY5wQsQV2jsvBGKqm%2FExJn3gZfqf1j7jAFabKvjD3zXy4BOovwg0vhd2r3XKJVqtb%2BkxRu%2FrJCq3i5djxGeboiBbduEKE1qUPdeln5RHT0HE9e9YOHIaNJhgRlgLuFujLJZqfCxLQ4Kk0IVWaWXWngmi9tDgCl4Q7xCrcCa7%2BtImJXoAUuJLMT92eYQdeSxn93Blhw3cK7O2UOkZ3sbwg0jc50gcBXYDQqduN0hhiOARMNCp4KArdhgDLi7E%2F%2FVntYolSqWdY0i9ILkrSQk%2BPnVfJuRLvn%2F2sW3KYNAFf3q3Qu6YporH4hktGLvAv83BXabGmfTaEIJL43NJrv1A0pe88P9KZljSfJu4ebzCAqcTDBjqkAdpSbQbmLNZ64k6i69fWYaXpa6cK%2FVTbmOz3lbEbRcI%2FWI03qRtDZy%2FeW4Iv3FQ7%2FAvmpAd%2FwXuQ514E2Hi9bB6gkoC8Wy4JPwCH%2B8tHZ37RSiruxqcaLPpjWRXsAT7DNQIzTzPHXNxkjXZAQI0f78oQ50ragp1X4FC9Pb0BsAcONJsX0WhoAeo6WmqjKCiEnXCKT6a6cXv%2BC6CO9w7pVmkwQAQG&X-Amz-Signature=ac6ec701f1257607328888ee4d90aec03d4ebea3458290562e8ba5b7f8a6d7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
