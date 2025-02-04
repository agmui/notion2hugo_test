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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCZUCQI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCID0UT11C5nxe26Q5AObu8omRzMn4xDO8qfXgKQsoIYEAAiEAg6Uo0x%2BsOZI9wCu%2BSzKN5EgS9FX2XJq49%2FvnXmYPpUQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNFz7mV0LOiRuKi4%2ByrcAxRjzroBeqV3UMDgu2U1tUP1PuVPNS7bC2gaP6oaLwNMuvoLIen3CpsUqmJZxCn7HzPRwAmv%2BVHZ99eBTM4BH7WwgdMJMRr%2B3fgfkCe94XbH%2BA4xpxJAck0maUQFfqW81qO1gswhOOdvxxAakz3XlsE%2Fbb5uOWxbLqR4eUTLwwIxg8OCKQnF7wQCAl2yoWIIAU5QudtbkA1QE6szI9PYiksZRT42UKxLCcqbwH6HNkAhWjpB0lyhf0Xp3gd313yUFV4GlocjJ%2B6ayX5E%2FVNTY4NsglrTXoEpmeuyRRxtphxf%2F2CIlCKypiVganjDIFPyjnsfKwDAAtuUbz5wyPl%2BVrOj5hv%2BDiekuNAmM6%2F%2BmQkyUy0WREQ82pimp8m9gyBza%2Faj%2FuiSFiOnmd%2Fdt9RNMWo%2B81HwYZFOkMYg3aYUBBDqGdHlm5rgUk6kZLLJKxWZrg265syl50bnwTrWUrhPRNiBzOBCH5deayvx%2FITwViiaPoqEDh5eTxKjMizP9k7NoqFkJoojAcVr5tMyQj23fjCSfMJK2lrtUiB%2FiSibs4sTz3Q00WRCDKbrEynv5BnK34ZMnICtGHDU8GX3yhf3C4%2FMpLx3dSy0VfnWPIiYKAjtCaeILngc4RkJ05xaMJi%2FiL0GOqUBr9tkqniEt%2Bu548z6c0Z3gTEtT%2B5qDVQyJr%2BzUxSu%2FL0AjsFmEDU7VP9HsDh6zHOa2MVkPLOIp1JZ6bC3NuHuutHuCDIdTYvRYY%2FfCetqOwNn8n4MdG9WyQlnsjgsTmJovkUOBDH0opbh3tSL2RrqIv3v1Rzy6l6dYo%2BzjxmeBv4xvFkicxznHcUI8WqhcBAtNViroOddkyl7lJYEv6xJEhzzpK0x&X-Amz-Signature=2ebc84f2718a4daffb7703bc0f65d992ea4f03770ba59318cbc6c4d3128afee2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCZUCQI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCID0UT11C5nxe26Q5AObu8omRzMn4xDO8qfXgKQsoIYEAAiEAg6Uo0x%2BsOZI9wCu%2BSzKN5EgS9FX2XJq49%2FvnXmYPpUQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNFz7mV0LOiRuKi4%2ByrcAxRjzroBeqV3UMDgu2U1tUP1PuVPNS7bC2gaP6oaLwNMuvoLIen3CpsUqmJZxCn7HzPRwAmv%2BVHZ99eBTM4BH7WwgdMJMRr%2B3fgfkCe94XbH%2BA4xpxJAck0maUQFfqW81qO1gswhOOdvxxAakz3XlsE%2Fbb5uOWxbLqR4eUTLwwIxg8OCKQnF7wQCAl2yoWIIAU5QudtbkA1QE6szI9PYiksZRT42UKxLCcqbwH6HNkAhWjpB0lyhf0Xp3gd313yUFV4GlocjJ%2B6ayX5E%2FVNTY4NsglrTXoEpmeuyRRxtphxf%2F2CIlCKypiVganjDIFPyjnsfKwDAAtuUbz5wyPl%2BVrOj5hv%2BDiekuNAmM6%2F%2BmQkyUy0WREQ82pimp8m9gyBza%2Faj%2FuiSFiOnmd%2Fdt9RNMWo%2B81HwYZFOkMYg3aYUBBDqGdHlm5rgUk6kZLLJKxWZrg265syl50bnwTrWUrhPRNiBzOBCH5deayvx%2FITwViiaPoqEDh5eTxKjMizP9k7NoqFkJoojAcVr5tMyQj23fjCSfMJK2lrtUiB%2FiSibs4sTz3Q00WRCDKbrEynv5BnK34ZMnICtGHDU8GX3yhf3C4%2FMpLx3dSy0VfnWPIiYKAjtCaeILngc4RkJ05xaMJi%2FiL0GOqUBr9tkqniEt%2Bu548z6c0Z3gTEtT%2B5qDVQyJr%2BzUxSu%2FL0AjsFmEDU7VP9HsDh6zHOa2MVkPLOIp1JZ6bC3NuHuutHuCDIdTYvRYY%2FfCetqOwNn8n4MdG9WyQlnsjgsTmJovkUOBDH0opbh3tSL2RrqIv3v1Rzy6l6dYo%2BzjxmeBv4xvFkicxznHcUI8WqhcBAtNViroOddkyl7lJYEv6xJEhzzpK0x&X-Amz-Signature=3f2d654ee9ade1766faa74ec48dc7d4be1253d8bcc515705d86f49d777b605f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
