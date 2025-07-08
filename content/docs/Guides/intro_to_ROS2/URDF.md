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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274PXVQJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWIcW3jjXnVkHuxnGkkLdwv3VXd2A633pli7FzcXjARAIgG29OV3ZhLnJH2rkpfPtT2WbWYHRKjnrd5S2jSH6qn%2FIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObZ8dDarxqS5%2F0vHircA9ics%2F5yUuSzP0jghorlAAnVzOB%2B2h4s5Rlg0EnCH1%2FY5ZkardUG3s3MMUGnd7V7p4K33zJxFZABklStheJQnlnX2qleRJYDfBRgSSThXX77zmM2Ycightg65WlzERgoccKaMTJul7Y9qS7Ivcwp039durUS9wpygZLvNQm73%2BB422NR%2B%2F06NOLNxLC3uHiozMVf14uXi7lAcQAD9Q%2Bm7lmZdIgxSkErLSYNDfMWSRhNTsPYwU7UM7xTeUsn3BMyLHjBtkpiBMhzx4b%2BjmyINmEw2q8cCu%2B43VOA8%2FySZh8k2PNkeA8SwxTcIYBnnssAa7UvuGGyOL80dCfkVoC9vPK5%2Fl1yITyfJK6RRIOe4Vn4cUCcrHLtiHi9wf8CvZYz63ioQ8zd4cUnb8ZWb582bP7N7TXwZjEJx4FfInnCFT1aoguivmFOSiyFVaC0Iyew0%2FRNBBoDr%2FAYdwdbkK0SfF2LaQFQhA62Pp7EctY7WnX%2BACu19yl4tqbhyYjXpLr9kJl2cs6XB%2BJJzYyIr8utUICrA4ZeoIVK%2Fxa0kPunO%2B0W6ePSSfOlvxFIJ1mKW1yyjfrUeBBx9JcfTAvLNaVKkhk%2BevaikQkEKuWW3mB1C0rY9J%2BrRyKK065PVj9dMImmtMMGOqUBTxALxFB%2F3IrWNX4rgRS2rhp%2BQxk9BG2Htcp5HGaD2CWiy%2F5qqwLV0CBU9kvRIIeTTUsyadEK5MwG3zE64%2BcPqnu57q1BH7Vb0P8pjCaeZT6BcCfDD8RH8YlZmyXycpTbY8gj%2FYkoCFzyxrbUn%2BH4spCIuI0LoAk93UeWomPz0ptTwVjJqndGNCiZ8MtAZJzJYLjjCpu%2F9S%2BeoBGn2MXpUgJn3zWQ&X-Amz-Signature=e6a94d191d3645823247dc2a1c1f18dc5970f7bf2136ba5d44f0fbe8905f97ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274PXVQJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWIcW3jjXnVkHuxnGkkLdwv3VXd2A633pli7FzcXjARAIgG29OV3ZhLnJH2rkpfPtT2WbWYHRKjnrd5S2jSH6qn%2FIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObZ8dDarxqS5%2F0vHircA9ics%2F5yUuSzP0jghorlAAnVzOB%2B2h4s5Rlg0EnCH1%2FY5ZkardUG3s3MMUGnd7V7p4K33zJxFZABklStheJQnlnX2qleRJYDfBRgSSThXX77zmM2Ycightg65WlzERgoccKaMTJul7Y9qS7Ivcwp039durUS9wpygZLvNQm73%2BB422NR%2B%2F06NOLNxLC3uHiozMVf14uXi7lAcQAD9Q%2Bm7lmZdIgxSkErLSYNDfMWSRhNTsPYwU7UM7xTeUsn3BMyLHjBtkpiBMhzx4b%2BjmyINmEw2q8cCu%2B43VOA8%2FySZh8k2PNkeA8SwxTcIYBnnssAa7UvuGGyOL80dCfkVoC9vPK5%2Fl1yITyfJK6RRIOe4Vn4cUCcrHLtiHi9wf8CvZYz63ioQ8zd4cUnb8ZWb582bP7N7TXwZjEJx4FfInnCFT1aoguivmFOSiyFVaC0Iyew0%2FRNBBoDr%2FAYdwdbkK0SfF2LaQFQhA62Pp7EctY7WnX%2BACu19yl4tqbhyYjXpLr9kJl2cs6XB%2BJJzYyIr8utUICrA4ZeoIVK%2Fxa0kPunO%2B0W6ePSSfOlvxFIJ1mKW1yyjfrUeBBx9JcfTAvLNaVKkhk%2BevaikQkEKuWW3mB1C0rY9J%2BrRyKK065PVj9dMImmtMMGOqUBTxALxFB%2F3IrWNX4rgRS2rhp%2BQxk9BG2Htcp5HGaD2CWiy%2F5qqwLV0CBU9kvRIIeTTUsyadEK5MwG3zE64%2BcPqnu57q1BH7Vb0P8pjCaeZT6BcCfDD8RH8YlZmyXycpTbY8gj%2FYkoCFzyxrbUn%2BH4spCIuI0LoAk93UeWomPz0ptTwVjJqndGNCiZ8MtAZJzJYLjjCpu%2F9S%2BeoBGn2MXpUgJn3zWQ&X-Amz-Signature=b103f5740ca8c8075164a7098bd00002834cf6f04b79c9e6ae659d023fb25e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
