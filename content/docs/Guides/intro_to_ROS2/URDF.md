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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BNJ5GX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDRV4lICLnIXE4xWtAJeNJ0rrS150MGVpbC2c8YakLzogIhAMDvcDeApnbEtwk8mYGqBc4%2By4igb%2FqHlmpP6gTAyyT3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz1A%2FEPgln3d4w%2F%2FYq3AP8YBfJPElhr4juc6KwIMuf7StyOJkiFWXPRRjKGjBuWwb3VLeY9FVRc3DTRc%2FAdHauZHPz354CApDkqnkWrpIUioNz%2Fqr5%2B3WV36K9c1q6yMeuFQauCpcn5MGk%2BJ7CmThdnZYf7HppCVu8lBwl57YUW4hP0tnwcUp%2FJXXSI4%2BuyiX4Y%2BfDSMpiXSxgvIkooNe6i513LmXmHmnQocqZtxqA0%2BoHwcbEhlq5WCWY34NB31wiylqz1zqpB6fAaxdTRqMrDeppE23mvksljDOpZx1IvigmwQTzKVBASgb4%2BkDyBOKt6xO2mnG%2BNcdxvHH4LDPAvvm1q86DHDEQ0oNe2XLAT41iSI0eOPZdm8nQLqPFO3NhRDW4vDNgVP7mixyKdg1BZGfYhmj%2BSBp8triwtQNkYc9O5hpQb3xfA9VtkrWvTCrCjherFItGUfdoc5qRa%2FFvphTQpAUO0oh1XtNo4Uzcr%2BZ%2FKTf6fuo9uE9%2BrjdF8L764h2ObKkS2nVYK9CyMo%2B8LYeAhkb8VGmg6wzIzKOPxIxqePQid5WQ0hmxeZsyTqtVJmDnXjkh%2Ff2kVk%2BpBFTS6yayowj37aukX0928ZY9tRZjaLxBnJJdwUS4WeXCbbQN3gQDWU%2FnSVEC4jCY%2F%2B6%2FBjqkAb%2FQNfiGiIKDBKxTGon%2BnzBws%2BGooP6vykEA%2F3v23MA6IFSyiLJUrseUtHE1bDDjtahtRN2h5HYWEfUTaRngCG8Ngi79eahBmWqUWWtFYo2G9VyyHtBWV%2FdSJsbQUGEVCtj1jnO5rQPox3HWlZxai03agjaVc3cCoE8ICgAfULeHEnnqpykjKino2fIGL9R9EkhRql37d6%2BxIg3h4frGCYmTVt2T&X-Amz-Signature=95d565c4df5c70e1d41fb8ced73326c414a7690ded747704de3f86451d1f1d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BNJ5GX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDRV4lICLnIXE4xWtAJeNJ0rrS150MGVpbC2c8YakLzogIhAMDvcDeApnbEtwk8mYGqBc4%2By4igb%2FqHlmpP6gTAyyT3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz1A%2FEPgln3d4w%2F%2FYq3AP8YBfJPElhr4juc6KwIMuf7StyOJkiFWXPRRjKGjBuWwb3VLeY9FVRc3DTRc%2FAdHauZHPz354CApDkqnkWrpIUioNz%2Fqr5%2B3WV36K9c1q6yMeuFQauCpcn5MGk%2BJ7CmThdnZYf7HppCVu8lBwl57YUW4hP0tnwcUp%2FJXXSI4%2BuyiX4Y%2BfDSMpiXSxgvIkooNe6i513LmXmHmnQocqZtxqA0%2BoHwcbEhlq5WCWY34NB31wiylqz1zqpB6fAaxdTRqMrDeppE23mvksljDOpZx1IvigmwQTzKVBASgb4%2BkDyBOKt6xO2mnG%2BNcdxvHH4LDPAvvm1q86DHDEQ0oNe2XLAT41iSI0eOPZdm8nQLqPFO3NhRDW4vDNgVP7mixyKdg1BZGfYhmj%2BSBp8triwtQNkYc9O5hpQb3xfA9VtkrWvTCrCjherFItGUfdoc5qRa%2FFvphTQpAUO0oh1XtNo4Uzcr%2BZ%2FKTf6fuo9uE9%2BrjdF8L764h2ObKkS2nVYK9CyMo%2B8LYeAhkb8VGmg6wzIzKOPxIxqePQid5WQ0hmxeZsyTqtVJmDnXjkh%2Ff2kVk%2BpBFTS6yayowj37aukX0928ZY9tRZjaLxBnJJdwUS4WeXCbbQN3gQDWU%2FnSVEC4jCY%2F%2B6%2FBjqkAb%2FQNfiGiIKDBKxTGon%2BnzBws%2BGooP6vykEA%2F3v23MA6IFSyiLJUrseUtHE1bDDjtahtRN2h5HYWEfUTaRngCG8Ngi79eahBmWqUWWtFYo2G9VyyHtBWV%2FdSJsbQUGEVCtj1jnO5rQPox3HWlZxai03agjaVc3cCoE8ICgAfULeHEnnqpykjKino2fIGL9R9EkhRql37d6%2BxIg3h4frGCYmTVt2T&X-Amz-Signature=dda22116613242b236b1db9fe9140b6a1e7fead8126e8931b19da6b2dbc2de40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
