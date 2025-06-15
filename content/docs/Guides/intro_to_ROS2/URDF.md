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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7S2OZM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCcKeKOe92uUmp2MNTwsQeT8RiGOgCARW%2FdGgusxmV4MAIhANLz0X6dtG8ELo19sksk3e9p4jn804B4Kq50z19Ng1QeKv8DCEYQABoMNjM3NDIzMTgzODA1IgwW2Xq7XvPN20ztCRAq3AOMnLp7n3UvD0Dw%2FtTC3S8FpMx2DK7VPwF1sPoqcAP3%2FLqugP8%2Bcvizoi7kRepTJrAyjM3lUkxMfxF%2FW4DAmn6OS1To5EsFfeO5oVARSWThJWOuYboGjFOQJtK90WIW3RccHuOi9gGcbrJzyH2uc1wFLc9BQQqc9MMlGpokruTDlGweoVKkiYoOLoN%2FLlbjg7NCszEuQQUR45wKbU9RVwvZlOizKFl3%2BSczRfzxDKHuoSEXJW7NN%2FGA%2BF0RLLcu%2Fw%2FOKK%2B6FVrRFoHQTZ4WU4piog5tIxtsfPzyX0HG7NtoDTqlZOBuv0lpMDN1lZEejmFF0IkCllH3PbZaeam9JF7g3poBuxyB4uGkxZ6hXUYIDcUgUR%2B%2FemW7%2B1lMfIfq5YJ3ZygCN2itGl6vdx5%2F5UWfSN6mQxR6%2FbiFyM2r2KCqifPqMVzZhW29sZ%2FBWBdb6TW6qXeR3ToCceXR8gY9SyDVEbih56FlqIvpmh65f9YupMVT%2BRSLOqS2gPxO%2FKO4rklkNiHApyvuAU57rtwcdH15dt%2F9QAEZOcE1uP3HiUptdZo%2FCcPf3AfTc%2BYn%2FBA1ZbGLchmQ%2FzwkvhHRLy%2FZ5V3%2BJ8flt1%2BsYefJ%2BUArAa3s7%2BRSsEEpM%2FUXz0Ja8jDEg7vCBjqkAbOKw6uqfmhmIkFBW6iHYs7XXzFa6mV%2FPSibtDmkNWTbZxWerEbrC6Jba%2BP%2BvviD2FcSoVxgz5oRb0mZTC4AezlCUrtPJOaO6Gcl36poDp8%2BzeyJPmfq%2BGHfYvfhET8q5aL7dgT7CqpVZo0fn%2FtDpohywxjco1%2BtQzGVlvJXXb5uN8zAON8G7Sea70l2hSJSr0KzdA5J4FRa79HXI8WrIu3v5GZi&X-Amz-Signature=f4264608b330db5f28f9ebf56da921f09156e82ebd2cc19b0ae8f7875ac2c937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7S2OZM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCcKeKOe92uUmp2MNTwsQeT8RiGOgCARW%2FdGgusxmV4MAIhANLz0X6dtG8ELo19sksk3e9p4jn804B4Kq50z19Ng1QeKv8DCEYQABoMNjM3NDIzMTgzODA1IgwW2Xq7XvPN20ztCRAq3AOMnLp7n3UvD0Dw%2FtTC3S8FpMx2DK7VPwF1sPoqcAP3%2FLqugP8%2Bcvizoi7kRepTJrAyjM3lUkxMfxF%2FW4DAmn6OS1To5EsFfeO5oVARSWThJWOuYboGjFOQJtK90WIW3RccHuOi9gGcbrJzyH2uc1wFLc9BQQqc9MMlGpokruTDlGweoVKkiYoOLoN%2FLlbjg7NCszEuQQUR45wKbU9RVwvZlOizKFl3%2BSczRfzxDKHuoSEXJW7NN%2FGA%2BF0RLLcu%2Fw%2FOKK%2B6FVrRFoHQTZ4WU4piog5tIxtsfPzyX0HG7NtoDTqlZOBuv0lpMDN1lZEejmFF0IkCllH3PbZaeam9JF7g3poBuxyB4uGkxZ6hXUYIDcUgUR%2B%2FemW7%2B1lMfIfq5YJ3ZygCN2itGl6vdx5%2F5UWfSN6mQxR6%2FbiFyM2r2KCqifPqMVzZhW29sZ%2FBWBdb6TW6qXeR3ToCceXR8gY9SyDVEbih56FlqIvpmh65f9YupMVT%2BRSLOqS2gPxO%2FKO4rklkNiHApyvuAU57rtwcdH15dt%2F9QAEZOcE1uP3HiUptdZo%2FCcPf3AfTc%2BYn%2FBA1ZbGLchmQ%2FzwkvhHRLy%2FZ5V3%2BJ8flt1%2BsYefJ%2BUArAa3s7%2BRSsEEpM%2FUXz0Ja8jDEg7vCBjqkAbOKw6uqfmhmIkFBW6iHYs7XXzFa6mV%2FPSibtDmkNWTbZxWerEbrC6Jba%2BP%2BvviD2FcSoVxgz5oRb0mZTC4AezlCUrtPJOaO6Gcl36poDp8%2BzeyJPmfq%2BGHfYvfhET8q5aL7dgT7CqpVZo0fn%2FtDpohywxjco1%2BtQzGVlvJXXb5uN8zAON8G7Sea70l2hSJSr0KzdA5J4FRa79HXI8WrIu3v5GZi&X-Amz-Signature=f2b18cfa8e703124b64cd2138cd92b06dfa9e9ab9a4ad69b42a944b7651bfff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
