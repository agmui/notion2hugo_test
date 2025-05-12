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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC2E7T6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCID0y8lpCgq6iTmV4Y7ybQ%2Bnj6vBnKk7nKPkr1Dnx3gruAiA0OoWX%2BVjzK8thV%2BIPZ4XOtaJHAYs75I%2Fs33pLIPVNlyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9hwMYcdjz%2FcIcYOKtwDup2I8KAqZD98i%2FteqX3I%2BkzJh8CVca4bLzSnHBGtudkPvQMrFSNIDRlW0zoyAQQ15Gnh68ugvE7lpdKC1hrRAAR1dd1lt%2Bu4cmkwBLZg8JfqocCU3illjMdwTUPrSzpRj3WQvE2A4x8uX%2F9m%2BAgOSv2pywdafo3qDH4T%2Fd0ebcsAenvnO%2FIX9jihguslyafkT9FxIrVxcumL7ZX2H8HeFEhE14G%2FRO9xios3upXttq%2F%2BFiaE%2FOa2xgbwVCFMOBf7kh%2BOmquoRtTrSyx12E7TY0Y0sJJ1DwD%2Batkm%2FbrMZ4wwD1DqEFb4skhbVp8cfmqEQWG429JEaAtmkUS7FnExS9fA5fXFwBwztmbDSEFtTTqQAl5zOOdOaGNpWVtu6tHKKyL5GKGhurc%2BfRyXfz9js8lmMCmwPQwtrq7rJzZxQKkSqqrDpN9lt62OHHQjuEvIgLO2C7EZtxtf2s6wBm0kod2lNLNI7M6lepZKwVxQ5aF7kyk8eYGMJl3YDkQMhBK28s5YidbBjAhFbrUydQwO2vfp1yaexPZoV%2FhKOVShiPkP66AAtXa%2Fu2jvj8Mi9n6%2FD6ztw8Un5zaeKdh3%2F8ZSoOk7uqWn9ppx%2BeQ270hk44pWNQQ6Z34GGDPchtMw%2BdmIwQY6pgEuErgY89BTCPftpVBg%2FzJx7KXt%2FKrIU91QkDsYenS7mgQTbPbp1czF%2BycgFipQQnDx7wPYEXJ0tZoODN6B3BylrZCXbuWP5%2BwIiJ1lNyP6B619uihWSwovMRvIAEnT53xSKNWR6CpvlrVjB5%2BjxG4kPBnMtpFfae9kmgvHtt%2FCvIqIPZJYLVtSBYFCbMwRaxXI4J3lAwhwv7NlkUIxdRiapTTk8zv5&X-Amz-Signature=29bb9bd6a17513bcc04d68af3753033048e160d23f11d31c5e2c733fcb28500e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVC2E7T6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCID0y8lpCgq6iTmV4Y7ybQ%2Bnj6vBnKk7nKPkr1Dnx3gruAiA0OoWX%2BVjzK8thV%2BIPZ4XOtaJHAYs75I%2Fs33pLIPVNlyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9hwMYcdjz%2FcIcYOKtwDup2I8KAqZD98i%2FteqX3I%2BkzJh8CVca4bLzSnHBGtudkPvQMrFSNIDRlW0zoyAQQ15Gnh68ugvE7lpdKC1hrRAAR1dd1lt%2Bu4cmkwBLZg8JfqocCU3illjMdwTUPrSzpRj3WQvE2A4x8uX%2F9m%2BAgOSv2pywdafo3qDH4T%2Fd0ebcsAenvnO%2FIX9jihguslyafkT9FxIrVxcumL7ZX2H8HeFEhE14G%2FRO9xios3upXttq%2F%2BFiaE%2FOa2xgbwVCFMOBf7kh%2BOmquoRtTrSyx12E7TY0Y0sJJ1DwD%2Batkm%2FbrMZ4wwD1DqEFb4skhbVp8cfmqEQWG429JEaAtmkUS7FnExS9fA5fXFwBwztmbDSEFtTTqQAl5zOOdOaGNpWVtu6tHKKyL5GKGhurc%2BfRyXfz9js8lmMCmwPQwtrq7rJzZxQKkSqqrDpN9lt62OHHQjuEvIgLO2C7EZtxtf2s6wBm0kod2lNLNI7M6lepZKwVxQ5aF7kyk8eYGMJl3YDkQMhBK28s5YidbBjAhFbrUydQwO2vfp1yaexPZoV%2FhKOVShiPkP66AAtXa%2Fu2jvj8Mi9n6%2FD6ztw8Un5zaeKdh3%2F8ZSoOk7uqWn9ppx%2BeQ270hk44pWNQQ6Z34GGDPchtMw%2BdmIwQY6pgEuErgY89BTCPftpVBg%2FzJx7KXt%2FKrIU91QkDsYenS7mgQTbPbp1czF%2BycgFipQQnDx7wPYEXJ0tZoODN6B3BylrZCXbuWP5%2BwIiJ1lNyP6B619uihWSwovMRvIAEnT53xSKNWR6CpvlrVjB5%2BjxG4kPBnMtpFfae9kmgvHtt%2FCvIqIPZJYLVtSBYFCbMwRaxXI4J3lAwhwv7NlkUIxdRiapTTk8zv5&X-Amz-Signature=1b6f9e3946cf16fbe62f66ba0dadc493ec9ef4cb8f0294a157fbb2f10d5b6903&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
