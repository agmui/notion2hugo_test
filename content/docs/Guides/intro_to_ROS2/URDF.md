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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLYRDZH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAKHnMBSQgORabkLj19NZS%2BUuFrXiBMRoNo3LF8eFVgMAiBuLUU%2BfXD3dox3jobq9fjuB3Mqnzu3c8othrWB0EahxSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMxl56DOM7RgrH4Km2KtwD1gqEUFws1y6FavrARQ8fzdweo9%2BznwvnjY6LkiQq4piekybyjLN157nDGE4sgHmAJwVAHf4aDEvD3GURSw0lKTtMdokenMwQ%2BNOFkdAYYk30yjsVcuxddEfqvq1i16%2FBbjFJmbKwu7wsEKN3CCX1U%2By0TNFJb1IorgeczSAplASZ12mKvpxrXovNAeaN0gv6AUFE83vIDX3hrvDPdxR80s4MUL5ZpABtB1WsrTvQUzvRrAaN%2B%2BdFVVOA9o4pQZ%2BCjrmT3Tcj5QzIeOeNnsEPVkxVOzsya29nTWo0RUxUUvT6agDdBfeC%2Fs76hxg8QIZRXl1FvBTaOhLBA14HQkqYvEHzbLblWEL6qH8ZHmKzXF%2BmjIP18vuXpTWEX%2B5mwvOh9uSN7pi7KeTrFPkU4pRGgdYQqvIdjs4k38H0D%2FYAbRFuy2rrNXYI1F6FBR1PCp0ucD5y5kQlhinecSiAXcEfw0HdNxlIqFhsSDaYEPij5Ss11By%2FLl8t6WAl2zDYnJVu3nUbxTmA04s8njjIMsqgmP%2BXdm6lOl1tkPHhTqUrOWctzEarRXl6aMBzOnt8kMz06Uo6vc9HmWoxGvFArcwIBC0C10yupKAIIP%2BDe1UT8ecoDKSUbGJ0725jtmUwnIP0vQY6pgGZPWiAQFn8kfcNcLxZpPAeuTM93I055iK6HLgkYV0F5aXU8tpKKZza28%2Ba90JBfUoXDoWtqz1KDzxbGQteHaHeotTj%2B%2FbU%2BkFa4QWBoyPS3ZymEDWolrWzZW%2FbCEBCUdNWuBt7VBFKjJ8CrEy36eah%2BX3JYJVF49F4RWbbjTVVDSnMvkaEql255Zmj8rCIELX2SpnPjmGuWRXlQrgRLDYzPLsIaZtT&X-Amz-Signature=925eee8de05b891a6017b6a463fd91015a964bda3646de696d12359aef056fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLYRDZH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAKHnMBSQgORabkLj19NZS%2BUuFrXiBMRoNo3LF8eFVgMAiBuLUU%2BfXD3dox3jobq9fjuB3Mqnzu3c8othrWB0EahxSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMxl56DOM7RgrH4Km2KtwD1gqEUFws1y6FavrARQ8fzdweo9%2BznwvnjY6LkiQq4piekybyjLN157nDGE4sgHmAJwVAHf4aDEvD3GURSw0lKTtMdokenMwQ%2BNOFkdAYYk30yjsVcuxddEfqvq1i16%2FBbjFJmbKwu7wsEKN3CCX1U%2By0TNFJb1IorgeczSAplASZ12mKvpxrXovNAeaN0gv6AUFE83vIDX3hrvDPdxR80s4MUL5ZpABtB1WsrTvQUzvRrAaN%2B%2BdFVVOA9o4pQZ%2BCjrmT3Tcj5QzIeOeNnsEPVkxVOzsya29nTWo0RUxUUvT6agDdBfeC%2Fs76hxg8QIZRXl1FvBTaOhLBA14HQkqYvEHzbLblWEL6qH8ZHmKzXF%2BmjIP18vuXpTWEX%2B5mwvOh9uSN7pi7KeTrFPkU4pRGgdYQqvIdjs4k38H0D%2FYAbRFuy2rrNXYI1F6FBR1PCp0ucD5y5kQlhinecSiAXcEfw0HdNxlIqFhsSDaYEPij5Ss11By%2FLl8t6WAl2zDYnJVu3nUbxTmA04s8njjIMsqgmP%2BXdm6lOl1tkPHhTqUrOWctzEarRXl6aMBzOnt8kMz06Uo6vc9HmWoxGvFArcwIBC0C10yupKAIIP%2BDe1UT8ecoDKSUbGJ0725jtmUwnIP0vQY6pgGZPWiAQFn8kfcNcLxZpPAeuTM93I055iK6HLgkYV0F5aXU8tpKKZza28%2Ba90JBfUoXDoWtqz1KDzxbGQteHaHeotTj%2B%2FbU%2BkFa4QWBoyPS3ZymEDWolrWzZW%2FbCEBCUdNWuBt7VBFKjJ8CrEy36eah%2BX3JYJVF49F4RWbbjTVVDSnMvkaEql255Zmj8rCIELX2SpnPjmGuWRXlQrgRLDYzPLsIaZtT&X-Amz-Signature=2d4934092c60abd044f545cb55e11f00bbfe8ed4f09f6bb4e4ac20130d48a0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
