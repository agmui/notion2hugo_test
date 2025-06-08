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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLW5QUXG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAccTFHI9YGe6%2BOriWdyyK6eC2Dhmn3Wt6P%2BeMnGf3wPAiAR%2FQr7mgFTyaRVBYm6eSOKnxMUdrQHYOP6g7kMcQHpyiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXqb8q%2BKhZdLt5wFkKtwDSY3WCbDNGy5RTOaCTT8v6Lu42b55%2BfXrfkNNskkukKxXPXvq5BInvQNir%2Fg1SSVMCczpVHAzEg%2BijNeKcHxhGG7oyxOqkOSLgXHjil8tC1B4xtfMZV7VkMYnoLvO%2BG7J3wulNoRcIpPrRh1NWjULTCA2TKX0sqinhI35J7B6nCw8kT0hmrWFzowCDFPqIQk9qroY%2Fo3fl%2B6KSaL4YlvVGUqHHO5auUH%2BC2fIGurCK3pnWK76IQhLQ78sRXQiOIXFy7UIBQUaflMtu0MvmYKRtauQy5t0X3F%2FZaUpeJtmD7rVDr%2BGZnb8665FiFSNo6LNxsGsN5FowZv9tFwPDd%2FLaNiXHZfG3yxPZ5rrtJK2SiHz%2BtSXxMu%2FeWenkRO7FO8L93HgXBy%2BXY4L9oggVXcdE3A2Qm2XsDcG7ZpXSCSfZHBtQQznQWZ6rR0pNYL4BkUor5pCXehzU7%2Ff8CMFEhQamCj6tMgW%2BK%2FGhhE4z7pHhjI0aMppl9hxg2GdjRcS8WffSiaW7tt4nn%2FM38m2CcHnYU1T%2FTN3xuz03PuWOgVe1XWWnf0xrS2eMwABQSGxnjbUZTl%2FWpWrMvFcm%2F1iWNFLTH66F478%2FwWBMery%2Fqp%2BpWsoaEyQ3lagN4bXJVcwrLKWwgY6pgH6HOh0HpokcZhEYS1TxcOJ9iEnEW4xRxtAaZAa3g27DYSmhlwak7rymz1JPX8JwqngKgCzTawSXqt1iaNXoNDFzL4c%2F%2BWZuIK9R8gWgyOqol%2FD2f74TNjPvOjq%2Bmzj%2FlkakjYdi7nRGI7e7nm3v%2FD79mxVz54JV%2FrQRp88mZn3mhLrt3kYyhmUTQ9AxbyX%2By0phNxWJHnDPeH%2FXctVmwLHkJ2OSr3y&X-Amz-Signature=36335d8b896a85b16110398a1df05fa9318fc8d87ac9803df45ac7a36edbdf03&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLW5QUXG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAccTFHI9YGe6%2BOriWdyyK6eC2Dhmn3Wt6P%2BeMnGf3wPAiAR%2FQr7mgFTyaRVBYm6eSOKnxMUdrQHYOP6g7kMcQHpyiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXqb8q%2BKhZdLt5wFkKtwDSY3WCbDNGy5RTOaCTT8v6Lu42b55%2BfXrfkNNskkukKxXPXvq5BInvQNir%2Fg1SSVMCczpVHAzEg%2BijNeKcHxhGG7oyxOqkOSLgXHjil8tC1B4xtfMZV7VkMYnoLvO%2BG7J3wulNoRcIpPrRh1NWjULTCA2TKX0sqinhI35J7B6nCw8kT0hmrWFzowCDFPqIQk9qroY%2Fo3fl%2B6KSaL4YlvVGUqHHO5auUH%2BC2fIGurCK3pnWK76IQhLQ78sRXQiOIXFy7UIBQUaflMtu0MvmYKRtauQy5t0X3F%2FZaUpeJtmD7rVDr%2BGZnb8665FiFSNo6LNxsGsN5FowZv9tFwPDd%2FLaNiXHZfG3yxPZ5rrtJK2SiHz%2BtSXxMu%2FeWenkRO7FO8L93HgXBy%2BXY4L9oggVXcdE3A2Qm2XsDcG7ZpXSCSfZHBtQQznQWZ6rR0pNYL4BkUor5pCXehzU7%2Ff8CMFEhQamCj6tMgW%2BK%2FGhhE4z7pHhjI0aMppl9hxg2GdjRcS8WffSiaW7tt4nn%2FM38m2CcHnYU1T%2FTN3xuz03PuWOgVe1XWWnf0xrS2eMwABQSGxnjbUZTl%2FWpWrMvFcm%2F1iWNFLTH66F478%2FwWBMery%2Fqp%2BpWsoaEyQ3lagN4bXJVcwrLKWwgY6pgH6HOh0HpokcZhEYS1TxcOJ9iEnEW4xRxtAaZAa3g27DYSmhlwak7rymz1JPX8JwqngKgCzTawSXqt1iaNXoNDFzL4c%2F%2BWZuIK9R8gWgyOqol%2FD2f74TNjPvOjq%2Bmzj%2FlkakjYdi7nRGI7e7nm3v%2FD79mxVz54JV%2FrQRp88mZn3mhLrt3kYyhmUTQ9AxbyX%2By0phNxWJHnDPeH%2FXctVmwLHkJ2OSr3y&X-Amz-Signature=bac9b76646e6e63585e6f685f9cbe18837804209490157c9196b0e943511110e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
