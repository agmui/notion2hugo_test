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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7JGTCV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWbodIdPexEb4tMsSCUUvvUs5SXQGzICogkeV0O5M9dAiEAxC6wEMRI0ObVW667rpoGWlZ7QwTpKvGYLK7dBso1uHEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEI1KEFDpzV%2FLpQvTSrcA5oDpkpH9BcWrkAkpdv8aBfJGa5%2Bc0%2FaQyukAM7D0qXqdIi85B4xBBhzJJYCcsEyNG5%2FlkHVcCTBlXzazuthd8tNpPeo4JSmi2AgNmNNKyN3knN85PHMTNCyXvFTeKRcKZpM9dOI9ds69ndRNc7HWcBehN2E9eLNWJGDON3V2ZKPro4D%2B0NQRNGgtgKMmj1I8Gx07Fy%2FacvQcHfZU12mciqNkt%2FoJRPicP6QhJiqsZ%2BUkMZpaCMIkqiLRJ1oO68QMjiZCqhI%2Bn4WHH%2B03VzMD8Tol44Fp%2B01sDdXsGR%2BFOgE79xo6xhPSRMqv1jNL6PnvQfalvjABIR22GFiz85JIZf9gJzgg5CNwKKloZ35D85caZ06XEc8i1MspXS1fS0usSPVI%2BwV%2BA6fpRfWDXvKU8DQ7P%2BHHtH%2F2hvJNqXmeDTxDCbphUC7mvv2HqO0kMibeh0z5rSHqSbuNYvK77wa%2BTHJzuCMiRpWuI32X0xce7Lv5gT5S9ME5ObcB63BNAxZa5j6DRolOE6j8AJ9nnWF9a5iiSPcyZcQU8lUq1P7eYr%2Fk4sjonTbND1Kb6ogZrfwEsgt2VXHs8PXL%2F9rXTorptr9Pa2bMbI4aQSpaZst6Bsp2GrPAfSbEoeUC2sAMLnx5sEGOqUBAUlS55fsLpXDOfkAx6aKcQG6Ndt8R0NBSPlxUNvSjVQDqYiFngbcvIDhLm%2BJWgCjSWeFmixQaqBPhlMhjXkQXJQ2u4UCJaAPIeq03P9SAFrywaevIBTp9CsMYL3LVPIr2s8ZfbTxM%2FPf7q7V62zloFYhRKnMSn9rXkfCyLksfAJYUUDGj5aQI%2F1vsb1d1iWPGH6TJ43zmbj1HizwOl6%2BzCm4frfB&X-Amz-Signature=1b3436442f43aacca34b0cbbb44734a79144b7e85a54ac7be935edbd57a99333&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7JGTCV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWbodIdPexEb4tMsSCUUvvUs5SXQGzICogkeV0O5M9dAiEAxC6wEMRI0ObVW667rpoGWlZ7QwTpKvGYLK7dBso1uHEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEI1KEFDpzV%2FLpQvTSrcA5oDpkpH9BcWrkAkpdv8aBfJGa5%2Bc0%2FaQyukAM7D0qXqdIi85B4xBBhzJJYCcsEyNG5%2FlkHVcCTBlXzazuthd8tNpPeo4JSmi2AgNmNNKyN3knN85PHMTNCyXvFTeKRcKZpM9dOI9ds69ndRNc7HWcBehN2E9eLNWJGDON3V2ZKPro4D%2B0NQRNGgtgKMmj1I8Gx07Fy%2FacvQcHfZU12mciqNkt%2FoJRPicP6QhJiqsZ%2BUkMZpaCMIkqiLRJ1oO68QMjiZCqhI%2Bn4WHH%2B03VzMD8Tol44Fp%2B01sDdXsGR%2BFOgE79xo6xhPSRMqv1jNL6PnvQfalvjABIR22GFiz85JIZf9gJzgg5CNwKKloZ35D85caZ06XEc8i1MspXS1fS0usSPVI%2BwV%2BA6fpRfWDXvKU8DQ7P%2BHHtH%2F2hvJNqXmeDTxDCbphUC7mvv2HqO0kMibeh0z5rSHqSbuNYvK77wa%2BTHJzuCMiRpWuI32X0xce7Lv5gT5S9ME5ObcB63BNAxZa5j6DRolOE6j8AJ9nnWF9a5iiSPcyZcQU8lUq1P7eYr%2Fk4sjonTbND1Kb6ogZrfwEsgt2VXHs8PXL%2F9rXTorptr9Pa2bMbI4aQSpaZst6Bsp2GrPAfSbEoeUC2sAMLnx5sEGOqUBAUlS55fsLpXDOfkAx6aKcQG6Ndt8R0NBSPlxUNvSjVQDqYiFngbcvIDhLm%2BJWgCjSWeFmixQaqBPhlMhjXkQXJQ2u4UCJaAPIeq03P9SAFrywaevIBTp9CsMYL3LVPIr2s8ZfbTxM%2FPf7q7V62zloFYhRKnMSn9rXkfCyLksfAJYUUDGj5aQI%2F1vsb1d1iWPGH6TJ43zmbj1HizwOl6%2BzCm4frfB&X-Amz-Signature=5a483160627df34574e2efe433b943971d19d9d8d2f27966da8c9c3261d2d2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
