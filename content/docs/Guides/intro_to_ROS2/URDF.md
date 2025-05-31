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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTWYL6B%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRsGuYBZtdVxsOAWu44FdoSeIT36ryjWxA3zu7BThZAAiBCSALuQkXxP1DlBQB5bAokPXBd2D%2FS1B5Wmzcm%2FV42jyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSENN5ECFNPN2TB2mKtwDPJ1i07npC3zyDao3Uh9PmtBGFiXKf%2BrlYi4UFbzcpHCarSxBZ8EElkJzOp%2BzshIDx6t4HbrkWoVvbaDRg5khmXGLPuK5341P1gLGaeGnGe7Lyv%2FlYVleAibco0OoQ4FJes2JSJ3RDU3LYMklZtWAVR2vUJfc66dbNchTJaIZBWB3w1we51kgdL%2FXOF1z8vglaR62puCDEjpZ%2BtLSsJD77%2FlGmZqYJPX2Jj2u%2F5um%2FekbjLNxg49Aqlvj03zdvGFzmyUv3VAr87TdGexb6wP20kXpLO53MmAxPz3w9jzRnMltOiJ1vBg7%2BgQMQWNyUOsZyzm5t%2Bzy4XULoPm2Ae8nmhKsbOmkp9f8IWvq0AAuiSYh4%2FeQbILKEGVWh6aLshy4hc9K1gP072GGSgVN8%2BFmLanUW5y%2BOcr3WF0Zhr8hnxEcapYI3zsfkS4z%2FAE7Lrhf%2BiHglBIoHWs52wO5RpA3Xjmyg%2Fq8fR60qc4swabEVJlqT0bQsebGJwbKGf5HfBQqPgEnwuOm%2FucjKnX5daZM0bjJ6WIuX7hge9eiTpfeNueNSF25W5nALE4fDr%2Fj%2B5lwsNt0lUTS7H3urmhYqpXTY0MXhZ7r61RwL7SWq2Opnu4KSU12v%2B7oPFqQbGkwp4TrwQY6pgGYqBP%2FIMuSja%2BAl%2FeULF8qNYWM%2B4fxYMal1kUvP5Ge0w2FbPW6fGQS8hhU16wt5sSE%2F3Ozyr%2BINXbungo4atXP%2FQmurCgElRp86kwjPhasz6mBcY9HjzkQJcFHFUkUd1P7QatgwdrqyQObcN3ZpRM0HsFQN0jIzco7ErsHpISnvBjSCGg1VX4yFN5OG9hDKD4RDTH6QwbGQ1qPS%2BItuRPO5b7xV8Gk&X-Amz-Signature=eae4fc0e4c349e390f56f6ffaca488ad26a9119f6b80b9cb2fb2f92c3194a3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTWYL6B%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRsGuYBZtdVxsOAWu44FdoSeIT36ryjWxA3zu7BThZAAiBCSALuQkXxP1DlBQB5bAokPXBd2D%2FS1B5Wmzcm%2FV42jyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSENN5ECFNPN2TB2mKtwDPJ1i07npC3zyDao3Uh9PmtBGFiXKf%2BrlYi4UFbzcpHCarSxBZ8EElkJzOp%2BzshIDx6t4HbrkWoVvbaDRg5khmXGLPuK5341P1gLGaeGnGe7Lyv%2FlYVleAibco0OoQ4FJes2JSJ3RDU3LYMklZtWAVR2vUJfc66dbNchTJaIZBWB3w1we51kgdL%2FXOF1z8vglaR62puCDEjpZ%2BtLSsJD77%2FlGmZqYJPX2Jj2u%2F5um%2FekbjLNxg49Aqlvj03zdvGFzmyUv3VAr87TdGexb6wP20kXpLO53MmAxPz3w9jzRnMltOiJ1vBg7%2BgQMQWNyUOsZyzm5t%2Bzy4XULoPm2Ae8nmhKsbOmkp9f8IWvq0AAuiSYh4%2FeQbILKEGVWh6aLshy4hc9K1gP072GGSgVN8%2BFmLanUW5y%2BOcr3WF0Zhr8hnxEcapYI3zsfkS4z%2FAE7Lrhf%2BiHglBIoHWs52wO5RpA3Xjmyg%2Fq8fR60qc4swabEVJlqT0bQsebGJwbKGf5HfBQqPgEnwuOm%2FucjKnX5daZM0bjJ6WIuX7hge9eiTpfeNueNSF25W5nALE4fDr%2Fj%2B5lwsNt0lUTS7H3urmhYqpXTY0MXhZ7r61RwL7SWq2Opnu4KSU12v%2B7oPFqQbGkwp4TrwQY6pgGYqBP%2FIMuSja%2BAl%2FeULF8qNYWM%2B4fxYMal1kUvP5Ge0w2FbPW6fGQS8hhU16wt5sSE%2F3Ozyr%2BINXbungo4atXP%2FQmurCgElRp86kwjPhasz6mBcY9HjzkQJcFHFUkUd1P7QatgwdrqyQObcN3ZpRM0HsFQN0jIzco7ErsHpISnvBjSCGg1VX4yFN5OG9hDKD4RDTH6QwbGQ1qPS%2BItuRPO5b7xV8Gk&X-Amz-Signature=1d6749744019fbcbe52d29af0738e36a7a846da523a7a7643093ce8edd7119b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
