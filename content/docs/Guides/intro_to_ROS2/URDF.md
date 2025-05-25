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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZREF2FK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCboGCPsUxEsflj8y5lv9w2HvxgS3VEkUkv17QFVJXCuAIgb8krSmGPoVedb7CQXy0MVoBWfWiysuOOnMSNsoNsVY8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAdBkUpj0NqVCavQUCrcA4JT0MzMDrZL9Y38VN1gDqwEdWJXwR1SYrRzViMA2CVtwUpau1sEaqMpJsjN1DVNmY6NJ6N16oJbgmbWiVhkWmVcDvOfIOwzxP9PQ6IeuOhP437wNkDhNRZDLFjGKXQhKpjPOjbCS3Stej0%2FrV0tv9D14YQUHuXf0jaatWGy8k86KblPipK5oeWts1Y18TCKnXxbGRBT2qCLRHX6zngb0M7SBt9pNPu1gl%2Fic5nyia2DNXbU8e9dF0HZikA9mWHAVITuTNm8b42nwaCiiIMoN98vXLjnN%2BSniS129%2FxfOLwAXXHV%2Boz6IKL2wB5uz0nRROswR43x07F2V1N54bPyQczrgjneui4Qm03vjAtounIDS6CY1i4mExFFPYlhQqYKUlxT00%2BT01Oa5eU7yj%2B2VRsigbNtaZ5Z6nZWD2vFnDqnlN17ugDriL%2BwZnhEhI0ivZekYfZQX%2BtyIW0qNvs7mWxDW4ZbXSC0SlaudUtF09Qb%2FnrVIvWYweAOQTzoXsmtnf4yLZNErEkbXDoMf4mrQlik7%2FTuhMV%2FughWc6Mvq2qMwc4tH0AauAYQ6A9H59rvVQ0BBp1s4yMVVmzjgmVPgnYSKq4hWAsPpW8Mi5eZIW7EEciFfRaskkCe3zxOMIn1zcEGOqUBtCixbodwruPxiHu9q8Jn2B8yiOOWoMwpnxQKtDOq0e14xq0xjF9g1FVbiNcRyr3zOlooXT5tGU4oWk6BLjmU5QSVlO2qf%2BPXZ%2Fcpap0IUA27O6uo4vs36ljaJSdHfkBBYn1YjZreNmUmDAZVmDOlam97pUmclLcPoCl2nIElTG15vX1VTlqY2u7pj3tZ5uWJUK2jbMDJ1A7jmGLFrfwLuqs4JpWB&X-Amz-Signature=190d0c36b757bde68ed058cdcbc686bfe1a1a6eed5446f06b6ac38f114155e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZREF2FK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCboGCPsUxEsflj8y5lv9w2HvxgS3VEkUkv17QFVJXCuAIgb8krSmGPoVedb7CQXy0MVoBWfWiysuOOnMSNsoNsVY8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDAdBkUpj0NqVCavQUCrcA4JT0MzMDrZL9Y38VN1gDqwEdWJXwR1SYrRzViMA2CVtwUpau1sEaqMpJsjN1DVNmY6NJ6N16oJbgmbWiVhkWmVcDvOfIOwzxP9PQ6IeuOhP437wNkDhNRZDLFjGKXQhKpjPOjbCS3Stej0%2FrV0tv9D14YQUHuXf0jaatWGy8k86KblPipK5oeWts1Y18TCKnXxbGRBT2qCLRHX6zngb0M7SBt9pNPu1gl%2Fic5nyia2DNXbU8e9dF0HZikA9mWHAVITuTNm8b42nwaCiiIMoN98vXLjnN%2BSniS129%2FxfOLwAXXHV%2Boz6IKL2wB5uz0nRROswR43x07F2V1N54bPyQczrgjneui4Qm03vjAtounIDS6CY1i4mExFFPYlhQqYKUlxT00%2BT01Oa5eU7yj%2B2VRsigbNtaZ5Z6nZWD2vFnDqnlN17ugDriL%2BwZnhEhI0ivZekYfZQX%2BtyIW0qNvs7mWxDW4ZbXSC0SlaudUtF09Qb%2FnrVIvWYweAOQTzoXsmtnf4yLZNErEkbXDoMf4mrQlik7%2FTuhMV%2FughWc6Mvq2qMwc4tH0AauAYQ6A9H59rvVQ0BBp1s4yMVVmzjgmVPgnYSKq4hWAsPpW8Mi5eZIW7EEciFfRaskkCe3zxOMIn1zcEGOqUBtCixbodwruPxiHu9q8Jn2B8yiOOWoMwpnxQKtDOq0e14xq0xjF9g1FVbiNcRyr3zOlooXT5tGU4oWk6BLjmU5QSVlO2qf%2BPXZ%2Fcpap0IUA27O6uo4vs36ljaJSdHfkBBYn1YjZreNmUmDAZVmDOlam97pUmclLcPoCl2nIElTG15vX1VTlqY2u7pj3tZ5uWJUK2jbMDJ1A7jmGLFrfwLuqs4JpWB&X-Amz-Signature=2813abafed1db6e118f12836e27323a86428d5c624da97cbf22678382c3bf508&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
