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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVIH6O6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD30VBGOHXtIDbcTEpUqS8%2BTZYioxlV4kqAHy3cMH8RpwIga7%2BS%2B4N7b6rgw2nJ68eC5SGaoLAHR1kekeMgvWmtyboqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMhN3R3Btbf9UN4tSrcA%2Bu2tKBYwI83MTcyV2q4eYdiYyqmUNdHBQWHCU0QOjSs7FbEGNk4OiQb74OblyLdMGQbLjqjF%2BgSVh5KnVHXACBplmaQDctMHdzS9IKGe2f6leA2EVW6ZIn49VGQpjWZMtYBE9HQbyNDYsdPMolfjMSNmDonkC9n3tBKJ1iYVjffzHgC8Aptpse5tS7N8hcI0%2BO%2BHeKf%2F%2F5JZRY14%2FZXQ7T6K3eRJLHxQKTx7qmTzw9DHivfOmW49%2Fxhu%2B111fgLUgZIAivb5LJnW50JOUKJdQgB9HuB6KuAhRvPElTIwtuOKppSDWGu910B9SqbYJzezGfb7Gu5lFs29vQfvqFcSXU6lt1%2BT5tXvOsseq3MNvH5%2Bz00YASIDd22mvnsZ%2FzlS6GL4UggUGPc9QU1gauzvgo%2F6l2HF2tz6P52fNPGvV1Z1m%2FFUu0UuZpmZbFBTd5ehVuGRLVjW5fI6p%2FEZhW%2Bg5PJMRJSJaytRdxJEN5KNiE%2BJNn8qGHbFPirHlHBXcI%2ByxYZ8h7yz9sbKaNT6dEWeTwxcMrQstUs006xHDBmJLZIhK6iZkS84tfrlBoCePsAeK2vlkA%2Fy%2FWEsNdjpqr%2FFHpEgxglghiIcIquX%2Btt9XdhSYF6aFpaBOqtnMU6MMi618AGOqUBpyj23oVxBZtUqPAiwuIwxUckAlRHr2zH%2FRGkDqTHV%2FDL3O7ZZjm4Jja9MFinYZUnQT0whFIHLxTw6RB3ulFWTt4xOLz4SQAlHeW9GfXEiOSKzQ4RwiFyaZR0gtyD2MzQXN%2FdJ4yPFDs6VcSNcPjfIHwr%2F%2F%2F%2BqPvKXbMMdUDbbKNmcbsxxd1Qah%2BYNV%2FQ1fkOjQktgFcpm8CTbBijTwgTHbnpKgIE&X-Amz-Signature=e485f4911f4bd00b77a16e3d5e9cd04caea3a8d44b54b3bc7af136e107e5dac3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVIH6O6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD30VBGOHXtIDbcTEpUqS8%2BTZYioxlV4kqAHy3cMH8RpwIga7%2BS%2B4N7b6rgw2nJ68eC5SGaoLAHR1kekeMgvWmtyboqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMhN3R3Btbf9UN4tSrcA%2Bu2tKBYwI83MTcyV2q4eYdiYyqmUNdHBQWHCU0QOjSs7FbEGNk4OiQb74OblyLdMGQbLjqjF%2BgSVh5KnVHXACBplmaQDctMHdzS9IKGe2f6leA2EVW6ZIn49VGQpjWZMtYBE9HQbyNDYsdPMolfjMSNmDonkC9n3tBKJ1iYVjffzHgC8Aptpse5tS7N8hcI0%2BO%2BHeKf%2F%2F5JZRY14%2FZXQ7T6K3eRJLHxQKTx7qmTzw9DHivfOmW49%2Fxhu%2B111fgLUgZIAivb5LJnW50JOUKJdQgB9HuB6KuAhRvPElTIwtuOKppSDWGu910B9SqbYJzezGfb7Gu5lFs29vQfvqFcSXU6lt1%2BT5tXvOsseq3MNvH5%2Bz00YASIDd22mvnsZ%2FzlS6GL4UggUGPc9QU1gauzvgo%2F6l2HF2tz6P52fNPGvV1Z1m%2FFUu0UuZpmZbFBTd5ehVuGRLVjW5fI6p%2FEZhW%2Bg5PJMRJSJaytRdxJEN5KNiE%2BJNn8qGHbFPirHlHBXcI%2ByxYZ8h7yz9sbKaNT6dEWeTwxcMrQstUs006xHDBmJLZIhK6iZkS84tfrlBoCePsAeK2vlkA%2Fy%2FWEsNdjpqr%2FFHpEgxglghiIcIquX%2Btt9XdhSYF6aFpaBOqtnMU6MMi618AGOqUBpyj23oVxBZtUqPAiwuIwxUckAlRHr2zH%2FRGkDqTHV%2FDL3O7ZZjm4Jja9MFinYZUnQT0whFIHLxTw6RB3ulFWTt4xOLz4SQAlHeW9GfXEiOSKzQ4RwiFyaZR0gtyD2MzQXN%2FdJ4yPFDs6VcSNcPjfIHwr%2F%2F%2F%2BqPvKXbMMdUDbbKNmcbsxxd1Qah%2BYNV%2FQ1fkOjQktgFcpm8CTbBijTwgTHbnpKgIE&X-Amz-Signature=fcdc69e60cd189a770a8de7220c3fad55df1383561727d0850707528e559e62c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
