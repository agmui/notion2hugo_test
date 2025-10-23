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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25Q3CEA%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhNVxYWiI1V3N2h4vPBwELGc3jfNpDFBEQIjtIrfJqPAiAErC6sWRQ%2FYMManob7DkzD2h7wQWawh7vihS26CTxCOSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMgQNa9t6yTtIMGlsiKtwDUujnukRT%2FOKE3nxMNhbkgxxafjTGJOzB85HOr%2FKp2%2FsVaXxAPuhjzKYbIpmtL8yJt%2BW4Uc061ID2ym%2BVqog1UIG9HKj8%2Ba14mLZxyi2r28anPErsHAf7PcUj4Tsw4fBnedEuXwA0VF6ED58dE7o8xaS2kTFMJw2p1No3c%2FNfUVxZtsTmnT%2BIqG0Ef2WS0IWpgnMGm8DCyf%2FZWSBemPuhwIYM6WIpZQDLgZQWDYMclIZm2IOF40BWkt3X%2B0iMfBURNIFLkyq1TzMGacLp%2BytwpafxqtlofEqDG7EHjqYJqMFkhSfTsDxPM7oz8qvUIjpGY1kfrWypV1jNhViEWiE4uA38GkDS8peM16CpBJDQV2w%2Fmp9JrvCgklrOoP5k%2FP6UtMV6qd2qhzKDFtZaBf606Znh5aYKkZi%2BHOUUlx0cYW3tVEIeSm8QHWBJNuMUGB039oDoCrRW%2BzCZefdjGeYiQ%2Brl1Jqg3BuHZ9tRmYyw7v6Ixy386kDc2p2J7LX95JcriFiSV9jiIhUJN3xuiUGgt%2FJ0Trtx29NZBQxESwL3sgOgJ5Bla4WI0hhx6hdyaGgBnBT4K413lNTwPFElOYECgrHkLpzo4jS2tBe8GSIOo5rxzIWjnTuebs%2Bwb2UwjPDlxwY6pgGnpTY1cltCBmg0uy2TWImS1MBlq9Vvp4%2BZjcapppgmdGqO2Ytxxq1OeXnCqBVwjNJ4OHDeJU4LnewC8imqT6DD6Coi8LaeWPzMjQCwENZ%2F4X99E2MeDdAZ%2BMc4e8IGFxbFa%2FC%2FqLl%2FN28qFF01Pc8zR5ZBmzwUMinSfuO6il%2B2DpFHNtLO3UyaBcKTXb30rPuOVpXa1Nwb1Xb6TchaOYDmE6Ua5tQO&X-Amz-Signature=826930743c46f901c414ac6695ca58a4caf1dee1569f0bc2aaaca835d3894439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25Q3CEA%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhNVxYWiI1V3N2h4vPBwELGc3jfNpDFBEQIjtIrfJqPAiAErC6sWRQ%2FYMManob7DkzD2h7wQWawh7vihS26CTxCOSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMgQNa9t6yTtIMGlsiKtwDUujnukRT%2FOKE3nxMNhbkgxxafjTGJOzB85HOr%2FKp2%2FsVaXxAPuhjzKYbIpmtL8yJt%2BW4Uc061ID2ym%2BVqog1UIG9HKj8%2Ba14mLZxyi2r28anPErsHAf7PcUj4Tsw4fBnedEuXwA0VF6ED58dE7o8xaS2kTFMJw2p1No3c%2FNfUVxZtsTmnT%2BIqG0Ef2WS0IWpgnMGm8DCyf%2FZWSBemPuhwIYM6WIpZQDLgZQWDYMclIZm2IOF40BWkt3X%2B0iMfBURNIFLkyq1TzMGacLp%2BytwpafxqtlofEqDG7EHjqYJqMFkhSfTsDxPM7oz8qvUIjpGY1kfrWypV1jNhViEWiE4uA38GkDS8peM16CpBJDQV2w%2Fmp9JrvCgklrOoP5k%2FP6UtMV6qd2qhzKDFtZaBf606Znh5aYKkZi%2BHOUUlx0cYW3tVEIeSm8QHWBJNuMUGB039oDoCrRW%2BzCZefdjGeYiQ%2Brl1Jqg3BuHZ9tRmYyw7v6Ixy386kDc2p2J7LX95JcriFiSV9jiIhUJN3xuiUGgt%2FJ0Trtx29NZBQxESwL3sgOgJ5Bla4WI0hhx6hdyaGgBnBT4K413lNTwPFElOYECgrHkLpzo4jS2tBe8GSIOo5rxzIWjnTuebs%2Bwb2UwjPDlxwY6pgGnpTY1cltCBmg0uy2TWImS1MBlq9Vvp4%2BZjcapppgmdGqO2Ytxxq1OeXnCqBVwjNJ4OHDeJU4LnewC8imqT6DD6Coi8LaeWPzMjQCwENZ%2F4X99E2MeDdAZ%2BMc4e8IGFxbFa%2FC%2FqLl%2FN28qFF01Pc8zR5ZBmzwUMinSfuO6il%2B2DpFHNtLO3UyaBcKTXb30rPuOVpXa1Nwb1Xb6TchaOYDmE6Ua5tQO&X-Amz-Signature=5bf3dc819308d4120c4a08871b382e01cbcdab2e450f233bfa0e6cc66ca8fa85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
