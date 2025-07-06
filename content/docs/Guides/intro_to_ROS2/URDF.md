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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKAQE2V%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIAN41zaD1zC%2B%2FFkgJUM2NvL7S3Aa5h0dBSMfYlKwjYt3AiAUy3oF%2FKRNP%2B5ZuxpHlicmHQXSGqPf4EhnLmaTFcD5byr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXEBunMQlM%2BrBGkJSKtwD2UNo6rjVshQHIblQUg4fCCr67PshgTtWRtpN7KEEN2pGbjYHP2WFNt87SKJreLFzEnmIZdreLKpRzZD%2B8WhyjOwbo1yZBgxxvGEiAECh8tbqB6YIa4su7DeDaXYjFBvzGQgK7XlQ3kpVpjbwmHJCaDLAUZvPDjg3FGC2Y04LgTGATNmHZZiZ4PFHmTpXG1YJvOxfu2VJooS7wEXew3K8SDqThuKFSRGnlFUuSBtAoawyfjHnC%2BeFbMSyh%2BXPO3oE4uH2UJ9461Dpcs3SbmmaH4wX0Q4Vh9uC0E5NtuTMu8fz9IUmZTsHLcaWusG5Y2xEgbCrQLaE3gjRe2MaXHgVEjnYbnCFHwHduL6pYPvUoTKux70atSA1dKMMJFYlru6xleDeWOiwbENN89Etwa8D1NNQWegxPHG8ZMpZTm9%2BZIPPedQHFQvioKLEUls910ODw%2BSNsy0wmgok%2BqDWoFyUUi%2BMcBjSL2WToFMOdLfJzyogXMKr8wvQzDlqxKD7YSZW9pTvoEDJc4jx1zkttRQWkoxvR0NNuJn1CyleikBzP1QdpjVNYWjcFfORnXo92GIk%2FVSt3N7BsZXMORZO88PNDOGSZwFYzQoFsfTlM5MS1A%2BmkiMv0BCepBsh%2BrYwoNepwwY6pgEoYipxdk9Klday8A2%2F%2FzUVejYRRg9rXAO3txMatvSvFX4ewdTP%2B64BF7ZvgWlnt1E8fIsacj6jW5m2bFwEoqu2117e1pa4PqvVWvk1xjYzfScZVlIO1Szoc1PKd%2FRqbUSWAsmBerb6HLlbyi4F%2Fsh1ihku51fR54IdP9zaEoWYjeS1oz83RdiEsAkTt9wdKs%2FJJTVspCx6tck0zAUeRBkBX2iEh7Yp&X-Amz-Signature=028f6ec1fb9ad188094d8ed96c3b73074c0a6a7f02c6d2d63e134d219d80a16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKAQE2V%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIAN41zaD1zC%2B%2FFkgJUM2NvL7S3Aa5h0dBSMfYlKwjYt3AiAUy3oF%2FKRNP%2B5ZuxpHlicmHQXSGqPf4EhnLmaTFcD5byr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMXEBunMQlM%2BrBGkJSKtwD2UNo6rjVshQHIblQUg4fCCr67PshgTtWRtpN7KEEN2pGbjYHP2WFNt87SKJreLFzEnmIZdreLKpRzZD%2B8WhyjOwbo1yZBgxxvGEiAECh8tbqB6YIa4su7DeDaXYjFBvzGQgK7XlQ3kpVpjbwmHJCaDLAUZvPDjg3FGC2Y04LgTGATNmHZZiZ4PFHmTpXG1YJvOxfu2VJooS7wEXew3K8SDqThuKFSRGnlFUuSBtAoawyfjHnC%2BeFbMSyh%2BXPO3oE4uH2UJ9461Dpcs3SbmmaH4wX0Q4Vh9uC0E5NtuTMu8fz9IUmZTsHLcaWusG5Y2xEgbCrQLaE3gjRe2MaXHgVEjnYbnCFHwHduL6pYPvUoTKux70atSA1dKMMJFYlru6xleDeWOiwbENN89Etwa8D1NNQWegxPHG8ZMpZTm9%2BZIPPedQHFQvioKLEUls910ODw%2BSNsy0wmgok%2BqDWoFyUUi%2BMcBjSL2WToFMOdLfJzyogXMKr8wvQzDlqxKD7YSZW9pTvoEDJc4jx1zkttRQWkoxvR0NNuJn1CyleikBzP1QdpjVNYWjcFfORnXo92GIk%2FVSt3N7BsZXMORZO88PNDOGSZwFYzQoFsfTlM5MS1A%2BmkiMv0BCepBsh%2BrYwoNepwwY6pgEoYipxdk9Klday8A2%2F%2FzUVejYRRg9rXAO3txMatvSvFX4ewdTP%2B64BF7ZvgWlnt1E8fIsacj6jW5m2bFwEoqu2117e1pa4PqvVWvk1xjYzfScZVlIO1Szoc1PKd%2FRqbUSWAsmBerb6HLlbyi4F%2Fsh1ihku51fR54IdP9zaEoWYjeS1oz83RdiEsAkTt9wdKs%2FJJTVspCx6tck0zAUeRBkBX2iEh7Yp&X-Amz-Signature=952028e19a8f46e414a5ff6093d720c2f37a5ab770adeff1e50bcae3f5bad945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
