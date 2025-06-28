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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNETOV6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg9kIOF28dRu3oYkPG8VJMvaPsRyIz0T4gS5zoRAWdJwIhALzMwyBEcwEDMm7s6Ze1TTBD43abPxGvvpea9Bu64xfJKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1odlAY9BG1B%2FKUW0q3AMYJseko5T%2BYg3HmWx3pXu1n4iyGN2zndnttQegelfEMMoJHIWr9L1GA1FhQK8hH6lU4K8gIj8xC63PTqv7RfCMwD61KHec23YVzuNPFJ%2FXFzZHLrzl%2FSPoEfTmnw3n%2BQ3zYpCzqiG4fTiZBBCLR4mG5%2BOhfvNdKr%2B7QE7XVXAJF1tCaUkURh4MO1P6OU7PJEh8fBhP3xvY0prQz1P3BhNwuO0asCgXaFeW7subslag8v9C1T%2FR4kYfktz%2F4dbMF8LHt%2BGfN0zDAaNflOcEirSJ%2FXDQv%2FN2pvGMZGhNUT3ep4SU%2FbcERmPDErMBXgPi0usrqAp0hcjehnhAzXYyNX%2BJ9NSqb6odwyHo4h0yGAxpcNhRFzOR1a7vmna5%2FlNbhEHwaSZtrWnbo9M59uFL9zKT3wCwSE%2ByZYadkhH2QfhRYgGkrLC83pc5YhVV1WtRq0K2yVnX8pttLubI%2BxHBD%2B418UeDNEt67sEek3yGzilJOhSWHsHD5ynGAzcsQNrZL5nvXore0GPaoD3czk2xZyRhCXBxTTOPx2ygclqjm5%2F5CgXaRiybzPyCxnIjvaGF0eZ%2FLcgj5sG9xydSZ8IPNjnfAj6M%2BXXpZIj39PfRK0Y6BEI29vSGV%2BIjC6wysDCRi4DDBjqkAasP2fMTYwsWqV3XUyzhG82MQ%2FNHyfUD6c9L%2FZwJN5E7gMJBf%2FBycRHf3BTadZHDnEApaOvSQLiflAfnFTErJB3i7stmDoE%2FuyNQbGY2WgMrRT%2FRzyc9Syutzdy6vgo4AVeiE6Gebgo5S3KU5vf6YS%2Bh7PfSnMPksoCG6pvUwtRkrQRH8y9NtcF5a3jHFuSWp80WvHIqjFLdVmqC9uRdTFqu0RIm&X-Amz-Signature=4720a7153e501b60ba4267e2f6a33a438cb5a3a016efbf67c598ee413b62f49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNETOV6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg9kIOF28dRu3oYkPG8VJMvaPsRyIz0T4gS5zoRAWdJwIhALzMwyBEcwEDMm7s6Ze1TTBD43abPxGvvpea9Bu64xfJKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1odlAY9BG1B%2FKUW0q3AMYJseko5T%2BYg3HmWx3pXu1n4iyGN2zndnttQegelfEMMoJHIWr9L1GA1FhQK8hH6lU4K8gIj8xC63PTqv7RfCMwD61KHec23YVzuNPFJ%2FXFzZHLrzl%2FSPoEfTmnw3n%2BQ3zYpCzqiG4fTiZBBCLR4mG5%2BOhfvNdKr%2B7QE7XVXAJF1tCaUkURh4MO1P6OU7PJEh8fBhP3xvY0prQz1P3BhNwuO0asCgXaFeW7subslag8v9C1T%2FR4kYfktz%2F4dbMF8LHt%2BGfN0zDAaNflOcEirSJ%2FXDQv%2FN2pvGMZGhNUT3ep4SU%2FbcERmPDErMBXgPi0usrqAp0hcjehnhAzXYyNX%2BJ9NSqb6odwyHo4h0yGAxpcNhRFzOR1a7vmna5%2FlNbhEHwaSZtrWnbo9M59uFL9zKT3wCwSE%2ByZYadkhH2QfhRYgGkrLC83pc5YhVV1WtRq0K2yVnX8pttLubI%2BxHBD%2B418UeDNEt67sEek3yGzilJOhSWHsHD5ynGAzcsQNrZL5nvXore0GPaoD3czk2xZyRhCXBxTTOPx2ygclqjm5%2F5CgXaRiybzPyCxnIjvaGF0eZ%2FLcgj5sG9xydSZ8IPNjnfAj6M%2BXXpZIj39PfRK0Y6BEI29vSGV%2BIjC6wysDCRi4DDBjqkAasP2fMTYwsWqV3XUyzhG82MQ%2FNHyfUD6c9L%2FZwJN5E7gMJBf%2FBycRHf3BTadZHDnEApaOvSQLiflAfnFTErJB3i7stmDoE%2FuyNQbGY2WgMrRT%2FRzyc9Syutzdy6vgo4AVeiE6Gebgo5S3KU5vf6YS%2Bh7PfSnMPksoCG6pvUwtRkrQRH8y9NtcF5a3jHFuSWp80WvHIqjFLdVmqC9uRdTFqu0RIm&X-Amz-Signature=7efe46bcff7fd022c5c64e5b4e665eddf31be9202a8b883622a60d9ed6256526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
