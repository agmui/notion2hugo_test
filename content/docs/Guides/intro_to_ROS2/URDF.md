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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWF2XRBF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I0KOkWfhOHddn45EqHmqM251PYRblR4pC4Q6tJ771gIhAL3W1r2%2FDtnZkXhlBiZsDrSl52sJvwUviUs1vkvlw9AUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpPNOY0MBj3J0c%2Ftcq3ANtLoHX3luu2Sywf9tafc9kOlLio3K055xsJczfZwM4I3E8waAR2TkhwYfWz00KYoJLVFtTefStSG7fDEbDSSYmBpAPt0h5BoEykx2sXORErtxkL41DhtLrMbZpXQRAJqIJIOF%2BzdKGN7QqxGXrv8Fh2Q3zZ%2F285Ph8qSiyx7sDJWd0ebF4G9WfDgbTlWP2U%2BZ2KnRIsixWfifJ1u0I6tLa%2BKBVj3jMcBtlqVwEM4Aoridg%2BcM6gTLLhY1K8SCg4icaISp2EzlQnrFtdlwcFvrrwk5HPMKJSLwP0Ih1x6%2BYA3rT24akBwWXUeygMcN9%2FVm45wWRsm3C8Vjzeru0XfwJIZWpsX7SeFHtdkIgPKRUWUjZGDnoPaKUMNxwkySHwl3poZvUWQYwCdvuUhZOccMXtAygGuNwkE3v%2FAGcREoRCuzkjzWuziqJGSm4exYc0%2FY1gZU4SPqoRsiLl%2FK1rNAX7Zqqfq1QKShLN8muySULtHy3lh2s0vdmsoG8YZXYxhLKVGOxBiEwrroK2DXfLZJOPKkEcKtf9bvQZWZS6tR%2BWZXrOR%2B6sZ9FsMw%2B18RsY3EvwG9JEWJ%2Bh6nar7WNwn4AEgOWlsXpRcK5iiKhFcT8eI7oMKWrOddplEBvmjDgzpfCBjqkAR2rxdhxJ5Olp%2FM4o0vdCtS4wpj4b4zy%2FfJVtU68ORa8IoRSaOADJbNHPiutIyzLglsJFCzW3dGltwS6%2FMo5nTY3ZrTrzBOUcpgHoGpaiRNtua73AnJ51%2FNtKZV%2FCUEiARQ72OkAgF4S3G11roA2RWTBwvqT%2F8mAKX9lIuHPPxktl9vDreOCsYum%2BKuKphjLsgZbfqfvkpKwaeFg2OcTry7ofg99&X-Amz-Signature=64b089d3b4d9d8e5e2145d8a70593416a3c790e3115a346337f54485e64498bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWF2XRBF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I0KOkWfhOHddn45EqHmqM251PYRblR4pC4Q6tJ771gIhAL3W1r2%2FDtnZkXhlBiZsDrSl52sJvwUviUs1vkvlw9AUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpPNOY0MBj3J0c%2Ftcq3ANtLoHX3luu2Sywf9tafc9kOlLio3K055xsJczfZwM4I3E8waAR2TkhwYfWz00KYoJLVFtTefStSG7fDEbDSSYmBpAPt0h5BoEykx2sXORErtxkL41DhtLrMbZpXQRAJqIJIOF%2BzdKGN7QqxGXrv8Fh2Q3zZ%2F285Ph8qSiyx7sDJWd0ebF4G9WfDgbTlWP2U%2BZ2KnRIsixWfifJ1u0I6tLa%2BKBVj3jMcBtlqVwEM4Aoridg%2BcM6gTLLhY1K8SCg4icaISp2EzlQnrFtdlwcFvrrwk5HPMKJSLwP0Ih1x6%2BYA3rT24akBwWXUeygMcN9%2FVm45wWRsm3C8Vjzeru0XfwJIZWpsX7SeFHtdkIgPKRUWUjZGDnoPaKUMNxwkySHwl3poZvUWQYwCdvuUhZOccMXtAygGuNwkE3v%2FAGcREoRCuzkjzWuziqJGSm4exYc0%2FY1gZU4SPqoRsiLl%2FK1rNAX7Zqqfq1QKShLN8muySULtHy3lh2s0vdmsoG8YZXYxhLKVGOxBiEwrroK2DXfLZJOPKkEcKtf9bvQZWZS6tR%2BWZXrOR%2B6sZ9FsMw%2B18RsY3EvwG9JEWJ%2Bh6nar7WNwn4AEgOWlsXpRcK5iiKhFcT8eI7oMKWrOddplEBvmjDgzpfCBjqkAR2rxdhxJ5Olp%2FM4o0vdCtS4wpj4b4zy%2FfJVtU68ORa8IoRSaOADJbNHPiutIyzLglsJFCzW3dGltwS6%2FMo5nTY3ZrTrzBOUcpgHoGpaiRNtua73AnJ51%2FNtKZV%2FCUEiARQ72OkAgF4S3G11roA2RWTBwvqT%2F8mAKX9lIuHPPxktl9vDreOCsYum%2BKuKphjLsgZbfqfvkpKwaeFg2OcTry7ofg99&X-Amz-Signature=1598c29caa04faf8f78905e585b7653ded188b6c09177b1c653b90ee6f2bb72e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
