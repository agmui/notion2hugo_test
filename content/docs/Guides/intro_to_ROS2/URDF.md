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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I5LSCES%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzc6mrgfeIiutKKczKVkG%2BWlNCmNkuQFC7FKbGqg2M1AiEAyaH%2B75cNLt80Ngmez%2FFpgk%2B%2FHe9WNVZVQVbFqIMtKKAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPKk3WjWn9FnuXgG0yrcAwoB97nR8%2FrmWzHavSltTloqdB1FYr82Lge047eZ47ExnbubVJazFC83ysdted5%2BncgddhRl%2BknH4%2FzzfrGUHDwfvy3O33E4TsbnFwd83GoEOMABZJXT7RiPQa%2BR8nb9K92vJHKnimk%2FyuDD8CPhQtYWKrkHVGOWtZiMfBx4QPWSvS5yaOZz3oxds%2BtA0PLQUaVQ37LFKOdqnxZZbUc7abb2dJ7PeOaghrFUpY6kRw1lhekjFUXLVL3aWNMVcW3xL6SWwafcmnYDnUXCs0mUG2D1f1eWA32XtTfX6XMeTMCttgydKIxKTRMs5L7ueNuUotumfaIdBvge3k9s29kCP9juGUvF3v4gul%2F295SM2bhjVC76nEUTRMRtQDPFZ%2FyyzRU180MbRlLlNZuLUcJa8b2WJOrcg3EOMWQXfYlpeDLc4uCY0JW9s3c6aRf%2BqEZJsikAwlSbC1VxlpF3vvdIhpbBYZAgxIR%2Bevf7jaPwoQcmytEKofYmNcT2JivMl4mYMoNEFL9vJGuUJJt7Mt2D20cAplD%2B90P0bEC9G38ix7HfrP130AHHrC4KrcA0QhtnDV6Z1au7roqZRLa2R7DbBkIhNjDMbDpEk54Oa%2FvSXaVon8JcEYcUetIT%2BtbxMMyQ88AGOqUBTafQbCQjwsbe26T15c5kfrNwoRGvda1gLTrCnI5FhLnG236LDP%2BlKRyJFM9L1Tk%2BH7we%2Bolnd41DNAjtB4rf5Rnlx%2F1ik%2Br%2B9QlxvtiIHm8FMffggReIJEIMyhKqWbQ9NSKya0Q3vw24BpLs98PiP6SUzByokQIk1ORAFRNx0RLWvA3afdbE5GYPLklSMZ6d60v3Yb2G%2BqUck8MsMlHhTC2%2FDvPS&X-Amz-Signature=1d2f351d290ebb99737412078a4fc805dcacd0b3416b8e38eefddd55989614db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I5LSCES%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzc6mrgfeIiutKKczKVkG%2BWlNCmNkuQFC7FKbGqg2M1AiEAyaH%2B75cNLt80Ngmez%2FFpgk%2B%2FHe9WNVZVQVbFqIMtKKAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPKk3WjWn9FnuXgG0yrcAwoB97nR8%2FrmWzHavSltTloqdB1FYr82Lge047eZ47ExnbubVJazFC83ysdted5%2BncgddhRl%2BknH4%2FzzfrGUHDwfvy3O33E4TsbnFwd83GoEOMABZJXT7RiPQa%2BR8nb9K92vJHKnimk%2FyuDD8CPhQtYWKrkHVGOWtZiMfBx4QPWSvS5yaOZz3oxds%2BtA0PLQUaVQ37LFKOdqnxZZbUc7abb2dJ7PeOaghrFUpY6kRw1lhekjFUXLVL3aWNMVcW3xL6SWwafcmnYDnUXCs0mUG2D1f1eWA32XtTfX6XMeTMCttgydKIxKTRMs5L7ueNuUotumfaIdBvge3k9s29kCP9juGUvF3v4gul%2F295SM2bhjVC76nEUTRMRtQDPFZ%2FyyzRU180MbRlLlNZuLUcJa8b2WJOrcg3EOMWQXfYlpeDLc4uCY0JW9s3c6aRf%2BqEZJsikAwlSbC1VxlpF3vvdIhpbBYZAgxIR%2Bevf7jaPwoQcmytEKofYmNcT2JivMl4mYMoNEFL9vJGuUJJt7Mt2D20cAplD%2B90P0bEC9G38ix7HfrP130AHHrC4KrcA0QhtnDV6Z1au7roqZRLa2R7DbBkIhNjDMbDpEk54Oa%2FvSXaVon8JcEYcUetIT%2BtbxMMyQ88AGOqUBTafQbCQjwsbe26T15c5kfrNwoRGvda1gLTrCnI5FhLnG236LDP%2BlKRyJFM9L1Tk%2BH7we%2Bolnd41DNAjtB4rf5Rnlx%2F1ik%2Br%2B9QlxvtiIHm8FMffggReIJEIMyhKqWbQ9NSKya0Q3vw24BpLs98PiP6SUzByokQIk1ORAFRNx0RLWvA3afdbE5GYPLklSMZ6d60v3Yb2G%2BqUck8MsMlHhTC2%2FDvPS&X-Amz-Signature=a4f9c32d27d5aff8d7b4335af416c40637ef2c69ae3d4c81e96ef4de5bfdc0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
