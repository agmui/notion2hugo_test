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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADQABES%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWfTdjNDNFApeVFW66Qmria3RmW%2BnQ00C8Z2oMtrzA2wIgZO7MbqNsR3DcurL7X63WcQNQf64Lj2hOuFMe5lEH1Vgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCMt53lrM0TZZwcgsCrcA2hzPqxj%2FJFJqeJ%2F5ZNt%2FM6Gy1DDADMMU%2BTo6swrPeAVGqAgUZURaOhBOV5Oi8XI2LwXzFahCfimuPacFOtEi9TAnYDanTWB6%2BM9gwPYMnTLlH7fznvaoWKKLBUkxx1pYQl%2FBjjHa%2F58NxudILbI5QJF0HG4gTYoEjB5%2B%2BEBJt%2BS91pX%2BH84cBV2KwEMHhT4pmGxDnMcr0PpMqN%2F2ehm%2BtQEibWXYmXt3eU6ahAPf%2FSBcFkmJNUUOnFk%2FO5TN9ST%2BwWOEa8DSn84VXDtr%2Fc9laKu5DsEdP38XNJFvgzpko4NFKfV3EiVlD1pztygtzM%2BJs0MXT8%2F%2FlZ0xErxsKQf3MAdQkUOLJ7wTmel8X2ywDdPpr%2BoziVHbEzpDg1xMi7Qo11uQjhNxshGJu7CKwnQtvkxJ%2FktEMXI6PHyykoeyxbHjSfWqWoymHqtBHsv56%2FcEQBWpau1mk4rMZ1rk%2BE257H0%2BCjHB489XBSUE7zo%2FmSbOOO9Pakp6UQzohkqE79T6Gb41LzDjzvUXt%2FwGxzZpgjDzX87IGSoGceIQiXM4TrCX0lylxH2MiIcoKmfAWIZluoNeBFqMwaTNOpPlAs5x6Kw8DUUErFMzaMQZQYaRODA8S8Pz%2BnTwzoF5JDqMLjhor4GOqUBTMA2POmKpNF490aVguDg9LrVWXQDCf1Ap%2BHFJ02jmBhBCuP%2FWbwGtE6s2qF1evsvB7w1dvv%2B83%2B7WXEeVAeWHFQduMli4h%2FFKv4Pj7vlqVw4GMgWrj28UkpqR6LjnSpNzduD%2BYT4EIgHxjAQ82l5Hw6AAu5kjrYqMOuVQObgKkWKW5GteSAaxNmznteouKI09eIiM%2BepsoZQ1LvWhqwvLvf419aq&X-Amz-Signature=2d16cf7e444f130eaf95c393e36073fd3507c49dfcdb1f628f45f3970bb81e42&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADQABES%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWfTdjNDNFApeVFW66Qmria3RmW%2BnQ00C8Z2oMtrzA2wIgZO7MbqNsR3DcurL7X63WcQNQf64Lj2hOuFMe5lEH1Vgq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCMt53lrM0TZZwcgsCrcA2hzPqxj%2FJFJqeJ%2F5ZNt%2FM6Gy1DDADMMU%2BTo6swrPeAVGqAgUZURaOhBOV5Oi8XI2LwXzFahCfimuPacFOtEi9TAnYDanTWB6%2BM9gwPYMnTLlH7fznvaoWKKLBUkxx1pYQl%2FBjjHa%2F58NxudILbI5QJF0HG4gTYoEjB5%2B%2BEBJt%2BS91pX%2BH84cBV2KwEMHhT4pmGxDnMcr0PpMqN%2F2ehm%2BtQEibWXYmXt3eU6ahAPf%2FSBcFkmJNUUOnFk%2FO5TN9ST%2BwWOEa8DSn84VXDtr%2Fc9laKu5DsEdP38XNJFvgzpko4NFKfV3EiVlD1pztygtzM%2BJs0MXT8%2F%2FlZ0xErxsKQf3MAdQkUOLJ7wTmel8X2ywDdPpr%2BoziVHbEzpDg1xMi7Qo11uQjhNxshGJu7CKwnQtvkxJ%2FktEMXI6PHyykoeyxbHjSfWqWoymHqtBHsv56%2FcEQBWpau1mk4rMZ1rk%2BE257H0%2BCjHB489XBSUE7zo%2FmSbOOO9Pakp6UQzohkqE79T6Gb41LzDjzvUXt%2FwGxzZpgjDzX87IGSoGceIQiXM4TrCX0lylxH2MiIcoKmfAWIZluoNeBFqMwaTNOpPlAs5x6Kw8DUUErFMzaMQZQYaRODA8S8Pz%2BnTwzoF5JDqMLjhor4GOqUBTMA2POmKpNF490aVguDg9LrVWXQDCf1Ap%2BHFJ02jmBhBCuP%2FWbwGtE6s2qF1evsvB7w1dvv%2B83%2B7WXEeVAeWHFQduMli4h%2FFKv4Pj7vlqVw4GMgWrj28UkpqR6LjnSpNzduD%2BYT4EIgHxjAQ82l5Hw6AAu5kjrYqMOuVQObgKkWKW5GteSAaxNmznteouKI09eIiM%2BepsoZQ1LvWhqwvLvf419aq&X-Amz-Signature=a4eb19b4ec770ac00765ad8cb83b3c93b75652c7f1cd3c23127be16409d9cc6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
