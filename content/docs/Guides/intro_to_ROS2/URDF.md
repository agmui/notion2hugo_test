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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASAMKJ6%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtkIeiU03OiD7klwUUfAWPY8tKGAbAx1Zmlhn8rpL1fwIgDvc%2BnS0BTNNKoGaIlJdhEhE0WaLa1PB0ISwLXFQqJjkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDM1anBzGxCaRtId%2BbircA%2FiTJALOxWPZZmbxIH4URSKZ3bQ90n0%2FVut5mL8QE%2FI4rz4wMpwi7DnkDoWsC3k21loKqUwY5cJHbAuSlCqOptLAqwebYp1mfXD5G17usRDqBoysPRcq7Jc4yFhIRfoqeksD2yj4hcrjFIaw9GuY1Zj%2FgXzlpeIY%2BPAnomoSayegu44Bq871oBK2s2OEcuyegE%2BU0S%2BJvcjcuNcNEI46NTfD0cI2hBHIzXaXm6yCSGhO1Yg9crVD3GnZ4yK0HLPm39qutoPq%2FR2ldm%2BZzXfIr%2BCywwikX8E00iLN2Cgt2pn0R99n8A8WCDFq%2BOmYMrBNxr%2FOU7gk3%2BnYsAeF2JLn9JfFaCGTBaf%2FfYypU%2FvDAGW6PopaNZivmVzkb2HsKD1Gd0zddr9dsS2cjQmCBpjR7rl3%2B3USfCsLv%2BPN%2FjojQ3UToIs2W%2FHNlrxZIvaVF1gYmQLYbSkzJ0QOEDJaonVc%2FToIxoXMTExyJxpfFDXZvKA9dGimC06rue5S8HZn%2BHF3%2FRs1Eq4ofFIv0xjnPz81iCM0RvSd6nT20NCsqjeQqssqQMcRXV7afn0FxSUgbQXyM4cIQAzbyER7b5DD9TuzNnK6iELa5fPB92IFBbotaezex1a%2FRbCeQK%2BvBbpmMNbPm8sGOqUB4FHEE2dA24b5962QyDnaDI49Z7i3qS2DDRurpHVeZ7MM6wEV%2FRACrcgtXiQUJ6RYt%2FqhsBUNuxrg8P%2FGOwlTT%2BfjC47SC0CTPBgjWUdFuptCQ4HXgHm3MwZzL%2B5QOQ4NHXCE3Kp0YGt61H1CvTvfTgE1LT0WkU3vbggpHH7OQ431BpcQTzMKxV0NPGJoX7nMXMXPUUI7gtjn2tFQE9aeAjVYyw9Y&X-Amz-Signature=0ec4279f2dbe75b1338d207191a439e0dcfdcc126ba93f38dd3fab843d06442b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASAMKJ6%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtkIeiU03OiD7klwUUfAWPY8tKGAbAx1Zmlhn8rpL1fwIgDvc%2BnS0BTNNKoGaIlJdhEhE0WaLa1PB0ISwLXFQqJjkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDM1anBzGxCaRtId%2BbircA%2FiTJALOxWPZZmbxIH4URSKZ3bQ90n0%2FVut5mL8QE%2FI4rz4wMpwi7DnkDoWsC3k21loKqUwY5cJHbAuSlCqOptLAqwebYp1mfXD5G17usRDqBoysPRcq7Jc4yFhIRfoqeksD2yj4hcrjFIaw9GuY1Zj%2FgXzlpeIY%2BPAnomoSayegu44Bq871oBK2s2OEcuyegE%2BU0S%2BJvcjcuNcNEI46NTfD0cI2hBHIzXaXm6yCSGhO1Yg9crVD3GnZ4yK0HLPm39qutoPq%2FR2ldm%2BZzXfIr%2BCywwikX8E00iLN2Cgt2pn0R99n8A8WCDFq%2BOmYMrBNxr%2FOU7gk3%2BnYsAeF2JLn9JfFaCGTBaf%2FfYypU%2FvDAGW6PopaNZivmVzkb2HsKD1Gd0zddr9dsS2cjQmCBpjR7rl3%2B3USfCsLv%2BPN%2FjojQ3UToIs2W%2FHNlrxZIvaVF1gYmQLYbSkzJ0QOEDJaonVc%2FToIxoXMTExyJxpfFDXZvKA9dGimC06rue5S8HZn%2BHF3%2FRs1Eq4ofFIv0xjnPz81iCM0RvSd6nT20NCsqjeQqssqQMcRXV7afn0FxSUgbQXyM4cIQAzbyER7b5DD9TuzNnK6iELa5fPB92IFBbotaezex1a%2FRbCeQK%2BvBbpmMNbPm8sGOqUB4FHEE2dA24b5962QyDnaDI49Z7i3qS2DDRurpHVeZ7MM6wEV%2FRACrcgtXiQUJ6RYt%2FqhsBUNuxrg8P%2FGOwlTT%2BfjC47SC0CTPBgjWUdFuptCQ4HXgHm3MwZzL%2B5QOQ4NHXCE3Kp0YGt61H1CvTvfTgE1LT0WkU3vbggpHH7OQ431BpcQTzMKxV0NPGJoX7nMXMXPUUI7gtjn2tFQE9aeAjVYyw9Y&X-Amz-Signature=abe154d96913f3e5df19cf480e33e86798d086dfc3573c1fc33c4313f3d13920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
