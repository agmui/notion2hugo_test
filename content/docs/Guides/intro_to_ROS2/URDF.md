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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICIOS36%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDSUi7kzG%2B3LXUC6EUSdmxA%2BHAsaq6QzDRqMc3wJAVu6QIhAOOrdCL7ccPl%2Fe%2Bd12cyJ6LvS9ZSh%2BfWZr%2FerpQ6SzQLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq1ScvKWuiEUeP9%2F0q3AP37pOHptjdqYj5Wf%2BMmgEn0ZeXKLFHexG30exOKI9GKC%2Fn%2BGvKcRlpCUaff%2FIb62mJunDfEknpDXCw664DG3c4rxwTmk3lLXCL%2BDSlNRId6WLoiyGI2N1CyLv4bY9jaMpBJqYzByQQb7%2BWTqtua9TSm0R5Xuq5gjw0a0JZBGXeI2QEw18kgIIcC55jrl%2FWeOer7LPDEIzuXyVwXUVNX%2FBLB06W54909Tp9dWrUzXrV5BCV50%2FdwxqxJcosPw%2F5Ugl%2FcrOmSLpR5xm5HmFiba9W07F4jWjcqHPUUUGoXlpTLpO%2FwtJaprgRbkh%2FI2veB48MCbsg28QFLl6A3mnr%2BElIz3iH4UEBOEcYAKIw6xHBqVl%2BLgf2KqeFKNu8DFcniCPYee%2B8FLgenU321twslys32icjin16dKuCvdCOocknUkeHVm436Wwaz0QGaJ3fbQLAdBvZ72m2ZO2jY1oJc1bWPwVMSfXnzpa8sU6vy4%2F4yTsyY49dy1O2jVvikHH2cqA%2BUl5GcbgP89NCsIH9%2FBjckNL%2Bovxn8k39Jo%2BJR%2FLHBRduM7O%2FfB9%2Bz5LuWigWulgRbFLu38oVobfNFbdppE5tyJX7CpneJu3M1BpP85dEBKaPr9dfZlHYdbLwizDH2sO%2BBjqkAb26AUTUNeXEMsPPrFfzKZhI8XSaE%2BcfmRxHHTxwq6sKp2JNECBngTCzNnVydI%2FQWgwwoQOXzPE%2F9QhNidM8l0gku9xfQ6TEYoIeid1RxefJ70%2B20P5Ij3U8Oc3BQbM27NkL0CowxmNiBS1Kq4dy0Zi1z0JihI4rXpYjiBDyZCqQsIfzybWJy82yY6xh8scEBavxG1N1MuVYjo6hr9s3ZrM2%2FP5O&X-Amz-Signature=4ccbacacf8b3462e81b32014b0ec028ce42c7a017741bfc77c88e70d371f4fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICIOS36%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDSUi7kzG%2B3LXUC6EUSdmxA%2BHAsaq6QzDRqMc3wJAVu6QIhAOOrdCL7ccPl%2Fe%2Bd12cyJ6LvS9ZSh%2BfWZr%2FerpQ6SzQLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq1ScvKWuiEUeP9%2F0q3AP37pOHptjdqYj5Wf%2BMmgEn0ZeXKLFHexG30exOKI9GKC%2Fn%2BGvKcRlpCUaff%2FIb62mJunDfEknpDXCw664DG3c4rxwTmk3lLXCL%2BDSlNRId6WLoiyGI2N1CyLv4bY9jaMpBJqYzByQQb7%2BWTqtua9TSm0R5Xuq5gjw0a0JZBGXeI2QEw18kgIIcC55jrl%2FWeOer7LPDEIzuXyVwXUVNX%2FBLB06W54909Tp9dWrUzXrV5BCV50%2FdwxqxJcosPw%2F5Ugl%2FcrOmSLpR5xm5HmFiba9W07F4jWjcqHPUUUGoXlpTLpO%2FwtJaprgRbkh%2FI2veB48MCbsg28QFLl6A3mnr%2BElIz3iH4UEBOEcYAKIw6xHBqVl%2BLgf2KqeFKNu8DFcniCPYee%2B8FLgenU321twslys32icjin16dKuCvdCOocknUkeHVm436Wwaz0QGaJ3fbQLAdBvZ72m2ZO2jY1oJc1bWPwVMSfXnzpa8sU6vy4%2F4yTsyY49dy1O2jVvikHH2cqA%2BUl5GcbgP89NCsIH9%2FBjckNL%2Bovxn8k39Jo%2BJR%2FLHBRduM7O%2FfB9%2Bz5LuWigWulgRbFLu38oVobfNFbdppE5tyJX7CpneJu3M1BpP85dEBKaPr9dfZlHYdbLwizDH2sO%2BBjqkAb26AUTUNeXEMsPPrFfzKZhI8XSaE%2BcfmRxHHTxwq6sKp2JNECBngTCzNnVydI%2FQWgwwoQOXzPE%2F9QhNidM8l0gku9xfQ6TEYoIeid1RxefJ70%2B20P5Ij3U8Oc3BQbM27NkL0CowxmNiBS1Kq4dy0Zi1z0JihI4rXpYjiBDyZCqQsIfzybWJy82yY6xh8scEBavxG1N1MuVYjo6hr9s3ZrM2%2FP5O&X-Amz-Signature=89c4ea6b7633c476e7d62e492943aaacbfa334dff68530e5523e115bf1409706&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
