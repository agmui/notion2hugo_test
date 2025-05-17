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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP6BM22R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgPAiR9%2FYZfgd%2Fki0IKoSdRCIqudnGF4VLjaR8przngwIgfDhwoaogDuUeV45ViDl59KWLVcYNwSVjINitviHN8M0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMjxg0bteI%2BFB%2BUuKyrcA%2FGLTnrIKRhRvHY4ubejXFfzWI%2FpuNu4e9ZDwedK7bfjRufr2DXQX0ts7BGXqfhKnE6oq0Ct3B7RB6zSDyklz77Cv8MfyImYd3gve%2BGW%2FcXxNZa4Ey7uHD%2FOxuYFyB%2FrUn51XUIk%2FXQwNgkRbjZxqgWbDPlRGqxluUqLcVtbS%2BzOYWm%2FuJNj3LU1XUkMw1L%2BcVCogNXvKo24MDp5%2FIpQzezXH7JTOM%2BAbQBUlePxvrsM4M%2FlNUjyxdT293tPhhmZMlFyCeANfaiI6SvZdDbT0boYCEEP5oxMfU4wnxvEWKxMvGlxgduO%2BIGOFLjq22ge2tjuqmbCiIyxXG%2ByKyL5wHHrRJheOxLX3IJ6Iy7%2B13hC7hCS6IadbAABU5hpstZtjypDWXDrZdG2C4MxMNw2c8s9IT7F2SwpNwe35ITvtF%2FHeSGPJ4%2BC73bHNC%2BD2sW47HtocdNfpxvzBYhvLxYCVAsB2khY%2BjF%2F%2BNZF5ZPMx9I0QIhvpNo8r1%2BPl44Kt5LQAbvjmHeWX6bImhisRAJa2oY2FvGVXkz0OP5OgUAMkxVdLJkK%2F2lMu8xMKRWWX%2Fg8quXG2S6DbEFoOYDQkYY8c%2B5XGUurb1inYUeHwg9dxDhxpV5GAgR8T31WJKaWMMiQpMEGOqUBvPaHq8FaAX%2FzF%2F5xzZUS7EVoOKq3xTJua7AHRRGmHbMHhhXEheAFo4n3p%2Fxnx9%2Bgqco0lKSfjmZMDvxSvOKFgycFYxD9T8q1LNmjYLeSkEBHfi8Vvq0Xvu7mNczvZIMiO6Lk83FOB4wnLcNEZupx7eS9eyDPv3Z2K3DsZ7Q6nVGnHz75wfhVwhogk88olZUFaDQSqlu1CskydSn%2FKFeHW8TFtbJk&X-Amz-Signature=aa6204b2b304b0053f742a8c726a5eead9ecb4a6cc9c91b4aeeeabe5173f53d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP6BM22R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgPAiR9%2FYZfgd%2Fki0IKoSdRCIqudnGF4VLjaR8przngwIgfDhwoaogDuUeV45ViDl59KWLVcYNwSVjINitviHN8M0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMjxg0bteI%2BFB%2BUuKyrcA%2FGLTnrIKRhRvHY4ubejXFfzWI%2FpuNu4e9ZDwedK7bfjRufr2DXQX0ts7BGXqfhKnE6oq0Ct3B7RB6zSDyklz77Cv8MfyImYd3gve%2BGW%2FcXxNZa4Ey7uHD%2FOxuYFyB%2FrUn51XUIk%2FXQwNgkRbjZxqgWbDPlRGqxluUqLcVtbS%2BzOYWm%2FuJNj3LU1XUkMw1L%2BcVCogNXvKo24MDp5%2FIpQzezXH7JTOM%2BAbQBUlePxvrsM4M%2FlNUjyxdT293tPhhmZMlFyCeANfaiI6SvZdDbT0boYCEEP5oxMfU4wnxvEWKxMvGlxgduO%2BIGOFLjq22ge2tjuqmbCiIyxXG%2ByKyL5wHHrRJheOxLX3IJ6Iy7%2B13hC7hCS6IadbAABU5hpstZtjypDWXDrZdG2C4MxMNw2c8s9IT7F2SwpNwe35ITvtF%2FHeSGPJ4%2BC73bHNC%2BD2sW47HtocdNfpxvzBYhvLxYCVAsB2khY%2BjF%2F%2BNZF5ZPMx9I0QIhvpNo8r1%2BPl44Kt5LQAbvjmHeWX6bImhisRAJa2oY2FvGVXkz0OP5OgUAMkxVdLJkK%2F2lMu8xMKRWWX%2Fg8quXG2S6DbEFoOYDQkYY8c%2B5XGUurb1inYUeHwg9dxDhxpV5GAgR8T31WJKaWMMiQpMEGOqUBvPaHq8FaAX%2FzF%2F5xzZUS7EVoOKq3xTJua7AHRRGmHbMHhhXEheAFo4n3p%2Fxnx9%2Bgqco0lKSfjmZMDvxSvOKFgycFYxD9T8q1LNmjYLeSkEBHfi8Vvq0Xvu7mNczvZIMiO6Lk83FOB4wnLcNEZupx7eS9eyDPv3Z2K3DsZ7Q6nVGnHz75wfhVwhogk88olZUFaDQSqlu1CskydSn%2FKFeHW8TFtbJk&X-Amz-Signature=2e148623191ca16b884c52ca2d14d8a811c94ddf6df40d914de9569e3afab70c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
