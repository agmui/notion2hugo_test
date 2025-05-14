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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOWNC63%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF6X6OZDXluMCKkxKxGLoFeWXMuL39LmvTNNU7U4UesqAiEAqXhX7VHy9QQKVoXO4BO2CSN50Yag0Vs4B5XO7FoGnCsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFTCXBPHgXmWcvZTWCrcAyNKWHe6QOqC2K413N%2FqtClrVmDsbfd8%2B5V%2FP2rI7j5HROZzzUOpRwav8cUz95odA6o4P7a%2FkLTu4wSqrE7qPrDJojdaISdZIOEIn4UwCcqUdk2v86McL04pdMFblteDpanrVp%2BeCbYFTMGVIjW580W4PUGlTWBt5PynHQVXBEJCXXTGx82r%2FsaMHV9buUuo%2BfasuispnJFSgLr8c%2FOHMObeuxoD5Dj%2FueDGIfx6E1NqUQBTvGfQQyn6l7xNmF8xQ%2FEgDsr6KTzkZOFf54oPAMsKcut2WFjLeJzdG%2Fd71UZhsr%2FmnDgHwMyn4Oq4M2Lz3fmuc9aAvRkYcC7anZsOxavBfK2w0Fy5AaDq6eyFYeFXEtgwk5ODjmJZX2%2FlQ1ahI%2F7V%2B%2FB8cb6pwX4g94SZyA7eboUJhNoB4lhM3RsEA3oya4ihVR28tlPqd3ZW1Pnb3NUAFySDbXMmIS%2BAgHC9J5YB7WWiBdOoJwV7OmAYlBncZp0ZTyohSaMj8vlCK38zNIY7JiiaOwlsf7cZOl9xxIkxHqssz5%2BNhAEDBuNFJSfpAfpP11PJ6eqxEGWX324b0cJcvRuXfE%2F7XcZ8LnxP%2BtC7Pa5TpG8yZBSCKsfwzm5RW0PtUtWU%2FJACaTwjMM2jk8EGOqUBlvGHZQRB8nZYISCLe8cnkS41RjcAYHSiwoqsa9ObepfcvZGr2XDgiqMRPFCfQSwFGNHGpYQDXm%2F8MNtGL1UfwdJADfUWSAGGJzofO5gbB35AOUTKzn%2B%2B%2BDlwLOul3WSIoAi%2Bi%2BG1cXL%2FgQPo3bjilXv1GIn9bEAiN58mNQG7guzXSCzpq%2F1WfI8Bj37HhnHPfGcR3oyJbS0KM%2Bqb7xYZKFT62YP9&X-Amz-Signature=69ee0e42c2513947318e629cb83e4cba5b6aa668de0e7976057621174a4748eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEOWNC63%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIF6X6OZDXluMCKkxKxGLoFeWXMuL39LmvTNNU7U4UesqAiEAqXhX7VHy9QQKVoXO4BO2CSN50Yag0Vs4B5XO7FoGnCsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFTCXBPHgXmWcvZTWCrcAyNKWHe6QOqC2K413N%2FqtClrVmDsbfd8%2B5V%2FP2rI7j5HROZzzUOpRwav8cUz95odA6o4P7a%2FkLTu4wSqrE7qPrDJojdaISdZIOEIn4UwCcqUdk2v86McL04pdMFblteDpanrVp%2BeCbYFTMGVIjW580W4PUGlTWBt5PynHQVXBEJCXXTGx82r%2FsaMHV9buUuo%2BfasuispnJFSgLr8c%2FOHMObeuxoD5Dj%2FueDGIfx6E1NqUQBTvGfQQyn6l7xNmF8xQ%2FEgDsr6KTzkZOFf54oPAMsKcut2WFjLeJzdG%2Fd71UZhsr%2FmnDgHwMyn4Oq4M2Lz3fmuc9aAvRkYcC7anZsOxavBfK2w0Fy5AaDq6eyFYeFXEtgwk5ODjmJZX2%2FlQ1ahI%2F7V%2B%2FB8cb6pwX4g94SZyA7eboUJhNoB4lhM3RsEA3oya4ihVR28tlPqd3ZW1Pnb3NUAFySDbXMmIS%2BAgHC9J5YB7WWiBdOoJwV7OmAYlBncZp0ZTyohSaMj8vlCK38zNIY7JiiaOwlsf7cZOl9xxIkxHqssz5%2BNhAEDBuNFJSfpAfpP11PJ6eqxEGWX324b0cJcvRuXfE%2F7XcZ8LnxP%2BtC7Pa5TpG8yZBSCKsfwzm5RW0PtUtWU%2FJACaTwjMM2jk8EGOqUBlvGHZQRB8nZYISCLe8cnkS41RjcAYHSiwoqsa9ObepfcvZGr2XDgiqMRPFCfQSwFGNHGpYQDXm%2F8MNtGL1UfwdJADfUWSAGGJzofO5gbB35AOUTKzn%2B%2B%2BDlwLOul3WSIoAi%2Bi%2BG1cXL%2FgQPo3bjilXv1GIn9bEAiN58mNQG7guzXSCzpq%2F1WfI8Bj37HhnHPfGcR3oyJbS0KM%2Bqb7xYZKFT62YP9&X-Amz-Signature=5c938535016f1336a7d22b9f671cddda8bd48e397eb08968680e7385ee40997c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
