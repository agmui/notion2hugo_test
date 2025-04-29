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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAHKFKH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi8Oh0AMzMBj6ANBFbV8Vs4U7Q7nIUJwkdfNAcDeIHJAiEAuTgDNT5KK1H%2BiSDUCVlHg1saU16ILrPvwtQbX3J73LkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6iPYvhweyxN5gngyrcA%2B4yJ%2Fq%2FlmEHdAIS5VLwQMaf65s8tb9GN51S7ZQFBFhugq4yBxYF58DJAbTORMZVtpQmDQx%2BhQypqUtaTEICSKcPf3I6SlLe%2BVLDEsS7yviILbb6VwW3NaHwMJ4AVJmpF3TKohyjWl6XHpLN6wovUlksJlWQps6enhP%2B0JhaUxWGEpkWN%2FI%2BxcstUCGzSVbaXjoOhyoJOuM1tgwqGaFpM5aMhayOqq6dnuqdYEDSkkZu4fkv7eCQHxwpFZXCVmL8BcLNweN3DSJKDf07vrbVk67SNHEbQMxNZBK379gBsJseYjRrrB1B4rOLTSOumNQ35zVc66B4uu2dIWx61nrcbdBSp4JzuKUcUyKWefl1LH9B%2FUsH0wgljgUi67B%2B3y9Pbi2Tc4%2BIrtwbWPSFwhO3fx%2B3%2FmHmS3OOUHMON6cff9CJiq%2FXaTbNUakL66vOqkcL%2FkWlt1kOpc%2Bob1zNKU%2FL5GjGmCYadUmVT8AQNpoCtmUpgHUCfItRJwUwKgVw6Wvofg5Yds2thANnhqekYOc05BbWbge6pCuLepb3OZPrgRM5q5qhTVWpdJylC80MqTPM99%2FZWJ1IyRbCOGnaozuWCSy3fNg4diq2BZSIwXOJUmbIRXMl4ZZxPlEH8iU6MNjPxMAGOqUBpZvdgCIqY0RdURSn1JshUt0D4ZBw85YJyBmpMg2cL1n%2FiySed1IVguD0SOZJWXqdFsik5aaKVswKsFWc7%2B82OT3nUSCNZQFUy7kRDwzc6MDkRytZ7CbU1aWrC9XiTP1t2gwN2vA53MIgH1DgXZ8fHYferXthYkvj4DEmsJAzAJ8QGrf7KbbJg%2BBYnzw4To023rF1CfTP9JA%2F%2BBqsrlvGd6QZgPFQ&X-Amz-Signature=53b3e5db1379ca9cdc73953119ffbfb373a33759bd3e0c57f8793e42870bdf5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAHKFKH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi8Oh0AMzMBj6ANBFbV8Vs4U7Q7nIUJwkdfNAcDeIHJAiEAuTgDNT5KK1H%2BiSDUCVlHg1saU16ILrPvwtQbX3J73LkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6iPYvhweyxN5gngyrcA%2B4yJ%2Fq%2FlmEHdAIS5VLwQMaf65s8tb9GN51S7ZQFBFhugq4yBxYF58DJAbTORMZVtpQmDQx%2BhQypqUtaTEICSKcPf3I6SlLe%2BVLDEsS7yviILbb6VwW3NaHwMJ4AVJmpF3TKohyjWl6XHpLN6wovUlksJlWQps6enhP%2B0JhaUxWGEpkWN%2FI%2BxcstUCGzSVbaXjoOhyoJOuM1tgwqGaFpM5aMhayOqq6dnuqdYEDSkkZu4fkv7eCQHxwpFZXCVmL8BcLNweN3DSJKDf07vrbVk67SNHEbQMxNZBK379gBsJseYjRrrB1B4rOLTSOumNQ35zVc66B4uu2dIWx61nrcbdBSp4JzuKUcUyKWefl1LH9B%2FUsH0wgljgUi67B%2B3y9Pbi2Tc4%2BIrtwbWPSFwhO3fx%2B3%2FmHmS3OOUHMON6cff9CJiq%2FXaTbNUakL66vOqkcL%2FkWlt1kOpc%2Bob1zNKU%2FL5GjGmCYadUmVT8AQNpoCtmUpgHUCfItRJwUwKgVw6Wvofg5Yds2thANnhqekYOc05BbWbge6pCuLepb3OZPrgRM5q5qhTVWpdJylC80MqTPM99%2FZWJ1IyRbCOGnaozuWCSy3fNg4diq2BZSIwXOJUmbIRXMl4ZZxPlEH8iU6MNjPxMAGOqUBpZvdgCIqY0RdURSn1JshUt0D4ZBw85YJyBmpMg2cL1n%2FiySed1IVguD0SOZJWXqdFsik5aaKVswKsFWc7%2B82OT3nUSCNZQFUy7kRDwzc6MDkRytZ7CbU1aWrC9XiTP1t2gwN2vA53MIgH1DgXZ8fHYferXthYkvj4DEmsJAzAJ8QGrf7KbbJg%2BBYnzw4To023rF1CfTP9JA%2F%2BBqsrlvGd6QZgPFQ&X-Amz-Signature=adb7153685312a2fd6f313415b55da409f8e8512c6db2e868a12fd3b7fd12774&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
