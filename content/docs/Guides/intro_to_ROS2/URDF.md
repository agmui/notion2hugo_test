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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTT2TD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIG7X%2BRJKfKKCm4PbOBUJnWVqcx1MK7DTINElliyuv7PcAiEAsUoCe78v%2B7gvvW%2Bp%2FxDT8Qpm%2B%2B0X9dbRGcEjnAiJHZUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIvIFpbxcRAutNHpeCrcA6R2R0nCp3p%2Bq6ISCiA6K9W1x3Q2pU0rTf%2BMNTbWTAxrjUZd64%2FdaiSABtTPAlFBDnetsC2NCxrqBP0Ne191t0n26IQOSHiKxkhHDbmbB%2BfzgnYpKezwD%2F7OoZB%2Fimax%2BcGj4ohc%2FpcSqeCBpZTlhrZevGHvjbE9s1%2Ba%2Bc8ZRGAeAbbnwpf%2F7oeMIcmBTl7m5DvDYloKbH1kxjlZ59CxYJRZyMDCfzmryR%2BO%2Fuy1rvW0LeaIZaYh5RjLkVsS8mf0Gc2qhiHT%2FVgStIZRHraXRwdGqnzGbZ94RvliUC2CGQoQdzxgpSlkt0F4JkQb0auXVnbKo3BMFIp0hYUk23D%2FCzpFHZ6Pep6XI6R3sCo8VXVp8o93DJc01VNgbZPa4s42kLfWB6x2VmCbW6uE1kj3DH1b0%2FoQElK4VUgaJfRGRHzhjTCN2DhfIaVMzEfFhanec4mrsBsJdpX9vHWK8aMiV7jsHL6o1hrPCeV5ZPWYWR8oOju4A1V6WaMOI%2BMhdyRRvSyj8e%2FpGN21lk5FiqpXECGS1pgMiACRz5i1CZpHEi1Ur%2FBdGBm4OFg6nfBY7z09nDgXt%2B4sd1IpjvEq8h1zIBw%2Fg14BdBkW%2BsMON7d%2BIZUCs%2BXEhgNiZDK0cSNQMMGNnsMGOqUBLNrt2xmGX8frbaj0KPRWZOiRu7dpupcvMbQvnxMsIPOf1J6cn%2FgRfQo2zPqj9bwty4xEmc4xtd5l%2BR41AJHTt4HGxX1O30ioVjYBhhjfTfyqEXV58MNLHQfNKYznyGau6GLfXviZo2K8xGHGsxR1Pon46l9XVD%2F5S49jwIGuyHO5mhuwh0yqdFz3gfQ%2BFBDUmMyA41ptxkr8HnYpU26BPnns3Fdx&X-Amz-Signature=854c58bb2573772485a56ce06ee3eb04e31d6c0412313ff12d4cd04c57608d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTT2TD4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIG7X%2BRJKfKKCm4PbOBUJnWVqcx1MK7DTINElliyuv7PcAiEAsUoCe78v%2B7gvvW%2Bp%2FxDT8Qpm%2B%2B0X9dbRGcEjnAiJHZUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIvIFpbxcRAutNHpeCrcA6R2R0nCp3p%2Bq6ISCiA6K9W1x3Q2pU0rTf%2BMNTbWTAxrjUZd64%2FdaiSABtTPAlFBDnetsC2NCxrqBP0Ne191t0n26IQOSHiKxkhHDbmbB%2BfzgnYpKezwD%2F7OoZB%2Fimax%2BcGj4ohc%2FpcSqeCBpZTlhrZevGHvjbE9s1%2Ba%2Bc8ZRGAeAbbnwpf%2F7oeMIcmBTl7m5DvDYloKbH1kxjlZ59CxYJRZyMDCfzmryR%2BO%2Fuy1rvW0LeaIZaYh5RjLkVsS8mf0Gc2qhiHT%2FVgStIZRHraXRwdGqnzGbZ94RvliUC2CGQoQdzxgpSlkt0F4JkQb0auXVnbKo3BMFIp0hYUk23D%2FCzpFHZ6Pep6XI6R3sCo8VXVp8o93DJc01VNgbZPa4s42kLfWB6x2VmCbW6uE1kj3DH1b0%2FoQElK4VUgaJfRGRHzhjTCN2DhfIaVMzEfFhanec4mrsBsJdpX9vHWK8aMiV7jsHL6o1hrPCeV5ZPWYWR8oOju4A1V6WaMOI%2BMhdyRRvSyj8e%2FpGN21lk5FiqpXECGS1pgMiACRz5i1CZpHEi1Ur%2FBdGBm4OFg6nfBY7z09nDgXt%2B4sd1IpjvEq8h1zIBw%2Fg14BdBkW%2BsMON7d%2BIZUCs%2BXEhgNiZDK0cSNQMMGNnsMGOqUBLNrt2xmGX8frbaj0KPRWZOiRu7dpupcvMbQvnxMsIPOf1J6cn%2FgRfQo2zPqj9bwty4xEmc4xtd5l%2BR41AJHTt4HGxX1O30ioVjYBhhjfTfyqEXV58MNLHQfNKYznyGau6GLfXviZo2K8xGHGsxR1Pon46l9XVD%2F5S49jwIGuyHO5mhuwh0yqdFz3gfQ%2BFBDUmMyA41ptxkr8HnYpU26BPnns3Fdx&X-Amz-Signature=902d836ce257bbb19d7c70891bab681221d993c84f8cc70b0114c4c0f4bcd453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
