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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFIKDQB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCJVOeSSYKMadWe4AEzjZnfJLPOrPtLIqFRrud1Zb8O8QIgKLlk0rmLg2adRlib3xzA3sxMXVVkPcMtjNuL9zBqdn4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyqGgquOwWwFbQUUyrcAy7VNZ3yU6rtEGWg%2B8mX4tllHkE4uTrh7s3ZYrG0mtXoM6oJTJA1ZOU7On3Qlc8AnCxeugaT2wr1INkfVHm2YfgbGlXJpVYzxO%2F8KRKOelqmQbcxn%2BpDvP%2FnoOkuvElG4Nl2%2BzbY%2B0gKcAM%2BqreBN4lxcKtqNX0c%2FH4cE4aeLuPFkqVnvtVhpB4Mh%2FPpMip%2BO%2FiNgGwiDt3lHLc6R3GG64TX2Fo19NT4QvdHRx%2BGp8V6gbDySvMGTj%2Fj0Rwpe2iMiomQOjpDCXIVZDWozXcmyJe2c%2BeyTcrYZHR7RaU9tTX%2Far7wuqz2bIQZuOcPhzIZYPubAf9e%2Fv1vyxQ6imWGuG%2FqWW9bzSbtcoyDnMDkL%2Funhcs%2FTksA3RvKHwN6qXKMRnixsBT1aKBe3g3PTSOUmDz1eURZv8eGQ2h%2BZ0WtKPskx2PQk4cmS%2B0gi89jAf9BT%2BJcOsIT6D07hdphAvMsVXhhhono%2BZ8EtJiBf7E5A2APY25lxEoYd8QZA2AsQPL1Scoab8U5Pf6L95jFpK%2BL8pg9TzPCLmfHDITiwFo8r71OuJR9DNeOfLvezDyD%2FQWYhV2MJEHjY3kqTPtrxMlBRrJkwQ9vqPCUXVjeaNHXl5YQs38U2cM5i57BTEiZMIjl08AGOqUBnCcN7v5QWRAw0xO1bHZSn2q5iMfEO7bw7TEdzdjFvBS9RwC9bZbOQuDEkF7orv%2FVKTMTT1Ui7qWBgj4Ve2hw70lKsDybyA4RuvyZFr0OFWo6nRcm9X0WcRR1AboIUXrWy48ZteY2MEAwKJaKnTyYFXvfb%2BeWD%2F4kv%2F3WgZrqRtKiGQzLxVUmLWhS787kcyjodDQHgILudgjo3KyEtg%2FruowRCr3R&X-Amz-Signature=4132d4acffe298a4b7546f298943afa5ac901a3163c1d109987f37d0c1f01a02&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFIKDQB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCJVOeSSYKMadWe4AEzjZnfJLPOrPtLIqFRrud1Zb8O8QIgKLlk0rmLg2adRlib3xzA3sxMXVVkPcMtjNuL9zBqdn4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyqGgquOwWwFbQUUyrcAy7VNZ3yU6rtEGWg%2B8mX4tllHkE4uTrh7s3ZYrG0mtXoM6oJTJA1ZOU7On3Qlc8AnCxeugaT2wr1INkfVHm2YfgbGlXJpVYzxO%2F8KRKOelqmQbcxn%2BpDvP%2FnoOkuvElG4Nl2%2BzbY%2B0gKcAM%2BqreBN4lxcKtqNX0c%2FH4cE4aeLuPFkqVnvtVhpB4Mh%2FPpMip%2BO%2FiNgGwiDt3lHLc6R3GG64TX2Fo19NT4QvdHRx%2BGp8V6gbDySvMGTj%2Fj0Rwpe2iMiomQOjpDCXIVZDWozXcmyJe2c%2BeyTcrYZHR7RaU9tTX%2Far7wuqz2bIQZuOcPhzIZYPubAf9e%2Fv1vyxQ6imWGuG%2FqWW9bzSbtcoyDnMDkL%2Funhcs%2FTksA3RvKHwN6qXKMRnixsBT1aKBe3g3PTSOUmDz1eURZv8eGQ2h%2BZ0WtKPskx2PQk4cmS%2B0gi89jAf9BT%2BJcOsIT6D07hdphAvMsVXhhhono%2BZ8EtJiBf7E5A2APY25lxEoYd8QZA2AsQPL1Scoab8U5Pf6L95jFpK%2BL8pg9TzPCLmfHDITiwFo8r71OuJR9DNeOfLvezDyD%2FQWYhV2MJEHjY3kqTPtrxMlBRrJkwQ9vqPCUXVjeaNHXl5YQs38U2cM5i57BTEiZMIjl08AGOqUBnCcN7v5QWRAw0xO1bHZSn2q5iMfEO7bw7TEdzdjFvBS9RwC9bZbOQuDEkF7orv%2FVKTMTT1Ui7qWBgj4Ve2hw70lKsDybyA4RuvyZFr0OFWo6nRcm9X0WcRR1AboIUXrWy48ZteY2MEAwKJaKnTyYFXvfb%2BeWD%2F4kv%2F3WgZrqRtKiGQzLxVUmLWhS787kcyjodDQHgILudgjo3KyEtg%2FruowRCr3R&X-Amz-Signature=234eb553dbd8f3cff2ba5b85d8f2351f755046c4cbadb946959e633101fa6b78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
