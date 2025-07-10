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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQHSXX5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ%2BcgK3Nrc8yMHM458FL5S1x0e2OspQDVan%2FWwoCcicAiEA5UExkMf8b1I6UmtB1kasoX2VQ%2BRsv4o1N7W5U5pJR%2FMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8oiHE0geIIl8IOQircA%2FwwtJHUh9eR4p45HTW6MieA8C6YRR6bMq4%2Ff63WprdIAQ74D5olnRiiSknNK%2B9nE%2Fl%2F7vJExayAL6unxetyezkN3nIJpTIVTZRb3LSCS%2FGOyR6ABfC4bfjbfxWFvngJGlPaCS%2FGhWmyIjenwNZlVXSu5w9aX0Oshy3gNv3EtKRV97RDZAS3TjGGjqFEXc0k7ceNjsqNAHj0xV%2FL4bII1OaJjkVoIZAOdWX%2FeCaOMqKO5Re2hLyWljQSFl1EA%2BLZJ1k4W3a1NPkgYe61Ms6pB0kSyKQYwanngBEK%2BXX6Q5rScNxVtGD2Mo4Bq81Z%2FA1E7wtVJyNuj9QopO49YKPk9uEdqYsr0wgeuzQXCNgXZ6Ul1ROB%2Fr1%2F5EhNHzBfepDhsW%2BLChVt%2Fz1j%2FxBNWol8r3OeZQEnjWlaAgM6Izj7uC%2BfrYEqsaRUHcKLNq7%2F0I%2FMjrNdtr%2Fadq2Lco9tWGY9PQIdu4LYiiY2aH%2BX1gCKl%2F4vYC6jfDaNIjj%2FvqHPqIOTEH37aWqa6%2FW7lJJmXXBO3IJz7o6YDkZ0YnwPOcgkA%2FnghxWzKFgvOFCg5lr64rvdq8UOTtpg%2FWm3IFZpj%2B54bECK%2BrSKdUtz3AB139gW3mdsFv9ySnLQUvWSjvetMOKhvMMGOqUBvxTr99QQ94wN9GQVjHeY2mzIhIGCGfu8lFROHehNpcNiHdcV00xuMcwkzsDhNkJSQWuKyjJAPRtlzav1kPHCFaKgLKBbBZzWA0qMeKlhO7Hw5%2Fc%2B5DcbPpk4UnP9%2BhHCKWnDfb8EHWdWF1LdaC2l7FKZuB8JAq%2BwjNEwJtYhnpRLD0DBdeMUelKJoZMDOzQ%2BPd0qs5wZ4vB2EnSPKSd3ui2j3%2BiB&X-Amz-Signature=6b61e740cd0e73cf8735ba435e069156ecfddc60a102ed0498f809c3a32990e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQHSXX5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ%2BcgK3Nrc8yMHM458FL5S1x0e2OspQDVan%2FWwoCcicAiEA5UExkMf8b1I6UmtB1kasoX2VQ%2BRsv4o1N7W5U5pJR%2FMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8oiHE0geIIl8IOQircA%2FwwtJHUh9eR4p45HTW6MieA8C6YRR6bMq4%2Ff63WprdIAQ74D5olnRiiSknNK%2B9nE%2Fl%2F7vJExayAL6unxetyezkN3nIJpTIVTZRb3LSCS%2FGOyR6ABfC4bfjbfxWFvngJGlPaCS%2FGhWmyIjenwNZlVXSu5w9aX0Oshy3gNv3EtKRV97RDZAS3TjGGjqFEXc0k7ceNjsqNAHj0xV%2FL4bII1OaJjkVoIZAOdWX%2FeCaOMqKO5Re2hLyWljQSFl1EA%2BLZJ1k4W3a1NPkgYe61Ms6pB0kSyKQYwanngBEK%2BXX6Q5rScNxVtGD2Mo4Bq81Z%2FA1E7wtVJyNuj9QopO49YKPk9uEdqYsr0wgeuzQXCNgXZ6Ul1ROB%2Fr1%2F5EhNHzBfepDhsW%2BLChVt%2Fz1j%2FxBNWol8r3OeZQEnjWlaAgM6Izj7uC%2BfrYEqsaRUHcKLNq7%2F0I%2FMjrNdtr%2Fadq2Lco9tWGY9PQIdu4LYiiY2aH%2BX1gCKl%2F4vYC6jfDaNIjj%2FvqHPqIOTEH37aWqa6%2FW7lJJmXXBO3IJz7o6YDkZ0YnwPOcgkA%2FnghxWzKFgvOFCg5lr64rvdq8UOTtpg%2FWm3IFZpj%2B54bECK%2BrSKdUtz3AB139gW3mdsFv9ySnLQUvWSjvetMOKhvMMGOqUBvxTr99QQ94wN9GQVjHeY2mzIhIGCGfu8lFROHehNpcNiHdcV00xuMcwkzsDhNkJSQWuKyjJAPRtlzav1kPHCFaKgLKBbBZzWA0qMeKlhO7Hw5%2Fc%2B5DcbPpk4UnP9%2BhHCKWnDfb8EHWdWF1LdaC2l7FKZuB8JAq%2BwjNEwJtYhnpRLD0DBdeMUelKJoZMDOzQ%2BPd0qs5wZ4vB2EnSPKSd3ui2j3%2BiB&X-Amz-Signature=156ac530dfb3c09388792aae4f5f88e95a210d14ec3e0c9dfa8e8e01db8783d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
