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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFV5EE3%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH8e9f1QoaZC8Nx0cP4pmh5Qha0XbZ33MkLXvbHiuIMwIgOctyo9OdqhTYJsUgRmWFYystGZ4k6zEHw2EfSOSvCpUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdRCW0dkIXMs409oyrcA4warQ%2FuO79cvtOaDy13i8KxrCXaDCeEGDuLsRlLe3lHsENTHNTxxDSmL9XHpAPacDbT5aU7m5Ek3EGznYuSyDlAiwAE2kAbh5iOAce%2B1ofNdlw063%2BUz90Vizqp5ayrldsYmcgPEIblp0eUPpi1X7a%2B9Ok19XouUNjhvf1vv3hIpfEimxLaS3Ipf6cMGZiA8XE8Fxivt2Vi9Xx9kL8UsuYyLwZUfwJuOcrl15dk%2BbOmUElJsL7iutaCvhJZFoWTPLgkL33bOKorfZPD1YBOFhHegJ4m5nqOKL8BMSyBHRhuLVq62xahaDHc0gIKSNv8w87aGzGBZ48WlHl5OOdOTOIhUDzZ0MNyF58xftTnO1U58CR1iT2X1jJv32ty%2By7buvjEEDTLgR7xJYx2c4yfSCPQRs9tQNUU4QVbMQIsawCRDxVOC02fugsSDyxQMkAlNtXcwfTQNbhYLvw1KMihwYyIyRYT7YIXHX7s%2BIWzwO%2BMG3vYZDxlGeKj951LQnaeRr7W7VS7YNR99VrzjT2xI1S4W5c1%2BMxDUb08tnxsL6d0MHk01oOeRvf6AdtuFqyY0vNEqfcc4HZKuNbHnXBvD36cBkZSYzuSo2iZKSm30RLCxOVohRokk%2BpbKDlzMLiH38EGOqUBDwg4VptkmJS9V%2F1YtTnohaJ3%2BXdd6VxKEDQB9rrXurXllF85N3lxtPxXHCBrwOY3FeXsL0lppaAS9kZ0cDgsiFvi3XrnoCOtUyfFKWhC66kWEL1sJL2G4jLRPPrqzlZQz5MAXe7dKTSxLjAEGN1SBoVfKZUqLA1wvZqSc2S7AfhLpXrStqjHp1sbyguaqok0MKKT6jkxUR%2FXHMUV06pC2O3QZ8mE&X-Amz-Signature=3f37f74cd79e426804fb76cf35cf50e75894e54a0c3b3fed73a65ef991d82b72&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFV5EE3%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH8e9f1QoaZC8Nx0cP4pmh5Qha0XbZ33MkLXvbHiuIMwIgOctyo9OdqhTYJsUgRmWFYystGZ4k6zEHw2EfSOSvCpUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdRCW0dkIXMs409oyrcA4warQ%2FuO79cvtOaDy13i8KxrCXaDCeEGDuLsRlLe3lHsENTHNTxxDSmL9XHpAPacDbT5aU7m5Ek3EGznYuSyDlAiwAE2kAbh5iOAce%2B1ofNdlw063%2BUz90Vizqp5ayrldsYmcgPEIblp0eUPpi1X7a%2B9Ok19XouUNjhvf1vv3hIpfEimxLaS3Ipf6cMGZiA8XE8Fxivt2Vi9Xx9kL8UsuYyLwZUfwJuOcrl15dk%2BbOmUElJsL7iutaCvhJZFoWTPLgkL33bOKorfZPD1YBOFhHegJ4m5nqOKL8BMSyBHRhuLVq62xahaDHc0gIKSNv8w87aGzGBZ48WlHl5OOdOTOIhUDzZ0MNyF58xftTnO1U58CR1iT2X1jJv32ty%2By7buvjEEDTLgR7xJYx2c4yfSCPQRs9tQNUU4QVbMQIsawCRDxVOC02fugsSDyxQMkAlNtXcwfTQNbhYLvw1KMihwYyIyRYT7YIXHX7s%2BIWzwO%2BMG3vYZDxlGeKj951LQnaeRr7W7VS7YNR99VrzjT2xI1S4W5c1%2BMxDUb08tnxsL6d0MHk01oOeRvf6AdtuFqyY0vNEqfcc4HZKuNbHnXBvD36cBkZSYzuSo2iZKSm30RLCxOVohRokk%2BpbKDlzMLiH38EGOqUBDwg4VptkmJS9V%2F1YtTnohaJ3%2BXdd6VxKEDQB9rrXurXllF85N3lxtPxXHCBrwOY3FeXsL0lppaAS9kZ0cDgsiFvi3XrnoCOtUyfFKWhC66kWEL1sJL2G4jLRPPrqzlZQz5MAXe7dKTSxLjAEGN1SBoVfKZUqLA1wvZqSc2S7AfhLpXrStqjHp1sbyguaqok0MKKT6jkxUR%2FXHMUV06pC2O3QZ8mE&X-Amz-Signature=46d2394d52344852f69ee23fa7b44dbaf2006ee813fe00f333801f0f18e9f2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
