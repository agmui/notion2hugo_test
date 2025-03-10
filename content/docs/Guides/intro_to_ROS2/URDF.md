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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMHZESU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGP5ffXckRM866WdxH23P0LzRQyg%2BcK%2BeXv3V3nMzCw%2FAiA9u%2B5gJqjssI2U7FuifLlDHEf9ws%2BODt3A6TiBv1DcmiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSV%2FLuWvorVxo%2FWJTKtwDhrPrd8n7T98A2wFho%2BNplpQ7%2FIuAPT1gehk%2Fk8ggA3fzN0bfQJTsILxB3Ri28rzVHYX1ZbnEdOeQmk4D90AuLncFOlPWxsYvm8E2g%2Bt6lN89%2FEd5MRY784Ic4CNTHus%2BrPDztFGHEVtsyVOf5WfegTZHNk5Jlb4uufpC0j0DTkiqbClGV3Ruk5BScDdauVJ38QFBLqHkm5lFVZ7EXlYL8AsZCch75pWA8sWUG7RSt6rNjdNQrQDdDzGM0BWMAX0E7WNbtgsshSPZz33WdN7hCAyZAr0u6PvS1YyHqaI%2FaG%2Bz8pU49cE0zgsVibslQeuryY9mEzR1XoZKPCQkgah6cBA%2Fb9MKydFwcr04XgKHvnpFUMGi2mrgb3qqHpimv5OeRqp3Re6EoU2mc5wvPZYYwjduJVRa%2BRgblMOr9V9AZ0O3oGSi8xtRaV5GxM57Gz2CkhaTm%2Ff54xDTvapiaWqDCYhTG46kFucRdXH7yphP9QKrD2aKMKya8nab65sBMoEdMKortaTy%2BWOldtSP3KfaxC7Y7ktwwAe7WfkhUugXuMFK2LrqIv0teXedcR%2FquZWw9gR4DuK4bVfj%2Buoa5aMKr%2BZl2JZvU4I14Td499d85%2BOZMbRqpuO3ZatS1eowyIq7vgY6pgHKeBrGG8%2FSKIV0cndRItkI6FiDTne%2Bx154lmqPdurKaoDzpEE16tScDaEIYL0iYOwOrUPTBh1ZjoMl1xMgfjS1WLzDSpmlaJT6WQxKNdcKA2J%2BaWiE2NgpWEnWgNG86Pcd3VTgoy%2BocG5kyEt8N%2BfUGqtsrEegCPVbvlXM6%2Fjwxql12keefXOhtcrR%2BEVRFariRymIop4xxJ3tt3L5Wn5b7kEA99zS&X-Amz-Signature=4cff5e2c261e78c78506531f02555c974a1b0b4e63231f6c8c1b150409398373&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMHZESU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGP5ffXckRM866WdxH23P0LzRQyg%2BcK%2BeXv3V3nMzCw%2FAiA9u%2B5gJqjssI2U7FuifLlDHEf9ws%2BODt3A6TiBv1DcmiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSV%2FLuWvorVxo%2FWJTKtwDhrPrd8n7T98A2wFho%2BNplpQ7%2FIuAPT1gehk%2Fk8ggA3fzN0bfQJTsILxB3Ri28rzVHYX1ZbnEdOeQmk4D90AuLncFOlPWxsYvm8E2g%2Bt6lN89%2FEd5MRY784Ic4CNTHus%2BrPDztFGHEVtsyVOf5WfegTZHNk5Jlb4uufpC0j0DTkiqbClGV3Ruk5BScDdauVJ38QFBLqHkm5lFVZ7EXlYL8AsZCch75pWA8sWUG7RSt6rNjdNQrQDdDzGM0BWMAX0E7WNbtgsshSPZz33WdN7hCAyZAr0u6PvS1YyHqaI%2FaG%2Bz8pU49cE0zgsVibslQeuryY9mEzR1XoZKPCQkgah6cBA%2Fb9MKydFwcr04XgKHvnpFUMGi2mrgb3qqHpimv5OeRqp3Re6EoU2mc5wvPZYYwjduJVRa%2BRgblMOr9V9AZ0O3oGSi8xtRaV5GxM57Gz2CkhaTm%2Ff54xDTvapiaWqDCYhTG46kFucRdXH7yphP9QKrD2aKMKya8nab65sBMoEdMKortaTy%2BWOldtSP3KfaxC7Y7ktwwAe7WfkhUugXuMFK2LrqIv0teXedcR%2FquZWw9gR4DuK4bVfj%2Buoa5aMKr%2BZl2JZvU4I14Td499d85%2BOZMbRqpuO3ZatS1eowyIq7vgY6pgHKeBrGG8%2FSKIV0cndRItkI6FiDTne%2Bx154lmqPdurKaoDzpEE16tScDaEIYL0iYOwOrUPTBh1ZjoMl1xMgfjS1WLzDSpmlaJT6WQxKNdcKA2J%2BaWiE2NgpWEnWgNG86Pcd3VTgoy%2BocG5kyEt8N%2BfUGqtsrEegCPVbvlXM6%2Fjwxql12keefXOhtcrR%2BEVRFariRymIop4xxJ3tt3L5Wn5b7kEA99zS&X-Amz-Signature=a3455b77048ee50f533f79a534d3394447e2e66729bf57f9bd71e7869b63e794&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
