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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74VAWJI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHDVxqLEV3HipoVvvuirCReHySUNCAoHILS8nmcnAF3VAiEA41Eqv9IhxQw7YblATMzO9AresY7JyuowTxBDRQ2Z%2BkcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8%2FPCDBSmTVOsA1PCrcA%2FnryfJRRZfJ9QzUhkbkDx2JhTo9xnY1I%2BvmFr88wkSww3StdhWbBprr2oEF1wEaRhxHX4rls9Bma2SdPC7hEIPjvKMI2%2FsZxn6JAgxrrupAIyyToy2Ma0DN4lU53r0YaXmMYan%2Bx5jQ1PwbuLc531G7UJXXxNXzL%2BILee%2BkJO%2FvPOHxOX2EL34KCofaof6HlgeoC9EF3nG2T80N%2BZTvSjzYX8MecPWoQLTJHAEIGjmfDYfGlKRnCvoGejdDAYUypUu9BpHwpTU1Kzy%2BST4rB6JUidZ5blQjx2qV%2BGPXan71j%2FbmRpotajSG8BuIczJnMf4WqDgx8pdJVFMd2wVVlCwTZaOKX9nirANkERYC5pEGZ7AlCpHWj3boqqTvmgONbdmZApzvMHr6sa%2B9FHpmxbWAJ3daVtCLb%2F4fIJ3gKws85NcdMXyjgzj9y61AS4UaIGu6vOUn3g3tnZXirTOQrm8tBgOA%2BV021%2FgWNguzPw0gWYP8348V%2BPFCKxLNtmmDcH8NhPRzlxiouQF9PZOVdDJhaK4zZkbR4z6ajjk1xY0DGISGDoFzG%2FEfBN0lQuRx7Qjsu0UBHsVtXQwpAVsBJQRSMGObMRLokkX%2Bh8SiujTkbf6L%2F3iqcfArkzXfMLzOqb8GOqUB0FtkTTGHzbQZzdaI36OIzO8Cz7OofklcAZZ01gHW5iwtCVPKaC4aC7QqMLSIqpAP2y7VkxVr3DGW5lZuCQNLy2rQUaFdwH6BUZE5deXkxwDkEjpDqYpWOaSkEfwOMtQJMQg4Y%2BonsklMNQlzPAkPlUthF8jDCNSk6qIaiIRDi28NAw7vgI5Exg6pmQRKCqp%2BY4isBd22c%2FuijADACZszV%2B%2FuCeI4&X-Amz-Signature=53a98a6326a4b7501e8f193b42f511ba8c9648969592aa66a2a918b64cf1d434&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74VAWJI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHDVxqLEV3HipoVvvuirCReHySUNCAoHILS8nmcnAF3VAiEA41Eqv9IhxQw7YblATMzO9AresY7JyuowTxBDRQ2Z%2BkcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8%2FPCDBSmTVOsA1PCrcA%2FnryfJRRZfJ9QzUhkbkDx2JhTo9xnY1I%2BvmFr88wkSww3StdhWbBprr2oEF1wEaRhxHX4rls9Bma2SdPC7hEIPjvKMI2%2FsZxn6JAgxrrupAIyyToy2Ma0DN4lU53r0YaXmMYan%2Bx5jQ1PwbuLc531G7UJXXxNXzL%2BILee%2BkJO%2FvPOHxOX2EL34KCofaof6HlgeoC9EF3nG2T80N%2BZTvSjzYX8MecPWoQLTJHAEIGjmfDYfGlKRnCvoGejdDAYUypUu9BpHwpTU1Kzy%2BST4rB6JUidZ5blQjx2qV%2BGPXan71j%2FbmRpotajSG8BuIczJnMf4WqDgx8pdJVFMd2wVVlCwTZaOKX9nirANkERYC5pEGZ7AlCpHWj3boqqTvmgONbdmZApzvMHr6sa%2B9FHpmxbWAJ3daVtCLb%2F4fIJ3gKws85NcdMXyjgzj9y61AS4UaIGu6vOUn3g3tnZXirTOQrm8tBgOA%2BV021%2FgWNguzPw0gWYP8348V%2BPFCKxLNtmmDcH8NhPRzlxiouQF9PZOVdDJhaK4zZkbR4z6ajjk1xY0DGISGDoFzG%2FEfBN0lQuRx7Qjsu0UBHsVtXQwpAVsBJQRSMGObMRLokkX%2Bh8SiujTkbf6L%2F3iqcfArkzXfMLzOqb8GOqUB0FtkTTGHzbQZzdaI36OIzO8Cz7OofklcAZZ01gHW5iwtCVPKaC4aC7QqMLSIqpAP2y7VkxVr3DGW5lZuCQNLy2rQUaFdwH6BUZE5deXkxwDkEjpDqYpWOaSkEfwOMtQJMQg4Y%2BonsklMNQlzPAkPlUthF8jDCNSk6qIaiIRDi28NAw7vgI5Exg6pmQRKCqp%2BY4isBd22c%2FuijADACZszV%2B%2FuCeI4&X-Amz-Signature=a9aed97e95ba404129c2b149fbe6c8adb964d161a40e5c95d1cfc6badae602d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
