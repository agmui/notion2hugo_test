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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHQX2ZMB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW7LWwFbqneFzbGPyf5E2%2B1AYhBW6jrMq%2FXBKnhY2lrAiEA2GzWWk8zjqQmRmil3bbe5Ph3TJQu0bfuP1EL%2B14Oyn4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLnwBFq3hDCmgQLKyrcA5xuOmCZqvZiZDHWeJZaFR2rx8l6ZGchO1BsX7jYY9SwqiFuoPKawM9%2BX7GBnN8IyTsFIopBwIjiJzN6iMlpjcDdlk5dviolCffWbdYYCEsaTVx6tWokOGqxsbP7e3mzsFcya4Ik91we6L22lw5zW8uUdAfJuxYTKDRcWX2SCTUddH4tVSO3voZevaz1FPoYwzDqtiWBxeiZyDbchDYlJ9RsS5Il%2BFMyTJD9zs%2Bpxgy2YMKnKnL1nBADMC4jsTqmR70cMMRnXDPg7z4UTPYAHVlYPvP%2B5rVumj4GOK4BH6QcwdOrTQRsgK2eaD14LQX4CoHpYO1C0Yiuj0InQ%2BQekdOK7uWsn00Kqq3%2BsZtHpufF%2BS7Dwtc0PpotIvyKcp5GyU4IwrhS2971yFJpmTpAl8%2FE%2Bgq%2BbBgKiMhHXnV5EnqPbiHWH7axKZryMiXil1KkgRId5Ab3zTEnvhmNfYE%2BeXTQH5W%2BswcbResQCUGXYTh%2Bequ%2B5RHeWcR%2BwOLHUe8M9l52%2Fgydzqe4dmQH4tb%2FDYzRmn7Oub72BtNvbwfpfE67e4rhLEKmAlPz35BS%2BVQcJSPJTvfrF0e0oOCKVVGkX2c1Ex0b%2BGhgYxGHGyXz3gdPxhhPvfizlWIoPJclMPSX7cEGOqUBQXGdTAga5aiJM4SEkcIOkljpW4d88Zm7y5Lux%2F0UY%2FohHL7qgCjlsZ9CpZ%2BMwLLdSarRN2xOnzyyqLuTPlctA%2F0DOE09LWef3tlDmNBXKqp4fLMJxzAfZJVByhqCiYQRBZ%2F4mDPYvuw2PSbyuI%2Bwv%2FMedV2003kwskGuUFDd4sRa2DjQOFJLwFuG8e2DV2Fynt2E2csJzXKdUXPQgO57DBgwpfLT&X-Amz-Signature=43989c615e773e659a3384425fc4e9fd26fc092e006c656f4a13c99ac346ecc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHQX2ZMB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW7LWwFbqneFzbGPyf5E2%2B1AYhBW6jrMq%2FXBKnhY2lrAiEA2GzWWk8zjqQmRmil3bbe5Ph3TJQu0bfuP1EL%2B14Oyn4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLnwBFq3hDCmgQLKyrcA5xuOmCZqvZiZDHWeJZaFR2rx8l6ZGchO1BsX7jYY9SwqiFuoPKawM9%2BX7GBnN8IyTsFIopBwIjiJzN6iMlpjcDdlk5dviolCffWbdYYCEsaTVx6tWokOGqxsbP7e3mzsFcya4Ik91we6L22lw5zW8uUdAfJuxYTKDRcWX2SCTUddH4tVSO3voZevaz1FPoYwzDqtiWBxeiZyDbchDYlJ9RsS5Il%2BFMyTJD9zs%2Bpxgy2YMKnKnL1nBADMC4jsTqmR70cMMRnXDPg7z4UTPYAHVlYPvP%2B5rVumj4GOK4BH6QcwdOrTQRsgK2eaD14LQX4CoHpYO1C0Yiuj0InQ%2BQekdOK7uWsn00Kqq3%2BsZtHpufF%2BS7Dwtc0PpotIvyKcp5GyU4IwrhS2971yFJpmTpAl8%2FE%2Bgq%2BbBgKiMhHXnV5EnqPbiHWH7axKZryMiXil1KkgRId5Ab3zTEnvhmNfYE%2BeXTQH5W%2BswcbResQCUGXYTh%2Bequ%2B5RHeWcR%2BwOLHUe8M9l52%2Fgydzqe4dmQH4tb%2FDYzRmn7Oub72BtNvbwfpfE67e4rhLEKmAlPz35BS%2BVQcJSPJTvfrF0e0oOCKVVGkX2c1Ex0b%2BGhgYxGHGyXz3gdPxhhPvfizlWIoPJclMPSX7cEGOqUBQXGdTAga5aiJM4SEkcIOkljpW4d88Zm7y5Lux%2F0UY%2FohHL7qgCjlsZ9CpZ%2BMwLLdSarRN2xOnzyyqLuTPlctA%2F0DOE09LWef3tlDmNBXKqp4fLMJxzAfZJVByhqCiYQRBZ%2F4mDPYvuw2PSbyuI%2Bwv%2FMedV2003kwskGuUFDd4sRa2DjQOFJLwFuG8e2DV2Fynt2E2csJzXKdUXPQgO57DBgwpfLT&X-Amz-Signature=c089f4c2d0e1002da66cc28e26be859c98b4a8856a2ed8521427baf8301bde6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
