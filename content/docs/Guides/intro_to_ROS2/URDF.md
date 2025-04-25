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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H4YT6OL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoRjSmq54k%2F7pgYmBhjDQyB3ocOsf7fsISSh5pzs7SsAIgA1%2BHmiq8KJFozY%2FCmIJIsFWYenKnW1i%2F3P9ZSIpasP8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDG3sYsfeu%2B0xm0aXMircA2cv2I1P2SjbQsJ228oQ98nh8NqtYAYvU7txmt7W1d4M9rprs1an%2BdidmF3Nadq%2BP9wa2xWDcWGK8j6CNsb35K2KfzoCYV3aEAHblWWJyNAvUhYnsyo1dQmH4W7EiHA90Z%2F7AI1kyj6pYsV3azoZEFvhV71xXrIO6jNrlnxSEqqYyOI%2BHpDchjuerxcN9RNTi2hqbx3LZoDUnqYkRzK5KK6aH5eGMKGNwvgfmyMKQ1cgeAt%2BUXDLQ68xop9SBIjHDKTM5If2cP16KQnVZzY9PWt6MdYLm4d34%2BfK%2BBVmMiCP3N45lPVrWQywyh5G5WizDpLFT6%2BOVSXakHbHDAKVEC46s2NSCViiHVgFL9mdhtiWFPe%2BoxX0NC99dDnmAdPesAZblGy2kaqJom8O2RqKV8bP%2FN7VDP0eO%2BjuKiDSJ6wPFo1OZtsDwk0RZQ05jmZY18%2FrXn0IssS8cnd3hxmraIeIMRq%2F6rb7gOZWPykG8nr1hgqYNHEyqVxGBcE97JDhB9CXCaQsr6YYj8avqYMuROxUiInZefeJ0suhof4hlJHrRWhnu6b6o3CF%2BxnyflphXuKGnpQJIFgaEFj%2BR8DHj2TC4N30NBIgKSxJgCMzZcNz%2BfrR0%2BrMdDTqJtt0MNDIrcAGOqUBhoB%2FeIingK81qwU5O6Gumxr6Wv6CUErFPHCQuLIwl1iyCGbbZKgqfbisXe3mY1%2B8nb2hfLL3t1XNVmvoFQyyoiiClxXDnKKmachQGrvk%2FMrByOCdrwUt8cu2yAVor6KXR7ri6AtcwXyDgBW3l51kwweGow6OJ2ALgUY1HwSzmUXlQCoKvRPCOBCE5BUfNzkVSou%2FafTuDs9edJBCZ%2FO8Jbpa6dqt&X-Amz-Signature=7a68088f63c610dea14d38e3b791a4be6d924bae909631ac522568553e723134&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H4YT6OL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoRjSmq54k%2F7pgYmBhjDQyB3ocOsf7fsISSh5pzs7SsAIgA1%2BHmiq8KJFozY%2FCmIJIsFWYenKnW1i%2F3P9ZSIpasP8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDG3sYsfeu%2B0xm0aXMircA2cv2I1P2SjbQsJ228oQ98nh8NqtYAYvU7txmt7W1d4M9rprs1an%2BdidmF3Nadq%2BP9wa2xWDcWGK8j6CNsb35K2KfzoCYV3aEAHblWWJyNAvUhYnsyo1dQmH4W7EiHA90Z%2F7AI1kyj6pYsV3azoZEFvhV71xXrIO6jNrlnxSEqqYyOI%2BHpDchjuerxcN9RNTi2hqbx3LZoDUnqYkRzK5KK6aH5eGMKGNwvgfmyMKQ1cgeAt%2BUXDLQ68xop9SBIjHDKTM5If2cP16KQnVZzY9PWt6MdYLm4d34%2BfK%2BBVmMiCP3N45lPVrWQywyh5G5WizDpLFT6%2BOVSXakHbHDAKVEC46s2NSCViiHVgFL9mdhtiWFPe%2BoxX0NC99dDnmAdPesAZblGy2kaqJom8O2RqKV8bP%2FN7VDP0eO%2BjuKiDSJ6wPFo1OZtsDwk0RZQ05jmZY18%2FrXn0IssS8cnd3hxmraIeIMRq%2F6rb7gOZWPykG8nr1hgqYNHEyqVxGBcE97JDhB9CXCaQsr6YYj8avqYMuROxUiInZefeJ0suhof4hlJHrRWhnu6b6o3CF%2BxnyflphXuKGnpQJIFgaEFj%2BR8DHj2TC4N30NBIgKSxJgCMzZcNz%2BfrR0%2BrMdDTqJtt0MNDIrcAGOqUBhoB%2FeIingK81qwU5O6Gumxr6Wv6CUErFPHCQuLIwl1iyCGbbZKgqfbisXe3mY1%2B8nb2hfLL3t1XNVmvoFQyyoiiClxXDnKKmachQGrvk%2FMrByOCdrwUt8cu2yAVor6KXR7ri6AtcwXyDgBW3l51kwweGow6OJ2ALgUY1HwSzmUXlQCoKvRPCOBCE5BUfNzkVSou%2FafTuDs9edJBCZ%2FO8Jbpa6dqt&X-Amz-Signature=88edc9ef95696cc21c08ed46975c4b1af9d893e3e8c7f19418d6b8eb38066d63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
