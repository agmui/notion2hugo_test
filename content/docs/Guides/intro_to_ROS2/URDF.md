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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOYA5IBE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIH7tN9Xh7hIrwldHXYmVULrebXhKqXoMZMVuUHQL0HnPAiEAuQA6cFnl1PQgQC15M4lcIpqjA5Jcl5XsNcprfX%2BKDOYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC%2BLqhW4f3rH71WEBSrcAwDtj9iGD4oWqYEYYKdVZ6qEcRevuu2Y5xIPajvkhtx35WuLi2yA6%2FNJRKe3mBemHAKJGImysvOJmwsmVKbXPB6zFVtRuHQACcAj5mY0mqqkJuA8jF1VkKJfc%2FqswZ21J0EovPSRYF6A2SsVdm9dq9GAhYojm4se5U%2B%2FJUDAgBtM6WSwZkbx2j3%2BzIZZm%2BfTs2u3QPkOdVANkS4gItMwGU%2F5EqRWgJDGnngG65fDbp%2Fd9LamBhWzufTQyLnxBqg60ZRHM6vbtDhSIfZNZZh3DjcsyIJgrzyqQsGLkL7Qr6mbzXMRa%2FsVnTDyYcTTXFVDk7qR3X5LsXVaOwJSfeKfrDTFlSFMkpEMUesrVamRz3V1LXeCECiAeJs4EeeXzeCwtImz4KEEp%2BdgZtRc%2BEdsEqHYQoENp0NJts19%2F8aeNiEc41GXuW%2BZZ%2FHg1vfrj%2FHKOHytTrGh7pi9draOEpVKGrf5bFAYzuxhtO4KzXH7weOSr1o9eKeKivjHcfIvN1nUBH8C3UcsWeSi7P1LTxrDWoCFZMEKPHJjb3xWgi%2BDjFaJJdvbjHTqX6aChn70kbz7OSpCSuAMs94vKQRYME%2FLL3TtCoHb9241uOFEmgTp7qVphs3XBQTTw1o5xpuEMJT%2B%2BcIGOqUB55HYhstQXPzaj%2FHTFI6K2N9%2FLWvhY8sUJcmo3qsWL1zu2O11CwyXDwpuDpa04OegiVmNyuAsW2a%2Bzp2wa86dqhbWUSW8t18G41pBHaawsAelTCIJDoH44PNyBJbvGF6ASzbVLuxPNTykE90DDToJMuZs4Jf4S0WDz4NyvGRUg0QA8B0xWFCdG1vq7531lyRtrUkrLIcd%2Br5a4f8i%2BeXZMk8zi4lj&X-Amz-Signature=bd28d18ad3bceded7637cae07bb65974a9c6c127746c39b8f06d636638dd26c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOYA5IBE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIH7tN9Xh7hIrwldHXYmVULrebXhKqXoMZMVuUHQL0HnPAiEAuQA6cFnl1PQgQC15M4lcIpqjA5Jcl5XsNcprfX%2BKDOYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC%2BLqhW4f3rH71WEBSrcAwDtj9iGD4oWqYEYYKdVZ6qEcRevuu2Y5xIPajvkhtx35WuLi2yA6%2FNJRKe3mBemHAKJGImysvOJmwsmVKbXPB6zFVtRuHQACcAj5mY0mqqkJuA8jF1VkKJfc%2FqswZ21J0EovPSRYF6A2SsVdm9dq9GAhYojm4se5U%2B%2FJUDAgBtM6WSwZkbx2j3%2BzIZZm%2BfTs2u3QPkOdVANkS4gItMwGU%2F5EqRWgJDGnngG65fDbp%2Fd9LamBhWzufTQyLnxBqg60ZRHM6vbtDhSIfZNZZh3DjcsyIJgrzyqQsGLkL7Qr6mbzXMRa%2FsVnTDyYcTTXFVDk7qR3X5LsXVaOwJSfeKfrDTFlSFMkpEMUesrVamRz3V1LXeCECiAeJs4EeeXzeCwtImz4KEEp%2BdgZtRc%2BEdsEqHYQoENp0NJts19%2F8aeNiEc41GXuW%2BZZ%2FHg1vfrj%2FHKOHytTrGh7pi9draOEpVKGrf5bFAYzuxhtO4KzXH7weOSr1o9eKeKivjHcfIvN1nUBH8C3UcsWeSi7P1LTxrDWoCFZMEKPHJjb3xWgi%2BDjFaJJdvbjHTqX6aChn70kbz7OSpCSuAMs94vKQRYME%2FLL3TtCoHb9241uOFEmgTp7qVphs3XBQTTw1o5xpuEMJT%2B%2BcIGOqUB55HYhstQXPzaj%2FHTFI6K2N9%2FLWvhY8sUJcmo3qsWL1zu2O11CwyXDwpuDpa04OegiVmNyuAsW2a%2Bzp2wa86dqhbWUSW8t18G41pBHaawsAelTCIJDoH44PNyBJbvGF6ASzbVLuxPNTykE90DDToJMuZs4Jf4S0WDz4NyvGRUg0QA8B0xWFCdG1vq7531lyRtrUkrLIcd%2Br5a4f8i%2BeXZMk8zi4lj&X-Amz-Signature=6edf76d203366ae7065e76c539947bc9374432d33062e971412e2b05cbab775c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
