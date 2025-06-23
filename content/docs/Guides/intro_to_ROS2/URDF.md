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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZSI5ZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH%2FBlNuQq27vRvy42wjpgcNznvSKop1R%2FpcWV9xQL4QDAiBKXT%2BzXGN2CEGBBCIiqUiV7cD7rCArNqQ9xODdbV7MWiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM034qrTLJMhhBjqdXKtwDsVGodjxNUmeuZ2VDsK6G5AhfPWtPuxuDUKUc0mY6XZ1Zk4rKExGP1HsV8EHoehnexnOi1%2FB4SVc7ysjBXvOdi9nG%2FU2TRyNKdfKmFi0b%2FAmv2BzZ7KwsEEIpwAR4iHGduvbRxxOTfVB96RQNY8c78SY1jrU5YBp5eYiL2Jw%2BDezXpgpJ8k2qKu8%2BkMR8AEaUTqF45syGm4AA%2Bm5O1cmqRpskl%2BBVIXPW99vPNOmxfxeAtjXMsqL0q7ia6Hm9JERAFSPZkP%2B%2F28SkXBp0fVZRM19ncAMOMR0Z29u%2Fx%2BpYJ8hu2EOh5WPWN3RIrZ9Q1XdmX4hfuE6nxEijfNbAr%2BnwN3et%2BFfceEQ9JS0rxF8oA00Vt2kmlfgs0I1k%2F4LoXIuIQaSSlNAWUDTPKfpVETI%2FXTF93tzV9liqNYV%2BW1t60uzlx0p9jwhySo8fKytCD9kCisCmIMoS1hoATLQSygfiJLZAMaI2BmlDOtTcS%2FJjq8TPssYHE179ulrMQiIHEzQXn%2FGFdB6XusgXG02pedQ46ftnr9X3cawafRYRf0aZgOtHIUZ4%2Fbzb7wPF3pO%2BUsaxOkXy1486GplSnWik379ScvtjHNzxdre2M5l290mksSbdb2WdXph4kweBDW0wsLDjwgY6pgGybyTWuvrQmxkFr%2BNiYPs2HWrXvHDWWndHiKZogJ%2FHl%2BhZBOB3ZgwAegEnEFtICn0L0Ne7wbjKB3kQgVkYUKxAgPzmTA6NzS7n9tpmnqVQpWNE9MtKNDKAC7VeO457UOMDiYl1oUgqBS95q7xhoBqcF6xftR6KyUCJVD%2B4UzUV49Uh%2B0aCLq2hME4NP0Hez1suP6UNQQcbzKPhbmK2wyF9rROaeHHM&X-Amz-Signature=51a2abe4a36297fca2348a65faae9eb0396dfec743b8ea83e1eddf0cb8ae2f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZSI5ZT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH%2FBlNuQq27vRvy42wjpgcNznvSKop1R%2FpcWV9xQL4QDAiBKXT%2BzXGN2CEGBBCIiqUiV7cD7rCArNqQ9xODdbV7MWiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM034qrTLJMhhBjqdXKtwDsVGodjxNUmeuZ2VDsK6G5AhfPWtPuxuDUKUc0mY6XZ1Zk4rKExGP1HsV8EHoehnexnOi1%2FB4SVc7ysjBXvOdi9nG%2FU2TRyNKdfKmFi0b%2FAmv2BzZ7KwsEEIpwAR4iHGduvbRxxOTfVB96RQNY8c78SY1jrU5YBp5eYiL2Jw%2BDezXpgpJ8k2qKu8%2BkMR8AEaUTqF45syGm4AA%2Bm5O1cmqRpskl%2BBVIXPW99vPNOmxfxeAtjXMsqL0q7ia6Hm9JERAFSPZkP%2B%2F28SkXBp0fVZRM19ncAMOMR0Z29u%2Fx%2BpYJ8hu2EOh5WPWN3RIrZ9Q1XdmX4hfuE6nxEijfNbAr%2BnwN3et%2BFfceEQ9JS0rxF8oA00Vt2kmlfgs0I1k%2F4LoXIuIQaSSlNAWUDTPKfpVETI%2FXTF93tzV9liqNYV%2BW1t60uzlx0p9jwhySo8fKytCD9kCisCmIMoS1hoATLQSygfiJLZAMaI2BmlDOtTcS%2FJjq8TPssYHE179ulrMQiIHEzQXn%2FGFdB6XusgXG02pedQ46ftnr9X3cawafRYRf0aZgOtHIUZ4%2Fbzb7wPF3pO%2BUsaxOkXy1486GplSnWik379ScvtjHNzxdre2M5l290mksSbdb2WdXph4kweBDW0wsLDjwgY6pgGybyTWuvrQmxkFr%2BNiYPs2HWrXvHDWWndHiKZogJ%2FHl%2BhZBOB3ZgwAegEnEFtICn0L0Ne7wbjKB3kQgVkYUKxAgPzmTA6NzS7n9tpmnqVQpWNE9MtKNDKAC7VeO457UOMDiYl1oUgqBS95q7xhoBqcF6xftR6KyUCJVD%2B4UzUV49Uh%2B0aCLq2hME4NP0Hez1suP6UNQQcbzKPhbmK2wyF9rROaeHHM&X-Amz-Signature=c5040a42f945aaf38dd147fe9e4c9546e95f17116b2275af5a44e4b1b76c1809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
