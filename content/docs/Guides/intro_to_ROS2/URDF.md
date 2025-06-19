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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLYEQTN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSiGvmxxWeQqUPsfsSLqphDo2l04ri6kliviSP8HjiRAiAh0K6B%2F18s9gUkvhtphhdxySTZBIqv8l1mMxShR4T7ByqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk6YHtBhDgsUlKc7KtwDCZIKiYoXr58WZKozaF%2FrRLoWj3cIoaz0J6hl84P9eAf1%2Fw9UTGLZwn%2F4te3w7y1di0UuR47LfPhhxpkbLEm9uzy9DpGhz3Zf8BlOE68pIchOIi4xuFr5gOMNigVNlTaoBpNJhGRNSDzSs3QR1iOaHoYIwAv%2FJY40zBa9JBsqLBNM2iZy8faGLldg5woB%2B4DmYoRLTueoIx71O22zGZ3cJca%2FuayCkeQIlk7su5rVHdDHT7i2%2BTFplUhqjADacex1NIgasDejIVPHTQGmY%2Fi5RzluKVsfvPwz30K6a8nLRO2Y8E2VTZ2JZWjrNml%2Bi%2BvFG000V%2BIWWIlnYq85j4kaW%2FWU4pEPYosulR%2FS%2FzeGddFqCxoZAWjoFPnfJo2dTGTrV4dRhw9nBH1GvlC1Hch0RsFEDJsHNXl8TeiOMc4qr%2BLIK%2FWmUPpplHYUsD4JR9vnrGS46xfN2ZORyNnqNJqNyP3v1TIiHHxJUzmwCVRVHbQZKz1Qx8L0Igc%2FhOKQv6nm7hAThc%2B4tTmnQqKllwJmXJcokZ6o08pyeQf2XQQHkkY04R0J8IKaw8kvM4n2t0C1xntoBZDWpsog7hwdHw7sYcGti6STAeRxwCDjoLMQOrz4E4A66smEGxcVBaIwsoTOwgY6pgG3JVfGIZ21muvGLKjskcTnD1qjop2OeXhFShIxLN05V2Dr7R%2FnRpySC4vRAH3ovh8V559hNnMGoE7qb6i1DcWva5W4s%2FVkk%2BFcH0QUCOTmm4ceUWiG1M7qJWLOjnVTBN%2F5b3RZo980akbXQLrX16xfeNjUDAS4JTTHkkJK97IW4FKnG219jsTa8rXD9JAv324QD85ahXwEUGY%2BUnT5jsjPG%2FyGQ63z&X-Amz-Signature=967f6971f547ec2b4a4d8b94a188ed6a37d1cc19df666621af0624c4da848baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLYEQTN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSiGvmxxWeQqUPsfsSLqphDo2l04ri6kliviSP8HjiRAiAh0K6B%2F18s9gUkvhtphhdxySTZBIqv8l1mMxShR4T7ByqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpk6YHtBhDgsUlKc7KtwDCZIKiYoXr58WZKozaF%2FrRLoWj3cIoaz0J6hl84P9eAf1%2Fw9UTGLZwn%2F4te3w7y1di0UuR47LfPhhxpkbLEm9uzy9DpGhz3Zf8BlOE68pIchOIi4xuFr5gOMNigVNlTaoBpNJhGRNSDzSs3QR1iOaHoYIwAv%2FJY40zBa9JBsqLBNM2iZy8faGLldg5woB%2B4DmYoRLTueoIx71O22zGZ3cJca%2FuayCkeQIlk7su5rVHdDHT7i2%2BTFplUhqjADacex1NIgasDejIVPHTQGmY%2Fi5RzluKVsfvPwz30K6a8nLRO2Y8E2VTZ2JZWjrNml%2Bi%2BvFG000V%2BIWWIlnYq85j4kaW%2FWU4pEPYosulR%2FS%2FzeGddFqCxoZAWjoFPnfJo2dTGTrV4dRhw9nBH1GvlC1Hch0RsFEDJsHNXl8TeiOMc4qr%2BLIK%2FWmUPpplHYUsD4JR9vnrGS46xfN2ZORyNnqNJqNyP3v1TIiHHxJUzmwCVRVHbQZKz1Qx8L0Igc%2FhOKQv6nm7hAThc%2B4tTmnQqKllwJmXJcokZ6o08pyeQf2XQQHkkY04R0J8IKaw8kvM4n2t0C1xntoBZDWpsog7hwdHw7sYcGti6STAeRxwCDjoLMQOrz4E4A66smEGxcVBaIwsoTOwgY6pgG3JVfGIZ21muvGLKjskcTnD1qjop2OeXhFShIxLN05V2Dr7R%2FnRpySC4vRAH3ovh8V559hNnMGoE7qb6i1DcWva5W4s%2FVkk%2BFcH0QUCOTmm4ceUWiG1M7qJWLOjnVTBN%2F5b3RZo980akbXQLrX16xfeNjUDAS4JTTHkkJK97IW4FKnG219jsTa8rXD9JAv324QD85ahXwEUGY%2BUnT5jsjPG%2FyGQ63z&X-Amz-Signature=3349303469296468be023392cf6482a23eb4eb3b1f7f0772712f5ef459dac9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
