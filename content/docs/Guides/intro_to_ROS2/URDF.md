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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5B6ZVZ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDP3lu8uRW%2Ff87w4347Y5%2F%2BQbEmkf7iPUfZFXKU19nb8QIhANL8aPW33pSDnYHsT%2FUIPs%2FNEma4ACZh86a9v5ds8l9%2BKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCP6bEHc3w27Feu0q3AO9rlQkjsAMfYAwbtITCWQpHY94TOpJYmaa1C%2Fh3N7fun11B6tXIb1Ea2yNgYQUqLu1AUVWwaiO6Z0ECU8ALdH1SULA5HyTl1dmKNeZW0dQS8faxqPUoldzQzocnm%2Bb6BFoy3ROHNzd2V4iJCJ4yiWIpVLIGk4msSyZ3k%2BV6%2FuHD33fi3vSHjfhbFMPQBpvRcoJU7IIidPdqr5e2nXnHGddIlGydJaDtyWsZHB2JcadRiP6F1xF3PWoL2le6YvT3LAOJmJyaaE8Hwym%2BLTBVcEFxUtokHwMHeWwCUJVOSYmkEJfOF53BY7DRyBOVfBZDkf4IwC7a%2BKMqU5iR28hKLUaWSzYUAWdrb1DiIGslqUzwlCQoaoVeJHzh%2B1m7DBgcqY%2Fb1cTPXbLtdZqgoB%2BUpJQGbTHQTykbIWmOKs6rBrKW96de8w8mX0PywYpNICs40ggHpFLQsydk1zOWVATJJP36nIBUfsJEARhAEOSJ85QeqtuUu4LSZgAXigTJfbKnj4dUznc8BiYl59BClC%2FRYuHFb8RCAwgROFkGD%2B%2FbKidVRLwpMvmfB8FS4pIRjV%2FLiV3WLvyYTBBrUVKNjyioNwuRD%2F2pEZtTNstmyKKDZNfy30tSUYrRNePsP%2FNfjCZuq3CBjqkAVx8YR5zRBCvVcjB8ZeN7c8BogfYvWYGw2wa2%2Fu3sVwhHqFfA8XeHoZy%2BhKILXjaV7wDT3RJ9SrJ2%2BHc9rO%2FNbOZccCM7V20IWWPIs%2BiPQLW1V%2FbSAi7BHzEUqTkCp8SkCcsXy6a9Hxem1AnyV92geSdU%2BkagJt3TZMkCVWo5l8Q2Dr4xZI8QivQQag0Q9hnyRNkwtcNodqsHznYBytIwDUaF5fw&X-Amz-Signature=27c86d93ba9cd9b5aee4c6d5ea5d7dca68912c3dca7c79314429b6a6bb7d5834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5B6ZVZ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDP3lu8uRW%2Ff87w4347Y5%2F%2BQbEmkf7iPUfZFXKU19nb8QIhANL8aPW33pSDnYHsT%2FUIPs%2FNEma4ACZh86a9v5ds8l9%2BKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BCP6bEHc3w27Feu0q3AO9rlQkjsAMfYAwbtITCWQpHY94TOpJYmaa1C%2Fh3N7fun11B6tXIb1Ea2yNgYQUqLu1AUVWwaiO6Z0ECU8ALdH1SULA5HyTl1dmKNeZW0dQS8faxqPUoldzQzocnm%2Bb6BFoy3ROHNzd2V4iJCJ4yiWIpVLIGk4msSyZ3k%2BV6%2FuHD33fi3vSHjfhbFMPQBpvRcoJU7IIidPdqr5e2nXnHGddIlGydJaDtyWsZHB2JcadRiP6F1xF3PWoL2le6YvT3LAOJmJyaaE8Hwym%2BLTBVcEFxUtokHwMHeWwCUJVOSYmkEJfOF53BY7DRyBOVfBZDkf4IwC7a%2BKMqU5iR28hKLUaWSzYUAWdrb1DiIGslqUzwlCQoaoVeJHzh%2B1m7DBgcqY%2Fb1cTPXbLtdZqgoB%2BUpJQGbTHQTykbIWmOKs6rBrKW96de8w8mX0PywYpNICs40ggHpFLQsydk1zOWVATJJP36nIBUfsJEARhAEOSJ85QeqtuUu4LSZgAXigTJfbKnj4dUznc8BiYl59BClC%2FRYuHFb8RCAwgROFkGD%2B%2FbKidVRLwpMvmfB8FS4pIRjV%2FLiV3WLvyYTBBrUVKNjyioNwuRD%2F2pEZtTNstmyKKDZNfy30tSUYrRNePsP%2FNfjCZuq3CBjqkAVx8YR5zRBCvVcjB8ZeN7c8BogfYvWYGw2wa2%2Fu3sVwhHqFfA8XeHoZy%2BhKILXjaV7wDT3RJ9SrJ2%2BHc9rO%2FNbOZccCM7V20IWWPIs%2BiPQLW1V%2FbSAi7BHzEUqTkCp8SkCcsXy6a9Hxem1AnyV92geSdU%2BkagJt3TZMkCVWo5l8Q2Dr4xZI8QivQQag0Q9hnyRNkwtcNodqsHznYBytIwDUaF5fw&X-Amz-Signature=0b6ca33c92346b0522e5d231e5f021575f5e5d9a1e19b4fe70d488faba4bfe99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
