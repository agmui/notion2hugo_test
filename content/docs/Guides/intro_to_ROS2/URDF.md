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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4PQ545%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDceZpAczN5UfaO%2BCXSjvAP8NMJ%2BLrH8U2nPYIHRSG8agIhAL5O6qR4LGRE7L3h9bMbfjpbrmpK2wiSr8sni33u8bo6KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdmtbXZv%2FnmStHW0sq3AN4zC8guq0i%2BVe7uDeVOfKCH33HEYHIYOFRtJbMk3k0C6RRiKYTe%2BvA%2FgXB1Kq92PDLZ4HgTligKX%2F1%2FVVvU%2FxxgOOcTGrBQgC9LwVh%2BJdPCzEBB8XPoh1lQdatrCLyntGoru7xUb9AiQxdvMJppEcR%2Ftq2eaksgM%2Fr96jFIbmI34jCSCPtt84UPfk4TuBgc8Y5fzi9N0D9rPhzpbqtgbCyUh4ToF5ACQHeUWOMcXwcc0ttFwrQd8w5A74INATNYw7pIto5FjgOPp4oioHayCTusv412DIf2EzZO9wkFPH%2FFtZoyYZFKq%2FkajBz19VKw84dLHZaIIp%2FOEzwhh9ziByU1DC6YztcNUYNGvLWuNNTR3huvHEswQ%2FkESc%2ByfCFNethVVZKV%2B%2FzYqGMNHnUoop0hP9zqRi6iiiYzADyM1O05XfPK6%2Fh0ZBUx9C%2BRXhKS2aFLDA5PukfXJENSh%2BczLwM12cMv284JKGcaqI2zGT6b7dExn497wLs0ZCIl%2F2rOti4pGsM95bobLrDsYwC%2BcgdQ4tlwQ3xynDL4deB4cCE%2BpZsA0KwoYpEcRTdBZk7TCHvLXIjQ%2BnVOwJuOO5OIoVyucWMWkqtuEfhdWXkZpHfyinVuqr%2Bcn2ZlYP%2FUzCE16y%2FBjqkATojYzKLZZ%2B%2BBsGufI%2FKN0GpPL6zvNFDKx1xcvu6%2B7m9Ev6vjT5YOGl93VUwwz0T8Q1LGDamy%2BRvG7tIw06002JV4BgvwQR3dJjKM3FNplr5njWrBJZkLooB2XtMmQf75y0z80ga1f%2FvaaHpF3Gyje%2Fz1iWF1LeqG%2FaUPSUWCPNvDrl9BrMkNFyMK4HM2kwHhmbWWxEwDebQcTY3qz3UqRRIgP%2Ft&X-Amz-Signature=c0ac4b4b3425222f4b1f5d0522123447224576af7363ed725cb4cb0cfe8a1fee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4PQ545%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDceZpAczN5UfaO%2BCXSjvAP8NMJ%2BLrH8U2nPYIHRSG8agIhAL5O6qR4LGRE7L3h9bMbfjpbrmpK2wiSr8sni33u8bo6KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdmtbXZv%2FnmStHW0sq3AN4zC8guq0i%2BVe7uDeVOfKCH33HEYHIYOFRtJbMk3k0C6RRiKYTe%2BvA%2FgXB1Kq92PDLZ4HgTligKX%2F1%2FVVvU%2FxxgOOcTGrBQgC9LwVh%2BJdPCzEBB8XPoh1lQdatrCLyntGoru7xUb9AiQxdvMJppEcR%2Ftq2eaksgM%2Fr96jFIbmI34jCSCPtt84UPfk4TuBgc8Y5fzi9N0D9rPhzpbqtgbCyUh4ToF5ACQHeUWOMcXwcc0ttFwrQd8w5A74INATNYw7pIto5FjgOPp4oioHayCTusv412DIf2EzZO9wkFPH%2FFtZoyYZFKq%2FkajBz19VKw84dLHZaIIp%2FOEzwhh9ziByU1DC6YztcNUYNGvLWuNNTR3huvHEswQ%2FkESc%2ByfCFNethVVZKV%2B%2FzYqGMNHnUoop0hP9zqRi6iiiYzADyM1O05XfPK6%2Fh0ZBUx9C%2BRXhKS2aFLDA5PukfXJENSh%2BczLwM12cMv284JKGcaqI2zGT6b7dExn497wLs0ZCIl%2F2rOti4pGsM95bobLrDsYwC%2BcgdQ4tlwQ3xynDL4deB4cCE%2BpZsA0KwoYpEcRTdBZk7TCHvLXIjQ%2BnVOwJuOO5OIoVyucWMWkqtuEfhdWXkZpHfyinVuqr%2Bcn2ZlYP%2FUzCE16y%2FBjqkATojYzKLZZ%2B%2BBsGufI%2FKN0GpPL6zvNFDKx1xcvu6%2B7m9Ev6vjT5YOGl93VUwwz0T8Q1LGDamy%2BRvG7tIw06002JV4BgvwQR3dJjKM3FNplr5njWrBJZkLooB2XtMmQf75y0z80ga1f%2FvaaHpF3Gyje%2Fz1iWF1LeqG%2FaUPSUWCPNvDrl9BrMkNFyMK4HM2kwHhmbWWxEwDebQcTY3qz3UqRRIgP%2Ft&X-Amz-Signature=6f3c27031b98bdf4f60a40ad2cab2328d57c9a6613d43466765bc17d9afb1168&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
