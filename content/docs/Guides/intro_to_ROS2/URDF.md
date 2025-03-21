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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZAVKFR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIA3LzW%2FfdYbLde5dIz8DanA5YtWzQiUNLG2oS0W0EBb9AiEAlIEPCa7msncsCFlFiuNF4wGs4S9PEMoHzviugnItqEEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCID2X7X1sGEw0ZSFyrcA%2FKlz%2FBfEDaNDAKqZtOdhZy4e%2BJTbijIUAqAvoJ63etdpoKAaknCyeSQw6CR1odl8Cv1pgzzJn3O2H%2FreKIN5dYQDsYNU4ACJSL3NVaHyKPtRo5yXrsX%2BY84K9Buu63m5oIKptBzRmzK2sEzIZrbDr2ozO6Q8w73r42CIUU6tpOYSWMMXF2is3buq9bmoMbTFm5crdI6XbpUafSGcTlrFbNPM8ENkIbjSDz0ctWD9YsiGdqj%2BArNVF3Xdku74p8OCPfcuRu543sIu6XiX99BxXpDani46vRr%2BGPC5yisN%2Fr%2BXcJNO%2FI7UCkXBEfq1LQ128FExqPuGs00VyxVV6EGbjF8mcZ%2BBc9YJrPgAh79sEFBEk%2Byv5uvAiIELPxXOWQ77%2BgOGMG0lmN555IF4X0Qx%2FD9k94KRfuXT5I2w9klNqR0pq5%2FqZNDKJBf%2FTgmnEHUIfrFzC%2BeO7CRTO%2FDAa3csrbWkO7jtitdBh7n5OBrIPUp8m25XGp1X3pTrvyaRfQvAA1FJtzspbnK1z4U6jaH14DKXg%2FkyXaAtL%2FAazatHw929mgw42mm3fBFHOrrFD%2Bt9WCfWTgqesgBWeGkcZjnLyiCRkR8hQBLK2fbbDuYdT2bgQVKQmYQQAhVZyoUMPL4874GOqUBkt%2BwngkwSKXhGjWEruA2rZNCSJQUk4NtniskJSzinzZ7zYfCcABkhMSGt48gLDN%2F3chumTzMmANFLkGxopUklPjfSiY9oQEwdP0%2FrajwHVLy%2FzWC9ADdZ%2FG0l1uqjLhpXJbYwLOijdREIM1eRVMqso6VCaw5%2F5YMhhFk3nn8I0cLm5Z6%2F7myBSHS7CK4ugOIjgWgAu033B7b%2BJ8aOs4YzUHy%2F02%2F&X-Amz-Signature=59cbc54960b1cae28b3c3f5e22fccff760e562373861a32e152f47407da4b9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZAVKFR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIA3LzW%2FfdYbLde5dIz8DanA5YtWzQiUNLG2oS0W0EBb9AiEAlIEPCa7msncsCFlFiuNF4wGs4S9PEMoHzviugnItqEEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCID2X7X1sGEw0ZSFyrcA%2FKlz%2FBfEDaNDAKqZtOdhZy4e%2BJTbijIUAqAvoJ63etdpoKAaknCyeSQw6CR1odl8Cv1pgzzJn3O2H%2FreKIN5dYQDsYNU4ACJSL3NVaHyKPtRo5yXrsX%2BY84K9Buu63m5oIKptBzRmzK2sEzIZrbDr2ozO6Q8w73r42CIUU6tpOYSWMMXF2is3buq9bmoMbTFm5crdI6XbpUafSGcTlrFbNPM8ENkIbjSDz0ctWD9YsiGdqj%2BArNVF3Xdku74p8OCPfcuRu543sIu6XiX99BxXpDani46vRr%2BGPC5yisN%2Fr%2BXcJNO%2FI7UCkXBEfq1LQ128FExqPuGs00VyxVV6EGbjF8mcZ%2BBc9YJrPgAh79sEFBEk%2Byv5uvAiIELPxXOWQ77%2BgOGMG0lmN555IF4X0Qx%2FD9k94KRfuXT5I2w9klNqR0pq5%2FqZNDKJBf%2FTgmnEHUIfrFzC%2BeO7CRTO%2FDAa3csrbWkO7jtitdBh7n5OBrIPUp8m25XGp1X3pTrvyaRfQvAA1FJtzspbnK1z4U6jaH14DKXg%2FkyXaAtL%2FAazatHw929mgw42mm3fBFHOrrFD%2Bt9WCfWTgqesgBWeGkcZjnLyiCRkR8hQBLK2fbbDuYdT2bgQVKQmYQQAhVZyoUMPL4874GOqUBkt%2BwngkwSKXhGjWEruA2rZNCSJQUk4NtniskJSzinzZ7zYfCcABkhMSGt48gLDN%2F3chumTzMmANFLkGxopUklPjfSiY9oQEwdP0%2FrajwHVLy%2FzWC9ADdZ%2FG0l1uqjLhpXJbYwLOijdREIM1eRVMqso6VCaw5%2F5YMhhFk3nn8I0cLm5Z6%2F7myBSHS7CK4ugOIjgWgAu033B7b%2BJ8aOs4YzUHy%2F02%2F&X-Amz-Signature=d98d30ce49077598d41a88caf119e4b02046d5238c545bb54263df1b582b69cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
