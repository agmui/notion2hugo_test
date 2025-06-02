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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7SPUPC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF1EFbemV3pCPquA4albpCJhG7lAmDpISbLhHvO1RJDxAiBypxqF%2BBsV7ifKKUQ6AT%2FSJUvoPjh6Dqx0mzf3DRU08yqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgQr3AOIJccEwDqnKtwDZZCNp1Rsu%2FYdL5Eg38yhurN2ad0%2F8PchGfitOYyLaU%2FIHNZAuWNWNYp9Tn1gEOHxqzmD3R0jDC1cKixLHc%2FtJZl4embdYqdCyc4XCvgfGmH63F7X659NUFi6%2BFhLDNlor%2Bqb4W%2BNYojXc1NbeJRos62Zo6ZQLBqBtTuuJ44dl0wunWvQJm0m9BhEIBTV3CH4JTr%2FtCMWDZWO5pZiHZmw2Ppauppk8nHw5caOuTGaoYnymo2NycjO3WFYhwhXHfnuEMa%2FW4XSC8ndLFEgTRxJ9GSTF2k4geds1kV%2BX0H0AkhiTnGXJBaxDI7YvDQVijJl4cFKJGBz49JTu6W5CsvPvvrlr21DwzmkRCazLMrYXUilOOO%2B0uffWF9758Nyc7X6zASoQRoa2zemqblQRmQ3uxTpmJOCx4q%2BMNAzx26lzVykU63vt%2Fj41cYNvbAkeBd734KWSYOs73DqG8obRnZES7OOEjR%2FR8OPasX7kX3oKa%2FJ%2BxDl1V3t6jPH1AkmMm7VP1MMHrmoDt0pyQI1FgJzq%2B52nBDP3HyGlNHj%2BHXtggvKzehCzbC8QyIUbHJdGUrXFkFFB%2B9gmxUWebOCtU4mvMmUCuLHcVNEgUMrcQrK27ZN%2BBi9uAIaCcLznKQw4PnzwQY6pgEafIss74gU7%2FWLc6t4SbQwizuv2Kk2iG11PUU%2F%2B%2FAv8Q64qxAp3z1pw9tRx8g8NxYMSEyNN9k84hT4Zv9VxBf73X9Oru%2FE%2FBznYQ%2FIaaeD9g9vBwtcgLLIJSwrvjX4EfCpTOEeNjxILVgvoZqZXjXHEKPN7X9WJpnA983dAI7JlLdGjcBdm9HM5OcYZpbunya6KoC8cr%2B9Mgzdhg4q1IviJ08ds07Q&X-Amz-Signature=4c4e3c8afd88ad1171f3a5333e6a592f7b74ac8ce52d922b57dbac04a6f1fe3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7SPUPC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIF1EFbemV3pCPquA4albpCJhG7lAmDpISbLhHvO1RJDxAiBypxqF%2BBsV7ifKKUQ6AT%2FSJUvoPjh6Dqx0mzf3DRU08yqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgQr3AOIJccEwDqnKtwDZZCNp1Rsu%2FYdL5Eg38yhurN2ad0%2F8PchGfitOYyLaU%2FIHNZAuWNWNYp9Tn1gEOHxqzmD3R0jDC1cKixLHc%2FtJZl4embdYqdCyc4XCvgfGmH63F7X659NUFi6%2BFhLDNlor%2Bqb4W%2BNYojXc1NbeJRos62Zo6ZQLBqBtTuuJ44dl0wunWvQJm0m9BhEIBTV3CH4JTr%2FtCMWDZWO5pZiHZmw2Ppauppk8nHw5caOuTGaoYnymo2NycjO3WFYhwhXHfnuEMa%2FW4XSC8ndLFEgTRxJ9GSTF2k4geds1kV%2BX0H0AkhiTnGXJBaxDI7YvDQVijJl4cFKJGBz49JTu6W5CsvPvvrlr21DwzmkRCazLMrYXUilOOO%2B0uffWF9758Nyc7X6zASoQRoa2zemqblQRmQ3uxTpmJOCx4q%2BMNAzx26lzVykU63vt%2Fj41cYNvbAkeBd734KWSYOs73DqG8obRnZES7OOEjR%2FR8OPasX7kX3oKa%2FJ%2BxDl1V3t6jPH1AkmMm7VP1MMHrmoDt0pyQI1FgJzq%2B52nBDP3HyGlNHj%2BHXtggvKzehCzbC8QyIUbHJdGUrXFkFFB%2B9gmxUWebOCtU4mvMmUCuLHcVNEgUMrcQrK27ZN%2BBi9uAIaCcLznKQw4PnzwQY6pgEafIss74gU7%2FWLc6t4SbQwizuv2Kk2iG11PUU%2F%2B%2FAv8Q64qxAp3z1pw9tRx8g8NxYMSEyNN9k84hT4Zv9VxBf73X9Oru%2FE%2FBznYQ%2FIaaeD9g9vBwtcgLLIJSwrvjX4EfCpTOEeNjxILVgvoZqZXjXHEKPN7X9WJpnA983dAI7JlLdGjcBdm9HM5OcYZpbunya6KoC8cr%2B9Mgzdhg4q1IviJ08ds07Q&X-Amz-Signature=a47406a7a6e625e861fbda303d99b1dd06696399dc4b710b2706a091c4483c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
