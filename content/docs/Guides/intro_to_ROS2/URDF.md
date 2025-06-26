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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRJVKE7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDCDN0ZywH8eOv4S5GZS450lJB6s0B7sAYsu6RND71i3wIhANKEz3P68XWXu3fFUjy9Fc%2FR7wxZ6mRH5eilpX6Ri9lmKv8DCFkQABoMNjM3NDIzMTgzODA1IgwveV68Lz8ZEYTvfaYq3AOJyLxqujHqhSzEH7sKlDni%2BSKmucP4qRUGmUKOOldpfiC0Kr%2B366W0u95jttoRQY1q2n2fpzDZJQa97aTZoC7Oq0531K9icbrNccXJ4rWPVRj94BCO0VBDMel1Ab30ugp1Ak77su42PKpgqMSvoK3b3gqGe4u3tiB8c4PiT81%2BPMn64g4KDOKKsTx0n%2BBOOZOKIICIXG5EtqftQquYLPo1QEYu5UsoZ72tA6joJqe9BeFwVwYaCYpz5dos5ivFKNv3NtAuTYzNjHr30ZByII0EOPndnP2UMM5SD46g9iz7KK%2B4Pgyvvf4qCwkv1kr9pHZ4aQ6qx94rzWau%2BIvioOFglaEjqt12Hdgb1kCYl21Uoi3Krh5cizKsL3QMqSCf6g5WKTYvS8bHEj5sJI%2BAeWnfP%2BqnXEVfkO8UZdXXMCebFVx5MQ9F54oz6JCAfJvYifEEQJ8VeBHdjUlLFQRMz%2FMH%2ByPXifyMVXPAJJUkACHuCIqJ32ev6rrsURixRfyYMuKDLZOJMWvtxQ93BsUAigis3nMqhMxyVw96up9wbT379g8L3UGQV4U%2FD15IGJwX4IfQfzVJjSAIPPoUwzgm5XnjFsyIdaf8n%2BufWMf1e1wesR8gtpXDyHT0iOnlIzCW6vPCBjqkASagd7I0bvDLWp36XABdkAHj9c9mTkGV50ljC8Wy5ntfvCwe%2FLfA0Gd4yEPvyDzs9UH%2Fncx9uIdFJA%2BQoFnUiwL67vpW88hTnttI52BzaPyQh%2B06e0GmQYFrqIh9%2FbDD8ADJDfErpHW%2BDMpzKrKHx7R09QLVpB4ta9vF6x1qJMcjAvhlvfHApcZy24vTysrgYzYeK7EOqSQdf%2FP82G86UcQWU%2BQU&X-Amz-Signature=55dfa1c68f591ebb54e352bae4658dd8aa0ffc11a84bfe9cfb150cbeaabbb7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRJVKE7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDCDN0ZywH8eOv4S5GZS450lJB6s0B7sAYsu6RND71i3wIhANKEz3P68XWXu3fFUjy9Fc%2FR7wxZ6mRH5eilpX6Ri9lmKv8DCFkQABoMNjM3NDIzMTgzODA1IgwveV68Lz8ZEYTvfaYq3AOJyLxqujHqhSzEH7sKlDni%2BSKmucP4qRUGmUKOOldpfiC0Kr%2B366W0u95jttoRQY1q2n2fpzDZJQa97aTZoC7Oq0531K9icbrNccXJ4rWPVRj94BCO0VBDMel1Ab30ugp1Ak77su42PKpgqMSvoK3b3gqGe4u3tiB8c4PiT81%2BPMn64g4KDOKKsTx0n%2BBOOZOKIICIXG5EtqftQquYLPo1QEYu5UsoZ72tA6joJqe9BeFwVwYaCYpz5dos5ivFKNv3NtAuTYzNjHr30ZByII0EOPndnP2UMM5SD46g9iz7KK%2B4Pgyvvf4qCwkv1kr9pHZ4aQ6qx94rzWau%2BIvioOFglaEjqt12Hdgb1kCYl21Uoi3Krh5cizKsL3QMqSCf6g5WKTYvS8bHEj5sJI%2BAeWnfP%2BqnXEVfkO8UZdXXMCebFVx5MQ9F54oz6JCAfJvYifEEQJ8VeBHdjUlLFQRMz%2FMH%2ByPXifyMVXPAJJUkACHuCIqJ32ev6rrsURixRfyYMuKDLZOJMWvtxQ93BsUAigis3nMqhMxyVw96up9wbT379g8L3UGQV4U%2FD15IGJwX4IfQfzVJjSAIPPoUwzgm5XnjFsyIdaf8n%2BufWMf1e1wesR8gtpXDyHT0iOnlIzCW6vPCBjqkASagd7I0bvDLWp36XABdkAHj9c9mTkGV50ljC8Wy5ntfvCwe%2FLfA0Gd4yEPvyDzs9UH%2Fncx9uIdFJA%2BQoFnUiwL67vpW88hTnttI52BzaPyQh%2B06e0GmQYFrqIh9%2FbDD8ADJDfErpHW%2BDMpzKrKHx7R09QLVpB4ta9vF6x1qJMcjAvhlvfHApcZy24vTysrgYzYeK7EOqSQdf%2FP82G86UcQWU%2BQU&X-Amz-Signature=42ba3001a053965dc543e1b91f3bc56dd263e95cb71d3c302fae8e433b5f6b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
