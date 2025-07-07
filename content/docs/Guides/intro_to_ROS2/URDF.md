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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOQI55RE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDhWprcvbv58W%2FiQNyD7hm%2FCWuMldrA0KlUtAVskSEFGQIgAMmbeRN9HOz2rBC88XGbEPWoN8sE4%2FOVJySJH4lb5FQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCq4vWNAKLHGbDT27SrcA4VBc3cY3bELSohsqDQxOxxxirEv244C1HV4N4%2BdTOZN9gvOcuaCQ5QNm08CNS2EHl%2BakGPeYFHjxEakhZPda%2Bh3Nkk93UFsN7mHVLRGNKYOyGdcC8YMtSFDZ8bdMBQCra0A%2Fel7SftYjK8b%2BTbJ%2FI%2FJgYBJCWYEigFJpnVVk2m%2B%2BlFQfcaL3q33DeOeqsbosINEhQh8TxcEc%2B8YHWQbbhGo4S3KpkLJlt0X6PyBgED58Aajzxa%2F%2BzVj5BgwYu08YmjICXHi2sYThggoqVirzVpyVuXawjiXUHmQ3jAOcFQCYdOI%2BLq4CVFbrtI3PgB%2BhpG5MpbwfOqJ8Dm%2BOON7amJMtj%2FVcK4tf71lRQESY8dcZDRyplhzZOfDtXIlVet387kJglrydEM%2BLmezpIDHn2aOzCoFwBOJ34EehBjfTrs%2B4mAKPq5y4JaV34IeLyizNn3%2B2Uni8oHxsnpa3ua3Ohc8xfabrmzOtwtAEyHjFNiZfmwSqP87gnAmNDE%2BaiHpaKkuW7FcgwFzcnjJhNq1uiQhDnZU7%2BQhO2LdJ4UQ2pmsA6P%2FIq9pZqONKbUDD%2BJ0FZifvXDBuARHGw0gfGS6bKYL%2BLf8oHMi4UTf4WGqTpAIQ6ITD42vvkMy7SLeMJKMr8MGOqUBmbX0SmAMMHRCpOWvmAQ3rt34Px65kXRViGTLgn94uhO1dtRaWMjhl2L1HXS7SUhZDhz%2Bq4UMKeDLc84VibIn21opA8Bkf3HJofy2MZKPXT1jGbQP6pXLUZ4qeR1ywHZL4MVTxETCcZoN%2BiYS199lqN1N1Ez%2Fo09fteiHDFSPA8dThiv4e6xgOXBpJY85Qh0nm0yD5qRw8VjFCXH5%2FsM5Si%2Fj%2B7nP&X-Amz-Signature=fcc6cddf5d84a637f3dcef501cb61f96da72118f47fde010bf4e8bd634b7acf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOQI55RE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDhWprcvbv58W%2FiQNyD7hm%2FCWuMldrA0KlUtAVskSEFGQIgAMmbeRN9HOz2rBC88XGbEPWoN8sE4%2FOVJySJH4lb5FQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCq4vWNAKLHGbDT27SrcA4VBc3cY3bELSohsqDQxOxxxirEv244C1HV4N4%2BdTOZN9gvOcuaCQ5QNm08CNS2EHl%2BakGPeYFHjxEakhZPda%2Bh3Nkk93UFsN7mHVLRGNKYOyGdcC8YMtSFDZ8bdMBQCra0A%2Fel7SftYjK8b%2BTbJ%2FI%2FJgYBJCWYEigFJpnVVk2m%2B%2BlFQfcaL3q33DeOeqsbosINEhQh8TxcEc%2B8YHWQbbhGo4S3KpkLJlt0X6PyBgED58Aajzxa%2F%2BzVj5BgwYu08YmjICXHi2sYThggoqVirzVpyVuXawjiXUHmQ3jAOcFQCYdOI%2BLq4CVFbrtI3PgB%2BhpG5MpbwfOqJ8Dm%2BOON7amJMtj%2FVcK4tf71lRQESY8dcZDRyplhzZOfDtXIlVet387kJglrydEM%2BLmezpIDHn2aOzCoFwBOJ34EehBjfTrs%2B4mAKPq5y4JaV34IeLyizNn3%2B2Uni8oHxsnpa3ua3Ohc8xfabrmzOtwtAEyHjFNiZfmwSqP87gnAmNDE%2BaiHpaKkuW7FcgwFzcnjJhNq1uiQhDnZU7%2BQhO2LdJ4UQ2pmsA6P%2FIq9pZqONKbUDD%2BJ0FZifvXDBuARHGw0gfGS6bKYL%2BLf8oHMi4UTf4WGqTpAIQ6ITD42vvkMy7SLeMJKMr8MGOqUBmbX0SmAMMHRCpOWvmAQ3rt34Px65kXRViGTLgn94uhO1dtRaWMjhl2L1HXS7SUhZDhz%2Bq4UMKeDLc84VibIn21opA8Bkf3HJofy2MZKPXT1jGbQP6pXLUZ4qeR1ywHZL4MVTxETCcZoN%2BiYS199lqN1N1Ez%2Fo09fteiHDFSPA8dThiv4e6xgOXBpJY85Qh0nm0yD5qRw8VjFCXH5%2FsM5Si%2Fj%2B7nP&X-Amz-Signature=5d988b707e3ce6cc65494bd65cc883e760a67c795175e8dc661bddb4af6dac77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
