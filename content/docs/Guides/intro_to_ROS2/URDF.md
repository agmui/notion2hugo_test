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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQHQIRL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFZDK1IvdVwEPadPHhtIefY3WEvPIkFvYV1GhVQZsEAiAz5fCAOO9Y7s%2FKOyjj8LWT2PL64SuKFpOC7gKzd86JeCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxGBpNmDCnKh%2Fu7xKtwDmkajaB3XhF7GuVsFhDanfZbhOmFPOQcJt7SJgcaG6M9eZVqcRQrlsQJ09XvPgO5qCowhzc5N9hVW39iluowTh91kqDckgN5rvX%2BKT62Zop7cwftYRIVEyb1kiV6qcAPoIsNjnBr27sF862HkPuDppWzkQ%2BNqbUmRPZuE0vCwn6jrP5IPBjB6iAs80S1nNhWX4HFW1QsU3W8VFN8ySLDRdnGpOfxx7KS7%2BUB%2B9rePd8Z7YNey28nhv%2BoYTgDy0H3QqLE4IwoijaFDEkt0pnAMfyQH8R9q%2BXLkCMYDNLKSNQrPBw1pYfe20MeAYNq4ETvkIaiLnMYPlNUhWBTLO0GXBvcFm4SEr7hP160YojvPdTkPig3syl2Sf%2B9StLq17SR8TuQ4OsEcpdeqz57TbmVsVPcgzeg89LMM62rVWsFA5P4aJNaiO2J6iVCOTXmTQHkkOTi19pEEwz8TeTHy2KwHAjyh7fwRzrmjmQRqqLUroWGgL8VnaL%2BPA4gby6OXj3%2Fb8otCzGwvcuhg%2FGgzZZcf0XecGOYr6Hk5qFzZ51xde0aItPY6T0mtsOQy5JyDrK9LN7isX2iVQWcykh%2BCjbft2lm4KYlyMwKZFO3hvWN2qJZqrap7XUBlfSWkp48wlKbCwwY6pgFfUHTr7AoXZ28EcMu92nv5Fe5QUMGi%2B6xMud%2Fxp3OG5lmSFwVVUxtR5%2FDgKPOvoxE1%2BTvqyuZYq1HXA4AFPX8HoGmQHRS7EtgOH96uB%2BSYbzucwLHWFEjp8NKjLaDDUBqtG2steth%2BdZEFT0h0PPqdYmJBX28tXUjiVqsD8QhffzGAkXrW5IwAfHDjjP2%2BNYZo5P9o1mrNmKq0wyx1C1O%2BxE7eVMRr&X-Amz-Signature=48f76069796538514df1ca73784a643691e00438fc71cb7211bc735c03435466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQHQIRL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLFZDK1IvdVwEPadPHhtIefY3WEvPIkFvYV1GhVQZsEAiAz5fCAOO9Y7s%2FKOyjj8LWT2PL64SuKFpOC7gKzd86JeCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxGBpNmDCnKh%2Fu7xKtwDmkajaB3XhF7GuVsFhDanfZbhOmFPOQcJt7SJgcaG6M9eZVqcRQrlsQJ09XvPgO5qCowhzc5N9hVW39iluowTh91kqDckgN5rvX%2BKT62Zop7cwftYRIVEyb1kiV6qcAPoIsNjnBr27sF862HkPuDppWzkQ%2BNqbUmRPZuE0vCwn6jrP5IPBjB6iAs80S1nNhWX4HFW1QsU3W8VFN8ySLDRdnGpOfxx7KS7%2BUB%2B9rePd8Z7YNey28nhv%2BoYTgDy0H3QqLE4IwoijaFDEkt0pnAMfyQH8R9q%2BXLkCMYDNLKSNQrPBw1pYfe20MeAYNq4ETvkIaiLnMYPlNUhWBTLO0GXBvcFm4SEr7hP160YojvPdTkPig3syl2Sf%2B9StLq17SR8TuQ4OsEcpdeqz57TbmVsVPcgzeg89LMM62rVWsFA5P4aJNaiO2J6iVCOTXmTQHkkOTi19pEEwz8TeTHy2KwHAjyh7fwRzrmjmQRqqLUroWGgL8VnaL%2BPA4gby6OXj3%2Fb8otCzGwvcuhg%2FGgzZZcf0XecGOYr6Hk5qFzZ51xde0aItPY6T0mtsOQy5JyDrK9LN7isX2iVQWcykh%2BCjbft2lm4KYlyMwKZFO3hvWN2qJZqrap7XUBlfSWkp48wlKbCwwY6pgFfUHTr7AoXZ28EcMu92nv5Fe5QUMGi%2B6xMud%2Fxp3OG5lmSFwVVUxtR5%2FDgKPOvoxE1%2BTvqyuZYq1HXA4AFPX8HoGmQHRS7EtgOH96uB%2BSYbzucwLHWFEjp8NKjLaDDUBqtG2steth%2BdZEFT0h0PPqdYmJBX28tXUjiVqsD8QhffzGAkXrW5IwAfHDjjP2%2BNYZo5P9o1mrNmKq0wyx1C1O%2BxE7eVMRr&X-Amz-Signature=8d0741172ec1505c10a1efbe1aea299d4a3f5503371e77f6994a1b86b2e827d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
