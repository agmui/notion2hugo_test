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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBY2UNS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZMjpTA7nKdkzwFYCqOvDQyAU3f%2BaESzXV%2F9LAN2AtwIgIYy7VTj2XO9UkqrAA412Km1sLGqNXAdN5TIf0bQdxN0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDH5PLqFX4gSmLdTACrcA8PKEWhZBt6d8aUUy%2F73ptudiGwwFxko7nxHQlbEd9FkJ1Z2uN2t5GiCvotzv6%2BxL3ZWfgsqavw9rYp3%2Fwk62amaEdUMaLzm%2BRwjXdh8COxtPqvl05FN4UqNPksgXa%2BFQLTETOHUnYBnedpjUz3IUpLLB5qoLih1levaQh796glm4uE2m0TD3yzQ9%2FOd4%2BjK2W1ryUyvEbyRwTYB0mcwXfTB5apjDkZZThIH9jDThtTrlSkoFPaPZQXQkBqYPgimUU9Kg05LP9fbSRuhPoTp4DLE7QjVS1WLTXqLI6RZ8xSyLrrUxAsmQrDx4qOjaE%2Fl12apxMfi6eVlqk9DubKv2ZXB9e3k%2B%2B3mT90W2%2BJ99uEzlMlIRWxbp2tEhSqC7NhDEPE2qjo8O34yejcA8xmv%2Faa6g07azH%2F2vzrarGSgDRS7nq6OTV99OXZlbCGdh1LBp5Y8JYQOBRccM4vs498AvIB3RhznZHXwkWLKNuLxyvrvuX26ouLQ2JOR%2Fkn10QEVpao%2FbPsIC4vVouOwYun8QZOMIH6l4%2FUA7F8AvPxkdhr9zSGeSvwb6dOhRpp%2B3DrWvEJ3X71kOt8tkY%2FKpVI5KhGIc3oF%2BNEO%2FGDRaNVqU4ejUmLmR7cJdA7CJS37MM%2B4j8IGOqUBW6olVpbwaivoOyruM9rDlK6p0HqavqU1TI7vR0%2FPziI0guVwvoKvHyw9FBn%2Br6C1YHKKYnOOqnDBeSgpvn17cqAco4gGApGpmMH2D5zQS2PO4pCa5MHsAKfKZ2Nvt2GwDg4%2BCMq4hFKkvPgd53aoN%2B5ndAZKUa0LpiiChHe0sGER9KvTaIM6nHinFBHowLZoXar04%2BHx0X4fPAvmWduH7fbYuJEM&X-Amz-Signature=7cd72c7a1f58d03bc3737cd123ef72cdbf6008120d9cdd5f35439a706e2f4eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBY2UNS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZMjpTA7nKdkzwFYCqOvDQyAU3f%2BaESzXV%2F9LAN2AtwIgIYy7VTj2XO9UkqrAA412Km1sLGqNXAdN5TIf0bQdxN0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDH5PLqFX4gSmLdTACrcA8PKEWhZBt6d8aUUy%2F73ptudiGwwFxko7nxHQlbEd9FkJ1Z2uN2t5GiCvotzv6%2BxL3ZWfgsqavw9rYp3%2Fwk62amaEdUMaLzm%2BRwjXdh8COxtPqvl05FN4UqNPksgXa%2BFQLTETOHUnYBnedpjUz3IUpLLB5qoLih1levaQh796glm4uE2m0TD3yzQ9%2FOd4%2BjK2W1ryUyvEbyRwTYB0mcwXfTB5apjDkZZThIH9jDThtTrlSkoFPaPZQXQkBqYPgimUU9Kg05LP9fbSRuhPoTp4DLE7QjVS1WLTXqLI6RZ8xSyLrrUxAsmQrDx4qOjaE%2Fl12apxMfi6eVlqk9DubKv2ZXB9e3k%2B%2B3mT90W2%2BJ99uEzlMlIRWxbp2tEhSqC7NhDEPE2qjo8O34yejcA8xmv%2Faa6g07azH%2F2vzrarGSgDRS7nq6OTV99OXZlbCGdh1LBp5Y8JYQOBRccM4vs498AvIB3RhznZHXwkWLKNuLxyvrvuX26ouLQ2JOR%2Fkn10QEVpao%2FbPsIC4vVouOwYun8QZOMIH6l4%2FUA7F8AvPxkdhr9zSGeSvwb6dOhRpp%2B3DrWvEJ3X71kOt8tkY%2FKpVI5KhGIc3oF%2BNEO%2FGDRaNVqU4ejUmLmR7cJdA7CJS37MM%2B4j8IGOqUBW6olVpbwaivoOyruM9rDlK6p0HqavqU1TI7vR0%2FPziI0guVwvoKvHyw9FBn%2Br6C1YHKKYnOOqnDBeSgpvn17cqAco4gGApGpmMH2D5zQS2PO4pCa5MHsAKfKZ2Nvt2GwDg4%2BCMq4hFKkvPgd53aoN%2B5ndAZKUa0LpiiChHe0sGER9KvTaIM6nHinFBHowLZoXar04%2BHx0X4fPAvmWduH7fbYuJEM&X-Amz-Signature=99aef7431e6fa8dad71bcc0699ea8875ce42f5534c4bce886cc962e73332a73c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
