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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV75FKBS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6NYZaHH%2FjSGiEWRVm%2Fk677dh8CxTWX3Q9mcNeJjXiwIhANOSPf5GebIMLWGJcaWeFLgXkuX%2FRHkAluUSaF5yenanKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCkJBq8FOAOPjTH4cq3AOrJnRB8osJtZM1EPXl%2F3IPFuSMDkm5zZQ2NzbIJtBAT%2F33w%2FiPxdli6M6NRUzjGlSd%2BoZ9QoebmcHMNw6k5FLD5raLEZynfVOmsE1sp%2FT3UBwtV6Dd1acqa0N5oPZjJ48pE2NFLmeFuFUSHEztW5mON9aFsB99KmZ62hkurY26olp70jnmxo9Q5SXZPc4KgowgOWEf5BYsShPRFeMTg6C1Oak6x6vddk7VPrWs6DEGTDnyXdic5Jj%2BnoqSHLxLPOl76eQqmNR16eu0CEYEpZ5Nu9E0VIsTOWZxU7IU8uQ4cl0BcqGmD9Vft1qtJuRl6QEsJYpFA%2BikDYt8WBCopNnd%2Ff16ATg%2B7URvp%2BaJo5weFbP4h%2BxIUY318NL9hNZR8iZicGGl9gB9y3takUcaBWZQbEjgnqn%2B7TtftB%2BHqOTv%2FAfizRrRB49kurVO0lZz1Nl9ifM9lDtKowc6Z7NPOrwcGHaCwVC%2Fm43Fq6u1Wrd5w3qseZt7%2F9kBtlSxDBLURDri54cpn6lOvuwJPVWhkt1PdngMFm%2BBgxV5TGaMRGiYD8%2BjDX%2FXFyHc7yhgprmljwHxT8XLphvDOF9q9cE%2FDVjKX786eZq6S9kyCaiNBXKy5PFYmttiGclZJQvk%2BjCn9J%2B9BjqkARy6mP5KKVpj6gMJ9a3D29hbQ4jxmUeBmQKSMf38KeNRL7sZFBxvBY3xm0Os6lXVQ9lMT66tuRf9skP5Ktcg%2BRm3ALe%2BnoBUoF8JmaxGNhkZ3A27vY%2F4J%2FijUn%2ByqZ2cIXANLIvrSLLfGhBzKe2zgAIXVi5dWBgk2IgRr2A0sXtEN%2FFTXxm94bzR4FYb6RHUKq%2FLBhHNrpOSnw65WigpJPI8qEI0&X-Amz-Signature=917e0856f2ba3933cf33a58ddbf3f15749b2bbe56a8990eaf6c30e27e8c75216&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV75FKBS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt6NYZaHH%2FjSGiEWRVm%2Fk677dh8CxTWX3Q9mcNeJjXiwIhANOSPf5GebIMLWGJcaWeFLgXkuX%2FRHkAluUSaF5yenanKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCkJBq8FOAOPjTH4cq3AOrJnRB8osJtZM1EPXl%2F3IPFuSMDkm5zZQ2NzbIJtBAT%2F33w%2FiPxdli6M6NRUzjGlSd%2BoZ9QoebmcHMNw6k5FLD5raLEZynfVOmsE1sp%2FT3UBwtV6Dd1acqa0N5oPZjJ48pE2NFLmeFuFUSHEztW5mON9aFsB99KmZ62hkurY26olp70jnmxo9Q5SXZPc4KgowgOWEf5BYsShPRFeMTg6C1Oak6x6vddk7VPrWs6DEGTDnyXdic5Jj%2BnoqSHLxLPOl76eQqmNR16eu0CEYEpZ5Nu9E0VIsTOWZxU7IU8uQ4cl0BcqGmD9Vft1qtJuRl6QEsJYpFA%2BikDYt8WBCopNnd%2Ff16ATg%2B7URvp%2BaJo5weFbP4h%2BxIUY318NL9hNZR8iZicGGl9gB9y3takUcaBWZQbEjgnqn%2B7TtftB%2BHqOTv%2FAfizRrRB49kurVO0lZz1Nl9ifM9lDtKowc6Z7NPOrwcGHaCwVC%2Fm43Fq6u1Wrd5w3qseZt7%2F9kBtlSxDBLURDri54cpn6lOvuwJPVWhkt1PdngMFm%2BBgxV5TGaMRGiYD8%2BjDX%2FXFyHc7yhgprmljwHxT8XLphvDOF9q9cE%2FDVjKX786eZq6S9kyCaiNBXKy5PFYmttiGclZJQvk%2BjCn9J%2B9BjqkARy6mP5KKVpj6gMJ9a3D29hbQ4jxmUeBmQKSMf38KeNRL7sZFBxvBY3xm0Os6lXVQ9lMT66tuRf9skP5Ktcg%2BRm3ALe%2BnoBUoF8JmaxGNhkZ3A27vY%2F4J%2FijUn%2ByqZ2cIXANLIvrSLLfGhBzKe2zgAIXVi5dWBgk2IgRr2A0sXtEN%2FFTXxm94bzR4FYb6RHUKq%2FLBhHNrpOSnw65WigpJPI8qEI0&X-Amz-Signature=7193994c640950eae24e2dc1323cae84670de790fe6c7e80e171e39097050168&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
