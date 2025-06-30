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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSMSL33%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFOaTM0Uu7Sct1lPSV2BGdr1TrIlV2f%2BeNmS2fa9B6PAIgALJPxPPxQKCmnLybP4kbmK42vfp7jEJXeQ2e%2F4mi7wYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHF2LoIxR9IqKePoyrcA%2BSnrt4%2B4O9jfcvMq2%2BLQSJ0ftGpXSGhhBZe251Yt8gdeuWALFPCpcRY5mzLz3wcQMbnaV9FIhjJsZ7cX%2FokJianHKGxNMo%2FX2VtvdkaaTUWVSk0rsgZlsZi6RJzT04h6pRal04sXAv4YBm0sMU7h88JEYYDSiQaXW1yWi%2FVm52ggH74kvLQCRLYTg5T38iYzLtQtrSa%2BtbYz2riva7pQPT0sYuAS1LQPg9%2FO4AzpUKGaOnqHSC%2FaZQhu%2Fv0FvF3Kp5iZoIaR7AMN7vJnPmAbMST2YP0dDTfAWSe%2F2zProtm%2BDrn25pwt61cNkhoc%2BxTpHcniFpDAMizZC%2BMzHZtQBeq3KpwO6vPRzEKykQ6qXgwtaao1JCy8YiXe5VYlqqorpBuOQw3KTTV9IyFEZt1s5zpRFm6AHLClEVvvO%2BZK9sXvWhMqB6zPsHwqh78JWdBJGx59oB1cUlvuU0HvjoYfmRk%2B5UkT4HwH3eGJUADXnUCwJLS3lShGDFpgS5DZkDGF43QxNSN7M7OPvyfsl5CR9c4vkukWTMiZcC86wJSgz37aIdCiJaZU%2B9o5DqIhmsxaQOJ7TIfIWBPcW4n0x69jMCM2oqnJgZozjYqQ3uNr045uSF4f4Y9RT0UbIvpMJunjMMGOqUB4xATYSIpQyR7hIo7pdzW7ghHltAIgzzRC1byEoyHcyeYkkTq9vJ1m8Qb0B%2FzBm5jIRCAjuhUMQvnE0HltQLL53HYHopUGBnoVAxsxf2lQ7gKccGMr4%2BvERzlXrYo6V%2BBAndnxzLyZ032FpGNIZ4tPTaOdVFCDYZ7FZpshtOIxOvO%2Bm%2FWw4qccCHHBvn%2FizcHYcc7WCeLwzhg%2FtqUivqgQLKpIA2J&X-Amz-Signature=37f387e3414b4142f45c6f7b61ca51c044b389b3313f5bca09a00b3e05474228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSMSL33%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFOaTM0Uu7Sct1lPSV2BGdr1TrIlV2f%2BeNmS2fa9B6PAIgALJPxPPxQKCmnLybP4kbmK42vfp7jEJXeQ2e%2F4mi7wYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHF2LoIxR9IqKePoyrcA%2BSnrt4%2B4O9jfcvMq2%2BLQSJ0ftGpXSGhhBZe251Yt8gdeuWALFPCpcRY5mzLz3wcQMbnaV9FIhjJsZ7cX%2FokJianHKGxNMo%2FX2VtvdkaaTUWVSk0rsgZlsZi6RJzT04h6pRal04sXAv4YBm0sMU7h88JEYYDSiQaXW1yWi%2FVm52ggH74kvLQCRLYTg5T38iYzLtQtrSa%2BtbYz2riva7pQPT0sYuAS1LQPg9%2FO4AzpUKGaOnqHSC%2FaZQhu%2Fv0FvF3Kp5iZoIaR7AMN7vJnPmAbMST2YP0dDTfAWSe%2F2zProtm%2BDrn25pwt61cNkhoc%2BxTpHcniFpDAMizZC%2BMzHZtQBeq3KpwO6vPRzEKykQ6qXgwtaao1JCy8YiXe5VYlqqorpBuOQw3KTTV9IyFEZt1s5zpRFm6AHLClEVvvO%2BZK9sXvWhMqB6zPsHwqh78JWdBJGx59oB1cUlvuU0HvjoYfmRk%2B5UkT4HwH3eGJUADXnUCwJLS3lShGDFpgS5DZkDGF43QxNSN7M7OPvyfsl5CR9c4vkukWTMiZcC86wJSgz37aIdCiJaZU%2B9o5DqIhmsxaQOJ7TIfIWBPcW4n0x69jMCM2oqnJgZozjYqQ3uNr045uSF4f4Y9RT0UbIvpMJunjMMGOqUB4xATYSIpQyR7hIo7pdzW7ghHltAIgzzRC1byEoyHcyeYkkTq9vJ1m8Qb0B%2FzBm5jIRCAjuhUMQvnE0HltQLL53HYHopUGBnoVAxsxf2lQ7gKccGMr4%2BvERzlXrYo6V%2BBAndnxzLyZ032FpGNIZ4tPTaOdVFCDYZ7FZpshtOIxOvO%2Bm%2FWw4qccCHHBvn%2FizcHYcc7WCeLwzhg%2FtqUivqgQLKpIA2J&X-Amz-Signature=6277e613b55f5f73838abeaf0f556916ae16ff3e30691b66660b72d056d5cbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
