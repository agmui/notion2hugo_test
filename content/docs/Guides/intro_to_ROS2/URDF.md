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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZXU3LU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDbxIMGTLukmjfSS6jpAy7z3G3BT6Ble7U1BY5jjsAhHAIhAJ%2FrfT7Wh11ZiArGvv%2Ba%2F5p8Pag4X1u60fuVeA9lIosxKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGG44hnP9WuwDVYKMq3AO8KLDQivUcxOa06aLb5os3TKJnoPJzILxK0O6a0jJcnJC1FjLBYDhpR5L7VZEZMW2RG44orBYMLtvI6cbseC1yk6TN1%2F9RxT7UGOK3RiR74Fs%2F8iUr3wphvvxMi8Cnm4uhvEhn0nAa6vVTofLpG4MBgp1R%2BVHkzAZH%2F5xp1bRatf3vP%2B34FytDjZxh%2FR4zP4SjAwVwlC6l3%2BBN%2FLnVi%2BVJEzQ4kWotFiIRHbBNH2sgL1wp1KJe%2FOrXLtfZZnmVy7wJA36tDgCCUEqZVXTCh4%2FT3UO3FA1gXXeWfl9qWXL6H%2FHIwGgrNhTy1F0ZNXii5vz2UnpT8ywqgV3SDP%2BPKlAzeDmWM77GFQKtuGoFCsfUA8fOHaQ7wzRLwRbi6mSmJ4Y0jE7L%2Bw4RW1K3kOHPwZcn%2BgK965zdxSDBMWhRA%2BMWs9ub42I4zsUiG%2B3Ch0NQNAiIciOu9dyn6M0TTGgnP81%2FEYtGgHyapUfIYRJXIAebFEiLosM5PYjVJngkivPFhDQQ872uX4Ks4Dh9ydLJVR7KUfZje3X6HG1XzJGDDLX7jnX6YrjH%2BmNhhCmM6IsnG3tNLA9FUkQwg6gPADDA5RzrbeBcNvxfUUwzdwlvNj2lMec6O3G0Sw9INOQZxzCsns3ABjqkAbvQRWi3hxNQodsC3uZcr%2BUbwyzYaaq%2FQ1SCawmPYPr8m8i8NSgL9ASJuToqEE8y7MnVb4c3DuMF6QmSdwFCDAPlHEjTbdQ8UxcVclmrQdNrh0BBOYcNXH%2BzaEJwN3MnzqcR17o47WUZ8n%2BUVJ2YdNAzgsvzTealyn3i2za5Sc8Lss1jWgCqNgDL24iVaVDL3Tn0c6%2BV7uV8KDBLAExn029EwUZE&X-Amz-Signature=0608edc893364cab2577d9e177caf66fb5e5f85fac7e0bc2e48631d18abfb9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZXU3LU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDbxIMGTLukmjfSS6jpAy7z3G3BT6Ble7U1BY5jjsAhHAIhAJ%2FrfT7Wh11ZiArGvv%2Ba%2F5p8Pag4X1u60fuVeA9lIosxKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGG44hnP9WuwDVYKMq3AO8KLDQivUcxOa06aLb5os3TKJnoPJzILxK0O6a0jJcnJC1FjLBYDhpR5L7VZEZMW2RG44orBYMLtvI6cbseC1yk6TN1%2F9RxT7UGOK3RiR74Fs%2F8iUr3wphvvxMi8Cnm4uhvEhn0nAa6vVTofLpG4MBgp1R%2BVHkzAZH%2F5xp1bRatf3vP%2B34FytDjZxh%2FR4zP4SjAwVwlC6l3%2BBN%2FLnVi%2BVJEzQ4kWotFiIRHbBNH2sgL1wp1KJe%2FOrXLtfZZnmVy7wJA36tDgCCUEqZVXTCh4%2FT3UO3FA1gXXeWfl9qWXL6H%2FHIwGgrNhTy1F0ZNXii5vz2UnpT8ywqgV3SDP%2BPKlAzeDmWM77GFQKtuGoFCsfUA8fOHaQ7wzRLwRbi6mSmJ4Y0jE7L%2Bw4RW1K3kOHPwZcn%2BgK965zdxSDBMWhRA%2BMWs9ub42I4zsUiG%2B3Ch0NQNAiIciOu9dyn6M0TTGgnP81%2FEYtGgHyapUfIYRJXIAebFEiLosM5PYjVJngkivPFhDQQ872uX4Ks4Dh9ydLJVR7KUfZje3X6HG1XzJGDDLX7jnX6YrjH%2BmNhhCmM6IsnG3tNLA9FUkQwg6gPADDA5RzrbeBcNvxfUUwzdwlvNj2lMec6O3G0Sw9INOQZxzCsns3ABjqkAbvQRWi3hxNQodsC3uZcr%2BUbwyzYaaq%2FQ1SCawmPYPr8m8i8NSgL9ASJuToqEE8y7MnVb4c3DuMF6QmSdwFCDAPlHEjTbdQ8UxcVclmrQdNrh0BBOYcNXH%2BzaEJwN3MnzqcR17o47WUZ8n%2BUVJ2YdNAzgsvzTealyn3i2za5Sc8Lss1jWgCqNgDL24iVaVDL3Tn0c6%2BV7uV8KDBLAExn029EwUZE&X-Amz-Signature=c900acedf4773b12e853ee160acf0cfff4b6a0b70b9a99d677795ea6808895a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
