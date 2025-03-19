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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPBZ5LS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDdDJf48RlAvHHXAU6GaYGLEtZH0QtIa5taAPPo0g9sPQIhAN2AA2XBEZ14elV%2BIF7BTqlASwHYhj7YaiFz3lc8%2BPLfKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8%2FRS0OiJY%2FNsiRooq3AOBmRwUr%2BWlGknSnDew1L4xTXjovYVt34vz13v4RAEZnB5fJUctB4SXGaX7GEomAJDE0fi8qI9xXx1%2B%2BqT4PBpRUFpeqSl5r%2BgD6LLXEPNGpFSTALAcefW%2FXRH4Xi2vyRGjJz4dlEanbVxx73xlyQjgfyY67%2FZCWYsxezi14SXmFH8Opzd89Y35q2ggJ1rT3m1ICM1oQ7ITMfSRMFb3pCgA0NQRnaDh5OgEXxqTi0yljGnwN4uGSMisU0HQcucseEpIBEyaH5ZKd%2B2%2FttxCTIwNI4Z1Jz4x1ECQdEcfNikr3AqajsPCmLFBMkFFKc6jqNwpOgVUKWc4FOHICA0fuW3eJd6gjy44jdvEAyazGMxKwaoQRT8uQI5cRBZhT4o36OPmxC%2B8y60NCD5QnIBTYoSwj8Tw2yHXyniA%2BZPdckKH72qwkiiFNdpq7AzgfSjZA%2BSzdhJecwp%2FyYT%2Fgr3g5g9m8D%2FwA9K3hh4Vhw2IALZsgEmzNtRFEcJYG13YrmkYxTpd8b8Enm%2B6XDKM2hjGx39AcYVlRrjhPXEBrcINFkd4H2mz3dHlJ8bDjjwzXM7C8ww9dvtMi43pi3T0jZAtcAD8whwJkAETNUcrrjDpGaF1opBdJphFOer1meo%2BbzCB4Oq%2BBjqkAT%2FhPuPGblL%2FUB%2BRFVM9256euB0K0yZI4D9Te8EfcE6B9fIdxMO%2FELdnMhI1D8zinKxZzqyOPVSbCgdOaiauXz%2BJQaEceAUnQSrkWmjCeCKsbVnjq7sado07vAgHnY05cskshzhldiZmbvdZ9Ibr9OA8kkcpUC5%2B47KUWKwS2yZeHhgadScV9CoA6B%2FPJLozv6nWsYjBYlrgVK2TBIxN%2BDd6UTCf&X-Amz-Signature=b03ac94a0df4b2587168da5489ebdafee21e87007e761bb4223ad657328587f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJPBZ5LS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDdDJf48RlAvHHXAU6GaYGLEtZH0QtIa5taAPPo0g9sPQIhAN2AA2XBEZ14elV%2BIF7BTqlASwHYhj7YaiFz3lc8%2BPLfKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8%2FRS0OiJY%2FNsiRooq3AOBmRwUr%2BWlGknSnDew1L4xTXjovYVt34vz13v4RAEZnB5fJUctB4SXGaX7GEomAJDE0fi8qI9xXx1%2B%2BqT4PBpRUFpeqSl5r%2BgD6LLXEPNGpFSTALAcefW%2FXRH4Xi2vyRGjJz4dlEanbVxx73xlyQjgfyY67%2FZCWYsxezi14SXmFH8Opzd89Y35q2ggJ1rT3m1ICM1oQ7ITMfSRMFb3pCgA0NQRnaDh5OgEXxqTi0yljGnwN4uGSMisU0HQcucseEpIBEyaH5ZKd%2B2%2FttxCTIwNI4Z1Jz4x1ECQdEcfNikr3AqajsPCmLFBMkFFKc6jqNwpOgVUKWc4FOHICA0fuW3eJd6gjy44jdvEAyazGMxKwaoQRT8uQI5cRBZhT4o36OPmxC%2B8y60NCD5QnIBTYoSwj8Tw2yHXyniA%2BZPdckKH72qwkiiFNdpq7AzgfSjZA%2BSzdhJecwp%2FyYT%2Fgr3g5g9m8D%2FwA9K3hh4Vhw2IALZsgEmzNtRFEcJYG13YrmkYxTpd8b8Enm%2B6XDKM2hjGx39AcYVlRrjhPXEBrcINFkd4H2mz3dHlJ8bDjjwzXM7C8ww9dvtMi43pi3T0jZAtcAD8whwJkAETNUcrrjDpGaF1opBdJphFOer1meo%2BbzCB4Oq%2BBjqkAT%2FhPuPGblL%2FUB%2BRFVM9256euB0K0yZI4D9Te8EfcE6B9fIdxMO%2FELdnMhI1D8zinKxZzqyOPVSbCgdOaiauXz%2BJQaEceAUnQSrkWmjCeCKsbVnjq7sado07vAgHnY05cskshzhldiZmbvdZ9Ibr9OA8kkcpUC5%2B47KUWKwS2yZeHhgadScV9CoA6B%2FPJLozv6nWsYjBYlrgVK2TBIxN%2BDd6UTCf&X-Amz-Signature=6123443f784e5e9253ca545870dd1a397aa5dbeed5ddd9c7f24c80d4e98b2fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
