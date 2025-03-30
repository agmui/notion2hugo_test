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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREMWQ6N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDK5z9Xb9RpOj%2FKF6bijzyFYlptTDhUxMwgPtOP8enqgwIhAMKceiHiWkz9fZqn3Jco4DlNuP4Ohq4oaI5N6d4G75XrKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy09gd4MSHRVEbY56oq3APzHHlQ2TtiEjjgT8taXbZWGeP65iy1rCOPjHvNEU2VAsVDRuyOtjpx%2B2Z%2BTr4XFzGNqxztZPL%2BIuF0ID3qnin80YU7puYn%2Br5fh6yZf7kOtM%2BcKNvC1drbLUXPcMpqIm9fDGMDSFcXG%2F4em5d7fsR3SAlhxYO9bBf72k7kT7VK9WfIJa5bTTKN0drGMlNIYaBK5X6%2Fn%2BjQsCnZ8FMbzIALKtN73d%2B0aNbRIsKQC5hIOH3jZN9qPypBloMgtcvT%2FWo2liNh5hzF4V9wY8dYEdBpUzF4uy4bHiyxELg%2BnfG0OhklGEf3GK9D1JjDHKxBCiklNyA13kaMa5c3MPLvsnQMgwQnRFIDeUTifKXqBunvFgqzOhL4nVRd2u4qbh3hGO6hPd1K3vRLPXOKUJ3sV%2BFFuemgkz4u3iI%2FgN9v8eu71MckCdZxGiNS8AS1U2kqa4QW6Os%2FZXMrb8bCHoMiq4nWNVeB1vMHypEsWinEjCSZNavb5Euo5orlwnj5XBQ45P9i7lwNuCSULg1xHwXht6PrrpHSMbRtY8sXVhCzhn%2B77RsoL83YBZVCHP6ZcwUSC4LcmCaCHVmq5cLZaWVx%2F8NJjPUsl81uNXS9M9jrPPa3By3jDiOxQOMNve12PDCp2Ka%2FBjqkAQsO%2Fs0EdBxdlNrmhq%2B%2F%2BYXdJVCyJgyeRLRn01hZ7CkKuejiSf%2BZE8Tv6iSA7ZLwIDHLygE9mbBABS8VSM4NtkVY%2F%2BNWf3nuQCPXK1E2pGDzOMoE5rF4mjwDDcconWDJ9EAmup0DIHJbCrUrj%2FSzj3sqNym7TeQaT%2Brx6XttJt3vFZU0fAAYCqsmGkAVONhx0jzBHDnzSa0pQpxGI5%2BYGhGzexlU&X-Amz-Signature=f7db1b9623701e9409eacfa7f91aea844b80f1d92108f310c899dbf2c6fa97c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREMWQ6N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDK5z9Xb9RpOj%2FKF6bijzyFYlptTDhUxMwgPtOP8enqgwIhAMKceiHiWkz9fZqn3Jco4DlNuP4Ohq4oaI5N6d4G75XrKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy09gd4MSHRVEbY56oq3APzHHlQ2TtiEjjgT8taXbZWGeP65iy1rCOPjHvNEU2VAsVDRuyOtjpx%2B2Z%2BTr4XFzGNqxztZPL%2BIuF0ID3qnin80YU7puYn%2Br5fh6yZf7kOtM%2BcKNvC1drbLUXPcMpqIm9fDGMDSFcXG%2F4em5d7fsR3SAlhxYO9bBf72k7kT7VK9WfIJa5bTTKN0drGMlNIYaBK5X6%2Fn%2BjQsCnZ8FMbzIALKtN73d%2B0aNbRIsKQC5hIOH3jZN9qPypBloMgtcvT%2FWo2liNh5hzF4V9wY8dYEdBpUzF4uy4bHiyxELg%2BnfG0OhklGEf3GK9D1JjDHKxBCiklNyA13kaMa5c3MPLvsnQMgwQnRFIDeUTifKXqBunvFgqzOhL4nVRd2u4qbh3hGO6hPd1K3vRLPXOKUJ3sV%2BFFuemgkz4u3iI%2FgN9v8eu71MckCdZxGiNS8AS1U2kqa4QW6Os%2FZXMrb8bCHoMiq4nWNVeB1vMHypEsWinEjCSZNavb5Euo5orlwnj5XBQ45P9i7lwNuCSULg1xHwXht6PrrpHSMbRtY8sXVhCzhn%2B77RsoL83YBZVCHP6ZcwUSC4LcmCaCHVmq5cLZaWVx%2F8NJjPUsl81uNXS9M9jrPPa3By3jDiOxQOMNve12PDCp2Ka%2FBjqkAQsO%2Fs0EdBxdlNrmhq%2B%2F%2BYXdJVCyJgyeRLRn01hZ7CkKuejiSf%2BZE8Tv6iSA7ZLwIDHLygE9mbBABS8VSM4NtkVY%2F%2BNWf3nuQCPXK1E2pGDzOMoE5rF4mjwDDcconWDJ9EAmup0DIHJbCrUrj%2FSzj3sqNym7TeQaT%2Brx6XttJt3vFZU0fAAYCqsmGkAVONhx0jzBHDnzSa0pQpxGI5%2BYGhGzexlU&X-Amz-Signature=dc3c1ed3a3f4ec8a0e6c74f8c1e58fee6ab2ebae5c263e8c07cb4884c9e5d335&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
