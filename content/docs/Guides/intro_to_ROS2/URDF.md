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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CPFQ4J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAsRmSFXf1spl7YSI%2B5d8dE%2FA0cHZhBZ%2B3Kf8AUlnp%2FhAiEAka6kZhluNHUzzgY0v%2BSl6yux5u6cjI5D5Ot3k0wp36Iq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJhTO3pIshKa09mOoircA%2FQm%2FGzHoszz7u3NoPGUV5pL6ktDxr4gviyPvG9SrNN6NQQTsFGy5RQM411V4dYw0vRIJbnIXMhcmAD8mT46cfBinmVI%2BgJ5CA8%2FpI%2FIRPOQRSp0%2BmacxajqOUb8q86P7BU6B4MLrL6LXexKkO5xtiYBb%2BLutyX1eQLvGh74SUewqiOZyvFasrwyJmb5TQNZ4GWRPu%2B%2BglBmyMhfCXcNDSYAxLgtLMmYAu4t4rDyc4CwG1B3Vus8SIHLFX0aruxW4sEqYCgF4J1hzycEolUWUHjwoLP%2F0HD3v2xl3GIcLhstlrLb1yJ62IWpGJJLtCZjHuOVW0SPf%2FK6vgNtrQTtyaya%2FpSuBUefccyDQ8b7K55dFVAgDy2yLAMk1smtgKBpZoSBbu1zjTB7chbRbRv5Tv3TKeyKAxd3AxYp5VItpl%2FNXvd%2FkNdyJXtbWXTzL%2B%2BLXDLujU8L%2Bav74WcoH9sB%2Fsu4RtbNWwdjmbDpCGNOjCquYogne1kYXpcuCdzoTo0mxYEXQJ1vDcFs3L9YSC6o8tCF0vNCuGd2UcqR5tkObAVHiFS91EYpWlA7dkWDeFpCWcfrbta5xcp41QSCUWxA81nfJbzHcK2zD83STP6PO2ouVdmf8rpFwCjIXAThMLTF%2BsEGOqUBfxLjJIbU71qmNJJrWnsI9HbS7mwjly1k%2Bb3DPsrfxcsOmcULcoCmR07b06OumCRneiQY8OiPzeOwTyHMm7%2BhSReMzO05CkeduGDibC6f6VBykzjiap2Ys4xoNufNH2LeDJiYX8MyF7PSRhBe6IXwZ1huKT7hVgpPZPM4gp3P0GGaEVJhRQvIThFB3%2BwV52uG6oHJ0fIFnW8BqfMVwRjUKJdNqwVp&X-Amz-Signature=c0d8057092c28659e1023ebb7299c2b96b27373fbac3dc02d6a8493276c0b9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CPFQ4J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAsRmSFXf1spl7YSI%2B5d8dE%2FA0cHZhBZ%2B3Kf8AUlnp%2FhAiEAka6kZhluNHUzzgY0v%2BSl6yux5u6cjI5D5Ot3k0wp36Iq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDJhTO3pIshKa09mOoircA%2FQm%2FGzHoszz7u3NoPGUV5pL6ktDxr4gviyPvG9SrNN6NQQTsFGy5RQM411V4dYw0vRIJbnIXMhcmAD8mT46cfBinmVI%2BgJ5CA8%2FpI%2FIRPOQRSp0%2BmacxajqOUb8q86P7BU6B4MLrL6LXexKkO5xtiYBb%2BLutyX1eQLvGh74SUewqiOZyvFasrwyJmb5TQNZ4GWRPu%2B%2BglBmyMhfCXcNDSYAxLgtLMmYAu4t4rDyc4CwG1B3Vus8SIHLFX0aruxW4sEqYCgF4J1hzycEolUWUHjwoLP%2F0HD3v2xl3GIcLhstlrLb1yJ62IWpGJJLtCZjHuOVW0SPf%2FK6vgNtrQTtyaya%2FpSuBUefccyDQ8b7K55dFVAgDy2yLAMk1smtgKBpZoSBbu1zjTB7chbRbRv5Tv3TKeyKAxd3AxYp5VItpl%2FNXvd%2FkNdyJXtbWXTzL%2B%2BLXDLujU8L%2Bav74WcoH9sB%2Fsu4RtbNWwdjmbDpCGNOjCquYogne1kYXpcuCdzoTo0mxYEXQJ1vDcFs3L9YSC6o8tCF0vNCuGd2UcqR5tkObAVHiFS91EYpWlA7dkWDeFpCWcfrbta5xcp41QSCUWxA81nfJbzHcK2zD83STP6PO2ouVdmf8rpFwCjIXAThMLTF%2BsEGOqUBfxLjJIbU71qmNJJrWnsI9HbS7mwjly1k%2Bb3DPsrfxcsOmcULcoCmR07b06OumCRneiQY8OiPzeOwTyHMm7%2BhSReMzO05CkeduGDibC6f6VBykzjiap2Ys4xoNufNH2LeDJiYX8MyF7PSRhBe6IXwZ1huKT7hVgpPZPM4gp3P0GGaEVJhRQvIThFB3%2BwV52uG6oHJ0fIFnW8BqfMVwRjUKJdNqwVp&X-Amz-Signature=bf71ea1bdc99e9d984bd9877ff03b4f7ecdbd212a1b24a57332db5ad5563bc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
