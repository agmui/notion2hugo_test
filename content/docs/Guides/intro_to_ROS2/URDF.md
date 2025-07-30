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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57ACVKM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbTQUij%2BpnlyJPctvmpkz4VVVqrPTlYcc6VXUNipXt8AiEApHPZ0FGzaHB5WmPzIEwj42HoQAOjWdXVFyfSmazGPuEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh5ktkt9Nx4pJcRpyrcA5u630MATOTCUJIqzXnyMazu309Q0eSc5KRyoUez72i4deuYjwii54KzX%2FDunInWKBegVaS%2BUlq8eOo55f5X3zyq%2BhdgL0mrOy1GtT3GQwQaV9UuoFOhsaI%2BgUjSpa1WWb3vPPB7Mn7ITU7gVgc%2FZcGyh6GoeZqSwiyoQVzL7a56HCWqMuimJnyz8teszbIkPQQu4WW1lO6Dk1ro57ymFJRfR18NQZyDf7Kz%2Bx14KGChYzDsNMiCbgCRnsdt0IreZ6Bbs5pMOWgbzDdH%2BCblcSfczPrILJMtzX4VP8HOilQsgEvj5LDHytUtB51mg8rEFdI0vwoBdVUwAJN93gmSVRRGuJLfXSKn11la9W%2F6uFeIR6m%2B%2FVhKj%2B%2F5uZe8A2wGawaLhDNaJxY5nBjbUinUBVmQAxSVrBGuEnEFbvchKKlnQX6PaYHJFksvGjCIN%2Be2%2F9FBbvMyOmNhn5ybRyKpuKPaB4bP2cFx0hupvUjbAlVFqRddzQaZitnIX7ujvbuDDqRLM6V%2FKSx6qfOeKpTnL7GEz3MHT9MlfZTI%2BJYVEMOllPFQjE5cvhoMcdiC1v6vvR6A4ZbeiHJQQgEEWVKXP%2FyXUeB866bNbo0PT7twa5Msmn0guedkitXiH48%2FMMnwp8QGOqUBWbtkAd5qj%2BhnYNlZjrU1pjUnZ6x%2F%2B9L8NzHmwqg%2BJBn%2FJTGphuT6eHgsXshW%2FIE%2BgDLENDCnwlGhhok5s94RX%2Bjd0tKyEOjNyWBelDBgfgyXhqSga3Epq2UAetNT0udEGcUKUqqI%2B3pgkq%2FkoWv%2BP4B9oCDQk%2BcgumDW4z9wjIWeReCtMoyKtwnBLOFrtsGEIFO%2F7Pi2avO%2BRTGN4sTPzS4Dd6sa&X-Amz-Signature=ef9977af4cfbce506f4eb4c72fb98f8b5522e75d4818846186c30355a0d28be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57ACVKM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbTQUij%2BpnlyJPctvmpkz4VVVqrPTlYcc6VXUNipXt8AiEApHPZ0FGzaHB5WmPzIEwj42HoQAOjWdXVFyfSmazGPuEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh5ktkt9Nx4pJcRpyrcA5u630MATOTCUJIqzXnyMazu309Q0eSc5KRyoUez72i4deuYjwii54KzX%2FDunInWKBegVaS%2BUlq8eOo55f5X3zyq%2BhdgL0mrOy1GtT3GQwQaV9UuoFOhsaI%2BgUjSpa1WWb3vPPB7Mn7ITU7gVgc%2FZcGyh6GoeZqSwiyoQVzL7a56HCWqMuimJnyz8teszbIkPQQu4WW1lO6Dk1ro57ymFJRfR18NQZyDf7Kz%2Bx14KGChYzDsNMiCbgCRnsdt0IreZ6Bbs5pMOWgbzDdH%2BCblcSfczPrILJMtzX4VP8HOilQsgEvj5LDHytUtB51mg8rEFdI0vwoBdVUwAJN93gmSVRRGuJLfXSKn11la9W%2F6uFeIR6m%2B%2FVhKj%2B%2F5uZe8A2wGawaLhDNaJxY5nBjbUinUBVmQAxSVrBGuEnEFbvchKKlnQX6PaYHJFksvGjCIN%2Be2%2F9FBbvMyOmNhn5ybRyKpuKPaB4bP2cFx0hupvUjbAlVFqRddzQaZitnIX7ujvbuDDqRLM6V%2FKSx6qfOeKpTnL7GEz3MHT9MlfZTI%2BJYVEMOllPFQjE5cvhoMcdiC1v6vvR6A4ZbeiHJQQgEEWVKXP%2FyXUeB866bNbo0PT7twa5Msmn0guedkitXiH48%2FMMnwp8QGOqUBWbtkAd5qj%2BhnYNlZjrU1pjUnZ6x%2F%2B9L8NzHmwqg%2BJBn%2FJTGphuT6eHgsXshW%2FIE%2BgDLENDCnwlGhhok5s94RX%2Bjd0tKyEOjNyWBelDBgfgyXhqSga3Epq2UAetNT0udEGcUKUqqI%2B3pgkq%2FkoWv%2BP4B9oCDQk%2BcgumDW4z9wjIWeReCtMoyKtwnBLOFrtsGEIFO%2F7Pi2avO%2BRTGN4sTPzS4Dd6sa&X-Amz-Signature=88a50cefc25918eaff6578b630c902897f5b1007b20420f09d5960d155470ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
