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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEVUS3G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHhNNS90hF1bvD9nOEisarrUwjJ%2BB%2BCW0RnCgHSLDPYMAiEAiC9i%2B8ff8sMasDbrdCy48X1FmVuKpVAepQlT8fddDt8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7ZTXuuchYYLNYxvyrcA7OOzNDxQ%2Bu96qwxTizlejNawtSKWspO6WZUghxgfP611ku7sgIpHli3s8jAg2NLK%2BW1YcyjBWr7s927AzzH%2Bwmz90kC6tinTs%2BT2ejXDlRAqgcPoztby%2BBsDAroKPGITpl6GOTNT1HKCRyJAxYEs5FLB3ZZgLHmjG3buvvd%2FvJW5%2B0v1vaYDL9oRP5FmllasN83hEz3q1%2BQ0ku40Wy%2FMdP2WQ9JLx9StVX90gxC6yz%2BQJ4mV%2BMWZQEy6k1CbNgSWv2PLJKTOBnTlftuW4znZ4A8qLSU37HrGC4vB%2FOWxTl6rBYszyNhkHF862cPsB5FBWLe57SUuIFYLduvHdOod3lIwKNRGNPGfYUf9WnZMuMjCVXLF8%2FlMl1UjUTmcyHnskkTsX%2FYikOBgUXu1iScoZldZ0zu9sjlDUFnyhpFzQS3yKmrUP98ibWUkwFJr3buJ7TLezDivJyRiJVb%2F1vDmp0PsX301lSkPD6sqp0onjsRO%2FtbhkXiCHfk%2BoQDayJnWOvQRuuO58YmzdPkJFV7xno8OBh92iKz7QR2xX%2BnsPQYT7P8aBnRDK%2FvaJC4rerqD5XJaGja%2FLTRNNiUEVvYLxuvJqzhM0EjjUnUSAqWWro%2FVacAhjTnL%2FvxKK6nMIeTm8QGOqUBs%2Brj3qslS2tW17gYbNYkfsM5uNq6c3oip%2BVoyEg3aegF7RvgmOodgJJVkznCPb7W6SHk3UhAF%2Fugn1GGx%2FFLRQvrp%2BXosZsmDnb8I9Z8PdX92nSg9rMHehI4qEaXigglktuayLILOinyZZvmOLXqCqwumsdYel3qnJlunwMPWZClUDUovWG8wCqzw2ubJViHlAjakBWG0Ea5Nun9pCp6Od4MScLB&X-Amz-Signature=f6726f455c86f8649ee3dc04eb6d6a0f802207a2b9cda336812ab2a99cc363fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEVUS3G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHhNNS90hF1bvD9nOEisarrUwjJ%2BB%2BCW0RnCgHSLDPYMAiEAiC9i%2B8ff8sMasDbrdCy48X1FmVuKpVAepQlT8fddDt8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7ZTXuuchYYLNYxvyrcA7OOzNDxQ%2Bu96qwxTizlejNawtSKWspO6WZUghxgfP611ku7sgIpHli3s8jAg2NLK%2BW1YcyjBWr7s927AzzH%2Bwmz90kC6tinTs%2BT2ejXDlRAqgcPoztby%2BBsDAroKPGITpl6GOTNT1HKCRyJAxYEs5FLB3ZZgLHmjG3buvvd%2FvJW5%2B0v1vaYDL9oRP5FmllasN83hEz3q1%2BQ0ku40Wy%2FMdP2WQ9JLx9StVX90gxC6yz%2BQJ4mV%2BMWZQEy6k1CbNgSWv2PLJKTOBnTlftuW4znZ4A8qLSU37HrGC4vB%2FOWxTl6rBYszyNhkHF862cPsB5FBWLe57SUuIFYLduvHdOod3lIwKNRGNPGfYUf9WnZMuMjCVXLF8%2FlMl1UjUTmcyHnskkTsX%2FYikOBgUXu1iScoZldZ0zu9sjlDUFnyhpFzQS3yKmrUP98ibWUkwFJr3buJ7TLezDivJyRiJVb%2F1vDmp0PsX301lSkPD6sqp0onjsRO%2FtbhkXiCHfk%2BoQDayJnWOvQRuuO58YmzdPkJFV7xno8OBh92iKz7QR2xX%2BnsPQYT7P8aBnRDK%2FvaJC4rerqD5XJaGja%2FLTRNNiUEVvYLxuvJqzhM0EjjUnUSAqWWro%2FVacAhjTnL%2FvxKK6nMIeTm8QGOqUBs%2Brj3qslS2tW17gYbNYkfsM5uNq6c3oip%2BVoyEg3aegF7RvgmOodgJJVkznCPb7W6SHk3UhAF%2Fugn1GGx%2FFLRQvrp%2BXosZsmDnb8I9Z8PdX92nSg9rMHehI4qEaXigglktuayLILOinyZZvmOLXqCqwumsdYel3qnJlunwMPWZClUDUovWG8wCqzw2ubJViHlAjakBWG0Ea5Nun9pCp6Od4MScLB&X-Amz-Signature=435ae407c938bbf5806736a7740ec39fccd3f09dab0929628a0deff45f660b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
