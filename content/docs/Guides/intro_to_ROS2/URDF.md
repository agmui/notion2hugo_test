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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR5T62Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCQdpeEGkMlDLxmUr9DsCGGH4PTVs2eTt52QYvP%2FdDsFwIhAOledSGfiPRiAfMmtsTjJRnNSfJy%2BGz91fwm%2BhAXDQVkKv8DCGMQABoMNjM3NDIzMTgzODA1IgwlFEXPAEdXFpTQKDQq3AOWJIAn0vChr%2BT%2ByfY74X47T%2FOF31xjZKQGiE0Ne6VNT7IzJSjHWc3vPVzDcGbilxf6n4o2y%2BYOnIWQMpqLqbo7UZ4IUBqrNzuAKmEUfxLtGqvXm1zO54qgrP37jS9FAcKZdEZLltXhjL8aveWRYPU9sDxJRbpA2tRtP9njpWAUBR944OFwq88TAQl0Z8jh5mQV3LsMvQxNK9NG7w7ANeBtyszGmKfVQL27OORFTrcMjh86qb6Q%2FioH%2Ff3Y%2BNiCEz6Z%2F6iqKZm0cuJF96tXx%2BJyzMPg1X32kKYIxM4%2Bs7%2BtZx8szqq%2FfT%2Be5y4eqmrqnLMdliGk3TAhNcKvSpPECBspaCaZFPb%2F9tPp09cD8RBLi8TIqTbj7rwEYBflB%2FWUm2oQdQFeyMKEzOcbF58dZBXhnrUxUz7ngvu%2BPer4f7NY6DNR3vhch5awlGKLy2UTrEdYhyvc1GsuHT80Xx49T6MoaFZ%2FfjsQkXwztQdzqaH%2Feyu2rKNlNcH3ZzrwEFfm0HAWTnFFFMf%2BXBnxG4SBwCjhkRsE0CtqBGdCXmBirhfUAEYDnWuFk11RbvTF8rWnjkKR84VVlOGmO9c1c4X1dU62jb4bjHBe3YRJ%2Btx5oygyFH7m7PA3jf%2FCaoxLtjC68KrDBjqkAbrb6aZXfKbqNEaaAA7VCMSCVii6D0tcZE0e8v24YFm3EKlr3Q%2FeshjMrwlk0Q0V4dnuU5qGmpzk14h1p5lixZ9vwkq1Y4RUKzTz8cmQOUd0fGB4FMSb2H0Bvo5d1w9LykGo%2Bzlbjc%2BMhzo%2FwpZWDGcpkF3110wxf52t%2BQrNj6zGuKGAnsj5QmkFNFY3MC%2BhuvWpLcVmiWBxI2fTZAgGitjoN6FH&X-Amz-Signature=d044a66147003b99c55d7061fef497af96ea6497185c4f610c57001b04e14b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZR5T62Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCQdpeEGkMlDLxmUr9DsCGGH4PTVs2eTt52QYvP%2FdDsFwIhAOledSGfiPRiAfMmtsTjJRnNSfJy%2BGz91fwm%2BhAXDQVkKv8DCGMQABoMNjM3NDIzMTgzODA1IgwlFEXPAEdXFpTQKDQq3AOWJIAn0vChr%2BT%2ByfY74X47T%2FOF31xjZKQGiE0Ne6VNT7IzJSjHWc3vPVzDcGbilxf6n4o2y%2BYOnIWQMpqLqbo7UZ4IUBqrNzuAKmEUfxLtGqvXm1zO54qgrP37jS9FAcKZdEZLltXhjL8aveWRYPU9sDxJRbpA2tRtP9njpWAUBR944OFwq88TAQl0Z8jh5mQV3LsMvQxNK9NG7w7ANeBtyszGmKfVQL27OORFTrcMjh86qb6Q%2FioH%2Ff3Y%2BNiCEz6Z%2F6iqKZm0cuJF96tXx%2BJyzMPg1X32kKYIxM4%2Bs7%2BtZx8szqq%2FfT%2Be5y4eqmrqnLMdliGk3TAhNcKvSpPECBspaCaZFPb%2F9tPp09cD8RBLi8TIqTbj7rwEYBflB%2FWUm2oQdQFeyMKEzOcbF58dZBXhnrUxUz7ngvu%2BPer4f7NY6DNR3vhch5awlGKLy2UTrEdYhyvc1GsuHT80Xx49T6MoaFZ%2FfjsQkXwztQdzqaH%2Feyu2rKNlNcH3ZzrwEFfm0HAWTnFFFMf%2BXBnxG4SBwCjhkRsE0CtqBGdCXmBirhfUAEYDnWuFk11RbvTF8rWnjkKR84VVlOGmO9c1c4X1dU62jb4bjHBe3YRJ%2Btx5oygyFH7m7PA3jf%2FCaoxLtjC68KrDBjqkAbrb6aZXfKbqNEaaAA7VCMSCVii6D0tcZE0e8v24YFm3EKlr3Q%2FeshjMrwlk0Q0V4dnuU5qGmpzk14h1p5lixZ9vwkq1Y4RUKzTz8cmQOUd0fGB4FMSb2H0Bvo5d1w9LykGo%2Bzlbjc%2BMhzo%2FwpZWDGcpkF3110wxf52t%2BQrNj6zGuKGAnsj5QmkFNFY3MC%2BhuvWpLcVmiWBxI2fTZAgGitjoN6FH&X-Amz-Signature=98371f120e01ce1721ec4642014f62231d8cceb3810109854df8b57e1c82164d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
