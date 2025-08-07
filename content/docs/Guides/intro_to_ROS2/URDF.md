---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3QMUXA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBKuQseynBi%2F1QQq8R6IqHQt5rkFgU2%2FCf530XVcMbZMAiEAxWdgjosYfpA%2Fc94qZfE8bzRQl0ZZ1SqOST7r0zhFSM8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQddEHxhvOZxNAvgCrcA4sgoDKrNAvCOCOG0lhFdF86yu%2BdmTESg2eka2Du8%2FK2eTHV9QeI03L%2FAlFBe77Q84liICRJ%2F4xBWKEwoTDEWkcwVyUIvW5nMTsmj%2FPczyW%2Fp%2BN%2FkfoxLZwnB8PA8WA%2F3j1NrYf1PWyPRTQd2u12uln%2BVsS%2BZ34wzGelVpEm8N1Psqh8EblpGDfk1oLn0zYerY%2B9X8ZVqo5djtbsdzZsHh1Cs8d4L1zRHPitdCrh%2BGr1zWTOLrSyq08udRfypab2EF%2B6DrHUKcR3QGL9i5ri5m%2BwO%2Fk%2BYoV2%2FQlJXXR1rHqdsl9A2vzBLXRkUZNifl1f1dFwly03h9S4hWJBjsrFI%2Fk%2FNB%2BcfrJHhOmGvxdVoLe1EAQkluyliD%2BVQeE4vtwsUQpBrY%2Fd1uRxUoCAh87uumN1NeFnKOH9RyZcOGZwKg9AetuqcU5VTOKYfr4mWU9VzsvkBnHJ3aec2JrLDEspuo%2FwZBM1OuuCk4%2Bp%2FRQUvPto4UoqDo3CUX4Gyp3r3Fzkmqlep2MYvm0gy5B%2Ft36pJ6MiDIuYTdtFQWJhJrGU72tu8BojG6UgsZCuS6zvD2%2BmTzzrkEYGTmNz5Cn533New15TlOVMLadEJRUXbB11O0v6V4dbkDKEvTntA2zCMOnj0cQGOqUB3CWPSOxtofKppfvmLtUlm3blmbR0ZhtfbAQpFo%2FEuhuTX3h48dWG9N%2BT3zCnD%2BPL1VdZ9ti6gN7QDrSYMpu80RENUqfobehSW%2BUWKLFmpDOiHQy16NIFvVWPA2Uq9EjinxWfnIUON4v1uDEj%2BUW%2Fg%2FF%2F5lWwrRmyn2w4%2F1rDlvUzhMA0Wxiv1rOP0OqVIHaQlHCJB8IqVIdiOdTWmhdAF9Zalr7S&X-Amz-Signature=063801de7769832baa78f84f5f624d124bcb72e693f784c345320be397b27dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW3QMUXA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBKuQseynBi%2F1QQq8R6IqHQt5rkFgU2%2FCf530XVcMbZMAiEAxWdgjosYfpA%2Fc94qZfE8bzRQl0ZZ1SqOST7r0zhFSM8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQddEHxhvOZxNAvgCrcA4sgoDKrNAvCOCOG0lhFdF86yu%2BdmTESg2eka2Du8%2FK2eTHV9QeI03L%2FAlFBe77Q84liICRJ%2F4xBWKEwoTDEWkcwVyUIvW5nMTsmj%2FPczyW%2Fp%2BN%2FkfoxLZwnB8PA8WA%2F3j1NrYf1PWyPRTQd2u12uln%2BVsS%2BZ34wzGelVpEm8N1Psqh8EblpGDfk1oLn0zYerY%2B9X8ZVqo5djtbsdzZsHh1Cs8d4L1zRHPitdCrh%2BGr1zWTOLrSyq08udRfypab2EF%2B6DrHUKcR3QGL9i5ri5m%2BwO%2Fk%2BYoV2%2FQlJXXR1rHqdsl9A2vzBLXRkUZNifl1f1dFwly03h9S4hWJBjsrFI%2Fk%2FNB%2BcfrJHhOmGvxdVoLe1EAQkluyliD%2BVQeE4vtwsUQpBrY%2Fd1uRxUoCAh87uumN1NeFnKOH9RyZcOGZwKg9AetuqcU5VTOKYfr4mWU9VzsvkBnHJ3aec2JrLDEspuo%2FwZBM1OuuCk4%2Bp%2FRQUvPto4UoqDo3CUX4Gyp3r3Fzkmqlep2MYvm0gy5B%2Ft36pJ6MiDIuYTdtFQWJhJrGU72tu8BojG6UgsZCuS6zvD2%2BmTzzrkEYGTmNz5Cn533New15TlOVMLadEJRUXbB11O0v6V4dbkDKEvTntA2zCMOnj0cQGOqUB3CWPSOxtofKppfvmLtUlm3blmbR0ZhtfbAQpFo%2FEuhuTX3h48dWG9N%2BT3zCnD%2BPL1VdZ9ti6gN7QDrSYMpu80RENUqfobehSW%2BUWKLFmpDOiHQy16NIFvVWPA2Uq9EjinxWfnIUON4v1uDEj%2BUW%2Fg%2FF%2F5lWwrRmyn2w4%2F1rDlvUzhMA0Wxiv1rOP0OqVIHaQlHCJB8IqVIdiOdTWmhdAF9Zalr7S&X-Amz-Signature=1429ed433aa5c3c0501be9b5f2be5b0e3924a869ca38b51acce27c87e01f9cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
