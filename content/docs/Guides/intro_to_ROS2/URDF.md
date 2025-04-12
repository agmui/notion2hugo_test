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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2AGOYL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMwxO1WyW8neqnSA7y5YnMmqutAyFTcEowAKNT84Ln%2BQIhAJpyhv6tjrp7tuRZ5VbIxEYj6ZeWuBdPXiejE7E9OLfAKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Bx%2FCFxZEwZf3GgYq3AMZcz3jb9NVCOg5Vk9%2BDliG1mUcEoW%2BmODRaWl1nOO0YMTHh6B3e9vDQvwJhbg53YiXLayy6qFfBKfijirwQzK4WAB%2B5hx0cO2EaNWqc7lU7Y0QU2ocup%2FX6KMwb7jlY9rFXJ%2BjDKTbcfxqOJuqN1rxgJ5KEtTcEOyKBk1VjZqf%2BfVUMqRcKrifWB1y%2FJ%2BkOHt0tNyzws3B4pkxgd2C8kKizUNTNWe4qls4qb9OTFttV%2FWAQPR%2FwQHls%2Fn2BIF8%2F4h4tUpVqJAeD6jR%2FTWP8PfaXaDRTa8o8EjawAzuVC6kj%2FjUaWnpQ2UJzgOo0aotXxJNqoa%2BYHmmvyU0%2BOzkqZVTBZSzsZq%2BJbgIWj%2BghAC9KUmMcrgOvjJbZupl%2BPF6d3fFQYgJsSxfavbjDgnpCT2AH%2Fc5tbdhS4Ql6ttZ2qlO0F9T%2F68vbYInKLSYpjKOW%2BBgUB72a1f40iIKxwKHE6Fi6vUebhRlOzfum0MXJDVvIu6Zgk5G5PSTRb3OPbdoqTcnRAt3bQNXx6qIm8vChPMT53guJANgdWZAJFJzvPKQEU7%2F97L2enZLjae20E%2BUJI4z2IGFHs8XUnvqjWFdS3vQ3rHwujebxoz7SWgcxPuZxMIVnHZyX8DcXEAvFjDo%2Bum%2FBjqkAZNvsdEix2i85X4G%2FYV4LPoZe9PaMojqXoIwtq3cXrXMoOCMq89Ppg2%2FIGYDtnGqToVLMmGnTosxPxDf7JEUQfXMT3jvfgbujHgZckaE6M6%2BSqpSTb7sTEo04C0CzgbNdYQ8vCKBKoSyLkbnXo1WFEvpdUQjqeLu3njgr5jIL5jijT3%2FRmYeIzcJmFG%2FWq1Pnnt3wZybEdZ4RJZFUv2ImupWAqlj&X-Amz-Signature=dffcf8cd55a5e45e257ac769493d71ee58b6a8a359aac5c0f0ca768fe2863b54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2AGOYL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCMwxO1WyW8neqnSA7y5YnMmqutAyFTcEowAKNT84Ln%2BQIhAJpyhv6tjrp7tuRZ5VbIxEYj6ZeWuBdPXiejE7E9OLfAKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Bx%2FCFxZEwZf3GgYq3AMZcz3jb9NVCOg5Vk9%2BDliG1mUcEoW%2BmODRaWl1nOO0YMTHh6B3e9vDQvwJhbg53YiXLayy6qFfBKfijirwQzK4WAB%2B5hx0cO2EaNWqc7lU7Y0QU2ocup%2FX6KMwb7jlY9rFXJ%2BjDKTbcfxqOJuqN1rxgJ5KEtTcEOyKBk1VjZqf%2BfVUMqRcKrifWB1y%2FJ%2BkOHt0tNyzws3B4pkxgd2C8kKizUNTNWe4qls4qb9OTFttV%2FWAQPR%2FwQHls%2Fn2BIF8%2F4h4tUpVqJAeD6jR%2FTWP8PfaXaDRTa8o8EjawAzuVC6kj%2FjUaWnpQ2UJzgOo0aotXxJNqoa%2BYHmmvyU0%2BOzkqZVTBZSzsZq%2BJbgIWj%2BghAC9KUmMcrgOvjJbZupl%2BPF6d3fFQYgJsSxfavbjDgnpCT2AH%2Fc5tbdhS4Ql6ttZ2qlO0F9T%2F68vbYInKLSYpjKOW%2BBgUB72a1f40iIKxwKHE6Fi6vUebhRlOzfum0MXJDVvIu6Zgk5G5PSTRb3OPbdoqTcnRAt3bQNXx6qIm8vChPMT53guJANgdWZAJFJzvPKQEU7%2F97L2enZLjae20E%2BUJI4z2IGFHs8XUnvqjWFdS3vQ3rHwujebxoz7SWgcxPuZxMIVnHZyX8DcXEAvFjDo%2Bum%2FBjqkAZNvsdEix2i85X4G%2FYV4LPoZe9PaMojqXoIwtq3cXrXMoOCMq89Ppg2%2FIGYDtnGqToVLMmGnTosxPxDf7JEUQfXMT3jvfgbujHgZckaE6M6%2BSqpSTb7sTEo04C0CzgbNdYQ8vCKBKoSyLkbnXo1WFEvpdUQjqeLu3njgr5jIL5jijT3%2FRmYeIzcJmFG%2FWq1Pnnt3wZybEdZ4RJZFUv2ImupWAqlj&X-Amz-Signature=866958bf3f8f540776c1b40c01cb01c27da8929cfacc2af8a9225ebfab1fca34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
