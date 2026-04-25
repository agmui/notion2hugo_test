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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EH7NITZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRZaV3YLCwIzkld30jqI8h87Ok7z8nFxyPh4hMEdVeAIgcJpDmqMZqkcqFlK7x5jMlE2js1UGtVHRCtr6LKgMSbkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF23d0XzNZ4g8qzhWircA0RVd0Ki4ZyaFB%2BcK3bAC1aoxTEqpWZxy%2Bh6uzyGqMdjIIcTSXeiaXHU3p8jI1iY7sgB849nWm%2BnAzfJCODR7iVJQZrmEu7mEUOndIPawOPw5%2FPcN9NYyr4yTCcy2LQM6kkE1XtqMb%2FRtQMiytqIMA43TSpAdKeJm6XAtRiwoV45uYPrkZ93dBnszGk%2FmAF94%2BLRgvoZd2UIZVXvFf5SA2x0lhsz65EBi1AT8mhj%2F3ar3xLCbjpqmKQZHgFH2Sjv8ljH1hv6m0d2nwu1MWVZu6GfNyOrwj4jdLptiGQZ1Cae8PqSAkW%2B1oghBUB5tY8%2Fz3YCJ4Lf2OAbEobTauEA%2Ftq1B75FECPnFOdaS27rMFqqfeNjl2hxsJ8HF7NO0EZ%2Bea4%2FRjABKPagpDvyP%2B360fFRY%2BgQZY0GLG8bqtpsYro0xxGjXTVwo9uSKALVxkCZeAjCQ8qrwfhK%2BW24MHHf%2FmPlTYlyXeF1hYOr%2BuvFYFZ03paAyhVW%2BqYkiXcoalgdh%2Fit%2BkXpTMqzRxV1HtFmdZboGXnyOBW9eZdNVcoLk0ZQkG8ruC6rmR3lLPdcBZk48YBIJVvVnGFEilcAdqRrSVQTb5hU3TeMA1hHrDb42yS%2FnDV3ckhHtlQptcWCMLu5sM8GOqUBlxFB7WPLTu53rI5%2BT8DnGfPdlLFH6tYJDqpGAf1OMRmco%2B3Au4z54Q273EQWbv7a%2FS5dL3MWq760hhAtmq8tRJbr1oey0m2h%2BfCwktwyop4f0RwlsDmYV3%2FjUtePxrvG%2FB7DqjSXbK%2B29PYqVCxH2ZyR7R3kvi%2Fy51iDHGUUDSj5m%2B%2BiRbCXtHxuAKaPlmcO85EnMROUXHrZ%2FhQ%2BUVuoHKLTCh5%2B&X-Amz-Signature=dcd24c715b3055d1cb0e56375a59eccd1a946761ca5619c57ab8232ef8f131ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EH7NITZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHRZaV3YLCwIzkld30jqI8h87Ok7z8nFxyPh4hMEdVeAIgcJpDmqMZqkcqFlK7x5jMlE2js1UGtVHRCtr6LKgMSbkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF23d0XzNZ4g8qzhWircA0RVd0Ki4ZyaFB%2BcK3bAC1aoxTEqpWZxy%2Bh6uzyGqMdjIIcTSXeiaXHU3p8jI1iY7sgB849nWm%2BnAzfJCODR7iVJQZrmEu7mEUOndIPawOPw5%2FPcN9NYyr4yTCcy2LQM6kkE1XtqMb%2FRtQMiytqIMA43TSpAdKeJm6XAtRiwoV45uYPrkZ93dBnszGk%2FmAF94%2BLRgvoZd2UIZVXvFf5SA2x0lhsz65EBi1AT8mhj%2F3ar3xLCbjpqmKQZHgFH2Sjv8ljH1hv6m0d2nwu1MWVZu6GfNyOrwj4jdLptiGQZ1Cae8PqSAkW%2B1oghBUB5tY8%2Fz3YCJ4Lf2OAbEobTauEA%2Ftq1B75FECPnFOdaS27rMFqqfeNjl2hxsJ8HF7NO0EZ%2Bea4%2FRjABKPagpDvyP%2B360fFRY%2BgQZY0GLG8bqtpsYro0xxGjXTVwo9uSKALVxkCZeAjCQ8qrwfhK%2BW24MHHf%2FmPlTYlyXeF1hYOr%2BuvFYFZ03paAyhVW%2BqYkiXcoalgdh%2Fit%2BkXpTMqzRxV1HtFmdZboGXnyOBW9eZdNVcoLk0ZQkG8ruC6rmR3lLPdcBZk48YBIJVvVnGFEilcAdqRrSVQTb5hU3TeMA1hHrDb42yS%2FnDV3ckhHtlQptcWCMLu5sM8GOqUBlxFB7WPLTu53rI5%2BT8DnGfPdlLFH6tYJDqpGAf1OMRmco%2B3Au4z54Q273EQWbv7a%2FS5dL3MWq760hhAtmq8tRJbr1oey0m2h%2BfCwktwyop4f0RwlsDmYV3%2FjUtePxrvG%2FB7DqjSXbK%2B29PYqVCxH2ZyR7R3kvi%2Fy51iDHGUUDSj5m%2B%2BiRbCXtHxuAKaPlmcO85EnMROUXHrZ%2FhQ%2BUVuoHKLTCh5%2B&X-Amz-Signature=84b6623786fd566d78386575375862b994a8306851d7d6650330ce5b3c843bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
