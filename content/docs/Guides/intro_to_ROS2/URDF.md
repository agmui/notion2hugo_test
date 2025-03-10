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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4IX2S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAW6GMpDiThIZPdVUO4gxcIxvOHdjD%2FaDnP%2BoVeG7ZSoAiEAwxZ0gmCSvqVc8GzBNEH1t7b0k8j18O7xnLqdNM5%2F8ygqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW%2BUlijcYCnlQ1gKSrcA1J83qjFGYQru84MqaWCfLNzdQpvNbF8s8aGgM5wbO2eYVLhynXCRO4%2FhlqxjXin7WvhpGj4j9F1CA9cTNh0L8yxDUId59pnpCJcqkvySvCr7z9rXEsw5PN8wNfMgM2r%2FfmDMOW5csey3t5iDuGcWj%2BFImEyhzwmphOrxaGWdrX0aGgN2PgUGFdMDMdgKsaRciBXGg37LWDmIMbz2IZh7%2BG5TQXcnGiogBSCXB09jOiaoIC871atkkkuoJLNrjid3btJlJrHSLq347Qc%2BA4eMP5pN06gcu8fk6HYVYjzh6gksz8g%2FT%2FTngxoy3XbCqj3fRlNJOdK45TcgaXpFOeGYHnf0mtpTxa%2B7HhrnPrBxZFC%2BHqQHGLv6nyqCP4j%2F%2BoPz5Rp%2BZCodQ5IiJ5ltpC8gHvV5F1hzhAmb7FdZEDsEkXGDQNJcpEfXDT9lbZc4NYCTCmrGNSoljwmFgeYW%2F49Ola3hywwe8BcgEwm4wB9CU1OiHhkWk%2FsgrZtR%2BDGk%2B2jz%2FPYFgf581a0nOdNPT8IZ1BQLQ21H%2FKnsjx%2FEojaziJ4ovmYlVjnfrCV3dfh%2FObzZfbeN20otwK4aSjhOLp3l4IffMtk7RubRGFK7FSIlqJnecshI2vxVP%2FCKYWuMLzIur4GOqUBslEs4W7235CgNWGg70vk9mz8Q0QaryCD2N8NRZI%2F%2Fypp1BCMyg2XLcsD3b6D4O7ftUNtkIrb4L4Bv2VTdV84goqnEsMEnDHi3FcTu8OJFfl%2BScquSj624JmThqZM1APUsFkMhDQsgTAHkEZa5NLHwDeHgpW0YYlH5cK4xD1ruylArvE2rcYYVYFKUR1nmXmAtfFf9nnuCh6ElmPYdRmNP9KkBChN&X-Amz-Signature=970c71072bb54708a6989717d4553fde8734dd1c46ac92841637751e06e4bd27&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4IX2S%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAW6GMpDiThIZPdVUO4gxcIxvOHdjD%2FaDnP%2BoVeG7ZSoAiEAwxZ0gmCSvqVc8GzBNEH1t7b0k8j18O7xnLqdNM5%2F8ygqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW%2BUlijcYCnlQ1gKSrcA1J83qjFGYQru84MqaWCfLNzdQpvNbF8s8aGgM5wbO2eYVLhynXCRO4%2FhlqxjXin7WvhpGj4j9F1CA9cTNh0L8yxDUId59pnpCJcqkvySvCr7z9rXEsw5PN8wNfMgM2r%2FfmDMOW5csey3t5iDuGcWj%2BFImEyhzwmphOrxaGWdrX0aGgN2PgUGFdMDMdgKsaRciBXGg37LWDmIMbz2IZh7%2BG5TQXcnGiogBSCXB09jOiaoIC871atkkkuoJLNrjid3btJlJrHSLq347Qc%2BA4eMP5pN06gcu8fk6HYVYjzh6gksz8g%2FT%2FTngxoy3XbCqj3fRlNJOdK45TcgaXpFOeGYHnf0mtpTxa%2B7HhrnPrBxZFC%2BHqQHGLv6nyqCP4j%2F%2BoPz5Rp%2BZCodQ5IiJ5ltpC8gHvV5F1hzhAmb7FdZEDsEkXGDQNJcpEfXDT9lbZc4NYCTCmrGNSoljwmFgeYW%2F49Ola3hywwe8BcgEwm4wB9CU1OiHhkWk%2FsgrZtR%2BDGk%2B2jz%2FPYFgf581a0nOdNPT8IZ1BQLQ21H%2FKnsjx%2FEojaziJ4ovmYlVjnfrCV3dfh%2FObzZfbeN20otwK4aSjhOLp3l4IffMtk7RubRGFK7FSIlqJnecshI2vxVP%2FCKYWuMLzIur4GOqUBslEs4W7235CgNWGg70vk9mz8Q0QaryCD2N8NRZI%2F%2Fypp1BCMyg2XLcsD3b6D4O7ftUNtkIrb4L4Bv2VTdV84goqnEsMEnDHi3FcTu8OJFfl%2BScquSj624JmThqZM1APUsFkMhDQsgTAHkEZa5NLHwDeHgpW0YYlH5cK4xD1ruylArvE2rcYYVYFKUR1nmXmAtfFf9nnuCh6ElmPYdRmNP9KkBChN&X-Amz-Signature=1fe89bf0b86c4638fbca03ae2038c78c30b7839cbe506ce80b34bf693234540f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
