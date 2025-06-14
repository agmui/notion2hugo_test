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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ALOTQT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIH1U9kIPH2%2BE6PKlK6uy6FniadTCzjjEvLLcJ0GNtvIXAiBFOeDYCYPMIEsdMFEOeGBnnCn0iVUYo1CMn%2Bn0JQuaBSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMulovpyeZfNqteSqSKtwDtP%2BVP7UwMqCYbuzwiu9CJghRXttYtikJmhjqCrdxB6PMnqT%2BKtaKYEfw65I0u%2Fm0M4J8YIzfGj6c2iuC9%2BkixqbBboQ1ClbQMAxvDB1g1%2F%2BU5P0IwFGgpvyt0t8B5HK7XPlYBNSuhmm67xAVSl6accFYf%2B4X%2FSd2fw4xXLBKUXY%2FEkSB3NUkj1Zw7992vLvuBJiryCygVgdv3Rv1v9YaXwT9DQOo1raZ0yBptRtrtEsSyhe5PPQZKFK%2FUh5zmKAZqt34tyFo%2FXjbaPEhXnIZN1t%2BJ9xwPDpMXyR%2BfU3PSnEMWfhRli7cJD60eX%2Bngj2dU22EDPrAkXfTDWZo5u%2BI%2BnTOxAwucn%2B%2BY7TULnzKDG98qfLXenifgBYezPm%2BzNhtQNCT0O2WTxFnykH7XRCtNLU%2FRS%2BfFPDeWB5MalGUPn2IAGrtNWuTaQ%2FqjI%2BdT7x2tn1ZWLr%2Fpe4P5QaNxL2En%2FWe8gHGDtkedbu6Yrr8tNyGibbAj4U5T6nPK2Lf%2Fo%2BOqe0r7lKNUeZBWAKoRn6s7NO377Zm2Bz%2ByX0JE4DZEzMfcAAAkO4Nvcv%2BUG9M87cW3KxrvGL3Ga4ODOtsETdK2j0n9a6GJojz8qjB9T8kenBeG%2Br65JlCSO0YT80wg8K1wgY6pgGWFgppvXu3Y7eqi9pkCyDg4sEzsGExTW7HuA5OK28Yu5f3Ubz1QT2I4rmJw4p9%2FKPL8xCntw5xAHmwKFfxszxD0Jo%2BYmCG3mItI9qlHyHawZASTQPXMKloZrbfZx3281Etj8IDDlKEy6XpYq17OX2HDkYt14rHfJuCkBbKE8qgTD1o%2FXNF1FPR2jy8gWV%2BIOXpDGjvmS7B7S9uL7jvvTfMXlyXn%2Bff&X-Amz-Signature=c996b9daa48165c93cd2aee78bae8220dedb21e7163ec53836314148bf81c9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ALOTQT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIH1U9kIPH2%2BE6PKlK6uy6FniadTCzjjEvLLcJ0GNtvIXAiBFOeDYCYPMIEsdMFEOeGBnnCn0iVUYo1CMn%2Bn0JQuaBSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMulovpyeZfNqteSqSKtwDtP%2BVP7UwMqCYbuzwiu9CJghRXttYtikJmhjqCrdxB6PMnqT%2BKtaKYEfw65I0u%2Fm0M4J8YIzfGj6c2iuC9%2BkixqbBboQ1ClbQMAxvDB1g1%2F%2BU5P0IwFGgpvyt0t8B5HK7XPlYBNSuhmm67xAVSl6accFYf%2B4X%2FSd2fw4xXLBKUXY%2FEkSB3NUkj1Zw7992vLvuBJiryCygVgdv3Rv1v9YaXwT9DQOo1raZ0yBptRtrtEsSyhe5PPQZKFK%2FUh5zmKAZqt34tyFo%2FXjbaPEhXnIZN1t%2BJ9xwPDpMXyR%2BfU3PSnEMWfhRli7cJD60eX%2Bngj2dU22EDPrAkXfTDWZo5u%2BI%2BnTOxAwucn%2B%2BY7TULnzKDG98qfLXenifgBYezPm%2BzNhtQNCT0O2WTxFnykH7XRCtNLU%2FRS%2BfFPDeWB5MalGUPn2IAGrtNWuTaQ%2FqjI%2BdT7x2tn1ZWLr%2Fpe4P5QaNxL2En%2FWe8gHGDtkedbu6Yrr8tNyGibbAj4U5T6nPK2Lf%2Fo%2BOqe0r7lKNUeZBWAKoRn6s7NO377Zm2Bz%2ByX0JE4DZEzMfcAAAkO4Nvcv%2BUG9M87cW3KxrvGL3Ga4ODOtsETdK2j0n9a6GJojz8qjB9T8kenBeG%2Br65JlCSO0YT80wg8K1wgY6pgGWFgppvXu3Y7eqi9pkCyDg4sEzsGExTW7HuA5OK28Yu5f3Ubz1QT2I4rmJw4p9%2FKPL8xCntw5xAHmwKFfxszxD0Jo%2BYmCG3mItI9qlHyHawZASTQPXMKloZrbfZx3281Etj8IDDlKEy6XpYq17OX2HDkYt14rHfJuCkBbKE8qgTD1o%2FXNF1FPR2jy8gWV%2BIOXpDGjvmS7B7S9uL7jvvTfMXlyXn%2Bff&X-Amz-Signature=907e46c19ad678217cc13b05414cd8c981222277b02d0a69c981652057bca8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
