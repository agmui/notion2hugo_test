---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSETIS2%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC2UgVejphdsUPim10qUPdSvTHlOv8KJfHcKqDfYHlnkgIhAOjaJMYGN40%2FcLWWZuSSwcvYfZdyzTJ9eVnlNZsop%2FLLKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqqOOOw5ctRb5mlDUq3AMYJvHQkyMxz44OpDI9WckP3tPmHxS6HGpORdPIpVljUETdDt4nuqt6p3q0MA83VAO2HFwFvipDd4sZHwmbahI3oyWAw8dfBK6XfbNeLyXMADfQX04O9ucIZzSdNQkkvSpZP%2Bz75ACtatT8QyZIyEpMNw3O1YurTMcMDiojxZS2ayy79bIx8WiMZ1XacqLDbFGrfkll%2Fprz25w60b4VDbJqfSO7C%2BWTMfWfDyFqKsRD5e%2Fz5udDL8SHmKUyb2FAIwpryopn%2FBQMCFjru%2F%2FunKqbkKAMX5N5O7bkxtL%2FtN3rb8oFrsl44ZZ6jR8z4SY7o7ztJD5VM3LDG1xdpiP10pYjsWsVjoT%2BJBztBPpspTLsFXEfQax185ACHIAu61vV6VGUPJNiennPyizxQrspEMlqP3s9cexDU7mJWcs7jyedUlRwOMJoYBnMg3HTvCZ0CN%2FzRuM3vIdGRkhKBCcpnhT%2FnnKz4ek2o1orHG3llVKbya1hzj1XzTkOZZ9RTCXzh5Owg90p%2BACASwquAMFCMtoiZjWkRUbXJbDmEUh1oyC%2FaoRfMyc3YGKNKQgv434mCfAokeHfQtF00i4aA8oAJVHbWIbrNy2J%2BhT%2Bf6WgMvt%2B6%2FTuEIpXygaOYJyWQTDo5L%2FTBjqkAWiX03%2F31KFpAFK6uZc%2Bk7Ng2lN2mkr1XXogIh9OUS6InIAOLnTtUPM8ohgOT9%2B3z%2B6SAPEfqUY7BDBBvnLfPCrf52VhWs%2BuoKNTeT2zqWpNbF0%2FEob1Kw5XopI%2F9gDTyz%2BGlUvl1IH%2BQJqtsNOwsT6Gel%2B%2BaXjx3DDPuFzoqpVDFeGLEcf%2BYSwOy%2BQRnzEHfw9atl%2Bn68LakTK%2Fb0rfNVoR%2F0YR&X-Amz-Signature=163c3af4ffb005f844480f7e4fe10e8258cc8d0ed72708845aa67cf6374921a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSETIS2%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC2UgVejphdsUPim10qUPdSvTHlOv8KJfHcKqDfYHlnkgIhAOjaJMYGN40%2FcLWWZuSSwcvYfZdyzTJ9eVnlNZsop%2FLLKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqqOOOw5ctRb5mlDUq3AMYJvHQkyMxz44OpDI9WckP3tPmHxS6HGpORdPIpVljUETdDt4nuqt6p3q0MA83VAO2HFwFvipDd4sZHwmbahI3oyWAw8dfBK6XfbNeLyXMADfQX04O9ucIZzSdNQkkvSpZP%2Bz75ACtatT8QyZIyEpMNw3O1YurTMcMDiojxZS2ayy79bIx8WiMZ1XacqLDbFGrfkll%2Fprz25w60b4VDbJqfSO7C%2BWTMfWfDyFqKsRD5e%2Fz5udDL8SHmKUyb2FAIwpryopn%2FBQMCFjru%2F%2FunKqbkKAMX5N5O7bkxtL%2FtN3rb8oFrsl44ZZ6jR8z4SY7o7ztJD5VM3LDG1xdpiP10pYjsWsVjoT%2BJBztBPpspTLsFXEfQax185ACHIAu61vV6VGUPJNiennPyizxQrspEMlqP3s9cexDU7mJWcs7jyedUlRwOMJoYBnMg3HTvCZ0CN%2FzRuM3vIdGRkhKBCcpnhT%2FnnKz4ek2o1orHG3llVKbya1hzj1XzTkOZZ9RTCXzh5Owg90p%2BACASwquAMFCMtoiZjWkRUbXJbDmEUh1oyC%2FaoRfMyc3YGKNKQgv434mCfAokeHfQtF00i4aA8oAJVHbWIbrNy2J%2BhT%2Bf6WgMvt%2B6%2FTuEIpXygaOYJyWQTDo5L%2FTBjqkAWiX03%2F31KFpAFK6uZc%2Bk7Ng2lN2mkr1XXogIh9OUS6InIAOLnTtUPM8ohgOT9%2B3z%2B6SAPEfqUY7BDBBvnLfPCrf52VhWs%2BuoKNTeT2zqWpNbF0%2FEob1Kw5XopI%2F9gDTyz%2BGlUvl1IH%2BQJqtsNOwsT6Gel%2B%2BaXjx3DDPuFzoqpVDFeGLEcf%2BYSwOy%2BQRnzEHfw9atl%2Bn68LakTK%2Fb0rfNVoR%2F0YR&X-Amz-Signature=33087578554ac16e527672e574d44beb1cb97ad2d9f39c7f7aaa4732b056b3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
