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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSQYKRMI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ8Y5slKOCF8NYQ6Ji47f9Pfbh3Z%2BzzFVAuwFDe%2FGpDAiAUNIq4UV4BqgEmFeeb9%2Bae4H9BmywujnLsxSQxOuMWNSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYUdFNZxZsBE72IjKtwDC2EUARBNNwZy7Hnn1yRimR%2ButpGZSFNtyEEXOCVGZjGHUvSWUcAr6SxzE1G62r4XOBm%2F10pbesGK4LATKmxUIvhobcjrKeV6nO2p2FduMdNd2hc4U0DwJZqz0n0%2BTaNfVLliY6cFiZGWbi1lOEpuublN6wwGz14i%2BZ0v7DniGwph0ZeWGTd4sT0gpjAEcfm8rxUdsoAewlg0MmY7x2aa6VGEIcAFLHVb%2B9pQnciFJS7ul4hligUx%2Fa3pokT27ZPmaj0%2BtTE3R%2BySNgmzWCbhoLI9X%2FW7LtFRQLa76KSrIDXSgIJ4J6IDUS3of8HLoU7X8SCZuySvT8RUkJyBBDKVEPTe0HgvE0ZStn1EqsXNheuSuPUhNlQV0jBCutgmCQht3%2FEVBe7sBY9lX3UN4PG669dX4BpbNUvIm63oMp75Xfb23f9prubqbqnnHWppMpQEIWrtyESy36dvWUcznH9mDbFFnUat2YqI8qOm7Ch3h7PMok0eXqZeTF0Ihv%2BiDT7s%2FDeh6I9qznIKtwucJk%2FckH2ljcjm7oUe%2Bb%2Bptl%2FNUlZyfCSUNU%2FM46BybjfX5JBVvEhuCfygQXjzmx5ccJh1W5SvykkvfEh8Qw%2BILo7ZpDfyvIWbQ2vD2uM2wNQwisDQvgY6pgGLPSrJ41RUCCNkPuSX4Bx8XsZ0S8GjXWCkFcKeRqaXFTqhJ1Q5BhryvUcpczH4qEDbG9%2BxhPBxA5vxXnHUctrHp1ly%2FwRUFUkYsvNmtJlWWIi7O%2FzsV%2Bi7u9Wp%2B8LaunBm0xA373OvQoTWVDYUHrSzZNlrrXYOvChB334GYcUKZXC4%2FFAwqtvLjJoB%2BO43GNeQFFDNe8hR7NytCEWHpAiuftLJsnQo&X-Amz-Signature=0121d19725989f355067ed111e91e4b87ad877e9ce5ce1842702ad06afa778d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSQYKRMI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ8Y5slKOCF8NYQ6Ji47f9Pfbh3Z%2BzzFVAuwFDe%2FGpDAiAUNIq4UV4BqgEmFeeb9%2Bae4H9BmywujnLsxSQxOuMWNSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYYUdFNZxZsBE72IjKtwDC2EUARBNNwZy7Hnn1yRimR%2ButpGZSFNtyEEXOCVGZjGHUvSWUcAr6SxzE1G62r4XOBm%2F10pbesGK4LATKmxUIvhobcjrKeV6nO2p2FduMdNd2hc4U0DwJZqz0n0%2BTaNfVLliY6cFiZGWbi1lOEpuublN6wwGz14i%2BZ0v7DniGwph0ZeWGTd4sT0gpjAEcfm8rxUdsoAewlg0MmY7x2aa6VGEIcAFLHVb%2B9pQnciFJS7ul4hligUx%2Fa3pokT27ZPmaj0%2BtTE3R%2BySNgmzWCbhoLI9X%2FW7LtFRQLa76KSrIDXSgIJ4J6IDUS3of8HLoU7X8SCZuySvT8RUkJyBBDKVEPTe0HgvE0ZStn1EqsXNheuSuPUhNlQV0jBCutgmCQht3%2FEVBe7sBY9lX3UN4PG669dX4BpbNUvIm63oMp75Xfb23f9prubqbqnnHWppMpQEIWrtyESy36dvWUcznH9mDbFFnUat2YqI8qOm7Ch3h7PMok0eXqZeTF0Ihv%2BiDT7s%2FDeh6I9qznIKtwucJk%2FckH2ljcjm7oUe%2Bb%2Bptl%2FNUlZyfCSUNU%2FM46BybjfX5JBVvEhuCfygQXjzmx5ccJh1W5SvykkvfEh8Qw%2BILo7ZpDfyvIWbQ2vD2uM2wNQwisDQvgY6pgGLPSrJ41RUCCNkPuSX4Bx8XsZ0S8GjXWCkFcKeRqaXFTqhJ1Q5BhryvUcpczH4qEDbG9%2BxhPBxA5vxXnHUctrHp1ly%2FwRUFUkYsvNmtJlWWIi7O%2FzsV%2Bi7u9Wp%2B8LaunBm0xA373OvQoTWVDYUHrSzZNlrrXYOvChB334GYcUKZXC4%2FFAwqtvLjJoB%2BO43GNeQFFDNe8hR7NytCEWHpAiuftLJsnQo&X-Amz-Signature=fe4888b9bf0f1f54b953e0ad0e2628931583cf35b722cfb099866e10c21e0d48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
