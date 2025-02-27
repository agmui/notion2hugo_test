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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JPWCES%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICUMJDvIZIi14nGLzBWI5CQAh8Wg5H54vFcScWJwjdZWAiBW9VhTDNqWshyA%2BtFIVDtQzutpXZz3cXhHoRhERtbfoCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIDzY5GamgOFIv5g4KtwDDBrnNBcA%2BkePS1Nut%2FHu78ajchWEuKKlT145MZK5DzUHbTl%2Fmzc0NQSASc7Ry3gdRLyBPhDCd%2BEz09no1Yb0o3jQ%2By9VV%2FO%2FwOg0SxOCP9VhCJumbprRUkhGx6jNfn7mDBdPcPFWLKWssX5vcrH2gyDw0Sx2OjH6dRJpNujFlkPfmt89tbWURyjGQEGdkXjvnKaeIsX06zGKO2BxVvi6hsYG%2BxcWR7cQ79ThPeeIuHD5Dv4T1CRo1QNkCHFI9bToOdBwBbfy%2F3BQT48XBgUEq2TukoxPMknqnZeIGMJ%2Bggywc%2FnrR3Z%2BfODshhsNBmnoBUZeCn94ITpraVy2XX7xVNCLu33sE6zlx6ropRbxSZEfFJbuuNNj6qaxES6MLqsSaekhVfrBl%2BhgowNZ6uGyHu8fw2XDigDUxaa1YlL5ECV99AdeP9BREmXMH8rZi3hjK1eNWOJVaf1Aj%2FDi9GsTuu%2BFtrK5S%2FUwS%2BRrjqqRlTsqYsawmbxgwr2LsC6dFe5Oi3Dwnula63lSuUP9AuK3JAflQCrrJ7eMil%2B6jUK23V6e2NraAnwg%2Fboa6ONyw69IB%2B%2FIVy2E%2Bm6CJJaV1ZSbNN9%2FYEyHfdQdH6gHdN8tIfyIddIu9hPH2ELPCG8wru2BvgY6pgFbb6MeBOMoP2NOxSJKWJR0cR10ARCBtZiVXl%2BnRpaEyzQ2G3Thcaa8Raol5u6TRudxTjjS6JGYW%2Fob3Azesv9z4qKnxctL%2Fuh4Y%2FbXb5vl1%2BHuqdVk79BoGL4kjchJ%2Fp7PFlQCgZ0orGNWmEDhmejbrKkyFIQ4314lVGXp1lzHSttCDTvyHJEPfUkUcCEzVh5ibFqhdj0w13cMPVQ9akspocXvYcbb&X-Amz-Signature=826fe1415958bcbae6d2ab5aee6272838c2bd53e7112dd9517116fabc3c06772&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JPWCES%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICUMJDvIZIi14nGLzBWI5CQAh8Wg5H54vFcScWJwjdZWAiBW9VhTDNqWshyA%2BtFIVDtQzutpXZz3cXhHoRhERtbfoCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIDzY5GamgOFIv5g4KtwDDBrnNBcA%2BkePS1Nut%2FHu78ajchWEuKKlT145MZK5DzUHbTl%2Fmzc0NQSASc7Ry3gdRLyBPhDCd%2BEz09no1Yb0o3jQ%2By9VV%2FO%2FwOg0SxOCP9VhCJumbprRUkhGx6jNfn7mDBdPcPFWLKWssX5vcrH2gyDw0Sx2OjH6dRJpNujFlkPfmt89tbWURyjGQEGdkXjvnKaeIsX06zGKO2BxVvi6hsYG%2BxcWR7cQ79ThPeeIuHD5Dv4T1CRo1QNkCHFI9bToOdBwBbfy%2F3BQT48XBgUEq2TukoxPMknqnZeIGMJ%2Bggywc%2FnrR3Z%2BfODshhsNBmnoBUZeCn94ITpraVy2XX7xVNCLu33sE6zlx6ropRbxSZEfFJbuuNNj6qaxES6MLqsSaekhVfrBl%2BhgowNZ6uGyHu8fw2XDigDUxaa1YlL5ECV99AdeP9BREmXMH8rZi3hjK1eNWOJVaf1Aj%2FDi9GsTuu%2BFtrK5S%2FUwS%2BRrjqqRlTsqYsawmbxgwr2LsC6dFe5Oi3Dwnula63lSuUP9AuK3JAflQCrrJ7eMil%2B6jUK23V6e2NraAnwg%2Fboa6ONyw69IB%2B%2FIVy2E%2Bm6CJJaV1ZSbNN9%2FYEyHfdQdH6gHdN8tIfyIddIu9hPH2ELPCG8wru2BvgY6pgFbb6MeBOMoP2NOxSJKWJR0cR10ARCBtZiVXl%2BnRpaEyzQ2G3Thcaa8Raol5u6TRudxTjjS6JGYW%2Fob3Azesv9z4qKnxctL%2Fuh4Y%2FbXb5vl1%2BHuqdVk79BoGL4kjchJ%2Fp7PFlQCgZ0orGNWmEDhmejbrKkyFIQ4314lVGXp1lzHSttCDTvyHJEPfUkUcCEzVh5ibFqhdj0w13cMPVQ9akspocXvYcbb&X-Amz-Signature=7311fb059cac91bd58525abd6e2cd1fef22f39b6687f3f870529879dc0ba36c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
