---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6YOZAM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID6UPQEMyGX3fDLTidI6fjO7Ni99sC%2FiTwVDaR6%2BnaVXAiAm5UMvSYDNWajp18vFMjAtgxi5s3tVl0U%2FOdfzM85AIyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMGHj0lqsSF3bgspzjKtwD7av5LGE4svRRhdRoLCD2fjjexS28%2Fq7Tpm2oY%2BpBIUH0zKj4ETlSFy3r3Dh5UkqAKlX9LFlPH06nzDFn0vOBogjz4s08F8JKpPcYQbHr%2FXn8EEijuoHOfzy9UHkyUpcn%2BvO1EMjjvLqba3kghwdmG4gA85%2FK61wQ7JDswLJ%2BJi%2BJ4SfVVTaJpU0XFMP7EMOocmpOEbM8s49S%2Bo2I%2BkFsQvbR3CDlRDMNJwl8Q2KKcNHIQM5AeiT%2BWtFgH1ZDPfwL%2BzOfkvqhxyW1tLKAwmaB0oWD2g2wen92RxtUcPVEQMbUbGksPVsSycIAQ13L%2F4yysH4rJyJsPKu58vOQ84dVf18lAqVTOSY3SdAsvpuOGKcIw5TuMPJaHxNpakqnTByVVUsEcQAjuAs6r1hllSehR62igivpmMgooKIUmv4iDqJ14uGLC95FP3s6HM1toBmG1Wqb4pG6Cf1Ms41i4KolIbHICOb%2FZpzPp8dbivL0zDZB9An8KEulnLQ9vpOlur5bUyNS9uJdpKk4uZhM9pNn498Z00qB8scY3%2FOGIpAqMu70kIQjywcQUq5D2XP0hhiozusCrELa%2BthzwcLDMjkzzFhmyPMmr7motkm5jPPVQ%2FeKZ4UyNa4SMFYxvmowzeeayAY6pgF%2Ft9PCi40t4RIlio7JEgSsEdGq8e7vBYJsYOW7pbkC9bGO3uHZK%2FP7IgnnirRC15rBW9U035TCWb6%2B%2B2j65KdAJeoNfX3AiG9TBP1DQn2%2FJQ5YLf%2BXUD3dpne23aVJYLi9u0NI6CAXtC3JS1%2BSOj40DbIFF2OlH1YIvfFKq15X5kTr%2BIY2pPaGG3ogjGJEp2%2Bhk4nZ6ntBOu9dA2qOb9nwuCJOddPs&X-Amz-Signature=9c4363b3c5d15606016528846ae971f2b7e3736e60a06f59def08516e92999a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6YOZAM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID6UPQEMyGX3fDLTidI6fjO7Ni99sC%2FiTwVDaR6%2BnaVXAiAm5UMvSYDNWajp18vFMjAtgxi5s3tVl0U%2FOdfzM85AIyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMGHj0lqsSF3bgspzjKtwD7av5LGE4svRRhdRoLCD2fjjexS28%2Fq7Tpm2oY%2BpBIUH0zKj4ETlSFy3r3Dh5UkqAKlX9LFlPH06nzDFn0vOBogjz4s08F8JKpPcYQbHr%2FXn8EEijuoHOfzy9UHkyUpcn%2BvO1EMjjvLqba3kghwdmG4gA85%2FK61wQ7JDswLJ%2BJi%2BJ4SfVVTaJpU0XFMP7EMOocmpOEbM8s49S%2Bo2I%2BkFsQvbR3CDlRDMNJwl8Q2KKcNHIQM5AeiT%2BWtFgH1ZDPfwL%2BzOfkvqhxyW1tLKAwmaB0oWD2g2wen92RxtUcPVEQMbUbGksPVsSycIAQ13L%2F4yysH4rJyJsPKu58vOQ84dVf18lAqVTOSY3SdAsvpuOGKcIw5TuMPJaHxNpakqnTByVVUsEcQAjuAs6r1hllSehR62igivpmMgooKIUmv4iDqJ14uGLC95FP3s6HM1toBmG1Wqb4pG6Cf1Ms41i4KolIbHICOb%2FZpzPp8dbivL0zDZB9An8KEulnLQ9vpOlur5bUyNS9uJdpKk4uZhM9pNn498Z00qB8scY3%2FOGIpAqMu70kIQjywcQUq5D2XP0hhiozusCrELa%2BthzwcLDMjkzzFhmyPMmr7motkm5jPPVQ%2FeKZ4UyNa4SMFYxvmowzeeayAY6pgF%2Ft9PCi40t4RIlio7JEgSsEdGq8e7vBYJsYOW7pbkC9bGO3uHZK%2FP7IgnnirRC15rBW9U035TCWb6%2B%2B2j65KdAJeoNfX3AiG9TBP1DQn2%2FJQ5YLf%2BXUD3dpne23aVJYLi9u0NI6CAXtC3JS1%2BSOj40DbIFF2OlH1YIvfFKq15X5kTr%2BIY2pPaGG3ogjGJEp2%2Bhk4nZ6ntBOu9dA2qOb9nwuCJOddPs&X-Amz-Signature=54a10de011e19915614814301c4c258a5e289f0e8505c98e9e5c277e160bb7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
