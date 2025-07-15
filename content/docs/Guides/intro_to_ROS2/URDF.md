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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBLQNWTR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCFL6icgAx1Qk3yKrfW2vuZBirQWHWshrV5jQPhrfK7KAIgWzhrY%2FahCYusV3%2FXR696giT8BqqFo6ejwpLQ5Dg7Fvsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD6L6FY0tn%2FLozQhNSrcA254XuWmk6m0889jsqUXUqD%2F5Hu%2Fqg%2Ba7FWxs%2FKlMPp3KjzhV7DP2%2BTUha8d6jgT0JDIFw20GA5BgAnwzQruh0nxwzmyz2Uc8wusK4HA64H%2B7t7yo89DkGZclaHl%2FgxWB5zOUdBmWeBc%2F8V5ApY%2BT3ltgJDws6Im%2F%2FvdKYbuVN7zRYAEj%2BGv8Tv4xJCWuDzu4WM9SR6WfOg3Cn%2BzhRjp6umcPm495eCNCogoDsF0fHE8366qlqTaSS110sXNcB6ZjpozKKRNVbm3OCGZ5RYbNrpBBNUBD7ilJ0A7VsLpykPmalpva4IEcKOcK%2Fy5ByHgHIi%2BKpOytffU%2Fq0UdiYB9WzScDvZo72beF2R0ojle%2BBnkn%2FcjMdgBmSkahDIQqwkwqRBNwP1NHc8HjeZXY1pMkSt1BfooTvuA2x5dNXti%2FujTuUJeKxOY3CtWMR4vZmDqgkp0g3b8pUL5imM5ZW2f9T9z4WfobBDBIyr50eJ1brDGw91wjKCeoLGmtlOVBHspCKUKSvnSRDqpO1LDeZaimMVlZLMKHuwHiWryXQQCruyUtbtOFht%2BKD7xza%2B0EWhgPCuDEz4%2BcuWdeUkXk1ORzL%2B%2BMhJR6HS8mwShI4i%2BTz%2BA1tJZqLd4ljulM%2F9MLWw2MMGOqUBpfpMChMG24zuMBlacAPE2ZeBUgWfmc1JDmleinxIN%2F2ID6N9a8m%2B5IAPr0q%2FtdS0TBj3hvAZU6YMbQgY2TrLOorbmaKNuMwSxwMefq93crmTDuD6%2FzGA8Hpsg%2FjXNlVvpVDMjgI2SM%2FSVeZ739oexrsFWrWwEJSWtHNj6nqkoeNJlKPf1l1L58C3nBxRX9yYCWrtikznaDt5%2BxInAzeML1qWzdEL&X-Amz-Signature=d3cd7b17cec1338723b59b143789618a4393de6942b0ad9eb287396cb7baaf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBLQNWTR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCFL6icgAx1Qk3yKrfW2vuZBirQWHWshrV5jQPhrfK7KAIgWzhrY%2FahCYusV3%2FXR696giT8BqqFo6ejwpLQ5Dg7Fvsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDD6L6FY0tn%2FLozQhNSrcA254XuWmk6m0889jsqUXUqD%2F5Hu%2Fqg%2Ba7FWxs%2FKlMPp3KjzhV7DP2%2BTUha8d6jgT0JDIFw20GA5BgAnwzQruh0nxwzmyz2Uc8wusK4HA64H%2B7t7yo89DkGZclaHl%2FgxWB5zOUdBmWeBc%2F8V5ApY%2BT3ltgJDws6Im%2F%2FvdKYbuVN7zRYAEj%2BGv8Tv4xJCWuDzu4WM9SR6WfOg3Cn%2BzhRjp6umcPm495eCNCogoDsF0fHE8366qlqTaSS110sXNcB6ZjpozKKRNVbm3OCGZ5RYbNrpBBNUBD7ilJ0A7VsLpykPmalpva4IEcKOcK%2Fy5ByHgHIi%2BKpOytffU%2Fq0UdiYB9WzScDvZo72beF2R0ojle%2BBnkn%2FcjMdgBmSkahDIQqwkwqRBNwP1NHc8HjeZXY1pMkSt1BfooTvuA2x5dNXti%2FujTuUJeKxOY3CtWMR4vZmDqgkp0g3b8pUL5imM5ZW2f9T9z4WfobBDBIyr50eJ1brDGw91wjKCeoLGmtlOVBHspCKUKSvnSRDqpO1LDeZaimMVlZLMKHuwHiWryXQQCruyUtbtOFht%2BKD7xza%2B0EWhgPCuDEz4%2BcuWdeUkXk1ORzL%2B%2BMhJR6HS8mwShI4i%2BTz%2BA1tJZqLd4ljulM%2F9MLWw2MMGOqUBpfpMChMG24zuMBlacAPE2ZeBUgWfmc1JDmleinxIN%2F2ID6N9a8m%2B5IAPr0q%2FtdS0TBj3hvAZU6YMbQgY2TrLOorbmaKNuMwSxwMefq93crmTDuD6%2FzGA8Hpsg%2FjXNlVvpVDMjgI2SM%2FSVeZ739oexrsFWrWwEJSWtHNj6nqkoeNJlKPf1l1L58C3nBxRX9yYCWrtikznaDt5%2BxInAzeML1qWzdEL&X-Amz-Signature=8fca67fc89919b335e6063ee1348d4ebf7dd8a2c41f24cd4ad077ea81c65e44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
