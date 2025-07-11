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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ANQWSAE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRyIwaUOwhDjH7pC%2F03fbA8R3xlGdEPgVNDWaLtDsnKAiBIVEIcH9%2BpI7ij9xqaH8vmLlppmrRMHgHXqAwxW8MJjSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJMlhj9I6f%2Fsa9%2F8EKtwDHwJW%2BNKbJccQBd0zNH2xUW6ut7ZWpACV%2Bvx5JIS%2BqlD0cnZH6s73H%2FXaT9Pte%2B55P7CXa0kknVdat3J7acZ9cQSwsbhKzb4HUW5mMopOH2Aj9yXtUN0HLbBVcptq3pJdE8urWx%2FVlATZfKYcqk1%2BjX2Ha7SJ%2FKKF9fnM%2FE%2BJcxZobzBaZnh5LGfA0VItlR55cw38JjNu5LiqTZ66wMknqTxg0CHU4%2FtmuJNGMhOcTaP%2Fyo23qgaJF3eaQar%2BdcmkVntzCp98Di7iO8UNMuuMfuRHUE7NW1N3x%2BVWSM5ytPrV0gMW9bKnW5ysvdhrNIkVnLPdBVmYj%2Ftcd9Io7rHf1%2FWf84jZE%2BNZqnTkmKyicD0ZQYkmcqsRwWkeqrscfsfvZgkSIwdG7%2BrSwNjAbDR4LLCRA2iuSHx616LlF6nocXBlaRqFWGggMvFM6KlTQ7WQD2vfarFjaKJse01czrOjP1SHx5WqgA96emUHyTC3ddZMsGJzS0dcG5D9ncHv3TQZ5MaiETZVnpXlI74Gk%2FzuKFgRiB4H%2FLLYmYd2l6ATUXHDmuPvVg7YaV36N2OV2wxGKbfjQrHyhPrUK1t%2FOMaly0Wt1IBsUwkov8oclu0vGA2K3T7DL8HCLjK5C7sw7ajDwwY6pgFTIGdfEjXzKY38VjOcng5jF%2Bo%2FXCftwtXdQpRUzpdXmXavm9ftl%2BO%2Bf6%2FXNghJLDbEpJNEEQDUDS8QVKQwSSVPXvkHk72disA4PWxu9s7ZAwuDeu9UY3p4tfezQppd%2BjFRvH2u3mDEq3MivYBGVF%2Ba9TERPwUa33S7X47eKmT57UY%2BXO3Jm6LG7quoJsCNAd6SuAQic0VJWMDv4Taq%2FdlgE8Sa7a9%2B&X-Amz-Signature=82bc513e7f3dc92a8bddf4247dfd700d4c1318cd45d709f39ae79d39f2649662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ANQWSAE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRyIwaUOwhDjH7pC%2F03fbA8R3xlGdEPgVNDWaLtDsnKAiBIVEIcH9%2BpI7ij9xqaH8vmLlppmrRMHgHXqAwxW8MJjSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJMlhj9I6f%2Fsa9%2F8EKtwDHwJW%2BNKbJccQBd0zNH2xUW6ut7ZWpACV%2Bvx5JIS%2BqlD0cnZH6s73H%2FXaT9Pte%2B55P7CXa0kknVdat3J7acZ9cQSwsbhKzb4HUW5mMopOH2Aj9yXtUN0HLbBVcptq3pJdE8urWx%2FVlATZfKYcqk1%2BjX2Ha7SJ%2FKKF9fnM%2FE%2BJcxZobzBaZnh5LGfA0VItlR55cw38JjNu5LiqTZ66wMknqTxg0CHU4%2FtmuJNGMhOcTaP%2Fyo23qgaJF3eaQar%2BdcmkVntzCp98Di7iO8UNMuuMfuRHUE7NW1N3x%2BVWSM5ytPrV0gMW9bKnW5ysvdhrNIkVnLPdBVmYj%2Ftcd9Io7rHf1%2FWf84jZE%2BNZqnTkmKyicD0ZQYkmcqsRwWkeqrscfsfvZgkSIwdG7%2BrSwNjAbDR4LLCRA2iuSHx616LlF6nocXBlaRqFWGggMvFM6KlTQ7WQD2vfarFjaKJse01czrOjP1SHx5WqgA96emUHyTC3ddZMsGJzS0dcG5D9ncHv3TQZ5MaiETZVnpXlI74Gk%2FzuKFgRiB4H%2FLLYmYd2l6ATUXHDmuPvVg7YaV36N2OV2wxGKbfjQrHyhPrUK1t%2FOMaly0Wt1IBsUwkov8oclu0vGA2K3T7DL8HCLjK5C7sw7ajDwwY6pgFTIGdfEjXzKY38VjOcng5jF%2Bo%2FXCftwtXdQpRUzpdXmXavm9ftl%2BO%2Bf6%2FXNghJLDbEpJNEEQDUDS8QVKQwSSVPXvkHk72disA4PWxu9s7ZAwuDeu9UY3p4tfezQppd%2BjFRvH2u3mDEq3MivYBGVF%2Ba9TERPwUa33S7X47eKmT57UY%2BXO3Jm6LG7quoJsCNAd6SuAQic0VJWMDv4Taq%2FdlgE8Sa7a9%2B&X-Amz-Signature=070b8ccd27f85e053d5a38450c1f8ad9fd04627ffb5d693c4ea10a40d4d53034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
