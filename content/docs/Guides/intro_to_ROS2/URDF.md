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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3M677%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGYw5BML%2BSEPYcZLQHMPOQDyKfvkKq1x5Zl2M6ZCP1sQIgRJz%2BqFJ3kq0ETuqFG2U95dXxP9gb2meGe3fzcwGb0coq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKLdUOWEItWwwNK8qCrcA5FkrEZUckws65%2Ff1cQekzWY9OcsO5WYjp5X0KJ%2FPsbOrqyqkjlhkJpV19nRjIAczNE0bUIF3pJ8Ey2Wl40sx72UOiizb%2BqA7yffK5qTC2r2ioYUaRw%2BOaNogI6hHWXWRM8rJlsN9OcfIATwMaZpOmi%2BCjMvMShh0vGqiPqV02kLDOHwlz2BgXEL94OxNf4JADVybVFI4zC4%2B2r%2BqEV7VbhaH1BksQrZXgxmE%2FUA35ejE7TJv4YlTIDVF6Uugal6ma4NfZrR01k49Vwl%2F2edhqmk09CgBiK5inpGna3H5eApE%2BQZM5DeeGaAoO50mxv%2BCuKaPeCuIG9SGGCEmrQ1ROIDTmLGFbqLBhizEioHjyp5onkYpoRkkw3ZSoSbo0Vqt3kWOaiwonfg8AgzN%2FoCULOnV9rv2zvZlUExEc2XFc58kEWkR6K4nNvufz2JBwJoiTnQpYjh2%2BFRepCBfrX%2FGXxwGxoGH1lw2Ed53e%2B4N%2FzA19Ahzr15gttZZiOPaOugGt%2FLXRbkMyAvImHAeECFg6zOyGJyQAtifHvwKG%2BKE7GcQlu4mjIfR8U7RrruyFJ9d29VCq7bAzuJ9QGgx5n%2Fm96gpiy%2FpUXl9tGrn1c3JPYMk%2B75JTARgbuB%2B3RPMOqEusIGOqUBTB4V4mF2aHD2uzX9MT9eyWcNdT97BHpxqC61nQadN6vuGoJqxVbtPABPFmfVDX%2FwKSY%2Bq3FVJmUs1u1egcAas936YNnUagjB4v6XHYaWI10y4k9I62y%2BkKA3BD7pFcNzOP%2FPMCNQYoxcam5i0eLBcBurJPwR47lRiD1u59h%2B9DPwxVxY%2Bc%2FUGzA05qWnHjTYar6CaYgwxSCwWp2T8V3G%2BjrSIBWX&X-Amz-Signature=5a200c02b70950c0c4571eb154561f20bd1755ab185366042510bbb645a8ce03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3M677%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDGYw5BML%2BSEPYcZLQHMPOQDyKfvkKq1x5Zl2M6ZCP1sQIgRJz%2BqFJ3kq0ETuqFG2U95dXxP9gb2meGe3fzcwGb0coq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKLdUOWEItWwwNK8qCrcA5FkrEZUckws65%2Ff1cQekzWY9OcsO5WYjp5X0KJ%2FPsbOrqyqkjlhkJpV19nRjIAczNE0bUIF3pJ8Ey2Wl40sx72UOiizb%2BqA7yffK5qTC2r2ioYUaRw%2BOaNogI6hHWXWRM8rJlsN9OcfIATwMaZpOmi%2BCjMvMShh0vGqiPqV02kLDOHwlz2BgXEL94OxNf4JADVybVFI4zC4%2B2r%2BqEV7VbhaH1BksQrZXgxmE%2FUA35ejE7TJv4YlTIDVF6Uugal6ma4NfZrR01k49Vwl%2F2edhqmk09CgBiK5inpGna3H5eApE%2BQZM5DeeGaAoO50mxv%2BCuKaPeCuIG9SGGCEmrQ1ROIDTmLGFbqLBhizEioHjyp5onkYpoRkkw3ZSoSbo0Vqt3kWOaiwonfg8AgzN%2FoCULOnV9rv2zvZlUExEc2XFc58kEWkR6K4nNvufz2JBwJoiTnQpYjh2%2BFRepCBfrX%2FGXxwGxoGH1lw2Ed53e%2B4N%2FzA19Ahzr15gttZZiOPaOugGt%2FLXRbkMyAvImHAeECFg6zOyGJyQAtifHvwKG%2BKE7GcQlu4mjIfR8U7RrruyFJ9d29VCq7bAzuJ9QGgx5n%2Fm96gpiy%2FpUXl9tGrn1c3JPYMk%2B75JTARgbuB%2B3RPMOqEusIGOqUBTB4V4mF2aHD2uzX9MT9eyWcNdT97BHpxqC61nQadN6vuGoJqxVbtPABPFmfVDX%2FwKSY%2Bq3FVJmUs1u1egcAas936YNnUagjB4v6XHYaWI10y4k9I62y%2BkKA3BD7pFcNzOP%2FPMCNQYoxcam5i0eLBcBurJPwR47lRiD1u59h%2B9DPwxVxY%2Bc%2FUGzA05qWnHjTYar6CaYgwxSCwWp2T8V3G%2BjrSIBWX&X-Amz-Signature=8a0004c2e376ac773bd25804b34c5a4ae221a1bf574e45b69961f698ea7a58b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
