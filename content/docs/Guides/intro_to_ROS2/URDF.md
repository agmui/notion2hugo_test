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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVAA2OH4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVdw%2BTXgjT2etKNKksiJsmPYxwMpnraR7D3EfToddFCAiBMU9HiBu%2FrMGqjt78SJ%2F4i6V4czh7PlkE%2FCdBFjPmkwSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4%2Bjva6WErWeAn62KtwDCNLgl0BmV9Im9bHrxEgRt2KR%2Fy%2FbXZp01FwIAXdPwvbHILF9%2B8jKrV1RsNQ9DouIW8SkPkifBfSn1hD84lEykiiia3gT4%2FQ%2BDTmOq%2BzQWDzywYJRaREPjHVuVm%2BqfcUUEcg0blYVn%2FA0ViOaV0GgbTp4vVwfl%2Bj3DBYcoIelOWxXLb44NdkG2UdUBAEzdNliDWi9Fpe7oDMIEPmIypC2ACpiBjmCL9KA2KZzkmdEQxremNpdMIwYh5JVg3aDpKG8usVZL2MjQvgZRXcaofHp59DUhMWnUmD1dlpcIbtdsWppnSryekmCEEEL0cTv62k75OJ96qlPnSofiMNcDXWOsyvQlJBMFlBOIUTMefoomqwNTwc7FU%2BXFTPqVa33dDrqBaBgm5WUg5IKZ7UOQb6EugQhiYHlKLhpkhMHWv5D0OHvAXfmObbLFfXawHBKhx7T2xfw%2B3C9seq%2BCkl87dFav%2FaalLK2XGcbjHmLftPxMvyECBQOscL3GurnxtLcS4%2BDUiflmRjfdWZfPz7LV2M%2F8Y5S7ImBxM%2BOgCM4zRO%2FujBrXY0ljUUAqvqlAY68%2FrSl3gAFFfN%2Ft3ejTmqoiG9xbgW5G4RBTZPTft3vc%2FxNWdLpId0C9Lj3UCFrVEcwzJWwwQY6pgHJRZmTCoLcyShHQYR5SzYR%2FVKxzWJ2MNPiDtwc2OGRw3A1CpfTjKWi4u%2BI8nEOh33XDC9lENoTmfkDZ61QbkhHrZWROLGAxeCrSLMCJ76LswkAWkA%2B%2FNOPr3Uj5%2F0VyECTgOZSdFbRMQAhg0jjpHabbMjYb2tOajtSjJRZXhMFep2kTK1noxyyBi%2Fd3%2FF8RhpJKsqXAYO8WtJn88GoS9gSFU0%2FVQrd&X-Amz-Signature=540fa220d0c59afe0894f760a3c06ce64c44b3bf633b6da7d1f4432e70e27dca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVAA2OH4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVdw%2BTXgjT2etKNKksiJsmPYxwMpnraR7D3EfToddFCAiBMU9HiBu%2FrMGqjt78SJ%2F4i6V4czh7PlkE%2FCdBFjPmkwSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4%2Bjva6WErWeAn62KtwDCNLgl0BmV9Im9bHrxEgRt2KR%2Fy%2FbXZp01FwIAXdPwvbHILF9%2B8jKrV1RsNQ9DouIW8SkPkifBfSn1hD84lEykiiia3gT4%2FQ%2BDTmOq%2BzQWDzywYJRaREPjHVuVm%2BqfcUUEcg0blYVn%2FA0ViOaV0GgbTp4vVwfl%2Bj3DBYcoIelOWxXLb44NdkG2UdUBAEzdNliDWi9Fpe7oDMIEPmIypC2ACpiBjmCL9KA2KZzkmdEQxremNpdMIwYh5JVg3aDpKG8usVZL2MjQvgZRXcaofHp59DUhMWnUmD1dlpcIbtdsWppnSryekmCEEEL0cTv62k75OJ96qlPnSofiMNcDXWOsyvQlJBMFlBOIUTMefoomqwNTwc7FU%2BXFTPqVa33dDrqBaBgm5WUg5IKZ7UOQb6EugQhiYHlKLhpkhMHWv5D0OHvAXfmObbLFfXawHBKhx7T2xfw%2B3C9seq%2BCkl87dFav%2FaalLK2XGcbjHmLftPxMvyECBQOscL3GurnxtLcS4%2BDUiflmRjfdWZfPz7LV2M%2F8Y5S7ImBxM%2BOgCM4zRO%2FujBrXY0ljUUAqvqlAY68%2FrSl3gAFFfN%2Ft3ejTmqoiG9xbgW5G4RBTZPTft3vc%2FxNWdLpId0C9Lj3UCFrVEcwzJWwwQY6pgHJRZmTCoLcyShHQYR5SzYR%2FVKxzWJ2MNPiDtwc2OGRw3A1CpfTjKWi4u%2BI8nEOh33XDC9lENoTmfkDZ61QbkhHrZWROLGAxeCrSLMCJ76LswkAWkA%2B%2FNOPr3Uj5%2F0VyECTgOZSdFbRMQAhg0jjpHabbMjYb2tOajtSjJRZXhMFep2kTK1noxyyBi%2Fd3%2FF8RhpJKsqXAYO8WtJn88GoS9gSFU0%2FVQrd&X-Amz-Signature=fd6fabd65a8bae883e284a66212ef722a526aea96735d9217692a52cf4fd3e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
