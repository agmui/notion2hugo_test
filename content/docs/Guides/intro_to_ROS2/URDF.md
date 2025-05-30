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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWB6VY3T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxL0Upp1P37enMppgeLfFjJ9ecBsjXXMd%2BXKgZFD%2FuTAIhAPgJzDAf%2BkuN0Pprtrm4mkxxBlM3ObQ%2BHFahOrP6%2FTPMKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Fg0bHG4ph2Qr8x%2FUq3AO9BIyVWke%2FlEMwM312w41pynDl%2BIqP%2FPPYN2uv8DQtdyZLikfUJH%2BtT5ZAY6c1fapaUSAVYK%2BVSWoLLDxaN5QyoHfk%2FbLpRnQVIgdBvZFTvin6YObDnUl3z9oj4OfuM9A3BzTc0MWLPf%2F7OE71fk6V%2Fip39yV9Cp%2B3oDImqF0u2Mx8%2B1MaOUPosiXt8XbDemq9o13%2BuaPrIevTMvYgsU6A0rebqxXEPQk00LRJaKA7sydY4wLlFxYQwOhvnFPrpHkqKe3%2FB45CRCWhyld7eCsVUOb9xT7IgjEVTrKKd%2Fq17aEQaTwyPKoSIG43ccEMaDcoWwqVDp%2BcaogFtR%2B6mdZkjRka9NkJ3ksOAltoCyfqYzwtkH63GCYMFA4l5bP8%2B9QAI8eh0%2BfHE7x99EkHkSsv0N5ISYVT7MEXDOznjIyhaF7wjV%2FNXjPPb0QdvHW%2Bf5qAf%2F2bJ%2BvJrqp6u%2BYcDM646gKu1FVB%2B8doi7wyXr48ndRQTvwEEgG%2FHHPWDSkUXOP8pNHXfKT8iptcfZdxagGzRjAdx0wJZyoc1VEn0tqpWlPs7nbHYoW%2FFAbVioZ%2BYB1lxM%2FVN%2FvDRtVn6B%2BmEyA7RtbuwOkiIY%2BY0t3mMkywO0iWXQjCpwvoJzvmmDC78ebBBjqkATYmuQtZCGmLe5LflcwRBi00T0mVl3Nkh3H99Nne%2BemLOm6vNUJ11UNSiuKEHTAcDpkBV0OFIhfO6oN3VoI9sMu0%2Fx%2BSZFxTwjGypkpzFbJB6sWWd8TTooZAa%2B6FW%2F%2FsgC4Hbtsg3s7hWU5pmMkWv98JtfiwNt%2ByYMEuJjIH6W3HAJnQT9f91UkCwT9%2FzXPUVKifJHBJ2S%2FTysRdwXa4JdHKAQZ%2B&X-Amz-Signature=4965bd2bd55f6ab8809bb2d85b4cac9b6c9a295fadedb44f42a8a693896a7752&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWB6VY3T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxL0Upp1P37enMppgeLfFjJ9ecBsjXXMd%2BXKgZFD%2FuTAIhAPgJzDAf%2BkuN0Pprtrm4mkxxBlM3ObQ%2BHFahOrP6%2FTPMKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Fg0bHG4ph2Qr8x%2FUq3AO9BIyVWke%2FlEMwM312w41pynDl%2BIqP%2FPPYN2uv8DQtdyZLikfUJH%2BtT5ZAY6c1fapaUSAVYK%2BVSWoLLDxaN5QyoHfk%2FbLpRnQVIgdBvZFTvin6YObDnUl3z9oj4OfuM9A3BzTc0MWLPf%2F7OE71fk6V%2Fip39yV9Cp%2B3oDImqF0u2Mx8%2B1MaOUPosiXt8XbDemq9o13%2BuaPrIevTMvYgsU6A0rebqxXEPQk00LRJaKA7sydY4wLlFxYQwOhvnFPrpHkqKe3%2FB45CRCWhyld7eCsVUOb9xT7IgjEVTrKKd%2Fq17aEQaTwyPKoSIG43ccEMaDcoWwqVDp%2BcaogFtR%2B6mdZkjRka9NkJ3ksOAltoCyfqYzwtkH63GCYMFA4l5bP8%2B9QAI8eh0%2BfHE7x99EkHkSsv0N5ISYVT7MEXDOznjIyhaF7wjV%2FNXjPPb0QdvHW%2Bf5qAf%2F2bJ%2BvJrqp6u%2BYcDM646gKu1FVB%2B8doi7wyXr48ndRQTvwEEgG%2FHHPWDSkUXOP8pNHXfKT8iptcfZdxagGzRjAdx0wJZyoc1VEn0tqpWlPs7nbHYoW%2FFAbVioZ%2BYB1lxM%2FVN%2FvDRtVn6B%2BmEyA7RtbuwOkiIY%2BY0t3mMkywO0iWXQjCpwvoJzvmmDC78ebBBjqkATYmuQtZCGmLe5LflcwRBi00T0mVl3Nkh3H99Nne%2BemLOm6vNUJ11UNSiuKEHTAcDpkBV0OFIhfO6oN3VoI9sMu0%2Fx%2BSZFxTwjGypkpzFbJB6sWWd8TTooZAa%2B6FW%2F%2FsgC4Hbtsg3s7hWU5pmMkWv98JtfiwNt%2ByYMEuJjIH6W3HAJnQT9f91UkCwT9%2FzXPUVKifJHBJ2S%2FTysRdwXa4JdHKAQZ%2B&X-Amz-Signature=fbe09f6043e3893e12beb810c00890e129461b1610d861e905b7af8fe9e19965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
