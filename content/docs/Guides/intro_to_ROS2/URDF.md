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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OQZ2GG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFIOad6VM%2FoghCqOcAXprQWMSp4BGt8AwkWtKt6WyYG%2BAiEA02auQ4Pies87kaVkirwk%2B2IcXAHjgDNZ%2BUCz8P9tG8kq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGrTvU63OevtcB8ZzSrcA7i2V8YaSGrkXuh%2Bx0zjXkn8Tc08HWch0ldvwy3S9SoT77zPRayOeeKJPHhuHaZjOG1gW0IrR4L0wcfiW19OffMNTaOrMtqZUaFqnOBiWEJ304zuIpNZ90j70yXcNf9qqMov30mmMj6VgpH0OLoGM8zlwicltSxtKBLmlLfIAE83dvBRRAo4zpSgawqv2gs5Mqb8KWSeSnzCDuNBASYMWnI4UfvKjYtuRpUEpXqn7k%2BAPjZ2EbZtKDD7bJZfq%2F0Fno2E%2Bs5ClDXPFrnoap9KLALDst1wwShSw%2BnIOABlSF5qnM7hPE3XQu6DEBa1eKrH6dpBrgvM4mETT7aZVLdyBz7cjTEY8LTex5wWczbwPOLfMsy%2BTVUPW3ZHb1y4Y%2FHpnPC1IfUS90PHTBtrQRGdXhLzhEY4g7WPMI45rI9vQml03cB5vmo%2Fq%2B5v5qXllL7Yii1OgryTGihZrPrivIJmlHbBTlZdvWc5%2BgLbFuKr6Gp2sMfQh7gQ4vS5pZ2Z1lbGgqSnq9ti6XMk3n4SeIj1Icwnqh%2BdQK2Z9iLMSJ%2FGJQKSRjdQgLQTKGKy9lLvw307ArYpXQzmzOLlezOMDQvRB5lQwGlO32Ddgh%2FqkY0cZcdUi8%2BOY5saXDYJpfvaMO7g38MGOqUBC8voNP9cbEkb%2F1kBCzAiTALuAO%2BWgcFy4TkTiXn9IumAhH3kLyKTj%2BTtMopKeroIy4J9toLraZoMYYEgq4JzZj%2Bp%2BwLrmRSPaM%2FQzNhbTvG1PDH8W0%2BWh0jaPfaf5bB53f2wxexPg5byNq4PJGUhuiafXmCDusrL0dUvas2vIc4jWr7%2Bcwr9uV%2Bb5NrACPMWykxpnlxRMjhAP7e1JdQCVv5WBYGY&X-Amz-Signature=79b17f315093718d0597c12f080a530e54a990fb749fe32b8347169c7a42f037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OQZ2GG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFIOad6VM%2FoghCqOcAXprQWMSp4BGt8AwkWtKt6WyYG%2BAiEA02auQ4Pies87kaVkirwk%2B2IcXAHjgDNZ%2BUCz8P9tG8kq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDGrTvU63OevtcB8ZzSrcA7i2V8YaSGrkXuh%2Bx0zjXkn8Tc08HWch0ldvwy3S9SoT77zPRayOeeKJPHhuHaZjOG1gW0IrR4L0wcfiW19OffMNTaOrMtqZUaFqnOBiWEJ304zuIpNZ90j70yXcNf9qqMov30mmMj6VgpH0OLoGM8zlwicltSxtKBLmlLfIAE83dvBRRAo4zpSgawqv2gs5Mqb8KWSeSnzCDuNBASYMWnI4UfvKjYtuRpUEpXqn7k%2BAPjZ2EbZtKDD7bJZfq%2F0Fno2E%2Bs5ClDXPFrnoap9KLALDst1wwShSw%2BnIOABlSF5qnM7hPE3XQu6DEBa1eKrH6dpBrgvM4mETT7aZVLdyBz7cjTEY8LTex5wWczbwPOLfMsy%2BTVUPW3ZHb1y4Y%2FHpnPC1IfUS90PHTBtrQRGdXhLzhEY4g7WPMI45rI9vQml03cB5vmo%2Fq%2B5v5qXllL7Yii1OgryTGihZrPrivIJmlHbBTlZdvWc5%2BgLbFuKr6Gp2sMfQh7gQ4vS5pZ2Z1lbGgqSnq9ti6XMk3n4SeIj1Icwnqh%2BdQK2Z9iLMSJ%2FGJQKSRjdQgLQTKGKy9lLvw307ArYpXQzmzOLlezOMDQvRB5lQwGlO32Ddgh%2FqkY0cZcdUi8%2BOY5saXDYJpfvaMO7g38MGOqUBC8voNP9cbEkb%2F1kBCzAiTALuAO%2BWgcFy4TkTiXn9IumAhH3kLyKTj%2BTtMopKeroIy4J9toLraZoMYYEgq4JzZj%2Bp%2BwLrmRSPaM%2FQzNhbTvG1PDH8W0%2BWh0jaPfaf5bB53f2wxexPg5byNq4PJGUhuiafXmCDusrL0dUvas2vIc4jWr7%2Bcwr9uV%2Bb5NrACPMWykxpnlxRMjhAP7e1JdQCVv5WBYGY&X-Amz-Signature=8a59324a0126ddc470c3136d1240b9f2c43e27190f78515ed12bd21ed389ab22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
