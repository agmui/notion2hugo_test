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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3S5ZKB%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXZQ5J756DlxunHM%2FjV%2BoAR1T17A6CAqUfD6I30kYmWAIhAPeNXZ1fnhh%2FfMt1eGWtE%2F9jfdXkiM8vuuFAmyRxWXkoKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq9Q%2FbBIDukVzTWU8q3APnJz3ioHsmNMlAlCjrEWeZJJAtd0Mq6RuRGXk6cKaSyHigGU3lZLTzN%2BE4egWnTKcN8MQrh8QCVG64gDnzPrjboJraIvlTEnV2GBJqheD2VlWx7z7xRVDcpB4iKW2Y1myjnVGDwCsTagyGXR5ilHAtsQ%2BL1C7CVnsfvxfUshBomYT8Xe1VniMxQkeJ4GyXTWA8c1B04VrK%2FnCbyqWsU2LH%2F2wE8ZTz38j6kwnivk0lnZD%2BsoMI4VJA%2F2cOwsUeV5WIB%2FPA24w4bEgH8Oc6MLAwPKcNIek46kJeePsvPDuPUELV%2F9iofIPX271fA%2FowzsZ8vAgKHVw9wJeO%2Feu6%2B9GzfoeC4R5taEwa8deks2ubxcID3Sa07aVNEMygzkCx4YE%2FowG3nYA0mGYHZ0kWYZOZYF3cMIQgYt%2FNCHBaA7gMGJK4hDvM2C%2F%2FD85fQowdsZTGLQmH70qOsXRo5tySMi3VI6O0M8LjRDZUni4LU07664iqzAOjl%2BohmXBZepwVCjFQR97EVU9lOuBRQTb%2BNaX0p%2BRA2V%2BoayduEF8QZPnnlfVmip2e4cX0ykFWMddCVlw7f9kE3L1s%2FYXjwUC%2BhUL38JcHcPRYD9wvKgKxhcNZ%2BqA0idz1MzMgK%2FrpgTCLns7FBjqkAViKk3TyGslD3869X5NcECtkRjoZap6rqA0crRs0AI7O6adPuNLOldpwC3hK7gtQYIIFIL5k1R2cKX5J1hlZfHzFZXa0pzmbiC5IdldMZS18dsmAfCFLszSs%2B97HChpioYSPPh%2B0wvc6gv5dG%2FTF16TuzoTjW9CS1VWgfJ9sBfdvJsilLg9WmFbjaQH70IazBBPiYRUGZZG8sL41f2ff61%2BcS8Fp&X-Amz-Signature=6b2d127c4aae927bc954075cf16832060845061a5520bbcf662cfc60ce7f1719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3S5ZKB%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXZQ5J756DlxunHM%2FjV%2BoAR1T17A6CAqUfD6I30kYmWAIhAPeNXZ1fnhh%2FfMt1eGWtE%2F9jfdXkiM8vuuFAmyRxWXkoKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq9Q%2FbBIDukVzTWU8q3APnJz3ioHsmNMlAlCjrEWeZJJAtd0Mq6RuRGXk6cKaSyHigGU3lZLTzN%2BE4egWnTKcN8MQrh8QCVG64gDnzPrjboJraIvlTEnV2GBJqheD2VlWx7z7xRVDcpB4iKW2Y1myjnVGDwCsTagyGXR5ilHAtsQ%2BL1C7CVnsfvxfUshBomYT8Xe1VniMxQkeJ4GyXTWA8c1B04VrK%2FnCbyqWsU2LH%2F2wE8ZTz38j6kwnivk0lnZD%2BsoMI4VJA%2F2cOwsUeV5WIB%2FPA24w4bEgH8Oc6MLAwPKcNIek46kJeePsvPDuPUELV%2F9iofIPX271fA%2FowzsZ8vAgKHVw9wJeO%2Feu6%2B9GzfoeC4R5taEwa8deks2ubxcID3Sa07aVNEMygzkCx4YE%2FowG3nYA0mGYHZ0kWYZOZYF3cMIQgYt%2FNCHBaA7gMGJK4hDvM2C%2F%2FD85fQowdsZTGLQmH70qOsXRo5tySMi3VI6O0M8LjRDZUni4LU07664iqzAOjl%2BohmXBZepwVCjFQR97EVU9lOuBRQTb%2BNaX0p%2BRA2V%2BoayduEF8QZPnnlfVmip2e4cX0ykFWMddCVlw7f9kE3L1s%2FYXjwUC%2BhUL38JcHcPRYD9wvKgKxhcNZ%2BqA0idz1MzMgK%2FrpgTCLns7FBjqkAViKk3TyGslD3869X5NcECtkRjoZap6rqA0crRs0AI7O6adPuNLOldpwC3hK7gtQYIIFIL5k1R2cKX5J1hlZfHzFZXa0pzmbiC5IdldMZS18dsmAfCFLszSs%2B97HChpioYSPPh%2B0wvc6gv5dG%2FTF16TuzoTjW9CS1VWgfJ9sBfdvJsilLg9WmFbjaQH70IazBBPiYRUGZZG8sL41f2ff61%2BcS8Fp&X-Amz-Signature=bc78b1e213e6620f5408f07836442fad5b3a67c0956d47b2db12e0ec680506a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
