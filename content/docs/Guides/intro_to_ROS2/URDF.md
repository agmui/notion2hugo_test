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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDWM3IP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCnU4iKdwHVuq%2Fs6fwcmMw45ETW%2B%2Bb4vhkIAcOqdTud7AIhALkoncrZnsJKk7m3Elt8e5K2R%2BNGj7tmwQBuqlyzDdMMKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwADyC%2BGsItuhtU%2FmYq3ANvJBZMpMXmTPryxXydamGVXxmBCSGo9yQK37oi7DKPXHsgrWjAIuoFvbe1bgl6KHFUcJju0oH4eDd8%2FxELnvmEg3fhfuGDEQIiM5HE4iA01hXEv3Js3OmqbGPMhXIAOM%2B27SCztaxnWEi4YWYLUoRCwVBGwi0euDaardKIs8IyODafI9EQKl0DnzEzDJhWl2Rnypo6TAOQ0Lvp54VxHuBbj2UIAL57nm410jId%2FnPDtK1AOkStizLaR24v9A6C4z9ck5Z0Z5WpxNYr9viEVmQn3GUid%2B3ee625z4o%2FEuXw22mHFZWjk8Y6aukusCvddBXt8wF7NUw5QGHgsQKRs6v4V8qKhpXVFXijn4R7KBPqtwSMYQFHaoZ1N%2FgB%2F0YlBnvPLhhStVuvsTNPkThfSRrtXKzaHHGLpnGRjOmrnpxGQTX2RoDi8Kd4Ja8VnP0OwYSMVp8mZYCd0bI7UvtGqTwjktlzwps2sEL5PdIFBhiMmpIRovxuPA%2FUUa91hocGiNGwRhwgxwSfTr0F6DU7%2B53WystMfu1SUymCtk9zVRfExD7IeDkPWR7pRyY1JHlI6JZ9RIaRI8NumrCNwwiqjJPSCNx3zNGymXMro9CZEKGx5guyQ2yYYGlyKis5kTCksPC%2FBjqkAYAUivrYZVDkqt8p4lsZPHIj0%2Fe0yQ9OiUTakvEH4GUO650vvCbCFqCJqfQRE%2BBF5QaWHtb6AIShTLDBJpXJxjNsuEZA7AdDHrQ511R4Abya%2F9dLtM%2FV9h8n8q4hT0dltBzuM2oohxfXGaV%2BVmL1JGVVxZC%2BUCYqmIpwLCnpkQJHL8u52AANorIMt0nj1QVJGjSsGCPyPEgxikaCr0935wBY78zj&X-Amz-Signature=ce6d6d21987cc550b53978913a5df4aa426183a22ffb9bbc2c46a56e0a447fca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDWM3IP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCnU4iKdwHVuq%2Fs6fwcmMw45ETW%2B%2Bb4vhkIAcOqdTud7AIhALkoncrZnsJKk7m3Elt8e5K2R%2BNGj7tmwQBuqlyzDdMMKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwADyC%2BGsItuhtU%2FmYq3ANvJBZMpMXmTPryxXydamGVXxmBCSGo9yQK37oi7DKPXHsgrWjAIuoFvbe1bgl6KHFUcJju0oH4eDd8%2FxELnvmEg3fhfuGDEQIiM5HE4iA01hXEv3Js3OmqbGPMhXIAOM%2B27SCztaxnWEi4YWYLUoRCwVBGwi0euDaardKIs8IyODafI9EQKl0DnzEzDJhWl2Rnypo6TAOQ0Lvp54VxHuBbj2UIAL57nm410jId%2FnPDtK1AOkStizLaR24v9A6C4z9ck5Z0Z5WpxNYr9viEVmQn3GUid%2B3ee625z4o%2FEuXw22mHFZWjk8Y6aukusCvddBXt8wF7NUw5QGHgsQKRs6v4V8qKhpXVFXijn4R7KBPqtwSMYQFHaoZ1N%2FgB%2F0YlBnvPLhhStVuvsTNPkThfSRrtXKzaHHGLpnGRjOmrnpxGQTX2RoDi8Kd4Ja8VnP0OwYSMVp8mZYCd0bI7UvtGqTwjktlzwps2sEL5PdIFBhiMmpIRovxuPA%2FUUa91hocGiNGwRhwgxwSfTr0F6DU7%2B53WystMfu1SUymCtk9zVRfExD7IeDkPWR7pRyY1JHlI6JZ9RIaRI8NumrCNwwiqjJPSCNx3zNGymXMro9CZEKGx5guyQ2yYYGlyKis5kTCksPC%2FBjqkAYAUivrYZVDkqt8p4lsZPHIj0%2Fe0yQ9OiUTakvEH4GUO650vvCbCFqCJqfQRE%2BBF5QaWHtb6AIShTLDBJpXJxjNsuEZA7AdDHrQ511R4Abya%2F9dLtM%2FV9h8n8q4hT0dltBzuM2oohxfXGaV%2BVmL1JGVVxZC%2BUCYqmIpwLCnpkQJHL8u52AANorIMt0nj1QVJGjSsGCPyPEgxikaCr0935wBY78zj&X-Amz-Signature=a120948b0f69c3171f95305078d4e5d29f72b9aea17f94048da05a17ad3e26f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
