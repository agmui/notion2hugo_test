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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADTRJZV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4oqqxEh%2BQZDOEa900BTfWwlZihZgit0wa%2BV3Nsz9j6wIhAKfMvCgHTj719UK1mi3KkUGxMWrCsy3gnIU6M%2BCixNC0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWdY4mNQX%2BWVLx%2FbEq3AM4OdL2eDDDct7e0UPVfpgv%2FBhWyLw5fBdbwQL4vSeXoUFECYylR9hsJuPFVklSJS55pPCotLGWhBk%2FsvPty1d%2B4DFCGbnnolUiC2Lp7eJvoNMrbX9JlL%2Fwsbm4AEn%2FbtEokk%2FFdwh0II%2BH2Yf27ZNRsEBosu4G70C%2Fl4WGdIhLifRdgQa6VVQ2D43wNj0oP%2FODP31T4AklrE2wPyDXtCgzl3FU6%2BghGwAJjZOcInypTwP5mIqr9F7pQx41ieKsU2egDf8BcjvZ6Aba6GoxYsr3h9lf63zLnhCPfEnI3b2PIO5R%2BrJqBtpF%2Bp1OEObsWvvMpHaoA%2BzE9UXwer4%2Fzp215cUN6Glm70Co3fot1jDQd1BswYzIAhwYx%2BXe%2B8i0fUiZ3Py03Ct4bxN%2FtpPGGpPpPUKTir10QBUCXGRZyuSfwV9yJQs3ACThyifYHu6j8ZVSguLXVdqjI7JGN%2FRXTKHo9R03GJ6zLkarblRSe7ZXI0jCSdnGpc4SxeXDmU6O8JXmMTCnaPpc%2Fl%2Bu8hsepLX2mfTggAWE%2BtIYzd3lonleebrRYrEcUB6iNwAQ%2BxSgD0cCUx6Sy6dTGmbpzSIc6mJ0L2ald0ueGXWDRdlX4jCNfyLIRowOEKm4EhSWzzC52aa9BjqkAU0%2BUsfdmiJCYEh7n%2FPMlnlv7O2HZC9FEe4Yw%2BfAketMLt069jCu5bNmL8%2BRwusbBXu8J7RHh9CMloKS%2Bur84%2BhU6yTJCqHKgtjGiV%2FnlWziOcY0IJKbKZGbnQ6sqxLuhllTJDlg%2BjJcolrsmhGhSg0ZbpmTLJv13onP7IbhM%2FDnsH9bXrYrHSiBwahh2wAXqVt2M47k0vK5C8s7HzSrIWRaJ9Zq&X-Amz-Signature=14a81e35566ffac96fa1c8b40f91b875d3fe02de0dc5a525e17aaee6b99c8f50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADTRJZV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4oqqxEh%2BQZDOEa900BTfWwlZihZgit0wa%2BV3Nsz9j6wIhAKfMvCgHTj719UK1mi3KkUGxMWrCsy3gnIU6M%2BCixNC0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWdY4mNQX%2BWVLx%2FbEq3AM4OdL2eDDDct7e0UPVfpgv%2FBhWyLw5fBdbwQL4vSeXoUFECYylR9hsJuPFVklSJS55pPCotLGWhBk%2FsvPty1d%2B4DFCGbnnolUiC2Lp7eJvoNMrbX9JlL%2Fwsbm4AEn%2FbtEokk%2FFdwh0II%2BH2Yf27ZNRsEBosu4G70C%2Fl4WGdIhLifRdgQa6VVQ2D43wNj0oP%2FODP31T4AklrE2wPyDXtCgzl3FU6%2BghGwAJjZOcInypTwP5mIqr9F7pQx41ieKsU2egDf8BcjvZ6Aba6GoxYsr3h9lf63zLnhCPfEnI3b2PIO5R%2BrJqBtpF%2Bp1OEObsWvvMpHaoA%2BzE9UXwer4%2Fzp215cUN6Glm70Co3fot1jDQd1BswYzIAhwYx%2BXe%2B8i0fUiZ3Py03Ct4bxN%2FtpPGGpPpPUKTir10QBUCXGRZyuSfwV9yJQs3ACThyifYHu6j8ZVSguLXVdqjI7JGN%2FRXTKHo9R03GJ6zLkarblRSe7ZXI0jCSdnGpc4SxeXDmU6O8JXmMTCnaPpc%2Fl%2Bu8hsepLX2mfTggAWE%2BtIYzd3lonleebrRYrEcUB6iNwAQ%2BxSgD0cCUx6Sy6dTGmbpzSIc6mJ0L2ald0ueGXWDRdlX4jCNfyLIRowOEKm4EhSWzzC52aa9BjqkAU0%2BUsfdmiJCYEh7n%2FPMlnlv7O2HZC9FEe4Yw%2BfAketMLt069jCu5bNmL8%2BRwusbBXu8J7RHh9CMloKS%2Bur84%2BhU6yTJCqHKgtjGiV%2FnlWziOcY0IJKbKZGbnQ6sqxLuhllTJDlg%2BjJcolrsmhGhSg0ZbpmTLJv13onP7IbhM%2FDnsH9bXrYrHSiBwahh2wAXqVt2M47k0vK5C8s7HzSrIWRaJ9Zq&X-Amz-Signature=985828644aa99f1ea8e36545a4af265fa42784fb1f0f29121412f313794f97ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
