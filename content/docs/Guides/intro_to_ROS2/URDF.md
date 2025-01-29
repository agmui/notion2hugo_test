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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62W5XYI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCnycNhwN19WbB5SHn%2BxTyko3o39TqxNnhsp4tmmJ1o2wIgJYflr9sMaghwCaf2iEqwKNNWpc%2Br%2B3d74NolwLf3GxwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ%2Bbv%2FtUOQ2dbKWmyrcA5NjN4kG0ytZFL5x3%2BgGWabINtPl4uhXFSjQoDYG8NHl2BbmL371XcSi1la%2FpXQkiVMvEc%2FH17EA0EKrngWMNJsVJCoGjs2qes%2FhlhC7Jw%2BLV6DEL7cA3AV6deVVcpsr%2BER6DdcN09z7FpzW13J8tcDhN9CKRlsAhxsLejPKwMJRLo2Ts7tXJ%2FfBKYBlBVPvMI8oWgwcRwnxzolSYtaBAMEjlNyNN9a2OM4HBJNy0UuIifOWwqFlSYz4DuSpojF0q9%2Fi4a9V1UumgFCDVpC3xaKFQoNOKbAeQvw8ebB7a1ioL2ei%2FgkvUe2qW63DCXEUIpbogpJ4J63T6Nc6WcgR1AmWyBZhNc7JLncgbEnfKeEsaIfj1S1nIWRfCSmKpdgXA8RRH7nTSOAill7s41sucT231D6RfaXvlbPQo%2BK8rAFc7XhCcSsUk5v5fr3Q4VJzDf%2Bwjmp7Csi%2BbXo%2FLGM4GX8NoqqkhOybpjfVPbcG5pkayA20uW21dHf0CNTfDLX2d4s0CEN4oQL3yhrNTA%2FwSgCR%2BjEqqJVvk5AbB%2BuD88APecJh5kZLe6w3tmbf8OJUZZTWI99t4J%2FQbHOiMQiNaK6pl4AonKbkdLIh95uZ0sE9SzZOwpTbySsQicHbMN%2BE5rwGOqUBXoFvUfYD0KM57%2BKWlatyCt21BAPnOR6bKDD6sHny1WnRXyi4%2F4v1vtpj%2FMy3yFMnfcyo5ZOYwzvgYeRX9Y8FUqr4larueB%2F2rZPqTVyC828L5AnrOigAa4NJm6d7DiOnz6jh0A%2Bl%2FlutpHLHkLsxsowpOqgb%2BkoTvFO8nzwdA7%2FE58tC%2BZitDtDfBxgzecklhEq1cAzXDsAI%2FfYSerPuis0%2BN4uj&X-Amz-Signature=1fceacd218e42e316da9c99003d0feb2dfa872c3e1e71e32289693df3b2f12a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62W5XYI%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCnycNhwN19WbB5SHn%2BxTyko3o39TqxNnhsp4tmmJ1o2wIgJYflr9sMaghwCaf2iEqwKNNWpc%2Br%2B3d74NolwLf3GxwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ%2Bbv%2FtUOQ2dbKWmyrcA5NjN4kG0ytZFL5x3%2BgGWabINtPl4uhXFSjQoDYG8NHl2BbmL371XcSi1la%2FpXQkiVMvEc%2FH17EA0EKrngWMNJsVJCoGjs2qes%2FhlhC7Jw%2BLV6DEL7cA3AV6deVVcpsr%2BER6DdcN09z7FpzW13J8tcDhN9CKRlsAhxsLejPKwMJRLo2Ts7tXJ%2FfBKYBlBVPvMI8oWgwcRwnxzolSYtaBAMEjlNyNN9a2OM4HBJNy0UuIifOWwqFlSYz4DuSpojF0q9%2Fi4a9V1UumgFCDVpC3xaKFQoNOKbAeQvw8ebB7a1ioL2ei%2FgkvUe2qW63DCXEUIpbogpJ4J63T6Nc6WcgR1AmWyBZhNc7JLncgbEnfKeEsaIfj1S1nIWRfCSmKpdgXA8RRH7nTSOAill7s41sucT231D6RfaXvlbPQo%2BK8rAFc7XhCcSsUk5v5fr3Q4VJzDf%2Bwjmp7Csi%2BbXo%2FLGM4GX8NoqqkhOybpjfVPbcG5pkayA20uW21dHf0CNTfDLX2d4s0CEN4oQL3yhrNTA%2FwSgCR%2BjEqqJVvk5AbB%2BuD88APecJh5kZLe6w3tmbf8OJUZZTWI99t4J%2FQbHOiMQiNaK6pl4AonKbkdLIh95uZ0sE9SzZOwpTbySsQicHbMN%2BE5rwGOqUBXoFvUfYD0KM57%2BKWlatyCt21BAPnOR6bKDD6sHny1WnRXyi4%2F4v1vtpj%2FMy3yFMnfcyo5ZOYwzvgYeRX9Y8FUqr4larueB%2F2rZPqTVyC828L5AnrOigAa4NJm6d7DiOnz6jh0A%2Bl%2FlutpHLHkLsxsowpOqgb%2BkoTvFO8nzwdA7%2FE58tC%2BZitDtDfBxgzecklhEq1cAzXDsAI%2FfYSerPuis0%2BN4uj&X-Amz-Signature=2cb6bb6d3ec924b23adf8edbb4afa85b121edaf9fb9ef7c230bdbae384ae9b16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
