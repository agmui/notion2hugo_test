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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUFXFDI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDwHuZ1oBYsFL5cUDu59m64rIIsgQEhp95RxtamqHBiEQIhAIZRxb7fE98%2Fd1oXf6Z3im1mevlF43dWfN2OBjGBU3IZKv8DCHYQABoMNjM3NDIzMTgzODA1IgwqO47RhpRAmTanjMkq3AOwjxsn%2FLPStmbORfTL56MesnajA%2F06Quu0VbP7uw7aWCmzcUG4m6lVyrvMIl4fJCHhgTDl%2F6p%2B6hrYUzYqjqIvoeqRY5wIk6oV1lzx1F%2BHsqMHYl0ylPAoRmptEdq%2Fl%2F%2BqJpV1r3HS3fPm6UuxxiotJucToio6R0q%2BV95%2BEKxm8Ndw8ofkQ8OPxiPybyKatKhhB3RfNxMVdML1cTDAEdnb13wOJoKtmSiMyEN22y7YEOtfyWELcNljqLx9cw%2Be4%2FS0aeXanltw%2BMgVaK2zJJDkdx%2Bc%2FQXbMnjChvrVVtAF1NUFLlBxHyonz6DdTY%2F7v5oa1RbMG4yfBeVO7xqMtqNJ2gp4l23fbBWOLfRUJfVHz71hMu2OsHveveC%2FtC7k5z87gJnop2KGHCpfdr38eLJ%2BVbEvsKyRpAzPO2klkvbzSXWvXdTVvx9hujTk70Ki3n03NG4ppnT1R8MrbEQG9bIJrJEebUao6B8zyrUczfdBCIvMo566hP%2Bby7wQNXySwnMp7odhehjCyPlcvdwZtz%2FbR32bCxzkgpMHkxlix%2FB7Wb7zj9l1VPTXcVmaczj7IBJPzJ11d8oEgjYbpBR44rvH61A0fmh%2BMkeGOzd4DXRcus7B8GCabNoLwgUxnTDlpfrCBjqkARysmEfUC%2Fr9KlMIDsEljkaQrDxH5leqSINucEl7qy6orpXNF70izRGjTVTHqU00WvnMoKOBjol3CmZ8tHUefS14R%2B%2FD0lt3d745RHN3KtumYxps60qrnj0YIbeeXmi%2FGlC2LuTusI9LzF0hFAKykiCExidACyRJ8pufQshHUlkK8Mc0obRPCj8wmuexlmTTxmR6a8svL8C%2B47%2BSPBFFyiqJ05aP&X-Amz-Signature=316fcb3d8005e0b11ef49c0d321c6c7e63d1e929cb4ae93c35c20f2b3af63f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUFXFDI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDwHuZ1oBYsFL5cUDu59m64rIIsgQEhp95RxtamqHBiEQIhAIZRxb7fE98%2Fd1oXf6Z3im1mevlF43dWfN2OBjGBU3IZKv8DCHYQABoMNjM3NDIzMTgzODA1IgwqO47RhpRAmTanjMkq3AOwjxsn%2FLPStmbORfTL56MesnajA%2F06Quu0VbP7uw7aWCmzcUG4m6lVyrvMIl4fJCHhgTDl%2F6p%2B6hrYUzYqjqIvoeqRY5wIk6oV1lzx1F%2BHsqMHYl0ylPAoRmptEdq%2Fl%2F%2BqJpV1r3HS3fPm6UuxxiotJucToio6R0q%2BV95%2BEKxm8Ndw8ofkQ8OPxiPybyKatKhhB3RfNxMVdML1cTDAEdnb13wOJoKtmSiMyEN22y7YEOtfyWELcNljqLx9cw%2Be4%2FS0aeXanltw%2BMgVaK2zJJDkdx%2Bc%2FQXbMnjChvrVVtAF1NUFLlBxHyonz6DdTY%2F7v5oa1RbMG4yfBeVO7xqMtqNJ2gp4l23fbBWOLfRUJfVHz71hMu2OsHveveC%2FtC7k5z87gJnop2KGHCpfdr38eLJ%2BVbEvsKyRpAzPO2klkvbzSXWvXdTVvx9hujTk70Ki3n03NG4ppnT1R8MrbEQG9bIJrJEebUao6B8zyrUczfdBCIvMo566hP%2Bby7wQNXySwnMp7odhehjCyPlcvdwZtz%2FbR32bCxzkgpMHkxlix%2FB7Wb7zj9l1VPTXcVmaczj7IBJPzJ11d8oEgjYbpBR44rvH61A0fmh%2BMkeGOzd4DXRcus7B8GCabNoLwgUxnTDlpfrCBjqkARysmEfUC%2Fr9KlMIDsEljkaQrDxH5leqSINucEl7qy6orpXNF70izRGjTVTHqU00WvnMoKOBjol3CmZ8tHUefS14R%2B%2FD0lt3d745RHN3KtumYxps60qrnj0YIbeeXmi%2FGlC2LuTusI9LzF0hFAKykiCExidACyRJ8pufQshHUlkK8Mc0obRPCj8wmuexlmTTxmR6a8svL8C%2B47%2BSPBFFyiqJ05aP&X-Amz-Signature=7347cf21eb33573abba490f20ffd77312a00eea6daedcc710779e4cf756cab17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
