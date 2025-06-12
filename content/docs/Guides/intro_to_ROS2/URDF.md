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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CSPYFE%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQNLWhNOgk%2BUT93ohk03U5%2BpWghuxIdSVQR7Y59xrcpAIgJ5EKJGYyiUSUygM2qUI6uB%2BavwoMAqcM75UgozxZ0g8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3lNGvkNFedlzIeCircA8fRjCiG3UznSxN%2F1tmWSwFbChsBd8IfFoVU9h2hQWivgv4c06rKYwxLe%2F9%2BWkXPKyKidP2dPs9gd%2BAoEA6MfSWs5%2BNHdpp%2Bxjim6PJyGPeEiqFqPzJpFnc0PNz6hzd4LPprUZLMRCPKcfQtc4OpmsIviakhwj%2BRqDFq8ItRnq99EifUadz2cmPeSdTBrwi55K4hQfeuOHl7UVOPukRkfNEvhxUx7bz6n%2BdA0ma4U8f54pWazF5b2BPyvEslXx2rXzNQFvoZZtFyQWQ5mO5p4k5qBmwFucVULbP%2BrRH6cGrJ3QuBH7kLawCt3z5j6CRz6TxGW7mSzm7V6M1EabRU75Sn3%2BogF5%2FGrnaGNpz3mMw4FjRRMO%2F3ZiUvcF2SSPrvjpeRHOzIpSmedGTobJ2SyrhHyuah2fF4q1q9nc2snUhBqejS5sJ%2BIt2KkjFWlyEWYmbcb2JNhqF%2FJOreXI6yqebiAhnVKYUoffu64TCVDYqS7TJ2M1kF4wM2KK5zg%2B0QkrltjYxSn0XRzLjl6XsLZonALCHGwqkQYPyKITplvKZk1TTH7oa1uCkwxTmfD6KOVhqHjmUumoN3CnyVxGDzdAxX%2FdSf%2FJ9Hv22r%2FizuQisLA8j2EXu609IOS3PyMIfaqsIGOqUBKM4hnzKCYX8SsIj9WDJhI7s0cci4Aid0lI%2F9A%2FsqyIcD%2BF30Z2ahwFEFZVICJrRKzc0wzc5E2PQrsLmaYET8tzbogtgKYIcm7DWIl04Nt8AXuNHfBRWbYUNR9xA7OWgpL%2FOVdJJMIuSjl9TbIrlKiOToz7Uzy%2FartLN%2FbBAYnzrsm9gdpARoaYPIth%2FEmWKAphbITyC7PSKnIYpK3AoFmK3aFTLb&X-Amz-Signature=976011b3f15016fb6aebe4898e4e4313b85441c94ee3c34ef9f6ba1de5124207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CSPYFE%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDQNLWhNOgk%2BUT93ohk03U5%2BpWghuxIdSVQR7Y59xrcpAIgJ5EKJGYyiUSUygM2qUI6uB%2BavwoMAqcM75UgozxZ0g8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3lNGvkNFedlzIeCircA8fRjCiG3UznSxN%2F1tmWSwFbChsBd8IfFoVU9h2hQWivgv4c06rKYwxLe%2F9%2BWkXPKyKidP2dPs9gd%2BAoEA6MfSWs5%2BNHdpp%2Bxjim6PJyGPeEiqFqPzJpFnc0PNz6hzd4LPprUZLMRCPKcfQtc4OpmsIviakhwj%2BRqDFq8ItRnq99EifUadz2cmPeSdTBrwi55K4hQfeuOHl7UVOPukRkfNEvhxUx7bz6n%2BdA0ma4U8f54pWazF5b2BPyvEslXx2rXzNQFvoZZtFyQWQ5mO5p4k5qBmwFucVULbP%2BrRH6cGrJ3QuBH7kLawCt3z5j6CRz6TxGW7mSzm7V6M1EabRU75Sn3%2BogF5%2FGrnaGNpz3mMw4FjRRMO%2F3ZiUvcF2SSPrvjpeRHOzIpSmedGTobJ2SyrhHyuah2fF4q1q9nc2snUhBqejS5sJ%2BIt2KkjFWlyEWYmbcb2JNhqF%2FJOreXI6yqebiAhnVKYUoffu64TCVDYqS7TJ2M1kF4wM2KK5zg%2B0QkrltjYxSn0XRzLjl6XsLZonALCHGwqkQYPyKITplvKZk1TTH7oa1uCkwxTmfD6KOVhqHjmUumoN3CnyVxGDzdAxX%2FdSf%2FJ9Hv22r%2FizuQisLA8j2EXu609IOS3PyMIfaqsIGOqUBKM4hnzKCYX8SsIj9WDJhI7s0cci4Aid0lI%2F9A%2FsqyIcD%2BF30Z2ahwFEFZVICJrRKzc0wzc5E2PQrsLmaYET8tzbogtgKYIcm7DWIl04Nt8AXuNHfBRWbYUNR9xA7OWgpL%2FOVdJJMIuSjl9TbIrlKiOToz7Uzy%2FartLN%2FbBAYnzrsm9gdpARoaYPIth%2FEmWKAphbITyC7PSKnIYpK3AoFmK3aFTLb&X-Amz-Signature=97dfaffc9bbabe2eeb21ec0d7b869896e34a1802901481c5a82e8181084d1805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
