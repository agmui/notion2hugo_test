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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPY5L4B%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa00d5O1hKcO1crrGOjFJcf0D%2Bc%2BRev0FeUPlel9TIZwIhANISfHN2tSc9Eqe2s9fNfNvM21h35%2FMyDoxmBljy1B%2BwKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu2RPXqabxe4QX%2Bt4q3AM2YStungICSJ4BCCXoce%2ByRanm61Ft%2B7JQsixjdX%2BFdd1o2udiC94%2BZNy13%2FobSiOIjCWRtvkYXkBhwAWe7rZObDlN5s8mHHJ1TpcERe%2BVZERjErb9ebfldJRoUcSHc0B4T%2FJqCzqy6hlvmMwzmwXUzcB%2BlcSh%2FAAgKYnStnFkuPCuYjUpGFwrZAk08Ekt1SqnaiEWRU3QKmPvtQCmzBZOY9XgeLSVYscJIl0P3TrCxUkVt6hOGTsNuSyUz0BcaVVW3lDB9aJgqZt%2BZ6zJnKAxncYNUkIposhYCAP0oWOWbJ3aFE4qkIAh7ojuPfTJlRWmnXeScO%2Fzhk4urNNKWqecc8MAhOIKHOm3YFjGeRzm%2FiQTLAmqk8qLoN8VKHgU0qKvomaXWKz0zQttbsii2s9KxEt4H0%2Fk8L9y3EnlEtUGSNM2eWZBxrPtI1bNEtqaqekrIMNEZUrYgtHHTZZ9na321jXYnNi%2FsenBbQL88OWxGA2Q6mjWsu6NuBk3mCrJmBi5yZuILHlNRuLxRerEO4r2oEa0XbGMt9q%2Bv0FbAnvhyUZU3yinU%2BgDj10eZk3WAgza25aQmIEJDzCrC1ko%2Fgx3qHJZLYa9wVkxJmzAVrz0mnPa7rmd7Pc0iMtl%2FDD1yrm%2FBjqkAVA1GLKelAygjPXTOlbOgC2MO1zBS9w4Fd1%2Bqb3519Ys%2BwnQ7WskFFKdOPNv8xyPMesnETmMO4LTEQayaDxPPzH8eJ8JPPkvfyq8Tl73fv7qs8JUMeqNiIxoeEcajWCznCAzqkO05q3mUraRn8tvCHzAqP5FSIhT9lv1Kpp3V%2F%2Bndr%2BzsNqkSlFKw7aUGxPdMxFneFVmXqx6NWsC7yHM3%2FPpDGkv&X-Amz-Signature=2b1d5ab5894681b249ce6911263bae598b767f4e09acd4576c4bb22e78130628&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPY5L4B%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa00d5O1hKcO1crrGOjFJcf0D%2Bc%2BRev0FeUPlel9TIZwIhANISfHN2tSc9Eqe2s9fNfNvM21h35%2FMyDoxmBljy1B%2BwKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu2RPXqabxe4QX%2Bt4q3AM2YStungICSJ4BCCXoce%2ByRanm61Ft%2B7JQsixjdX%2BFdd1o2udiC94%2BZNy13%2FobSiOIjCWRtvkYXkBhwAWe7rZObDlN5s8mHHJ1TpcERe%2BVZERjErb9ebfldJRoUcSHc0B4T%2FJqCzqy6hlvmMwzmwXUzcB%2BlcSh%2FAAgKYnStnFkuPCuYjUpGFwrZAk08Ekt1SqnaiEWRU3QKmPvtQCmzBZOY9XgeLSVYscJIl0P3TrCxUkVt6hOGTsNuSyUz0BcaVVW3lDB9aJgqZt%2BZ6zJnKAxncYNUkIposhYCAP0oWOWbJ3aFE4qkIAh7ojuPfTJlRWmnXeScO%2Fzhk4urNNKWqecc8MAhOIKHOm3YFjGeRzm%2FiQTLAmqk8qLoN8VKHgU0qKvomaXWKz0zQttbsii2s9KxEt4H0%2Fk8L9y3EnlEtUGSNM2eWZBxrPtI1bNEtqaqekrIMNEZUrYgtHHTZZ9na321jXYnNi%2FsenBbQL88OWxGA2Q6mjWsu6NuBk3mCrJmBi5yZuILHlNRuLxRerEO4r2oEa0XbGMt9q%2Bv0FbAnvhyUZU3yinU%2BgDj10eZk3WAgza25aQmIEJDzCrC1ko%2Fgx3qHJZLYa9wVkxJmzAVrz0mnPa7rmd7Pc0iMtl%2FDD1yrm%2FBjqkAVA1GLKelAygjPXTOlbOgC2MO1zBS9w4Fd1%2Bqb3519Ys%2BwnQ7WskFFKdOPNv8xyPMesnETmMO4LTEQayaDxPPzH8eJ8JPPkvfyq8Tl73fv7qs8JUMeqNiIxoeEcajWCznCAzqkO05q3mUraRn8tvCHzAqP5FSIhT9lv1Kpp3V%2F%2Bndr%2BzsNqkSlFKw7aUGxPdMxFneFVmXqx6NWsC7yHM3%2FPpDGkv&X-Amz-Signature=9e9a9d8da18304b8617826fe4765a049672f54e039e825c7e153a48091e4a4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
