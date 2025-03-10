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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34QMGXH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGnz62Gl91fm2db7fT27Uos1DA2zURLgw9M2BL52WxfhAiEAkEjMx21TZkCFFG5f%2BVbUo1RKFbHC%2Fvg9yOVHg5XY4SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm5IZNs2lzWw%2FglRSrcA9choEjDdXeg98wRYzpRlrI3tuhrh0epU%2BnxE6xaR1m%2F9xXYLZ0WsTljOw33XtPwUU%2FYXByfYjNuuqn9YtuT10h7EmTZv0wrtIvkMJmnvk6HBsufxa1EqC%2BoVU%2Fneeu2Fku7IMHjUKuUeHVJ9eoKA1dbBQy03Fbvek9p2753s4kps2Ne3jOp%2B8IBgCD54LaWtoIiLHnBZOVGouPGvwOpU60SwsC24Mmfj3YBob7xYE3oWcNwr2Gm3jH2oM0NSoTV5v%2FtXMUIxGrCyljh%2F74QfWODltiYvLASC%2BqxELzoZzbVjSM8ooSD5HMzIFkby9HOMpRD5VVqACqUY70I4Y8M5%2BQKUTFNvf5YJUT3DCfTyQAJ7BMVX4CXcYm2DMsPrGEJi4dKUIfx3h3oQdVafWEDSmDEjB9g5VPxO%2FowkjDUl1LNgLTJZjGZFrWuXPmOWjn540gbeJIVPzBcVW4CRjBeLyLxWCStd%2B43xLAyJQPHFm%2F08eD%2F4oJ4kWk7OWS0wX2CuvSl7WWG3Fw%2F6H%2BH4ySYmE25NkTV6mGfnCXIYW1cnyC6v8FkzYJ4aQvhLjC5lAwcwNFQqb%2F0NK97eoY9plMBQ2asvsFkeZtTHDlSfPigITgnOUMtNy5kAPh3yZ1BMOP6uL4GOqUBH9auI5vDuTaEJWdYwyd2vivoo277cwC9TLjxsVfW2kwVQETXot79QMKpgmPM6fXWJITu0xFjOcPpL9YuAEYLKq7YmAEty15NEvmkeHN%2FBrwG7JfMI6s4btYimp98KJsQ0DJ8Mbmr3sjEj1kwrSbYvO3xuL1HT1anWkz%2BaqUmdzPhQpncZavSkGXhejir121wXmYlqZjzxJ5gYzLiX5rl7k9FV5BR&X-Amz-Signature=47231c7cf9a44234c1ee37b4317c5012e15ed5d3743dab0d816dbdb89c996ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X34QMGXH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGnz62Gl91fm2db7fT27Uos1DA2zURLgw9M2BL52WxfhAiEAkEjMx21TZkCFFG5f%2BVbUo1RKFbHC%2Fvg9yOVHg5XY4SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm5IZNs2lzWw%2FglRSrcA9choEjDdXeg98wRYzpRlrI3tuhrh0epU%2BnxE6xaR1m%2F9xXYLZ0WsTljOw33XtPwUU%2FYXByfYjNuuqn9YtuT10h7EmTZv0wrtIvkMJmnvk6HBsufxa1EqC%2BoVU%2Fneeu2Fku7IMHjUKuUeHVJ9eoKA1dbBQy03Fbvek9p2753s4kps2Ne3jOp%2B8IBgCD54LaWtoIiLHnBZOVGouPGvwOpU60SwsC24Mmfj3YBob7xYE3oWcNwr2Gm3jH2oM0NSoTV5v%2FtXMUIxGrCyljh%2F74QfWODltiYvLASC%2BqxELzoZzbVjSM8ooSD5HMzIFkby9HOMpRD5VVqACqUY70I4Y8M5%2BQKUTFNvf5YJUT3DCfTyQAJ7BMVX4CXcYm2DMsPrGEJi4dKUIfx3h3oQdVafWEDSmDEjB9g5VPxO%2FowkjDUl1LNgLTJZjGZFrWuXPmOWjn540gbeJIVPzBcVW4CRjBeLyLxWCStd%2B43xLAyJQPHFm%2F08eD%2F4oJ4kWk7OWS0wX2CuvSl7WWG3Fw%2F6H%2BH4ySYmE25NkTV6mGfnCXIYW1cnyC6v8FkzYJ4aQvhLjC5lAwcwNFQqb%2F0NK97eoY9plMBQ2asvsFkeZtTHDlSfPigITgnOUMtNy5kAPh3yZ1BMOP6uL4GOqUBH9auI5vDuTaEJWdYwyd2vivoo277cwC9TLjxsVfW2kwVQETXot79QMKpgmPM6fXWJITu0xFjOcPpL9YuAEYLKq7YmAEty15NEvmkeHN%2FBrwG7JfMI6s4btYimp98KJsQ0DJ8Mbmr3sjEj1kwrSbYvO3xuL1HT1anWkz%2BaqUmdzPhQpncZavSkGXhejir121wXmYlqZjzxJ5gYzLiX5rl7k9FV5BR&X-Amz-Signature=752735a0b681c6b0796eaf94370a2180c5a74f6ba01b419c57f40f487dd78aae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
