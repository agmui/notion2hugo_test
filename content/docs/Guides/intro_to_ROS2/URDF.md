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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLGCN7A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICxxF6mXK8zu%2Fk%2FT9Lg84MFi6oPH5KrIFSyK%2FTRrkYAqAiEAkDjH1xO8bdei3kj1rGacMTaeo96CxDRYu9zWqI9v0MMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbbgeYIm8NTIwCRiCrcAwSDU24Ap7AAsw4JrJuK8a8ovz7hyIkHKx4ODaXLp%2BvhzVZMv%2Bx%2FY37R%2B5dRneCcd8GanzP4KUM5dpUqlq6YtmTQTLBOFCvFY9%2FTUGfiibCtvtLBjI%2Bya34haflANUbeojpmAKYP1yB0i9uZkUPa3CjJO1F5DDzej24Km5Q2En%2BNYUW6OCMHe6jg%2BOdrIyxRtnK452kDGCIUsIzktcUTTtc2x1t589PsuM6hUulALVI9Rszv1QxRAP0UjKeDL%2FlLplVGItEFAPuuoF2N0mjBzC7cByN3swUJ5QB6NIRKFgjQZnjMXTli8%2BZOERH1H5%2Bj5mrglprY1iQJ2BFNxE15yeCnoYyTfsV0UEK%2BoM1Onst1k1jtsCxlVvZ0VutZZkCtf3AlmORCiBps%2FoajJMeHG3QIPV1J%2BgwA%2FFdj%2B3iXH%2FZjZv0vwi2K2r9nxeM9NeqvGA5OpUpNKu2IC1cf4neKW3a9HjRaPkMFq2s3Oo51IeyukNBJ4%2FCiXsbsNptMj0kiaYIS2RYZeE4oVT61GPQHfNdjwZmHdWVEVn5uZNRNLoDuejE5i7GoKksB72fiUG9mFr4ggf1t4HMqoHXacgVVQ0BMzzndXufb1j76g5pRO2UgXtpIthyclEhI8kztMKrposAGOqUB4SzZjHjEUj3GrHqF7kpzv0l%2Fsd%2FCOVZATxp%2FUIlNv%2FaTwkKmgE7usMHv1ZN3f9Gu72maf695bC0UI42hpgp5RICNP3sc%2FMQRWT3z4Wdt2JLb2uU1kzuTH2XU8rTb%2BN%2FhKYEHg3ZNvTN%2BM9jPQYUa%2BoApWFd6%2FwX%2BkJIF%2FkEmJPL9CHNfsgAvL90EmjmokRW2D2Gbl8oqdkhmZLdx9YxXOLjrQcJU&X-Amz-Signature=2ced68d762876d7462646d3ab93140a472183e62b3d51a0c83e5b88a0ac84cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLGCN7A%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICxxF6mXK8zu%2Fk%2FT9Lg84MFi6oPH5KrIFSyK%2FTRrkYAqAiEAkDjH1xO8bdei3kj1rGacMTaeo96CxDRYu9zWqI9v0MMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbbgeYIm8NTIwCRiCrcAwSDU24Ap7AAsw4JrJuK8a8ovz7hyIkHKx4ODaXLp%2BvhzVZMv%2Bx%2FY37R%2B5dRneCcd8GanzP4KUM5dpUqlq6YtmTQTLBOFCvFY9%2FTUGfiibCtvtLBjI%2Bya34haflANUbeojpmAKYP1yB0i9uZkUPa3CjJO1F5DDzej24Km5Q2En%2BNYUW6OCMHe6jg%2BOdrIyxRtnK452kDGCIUsIzktcUTTtc2x1t589PsuM6hUulALVI9Rszv1QxRAP0UjKeDL%2FlLplVGItEFAPuuoF2N0mjBzC7cByN3swUJ5QB6NIRKFgjQZnjMXTli8%2BZOERH1H5%2Bj5mrglprY1iQJ2BFNxE15yeCnoYyTfsV0UEK%2BoM1Onst1k1jtsCxlVvZ0VutZZkCtf3AlmORCiBps%2FoajJMeHG3QIPV1J%2BgwA%2FFdj%2B3iXH%2FZjZv0vwi2K2r9nxeM9NeqvGA5OpUpNKu2IC1cf4neKW3a9HjRaPkMFq2s3Oo51IeyukNBJ4%2FCiXsbsNptMj0kiaYIS2RYZeE4oVT61GPQHfNdjwZmHdWVEVn5uZNRNLoDuejE5i7GoKksB72fiUG9mFr4ggf1t4HMqoHXacgVVQ0BMzzndXufb1j76g5pRO2UgXtpIthyclEhI8kztMKrposAGOqUB4SzZjHjEUj3GrHqF7kpzv0l%2Fsd%2FCOVZATxp%2FUIlNv%2FaTwkKmgE7usMHv1ZN3f9Gu72maf695bC0UI42hpgp5RICNP3sc%2FMQRWT3z4Wdt2JLb2uU1kzuTH2XU8rTb%2BN%2FhKYEHg3ZNvTN%2BM9jPQYUa%2BoApWFd6%2FwX%2BkJIF%2FkEmJPL9CHNfsgAvL90EmjmokRW2D2Gbl8oqdkhmZLdx9YxXOLjrQcJU&X-Amz-Signature=0ffe854d6fb51cbcc2419800145a500496924ff628721a29f3f288ac276c6ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
