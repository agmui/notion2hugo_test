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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVM5BPI2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnw7s2L%2FTTdyqJk5UkyHgvaBtXjbily0k7kcAuJL7oQIhANwxTw6mkhZFFegkEQCFNBgXbSmkDLoV0XTncJIS0rD6KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsMTQxGrl8HwETEgkq3AMYaA8eghNTCdiMka5z3snRH46de6tF%2FImUUbbEnq%2BtvG4A%2B8Ei75sK9k1O%2F2jM21Ds36QzIOs3%2F5qLr0OMLao6WV4VtrZ2BNVcgoPfRwehm4HFBI%2FIn8eMjWMyLCce3aIKcDWxQwMSa5vJW7izjCqtTIBLbavA4V9zLu9%2Bzuf4qIIW5H%2BccMX9HGh4XALXvQu%2FhSrXw6m19IHu3rk9D3Fp%2FCoOAmdYOmDkJxJFiAxwEcBjRPIeEK6Vsh8b84MRT4qtoZKsn05odpa032bpgwCzFcEysFS4SHkmJuATMqN1NkXH3F2IsWzhMB2z1Z1p3P53CI6ho6IGqmo%2Bc2ZMc0SECz0tuc92QfPO4vpecBDE0Z2M01fjkdQU5e50Zxt2xuP8GMVpMQ71r0sJwNwUdrNP9OApnwBNQfLQZPrJaTUdsNRF168jGorg5I%2Bl3yF7eKKBeSKNvGk1NDInsST8hE0rA3%2BINENDHdnMfLl5jrkJaaA4im9rYSNqqa6HDEodCHppQddLv6Zkdwd60XEy3QPZ8LvCPJdNu0C%2F0zex95Lb0QHU6LZ9Tm8sCKANl4Zov8pSCex4ILiEEtdi7aMK%2B0osdHJUaoE6djk4%2FR%2BSxIkDzRXotl0bHVRQCrZ5oDDi1cXDBjqkAbMelBpqJbb0tFAA6WpPf5wN6yRJQ6lVPewNbOP5S4j%2FX2E%2FY%2FceVrjuCTydO%2F%2BF91GeVOMt1DU%2BjPeaNiVrMRZGPo%2FTZ%2BUsndesGF87vJmMtLsbVr1DMIam4HHI68lOYkENLTYPM4UYwUn2BWjFxHerLaz6%2FSfZgXpPJ2rK7uZB0MV9n8r2YTaL%2BBVCUxwmFUKfT1WbffTFXn8dlsy1icenqlsv&X-Amz-Signature=b35c74fa775bd37afb71ead5a436c04081dfb8c8da1bd9f001823eb7b19cca17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVM5BPI2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnw7s2L%2FTTdyqJk5UkyHgvaBtXjbily0k7kcAuJL7oQIhANwxTw6mkhZFFegkEQCFNBgXbSmkDLoV0XTncJIS0rD6KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsMTQxGrl8HwETEgkq3AMYaA8eghNTCdiMka5z3snRH46de6tF%2FImUUbbEnq%2BtvG4A%2B8Ei75sK9k1O%2F2jM21Ds36QzIOs3%2F5qLr0OMLao6WV4VtrZ2BNVcgoPfRwehm4HFBI%2FIn8eMjWMyLCce3aIKcDWxQwMSa5vJW7izjCqtTIBLbavA4V9zLu9%2Bzuf4qIIW5H%2BccMX9HGh4XALXvQu%2FhSrXw6m19IHu3rk9D3Fp%2FCoOAmdYOmDkJxJFiAxwEcBjRPIeEK6Vsh8b84MRT4qtoZKsn05odpa032bpgwCzFcEysFS4SHkmJuATMqN1NkXH3F2IsWzhMB2z1Z1p3P53CI6ho6IGqmo%2Bc2ZMc0SECz0tuc92QfPO4vpecBDE0Z2M01fjkdQU5e50Zxt2xuP8GMVpMQ71r0sJwNwUdrNP9OApnwBNQfLQZPrJaTUdsNRF168jGorg5I%2Bl3yF7eKKBeSKNvGk1NDInsST8hE0rA3%2BINENDHdnMfLl5jrkJaaA4im9rYSNqqa6HDEodCHppQddLv6Zkdwd60XEy3QPZ8LvCPJdNu0C%2F0zex95Lb0QHU6LZ9Tm8sCKANl4Zov8pSCex4ILiEEtdi7aMK%2B0osdHJUaoE6djk4%2FR%2BSxIkDzRXotl0bHVRQCrZ5oDDi1cXDBjqkAbMelBpqJbb0tFAA6WpPf5wN6yRJQ6lVPewNbOP5S4j%2FX2E%2FY%2FceVrjuCTydO%2F%2BF91GeVOMt1DU%2BjPeaNiVrMRZGPo%2FTZ%2BUsndesGF87vJmMtLsbVr1DMIam4HHI68lOYkENLTYPM4UYwUn2BWjFxHerLaz6%2FSfZgXpPJ2rK7uZB0MV9n8r2YTaL%2BBVCUxwmFUKfT1WbffTFXn8dlsy1icenqlsv&X-Amz-Signature=b39c1800c8be2c93a47aba1a0fd57188b05f19dcaf5532d848a650c557a0d53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
