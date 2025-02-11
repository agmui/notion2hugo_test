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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZD3VOA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtf9OMSUtxPzmhC8iNzxPdo9cp0DxtegNg7XwTNtHNtwIhAImJb5DYQBg%2BOl0lSR9ohRmnXMUoynHgQGXo6JFMnJrRKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7IJFsNboDA19SHx4q3APSinOHCzKZZA49DzDInzpWGUDrwhhFrDEIpjo79MsnnJCKOK1PTdVv%2BEYF4ux0VEw5pfVN%2BRJ7lOX4RiCtLUupSUYgyc8jWeuqyLYkdZpSrG7cEHsWEm%2FnWdf0l8vppWSgP6EIko9NDe%2FsS8WZJdrXlCsZ4eUAV52I9K8jR75GvvIkDnfSxb3eG0wZgjkXztAu%2F2qyF89KO%2Bn59%2BBIx1Qg2EXrHF1ClUDVcZQ6CrSYSXuSQeU%2FnmEV%2FtOEwnkQifpAmIHMh203YzMSRoCJIzwOaS7acsqFgGRCr9DeJpweLIeRaN39ZMjng18uQ%2BO6ytKOMEB0U5Ndl5ejzbitu%2B6CtGxm9arJymd2DjSgG%2Bpfhwfs4QPHfkT6JU1AdC5feWSCUbcb%2Bw%2FR5IN9AaUTuVT8zQvvdK%2FsaIIBs4SwH4jxopdFuDxvJ8Chdfu9BLmO1iLIq9JC%2B7ZuEsenHbdp1SHWYLosBGF2F7SCcrxvlE5Bt%2B1SttMUu8Onfew2BxrvvbdifPFgKgjBc%2F7jUo7XWM3r46D77D%2Fhzx58PC1Xvrj9iriQQofmFUADmkwDawJ%2FfTabzef%2B0q4P22oC2pXDIgxMSCoBMgQy4YOMOWBANunSDIjBFqwJyudGAv%2FLBjD5wa29BjqkAUwjWAQe%2BQFr4WJeaK1ZflSiD%2Fnu5OiSRsXk%2B8%2FEqSe%2BH%2B1NtdcCPzbFUu2aHVtLJpyzVf%2BpDrzEyiIvHvbFhc9kqHQbVBJ2jrRi%2F9sb7F0y1THXipA%2FPEDCJveu2dTnarBOymcuBtOcPRABQ6eyKPftaxWlPMtrOaQIfxQqG%2FjSWsn8j75%2FG8hnPxLh56VHtyeOGBRlEQDdh7MOyBu3wx1lPnVM&X-Amz-Signature=c983b750c19fb5dd34f13df736cc6c4c6f71ae7da97f2ea380b0d772c10d7a57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ZD3VOA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtf9OMSUtxPzmhC8iNzxPdo9cp0DxtegNg7XwTNtHNtwIhAImJb5DYQBg%2BOl0lSR9ohRmnXMUoynHgQGXo6JFMnJrRKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7IJFsNboDA19SHx4q3APSinOHCzKZZA49DzDInzpWGUDrwhhFrDEIpjo79MsnnJCKOK1PTdVv%2BEYF4ux0VEw5pfVN%2BRJ7lOX4RiCtLUupSUYgyc8jWeuqyLYkdZpSrG7cEHsWEm%2FnWdf0l8vppWSgP6EIko9NDe%2FsS8WZJdrXlCsZ4eUAV52I9K8jR75GvvIkDnfSxb3eG0wZgjkXztAu%2F2qyF89KO%2Bn59%2BBIx1Qg2EXrHF1ClUDVcZQ6CrSYSXuSQeU%2FnmEV%2FtOEwnkQifpAmIHMh203YzMSRoCJIzwOaS7acsqFgGRCr9DeJpweLIeRaN39ZMjng18uQ%2BO6ytKOMEB0U5Ndl5ejzbitu%2B6CtGxm9arJymd2DjSgG%2Bpfhwfs4QPHfkT6JU1AdC5feWSCUbcb%2Bw%2FR5IN9AaUTuVT8zQvvdK%2FsaIIBs4SwH4jxopdFuDxvJ8Chdfu9BLmO1iLIq9JC%2B7ZuEsenHbdp1SHWYLosBGF2F7SCcrxvlE5Bt%2B1SttMUu8Onfew2BxrvvbdifPFgKgjBc%2F7jUo7XWM3r46D77D%2Fhzx58PC1Xvrj9iriQQofmFUADmkwDawJ%2FfTabzef%2B0q4P22oC2pXDIgxMSCoBMgQy4YOMOWBANunSDIjBFqwJyudGAv%2FLBjD5wa29BjqkAUwjWAQe%2BQFr4WJeaK1ZflSiD%2Fnu5OiSRsXk%2B8%2FEqSe%2BH%2B1NtdcCPzbFUu2aHVtLJpyzVf%2BpDrzEyiIvHvbFhc9kqHQbVBJ2jrRi%2F9sb7F0y1THXipA%2FPEDCJveu2dTnarBOymcuBtOcPRABQ6eyKPftaxWlPMtrOaQIfxQqG%2FjSWsn8j75%2FG8hnPxLh56VHtyeOGBRlEQDdh7MOyBu3wx1lPnVM&X-Amz-Signature=a72a04636d0eddcf94b0caccc1e83ffe15cb682ec726fcfe50aa1299e5a195f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
