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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4SINMU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfT3okYt%2F6cUOtzlyG5h8LWhU47gK1Ge1%2Fzz1McfgeJAIgSQjgNu1cF6I8fKKIPi2J8Y7fRqf0vvnrPefhxrUTe40qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDyvFIVvvAnc5FcyircA3aXQgo%2BnwwoA5NtTgyF5JrITNnsP459J6GX54BpRpBaEQvnD7hsGfqyFH%2BMnelcl48MeatpV55ci%2FqBO7gJLeWsUo%2B40e%2FUJDuRKOWiNXHVp9i%2Bv74hHO%2BrhKU6y8%2FUr8DeTMK%2F6UINMXJR2dn4NpM7CpotwzHQjRaQRaHGG9F9mPiScBI7Orn%2FrH0gdJYK9kQqzNcBHoaFQeNGHq6QlOgqYhBmgeiQVaxkLxHLtvaWVRluD4hTlucV7X8Z%2Fx3bUR3Aj2HNoMNLi9oEHCtXjYw7qaK6hLMJaVyomjkT0ClWEsVwiUlhT4EzWob3EJW17Lh5EYpozkezGum1AH6O%2Fv7guxDn5099lruIg7dGQjU9Q567UyXJb6Ck7hWoizZshFTaJlw1RYsQkHQC0YFSmbST9SYNbTYvPltgZi%2B%2Ba5h1QSNeQRwNrXxAV7OevWJd4gMZzcrC2KTY4gzUBwk7S%2BY8dZu1Q%2BRI%2Fnd6F8HrgLLPm6rcj8UDsihBWepTLIuWCo6RuaF9YoDD0BdhqqrlWDWNPJcJIowf3egp9O3oMF6%2BY9hqec8epBDPzrxPUNibjn7%2Bi0f30s19v8shXOrICLhwmPZmBEOOYi23AQGDyC%2F0QyH9qZHOwibkwk9mMJH1t8MGOqUBYZXDHVdoPZrbG99u4OGKP2bVTC3m6Syv1EAeAmbyUgfJqD433dfhmOIvkbzq6PVKpxHoVuCRo0EMyKmqc9s68vk3nNUuhk7MS0IlwOZnj4W0qfvN%2FKVoFpuHi6NIAf1vG8hkIm315j0E6al1J07mvyNghGRJEbFpyCNTKfNJheAcaM7V7KcBqnfarJllqIOGM4j3Jefwt52PoxVNOSpf7Ww9vj0I&X-Amz-Signature=e6f6ba6b4b38fab56ba807d86c37d40cd1bee93047d06c1c3b426453415ff7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4SINMU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfT3okYt%2F6cUOtzlyG5h8LWhU47gK1Ge1%2Fzz1McfgeJAIgSQjgNu1cF6I8fKKIPi2J8Y7fRqf0vvnrPefhxrUTe40qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDyvFIVvvAnc5FcyircA3aXQgo%2BnwwoA5NtTgyF5JrITNnsP459J6GX54BpRpBaEQvnD7hsGfqyFH%2BMnelcl48MeatpV55ci%2FqBO7gJLeWsUo%2B40e%2FUJDuRKOWiNXHVp9i%2Bv74hHO%2BrhKU6y8%2FUr8DeTMK%2F6UINMXJR2dn4NpM7CpotwzHQjRaQRaHGG9F9mPiScBI7Orn%2FrH0gdJYK9kQqzNcBHoaFQeNGHq6QlOgqYhBmgeiQVaxkLxHLtvaWVRluD4hTlucV7X8Z%2Fx3bUR3Aj2HNoMNLi9oEHCtXjYw7qaK6hLMJaVyomjkT0ClWEsVwiUlhT4EzWob3EJW17Lh5EYpozkezGum1AH6O%2Fv7guxDn5099lruIg7dGQjU9Q567UyXJb6Ck7hWoizZshFTaJlw1RYsQkHQC0YFSmbST9SYNbTYvPltgZi%2B%2Ba5h1QSNeQRwNrXxAV7OevWJd4gMZzcrC2KTY4gzUBwk7S%2BY8dZu1Q%2BRI%2Fnd6F8HrgLLPm6rcj8UDsihBWepTLIuWCo6RuaF9YoDD0BdhqqrlWDWNPJcJIowf3egp9O3oMF6%2BY9hqec8epBDPzrxPUNibjn7%2Bi0f30s19v8shXOrICLhwmPZmBEOOYi23AQGDyC%2F0QyH9qZHOwibkwk9mMJH1t8MGOqUBYZXDHVdoPZrbG99u4OGKP2bVTC3m6Syv1EAeAmbyUgfJqD433dfhmOIvkbzq6PVKpxHoVuCRo0EMyKmqc9s68vk3nNUuhk7MS0IlwOZnj4W0qfvN%2FKVoFpuHi6NIAf1vG8hkIm315j0E6al1J07mvyNghGRJEbFpyCNTKfNJheAcaM7V7KcBqnfarJllqIOGM4j3Jefwt52PoxVNOSpf7Ww9vj0I&X-Amz-Signature=934421b1596ae6f551b65d32118249921233224e7fa1a50340d0f3bced529474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
