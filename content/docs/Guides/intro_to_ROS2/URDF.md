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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHD4D7B%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoT2%2B4f3UHni%2BtFzKrJajNigj2%2FYBJq9gW7m888loKbgIgHYBXiHLKAVeRKxROndgKaFdTSFyDIfEILtEoW4aTjS0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUu175mgHmZN7KHICrcA2PcmTpOw1nIqHu8vxmhnUYJ0tEeqrzcF6oNQpO2odSqElVUjSdHSiSetlTgcjNrHnuq6Xe01QkYJORfHMnBERfsnJdytnH2G%2Bl%2F4lkARsHMl39klRRyGAvCU804XdYv98y867rLvaiGhKDBxcSZdPxTKpWOs%2Fv4erbBoZZZFePV8FXlrm2R4s6vj0qZM%2FdjdkXmGsF8sCL0jHhqmVHCs%2B23pc9YfW4YgmsZSHZrSFElmlw8vu4%2BlNhzxPwPWfoKVLuRMo9mAyjRwfpuuxqce3zgYWH4%2FWp5G92ZCyK%2Fms5rtse9kWOiHN9IC6KOnMDGjnJLq75V2VEbBU7t%2FlkgFC1mLz5%2FXPZrgTRJTiLI2pMJfUHZ%2Fy3%2BWljLOeOaYc1rcslG1i0oABuR%2FmE5fspVEoAYm2SSwY4vjrtatUitMmHV0J0f2zG9ODbwm3KVi2h1%2FodbUFrxy%2FLBcFgwWI1WiK1yBSav2Yn5RUp%2B6RgQ%2BfiA%2BnraljaaFMVuPzkGSLRDenJm3TQmKFjgbWiPqrU%2F%2Ftne%2Bl4pT09d3PF4VsPk5tLgT1OM%2FdJzgPGWG4LNptA8%2F5LsK7KAD6S0cDosBlOaRLu%2F2%2F7BmY2UQ%2Bm7GqmWV%2BAZyAohcgDrx9DohmoaMJ66%2FbwGOqUBfuQmOnN7zPnMWTFErKGd0Yc%2FoBcXKzZHQiIssLzUSrTPVX1%2BlZ6ev2a2tDYpBLtax7%2BEJkWUfy%2FWn7fNEukOhnOAD3MnpL6A5qjG96JxPWAoZC0OfA7PevRUlOcz%2BD%2FZw8Y023kzKA4VkVls4Zda3H4ytxawfeVyKjGzbUV8lOIkvUZ%2BfvkrZUerwv6fQnDY4uVCKpQFCDNYMkpSCe97v7FAVr7z&X-Amz-Signature=9ecf59f0cc86c0714421ee3d794ed40bbd8d13efb00f3bfb26d5d164934ec283&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHD4D7B%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoT2%2B4f3UHni%2BtFzKrJajNigj2%2FYBJq9gW7m888loKbgIgHYBXiHLKAVeRKxROndgKaFdTSFyDIfEILtEoW4aTjS0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUu175mgHmZN7KHICrcA2PcmTpOw1nIqHu8vxmhnUYJ0tEeqrzcF6oNQpO2odSqElVUjSdHSiSetlTgcjNrHnuq6Xe01QkYJORfHMnBERfsnJdytnH2G%2Bl%2F4lkARsHMl39klRRyGAvCU804XdYv98y867rLvaiGhKDBxcSZdPxTKpWOs%2Fv4erbBoZZZFePV8FXlrm2R4s6vj0qZM%2FdjdkXmGsF8sCL0jHhqmVHCs%2B23pc9YfW4YgmsZSHZrSFElmlw8vu4%2BlNhzxPwPWfoKVLuRMo9mAyjRwfpuuxqce3zgYWH4%2FWp5G92ZCyK%2Fms5rtse9kWOiHN9IC6KOnMDGjnJLq75V2VEbBU7t%2FlkgFC1mLz5%2FXPZrgTRJTiLI2pMJfUHZ%2Fy3%2BWljLOeOaYc1rcslG1i0oABuR%2FmE5fspVEoAYm2SSwY4vjrtatUitMmHV0J0f2zG9ODbwm3KVi2h1%2FodbUFrxy%2FLBcFgwWI1WiK1yBSav2Yn5RUp%2B6RgQ%2BfiA%2BnraljaaFMVuPzkGSLRDenJm3TQmKFjgbWiPqrU%2F%2Ftne%2Bl4pT09d3PF4VsPk5tLgT1OM%2FdJzgPGWG4LNptA8%2F5LsK7KAD6S0cDosBlOaRLu%2F2%2F7BmY2UQ%2Bm7GqmWV%2BAZyAohcgDrx9DohmoaMJ66%2FbwGOqUBfuQmOnN7zPnMWTFErKGd0Yc%2FoBcXKzZHQiIssLzUSrTPVX1%2BlZ6ev2a2tDYpBLtax7%2BEJkWUfy%2FWn7fNEukOhnOAD3MnpL6A5qjG96JxPWAoZC0OfA7PevRUlOcz%2BD%2FZw8Y023kzKA4VkVls4Zda3H4ytxawfeVyKjGzbUV8lOIkvUZ%2BfvkrZUerwv6fQnDY4uVCKpQFCDNYMkpSCe97v7FAVr7z&X-Amz-Signature=ae707681df5bde576e679a8080a43c9959ee4d955a7a6ffbdb8b985adce13aec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
