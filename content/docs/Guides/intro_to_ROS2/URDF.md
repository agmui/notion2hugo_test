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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRDFZHK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHlUnzhbiWcaKbpYw4PSfLHPN9V8440JLpZFXIrGSpzXAiEAre%2B8udDO0VeV9FB7fjgsFP1wuAa4LaqFBqOa%2F%2FAiZM4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDfOjrdh6%2BstXqdyNCrcA78vd4vwGpbnqdui4EXBxlZ2fn%2Boqfd7%2FFxif6Dw4WoKw8KSp9bQ4%2BIbNiL3V6iMRDiV61Mr8s7fkjCSQg62MSanWsMHYvNnJvIEF4GRvLs8M0WSrloUcyofku945b8e2dkWVe46KL2A0kwwXSgw5p6V3s%2ByD9xjPQEYtUiK4B0Si8k9oQuyrGfkCO5FhMPCSSz6k0ccXNgOOJm7XKchsSY2oBhxTzNP%2BTzDpZhO9uihgxWF99YSA005fH2xa765AYxBpBQN4wIM2Uj94bYh4uIRjLbS1pTaYhA4TjL9Wn2Pi%2Ff5RQXQ91RiRhmy0MS%2FJP%2B1tiscpW4nKTC%2B88Z9DqSCKzyabDxseOv7kg1VkXbI6SVdm6Ym6K9vq1Pnp6GJua55qOkCr%2BGCpb%2B3x2MmRLP06hfu34ayyeVi6qGppEwqpd2pIHPTL37QfdQn%2F66uNyzYlR6wXmXq4c2LHTJWXqtRMrt2ijwSA2YFsRMZFpayimvsKjKT1X7IrOPBlyOwOkhjjM4Ngb3Bb%2BMh4rAe5B50goU7%2F3IF2PehqqzL9MkaOpmRCoH1%2BQC9Se6MPnTvp3NrMH2KIyiCD5BTgx2YoyUvr6LTsn94%2Bix02q9yL6klL2XX2FtVBfObG9ehMPa7jr0GOqUB5l%2FAqmNA%2BXuYP2BpP3aGK9TPCGw4yVz%2BPLct15NwEs1vS2zuWCe9WRDyBJulaxRysWIHGSgrcRuDn6fndCHUtWL%2BlKqxI566wjOm5xuSQvI69P2TCJgS54bKpkmBeLToqKjyMKXqmrEhgs0Pg8xIOVPosIz9gBeZWUXGoQXPBrNup7ks7FWJxqv8XfBH7pNGjxIp1EM7eImrS3LRLcQlLkl%2FarTe&X-Amz-Signature=209087cb854b9abc5d6d4542cd8c3f07ab76f0022ba82402f462452c57ad5ade&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRDFZHK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHlUnzhbiWcaKbpYw4PSfLHPN9V8440JLpZFXIrGSpzXAiEAre%2B8udDO0VeV9FB7fjgsFP1wuAa4LaqFBqOa%2F%2FAiZM4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDfOjrdh6%2BstXqdyNCrcA78vd4vwGpbnqdui4EXBxlZ2fn%2Boqfd7%2FFxif6Dw4WoKw8KSp9bQ4%2BIbNiL3V6iMRDiV61Mr8s7fkjCSQg62MSanWsMHYvNnJvIEF4GRvLs8M0WSrloUcyofku945b8e2dkWVe46KL2A0kwwXSgw5p6V3s%2ByD9xjPQEYtUiK4B0Si8k9oQuyrGfkCO5FhMPCSSz6k0ccXNgOOJm7XKchsSY2oBhxTzNP%2BTzDpZhO9uihgxWF99YSA005fH2xa765AYxBpBQN4wIM2Uj94bYh4uIRjLbS1pTaYhA4TjL9Wn2Pi%2Ff5RQXQ91RiRhmy0MS%2FJP%2B1tiscpW4nKTC%2B88Z9DqSCKzyabDxseOv7kg1VkXbI6SVdm6Ym6K9vq1Pnp6GJua55qOkCr%2BGCpb%2B3x2MmRLP06hfu34ayyeVi6qGppEwqpd2pIHPTL37QfdQn%2F66uNyzYlR6wXmXq4c2LHTJWXqtRMrt2ijwSA2YFsRMZFpayimvsKjKT1X7IrOPBlyOwOkhjjM4Ngb3Bb%2BMh4rAe5B50goU7%2F3IF2PehqqzL9MkaOpmRCoH1%2BQC9Se6MPnTvp3NrMH2KIyiCD5BTgx2YoyUvr6LTsn94%2Bix02q9yL6klL2XX2FtVBfObG9ehMPa7jr0GOqUB5l%2FAqmNA%2BXuYP2BpP3aGK9TPCGw4yVz%2BPLct15NwEs1vS2zuWCe9WRDyBJulaxRysWIHGSgrcRuDn6fndCHUtWL%2BlKqxI566wjOm5xuSQvI69P2TCJgS54bKpkmBeLToqKjyMKXqmrEhgs0Pg8xIOVPosIz9gBeZWUXGoQXPBrNup7ks7FWJxqv8XfBH7pNGjxIp1EM7eImrS3LRLcQlLkl%2FarTe&X-Amz-Signature=906e8c59dfdbf996d1dd077cff804642b058c9e50f3e0038b7c55f9538445588&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
