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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIF2XTC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwWkUcFbJws3vGiSMVJTL4AiCrVz3JUPJSBGX%2FQ45EdAiEAiBKeVA9n8XsTq8izRXYBCL9egxaXqvd4BAcN9jBSJvIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFIvI7QHM%2BCFfThCzircA%2B7W0B2TeVmv1DBpKaZJWxUe0TFWhcWZvpJ4e2KPMOTKZDVsQ%2FBs8PYOL9UHqof0v9jdrG7fuJOnpW25NpJxbE3Rt6WNf7BZ2sUz3DQBZ6H%2BnHjBzRt%2F3idxyabCLE3OzYa6Ny0FapVKeHckjORWtgVafSjuysyE1dn3LifRb6aDI1i2Av531pzzu%2BUv14PEZ7ekXdJEIM%2B7EVlky3IJ74etlbyuDrCVBcQCjRrTKehXnKaPuPPfWoxso5OcTAsWwznxJrfhFyYOoetiFiosCEKBU86dChvLs1McUbppb9xr94oWJyqgXQAwUeofnGcwz7EEfXWiPTZkr4bWALpx%2BCPVccYz3gEiEmdNXGkqD5Xm%2BoTIXPk0iDeU0czGmWmnCNn%2FmjjNmDfg2ruW%2Fses9J6hDF2LtPnsXfcq6qlD%2Fxru8W1isgcTBNLHCb0adbekh3u7rRmTO0djdrP5NGfytu2ksmjnIO4Vq010A7oRb2GfZkFoy26bBVvQPHL7JNhx%2FLFFWDgFiBByL9TD4YH9OoVuQvPs%2BwWBpKuGX0GU6pO8fNzHrJ%2B%2F1antpJ9XTgLztLFBv6Wso%2FfIPYOG54M8iwKeBwQmMNd5XepBiYvNkrYCNAygLeFw%2FG9Cr4bCMPqtp74GOqUBAKm5vizaRzWR0jj2p363qiPGzvIVr7S30r7AgeUB6Y9Lnj7ylwCqcIRGst9gKESyierPeGxG%2BBcAmf5H9VqvhD2QSAMmoDNKKorAZh8FSDI3pouwN7U5Zs1noIAvLgyvR1BgVyJys%2Fwpkh59nGYARs3bHzkJtAPKgInehNp4UKycHHwjdvRPSS7DExX0xubmXyxJXl8ksjnjq%2FTcubPvxIUyY0%2Fx&X-Amz-Signature=366026a5de259d74e5d22f4a8f278a73c4353ac4da2980f0e1284d93ff738743&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIF2XTC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwWkUcFbJws3vGiSMVJTL4AiCrVz3JUPJSBGX%2FQ45EdAiEAiBKeVA9n8XsTq8izRXYBCL9egxaXqvd4BAcN9jBSJvIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFIvI7QHM%2BCFfThCzircA%2B7W0B2TeVmv1DBpKaZJWxUe0TFWhcWZvpJ4e2KPMOTKZDVsQ%2FBs8PYOL9UHqof0v9jdrG7fuJOnpW25NpJxbE3Rt6WNf7BZ2sUz3DQBZ6H%2BnHjBzRt%2F3idxyabCLE3OzYa6Ny0FapVKeHckjORWtgVafSjuysyE1dn3LifRb6aDI1i2Av531pzzu%2BUv14PEZ7ekXdJEIM%2B7EVlky3IJ74etlbyuDrCVBcQCjRrTKehXnKaPuPPfWoxso5OcTAsWwznxJrfhFyYOoetiFiosCEKBU86dChvLs1McUbppb9xr94oWJyqgXQAwUeofnGcwz7EEfXWiPTZkr4bWALpx%2BCPVccYz3gEiEmdNXGkqD5Xm%2BoTIXPk0iDeU0czGmWmnCNn%2FmjjNmDfg2ruW%2Fses9J6hDF2LtPnsXfcq6qlD%2Fxru8W1isgcTBNLHCb0adbekh3u7rRmTO0djdrP5NGfytu2ksmjnIO4Vq010A7oRb2GfZkFoy26bBVvQPHL7JNhx%2FLFFWDgFiBByL9TD4YH9OoVuQvPs%2BwWBpKuGX0GU6pO8fNzHrJ%2B%2F1antpJ9XTgLztLFBv6Wso%2FfIPYOG54M8iwKeBwQmMNd5XepBiYvNkrYCNAygLeFw%2FG9Cr4bCMPqtp74GOqUBAKm5vizaRzWR0jj2p363qiPGzvIVr7S30r7AgeUB6Y9Lnj7ylwCqcIRGst9gKESyierPeGxG%2BBcAmf5H9VqvhD2QSAMmoDNKKorAZh8FSDI3pouwN7U5Zs1noIAvLgyvR1BgVyJys%2Fwpkh59nGYARs3bHzkJtAPKgInehNp4UKycHHwjdvRPSS7DExX0xubmXyxJXl8ksjnjq%2FTcubPvxIUyY0%2Fx&X-Amz-Signature=a13af64bb066635f045f109f6fcd9d75b6535d62eb211bdfb352d1b26807bcbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
