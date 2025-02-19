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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKVF25Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQGGqBjmkRmaZb1dFWVTs1rs%2FiQvjhb6RDWNVKzasboAiEA1Bl4DnK57uTgm%2BmVZUehUffHSYAox82IPjB7IgTGxacqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJlELW4QiYIttc%2FHCrcAx4SYh9D0dWGX5Mhqm4hcq2XS1MuqdNa26h9mxTTCUATFDdWPhnRfTHs16AVh5EfeYjW5C4q8NS4esHjpMxQIOgA4BtaUToPyr1NbWVv2QtRKxJ%2BRBjIWmDI18j73AXtLptwYQZBCMEV9OxRsJShGqxaOa0rO9m4aGpylflLK8R%2B68MMd0WZBiSEMseWB%2B1h2qVUnSOUC7bTDjEoRnpqtNHD5jQ3Kf5fnhyArbPcp0ZMs0fHiM6EuR3nmsq5nXhyM0vh%2BEYGwfEaT4Zw8HMbQ1UoonI3SsN6TKKLYekHU%2FIyD55HnkDRKu2oox7TvpKjBr8hOR7xktBFG7wFPwva4U99KWp%2FsrZn%2Fr21DdY2VtBljqCIAWtYHDYIsvne9oSq0T5WahTF%2BCJ6%2BnRq6Vxk4qah7Srre4BRXHz%2BatRyMeeOM9u8Gch31EtBH4cRAnklhkyHz5aw%2FCi3%2BNcrI%2BQUGR%2BAdRTQTKkhY6ge43NG9tHla8XR%2BQXqs97bVZp9HGbD%2FE9L4%2Foy17Gl54FdxRjBMjNSSHJtle37e00NgHXKN%2B4%2BJ%2Fy85o118nGrhbX9NiS0AAqyrzUz1gEcWToymME3NlSr9ox%2FNV1cxQZ1ffnoic5EKbhJ4w9EQtND6nveMOf61r0GOqUBat1gJhXWeKfFHCSCalaYsAzHtnKE%2B4vJg%2F9K0KIfmDc5Kfv6jnmlWSfE4541bSscL7EzYYgm2DUYl7mNiAJfqAJK9lvOtgdHjHt26YUcOvie6lV8ahxydoS0Wt3NyJTqNKLTrWyaIpNRPGn%2Bk%2BOVXwl23ZXHwwQtWgW%2FJLRLdfELzUA%2Ba3ie9x3ej%2FCPH%2BZUbfj%2FTWEShaiWaoLXKKDZ8WckI4cg&X-Amz-Signature=c233ca7b2d93a5dbb58c97d5fba1c39141d2cbbdd076b2aa68fbb64cb7f5d40f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKVF25Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEQGGqBjmkRmaZb1dFWVTs1rs%2FiQvjhb6RDWNVKzasboAiEA1Bl4DnK57uTgm%2BmVZUehUffHSYAox82IPjB7IgTGxacqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJlELW4QiYIttc%2FHCrcAx4SYh9D0dWGX5Mhqm4hcq2XS1MuqdNa26h9mxTTCUATFDdWPhnRfTHs16AVh5EfeYjW5C4q8NS4esHjpMxQIOgA4BtaUToPyr1NbWVv2QtRKxJ%2BRBjIWmDI18j73AXtLptwYQZBCMEV9OxRsJShGqxaOa0rO9m4aGpylflLK8R%2B68MMd0WZBiSEMseWB%2B1h2qVUnSOUC7bTDjEoRnpqtNHD5jQ3Kf5fnhyArbPcp0ZMs0fHiM6EuR3nmsq5nXhyM0vh%2BEYGwfEaT4Zw8HMbQ1UoonI3SsN6TKKLYekHU%2FIyD55HnkDRKu2oox7TvpKjBr8hOR7xktBFG7wFPwva4U99KWp%2FsrZn%2Fr21DdY2VtBljqCIAWtYHDYIsvne9oSq0T5WahTF%2BCJ6%2BnRq6Vxk4qah7Srre4BRXHz%2BatRyMeeOM9u8Gch31EtBH4cRAnklhkyHz5aw%2FCi3%2BNcrI%2BQUGR%2BAdRTQTKkhY6ge43NG9tHla8XR%2BQXqs97bVZp9HGbD%2FE9L4%2Foy17Gl54FdxRjBMjNSSHJtle37e00NgHXKN%2B4%2BJ%2Fy85o118nGrhbX9NiS0AAqyrzUz1gEcWToymME3NlSr9ox%2FNV1cxQZ1ffnoic5EKbhJ4w9EQtND6nveMOf61r0GOqUBat1gJhXWeKfFHCSCalaYsAzHtnKE%2B4vJg%2F9K0KIfmDc5Kfv6jnmlWSfE4541bSscL7EzYYgm2DUYl7mNiAJfqAJK9lvOtgdHjHt26YUcOvie6lV8ahxydoS0Wt3NyJTqNKLTrWyaIpNRPGn%2Bk%2BOVXwl23ZXHwwQtWgW%2FJLRLdfELzUA%2Ba3ie9x3ej%2FCPH%2BZUbfj%2FTWEShaiWaoLXKKDZ8WckI4cg&X-Amz-Signature=970ca4eccb7bcc3353b505d1e7e668b4139bb7680cf63d191c28a79026e88199&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
