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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VYLKQQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAZ4SZX52ia3X8X7%2FwTqAb%2FgAn5RzPp7%2B1R3tdn8WxUIAiBPMeKl8xLWV%2BbF6l8WzBA2%2F6P8vskXMGtPWaRh%2BWyOhSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMyR91RP%2Fq7PZrf1H8KtwDNJtHsRSlWCSNkF%2FFKw67l88bC5v93E5LKA3xngkqqsy6jvRqdSaS4V7BzNePkdPFEzjnxubX2hPDj8j%2BB1S9GonzzOHj20uiJU2%2F20sao2829cS0%2BOSY1PWXrWfGdv6TFL9%2FYq0bPR37jxL0rGbAbG9Kgjdy9UaoTN8mMvRawcZSywStPbwuPMtMuRcTaDA1jPsDddiK6bUKb3ZtURJEXnL0jwgeem4gXTA5JmQvsn3t4x2k%2FzaWXXxEPKEvAdEEXea2gm4JvbiaVheljkwtQ5TarvGpyvwrmSQStJOT1sQH2LGydkn74J1NbGk5xZvqA0S5bJfY3jYjLFMk5WiWwZlFLoQdA3eKMWrXSglacXKnI4Chl24Se2LPuqwKaCjSkWBX6NYeWX57mkhA51cOYx1slAIj00jntPHd9hDDxmv%2B%2BxJ4N3KuwybQE7ar1b0VE3CYlybU0rQaqy462vzxNvXCZqvOQ3pl6IBaSynYQJdipxI2G%2BWDgR7SX2djsmcFnzfOGwIQGtUH%2FQqctrrIYuPdy0VNteYtRO2Ixa8SE6%2B4dJYXz0VQtfEwhHDJUXmWiIaeazH9epcEFrkqoG%2FxvM6IL%2FNzLsyESDTKI1y34u%2FURCAgAWevP%2BmID6Qwrb3dwwY6pgE9Gu4Yby7dTK7aBPpxtD1uhQleFrw6Kt0caZg0KhgXIrt6U9AkQLgrjGyyFnyFVqy5v6o1JVV9mr9bmzPjf7nmRADlCbC0nTJcblagXUkHpiUNoJqf6YntLX%2BIq%2BuDREkvGtz7lRmAzkuocikcBh6PB2L4OqaxA8MmA9frhrIYs6SECIAXGX8uwmQXEbgN6xervInb3kVAtGEE0eqjIdFEGtYsYENB&X-Amz-Signature=c97d7f0757a3fcaaced523275ecb56b19c0149fafe50746a51bd7146efe71cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VYLKQQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAZ4SZX52ia3X8X7%2FwTqAb%2FgAn5RzPp7%2B1R3tdn8WxUIAiBPMeKl8xLWV%2BbF6l8WzBA2%2F6P8vskXMGtPWaRh%2BWyOhSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMyR91RP%2Fq7PZrf1H8KtwDNJtHsRSlWCSNkF%2FFKw67l88bC5v93E5LKA3xngkqqsy6jvRqdSaS4V7BzNePkdPFEzjnxubX2hPDj8j%2BB1S9GonzzOHj20uiJU2%2F20sao2829cS0%2BOSY1PWXrWfGdv6TFL9%2FYq0bPR37jxL0rGbAbG9Kgjdy9UaoTN8mMvRawcZSywStPbwuPMtMuRcTaDA1jPsDddiK6bUKb3ZtURJEXnL0jwgeem4gXTA5JmQvsn3t4x2k%2FzaWXXxEPKEvAdEEXea2gm4JvbiaVheljkwtQ5TarvGpyvwrmSQStJOT1sQH2LGydkn74J1NbGk5xZvqA0S5bJfY3jYjLFMk5WiWwZlFLoQdA3eKMWrXSglacXKnI4Chl24Se2LPuqwKaCjSkWBX6NYeWX57mkhA51cOYx1slAIj00jntPHd9hDDxmv%2B%2BxJ4N3KuwybQE7ar1b0VE3CYlybU0rQaqy462vzxNvXCZqvOQ3pl6IBaSynYQJdipxI2G%2BWDgR7SX2djsmcFnzfOGwIQGtUH%2FQqctrrIYuPdy0VNteYtRO2Ixa8SE6%2B4dJYXz0VQtfEwhHDJUXmWiIaeazH9epcEFrkqoG%2FxvM6IL%2FNzLsyESDTKI1y34u%2FURCAgAWevP%2BmID6Qwrb3dwwY6pgE9Gu4Yby7dTK7aBPpxtD1uhQleFrw6Kt0caZg0KhgXIrt6U9AkQLgrjGyyFnyFVqy5v6o1JVV9mr9bmzPjf7nmRADlCbC0nTJcblagXUkHpiUNoJqf6YntLX%2BIq%2BuDREkvGtz7lRmAzkuocikcBh6PB2L4OqaxA8MmA9frhrIYs6SECIAXGX8uwmQXEbgN6xervInb3kVAtGEE0eqjIdFEGtYsYENB&X-Amz-Signature=72c4dfd1d1be9a8b89432e722e36e1556d39f8c6d32fb2ec1881d4c1fc333916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
