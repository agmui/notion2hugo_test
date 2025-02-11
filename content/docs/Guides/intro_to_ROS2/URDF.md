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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ3QPJS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFjB1X2SriIeEzPnsF2kUzuGD9plhYvpeZT%2BqiYuM97AiEA9HmyTRQJd6YFj5igcBpdXZjTXI4G0gV%2FX0wUvpo66G0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdNZ5rAgka%2Ban%2F61CrcA%2BMyMaoY1A2uyqlZn5rNneZgX2d9VOSAvt8voreeZKs7JjG0Lc2C%2BV1p5b2CglYcadiFLLTpgnPWCquV5lw0NMV0FNx4ngijHUpgnbQSjvtXofMIBCpNmO%2BOMCHCLnozcZrvcy%2BiuVYaNpFh6MamyKZw2CdALJq8RubLacZfWt4%2F8v7yEOHHkJ42tilAVP8JpOf1UEaCR4TGy%2BisWaVNmovWPshNfilAnj%2BQwgYsS%2FHczRaPsotBb06Keqj%2Fc0WjlQONtiyjpQ2Yjd8XyrQ4ow2TXxb%2Bcrj1qfhQ33gEqp2eZ9xr1RSeWvJrn4zsaqz6GawCBtAuOZ4zcd0AZmJD5vW9C7jpCmgS%2B9bytMHJhFSeFJSXQr6iJGXSK7th2Q9FErBScIr2bGJlmaLYJzWQx95e7IqH%2FJEWUZkEqs7XCPsoX2orf3%2FZUGKWsPN5wQbe2G7I9qVrt6MKEhzBP172DNuasYu%2FjJZkEa61%2BhMw30%2F7HSILmcfjhs6I3pReKQzcNDG3vzBGsNo%2FO%2FAamHZb53mlBIpwv1rtYjKyfrMb44Dq5GKEBipCmjDhWMzj%2Fbhq0JgtgFsdGTCKLk2ayOHAkn8kcfl86j6RvOReRsE7dLJTRTqtwnCyLYG0ESdPMLjtrL0GOqUBF9nBRm%2FHNFEwCOWDsjdI825vJfKvXcbSarCzSwSuuhn8e4ntlIuP4yhVIoQXVk2yzcOkAd6Ljc0VXaaw7Ba081RfFld3IM6dCEX6WT0%2BfQt4I0psaJGpkt%2BlwQSwd%2F3pS5dgstCHmFtDu4tLMMVxM38N1PG7Q10n4BmMA%2FNGLLOgZTVLA7WFkyDd4xydWfu%2F%2FYwS0%2FTFmkNIhkR6Rkzs6nrqu2Fy&X-Amz-Signature=7bc596d25939631747432d2346ede3af381e94f3b168c3ce24281f773143bf57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ3QPJS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFjB1X2SriIeEzPnsF2kUzuGD9plhYvpeZT%2BqiYuM97AiEA9HmyTRQJd6YFj5igcBpdXZjTXI4G0gV%2FX0wUvpo66G0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdNZ5rAgka%2Ban%2F61CrcA%2BMyMaoY1A2uyqlZn5rNneZgX2d9VOSAvt8voreeZKs7JjG0Lc2C%2BV1p5b2CglYcadiFLLTpgnPWCquV5lw0NMV0FNx4ngijHUpgnbQSjvtXofMIBCpNmO%2BOMCHCLnozcZrvcy%2BiuVYaNpFh6MamyKZw2CdALJq8RubLacZfWt4%2F8v7yEOHHkJ42tilAVP8JpOf1UEaCR4TGy%2BisWaVNmovWPshNfilAnj%2BQwgYsS%2FHczRaPsotBb06Keqj%2Fc0WjlQONtiyjpQ2Yjd8XyrQ4ow2TXxb%2Bcrj1qfhQ33gEqp2eZ9xr1RSeWvJrn4zsaqz6GawCBtAuOZ4zcd0AZmJD5vW9C7jpCmgS%2B9bytMHJhFSeFJSXQr6iJGXSK7th2Q9FErBScIr2bGJlmaLYJzWQx95e7IqH%2FJEWUZkEqs7XCPsoX2orf3%2FZUGKWsPN5wQbe2G7I9qVrt6MKEhzBP172DNuasYu%2FjJZkEa61%2BhMw30%2F7HSILmcfjhs6I3pReKQzcNDG3vzBGsNo%2FO%2FAamHZb53mlBIpwv1rtYjKyfrMb44Dq5GKEBipCmjDhWMzj%2Fbhq0JgtgFsdGTCKLk2ayOHAkn8kcfl86j6RvOReRsE7dLJTRTqtwnCyLYG0ESdPMLjtrL0GOqUBF9nBRm%2FHNFEwCOWDsjdI825vJfKvXcbSarCzSwSuuhn8e4ntlIuP4yhVIoQXVk2yzcOkAd6Ljc0VXaaw7Ba081RfFld3IM6dCEX6WT0%2BfQt4I0psaJGpkt%2BlwQSwd%2F3pS5dgstCHmFtDu4tLMMVxM38N1PG7Q10n4BmMA%2FNGLLOgZTVLA7WFkyDd4xydWfu%2F%2FYwS0%2FTFmkNIhkR6Rkzs6nrqu2Fy&X-Amz-Signature=6c84839908b07cd76ee45cd9a5810eb2d5dc229be23e17bbab01a7b79e36e526&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
