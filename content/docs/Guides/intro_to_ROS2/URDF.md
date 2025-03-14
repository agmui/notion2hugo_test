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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Q5H2F7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvkOZO4NMQ%2FBR8htKg%2BcaVJ3e3j%2Fw43rk287hjsb%2FdnAiAs9lPYUdFhZ%2Fh6l6SaPvCN6kBYvAigBkZ0IpbZQ%2BkV5SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCzzqAZKOmUJaPI4KtwDEfsW8fkzgzFiqPMHpqPeMwwSpARnHLATReJGNrcW%2FTHy83CB1%2Fx883sSRnaz9LtgKXMX0EOAFjz%2BtQMLrZDvvk3YRnLVNN9AW6%2BKFW4rTB7V85%2BDMjgIejIGm95r2Bzt6z9joVgAs9ZzOpWxCPJz6lzUF9TJD6VsDbU94ni0yMIX4JaVFaLXR1WTU6UFtU1MTTI8%2FRlK3jblwN7GoGjLvSkvWtAzuTcaL2m%2FNyhUabqGc7xhnSZqhcVIj11BO34LQklEMEZmNMy%2Fpy%2Frc7dQ3EOyrE%2ByxUmSuKNKNABa10acFUb9LzcIkVg%2FwxYbhEvdJsXlU8ai%2B0E0a004JEBeASgeV38RNNLih47ZJNpFyVgPR1aOgKFmG2S0%2Bgq3f9V%2Fr50vdRLIQmbrmsD9yMd2g%2FkLJr7Sneys8j82SfOIFiI0%2FjAgGUWpKG%2FifQ9LTs7OVyU2Dbmi9ix4kxPDNf4cSPCH8k7YfwqoR9irOLNeF09MunNBzNFpJ%2B3pE4LtJMJFzt5zQ%2B5jS%2Bsag30Pv9tt3K6ShRPjhdfl%2BwGzw1vqmMI1KLNaiMu8qkbtch9WfjKVF7OvOS7JKBzaT5MOjLapLGX3mCNzpF%2Bd2X5oTxsMkMEjWWmaoeyDnYLyEK8w97jQvgY6pgGcmgY99VFOeTAgjmnfRC44cPfl8sNvG3sW5IYXLOAI7lE5ArCYTDtkFXBsuhGujYCKs7xAqWwhY1xE3nx2lfKNzAztmSv2g8iA2bvbX1kMZpgVoAAMvSngJpZQZkMrPB0G9dtx488e4WWVrbQ24L070cg1j08pZzAqQsjmGWHn%2Byf0NKi0l92Eogq%2BE%2BJBrYUf4TQHTXWlvCWg4%2FX7jI2TLsyJiTWY&X-Amz-Signature=5c374808cf2eeb82322317179feff9ac4851c34547fd2f0e5b5f0c0a2731e283&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622Q5H2F7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvkOZO4NMQ%2FBR8htKg%2BcaVJ3e3j%2Fw43rk287hjsb%2FdnAiAs9lPYUdFhZ%2Fh6l6SaPvCN6kBYvAigBkZ0IpbZQ%2BkV5SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCzzqAZKOmUJaPI4KtwDEfsW8fkzgzFiqPMHpqPeMwwSpARnHLATReJGNrcW%2FTHy83CB1%2Fx883sSRnaz9LtgKXMX0EOAFjz%2BtQMLrZDvvk3YRnLVNN9AW6%2BKFW4rTB7V85%2BDMjgIejIGm95r2Bzt6z9joVgAs9ZzOpWxCPJz6lzUF9TJD6VsDbU94ni0yMIX4JaVFaLXR1WTU6UFtU1MTTI8%2FRlK3jblwN7GoGjLvSkvWtAzuTcaL2m%2FNyhUabqGc7xhnSZqhcVIj11BO34LQklEMEZmNMy%2Fpy%2Frc7dQ3EOyrE%2ByxUmSuKNKNABa10acFUb9LzcIkVg%2FwxYbhEvdJsXlU8ai%2B0E0a004JEBeASgeV38RNNLih47ZJNpFyVgPR1aOgKFmG2S0%2Bgq3f9V%2Fr50vdRLIQmbrmsD9yMd2g%2FkLJr7Sneys8j82SfOIFiI0%2FjAgGUWpKG%2FifQ9LTs7OVyU2Dbmi9ix4kxPDNf4cSPCH8k7YfwqoR9irOLNeF09MunNBzNFpJ%2B3pE4LtJMJFzt5zQ%2B5jS%2Bsag30Pv9tt3K6ShRPjhdfl%2BwGzw1vqmMI1KLNaiMu8qkbtch9WfjKVF7OvOS7JKBzaT5MOjLapLGX3mCNzpF%2Bd2X5oTxsMkMEjWWmaoeyDnYLyEK8w97jQvgY6pgGcmgY99VFOeTAgjmnfRC44cPfl8sNvG3sW5IYXLOAI7lE5ArCYTDtkFXBsuhGujYCKs7xAqWwhY1xE3nx2lfKNzAztmSv2g8iA2bvbX1kMZpgVoAAMvSngJpZQZkMrPB0G9dtx488e4WWVrbQ24L070cg1j08pZzAqQsjmGWHn%2Byf0NKi0l92Eogq%2BE%2BJBrYUf4TQHTXWlvCWg4%2FX7jI2TLsyJiTWY&X-Amz-Signature=baddebb5ea7ea110874d3024fa9432b09b9dd36af4667ccf1e98df891d7287bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
