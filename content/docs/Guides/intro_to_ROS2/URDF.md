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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2CV6CIN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEpI4KF4B5vD%2F45OgbhjB0hwmeqAsnsghuMs3PDT46B%2FAiABr2D3K8VW2xa48%2F6DxxDerISj0%2BN5mrJG4Vm%2Bt0st2iqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0T7Cc7eSvhGlG1ViKtwDy4bDfX4y6PCc9xOs8qk5m37zucmONvFBhTIWX3Mg3gzAmf%2BlxkpUasHXhEji%2BGtlDK0ocCYA%2BkJ6f91J8uvvTilHmZj%2FVT6m5eva1QAwLN3EzI9Tg%2BpstyFUTrjSf7KIp%2BFv603jz0EdHvhTNe04gfns7O3ruxvcdph8%2BPi%2FNM9ECxv9Yu5Tv7Tl95umGkqL42xpfyWIuepeew4UW4EVv%2Be9UPt8K2cHJdU9JdDKDX6wkwqbYDCQFBive1LPlw4DlfA0xx2g7Mm1ZO6jFLQ8F5SVNIGqGOD9dyrMJ0eNBnWNRTk8W8YaVoylCITTfELErlhKXk3hWo3dKlt67%2BVdNHqz9aHIjEKjdAWK8xPhM%2BHAQfH5mfTgfMvHdJD5GRAk1HxBPuBmmlVzjlTZ3Y%2Fd2TTTDVj%2B89gXU3UcUj2kNJLbW72xpsmRrpcJ8zWoTQwdrjTLdspwcfq5YUqF8Hb52%2FRnnZi%2BMDClkAPURNiidVX3QQe4rYiEq7Sahp%2BqyJyMzH%2FSua%2F8VLbTooCkMEWCEWUAg1SiA15aQ3aU36%2F46sO1xchjOt76eI%2BJH8gNiLjqKDxbz%2Bc5QMZ7mUzOtJedkIh22AJXoU3wF%2BfQMp5CDjelievS5J3Xe9t7aUowldiXwAY6pgFsd3gom8Y2xppYSumuevTaOMpdc0GvvqhQABhKKTZZpjfpYrvrHXwkmv%2FODRbsFVFn%2B%2B7rgX1AHziQo%2F2K%2BP9Xyfxl66PP6eqyUiejHUzunA2GSk6wP8VF4v3zbYh0qWLic73GfIXQ%2BkmE9IHO0KxSk9aEUXqeb3zStg52wVM4wEIs8loZnWsU6pK9aT4Vgh9OfwTbrA8XUSPFpg4zNCdNNgxB4z0V&X-Amz-Signature=10a20c223954fc8e5354a0f79e8ff2ec7fd5ae612e9f9c6d2ba4a900869dee01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2CV6CIN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEpI4KF4B5vD%2F45OgbhjB0hwmeqAsnsghuMs3PDT46B%2FAiABr2D3K8VW2xa48%2F6DxxDerISj0%2BN5mrJG4Vm%2Bt0st2iqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0T7Cc7eSvhGlG1ViKtwDy4bDfX4y6PCc9xOs8qk5m37zucmONvFBhTIWX3Mg3gzAmf%2BlxkpUasHXhEji%2BGtlDK0ocCYA%2BkJ6f91J8uvvTilHmZj%2FVT6m5eva1QAwLN3EzI9Tg%2BpstyFUTrjSf7KIp%2BFv603jz0EdHvhTNe04gfns7O3ruxvcdph8%2BPi%2FNM9ECxv9Yu5Tv7Tl95umGkqL42xpfyWIuepeew4UW4EVv%2Be9UPt8K2cHJdU9JdDKDX6wkwqbYDCQFBive1LPlw4DlfA0xx2g7Mm1ZO6jFLQ8F5SVNIGqGOD9dyrMJ0eNBnWNRTk8W8YaVoylCITTfELErlhKXk3hWo3dKlt67%2BVdNHqz9aHIjEKjdAWK8xPhM%2BHAQfH5mfTgfMvHdJD5GRAk1HxBPuBmmlVzjlTZ3Y%2Fd2TTTDVj%2B89gXU3UcUj2kNJLbW72xpsmRrpcJ8zWoTQwdrjTLdspwcfq5YUqF8Hb52%2FRnnZi%2BMDClkAPURNiidVX3QQe4rYiEq7Sahp%2BqyJyMzH%2FSua%2F8VLbTooCkMEWCEWUAg1SiA15aQ3aU36%2F46sO1xchjOt76eI%2BJH8gNiLjqKDxbz%2Bc5QMZ7mUzOtJedkIh22AJXoU3wF%2BfQMp5CDjelievS5J3Xe9t7aUowldiXwAY6pgFsd3gom8Y2xppYSumuevTaOMpdc0GvvqhQABhKKTZZpjfpYrvrHXwkmv%2FODRbsFVFn%2B%2B7rgX1AHziQo%2F2K%2BP9Xyfxl66PP6eqyUiejHUzunA2GSk6wP8VF4v3zbYh0qWLic73GfIXQ%2BkmE9IHO0KxSk9aEUXqeb3zStg52wVM4wEIs8loZnWsU6pK9aT4Vgh9OfwTbrA8XUSPFpg4zNCdNNgxB4z0V&X-Amz-Signature=a94e5345713fe3e82f8e84cf2ba9492b8f184400b07ac68321cb3adfad275f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
