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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6Q4325%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNL%2FgPosNuPwyyuQLcDyI%2F2jzJcQLe34SSEG8sFMcOQIgVneETt%2BaiMpIUbGcQhcx%2BLj3xybGXITdLZeZ%2FBd%2Fj8Mq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPaAHYuC2ZqZ49Y3TSrcA1p5mtFAxBJSl5xHF8TB7ar3miRF1jK0c4gcH9s1ayBN%2BA0UYrZeQyQMrjEYC8%2BaU0xyYyOh29qLHw1XhnPi%2BcZ%2BXpg76AXKrJT6BODUHzmEAxfEXTgCIPt3EbpUL8Xsih7JdhlYo22rVnvxYgJcHE%2BPkMpGsPZDsbtMjH9YbMSE0nd9p4tVS0nVtyT%2B%2FrNBKcyHALeHmb36UGiyQTdpc8ElE0oUzc%2BTEs0%2Fu6O7wTFm%2F06CpKwEJ7b9hqHpRoUrH4%2BvoV759h%2Bfcgs%2Bu7G15eZTKIFGii40JxoIe4DT9kf9CeyMKwGe59N%2B39Gcjvo%2FIkcJl9%2FfMsooSsAmXVFU1RVQrrfHX02DL8HDMZit6c0z6UDqLWOz33p92I8LBJCZxLDx8PXkxGqWZsTBVWVGJpUwvIbMHpGBcoXS4zM9j45wRkkvpzsdp7ct8BtIVS5yol7f3FuGMqW9%2BHth4bt%2B7OLoTn72bM8WlMohkd8UeaYEjokpoXpkcTVItxLU4ClK%2BfFhx%2FBqqkQ6086jKXRS8KtJIq5Lo2uWTEd8tr05MciupskNgSpESyNBq8gC8viXtRG5ZbS%2FFoVESqmCZtK1xTFtO84V%2BCWWBCH6JjwDzmFh1vWYQ0bSSALvDdBiMIaC%2BL8GOqUBeVkPrDgdV4AgCdGmTng5B%2FHdQ2s%2FcXy1HMuYsx9nJ%2BUZU6M%2BmfQ4GY346wSDG90sMwVVWryRW%2BQ0zKP3UohdQ5c6cL7841oXEJVi6UBicS%2BR%2BfYOa6yJD%2B6zk%2FPYAYEhUfZcvbuWYs1p7jpYIs%2FlpQbM8IGh9UFvq8BSHbGB%2FvSTKqIbOUXL1tG4u8rQq%2FQiijSz7UnjiFCOvbXhnI5fQ8oPDQXp&X-Amz-Signature=835bf25b6a707f43c86eba2b2b35b3722da2d147d7194c0ff5609b8dfcae00f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6Q4325%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNL%2FgPosNuPwyyuQLcDyI%2F2jzJcQLe34SSEG8sFMcOQIgVneETt%2BaiMpIUbGcQhcx%2BLj3xybGXITdLZeZ%2FBd%2Fj8Mq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPaAHYuC2ZqZ49Y3TSrcA1p5mtFAxBJSl5xHF8TB7ar3miRF1jK0c4gcH9s1ayBN%2BA0UYrZeQyQMrjEYC8%2BaU0xyYyOh29qLHw1XhnPi%2BcZ%2BXpg76AXKrJT6BODUHzmEAxfEXTgCIPt3EbpUL8Xsih7JdhlYo22rVnvxYgJcHE%2BPkMpGsPZDsbtMjH9YbMSE0nd9p4tVS0nVtyT%2B%2FrNBKcyHALeHmb36UGiyQTdpc8ElE0oUzc%2BTEs0%2Fu6O7wTFm%2F06CpKwEJ7b9hqHpRoUrH4%2BvoV759h%2Bfcgs%2Bu7G15eZTKIFGii40JxoIe4DT9kf9CeyMKwGe59N%2B39Gcjvo%2FIkcJl9%2FfMsooSsAmXVFU1RVQrrfHX02DL8HDMZit6c0z6UDqLWOz33p92I8LBJCZxLDx8PXkxGqWZsTBVWVGJpUwvIbMHpGBcoXS4zM9j45wRkkvpzsdp7ct8BtIVS5yol7f3FuGMqW9%2BHth4bt%2B7OLoTn72bM8WlMohkd8UeaYEjokpoXpkcTVItxLU4ClK%2BfFhx%2FBqqkQ6086jKXRS8KtJIq5Lo2uWTEd8tr05MciupskNgSpESyNBq8gC8viXtRG5ZbS%2FFoVESqmCZtK1xTFtO84V%2BCWWBCH6JjwDzmFh1vWYQ0bSSALvDdBiMIaC%2BL8GOqUBeVkPrDgdV4AgCdGmTng5B%2FHdQ2s%2FcXy1HMuYsx9nJ%2BUZU6M%2BmfQ4GY346wSDG90sMwVVWryRW%2BQ0zKP3UohdQ5c6cL7841oXEJVi6UBicS%2BR%2BfYOa6yJD%2B6zk%2FPYAYEhUfZcvbuWYs1p7jpYIs%2FlpQbM8IGh9UFvq8BSHbGB%2FvSTKqIbOUXL1tG4u8rQq%2FQiijSz7UnjiFCOvbXhnI5fQ8oPDQXp&X-Amz-Signature=2a1849fed48f814e5f765e5ea5129816b716e17083875b729717026688a01427&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
