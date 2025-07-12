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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLDFVYJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQs8sWTvDXkdPIY6OcrPK%2FFoHiqt6I0l%2FXRfegEoVPSAIhAPUfniYuC0OTGzVRo3xJOlHbyV4hYvw7sJZaNLL6YiQ6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz6pfIEDizdSGJRJAq3APIYkl8joYJvnc%2F4wNdXGZ%2FMm0PYULaR3GKnc5e69q5tez6bVbl%2Ff42i1OokGrjs%2Fc9FwuY18e%2BEddkkPoOf6QLZxMoXJnLfDkq0lb3wPFORCLBKqtJ%2BwFFevFrFfExoYFUgcwWotKi7tGARfyvQN8gEZkdBF2Y95VmlC9LzMUOkiIUa5pA2542qgnGsVeErR9baTii1rCcyD49R1zBijMJk5KgzexPmUCMqTb2CgDduR%2FKQFahYcu75tl7LIcfY9I8uSKbfqqc6pInn%2BKKYGFw6gF2N9xPbMZyBSDXxEj4jCgBaY3Nn%2BNZyXr%2BaXc3Hd1avJpCKy6LXzMpbxx17quD2787ni8RgP8xyg%2FMLjtgBuANlPpRrxmrs5FM9DuJdFtqtUTL0blGeAaZ1jDId6SHdU1ZiM10%2B7FyNy9S7s%2BvRmdkmOLkzSMLapK44EAkxyVVUOmXfE%2BgXWqNzVzqbAoK19P7vCMryUpPmnGPgbpErAiCYobICRuuD45PjDc%2Bz3kYyLDrOOjvSPlPxNBS8M4NpbwNGx%2F1%2BC9BD68Lfz0F7drzo%2BiY4s3H0Q6i%2BRTbcaXM25hb4B6HAwFKHbOB5zn5%2BKjaYfpmHmN8toh%2FA95XoctHljvLR2%2FTRt1o9TDZrsrDBjqkASLinqIqTd%2FeMiq3Rlr5Ujbf6WqKsmIIxNHx9ac8F1KKdbFaa28o4ya8Vk9GGNjc%2BOZXvR9DsSp2i6KavmSVXptg8wB2YY25GZSQpIQRUh5Spi2WxahXykm7S7yS62ZcyIp5Zapo567TVT1HH5UnadGMJNSVL6gd4j%2BnGF2SZQkOpsipr5xQz4F8FXgd9JzoiK90TGQdzOpXWZ0Wi3Rne7ZsasAv&X-Amz-Signature=9e6a4dd9d8e2f85b0f0b6878bd7f9ffc35ca7faea6a307579e4f5828dc37a692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DLDFVYJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQs8sWTvDXkdPIY6OcrPK%2FFoHiqt6I0l%2FXRfegEoVPSAIhAPUfniYuC0OTGzVRo3xJOlHbyV4hYvw7sJZaNLL6YiQ6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz6pfIEDizdSGJRJAq3APIYkl8joYJvnc%2F4wNdXGZ%2FMm0PYULaR3GKnc5e69q5tez6bVbl%2Ff42i1OokGrjs%2Fc9FwuY18e%2BEddkkPoOf6QLZxMoXJnLfDkq0lb3wPFORCLBKqtJ%2BwFFevFrFfExoYFUgcwWotKi7tGARfyvQN8gEZkdBF2Y95VmlC9LzMUOkiIUa5pA2542qgnGsVeErR9baTii1rCcyD49R1zBijMJk5KgzexPmUCMqTb2CgDduR%2FKQFahYcu75tl7LIcfY9I8uSKbfqqc6pInn%2BKKYGFw6gF2N9xPbMZyBSDXxEj4jCgBaY3Nn%2BNZyXr%2BaXc3Hd1avJpCKy6LXzMpbxx17quD2787ni8RgP8xyg%2FMLjtgBuANlPpRrxmrs5FM9DuJdFtqtUTL0blGeAaZ1jDId6SHdU1ZiM10%2B7FyNy9S7s%2BvRmdkmOLkzSMLapK44EAkxyVVUOmXfE%2BgXWqNzVzqbAoK19P7vCMryUpPmnGPgbpErAiCYobICRuuD45PjDc%2Bz3kYyLDrOOjvSPlPxNBS8M4NpbwNGx%2F1%2BC9BD68Lfz0F7drzo%2BiY4s3H0Q6i%2BRTbcaXM25hb4B6HAwFKHbOB5zn5%2BKjaYfpmHmN8toh%2FA95XoctHljvLR2%2FTRt1o9TDZrsrDBjqkASLinqIqTd%2FeMiq3Rlr5Ujbf6WqKsmIIxNHx9ac8F1KKdbFaa28o4ya8Vk9GGNjc%2BOZXvR9DsSp2i6KavmSVXptg8wB2YY25GZSQpIQRUh5Spi2WxahXykm7S7yS62ZcyIp5Zapo567TVT1HH5UnadGMJNSVL6gd4j%2BnGF2SZQkOpsipr5xQz4F8FXgd9JzoiK90TGQdzOpXWZ0Wi3Rne7ZsasAv&X-Amz-Signature=1a55ca6b2961aacf62b5f151f3747e4fb80ebe60f9a2875c35b0c785d1122569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
