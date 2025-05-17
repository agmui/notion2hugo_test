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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZCAMFY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTJyqbv8Np3XeV%2FaERS1awmQAtyF%2Bev6USEr107wbh7AiEAt%2BZorEfEKxu1AA6zYTCStLovOZtf7Y3O2m0IrsN18NIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGuuyXkwL4y4IiZNbSrcA%2FKV8li10kutTOMexGbSvwRTITEJbQtKJOJOCGIeo9Zi0y%2B%2FNZPl8cMeH2NF6z%2FIfl0iEKyvEeoAX48DUzobbRA3qtNL4CfYBHl%2FLlN%2Bu%2BtGU%2Fvugfa%2FD6GrdKjxq94UNej7BUqNcqmrpTrz%2FkW0WZg7rebaA%2F1MfbVUqjzerBUrYdeUHO9TEuRi4MWPjlfFVMWRjU7hJrgd%2FJq8rQhSFogf%2BaDQDfmLFlr95giaQvUKll9vFWVVSPfWKkYJHE5S4P%2BKn8oSEfF3sszqEA0QYjvu6hpcp1LHz0MT28rQ2eBR16YIekRXj5eTl%2FCAprrhozVsHeZgE94YivnJ7dEM7X0bUU9XPNWXEa%2FAS8UO9veHqk%2FfDQi65n%2FcB1pVwPnkvZz1Anf5igpOy9LbKGliHX%2BO2QSsV9wsDAH2MfFerkSTO9bz7clyl9vbUBECg3k3%2FHVe82e2ZcNOAnXARxNaiRcBEm5wKEClNNt45AWy4df6YXIWNNw%2BZ6KNEHQSoxKYm7Hy1tgL2r1WGjUa%2F1ULbDdMSnP8p0t0ZTYe9hNlaoWykJ3qIFhqkFAkHS0hR%2FYRrn94X%2F7wboETmvOg0XgEXhbqb2iY6XwBWpMKwB4oswWvLX6xPPxEPoheSMS0MMu8ocEGOqUBiD3iIFjALGLx41%2FMkhBFYBxkaVwvO2mWGmYqCKaZOyUMweMRNqiRAZuDThp7Te3Lul2r%2BRur78wjBPXdUCul%2BFgnIi%2BBrmf3df%2FOuVFlRHMv%2Fpu%2Fq5GflwSj6Wwgl9QanBs6nmN2cvQaNH6nT83i%2B7K%2FXgGcZvE1xJ4GcwOBqGaifpw4erkMKMvxuuiUPuIgKm18G%2Fy81B%2F035ap%2F16mUSYUceV5&X-Amz-Signature=d3508a21b056c8c6179d272081bb0cc85547289f9715b63ef9524b72b7e3e555&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZCAMFY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTJyqbv8Np3XeV%2FaERS1awmQAtyF%2Bev6USEr107wbh7AiEAt%2BZorEfEKxu1AA6zYTCStLovOZtf7Y3O2m0IrsN18NIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGuuyXkwL4y4IiZNbSrcA%2FKV8li10kutTOMexGbSvwRTITEJbQtKJOJOCGIeo9Zi0y%2B%2FNZPl8cMeH2NF6z%2FIfl0iEKyvEeoAX48DUzobbRA3qtNL4CfYBHl%2FLlN%2Bu%2BtGU%2Fvugfa%2FD6GrdKjxq94UNej7BUqNcqmrpTrz%2FkW0WZg7rebaA%2F1MfbVUqjzerBUrYdeUHO9TEuRi4MWPjlfFVMWRjU7hJrgd%2FJq8rQhSFogf%2BaDQDfmLFlr95giaQvUKll9vFWVVSPfWKkYJHE5S4P%2BKn8oSEfF3sszqEA0QYjvu6hpcp1LHz0MT28rQ2eBR16YIekRXj5eTl%2FCAprrhozVsHeZgE94YivnJ7dEM7X0bUU9XPNWXEa%2FAS8UO9veHqk%2FfDQi65n%2FcB1pVwPnkvZz1Anf5igpOy9LbKGliHX%2BO2QSsV9wsDAH2MfFerkSTO9bz7clyl9vbUBECg3k3%2FHVe82e2ZcNOAnXARxNaiRcBEm5wKEClNNt45AWy4df6YXIWNNw%2BZ6KNEHQSoxKYm7Hy1tgL2r1WGjUa%2F1ULbDdMSnP8p0t0ZTYe9hNlaoWykJ3qIFhqkFAkHS0hR%2FYRrn94X%2F7wboETmvOg0XgEXhbqb2iY6XwBWpMKwB4oswWvLX6xPPxEPoheSMS0MMu8ocEGOqUBiD3iIFjALGLx41%2FMkhBFYBxkaVwvO2mWGmYqCKaZOyUMweMRNqiRAZuDThp7Te3Lul2r%2BRur78wjBPXdUCul%2BFgnIi%2BBrmf3df%2FOuVFlRHMv%2Fpu%2Fq5GflwSj6Wwgl9QanBs6nmN2cvQaNH6nT83i%2B7K%2FXgGcZvE1xJ4GcwOBqGaifpw4erkMKMvxuuiUPuIgKm18G%2Fy81B%2F035ap%2F16mUSYUceV5&X-Amz-Signature=83455dc064dcdd137b2b743773d7ee8de347c9f6addf638aefaae100be48082d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
