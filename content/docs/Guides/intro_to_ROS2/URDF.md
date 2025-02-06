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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TR6AXY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDc8Ljyt2AymAm%2FIAGpuae2PIV2XLPDWekxCf0Pa5p8%2BwIhAMnOkc5U17JaNFxx7y2koMEONPBZK536RW6ADXMY%2B96gKv8DCGAQABoMNjM3NDIzMTgzODA1Igx9obrgUuvttzPYHEIq3APRcHI23RGVDcKG8ekZu8uLrs0OeQ%2BgacqAe7VXrLVqjIoEY9QkUMjyJs9syEXu5DdMwf2ksYvC11gU%2FioBMC%2FGEj5ckS1IdrJd2thrb9F43RfdmR6eif%2F5sVBuPdV3yhWB%2B8ivCk30QbR5CFTRK0VMqz%2Fb8DzRI6gKjHsaEYPJo2c0E3ys8Opk6PBFf%2FjSCXP5pXFuZ6dCx7qcI6VFIVaomdf9Y3xc54Cd0yIho7XUw6OFAuygrK9p%2BWgOJUJr9MG%2B%2Bw%2BuJWHnPXEVJvgp1RLeZiZK3DVHEIN8LDfqX7gVUxnddJeKEQS%2Ffnrt7POrU3qVAxVK5JbwUAvt5K0gTycw4XS0DCl8ecD7anZ23XGnTgJ5QE7yXDrv1WM2uq7DvRYyoZN6gxRa3QqYNzhAU%2BfqzYhK4U%2F43hh0bCDMKGY2tDsec4%2BGQVLz1j%2F7UsEWy4AdCvvuRVagZ0AmPFlV%2BYUWR1VP3wTKHGK5CGjCJ%2F1EhIq1aYv0HZqwqJJ7SD6Np4Zxn4xDKTuojQcKoYiyKqbNHkhTcR7G6ETOkrlHxR8R402lIBF4Q2ojVZHEJYjNvkeg3%2BCVetO2UZSZMncBoRO03w6E6gHD8UufHA1RHr7nG1Z7b%2B9gfSaaqIvceTCQnpO9BjqkAYI9YC1f1zh2BfN0KwVA3gbUcZtnv0vWjGowd69LwPWZYHVA5f8w04topHRqFPCJiO%2FyKknN4R7irtXH4k3shE43eL8NYSe3z9fhsyvo4EeMyuZyBuXMPL79cRQzydZoQTUMvQet1naHIV%2B0UdzucPbzIBIsLU26a1VE5Dvt6SBxvXFmjMNJ4jJKaz03Q5QdHrQmMRgTJQfLu38suPm88ql%2BXdxq&X-Amz-Signature=404352e77bc70bff2c9168758c81697a46e890bebbbd20bf0ae51d4251fc5ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4TR6AXY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDc8Ljyt2AymAm%2FIAGpuae2PIV2XLPDWekxCf0Pa5p8%2BwIhAMnOkc5U17JaNFxx7y2koMEONPBZK536RW6ADXMY%2B96gKv8DCGAQABoMNjM3NDIzMTgzODA1Igx9obrgUuvttzPYHEIq3APRcHI23RGVDcKG8ekZu8uLrs0OeQ%2BgacqAe7VXrLVqjIoEY9QkUMjyJs9syEXu5DdMwf2ksYvC11gU%2FioBMC%2FGEj5ckS1IdrJd2thrb9F43RfdmR6eif%2F5sVBuPdV3yhWB%2B8ivCk30QbR5CFTRK0VMqz%2Fb8DzRI6gKjHsaEYPJo2c0E3ys8Opk6PBFf%2FjSCXP5pXFuZ6dCx7qcI6VFIVaomdf9Y3xc54Cd0yIho7XUw6OFAuygrK9p%2BWgOJUJr9MG%2B%2Bw%2BuJWHnPXEVJvgp1RLeZiZK3DVHEIN8LDfqX7gVUxnddJeKEQS%2Ffnrt7POrU3qVAxVK5JbwUAvt5K0gTycw4XS0DCl8ecD7anZ23XGnTgJ5QE7yXDrv1WM2uq7DvRYyoZN6gxRa3QqYNzhAU%2BfqzYhK4U%2F43hh0bCDMKGY2tDsec4%2BGQVLz1j%2F7UsEWy4AdCvvuRVagZ0AmPFlV%2BYUWR1VP3wTKHGK5CGjCJ%2F1EhIq1aYv0HZqwqJJ7SD6Np4Zxn4xDKTuojQcKoYiyKqbNHkhTcR7G6ETOkrlHxR8R402lIBF4Q2ojVZHEJYjNvkeg3%2BCVetO2UZSZMncBoRO03w6E6gHD8UufHA1RHr7nG1Z7b%2B9gfSaaqIvceTCQnpO9BjqkAYI9YC1f1zh2BfN0KwVA3gbUcZtnv0vWjGowd69LwPWZYHVA5f8w04topHRqFPCJiO%2FyKknN4R7irtXH4k3shE43eL8NYSe3z9fhsyvo4EeMyuZyBuXMPL79cRQzydZoQTUMvQet1naHIV%2B0UdzucPbzIBIsLU26a1VE5Dvt6SBxvXFmjMNJ4jJKaz03Q5QdHrQmMRgTJQfLu38suPm88ql%2BXdxq&X-Amz-Signature=6206ce46bc7ebcc266c1cce8e1ee50a878c1aa932caccb2d4741602655754695&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
