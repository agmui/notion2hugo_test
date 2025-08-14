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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR7PVPW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDIPMlFwc%2BdfHgLdrayGkXPvBwYcqThdktyBT3MUjfSpgIhAMRExbVdA0CUkhtd5xxwUQcTCQSakoVVhYej8jC4vfk9Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzy25vXiyqU%2BoAVrJEq3AMsNLI65lTIf5moufWmWO7D5657KQ8FQqztRxjfHjs2cApXfP98eYv9XJteNQYXE2vx4D6guHsgSid1ilzgea1ODC9FapwMZVeaSbmR7%2FPrYknbT1R09cQKzO49DZZEWMS81blWJLv2RQRhx2%2B%2FTrEUWaG511%2BV41IPUhyo3hya%2FYcwxsGvP2UrG8NbBw8QgVI3GAO3r4e%2Bab42fbQV4C5oGHWk%2BmKaYLE6pZC23ntIeIXswtZiNFuUps0URH9Aa9cp47853L%2FHBlqQoLix0nAfQ0qWI2qRyK5D9KjKOhzha5QQLpHOTSObOx1VD94FR%2Frz10%2FwBcgCBc%2FBltQVY4iT6pmqJl5we2klRV6%2BAnCiS%2FFu8xhrpI75jDAlBQThaEQhA3sijJVZ%2FAMX%2Bl%2BEyVKfmZJhhYcw2C0LluM9uVzRFR2ooYr8GlPkdC2FOX8NSGHNI1v23f64yXbTamZFvbchwhCypVPIdrTH%2FYMjULvq%2FxLYz3ZAf2XGcQId0lE9BEbWMbnzJcmIMnvyg2YOTSlH9j5FVS%2F5m3TE5ypBcXSyAzTH71IolVrMfbFFkHx6N5aMRSLCRhn1A1BR05VQ1aPsSd5q2mYPH%2FzVIZm6CCE07AnApI4I8eNUSP%2Bj%2BTD%2FwfjEBjqkAetLpb6zGiL%2FIiEQhpho8%2F4R4kh449GOB%2B4gQ16YXuMILxD7anOJHhcZEEj3K5Y5IYrm%2F%2FQZjJaLJWWtlDwLGOALqTOUiIK6zdnVFeIRoUSkKUFgSY2wiIuJSvvuPgST3qRKJ4fo62yRww3UwBaNehn7wcIigulSowv6tCEkrlQ%2FRcRgbwvHabbKo3zZ8p2GQFh%2Bu%2FMOMKXGvLEutO%2FouKXD%2BAje&X-Amz-Signature=1f953fc69c630c21271ca55461516300f2e98f91c313b322f4f5f13d71e05c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR7PVPW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDIPMlFwc%2BdfHgLdrayGkXPvBwYcqThdktyBT3MUjfSpgIhAMRExbVdA0CUkhtd5xxwUQcTCQSakoVVhYej8jC4vfk9Kv8DCEsQABoMNjM3NDIzMTgzODA1Igzy25vXiyqU%2BoAVrJEq3AMsNLI65lTIf5moufWmWO7D5657KQ8FQqztRxjfHjs2cApXfP98eYv9XJteNQYXE2vx4D6guHsgSid1ilzgea1ODC9FapwMZVeaSbmR7%2FPrYknbT1R09cQKzO49DZZEWMS81blWJLv2RQRhx2%2B%2FTrEUWaG511%2BV41IPUhyo3hya%2FYcwxsGvP2UrG8NbBw8QgVI3GAO3r4e%2Bab42fbQV4C5oGHWk%2BmKaYLE6pZC23ntIeIXswtZiNFuUps0URH9Aa9cp47853L%2FHBlqQoLix0nAfQ0qWI2qRyK5D9KjKOhzha5QQLpHOTSObOx1VD94FR%2Frz10%2FwBcgCBc%2FBltQVY4iT6pmqJl5we2klRV6%2BAnCiS%2FFu8xhrpI75jDAlBQThaEQhA3sijJVZ%2FAMX%2Bl%2BEyVKfmZJhhYcw2C0LluM9uVzRFR2ooYr8GlPkdC2FOX8NSGHNI1v23f64yXbTamZFvbchwhCypVPIdrTH%2FYMjULvq%2FxLYz3ZAf2XGcQId0lE9BEbWMbnzJcmIMnvyg2YOTSlH9j5FVS%2F5m3TE5ypBcXSyAzTH71IolVrMfbFFkHx6N5aMRSLCRhn1A1BR05VQ1aPsSd5q2mYPH%2FzVIZm6CCE07AnApI4I8eNUSP%2Bj%2BTD%2FwfjEBjqkAetLpb6zGiL%2FIiEQhpho8%2F4R4kh449GOB%2B4gQ16YXuMILxD7anOJHhcZEEj3K5Y5IYrm%2F%2FQZjJaLJWWtlDwLGOALqTOUiIK6zdnVFeIRoUSkKUFgSY2wiIuJSvvuPgST3qRKJ4fo62yRww3UwBaNehn7wcIigulSowv6tCEkrlQ%2FRcRgbwvHabbKo3zZ8p2GQFh%2Bu%2FMOMKXGvLEutO%2FouKXD%2BAje&X-Amz-Signature=85ee6232a707174073225020992cc3d0c6f2dac1691586054e89c616f4799813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
