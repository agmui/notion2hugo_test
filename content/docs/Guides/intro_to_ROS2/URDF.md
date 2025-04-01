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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUZWS6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDaANI0WyDE0kcX42ui7M7j8hDhOUDTXrntTFzZ1dqGoAIhAJ29zDJRyEtrlGaw%2BhFSq17rCT7ywHBgXUaPXJmxz7ckKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygBFwlOdfnFzruRqEq3APMDflSYf%2BO88k6WDYo8GlusbuO%2FRm%2FbfvJ%2FqmgAAAIzJX9MvzJFb08Wz%2B56pn00tq7X4Hvf6XCx3XsDiBq%2FKPXNWuLaJ0B7pR0vddmzU9xq7q%2FsWzysPUGlJQiVBGLdaoEUNw%2BjakByDzXYKeUb9ier8OohiGL3UnXr5tS9Qh1vwuCZuMqK75qzUPwvEvORQ15jB30E0%2FCRiZPVTSFqOkkqzAFSTfTLoC8BUPPa6M27rpnr76gUcXI7pR%2Bp%2Fw2jbQq5dOHr%2B0C0jSC18cGB%2FXCbcbD6LMf2RO9KKLdemYXUmFd7TEo1VPWFacUbLtc%2BOzQFylM%2F2QXS8mHX53lkkhOsyHZ4PK%2FE05aken6XCOsvL337hIqko4kUiJpfxQeZS9eBeaxKe4Bxc9dmidQZCdtvvWEhiCk%2BCrWR7iyqSSrGTQ4sNHlhK7jwsiQBGB%2FZv7KlYnW72JkbeZH1WUM8dqcXfSRvN8Xa78ra0W0tTfihs6%2F2JdmEATosS0pcUKBurGlD8bbqiSVJsAWyHjWWZgIn3KvGl0i4B6Q%2FE7iKr0QJp8JBctDphwnukwYaed4Czxch1YNpPWtztb%2FIrbw235R%2Ff4SwIUj7QkegIaUVtlVGItfBo23NnLMQDlf0zCc17C%2FBjqkARC0k%2FdMRcBSUPqDjdzlUgyDhvEdcEOclftIhyV5Qx%2FYOjdNWZTzvNtyFRNxP7hoyeCOYoO29brbIFTJQJ7R6Ov5Y2Cbv4JEz2TfThlF3VZyqmDB9OJ%2BFW%2BrbfAUJHK%2F9A4s%2FdY1aHivT4SktIOUyr4p4D%2FIsBgJyFSlKeYpSpSByA2L9HCe%2BQvQZFFGhpw6yPTAA7OGsBMPTz8CChX5KrKsxTDc&X-Amz-Signature=a0bbced045167ec2cfd67ab9666bfbdf4eb2357fdf60e86fc3dc9af43fa6b132&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUZWS6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDaANI0WyDE0kcX42ui7M7j8hDhOUDTXrntTFzZ1dqGoAIhAJ29zDJRyEtrlGaw%2BhFSq17rCT7ywHBgXUaPXJmxz7ckKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygBFwlOdfnFzruRqEq3APMDflSYf%2BO88k6WDYo8GlusbuO%2FRm%2FbfvJ%2FqmgAAAIzJX9MvzJFb08Wz%2B56pn00tq7X4Hvf6XCx3XsDiBq%2FKPXNWuLaJ0B7pR0vddmzU9xq7q%2FsWzysPUGlJQiVBGLdaoEUNw%2BjakByDzXYKeUb9ier8OohiGL3UnXr5tS9Qh1vwuCZuMqK75qzUPwvEvORQ15jB30E0%2FCRiZPVTSFqOkkqzAFSTfTLoC8BUPPa6M27rpnr76gUcXI7pR%2Bp%2Fw2jbQq5dOHr%2B0C0jSC18cGB%2FXCbcbD6LMf2RO9KKLdemYXUmFd7TEo1VPWFacUbLtc%2BOzQFylM%2F2QXS8mHX53lkkhOsyHZ4PK%2FE05aken6XCOsvL337hIqko4kUiJpfxQeZS9eBeaxKe4Bxc9dmidQZCdtvvWEhiCk%2BCrWR7iyqSSrGTQ4sNHlhK7jwsiQBGB%2FZv7KlYnW72JkbeZH1WUM8dqcXfSRvN8Xa78ra0W0tTfihs6%2F2JdmEATosS0pcUKBurGlD8bbqiSVJsAWyHjWWZgIn3KvGl0i4B6Q%2FE7iKr0QJp8JBctDphwnukwYaed4Czxch1YNpPWtztb%2FIrbw235R%2Ff4SwIUj7QkegIaUVtlVGItfBo23NnLMQDlf0zCc17C%2FBjqkARC0k%2FdMRcBSUPqDjdzlUgyDhvEdcEOclftIhyV5Qx%2FYOjdNWZTzvNtyFRNxP7hoyeCOYoO29brbIFTJQJ7R6Ov5Y2Cbv4JEz2TfThlF3VZyqmDB9OJ%2BFW%2BrbfAUJHK%2F9A4s%2FdY1aHivT4SktIOUyr4p4D%2FIsBgJyFSlKeYpSpSByA2L9HCe%2BQvQZFFGhpw6yPTAA7OGsBMPTz8CChX5KrKsxTDc&X-Amz-Signature=d5b6a362897e86eea2dee3458ea56a5ee482821784f2396debc088d28c8ad770&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
