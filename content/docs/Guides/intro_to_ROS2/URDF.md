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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W5A4TI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCH2zi5IkOVxyMQRaJAlOBxX1XGfksDbLLg%2FuQ3Bd%2FW90CIQD2Np%2Fkro%2F8Pz3DFMXHVODI3Gn5bdTsm%2B3QIlLoYefl%2Byr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMAdARl40DIo0eCzjKKtwDwv0tsRJ2hQqFad6m1mFe6ubxdUxXpPXt2iNJrUhBwOhfawlSCIoG9wnEIlR%2FNcsspfPoc2W%2B9rcOMN%2BmLMVcckebcbrU5mtKC5EA%2FjlkYQS%2BKRYZHWIPEKnbRD4sLXu3uPgCf9IPYoeJEge9%2FxBXYQe76JLf8IC%2BBzjNbf1bBj%2BK01RUb%2F4tsHBg1QHQTY1hCRqUPsfgibbg5CSA8RvjhP6YT3tNGyI3mWSNWZfCmX%2FQb%2B%2BYLWXJoZoTRASA0syYW0Z6RMVL%2F9fhEUare1TBJ%2Br03gaKA1WeI2r0U4i%2BbpZb8kgrEaHLFDISm7imzxLHbCXlcfUYpx6MVi8BuoWX9xXh5f88x6gj8YD7c6GxP5nV8pK17if%2FPywxxyCa0C1A1zACTYxAjQ%2B7C%2FURM18v1dL5qaDVqRIZyns%2Be3rEEjI6h9Lc0wrKNVDzjLWZ65TsJymxVTGvlC7EWl7R6uhlAXOaNLIammeuLuWEIRT9%2BAT7p65%2BE76OxsFr12jBQb1mkmpT%2FL%2FyYchbcTAiZKCIiwfCUPA0DFbDUmq0uqap0GlO2ZVUe3FubdNk7tUFWKqRj%2FqhJKDHYhj25MfglYbmOfDRfsOxlkOkT4TRO1Rpwjo%2B4nFY%2BMSftK47D74wo7TnwgY6pgE%2FSP8FHtZ58S7muv61J1BQvfftNVAf%2BSlpdBbn21ugKDouU9KteWOtRPiUnL82cH24UAiUlEFspSjYFJRVtXpZTGfGdrXu7G2ptY9cTKEHoe5v2D7fJG%2B8us7e8qQPSs8NhpRihAumuk3aGBzNFuvEeVSjzsJYExXaFUmAwBWwJpc9wBP8lT1d332T030%2FYAycrRE4dj5VLyZ%2BlXFc%2F7JuzAsxRRU0&X-Amz-Signature=d4038dc9c081bb49342bca2dabb2d23241530cb96d9eccca7780233d5e902271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W5A4TI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCH2zi5IkOVxyMQRaJAlOBxX1XGfksDbLLg%2FuQ3Bd%2FW90CIQD2Np%2Fkro%2F8Pz3DFMXHVODI3Gn5bdTsm%2B3QIlLoYefl%2Byr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMAdARl40DIo0eCzjKKtwDwv0tsRJ2hQqFad6m1mFe6ubxdUxXpPXt2iNJrUhBwOhfawlSCIoG9wnEIlR%2FNcsspfPoc2W%2B9rcOMN%2BmLMVcckebcbrU5mtKC5EA%2FjlkYQS%2BKRYZHWIPEKnbRD4sLXu3uPgCf9IPYoeJEge9%2FxBXYQe76JLf8IC%2BBzjNbf1bBj%2BK01RUb%2F4tsHBg1QHQTY1hCRqUPsfgibbg5CSA8RvjhP6YT3tNGyI3mWSNWZfCmX%2FQb%2B%2BYLWXJoZoTRASA0syYW0Z6RMVL%2F9fhEUare1TBJ%2Br03gaKA1WeI2r0U4i%2BbpZb8kgrEaHLFDISm7imzxLHbCXlcfUYpx6MVi8BuoWX9xXh5f88x6gj8YD7c6GxP5nV8pK17if%2FPywxxyCa0C1A1zACTYxAjQ%2B7C%2FURM18v1dL5qaDVqRIZyns%2Be3rEEjI6h9Lc0wrKNVDzjLWZ65TsJymxVTGvlC7EWl7R6uhlAXOaNLIammeuLuWEIRT9%2BAT7p65%2BE76OxsFr12jBQb1mkmpT%2FL%2FyYchbcTAiZKCIiwfCUPA0DFbDUmq0uqap0GlO2ZVUe3FubdNk7tUFWKqRj%2FqhJKDHYhj25MfglYbmOfDRfsOxlkOkT4TRO1Rpwjo%2B4nFY%2BMSftK47D74wo7TnwgY6pgE%2FSP8FHtZ58S7muv61J1BQvfftNVAf%2BSlpdBbn21ugKDouU9KteWOtRPiUnL82cH24UAiUlEFspSjYFJRVtXpZTGfGdrXu7G2ptY9cTKEHoe5v2D7fJG%2B8us7e8qQPSs8NhpRihAumuk3aGBzNFuvEeVSjzsJYExXaFUmAwBWwJpc9wBP8lT1d332T030%2FYAycrRE4dj5VLyZ%2BlXFc%2F7JuzAsxRRU0&X-Amz-Signature=0a2f0f9b9c4976e381c9213e4f82d8882d8093d18b730e1f0196ae2d95172a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
