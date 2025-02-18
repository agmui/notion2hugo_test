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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKYOYNO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAXIdgswbknJWW85azvIVlQ%2Flqs33ZjwddOCgUb0xNtoAiAHDyWzeCPFWsz00gRiPapDMBVWI8IiUpaX6dybzGi9pCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJKmgHqXWEtxGbR5KtwDdxmClNZecGcznoBY2CD5JiK56Al8K33vrz0lR89BpY2AKCV6QbUwicDsOHO2Ksu%2BJ%2BHIngWWpsJCNeEJLIrSD7t3ledbuxuEjvIlSnj1XeWjfdy4MA%2BA2nbEQL2WGHEKMVzSExCrrWiaHz%2Fv0kh5dz1mRjIJLvyTOmlXEgNDg2UzPQz3nbAFRGVgQM5YvkiAxoCU8o1yIAeQppJaU9hwRsgZbewJMetyQZIiLGWVolmUMWwKtHQiq%2BAov0GpoJMiF37AChPWE0iiO2d1e8hskeFNHyUQ20lX0Z1r9nNMLxy%2Fa%2BBob4iz8LvhqLu3nZPO3SB0Ywiazwm4Icv%2BbEGs9lQCWRN9lUrtd1fRdt3%2FGtEM7rUXQ7n3UMMxnk0I3umnVS1Ybak4s%2Ba1eQzsgMyCJk5D2ulAEjB7VpkZCBkc453tSVcC7AZmgHsvDb%2FTwKKxxLRxrOSqTGmWdXUUImvI5oJp3Z16%2Bg%2F724ZLVjpQD1JL8%2BF3kAl5urGtdpuhr6BsXZegtB9c0yPCNnoAT%2FX97sxmLAyc0M1JDa%2BIN9yj%2BjWmkEuoHyL2LeqnZy8t6i0Scbl4Nkfcc%2FJD1eHzR%2B2ayD65zxMt04BU8uAVZSVFw1Qg%2BAzeTQW0C5UAAgUwg7LSvQY6pgE%2B0JcDkbB4w4wIpLx0RGCa4TqX07PVWt2jE6h6kUAIIRgPo1%2BbNrTYjx0Y%2BHu9kY%2FO8zrbOZJ5ixSyJZBORGT8E1FqOuD2yfWbzwgPDLAOvdtsCguiLRADXTQv5p5mUWNYx7iz94bulhvKiVeyF3npjNylvVttJjHIuSAnOyWmqL%2BJAOvMjuko8X3kD4Y7Yuy08olXP4dSkO9oaaHRHTxOiJCWWUPT&X-Amz-Signature=a5ecd3a974d49852fb572e4fccc5feb255c15d00159de3f3faec8118cd1f3a50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKYOYNO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIAXIdgswbknJWW85azvIVlQ%2Flqs33ZjwddOCgUb0xNtoAiAHDyWzeCPFWsz00gRiPapDMBVWI8IiUpaX6dybzGi9pCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJKmgHqXWEtxGbR5KtwDdxmClNZecGcznoBY2CD5JiK56Al8K33vrz0lR89BpY2AKCV6QbUwicDsOHO2Ksu%2BJ%2BHIngWWpsJCNeEJLIrSD7t3ledbuxuEjvIlSnj1XeWjfdy4MA%2BA2nbEQL2WGHEKMVzSExCrrWiaHz%2Fv0kh5dz1mRjIJLvyTOmlXEgNDg2UzPQz3nbAFRGVgQM5YvkiAxoCU8o1yIAeQppJaU9hwRsgZbewJMetyQZIiLGWVolmUMWwKtHQiq%2BAov0GpoJMiF37AChPWE0iiO2d1e8hskeFNHyUQ20lX0Z1r9nNMLxy%2Fa%2BBob4iz8LvhqLu3nZPO3SB0Ywiazwm4Icv%2BbEGs9lQCWRN9lUrtd1fRdt3%2FGtEM7rUXQ7n3UMMxnk0I3umnVS1Ybak4s%2Ba1eQzsgMyCJk5D2ulAEjB7VpkZCBkc453tSVcC7AZmgHsvDb%2FTwKKxxLRxrOSqTGmWdXUUImvI5oJp3Z16%2Bg%2F724ZLVjpQD1JL8%2BF3kAl5urGtdpuhr6BsXZegtB9c0yPCNnoAT%2FX97sxmLAyc0M1JDa%2BIN9yj%2BjWmkEuoHyL2LeqnZy8t6i0Scbl4Nkfcc%2FJD1eHzR%2B2ayD65zxMt04BU8uAVZSVFw1Qg%2BAzeTQW0C5UAAgUwg7LSvQY6pgE%2B0JcDkbB4w4wIpLx0RGCa4TqX07PVWt2jE6h6kUAIIRgPo1%2BbNrTYjx0Y%2BHu9kY%2FO8zrbOZJ5ixSyJZBORGT8E1FqOuD2yfWbzwgPDLAOvdtsCguiLRADXTQv5p5mUWNYx7iz94bulhvKiVeyF3npjNylvVttJjHIuSAnOyWmqL%2BJAOvMjuko8X3kD4Y7Yuy08olXP4dSkO9oaaHRHTxOiJCWWUPT&X-Amz-Signature=6515bcc74beb42d1e324474aad673ace745e2c60cb7246eecb183880965a1835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
