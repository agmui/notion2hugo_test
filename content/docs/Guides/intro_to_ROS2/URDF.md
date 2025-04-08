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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELGTN2R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEC49iBU9ulS9jfc9uwbTFZsh9MHTmbrUZnyXh%2B77duAiBT1X0Ek6WJaN6U5DgtHjM1C5MH98M7YjSD06NItwb0Nir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM0HJDH5O8szBtKdVSKtwDdJhhW4qp412tfLRQorH%2BMViQjwn9AW1jjwDJ1yD45UNNGW1nRkEVTRjCMUo4FQlc0HrPFo6oHcLJLadEphN5h4g45YMLYN1yIeYMbctfu%2FPL19Smqv9FteokBPL2ssmiWmjIbMZuEucwkShDyudPruYu3z2nkMSUeFoqwP6nsjblsrmJjGAhCiicS4DbA38d05DFWHjJ%2BUjnbBOCK0M%2F3bRR5kgFN%2FGqtrDbr2zNVYFyUZiL36pvJ2TZiFjlkGF7CXS%2F7%2BFu9pcErMpeXfJ0TCbaVLRWrTvvbyrkV6eu7WFBihTweYXnFoItu6bfkWOqi7JuplykBZb9Vm2kfLejWSIQBiDKPnU3tAoP0zPyQk4s13tiiYgxzbeuGd2jHIG6YwKYnHT5r1TUXstvMPvOYgBQ2kotyYpHbGZBSXQYWP3Q6Oyx3ev3wysLbkrmn7udyRNGn9HdZaLhAot795%2FarZnEFNg1BZcbc%2B9i%2BOo4GGzBz%2FUsTVE9qyjp8Elqmuqjly8hK7JPcwM%2FRUm7AUnksdIfjawKp6WRfIScP%2FLGDDaeN4rYNWDLsV70Rqmm3aaqBCC4DpiRRLsiZO39MlbMqnrkRquX9uNKmwQmCRCR3H847THFcI6unQ2kXRUw%2Bp7SvwY6pgHAmSvbSJLgPQLMqd4FfpLdh20y1MBr79lxEdY440cNrOA%2BblvKfPsyIhQE9czZZoqirIQu%2B719gFiJ8WBMdKVVlc%2B6uyRqfLD5Jx4lCYKW%2Fxm3ei0om0PTcDWC8ZA65wIGfh7CVd0Qrh8w%2BJNQSus%2BLoKMGjC0OqLiACbfKIbEdCCz0iBmF1Emec%2FxVXtKc5h9AIGvJ73aqfxGmMVP1FD0Pcf%2FQn%2Bu&X-Amz-Signature=b20ee5bb0f0ef2d51fbcf6af2dceaedcb0e8b40a77d1cd5cd033d59df88e4105&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELGTN2R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEC49iBU9ulS9jfc9uwbTFZsh9MHTmbrUZnyXh%2B77duAiBT1X0Ek6WJaN6U5DgtHjM1C5MH98M7YjSD06NItwb0Nir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM0HJDH5O8szBtKdVSKtwDdJhhW4qp412tfLRQorH%2BMViQjwn9AW1jjwDJ1yD45UNNGW1nRkEVTRjCMUo4FQlc0HrPFo6oHcLJLadEphN5h4g45YMLYN1yIeYMbctfu%2FPL19Smqv9FteokBPL2ssmiWmjIbMZuEucwkShDyudPruYu3z2nkMSUeFoqwP6nsjblsrmJjGAhCiicS4DbA38d05DFWHjJ%2BUjnbBOCK0M%2F3bRR5kgFN%2FGqtrDbr2zNVYFyUZiL36pvJ2TZiFjlkGF7CXS%2F7%2BFu9pcErMpeXfJ0TCbaVLRWrTvvbyrkV6eu7WFBihTweYXnFoItu6bfkWOqi7JuplykBZb9Vm2kfLejWSIQBiDKPnU3tAoP0zPyQk4s13tiiYgxzbeuGd2jHIG6YwKYnHT5r1TUXstvMPvOYgBQ2kotyYpHbGZBSXQYWP3Q6Oyx3ev3wysLbkrmn7udyRNGn9HdZaLhAot795%2FarZnEFNg1BZcbc%2B9i%2BOo4GGzBz%2FUsTVE9qyjp8Elqmuqjly8hK7JPcwM%2FRUm7AUnksdIfjawKp6WRfIScP%2FLGDDaeN4rYNWDLsV70Rqmm3aaqBCC4DpiRRLsiZO39MlbMqnrkRquX9uNKmwQmCRCR3H847THFcI6unQ2kXRUw%2Bp7SvwY6pgHAmSvbSJLgPQLMqd4FfpLdh20y1MBr79lxEdY440cNrOA%2BblvKfPsyIhQE9czZZoqirIQu%2B719gFiJ8WBMdKVVlc%2B6uyRqfLD5Jx4lCYKW%2Fxm3ei0om0PTcDWC8ZA65wIGfh7CVd0Qrh8w%2BJNQSus%2BLoKMGjC0OqLiACbfKIbEdCCz0iBmF1Emec%2FxVXtKc5h9AIGvJ73aqfxGmMVP1FD0Pcf%2FQn%2Bu&X-Amz-Signature=b2d30d9ba8c9fb4852f6faab8b07965a29c5d0007bdbfce6b8f9294f90c1d12e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
