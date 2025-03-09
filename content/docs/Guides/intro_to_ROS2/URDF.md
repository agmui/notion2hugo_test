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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEIANEX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDwMvrOxsUEVbNMUmkFZeM6%2F78IU%2FkwQC%2Far3vPO%2BQgwQIgeGAqRxECbfzyhov4Cf5iPsCoxXHMjMbppG9CF%2BDf8iYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA3Uf6o9w%2Bbe4X9mZSrcA9Kd8gl%2FJaiPt4qBYGji5mcN%2FTN11MityqidT1ctn%2FR1iuBuSB2HwMBhXCmBukjNO1Th646WAekZ5UKyI%2Buf8JAsxPZUljCaIwCQIg2ZxzUsEAj1rT14T%2Ftl3xUdk57s97jD%2Fs7NfnfossBNfIzqsWFEasTEsqSAoEYpPI7ZzqxbN89XShnLVWtn3hbo6cRTmQeqFjidGzW7B4h4t6TVnO%2FO7MNe86ZI0wURYkIceGckG5ckw8tKNMnbiwN8yt7woiDYGvMs3JFp74DJnYyPChllDsVWJM3WbuCnev7O6A7JiZa%2B7qknRKqQySE0EQt79j9I2Eswa6AxXUn%2BnWd%2B2upvWNM2xir%2BVyw60DRQwqqQBmLWwktGcONJcyjqP1N15EKbQEPzBbEL5EVQiE2LPuRg0xQ%2BHm0kZ3L0PT2d7wWk7cf%2FNrR5%2FyvRv0Eb%2BJ4WwY7MJmvYN4GdRL7%2B0PtrRx6%2FpqqTXCmYGzX9VFi5EzQkMe70YxW2eEwTZsZnZ0412Vs05RJgncxCDesxmaRC%2FS739wXR2rLQDp9nVLw7HLXyl6wqHunTQM%2B3vKKOHgeZgqDmYT5EDtBVf%2FhByDJmGs2Nho4zjgVtT6bjarQa9RrnSDEY2j0WdfkEbEj5MJSLtL4GOqUB1yPNjkmyiaBtbO6KzdX8lj5dTazghn%2FK7v9ihblObDpzd3MIsRh9WqllQlhWDEyclAbl7zD%2FGBEx%2BMzE0F4%2FMMpoXuCwhxrqqrprdPcgv%2BsQeBxLcUE0skwqsEtgW744BGBoWjHJxXiRhJqrrxeU%2B2KQu8xQHrj6y0Pan5qoA6LYS%2Fj2cExHLnB1K9ga0KPSdWS1X%2B8kniYOjRY0mTmC%2Fc8c7BBm&X-Amz-Signature=4a5679e2096d507e4d087825e9514dc862d02b093ff624646c48cf6beb8e311f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEIANEX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDwMvrOxsUEVbNMUmkFZeM6%2F78IU%2FkwQC%2Far3vPO%2BQgwQIgeGAqRxECbfzyhov4Cf5iPsCoxXHMjMbppG9CF%2BDf8iYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDA3Uf6o9w%2Bbe4X9mZSrcA9Kd8gl%2FJaiPt4qBYGji5mcN%2FTN11MityqidT1ctn%2FR1iuBuSB2HwMBhXCmBukjNO1Th646WAekZ5UKyI%2Buf8JAsxPZUljCaIwCQIg2ZxzUsEAj1rT14T%2Ftl3xUdk57s97jD%2Fs7NfnfossBNfIzqsWFEasTEsqSAoEYpPI7ZzqxbN89XShnLVWtn3hbo6cRTmQeqFjidGzW7B4h4t6TVnO%2FO7MNe86ZI0wURYkIceGckG5ckw8tKNMnbiwN8yt7woiDYGvMs3JFp74DJnYyPChllDsVWJM3WbuCnev7O6A7JiZa%2B7qknRKqQySE0EQt79j9I2Eswa6AxXUn%2BnWd%2B2upvWNM2xir%2BVyw60DRQwqqQBmLWwktGcONJcyjqP1N15EKbQEPzBbEL5EVQiE2LPuRg0xQ%2BHm0kZ3L0PT2d7wWk7cf%2FNrR5%2FyvRv0Eb%2BJ4WwY7MJmvYN4GdRL7%2B0PtrRx6%2FpqqTXCmYGzX9VFi5EzQkMe70YxW2eEwTZsZnZ0412Vs05RJgncxCDesxmaRC%2FS739wXR2rLQDp9nVLw7HLXyl6wqHunTQM%2B3vKKOHgeZgqDmYT5EDtBVf%2FhByDJmGs2Nho4zjgVtT6bjarQa9RrnSDEY2j0WdfkEbEj5MJSLtL4GOqUB1yPNjkmyiaBtbO6KzdX8lj5dTazghn%2FK7v9ihblObDpzd3MIsRh9WqllQlhWDEyclAbl7zD%2FGBEx%2BMzE0F4%2FMMpoXuCwhxrqqrprdPcgv%2BsQeBxLcUE0skwqsEtgW744BGBoWjHJxXiRhJqrrxeU%2B2KQu8xQHrj6y0Pan5qoA6LYS%2Fj2cExHLnB1K9ga0KPSdWS1X%2B8kniYOjRY0mTmC%2Fc8c7BBm&X-Amz-Signature=00afe2f8586573b4cab4e36212bd449ad3f593fd9f5890917fb9f24904e221ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
