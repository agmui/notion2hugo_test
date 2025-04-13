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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RY4ZUN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFaLjN5JeUJulQnolJC0X90Uaoul%2BXdVhokdXfnu%2BV1IAiA3hH%2BqWEZP9OHW0uCNR5lYKBg%2BJK2PgxU%2FHEfdHFqUvyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1T0qjt%2FRCknJYjjGKtwDyRzKj0Ngr15UZx1e1XVTIA9aTGQN4ZV5TsoWQP0LoNrTALlt3%2FqDE3vtjuvCp1G2%2BiH2E6269tcClgX%2Fyt2wXm0oP07gm09MTzoefPbxqeConibgREFeCwtFOJQ%2F%2BiLrAMKUTaMuQ%2BNsN3CGADEv%2BETGpZxb8%2Bcm%2FWFV8%2FK9C6Why5bklza74Y%2FZsSFhlxjy6hBt6qzRCLg0tHyuUbPEsJ%2BnQPRbbtnD8TPA7G5GDb8u9k7QHLhDRKsHM6lQ6A4avtjQC3w3V%2BUHp%2BRTfPMLJukMDA%2BFUGZpb%2Bjz98AHvEzfYk0UHup0wzTHXlDaskKrx35bSeF9numTqP4P3nFO8PLyJm55e2aIbkTPrYEb6IunDaKQS9HoAKcB%2Bs0qWGP9ancTwUJUDI1t0k29Zmp4ho4cJj9AXXS9g%2FsDxki%2FxillZOmwTi565O9z3RphA652kaTIOZFoasZwIGsBjTB08Xp2all58Jo4n0Qiv9cEbDbLYaB3cVbFnrZ6Q7XkBSNGvhVygvlQDvCo9Cqk9oUe4%2FA%2FK6ZnQPzQZdM%2FTA6tksjcMdtgmCfac8a8Fw4SRCbDd0WK9rywj3%2FrRXdtxJM53lB5ICneARzp%2BFF7niF3iWnuZistTdYd7U7g2EUwpaPuvwY6pgGAPsEUE4VcVu4WIdzwYCsbeNUI8hLF1kPsexAL58srH4l7ru2yK5SqrBImCNJ39eVRyoohUT2hz5ZlTg0bmF%2FxsRNqs%2Bdr7IoQrk0OrZxqkWLWzusNo0wNodEIy53lAMjk48iCN21ssWRrn%2F%2BzU32JZLMTQRxQ4U0NrHNUIj7rDCftpt7TDZXz55dzp9pMRC%2FV6WQcgSFaqize0w9WAFhxSTbsQYyU&X-Amz-Signature=c06aa50d57e118f82c303103f9fedce5350516f65b2403d034a787d7006c631f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RY4ZUN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFaLjN5JeUJulQnolJC0X90Uaoul%2BXdVhokdXfnu%2BV1IAiA3hH%2BqWEZP9OHW0uCNR5lYKBg%2BJK2PgxU%2FHEfdHFqUvyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1T0qjt%2FRCknJYjjGKtwDyRzKj0Ngr15UZx1e1XVTIA9aTGQN4ZV5TsoWQP0LoNrTALlt3%2FqDE3vtjuvCp1G2%2BiH2E6269tcClgX%2Fyt2wXm0oP07gm09MTzoefPbxqeConibgREFeCwtFOJQ%2F%2BiLrAMKUTaMuQ%2BNsN3CGADEv%2BETGpZxb8%2Bcm%2FWFV8%2FK9C6Why5bklza74Y%2FZsSFhlxjy6hBt6qzRCLg0tHyuUbPEsJ%2BnQPRbbtnD8TPA7G5GDb8u9k7QHLhDRKsHM6lQ6A4avtjQC3w3V%2BUHp%2BRTfPMLJukMDA%2BFUGZpb%2Bjz98AHvEzfYk0UHup0wzTHXlDaskKrx35bSeF9numTqP4P3nFO8PLyJm55e2aIbkTPrYEb6IunDaKQS9HoAKcB%2Bs0qWGP9ancTwUJUDI1t0k29Zmp4ho4cJj9AXXS9g%2FsDxki%2FxillZOmwTi565O9z3RphA652kaTIOZFoasZwIGsBjTB08Xp2all58Jo4n0Qiv9cEbDbLYaB3cVbFnrZ6Q7XkBSNGvhVygvlQDvCo9Cqk9oUe4%2FA%2FK6ZnQPzQZdM%2FTA6tksjcMdtgmCfac8a8Fw4SRCbDd0WK9rywj3%2FrRXdtxJM53lB5ICneARzp%2BFF7niF3iWnuZistTdYd7U7g2EUwpaPuvwY6pgGAPsEUE4VcVu4WIdzwYCsbeNUI8hLF1kPsexAL58srH4l7ru2yK5SqrBImCNJ39eVRyoohUT2hz5ZlTg0bmF%2FxsRNqs%2Bdr7IoQrk0OrZxqkWLWzusNo0wNodEIy53lAMjk48iCN21ssWRrn%2F%2BzU32JZLMTQRxQ4U0NrHNUIj7rDCftpt7TDZXz55dzp9pMRC%2FV6WQcgSFaqize0w9WAFhxSTbsQYyU&X-Amz-Signature=68e8baac9080b664a25dfcab90674e38e1e41d65aa48e5c595486b3b333434fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
