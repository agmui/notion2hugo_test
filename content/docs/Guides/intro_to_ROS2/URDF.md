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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7KPBAV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCz3f2poatZx4XFQmkjaZFJVipK%2B4uPy2U372gwR29DVgIhAPGqFaaX%2Bm5DQSgij8m6zV6%2FXCsAzP7mrKl%2BbdFLImVkKv8DCFEQABoMNjM3NDIzMTgzODA1IgyBZ%2BU8myScG8IJ03wq3AMKP0up%2Fa3kA4E1vh1kaMW2UFPtu%2BPEFU16RR993yqJo3XHf4kJRwh8S57luRCnsS3CAft%2BtZudbhWyM11vJYwYA%2FbqJQAIjF6nGeuDW%2B1%2BNZ3S%2B%2Bivtn%2BwpVMeB24dYR1YnA2i5kxaNMegDDhYrtCdIS8Lbq8R%2FAu6RaOVTRoq3EtCd0rSSPo8eH3uCEZKuG3KMfxQmos04Ku8IefJLxK%2FEsXlf7e6tPX3sPc5biaFCJmWBhDsTRH8bUEZqgQOBYuMN4gMAW2wVrr0s4HZrGKKDnsjaYhkxV%2BNNGDerbHeJF1dT22NkTEcLVnQSp2%2BeaB7NLoVCNUakHbMNlFGyckEE9r%2BT3s3TWfaR5iXsBulWvinulOVpnhBeqP4%2Fzi8GDVuB%2BCyn9PgvFiZvEvF6rh3JE3DX3e8bIh01mdgBV0YTDgD6RYUCPOX2ydo1KFoVsgxg0xXenVAih%2Fx0DyRlCLIuB%2Ffj4svv%2FsEAXqr8h0Njg9TtgjErG1rS6tZ0wmI%2FlFbarE%2BmWn0mBldMPfc4Y8IJldBDdO0SGDhsKzpPsQhJbkjDIAnURud8PLpBT2ORfAxgvNyMsvMRyR0GMu1UV%2FDq1ga%2BQOq3sv%2BHAgcP3Qa7GtK5p5s4Wc7v3BQzDCB7Y%2B9BjqkAdvmJbgbOQY%2F6D5T%2B2RRHEP5i%2Fqu0o5nBBRtpZRX2T1znsguiLqgRsmDNiaM6OKjmpoNQw9J9fXQiCsDCIpXTU0%2F5zIBv0ylmUlZcBJehHKVyYkW%2FdIzafBavwAs1hxQ%2Bk2%2BcYjDDkhh5h0rRaITj4XX0zQFfUAyxDL1ridmReVUC41ueefZ6P76LfZzqVP2yeBPTjXYBK%2B4s6HS79%2BLPC2zQUin&X-Amz-Signature=1e2783f14875d93ad683a2987f9ebf3d19f2a212d49b1bbbbb543846e9de133a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7KPBAV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCz3f2poatZx4XFQmkjaZFJVipK%2B4uPy2U372gwR29DVgIhAPGqFaaX%2Bm5DQSgij8m6zV6%2FXCsAzP7mrKl%2BbdFLImVkKv8DCFEQABoMNjM3NDIzMTgzODA1IgyBZ%2BU8myScG8IJ03wq3AMKP0up%2Fa3kA4E1vh1kaMW2UFPtu%2BPEFU16RR993yqJo3XHf4kJRwh8S57luRCnsS3CAft%2BtZudbhWyM11vJYwYA%2FbqJQAIjF6nGeuDW%2B1%2BNZ3S%2B%2Bivtn%2BwpVMeB24dYR1YnA2i5kxaNMegDDhYrtCdIS8Lbq8R%2FAu6RaOVTRoq3EtCd0rSSPo8eH3uCEZKuG3KMfxQmos04Ku8IefJLxK%2FEsXlf7e6tPX3sPc5biaFCJmWBhDsTRH8bUEZqgQOBYuMN4gMAW2wVrr0s4HZrGKKDnsjaYhkxV%2BNNGDerbHeJF1dT22NkTEcLVnQSp2%2BeaB7NLoVCNUakHbMNlFGyckEE9r%2BT3s3TWfaR5iXsBulWvinulOVpnhBeqP4%2Fzi8GDVuB%2BCyn9PgvFiZvEvF6rh3JE3DX3e8bIh01mdgBV0YTDgD6RYUCPOX2ydo1KFoVsgxg0xXenVAih%2Fx0DyRlCLIuB%2Ffj4svv%2FsEAXqr8h0Njg9TtgjErG1rS6tZ0wmI%2FlFbarE%2BmWn0mBldMPfc4Y8IJldBDdO0SGDhsKzpPsQhJbkjDIAnURud8PLpBT2ORfAxgvNyMsvMRyR0GMu1UV%2FDq1ga%2BQOq3sv%2BHAgcP3Qa7GtK5p5s4Wc7v3BQzDCB7Y%2B9BjqkAdvmJbgbOQY%2F6D5T%2B2RRHEP5i%2Fqu0o5nBBRtpZRX2T1znsguiLqgRsmDNiaM6OKjmpoNQw9J9fXQiCsDCIpXTU0%2F5zIBv0ylmUlZcBJehHKVyYkW%2FdIzafBavwAs1hxQ%2Bk2%2BcYjDDkhh5h0rRaITj4XX0zQFfUAyxDL1ridmReVUC41ueefZ6P76LfZzqVP2yeBPTjXYBK%2B4s6HS79%2BLPC2zQUin&X-Amz-Signature=df86cef3f6607c5355531f36e6eee7bfab146976591f97173d594b0f0bcb4145&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
