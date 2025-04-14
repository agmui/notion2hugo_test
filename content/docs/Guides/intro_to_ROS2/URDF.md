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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZO7HNW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoP5StqsGkubkbQ5f8aij0xL22QKbFCA3z4ghVCUgUQIhAJPsVjoy1aPgp%2BPOY9grnklbU2SdQrgIUKpmQRpwgVd2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC0%2FAxdAxNUR2tU6Eq3AOwpv3jongpFp8F1uc3roAp4zsBZDozxZw6wpMNjd2e9N1EtstAgy66fk%2FWTs9poMHkLuhvtIz%2Bmcf0EDfx6kp5A2qdS6YfswUYfoCWIl1JgiYYma23XgoFfVc%2F65dTASE1rmFX5BzS%2FiZq2PH%2BPCMO3jeF4m%2B01W2CTNZ9u768Ym9sQ%2FQBdou98Zec7pj6ncIkJC%2Fy26dnN0IzKG959%2BBGg0LncjLgBnI0LG2UXDM%2FnU89kb%2FJXEYtvDmuTB7SknT88dMgQl%2Fh3a%2BJysOxndKSKVTN%2Bly6Mas5Ke%2Bf0Sg%2F4hVoDr%2FC1MGsXxBExhbPPI1d0JAXQO%2F04VOIVTkohktIM3by8kdJ5JM5vz87aOm3BrLGEjc4CWXiTd0eZqxnxMl%2BDx2xWx%2FiV%2FA4Tt7Hxsoz3cpEEMUkxlp7wPiHRFm1HKOckqbbI2h6ICEsT3grAD2D7oOfLGZVS9CX%2FQdlcd9Pgae%2FsgPNmgmq0XNQ%2Ff%2BNhWZuVdc23wvwHzJKq5nsm1AaqlNBofjuZ7ppa3vncbdfuNtpcj2q5DRSVANA9YlPtrF10tY1fL7QKz8jjKa1rnAdzKWQwtKIOxkvW4NNiysvHKFuxCVaH96XN6kEy5G5k4rzoVDCIw6SDerDBTCqyfK%2FBjqkAQBI6vQZ1LDS5WlrQyNr8VeWU0z10c74pB6YLI1h1fwxrmNqgXcDDFWz1X2TaArWxoD8TOWviDqb4BBUXnUHwAGCU%2Fgczacwi9d90zSbfh4Lni%2BHEDzCzzMKT4W8XRql7vKKBNnD4DJQhS892wALsmi%2BUDDGY6yXCLzA9WVrfy9zaSH4XnwOOybX4hXV4QWYZab6skRiCneVZG9LyCup4F8fns%2FL&X-Amz-Signature=cd7f6c952e7e1989b3a4f468d103f8d357541dd29ff713e1209beb0b902f82b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZO7HNW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoP5StqsGkubkbQ5f8aij0xL22QKbFCA3z4ghVCUgUQIhAJPsVjoy1aPgp%2BPOY9grnklbU2SdQrgIUKpmQRpwgVd2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC0%2FAxdAxNUR2tU6Eq3AOwpv3jongpFp8F1uc3roAp4zsBZDozxZw6wpMNjd2e9N1EtstAgy66fk%2FWTs9poMHkLuhvtIz%2Bmcf0EDfx6kp5A2qdS6YfswUYfoCWIl1JgiYYma23XgoFfVc%2F65dTASE1rmFX5BzS%2FiZq2PH%2BPCMO3jeF4m%2B01W2CTNZ9u768Ym9sQ%2FQBdou98Zec7pj6ncIkJC%2Fy26dnN0IzKG959%2BBGg0LncjLgBnI0LG2UXDM%2FnU89kb%2FJXEYtvDmuTB7SknT88dMgQl%2Fh3a%2BJysOxndKSKVTN%2Bly6Mas5Ke%2Bf0Sg%2F4hVoDr%2FC1MGsXxBExhbPPI1d0JAXQO%2F04VOIVTkohktIM3by8kdJ5JM5vz87aOm3BrLGEjc4CWXiTd0eZqxnxMl%2BDx2xWx%2FiV%2FA4Tt7Hxsoz3cpEEMUkxlp7wPiHRFm1HKOckqbbI2h6ICEsT3grAD2D7oOfLGZVS9CX%2FQdlcd9Pgae%2FsgPNmgmq0XNQ%2Ff%2BNhWZuVdc23wvwHzJKq5nsm1AaqlNBofjuZ7ppa3vncbdfuNtpcj2q5DRSVANA9YlPtrF10tY1fL7QKz8jjKa1rnAdzKWQwtKIOxkvW4NNiysvHKFuxCVaH96XN6kEy5G5k4rzoVDCIw6SDerDBTCqyfK%2FBjqkAQBI6vQZ1LDS5WlrQyNr8VeWU0z10c74pB6YLI1h1fwxrmNqgXcDDFWz1X2TaArWxoD8TOWviDqb4BBUXnUHwAGCU%2Fgczacwi9d90zSbfh4Lni%2BHEDzCzzMKT4W8XRql7vKKBNnD4DJQhS892wALsmi%2BUDDGY6yXCLzA9WVrfy9zaSH4XnwOOybX4hXV4QWYZab6skRiCneVZG9LyCup4F8fns%2FL&X-Amz-Signature=77e90d1fab291798fa9eecfb1165229686598a0009795548e60d20a8ea546667&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
