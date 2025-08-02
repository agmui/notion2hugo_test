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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3FYP4NH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFThpDl8bg%2F9qrDYUwwj6njON3xNWHSaf3NNI0P4LLwcAiEA5pDokZ4oSJqLinN0hNUlAqF05UPLhsBqWcMgecHOpcgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEOglT%2FaXkBiSKhEpCrcAxxH5qlamPQ0U35X4v5EyQ0c2tBYmi7W1zNSyZooT6pDBGZYPbQytAxZYWIoREMA3p4ZDo1hr96cZG61uLZAhn4vW71tPURTkXAPJu2c1gaPDbv8kI9eWCMakC0Z3R2Ofgfw7HlvzHmDLMv9Osic8QnVaYBnekXJIpKwnsyWpk6sVWMavZn1pGSDLyHwjiQM7NpaUH5G%2FjmZNcRFsHU%2FpF1cRcNw2dabhVM00wYBo%2BGYPzPtln3vm3M17HilvJJfeO4uwo6TiJ92F4j43M8MjVTtAgUnTb3UQQUlIq0PogSe8ZO4yRsxWpw6Z%2BrY0FLpOFJbEJHU16XDmTW1ygtVy0iyAlNZqqTKseE1wRskyrEm2FqSA4vJC8xiIZykjzzlXOHyc16Vptc8CAfGy6dopKWEWql0k1XG8ulAx9zA0CXsRZIqcePsOxqxdHXID0mK3zz15K0JdgsGyHoAIL%2FAyxYGJjx642PBUlslwra7FbB%2Bc%2B%2F18odwNeRmRAqX%2FpdjxVQQbYu42C%2FofiAXY0bnb9sLF01%2Bnarc7cZnWoQFJy3eBhgykQzxmEychM6IC3WYDA6ZS7bpltRNh4DLiW%2BYG7PGoqn9EM7YeCYRTI1sKfxe4RWwzxxWippfg82OMNiRuMQGOqUBmmsIvFY0QBCmU3ZX3vQoMU5XPL64QWH4L1OYEyj7IKtHppQ1RCLj7Bf0GR5GQ2Q4usZMVTlpF1ofOsW3JmJbJ4%2FXbr6xkomFewD4XYCXVw5wBIWPrxJZ5HM6JSCP%2Fr3XvWJvfSHdlc%2FMqb4fRc2ZqHodhHkNZ63KmnSJzwqa%2B4L%2FEt5YLGdII7b%2FDN0rr1BVZEHielPZuNarWCssHMsLF73pQQIn&X-Amz-Signature=0f246215c73e4c652ebba33a2426a9a705e76803a776f845c52eb11a888ce9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3FYP4NH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFThpDl8bg%2F9qrDYUwwj6njON3xNWHSaf3NNI0P4LLwcAiEA5pDokZ4oSJqLinN0hNUlAqF05UPLhsBqWcMgecHOpcgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEOglT%2FaXkBiSKhEpCrcAxxH5qlamPQ0U35X4v5EyQ0c2tBYmi7W1zNSyZooT6pDBGZYPbQytAxZYWIoREMA3p4ZDo1hr96cZG61uLZAhn4vW71tPURTkXAPJu2c1gaPDbv8kI9eWCMakC0Z3R2Ofgfw7HlvzHmDLMv9Osic8QnVaYBnekXJIpKwnsyWpk6sVWMavZn1pGSDLyHwjiQM7NpaUH5G%2FjmZNcRFsHU%2FpF1cRcNw2dabhVM00wYBo%2BGYPzPtln3vm3M17HilvJJfeO4uwo6TiJ92F4j43M8MjVTtAgUnTb3UQQUlIq0PogSe8ZO4yRsxWpw6Z%2BrY0FLpOFJbEJHU16XDmTW1ygtVy0iyAlNZqqTKseE1wRskyrEm2FqSA4vJC8xiIZykjzzlXOHyc16Vptc8CAfGy6dopKWEWql0k1XG8ulAx9zA0CXsRZIqcePsOxqxdHXID0mK3zz15K0JdgsGyHoAIL%2FAyxYGJjx642PBUlslwra7FbB%2Bc%2B%2F18odwNeRmRAqX%2FpdjxVQQbYu42C%2FofiAXY0bnb9sLF01%2Bnarc7cZnWoQFJy3eBhgykQzxmEychM6IC3WYDA6ZS7bpltRNh4DLiW%2BYG7PGoqn9EM7YeCYRTI1sKfxe4RWwzxxWippfg82OMNiRuMQGOqUBmmsIvFY0QBCmU3ZX3vQoMU5XPL64QWH4L1OYEyj7IKtHppQ1RCLj7Bf0GR5GQ2Q4usZMVTlpF1ofOsW3JmJbJ4%2FXbr6xkomFewD4XYCXVw5wBIWPrxJZ5HM6JSCP%2Fr3XvWJvfSHdlc%2FMqb4fRc2ZqHodhHkNZ63KmnSJzwqa%2B4L%2FEt5YLGdII7b%2FDN0rr1BVZEHielPZuNarWCssHMsLF73pQQIn&X-Amz-Signature=a0b050dd851940665ec741ea8c435f0fe1486871461d3a2eb46b69809410d33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
