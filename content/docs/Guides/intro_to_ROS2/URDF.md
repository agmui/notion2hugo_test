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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NAILUQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDRcj78tgjdHMtk3RQjm5VXJJ5DI1iVfCHipdlICTN07QIhAJ3TUuc4XwClGT3%2FWtNcANBLAKKLgApRgX8Ny06xXTjbKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzoaHkiNTJ3yozENIq3APmSrrKceN0MPo0X2R2LICXONpC7fqkwsvuMqpjtKvd5lkEUSU0R%2FRaax555Gl3XjnrEWVrp1vQG5wJs3f9zPOYaTLDMmeADUECExnaji7J1wbOiAwsdWKhgjvrL4IA5M7KK4JMig8pyHmwIEwF0vXw2aPAw%2BLlzkcj4FmFFdulLDzs4PbALO4nFAdsDmkuLMRMYYmlPDCaa%2FEGOYXSc8qWDLVgmt78l5BO6jBA3GqGEhZYZPWlHjTUxVAfjs2gxR%2B4nw7NLljHBkoypuSHoBZTRE%2FeQUV%2F%2Bmpmg5aSMnQc1k9t1ilsKekJqmbm9%2F1baUkq%2BYL69zZehec70nsCSM0rZC4xnssug2pwFGU3a0CMuutNkaCNgmB2x7trqukT9vt484KmwYoiVIQo4DkH6ctGwPBO9JgBIhEd981SsNUkdG%2FPi6kf%2BMGoVrP008VT6euDVdjSXLCo2c9iDsTpZgoo%2FCS9Vc2OfIfx%2BihAEFqvRdTQu9VJx6r%2FbTJyJ4BGf2VUOdXLkrZEaY%2BAKRN8t6S81BGEl8fvS0NpuNfK0u0wdUnTQ2vH1aPX0x%2FVXK%2FRG1D%2BCbygXqOJdeWSTqA1dWM3hRWd9UBQoboLPc5Gbn2T704S1iAePMz%2B3mXYHzD5htbABjqkAUcmfFBeG8KGibQIcPwZyHe1ZYwm6koDti6tThTYlKknDS7l8DBPv1EzgW1fJM1RTU5pSApa5e1uNQ9J8aj0Y4Qrx7cZSlxp%2BzXDZzyD45XLRJWADlpeeYn4bb5tAn909xTsiCu4JQFwE%2BdxVL%2BAfE9H%2Bi6FEtsqwzVMEqJhlISb1JR4j%2FG2RRaSyVJZ90mlgaonYTOTIRM18Qfg%2BmlI3uzmKILI&X-Amz-Signature=d3ffba7c6da5fbd7b6e6fd10bdb75ae98b2774fcccb1050580222ccdcfc7d93a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NAILUQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDRcj78tgjdHMtk3RQjm5VXJJ5DI1iVfCHipdlICTN07QIhAJ3TUuc4XwClGT3%2FWtNcANBLAKKLgApRgX8Ny06xXTjbKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzoaHkiNTJ3yozENIq3APmSrrKceN0MPo0X2R2LICXONpC7fqkwsvuMqpjtKvd5lkEUSU0R%2FRaax555Gl3XjnrEWVrp1vQG5wJs3f9zPOYaTLDMmeADUECExnaji7J1wbOiAwsdWKhgjvrL4IA5M7KK4JMig8pyHmwIEwF0vXw2aPAw%2BLlzkcj4FmFFdulLDzs4PbALO4nFAdsDmkuLMRMYYmlPDCaa%2FEGOYXSc8qWDLVgmt78l5BO6jBA3GqGEhZYZPWlHjTUxVAfjs2gxR%2B4nw7NLljHBkoypuSHoBZTRE%2FeQUV%2F%2Bmpmg5aSMnQc1k9t1ilsKekJqmbm9%2F1baUkq%2BYL69zZehec70nsCSM0rZC4xnssug2pwFGU3a0CMuutNkaCNgmB2x7trqukT9vt484KmwYoiVIQo4DkH6ctGwPBO9JgBIhEd981SsNUkdG%2FPi6kf%2BMGoVrP008VT6euDVdjSXLCo2c9iDsTpZgoo%2FCS9Vc2OfIfx%2BihAEFqvRdTQu9VJx6r%2FbTJyJ4BGf2VUOdXLkrZEaY%2BAKRN8t6S81BGEl8fvS0NpuNfK0u0wdUnTQ2vH1aPX0x%2FVXK%2FRG1D%2BCbygXqOJdeWSTqA1dWM3hRWd9UBQoboLPc5Gbn2T704S1iAePMz%2B3mXYHzD5htbABjqkAUcmfFBeG8KGibQIcPwZyHe1ZYwm6koDti6tThTYlKknDS7l8DBPv1EzgW1fJM1RTU5pSApa5e1uNQ9J8aj0Y4Qrx7cZSlxp%2BzXDZzyD45XLRJWADlpeeYn4bb5tAn909xTsiCu4JQFwE%2BdxVL%2BAfE9H%2Bi6FEtsqwzVMEqJhlISb1JR4j%2FG2RRaSyVJZ90mlgaonYTOTIRM18Qfg%2BmlI3uzmKILI&X-Amz-Signature=ab51495b75e34448da13ccab65f71d06496b313b6b9d6635f2ef52cd63cd6984&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
