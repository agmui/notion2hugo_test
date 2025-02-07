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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCEJHUBS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFIepKp8CTQyDvEzKI%2B%2FiZkRg74TWsICr7ZpCHWrWnwgAiB4TlgqOFYG1150pEE83vP0C5XECjXIrEEoZmYV3RH45yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMNnD1Zu23%2Fqra1rfjKtwDk6b5rpsu3%2BOs%2FixeOmFuncuNaBh2OM4xW%2F4IOsJ2eZ5Vfygyp4zaoRRNwFq6MTUJfodFqvrkp7ePpTGZY7LE1Wb9bG6ck60nBfwAiBG6rSB3jpt5YZECf7H1psGVlSuGQkU67eWIdjkvpLxRWhSmTj0gyYDni57qoEdK9a6SDSmfJx2MKlvyisnENJ7t%2FbOo%2B0Pm7lFnksCoHNlMtlhk6wq9Pvz3yjOGMuKYSNr2oEQAv905IjSswD5MSxu%2FmPrFL8pQSZqyeFyS2dwTPctX56WqxxnJQ2q%2Bsb4sgdG0V9mN62h3sx9UDRB%2BiGmY7ruVXxpmekAz3sRBdB2ECtSOyExDQVowQ%2Fv3rjtbqTGWdoVXA5TPeTHuAT%2BUm0Vl341z6jIQxqWFU1VVIVelok5vQnmGQnZVLX0rqDW7tD4TnmXtITGeje5x9teUgvHG7e6rsDAKf9ueQs6iBBY6DQpcMxttySUCUkv5kJKSibNprFc1bNwW4mqjsqUvsZxKQymueffV5cn864zo63jyQPcZqhRCzEk5B2kbQqkq%2FlESIBw2SwGGSJsrF2MoAK8RzOGkP6nJXJjthM4D%2FQDd8VntnCcmgk3kqZruCmTpgza9agp4cQxEDsR1k5jrVuMwksGWvQY6pgGpevbrxjvRzp%2Fhq6NFHrySvWuRIx6j1SQV4g40zvV62lp3EG%2F8OAEZKqbRceOlXPlIS%2FMrn6eB%2Bf0ujNwY5dfcQmXc%2FZq1KYWsL1MZI%2FiQQljjyXGvWo9NwYLJXMv46WEA9jtpQeT98oZg0U53tHXc5UqAH3Y05UmNZI%2BFOhprtZ1KF%2BJbH2N2oKdUMPZtrh9vkEQStfq2qiI6KDUtCDeCO9nt1JE%2F&X-Amz-Signature=a4db52d6444085f4b3e68e9737b485525a82e633ebcdce7b314e49d651d2d1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCEJHUBS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFIepKp8CTQyDvEzKI%2B%2FiZkRg74TWsICr7ZpCHWrWnwgAiB4TlgqOFYG1150pEE83vP0C5XECjXIrEEoZmYV3RH45yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMNnD1Zu23%2Fqra1rfjKtwDk6b5rpsu3%2BOs%2FixeOmFuncuNaBh2OM4xW%2F4IOsJ2eZ5Vfygyp4zaoRRNwFq6MTUJfodFqvrkp7ePpTGZY7LE1Wb9bG6ck60nBfwAiBG6rSB3jpt5YZECf7H1psGVlSuGQkU67eWIdjkvpLxRWhSmTj0gyYDni57qoEdK9a6SDSmfJx2MKlvyisnENJ7t%2FbOo%2B0Pm7lFnksCoHNlMtlhk6wq9Pvz3yjOGMuKYSNr2oEQAv905IjSswD5MSxu%2FmPrFL8pQSZqyeFyS2dwTPctX56WqxxnJQ2q%2Bsb4sgdG0V9mN62h3sx9UDRB%2BiGmY7ruVXxpmekAz3sRBdB2ECtSOyExDQVowQ%2Fv3rjtbqTGWdoVXA5TPeTHuAT%2BUm0Vl341z6jIQxqWFU1VVIVelok5vQnmGQnZVLX0rqDW7tD4TnmXtITGeje5x9teUgvHG7e6rsDAKf9ueQs6iBBY6DQpcMxttySUCUkv5kJKSibNprFc1bNwW4mqjsqUvsZxKQymueffV5cn864zo63jyQPcZqhRCzEk5B2kbQqkq%2FlESIBw2SwGGSJsrF2MoAK8RzOGkP6nJXJjthM4D%2FQDd8VntnCcmgk3kqZruCmTpgza9agp4cQxEDsR1k5jrVuMwksGWvQY6pgGpevbrxjvRzp%2Fhq6NFHrySvWuRIx6j1SQV4g40zvV62lp3EG%2F8OAEZKqbRceOlXPlIS%2FMrn6eB%2Bf0ujNwY5dfcQmXc%2FZq1KYWsL1MZI%2FiQQljjyXGvWo9NwYLJXMv46WEA9jtpQeT98oZg0U53tHXc5UqAH3Y05UmNZI%2BFOhprtZ1KF%2BJbH2N2oKdUMPZtrh9vkEQStfq2qiI6KDUtCDeCO9nt1JE%2F&X-Amz-Signature=c09efd79228fcbd0f724818eb9b8ba30aede36a3f98207fec78e4c54388d070d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
