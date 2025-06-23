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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2R4P2ZL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEh7%2FhDU24O0fPE9VXHn1F0k96%2F%2FRXiQySo607a%2Fnr%2FfAiA%2BfNt31yPdd8wdt8HDbSGtNVoJb%2BSBiDomsfIfo3bxdSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMSHPtPnzSjX812rHcKtwDMm%2BYdASc%2BNiZtaxOv0PGE3cO8uMoJa3eCLVIFxlEAGew3DsbpGMrIU85yN5j%2FY7EMQjYy7K0iztkQR4n5MZO6uGo3%2Bb%2FQupNq0Z0uM3cm1Y6ktZ9r9G7jFZ2%2FTxBa4FNsj7MkF6cQ3LEZTYar%2Brn%2BIO9PbgK1HBempShQ7oRZ%2FGypybCPUN97Ro7S0wIEsZyEEwzWPJfr%2Bk%2B5SAhuDa3TAXjopweV1SBsGdLX5Av%2BPXtmR7QvfQ0rxOjtqZCnOnACxI3Qh7vMVzfDgxkQhT1bxWATEQiRxrdlAwv%2BKCj6gdNsKo3LYejNZYKmVCswn5A4LH0D9BNOpnbFphZLr0KUhZzKeJBiadODRYc3Bkh50E4F2IOyHealpnrN%2BYWgriJD5bMf%2B9Jo0EjrydAb48DRzbf2UnGHQ%2FrDpgalsS5aZkdUSsUkD%2B57alGqLjvzBas1NPNVsFtrO7e4HWnuK%2FhlMbHil8uRpVcCaATRYzsxjx8FQnkrj6fVvRkppwWhws9sbVsU69AEOhw%2F92CWK8719dYlFrtkbV0ynEIuUCV7SgfV1fWkDCzyl3tMAS%2BlHe%2FtlyPjFVcg6ua%2F28159bVG2v8bHNozpBLv3WOssIzMfwWIkFhVGaS4NLaodgwrqrmwgY6pgE4qRQRhzgGc7tD7asRbrp17%2F5gz3D5NF2PQOad3DvKDeoqfdUnP%2BOxwv8emQaw8XR0MmKQcAB15B8PA3Vyvru3HaooDWWyanf%2FRIEpz5PV82JMEhvMQwzRKToTFecRrJ1hJkG7ookHs75jcotwuGd9Wqe5RY3hG01yw24df%2Faxw4l8VkbHiqSRm4djH3rHKUBtwbwo%2BRMxcmni0I7l90UQ4BW6RR6n&X-Amz-Signature=fbbeb7852bf0283fddcd91bb4933a306399ebb2950fa5b10f4f1da9193eb27e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2R4P2ZL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEh7%2FhDU24O0fPE9VXHn1F0k96%2F%2FRXiQySo607a%2Fnr%2FfAiA%2BfNt31yPdd8wdt8HDbSGtNVoJb%2BSBiDomsfIfo3bxdSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMSHPtPnzSjX812rHcKtwDMm%2BYdASc%2BNiZtaxOv0PGE3cO8uMoJa3eCLVIFxlEAGew3DsbpGMrIU85yN5j%2FY7EMQjYy7K0iztkQR4n5MZO6uGo3%2Bb%2FQupNq0Z0uM3cm1Y6ktZ9r9G7jFZ2%2FTxBa4FNsj7MkF6cQ3LEZTYar%2Brn%2BIO9PbgK1HBempShQ7oRZ%2FGypybCPUN97Ro7S0wIEsZyEEwzWPJfr%2Bk%2B5SAhuDa3TAXjopweV1SBsGdLX5Av%2BPXtmR7QvfQ0rxOjtqZCnOnACxI3Qh7vMVzfDgxkQhT1bxWATEQiRxrdlAwv%2BKCj6gdNsKo3LYejNZYKmVCswn5A4LH0D9BNOpnbFphZLr0KUhZzKeJBiadODRYc3Bkh50E4F2IOyHealpnrN%2BYWgriJD5bMf%2B9Jo0EjrydAb48DRzbf2UnGHQ%2FrDpgalsS5aZkdUSsUkD%2B57alGqLjvzBas1NPNVsFtrO7e4HWnuK%2FhlMbHil8uRpVcCaATRYzsxjx8FQnkrj6fVvRkppwWhws9sbVsU69AEOhw%2F92CWK8719dYlFrtkbV0ynEIuUCV7SgfV1fWkDCzyl3tMAS%2BlHe%2FtlyPjFVcg6ua%2F28159bVG2v8bHNozpBLv3WOssIzMfwWIkFhVGaS4NLaodgwrqrmwgY6pgE4qRQRhzgGc7tD7asRbrp17%2F5gz3D5NF2PQOad3DvKDeoqfdUnP%2BOxwv8emQaw8XR0MmKQcAB15B8PA3Vyvru3HaooDWWyanf%2FRIEpz5PV82JMEhvMQwzRKToTFecRrJ1hJkG7ookHs75jcotwuGd9Wqe5RY3hG01yw24df%2Faxw4l8VkbHiqSRm4djH3rHKUBtwbwo%2BRMxcmni0I7l90UQ4BW6RR6n&X-Amz-Signature=3b9934e1718e5088a75ccf2e3e37969f1ecd645ec1c35f6a25e0d9b3224a55eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
