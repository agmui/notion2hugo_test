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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARWMICX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2On042CwCEJkYJHLi%2FK7%2BaJrceDH9ohT%2Fokq0tSuTkAiEA1%2BHcLGR10WgljN7BJH6YXF%2BZ7u5m94faLal%2BKBn8doIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKBArLzd2I8hik5yrcAwSRn45SWHMeFpl3T5o1gWMbMkZ6HO%2FtQtFy1vkUmLIOme5oxQj2A7vmoMA90AyStldbbq%2BdvL6ZMVBFUrcX31%2Byvmj0b%2FN4R5hyb%2BT9EPReqiGhSoj0h3fJF0ncH4Y7Fbzrfn2TnopCe8MCPVFk%2F%2FecdnygY7geS9e1811CjmnTcUMUCmb0geC%2BUDAMGk%2BtxVko7oIRrdS8ENqiF8wviLUtEvkDVrQpbTFyaiL%2FW2K1GVpW2a86%2B%2BnAhbgeub8Bxzhoq2f6cI4wtPXAhnAE21JCH8Z8eALMUhrF26LbKLLNACS1qRRDT%2FNUZ1MLSA3wsH9soA4DhWzuTv8zovjLNPjuvF5EJUYS95dkhdt1ZrJSkl0zvjfIISyOwEw2EaJ3BGSMdQaDmkrAAE0x3Eu8bJQgf65uwbKkiIQuaHf9q9xRenrXBiTwTtgQqVibfQ0hhPX0PkGOESeCpe0Nj2YpKtWfhg9q3xjX%2F4qiRBioBAShcWc8SWkyRDDVBfI4xyIpL7SbD%2Bbz8yvpf1N2nAlA0il62RjuUu%2BMkSkP3BpEbCZxb2O4U%2FqC1xyfmA%2BJRF1BmABeeZ0aSMrhfoY82QEFK0DZDCdHrMcYU3cxjwWSrquLOouIoeXtxQvAPlp7MN3o7cMGOqUBzizXDZW0aoNs4hlU8%2BgItucpyqSNQimWh%2BvQSCdi9uF3ilxx12oBscSkQtdGu6OkZxN6AH4j0kbr7PGi8w77MChXKbY3TqU2ELP9Vg33k1eRFUnRrZdJPb7I%2BZ5cqF%2FaC%2F%2BRRZPVmNcMlMkbddn5cGc3WXPXC73fnSUmN9gaPF65u69%2FaK7uyF4W4q6MWctdoyiKQ9ApoIjlMl58gGpF%2B12E%2Fuii&X-Amz-Signature=048ae90abdc67dde95913792b30ffaa630d32b41958b9eb8b50f2f27340f84e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARWMICX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2On042CwCEJkYJHLi%2FK7%2BaJrceDH9ohT%2Fokq0tSuTkAiEA1%2BHcLGR10WgljN7BJH6YXF%2BZ7u5m94faLal%2BKBn8doIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FKBArLzd2I8hik5yrcAwSRn45SWHMeFpl3T5o1gWMbMkZ6HO%2FtQtFy1vkUmLIOme5oxQj2A7vmoMA90AyStldbbq%2BdvL6ZMVBFUrcX31%2Byvmj0b%2FN4R5hyb%2BT9EPReqiGhSoj0h3fJF0ncH4Y7Fbzrfn2TnopCe8MCPVFk%2F%2FecdnygY7geS9e1811CjmnTcUMUCmb0geC%2BUDAMGk%2BtxVko7oIRrdS8ENqiF8wviLUtEvkDVrQpbTFyaiL%2FW2K1GVpW2a86%2B%2BnAhbgeub8Bxzhoq2f6cI4wtPXAhnAE21JCH8Z8eALMUhrF26LbKLLNACS1qRRDT%2FNUZ1MLSA3wsH9soA4DhWzuTv8zovjLNPjuvF5EJUYS95dkhdt1ZrJSkl0zvjfIISyOwEw2EaJ3BGSMdQaDmkrAAE0x3Eu8bJQgf65uwbKkiIQuaHf9q9xRenrXBiTwTtgQqVibfQ0hhPX0PkGOESeCpe0Nj2YpKtWfhg9q3xjX%2F4qiRBioBAShcWc8SWkyRDDVBfI4xyIpL7SbD%2Bbz8yvpf1N2nAlA0il62RjuUu%2BMkSkP3BpEbCZxb2O4U%2FqC1xyfmA%2BJRF1BmABeeZ0aSMrhfoY82QEFK0DZDCdHrMcYU3cxjwWSrquLOouIoeXtxQvAPlp7MN3o7cMGOqUBzizXDZW0aoNs4hlU8%2BgItucpyqSNQimWh%2BvQSCdi9uF3ilxx12oBscSkQtdGu6OkZxN6AH4j0kbr7PGi8w77MChXKbY3TqU2ELP9Vg33k1eRFUnRrZdJPb7I%2BZ5cqF%2FaC%2F%2BRRZPVmNcMlMkbddn5cGc3WXPXC73fnSUmN9gaPF65u69%2FaK7uyF4W4q6MWctdoyiKQ9ApoIjlMl58gGpF%2B12E%2Fuii&X-Amz-Signature=73bfee07022789b22eede4ad69cb2a1624e1caa8d5298ca19a870aba552e9fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
