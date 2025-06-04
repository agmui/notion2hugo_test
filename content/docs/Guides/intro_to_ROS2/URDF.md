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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3TX53O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGssOwvvF79DTXJ7BJwLpRthEdh6BdRX%2BDVT4uMBqrT%2BAiEA8hc7TQOpZlaH%2BbRpC5%2Be9C4H6os%2BcUiHOZepe1zT5Lwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzE7SmwCXR9XhWf1CrcA21teum6aDp1ei9NdSGdBIirVYSmZSfJ5RfXQJXMfg49CiUrNWg%2F8OvQnn8PnVLwRenOXPd3iFp3RWC4IP8fU3EcIbFYUDvxY0V8YBmZiyArhqbZ7A4uxia9rrinT8gGsP4cAnDGt6ZNE3njeQu2onzZsDNakm5njHg61kCIrry%2FVLvjNGjw60p0tbU1Q1B9PXmsumK20PzL6J7pRkRMmMpgQN3A%2BWpshGaxAPkNAdRcwJu4FDw%2F5hkvbihkCLUOZihss8RHjtMeI1ZPHP4LdE1AlTRNPCzZ9V0Y3kMAxys0JgkFK0FUnpYd%2BjfFmNq4sB%2F5JoG3xrpiefaqVlMEOhW%2B%2Bo8pPp4Us1U%2FB03AawBcaJhlqSXvJxiUueIMOZNMnpr6gdx%2B5rjH3hTPSBTUWZIqzz9fnsHL5ZCNsqcJl6DpHoA0XnQQVBHnizFwL%2BtFmZl%2BuC2vGJFUwE0z6q%2Foel4TlgqkjfGPAg1Et9wy0zcgwxYkGUyM3fy2wNYIHe7KG2KAUEcuZyfeoEKNbid6KbOm6LQtvGn%2FPVIBizzJHHDftbhghRwUu8ihfkFfw6o8cJ3A9WTIQerhrw%2BTvDyGIVr%2FkvY1p1bRgJKedLzBQaw65GdyoXwRl6LrNvTpML%2BAgcIGOqUB8BM5KoAPyDnGs110HLY%2FyEaWHxiU10AtP0%2FQ3UJRcDH6hxqZn8nEwx%2F8FnescGqfm3sh840L3TOHOqLlCViF3nJ3kWQyQ%2FGB0PggyoCOZJU21xATIm3mMmluEwqxCUwKuyF03wtTijOz%2BXT%2FpmUbnQT0FQ5N8CKjxz8l6%2FIEy%2FxEVKV8aeuWwZwjETKn0fUWNTgZRPbfAqC6JkdNA98q3%2BbxtwUr&X-Amz-Signature=716d8df17cf163bc8927517ac81313dfd6fa63964fdb5ec06dc0b3948273499a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3TX53O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGssOwvvF79DTXJ7BJwLpRthEdh6BdRX%2BDVT4uMBqrT%2BAiEA8hc7TQOpZlaH%2BbRpC5%2Be9C4H6os%2BcUiHOZepe1zT5Lwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzE7SmwCXR9XhWf1CrcA21teum6aDp1ei9NdSGdBIirVYSmZSfJ5RfXQJXMfg49CiUrNWg%2F8OvQnn8PnVLwRenOXPd3iFp3RWC4IP8fU3EcIbFYUDvxY0V8YBmZiyArhqbZ7A4uxia9rrinT8gGsP4cAnDGt6ZNE3njeQu2onzZsDNakm5njHg61kCIrry%2FVLvjNGjw60p0tbU1Q1B9PXmsumK20PzL6J7pRkRMmMpgQN3A%2BWpshGaxAPkNAdRcwJu4FDw%2F5hkvbihkCLUOZihss8RHjtMeI1ZPHP4LdE1AlTRNPCzZ9V0Y3kMAxys0JgkFK0FUnpYd%2BjfFmNq4sB%2F5JoG3xrpiefaqVlMEOhW%2B%2Bo8pPp4Us1U%2FB03AawBcaJhlqSXvJxiUueIMOZNMnpr6gdx%2B5rjH3hTPSBTUWZIqzz9fnsHL5ZCNsqcJl6DpHoA0XnQQVBHnizFwL%2BtFmZl%2BuC2vGJFUwE0z6q%2Foel4TlgqkjfGPAg1Et9wy0zcgwxYkGUyM3fy2wNYIHe7KG2KAUEcuZyfeoEKNbid6KbOm6LQtvGn%2FPVIBizzJHHDftbhghRwUu8ihfkFfw6o8cJ3A9WTIQerhrw%2BTvDyGIVr%2FkvY1p1bRgJKedLzBQaw65GdyoXwRl6LrNvTpML%2BAgcIGOqUB8BM5KoAPyDnGs110HLY%2FyEaWHxiU10AtP0%2FQ3UJRcDH6hxqZn8nEwx%2F8FnescGqfm3sh840L3TOHOqLlCViF3nJ3kWQyQ%2FGB0PggyoCOZJU21xATIm3mMmluEwqxCUwKuyF03wtTijOz%2BXT%2FpmUbnQT0FQ5N8CKjxz8l6%2FIEy%2FxEVKV8aeuWwZwjETKn0fUWNTgZRPbfAqC6JkdNA98q3%2BbxtwUr&X-Amz-Signature=0d5197fec18c3a92b50365a55ff6314104b3b04498e702279a3a248cb0cc4e46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
