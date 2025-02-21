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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZ5G6SK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8i86cBuvriAsnkrBc2Oe%2BF2KA4dI0xuTbBm44gks7SQIgbWQqrAJD6hiKRXWVcWJg6wLxMIygmkgk7T6hcMPuVhUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmn7MM3t2sjvfSKgyrcAzUEGn9IGryffQXN%2FC7aXhI0akOFQmmGInwv%2BUotzFBGUg4RbmOk4bVHgZ3%2FU6OggerggC6tqHK%2FsXUl24AOsIVqo6kgTNzYtptTqOCiTzJb811iCFYQcBM9Z0LKXG4wPICWVy867d6P8UpqqyRG43R2he32FI4o6nviQPoRF0Rr4dvkralQ4VttxS%2FVx3uymIvfpPTuW%2Bl7O6c6Ei%2BVHpfPxylrn6ro7d4Vmo2uFIpqhsYP6GQgGwulkBZHP5LsclWwlEg1etEGoKC93ashuA0kxBO2IDxpYaBcprguy19CwxqqrTp4aVpJZ%2B1%2FR0lJW2IDYPOYxg74XkXzVWavGRD%2Ffuf%2B9fVzpp%2FrRgLQAqqU4Q3tMATY3MZaRxyAk6MxldKdT3slzzgJKX3CPGC42tRsvR4IrGD7DmA59qs2Vd67plILS7GsRx3aovt6dgvHozg0S9FbRoSlgQoFyRZH06I%2BynmXihb8YBSktDhLRRKXNzj6KbkF1eIOybb9gHALpBisk7xh0VjPBXqO9HdvhyD%2Bq4GDxjBvwJIXUD6VN1ZAKQFWNXve3TRk%2F6A7x8Cxp3mhq%2B6ZN1Y4pjozKOU7ZKiYuYhNqpEreqwMW%2ByD7dNo74Zn3vkZpWqH27gbMIWG4L0GOqUB7zHyqHQp%2BfY%2ByeqiiFOYPFRYZMYPZ2Zvt5b9k%2FnmsrBV1W3nVg623vsbXWJ6et%2FatP7wJdpLwDoCpFC7DbpcMCrGkBIQ9%2F2KHZP%2FKXAcqpkY6P90UUa5twRXkNw3YeB70iwJ2NnvJg45HA6ZWpR%2FE2QWz%2Fq%2FnehcxPZqS1pwv8XYONkIOLd5x4YZlzT%2B1in8vD2UWqHZF%2FUlUTZprWgsmIlwI6BE&X-Amz-Signature=df8299986c58cf7e03056eb137a1be4368eb0ea1609b0469790df7d484915f03&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZ5G6SK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8i86cBuvriAsnkrBc2Oe%2BF2KA4dI0xuTbBm44gks7SQIgbWQqrAJD6hiKRXWVcWJg6wLxMIygmkgk7T6hcMPuVhUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmn7MM3t2sjvfSKgyrcAzUEGn9IGryffQXN%2FC7aXhI0akOFQmmGInwv%2BUotzFBGUg4RbmOk4bVHgZ3%2FU6OggerggC6tqHK%2FsXUl24AOsIVqo6kgTNzYtptTqOCiTzJb811iCFYQcBM9Z0LKXG4wPICWVy867d6P8UpqqyRG43R2he32FI4o6nviQPoRF0Rr4dvkralQ4VttxS%2FVx3uymIvfpPTuW%2Bl7O6c6Ei%2BVHpfPxylrn6ro7d4Vmo2uFIpqhsYP6GQgGwulkBZHP5LsclWwlEg1etEGoKC93ashuA0kxBO2IDxpYaBcprguy19CwxqqrTp4aVpJZ%2B1%2FR0lJW2IDYPOYxg74XkXzVWavGRD%2Ffuf%2B9fVzpp%2FrRgLQAqqU4Q3tMATY3MZaRxyAk6MxldKdT3slzzgJKX3CPGC42tRsvR4IrGD7DmA59qs2Vd67plILS7GsRx3aovt6dgvHozg0S9FbRoSlgQoFyRZH06I%2BynmXihb8YBSktDhLRRKXNzj6KbkF1eIOybb9gHALpBisk7xh0VjPBXqO9HdvhyD%2Bq4GDxjBvwJIXUD6VN1ZAKQFWNXve3TRk%2F6A7x8Cxp3mhq%2B6ZN1Y4pjozKOU7ZKiYuYhNqpEreqwMW%2ByD7dNo74Zn3vkZpWqH27gbMIWG4L0GOqUB7zHyqHQp%2BfY%2ByeqiiFOYPFRYZMYPZ2Zvt5b9k%2FnmsrBV1W3nVg623vsbXWJ6et%2FatP7wJdpLwDoCpFC7DbpcMCrGkBIQ9%2F2KHZP%2FKXAcqpkY6P90UUa5twRXkNw3YeB70iwJ2NnvJg45HA6ZWpR%2FE2QWz%2Fq%2FnehcxPZqS1pwv8XYONkIOLd5x4YZlzT%2B1in8vD2UWqHZF%2FUlUTZprWgsmIlwI6BE&X-Amz-Signature=71b35c8d24526ab3fc3e12915b9aefc8d6c0b8dbdd331df8195b1603e285f3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
