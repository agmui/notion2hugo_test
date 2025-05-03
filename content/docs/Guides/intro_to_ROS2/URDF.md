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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKJXPPX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGLaUc%2B30Y4YYLVZ1SyunyHvV6dqTBwFWn1QBEHKU69bAiAE2PcrxqV8DyC8rnmHtT8Y1QHsItmsi7fMgkbgAn00ECqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLeLfSCdUKFv1ALpKtwD3LfoLEB0wq2oqbSWwcNIjT71IbaMQAno6wSbDRdgpsVvp9Ak0AEBemaSWV5%2FzsCUYg9VErSzmOwz0f%2FnBIEfd%2FZNIa8vYOlbwNRh%2F2fy4nLiRumm0qR6WzN4Nton2r9R9ybBcPj%2BdQlvetBp3J%2BSEYj6OwY%2FiMRdys1BZTPzzYF%2FrwA1%2F4fCHjmJFbBFovMVIJjT8MLtxkf7aB5u8T3dwT2VSC5Ibe%2B1WbuRokMmO5gVoebojoSYwxHuefdu5Tw4OzyL0gy1j8NLNg6JdZMCKPXfkyBet4uP2iT17ISlZQMWpPwfgoUSGKLLg0D5hXVYMsZvrz%2BS49X98Myp0VTW0pXnGHzGsffuorcmjcqOJaicf4gQ2Eo6LxWcAVVX%2BxcRJPs4krJQ547ZpGSYeHXxvlh0K9J%2Fkp1kMDAYdNy36Hlb9UhH9xoF16gbAEdn%2BduXqRmKN0VRpEs%2BuP5iorvmAvAPtsu4JYCA9t1O8iiBDgxaZZIhbtMJqyGFlZMn59CZM1L%2FRW2KMC9w7vmXhfw2vZ%2F%2B%2Bx6syF6KKKd7genJJsgBXpib%2FAOQdohkEed6X%2BYfJFkfGI4bSGhwZcRTzQRbD7I1usFrpQvpJ%2F4lyzQga1UlsGC5y7PhjU1VA0swqPPZwAY6pgFioV7VLZnMKjD5MkVVSHwwoQnVhIaJljMIDiglLY2RMCtuSlFhF1Q%2B4M%2FBXjgw5NLfEh19%2F9%2Bn7P6wg6e%2FNlYwkPa%2FM55gnSgtv0i7YyJ1Ym%2F38FkJZjND4S2wJlNPAdi7ww1dPyYGNgYoXRncnjt1Y8LN8bs%2FdYlgehv9m5tShwomkN40%2FXYJzVVtA1pJ1ofC%2B5c96hisz9j%2FcAvV8f3jPpA16vM9&X-Amz-Signature=bea54a01f89d2056718d09e279b18eb3f4991819dfcf6d3b876326da40c71fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKJXPPX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGLaUc%2B30Y4YYLVZ1SyunyHvV6dqTBwFWn1QBEHKU69bAiAE2PcrxqV8DyC8rnmHtT8Y1QHsItmsi7fMgkbgAn00ECqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLeLfSCdUKFv1ALpKtwD3LfoLEB0wq2oqbSWwcNIjT71IbaMQAno6wSbDRdgpsVvp9Ak0AEBemaSWV5%2FzsCUYg9VErSzmOwz0f%2FnBIEfd%2FZNIa8vYOlbwNRh%2F2fy4nLiRumm0qR6WzN4Nton2r9R9ybBcPj%2BdQlvetBp3J%2BSEYj6OwY%2FiMRdys1BZTPzzYF%2FrwA1%2F4fCHjmJFbBFovMVIJjT8MLtxkf7aB5u8T3dwT2VSC5Ibe%2B1WbuRokMmO5gVoebojoSYwxHuefdu5Tw4OzyL0gy1j8NLNg6JdZMCKPXfkyBet4uP2iT17ISlZQMWpPwfgoUSGKLLg0D5hXVYMsZvrz%2BS49X98Myp0VTW0pXnGHzGsffuorcmjcqOJaicf4gQ2Eo6LxWcAVVX%2BxcRJPs4krJQ547ZpGSYeHXxvlh0K9J%2Fkp1kMDAYdNy36Hlb9UhH9xoF16gbAEdn%2BduXqRmKN0VRpEs%2BuP5iorvmAvAPtsu4JYCA9t1O8iiBDgxaZZIhbtMJqyGFlZMn59CZM1L%2FRW2KMC9w7vmXhfw2vZ%2F%2B%2Bx6syF6KKKd7genJJsgBXpib%2FAOQdohkEed6X%2BYfJFkfGI4bSGhwZcRTzQRbD7I1usFrpQvpJ%2F4lyzQga1UlsGC5y7PhjU1VA0swqPPZwAY6pgFioV7VLZnMKjD5MkVVSHwwoQnVhIaJljMIDiglLY2RMCtuSlFhF1Q%2B4M%2FBXjgw5NLfEh19%2F9%2Bn7P6wg6e%2FNlYwkPa%2FM55gnSgtv0i7YyJ1Ym%2F38FkJZjND4S2wJlNPAdi7ww1dPyYGNgYoXRncnjt1Y8LN8bs%2FdYlgehv9m5tShwomkN40%2FXYJzVVtA1pJ1ofC%2B5c96hisz9j%2FcAvV8f3jPpA16vM9&X-Amz-Signature=5dab997bffbc7c4a8e74d2f3725297e58a8263c674abe393cdbdf9dac3896f20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
