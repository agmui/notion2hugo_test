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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNEU2HX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDufkY0k9Eyio7GgmSkCquqoLMWG0w7UDPpu5%2FjEZGfBwIhAOHlQ33ZneoNQWpZrmtsqYora1o36S8GjFUKl%2Brz18eGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb%2BFoInTJT%2Btl8in0q3ANMPURUmKxRAk0AzhRceRdBO2aveK0YULIlT%2BJiJJDZrCDR6bGoNjKEFedWfjEvCXW53UD4Zz7MGOOmILS7UZa29hfn1%2BXSrMdJ6pDWaV4pRfKNrsmXFW6xuAZbUA%2B6nOQtu6ZpkOxYj595umnM39y4DVqOFlIYaVSlz8A0OnMvBjPlwiEeRq2f5AOJdYtnJbpcjwmuh16RWgkaj%2F8Ceayy%2BYIfZbEdYoTJfla1DgZ5SUYfYlX4t7t%2BG5fvbhviw8jq%2BIqKSTBeSWsFsCBzWE8cGEhrTVsrvNQO1SY63JWi%2FdRGxc56hryGYFyrbCLzHX9NDmVtjYCnGrRSNGc1hXR4kh2KLOvFB1mI1Y6dS3CNHAKA3u00U%2Fc%2FX7o0%2FP5Z2bymUzgVgmDHE0xJMvk9BQk09nGoYCKrg5Sgo%2FE5Hf8Gb6Tah0q8bI3PG2PfMCqINITUIkFbDmwjtHoGSzSuU%2F2qTbmRXcm10Zpw0GL2JcDQPiR5KHtVN9%2F7ZfOgrwFaIDnCXyz%2BXpN5gzoISSXljF0yhoJtJtT%2Bxh6Rn4f3asRHLzBvzLn9jQOUfAQrsVk%2B4xNKdxhEKMRmk2uB%2BznQtQYtpHrYXyZk49VYDHQQfr5Evj5nIV%2FMdEc2EYS9yTCJ0vC8BjqkAb%2B7%2FE6ZVk1E7e693d%2BAucNOICaUeJsEpO0l9KdM%2FfId4j0GSAMrj5my%2Bw%2FHj%2BbRm2brRVrZpY2b2%2FyKZ8l59t8UzFFte5fyHd8Na4rUduh1Eu3kmAonOuK13HAaPY5DL4QUkJg1quMMA0q%2FoZcfXMAEdGRUrehGPcPoi789bK5Bg5qPuBC4i%2BQoJxSOTkeE3PGTuVBjmxQpS1a2n%2BJWrr9P1991&X-Amz-Signature=6684a003351d06ab871d80e8565066d7a3d068d6a290f464b89f4346d67972c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNEU2HX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDufkY0k9Eyio7GgmSkCquqoLMWG0w7UDPpu5%2FjEZGfBwIhAOHlQ33ZneoNQWpZrmtsqYora1o36S8GjFUKl%2Brz18eGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb%2BFoInTJT%2Btl8in0q3ANMPURUmKxRAk0AzhRceRdBO2aveK0YULIlT%2BJiJJDZrCDR6bGoNjKEFedWfjEvCXW53UD4Zz7MGOOmILS7UZa29hfn1%2BXSrMdJ6pDWaV4pRfKNrsmXFW6xuAZbUA%2B6nOQtu6ZpkOxYj595umnM39y4DVqOFlIYaVSlz8A0OnMvBjPlwiEeRq2f5AOJdYtnJbpcjwmuh16RWgkaj%2F8Ceayy%2BYIfZbEdYoTJfla1DgZ5SUYfYlX4t7t%2BG5fvbhviw8jq%2BIqKSTBeSWsFsCBzWE8cGEhrTVsrvNQO1SY63JWi%2FdRGxc56hryGYFyrbCLzHX9NDmVtjYCnGrRSNGc1hXR4kh2KLOvFB1mI1Y6dS3CNHAKA3u00U%2Fc%2FX7o0%2FP5Z2bymUzgVgmDHE0xJMvk9BQk09nGoYCKrg5Sgo%2FE5Hf8Gb6Tah0q8bI3PG2PfMCqINITUIkFbDmwjtHoGSzSuU%2F2qTbmRXcm10Zpw0GL2JcDQPiR5KHtVN9%2F7ZfOgrwFaIDnCXyz%2BXpN5gzoISSXljF0yhoJtJtT%2Bxh6Rn4f3asRHLzBvzLn9jQOUfAQrsVk%2B4xNKdxhEKMRmk2uB%2BznQtQYtpHrYXyZk49VYDHQQfr5Evj5nIV%2FMdEc2EYS9yTCJ0vC8BjqkAb%2B7%2FE6ZVk1E7e693d%2BAucNOICaUeJsEpO0l9KdM%2FfId4j0GSAMrj5my%2Bw%2FHj%2BbRm2brRVrZpY2b2%2FyKZ8l59t8UzFFte5fyHd8Na4rUduh1Eu3kmAonOuK13HAaPY5DL4QUkJg1quMMA0q%2FoZcfXMAEdGRUrehGPcPoi789bK5Bg5qPuBC4i%2BQoJxSOTkeE3PGTuVBjmxQpS1a2n%2BJWrr9P1991&X-Amz-Signature=ce922e078126cb99542579e64635701d1a1af9b48872e6888d9faa23362f6720&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
