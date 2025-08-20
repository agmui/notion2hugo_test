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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664H2YXAG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCYq2ACgaWyWbZgVuNyF22opx3EucDv0bn0gpL8Z6ibAiAw4ncWvgXSVME5jdTSWngHMpbUPfcbH%2Fh8cGOudmd2kSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MbgS1TDnNuavd9lKtwDtMsknVkC%2BMKRA2ULGWF63SHVcMFowXD6nVNgUR25jVuRqd4Kg4cBDd6A%2Buu1P%2BnMg2FjB1hEvaG6C%2BBUswW0LcqJ4w5TIDy3766gDsAQfVKnAxToHcAS5AOOAGep4vc%2FQikRMetSO5yHXOiIgk77mtZoMMizrSqAcLK5Zew%2Bx3fRXtOv4LV6TumRly4zlFjuzJZeOI2QhX0Q%2FTzFczsl5DG%2B8ZTgX8g7%2FzU%2BYcFNh%2B7YM%2BIHwyiyaz95spLlty6ECUxMHUKh7QzwmxilNzVgjIfXeWpeHNDGBjnW7stQDn0Uj3irbJvYAeS%2FZQokfNS%2F6dj5y7z21A35sBuhepf%2Finu%2FQpTtlWrEz%2FAcIN18nHy2r6Xjke5JI0w9KvPOHd27VuMJJxMbF7i8sd%2B2WL3Hae1g4VFUx6AKojnltPcu%2BhoosMhjt%2BtOvdqSn0EsG3bYh%2FAFI%2BF%2BIzvr1fQbQ5Z%2BbITe%2F4NWoFAmyxz%2BL%2Fwb60Lce0cA5wmRyLB5f1vlBY1fCrWvMRTp3ukhM8T72tkicmv9FfbfggF3IaJmhP1XI9tLKXsvEpWleYq8ybYiN5Hgpqtiv%2F6Cg%2B4kogiJJwA23FYP28sClbwrTG4g2rF6RUZDQkIIdXHwtiFihd8wr%2FmVxQY6pgGEt29yg2kk6uFZyXUBl17gpSTZsW8gfIsAsDxKDTYJqrST2Ovqj8ljbQy8SQ25gUbG5PsZoNkFNpH2hU1KYjCqgQ%2Fe9Hx2JE7sMplFqYz1WfQqZaibcYUZhJrfsE77KaEqLebpYfietg0BC%2F7YNifKK2pUEHUDAm5i1psS7fqNpczMy%2FGi2Y25apU5qNvA%2FFs7oCsWTB%2FEz3uHsFyX70FnTwTDV%2FRF&X-Amz-Signature=da58ce02975abb8830af2e2e859a42f098e8e4ca826ee0b7cc70d453351fc5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664H2YXAG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCYq2ACgaWyWbZgVuNyF22opx3EucDv0bn0gpL8Z6ibAiAw4ncWvgXSVME5jdTSWngHMpbUPfcbH%2Fh8cGOudmd2kSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1MbgS1TDnNuavd9lKtwDtMsknVkC%2BMKRA2ULGWF63SHVcMFowXD6nVNgUR25jVuRqd4Kg4cBDd6A%2Buu1P%2BnMg2FjB1hEvaG6C%2BBUswW0LcqJ4w5TIDy3766gDsAQfVKnAxToHcAS5AOOAGep4vc%2FQikRMetSO5yHXOiIgk77mtZoMMizrSqAcLK5Zew%2Bx3fRXtOv4LV6TumRly4zlFjuzJZeOI2QhX0Q%2FTzFczsl5DG%2B8ZTgX8g7%2FzU%2BYcFNh%2B7YM%2BIHwyiyaz95spLlty6ECUxMHUKh7QzwmxilNzVgjIfXeWpeHNDGBjnW7stQDn0Uj3irbJvYAeS%2FZQokfNS%2F6dj5y7z21A35sBuhepf%2Finu%2FQpTtlWrEz%2FAcIN18nHy2r6Xjke5JI0w9KvPOHd27VuMJJxMbF7i8sd%2B2WL3Hae1g4VFUx6AKojnltPcu%2BhoosMhjt%2BtOvdqSn0EsG3bYh%2FAFI%2BF%2BIzvr1fQbQ5Z%2BbITe%2F4NWoFAmyxz%2BL%2Fwb60Lce0cA5wmRyLB5f1vlBY1fCrWvMRTp3ukhM8T72tkicmv9FfbfggF3IaJmhP1XI9tLKXsvEpWleYq8ybYiN5Hgpqtiv%2F6Cg%2B4kogiJJwA23FYP28sClbwrTG4g2rF6RUZDQkIIdXHwtiFihd8wr%2FmVxQY6pgGEt29yg2kk6uFZyXUBl17gpSTZsW8gfIsAsDxKDTYJqrST2Ovqj8ljbQy8SQ25gUbG5PsZoNkFNpH2hU1KYjCqgQ%2Fe9Hx2JE7sMplFqYz1WfQqZaibcYUZhJrfsE77KaEqLebpYfietg0BC%2F7YNifKK2pUEHUDAm5i1psS7fqNpczMy%2FGi2Y25apU5qNvA%2FFs7oCsWTB%2FEz3uHsFyX70FnTwTDV%2FRF&X-Amz-Signature=80eb22043495e7ebf33ecd32f5ccd9eee5cc197b3a464c474457a80634e50e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
