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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5BBFNE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O7rVn1IiTROGBkMXXx4GfyZJFaAiVueQPEcj0XyMYwIhAOrYxQG99GFQ153IzaEmUZVY5rgVx%2ByqgKkHeBtMMdEHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmx2pI4wXeQijg47sq3ANFdcNbfnq9mBzNyYZGErSrJhmCwLTtFz84p7V79fGN33I%2BxcZ17Nz7qVSlhHWaRqY7k%2FYG2fVDQSMBjY0uwJpEIzhwVivDdruZm5v8mB5LivMEt4itgHPlFVua%2FZuJM0JWy1EaCOm%2F4%2FqqlisYC%2F%2B0y19mQYW%2F%2BapNoU9d8qPdhyWVfb8G7K5qqNdf7vEEpYqPzx5YXGVLbrMJWUnZqdx2J15pGcLITu%2FAO0TVrUQBm7%2B3dcFesDA2%2Fap7eIFR4zceRWDFUjO4Vt53czBPKLDWU9U1riMUYo3JC54Y3cuFvAwDYx4UqFCcgPY0wIWn3feqOcZGvchLO8Vt4%2FUtacitum2%2FRm9J3hh20ObuVRicK2OUow1u4e7a00Gzr9cFcbYonG42zSbssdqc7AYpOG1FMs3ldlXD3GPioM6tdhdAzUN62QpoSguBqJqZLK1aHn8irbLWpuktLw5lvkTn6w4VeEBEJc2CtyZEP44EpghZlKTXAEQGKlMiF5UoumL3BebmtHxTIXuJKblOAwPWCPNO1cmB8ozYl%2FCB0mlZu65M866ODxCFofveYYzxc54HaKEGSbq2t9Xd7ls2o9%2B4oHKz4RYFs7%2FUEDd%2B%2FNZoVM7fg7wli%2Foz41UE1mvS1TCa1%2FzCBjqkAaW3NtyHYG7CC5TdKKJGwrVZS75ElXc2%2BNPTl8b4LbLoKD1KQMkQ%2BHKa7i81z8Qdsaknz1HMPaHq%2ForpJxXiBLLWSjQsmN0pmLz7WFFzI1KINqYCNkO0TPKumphq3CXkjXOaCeR3sHe%2BCyI7BSChytyg3QGwQSgPkAk5EMCtaaAADsCJAjT0JDprKmBFYNzwnQx%2FTBmSUcuvM7ysDLFuvNkoIm1%2B&X-Amz-Signature=0fae3884b55074ce213acd222cc8fdfefaf79894d7dca087a95e53a922a2bb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT5BBFNE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O7rVn1IiTROGBkMXXx4GfyZJFaAiVueQPEcj0XyMYwIhAOrYxQG99GFQ153IzaEmUZVY5rgVx%2ByqgKkHeBtMMdEHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmx2pI4wXeQijg47sq3ANFdcNbfnq9mBzNyYZGErSrJhmCwLTtFz84p7V79fGN33I%2BxcZ17Nz7qVSlhHWaRqY7k%2FYG2fVDQSMBjY0uwJpEIzhwVivDdruZm5v8mB5LivMEt4itgHPlFVua%2FZuJM0JWy1EaCOm%2F4%2FqqlisYC%2F%2B0y19mQYW%2F%2BapNoU9d8qPdhyWVfb8G7K5qqNdf7vEEpYqPzx5YXGVLbrMJWUnZqdx2J15pGcLITu%2FAO0TVrUQBm7%2B3dcFesDA2%2Fap7eIFR4zceRWDFUjO4Vt53czBPKLDWU9U1riMUYo3JC54Y3cuFvAwDYx4UqFCcgPY0wIWn3feqOcZGvchLO8Vt4%2FUtacitum2%2FRm9J3hh20ObuVRicK2OUow1u4e7a00Gzr9cFcbYonG42zSbssdqc7AYpOG1FMs3ldlXD3GPioM6tdhdAzUN62QpoSguBqJqZLK1aHn8irbLWpuktLw5lvkTn6w4VeEBEJc2CtyZEP44EpghZlKTXAEQGKlMiF5UoumL3BebmtHxTIXuJKblOAwPWCPNO1cmB8ozYl%2FCB0mlZu65M866ODxCFofveYYzxc54HaKEGSbq2t9Xd7ls2o9%2B4oHKz4RYFs7%2FUEDd%2B%2FNZoVM7fg7wli%2Foz41UE1mvS1TCa1%2FzCBjqkAaW3NtyHYG7CC5TdKKJGwrVZS75ElXc2%2BNPTl8b4LbLoKD1KQMkQ%2BHKa7i81z8Qdsaknz1HMPaHq%2ForpJxXiBLLWSjQsmN0pmLz7WFFzI1KINqYCNkO0TPKumphq3CXkjXOaCeR3sHe%2BCyI7BSChytyg3QGwQSgPkAk5EMCtaaAADsCJAjT0JDprKmBFYNzwnQx%2FTBmSUcuvM7ysDLFuvNkoIm1%2B&X-Amz-Signature=3f8880d190219a0f237c1f7da8b18785b4b7760a5a6cb359afd87f39a49b7895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
