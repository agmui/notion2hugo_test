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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5HXLUC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDXI%2BoqbUm999mLSxyAvUbg7bTcN%2F9PFVXxOQ4UIDI1ZAiEAvz0eBXsz2iPdT9n2H6jhRRlU0uV5XkDNtI42QlCd%2FV4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLUz8RQciQ704yNawCrcAy2BJlUmPfp21oRNJ%2Fz%2F24Ts0iqYplQRLmJvS8oWX4Dr9%2FV30w6HK5JPPlDDnbjqrmpty9G7%2BK5CnuOSQaixVC8l8PA1KNGc5H7hWKWwrXgWq9ZZAWmhFHssDImPfH9san1EDz%2Bi8CMsnotWk4VcUhbhOMrNA0H9vQgPZdTAx6YAxIv3P7LQOjZ4518CbyhO8bGH8CUUeFy9PDjNuIK9lPzMV8%2FLxga7y8XlvKPPshNyjMuKF4DDh5p%2BhmrUP5w5895UX681Usam2%2FuqZb2mrlmIsiLNn8B9Z2iKLT%2BajEulca6I1Xu5frDihMA0qVQyZ6K49YI5nMPS%2BUp8lJe%2BJz8WZ84SpiQW%2Fet6fS6kT%2BdJfhbr7MG%2FLjcntcyQkGZij8EjZ691a1rQzBCS%2BFBUPxvXVnKZgfQrWDiinYt65KIZ7piYgfPBCZ1Zn37U4ULgBthA188qQjhwAY1f22Ay51OwcSpSMzPqux%2BLajqxmHLBjA2%2Fuv5IrP2TRFPiwyVOA5M6OynCvB%2BP%2BP1U1OoRC1EaHC9PxTMON18VzaSbtDS5775x08sBFt3%2Fy9aRddGOQd3RGEjO7X3DaW77RylfHXEVY0xdlEM2tI%2B8daGLnO6iXXv3RCSDzioowRVZMNKg%2BMIGOqUBfZGMgYb9J0FoIOBlSVXaIVU5MhCws2rx69OdpxgXJN6zhNb2kkZSinEG5VvjaVcHBJebLv3NnLbm%2FN8Q0L8Qp0210M6FLS8bmlVl4v5Hmmul7Z%2FQquLlMa7xdnHqwMnkq6MeRQOw1achykeLDl481tKMUrzLzA0Nj12vdwz6m%2BQ6UkKhQh9n0byFQhgftNHiLLjoHQCOQe5biBhcwyuEvWpsAGpv&X-Amz-Signature=af236af2e43bac34d7a19c4f509265d11d70fb431eba2f4ea9280c1c71dff8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5HXLUC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDXI%2BoqbUm999mLSxyAvUbg7bTcN%2F9PFVXxOQ4UIDI1ZAiEAvz0eBXsz2iPdT9n2H6jhRRlU0uV5XkDNtI42QlCd%2FV4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLUz8RQciQ704yNawCrcAy2BJlUmPfp21oRNJ%2Fz%2F24Ts0iqYplQRLmJvS8oWX4Dr9%2FV30w6HK5JPPlDDnbjqrmpty9G7%2BK5CnuOSQaixVC8l8PA1KNGc5H7hWKWwrXgWq9ZZAWmhFHssDImPfH9san1EDz%2Bi8CMsnotWk4VcUhbhOMrNA0H9vQgPZdTAx6YAxIv3P7LQOjZ4518CbyhO8bGH8CUUeFy9PDjNuIK9lPzMV8%2FLxga7y8XlvKPPshNyjMuKF4DDh5p%2BhmrUP5w5895UX681Usam2%2FuqZb2mrlmIsiLNn8B9Z2iKLT%2BajEulca6I1Xu5frDihMA0qVQyZ6K49YI5nMPS%2BUp8lJe%2BJz8WZ84SpiQW%2Fet6fS6kT%2BdJfhbr7MG%2FLjcntcyQkGZij8EjZ691a1rQzBCS%2BFBUPxvXVnKZgfQrWDiinYt65KIZ7piYgfPBCZ1Zn37U4ULgBthA188qQjhwAY1f22Ay51OwcSpSMzPqux%2BLajqxmHLBjA2%2Fuv5IrP2TRFPiwyVOA5M6OynCvB%2BP%2BP1U1OoRC1EaHC9PxTMON18VzaSbtDS5775x08sBFt3%2Fy9aRddGOQd3RGEjO7X3DaW77RylfHXEVY0xdlEM2tI%2B8daGLnO6iXXv3RCSDzioowRVZMNKg%2BMIGOqUBfZGMgYb9J0FoIOBlSVXaIVU5MhCws2rx69OdpxgXJN6zhNb2kkZSinEG5VvjaVcHBJebLv3NnLbm%2FN8Q0L8Qp0210M6FLS8bmlVl4v5Hmmul7Z%2FQquLlMa7xdnHqwMnkq6MeRQOw1achykeLDl481tKMUrzLzA0Nj12vdwz6m%2BQ6UkKhQh9n0byFQhgftNHiLLjoHQCOQe5biBhcwyuEvWpsAGpv&X-Amz-Signature=9bf70b41491995a63af063dbbb28a684bec741e0b7a69c077ca6f93e9a053321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
