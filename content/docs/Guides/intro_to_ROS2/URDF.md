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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3JA3RM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLnJuDTIqckjS7%2B7VglCFxhZZHNcwzJubmVYmEDueagIhALbPDMMV6BFNKXoXw2ov1zx4xNEnKmL3mlofohGOllRBKv8DCBcQABoMNjM3NDIzMTgzODA1IgxG6koOWEEAx5ItkCAq3APPywhfPp2BCamOfh3zDgWdLiTg73QGpuRgaLEklPFgcfFqkL0%2BNf40rsZh9Chr1OWMvFs5Pcvb%2F4UGS98U9VoYHfqV8yPGmbkXKpnj2hEMwNapjBcqs8tjMzHLacWnjBR0P1eciZfgcSkHo0YNHe4puGPo52MJt5Gq9RTQUHbb3C0%2FElFDDyyFNaxrATt96vBkzQIC2boWJs258fOtzRqOTAQNGpdbxWoHOqS2XuArgSYR7RlCAu%2FbfAFN8Q2Vw%2FphhqfUt3zXSrYbz%2BmuhhXzO0Vsqt0bU3DDqqyMsKmx7RZTRdri8HkbSlDVjIw%2FyHNBKrJ5mk%2B8wSusxb3FyVYSL0NTfVV0ewr7JOKsxvNrVM5xQ%2FPmy5DKMXhrh9NiAmVj2cAGXRzO7Tb4BflQ5WacoG7D6etfHt2VP7Gg9B2xMLUwiKcYxcTLCU%2FnnSVrIKyl7SOLpW3b8rPfHdGtd4qDN3vroT2xpPyQewJDkFAskHjMIEQgDB2pZdj9rwSV0zAPgNOssTaFZB3F8JBuytmJ6mP5XLfhiX%2BvWf5pZzaNsFJo5rfVLTnFgoSPmzUOudOfTxtaMbU6dSTkFYZmJWL0U%2FM%2B16qZ2O%2FbjUk6IolM4%2B%2Bka1YiY2lgYXVmtzDxjoO9BjqkAQJTyI1hEiRAVZjSntCef3n1ZhZHna%2FTaV6hWFxXX8mfqQmeXCnSOfCSn2WEEpFuUz3hugY2OcytdafekcpxPpHM2ZfmVv6ndpJ%2FHNF1e%2Br%2FxHBxXVwvVdobWkrx61Jhjf4IiL4YvQrj1XLTPGHThNv9i7u2jjWDInE%2FMONV0GpgbudQJ8D4r3f5ugQwcLzW%2Bx9pcaedmcg8oTE0VXl9rCd8L0tb&X-Amz-Signature=c536ad9f00a82bad6d2243782ddf413a4bb6adcfd81e4418fa592fc970443531&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3JA3RM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPLnJuDTIqckjS7%2B7VglCFxhZZHNcwzJubmVYmEDueagIhALbPDMMV6BFNKXoXw2ov1zx4xNEnKmL3mlofohGOllRBKv8DCBcQABoMNjM3NDIzMTgzODA1IgxG6koOWEEAx5ItkCAq3APPywhfPp2BCamOfh3zDgWdLiTg73QGpuRgaLEklPFgcfFqkL0%2BNf40rsZh9Chr1OWMvFs5Pcvb%2F4UGS98U9VoYHfqV8yPGmbkXKpnj2hEMwNapjBcqs8tjMzHLacWnjBR0P1eciZfgcSkHo0YNHe4puGPo52MJt5Gq9RTQUHbb3C0%2FElFDDyyFNaxrATt96vBkzQIC2boWJs258fOtzRqOTAQNGpdbxWoHOqS2XuArgSYR7RlCAu%2FbfAFN8Q2Vw%2FphhqfUt3zXSrYbz%2BmuhhXzO0Vsqt0bU3DDqqyMsKmx7RZTRdri8HkbSlDVjIw%2FyHNBKrJ5mk%2B8wSusxb3FyVYSL0NTfVV0ewr7JOKsxvNrVM5xQ%2FPmy5DKMXhrh9NiAmVj2cAGXRzO7Tb4BflQ5WacoG7D6etfHt2VP7Gg9B2xMLUwiKcYxcTLCU%2FnnSVrIKyl7SOLpW3b8rPfHdGtd4qDN3vroT2xpPyQewJDkFAskHjMIEQgDB2pZdj9rwSV0zAPgNOssTaFZB3F8JBuytmJ6mP5XLfhiX%2BvWf5pZzaNsFJo5rfVLTnFgoSPmzUOudOfTxtaMbU6dSTkFYZmJWL0U%2FM%2B16qZ2O%2FbjUk6IolM4%2B%2Bka1YiY2lgYXVmtzDxjoO9BjqkAQJTyI1hEiRAVZjSntCef3n1ZhZHna%2FTaV6hWFxXX8mfqQmeXCnSOfCSn2WEEpFuUz3hugY2OcytdafekcpxPpHM2ZfmVv6ndpJ%2FHNF1e%2Br%2FxHBxXVwvVdobWkrx61Jhjf4IiL4YvQrj1XLTPGHThNv9i7u2jjWDInE%2FMONV0GpgbudQJ8D4r3f5ugQwcLzW%2Bx9pcaedmcg8oTE0VXl9rCd8L0tb&X-Amz-Signature=067ae21f4760d6bf9dac35a6c57cf0c2c80118d0ab1698ddce54ae6dd87e4e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
