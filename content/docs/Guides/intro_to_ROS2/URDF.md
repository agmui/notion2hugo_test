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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYLFEDA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDEDD8axR66c144E3KnQEwU%2BvgGH%2FwL1Zi9HO6PaqLmbAiEA3tnUZ0Sn56yfC%2FRKDrZCJL7huPh8ida%2F3q254sMW48oqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR6PLKo60TQpxs7tyrcA480B92ESRD7pQmneJGYwLs%2FA%2FjleDbE0xuEtmGLFBRmuaYb2EkToRwTExJaueuPx0aaykvjtdBR0XLdIf%2BY%2FzwiDTCKre7zekbZorOHZceGeGHTUO%2B0k8TEQU0M0Y1Ese1tF0ADbPjnpW92WccYubUiFXn9sAhd8WlLjI8Tfi6LBlwxwx8TJOizb1H%2F2sXHWJ33MAzQ5kAaaeW%2BJsjnLIZ6sIJIl7pOFQSiCpYH6xHjEskSH0mJTR6yJ3uYSD8sQe6aiD%2B%2BZwSD1YIg0iAsXY1QSyyrbK0ue7tH%2FRMyixWA0KD32%2Bedk2tBx9rIVWbjmvSwl4b9pH5oNt9AJ%2By6BL2WEEYl2MLzDWirXEmX9%2FxasKCh8y6Vx%2BsyQeRUp1ZEA9JEyEPp%2B8ULQoZnOmewi70pOfZvACCBSCPm7YZ8nNd0AgDwdK3RIZTLkDeZjc1WKidkts3OEHdSRIJi6498doT0AwgpOoFQs1rq9YEgKmKPCfk89m%2BJorPMtV0XOsDOsnL3hXTW20CvhQOMhPmysEswN%2BV6C%2FkNcRzLyLcLLIo5e14%2F%2BZ%2FGDZG6KYS0aUFX4DQAxMMG8yL8PQAqFSAeJdheCJKw915Hm%2F7UdYYNkYrpDNVK8MXt12ba5ZvSMKrc9r4GOqUBkYvplC%2FeOb9TZFk1x2gbdWU1YmpvsvllW7m99hVu%2Bx687eGBKyzhNyhnBiyKgtZ%2BVkiKb5J34A3V2R00h9dVqHa6mpj6yFPAyfeSnZjYzpJOFlIojTp2IqhUGyJTNEXvTWH67mxUI99LN9tf66HWk4JSFs5aPh%2B6fXHD%2B3xJ%2FevKi27q6H43BS9wi%2BK77WDByx1dy62BPuO96U2j%2BXn3JxoiD31h&X-Amz-Signature=23359e706bbed84fce84cfb649a1a7d999ff227c4a60b656b7f545c193ed0f54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYLFEDA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDEDD8axR66c144E3KnQEwU%2BvgGH%2FwL1Zi9HO6PaqLmbAiEA3tnUZ0Sn56yfC%2FRKDrZCJL7huPh8ida%2F3q254sMW48oqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR6PLKo60TQpxs7tyrcA480B92ESRD7pQmneJGYwLs%2FA%2FjleDbE0xuEtmGLFBRmuaYb2EkToRwTExJaueuPx0aaykvjtdBR0XLdIf%2BY%2FzwiDTCKre7zekbZorOHZceGeGHTUO%2B0k8TEQU0M0Y1Ese1tF0ADbPjnpW92WccYubUiFXn9sAhd8WlLjI8Tfi6LBlwxwx8TJOizb1H%2F2sXHWJ33MAzQ5kAaaeW%2BJsjnLIZ6sIJIl7pOFQSiCpYH6xHjEskSH0mJTR6yJ3uYSD8sQe6aiD%2B%2BZwSD1YIg0iAsXY1QSyyrbK0ue7tH%2FRMyixWA0KD32%2Bedk2tBx9rIVWbjmvSwl4b9pH5oNt9AJ%2By6BL2WEEYl2MLzDWirXEmX9%2FxasKCh8y6Vx%2BsyQeRUp1ZEA9JEyEPp%2B8ULQoZnOmewi70pOfZvACCBSCPm7YZ8nNd0AgDwdK3RIZTLkDeZjc1WKidkts3OEHdSRIJi6498doT0AwgpOoFQs1rq9YEgKmKPCfk89m%2BJorPMtV0XOsDOsnL3hXTW20CvhQOMhPmysEswN%2BV6C%2FkNcRzLyLcLLIo5e14%2F%2BZ%2FGDZG6KYS0aUFX4DQAxMMG8yL8PQAqFSAeJdheCJKw915Hm%2F7UdYYNkYrpDNVK8MXt12ba5ZvSMKrc9r4GOqUBkYvplC%2FeOb9TZFk1x2gbdWU1YmpvsvllW7m99hVu%2Bx687eGBKyzhNyhnBiyKgtZ%2BVkiKb5J34A3V2R00h9dVqHa6mpj6yFPAyfeSnZjYzpJOFlIojTp2IqhUGyJTNEXvTWH67mxUI99LN9tf66HWk4JSFs5aPh%2B6fXHD%2B3xJ%2FevKi27q6H43BS9wi%2BK77WDByx1dy62BPuO96U2j%2BXn3JxoiD31h&X-Amz-Signature=259a3f293514c2bc5fee302ff48b347f4545e0d46f644ba6e63d9f49167a18d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
