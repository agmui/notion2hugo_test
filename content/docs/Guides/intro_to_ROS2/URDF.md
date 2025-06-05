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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3SKGD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBpjv2XLvgKiDexSCo0GI1f6H3M46Jk4vQ69cLhwVRi8AiEA%2B2T0VBjzC7%2BFlHKuvS3Yy%2F3g7OLNz73S0zDi%2FS7JZHIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ4XKFwzG6NqBk2hUyrcA3ytJ%2FZtd1pYsNh0tMtfkxQUC6H%2BIAxuSJHIErHFDsxADVkslZLu242o5FGprHvCER1UraTYg0GqiFGCbH1HAv%2FNsSW6WEWCzPELvXIXgZUIRD40%2FoSA1vX8uGdgfLmXLreJ3cM%2FxW4KsQsQCZWFCH1rregjYzposit%2FPkvnNbzSHEnMlTLEkWPbGNPJeB2tik6o8YagfvExWJer6fCrxPkVG7Tb05JGvkJJNxWm%2FdkpVriCHsunyclO5IGnDzpFsNQZVAJrJbxOloAy5gNHsg5JNFgTmdE9ZYAWBVTVO0BMg65q6L4NXkWCvmlpq2rgRRirZMlxzi7PpvjpFuBWk2wTk2peLDKqMCDxKR4n4w919RxNs58FtlubTxOp%2BRgfJY%2Fvm1QXBds0JcKvFH0TL86uSpF5SAKhGG1GP1ZMXIly7hPEmjSFuyHc1V0Ax2sCw%2BX1HXV19CoItdzkW4%2BYvMuCfdLTlefG%2Bxh5GpKEsBMY9hr55UhZteIE7kUd2gyqKzkF5%2FH0tLdJTqB7PKtvLsVg6kSDNVtWnCHGV7xcjL2NZBy5tS78SMHr%2FPhrjhqedtRUHk50O97OHuOk24S4j5UwyEsLq%2BClQefNMd16NACiEiKykDrU7CcF3F9bMJnqg8IGOqUBeaaWHS6ZVchHbH7PRg7543XWyOZedd5jZ719GUemhShlWhuYH0iZtzImuPeW0yxMPUfJi96rFr9FUbekO%2FzqpGFwI1FrdA1iX%2BB8yD8cc3mU6JN3g05LzvAUrej23IqbfDa2TvUcujISkHDrp5kv%2F2PgIHW0xXRYD02IAPA5ti9SsCSoiwo9AQZ5hwb4OkScWi9egkpTERxCouYhQoqCoge51DY6&X-Amz-Signature=3e78d815b6d00e381bab3c9fcc3a39c84e0aa4fb1d34a764dbffa26f5f8a517d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3SKGD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBpjv2XLvgKiDexSCo0GI1f6H3M46Jk4vQ69cLhwVRi8AiEA%2B2T0VBjzC7%2BFlHKuvS3Yy%2F3g7OLNz73S0zDi%2FS7JZHIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ4XKFwzG6NqBk2hUyrcA3ytJ%2FZtd1pYsNh0tMtfkxQUC6H%2BIAxuSJHIErHFDsxADVkslZLu242o5FGprHvCER1UraTYg0GqiFGCbH1HAv%2FNsSW6WEWCzPELvXIXgZUIRD40%2FoSA1vX8uGdgfLmXLreJ3cM%2FxW4KsQsQCZWFCH1rregjYzposit%2FPkvnNbzSHEnMlTLEkWPbGNPJeB2tik6o8YagfvExWJer6fCrxPkVG7Tb05JGvkJJNxWm%2FdkpVriCHsunyclO5IGnDzpFsNQZVAJrJbxOloAy5gNHsg5JNFgTmdE9ZYAWBVTVO0BMg65q6L4NXkWCvmlpq2rgRRirZMlxzi7PpvjpFuBWk2wTk2peLDKqMCDxKR4n4w919RxNs58FtlubTxOp%2BRgfJY%2Fvm1QXBds0JcKvFH0TL86uSpF5SAKhGG1GP1ZMXIly7hPEmjSFuyHc1V0Ax2sCw%2BX1HXV19CoItdzkW4%2BYvMuCfdLTlefG%2Bxh5GpKEsBMY9hr55UhZteIE7kUd2gyqKzkF5%2FH0tLdJTqB7PKtvLsVg6kSDNVtWnCHGV7xcjL2NZBy5tS78SMHr%2FPhrjhqedtRUHk50O97OHuOk24S4j5UwyEsLq%2BClQefNMd16NACiEiKykDrU7CcF3F9bMJnqg8IGOqUBeaaWHS6ZVchHbH7PRg7543XWyOZedd5jZ719GUemhShlWhuYH0iZtzImuPeW0yxMPUfJi96rFr9FUbekO%2FzqpGFwI1FrdA1iX%2BB8yD8cc3mU6JN3g05LzvAUrej23IqbfDa2TvUcujISkHDrp5kv%2F2PgIHW0xXRYD02IAPA5ti9SsCSoiwo9AQZ5hwb4OkScWi9egkpTERxCouYhQoqCoge51DY6&X-Amz-Signature=f3d8a39e386d47bb123e84e37ba904abbba526c6114c0122cec9cf399ce1134b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
