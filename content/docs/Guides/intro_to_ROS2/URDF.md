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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GCR4KM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH4Ppe74SXKsSV2chIZ8V5ii7tcT6aYforLr8xeS%2FmFJAiBSCa%2BowZWV1hrN1NI2mYNq6eC%2FEN8FXjWHY3QAnqIu4yr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMhJv6a8Sf%2F1k5FWbtKtwDN%2FluLgNpueTBz4dE0XO1bifoIThSMTHiQ3gDt%2B4Klbgw6IBYHO5vrQGIjuvBEriuzFf4yq4rgpsdUpsckb6EUlJtvZoWgDXrjPVD7zA9pybFMLKffSV748srWUb8aPKdM7%2B2NMZxPsUaNgcoOLaP5ssqiGv6402alm5%2Be11CiYAk5MCba8VpKUzIa3hSJIJTX57h9oOKef5gPs6oaDyMHDFKBpvHZJ%2BcWvn4XwZ%2BsHlD8kiZI%2Fn9CMw8uALIb2WfI9o90KGWoge%2BB82vklNrKcZRYHjjrRzi1VW3UbWMjz0vJynrpQjMIMvWe58Xa0epz4s3ka5cb0RXc69wibERgQIaWSv3kzpLzelRv9j3H%2BpaqqWJnIM0z5TNSmBu77kWzIuPFXYUT16549Gnp%2Fb3pHE%2FCC5ynFP9Eh9mSOO%2B4vYbjrJYLKTdiyra8a7TTUq6Y1Ezxq2gPdgpmFGFMG986IzNuN5f0ephjCs1NNaxZ8pz%2F8nRAMT6kvgbqwlNctfvSnOECKnnrCiCsSFvGAX4HY%2B9WJAvzZhEORIs8zrQ0OtZXUcEvktbCOfN7hNWlYcq3y8oI0FaW4%2FAtw04BlxvNzRS647xQZDxTqp3Oc1doOYFeA%2Fh3yFi6X458FgwwOyzwgY6pgE2PnzZ0B7lHChSlzDnPZgoEHttcVgQL2gfSDtsST3OSv2klbm%2BoSdqdOc94eG98ClUxwnfdmiDSev8uvfghFOi65VV2BKcbsz%2BLchoGnPoO7uykHgijKg54u668K95Upr8Ug2IiYAnzLdCadYLiYpTy8GK%2FzuopqWq5pC2j6mqp2fuDBbJaW%2FXoY9bT7Pom4ypzJg%2Fgp9GhzwISba92hSwtmzfJAk3&X-Amz-Signature=0996db07777feac48a5d7aa4d678c399b8441ea2b4434b9f99ac8828a68beced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GCR4KM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH4Ppe74SXKsSV2chIZ8V5ii7tcT6aYforLr8xeS%2FmFJAiBSCa%2BowZWV1hrN1NI2mYNq6eC%2FEN8FXjWHY3QAnqIu4yr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMhJv6a8Sf%2F1k5FWbtKtwDN%2FluLgNpueTBz4dE0XO1bifoIThSMTHiQ3gDt%2B4Klbgw6IBYHO5vrQGIjuvBEriuzFf4yq4rgpsdUpsckb6EUlJtvZoWgDXrjPVD7zA9pybFMLKffSV748srWUb8aPKdM7%2B2NMZxPsUaNgcoOLaP5ssqiGv6402alm5%2Be11CiYAk5MCba8VpKUzIa3hSJIJTX57h9oOKef5gPs6oaDyMHDFKBpvHZJ%2BcWvn4XwZ%2BsHlD8kiZI%2Fn9CMw8uALIb2WfI9o90KGWoge%2BB82vklNrKcZRYHjjrRzi1VW3UbWMjz0vJynrpQjMIMvWe58Xa0epz4s3ka5cb0RXc69wibERgQIaWSv3kzpLzelRv9j3H%2BpaqqWJnIM0z5TNSmBu77kWzIuPFXYUT16549Gnp%2Fb3pHE%2FCC5ynFP9Eh9mSOO%2B4vYbjrJYLKTdiyra8a7TTUq6Y1Ezxq2gPdgpmFGFMG986IzNuN5f0ephjCs1NNaxZ8pz%2F8nRAMT6kvgbqwlNctfvSnOECKnnrCiCsSFvGAX4HY%2B9WJAvzZhEORIs8zrQ0OtZXUcEvktbCOfN7hNWlYcq3y8oI0FaW4%2FAtw04BlxvNzRS647xQZDxTqp3Oc1doOYFeA%2Fh3yFi6X458FgwwOyzwgY6pgE2PnzZ0B7lHChSlzDnPZgoEHttcVgQL2gfSDtsST3OSv2klbm%2BoSdqdOc94eG98ClUxwnfdmiDSev8uvfghFOi65VV2BKcbsz%2BLchoGnPoO7uykHgijKg54u668K95Upr8Ug2IiYAnzLdCadYLiYpTy8GK%2FzuopqWq5pC2j6mqp2fuDBbJaW%2FXoY9bT7Pom4ypzJg%2Fgp9GhzwISba92hSwtmzfJAk3&X-Amz-Signature=5499bd86c49a16033d3459d0d1ccd89e1a3765b15ecc94ac49d4381ddd7e56e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
