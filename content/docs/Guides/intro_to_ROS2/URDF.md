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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4EJS4H%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLJePQ4wnCGcxR7e1LnAbGCfspBAtHCF4B5WPo7KHF4gIhAKyHPm2pX4EG2T2RME1vZ8HfX53Hli8Zw8dwCVIgqXRPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80MolABi7VVR%2BTJ8q3APJq4wTQwQi5XhHw%2BlWF1S4Rz%2F7S9lZSre7ZNW9%2F8Q8XOWKf304KrwSaDUajjD6gYl7B2NdWwHXhLj1CCD8f0FDuEierr1SmrlbaJ1ra%2B6CClH59k3YmjUBH0vj4UD01UtYoNHH2wzKaWNBZnlgkFMloCtzaw3ByJiKl0QT6IM9t3vuF3Ym6L0D0a0hp6afIBT8l6Ql7DK5c2QeUVzOhM5u1O4OdPeIO6b1UfCBeUNZqryMYqUMB28ELeaV%2BJILAdAwcvLNGCna4mTk0BwXBGh3L99BcnZ6pm6%2F2DzEH%2FYLd2sIgzXA51iT6X0001CUlLNgaMWJmJuU0AUhEE2GLhE8PFE9rAFfRPOqjYxo1L5l18WmpVPqnAgnqy4HzRxm%2Bipq7pRG1XgGGkket3Q3AeVa2iBe3aZbiAZZQD3izOSs95r%2FuFnDkOyof6HvmKKI5sm2r6D6WZmScDl5I4jztTq2lJWsEBfT7zAlx%2BLNwrlGegJMjucbzX9iEsntsR3iCqjIozSxFK3MQdxAZARPfPD5tw6tpUYdv7lUFMwhePPhvbQd7kabSUVyV7ufLd8K0vqyD50jk0QNj%2FHmw9Bw3EDxIzrLMKMIcjVcB5%2FOZs7I6fhrVvULVnu1dwOk8DCEs6q9BjqkAcWlF%2B7%2Bq3JqiXa580AKuFa3JFqQ%2BgTi3jOh6EPmwQZATFP958M9eSaFCK1RbPxZW1naI7CMhscgZJtgjjwSOAX2O%2FOVMgkanHzZAjx1Z4pgUcWLSS0saL%2FKrmEf79%2BoCm7VxinIchg4XuXl700C4pJ2N2Sqc2BbSiR%2FGNbaWf801S8YnEU2Cdwu5Uim8BLlEcU8mOOofmjMWV%2FVeW98fOCrNl4X&X-Amz-Signature=49887040c10409cb423a195cb922224263f248354b5a8dc0bd045d55ca3adc6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4EJS4H%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLJePQ4wnCGcxR7e1LnAbGCfspBAtHCF4B5WPo7KHF4gIhAKyHPm2pX4EG2T2RME1vZ8HfX53Hli8Zw8dwCVIgqXRPKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy80MolABi7VVR%2BTJ8q3APJq4wTQwQi5XhHw%2BlWF1S4Rz%2F7S9lZSre7ZNW9%2F8Q8XOWKf304KrwSaDUajjD6gYl7B2NdWwHXhLj1CCD8f0FDuEierr1SmrlbaJ1ra%2B6CClH59k3YmjUBH0vj4UD01UtYoNHH2wzKaWNBZnlgkFMloCtzaw3ByJiKl0QT6IM9t3vuF3Ym6L0D0a0hp6afIBT8l6Ql7DK5c2QeUVzOhM5u1O4OdPeIO6b1UfCBeUNZqryMYqUMB28ELeaV%2BJILAdAwcvLNGCna4mTk0BwXBGh3L99BcnZ6pm6%2F2DzEH%2FYLd2sIgzXA51iT6X0001CUlLNgaMWJmJuU0AUhEE2GLhE8PFE9rAFfRPOqjYxo1L5l18WmpVPqnAgnqy4HzRxm%2Bipq7pRG1XgGGkket3Q3AeVa2iBe3aZbiAZZQD3izOSs95r%2FuFnDkOyof6HvmKKI5sm2r6D6WZmScDl5I4jztTq2lJWsEBfT7zAlx%2BLNwrlGegJMjucbzX9iEsntsR3iCqjIozSxFK3MQdxAZARPfPD5tw6tpUYdv7lUFMwhePPhvbQd7kabSUVyV7ufLd8K0vqyD50jk0QNj%2FHmw9Bw3EDxIzrLMKMIcjVcB5%2FOZs7I6fhrVvULVnu1dwOk8DCEs6q9BjqkAcWlF%2B7%2Bq3JqiXa580AKuFa3JFqQ%2BgTi3jOh6EPmwQZATFP958M9eSaFCK1RbPxZW1naI7CMhscgZJtgjjwSOAX2O%2FOVMgkanHzZAjx1Z4pgUcWLSS0saL%2FKrmEf79%2BoCm7VxinIchg4XuXl700C4pJ2N2Sqc2BbSiR%2FGNbaWf801S8YnEU2Cdwu5Uim8BLlEcU8mOOofmjMWV%2FVeW98fOCrNl4X&X-Amz-Signature=dc4b44aa7a35a40b996ff12a3bd1f7365579a5d3452bdac9d57a5773223a83bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
