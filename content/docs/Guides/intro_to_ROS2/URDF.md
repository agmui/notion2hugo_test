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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPUED2OK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgF5abhKBpf0GNUGN8kOcW9MrGgddzQgbFkspWb%2Bc3QwIgd3OdvZvz87tFBAHMcrWVxZfUt1QoU%2FHz7oZr%2B4TAVNIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEevYM4esxcqYKqF%2ByrcA5dPOO0vwZz8M7uLEVeoG0JL0rOcYg1jU7P0%2BfahxZDRP7EvVJoKMD%2BMUvjVHOZsSK6ybrCzeiETE5K5MqReCNRLTJi%2Fiq38TQeiPslk02maRLOA6nTRwh8PHRsUQOw2kluYFrMcWkh9qGExmf6%2FXuhNYuJlm2uo0FjzteQwcYo%2FGwVex2JfT1%2BC5bBUz%2BibTOWxzdzuzNTmCMNKglg6yaTXVng6Ayv0IUgv%2FV5o0LKrq%2FMwD72zVl%2FlJeSayVd9uInoGtQF%2BbV8UvFC%2FXeG5cGddEqljabopR%2BiFWchrXJOAR6yL%2Fz57%2FkK0Jc1AKFYinkQpepxT2%2BfMHpvN%2Bmjbkj50z%2BLhDVHbyzrIjYXgLPitFU2FjqdbPVKMRMeuMIdTzwynNuztpBIo9LfcfkLJwtA9vloBPAU6f5f67ThSAb1QSq613hEuTNAGxJ4yw%2BLTIs7Gp%2B5i8lxUw2W40UgQXolgdCj3bd%2FdZrZOSq1NR7hKmuKNln9riplcj4TdaDtcW9Ff1I6epZGSHyNISS9NFrfHoO7hzplDx5W8tOXWfqipCip%2FkRWtW9Ow9j5XBH%2BgFY%2BCm1Uusuki5cpYGM4ifOuH8FNQrZuNRVqB7Om1w1gk909XDLyADBQJ98SMLn5iMIGOqUBot1m0%2FmYzGPXOLvQz3sSinFLfPNmABgMyWH6WON0ggzGbbYEWmwmYMaaahjzsWx7to8RFfTgYciTczuRKh%2F70JyzR5Mow3DkKdQ0jwoaDuSy6RzxKHU3X59FyWWuVgIItdbPLZF4mUawuaNI98wLg2AiuspTgacaJw07kxmhD8q4CA74d7nXSToAS5X9mrZcHbdcqsCY62zls0exzY3QzyAMxYF1&X-Amz-Signature=914f7618ad52c0f6bec4c49cb4a147e8677838f32140ff57bdeb2731c9867323&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPUED2OK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCgF5abhKBpf0GNUGN8kOcW9MrGgddzQgbFkspWb%2Bc3QwIgd3OdvZvz87tFBAHMcrWVxZfUt1QoU%2FHz7oZr%2B4TAVNIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEevYM4esxcqYKqF%2ByrcA5dPOO0vwZz8M7uLEVeoG0JL0rOcYg1jU7P0%2BfahxZDRP7EvVJoKMD%2BMUvjVHOZsSK6ybrCzeiETE5K5MqReCNRLTJi%2Fiq38TQeiPslk02maRLOA6nTRwh8PHRsUQOw2kluYFrMcWkh9qGExmf6%2FXuhNYuJlm2uo0FjzteQwcYo%2FGwVex2JfT1%2BC5bBUz%2BibTOWxzdzuzNTmCMNKglg6yaTXVng6Ayv0IUgv%2FV5o0LKrq%2FMwD72zVl%2FlJeSayVd9uInoGtQF%2BbV8UvFC%2FXeG5cGddEqljabopR%2BiFWchrXJOAR6yL%2Fz57%2FkK0Jc1AKFYinkQpepxT2%2BfMHpvN%2Bmjbkj50z%2BLhDVHbyzrIjYXgLPitFU2FjqdbPVKMRMeuMIdTzwynNuztpBIo9LfcfkLJwtA9vloBPAU6f5f67ThSAb1QSq613hEuTNAGxJ4yw%2BLTIs7Gp%2B5i8lxUw2W40UgQXolgdCj3bd%2FdZrZOSq1NR7hKmuKNln9riplcj4TdaDtcW9Ff1I6epZGSHyNISS9NFrfHoO7hzplDx5W8tOXWfqipCip%2FkRWtW9Ow9j5XBH%2BgFY%2BCm1Uusuki5cpYGM4ifOuH8FNQrZuNRVqB7Om1w1gk909XDLyADBQJ98SMLn5iMIGOqUBot1m0%2FmYzGPXOLvQz3sSinFLfPNmABgMyWH6WON0ggzGbbYEWmwmYMaaahjzsWx7to8RFfTgYciTczuRKh%2F70JyzR5Mow3DkKdQ0jwoaDuSy6RzxKHU3X59FyWWuVgIItdbPLZF4mUawuaNI98wLg2AiuspTgacaJw07kxmhD8q4CA74d7nXSToAS5X9mrZcHbdcqsCY62zls0exzY3QzyAMxYF1&X-Amz-Signature=6f8401e200a65c27042fae9a545fd2f0ac22c0cb06dd739dbb0b336f60326fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
