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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBC6GVN3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIFxMdpIKsv5VvBrbHZ6s7X6TUYuDsMnj4vT4rs3CNAvWAh8VGp2HIbRfariyTBq%2Bpto%2FakNzoprwTATm1YLeUyS3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw6ZGyKiPxnqTW5hIq3AO79ciBJBWaumDDknqJ4%2FE81W1sl2%2BMjhRjv3iCN%2Bb1bpNvzuk%2BG%2BexHzfP0ueR8pPoT5NHUcqDDLRadbNsKAgnA0Dc9Q8ZJ95wZIwn7KLYm82mdHF9XxULjWfeQJ9%2BGKDcHgh0yv5W%2FpscINiHnm%2FyjfPj4sesi%2BCVbNDzzOXhImTu%2BKxfhX0YrWQ6VKV6dD%2BswKMNCbMhl0ZjoiWsaKzTIGxXdOOPG9UqrNFJuH3if4v9uwBnZkHibyhbK4BbGbq0U5tRX92NgPzvUREjZ3gAsyeWOGzCS9a9%2BX%2FupaT5wDn3xXXWPvrTj7Hr7LXRKaD3Fw%2FMt9HC1saaUNu%2Bc1CffDVVRsqyVGFuywJfl3U1E61B7%2BQVKmYp2pq4XXVsWzNz3u55HzcbNMLlSR%2BU7QRgYP%2FBsdMPIDn3A0cGXOvT%2FkzhXNTnuZxK1ghn5JELXFIG%2Fl1GQ4niz%2F0GF5IL8NCQGjDxCB0gkks8UPKbTZItQ5jnbbJ48vECR09Hm0DmnaCkmuycb5b6JDKyu7t72ynF9PK88X0UT3vraCpgBA7Xu8dRKKJ1q2LMFuXHbyMtpsCMOqYD57CmDJNl2%2BLCyva89I6rFa6EyxAaCh4nvcmqV4ndonJSpO5s0qZaYTCWvKi9BjqnAWSd4uXRE1McvTa7O0MqIhfDeFSS9aGH71%2BeTqZgqzGi%2BTT4UeJXe5r%2BNR1J40vP4QJ5Vmh2O2aPF9VwagD0c1Nw%2FmHgcOK372JxU9%2FAjxaCWhTOEoj9ad7pkzYkTgFzP6zFS42WYzJwMnB9osEpdcyGBR8u3M7hDsuUFeyJ4ST0bgl2Me%2FpzK2rZFlNCPHXMuTcrELrkdvKDSH832tj6%2Fw4rlhS6C0s&X-Amz-Signature=21efe329896609185e588907d9013cda6753303e0843af6e8f992d7a7d1e465f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBC6GVN3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIFxMdpIKsv5VvBrbHZ6s7X6TUYuDsMnj4vT4rs3CNAvWAh8VGp2HIbRfariyTBq%2Bpto%2FakNzoprwTATm1YLeUyS3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw6ZGyKiPxnqTW5hIq3AO79ciBJBWaumDDknqJ4%2FE81W1sl2%2BMjhRjv3iCN%2Bb1bpNvzuk%2BG%2BexHzfP0ueR8pPoT5NHUcqDDLRadbNsKAgnA0Dc9Q8ZJ95wZIwn7KLYm82mdHF9XxULjWfeQJ9%2BGKDcHgh0yv5W%2FpscINiHnm%2FyjfPj4sesi%2BCVbNDzzOXhImTu%2BKxfhX0YrWQ6VKV6dD%2BswKMNCbMhl0ZjoiWsaKzTIGxXdOOPG9UqrNFJuH3if4v9uwBnZkHibyhbK4BbGbq0U5tRX92NgPzvUREjZ3gAsyeWOGzCS9a9%2BX%2FupaT5wDn3xXXWPvrTj7Hr7LXRKaD3Fw%2FMt9HC1saaUNu%2Bc1CffDVVRsqyVGFuywJfl3U1E61B7%2BQVKmYp2pq4XXVsWzNz3u55HzcbNMLlSR%2BU7QRgYP%2FBsdMPIDn3A0cGXOvT%2FkzhXNTnuZxK1ghn5JELXFIG%2Fl1GQ4niz%2F0GF5IL8NCQGjDxCB0gkks8UPKbTZItQ5jnbbJ48vECR09Hm0DmnaCkmuycb5b6JDKyu7t72ynF9PK88X0UT3vraCpgBA7Xu8dRKKJ1q2LMFuXHbyMtpsCMOqYD57CmDJNl2%2BLCyva89I6rFa6EyxAaCh4nvcmqV4ndonJSpO5s0qZaYTCWvKi9BjqnAWSd4uXRE1McvTa7O0MqIhfDeFSS9aGH71%2BeTqZgqzGi%2BTT4UeJXe5r%2BNR1J40vP4QJ5Vmh2O2aPF9VwagD0c1Nw%2FmHgcOK372JxU9%2FAjxaCWhTOEoj9ad7pkzYkTgFzP6zFS42WYzJwMnB9osEpdcyGBR8u3M7hDsuUFeyJ4ST0bgl2Me%2FpzK2rZFlNCPHXMuTcrELrkdvKDSH832tj6%2Fw4rlhS6C0s&X-Amz-Signature=8c6c097f33bc7843db075b512b31937409c7325509ed7f9ab57bddd70a9fc0c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
