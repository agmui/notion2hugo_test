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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFCRP6D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Bj5pexQBkG6242PqVPp57i2pXJ3nFcybVRmIYpBCRUAiEAy2vViqlXA4I6%2FOfFq5zUMABMhe5Dn5lNaZWqqt%2Bgw0AqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY%2Bvyr5kPbPHPyhtircA5Ht82ZSMgBTcguAzLMBq95XwQRHIakrOFhhdU7unfN53gWKX0dXt5uPxVG5y%2BnsZBl3lukvfFgCr9qrjs%2FDjlyJYg4r6vacyrdCRtOWVY%2BfIYV%2FV%2FrqGJHtNV8HyJFOoIry0SkzuulXUD%2BSu%2BypndlvTXWdoAxowqCTvt0lOu7m8GE2xug891kEnVGoFDwzrtgRq8IRqu1oUq%2FUY3duosYph8jk5CjV2ti%2B41GfNvC6fTzbm%2FLS2gvFjuqgLvOwTaI3llVcm33W8iHGB0PqxDkgvldTcPINiKQOs92mvLf%2F99g7f38rpzD9eSCKLBWjUmYYOc8c2TV%2Fqgcxh8voHEtnN9jeMF64TYF9YAb0uYD%2BLtnJLdShJNPlffCrRzT92oTHdWslHgAGI430mooYwhm4q5bn2biSqbRrhu6aYG6gP%2FjEeb20JpcKHG6SzzZ1yikxqbGJAVQ0OE6EU7mcLrMkykoYmmKg67mWTsLA4rrntArE4KhMCldVq%2BvfnjkcV5AgpnRXuT9C%2BwfOU9Zh7hEKm4Bg9dbYk3SoOwXYdHn2jQTwERlKAjv4D%2FwVz7HGmAYvoQH3BmZz803H4qcYKzgnbZVe9gCGWIOdf4xVvM7AMCLKaOXAuXV9DqosMLvttMQGOqUBA%2BMIEJpWROHjHe7KbDyHxU7Og0xqMn6lnn7RSCzhwq9TIJ5fwXMnfqH2bzL3LTJ584RdHyjFD1uW5eeN7UZmV7vbIzO4UgFkYhDJ2hnqIKCrXV1SIU8aYKaiAhHUoeSXFJl96QAhzb9ZOmftbWnZpLL2PvVrdB5KQFeJR2PAAGxtb8CdHFWbJkAQRFDfN0Lpo1hgReu1ZkfpD%2BNWvD%2F5UAx%2FwC3w&X-Amz-Signature=e419ff233602288381e61716b8a36e8fca8f0e4ca560f8addf7402cd1939ac3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFCRP6D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Bj5pexQBkG6242PqVPp57i2pXJ3nFcybVRmIYpBCRUAiEAy2vViqlXA4I6%2FOfFq5zUMABMhe5Dn5lNaZWqqt%2Bgw0AqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY%2Bvyr5kPbPHPyhtircA5Ht82ZSMgBTcguAzLMBq95XwQRHIakrOFhhdU7unfN53gWKX0dXt5uPxVG5y%2BnsZBl3lukvfFgCr9qrjs%2FDjlyJYg4r6vacyrdCRtOWVY%2BfIYV%2FV%2FrqGJHtNV8HyJFOoIry0SkzuulXUD%2BSu%2BypndlvTXWdoAxowqCTvt0lOu7m8GE2xug891kEnVGoFDwzrtgRq8IRqu1oUq%2FUY3duosYph8jk5CjV2ti%2B41GfNvC6fTzbm%2FLS2gvFjuqgLvOwTaI3llVcm33W8iHGB0PqxDkgvldTcPINiKQOs92mvLf%2F99g7f38rpzD9eSCKLBWjUmYYOc8c2TV%2Fqgcxh8voHEtnN9jeMF64TYF9YAb0uYD%2BLtnJLdShJNPlffCrRzT92oTHdWslHgAGI430mooYwhm4q5bn2biSqbRrhu6aYG6gP%2FjEeb20JpcKHG6SzzZ1yikxqbGJAVQ0OE6EU7mcLrMkykoYmmKg67mWTsLA4rrntArE4KhMCldVq%2BvfnjkcV5AgpnRXuT9C%2BwfOU9Zh7hEKm4Bg9dbYk3SoOwXYdHn2jQTwERlKAjv4D%2FwVz7HGmAYvoQH3BmZz803H4qcYKzgnbZVe9gCGWIOdf4xVvM7AMCLKaOXAuXV9DqosMLvttMQGOqUBA%2BMIEJpWROHjHe7KbDyHxU7Og0xqMn6lnn7RSCzhwq9TIJ5fwXMnfqH2bzL3LTJ584RdHyjFD1uW5eeN7UZmV7vbIzO4UgFkYhDJ2hnqIKCrXV1SIU8aYKaiAhHUoeSXFJl96QAhzb9ZOmftbWnZpLL2PvVrdB5KQFeJR2PAAGxtb8CdHFWbJkAQRFDfN0Lpo1hgReu1ZkfpD%2BNWvD%2F5UAx%2FwC3w&X-Amz-Signature=9764f83d4155d17769e0a58495e6b541d6fd03bc66126d8fb787accfb0c07d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
