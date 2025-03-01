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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4PJ2VS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCkCGaUyeDVEKx180dhea5Rkip2DHBLPTy91KiPpWbEDgIgBrhEmilCFV6dvduY15H9WGW8dV%2BeNzG4WUq72IlnFtQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQSCId%2FpfqjW%2BIG4ircA5PihUHu%2BMcQ%2BI5oG1pWGea01E3uTDlV%2B9bSDqINXeotVTAzO2m7liptEZyTX9HN3ILu8RuUwoJL4KQ900ZrY7D%2BL4Vwxlwo5dB3ANPF48%2F8XoavG%2B2StglWmdfLUfmdMlOaUPF%2FjuYGZH22tND89wK0cdkLqBNjhvbLtNaUsR4FTPQyXyreHrVgYrUPXOLtwgQuPnQuJ6klhmjovFXqtTpBy8jatTeHpW%2FbLDx7rif6NvVseuPfho8JVrJvXjgcBnAg2eINedDh3mW7eh8kuVgfbeMfQuMKtTicNVeIKygYV8rei1cIsKHhtsGBwa4kOHDHKsBawylPauy5PbF%2FR14%2Bq95uy2aHKX2Qg0jXtr%2FGT%2BRpGSJfmHT%2BXFP8Q0H2tO%2FW5xZrbKRXsXAATb2nl2EyDeWs8ORctoi8CKYdNgrmQ8Pq5UG0ANvsxfFaU5cMngJego1BGO8QYrmiaUiKmIGT7im5HqzYH4Fj%2F4Yh4F53BQOCaZv95Qu1Jk8eBhlLDwB6Aty7J1kmaRFcoRjpOvU%2FN0132lkX8TmueoZA%2FB7cHy6iTRUV%2BgX2E6ENU2QjO0dU71dl5WokACl99SqhtIa9rCMO7Ej2Fg0%2BemecFnNjeI1E2pvDo1LWoSVZMJ7Hjb4GOqUB1sjrU8i8Yu9GvfCvWDWVIWO7u%2B5hVU2HzboQgvGeDX%2Fupk5pZ0RHXJ%2FtqZOH7ZVWFUOfaZrVoEgMgcCZRvaDFWVXeWNCB0sAvr9S9vZJkt4EtQRGxaXG9Oe9W2qO1m%2F%2BlRCgexBJo%2FOV4y78CgXRmjajYl%2BbN6twzAfiFWb0JbfwXU2WRSPKfPboI21eZg7DtMMnbPPAciRXlDqtKuP2T5MdPK%2Fr&X-Amz-Signature=8dc3c9c8ab4a8c32c5a3dbb6506858658192a681cc85aaf955bcd11f56ff7485&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4PJ2VS2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCkCGaUyeDVEKx180dhea5Rkip2DHBLPTy91KiPpWbEDgIgBrhEmilCFV6dvduY15H9WGW8dV%2BeNzG4WUq72IlnFtQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQSCId%2FpfqjW%2BIG4ircA5PihUHu%2BMcQ%2BI5oG1pWGea01E3uTDlV%2B9bSDqINXeotVTAzO2m7liptEZyTX9HN3ILu8RuUwoJL4KQ900ZrY7D%2BL4Vwxlwo5dB3ANPF48%2F8XoavG%2B2StglWmdfLUfmdMlOaUPF%2FjuYGZH22tND89wK0cdkLqBNjhvbLtNaUsR4FTPQyXyreHrVgYrUPXOLtwgQuPnQuJ6klhmjovFXqtTpBy8jatTeHpW%2FbLDx7rif6NvVseuPfho8JVrJvXjgcBnAg2eINedDh3mW7eh8kuVgfbeMfQuMKtTicNVeIKygYV8rei1cIsKHhtsGBwa4kOHDHKsBawylPauy5PbF%2FR14%2Bq95uy2aHKX2Qg0jXtr%2FGT%2BRpGSJfmHT%2BXFP8Q0H2tO%2FW5xZrbKRXsXAATb2nl2EyDeWs8ORctoi8CKYdNgrmQ8Pq5UG0ANvsxfFaU5cMngJego1BGO8QYrmiaUiKmIGT7im5HqzYH4Fj%2F4Yh4F53BQOCaZv95Qu1Jk8eBhlLDwB6Aty7J1kmaRFcoRjpOvU%2FN0132lkX8TmueoZA%2FB7cHy6iTRUV%2BgX2E6ENU2QjO0dU71dl5WokACl99SqhtIa9rCMO7Ej2Fg0%2BemecFnNjeI1E2pvDo1LWoSVZMJ7Hjb4GOqUB1sjrU8i8Yu9GvfCvWDWVIWO7u%2B5hVU2HzboQgvGeDX%2Fupk5pZ0RHXJ%2FtqZOH7ZVWFUOfaZrVoEgMgcCZRvaDFWVXeWNCB0sAvr9S9vZJkt4EtQRGxaXG9Oe9W2qO1m%2F%2BlRCgexBJo%2FOV4y78CgXRmjajYl%2BbN6twzAfiFWb0JbfwXU2WRSPKfPboI21eZg7DtMMnbPPAciRXlDqtKuP2T5MdPK%2Fr&X-Amz-Signature=69bab881cd5b3ecd2627ed35de68338fdb9ff2872d410d7cf2e03fc4ec58b2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
