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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVXPEDN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMvIn60O2hyBlCgBX4lMK4NhovOB39i6mmkJ5wfoLI8QIhAN7ljFfn2%2FzYZAZ4cV0faxJb16WixrNzwE5wBgypdX3oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXj%2BnEaKZvZaSDPYkq3AMxFEdQ1P2CJ7MaOtMXWS6VOUBDbYHjIIdvg8E2GbMUSo%2F1sSuN%2BFG6it2JXRhhDuG6IKt9Sgf8F5lBpk2ge3j%2FvILNSFTjqFUs6lcRjrsFM9rJcU89c9AuFVDOYbo33m8HqNA1R0R0d4Au7uZRwFsRKyCq%2B3AXkCsYQX7ASlS6FQt6C6FrZb%2ByKkdnEgnQlpdEyCs9w2vbNZDk7IG3IrRilUKB2%2B1UbkYZS8G2YjHFKMbOeyZCD8lWw3%2BBbuDGXT9IgoChM5pTD0i1U98rLptvh0LDUJCliRwwV1UlzZqo%2BlThfHFDuGgrBsZKj8ghHOk0LylSKdTdM5OKfVciRhHl%2FdrE4tEYZJoES5hkhBPIO1pm5gWHeomUFFM7KD78HGWQM42WbNzfLCnoVQ%2BAd%2BThRH9w6v5ONokGt3XRvBKyWCmH3Qa%2FATvla0SqfFqPuiGlhBL8KtDIaGe%2FF4LxKSy1AoORmmkZbx9%2FvbCIpqae75L8mCzTyBVNnIl2viWwi7c8AySRFdtkgWl3QIS%2BwHW6B3BED9H%2FX5Z4eKQU7vaXF5jP1bneDZtacaxmPXPmSk3Jynb26QpKBtLJMFKKs9NJjcWfNGBOZRZAUbgFyhVTnFDMxdbkLpMVJolcezCAsIK%2FBjqkAYgkmV%2BIyM1HbE52WDhs1odliBqX2bSaIJ0RUeZI4QFrR%2BWHhRVEbLI7NtfGl0zvDDRt39qljXpmTD4kixLRL4i0Bpdu4KXCXnK109n8d7vYxbx9qq%2BmwdWMqllZ5VOr5IM9nP1qYZ4bp6BCZ6u8BxnWFsutmGdP577f41CVK1KjbjDOMMEUSB7mqenlk%2BKHT5LPkmC7JSEkqtRdOjSl0IwIO4V3&X-Amz-Signature=c55203297c969e1adac25a4a4b8f6d4eaf85fd09a868713925fe68452594ca50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVXPEDN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMvIn60O2hyBlCgBX4lMK4NhovOB39i6mmkJ5wfoLI8QIhAN7ljFfn2%2FzYZAZ4cV0faxJb16WixrNzwE5wBgypdX3oKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXj%2BnEaKZvZaSDPYkq3AMxFEdQ1P2CJ7MaOtMXWS6VOUBDbYHjIIdvg8E2GbMUSo%2F1sSuN%2BFG6it2JXRhhDuG6IKt9Sgf8F5lBpk2ge3j%2FvILNSFTjqFUs6lcRjrsFM9rJcU89c9AuFVDOYbo33m8HqNA1R0R0d4Au7uZRwFsRKyCq%2B3AXkCsYQX7ASlS6FQt6C6FrZb%2ByKkdnEgnQlpdEyCs9w2vbNZDk7IG3IrRilUKB2%2B1UbkYZS8G2YjHFKMbOeyZCD8lWw3%2BBbuDGXT9IgoChM5pTD0i1U98rLptvh0LDUJCliRwwV1UlzZqo%2BlThfHFDuGgrBsZKj8ghHOk0LylSKdTdM5OKfVciRhHl%2FdrE4tEYZJoES5hkhBPIO1pm5gWHeomUFFM7KD78HGWQM42WbNzfLCnoVQ%2BAd%2BThRH9w6v5ONokGt3XRvBKyWCmH3Qa%2FATvla0SqfFqPuiGlhBL8KtDIaGe%2FF4LxKSy1AoORmmkZbx9%2FvbCIpqae75L8mCzTyBVNnIl2viWwi7c8AySRFdtkgWl3QIS%2BwHW6B3BED9H%2FX5Z4eKQU7vaXF5jP1bneDZtacaxmPXPmSk3Jynb26QpKBtLJMFKKs9NJjcWfNGBOZRZAUbgFyhVTnFDMxdbkLpMVJolcezCAsIK%2FBjqkAYgkmV%2BIyM1HbE52WDhs1odliBqX2bSaIJ0RUeZI4QFrR%2BWHhRVEbLI7NtfGl0zvDDRt39qljXpmTD4kixLRL4i0Bpdu4KXCXnK109n8d7vYxbx9qq%2BmwdWMqllZ5VOr5IM9nP1qYZ4bp6BCZ6u8BxnWFsutmGdP577f41CVK1KjbjDOMMEUSB7mqenlk%2BKHT5LPkmC7JSEkqtRdOjSl0IwIO4V3&X-Amz-Signature=b12f9607361aaed887778f54a561956699340f72e08815477c14b461c620e1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
