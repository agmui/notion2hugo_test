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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVKGGM5%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD3NZ%2BjkJbuqDwOGqi4TP4oNr1XkfZNG09qcS2vcA08LwIgXJ5zaCs014K3zPIM6MmL7RJAE8n%2Fhd6tAhDsOnPfEmsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcWGeGBctZk2gdbTircA7ayKuK14uvIpfiEw4kkpEXXorLvOKtIxkY%2FdRkekqVv%2BsFMwu3DIJm91JZmGuJ%2F59nqY25WoTtmh6ydl2SzGds3%2BID44%2FCJ6mtLCPHFRwmmDZaBIx%2FDk0xX%2BFgj7raC4rEdUv9h3cmuXW7MHLiL37BcqMCpY7iwGF%2BnkK%2BaODa9HYrGcQLHZ8duDEfvdLVJ4XSxX2QMui5OtR2x%2FO%2BB4jBq0Skvs1MnEnMw%2Fwg1oAtxg49V43S3zdAmUPU06bDA%2BPGTdCwyZUssH0ZUNzn8xNSJxA35F9rtBzanCQVN9kSwhdMc3Cbkexr516%2FUz9%2BmlRGu9fJD%2Bh0wnlK02GZyhxiPwWGuJG6OgpmamCgFihaI4u93JfO1sViUdaQ6PGzY%2B4DKqgqiaomox%2Fs93W08O%2F2rhqEATDyFrKeegJwiY9eLVyWe2nhwmCbca3MXR6aYodRQo54vuvDRGj6z2lgIvxMZ4%2BKp9AKA9Bulq34A33gFQ%2B5%2BUqn0NdeUm%2BgE4xeRs8owTtRjKu3Oo%2Fc9MWVAUtHGJ65mOO2MNYZ2aJ7I1CPjU1SZ0nYI9ZtAcVNFBaVqt6%2BCxfLzSE%2FgbXZXGtjAWfj8RMoq4rvSEQUTDPxP%2FuTPxTyrb0SfLJ92THXeMPLIzcAGOqUB6Rdbv1IS6yhm7crBHFUWBVOtInZcgk14nBuvwN1d0e68EO1fmpzBG5B9gqjt6vIDWeQUjL2ROLOMNspPzuf0nlTHWEz7Wa8e4x%2BoRMZiH0FFLMacyOSKhUCB9NWrJag5EI46V6Y7Wp6%2FD4Qgz%2BECnUYssGnIJ%2BO9JNs41wz6WpDDP6pftL4kt1YYp20t3%2ByfssICC0j1rywV6cfFqQwQolr%2BEUeb&X-Amz-Signature=69ada02c6a290cf081b1ed62ae24526b006d982427702dfe84b1c8de9a95c913&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVKGGM5%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD3NZ%2BjkJbuqDwOGqi4TP4oNr1XkfZNG09qcS2vcA08LwIgXJ5zaCs014K3zPIM6MmL7RJAE8n%2Fhd6tAhDsOnPfEmsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcWGeGBctZk2gdbTircA7ayKuK14uvIpfiEw4kkpEXXorLvOKtIxkY%2FdRkekqVv%2BsFMwu3DIJm91JZmGuJ%2F59nqY25WoTtmh6ydl2SzGds3%2BID44%2FCJ6mtLCPHFRwmmDZaBIx%2FDk0xX%2BFgj7raC4rEdUv9h3cmuXW7MHLiL37BcqMCpY7iwGF%2BnkK%2BaODa9HYrGcQLHZ8duDEfvdLVJ4XSxX2QMui5OtR2x%2FO%2BB4jBq0Skvs1MnEnMw%2Fwg1oAtxg49V43S3zdAmUPU06bDA%2BPGTdCwyZUssH0ZUNzn8xNSJxA35F9rtBzanCQVN9kSwhdMc3Cbkexr516%2FUz9%2BmlRGu9fJD%2Bh0wnlK02GZyhxiPwWGuJG6OgpmamCgFihaI4u93JfO1sViUdaQ6PGzY%2B4DKqgqiaomox%2Fs93W08O%2F2rhqEATDyFrKeegJwiY9eLVyWe2nhwmCbca3MXR6aYodRQo54vuvDRGj6z2lgIvxMZ4%2BKp9AKA9Bulq34A33gFQ%2B5%2BUqn0NdeUm%2BgE4xeRs8owTtRjKu3Oo%2Fc9MWVAUtHGJ65mOO2MNYZ2aJ7I1CPjU1SZ0nYI9ZtAcVNFBaVqt6%2BCxfLzSE%2FgbXZXGtjAWfj8RMoq4rvSEQUTDPxP%2FuTPxTyrb0SfLJ92THXeMPLIzcAGOqUB6Rdbv1IS6yhm7crBHFUWBVOtInZcgk14nBuvwN1d0e68EO1fmpzBG5B9gqjt6vIDWeQUjL2ROLOMNspPzuf0nlTHWEz7Wa8e4x%2BoRMZiH0FFLMacyOSKhUCB9NWrJag5EI46V6Y7Wp6%2FD4Qgz%2BECnUYssGnIJ%2BO9JNs41wz6WpDDP6pftL4kt1YYp20t3%2ByfssICC0j1rywV6cfFqQwQolr%2BEUeb&X-Amz-Signature=ce73cbc852092128090be819019c452b472f9850ebf7f8651bfd6cfea59dd208&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
