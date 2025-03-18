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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEWF5FX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6ZZlwJyq%2FTZMvfAf5MlBU%2FC2i6n1NWX5rEtwrNXEWUAiEA0TknqG1O6aZNhjuXB4xGO%2BLBF8kjl7WHaXQlYvMc0Fwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJrqdNjmMlfsH35yMSrcA%2FtOwtYGDjja%2FNiSudWpj%2FeJeTOSbGnblAziw6WDxyQfm61d3txL1qf2mxdn%2FtzD2ifXDj4IrZUggiTB6gYPpcK4lyehQXqLDNz%2FPjbTNwBfeu%2BN6WBPLsKyL%2B8ho38pLjsLLdu6LdUsSixyeyykoH2fiX7VK4hL96tJY61xncY%2F7iTNxWx4duHiywjTArQi8s%2BopkXlCaxgdsD8sSEMIWc2kxqeKk6Cg9peOLrEVA0qZIOZKDWQa2rErbLm1gwb%2F5ftJCIN9xGcCSgoi08Ux4wKOg2PVjar0HalzvyL5S48GGHFP%2BLjsP3ugFw%2BCrpKQWA9q9JU7MTUK98Ef9PuRGVe%2FvACq3z67ppEG7KEdxjYeeTNxGYQtAcCG%2FC56pi4tjjdFvPfgajIzcfYZ%2FxuKjls6X45w1bzAgchgVWAYtXLihx4jEAG51aKwfvwssOk71qQX0h4a2iXum%2FuIb1K%2FmUP4hS91jS43QrdsNQXn3GdJ0spbgaGFXdr6qONa9se8O41ZbthCSHHTJlzoWoErhpLQf7Nsq2YmIfBfdroA%2Fgp6EDkaWkbCwNXQIgjwSgPyr9NmixdYGHI4QiY%2Bb%2BomZf8KIUusomaQNAJ6jhsIzGkRBCVuRm46ApkJ7oFMKLK474GOqUBc%2BvlnKa%2FVzlKQvSjmp7XRG4P2Uw7x205lyThH5lGv6I%2F2gUiytnS8Cm7E7ybupNfcquvq6XA28TCxktbSG9OI3eFw4EeZnuluLteOPPbzTQBZpxmlOdpvrCzfCdkTWgyrX1l76nFC6YuKF1y5XWRsHXku268s4sVf7xetiDv0GcvbSpJ%2FxsoKzbgZ4T597LgRRcrwzrCJ2rOdbZmPrhLXUYiVaui&X-Amz-Signature=9dcbb8e2c6a20588fc16b3fed0672a9bbb36121397a43f1cbd5ee40ff045563e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEWF5FX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6ZZlwJyq%2FTZMvfAf5MlBU%2FC2i6n1NWX5rEtwrNXEWUAiEA0TknqG1O6aZNhjuXB4xGO%2BLBF8kjl7WHaXQlYvMc0Fwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJrqdNjmMlfsH35yMSrcA%2FtOwtYGDjja%2FNiSudWpj%2FeJeTOSbGnblAziw6WDxyQfm61d3txL1qf2mxdn%2FtzD2ifXDj4IrZUggiTB6gYPpcK4lyehQXqLDNz%2FPjbTNwBfeu%2BN6WBPLsKyL%2B8ho38pLjsLLdu6LdUsSixyeyykoH2fiX7VK4hL96tJY61xncY%2F7iTNxWx4duHiywjTArQi8s%2BopkXlCaxgdsD8sSEMIWc2kxqeKk6Cg9peOLrEVA0qZIOZKDWQa2rErbLm1gwb%2F5ftJCIN9xGcCSgoi08Ux4wKOg2PVjar0HalzvyL5S48GGHFP%2BLjsP3ugFw%2BCrpKQWA9q9JU7MTUK98Ef9PuRGVe%2FvACq3z67ppEG7KEdxjYeeTNxGYQtAcCG%2FC56pi4tjjdFvPfgajIzcfYZ%2FxuKjls6X45w1bzAgchgVWAYtXLihx4jEAG51aKwfvwssOk71qQX0h4a2iXum%2FuIb1K%2FmUP4hS91jS43QrdsNQXn3GdJ0spbgaGFXdr6qONa9se8O41ZbthCSHHTJlzoWoErhpLQf7Nsq2YmIfBfdroA%2Fgp6EDkaWkbCwNXQIgjwSgPyr9NmixdYGHI4QiY%2Bb%2BomZf8KIUusomaQNAJ6jhsIzGkRBCVuRm46ApkJ7oFMKLK474GOqUBc%2BvlnKa%2FVzlKQvSjmp7XRG4P2Uw7x205lyThH5lGv6I%2F2gUiytnS8Cm7E7ybupNfcquvq6XA28TCxktbSG9OI3eFw4EeZnuluLteOPPbzTQBZpxmlOdpvrCzfCdkTWgyrX1l76nFC6YuKF1y5XWRsHXku268s4sVf7xetiDv0GcvbSpJ%2FxsoKzbgZ4T597LgRRcrwzrCJ2rOdbZmPrhLXUYiVaui&X-Amz-Signature=2c6a9513dd3e5d34774fa55e3bc841dd525c867be1938cedf8871c71d9a874dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
