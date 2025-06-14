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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQ5MA7Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQClCMt4E1%2BU4iDf1Xru3Ja9%2FXRG8XxAU7Y0MoDGTZcMfgIhAOWnkLaIgYzwJ73zm6ZPTboP3aP5FLMMzhMaD4PQcKQjKv8DCDUQABoMNjM3NDIzMTgzODA1IgwV9jYdEFWY6dARn%2BAq3ANv25X5K962YNP2ZyOx2ingFLjXgsObKCGyyp7CEXjOijwf8KPpMQSc%2Fpx6bAMLzY3T2OM%2B0zTLfFCPFF%2FoZmYc0jEfUhzxFHE8iytBv1Tmy6Y0vYb62pV2giLc7S8RvKRUp94qZG7TBjAM%2Faf1fM2ZxUAqDrlQyxiJ7abJ2PgpOa%2FONsHXWZmZU%2BYMw6%2B%2BrbHpeZNtr7Q5SnsPWTffWr5SoenUe7qgTN9igVxPl0IvCVi4JgcSUM3ayI9T3eqWg4eML%2BFHqCFp7z0N4ZudXZTYpnQz7%2FJzECVkxbmM0gC073XsOXDOgDD6UTfnCfkqWfzCQKGc7fGaFNgw5h4gtGEhig4cy%2F5lpy0Vwb4i6W0xUiV3Jkl7KU1P%2Bd6YMZoHEDrz6IgrqlrducS%2Bic%2F1IhvAulggxxPgyvWf%2BEdtMJJCv9HvAnSg%2BA5f%2BpdVTG4OsLdr52Ctb734zgPfLMGdlkpm8VaIvNUpjr%2Fiioqqa5%2Bpx8Kbyb7ufUdhu2ZWAjL9xjBw%2BKLgkLRBRXSPXPJyEnC6%2BGCfFI52H7kuIH%2BJR%2FytKsogbG%2FW30S5Doqu%2FX%2BOERK8NoRwTz9czKS0YvxdvdH3fEW14zNyzzZaLuQoVxh1CLTiKKZAdXBHehRRMDCbpbfCBjqkAfHeNter%2FjvxcjS%2BaiykZiy3iZed1iuXu8W5DbnFfsShh0%2BvnsP9RwloRNwE3hWQVO6%2F5Vh2eVH1OpluZe6ba8RyfRvaSJyFdDzqCrvADd8%2FjS54phkGGtvAsNSN80TMkggc4%2BHGZ6AEhBFe0YI6oBUbD3VFSeBM2YoWUiegK6KUQh74jGCo9WUwfSgnExP7Wy3bG%2FoIdzbdGjIpVRnfRX485CKt&X-Amz-Signature=66f798bb558935ec82594458da161d4d4a72c3a206273ef596a6301cd5901cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQ5MA7Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQClCMt4E1%2BU4iDf1Xru3Ja9%2FXRG8XxAU7Y0MoDGTZcMfgIhAOWnkLaIgYzwJ73zm6ZPTboP3aP5FLMMzhMaD4PQcKQjKv8DCDUQABoMNjM3NDIzMTgzODA1IgwV9jYdEFWY6dARn%2BAq3ANv25X5K962YNP2ZyOx2ingFLjXgsObKCGyyp7CEXjOijwf8KPpMQSc%2Fpx6bAMLzY3T2OM%2B0zTLfFCPFF%2FoZmYc0jEfUhzxFHE8iytBv1Tmy6Y0vYb62pV2giLc7S8RvKRUp94qZG7TBjAM%2Faf1fM2ZxUAqDrlQyxiJ7abJ2PgpOa%2FONsHXWZmZU%2BYMw6%2B%2BrbHpeZNtr7Q5SnsPWTffWr5SoenUe7qgTN9igVxPl0IvCVi4JgcSUM3ayI9T3eqWg4eML%2BFHqCFp7z0N4ZudXZTYpnQz7%2FJzECVkxbmM0gC073XsOXDOgDD6UTfnCfkqWfzCQKGc7fGaFNgw5h4gtGEhig4cy%2F5lpy0Vwb4i6W0xUiV3Jkl7KU1P%2Bd6YMZoHEDrz6IgrqlrducS%2Bic%2F1IhvAulggxxPgyvWf%2BEdtMJJCv9HvAnSg%2BA5f%2BpdVTG4OsLdr52Ctb734zgPfLMGdlkpm8VaIvNUpjr%2Fiioqqa5%2Bpx8Kbyb7ufUdhu2ZWAjL9xjBw%2BKLgkLRBRXSPXPJyEnC6%2BGCfFI52H7kuIH%2BJR%2FytKsogbG%2FW30S5Doqu%2FX%2BOERK8NoRwTz9czKS0YvxdvdH3fEW14zNyzzZaLuQoVxh1CLTiKKZAdXBHehRRMDCbpbfCBjqkAfHeNter%2FjvxcjS%2BaiykZiy3iZed1iuXu8W5DbnFfsShh0%2BvnsP9RwloRNwE3hWQVO6%2F5Vh2eVH1OpluZe6ba8RyfRvaSJyFdDzqCrvADd8%2FjS54phkGGtvAsNSN80TMkggc4%2BHGZ6AEhBFe0YI6oBUbD3VFSeBM2YoWUiegK6KUQh74jGCo9WUwfSgnExP7Wy3bG%2FoIdzbdGjIpVRnfRX485CKt&X-Amz-Signature=8f7c354819af43921983ce77579c21bc6fcf7bf5103d2d9856b9fa07e0bfebb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
