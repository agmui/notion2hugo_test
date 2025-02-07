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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBK6GZS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICJFQGCsGAxBJd0ig%2Ff7NpKuxcnOKwbf2cieE37n2WIuAiEAx69%2B9v52aL43PoK%2Bv%2FfbnlRT8Nbf%2FoinMYjKG%2F1hJ%2BQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGbzUsCvJsvTst%2FsoyrcA9OaaFGPwmMaKD24jxSo%2FLdK5hDv48fYk6E%2BwW%2BjYRo1vNTEypuLu1oMPiHUYBEVukbsHND7JcUltJhXj6W201pfoWIxZaYuZ7gD2e22oMPGP72XvFB5SPO1hhk0ObkimXGlaAq4aNph0pMLuRdYm55uC1c%2BV2ZEiY6xPVQo7mky%2BVYNk6rjqhSrZjR3suv0gbojOkUVPxk80RFy6okV%2BqMTdDg1o7HWYClIkCLL%2BuTMQFiDlfFd9thUWK7OFhCu4NXYs939FPNcnoiGOT1bklIOcYchuyZGZquggfemyM5Ke7W0NhtCjr9H0XWtM1B9hlVJipc%2BMMTQs7TZstVlZUxz8pakQq15eIZLy4gnnxPXhV6HV%2BN4yEZjkFM%2FbMOAXE1AmuvrfbVsGPK0Dk7ulXuwQMnr1%2BMoPCHS6o9V4jOR5k%2FCWGdZNXe9BOjCe48pmOg3novBcUYpffc1mVOYD62e8N9t7F4XRu%2FFZfX0d9tzl6TEnry4CBMMErd%2FwPq7Mh4EBsPw3Zw6lTlXHcKia4by4W8WCBuTpzmMBcPviySvl%2Bg2Z1cpwV%2BUlWAWK6F5%2FgJQ6blPzzrPMSYZpohgXmrUw4DDVTVML4K%2FTDJgCBLxXO0tFQ5U7VqI%2BJEbMOfhmL0GOqUBg46pe49dz0sPoXogOIE0HLO0PBsdICEHKaBf8%2Blftun%2BLcy%2F3uD5AS6yqIpQlCkwqoNygg5CgaiZbcmWp7ziEPz53eiIFLQ%2FGb%2Fnhp6D8RSrV3m8y2OnKv9EbiK71QfGGLZdZEB9x0kQShvcfMqrd12ls6q0NIwMb4N8rl5gfmeqaMHIAQ3ROTBAy0J4fq0WSQZsLAOwXjLroZeKhLJofvH7AgfH&X-Amz-Signature=1fa22fdaf4c680aa0301a1effbd6e3b301941df0ffb91622f04ba95ab5c5f8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBK6GZS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICJFQGCsGAxBJd0ig%2Ff7NpKuxcnOKwbf2cieE37n2WIuAiEAx69%2B9v52aL43PoK%2Bv%2FfbnlRT8Nbf%2FoinMYjKG%2F1hJ%2BQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGbzUsCvJsvTst%2FsoyrcA9OaaFGPwmMaKD24jxSo%2FLdK5hDv48fYk6E%2BwW%2BjYRo1vNTEypuLu1oMPiHUYBEVukbsHND7JcUltJhXj6W201pfoWIxZaYuZ7gD2e22oMPGP72XvFB5SPO1hhk0ObkimXGlaAq4aNph0pMLuRdYm55uC1c%2BV2ZEiY6xPVQo7mky%2BVYNk6rjqhSrZjR3suv0gbojOkUVPxk80RFy6okV%2BqMTdDg1o7HWYClIkCLL%2BuTMQFiDlfFd9thUWK7OFhCu4NXYs939FPNcnoiGOT1bklIOcYchuyZGZquggfemyM5Ke7W0NhtCjr9H0XWtM1B9hlVJipc%2BMMTQs7TZstVlZUxz8pakQq15eIZLy4gnnxPXhV6HV%2BN4yEZjkFM%2FbMOAXE1AmuvrfbVsGPK0Dk7ulXuwQMnr1%2BMoPCHS6o9V4jOR5k%2FCWGdZNXe9BOjCe48pmOg3novBcUYpffc1mVOYD62e8N9t7F4XRu%2FFZfX0d9tzl6TEnry4CBMMErd%2FwPq7Mh4EBsPw3Zw6lTlXHcKia4by4W8WCBuTpzmMBcPviySvl%2Bg2Z1cpwV%2BUlWAWK6F5%2FgJQ6blPzzrPMSYZpohgXmrUw4DDVTVML4K%2FTDJgCBLxXO0tFQ5U7VqI%2BJEbMOfhmL0GOqUBg46pe49dz0sPoXogOIE0HLO0PBsdICEHKaBf8%2Blftun%2BLcy%2F3uD5AS6yqIpQlCkwqoNygg5CgaiZbcmWp7ziEPz53eiIFLQ%2FGb%2Fnhp6D8RSrV3m8y2OnKv9EbiK71QfGGLZdZEB9x0kQShvcfMqrd12ls6q0NIwMb4N8rl5gfmeqaMHIAQ3ROTBAy0J4fq0WSQZsLAOwXjLroZeKhLJofvH7AgfH&X-Amz-Signature=54976e765bbe25f29814e906085c8ca9a5314b731a17bd6a8c0571f0014ebb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
