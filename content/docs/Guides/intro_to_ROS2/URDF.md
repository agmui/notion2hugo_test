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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IF6FC4C%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQwXZ3WDOMsh3N2eL8oMyTMpWgpzYpMEgMiCzHbyu93AIhAKiTYn520I5T%2BKjq8j6ounerezADh2VlOkqurd5gYspdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ%2FWLVL4QjtsYLJLYq3APxyoJylsn3LCuyCAipf8CS94dEhXRHVfNzojVVsmT8Tle3EwRCyAHJUMUCau4gvzG4M8ggjXkHhuqoh%2BYJya74TOTeym5JJmJz2Tubs0nL8RRjrA2RnaKI3zS%2BSHir3J54Zr4Ki1DTovW2CpOHX8kqL87RXChI8NB3Aw%2Fy%2F0yC54n6kh6SQI5a7CqR4tB8xGOoRKWTc1%2F13axYzQGHN43YPj0Ky67Nwj1SCvkQ8asHW%2Fy2MtAJa%2FQsYzc%2FfHn474SotQJ3wylY55%2B9x6nZjizcEnF3VEdshUkt9UIa5P5mAph0%2BUWFfEnvlJ8PNfn5CK27%2FX6VakYq1ON9ck8VeDMqIUNaX%2FqF0XrfzGQDYh3FlrU65EwcnQFZtI4ZtYrAB8X2Kmvr4NPJSJVxIQbF9Zyde0ZGaOGMb62egI3rpWv2GQRmYBsGI%2BBQMrQrMTMOtqnkzZBdiQw0UqgJoSSBRm0yJIj2rFuzCstqKGzrbNlA8jgAqHkNtniWRm9DOoCtBW1FRQuIc0oqvqrA6QwWCNgGuwXcvIX5aFXoF9vWtnQtzJJdc%2BLVpFw8LUFGAoU%2FtgYql3VIOZelDu4FnZmChULIBbWK%2Bmj6i4txwkrrLmxNwIYzN4mQzunOxYn1UzC65K%2B9BjqkAQpBQ2hvmIMdhxYbbpq1D7QgPzSsFSn2up2B9EkB5heEHe4sEFZn98OslB5DQPCv5PvDQZ1958d6q%2FipG8%2B9XLaQ2x2ARTR3iwNWOb9Gz8F%2BrEp8RUE2hyVRQrStZN5JCJn7%2BTmmfIpDKrCLhxVLrq599Dfoe60VYCEtoXQlzBRV4ln%2Bn0kvgM5LHox58UCayWQmOcWTswo8IddVANuR4QaEAyXW&X-Amz-Signature=c851a241bb5497a179bf4f5048d275224f7d243098ac042e0f60f931a881a8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IF6FC4C%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQwXZ3WDOMsh3N2eL8oMyTMpWgpzYpMEgMiCzHbyu93AIhAKiTYn520I5T%2BKjq8j6ounerezADh2VlOkqurd5gYspdKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ%2FWLVL4QjtsYLJLYq3APxyoJylsn3LCuyCAipf8CS94dEhXRHVfNzojVVsmT8Tle3EwRCyAHJUMUCau4gvzG4M8ggjXkHhuqoh%2BYJya74TOTeym5JJmJz2Tubs0nL8RRjrA2RnaKI3zS%2BSHir3J54Zr4Ki1DTovW2CpOHX8kqL87RXChI8NB3Aw%2Fy%2F0yC54n6kh6SQI5a7CqR4tB8xGOoRKWTc1%2F13axYzQGHN43YPj0Ky67Nwj1SCvkQ8asHW%2Fy2MtAJa%2FQsYzc%2FfHn474SotQJ3wylY55%2B9x6nZjizcEnF3VEdshUkt9UIa5P5mAph0%2BUWFfEnvlJ8PNfn5CK27%2FX6VakYq1ON9ck8VeDMqIUNaX%2FqF0XrfzGQDYh3FlrU65EwcnQFZtI4ZtYrAB8X2Kmvr4NPJSJVxIQbF9Zyde0ZGaOGMb62egI3rpWv2GQRmYBsGI%2BBQMrQrMTMOtqnkzZBdiQw0UqgJoSSBRm0yJIj2rFuzCstqKGzrbNlA8jgAqHkNtniWRm9DOoCtBW1FRQuIc0oqvqrA6QwWCNgGuwXcvIX5aFXoF9vWtnQtzJJdc%2BLVpFw8LUFGAoU%2FtgYql3VIOZelDu4FnZmChULIBbWK%2Bmj6i4txwkrrLmxNwIYzN4mQzunOxYn1UzC65K%2B9BjqkAQpBQ2hvmIMdhxYbbpq1D7QgPzSsFSn2up2B9EkB5heEHe4sEFZn98OslB5DQPCv5PvDQZ1958d6q%2FipG8%2B9XLaQ2x2ARTR3iwNWOb9Gz8F%2BrEp8RUE2hyVRQrStZN5JCJn7%2BTmmfIpDKrCLhxVLrq599Dfoe60VYCEtoXQlzBRV4ln%2Bn0kvgM5LHox58UCayWQmOcWTswo8IddVANuR4QaEAyXW&X-Amz-Signature=4bbcf523a7642702e979da5a2c65c7ea90d4a0f955f6d0095998f138b68c435e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
