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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSELU4F5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCfr6T1ZPM79DfIvEgcLwhmO5FVZ4y0LSJqAMtksFes2AIgYPu2o0QaIA65layVcNnqvEXqIzzl%2F1DYDbwIQAtTCCIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCY05Fi9ASpjPxcK6ircA8kbXvafNeJic21Cl26zkl0x89brla0Pg9pk%2BuEPvxZq3faDAAjGVdm1AxzY50wT%2BKB2ppKYIA9VceqcQXm3%2Bdza7gMewC9QomfeuJ8cU87huCWihrDdIM8%2B19XdUPmoQxWeWiJQUVzscIctkXxMM5Hm4meofPxnXR6NyAv7O1huoFYWuJpfE%2BDNVyfKGR4JJ0VSj77wQpEHSev07fmAEBCejeq8VO1FvdbicVVz37zcOvN8clg6sQ5ebv8rZG5MJDx%2F4Z2B07%2FA%2FBapPN5YVaOUml4Yqew%2FAXiaeNzucCPR10PyZYw%2BbKrvyDnDbd%2BAIOIEYDpWSn8lxyCMQ370J8RurWlEXBR4QjrK%2BNhvfbDxr4HabIVwdO629r%2FzhSrRrSkmuVrz36OvxGfPYx%2FOb9x0DUYNdMzoNFjxveFl0Jt1MtZM02GS8wpcmxPXar3Yq04Pm2%2BFNCn1%2BEcW1l1rmDxnA3zLU0KY9FMIbdUtEb8Sd7%2BmNMUrscsdNg7mBzIbltDpY61amv%2BjNiW8SiW2MQ7MzYIT5P4Xiw0E0bO8bcw9g9lsa%2BI3WJByhsbc%2FQ%2Bjn31yJJ0j6sVannN%2FhclOgp1ti1SUzmVcpyPjHxPtprmzs5mCNO1CR8mudDZwMKGN%2BL0GOqUBCx%2BMq8uelIbUnnP%2BAXdjUq%2FHCRcJTTcaggF2XX1OG2PtOQiwDFBAsYL0UeSxqK1pdyP1T6TbmWjz%2BeILBmJCsamA%2Fbsy1KgmgntnZOiEeBpFlt679l%2Bo0GEMAaCZUPSNyr0pjSfvg%2B%2FcS18IwQ4%2FgTmRJ9CK7ziz0jpUd81ciJ203CN7iVJv1IPPB9iA6ZGFn72BS6E59116ZLD1WSBsQUbAI0ku&X-Amz-Signature=3020caae02f84a158ff678757aa7643d583075abe96a0f2bf3fe465b6f743b09&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSELU4F5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCfr6T1ZPM79DfIvEgcLwhmO5FVZ4y0LSJqAMtksFes2AIgYPu2o0QaIA65layVcNnqvEXqIzzl%2F1DYDbwIQAtTCCIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCY05Fi9ASpjPxcK6ircA8kbXvafNeJic21Cl26zkl0x89brla0Pg9pk%2BuEPvxZq3faDAAjGVdm1AxzY50wT%2BKB2ppKYIA9VceqcQXm3%2Bdza7gMewC9QomfeuJ8cU87huCWihrDdIM8%2B19XdUPmoQxWeWiJQUVzscIctkXxMM5Hm4meofPxnXR6NyAv7O1huoFYWuJpfE%2BDNVyfKGR4JJ0VSj77wQpEHSev07fmAEBCejeq8VO1FvdbicVVz37zcOvN8clg6sQ5ebv8rZG5MJDx%2F4Z2B07%2FA%2FBapPN5YVaOUml4Yqew%2FAXiaeNzucCPR10PyZYw%2BbKrvyDnDbd%2BAIOIEYDpWSn8lxyCMQ370J8RurWlEXBR4QjrK%2BNhvfbDxr4HabIVwdO629r%2FzhSrRrSkmuVrz36OvxGfPYx%2FOb9x0DUYNdMzoNFjxveFl0Jt1MtZM02GS8wpcmxPXar3Yq04Pm2%2BFNCn1%2BEcW1l1rmDxnA3zLU0KY9FMIbdUtEb8Sd7%2BmNMUrscsdNg7mBzIbltDpY61amv%2BjNiW8SiW2MQ7MzYIT5P4Xiw0E0bO8bcw9g9lsa%2BI3WJByhsbc%2FQ%2Bjn31yJJ0j6sVannN%2FhclOgp1ti1SUzmVcpyPjHxPtprmzs5mCNO1CR8mudDZwMKGN%2BL0GOqUBCx%2BMq8uelIbUnnP%2BAXdjUq%2FHCRcJTTcaggF2XX1OG2PtOQiwDFBAsYL0UeSxqK1pdyP1T6TbmWjz%2BeILBmJCsamA%2Fbsy1KgmgntnZOiEeBpFlt679l%2Bo0GEMAaCZUPSNyr0pjSfvg%2B%2FcS18IwQ4%2FgTmRJ9CK7ziz0jpUd81ciJ203CN7iVJv1IPPB9iA6ZGFn72BS6E59116ZLD1WSBsQUbAI0ku&X-Amz-Signature=4c6e567e5e2348ef121a8d45e3929fdeda9dbabfb830ea61f0823d05a3f81c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
