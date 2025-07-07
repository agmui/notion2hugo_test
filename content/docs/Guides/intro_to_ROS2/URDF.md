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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZ6ZR2L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDaLlqvDEPRW2CckywlJ8GH9%2BEDuEaxquTjR4b3UlsAFwIhAOnLNeoAqott56rn21f0j87XvXQJD3pjNULQprEtwTPjKv8DCHoQABoMNjM3NDIzMTgzODA1Igy9%2BsFgWW%2BmP5kGf3oq3AMU%2BbfqgKMZP%2Bq2z0zyRo14RcGT3%2BYDhssaHD4Whghy%2FoD%2FYMdCcJgJoVYyXSMpfo9Lp6OD9Vpu2Mu21%2FA%2FoR95J9HxWM%2BmNgdaUhe26C0MOYeHNG9%2FPLlscapRYKkhFEA0CJXBklBjxPDdnDgTmKxXACL8AqMVe792sCSoyfHhwGdp3O2PygVsXN0tKswNdMUNjRbEpLxirBC65amnt6r9WRAmAspcYjmqEe9f14hkXfiOXeR8JUxPoXaPo5S5RHBBjhhCe70%2B%2ByyYTdvW8Uw9G1Ze4FvZcoxUcTOZhgizumWz7oPS7j9K0z9oWCZpU3L86HykbSqO8J8KfHUBYKlK0HbiLQSDImqWA7sQ2c2ZJpbvP11HwCkyJ2V8Z1BY0ijesqjvGIDptl6iXcBKoRTl85uLfFTIlXHfLeYO990dlDyArhTtJALddpO9YrGEbxuWsGsmPEKWt5IsVInANRwIig7sdoC29wOftNwV5oTgLYed0aTBl6jQmbhM8NPNu9n%2FMY71KssyUTqcYfojuMynKYYj9lep1Kz1UQbId%2FwzdsdbpU0LWZs9C2eVAjPFyj68tG3%2Bltr9y1Lc4zqsuZImqVocblrKIZp%2Bti9rJbd9%2BYVwnkq0geHgR7eVfDCr6q%2FDBjqkAf2D7i7veznYAtRoEmKglHnmUEXWSa%2BAlOjs4f%2B31K7M9Z7Imw5a7p21ElbDN5WNGP%2F1mtrRTZC1OJd8aGAZLdQAju7QJkus6E3hRnsMVGi0vfh5i7Ef%2Fexx5%2FeccgU0a9dzYs0A%2BGEIN3oqURO02j%2B1sIJsRzpfSzvyQ2srCU%2F49ZiBBTelAz70WcqJFGlI%2FnDC%2Fqu8T17vpgyOL%2FxYv8T2ndb%2F&X-Amz-Signature=cc351bb330b618d9be9d1f50cc26c1fa9e076fea20dd74713825be1ce315e1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZ6ZR2L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDaLlqvDEPRW2CckywlJ8GH9%2BEDuEaxquTjR4b3UlsAFwIhAOnLNeoAqott56rn21f0j87XvXQJD3pjNULQprEtwTPjKv8DCHoQABoMNjM3NDIzMTgzODA1Igy9%2BsFgWW%2BmP5kGf3oq3AMU%2BbfqgKMZP%2Bq2z0zyRo14RcGT3%2BYDhssaHD4Whghy%2FoD%2FYMdCcJgJoVYyXSMpfo9Lp6OD9Vpu2Mu21%2FA%2FoR95J9HxWM%2BmNgdaUhe26C0MOYeHNG9%2FPLlscapRYKkhFEA0CJXBklBjxPDdnDgTmKxXACL8AqMVe792sCSoyfHhwGdp3O2PygVsXN0tKswNdMUNjRbEpLxirBC65amnt6r9WRAmAspcYjmqEe9f14hkXfiOXeR8JUxPoXaPo5S5RHBBjhhCe70%2B%2ByyYTdvW8Uw9G1Ze4FvZcoxUcTOZhgizumWz7oPS7j9K0z9oWCZpU3L86HykbSqO8J8KfHUBYKlK0HbiLQSDImqWA7sQ2c2ZJpbvP11HwCkyJ2V8Z1BY0ijesqjvGIDptl6iXcBKoRTl85uLfFTIlXHfLeYO990dlDyArhTtJALddpO9YrGEbxuWsGsmPEKWt5IsVInANRwIig7sdoC29wOftNwV5oTgLYed0aTBl6jQmbhM8NPNu9n%2FMY71KssyUTqcYfojuMynKYYj9lep1Kz1UQbId%2FwzdsdbpU0LWZs9C2eVAjPFyj68tG3%2Bltr9y1Lc4zqsuZImqVocblrKIZp%2Bti9rJbd9%2BYVwnkq0geHgR7eVfDCr6q%2FDBjqkAf2D7i7veznYAtRoEmKglHnmUEXWSa%2BAlOjs4f%2B31K7M9Z7Imw5a7p21ElbDN5WNGP%2F1mtrRTZC1OJd8aGAZLdQAju7QJkus6E3hRnsMVGi0vfh5i7Ef%2Fexx5%2FeccgU0a9dzYs0A%2BGEIN3oqURO02j%2B1sIJsRzpfSzvyQ2srCU%2F49ZiBBTelAz70WcqJFGlI%2FnDC%2Fqu8T17vpgyOL%2FxYv8T2ndb%2F&X-Amz-Signature=ac54dc7b2bd2680e580a90e323dbf775973ff60c15396f29879c745b4f506834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
