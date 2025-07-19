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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RFM2K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm1ZefbjWbztI0rW6qyZA5vROZ%2B0zdIiKzpGODbbaAZAiEA3qwyn9bFLsXeKD2xdQi8BavwH6%2FgeseQ456cnV%2F%2BlMkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc8gNfFyz%2BEYgOPhyrcA%2FOzu4iOO7eqV8ZWRcF1xhU0cH%2F2uuOnbcFygRLEGWHVwD9vkJw6KnmvKyD16jbjJKIyLfK2yQ%2B23Qgc5MkFTZjGv2NIsjk%2F9oI2ozmmAyQR%2BVUGeoYOqz632GniWk%2BxwcsmR4mUJUxBh0KlYST1tTykJx46xck0GcdbI8eLh5fAS81betpq4r131VhP%2BAiS1Py4ik3hOOSv2SkM8LSgihK4ZT5hue6leafetL9WlESyX%2BCBqQ5tN%2BSOfFLrBDd6KoXSeAgx6GQH8rhG9T9t1doQlZpzgppnjj8vdHAhlF8LMlHMsGVfz6zO2npUVLWIbNHVXHUaN7FciZXlb%2FSdukt7KL7Y3Unpz613cRq3QHAT2hxSIwNndxRc%2FHzCOc0JIlMQPJB3wFQ%2FHdij78rQChflmlKc5LqXYiXoEyX6MoYZNGBMLLRJrWXmUG6kp6KbDCkwYcpi3FM%2BweYfEYvuaCc8Fyt9MvTGWKbs3C9Yad2HrobhibQkBlqXkF8hy1Re4rP3lsPS18wMOyC0D9V837i%2B1VoociLN7pCQk7W2BINIo5KzAwnlaH%2B3w3LgMlgDF34fK9haX%2BymEIMhR6bNpXXfE10nxGW5UkXDEKU7DQt8o9jwEOTc7eJjlfoHMKD278MGOqUByzPeSHXCuovJnhNOF8FzXWKhEDKDQVpLSYuWVVKBaxwHUDNP3u3FE%2FfJbVVVVzUnLnE6C2DHbLN1JoZgHCaKufHXFSSb2cu8vX7gMATyCrG0tj6hwzVvCksoIUJgCIXOr8Ux%2B6y9MgQP%2FMFTN2F9%2F12po8KfUrMn0XDq5up86hXMZixuD1PucGUg9F4%2FNqINltOaUje9q5vj9q9XxrGIvfoW46BG&X-Amz-Signature=659ed41b48c1afb4a6e16fa63ccd0b882d0c040f5436430cc40f452c0e566527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RFM2K4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm1ZefbjWbztI0rW6qyZA5vROZ%2B0zdIiKzpGODbbaAZAiEA3qwyn9bFLsXeKD2xdQi8BavwH6%2FgeseQ456cnV%2F%2BlMkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc8gNfFyz%2BEYgOPhyrcA%2FOzu4iOO7eqV8ZWRcF1xhU0cH%2F2uuOnbcFygRLEGWHVwD9vkJw6KnmvKyD16jbjJKIyLfK2yQ%2B23Qgc5MkFTZjGv2NIsjk%2F9oI2ozmmAyQR%2BVUGeoYOqz632GniWk%2BxwcsmR4mUJUxBh0KlYST1tTykJx46xck0GcdbI8eLh5fAS81betpq4r131VhP%2BAiS1Py4ik3hOOSv2SkM8LSgihK4ZT5hue6leafetL9WlESyX%2BCBqQ5tN%2BSOfFLrBDd6KoXSeAgx6GQH8rhG9T9t1doQlZpzgppnjj8vdHAhlF8LMlHMsGVfz6zO2npUVLWIbNHVXHUaN7FciZXlb%2FSdukt7KL7Y3Unpz613cRq3QHAT2hxSIwNndxRc%2FHzCOc0JIlMQPJB3wFQ%2FHdij78rQChflmlKc5LqXYiXoEyX6MoYZNGBMLLRJrWXmUG6kp6KbDCkwYcpi3FM%2BweYfEYvuaCc8Fyt9MvTGWKbs3C9Yad2HrobhibQkBlqXkF8hy1Re4rP3lsPS18wMOyC0D9V837i%2B1VoociLN7pCQk7W2BINIo5KzAwnlaH%2B3w3LgMlgDF34fK9haX%2BymEIMhR6bNpXXfE10nxGW5UkXDEKU7DQt8o9jwEOTc7eJjlfoHMKD278MGOqUByzPeSHXCuovJnhNOF8FzXWKhEDKDQVpLSYuWVVKBaxwHUDNP3u3FE%2FfJbVVVVzUnLnE6C2DHbLN1JoZgHCaKufHXFSSb2cu8vX7gMATyCrG0tj6hwzVvCksoIUJgCIXOr8Ux%2B6y9MgQP%2FMFTN2F9%2F12po8KfUrMn0XDq5up86hXMZixuD1PucGUg9F4%2FNqINltOaUje9q5vj9q9XxrGIvfoW46BG&X-Amz-Signature=bc37f0d736bddbba86a5725b896e4148a0111f317a31b767744c9164c82deb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
