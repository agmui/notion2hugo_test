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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNXYPC3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUiweRzMrP8SrAgDVp84oVIG9OyN2KnCuTa9bS300YsgIgNqmZilZLBJza6rGf4jTrDgxSR172rhmiQyQAh4EL06Yq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAotm5EmF5Zgg%2Bc%2B1yrcA20gpyjnXnzePAmfgJY2211FQRXVi5k3V2ErIdXbVKxOz8R5VTwBSkj%2BTaUYtIvY1vvigCNIs32o9%2B03D%2BwkzwmBvOhcEX2E9ZcLY5F2RM1RKfm4fzXAvUNh5Fs3m%2FPj1FkOcNP1Y980CnAXNGpYYbeE09OnJUm6ShNIDJpfK0IpUASaJ%2F2OLH9cg54p0Iwd6Tbyudwrtr2jyrqYyWyRPG0Kke%2BZ2ivb%2BIbo34IaXX%2BcRplWKWJks1bHHy4R4NOBuNm0lRIjzYrY%2FFTAjV2PtA9jt7AD2clUbYQYVIzQG9ipN6KG62aJdcTqWPAxud4T9IcGsypEnapGanvr9VDi8QbOEINNApbc6EpCeECv4MQj251T%2FStDRZVCMC4r7CnJUOIE0A0U%2F2b9qZwhx8GvGeGtRKBb6bIZhbnptlS%2FEwDIBCP46DuHv9HMr370x5rUV%2Fhs4O9YyCPefAQoVZ6XN1Q%2BFNAZNwkzm8gR7NnvKjBFCprR41qFmv8jzcVe9P63LlyQjiaw27nTDceFEXn0l1q7hNJxwpwGWxfSxSKiezv4G05GLMCLs0%2BS3Pn6HFywFfv%2FXfTrD0kmWYKQ2iXCNIlVe3%2FG3CyM9e%2FfzGsip9VK79inTx32O%2FiG2ONsMIf43MEGOqUBqn0%2FDOObkK6sK6jm0LeELwl6kk9HFSt%2FtgeA8F8rd9CoKhjezfi%2FTEeDRD4645Ai0i6p6M13jZ1xBr55PrnRi7sp96SzbUMl6YMTDhNAwuggvMMAbow8y0qwacy9ojqG%2Bq69g7t0dYbdPf4Eux1lwt0RCvSY9fSnqI6uK0Cdy3PESfcZtftQ3TvRzTomgesoZ7Fbq1qvvtoeakToaxu0edQrJsO2&X-Amz-Signature=d97a06feed00bcd51d4b75507e02dc1c3d8b33ab0953eb6f92dd2d2a368f01e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNXYPC3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUiweRzMrP8SrAgDVp84oVIG9OyN2KnCuTa9bS300YsgIgNqmZilZLBJza6rGf4jTrDgxSR172rhmiQyQAh4EL06Yq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAotm5EmF5Zgg%2Bc%2B1yrcA20gpyjnXnzePAmfgJY2211FQRXVi5k3V2ErIdXbVKxOz8R5VTwBSkj%2BTaUYtIvY1vvigCNIs32o9%2B03D%2BwkzwmBvOhcEX2E9ZcLY5F2RM1RKfm4fzXAvUNh5Fs3m%2FPj1FkOcNP1Y980CnAXNGpYYbeE09OnJUm6ShNIDJpfK0IpUASaJ%2F2OLH9cg54p0Iwd6Tbyudwrtr2jyrqYyWyRPG0Kke%2BZ2ivb%2BIbo34IaXX%2BcRplWKWJks1bHHy4R4NOBuNm0lRIjzYrY%2FFTAjV2PtA9jt7AD2clUbYQYVIzQG9ipN6KG62aJdcTqWPAxud4T9IcGsypEnapGanvr9VDi8QbOEINNApbc6EpCeECv4MQj251T%2FStDRZVCMC4r7CnJUOIE0A0U%2F2b9qZwhx8GvGeGtRKBb6bIZhbnptlS%2FEwDIBCP46DuHv9HMr370x5rUV%2Fhs4O9YyCPefAQoVZ6XN1Q%2BFNAZNwkzm8gR7NnvKjBFCprR41qFmv8jzcVe9P63LlyQjiaw27nTDceFEXn0l1q7hNJxwpwGWxfSxSKiezv4G05GLMCLs0%2BS3Pn6HFywFfv%2FXfTrD0kmWYKQ2iXCNIlVe3%2FG3CyM9e%2FfzGsip9VK79inTx32O%2FiG2ONsMIf43MEGOqUBqn0%2FDOObkK6sK6jm0LeELwl6kk9HFSt%2FtgeA8F8rd9CoKhjezfi%2FTEeDRD4645Ai0i6p6M13jZ1xBr55PrnRi7sp96SzbUMl6YMTDhNAwuggvMMAbow8y0qwacy9ojqG%2Bq69g7t0dYbdPf4Eux1lwt0RCvSY9fSnqI6uK0Cdy3PESfcZtftQ3TvRzTomgesoZ7Fbq1qvvtoeakToaxu0edQrJsO2&X-Amz-Signature=65cfe5371090e8bbfccd5714b2d15bceafcf85618802f7d157268d21b165df25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
