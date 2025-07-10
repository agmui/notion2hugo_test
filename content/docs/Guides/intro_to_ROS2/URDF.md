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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V747WSLG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDmPMmZ5wBAQ%2BOpiQHvkB8IzrycEVSL45PwBYcADFQAiEA49m%2B4%2BOyvMHSAppBt9dr3HNyqE5GYnIYEmQxtfST5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF19e4OmJZ2ZGMrCircA%2FADgss6Pr9ivBtqP%2FPXU%2FKNNuHucV7YiB1TeIhlwQBHHbjE9SJ4n72RYEviZ84thZnzqZ60S8PvgNbJnn2LQddjDmUlJjTA3xkUewsN28pdj4IAucTwDDb1777f6O3YGVe9WhcCINglFU2cbDlnq7wJz%2FnsF6TNR%2Bpu1Lj5YGnrr%2Fi1BVagtqurVt85ya3VEMrU6oX0HLEiUsTZF0ciMXMy7i0th4MVKAd3wY2F50fEmOmergOSFjvBGtOEeOesL7gLq1bVSSAvk7e217yiXbAWw8YaOk%2B41vc2EMyIkFdByn551RTTVCvIDga4xiWtzKwjxa9bGgrDHmc5dltZG23RZslTeCplxRzX2Lqs%2BUZ8Pw69lSnRvkA8e3vd99Wp0cCB7szTAfocu8UIfG1tYIQAdIPT5r2LQh2HR9PudVpws0PK1NctIvq8UobRfid%2B29nI%2BvO44ke4iVJYSkt8LQJtQNXClM%2BkvtccetsH%2Fm6mPPFr%2FsmRB2arN6kpUgKtYSo6zFu%2B8VZmMsBbk%2FEnkOMp2jXpx6OV7Nwt9p%2BwduX%2FzxMPRB%2BUzaAx%2BUmdQlfo4JagIA57WhYGcEEpcfrEwhdRzFgAHObc%2BtyTteL7aBjhWKyEvnr%2B7tf7Ch3bMIqpvcMGOqUBOR3QBv%2BQA275tRFi5A0PwxjY1BdeOEuGCRblDjB6aiZrp4oI5kxQXvR2yx%2BX58APwXkIfx%2Fnj31%2BUDG5Ajfku4FvAtV32TLHhWX9c0j%2F7%2BlRFWYOL3TxtTBhv2iMqzRWFlK9nAwGICDYlTZBCXWzr3s9iIRGHa%2BV%2Fc0y2xTuFh5olGe2eKmTpxKKsHbMXKiLwuU7cSBirY%2FvKqfjF9n814zCzpjg&X-Amz-Signature=3224629f20d206b148c9185e42fffb1880bf7ecb43fa38dad6e642d56b74d9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V747WSLG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDmPMmZ5wBAQ%2BOpiQHvkB8IzrycEVSL45PwBYcADFQAiEA49m%2B4%2BOyvMHSAppBt9dr3HNyqE5GYnIYEmQxtfST5hkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF19e4OmJZ2ZGMrCircA%2FADgss6Pr9ivBtqP%2FPXU%2FKNNuHucV7YiB1TeIhlwQBHHbjE9SJ4n72RYEviZ84thZnzqZ60S8PvgNbJnn2LQddjDmUlJjTA3xkUewsN28pdj4IAucTwDDb1777f6O3YGVe9WhcCINglFU2cbDlnq7wJz%2FnsF6TNR%2Bpu1Lj5YGnrr%2Fi1BVagtqurVt85ya3VEMrU6oX0HLEiUsTZF0ciMXMy7i0th4MVKAd3wY2F50fEmOmergOSFjvBGtOEeOesL7gLq1bVSSAvk7e217yiXbAWw8YaOk%2B41vc2EMyIkFdByn551RTTVCvIDga4xiWtzKwjxa9bGgrDHmc5dltZG23RZslTeCplxRzX2Lqs%2BUZ8Pw69lSnRvkA8e3vd99Wp0cCB7szTAfocu8UIfG1tYIQAdIPT5r2LQh2HR9PudVpws0PK1NctIvq8UobRfid%2B29nI%2BvO44ke4iVJYSkt8LQJtQNXClM%2BkvtccetsH%2Fm6mPPFr%2FsmRB2arN6kpUgKtYSo6zFu%2B8VZmMsBbk%2FEnkOMp2jXpx6OV7Nwt9p%2BwduX%2FzxMPRB%2BUzaAx%2BUmdQlfo4JagIA57WhYGcEEpcfrEwhdRzFgAHObc%2BtyTteL7aBjhWKyEvnr%2B7tf7Ch3bMIqpvcMGOqUBOR3QBv%2BQA275tRFi5A0PwxjY1BdeOEuGCRblDjB6aiZrp4oI5kxQXvR2yx%2BX58APwXkIfx%2Fnj31%2BUDG5Ajfku4FvAtV32TLHhWX9c0j%2F7%2BlRFWYOL3TxtTBhv2iMqzRWFlK9nAwGICDYlTZBCXWzr3s9iIRGHa%2BV%2Fc0y2xTuFh5olGe2eKmTpxKKsHbMXKiLwuU7cSBirY%2FvKqfjF9n814zCzpjg&X-Amz-Signature=9ef25997f8acad2a71cd61926ae35c105e1908132b680de776c240f87d4584e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
