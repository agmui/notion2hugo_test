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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVSFMNV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD2xzMcgsJ7OfARYIE98g2ZVHWPvB4PAFX5jq167rL9lwIhAM9IaOjktlXdqMyPOshcLOrU0%2BkwmGj9KMgqoG1ZtaR7Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyzSLMhVXmVEdrroMcq3ANXgWacOZC%2BYcWoOhZUdZdiZkksiWlCK624PLTK6X%2FB4jMCcQbkQ0LaU00rdDO0xCqc%2BYHX3qDWH53u0vJH9py8wMrWDJBJTqbN9FsglaRGMXyPqh%2FKmQuYkgHwZ5n6ISTfG63%2BHoUezDG5j3XAtFCH%2Bo2HSek9D%2FcvoVVMPn9UZU83hYJa6CFk0aNYPRfwpzwUp7%2FLT9s4mL1V0t2%2FgNC01NdO28GaYMYF9v5XCBhqqc1bRftnBGxr%2BU2LL1vXY4CtrYbiLHMRlrzVtOcBBLwdmEpJjoPG%2Bv7WZgN8%2Fwp2qORX%2BlPUPT1pMPQ%2FpJ2frb2kqq0FspU9oEyX4zWusVO%2BYCnvsC2O4gLzcjK75Cw6FyWsiVn1VkjPtP%2BrAJDXE9mlzx1YrEfU%2BtVtTktnkGGH3IfyVyx8jBhOMH8KQX5QIF9tT0NzyArMaECOjCIvXqYml44tacgsyuy0ggI%2FbwMNKduXU7lUlEhhide%2FUXow8zXv3jlfcAEEY5Vd9zkf9m8ouGMYnhjwxud0dlc6Y02yoEHCh%2F90qCiiQW6hlAOle7xoy3jlQtfU59axHp0%2BJAO7Ck9kSL3WV868THdtZWeBzYxFa3ou8RDWN5cptb5LFHjOnjn8CftqNpXP2DC6ws29BjqkAeh%2BoPk1higerMIOz86nLIA9pVnPv8zjDxci7GfTHUn36oMiBSQddxpqk8XaKKWZ0lhzUdkG20KyRRr2jO%2F5vnxICDGBka4fe5HYU0YucPMEfTaCAo%2BGXpFwYJE%2BS%2B7Rnbv0%2Bz7%2BhJsmkmUFV%2BKziXRbFK3adhMPrxH78lyDTyR2a78BiuHunjCu0%2B3X2VSLunhIAPs2ckMX95MZgXgpdhpPpTPS&X-Amz-Signature=976e8fe15609d158ddc53a43620b9d5e60d127f99e04430cc0dfaed688657958&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVSFMNV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD2xzMcgsJ7OfARYIE98g2ZVHWPvB4PAFX5jq167rL9lwIhAM9IaOjktlXdqMyPOshcLOrU0%2BkwmGj9KMgqoG1ZtaR7Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyzSLMhVXmVEdrroMcq3ANXgWacOZC%2BYcWoOhZUdZdiZkksiWlCK624PLTK6X%2FB4jMCcQbkQ0LaU00rdDO0xCqc%2BYHX3qDWH53u0vJH9py8wMrWDJBJTqbN9FsglaRGMXyPqh%2FKmQuYkgHwZ5n6ISTfG63%2BHoUezDG5j3XAtFCH%2Bo2HSek9D%2FcvoVVMPn9UZU83hYJa6CFk0aNYPRfwpzwUp7%2FLT9s4mL1V0t2%2FgNC01NdO28GaYMYF9v5XCBhqqc1bRftnBGxr%2BU2LL1vXY4CtrYbiLHMRlrzVtOcBBLwdmEpJjoPG%2Bv7WZgN8%2Fwp2qORX%2BlPUPT1pMPQ%2FpJ2frb2kqq0FspU9oEyX4zWusVO%2BYCnvsC2O4gLzcjK75Cw6FyWsiVn1VkjPtP%2BrAJDXE9mlzx1YrEfU%2BtVtTktnkGGH3IfyVyx8jBhOMH8KQX5QIF9tT0NzyArMaECOjCIvXqYml44tacgsyuy0ggI%2FbwMNKduXU7lUlEhhide%2FUXow8zXv3jlfcAEEY5Vd9zkf9m8ouGMYnhjwxud0dlc6Y02yoEHCh%2F90qCiiQW6hlAOle7xoy3jlQtfU59axHp0%2BJAO7Ck9kSL3WV868THdtZWeBzYxFa3ou8RDWN5cptb5LFHjOnjn8CftqNpXP2DC6ws29BjqkAeh%2BoPk1higerMIOz86nLIA9pVnPv8zjDxci7GfTHUn36oMiBSQddxpqk8XaKKWZ0lhzUdkG20KyRRr2jO%2F5vnxICDGBka4fe5HYU0YucPMEfTaCAo%2BGXpFwYJE%2BS%2B7Rnbv0%2Bz7%2BhJsmkmUFV%2BKziXRbFK3adhMPrxH78lyDTyR2a78BiuHunjCu0%2B3X2VSLunhIAPs2ckMX95MZgXgpdhpPpTPS&X-Amz-Signature=f1d2ca32a72de2d1c875eac2479a9da843ff4420f87d28570b0511e4248fbc7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
