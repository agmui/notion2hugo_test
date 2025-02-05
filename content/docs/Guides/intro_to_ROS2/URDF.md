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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z3TCR6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCL74U7l3sRuQ8cPPxj%2FXc7W4Ychbv64Tu19O0wWGVAggIhAIavrbAPyVio1E%2FWrBoHabMThoZKOHUo7pBcPFJMNaxNKv8DCEoQABoMNjM3NDIzMTgzODA1IgxeUabo71t934obrqIq3AM2NzMnaWWMMTp4Iqpq7nqtjMfPM%2F0IavU7fg1HYPiXue9aM0Q8MdWDmQg%2B08PgdN3oNB43loDpHDOIDCZHfaNztQEHOV4D1Oy7wPld4sofrf473f%2BEyLLflDDmqryGBShsoXxxHAI87JLuFweotwCCryS%2FPyTsqEn7aTy5%2FEph1lHWnpQB2p5RaT3TxRlZ0Rhe1NseAUUbVKDOSSti2aJAjfnhl72RK0UTs21f6vD7rU4f4DiPHFqqZAVrgX50eXj1yxNkE9lVVcDnSIqHbKYwLBj59sPbRA9MGZA7XLYR31UiHoE1T0gZRbb0WTgc5XxC3YtI1k8rfUPnys4D7wtAsueXtajLuvZiEI6p29C1Vbz0ND%2FcWC0xRyPGKTuey5q%2B3FFhlaLq47W0YvPstElDwcq%2BvMSQGAn8HBrPrAoC08OYbNYNKP%2BmejHVjTW5BPAxj6N1vFMCEPlWo9I0hWnCt6MBUeo6i%2B7GilRLjLYd7RFvayvzmU%2FhIeJR6nuPmLv2XKmrhKCsJ8bC2oVyagZmbimFVzFSd6ZdggAPlCvOYlwrhjXFIsNTXxtZd9vNO3wRiHZYa2CHBBPw9aHbbqKzf1y1md3QBI%2BSnro5wTmFa9YX1mMq8mAuOV4FczCbvI69BjqkAZgAdeTyM1h8gbHCKSxdgsIz8naimfA%2FCWerfq8yZf31c5azrInIBkXjtVxSj7JLLO9qWiuoFjRpKEShcgCosq8Tq5NT2rNxlFLTb3DNe4%2F3uAu02qMEbI93Z9MLSkeTu810AInSPfoXDE%2F3fPAt9RfaTzc1zbCMt7WnV9holPYUldxD68we9%2Fa2lR97xFtH29BiYWnxe9OKL%2Bi1nJ520wLPGAkw&X-Amz-Signature=9488d78215b189bf16bdf3e323dc5b260d97bbbdb69b80dc29fcb5e58a32ea1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z3TCR6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCL74U7l3sRuQ8cPPxj%2FXc7W4Ychbv64Tu19O0wWGVAggIhAIavrbAPyVio1E%2FWrBoHabMThoZKOHUo7pBcPFJMNaxNKv8DCEoQABoMNjM3NDIzMTgzODA1IgxeUabo71t934obrqIq3AM2NzMnaWWMMTp4Iqpq7nqtjMfPM%2F0IavU7fg1HYPiXue9aM0Q8MdWDmQg%2B08PgdN3oNB43loDpHDOIDCZHfaNztQEHOV4D1Oy7wPld4sofrf473f%2BEyLLflDDmqryGBShsoXxxHAI87JLuFweotwCCryS%2FPyTsqEn7aTy5%2FEph1lHWnpQB2p5RaT3TxRlZ0Rhe1NseAUUbVKDOSSti2aJAjfnhl72RK0UTs21f6vD7rU4f4DiPHFqqZAVrgX50eXj1yxNkE9lVVcDnSIqHbKYwLBj59sPbRA9MGZA7XLYR31UiHoE1T0gZRbb0WTgc5XxC3YtI1k8rfUPnys4D7wtAsueXtajLuvZiEI6p29C1Vbz0ND%2FcWC0xRyPGKTuey5q%2B3FFhlaLq47W0YvPstElDwcq%2BvMSQGAn8HBrPrAoC08OYbNYNKP%2BmejHVjTW5BPAxj6N1vFMCEPlWo9I0hWnCt6MBUeo6i%2B7GilRLjLYd7RFvayvzmU%2FhIeJR6nuPmLv2XKmrhKCsJ8bC2oVyagZmbimFVzFSd6ZdggAPlCvOYlwrhjXFIsNTXxtZd9vNO3wRiHZYa2CHBBPw9aHbbqKzf1y1md3QBI%2BSnro5wTmFa9YX1mMq8mAuOV4FczCbvI69BjqkAZgAdeTyM1h8gbHCKSxdgsIz8naimfA%2FCWerfq8yZf31c5azrInIBkXjtVxSj7JLLO9qWiuoFjRpKEShcgCosq8Tq5NT2rNxlFLTb3DNe4%2F3uAu02qMEbI93Z9MLSkeTu810AInSPfoXDE%2F3fPAt9RfaTzc1zbCMt7WnV9holPYUldxD68we9%2Fa2lR97xFtH29BiYWnxe9OKL%2Bi1nJ520wLPGAkw&X-Amz-Signature=b0315ec3c45d9c9b93c7bab3e434a7f7cdc9be6731aca77c2f9b673b716b0a38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
