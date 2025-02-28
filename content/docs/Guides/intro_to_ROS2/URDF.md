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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33ILHRB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEVxTBi8b6GC5P4IXxHaH3MuP0nPRHbiZl1G4poUn440AiAL0khoD0GwzHxSzqvL9V7A9lCQ3X6kBBVmWdR4eepMPSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUc7v11mV%2BmYuLHdsKtwDXn1jXF8RRTkHMs3RWLJ0pcnbx4sv22KEvX0X2i%2Fwu%2BKDlA0APvttTRkH0DymjekGJ8nTlxr1AjL48KprvxjiJdjI7GN3cEsBeSlw9CQ9fLatthsES%2FezJ4W9NK1srtRwXRra2IUINxXWrkltcAvxjlbT15t6YaQzwK9NmX3ABvxNJDFY1Tno5%2BW2pUwMx%2FQWiPixzsUnHxH2sDxJRjRDJzlvdZhaSlBp9jVmlCMLw6xNPvRGC8NDye6yXW4Zk%2B2Nqx4M2NjETkJdl%2BiQeGtwE%2Bqb4Ciirrf3NVaWejluezHG9avQduvVpiOouIGgKiNpk2MT3KjvfRyE8BaGoCQchnEoWhpAEd7lCFBVDO%2F6EZm3Q0rtWjJcz78lVrjMcDGh4bxSYS85XIlpAugqxqddEcPu9zd2Ce3mIjpHVxkI7aDBqr3QurXo1cNnMxh20aLBIUPny0XBRGdAu8CKBR9mqwmsRHAguOnMtHfA49EOOVadV63uMRTIgQXquLTPFA%2FpjSvH4PIemTRAGgYM35aO%2BqyIKCX0w3Onavp%2FzaRbFHh%2BUbY8WIgL5DadWAmHfWJG1PGw2lfX3TvmieKMjz6AObyfFEpAr7X9SuFRruey4LMXvjfOk%2BDeVUSB2ZswutKEvgY6pgFOnoFuamgbhgBmsIKAprWbMxGDhmwSjhOLraQ1NlXNbQJyv%2F1DB3PI5vFh%2BMj6vzFKirjrKrpVtyL2HzHbQjDoNH%2F68jh6M%2BXjWhZ1ymxoTTvtgAbNpXIhcT4zlGUex0l9iUcI3H5KT016cJ5c2dI6VETGFWazs2iHovRsSkxobSO1aI5Sy5Te4viSWRD86SUr%2F12EBng39FeNuv41HIIzOhli11nO&X-Amz-Signature=69541cf37fa65605c5682745148e61b64b686cb4f740267932a5b382e59355fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33ILHRB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIEVxTBi8b6GC5P4IXxHaH3MuP0nPRHbiZl1G4poUn440AiAL0khoD0GwzHxSzqvL9V7A9lCQ3X6kBBVmWdR4eepMPSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUc7v11mV%2BmYuLHdsKtwDXn1jXF8RRTkHMs3RWLJ0pcnbx4sv22KEvX0X2i%2Fwu%2BKDlA0APvttTRkH0DymjekGJ8nTlxr1AjL48KprvxjiJdjI7GN3cEsBeSlw9CQ9fLatthsES%2FezJ4W9NK1srtRwXRra2IUINxXWrkltcAvxjlbT15t6YaQzwK9NmX3ABvxNJDFY1Tno5%2BW2pUwMx%2FQWiPixzsUnHxH2sDxJRjRDJzlvdZhaSlBp9jVmlCMLw6xNPvRGC8NDye6yXW4Zk%2B2Nqx4M2NjETkJdl%2BiQeGtwE%2Bqb4Ciirrf3NVaWejluezHG9avQduvVpiOouIGgKiNpk2MT3KjvfRyE8BaGoCQchnEoWhpAEd7lCFBVDO%2F6EZm3Q0rtWjJcz78lVrjMcDGh4bxSYS85XIlpAugqxqddEcPu9zd2Ce3mIjpHVxkI7aDBqr3QurXo1cNnMxh20aLBIUPny0XBRGdAu8CKBR9mqwmsRHAguOnMtHfA49EOOVadV63uMRTIgQXquLTPFA%2FpjSvH4PIemTRAGgYM35aO%2BqyIKCX0w3Onavp%2FzaRbFHh%2BUbY8WIgL5DadWAmHfWJG1PGw2lfX3TvmieKMjz6AObyfFEpAr7X9SuFRruey4LMXvjfOk%2BDeVUSB2ZswutKEvgY6pgFOnoFuamgbhgBmsIKAprWbMxGDhmwSjhOLraQ1NlXNbQJyv%2F1DB3PI5vFh%2BMj6vzFKirjrKrpVtyL2HzHbQjDoNH%2F68jh6M%2BXjWhZ1ymxoTTvtgAbNpXIhcT4zlGUex0l9iUcI3H5KT016cJ5c2dI6VETGFWazs2iHovRsSkxobSO1aI5Sy5Te4viSWRD86SUr%2F12EBng39FeNuv41HIIzOhli11nO&X-Amz-Signature=1de3fe288eb0eb3233b41bd29605b507fe61ace7fc90bc350b29839fa75bbeee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
