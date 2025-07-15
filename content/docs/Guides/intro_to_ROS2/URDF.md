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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5ULEOQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIADWs2TV5q4PF1A9DWANikuCNjEtKqDit7aEoiVNUBs5AiEA2ng5D0w%2BPtxrlRebVcBtSk1ArdjyuG8h0VvrZ9f3gxAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDB5UIoZSpBE9oshflSrcA%2FLgryeKXrXCPrTgGHQtYWYVTXFaM2J6MpRzenCxPaoGqrK5uBMet%2BBsudkTqNBjCtCCzXrHcvBtaNSk2lKmQLCxxGSd1tK%2FIqJvcvBZy81L2tHPkiDAxzM2vHlmjGEJ57cgZHz5lAexrqKvPKBI0w9hqSAKfr7S%2FpQ%2FEercVOfabPiZgcl66EtJCjHfwcz5smuqvNSJi%2FvssE4dDaZaA%2Fid7jaiaK3fg2oI5e%2BAUlzigwZegRZ5mEZjrsIpbOyYx01kM5tktA7lmv4EH5ILKir%2B%2BhUe06UX91B6RFKtiEFCk1Ipsx6nd53bLQmcv4UXXNFBFo9vAc8OAGORMouqbpZXdB55RT855B2HTLDcedvKAYiVtvI0hdZEKGGkZX%2FUFgso8bSaPFZ3SsNfzU%2FphwkNqh9SLU9XXpM3rETRVQdyTSMk0ymUw8dhLOxiPsotNTbd%2B2SGSlLiGyRDx1sTzIadgGXXlSIbp6mqcCiIxJRfJ5kWEAl6akn8I13ga43q%2BqpmLRwrV8U4R5gHZhiWHd%2BrGVbHXwEDppqzfS9ucry%2B%2BiJHTRwMsUNDuvVGIjGAe5%2B42CDtAFtmuiKdKOzTViwjBGZQB07EchiyOtntSh5QPByNLtlq3zCpdTphMMX91sMGOqUBzidJUmh1euN2Av0lAtSlW3Ru%2Faxnviuybz%2Bpjk5PBtRhtF2Xwj8NtaR9GuRJhhmxW3S9WHnM%2B%2FD9ln6PyflDJLavup6G09WojEBt3AgDFCBildlHGnSqV0rzKsc0GbUpSptwP5%2BvaDbwjm2Tb7FUsRskFyGKRro16SVqfsJUBeZzzwyy03UmC62%2BLW0PhWgfqCRaysmMUtYlednVl0vuFenk2BoD&X-Amz-Signature=390c9c7a25521bc0782ecfdb48f03cc259a6b33430aa93b902846840660e32f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5ULEOQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIADWs2TV5q4PF1A9DWANikuCNjEtKqDit7aEoiVNUBs5AiEA2ng5D0w%2BPtxrlRebVcBtSk1ArdjyuG8h0VvrZ9f3gxAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDB5UIoZSpBE9oshflSrcA%2FLgryeKXrXCPrTgGHQtYWYVTXFaM2J6MpRzenCxPaoGqrK5uBMet%2BBsudkTqNBjCtCCzXrHcvBtaNSk2lKmQLCxxGSd1tK%2FIqJvcvBZy81L2tHPkiDAxzM2vHlmjGEJ57cgZHz5lAexrqKvPKBI0w9hqSAKfr7S%2FpQ%2FEercVOfabPiZgcl66EtJCjHfwcz5smuqvNSJi%2FvssE4dDaZaA%2Fid7jaiaK3fg2oI5e%2BAUlzigwZegRZ5mEZjrsIpbOyYx01kM5tktA7lmv4EH5ILKir%2B%2BhUe06UX91B6RFKtiEFCk1Ipsx6nd53bLQmcv4UXXNFBFo9vAc8OAGORMouqbpZXdB55RT855B2HTLDcedvKAYiVtvI0hdZEKGGkZX%2FUFgso8bSaPFZ3SsNfzU%2FphwkNqh9SLU9XXpM3rETRVQdyTSMk0ymUw8dhLOxiPsotNTbd%2B2SGSlLiGyRDx1sTzIadgGXXlSIbp6mqcCiIxJRfJ5kWEAl6akn8I13ga43q%2BqpmLRwrV8U4R5gHZhiWHd%2BrGVbHXwEDppqzfS9ucry%2B%2BiJHTRwMsUNDuvVGIjGAe5%2B42CDtAFtmuiKdKOzTViwjBGZQB07EchiyOtntSh5QPByNLtlq3zCpdTphMMX91sMGOqUBzidJUmh1euN2Av0lAtSlW3Ru%2Faxnviuybz%2Bpjk5PBtRhtF2Xwj8NtaR9GuRJhhmxW3S9WHnM%2B%2FD9ln6PyflDJLavup6G09WojEBt3AgDFCBildlHGnSqV0rzKsc0GbUpSptwP5%2BvaDbwjm2Tb7FUsRskFyGKRro16SVqfsJUBeZzzwyy03UmC62%2BLW0PhWgfqCRaysmMUtYlednVl0vuFenk2BoD&X-Amz-Signature=4797d5aa10cdd56760e061a412791ee98f4be80c9d68239f13b0ebeb34efaa33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
