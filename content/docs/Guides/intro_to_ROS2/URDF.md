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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q7HGR4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKFFCCoTrf7v%2BufrK%2BEPTShS2EwSehugceA3oLNYXjRAIhAIvIcKrcqAmycYDOHqeEpmEeyW6CjYa%2BJ%2BHKBscqPXYrKv8DCDAQABoMNjM3NDIzMTgzODA1IgzER54S5Gawwj6o3xoq3AOLYDKIBru4vFkQNOTsMsXRwhKyykDDyv0qpk0Gffc7itQeV0fZWvnWtwzQDgbDtLEmypelWevb5XCEeDaKaQAClZPNEWI9pCZVirbTNQc4PektX3%2FbDmxdEkUw0BDoz1uMF6D5fn9Yo3D2gmx2upEueaxbONEXwNAadGGAkPb5xbl7%2FfSnrqnDyuqzknW0Lwss8EI3xadWWQWgWRy%2FLSxqdFnJvaoeLxGMX%2Bkr%2Fye%2BxBuxOuUK5GtTvlYXFTLfzAMXNXlGKDgOMIRC13hTCituT8kZc7OlMpbLI4TEkWNpx7DJpiZFFId2bFgRfxiEfT%2BKArVy3ylqAu54xo%2B2gnQAcq6gWDNjlaHN8eKa0uIYw4bXtFS%2BoCB8BxomErASVQcUjfdXGorl7Wl269twJwWIC15hQAnTkrTEpUZV%2FblVSZO96KRrhi62%2BAJFT8x%2FHN7a2Yk%2FMCqTU16vr%2Bluq5ViH09ibzEasN%2B4TpW2L7Fz%2FklgWT5C9x9Zfdz9BIuP%2F6oRmfBPeE2x4NFt2ZNe8fUNUlwDqSt%2FftjHpGPEQpRa%2FatnxqsLFRrli3Dw5kb7RQN8lN%2BfIFZV7BeKfhW6hGHxIWNhAcYEzeBt3Gu8bwEz0aIZ%2FaKADNJHrP5bHjCenPK9BjqkAQVpqjeOxsdF4avJZT6ge8WrT4YVPdb5kJtdS2BW%2FMVitPtI4SHQBH1BVKPaaLwtk5aiLW%2BDaGBdJLl3SGyoeYlldpGSShZS9rQzQY5O4AWptrHEJW4GA9HqqTXHqZSHaeO2w8i%2BnqglVoBaeBLuAeZG83bX6IEKtu%2FRZ4Q3kDtSfyIneQxhsZ4IUBluobjCszUtcE%2FOLQiVto3b0EjXoDONGdct&X-Amz-Signature=8c5326dda3406b6e39d9b8521e3480ad683b35db0eaca869f48afeb9e4f4f82e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q7HGR4I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKFFCCoTrf7v%2BufrK%2BEPTShS2EwSehugceA3oLNYXjRAIhAIvIcKrcqAmycYDOHqeEpmEeyW6CjYa%2BJ%2BHKBscqPXYrKv8DCDAQABoMNjM3NDIzMTgzODA1IgzER54S5Gawwj6o3xoq3AOLYDKIBru4vFkQNOTsMsXRwhKyykDDyv0qpk0Gffc7itQeV0fZWvnWtwzQDgbDtLEmypelWevb5XCEeDaKaQAClZPNEWI9pCZVirbTNQc4PektX3%2FbDmxdEkUw0BDoz1uMF6D5fn9Yo3D2gmx2upEueaxbONEXwNAadGGAkPb5xbl7%2FfSnrqnDyuqzknW0Lwss8EI3xadWWQWgWRy%2FLSxqdFnJvaoeLxGMX%2Bkr%2Fye%2BxBuxOuUK5GtTvlYXFTLfzAMXNXlGKDgOMIRC13hTCituT8kZc7OlMpbLI4TEkWNpx7DJpiZFFId2bFgRfxiEfT%2BKArVy3ylqAu54xo%2B2gnQAcq6gWDNjlaHN8eKa0uIYw4bXtFS%2BoCB8BxomErASVQcUjfdXGorl7Wl269twJwWIC15hQAnTkrTEpUZV%2FblVSZO96KRrhi62%2BAJFT8x%2FHN7a2Yk%2FMCqTU16vr%2Bluq5ViH09ibzEasN%2B4TpW2L7Fz%2FklgWT5C9x9Zfdz9BIuP%2F6oRmfBPeE2x4NFt2ZNe8fUNUlwDqSt%2FftjHpGPEQpRa%2FatnxqsLFRrli3Dw5kb7RQN8lN%2BfIFZV7BeKfhW6hGHxIWNhAcYEzeBt3Gu8bwEz0aIZ%2FaKADNJHrP5bHjCenPK9BjqkAQVpqjeOxsdF4avJZT6ge8WrT4YVPdb5kJtdS2BW%2FMVitPtI4SHQBH1BVKPaaLwtk5aiLW%2BDaGBdJLl3SGyoeYlldpGSShZS9rQzQY5O4AWptrHEJW4GA9HqqTXHqZSHaeO2w8i%2BnqglVoBaeBLuAeZG83bX6IEKtu%2FRZ4Q3kDtSfyIneQxhsZ4IUBluobjCszUtcE%2FOLQiVto3b0EjXoDONGdct&X-Amz-Signature=0d7d516e153418e963d693409805f34547974d0084ae7ef4c57c57c11449d3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
