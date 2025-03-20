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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3QSZFT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID7UNeoJoSgL%2Fos1yi2CLMIAGDtVirjEuwjKH8j12RfwAiARGlZaO2dRDSGf0MVpK10p%2FHmWNISR5LzG1fco4vyMjSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUUxBSlI9tuDEWrbbKtwD4dzPw3pFz2cvVdfeN2obN7%2FAy%2B3QVx9fcyJpWNye8ukFfCVmuQ8F6wFYXcOnpr1F8nicfX8zu4TQH%2FOx2xB6GBzcOZt39ODSBYRXVVRFVWCAb1os8YdG3sfzd%2FUBeo%2BrCFEEGoQ0nxS541%2BJ4dSsn3wlgaR26oFtuIS4ua5ETBXMoSPqpA0AaENHAcsMqNRccdQ59aY6vY0ipJDij9YH9D5LKkduTRxHpej5xH9cptcREz5jI%2FzXfBIPr3%2BsEtXm0KhmPqATUikKuIL904GBdXHv%2Bh2ICJVKssUO5dieiMLU5GTzcM4lnE4zKVfRaMH0TiMTFBX8rTb7l01yGwQWbZxC0WYyF9%2F2Fk%2Bg%2BBzpVWny5w%2BRAbKKnEnzv76ec6DkdHfA9NDQ1qIkCrAoPWhKYe0IYDH%2F95MlSHAVfdhohYAcqxUre8i8Nt5YoGes3pRtRgnnIaf8U3CQwqDvK2yDpA07cASFDalLda4Ng%2BLQQQ%2BBMWRmPMwijsX%2B26JpDNSE8bLnDXN18JD%2BTzROVhroi%2FXYnmGcDv9ihvmt9lMZuZi%2FrqwiUJrwrKLV5XU8zQvE9AXySngkcjfEdSIaOVwasfVF0pz3Wy4fY%2FWXtDaiBIDgnAOBBuoBUvrXGmIw7qPxvgY6pgGykc%2FszJFuEeFYg6cEHJUHEq%2FnIFPximk6%2BfOP8VSj3eJcqd5rP5ufP6Gh0NltuQbAYM8KzknMCoNe53gJoeHcOY4%2BTr8YlmoPvhvPKtazJposX%2FBTOhF%2BUkKheCZZdr54mvNM53MxR80%2F7z7qG%2FxVPv4pGQuXpsVbsXUTpZAJg%2BXyjnppgNqzcuqR161VNO%2FGwlYeJFRWHn9dEXHFpUYZ%2FjSopXsn&X-Amz-Signature=63514f8d1c66f68bb3b0116221a5dd7867b83214a5cc0ae265adc3fde13a7a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3QSZFT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID7UNeoJoSgL%2Fos1yi2CLMIAGDtVirjEuwjKH8j12RfwAiARGlZaO2dRDSGf0MVpK10p%2FHmWNISR5LzG1fco4vyMjSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUUxBSlI9tuDEWrbbKtwD4dzPw3pFz2cvVdfeN2obN7%2FAy%2B3QVx9fcyJpWNye8ukFfCVmuQ8F6wFYXcOnpr1F8nicfX8zu4TQH%2FOx2xB6GBzcOZt39ODSBYRXVVRFVWCAb1os8YdG3sfzd%2FUBeo%2BrCFEEGoQ0nxS541%2BJ4dSsn3wlgaR26oFtuIS4ua5ETBXMoSPqpA0AaENHAcsMqNRccdQ59aY6vY0ipJDij9YH9D5LKkduTRxHpej5xH9cptcREz5jI%2FzXfBIPr3%2BsEtXm0KhmPqATUikKuIL904GBdXHv%2Bh2ICJVKssUO5dieiMLU5GTzcM4lnE4zKVfRaMH0TiMTFBX8rTb7l01yGwQWbZxC0WYyF9%2F2Fk%2Bg%2BBzpVWny5w%2BRAbKKnEnzv76ec6DkdHfA9NDQ1qIkCrAoPWhKYe0IYDH%2F95MlSHAVfdhohYAcqxUre8i8Nt5YoGes3pRtRgnnIaf8U3CQwqDvK2yDpA07cASFDalLda4Ng%2BLQQQ%2BBMWRmPMwijsX%2B26JpDNSE8bLnDXN18JD%2BTzROVhroi%2FXYnmGcDv9ihvmt9lMZuZi%2FrqwiUJrwrKLV5XU8zQvE9AXySngkcjfEdSIaOVwasfVF0pz3Wy4fY%2FWXtDaiBIDgnAOBBuoBUvrXGmIw7qPxvgY6pgGykc%2FszJFuEeFYg6cEHJUHEq%2FnIFPximk6%2BfOP8VSj3eJcqd5rP5ufP6Gh0NltuQbAYM8KzknMCoNe53gJoeHcOY4%2BTr8YlmoPvhvPKtazJposX%2FBTOhF%2BUkKheCZZdr54mvNM53MxR80%2F7z7qG%2FxVPv4pGQuXpsVbsXUTpZAJg%2BXyjnppgNqzcuqR161VNO%2FGwlYeJFRWHn9dEXHFpUYZ%2FjSopXsn&X-Amz-Signature=76e5a0d1b244bd8ff40d430781defbe47f5866b6441b672d8681efcddf758b61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
