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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYDAEYI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPFWpF7WbddSybniVY8GUSaUFwd2wA0gdyf7tDD3Z9ZAiAkh0fMRpzoK8V9FgPDNl10IgLb7ZpNQInE4sNtaJjoDSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLlEt%2F2qLrQNseyKDKtwDi6TCfziMFJmpWCGJTqZGfhS2RuilHJgSEQ4G%2FP28FWdqdTkkFFJWq4bZjgeOjz7D0RXDAWdaIP%2Bhkl1GSQC%2Bph7D%2FSBqWxnhHKwX1K04QdmsLMT8J6CPyNSKgGXx7nU8HtgsxPD3U2a7jNpR9a8247I47ZnpKQ2Ik7zX9dG6X5D5J80sRZ%2BsJ%2BKD6k%2FWO1uQTl%2BFygVWSYeGwg3OvIwKVfyxiRIyfaiSV7QkGElMGVl30oGXgWCTrjb8%2BCOIEypzPOcB1Jle8zy4ILHwVC9D%2B5MT38Z1l0rSVonCjQQ%2Bsf2K7Rm44iUTenrJ%2B8KvS0plx3FS7Y5MzYtXktr7Skc9rnSj%2BjUyjX5hyLGDSjq6zjygHeN9hvzWNkWFZQe6RST8GxGWk0NAStPPds0s7MkWkxSn9CCxcHUhKGom9gasAx0WBsIpZ71ST5Cwp%2BFvgK7kHHBU80Gf9c0rd5UUT8IqxdP3Jtm5O1kZ1D0Qlaly7Jn9V3wOaziDyzajAgxdc6H4bFv%2FhrlFqw%2B90C2MM7M8nEpZK%2BibfmHRnlhnS4INnTIN5pvAoijJofSyKch9p9QiYozwaYcXLSHEZXiccTRFtBEK1BwdpqPpgEoOn0CVG1YALPFVWDgmYC6P5sUwhMSewQY6pgE%2FD1Wj%2BiOR5rXlIFKAuXO9efoduAszvLOaSty6yrOnJbuuWH%2BXCL%2Be9AYodmm5DQVal7nZ3GGvYT93kINEHa0zZkNBETggoibl6yVu7E2eRqaEAZfuLdn4dooFo7JB3pXjixrcxO1dx3BF%2F4kDrISWBYPGDvo%2BHbAjjk6Zh6ggp4Gfrg7oFhpFSkCKVyHu3s4FIZxzMbP1Nd%2BC%2B0CpJJ8z2T%2Fh0ena&X-Amz-Signature=01bf342767a5669a6da6dcf22b92d4847bb652fbfdcd759851039ebb43c77926&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKYDAEYI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPFWpF7WbddSybniVY8GUSaUFwd2wA0gdyf7tDD3Z9ZAiAkh0fMRpzoK8V9FgPDNl10IgLb7ZpNQInE4sNtaJjoDSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMLlEt%2F2qLrQNseyKDKtwDi6TCfziMFJmpWCGJTqZGfhS2RuilHJgSEQ4G%2FP28FWdqdTkkFFJWq4bZjgeOjz7D0RXDAWdaIP%2Bhkl1GSQC%2Bph7D%2FSBqWxnhHKwX1K04QdmsLMT8J6CPyNSKgGXx7nU8HtgsxPD3U2a7jNpR9a8247I47ZnpKQ2Ik7zX9dG6X5D5J80sRZ%2BsJ%2BKD6k%2FWO1uQTl%2BFygVWSYeGwg3OvIwKVfyxiRIyfaiSV7QkGElMGVl30oGXgWCTrjb8%2BCOIEypzPOcB1Jle8zy4ILHwVC9D%2B5MT38Z1l0rSVonCjQQ%2Bsf2K7Rm44iUTenrJ%2B8KvS0plx3FS7Y5MzYtXktr7Skc9rnSj%2BjUyjX5hyLGDSjq6zjygHeN9hvzWNkWFZQe6RST8GxGWk0NAStPPds0s7MkWkxSn9CCxcHUhKGom9gasAx0WBsIpZ71ST5Cwp%2BFvgK7kHHBU80Gf9c0rd5UUT8IqxdP3Jtm5O1kZ1D0Qlaly7Jn9V3wOaziDyzajAgxdc6H4bFv%2FhrlFqw%2B90C2MM7M8nEpZK%2BibfmHRnlhnS4INnTIN5pvAoijJofSyKch9p9QiYozwaYcXLSHEZXiccTRFtBEK1BwdpqPpgEoOn0CVG1YALPFVWDgmYC6P5sUwhMSewQY6pgE%2FD1Wj%2BiOR5rXlIFKAuXO9efoduAszvLOaSty6yrOnJbuuWH%2BXCL%2Be9AYodmm5DQVal7nZ3GGvYT93kINEHa0zZkNBETggoibl6yVu7E2eRqaEAZfuLdn4dooFo7JB3pXjixrcxO1dx3BF%2F4kDrISWBYPGDvo%2BHbAjjk6Zh6ggp4Gfrg7oFhpFSkCKVyHu3s4FIZxzMbP1Nd%2BC%2B0CpJJ8z2T%2Fh0ena&X-Amz-Signature=c4bdaffd87c4b4101a0b9899a671b1a2a8f1f51243de0b58758b31a4defda83d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
