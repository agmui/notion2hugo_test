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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLMQ5RV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIH1S%2B60nTvDZal7x3M7dcosVDzVqSqc25UakXnsrjs7BAiEA2Wb4W5KWPDgED3ntr%2B2qnf3S%2F2zDmoBgFwwlKUHPu%2B0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAijIBHA1yNtbyWcdircA%2FntqyKFZLLBh87oGwMCETo5cRVI0YgO2UPsM1cbbAdNHkvxo9lCMWY%2BVxWAOQENbxe6H1WzMwWse6ClMLomruja24T6Cei4ljRtPqUXL8wLfEBA33iCrcxm5kIvSa7jJ%2B5RKdA7t7REvh%2Bz3elY0IMr6wjK3wbEZNlK76x%2B5tL8YDz8ED9cAHQ65fzgWvVb8IqMOQBvftBQipnyaxmpUyE9XPTjJcSlyQI0rLtCpUSyUbdc1DQBNpC%2Flz%2BGyKQeZQCL8EJYkKtMBw8wxET3zTAgJ4aFDkdisHbPxGtGumQkmrUEj2BiZyiqZAuq46AUIWFuM5EIXr%2BIfoUu9U9qbqjqW9iepduC%2B%2BoZzhjZ2YZaNdi83QozG9hMgGF84HcrxFLj6ekHX6EVSFlcGgc5q3xGUKkiMQK5iPfMRy7M9a12wveFlfrIEVJAVcEw4gbc7piBtdxgs%2FkTXj8kt3rugvXixdPEIdY3O6%2BVQdZtsN3gCj%2FIReexQ9%2F2i52fPsfxR8zGH1FDtts3xdWygXo6z7AC%2BaVaGF7ZAyPcBKaqJWBJ4Drx7%2FHN4hTdKU0ahsbgz4OzF5kovSsAkiAkJLLvbXqhdKeBJPTaht8Q0DO%2BvwtJ8497SbJsPPou%2Fkg9MIyWyMEGOqUB70dE%2B%2BiDyD00cTm5k0BcoQltmxXI0fTJqduraC9NsZI9dbRJZ1ge2Johs0vR2C4qVG38n7qVi6CUwG70hOE3pRpUr61Fl%2B0ZMIN2tsjD2qHYvT9GBn5zqe4cglNb1nxFdyhp4WTsH53wWHuLiW94ieosXBq5j%2Bl5beW5SaZJ7MvEQV8WiI8R1PfAAUnsvOujjGHFmwGrRt6jyPmG9%2Fx6bgOUCNLD&X-Amz-Signature=c7888693b6cee0715a5ccd31935fc0a52b9ec910d20f5f06be63c9e6b4242e42&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLMQ5RV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIH1S%2B60nTvDZal7x3M7dcosVDzVqSqc25UakXnsrjs7BAiEA2Wb4W5KWPDgED3ntr%2B2qnf3S%2F2zDmoBgFwwlKUHPu%2B0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAijIBHA1yNtbyWcdircA%2FntqyKFZLLBh87oGwMCETo5cRVI0YgO2UPsM1cbbAdNHkvxo9lCMWY%2BVxWAOQENbxe6H1WzMwWse6ClMLomruja24T6Cei4ljRtPqUXL8wLfEBA33iCrcxm5kIvSa7jJ%2B5RKdA7t7REvh%2Bz3elY0IMr6wjK3wbEZNlK76x%2B5tL8YDz8ED9cAHQ65fzgWvVb8IqMOQBvftBQipnyaxmpUyE9XPTjJcSlyQI0rLtCpUSyUbdc1DQBNpC%2Flz%2BGyKQeZQCL8EJYkKtMBw8wxET3zTAgJ4aFDkdisHbPxGtGumQkmrUEj2BiZyiqZAuq46AUIWFuM5EIXr%2BIfoUu9U9qbqjqW9iepduC%2B%2BoZzhjZ2YZaNdi83QozG9hMgGF84HcrxFLj6ekHX6EVSFlcGgc5q3xGUKkiMQK5iPfMRy7M9a12wveFlfrIEVJAVcEw4gbc7piBtdxgs%2FkTXj8kt3rugvXixdPEIdY3O6%2BVQdZtsN3gCj%2FIReexQ9%2F2i52fPsfxR8zGH1FDtts3xdWygXo6z7AC%2BaVaGF7ZAyPcBKaqJWBJ4Drx7%2FHN4hTdKU0ahsbgz4OzF5kovSsAkiAkJLLvbXqhdKeBJPTaht8Q0DO%2BvwtJ8497SbJsPPou%2Fkg9MIyWyMEGOqUB70dE%2B%2BiDyD00cTm5k0BcoQltmxXI0fTJqduraC9NsZI9dbRJZ1ge2Johs0vR2C4qVG38n7qVi6CUwG70hOE3pRpUr61Fl%2B0ZMIN2tsjD2qHYvT9GBn5zqe4cglNb1nxFdyhp4WTsH53wWHuLiW94ieosXBq5j%2Bl5beW5SaZJ7MvEQV8WiI8R1PfAAUnsvOujjGHFmwGrRt6jyPmG9%2Fx6bgOUCNLD&X-Amz-Signature=246d96f3c2351f191246670502abbae22b77d6dbed06b6e004540066edd178b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
