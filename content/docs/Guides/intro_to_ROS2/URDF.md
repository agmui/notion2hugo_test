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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXYA5VA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIdVaHEJIQQi09sVFtQ0WAPnXU2IwrksyL55EBt75r1AIgIl%2F2PM3mqn3iuendyWxhy7FR7j5mCpNOkFL3uh%2BoP6Yq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDhYII2%2FSBHLLw4TcyrcA72a3lylL9BQHZ7EFgqHtXKrLEuU46pZvWiG3ityAjdncCLHXAfeukm%2BpZDgIvTZJTYNSZn3lsTFlqQ7AM1e0mwJ3N7aDkNufR8yQCEb7xbPlWi1G%2BcqIAfe7QoJhyyC0q14VMHBDWxr41vSywQpe4CPFwELJocRPz5Zz6N7ND%2F4vzt83komUHsb2YO3VkfxOBRjTd4FK5sZ%2FAQpKaBEUGLILM1napelg2ueiId%2Bh7Sc73CBjTdEXka05mq%2FFWN9VjXhQHKf39zsIgTbG4jq8ieSsAz8zrPgOr78JlIfIk8UX4H5wHr4FEaBQ%2FFVSoh2WlTw%2BkhLsrQa0laSLBEPVnT3scRWmKV3iAcjyhP8YJOvKn83Bow0r5pAKcY7rpux6PQww4ch8kOrcx8SNCq7mQx39pbBAIEgBPWvkLIqftiDxBe5%2FCMhY4d35E7NnfTH1mAAlu0cIHWM9939pKUQBg%2B1ib%2F0ZkzsjXneVmkKDHXGtj%2FKBXVa09o1WIu7cbcX1JL2XRSGGotBpfwzZu1QJbMuYwntMS%2BgeyQSv2smLbyxi8994ymspE7%2FCL0F9dF7RY1KUp%2FrhGtO%2BayJRLgsb8koblMKPYPIGyXz23VmRaExgMgG9eVUf4W%2BW8H4MNjJ2MEGOqUBdNyUMCvJ0pPekP0r0uNvgxWsqFOn3mTfOwutdajudPgj9nBTvH7M0wUmgMY%2F%2FEASexXZkIhWPC2kgzdK%2Fo8pk2%2BypLncRIYLmLISDyC4wWtJTx0MA31JfX3weRKntjSpdZ59oZWDYGYbNJQfl5bUKJjbDSQCPsiLiNW%2F%2BqYEuSYP5NGmSUEJ64dyPHhjfkjJIdDiO0tjEMKR%2Fky%2F7RQwahZhu%2Br8&X-Amz-Signature=bd77a72eaa959d5ce16bf7a8865192da76b97bce461fa2f5c264e3119eab8403&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UXYA5VA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIdVaHEJIQQi09sVFtQ0WAPnXU2IwrksyL55EBt75r1AIgIl%2F2PM3mqn3iuendyWxhy7FR7j5mCpNOkFL3uh%2BoP6Yq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDhYII2%2FSBHLLw4TcyrcA72a3lylL9BQHZ7EFgqHtXKrLEuU46pZvWiG3ityAjdncCLHXAfeukm%2BpZDgIvTZJTYNSZn3lsTFlqQ7AM1e0mwJ3N7aDkNufR8yQCEb7xbPlWi1G%2BcqIAfe7QoJhyyC0q14VMHBDWxr41vSywQpe4CPFwELJocRPz5Zz6N7ND%2F4vzt83komUHsb2YO3VkfxOBRjTd4FK5sZ%2FAQpKaBEUGLILM1napelg2ueiId%2Bh7Sc73CBjTdEXka05mq%2FFWN9VjXhQHKf39zsIgTbG4jq8ieSsAz8zrPgOr78JlIfIk8UX4H5wHr4FEaBQ%2FFVSoh2WlTw%2BkhLsrQa0laSLBEPVnT3scRWmKV3iAcjyhP8YJOvKn83Bow0r5pAKcY7rpux6PQww4ch8kOrcx8SNCq7mQx39pbBAIEgBPWvkLIqftiDxBe5%2FCMhY4d35E7NnfTH1mAAlu0cIHWM9939pKUQBg%2B1ib%2F0ZkzsjXneVmkKDHXGtj%2FKBXVa09o1WIu7cbcX1JL2XRSGGotBpfwzZu1QJbMuYwntMS%2BgeyQSv2smLbyxi8994ymspE7%2FCL0F9dF7RY1KUp%2FrhGtO%2BayJRLgsb8koblMKPYPIGyXz23VmRaExgMgG9eVUf4W%2BW8H4MNjJ2MEGOqUBdNyUMCvJ0pPekP0r0uNvgxWsqFOn3mTfOwutdajudPgj9nBTvH7M0wUmgMY%2F%2FEASexXZkIhWPC2kgzdK%2Fo8pk2%2BypLncRIYLmLISDyC4wWtJTx0MA31JfX3weRKntjSpdZ59oZWDYGYbNJQfl5bUKJjbDSQCPsiLiNW%2F%2BqYEuSYP5NGmSUEJ64dyPHhjfkjJIdDiO0tjEMKR%2Fky%2F7RQwahZhu%2Br8&X-Amz-Signature=7abe0c52235e6954081e4e620141b0a45ea2e782711cc412c2ec8562fb5188ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
