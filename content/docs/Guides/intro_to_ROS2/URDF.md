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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPIEIYA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHNfeuy3ASJJgGIkflqzHIOZmGY7GZ7d6YAwyY8mZHbIAiEAgZKfFjIyoNoxqAgHKVcc656Q2SoB1B%2Bq6rbBndWk8OUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ra0KqTGej81gMYyrcAzEv6GSZYQPRyRGWQrPyDiph%2FSr58dqPfoNAWH1iI4TNV3KjUhauSRnRzewnJPH96x29FE7l5MKwyaryx%2BpdzrpIqw15jYRCFpigY8Sg6YPW5NL5CbDFcza7Bvzv%2B5K2Gi0SnmtHKGYG%2F5MXRa2cKpDIVceXpFe30YIiRrievo%2F844cIh6ag9rSplqZ7oEPblkt7bwTZAFWCYdrehRJMapb2yZlfUFLBuS%2Flzz7DmBqUxzPXpZeWNZhIT1vN6xNFM1b6%2F0evVRrkogVzqDmA%2F%2Fj1y5Dvq96uqjrwnMnL0tWQSZGOPdSOwNjCSeYEaWAgAOUBhR%2Bk9q2wKFEMP2pH3UZ%2F91si3m2sDxB%2F4K5YTL3SP8o4tY6BGmv%2F2NR1N7wLW8QAc1sbEAci4iNZ5QsnnlJGc41rtFBJxHN9bNfDKZb330v9VCXKlrluJ7Bpj4SnZlv9gP9MZ7%2B%2B35PMhacCtw8vur564c%2B2WkcEtgqTBBVA%2BS2ZKlPmLVu6LZkshpbSUyIHFovfYy%2FnxUpgZPVUlw7Rvuendk%2Fc8IGCSW4A%2Fu3IW10r3msTlLDayu3RzDKwsakSBDycnmC9URS7t0FVawyY9X25XAmC8A%2FPkhK8KADhYaY8GoUSSZ4RI4NzMOft08QGOqUBMx9mjsuB68EUspQBEJLBcVu%2FaCe9FpIE3VWy88hsFdZ0uzbtUYsdUnvlf9d8v%2BlraOenEWkvM%2BizG0V16h3bpCB67GELrChLZUFh%2Femj67KAShN1TQaCPbIP2RFaIWjGNs5g2nSPFEaBdsd%2BkSJJOeoO%2Bmja4TFxs2%2B4D2F%2BngOJLMoApbUYWyGMlyIFRqyY%2BL50LhMuqthIM2BJU1E5rUmVzDSi&X-Amz-Signature=9c453b94da8d3e418db41f9cef94e6522ca9ee177a5487f8ab2b413289c2fd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPIEIYA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHNfeuy3ASJJgGIkflqzHIOZmGY7GZ7d6YAwyY8mZHbIAiEAgZKfFjIyoNoxqAgHKVcc656Q2SoB1B%2Bq6rbBndWk8OUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Ra0KqTGej81gMYyrcAzEv6GSZYQPRyRGWQrPyDiph%2FSr58dqPfoNAWH1iI4TNV3KjUhauSRnRzewnJPH96x29FE7l5MKwyaryx%2BpdzrpIqw15jYRCFpigY8Sg6YPW5NL5CbDFcza7Bvzv%2B5K2Gi0SnmtHKGYG%2F5MXRa2cKpDIVceXpFe30YIiRrievo%2F844cIh6ag9rSplqZ7oEPblkt7bwTZAFWCYdrehRJMapb2yZlfUFLBuS%2Flzz7DmBqUxzPXpZeWNZhIT1vN6xNFM1b6%2F0evVRrkogVzqDmA%2F%2Fj1y5Dvq96uqjrwnMnL0tWQSZGOPdSOwNjCSeYEaWAgAOUBhR%2Bk9q2wKFEMP2pH3UZ%2F91si3m2sDxB%2F4K5YTL3SP8o4tY6BGmv%2F2NR1N7wLW8QAc1sbEAci4iNZ5QsnnlJGc41rtFBJxHN9bNfDKZb330v9VCXKlrluJ7Bpj4SnZlv9gP9MZ7%2B%2B35PMhacCtw8vur564c%2B2WkcEtgqTBBVA%2BS2ZKlPmLVu6LZkshpbSUyIHFovfYy%2FnxUpgZPVUlw7Rvuendk%2Fc8IGCSW4A%2Fu3IW10r3msTlLDayu3RzDKwsakSBDycnmC9URS7t0FVawyY9X25XAmC8A%2FPkhK8KADhYaY8GoUSSZ4RI4NzMOft08QGOqUBMx9mjsuB68EUspQBEJLBcVu%2FaCe9FpIE3VWy88hsFdZ0uzbtUYsdUnvlf9d8v%2BlraOenEWkvM%2BizG0V16h3bpCB67GELrChLZUFh%2Femj67KAShN1TQaCPbIP2RFaIWjGNs5g2nSPFEaBdsd%2BkSJJOeoO%2Bmja4TFxs2%2B4D2F%2BngOJLMoApbUYWyGMlyIFRqyY%2BL50LhMuqthIM2BJU1E5rUmVzDSi&X-Amz-Signature=010b79cbaecbee658b63a2acb7245fbcadf5410a64e329ff2f88e36177aa7ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
