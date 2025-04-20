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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFWDUMC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFa2Ymb17OUXVdIWkffJL1kmEot2tj2ROdS13YUDj%2FKTAiEAmN66bIsPC0%2BH8vjJb6zoUSQBSHrbJ8TPPk4fluV56TwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyzsObc9kkzGcbpMCrcAzxQeZIc0lNCk0zjMaU7zbjh8jWUO78QBIy0TpYU7bSdR6To1VmQ9okyWj0CIaqpcy%2BXuREJToPwYl7nWitVAHFvBH9FLTRGxw6lLo2QYdaXyD7eMcaHbAkGPyL15%2BEssE3tnjfpSgDBd%2BznDl1EtoOFk0aWA3BeXbCIsTUWyGOv6qusqhPPNPeN8CmUOBKwUxTT%2FNvyiN0nH8rXVuO%2F4XgsNNLnvJcSnBbrbPnVTQHiQOP7JX%2FiqqsVIQ8H38FnVuQPCroWlg21cOmqJJw41Tfp3CM4x2EXQrSpyau3zcz%2Fq7vXGRHrvqm9nHhBdA7FiER5EN5bTb404GeaPszwh98GFUtzsghp7Kn5irSdC3v5Ykfaf5yiIMmDlyBLuG3pGlaxk1UjwQTwz17VWw2Fkt%2FF4tOQbALzZ66rUkGsS9CPDsldSUmS%2BwX%2Bbuz9DZOkFMUZfCoFUx0wV7A7T1Aa%2BY5y5Wr5ltEeJbrTBvOQGFByZb8MrQAW00Zo2v1BnqNb1k%2BTMDKkSUlWElk8Op%2BAc4rMmwxj0YpbmUI4uZBusb7OSe03qZrUHTJj5iL4tRUHU7%2Ft8Ye%2FkVQyXkAkGva3d2i5ojz5fTx3ZOLTcIR6JZJ6hKSyL7LX6Y8TwyrWMJ6kksAGOqUB09j93HToPhUZEJWbBtrPzzruh0qXJBc02ko1o6Fmp0L7uCAxlLo%2BR5XHWYMG4Ir%2BECOW4Z2WLS23aac%2FrO0GLMGYxZ8qpc%2FrxrYBdgt9hHrU%2F8ICckEMjcoWSkFqVxyDge75ojJzEwV8hrwsLjcFEWej6G%2Fr%2BiHGbC%2FDeo%2B4ICUmG5VBwIr4l78SRr73HPHZs2zA2sWGPNcNkl1J9NYrv%2FVC2VYY&X-Amz-Signature=573cd566145a5bd352fbbdc6a3911f62b67d3a743110e5258359c201977271d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFWDUMC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFa2Ymb17OUXVdIWkffJL1kmEot2tj2ROdS13YUDj%2FKTAiEAmN66bIsPC0%2BH8vjJb6zoUSQBSHrbJ8TPPk4fluV56TwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyzsObc9kkzGcbpMCrcAzxQeZIc0lNCk0zjMaU7zbjh8jWUO78QBIy0TpYU7bSdR6To1VmQ9okyWj0CIaqpcy%2BXuREJToPwYl7nWitVAHFvBH9FLTRGxw6lLo2QYdaXyD7eMcaHbAkGPyL15%2BEssE3tnjfpSgDBd%2BznDl1EtoOFk0aWA3BeXbCIsTUWyGOv6qusqhPPNPeN8CmUOBKwUxTT%2FNvyiN0nH8rXVuO%2F4XgsNNLnvJcSnBbrbPnVTQHiQOP7JX%2FiqqsVIQ8H38FnVuQPCroWlg21cOmqJJw41Tfp3CM4x2EXQrSpyau3zcz%2Fq7vXGRHrvqm9nHhBdA7FiER5EN5bTb404GeaPszwh98GFUtzsghp7Kn5irSdC3v5Ykfaf5yiIMmDlyBLuG3pGlaxk1UjwQTwz17VWw2Fkt%2FF4tOQbALzZ66rUkGsS9CPDsldSUmS%2BwX%2Bbuz9DZOkFMUZfCoFUx0wV7A7T1Aa%2BY5y5Wr5ltEeJbrTBvOQGFByZb8MrQAW00Zo2v1BnqNb1k%2BTMDKkSUlWElk8Op%2BAc4rMmwxj0YpbmUI4uZBusb7OSe03qZrUHTJj5iL4tRUHU7%2Ft8Ye%2FkVQyXkAkGva3d2i5ojz5fTx3ZOLTcIR6JZJ6hKSyL7LX6Y8TwyrWMJ6kksAGOqUB09j93HToPhUZEJWbBtrPzzruh0qXJBc02ko1o6Fmp0L7uCAxlLo%2BR5XHWYMG4Ir%2BECOW4Z2WLS23aac%2FrO0GLMGYxZ8qpc%2FrxrYBdgt9hHrU%2F8ICckEMjcoWSkFqVxyDge75ojJzEwV8hrwsLjcFEWej6G%2Fr%2BiHGbC%2FDeo%2B4ICUmG5VBwIr4l78SRr73HPHZs2zA2sWGPNcNkl1J9NYrv%2FVC2VYY&X-Amz-Signature=97e3a24fdb223456f9ae3b495d139ea006176030136447c7746aa0bef6b6f7f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
