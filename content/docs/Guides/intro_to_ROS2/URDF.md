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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5RWLHZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDQSjXZm5uiDw9ViB%2F957gcdIl2oHKdpmpAhiu8XnGJXQIhAPlYSGDYTWzX8QgFjnQH74rfIMfL%2BGSGev7VJ%2BpA8VuzKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylZgujrkFggYqZLdYq3AMWsCcbLnMksM2AmLR14SwnXOl%2FCsXjKVyhqVMcVg1UPNB52Mgf9UQQgCfZ3oBwc3bfc0IqiXbgcLoWyH5hHiF6k%2F%2BdvJYRJ7h3JdPjKWVPf%2Fyab2fiV8XwbPVn9cmSr%2BQSHFxLtX6ck5nIReJFyZS1ROIgWzRFAbP4fITrsxj1vs0Xrpi7CW%2Bwyiuz5I7FpXVK7OjHinSQdVlcu75zaXfSKMLOfuRWgCRDXjblTvMABBvp%2FiqGizKlIvMWoykOitIW4tDqbhAIQADJTmPDoA7gyulUnJCIpPDLDhikAmcz%2Fi1of%2BsqarTA3hKaBcuX65e%2FybYuK1k7HmJWDm1X%2BiFFggMasxwdhgIu%2F45I05fY6549wUMVQ5ZHIlHIfgXc9HBREIBkAd0%2B990w%2BaDUGd93n2bP3QW3NMZgJVvMBaAwjvaT4PcfBKSTbhTV%2BwQnNlXVNgW0s0N9%2BA4LDMnHJB8bJzuSRfgtAL3ezhT3HMeacFXTUDQuLgGdP6n9WXr6THATEyJm5O2E4FMvqgcpNiUXTWJqBYQ5h4onpixKeGiuOMENOSYlBZKtY2ID%2F0Hje6XSNwWBZd6b0OjJq%2FGotm4G%2Ba7bdHPaRzrdiu44Uu3wCfWPFSqWzImu7D46%2BDDfq57EBjqkAWGTIHe%2Fn6e5gKxLG%2FflYGYjhvhAhcfltDo3lfZZ5Qk9Xhaon2JUAJv7QPI9LgxzqXsNWjMGFl43qaRJ0nUoCjeS3bScjoj5ErOq3kIzp83Q72WvBuQN4VogwrjhXOXpp8gyq5Mis6wCzVg8i4oKc1dXJMDmhIH%2FNDCEm2jzOjbXNxp%2FRRA6HDvqygSaDEJStU69M8Pif%2B1Ay7CKwEKF5F7g%2BLms&X-Amz-Signature=1f1aa7257cd66a12256b83c4fb63ca28f7544b79ec16076ef6d9806fc9fe68d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5RWLHZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDQSjXZm5uiDw9ViB%2F957gcdIl2oHKdpmpAhiu8XnGJXQIhAPlYSGDYTWzX8QgFjnQH74rfIMfL%2BGSGev7VJ%2BpA8VuzKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylZgujrkFggYqZLdYq3AMWsCcbLnMksM2AmLR14SwnXOl%2FCsXjKVyhqVMcVg1UPNB52Mgf9UQQgCfZ3oBwc3bfc0IqiXbgcLoWyH5hHiF6k%2F%2BdvJYRJ7h3JdPjKWVPf%2Fyab2fiV8XwbPVn9cmSr%2BQSHFxLtX6ck5nIReJFyZS1ROIgWzRFAbP4fITrsxj1vs0Xrpi7CW%2Bwyiuz5I7FpXVK7OjHinSQdVlcu75zaXfSKMLOfuRWgCRDXjblTvMABBvp%2FiqGizKlIvMWoykOitIW4tDqbhAIQADJTmPDoA7gyulUnJCIpPDLDhikAmcz%2Fi1of%2BsqarTA3hKaBcuX65e%2FybYuK1k7HmJWDm1X%2BiFFggMasxwdhgIu%2F45I05fY6549wUMVQ5ZHIlHIfgXc9HBREIBkAd0%2B990w%2BaDUGd93n2bP3QW3NMZgJVvMBaAwjvaT4PcfBKSTbhTV%2BwQnNlXVNgW0s0N9%2BA4LDMnHJB8bJzuSRfgtAL3ezhT3HMeacFXTUDQuLgGdP6n9WXr6THATEyJm5O2E4FMvqgcpNiUXTWJqBYQ5h4onpixKeGiuOMENOSYlBZKtY2ID%2F0Hje6XSNwWBZd6b0OjJq%2FGotm4G%2Ba7bdHPaRzrdiu44Uu3wCfWPFSqWzImu7D46%2BDDfq57EBjqkAWGTIHe%2Fn6e5gKxLG%2FflYGYjhvhAhcfltDo3lfZZ5Qk9Xhaon2JUAJv7QPI9LgxzqXsNWjMGFl43qaRJ0nUoCjeS3bScjoj5ErOq3kIzp83Q72WvBuQN4VogwrjhXOXpp8gyq5Mis6wCzVg8i4oKc1dXJMDmhIH%2FNDCEm2jzOjbXNxp%2FRRA6HDvqygSaDEJStU69M8Pif%2B1Ay7CKwEKF5F7g%2BLms&X-Amz-Signature=76aa711d16e0c0327970e1193e2a801baafcd28a518b8c657077118823cb4e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
