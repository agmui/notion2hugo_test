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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M42UNTY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJRyR6jrGu%2Bv9SqBkGANl21GlUJ56ESE5%2BQA0zn258UAiEA%2FseKaso0dtwcRCxQKIIfGsUaBfHXbLVMsuQtlaKgHlwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6QeUoq%2BH1oJuM9QircA7zuMAlbkZzUSMQlGkTMS7QkxnE05xm1JW%2Fh37dNdmT7SizIsgRENjGYeTODr9soOqTSV%2FaxsQY0PVp7J05MfDqWOdXbIURKFNDz1L16o1vEU35N8h5xyHWilKxo9bWxw%2B6%2BsG8msyebgcf%2B248ga0wZSmBDDiryxMO3rY8is53CXKIZsxdMYKF1EjUHBF8ekULktWHVl9MFnpmdh%2BZVChmUxMBm9KH4q4kQGUdPCXFBzVSOqJrOmPKkRVKadhiYS8qGY7MO9KtF9JnDqofulEDNNIxLC02fn%2FqNvbZ%2F4geS57HeIrFx7%2Fjg5JIVrpmpgQEG2B06XioUwZrolxkL1VqQtVr08NiTEAV%2FZL3F%2B3qdv9XHaiV1LtFV36dL0bpbdABQCRe8iV%2B2WLk0i%2FyOWoLqB9M93l4DNCsH7t6X7R5oBjUGp78CXJpIYFiQoWxVRbD46flkB7ZINtJL3SfZz3gMbvRBEcv58d2cyQk%2BuMGI22sjK2Du9OaD6lk28jKM5rn%2BhBCX4CJMr6ou5OUIUcCXa%2FLSSywVL%2FhSWw6yXkRed8uwxG6x4SRL5JhnEQAzqjUD%2FbAxdGyiNhO8voAIcBm6HoCG56lvEP0r7LlixNe6Jbxm21RGudt%2FXByzMKqEyL4GOqUBXUTa4IIakLfM7czqfbodXJxS9n1gIIV2WfkXqgmjjueO5qpJ6JHE%2B7u%2F5pgJxOi9Tj6KvWuGn4jK9bbzLoJcKnB1k62osJQDPPOsYVsj66qzPIy6JFDU2wEdzqol7wkfS2JBkCf9KL5ubiV9ucLKxGq8FaRDxcmbkm3ceO2Vzcfthy53XoNQTHFK%2B7fK88dWWvTm70qkUSHJ8itWRyOQuF3HpVVD&X-Amz-Signature=92a498cbc9a353e6a3f58a8564ccbbfe4828fdeea313f57625b807400d97482b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M42UNTY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJRyR6jrGu%2Bv9SqBkGANl21GlUJ56ESE5%2BQA0zn258UAiEA%2FseKaso0dtwcRCxQKIIfGsUaBfHXbLVMsuQtlaKgHlwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6QeUoq%2BH1oJuM9QircA7zuMAlbkZzUSMQlGkTMS7QkxnE05xm1JW%2Fh37dNdmT7SizIsgRENjGYeTODr9soOqTSV%2FaxsQY0PVp7J05MfDqWOdXbIURKFNDz1L16o1vEU35N8h5xyHWilKxo9bWxw%2B6%2BsG8msyebgcf%2B248ga0wZSmBDDiryxMO3rY8is53CXKIZsxdMYKF1EjUHBF8ekULktWHVl9MFnpmdh%2BZVChmUxMBm9KH4q4kQGUdPCXFBzVSOqJrOmPKkRVKadhiYS8qGY7MO9KtF9JnDqofulEDNNIxLC02fn%2FqNvbZ%2F4geS57HeIrFx7%2Fjg5JIVrpmpgQEG2B06XioUwZrolxkL1VqQtVr08NiTEAV%2FZL3F%2B3qdv9XHaiV1LtFV36dL0bpbdABQCRe8iV%2B2WLk0i%2FyOWoLqB9M93l4DNCsH7t6X7R5oBjUGp78CXJpIYFiQoWxVRbD46flkB7ZINtJL3SfZz3gMbvRBEcv58d2cyQk%2BuMGI22sjK2Du9OaD6lk28jKM5rn%2BhBCX4CJMr6ou5OUIUcCXa%2FLSSywVL%2FhSWw6yXkRed8uwxG6x4SRL5JhnEQAzqjUD%2FbAxdGyiNhO8voAIcBm6HoCG56lvEP0r7LlixNe6Jbxm21RGudt%2FXByzMKqEyL4GOqUBXUTa4IIakLfM7czqfbodXJxS9n1gIIV2WfkXqgmjjueO5qpJ6JHE%2B7u%2F5pgJxOi9Tj6KvWuGn4jK9bbzLoJcKnB1k62osJQDPPOsYVsj66qzPIy6JFDU2wEdzqol7wkfS2JBkCf9KL5ubiV9ucLKxGq8FaRDxcmbkm3ceO2Vzcfthy53XoNQTHFK%2B7fK88dWWvTm70qkUSHJ8itWRyOQuF3HpVVD&X-Amz-Signature=c2ee6889446806d40c865614c3c05c4dc0a9dc53820c4537b1805dbe0ae78c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
