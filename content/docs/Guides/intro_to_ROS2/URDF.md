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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLMPZ53%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrNe%2BWr5vZklQWKK%2B0nLnIouf%2FbKFeRryEfWSCy%2F0iSgIgBQHMdUY09%2BC1PMzsZSy3%2Bfzu2y0DG5YpKVPnh6Vcx4Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNgthGmwfF2jz3ggYCrcAwYru9BNIDk%2BZmX%2B0rs8FH2Ug6x3RMWSPMeiX6YWufJHmTtxDrV8abecpaGMWRQ%2FBprDbC1WJ%2F2wUhwnCxXOiwzTXK82Zrp7%2Bu6nrUZVX%2FekHhU8qkz1WB3y8sSZRmGUQ6VV3ec1gVObXMqfEUKMcS2b6duc8tzbO8h0z9NXtHX5g4HYaAKGsHqcZWNodv3gFzDFpbzf2H0sEJuG1gwdGtdkIyjJCQyXuUaPP%2FKcIQrTiBDQDGYsEEP0tHZ4B%2BKZ05CUGvPZeobJHL91y9F3IbrwUWZH6kGu0vtmFPMn5igICFi9PO6mvtVdJYLTrZVguSfIrARIQGSdq3i8dPbNGeB3qjU5ZYPBkoF2OepAxkaENncLBkolll6yQGJDV88BnhYS9AAeFYsy6NED%2BJSbskMNgeyXSQscm3NSxhxhbTRjTDuHp5Ppuyb5lH2BuWY86yeYTVDl0m8OknbmdbGXWbXaKbfKqUjE6kJRzeCbwu%2F%2FKXXTXImWRnOVDU2Pd0GUFLX8GQBKxAyjJ5%2FTAs5aqoNrRUAynjp4bvYk8AzN9bU5Zx62ehzbYFCX2a7VWfaWmQJnwLwYMjgzYhOZ3mj%2FV7NF49yWkfPrnM3z5y5Z%2FWfEDUZjrE9%2F7mc7OjQ6ML7%2BxL8GOqUBbFYQQ5JMVue075dWfbEHJ1Rfq%2FkPDFIbg64IKn9gKEUUcXhwalrl4PMrRN%2Fp9Uyn23zBEq9%2BPVdgSh0LEauBlSCq6OsrhVDqf1VRDxBlunpqbajR48k6aNlejcEhOKn6BAxkRzI9zV41VT6J%2BwFqxNLDcsvQTI4PCMJvwxnxYkTfYY7IvMuSfYwVr1i2QzumAxiiQnRyQWSbLealtlrEI6UENd6X&X-Amz-Signature=7b2940e70e1f6181f80772661ee9223287b49fed547e5c9346922ef4f4f920bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLMPZ53%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrNe%2BWr5vZklQWKK%2B0nLnIouf%2FbKFeRryEfWSCy%2F0iSgIgBQHMdUY09%2BC1PMzsZSy3%2Bfzu2y0DG5YpKVPnh6Vcx4Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNgthGmwfF2jz3ggYCrcAwYru9BNIDk%2BZmX%2B0rs8FH2Ug6x3RMWSPMeiX6YWufJHmTtxDrV8abecpaGMWRQ%2FBprDbC1WJ%2F2wUhwnCxXOiwzTXK82Zrp7%2Bu6nrUZVX%2FekHhU8qkz1WB3y8sSZRmGUQ6VV3ec1gVObXMqfEUKMcS2b6duc8tzbO8h0z9NXtHX5g4HYaAKGsHqcZWNodv3gFzDFpbzf2H0sEJuG1gwdGtdkIyjJCQyXuUaPP%2FKcIQrTiBDQDGYsEEP0tHZ4B%2BKZ05CUGvPZeobJHL91y9F3IbrwUWZH6kGu0vtmFPMn5igICFi9PO6mvtVdJYLTrZVguSfIrARIQGSdq3i8dPbNGeB3qjU5ZYPBkoF2OepAxkaENncLBkolll6yQGJDV88BnhYS9AAeFYsy6NED%2BJSbskMNgeyXSQscm3NSxhxhbTRjTDuHp5Ppuyb5lH2BuWY86yeYTVDl0m8OknbmdbGXWbXaKbfKqUjE6kJRzeCbwu%2F%2FKXXTXImWRnOVDU2Pd0GUFLX8GQBKxAyjJ5%2FTAs5aqoNrRUAynjp4bvYk8AzN9bU5Zx62ehzbYFCX2a7VWfaWmQJnwLwYMjgzYhOZ3mj%2FV7NF49yWkfPrnM3z5y5Z%2FWfEDUZjrE9%2F7mc7OjQ6ML7%2BxL8GOqUBbFYQQ5JMVue075dWfbEHJ1Rfq%2FkPDFIbg64IKn9gKEUUcXhwalrl4PMrRN%2Fp9Uyn23zBEq9%2BPVdgSh0LEauBlSCq6OsrhVDqf1VRDxBlunpqbajR48k6aNlejcEhOKn6BAxkRzI9zV41VT6J%2BwFqxNLDcsvQTI4PCMJvwxnxYkTfYY7IvMuSfYwVr1i2QzumAxiiQnRyQWSbLealtlrEI6UENd6X&X-Amz-Signature=7c368ca4d3c401122f551ecb9417141c1787bea96eea695329747f6ad71ea257&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
