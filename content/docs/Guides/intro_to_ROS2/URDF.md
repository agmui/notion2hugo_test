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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5INM6M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEH9bUvxLOdWIzOBkYrMUx2bfKYFN5qpCdOtDuChidHAiBcgVm9NDaem2MsT%2FQrgE48zDKQmbs2EyqmwR5EM3JTEyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGfBW6L6EdJkTMZlUKtwDTen9%2FLtH9AfJPnF4TMw4wN9fJNvNHbAA5K6erhO6EXjh91TwWyX3wuSILGse832nSmVRWXGhhcSShk20ndlcXFBdDrz6uyxfDOxaXSq4ejkt4EiI7Y5WFvzvWDOVQGSkwzDBcd0YtHh%2BqLkvQYaXq4Fh50je%2F8I5Sb14MFyVZUUhDPk7iWzPFUQDZkvNlzvG%2BlVN1KOWWQkfuGQRYnxfwR%2FxrBOYKZ%2FRoZIl4qJ%2B4IFrNFthEcmea%2FfNVEzjaeEvCOJcmTNEz%2FHmbvwlLstS2PzVgP4fJVbXagq6jqy%2Bx5LogB88se7G5mp%2Beu4Sv0tjDGmSn37EGfuk%2FBbeVLKxVv%2Bdq7Obbrfkx79uo6N5SOkwo%2FFyBGRW5duMoxl97TiBfQvWdzoQuLePLOMFaJllSpTPG7gkwmH%2BQVi7pN7oeivme0lD%2F4pvRxwvc2hY2tpsGb7022GborLO2irL8sqrtm1ek1lqIpt6AGeM4srJPOHX8GxFfeJbLi1uKW%2F8EeGfck5yn6x4SkKfJ67cFyNUcIkpeCOrPkkB8eB9Do%2BcqNI0UFYFHffy%2BGF2Ym%2Fxe4ULvSkL6NJ44draqLq5EMVoQvi%2FduGpZnrG5j6oMEUmQPGpov2is3TzmYwxU38whcSgwQY6pgGiI1tMGya%2By7fZdSgPwnfbLVi89c4%2BdHeDJK5Dk91KJB6etQWmd8sgFUWWrY4sIKxKHp3lQi%2BW%2Fp34i29xjCj%2FDKNao9FPoR0G8wmhz%2BHh%2F6cyLLMa7dFhoLYI26m%2FVJnJnCi4wlF4wCKGyJHPwvp3Sv0FlrZTkPrtIlJtNaacQNi9dCiOsGF1od2s4vuugeb68pD%2FEnaKxC%2FtvKaDkKc6eZIajPiO&X-Amz-Signature=d8f4fceb2f4ce971648ab998f28dc9f2d85e5090928cf501ffe54f919a092184&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5INM6M%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEH9bUvxLOdWIzOBkYrMUx2bfKYFN5qpCdOtDuChidHAiBcgVm9NDaem2MsT%2FQrgE48zDKQmbs2EyqmwR5EM3JTEyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMGfBW6L6EdJkTMZlUKtwDTen9%2FLtH9AfJPnF4TMw4wN9fJNvNHbAA5K6erhO6EXjh91TwWyX3wuSILGse832nSmVRWXGhhcSShk20ndlcXFBdDrz6uyxfDOxaXSq4ejkt4EiI7Y5WFvzvWDOVQGSkwzDBcd0YtHh%2BqLkvQYaXq4Fh50je%2F8I5Sb14MFyVZUUhDPk7iWzPFUQDZkvNlzvG%2BlVN1KOWWQkfuGQRYnxfwR%2FxrBOYKZ%2FRoZIl4qJ%2B4IFrNFthEcmea%2FfNVEzjaeEvCOJcmTNEz%2FHmbvwlLstS2PzVgP4fJVbXagq6jqy%2Bx5LogB88se7G5mp%2Beu4Sv0tjDGmSn37EGfuk%2FBbeVLKxVv%2Bdq7Obbrfkx79uo6N5SOkwo%2FFyBGRW5duMoxl97TiBfQvWdzoQuLePLOMFaJllSpTPG7gkwmH%2BQVi7pN7oeivme0lD%2F4pvRxwvc2hY2tpsGb7022GborLO2irL8sqrtm1ek1lqIpt6AGeM4srJPOHX8GxFfeJbLi1uKW%2F8EeGfck5yn6x4SkKfJ67cFyNUcIkpeCOrPkkB8eB9Do%2BcqNI0UFYFHffy%2BGF2Ym%2Fxe4ULvSkL6NJ44draqLq5EMVoQvi%2FduGpZnrG5j6oMEUmQPGpov2is3TzmYwxU38whcSgwQY6pgGiI1tMGya%2By7fZdSgPwnfbLVi89c4%2BdHeDJK5Dk91KJB6etQWmd8sgFUWWrY4sIKxKHp3lQi%2BW%2Fp34i29xjCj%2FDKNao9FPoR0G8wmhz%2BHh%2F6cyLLMa7dFhoLYI26m%2FVJnJnCi4wlF4wCKGyJHPwvp3Sv0FlrZTkPrtIlJtNaacQNi9dCiOsGF1od2s4vuugeb68pD%2FEnaKxC%2FtvKaDkKc6eZIajPiO&X-Amz-Signature=10c0eb8a013b72d3529e4f5b76c95bdb104f2077598d3be3f3d7846953a636c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
