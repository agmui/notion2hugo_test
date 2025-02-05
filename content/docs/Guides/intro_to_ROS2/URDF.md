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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3SWJBT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBHkowcELiqGN442YvKyRNyn6Iilt1Jt0QoW%2F1K9Gm1PAiEAmPenrpRJu3%2FwiaDHcTEGWUVv%2FV4LMtg4gWLVoUpXg24q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEQogi33K%2FCfht6pryrcA6gFUPr9fjAN6hhuGffjJxF9mnO7D%2FC1prUSymeLasgDFZf6oBkH3armIeKVKg4vFr7jlRS87pX%2BbTzSeYiORJgknJbFtZq9%2FqbCuVMxcFeYcmE6jjqVTeTKjAJHfk80j8mbc%2BGFivR1JbTZXlCdo%2B%2BystFio2wEz1zSus85WwBm1izY0Px8q6T56Lbdw7YojgFpBWWkhDRi3K83lU0iV1qcyR2YIkixeY5%2FDV3g5QKHVIQOZHmhuE2qzcf%2FT2E%2Bf2MKSwppmYyVFH9ZU7iqq0OBY9A7EWey73HTnhl93B6kPo88qzh%2FmqX22ub%2F8Ylf2nR2UuWCmihu1nHOxUslI7yfVCPP42OZIyZq6j1E4MFgqWw3RthHV6j3uObSIcGdwsebDj9Q85x2u3EEnHuc4z4dz7iLlT%2BlnfELcmXd25RpiApwL3ACtT%2FX%2FI6JbZnh8MuXKDIsxPgmxUksVYmmd%2F1ekJdXhm8e1WwMgg7w%2FftBubTbZLbyX3yWQIYX7PmX2EwsWw2zetvfAJpxv3O7%2FS7ViSQLmAJZ6HgWaWTmd0B2Fhn0J1ZsZpClP8KOd2DNLadE0MfdfiNgP1fmbv4RR16fwf%2FPpKkng6w8th3w6VB1Kbj6tiI%2FqKtDPuUVMJu2jL0GOqUBtjoM153UfWbZ3muek0HUP9xtPmD0gF%2BRZA30TpeV9udawtjzQ0J5q2JUpqwZrm4WnfNeQ86%2B7%2FKGnDFvFjUwKnxkSIiCg7RwfnzT3GhTfzn2kxAcVnsL1VpWceRapq5lZa%2B5p%2BlSNtQfzno7nEbej5J7DqHT72hXYLQ7DVzKQNhkrNvJ1TcxyuZCZu7OSdkj20%2BGQwb5KgeTf7lXOQfWhVxQlwZ6&X-Amz-Signature=65758d243bba69d7b57966a3a03fa5635dfd9d4a5e573f15218275835bc4becb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3SWJBT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBHkowcELiqGN442YvKyRNyn6Iilt1Jt0QoW%2F1K9Gm1PAiEAmPenrpRJu3%2FwiaDHcTEGWUVv%2FV4LMtg4gWLVoUpXg24q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEQogi33K%2FCfht6pryrcA6gFUPr9fjAN6hhuGffjJxF9mnO7D%2FC1prUSymeLasgDFZf6oBkH3armIeKVKg4vFr7jlRS87pX%2BbTzSeYiORJgknJbFtZq9%2FqbCuVMxcFeYcmE6jjqVTeTKjAJHfk80j8mbc%2BGFivR1JbTZXlCdo%2B%2BystFio2wEz1zSus85WwBm1izY0Px8q6T56Lbdw7YojgFpBWWkhDRi3K83lU0iV1qcyR2YIkixeY5%2FDV3g5QKHVIQOZHmhuE2qzcf%2FT2E%2Bf2MKSwppmYyVFH9ZU7iqq0OBY9A7EWey73HTnhl93B6kPo88qzh%2FmqX22ub%2F8Ylf2nR2UuWCmihu1nHOxUslI7yfVCPP42OZIyZq6j1E4MFgqWw3RthHV6j3uObSIcGdwsebDj9Q85x2u3EEnHuc4z4dz7iLlT%2BlnfELcmXd25RpiApwL3ACtT%2FX%2FI6JbZnh8MuXKDIsxPgmxUksVYmmd%2F1ekJdXhm8e1WwMgg7w%2FftBubTbZLbyX3yWQIYX7PmX2EwsWw2zetvfAJpxv3O7%2FS7ViSQLmAJZ6HgWaWTmd0B2Fhn0J1ZsZpClP8KOd2DNLadE0MfdfiNgP1fmbv4RR16fwf%2FPpKkng6w8th3w6VB1Kbj6tiI%2FqKtDPuUVMJu2jL0GOqUBtjoM153UfWbZ3muek0HUP9xtPmD0gF%2BRZA30TpeV9udawtjzQ0J5q2JUpqwZrm4WnfNeQ86%2B7%2FKGnDFvFjUwKnxkSIiCg7RwfnzT3GhTfzn2kxAcVnsL1VpWceRapq5lZa%2B5p%2BlSNtQfzno7nEbej5J7DqHT72hXYLQ7DVzKQNhkrNvJ1TcxyuZCZu7OSdkj20%2BGQwb5KgeTf7lXOQfWhVxQlwZ6&X-Amz-Signature=998f74c8cb58435b5700266a0a85ee05fdbff0e978600bc0ca6bf982554131d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
