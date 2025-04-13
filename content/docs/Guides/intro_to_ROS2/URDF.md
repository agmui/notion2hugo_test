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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UXE7DRL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDqLTZcujOytLL%2Fk3peSpy6TKp4md44BQA3ZVCf3oAgxQIhAN8zK%2BxKaHThkXezi32W4zI6bv9oYeStN1ZIQBspuI54KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwInjcn0neeXnOYvhEq3AMQJsDdp1ALrCXG4btGUn0aklgsmD9Q5Ex%2B1mccEeSOe6pGSRLdTeWwJ%2ByxGYJdK7qAXEOZk1%2FaiEVnN1PI4rPHkc4ReBxUBKvmdR0X%2BHcA8cnY6Wd0APkyOAJvEM6ahu5Tc1%2B00CkL0z0o3Tq1APeLOoRpSpaVxfklOlpn6fPCcy39vLQ8MMpzKDKZQogU2MkKqDy4SAhL1a6Kw4qRZs0XTqwMUPhqObjGBn0gNwjivtorJwnnRu%2BD6WSyE5EQ0fFFdZZE4zLS%2Bqs5L5jpEUZ5u0bGGH%2Bijc2ZFEzq82ps6kZhB2pp7p1%2BoNynTMJPSyoJAWsL%2FAIynbmKyUZoeXO6FLDzBeSHgoGwACTASeoxexJLGl%2B33%2FiRDK8VRc5J5UvgvTc4gQXpBA7mgM2RpWhL%2Bsrum8an2XtNqb2TU4gtO7W3jhuxkWJuPcgERciNoAKpFl%2Fyjt3gv80FdQ%2FBRqBKUbhse7rrFQEIEggL%2F5oBOea9fCtpfXY0NWS93e%2BG7ZpBtcfjMLoJF%2B7zl11H%2FQSBiwrcK%2Beq4IumUYUeyQI5CWok8KOe%2F%2BP6tm32i%2BRLEKVRqS2BQjItxZd3o7xP2JxTX9Q5yKtT2nIeCnpSX8D0GlsbAl%2FRek9TudaoPzDdr%2FC%2FBjqkAZSmjrkFw7MDSZ4WoMZNOjUbY1DH3kFUnfZCoolX%2BZGqtc4SUn0z5P95FXKlB4mWQN%2BFQ9sGXBlKigMzQghiwBfdZ%2Bp8OTA4%2BWc1atVwjcWh79R5OR7kOJBpYD%2FHvyGCuBZyvoGqqUbJEQPlgmJkC%2F7p4ZsNEznSLqrS%2F4t4PVdczfrA8rKm1shQM92lT15Q6PhC7vgB%2F0x%2Fq7xf%2BFEuCNkBkiGM&X-Amz-Signature=3dc1c00759fc97c45cbffa046eb1c79d9f8f7dae81d54ae993b1d5b7b842f549&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UXE7DRL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDqLTZcujOytLL%2Fk3peSpy6TKp4md44BQA3ZVCf3oAgxQIhAN8zK%2BxKaHThkXezi32W4zI6bv9oYeStN1ZIQBspuI54KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwInjcn0neeXnOYvhEq3AMQJsDdp1ALrCXG4btGUn0aklgsmD9Q5Ex%2B1mccEeSOe6pGSRLdTeWwJ%2ByxGYJdK7qAXEOZk1%2FaiEVnN1PI4rPHkc4ReBxUBKvmdR0X%2BHcA8cnY6Wd0APkyOAJvEM6ahu5Tc1%2B00CkL0z0o3Tq1APeLOoRpSpaVxfklOlpn6fPCcy39vLQ8MMpzKDKZQogU2MkKqDy4SAhL1a6Kw4qRZs0XTqwMUPhqObjGBn0gNwjivtorJwnnRu%2BD6WSyE5EQ0fFFdZZE4zLS%2Bqs5L5jpEUZ5u0bGGH%2Bijc2ZFEzq82ps6kZhB2pp7p1%2BoNynTMJPSyoJAWsL%2FAIynbmKyUZoeXO6FLDzBeSHgoGwACTASeoxexJLGl%2B33%2FiRDK8VRc5J5UvgvTc4gQXpBA7mgM2RpWhL%2Bsrum8an2XtNqb2TU4gtO7W3jhuxkWJuPcgERciNoAKpFl%2Fyjt3gv80FdQ%2FBRqBKUbhse7rrFQEIEggL%2F5oBOea9fCtpfXY0NWS93e%2BG7ZpBtcfjMLoJF%2B7zl11H%2FQSBiwrcK%2Beq4IumUYUeyQI5CWok8KOe%2F%2BP6tm32i%2BRLEKVRqS2BQjItxZd3o7xP2JxTX9Q5yKtT2nIeCnpSX8D0GlsbAl%2FRek9TudaoPzDdr%2FC%2FBjqkAZSmjrkFw7MDSZ4WoMZNOjUbY1DH3kFUnfZCoolX%2BZGqtc4SUn0z5P95FXKlB4mWQN%2BFQ9sGXBlKigMzQghiwBfdZ%2Bp8OTA4%2BWc1atVwjcWh79R5OR7kOJBpYD%2FHvyGCuBZyvoGqqUbJEQPlgmJkC%2F7p4ZsNEznSLqrS%2F4t4PVdczfrA8rKm1shQM92lT15Q6PhC7vgB%2F0x%2Fq7xf%2BFEuCNkBkiGM&X-Amz-Signature=2d22bc8cc2aea3d0f2244241802d053d293dc5358fb171627bc9454f2492b4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
