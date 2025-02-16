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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HBEEPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCiNRy0OH8U9WGsHzbWHnt3KpXdncDRBfJrjUKH69st7gIgetGnQZVmN4Q%2BY%2FpVIvmehMeS8gqJKFAnQHApcyZ0aUsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIMgLDi7aCVroQov4yrcA1FhnNsXBa6dS%2B0pxOLDXN%2ByXZ5jU1jr4xh5q0qIuosgKaabE1U9y%2BmBAcnaMWu7%2BSfirWdjgVB4tSeNcbUgQTXbBYuUWDwx3Rw3b4XxhsTNogvQ7lirV38tnPHfR%2Blf8U%2F5StZM1Cn7GGIvN%2B0yHiGfbYPuYeIzFwj6G4njpC3lvyh58E0fPliHrgMlBL5G1D6dxX67b1bF3soxFTIeV9KL6bynS81Pn0XBIbRxZ4tzL1M7RWbly6f1%2BAJd61j%2FLy63FDuzx%2FAfjzbd2ER5sVyESqjCzBz23Y26OGtLD6N8OarOHP9VS2CxBm2cQsHQ1dw21tWH%2FwnPU16Qkfd%2BTIb8GMRDXIndCP5NALHFW1qpc29eAzU5rRA76%2BYpS9QPTnXPNu1waf4VVCJwhhe4srBWixGHJ38wcU1CGnO3opUMGKilegDLnnzw%2BTCLp4pBAlty7cVCUdA1GvR7D3GI5xlkMp3YsP%2BoEZJO3nOf5QPFtpnN5OF%2Fqa9RzB5OnzUb4O7PYfrZo3l0D4SvhtZrBXcVJc9x%2FtCasukCBHzIsmZ2BLT%2FH7jKmtm5HoPLKdZKCPWs5Gc1AIbK7NP1GXxFuu0Iu6xGO0t3rXWtriyWVp3ksi%2BHUAOHZ33dT4bMMLKdx70GOqUB%2FE%2FftJIhRl85lOmnhg9IP8epUQg2HdVikYkX%2BWd8W3M5nB817%2FcllInKR%2Bjts8rQbIKj5BVmW2m91PlPDZniSFwyKz9WUZr0ECMb%2Bf2yeptJoILnZmjYzoaOKorVK9i3t6hvI537M4WHfaWL4i%2Bv7HYv%2BFPw8OPOnP130W5vTQfcdbHl%2BivG6Ke5wbQq7jimpA54W6ZXL8OWq7r2XhzsEsisbmv7&X-Amz-Signature=9fccb28786b0a4d6d06e8ea6ca249c766a31f34eb06e8f2ef742b04b72d1b0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HBEEPF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCiNRy0OH8U9WGsHzbWHnt3KpXdncDRBfJrjUKH69st7gIgetGnQZVmN4Q%2BY%2FpVIvmehMeS8gqJKFAnQHApcyZ0aUsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIMgLDi7aCVroQov4yrcA1FhnNsXBa6dS%2B0pxOLDXN%2ByXZ5jU1jr4xh5q0qIuosgKaabE1U9y%2BmBAcnaMWu7%2BSfirWdjgVB4tSeNcbUgQTXbBYuUWDwx3Rw3b4XxhsTNogvQ7lirV38tnPHfR%2Blf8U%2F5StZM1Cn7GGIvN%2B0yHiGfbYPuYeIzFwj6G4njpC3lvyh58E0fPliHrgMlBL5G1D6dxX67b1bF3soxFTIeV9KL6bynS81Pn0XBIbRxZ4tzL1M7RWbly6f1%2BAJd61j%2FLy63FDuzx%2FAfjzbd2ER5sVyESqjCzBz23Y26OGtLD6N8OarOHP9VS2CxBm2cQsHQ1dw21tWH%2FwnPU16Qkfd%2BTIb8GMRDXIndCP5NALHFW1qpc29eAzU5rRA76%2BYpS9QPTnXPNu1waf4VVCJwhhe4srBWixGHJ38wcU1CGnO3opUMGKilegDLnnzw%2BTCLp4pBAlty7cVCUdA1GvR7D3GI5xlkMp3YsP%2BoEZJO3nOf5QPFtpnN5OF%2Fqa9RzB5OnzUb4O7PYfrZo3l0D4SvhtZrBXcVJc9x%2FtCasukCBHzIsmZ2BLT%2FH7jKmtm5HoPLKdZKCPWs5Gc1AIbK7NP1GXxFuu0Iu6xGO0t3rXWtriyWVp3ksi%2BHUAOHZ33dT4bMMLKdx70GOqUB%2FE%2FftJIhRl85lOmnhg9IP8epUQg2HdVikYkX%2BWd8W3M5nB817%2FcllInKR%2Bjts8rQbIKj5BVmW2m91PlPDZniSFwyKz9WUZr0ECMb%2Bf2yeptJoILnZmjYzoaOKorVK9i3t6hvI537M4WHfaWL4i%2Bv7HYv%2BFPw8OPOnP130W5vTQfcdbHl%2BivG6Ke5wbQq7jimpA54W6ZXL8OWq7r2XhzsEsisbmv7&X-Amz-Signature=579aa9ef29dbd13110f832f91c90c049d5beb02bde86def6261338d8a0c9c9ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
