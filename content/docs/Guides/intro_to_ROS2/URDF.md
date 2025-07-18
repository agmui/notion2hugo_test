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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPG42Y6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC36FCoNwYUFFiU%2BK9GYcXX4DDX%2BPuwiGnSPCQk3dBonQIhAPH9nFj0Q4dgKDHw6Iz%2FYv0%2FaK%2F25X1OXgnKcuulcFAsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF0C7PMGHGE4Ol%2Bv4q3AMKa%2F4bUy1xwsqGTHu1MrWyWh%2BEhHxNFvUBD%2BGdTiUChWNx2yl9XipzWBwWSaiA56Q51nyMxWw7aVgz49Vdqyn0qWhUw6ztsCvr0URBM%2Bsumf12AgaCtWAW7ls5AIlARDYuuskgXf%2BVHtcrBCSXyWqQ%2FZDErguNMqb3q6z9ShHVEKzMG%2BouImf1X1k1JXgJGZY3UiKtNNr77i08Q7huS1aMNj5OfgzeC%2BwhjqvYMZLcGja6J7s2mZ7f7mNW2WCtgahMvuaZyAa4GJSR7qAjUew9qtpNBIRtX4ehkureKK0j%2FO9aSBT3IheIV803%2B65b4kIZ%2FO%2Fr9%2FW%2FF48kyhPzGXsW32xZHTdFVqXN4u79oDnv2BNYZnHCJqtDorw35nGSs8oHpLQh%2FAka2j4kmIK21ign16weNcSC%2Bur2%2FlbDKvIMiWqUl%2FIOlqzVUb6GA7%2FCD%2BeoNNGXNiSNUNZ435%2F9TRQMyYLAslXK8KsM74QyQJwnP5GwH6HO9bHBLGtub0RUuc7oXctuu85UszAV30j71y0kVXJ4c%2B3BJViXrlksjBGz54yhSmUb9pP3GboD6M%2FvfgdC69RBLVQdEH6UZHO%2BDGmRfULNOENYdPz%2BxfMOfyrXzkpjfzqMCKCNGFiJOTDm%2FOfDBjqkAQdGIcnrry2nyowIUd4At5g3KaFT57kuAv0IP730jDvjrICvd5snkZLBwhP8zwQqfRGYBPjCFTSX2jEduwUWNVwPUsFlSybGxrrlYN81mrtuyrw6lsDpz4PoU5fTOyMlNwMIDUgOFmOf9kobXoa4RY6iJNoZdfj61QzvAaa82sQAsyzSu7Wi5wtdu%2BppEjvq0hb8cNrX8ZqH6A%2FhH6C1Orc4XSaX&X-Amz-Signature=6bb90e8bc600852654e9a597ac924d7316363b3dba1e458beaab3cecb2feafc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPG42Y6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC36FCoNwYUFFiU%2BK9GYcXX4DDX%2BPuwiGnSPCQk3dBonQIhAPH9nFj0Q4dgKDHw6Iz%2FYv0%2FaK%2F25X1OXgnKcuulcFAsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF0C7PMGHGE4Ol%2Bv4q3AMKa%2F4bUy1xwsqGTHu1MrWyWh%2BEhHxNFvUBD%2BGdTiUChWNx2yl9XipzWBwWSaiA56Q51nyMxWw7aVgz49Vdqyn0qWhUw6ztsCvr0URBM%2Bsumf12AgaCtWAW7ls5AIlARDYuuskgXf%2BVHtcrBCSXyWqQ%2FZDErguNMqb3q6z9ShHVEKzMG%2BouImf1X1k1JXgJGZY3UiKtNNr77i08Q7huS1aMNj5OfgzeC%2BwhjqvYMZLcGja6J7s2mZ7f7mNW2WCtgahMvuaZyAa4GJSR7qAjUew9qtpNBIRtX4ehkureKK0j%2FO9aSBT3IheIV803%2B65b4kIZ%2FO%2Fr9%2FW%2FF48kyhPzGXsW32xZHTdFVqXN4u79oDnv2BNYZnHCJqtDorw35nGSs8oHpLQh%2FAka2j4kmIK21ign16weNcSC%2Bur2%2FlbDKvIMiWqUl%2FIOlqzVUb6GA7%2FCD%2BeoNNGXNiSNUNZ435%2F9TRQMyYLAslXK8KsM74QyQJwnP5GwH6HO9bHBLGtub0RUuc7oXctuu85UszAV30j71y0kVXJ4c%2B3BJViXrlksjBGz54yhSmUb9pP3GboD6M%2FvfgdC69RBLVQdEH6UZHO%2BDGmRfULNOENYdPz%2BxfMOfyrXzkpjfzqMCKCNGFiJOTDm%2FOfDBjqkAQdGIcnrry2nyowIUd4At5g3KaFT57kuAv0IP730jDvjrICvd5snkZLBwhP8zwQqfRGYBPjCFTSX2jEduwUWNVwPUsFlSybGxrrlYN81mrtuyrw6lsDpz4PoU5fTOyMlNwMIDUgOFmOf9kobXoa4RY6iJNoZdfj61QzvAaa82sQAsyzSu7Wi5wtdu%2BppEjvq0hb8cNrX8ZqH6A%2FhH6C1Orc4XSaX&X-Amz-Signature=52726fdc896a4d1e372bb154a99c01ebbc019312f4228a0a5f868b3a7fbdffe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
