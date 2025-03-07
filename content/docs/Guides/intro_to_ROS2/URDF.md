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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3NNJK6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO102kBeeVW7hZOl%2FIlQo%2F9RXloKQwS%2FtolZqo8%2BMwEAiEA8O2omjrY7%2FGE2t1pEq9WgaAwyhX11ssDsteY0UTCex4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDvzMCm1PCAGA54aESrcA%2Bx1lO440KXp19A6FkCw4x6nwfcz5EbZfeH5wh1IFvx9ILkNONthMF48hEpB6muQ3PvneXXYODJd2UpKmfILb9aOFE463u8SxNSND%2FgL6ITbAxzkaUHFaLjmhpnT0tDQyVXSAorMntqKFh0VGDBSiEDeGeK%2FyBH%2FXGjf092JsoU41pN1eK3VDJvn5SjO3deNqL%2Ft%2FAy%2FaYtpaTDbOqoiL8%2B3HJ0kR1Qfrh%2Bmy8FFj8bzpf%2BH7uhVRfgay7BTd71%2BSeAe8x8Jba%2FPMdqDptlvPg4QSWfEyRWDhQkdNtmZEe4Ci6CKOY2XDNJ9liEGa2yL4q23FeCoyqdnM4KzHvNMwuNFO0ff5mxZYEpOEvUUFxqp5zii14b%2FQVYQtwKj7%2FKw3K8PiyjBdbCsMItuVNohfbZJ2vecbxXc%2BfELHxabMiKnr6RyBL8pNgNy7QuWe4IAyj030lTostcpyX2BBYpMgchSG0TxRoSeCf%2BTOVcwEVvur%2FJA5nngrQWdHd8kH2y16IDh8WZtzxMa34eE4MSITt4Q6P8YAZsWOpHdtP%2Br0RsaiF8lc0GU%2BsbwVwCgIYxnjymACz48cuY9ijPSTDcCcBe2Z5ohQr97vtKmpXVMUnlqqyomAjYVzKuDRcG3MIHJqL4GOqUBQglJO8oaB%2BG7h9LQRo7yaKOWvIiOe%2F8MtrBbkWwEsEEJIw421bvXL735cQKzEaXaQmnsf24KkqAVvrzE4CUHUC53sSJ3%2BWtgafjFjP9cxe%2FVOm%2FC0JJr%2BONMe60YQzFjvVTmepLkXscnJ5UodhWGJEmXOuDQ5ZX3eWfikxFrkhU%2FeyXMWS2NRldzbGwmku%2FNqPc7Icu5kfwcMdPK%2BrbN7BQ1gGV%2B&X-Amz-Signature=e8d53b4019358f0cf13dfd296f7b032fd6a856c4fa5ebb0f06c772d60e5b0fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3NNJK6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO102kBeeVW7hZOl%2FIlQo%2F9RXloKQwS%2FtolZqo8%2BMwEAiEA8O2omjrY7%2FGE2t1pEq9WgaAwyhX11ssDsteY0UTCex4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDvzMCm1PCAGA54aESrcA%2Bx1lO440KXp19A6FkCw4x6nwfcz5EbZfeH5wh1IFvx9ILkNONthMF48hEpB6muQ3PvneXXYODJd2UpKmfILb9aOFE463u8SxNSND%2FgL6ITbAxzkaUHFaLjmhpnT0tDQyVXSAorMntqKFh0VGDBSiEDeGeK%2FyBH%2FXGjf092JsoU41pN1eK3VDJvn5SjO3deNqL%2Ft%2FAy%2FaYtpaTDbOqoiL8%2B3HJ0kR1Qfrh%2Bmy8FFj8bzpf%2BH7uhVRfgay7BTd71%2BSeAe8x8Jba%2FPMdqDptlvPg4QSWfEyRWDhQkdNtmZEe4Ci6CKOY2XDNJ9liEGa2yL4q23FeCoyqdnM4KzHvNMwuNFO0ff5mxZYEpOEvUUFxqp5zii14b%2FQVYQtwKj7%2FKw3K8PiyjBdbCsMItuVNohfbZJ2vecbxXc%2BfELHxabMiKnr6RyBL8pNgNy7QuWe4IAyj030lTostcpyX2BBYpMgchSG0TxRoSeCf%2BTOVcwEVvur%2FJA5nngrQWdHd8kH2y16IDh8WZtzxMa34eE4MSITt4Q6P8YAZsWOpHdtP%2Br0RsaiF8lc0GU%2BsbwVwCgIYxnjymACz48cuY9ijPSTDcCcBe2Z5ohQr97vtKmpXVMUnlqqyomAjYVzKuDRcG3MIHJqL4GOqUBQglJO8oaB%2BG7h9LQRo7yaKOWvIiOe%2F8MtrBbkWwEsEEJIw421bvXL735cQKzEaXaQmnsf24KkqAVvrzE4CUHUC53sSJ3%2BWtgafjFjP9cxe%2FVOm%2FC0JJr%2BONMe60YQzFjvVTmepLkXscnJ5UodhWGJEmXOuDQ5ZX3eWfikxFrkhU%2FeyXMWS2NRldzbGwmku%2FNqPc7Icu5kfwcMdPK%2BrbN7BQ1gGV%2B&X-Amz-Signature=6274d3625aa7a24d8b5eada014877eb21e57db914cc8eeb8f7bcab49df179ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
