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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUZ4HUY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2F%2BNIapeTAGMWrbtfjr3s2fz6Y346WxK88RvOggZGzfAiBtRRJB10SUx07skRaLum8Ep4IE8NhguL4F7gklqZC5Xyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgwSzu5xnDtVr%2BYH2KtwDGlfAsqy7MKTU%2B4kdU3HcO3X2WQyKrmhGxdrqalGeXdXoTZBcqHEzS92ZuHBQoIvEsfpxSLnAjS7sXCvJQ9O8EwdUnx4E%2BsTTQHUzx0%2FfYAHgZPhD43MU3DcBpWXeJ50r2tIx2LlMdLoboJRHmjI%2BMWdVjAvx0YoGyHpCBsn2vaJZSCKh58AdpibBZWE0klYFeOmH%2BIIuw7rpdzSGkJjQ39AsGPGwbZINLN1IKPFojORVEEOzMSmv8h5ICwQJ9pTHwy8RjE7u%2Fe5eKgFSDW70IztpxU4N1hy%2B%2BSkdkWPEfAW2h2HQLD9QFSLiGv1tR9KORFc0GPXgBxXXT1H5KXxMVnxF5Mb1QZgJJ8oHkZ5NDbEUxNyeAeeqQMLuK6SF16tuVzZFW0Sy5q0P1WmTA8GDs9XufjE5UXZgQ4lb4BhIrAGElNBm0zJEFmbiVwsY6qawEFHlWOxlt5y8OeXAWr2ytrAH6HZUzu%2FHnOhjL15WzLMUH1mKxEVqTP48srNvA%2FlfIMgYOs7vDMFSDy%2BmKnHOnnJXtJDHE7B6IW1Iw0HKMSPw5G7WM7pnSK7w1%2FqWijkeBQD1aspR890qsMy0HwFLkt8SX6jgPnt1XqXvh%2FyqFB8mkl7KZymNK5jtKw0wgrHnvgY6pgEngFOUYWUFj5yfBoLFqYVg5tQBjY3OK%2BfycBWePeNMuM0FxUtTT2YqVphfslO8mIiv%2BhLJ%2F4SwrfVQjPVqA5F8mXzfeFKbHSoBozFRyaCUfh5my2tayKTZdy2Az%2FkK4Hzrvg%2FWC5qk3Uw92v1EMr82rRki2OiulfZlS2x52IXomyJne6QQyl2fHLrPzZ37qbp%2BxczncM6tbLeJ3%2BJJhRZ12RCIJVhj&X-Amz-Signature=76286392168d3311cf99bd43a5bacbfadf29cd42678c2fb3981bfec9ecc8e9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUZ4HUY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2F%2BNIapeTAGMWrbtfjr3s2fz6Y346WxK88RvOggZGzfAiBtRRJB10SUx07skRaLum8Ep4IE8NhguL4F7gklqZC5Xyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMgwSzu5xnDtVr%2BYH2KtwDGlfAsqy7MKTU%2B4kdU3HcO3X2WQyKrmhGxdrqalGeXdXoTZBcqHEzS92ZuHBQoIvEsfpxSLnAjS7sXCvJQ9O8EwdUnx4E%2BsTTQHUzx0%2FfYAHgZPhD43MU3DcBpWXeJ50r2tIx2LlMdLoboJRHmjI%2BMWdVjAvx0YoGyHpCBsn2vaJZSCKh58AdpibBZWE0klYFeOmH%2BIIuw7rpdzSGkJjQ39AsGPGwbZINLN1IKPFojORVEEOzMSmv8h5ICwQJ9pTHwy8RjE7u%2Fe5eKgFSDW70IztpxU4N1hy%2B%2BSkdkWPEfAW2h2HQLD9QFSLiGv1tR9KORFc0GPXgBxXXT1H5KXxMVnxF5Mb1QZgJJ8oHkZ5NDbEUxNyeAeeqQMLuK6SF16tuVzZFW0Sy5q0P1WmTA8GDs9XufjE5UXZgQ4lb4BhIrAGElNBm0zJEFmbiVwsY6qawEFHlWOxlt5y8OeXAWr2ytrAH6HZUzu%2FHnOhjL15WzLMUH1mKxEVqTP48srNvA%2FlfIMgYOs7vDMFSDy%2BmKnHOnnJXtJDHE7B6IW1Iw0HKMSPw5G7WM7pnSK7w1%2FqWijkeBQD1aspR890qsMy0HwFLkt8SX6jgPnt1XqXvh%2FyqFB8mkl7KZymNK5jtKw0wgrHnvgY6pgEngFOUYWUFj5yfBoLFqYVg5tQBjY3OK%2BfycBWePeNMuM0FxUtTT2YqVphfslO8mIiv%2BhLJ%2F4SwrfVQjPVqA5F8mXzfeFKbHSoBozFRyaCUfh5my2tayKTZdy2Az%2FkK4Hzrvg%2FWC5qk3Uw92v1EMr82rRki2OiulfZlS2x52IXomyJne6QQyl2fHLrPzZ37qbp%2BxczncM6tbLeJ3%2BJJhRZ12RCIJVhj&X-Amz-Signature=3105ef28201fd98b949b9b551e1a1090648456c15578f1225a5d5aa9e7569f34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
