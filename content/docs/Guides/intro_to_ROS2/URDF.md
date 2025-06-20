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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKDLH5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfrQ0%2FU6lJVKvw3vK4hQ55WHbopJagy0zxYRePK8CgcAiA%2Fe7laISLemdmc%2BdmQpCo513CDOXqdeY9zA%2ByFBCxPgyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMugfuAg200ugpNwOrKtwDI3GqJullhLIDLTs4RxCy6HBynhP6PFRsVgAsq9c4y5Zx%2FKucuPNZJJtsb9cxGI0QinszMHeWrixi4zKVsINMfapHIMrCrTSrmuGTnxOi67580CmrYe441%2Bt9S8T9yOuRap1Sk2Rbjf9b40SwgeMZ3gH34n4kvKgeB%2FReivG25jyBvP1ypit5pbcqO9Lptne4GqJvfMOpfvyukmSd%2FpIrlBlosba6IlRppELPzyTqH9r%2FcnLq43%2B2lT521Xdc8RhGwI73SRHRizvZgt0tept%2FyQXIybUA8Kl2Lj5pM5d3h7ipivX21dK%2FhH%2BVY2LA9pjr0wr8HfswwN6fCXaysbc9hHm9iKifURrS0akSNvPh7NooJw24wPKDp6Z4V6NpxNtfkaAQSQc5P09qtQb8uSf6Jwuhvb68YAATrsP54TkuBoTiUogF0m71YX0adkQBMjVW1Pb%2BRAFf0iitfn3hi0ICTFp4zOShwJ%2BSNNS2ohBpt9OZPhQ%2F2gOND0buP6BATTcmhuEt59t5aVG8ZSOVrNghjvuxtO%2B%2FnHGO7hnOjSlmsXgbcFbzsY9fidvi9%2BWPf77M5C30nT3YKLfYB5%2Bk4buUrPTZsJ1W9UJXZug2jJBZYW0lRBrd%2F2cQCMNNnWIwpcHUwgY6pgHveCCqfAIdFAD47GOnwUxYUWJk2HJAcRsh9Excpd5afAWsdM%2ByxZTxPhD4R55%2FSGwp90djwczjE0Nc45yml4mJnEj7tD0%2BpOkMFXdRTxDBMn3IQ7txyqhPF%2BQdVydhYlsOYlhDc5TiRKaeLM08A17rCjTmg%2F%2FynxAIE2r0FaFuni3o2lfgL7j0NaK0%2FDgOCVY2mwAKNlozSCDw8kPo1SQwr8Y4NeAl&X-Amz-Signature=f383db6d2ec9ef5aa098dc24d86798b946f166593a75e1b780f1f18ede066207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKDLH5V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfrQ0%2FU6lJVKvw3vK4hQ55WHbopJagy0zxYRePK8CgcAiA%2Fe7laISLemdmc%2BdmQpCo513CDOXqdeY9zA%2ByFBCxPgyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMugfuAg200ugpNwOrKtwDI3GqJullhLIDLTs4RxCy6HBynhP6PFRsVgAsq9c4y5Zx%2FKucuPNZJJtsb9cxGI0QinszMHeWrixi4zKVsINMfapHIMrCrTSrmuGTnxOi67580CmrYe441%2Bt9S8T9yOuRap1Sk2Rbjf9b40SwgeMZ3gH34n4kvKgeB%2FReivG25jyBvP1ypit5pbcqO9Lptne4GqJvfMOpfvyukmSd%2FpIrlBlosba6IlRppELPzyTqH9r%2FcnLq43%2B2lT521Xdc8RhGwI73SRHRizvZgt0tept%2FyQXIybUA8Kl2Lj5pM5d3h7ipivX21dK%2FhH%2BVY2LA9pjr0wr8HfswwN6fCXaysbc9hHm9iKifURrS0akSNvPh7NooJw24wPKDp6Z4V6NpxNtfkaAQSQc5P09qtQb8uSf6Jwuhvb68YAATrsP54TkuBoTiUogF0m71YX0adkQBMjVW1Pb%2BRAFf0iitfn3hi0ICTFp4zOShwJ%2BSNNS2ohBpt9OZPhQ%2F2gOND0buP6BATTcmhuEt59t5aVG8ZSOVrNghjvuxtO%2B%2FnHGO7hnOjSlmsXgbcFbzsY9fidvi9%2BWPf77M5C30nT3YKLfYB5%2Bk4buUrPTZsJ1W9UJXZug2jJBZYW0lRBrd%2F2cQCMNNnWIwpcHUwgY6pgHveCCqfAIdFAD47GOnwUxYUWJk2HJAcRsh9Excpd5afAWsdM%2ByxZTxPhD4R55%2FSGwp90djwczjE0Nc45yml4mJnEj7tD0%2BpOkMFXdRTxDBMn3IQ7txyqhPF%2BQdVydhYlsOYlhDc5TiRKaeLM08A17rCjTmg%2F%2FynxAIE2r0FaFuni3o2lfgL7j0NaK0%2FDgOCVY2mwAKNlozSCDw8kPo1SQwr8Y4NeAl&X-Amz-Signature=dbabb3b11a35d99240fe2db448f5dcd5bb6cd87709a3b6cc2f3c321d4b97f806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
