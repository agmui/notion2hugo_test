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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HVN3CS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICzHfUya%2FJsKkVINolH1cq0%2FTqav9UPhoA8esd%2FqQ8ASAiEA0VKRt543v2ZiSuL4IWO5mwIJdQgUradXtbNQnqWYG5cqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BuQMrOQxZ57hkjIircA%2B98%2FXEhTusdppKBmekSkeFDXIJFMtjytpGWzD%2FYrCvFWafd1G0S58M%2FVHLfGPPeU27RErC37xn5DdtyIFbfOcCnvDIFgBxFIneEY0an0F%2BaqK5MiWEhK2NKOFDjJDAbvlcT7URLPxJvmlkNAkxBOG471ZessIDJkrLYAHOxoCrIRZj18is1lprAH1Iw%2B6sqdCw8UbsipPY0drD6%2FOXkbIwpKvF%2BsdyZ5vIeC2ZelvMSoGeT01gMW2ScRdawWzdzm3qBEy5kQ%2F%2FRfIDFaSUbEyfaQPknraqSffBN7tU%2B0TAZBTJQMIobOvetjFESiYHqBa96Zx7B15%2BC7sXHQmJMsqzyy4igF2zalQv74yFfq4%2FRZIlpSooHqiv%2Bv6yWlNeWvffnymbOWGjNKvbRc7zOU2cCQsVP%2Fw7KOUh50WFmgfAlhi2dIQafRqX51AUiSeVk4a0q0B4VbHYLVz1F6I%2B3UDIqOONbAzFv42c7ygFLsubSutiDNUZRYj2Bi9iiO3vy6SEZAP4T7hX0zaLIcEjF6ozTYBR78t%2BPgV8XLGaIHi9Ri45bIMqduCiIEf%2BzsFdKaqqFL8zkCfVWOtDplbL%2F9cSqGKiTezeC%2BQuAw3WK4mnmK%2B1J0OfLRBtkt%2BxTMNuNj8EGOqUB%2B1GCjMby%2FMPGQczPLTTmbUGUN%2Fk0gL0y%2FbEq9ibWglwgxPFUFe6iVf21G1ublB2AdINL%2FQJ4QWHBgwFxBe5pAnwnACsaw9iXjoNnlebypisOxXihu%2FtqXsnaw8l6eJPZ%2BMDfywj8dszhx9TlcydfttJvLsxwgmbPKq5EIkd3ftqFxXpl%2FYCEb4%2FKdFHgdgvmq7Pk5Jqe9vzbdWwaXEna0Bugki%2Fi&X-Amz-Signature=a99907459e12319d92f762d9d021291a68a85d82c9c160d9cbf38936da511248&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HVN3CS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICzHfUya%2FJsKkVINolH1cq0%2FTqav9UPhoA8esd%2FqQ8ASAiEA0VKRt543v2ZiSuL4IWO5mwIJdQgUradXtbNQnqWYG5cqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BuQMrOQxZ57hkjIircA%2B98%2FXEhTusdppKBmekSkeFDXIJFMtjytpGWzD%2FYrCvFWafd1G0S58M%2FVHLfGPPeU27RErC37xn5DdtyIFbfOcCnvDIFgBxFIneEY0an0F%2BaqK5MiWEhK2NKOFDjJDAbvlcT7URLPxJvmlkNAkxBOG471ZessIDJkrLYAHOxoCrIRZj18is1lprAH1Iw%2B6sqdCw8UbsipPY0drD6%2FOXkbIwpKvF%2BsdyZ5vIeC2ZelvMSoGeT01gMW2ScRdawWzdzm3qBEy5kQ%2F%2FRfIDFaSUbEyfaQPknraqSffBN7tU%2B0TAZBTJQMIobOvetjFESiYHqBa96Zx7B15%2BC7sXHQmJMsqzyy4igF2zalQv74yFfq4%2FRZIlpSooHqiv%2Bv6yWlNeWvffnymbOWGjNKvbRc7zOU2cCQsVP%2Fw7KOUh50WFmgfAlhi2dIQafRqX51AUiSeVk4a0q0B4VbHYLVz1F6I%2B3UDIqOONbAzFv42c7ygFLsubSutiDNUZRYj2Bi9iiO3vy6SEZAP4T7hX0zaLIcEjF6ozTYBR78t%2BPgV8XLGaIHi9Ri45bIMqduCiIEf%2BzsFdKaqqFL8zkCfVWOtDplbL%2F9cSqGKiTezeC%2BQuAw3WK4mnmK%2B1J0OfLRBtkt%2BxTMNuNj8EGOqUB%2B1GCjMby%2FMPGQczPLTTmbUGUN%2Fk0gL0y%2FbEq9ibWglwgxPFUFe6iVf21G1ublB2AdINL%2FQJ4QWHBgwFxBe5pAnwnACsaw9iXjoNnlebypisOxXihu%2FtqXsnaw8l6eJPZ%2BMDfywj8dszhx9TlcydfttJvLsxwgmbPKq5EIkd3ftqFxXpl%2FYCEb4%2FKdFHgdgvmq7Pk5Jqe9vzbdWwaXEna0Bugki%2Fi&X-Amz-Signature=011f1d28576424dec371f196b0b009f77b712af2db90a6dbc43301c68ca4e7c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
