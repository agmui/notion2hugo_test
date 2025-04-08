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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIF2ORI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FWjcfYLyH%2BBd0XmN9pHqL9QkMp%2F7d0mjd6wfBXjGFwQIhAKCflMU6eURLFuIh5tapMIAg8lIzIwapyRhK1MlEVWEqKv8DCHAQABoMNjM3NDIzMTgzODA1IgwjpEhrGoeNkbmAGiUq3AMcFt3rAwqJzGmjdEcYCB5uxn%2BwxmdrzGBrZI2%2BsMxhGGJNFd4gDwqRAJ1ShusVbc%2FbM62Vf2CmJbuoyZu2n5q06BSd4wf7k5URmx%2FHT6A55r%2B7KmrSXYyXd7ayb0wiQ90i43ErjvlyriZcG8Lfbjc4i%2FugWmnYVbq9qjzWW53GKDeUdmpGwfmBhizTgbG9eRdVVZFL7kOtgIcDfq69mGD%2FbZZRIvrT1R2rGq%2FqRjUEppE8uSJNenyM%2BQGUKt8Cec9LoE5EcZIfRJ0S36lUYIE78KbU3XoWdG7FsakgOIZH8Q%2F%2Bj554P%2FIgdH2SAqsiJ5Y3vP7gFwdDcSbepolg3Hr4Oq1G0ASNCCM0wRr93pXNNKi4dfZD1UjcJ4S7Qj6v3CTKi7AlH35ZiQtjdozzk8%2FU9btoN0KUuNs3svDsfGG5Ceo68vsd3Hu4to84bRoaX%2BwnvskYy5bCTBMze3aPkTfC7vnMfdB0FWqMJKgRy06gyWNgovH%2B4g%2BazzDKV%2FHFMkiJBjrNMTp6ZyIcF4L5BjYMFOcpgVYR5ZBlBPckSZ7P8YYIH1P8Ow3Z6xg1AP76kuMiUZuNGh7nSy0v5wpfBn%2BBeL%2Bnd8337iCr2A%2FDmjkj%2BYmzf8iZNCZ0SKdQhjCBhtO%2FBjqkASk9xXvmcFvFld%2BYQ8kx9cv6Q8Hq4BiLjGCW6I8f0Se5oUKfYdxTYp8GN16op0qmzpCxyb0TDmDaiblNnek%2FjkWprHkt4o%2BJzqX3NGO27ZCE%2FVaoo02rEh19mvHEQqBMOs8tSoCgLK3Cd7dgOGqR9ED9yp2pJ3Y1PAT9n91Bp8zOXsuRuxDQ%2BXJ%2BgcOpn88OdyyijGA9k1lVKtwm6PYBRfS2m%2BUu&X-Amz-Signature=eb5c2bb4f53b01cfb484da54250b80ab997fc8bffb3bc15964f9602021989591&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIF2ORI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FWjcfYLyH%2BBd0XmN9pHqL9QkMp%2F7d0mjd6wfBXjGFwQIhAKCflMU6eURLFuIh5tapMIAg8lIzIwapyRhK1MlEVWEqKv8DCHAQABoMNjM3NDIzMTgzODA1IgwjpEhrGoeNkbmAGiUq3AMcFt3rAwqJzGmjdEcYCB5uxn%2BwxmdrzGBrZI2%2BsMxhGGJNFd4gDwqRAJ1ShusVbc%2FbM62Vf2CmJbuoyZu2n5q06BSd4wf7k5URmx%2FHT6A55r%2B7KmrSXYyXd7ayb0wiQ90i43ErjvlyriZcG8Lfbjc4i%2FugWmnYVbq9qjzWW53GKDeUdmpGwfmBhizTgbG9eRdVVZFL7kOtgIcDfq69mGD%2FbZZRIvrT1R2rGq%2FqRjUEppE8uSJNenyM%2BQGUKt8Cec9LoE5EcZIfRJ0S36lUYIE78KbU3XoWdG7FsakgOIZH8Q%2F%2Bj554P%2FIgdH2SAqsiJ5Y3vP7gFwdDcSbepolg3Hr4Oq1G0ASNCCM0wRr93pXNNKi4dfZD1UjcJ4S7Qj6v3CTKi7AlH35ZiQtjdozzk8%2FU9btoN0KUuNs3svDsfGG5Ceo68vsd3Hu4to84bRoaX%2BwnvskYy5bCTBMze3aPkTfC7vnMfdB0FWqMJKgRy06gyWNgovH%2B4g%2BazzDKV%2FHFMkiJBjrNMTp6ZyIcF4L5BjYMFOcpgVYR5ZBlBPckSZ7P8YYIH1P8Ow3Z6xg1AP76kuMiUZuNGh7nSy0v5wpfBn%2BBeL%2Bnd8337iCr2A%2FDmjkj%2BYmzf8iZNCZ0SKdQhjCBhtO%2FBjqkASk9xXvmcFvFld%2BYQ8kx9cv6Q8Hq4BiLjGCW6I8f0Se5oUKfYdxTYp8GN16op0qmzpCxyb0TDmDaiblNnek%2FjkWprHkt4o%2BJzqX3NGO27ZCE%2FVaoo02rEh19mvHEQqBMOs8tSoCgLK3Cd7dgOGqR9ED9yp2pJ3Y1PAT9n91Bp8zOXsuRuxDQ%2BXJ%2BgcOpn88OdyyijGA9k1lVKtwm6PYBRfS2m%2BUu&X-Amz-Signature=3a535a50fe905aa3472e3d5256b4358c637044c27b4988b534e11b5780c645c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
