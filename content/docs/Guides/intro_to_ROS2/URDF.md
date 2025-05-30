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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WR2F7AK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6JFopodJlTrAXXgchRqiJcc2gsYxuIKAmO9TIfmV1jAiEAl%2BnHs51BPyzMaa%2B%2Byl2tBZrjMdhKrbWkNcn8bQ77rmYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9MVsVje5Zk1Agj9yrcAwXY%2FNHuFrvl1BS8tHcGnfD1iAmRtP2%2FHW5WuRL99PQGLTpWDPGOpE6dujVZNL5KSD05vmxqq%2FipHBXGwIxsvu56le9Cy0iJ7j87Xy12A0OQw52FA1%2FTFD4wMQmJi0ISrx6tGeU07sYZRziax4B2F24uneqhbyS%2FviAq5VZfkCsmvBD3jR3mcmaRPlTHSwj1RYacnLedrXkEYsvmHvjNi3uRe8s11NApTUIT3Iy5%2B%2Bs%2FqlTGPZ0KTJWKqsWlX1YnMvBy4aKI4ScNf8gljwtyxr7PbU8N6rE1InuzwM2Xum3bLYieyrIetzblckzM2vXAQsjq0MJRQmyxF4yN1iCpiCNVb%2FxkAAKjS20tFmhAhbKZ8zXdffUlR%2Frn6QSD9BSrEOShCIC5DyWJ0NnvzoY6oLcn7cdcko83eSOoWYJDFpBE%2BkuHU6Udok%2BXUUK8AlMf5K5nQJ2ezzUz%2BsYrJK0100N2Gg1WpSGaW2KMm3nR9uY3%2F8JzHweq449tO07HWy05lql1BbLOKt4Dz387uPT4pN0E3%2B7FEvG%2BhdonsiaAc71WBQWxry8LGkcj8LRYYPlnBGYZ1Pk8rL7zAt90WBjbQGamlTN9YMR%2BSER%2BT7j%2BRyz%2FtPHv3nF%2FqnfauLXOMNrP5sEGOqUBRFJgoQw7S%2F349%2BXc7ISzSMUwOROgMLetVmKgePjrTPY8zlExsawjDttdD0rASFN7DSwglj4XKybhe4AwpM6FCeeMZRh2ljSRR2f7265xKnzo6Tau8Ef9xZG%2FNZB7lAom1EpjE9YvLCN%2B3YEGU8QBctKkzYg3BxIhNnRCtIwiXRC4x%2FHi0Ks%2B5MxR0sW7AVber98w3uP%2BV%2FJ0LmZ4yGDG3mbXauFZ&X-Amz-Signature=9096e041be5c591a7c69e4f95776d53db3cc773a6b68c84e7826536e47989768&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WR2F7AK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6JFopodJlTrAXXgchRqiJcc2gsYxuIKAmO9TIfmV1jAiEAl%2BnHs51BPyzMaa%2B%2Byl2tBZrjMdhKrbWkNcn8bQ77rmYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9MVsVje5Zk1Agj9yrcAwXY%2FNHuFrvl1BS8tHcGnfD1iAmRtP2%2FHW5WuRL99PQGLTpWDPGOpE6dujVZNL5KSD05vmxqq%2FipHBXGwIxsvu56le9Cy0iJ7j87Xy12A0OQw52FA1%2FTFD4wMQmJi0ISrx6tGeU07sYZRziax4B2F24uneqhbyS%2FviAq5VZfkCsmvBD3jR3mcmaRPlTHSwj1RYacnLedrXkEYsvmHvjNi3uRe8s11NApTUIT3Iy5%2B%2Bs%2FqlTGPZ0KTJWKqsWlX1YnMvBy4aKI4ScNf8gljwtyxr7PbU8N6rE1InuzwM2Xum3bLYieyrIetzblckzM2vXAQsjq0MJRQmyxF4yN1iCpiCNVb%2FxkAAKjS20tFmhAhbKZ8zXdffUlR%2Frn6QSD9BSrEOShCIC5DyWJ0NnvzoY6oLcn7cdcko83eSOoWYJDFpBE%2BkuHU6Udok%2BXUUK8AlMf5K5nQJ2ezzUz%2BsYrJK0100N2Gg1WpSGaW2KMm3nR9uY3%2F8JzHweq449tO07HWy05lql1BbLOKt4Dz387uPT4pN0E3%2B7FEvG%2BhdonsiaAc71WBQWxry8LGkcj8LRYYPlnBGYZ1Pk8rL7zAt90WBjbQGamlTN9YMR%2BSER%2BT7j%2BRyz%2FtPHv3nF%2FqnfauLXOMNrP5sEGOqUBRFJgoQw7S%2F349%2BXc7ISzSMUwOROgMLetVmKgePjrTPY8zlExsawjDttdD0rASFN7DSwglj4XKybhe4AwpM6FCeeMZRh2ljSRR2f7265xKnzo6Tau8Ef9xZG%2FNZB7lAom1EpjE9YvLCN%2B3YEGU8QBctKkzYg3BxIhNnRCtIwiXRC4x%2FHi0Ks%2B5MxR0sW7AVber98w3uP%2BV%2FJ0LmZ4yGDG3mbXauFZ&X-Amz-Signature=b6420739b9905f75a8ab505c86e7c0223d6a7a6db716a22c329c7a3d54a4ee96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
