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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWQSNDQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCoustf6eWq0SXOqjsApq%2BC3GZsiHlV%2BFaSYWmya%2BuI8wIgWSoRkz14xcnYsSJJkxWsI9HTnKkDWjDkMKT5PRTANTkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVXV9mlBV0ZdutGgSrcA00H8CnyHz1FMZZTn%2BX%2Fg7NmlJ0Vz5S3xRc5VePDISooT3EpM3fdITjtt2jf2kYfDDRd%2BoNJ75EA6ii6NWdlNRVN3zGJmpCW6NUFNjZv3BhdwLiEG1MFICD1Pj%2BgM9TLZGNa%2BIsftN2Y0Z9X5dSgh%2FpjDnsWF9egDxGhE6xmf%2F35L3Av3%2FRQcCWjnmDtjv70fIiZLJSW1kXH7JWtePchaeFoeek%2FiEOCEPdvNC9%2BniDkG1OwZy%2B%2BkNoJ%2F%2Bw9C%2BtPzWk9Pi05M8mn8c9mzMXQrNUHtWAD1pWGDyP4oRR%2FCHhY9Jommi4objSQiUjuDahfcmcjt9B0IcsoW6H0pSviOSPGRygdL6Fg0ZFlPH0JhATn8eNtGBlTt8jDCsWR6XTjRzEqDc61O%2BmSh%2BOu9hatvxepA9Hr0jh%2BJiJjk%2BlIxXXmG%2FtXluZ7YwvZOPTrvpwCEdkBCIwLotPrtR78AxaU%2FpitBMoy7gR%2BCc1%2FIYLR56LKt%2FkXPrWs0cZA%2FQ5Z0EZi1SPFEBjDH%2FEJcmL8rDt%2BJQY5dM1IfVS1kDaqGPBwuIHGeA7%2BuBID89WriakNGKVUvxKBXc2CjQeW0TqY93lEvnfhl8lMzabn%2FXPQq0YGS2jrZEmCA39jox3sYDP0MMekxsAGOqUBsY%2FnejszxocgWFcUFw6o%2Bc3UuYiQ6J%2BVhCQql0y6YYuvn5NnWjCFJJZTfnE6FRst8UwkZaXTiWi66ztv3%2Fi5A4e1tSrXUcqhhBi7Oe8kRrdSnSzhkF2js8zQi8wDoi0vA0upThLue3rfpoY%2F7596ziFbcXg7ASm%2FaFrhGB7dBRIrUZAD3jc3cxKzqEgum850gZ3iQt8iXVFHzENqEV6LlSU0AK4A&X-Amz-Signature=e80c63e0d4e7435eeea1eefe3d39f8c30e8750b20c7c3eaf9f0cbbd2be7f6fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWQSNDQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCoustf6eWq0SXOqjsApq%2BC3GZsiHlV%2BFaSYWmya%2BuI8wIgWSoRkz14xcnYsSJJkxWsI9HTnKkDWjDkMKT5PRTANTkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVXV9mlBV0ZdutGgSrcA00H8CnyHz1FMZZTn%2BX%2Fg7NmlJ0Vz5S3xRc5VePDISooT3EpM3fdITjtt2jf2kYfDDRd%2BoNJ75EA6ii6NWdlNRVN3zGJmpCW6NUFNjZv3BhdwLiEG1MFICD1Pj%2BgM9TLZGNa%2BIsftN2Y0Z9X5dSgh%2FpjDnsWF9egDxGhE6xmf%2F35L3Av3%2FRQcCWjnmDtjv70fIiZLJSW1kXH7JWtePchaeFoeek%2FiEOCEPdvNC9%2BniDkG1OwZy%2B%2BkNoJ%2F%2Bw9C%2BtPzWk9Pi05M8mn8c9mzMXQrNUHtWAD1pWGDyP4oRR%2FCHhY9Jommi4objSQiUjuDahfcmcjt9B0IcsoW6H0pSviOSPGRygdL6Fg0ZFlPH0JhATn8eNtGBlTt8jDCsWR6XTjRzEqDc61O%2BmSh%2BOu9hatvxepA9Hr0jh%2BJiJjk%2BlIxXXmG%2FtXluZ7YwvZOPTrvpwCEdkBCIwLotPrtR78AxaU%2FpitBMoy7gR%2BCc1%2FIYLR56LKt%2FkXPrWs0cZA%2FQ5Z0EZi1SPFEBjDH%2FEJcmL8rDt%2BJQY5dM1IfVS1kDaqGPBwuIHGeA7%2BuBID89WriakNGKVUvxKBXc2CjQeW0TqY93lEvnfhl8lMzabn%2FXPQq0YGS2jrZEmCA39jox3sYDP0MMekxsAGOqUBsY%2FnejszxocgWFcUFw6o%2Bc3UuYiQ6J%2BVhCQql0y6YYuvn5NnWjCFJJZTfnE6FRst8UwkZaXTiWi66ztv3%2Fi5A4e1tSrXUcqhhBi7Oe8kRrdSnSzhkF2js8zQi8wDoi0vA0upThLue3rfpoY%2F7596ziFbcXg7ASm%2FaFrhGB7dBRIrUZAD3jc3cxKzqEgum850gZ3iQt8iXVFHzENqEV6LlSU0AK4A&X-Amz-Signature=3a07917082f510b8fb84cb8c0744f3a05ce68e05c40e1c06295d5cc7d8415776&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
