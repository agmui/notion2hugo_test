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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUABDXUL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCyFZScHDFdgOoOhmGScKHpQGEy1CJSF8YraqScVuxDLgIgAKdHiqyaY7OR8De8bqFvRsh61jaPhN1suNNbAN1%2BQDkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg6gVZUWT2cyxGyTSrcA6i8Qwp21QZbL0WkxAvTRS6Wt6xZSdclanHG2iT35a%2FQ0BwYh9ywdZgwT6KLlRjLeAaaFlFFPzMQTZrtlL9rlNu5xdlC4z4aM5AbeeRJv9EmTBcYFyry72XBtDFqcK1OI0Etuk%2FX4bDjmxphsSzjSTLIwL3ewmer7elhc1iTa52nAIlKprP5N0wzTdqBdSoAGD51NrFibrvQNhIr7%2Ftfygm%2FLL5rDkn%2FS%2B0jYzy1nROpzmFq1eEWhzHqJQNooqkxLiFCGkaXCoDTrGDlkuMC%2FbPUJ80wqmoukigo1teattVIFINuKMpNkti6NDXbDg9k%2FT8ZpOGT%2BDSygbWUfo8z12TDMKubZtWyGDuFxT27bEz%2FH5L5UCxaPTPnd5%2BC1jmQDvAM39FtqY1RHad8KZvzxFPAIrnnOMbxHtE%2BhlGcDQp395KOHOgrUAsJlyDNwB5GAu8AbCJuxZ7ELeN2ev5hir9LGsVugw3vikzkAra6yyhXme5FgwDyw9q2AoStgaBpFDFwJ%2BRlxRwT2hUkrAX%2FSftoJBxbsiS59mTfkKizvYTwdUk7hDtaygsVbB0hoJuYcUOGtlEvRF5AwN3Fm%2FmdC75ryIOf7SRWABwvqr7mn3WsE8ZocsDGpQf1dO33MLarnsAGOqUBrVyTmAeseGrEM2UlFEZZR8pDefg0ZRGRXxs8J7RgGQdF4U%2ByGn4Zwb7K7Ho6pI2DMhzmvHHCE%2FGV35t8IpjP%2FvePDssr7Bz2mvUiJlONkABhAUbT2vxyx7%2Flx3ifID5LyM3X3hVJXqIx7Yz19IRCSfMLCCp53PqU9GViUZPqtopfwKEEhMSwts3ZlNHx6bu9wqz97gulGf6fa2uotNGC8araDFZQ&X-Amz-Signature=01c09515727bb1ad3291b562fb1d52f836fe9a90b700161c2f3c0d98d80e20c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUABDXUL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCyFZScHDFdgOoOhmGScKHpQGEy1CJSF8YraqScVuxDLgIgAKdHiqyaY7OR8De8bqFvRsh61jaPhN1suNNbAN1%2BQDkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg6gVZUWT2cyxGyTSrcA6i8Qwp21QZbL0WkxAvTRS6Wt6xZSdclanHG2iT35a%2FQ0BwYh9ywdZgwT6KLlRjLeAaaFlFFPzMQTZrtlL9rlNu5xdlC4z4aM5AbeeRJv9EmTBcYFyry72XBtDFqcK1OI0Etuk%2FX4bDjmxphsSzjSTLIwL3ewmer7elhc1iTa52nAIlKprP5N0wzTdqBdSoAGD51NrFibrvQNhIr7%2Ftfygm%2FLL5rDkn%2FS%2B0jYzy1nROpzmFq1eEWhzHqJQNooqkxLiFCGkaXCoDTrGDlkuMC%2FbPUJ80wqmoukigo1teattVIFINuKMpNkti6NDXbDg9k%2FT8ZpOGT%2BDSygbWUfo8z12TDMKubZtWyGDuFxT27bEz%2FH5L5UCxaPTPnd5%2BC1jmQDvAM39FtqY1RHad8KZvzxFPAIrnnOMbxHtE%2BhlGcDQp395KOHOgrUAsJlyDNwB5GAu8AbCJuxZ7ELeN2ev5hir9LGsVugw3vikzkAra6yyhXme5FgwDyw9q2AoStgaBpFDFwJ%2BRlxRwT2hUkrAX%2FSftoJBxbsiS59mTfkKizvYTwdUk7hDtaygsVbB0hoJuYcUOGtlEvRF5AwN3Fm%2FmdC75ryIOf7SRWABwvqr7mn3WsE8ZocsDGpQf1dO33MLarnsAGOqUBrVyTmAeseGrEM2UlFEZZR8pDefg0ZRGRXxs8J7RgGQdF4U%2ByGn4Zwb7K7Ho6pI2DMhzmvHHCE%2FGV35t8IpjP%2FvePDssr7Bz2mvUiJlONkABhAUbT2vxyx7%2Flx3ifID5LyM3X3hVJXqIx7Yz19IRCSfMLCCp53PqU9GViUZPqtopfwKEEhMSwts3ZlNHx6bu9wqz97gulGf6fa2uotNGC8araDFZQ&X-Amz-Signature=1d5ec0102b100ef5e6faad67d8732dcd8ff32cb03d044367d68c485aa9e2da5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
