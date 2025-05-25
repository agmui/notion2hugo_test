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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H53JTQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE1Fo93vkqiZSFL7VWPfdTkojIFQbU%2B%2FjmpyKQqYLYRQIgUwtuGV%2FLg3wBY%2Fkig5YTWnplctyRU6tVp1xPetVHzb4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPGIeN%2FdNgH37gytQyrcA7J7ZV1p1I1DNPpwZ33Cdq6IbIpEEQWckxiLa4RBO2d9hlkkSPal%2Bcus521cDikpyECef3PeDXokIlhK1uPWXGdn7yjepd%2FauP2oPY%2Fu33AU0An%2Fm35hqvFUoocHhTUKF2t8cdimEg9RGMIVBvnKPwsgLORXMX6L4aeHKiHNC%2FqHNQs5sackatAXO9Vd7qWModlMom512LYbTHLOJiZsplfNvMymdIvwg%2FBjP6W%2BMPZGPlSN%2FKqWCd8knrnfpfUBYKJ9hX2AtKnoIU4W8f1cpZ75Wsk75WZUrQRlNXCDyatQpAOrjYzxL8aM8Ixf7hkYouc0uyhCgp0cYKbOTn6JAxQhrLOcZvxPMIvQ5NhdDeiKMwDJRGaHF2E%2F%2BMd1KzFjyPF%2Bs4L83epqXpTzhC%2F2B%2B8VtKek44TQw%2F6NITlb65rly4VLLEeV7XKf%2BC7AtoTxMzQIZYWSpY78UvFRNPrmdGxOac%2BOTRXryZmoSrOpAHQKtOUkzDyxsjUh4nPElIoJCR2jzPDil5JLQH%2F82Ch6nGljIwyAnFk%2BnvtZbQircx%2BsUaS32jK1pJu4iQuwkrjFDGQ1x9R3RkutKz2uGWese0wDrFSaR3a1MS1V%2Fas6ZTkahJ59ifTla0rwziqgMIyZysEGOqUBvETdhlZ91y%2B2KN3jWhDa0ZSbSGHispSGe5Nyd%2FGYSIYnOMnCM5Wtju9ZPbFWWxc7wtgC%2Bon9xyV2zTNkWGhtR1D4NzYNnd%2BJFp1X%2Fdhdr6fwL8PN%2Bb7W%2F%2FAb9PPomc4LxlbOt%2FGdsz1LAL39D8Q7Zv8TrIlPX%2BEtw86N0KURGNSsHF%2Bf9GTzG4MhqY9bHvB%2FQOkmgjRjGvyUNzf9%2B5remtK0YpkM&X-Amz-Signature=bbceb55582d20a00e37f4bd3e84af69a42d27981e1364d708289d14837c3c8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H53JTQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCE1Fo93vkqiZSFL7VWPfdTkojIFQbU%2B%2FjmpyKQqYLYRQIgUwtuGV%2FLg3wBY%2Fkig5YTWnplctyRU6tVp1xPetVHzb4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPGIeN%2FdNgH37gytQyrcA7J7ZV1p1I1DNPpwZ33Cdq6IbIpEEQWckxiLa4RBO2d9hlkkSPal%2Bcus521cDikpyECef3PeDXokIlhK1uPWXGdn7yjepd%2FauP2oPY%2Fu33AU0An%2Fm35hqvFUoocHhTUKF2t8cdimEg9RGMIVBvnKPwsgLORXMX6L4aeHKiHNC%2FqHNQs5sackatAXO9Vd7qWModlMom512LYbTHLOJiZsplfNvMymdIvwg%2FBjP6W%2BMPZGPlSN%2FKqWCd8knrnfpfUBYKJ9hX2AtKnoIU4W8f1cpZ75Wsk75WZUrQRlNXCDyatQpAOrjYzxL8aM8Ixf7hkYouc0uyhCgp0cYKbOTn6JAxQhrLOcZvxPMIvQ5NhdDeiKMwDJRGaHF2E%2F%2BMd1KzFjyPF%2Bs4L83epqXpTzhC%2F2B%2B8VtKek44TQw%2F6NITlb65rly4VLLEeV7XKf%2BC7AtoTxMzQIZYWSpY78UvFRNPrmdGxOac%2BOTRXryZmoSrOpAHQKtOUkzDyxsjUh4nPElIoJCR2jzPDil5JLQH%2F82Ch6nGljIwyAnFk%2BnvtZbQircx%2BsUaS32jK1pJu4iQuwkrjFDGQ1x9R3RkutKz2uGWese0wDrFSaR3a1MS1V%2Fas6ZTkahJ59ifTla0rwziqgMIyZysEGOqUBvETdhlZ91y%2B2KN3jWhDa0ZSbSGHispSGe5Nyd%2FGYSIYnOMnCM5Wtju9ZPbFWWxc7wtgC%2Bon9xyV2zTNkWGhtR1D4NzYNnd%2BJFp1X%2Fdhdr6fwL8PN%2Bb7W%2F%2FAb9PPomc4LxlbOt%2FGdsz1LAL39D8Q7Zv8TrIlPX%2BEtw86N0KURGNSsHF%2Bf9GTzG4MhqY9bHvB%2FQOkmgjRjGvyUNzf9%2B5remtK0YpkM&X-Amz-Signature=0ac77b8aaeb25a7027d6dfaa7f037a59c6ae75b8f87fc20854ca82323856b0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
