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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67UN6LK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCANWIIEXNhBGHmiqRUay2jziQfkfvhdiMwYjtMm1DbnQIgE5eq93NhvUfiXp3zOhXVKfCHWza5ntlYhfdcSma7qs4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgf9G8r%2FbIuCeJXYircA%2F3ItTq6P2S0XwA7wULIEO%2Bwe6JytnJk9EPYw3%2FaMP%2FOTk5B2ewB65qQ030hqe87xcWF0XI3hLpPb0j%2Bk3Ezbgt60vkNzPZFwAhKO%2FEbLgqmjynoEYIpYTS45JDQ%2BH5GXVr1NO%2FE07MTEkdrZjKpB49qrrZmD7nlIUX%2FvgFqdWuL2eIGFkkWuNfMEdL1ehfw9jRTFWE3Wj9JDSjWSXxW6i7PoF2eT1fk%2Fu%2F7wqETBSROZhgcMkh%2Byji%2BKSgCzSxE9xA3jU2BfMtsLPNiutKI5ITGdl1HjfDW2hys0%2Bxv4mW9LmtQLdAo0aQMqq07wsDjFxE8Lmbp5%2BR5tp4dVVizs5i2fwYDuO4WrIb20Ar4y4v3fW4%2FjhtE%2FRyIOpNDXQIjS8dW27KkD8The%2BhsTfjsxjq4%2Ff5ok1tjHG2cvWTW0AOvbcE3QPreooFfMQFcrtme5FcYYVaevRO10kf8QIUFVELwK6%2BydwbZG5RxmPgva%2FHtJWdmHxbK0eqCwygPy%2FsXmq9qH1OICavsK9t2MkDSdTOkwyFPJ7E90n6DyGVJ3FIJrix2B28wBTLjmTzQdTuopdF3oDKKwQc8LF9Fu%2F2fpl9cNaya5FTmHghOmJUoFu%2FCHKHQMLi780FByOCkMK%2B9%2B7wGOqUB1LoEqgTT4CStvIbpI%2FfTnEKOJTcfuZ%2F5pu3nzpCt%2Bd82CXqI03QG9pEpZbmk96OTwd9G75eqSzY3Nit18AHHrWEQXABeOQ2vJzWnOSanUuflgdc%2FXD9d3ocyJkKfHz3ma2SZI%2BntLLoviQxzbEsvKnrXviRVpDs24jasKUJOZKaiq%2BaYdB2Yl9h9AtrQyoB%2Bxn9rM%2F2jGFyVMpTtgsY43OBCME5u&X-Amz-Signature=031807716a548ef72ab6c6f93bb14df5176e3e574a142ef3339cdfe2b003cc37&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67UN6LK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCANWIIEXNhBGHmiqRUay2jziQfkfvhdiMwYjtMm1DbnQIgE5eq93NhvUfiXp3zOhXVKfCHWza5ntlYhfdcSma7qs4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgf9G8r%2FbIuCeJXYircA%2F3ItTq6P2S0XwA7wULIEO%2Bwe6JytnJk9EPYw3%2FaMP%2FOTk5B2ewB65qQ030hqe87xcWF0XI3hLpPb0j%2Bk3Ezbgt60vkNzPZFwAhKO%2FEbLgqmjynoEYIpYTS45JDQ%2BH5GXVr1NO%2FE07MTEkdrZjKpB49qrrZmD7nlIUX%2FvgFqdWuL2eIGFkkWuNfMEdL1ehfw9jRTFWE3Wj9JDSjWSXxW6i7PoF2eT1fk%2Fu%2F7wqETBSROZhgcMkh%2Byji%2BKSgCzSxE9xA3jU2BfMtsLPNiutKI5ITGdl1HjfDW2hys0%2Bxv4mW9LmtQLdAo0aQMqq07wsDjFxE8Lmbp5%2BR5tp4dVVizs5i2fwYDuO4WrIb20Ar4y4v3fW4%2FjhtE%2FRyIOpNDXQIjS8dW27KkD8The%2BhsTfjsxjq4%2Ff5ok1tjHG2cvWTW0AOvbcE3QPreooFfMQFcrtme5FcYYVaevRO10kf8QIUFVELwK6%2BydwbZG5RxmPgva%2FHtJWdmHxbK0eqCwygPy%2FsXmq9qH1OICavsK9t2MkDSdTOkwyFPJ7E90n6DyGVJ3FIJrix2B28wBTLjmTzQdTuopdF3oDKKwQc8LF9Fu%2F2fpl9cNaya5FTmHghOmJUoFu%2FCHKHQMLi780FByOCkMK%2B9%2B7wGOqUB1LoEqgTT4CStvIbpI%2FfTnEKOJTcfuZ%2F5pu3nzpCt%2Bd82CXqI03QG9pEpZbmk96OTwd9G75eqSzY3Nit18AHHrWEQXABeOQ2vJzWnOSanUuflgdc%2FXD9d3ocyJkKfHz3ma2SZI%2BntLLoviQxzbEsvKnrXviRVpDs24jasKUJOZKaiq%2BaYdB2Yl9h9AtrQyoB%2Bxn9rM%2F2jGFyVMpTtgsY43OBCME5u&X-Amz-Signature=9916ef47ac24257f8ddc656de812a2331971ef1af43d86738355186936913b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
