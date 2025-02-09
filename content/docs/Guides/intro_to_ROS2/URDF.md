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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILUDJQT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlFTVNcD8ah28EPI8h8ePIel%2BjBXbOmaWn8Zgr7zZZjQIhAPdG4GRhL%2BAh86LOiouv4UqF8xDvz0y4J6n6Yy6YyX%2BVKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwswATBwN%2BHR%2BG2UZIq3ANJWiA%2FZNg5xBuZHtYyXUYHcE2qlIzgsDYIssbRNfjXLWQIbWCLYn6T2KGPaIhuGhWghAT38csPa7r3wEP7ZxWEDfOZxyAeZJ%2B8VWGirNs9yQzhplAgqFd6Zouf2A3LTLCclzLlO1x0g3Ge0eCgJfU2%2Bpz7RBdHLdqxdiuBKgjoDDP7EpNveOGlG%2FxHUVg%2B%2F2H5TfiKtQ1yPofY%2BSe2niQbkbXwZsLlzjQ8ai8MuMnaJ8GP7ByzMvtikq5epnLeJvMD5BfMJmQ%2B5V84qpZRl%2Btkf2138TDcYBxwV3vyaLp6BYRIKWA3ZLnYyHzu9NYMKoyZ0po4EFOQ2%2B7KB%2Fi%2BX9E%2BdKZ3PTR0SHQwyNhlaePAZqPt8PgNRZYwgb5syLiBEWpQ5aFaPPskIxDYERM2myRuKwrBl1Kc208G0VBbUa0lhGLJGAu1kpB2p4rzhiMxYjr%2BB74yeCZoQPTapW10J%2F5XEDh7o7T7q8AqjGCQ18VJcBpa4Qy64K3PQGGK%2B6x7ClcmMBY%2F6RsFyXSQggCXbkosumoJoDUtWW8qdQ0RXLNQ0CKQJMGuw35frXpDO9p%2FiTKJ%2FlXpc0i%2FH76IX6pN%2BQXCpL3o0IzYkIEC45gmpTdButRRpBrc%2F1xZY4Yf3TC3iKO9BjqkAeu7xDIxuX1pACmjonEp6I6BlBv%2BR0vSiQS9MW9YTycrKO9mbz%2BsWPvA2gWet6jmPN2t%2FsdTCFxJoejFfTW228M%2BMMSW%2Bv6grkPIo1h04K8dB0Xu8vSB5GhfAVT7YpgUh9syy6d0YVC2OQf9KHN64ABsjjpxtlqXRrBuBvKPhZLMQRaM60iVeOSwHtNIC7oLJhaI4KAakZ2oqgQfkPCuXGd37fb2&X-Amz-Signature=e60380088e56ab9972f24597402232c4f8f36128bc3843e487550620a669fa69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YILUDJQT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlFTVNcD8ah28EPI8h8ePIel%2BjBXbOmaWn8Zgr7zZZjQIhAPdG4GRhL%2BAh86LOiouv4UqF8xDvz0y4J6n6Yy6YyX%2BVKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwswATBwN%2BHR%2BG2UZIq3ANJWiA%2FZNg5xBuZHtYyXUYHcE2qlIzgsDYIssbRNfjXLWQIbWCLYn6T2KGPaIhuGhWghAT38csPa7r3wEP7ZxWEDfOZxyAeZJ%2B8VWGirNs9yQzhplAgqFd6Zouf2A3LTLCclzLlO1x0g3Ge0eCgJfU2%2Bpz7RBdHLdqxdiuBKgjoDDP7EpNveOGlG%2FxHUVg%2B%2F2H5TfiKtQ1yPofY%2BSe2niQbkbXwZsLlzjQ8ai8MuMnaJ8GP7ByzMvtikq5epnLeJvMD5BfMJmQ%2B5V84qpZRl%2Btkf2138TDcYBxwV3vyaLp6BYRIKWA3ZLnYyHzu9NYMKoyZ0po4EFOQ2%2B7KB%2Fi%2BX9E%2BdKZ3PTR0SHQwyNhlaePAZqPt8PgNRZYwgb5syLiBEWpQ5aFaPPskIxDYERM2myRuKwrBl1Kc208G0VBbUa0lhGLJGAu1kpB2p4rzhiMxYjr%2BB74yeCZoQPTapW10J%2F5XEDh7o7T7q8AqjGCQ18VJcBpa4Qy64K3PQGGK%2B6x7ClcmMBY%2F6RsFyXSQggCXbkosumoJoDUtWW8qdQ0RXLNQ0CKQJMGuw35frXpDO9p%2FiTKJ%2FlXpc0i%2FH76IX6pN%2BQXCpL3o0IzYkIEC45gmpTdButRRpBrc%2F1xZY4Yf3TC3iKO9BjqkAeu7xDIxuX1pACmjonEp6I6BlBv%2BR0vSiQS9MW9YTycrKO9mbz%2BsWPvA2gWet6jmPN2t%2FsdTCFxJoejFfTW228M%2BMMSW%2Bv6grkPIo1h04K8dB0Xu8vSB5GhfAVT7YpgUh9syy6d0YVC2OQf9KHN64ABsjjpxtlqXRrBuBvKPhZLMQRaM60iVeOSwHtNIC7oLJhaI4KAakZ2oqgQfkPCuXGd37fb2&X-Amz-Signature=a1753ba36eb8c18774f745d580665813cea300c11cfe9b0e9f564d0a0375e4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
