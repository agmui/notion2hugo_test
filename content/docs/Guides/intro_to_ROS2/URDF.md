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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4RHDTF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDELjwZbo4QSTx9do5FOm3gG%2BhPXwIaMhVdkgSLCUuY2wIhAOuB9mF0LUjvy0XDLmphzwczQaw7GNhjVxfoHftt%2Far7KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVuG3lFz3nroGAkhoq3ANE4usmPGCBzzkViYDNS5yV9uikgmEVjwJ6Ql6Im6MReBbY7T%2BhknuqljRQ1J%2FaajMNutxD6WkH1pAVYkTMXAt%2FU7pfspyC%2B3S2dfG7ln5mMZIlxXIeZp%2Buii6c%2Bd9Z7%2F2UcWkOrf6GtU3b4jkA6XuwzkEGNM5Oroxj51wEvy7tcg0AeGB8lm3gi%2BV4lyryVFJtII0oFglFh7uP4WxlP0lloqaxQSWiUbV%2BgcjnSWk1rlAk2BzRAaS9RKUx979UtRc1uwbb1JN6Lpx2rJUS4NGb2WZEeCzGK47GjrhGX2F01HsCPuPJPrys9Zia3DSg4eG9%2F35HGh%2FNkWc8mxjWRqcOQ%2BAbzlcqJZuCzLAxOIYeTNe95DQ74UBOlg91y1%2BwXmsSYQhXe8Oy1eicN4sRyTEUzxyYWkIpFcBSOCbAbcWrhEMGuLKevlm4AxhyjGU5LqBMzCCcydNSTSjnAv%2FvNqZDCGGPYgmYlUkTeFrNA6%2FW6VpcZlNpQFraffC38YqJWR4%2FUSaIUujDxjozpAjCIbpHDY3yQAk9P0ImWOFk79Bw2ZyQWcKAhJawQM4ITkwZpmDginpGElfS8u4Py0kJx4K1vDULHiSwvFXnHS7Qg0K%2FlwY8RlatG2vQT79ahTCyw5PABjqkAaMh6U0kxOCY6INYp8kmdBA%2BSOPKL%2Fr7I%2Bn5QHGhOA%2F5G4WvL%2BYxy9jxkHO6pX1Lm%2F%2Fb3RufI7FTpVb4MPk08kpJX1IJcOR4L1BkcrbNGbw95KTb2YgTUXDp4EZQ4oFCTAjYsmu2yAz%2B5QFKqsHtb%2Bv%2FhahJAr6plk0y8dqwJgUmB6EouS%2FXH2l3RQ9IAMKTd2knwth%2F3qFAdLhcQkGtCQc2f8sT&X-Amz-Signature=c0ff104684bf5ba39839db316d16bcb0873a48a340e2e04e488edd543154f5db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4RHDTF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDELjwZbo4QSTx9do5FOm3gG%2BhPXwIaMhVdkgSLCUuY2wIhAOuB9mF0LUjvy0XDLmphzwczQaw7GNhjVxfoHftt%2Far7KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVuG3lFz3nroGAkhoq3ANE4usmPGCBzzkViYDNS5yV9uikgmEVjwJ6Ql6Im6MReBbY7T%2BhknuqljRQ1J%2FaajMNutxD6WkH1pAVYkTMXAt%2FU7pfspyC%2B3S2dfG7ln5mMZIlxXIeZp%2Buii6c%2Bd9Z7%2F2UcWkOrf6GtU3b4jkA6XuwzkEGNM5Oroxj51wEvy7tcg0AeGB8lm3gi%2BV4lyryVFJtII0oFglFh7uP4WxlP0lloqaxQSWiUbV%2BgcjnSWk1rlAk2BzRAaS9RKUx979UtRc1uwbb1JN6Lpx2rJUS4NGb2WZEeCzGK47GjrhGX2F01HsCPuPJPrys9Zia3DSg4eG9%2F35HGh%2FNkWc8mxjWRqcOQ%2BAbzlcqJZuCzLAxOIYeTNe95DQ74UBOlg91y1%2BwXmsSYQhXe8Oy1eicN4sRyTEUzxyYWkIpFcBSOCbAbcWrhEMGuLKevlm4AxhyjGU5LqBMzCCcydNSTSjnAv%2FvNqZDCGGPYgmYlUkTeFrNA6%2FW6VpcZlNpQFraffC38YqJWR4%2FUSaIUujDxjozpAjCIbpHDY3yQAk9P0ImWOFk79Bw2ZyQWcKAhJawQM4ITkwZpmDginpGElfS8u4Py0kJx4K1vDULHiSwvFXnHS7Qg0K%2FlwY8RlatG2vQT79ahTCyw5PABjqkAaMh6U0kxOCY6INYp8kmdBA%2BSOPKL%2Fr7I%2Bn5QHGhOA%2F5G4WvL%2BYxy9jxkHO6pX1Lm%2F%2Fb3RufI7FTpVb4MPk08kpJX1IJcOR4L1BkcrbNGbw95KTb2YgTUXDp4EZQ4oFCTAjYsmu2yAz%2B5QFKqsHtb%2Bv%2FhahJAr6plk0y8dqwJgUmB6EouS%2FXH2l3RQ9IAMKTd2knwth%2F3qFAdLhcQkGtCQc2f8sT&X-Amz-Signature=a330699d791ba68b93db3d688ceb294ad754bdbf07308ecd477e86a450508acc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
