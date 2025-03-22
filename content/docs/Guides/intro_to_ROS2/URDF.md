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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KGNESM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCbFOFx95Ial%2BKxPUkwFKfUGsSfnEWqCzuLZhN1DsP%2F0QIgaOlJYBBZ%2BnaCLpm1rLA1bBf7cHLW5%2B8Gq5BUyyPw7GMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bjif1fkc4yOsK6myrcA%2FAWlh%2BLm1%2F0At1UH0umlR56SLOFJBXF%2Fh5m%2F6es%2FsiRTLCArsxbbXHGh%2Bayndo30Hn%2BROjerfeZFBH2EaW3YNUXWqZxHh0spdZZ%2BrvNWUyCBBRux7N9ZziEppeOrGdhJr25mIpfRLp0THtxiInDa7WK1DHxJQecQMXcxG8F%2FhMRC19vQBcCtr0Vkxk4vs%2BMUIm8v15e%2Bn17cJDAhqmF31kai%2B8vWPAxMGbd7GLPUuLM%2B3c0c0TyPyU7ReHGfp44Y0qJpzvatWpxTXEr93LufWt86OqbhmRmG4ilsXqqkyY1U7bmyxo7HuZGtBWbuxv9l7Tvurl8g%2FPqXW84zyMgNjSjzpINirpHALo%2FOa9lOabmxvVYsPXIUrENrAtq9jDs0siEESquOAQ5awNYFXlU3vZ7WGEy8lrMoawlXjS9CVTVFF7lEXh6CwhONQh%2Bznk5L7D%2FfbLsQz7aqgyENMTSbHfCAey4RmwUWCx%2FU2y7MTAJL2UAjDtjsZKC4n1%2FKiKbwdCiV7noS0541D3RV81UiZCETn0N7XHlEkMxegPjcesp%2Fk5BaKyavwfGWw1Oo3zcKbGNVxzLICnK4dHjT8Rjk5JSeP064wfjJtbA1L6mMpMDIOIixw4P5lmbya%2FQMJqr%2Bb4GOqUBsf39nQ2ReDjVFkT5DKjnLTHm0SVT57HG0EHAl00zyyliZ2urBwEu30pd6aUN6hwX5jCLb%2BWqC0QlG%2BP2XMdCRCasKXfvowRphrT8qISkrAvssBD0tXy7COGOBucBpwSn4afrAVbcHsyKfGDPfvKT6YF3VHdDJn6PZuAY9L0di4AEunOPzQPqiRlC9EB8drDLlspQ3YV4mOTqxX6dmd4y%2BKJyAWRi&X-Amz-Signature=1058c823e97efdbce5d4cdf035fa91e1366fd832dc21733539a80a6ff47b2ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635KGNESM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCbFOFx95Ial%2BKxPUkwFKfUGsSfnEWqCzuLZhN1DsP%2F0QIgaOlJYBBZ%2BnaCLpm1rLA1bBf7cHLW5%2B8Gq5BUyyPw7GMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bjif1fkc4yOsK6myrcA%2FAWlh%2BLm1%2F0At1UH0umlR56SLOFJBXF%2Fh5m%2F6es%2FsiRTLCArsxbbXHGh%2Bayndo30Hn%2BROjerfeZFBH2EaW3YNUXWqZxHh0spdZZ%2BrvNWUyCBBRux7N9ZziEppeOrGdhJr25mIpfRLp0THtxiInDa7WK1DHxJQecQMXcxG8F%2FhMRC19vQBcCtr0Vkxk4vs%2BMUIm8v15e%2Bn17cJDAhqmF31kai%2B8vWPAxMGbd7GLPUuLM%2B3c0c0TyPyU7ReHGfp44Y0qJpzvatWpxTXEr93LufWt86OqbhmRmG4ilsXqqkyY1U7bmyxo7HuZGtBWbuxv9l7Tvurl8g%2FPqXW84zyMgNjSjzpINirpHALo%2FOa9lOabmxvVYsPXIUrENrAtq9jDs0siEESquOAQ5awNYFXlU3vZ7WGEy8lrMoawlXjS9CVTVFF7lEXh6CwhONQh%2Bznk5L7D%2FfbLsQz7aqgyENMTSbHfCAey4RmwUWCx%2FU2y7MTAJL2UAjDtjsZKC4n1%2FKiKbwdCiV7noS0541D3RV81UiZCETn0N7XHlEkMxegPjcesp%2Fk5BaKyavwfGWw1Oo3zcKbGNVxzLICnK4dHjT8Rjk5JSeP064wfjJtbA1L6mMpMDIOIixw4P5lmbya%2FQMJqr%2Bb4GOqUBsf39nQ2ReDjVFkT5DKjnLTHm0SVT57HG0EHAl00zyyliZ2urBwEu30pd6aUN6hwX5jCLb%2BWqC0QlG%2BP2XMdCRCasKXfvowRphrT8qISkrAvssBD0tXy7COGOBucBpwSn4afrAVbcHsyKfGDPfvKT6YF3VHdDJn6PZuAY9L0di4AEunOPzQPqiRlC9EB8drDLlspQ3YV4mOTqxX6dmd4y%2BKJyAWRi&X-Amz-Signature=da9e1ef025c2a575947a59883ffce2b2f1c6d3ba69b412c62705b390978bef90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
