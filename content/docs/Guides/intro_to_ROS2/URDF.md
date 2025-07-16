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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIDEEQY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQvMaiv13Hqu5YcpLydPySVvP7yAznOnyjMXve8V1JrgIhAOi8V9zxRQ5wqgzrvRbgeVEe%2BnEHUeC0Htg%2BIISRi7g6Kv8DCFwQABoMNjM3NDIzMTgzODA1IgwK1TKV%2BiwLIa%2FZt3Mq3AOMgTZYEe2lpZxc2a62yxkWxqP%2BDjOb%2FxGWVGSyNU%2FQt5aYZ1DXC99QOp2jJbHR2ovzgE05egWJ8cZKUZwSSV3Wl%2BCajmq%2FhCc%2BKYXYZ1kc5waZOrkvcLxErOn5fGfZSNQxt%2BKhMOXNO9F%2FdQ9%2BGtfxaXNGZlpH6l3kLOOH6SeuYtf5AhGbaIHgumvzO1SiT2gmGun8C0sxknyIqOcSX5CWSjjOSWokn%2BshUFaANjNrp4WgbU3P4Kem2GXpKoI9IGks8Cag4TW%2B%2F98gpPpEu0X1oVRf3ifIOzTKTaFA9pSIEunMUmtA09UhHWnv9ayN%2Bk4hlO8gojzJDG3hvRe%2FdX%2B5lX0ATxE02weMQapH%2FInsYNQlkzlpK%2FPNNvTYa7jk4B%2BUeSPxHUk8szV15Cmdk%2B528qoNfSEUVKJrFF6utRKSBBBZS0e6DNPndwzGS8Xf0sysSgNgTFwx%2BBFBefcGAGBGzY8edgUCmeI5g%2B2zf6Ru4%2BCvwd8%2BAkhJps%2F%2FmtOwTSLw4ewVXZZD9oNu9Tm5jjtNtNgLd%2Bs3euYubrd6ieTS%2BtG0OMne5T6NugKOgoirjuzkXFgCvJhyX%2Bfi2%2FF9VOodFxBC9KZ5yvGuse6XFkYFdxzesan%2Foxv1%2FibI2TCyk97DBjqkAfGJsg7gatNrRs0hc2uLSoTb6pBq0tvfi%2BhnlLYQhEAesRTJ6QKkgLVMzTnup7u5pDHwAlX4ITqCB%2FaTbIE1N0K%2BdTaywHkKdXR%2FxtZy70fPDLdvNLXsmR4AzkaKcgFTeABpv%2F92YV43SYkwKXyDSXvE1cL3fu0pc1zZNT0tYBT07BItRIsUodQrkMxCWR5Jx6Mgigy0kx93IKUbWeE8V5Zaywmr&X-Amz-Signature=b308b69963d401201eec9d9bdaf9aa830c526de606b9c95f96575de26db2d358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OIDEEQY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCQvMaiv13Hqu5YcpLydPySVvP7yAznOnyjMXve8V1JrgIhAOi8V9zxRQ5wqgzrvRbgeVEe%2BnEHUeC0Htg%2BIISRi7g6Kv8DCFwQABoMNjM3NDIzMTgzODA1IgwK1TKV%2BiwLIa%2FZt3Mq3AOMgTZYEe2lpZxc2a62yxkWxqP%2BDjOb%2FxGWVGSyNU%2FQt5aYZ1DXC99QOp2jJbHR2ovzgE05egWJ8cZKUZwSSV3Wl%2BCajmq%2FhCc%2BKYXYZ1kc5waZOrkvcLxErOn5fGfZSNQxt%2BKhMOXNO9F%2FdQ9%2BGtfxaXNGZlpH6l3kLOOH6SeuYtf5AhGbaIHgumvzO1SiT2gmGun8C0sxknyIqOcSX5CWSjjOSWokn%2BshUFaANjNrp4WgbU3P4Kem2GXpKoI9IGks8Cag4TW%2B%2F98gpPpEu0X1oVRf3ifIOzTKTaFA9pSIEunMUmtA09UhHWnv9ayN%2Bk4hlO8gojzJDG3hvRe%2FdX%2B5lX0ATxE02weMQapH%2FInsYNQlkzlpK%2FPNNvTYa7jk4B%2BUeSPxHUk8szV15Cmdk%2B528qoNfSEUVKJrFF6utRKSBBBZS0e6DNPndwzGS8Xf0sysSgNgTFwx%2BBFBefcGAGBGzY8edgUCmeI5g%2B2zf6Ru4%2BCvwd8%2BAkhJps%2F%2FmtOwTSLw4ewVXZZD9oNu9Tm5jjtNtNgLd%2Bs3euYubrd6ieTS%2BtG0OMne5T6NugKOgoirjuzkXFgCvJhyX%2Bfi2%2FF9VOodFxBC9KZ5yvGuse6XFkYFdxzesan%2Foxv1%2FibI2TCyk97DBjqkAfGJsg7gatNrRs0hc2uLSoTb6pBq0tvfi%2BhnlLYQhEAesRTJ6QKkgLVMzTnup7u5pDHwAlX4ITqCB%2FaTbIE1N0K%2BdTaywHkKdXR%2FxtZy70fPDLdvNLXsmR4AzkaKcgFTeABpv%2F92YV43SYkwKXyDSXvE1cL3fu0pc1zZNT0tYBT07BItRIsUodQrkMxCWR5Jx6Mgigy0kx93IKUbWeE8V5Zaywmr&X-Amz-Signature=d7a1a8c2ac4c3cebfddd61984d49b4df7d71b9de1046f2571da34e97b1331c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
