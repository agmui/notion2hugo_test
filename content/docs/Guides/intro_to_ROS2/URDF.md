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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPZ4UES%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHFKM1XCMF5Ng60IaMD%2F%2F25uZSs8SB2KKQJ7Gpo%2FMwguAiEA0ZOQYIeV2xLfpWVSqafhSn5SqqQ62hb2cPmvf3XlWC0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGAgiijXpW5vvUZLvCrcAygLi3JZwNNqV1Hsdwg7R0UpEPLcgkBuWbJ%2Bef2zq5ftiMe%2FIl3uZncrvbsUMJC1wiAzaevKG9hc%2B4tS9Crr7E5FvDVhg0x1%2BxaeYnAzu6wEkaQVS61v56uObTs2%2FCp4r1BcZqR0DaQSW7E%2BrRL7h8FoHznckgSGBXv2%2BkY7tvCDBQt5tuo4%2F91cFdCbWchuupz%2BMytbfNTQQQSJjOsb1sq%2BT02iE9hoYKRX6VDEuUz22TKArSH%2B%2BjOzy%2BKVBW147LQbpdW%2FKWiVVC1HQl1EtpIT65Wki6jSYDghagOQ1V744ck30hqHzHmqZEOpk1IT75ty8I4T88DlH7IOTDEUgSe3uQ6OPZ6zmMfglVSoEnxehJhrL0bEOAnC2H4Lk7NIlL2sULqAOD%2FUfh5o3EsT1hRnUUXzDg9yncS9%2FrtiqFrGph%2BRD8KhcsK%2FJfhqQrzmweCLjExppt45uGOC8h6H9l6ldihXqNG%2F7zE4KNOR0TDtFjBF%2B7%2BNL1lW5AFY7pmMqeVEu6hwQKLUSnPjgJv6%2BErAJ5AxSDQbJE0e9hH2YsMIxociS3lVM0thaDRptAvoc7NS8a3z9DOlTD61rAz3qx6qx3bD8%2BLFvIv6nIXHWDFJ5Cd36ngreLfk4EEmMLHSk70GOqUBNy%2FJxeCPlpbr1mGcUcHNQBHOvrD2IT5%2Fzli8%2F5pkhBbDIccKqm3UghuBIqodUqy5k1imsOUDwe7Z3Pvgp4juTYNSIlBkr40omQN7Rve1l9s3TS7DHOkFJCyETeZCn0MHN9Htrv242LyOtMrppXvAZ7aCIAL63kGNuPfPsHwdyPNexTzOa4WomhfRVWzP942yU1XHOgFrllx9pEmLcI34p%2Fpl3Yak&X-Amz-Signature=b4b8a9b7b12c88f50624d5fe22fddc911f0e539c0864fce2f5ab4883d565e08c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPZ4UES%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHFKM1XCMF5Ng60IaMD%2F%2F25uZSs8SB2KKQJ7Gpo%2FMwguAiEA0ZOQYIeV2xLfpWVSqafhSn5SqqQ62hb2cPmvf3XlWC0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGAgiijXpW5vvUZLvCrcAygLi3JZwNNqV1Hsdwg7R0UpEPLcgkBuWbJ%2Bef2zq5ftiMe%2FIl3uZncrvbsUMJC1wiAzaevKG9hc%2B4tS9Crr7E5FvDVhg0x1%2BxaeYnAzu6wEkaQVS61v56uObTs2%2FCp4r1BcZqR0DaQSW7E%2BrRL7h8FoHznckgSGBXv2%2BkY7tvCDBQt5tuo4%2F91cFdCbWchuupz%2BMytbfNTQQQSJjOsb1sq%2BT02iE9hoYKRX6VDEuUz22TKArSH%2B%2BjOzy%2BKVBW147LQbpdW%2FKWiVVC1HQl1EtpIT65Wki6jSYDghagOQ1V744ck30hqHzHmqZEOpk1IT75ty8I4T88DlH7IOTDEUgSe3uQ6OPZ6zmMfglVSoEnxehJhrL0bEOAnC2H4Lk7NIlL2sULqAOD%2FUfh5o3EsT1hRnUUXzDg9yncS9%2FrtiqFrGph%2BRD8KhcsK%2FJfhqQrzmweCLjExppt45uGOC8h6H9l6ldihXqNG%2F7zE4KNOR0TDtFjBF%2B7%2BNL1lW5AFY7pmMqeVEu6hwQKLUSnPjgJv6%2BErAJ5AxSDQbJE0e9hH2YsMIxociS3lVM0thaDRptAvoc7NS8a3z9DOlTD61rAz3qx6qx3bD8%2BLFvIv6nIXHWDFJ5Cd36ngreLfk4EEmMLHSk70GOqUBNy%2FJxeCPlpbr1mGcUcHNQBHOvrD2IT5%2Fzli8%2F5pkhBbDIccKqm3UghuBIqodUqy5k1imsOUDwe7Z3Pvgp4juTYNSIlBkr40omQN7Rve1l9s3TS7DHOkFJCyETeZCn0MHN9Htrv242LyOtMrppXvAZ7aCIAL63kGNuPfPsHwdyPNexTzOa4WomhfRVWzP942yU1XHOgFrllx9pEmLcI34p%2Fpl3Yak&X-Amz-Signature=aa85fd4c54b269c5bb5b0ed752cd4b499feb378eb26fc0e67feb611746a4a888&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
