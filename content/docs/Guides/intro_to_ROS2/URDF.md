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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQR6PTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAfoFsnnuE6hv7sP%2BGCRCKniYw9HB3VVvwjM4Xxwzc0QAiEAkvt6As%2BzxoAhxZBLZxDgo0EhnFEzNOS3ruWIpF%2B%2BXWcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQRkXdJBO8VI6OQ3yrcA2A35%2BYfSbuwUi4QYMeGY8l600KIEf9xJu9kXTNFXIrqhFGlt%2BrdHptn%2BOcxmQGQJJJZzvdUMhom%2Feeblg4A1v82xbi6f3OpLzsSxCLp5dHmnJHfWnWbdc0LeqpIVcrX%2BaZhQzH%2Bs2kFaziENRoyYWPVjwC2abHR4z42%2FTDSNn16fM0mIj0LQwLfanCE55KZIGXV9QD2pnrYjUnbYomIttnFT3kHxV89XxOnSt5v36Wka2y2KleY4A6CpwPTW%2FieRTvRIuiIPNA8%2BV7o7TVFVERNB2PJ%2FXXqgOPf8Armt1pmXhWdSz1ZxpS%2FwTnPrmoP58mRmNDkz6HSYAwctRz%2BIju%2BrdKWiyhAFdqW8y5McPwhgGYWWug97aD7ZhOuuMCgZbhX%2B3%2Fg9M%2FOdDNLqn7lHOB89GiXBKIJ4gcE7mYgPE559hM8U3ML8o07rEG%2Bf14KaWvrfjA5NX5GoQKpymt3apEYl%2BeG48SJvgaGqIZefN2P2XfPp8MWYLAYGya76nFwJCTDbuqxWxCu5caAY%2Fb8dIYsvBj5UwUH5TtcMi9yBLjMwH9EdDh%2FteXUYbRcjC6m3klt0JU25nfQXwUEiyC%2FUwu6%2Btk%2Ft21DFxZVTcIjWVy4lHKRvhcShzi96LCSMMfblcAGOqUB0xvCx%2B9lYexwQZQv%2BGCdOGOHSj%2BfVNh9FippOfwRbQ%2BPFoR6V8lwDBIldxSXxUjGpVnNCAJ2FaKZxfnUM6D%2FXd2qHvrcahI6bDlmJpSCSHACguZASF54DsLjNmHpzXQruZnkVgoof1kSJSaUJ%2BGnD6WMv4Bi1O0i%2F1Vd6RpbVu8zUDaOUfYTznsPjV3PG3mhMLWOyw51LXijMI7vdYl9nlYlmYzU&X-Amz-Signature=1145ad86b9e22a71b075da648c23d1b2e1f865a89d572d2f1063ebb3300f5b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQR6PTS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAfoFsnnuE6hv7sP%2BGCRCKniYw9HB3VVvwjM4Xxwzc0QAiEAkvt6As%2BzxoAhxZBLZxDgo0EhnFEzNOS3ruWIpF%2B%2BXWcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQRkXdJBO8VI6OQ3yrcA2A35%2BYfSbuwUi4QYMeGY8l600KIEf9xJu9kXTNFXIrqhFGlt%2BrdHptn%2BOcxmQGQJJJZzvdUMhom%2Feeblg4A1v82xbi6f3OpLzsSxCLp5dHmnJHfWnWbdc0LeqpIVcrX%2BaZhQzH%2Bs2kFaziENRoyYWPVjwC2abHR4z42%2FTDSNn16fM0mIj0LQwLfanCE55KZIGXV9QD2pnrYjUnbYomIttnFT3kHxV89XxOnSt5v36Wka2y2KleY4A6CpwPTW%2FieRTvRIuiIPNA8%2BV7o7TVFVERNB2PJ%2FXXqgOPf8Armt1pmXhWdSz1ZxpS%2FwTnPrmoP58mRmNDkz6HSYAwctRz%2BIju%2BrdKWiyhAFdqW8y5McPwhgGYWWug97aD7ZhOuuMCgZbhX%2B3%2Fg9M%2FOdDNLqn7lHOB89GiXBKIJ4gcE7mYgPE559hM8U3ML8o07rEG%2Bf14KaWvrfjA5NX5GoQKpymt3apEYl%2BeG48SJvgaGqIZefN2P2XfPp8MWYLAYGya76nFwJCTDbuqxWxCu5caAY%2Fb8dIYsvBj5UwUH5TtcMi9yBLjMwH9EdDh%2FteXUYbRcjC6m3klt0JU25nfQXwUEiyC%2FUwu6%2Btk%2Ft21DFxZVTcIjWVy4lHKRvhcShzi96LCSMMfblcAGOqUB0xvCx%2B9lYexwQZQv%2BGCdOGOHSj%2BfVNh9FippOfwRbQ%2BPFoR6V8lwDBIldxSXxUjGpVnNCAJ2FaKZxfnUM6D%2FXd2qHvrcahI6bDlmJpSCSHACguZASF54DsLjNmHpzXQruZnkVgoof1kSJSaUJ%2BGnD6WMv4Bi1O0i%2F1Vd6RpbVu8zUDaOUfYTznsPjV3PG3mhMLWOyw51LXijMI7vdYl9nlYlmYzU&X-Amz-Signature=9064c9ab8040b629c7ebfe965abbbc5e125484fdbc8d9151448e2c5cc62ce063&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
