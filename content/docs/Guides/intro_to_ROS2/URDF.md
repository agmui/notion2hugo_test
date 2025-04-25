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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTR4VDDZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiP%2Br8IvWza6GRkQVXd7Z56dbStTFUhPI36Ey8gMv5owIhAJtRz8bQFmf9Sj6ZrsMzzgtRSQhemLj5gN9ECoelJ55VKv8DCC4QABoMNjM3NDIzMTgzODA1IgzPKkJodLwXvtmi3jYq3AMcHVHPg2v4Hr3MB6LOaHAEqUjWANK6GxIZPvlKQDlGwCCD2zc4uPbWlGeCp5W88QS7fnhwbz%2F2O24GlwyGkQ9FWvtIaCyY%2Fjv2wUFsYHv30JZWYgQHXH5rWifVEREnCD68eCUi0%2F3dMO8ZQrWhxe7xRX%2BC2%2B%2F2cpTEgh7bg3PZnakjyKU0k8T80F%2BXVFElurSt4JlpewDvGxtfIfsA3YfLdjPKVWtfoJnznuNhCSTPKUU5E2Na8%2Bkc1%2Bxi3SswkfXgUYkxsEUHQGCZoHl1Es4bl6rMYrEB3U10BUqijFntvzo3bKBx5K7tmMABNtqeHWwKNcsR8%2Bcu%2F7nYYDD1BDuLy1M%2B1jpodR0ISW7qby6iAWhjZUxUtfFRcyYtTNrLSnGcLIsVglDTknBOx0aO4jxtlsa%2BxvCAYUVw1%2Bx6pynwgKA%2FKOOPVDq4e1r4wpRlVqsheNnsVOQWBWolYLRcfmSRqxFFn4spaST8kkmPGrtf0%2F9wJMzA9YlKqNLIlANGxzkDcMIq%2BiS186fpQGmRZeguZwLVg6mxlPEOyRZ0Qkn0Jddn3jCyVJ6G6YfL3u7byrIcnDLcIkRNIlD4IaqNKIUa34u4pW%2FDrdcFE0mtnfBp%2BT9zlWWIHjNE%2BmZqeTCWma7ABjqkAenLZ0QTewwmiSCQG588b9X6mjeRIvq0DWqvg6PX6xIWbfaNrcVm2o8zvVjmK6He%2FgzXeQM1%2B5AkhH6hIj9y1XIFanfxJIg5oB6Hb1Qq%2B9jtOu%2FEQEt8qfMC2Yhg5b5BkCKJF7BcszSMSzbT80Wpv1xtrS4WlEJkDs2ZN9Yc5EaVBOM9TirPlb84SiSlq8S%2BqGaHm2uDu2jQNZ9pezz9FBE2hkkQ&X-Amz-Signature=c6647efbe70af618c6f53bee6b7eb7a5becfbfdc745a85dac973c064b8e8c00c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTR4VDDZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiP%2Br8IvWza6GRkQVXd7Z56dbStTFUhPI36Ey8gMv5owIhAJtRz8bQFmf9Sj6ZrsMzzgtRSQhemLj5gN9ECoelJ55VKv8DCC4QABoMNjM3NDIzMTgzODA1IgzPKkJodLwXvtmi3jYq3AMcHVHPg2v4Hr3MB6LOaHAEqUjWANK6GxIZPvlKQDlGwCCD2zc4uPbWlGeCp5W88QS7fnhwbz%2F2O24GlwyGkQ9FWvtIaCyY%2Fjv2wUFsYHv30JZWYgQHXH5rWifVEREnCD68eCUi0%2F3dMO8ZQrWhxe7xRX%2BC2%2B%2F2cpTEgh7bg3PZnakjyKU0k8T80F%2BXVFElurSt4JlpewDvGxtfIfsA3YfLdjPKVWtfoJnznuNhCSTPKUU5E2Na8%2Bkc1%2Bxi3SswkfXgUYkxsEUHQGCZoHl1Es4bl6rMYrEB3U10BUqijFntvzo3bKBx5K7tmMABNtqeHWwKNcsR8%2Bcu%2F7nYYDD1BDuLy1M%2B1jpodR0ISW7qby6iAWhjZUxUtfFRcyYtTNrLSnGcLIsVglDTknBOx0aO4jxtlsa%2BxvCAYUVw1%2Bx6pynwgKA%2FKOOPVDq4e1r4wpRlVqsheNnsVOQWBWolYLRcfmSRqxFFn4spaST8kkmPGrtf0%2F9wJMzA9YlKqNLIlANGxzkDcMIq%2BiS186fpQGmRZeguZwLVg6mxlPEOyRZ0Qkn0Jddn3jCyVJ6G6YfL3u7byrIcnDLcIkRNIlD4IaqNKIUa34u4pW%2FDrdcFE0mtnfBp%2BT9zlWWIHjNE%2BmZqeTCWma7ABjqkAenLZ0QTewwmiSCQG588b9X6mjeRIvq0DWqvg6PX6xIWbfaNrcVm2o8zvVjmK6He%2FgzXeQM1%2B5AkhH6hIj9y1XIFanfxJIg5oB6Hb1Qq%2B9jtOu%2FEQEt8qfMC2Yhg5b5BkCKJF7BcszSMSzbT80Wpv1xtrS4WlEJkDs2ZN9Yc5EaVBOM9TirPlb84SiSlq8S%2BqGaHm2uDu2jQNZ9pezz9FBE2hkkQ&X-Amz-Signature=22e330e7c613e9a148592bdda12c2e9490cc61526a16e4472ebc4eea3b34bce0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
