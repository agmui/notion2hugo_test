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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XYQTUP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAGB%2FrGphahCP1QTq6Z7dtfzP%2FCiWrBi3pmdkzMEVSFSAiEA5S7pyinfIl7KtbZ5TH9I7cvvZoEUw7EZ5Q5Vvn6Znm0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvekv37tKSPRkMRuyrcA3S5%2FKCTkY7UdTe83F2hDXs4Dkj25Ia1crkekFwzBkR2w5fg%2FszIHRwPcA09f8HdbBYZWe1i1X6v6j4VKSAeyBf1xVrLf%2FB9lDuMn76MSIhyhrTXBzVG%2BuVsAnarhF522zunpojVmzYRlY2oUri0L6QnVEPanEBZXfoTpQXQ%2BPHBkqd38WZjGTKsXW3N3l8G5gbYkq3VGmCVg2XvG9Lhu%2Bg%2BUXVcVwcddn6BmzZiIiiOa%2FMsoU7sHw8izg0DRgiTeSYWxKQOavN1TAhWsKCgJiYCisvwuV3tFFB5BqukJIl1O3S9qoWg4nd1mdtHkEOrqOHEvIQc9bz1WDRdAEJewr9p5E9Uw1SKAwu2ihp%2BwOVclBwAhF3fbPax7SLeBYBLK3aCyPPHIdygbGBdo8326dH4prIl9bVyLC3CgMV7TPAUelHUdh608kkzOuHzttPTP4pwh1YpCKQA0Mt1EoxsBMtqWAon%2BIoO8Smui3MKsTJdFtQtGDf%2FAxjnRnE87oEh6Q%2B6rBvBDwyAIjWThDBGLGxbrm6Kkl1JICgh5ejfNitXHmIQMEEctt5llHOR0TdbWqaH%2Fc26Tr1DmjrbyXom67mS9KDtPidMfAqVqt2N0ovwNQgtkdoUqAOJAo3sMP%2F3xMEGOqUBIH9FnKzZNad5XprbtTL3p9xqC6W4Zbr0OVAaLJQ53O681tGKvLeH1GG0QksmCns2R4jCRN7aFk5z40oSCyCkenrzfGkc2bfTg4EIzxksebrWJkn5PVmOz2pgKewTsNTG4%2BoxRFl5psRZ%2BA5PAPQQfZ7wlyDTOTjw1sYkFv%2F7mwvqXUVMTNtCDBSInJGz3rZrlxfNY%2B8HTY1uq2oye4PK7JF5eIWY&X-Amz-Signature=b168bdc61fc29c21f49755dc1c6b7d83186f35c2c7de2fcf221120392ba452b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XYQTUP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAGB%2FrGphahCP1QTq6Z7dtfzP%2FCiWrBi3pmdkzMEVSFSAiEA5S7pyinfIl7KtbZ5TH9I7cvvZoEUw7EZ5Q5Vvn6Znm0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvekv37tKSPRkMRuyrcA3S5%2FKCTkY7UdTe83F2hDXs4Dkj25Ia1crkekFwzBkR2w5fg%2FszIHRwPcA09f8HdbBYZWe1i1X6v6j4VKSAeyBf1xVrLf%2FB9lDuMn76MSIhyhrTXBzVG%2BuVsAnarhF522zunpojVmzYRlY2oUri0L6QnVEPanEBZXfoTpQXQ%2BPHBkqd38WZjGTKsXW3N3l8G5gbYkq3VGmCVg2XvG9Lhu%2Bg%2BUXVcVwcddn6BmzZiIiiOa%2FMsoU7sHw8izg0DRgiTeSYWxKQOavN1TAhWsKCgJiYCisvwuV3tFFB5BqukJIl1O3S9qoWg4nd1mdtHkEOrqOHEvIQc9bz1WDRdAEJewr9p5E9Uw1SKAwu2ihp%2BwOVclBwAhF3fbPax7SLeBYBLK3aCyPPHIdygbGBdo8326dH4prIl9bVyLC3CgMV7TPAUelHUdh608kkzOuHzttPTP4pwh1YpCKQA0Mt1EoxsBMtqWAon%2BIoO8Smui3MKsTJdFtQtGDf%2FAxjnRnE87oEh6Q%2B6rBvBDwyAIjWThDBGLGxbrm6Kkl1JICgh5ejfNitXHmIQMEEctt5llHOR0TdbWqaH%2Fc26Tr1DmjrbyXom67mS9KDtPidMfAqVqt2N0ovwNQgtkdoUqAOJAo3sMP%2F3xMEGOqUBIH9FnKzZNad5XprbtTL3p9xqC6W4Zbr0OVAaLJQ53O681tGKvLeH1GG0QksmCns2R4jCRN7aFk5z40oSCyCkenrzfGkc2bfTg4EIzxksebrWJkn5PVmOz2pgKewTsNTG4%2BoxRFl5psRZ%2BA5PAPQQfZ7wlyDTOTjw1sYkFv%2F7mwvqXUVMTNtCDBSInJGz3rZrlxfNY%2B8HTY1uq2oye4PK7JF5eIWY&X-Amz-Signature=7ec60c1a3df4b8ef241172df2fda000422431a8c4fd595cc4e21c98f81151f47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
