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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=28fa6dc446a2d4feae303676f8fb71415378ec0badf702c83853f992e83c596e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEVO5AP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgTlvCeWjY8yLqyR%2Bb7WU7%2FKVmKDPkpWCQ%2FXSO%2FmxnlAiEAv6Re8TjtKj5PbdDs7dyYSai5nLC7%2BWvkD%2Bl%2Bhrt21p4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDPZ1rimU8CbDzNJPBSrcAyBJgkYgiF9MsaFoco18GdilIkGL%2Bv8zKqkygdrxwCLf0BnOUvHqgSMHRGHp93GaJAbRuGyfwuvxGlZm94gwlniSZUAFgDZyy2%2FMJT2aPHWoHyRfE5jkmkjwLmgalziBWdXH87MRljIuTw%2FXLvCSwP7ASSdctEcZ72EHsL6TjoZRZN5j4ZBnebiK5MaFKZygotyfiwHmUuQBRAPf1kZd%2FFyH%2FEW5d8npn4zZh173DM%2F7T0UcOZtJQgj%2Bd2ojRgta2FGqh1DPe5cixcc1VyStKknvJBpUdGiwoUJz%2BhH0gB22XQ%2B3RdggLWbh6c4NjOQniEGuQ%2F0nB6f0YfU9il55gA1HpSQ%2Fk%2FsUzempR%2FsKlPXrIXAfqmENdzU%2FhxKP9Zhe0Kpklfdx9wblJnjjESMtENDwIKYxaqgGHb5sq9HHXZtNE8%2FjiwZ5u1xSRBTL2L7Eb4AXyIDN2KtbOe2OhEyc2gcTYof556unG5KXDW7%2FY1Pik8RFyGLC2fGy57gdA2OWJDZZAq7ACPgG2VAwaxfi%2FXlwTs9c0lHC7kL3Jf9Ncb%2Bpa5A3GmEBQPtlIXz5xCXowRHoq%2Brw0Is%2F9DCEvZjbQUlTQTStdx2hBQFcJ5k1g6ST5mmC3gPWG2buOkanMMLclr8GOqUBz8hQN8pHPU6V6rsYJEF5YHWdS4ObHKsDy3uyBfo3awbwJTSv5YLtJuPgN6RQ2Y2T1OiB1Y8KI2u8Wy1lLcofLRbOfTQaBnotYsW2D5DKbJMXdQPHPHrxJclCsfGTLV7JDnnbegDR%2BjBljEMuFrdJVuBaeJZpkTnlV5pPvrWn1mm2Ft3lTSgg8Tk8Gb56n7rfgTbkY5evk%2FqpvNV0hYRlSpHHUy0u&X-Amz-Signature=26b04fbb4eb8f884b40df69119697d66658c71b00783f5d6640aacd64ebe4834&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
