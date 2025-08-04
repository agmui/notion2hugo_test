---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOX7UW26%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDoS2b09dlstLfb20DVtCNijfSnblQkNWevxyoBxQLDXAiEA1EwDZywjf7LTpzkOtw9j%2F9VP7wflQnMovi4pfrPqWB0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIlJXpxwNS5ykQ5APircA09u1HOqew3rlLuFiyalk4jK%2BWkFsV8Quzqz%2FhDu570Lu32Uv9YlKtUvezBlFidBGoOQsCV4foX4G3E%2FttKuav7qsCaTP2o4tjAzoxI3CcUSM4zk6f1WKd1KYIiu%2Fp1yMr%2F9yijw962DIFS%2FRq4jt5TtCuAeTfxDJIFbONQWMreQ9A9kGAsV7zEljwoZixrbwJXztOVcGUPVNAqZ9JlQIpU27lqVeUqfBQOmdEaUtHJIzKPL55onLtvmbJ6GDVFJ62NWfcjJbIuSG9kLi%2FEKkOgd%2FNOx1%2B83bRAUtST20WlwxXq%2BUjUtuAHFtV2JDB5Bb8E8o2prCO7x9v9NL6c6daeR%2BVfnUrP1TLWviOw874qBlZnsGf85qvf1PQ44sk4lOW4cuFXyxgDq6gsDxJO8gNs74tqrc5PNG1ile9aY0SRqDx2tubDX9vmDZXXQRBci2TCExjuIQR19UySstr16RQKfzkh4A3ubHl4K457rhZtqJuAIjELtLbsSJHAK5yVrPdkvRGx0nSwbzSFVMi37HkdVbIFlsGhevJfqEzcjTz3bronRq1fOhZCxa7ZiIUOEqLWhdgWsi8od3PKpng5nvl5mZGbjNyVYB3gbt0ZW4xiVBNNiEKdtwxG3B5YFMIH5w8QGOqUB2pYmNXnATg5OkKd9FMbj%2F7t0w4Iiz2grdWXLZ%2FZwX01kTdzqg1Wc2WHH%2FiZoGGXyvRkQNn%2FUuzay3rVw72dsZ8fEu0hTBUHbeLsDWMjKb%2BzdLEjRJg8XP6IqP3ZCmUhfEiD9ro3b960P6JMGEizaZfO%2FZ3gDhqOdDQAhqx8MCgv5xgpD3GCXyoQbb5jW%2BX1%2Ffuav4O7lOa%2BuBiGe2VaArt65P1k6&X-Amz-Signature=60b7874abc3ac3a520deb426759e84990c89bc25bfc203e1221d75b22639067a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOX7UW26%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDoS2b09dlstLfb20DVtCNijfSnblQkNWevxyoBxQLDXAiEA1EwDZywjf7LTpzkOtw9j%2F9VP7wflQnMovi4pfrPqWB0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIlJXpxwNS5ykQ5APircA09u1HOqew3rlLuFiyalk4jK%2BWkFsV8Quzqz%2FhDu570Lu32Uv9YlKtUvezBlFidBGoOQsCV4foX4G3E%2FttKuav7qsCaTP2o4tjAzoxI3CcUSM4zk6f1WKd1KYIiu%2Fp1yMr%2F9yijw962DIFS%2FRq4jt5TtCuAeTfxDJIFbONQWMreQ9A9kGAsV7zEljwoZixrbwJXztOVcGUPVNAqZ9JlQIpU27lqVeUqfBQOmdEaUtHJIzKPL55onLtvmbJ6GDVFJ62NWfcjJbIuSG9kLi%2FEKkOgd%2FNOx1%2B83bRAUtST20WlwxXq%2BUjUtuAHFtV2JDB5Bb8E8o2prCO7x9v9NL6c6daeR%2BVfnUrP1TLWviOw874qBlZnsGf85qvf1PQ44sk4lOW4cuFXyxgDq6gsDxJO8gNs74tqrc5PNG1ile9aY0SRqDx2tubDX9vmDZXXQRBci2TCExjuIQR19UySstr16RQKfzkh4A3ubHl4K457rhZtqJuAIjELtLbsSJHAK5yVrPdkvRGx0nSwbzSFVMi37HkdVbIFlsGhevJfqEzcjTz3bronRq1fOhZCxa7ZiIUOEqLWhdgWsi8od3PKpng5nvl5mZGbjNyVYB3gbt0ZW4xiVBNNiEKdtwxG3B5YFMIH5w8QGOqUB2pYmNXnATg5OkKd9FMbj%2F7t0w4Iiz2grdWXLZ%2FZwX01kTdzqg1Wc2WHH%2FiZoGGXyvRkQNn%2FUuzay3rVw72dsZ8fEu0hTBUHbeLsDWMjKb%2BzdLEjRJg8XP6IqP3ZCmUhfEiD9ro3b960P6JMGEizaZfO%2FZ3gDhqOdDQAhqx8MCgv5xgpD3GCXyoQbb5jW%2BX1%2Ffuav4O7lOa%2BuBiGe2VaArt65P1k6&X-Amz-Signature=13a1e175eb8517c4efe200d40e659a54d115a8f7a31283e8827e95e71beb308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
