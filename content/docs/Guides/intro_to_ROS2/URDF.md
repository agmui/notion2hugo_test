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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWQKUKW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlBloFJ%2BtLKHwX90r7C3xQlabNr9JD1mcIDiKUt02zaQIhAIRIsso173CA%2FrAf19jb3cKfusGKsmzj8Fx3J4FhDGJnKv8DCEQQABoMNjM3NDIzMTgzODA1Igwux4PBevDk0uLoEnkq3AO3vqzpKX3OkNMoh95aulflTc5r1b9rKeD4%2FmDf%2FV4%2FgEeLscYiPGI2rLJzp2zBrbLb7mZt0e5Tv6JHp1gdSy971J%2Fv0lfNCabBkkBos47jBvlNH8RxdzhhdptpeKlSmw5BIuDitcgZwwJbxT%2BJ%2B1hBO%2FMQkR3ekwqUTUY3x%2FrVyEw46ySmH0ANgXQ2Smf3INrBqfO6KjbuJVFtBJuH6Mkse6UW30wRpKS2895TIcjDdLhJiw%2BefmP40JlE6TziW2kKkDzaJ%2BIdPuJkRk5YzW%2BQf81%2BDPiChKOARqM%2BAHJXjI%2FpBggD0NJH%2B6ZKDBv4UoNsgVlcNl4ebYLTS1yilBqEhbPBFQArcf2nmy%2FNdMXCS%2BJw%2F5camqapTfQc0kz%2BSIs7zVCOrc3G%2FPLWz3R%2FWdbuk6pcGavpn0mPgYrSHtKkpmzLK%2Fx6N0gCRNv6A608SU83gdynaslQOOFwmbHkbS%2FVZbMbj%2FMj1WJbNO82T2ewwMM%2FNS0og4WEDsphOqnKiKH7sRvLkQ86LwHANCvcyH%2Fj3VeEcVT%2FETtp0HBCgguuz1t18YZXDuhDtHDTrhKEj5KVeMMph2UcWLdzM5gXdpFIRnna3Fhak30Yg%2Fq1dFiTzmLZSgL3f2t%2FAjEzLDDR7cG9BjqkATaBXOxeL4XrCXYYEfAF6hKEcY9waY5L92E4gZe9xAghlYMEVacIUP%2F2%2Fqb9bqLr3zwENOzWjORqsJiqAHY51r9Q3lmVct3UY1QJjaI6Ln4EayxfUoD39ZUeo%2Fx7hGa1Cc3tv2QW46MG1fwiXQJl78SjErafDUB%2FR0Di6OHZg546dswS5Z3g72T5rjDcPqjRgcAiVQIAox%2B2cM6ZWdxAS6K0xrxe&X-Amz-Signature=10ef34072a3b0d6ffdc596fc88fac7a169e1b7177fc2ffa71794290b4f2dd92c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWQKUKW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDlBloFJ%2BtLKHwX90r7C3xQlabNr9JD1mcIDiKUt02zaQIhAIRIsso173CA%2FrAf19jb3cKfusGKsmzj8Fx3J4FhDGJnKv8DCEQQABoMNjM3NDIzMTgzODA1Igwux4PBevDk0uLoEnkq3AO3vqzpKX3OkNMoh95aulflTc5r1b9rKeD4%2FmDf%2FV4%2FgEeLscYiPGI2rLJzp2zBrbLb7mZt0e5Tv6JHp1gdSy971J%2Fv0lfNCabBkkBos47jBvlNH8RxdzhhdptpeKlSmw5BIuDitcgZwwJbxT%2BJ%2B1hBO%2FMQkR3ekwqUTUY3x%2FrVyEw46ySmH0ANgXQ2Smf3INrBqfO6KjbuJVFtBJuH6Mkse6UW30wRpKS2895TIcjDdLhJiw%2BefmP40JlE6TziW2kKkDzaJ%2BIdPuJkRk5YzW%2BQf81%2BDPiChKOARqM%2BAHJXjI%2FpBggD0NJH%2B6ZKDBv4UoNsgVlcNl4ebYLTS1yilBqEhbPBFQArcf2nmy%2FNdMXCS%2BJw%2F5camqapTfQc0kz%2BSIs7zVCOrc3G%2FPLWz3R%2FWdbuk6pcGavpn0mPgYrSHtKkpmzLK%2Fx6N0gCRNv6A608SU83gdynaslQOOFwmbHkbS%2FVZbMbj%2FMj1WJbNO82T2ewwMM%2FNS0og4WEDsphOqnKiKH7sRvLkQ86LwHANCvcyH%2Fj3VeEcVT%2FETtp0HBCgguuz1t18YZXDuhDtHDTrhKEj5KVeMMph2UcWLdzM5gXdpFIRnna3Fhak30Yg%2Fq1dFiTzmLZSgL3f2t%2FAjEzLDDR7cG9BjqkATaBXOxeL4XrCXYYEfAF6hKEcY9waY5L92E4gZe9xAghlYMEVacIUP%2F2%2Fqb9bqLr3zwENOzWjORqsJiqAHY51r9Q3lmVct3UY1QJjaI6Ln4EayxfUoD39ZUeo%2Fx7hGa1Cc3tv2QW46MG1fwiXQJl78SjErafDUB%2FR0Di6OHZg546dswS5Z3g72T5rjDcPqjRgcAiVQIAox%2B2cM6ZWdxAS6K0xrxe&X-Amz-Signature=30eae2e34d9e63fd9d50e01bdf3fa94a0c3ac054cf191d26915e2623002121c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
