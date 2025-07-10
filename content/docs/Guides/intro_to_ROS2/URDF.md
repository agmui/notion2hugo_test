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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5CNDXZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDekwK4m9m7xfRYDJvZ8caEa5CTeo3XMdJKO%2BfmaZ5%2F0AiEA%2BO6xLmF%2B1XpQWi0Ey8y5HEJ2H%2FerBd2gXU%2F2HKlIr3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAGOeBRpokxIWvHTCrcA7NlpO%2FLVPdUoteiRi63rGtSI64Mmy9nQw%2B8czMAE2QKhLC7xTxVZJXmF06ex0dOvPV4Xo9qvmMZ0FXWiRn9KHbKB2OgzRA1OdWAvLrOBDlojXHp6vpIua8yU3zagMCerE1Xde5Scr1YzrQJuk4SSTilL6DyLcpxgRo7FRmCV%2FrV0nuZbpFyggtddnKRpd114BK9EgLc43jt1gKOb0oAXNEJaE%2F9bw2kt%2B2B8SAzEjrFLMmBMjACzRdKqL7G63DPqy4QFkN54j%2BBLL6UiCcQfsqshJZtu9EynKb0sh42ydEQOKXtp5e2DY7VA1KpbQI%2B7LqyDkFQOPPzp3M%2FVx6vWeyw%2BCCQ8mUJrGst0VHYS8kfrQz2Bxzvrho27Z%2FMxCrR5oc9PtoSQ%2FkPl86oFP2iLXpUI2KWCmqGZNio6o%2FH1qOnWb%2BdVwz8CoXTA3MtbgpgdZ6a1LQNusbXujxgiH5MDrpmgnsuVzxQ8bjEGJ%2F6sp127k9RmoGKJSeKbEMaP5RhPnVknxhU%2Fq5nqYeF4SWL5SSJb9nwN6XUJ89nOqdlJKZ5DRGk6U3F3HyWK7M%2FTtm8c52YW%2Fst7TVPMs2ZNpT1%2By9q3YQet1m3v1wZ67yk6rM7on3v7sRxfzwOnRzMMIXRvMMGOqUBRQGjWl0mkELhyzxo5VQ%2FZaUREFoGbLx2%2FNiugxgRmp6w1Hep4%2FHzIC0tPXaukbp3pffZ2lEzaiSPXZhB0inQS3Q7TY4%2FWRN8fm1zBMVm7il8PrI3UvaYiYhYXMLriW2ldNslGDlz7bG8ygqbtxxVjN79S0cHNyScT7nnOLVvGfrGknw2bkyxgkR3Iw7xG1ahb2I3y6hp%2Bwv3ps8wvDcGwoH8r0OK&X-Amz-Signature=c82055146de3fd57828ec9daf1f9849e9d12c3d998bec4a4d7c8929ed4748563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5CNDXZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDekwK4m9m7xfRYDJvZ8caEa5CTeo3XMdJKO%2BfmaZ5%2F0AiEA%2BO6xLmF%2B1XpQWi0Ey8y5HEJ2H%2FerBd2gXU%2F2HKlIr3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAGOeBRpokxIWvHTCrcA7NlpO%2FLVPdUoteiRi63rGtSI64Mmy9nQw%2B8czMAE2QKhLC7xTxVZJXmF06ex0dOvPV4Xo9qvmMZ0FXWiRn9KHbKB2OgzRA1OdWAvLrOBDlojXHp6vpIua8yU3zagMCerE1Xde5Scr1YzrQJuk4SSTilL6DyLcpxgRo7FRmCV%2FrV0nuZbpFyggtddnKRpd114BK9EgLc43jt1gKOb0oAXNEJaE%2F9bw2kt%2B2B8SAzEjrFLMmBMjACzRdKqL7G63DPqy4QFkN54j%2BBLL6UiCcQfsqshJZtu9EynKb0sh42ydEQOKXtp5e2DY7VA1KpbQI%2B7LqyDkFQOPPzp3M%2FVx6vWeyw%2BCCQ8mUJrGst0VHYS8kfrQz2Bxzvrho27Z%2FMxCrR5oc9PtoSQ%2FkPl86oFP2iLXpUI2KWCmqGZNio6o%2FH1qOnWb%2BdVwz8CoXTA3MtbgpgdZ6a1LQNusbXujxgiH5MDrpmgnsuVzxQ8bjEGJ%2F6sp127k9RmoGKJSeKbEMaP5RhPnVknxhU%2Fq5nqYeF4SWL5SSJb9nwN6XUJ89nOqdlJKZ5DRGk6U3F3HyWK7M%2FTtm8c52YW%2Fst7TVPMs2ZNpT1%2By9q3YQet1m3v1wZ67yk6rM7on3v7sRxfzwOnRzMMIXRvMMGOqUBRQGjWl0mkELhyzxo5VQ%2FZaUREFoGbLx2%2FNiugxgRmp6w1Hep4%2FHzIC0tPXaukbp3pffZ2lEzaiSPXZhB0inQS3Q7TY4%2FWRN8fm1zBMVm7il8PrI3UvaYiYhYXMLriW2ldNslGDlz7bG8ygqbtxxVjN79S0cHNyScT7nnOLVvGfrGknw2bkyxgkR3Iw7xG1ahb2I3y6hp%2Bwv3ps8wvDcGwoH8r0OK&X-Amz-Signature=90fda981f3cdb649587dbbad98308a905de037f57f39ab19d43c48f9a9add4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
