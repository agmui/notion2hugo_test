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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FFRHLN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiOn9f0HUHzMCHGwwpnnM0o8qp5d8F8xwC%2FKbw4Fe0XAiEAoWNUFPQcPzlt2F16qMJjnzM%2BTfT6r1JazujLFRZbNjsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE6vlv2%2BS24DdWFQCrcA2%2BXNe%2F0p8r%2BUAILKWTpsmMnK0NtRVIygTU6N23OB%2BforT%2FvQ%2BuSmQbllOk0RuWvkEwgWyRme8jE7pF7B3OUnu6sERhGb4MIzv4b4D9bVvHVD%2FppMexUl8pMO6reKYMfZ0sEV2SMaaL4JRVZ7Lk1c97enRzjywoXrGGDAxqI%2Bd9LOphY18sStCWJy7Y3O40xc1qm9Hs6plDPoOpkVarFRBuh5LSqA%2FJlCKf%2B%2BguPRvEiT0BjbyFjtl5H6eYkTNSXg9OHGJllHdFMB1s8oxSLesLBsZ9ZWuBGaXqMH8RKeytF0KW%2FJURiuOlzgmTtj37FjdRGEr5lCSR6lfX2dSMQ9yMcwIdMPAGCGx%2F%2BOBOfXSTb0%2BD5wjtIs3oYgJ71ulGLUB9OVyZmF3RxBcWUl5Fs4mLYaQDErJLLJ2jumia5kAqvFNQDkepKtUV8%2FruhWRXrbKmgANFPspFtCVBZqVIRCW0V4in2k2E9GH8QgsDFqdHB%2F6eKZ5g05kfwX9WihG4%2B0fl2lU69c%2FRbaQ5CBuf3l8ghyjfkyo%2FSYauFma0UOrfhf9j%2FrwwXXEdEjcTpWiScRy1V1cW24fNsr1EM2SxeQe50zwKs7q%2BM6ZAMvfUqExEn4qOikW5AROln5YYqMJC0k8MGOqUBjHMUedUhywkUBaZIrWjJ1IlGjkaVur5O5LKUtm%2FLKy1y4%2F85HeZVgMzV1OYWoHWf%2FMdAWAZZ8%2Bt0WdFE46he8fG5h9sfI4vLB1WfekWVfn5ra9wuiJ4bquAY4D1GdqhhCjOos4WDxExrsF5PugD9FUadSMlnn0JNOX4gs5KWazNyN1BBIzwMLn2vLLp8NQbPzp0%2FynZPWueaTLaj0jK6WHSvv4IB&X-Amz-Signature=0b76bc62ba6dbfb9686a4b8c2d33e7cc90dd65dd3309cd87d9f1498cdd04ccef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FFRHLN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiOn9f0HUHzMCHGwwpnnM0o8qp5d8F8xwC%2FKbw4Fe0XAiEAoWNUFPQcPzlt2F16qMJjnzM%2BTfT6r1JazujLFRZbNjsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE6vlv2%2BS24DdWFQCrcA2%2BXNe%2F0p8r%2BUAILKWTpsmMnK0NtRVIygTU6N23OB%2BforT%2FvQ%2BuSmQbllOk0RuWvkEwgWyRme8jE7pF7B3OUnu6sERhGb4MIzv4b4D9bVvHVD%2FppMexUl8pMO6reKYMfZ0sEV2SMaaL4JRVZ7Lk1c97enRzjywoXrGGDAxqI%2Bd9LOphY18sStCWJy7Y3O40xc1qm9Hs6plDPoOpkVarFRBuh5LSqA%2FJlCKf%2B%2BguPRvEiT0BjbyFjtl5H6eYkTNSXg9OHGJllHdFMB1s8oxSLesLBsZ9ZWuBGaXqMH8RKeytF0KW%2FJURiuOlzgmTtj37FjdRGEr5lCSR6lfX2dSMQ9yMcwIdMPAGCGx%2F%2BOBOfXSTb0%2BD5wjtIs3oYgJ71ulGLUB9OVyZmF3RxBcWUl5Fs4mLYaQDErJLLJ2jumia5kAqvFNQDkepKtUV8%2FruhWRXrbKmgANFPspFtCVBZqVIRCW0V4in2k2E9GH8QgsDFqdHB%2F6eKZ5g05kfwX9WihG4%2B0fl2lU69c%2FRbaQ5CBuf3l8ghyjfkyo%2FSYauFma0UOrfhf9j%2FrwwXXEdEjcTpWiScRy1V1cW24fNsr1EM2SxeQe50zwKs7q%2BM6ZAMvfUqExEn4qOikW5AROln5YYqMJC0k8MGOqUBjHMUedUhywkUBaZIrWjJ1IlGjkaVur5O5LKUtm%2FLKy1y4%2F85HeZVgMzV1OYWoHWf%2FMdAWAZZ8%2Bt0WdFE46he8fG5h9sfI4vLB1WfekWVfn5ra9wuiJ4bquAY4D1GdqhhCjOos4WDxExrsF5PugD9FUadSMlnn0JNOX4gs5KWazNyN1BBIzwMLn2vLLp8NQbPzp0%2FynZPWueaTLaj0jK6WHSvv4IB&X-Amz-Signature=41368b6bfdc971ae533185ba9dd5942b3447b91c28c8a32930baf3d6be6ee86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
