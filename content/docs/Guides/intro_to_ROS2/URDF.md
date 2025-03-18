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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEWDF4P%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICbDPHRSQUD8ukf1TGHqF42olkB1AKc45bUpjB4tf754AiEAiUKxtPoIHaGhhaf7JdSFZcvU71Hi3iLCP4fgGABH1d0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOid67enfdHMSyHqjCrcA9qUm7DoJtr2RXtzT9xe06Rshe4vGgheo8lF9LIDMmx3b1Pv5PZaE4nPrShnvde480NDdkMiVKZ8BbcHf50OcHTYVfJ23dRxSDMi29mor8Uxh0a04CFP5VqroWxCg9dnVjF%2BnzH0Yuvcn1GZBbS%2BQyE3psqr9gJ32cinCdukoz7V91TjxnFk%2FmtVJhT9bRJnEwCVRdfb1Bxw0ATUVeCuDWFoaUUaXpJWIwuwACLRRN6KbxPMrUmnRB02TpfSQxLnGU%2Bt3Dw5N6l2zImMG0vHbRhqDOWLN7h31%2FTxiL7JMLIpkrf0Vb7LRXUYotPfHB1pZmwNiy6SZ1H%2FHcLRpu7IVzylmhzhA3wcNcoGSHfvhTv%2BOwq%2FthU3imXc2lo7slgUE9ZHJmfgUL1FyJcGMNNXF17luJsdVD23HGR9NlH%2BdEgzvSg2tqyb%2FhdU6eN%2Fv431o35i4odNnsrfkIG10vVaXq7GIUTjUzck7%2FS2EKmTS%2BH5uOsWOTsx36mIJ1jQiIe%2BfDL%2BO1RUTSKIyCUdSXxFxArMqmGqQRGBSi4dcCs2cxa0AtiujhB9yuHuLAhclXzJxX90DbrxTpvrO924CkKKWFcfDXyrlSVkT%2Bv6V2%2FCIc2e%2BbZLRCN93cdE3hp6MOaw574GOqUB5YDmgH%2BSpSrMsdfM3VcjxEvkjTOFHDoG3DQBhLZ7tQr6%2BOtjwjJZzy1BAHTVE94zyScofZ5pUOawD9AtItqvjUQzu7cMF3p1mIit9rpb7K5jle3Iyy4jkT8VAuKn%2Fs1wjvoQHo4U88mTIFRc695Fjt2AciCCvFxSvp1UkwSOYZlAW981Pm%2F2yF7bvdBpTq1XFyu4j7pF3p1MPDMZeXIDjOX2XnLz&X-Amz-Signature=85e80e373988cce84bceecaaeee3b68ab2b40e313bed4afabb6f2e75590e7168&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEWDF4P%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICbDPHRSQUD8ukf1TGHqF42olkB1AKc45bUpjB4tf754AiEAiUKxtPoIHaGhhaf7JdSFZcvU71Hi3iLCP4fgGABH1d0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOid67enfdHMSyHqjCrcA9qUm7DoJtr2RXtzT9xe06Rshe4vGgheo8lF9LIDMmx3b1Pv5PZaE4nPrShnvde480NDdkMiVKZ8BbcHf50OcHTYVfJ23dRxSDMi29mor8Uxh0a04CFP5VqroWxCg9dnVjF%2BnzH0Yuvcn1GZBbS%2BQyE3psqr9gJ32cinCdukoz7V91TjxnFk%2FmtVJhT9bRJnEwCVRdfb1Bxw0ATUVeCuDWFoaUUaXpJWIwuwACLRRN6KbxPMrUmnRB02TpfSQxLnGU%2Bt3Dw5N6l2zImMG0vHbRhqDOWLN7h31%2FTxiL7JMLIpkrf0Vb7LRXUYotPfHB1pZmwNiy6SZ1H%2FHcLRpu7IVzylmhzhA3wcNcoGSHfvhTv%2BOwq%2FthU3imXc2lo7slgUE9ZHJmfgUL1FyJcGMNNXF17luJsdVD23HGR9NlH%2BdEgzvSg2tqyb%2FhdU6eN%2Fv431o35i4odNnsrfkIG10vVaXq7GIUTjUzck7%2FS2EKmTS%2BH5uOsWOTsx36mIJ1jQiIe%2BfDL%2BO1RUTSKIyCUdSXxFxArMqmGqQRGBSi4dcCs2cxa0AtiujhB9yuHuLAhclXzJxX90DbrxTpvrO924CkKKWFcfDXyrlSVkT%2Bv6V2%2FCIc2e%2BbZLRCN93cdE3hp6MOaw574GOqUB5YDmgH%2BSpSrMsdfM3VcjxEvkjTOFHDoG3DQBhLZ7tQr6%2BOtjwjJZzy1BAHTVE94zyScofZ5pUOawD9AtItqvjUQzu7cMF3p1mIit9rpb7K5jle3Iyy4jkT8VAuKn%2Fs1wjvoQHo4U88mTIFRc695Fjt2AciCCvFxSvp1UkwSOYZlAW981Pm%2F2yF7bvdBpTq1XFyu4j7pF3p1MPDMZeXIDjOX2XnLz&X-Amz-Signature=b2ebd7d351d75026eb20f3f31f08851d9233e2d287b90db5f6291ba3aded693b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
