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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YH6E6I%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIG8l0P1hnGru3SDDqiAG0otuFjwwHOA1kxLSuwug%2FA57AiEA7qhTn8%2By%2FSFwE6HR18wXVRtZv1c06dh6e%2Bw1pCTgPYMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPB4j5niSkjecH5zEyrcAyOunT3E47n2ADm2UCphOG8B4MAD3lLBrT0Kqdoir1P6ErFiTsZ43Zkmd5oHC92GnIWfL2fAQeF%2FePcbcTI9BAiBZmAdx4JNqaO%2FDmPEwgM1Qu%2Bb5JzmTFPKnBVEFDpXaq7Ov1t4achC3e8s%2FaSe2c%2BKIQVJruMw5yh79P3Lu81zJZ6c7obgIcD4EUWHanQQ%2FKmrDCiQDI9dQXpiZpaKpGPRAYaqzDMefq21YWX9NhH1XT%2BsnPYoEy3SwbxIBtj3g0xsfdNOA%2B31P0IxooJSzUZ3qgE4oCSrQHoY13iY52IocuQlkr8JptnboyugCauQurMsNrDN0m7bVadoeVTf%2FzwM8Z60vPBHiQDOfX8wMcrjx6eePqLghGDlrK7DWArPb2aS7465rXYE80chN1wX%2BilgANXZaZ9Kf%2BryX4FVOgvWRjZon4LMCMtYi5mRTgqdwhb%2FFPCFoLLAXTZxspI0oaxjo2N3hwZ9PcMg5enqoaG3F0btgC9i9RgzJyqupPccwSNSHTcaKM0RSIO%2F37ZKJU2TWa5FnpLFpdeSE1BS8MpG8pqmyxloFs8Sg7%2B8MApCXine0PC9KMMlXDYY6IOB7AOfZNlV5svPn45biv6DK18fr16nzKKGoxXZDAu0MNWLgL4GOqUBjGzUxT4CwKZn0tSOeHNyO4Uvft4g1H2S1P6uFCTawJs9eH7Q9oOYJ6wvOWeULu7ksgflqrZvDEWaqRY6%2FgBP6XC5CzzjOgJyLhL2cVkVmaOXrcJYhNb%2FJ6pqk%2BWSAHMZkNfG5KckPpHJVbom2S4MDYWQ9v5HQrCp%2BRZbhPjhK5JqDgdRBdgtpzVyojoguU4rvZxUtBJ5ERip1lBPIlXUngCIqfXY&X-Amz-Signature=ad97621714d822c5789f8e9498f01c9ca3a5e871b0d28a239e218f1f5392c5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YH6E6I%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIG8l0P1hnGru3SDDqiAG0otuFjwwHOA1kxLSuwug%2FA57AiEA7qhTn8%2By%2FSFwE6HR18wXVRtZv1c06dh6e%2Bw1pCTgPYMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPB4j5niSkjecH5zEyrcAyOunT3E47n2ADm2UCphOG8B4MAD3lLBrT0Kqdoir1P6ErFiTsZ43Zkmd5oHC92GnIWfL2fAQeF%2FePcbcTI9BAiBZmAdx4JNqaO%2FDmPEwgM1Qu%2Bb5JzmTFPKnBVEFDpXaq7Ov1t4achC3e8s%2FaSe2c%2BKIQVJruMw5yh79P3Lu81zJZ6c7obgIcD4EUWHanQQ%2FKmrDCiQDI9dQXpiZpaKpGPRAYaqzDMefq21YWX9NhH1XT%2BsnPYoEy3SwbxIBtj3g0xsfdNOA%2B31P0IxooJSzUZ3qgE4oCSrQHoY13iY52IocuQlkr8JptnboyugCauQurMsNrDN0m7bVadoeVTf%2FzwM8Z60vPBHiQDOfX8wMcrjx6eePqLghGDlrK7DWArPb2aS7465rXYE80chN1wX%2BilgANXZaZ9Kf%2BryX4FVOgvWRjZon4LMCMtYi5mRTgqdwhb%2FFPCFoLLAXTZxspI0oaxjo2N3hwZ9PcMg5enqoaG3F0btgC9i9RgzJyqupPccwSNSHTcaKM0RSIO%2F37ZKJU2TWa5FnpLFpdeSE1BS8MpG8pqmyxloFs8Sg7%2B8MApCXine0PC9KMMlXDYY6IOB7AOfZNlV5svPn45biv6DK18fr16nzKKGoxXZDAu0MNWLgL4GOqUBjGzUxT4CwKZn0tSOeHNyO4Uvft4g1H2S1P6uFCTawJs9eH7Q9oOYJ6wvOWeULu7ksgflqrZvDEWaqRY6%2FgBP6XC5CzzjOgJyLhL2cVkVmaOXrcJYhNb%2FJ6pqk%2BWSAHMZkNfG5KckPpHJVbom2S4MDYWQ9v5HQrCp%2BRZbhPjhK5JqDgdRBdgtpzVyojoguU4rvZxUtBJ5ERip1lBPIlXUngCIqfXY&X-Amz-Signature=5c42ff0299b7fd91bd93fe6f411d7f0680898b9b7ad8e332d979ccbc96b836f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
