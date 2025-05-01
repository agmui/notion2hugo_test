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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RWFGWG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWPuSmAjpDOpkGThtS%2FNWLZildzPXkU9ejw0MvfPnZDgIgAfwfYASetZKNa47cGYdt75%2B4BsTbw3yVEWUtixk7aZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwt8BjeCDQx6OG8jyrcA03%2FEbaoHBlN2ommzzJQSw3ZTXiXsz%2FRa%2FWsfJ6%2F7u%2BDhCahMQ9yK4%2B%2B4Sr0mbO6aayfCyZOhaq0BSgE%2FxxO8F5pH105JryIWDqoaf2M%2F0g6AX6EoXlnI%2Fu3X4IMqV0c5fozqqvdcUT5fx6A8ZGkatcSOdmFJmCfj15nEhDO7gZbaZbFmfU1dMSPkrYYL4XerZRR6p5xNiEUHq%2FhJzH0Ctle0YsbJy9EwrcTBH3S39EqEB7TLdxjA%2FeeWJCRKeWrzeMXXL2Py%2BwpQ%2FQPKlpOp4SXf%2BNNv4MmzAcO8tUvLRPEYarK5HWGRD0w2vi85ht6H53qV5sDmgIIUKl97RYxYUvMjqyZTRj7D5AvvppiekytfcKAmvJ3ldN40c%2FCgy6MRdVPSD5%2BLtBdYF%2FPDDxBHXCORSHzOR2MtHVBXOZ%2BsYw9Bt53oBar4cfujd6ykvGJm%2FQaLSGV2BI%2BN%2FOx7xj6FQq%2FPUM2FZulc5xb7Tq9qSFtU%2FGkiARivow4W%2B566ZYtV8Awf79b46cDwE%2B315QpsKlRKpLS5j5n07IIj%2F9YoMEo9kzV3zFlKJcs1T9WEt9op41bCafFwllUOQRrgYhKOVjfAk%2FWY%2FcWIX77lWfgVlINezuKk%2BtEoPQoImbZMIHOzMAGOqUBLbxMFtYY950RzK9hAj11JGsRxoKwDJSSP8XxVP9vYQFEDhd%2FMfrai7%2FrOmXAYoNKxMZ9OgVzd6faJ3dY9g2XcPv1XVTHrplDLh6jnIE25LuNKSqz5A8Lu5WfDd%2BsBU8meNkuMWmhkVVu%2FfmTlNdGnHjV9c%2FOtJl%2FKIvL6bJiu51CDrrvyG5j0J9MjGXpMPnYvXzzUB2zizqTY%2Fbq6Zfw63ZoaQXa&X-Amz-Signature=884dcd419568a4cff54adcbe4d01ed51a8389db73941f9c144b5cbed01100b30&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RWFGWG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWPuSmAjpDOpkGThtS%2FNWLZildzPXkU9ejw0MvfPnZDgIgAfwfYASetZKNa47cGYdt75%2B4BsTbw3yVEWUtixk7aZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwt8BjeCDQx6OG8jyrcA03%2FEbaoHBlN2ommzzJQSw3ZTXiXsz%2FRa%2FWsfJ6%2F7u%2BDhCahMQ9yK4%2B%2B4Sr0mbO6aayfCyZOhaq0BSgE%2FxxO8F5pH105JryIWDqoaf2M%2F0g6AX6EoXlnI%2Fu3X4IMqV0c5fozqqvdcUT5fx6A8ZGkatcSOdmFJmCfj15nEhDO7gZbaZbFmfU1dMSPkrYYL4XerZRR6p5xNiEUHq%2FhJzH0Ctle0YsbJy9EwrcTBH3S39EqEB7TLdxjA%2FeeWJCRKeWrzeMXXL2Py%2BwpQ%2FQPKlpOp4SXf%2BNNv4MmzAcO8tUvLRPEYarK5HWGRD0w2vi85ht6H53qV5sDmgIIUKl97RYxYUvMjqyZTRj7D5AvvppiekytfcKAmvJ3ldN40c%2FCgy6MRdVPSD5%2BLtBdYF%2FPDDxBHXCORSHzOR2MtHVBXOZ%2BsYw9Bt53oBar4cfujd6ykvGJm%2FQaLSGV2BI%2BN%2FOx7xj6FQq%2FPUM2FZulc5xb7Tq9qSFtU%2FGkiARivow4W%2B566ZYtV8Awf79b46cDwE%2B315QpsKlRKpLS5j5n07IIj%2F9YoMEo9kzV3zFlKJcs1T9WEt9op41bCafFwllUOQRrgYhKOVjfAk%2FWY%2FcWIX77lWfgVlINezuKk%2BtEoPQoImbZMIHOzMAGOqUBLbxMFtYY950RzK9hAj11JGsRxoKwDJSSP8XxVP9vYQFEDhd%2FMfrai7%2FrOmXAYoNKxMZ9OgVzd6faJ3dY9g2XcPv1XVTHrplDLh6jnIE25LuNKSqz5A8Lu5WfDd%2BsBU8meNkuMWmhkVVu%2FfmTlNdGnHjV9c%2FOtJl%2FKIvL6bJiu51CDrrvyG5j0J9MjGXpMPnYvXzzUB2zizqTY%2Fbq6Zfw63ZoaQXa&X-Amz-Signature=384e1202a33069397a62151d455c046c2971afb15c2399fe3bad80da173090c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
