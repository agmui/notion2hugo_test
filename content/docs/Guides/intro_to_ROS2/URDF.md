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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTEDZEW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBduZu2dDZZgrez2YWSY2Is%2FWYY2dyjK3qOItcroXxiWAiAVjdmvZL8Yvh8ypYPNbI0rRxoRaSCnpLBCZog%2Ff4%2Fqtir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM0Rccrz2WantrdiRTKtwDAiEUCQFCAlpcsxiAkjUvCDaSHmnEvGXPYxOpv7lvn6IEaEB6ReYPiB83BdbXjcsdZHKPH7QNKM8lrcCLcvIxO2Su7JMndDhUSOXzf%2BrL2C42V7itL4SxD4brrF1Lro50oZOIVA5e%2Blvd9qs%2FeIvsUyOVCCK0a5fzsbeIAIOChVwVsIJMxiCSIaJuovXs2Ud8FLA2HDn1Kuxe4blvmfSChvtZ%2BjtdJHcJsFhQk03ZIaFMmG7nCMaD19M2Jezp2sBxp4W%2B5qRH1TBlngg9ayIyEGphPzVc4ZsG%2F5EYiskVsELcRZq40hxzPsbbvcUvlo1Is9csypA1LDPfFzy5ZXoOH4Yr6VNQqMIaURvIdT0ayIeCiUo%2BjJwJMn0SKgb8c9Dewv8%2BSDtgXB6Ipi9XEy3hxndhSp73QjYy77MezbTwKNcnKsshDMhFkBE74E4wuhWkwfByBcXxuud7ll4kkoZKivZHbYAPREPAZCFdtciRyU7TReMtIKuBmD7%2B56Kt5%2F9ZXXtOifdYmPxToUuGAIRL8umX1UhLF8Vq8jsnmpG0XIHzkNSadILyMeFehvwUW1s5uOknQI4pQD0BUrcjgYbV6LIQxlzHfCqo9sYOAMAwdlI8Ppnr6qksrttxvQIwj9GAwgY6pgGN6ddXzK%2F%2F%2BibLFUq11r%2BpnQbolGKk0asNxZ%2BO44Vr7jfA%2FeMHjE%2BWRKvMU64FrkWslkUnM2nz%2BW1A3y3DP7cDguSKDvv%2Bx%2F1M7z9JsZ0o7LP%2Fqmy1G7gpcCn4IIwIOl%2FIz33MyfQyOzeQMoDG3nf%2FzJUpEMqBm9qhqpjSs74jIpSXN%2BoHIpi7BnP5TuU6PdnVvpGm1sDX4p4%2F3JCsKpkUBk0ziOWc&X-Amz-Signature=62c5f6e793729aa5797c3a012c4ced0e0054df7de6e5f67419510d3060c2dc03&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTEDZEW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBduZu2dDZZgrez2YWSY2Is%2FWYY2dyjK3qOItcroXxiWAiAVjdmvZL8Yvh8ypYPNbI0rRxoRaSCnpLBCZog%2Ff4%2Fqtir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM0Rccrz2WantrdiRTKtwDAiEUCQFCAlpcsxiAkjUvCDaSHmnEvGXPYxOpv7lvn6IEaEB6ReYPiB83BdbXjcsdZHKPH7QNKM8lrcCLcvIxO2Su7JMndDhUSOXzf%2BrL2C42V7itL4SxD4brrF1Lro50oZOIVA5e%2Blvd9qs%2FeIvsUyOVCCK0a5fzsbeIAIOChVwVsIJMxiCSIaJuovXs2Ud8FLA2HDn1Kuxe4blvmfSChvtZ%2BjtdJHcJsFhQk03ZIaFMmG7nCMaD19M2Jezp2sBxp4W%2B5qRH1TBlngg9ayIyEGphPzVc4ZsG%2F5EYiskVsELcRZq40hxzPsbbvcUvlo1Is9csypA1LDPfFzy5ZXoOH4Yr6VNQqMIaURvIdT0ayIeCiUo%2BjJwJMn0SKgb8c9Dewv8%2BSDtgXB6Ipi9XEy3hxndhSp73QjYy77MezbTwKNcnKsshDMhFkBE74E4wuhWkwfByBcXxuud7ll4kkoZKivZHbYAPREPAZCFdtciRyU7TReMtIKuBmD7%2B56Kt5%2F9ZXXtOifdYmPxToUuGAIRL8umX1UhLF8Vq8jsnmpG0XIHzkNSadILyMeFehvwUW1s5uOknQI4pQD0BUrcjgYbV6LIQxlzHfCqo9sYOAMAwdlI8Ppnr6qksrttxvQIwj9GAwgY6pgGN6ddXzK%2F%2F%2BibLFUq11r%2BpnQbolGKk0asNxZ%2BO44Vr7jfA%2FeMHjE%2BWRKvMU64FrkWslkUnM2nz%2BW1A3y3DP7cDguSKDvv%2Bx%2F1M7z9JsZ0o7LP%2Fqmy1G7gpcCn4IIwIOl%2FIz33MyfQyOzeQMoDG3nf%2FzJUpEMqBm9qhqpjSs74jIpSXN%2BoHIpi7BnP5TuU6PdnVvpGm1sDX4p4%2F3JCsKpkUBk0ziOWc&X-Amz-Signature=52678632130af970c85d9ef17cb6df8646c658e32d67ad4e612d28a5be53c05c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
