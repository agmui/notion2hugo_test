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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QDAJW6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCRcZywRCM7f0Jm5vhuWvAWs5Q%2F01%2BKgDvioeRcNekgQgIhAMeTaMcx3qoq%2F4FoxbiB7oT7azYqQMbwq%2BwLZ3k%2BLsPeKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYqzEDJ5ySM%2BCl6OAq3AOl0vCXt5MC2Win6rXdj0lUPYEI2fj4M%2B9KmSPhu3o57%2Fjk%2FYiFdH6jJEQNFq59qPhkYvikY2cVVTK1DNtc0dde38ikvltsrgJS2siRgkHlhjpfKH5vxDZCeaOraedIMDeiG1QFSnllDUUkrPVwSi57rb%2BS%2BUxSA3%2B1qgmsmHUdix%2F0IvZ%2BbaC7dnFpb8X2RgkLD0cDPB00hM13m0VgNKyZACCLsFDPCueYJI0oD9NFQU7wtALIEn%2FFCn%2BZH%2F4M8UtsQSnHEmRxYCUqbl%2BUkn7HJU5%2B80%2BNmndeMBbEvlLMF%2BYIsLqeNEniEuXGTA8nVUfZbm9cA0d9Na6iUVcVOuIq5ftLoqELyXZ54QR4vX4HJtgdcU729HKifbiBimFh5Fqj%2BQZBRJeEcZpwkx0bJ09EpLMU9JA4gImoXQFO8Tzv7%2FDAP9DYYktpKtNAsTSPjFr8cHd5WDydbASL2n5%2F6%2Fsz7agOhL6bg6WCVl3lDbQG91jMcy%2FzIFagyeHuAX%2FkjO4RZQdz6bp85yEoLRGNhCK7naoe33yLt94DsWR36kIjIubVHaKO7UT2euNwV9eVa3G8i9WkomL%2FsCoJ41hWA8AYh6prcFOEoLMgSqk0mLxHQrO%2FF3UhSMAoDEviVTCBmPO%2BBjqkAZZanLj9j4NoV27wNKKWzI0K%2Bzb4FwN9LNrBx7FbsavMJMSuqIPW7Y9ehI%2FFpe%2By%2FQBtJfVsEdDHYU3BKazKEgwJDsrpsMjpINMto2CVtJLiuAXNbJ3xVbXCYOX7NN2wId4sCqtNu5Pnu3Wq4L0KDWuNa8J91YFSTjrXGEvzkZxiA6gYyHakqu8gP3yKumAcLXPuQZyC0m6yiXbV53fSQvFlsSFo&X-Amz-Signature=87b3d9f17ed220a51e1817e1c69c399ec270732f0e3e2796972434f47e8bfb57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QDAJW6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCRcZywRCM7f0Jm5vhuWvAWs5Q%2F01%2BKgDvioeRcNekgQgIhAMeTaMcx3qoq%2F4FoxbiB7oT7azYqQMbwq%2BwLZ3k%2BLsPeKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYqzEDJ5ySM%2BCl6OAq3AOl0vCXt5MC2Win6rXdj0lUPYEI2fj4M%2B9KmSPhu3o57%2Fjk%2FYiFdH6jJEQNFq59qPhkYvikY2cVVTK1DNtc0dde38ikvltsrgJS2siRgkHlhjpfKH5vxDZCeaOraedIMDeiG1QFSnllDUUkrPVwSi57rb%2BS%2BUxSA3%2B1qgmsmHUdix%2F0IvZ%2BbaC7dnFpb8X2RgkLD0cDPB00hM13m0VgNKyZACCLsFDPCueYJI0oD9NFQU7wtALIEn%2FFCn%2BZH%2F4M8UtsQSnHEmRxYCUqbl%2BUkn7HJU5%2B80%2BNmndeMBbEvlLMF%2BYIsLqeNEniEuXGTA8nVUfZbm9cA0d9Na6iUVcVOuIq5ftLoqELyXZ54QR4vX4HJtgdcU729HKifbiBimFh5Fqj%2BQZBRJeEcZpwkx0bJ09EpLMU9JA4gImoXQFO8Tzv7%2FDAP9DYYktpKtNAsTSPjFr8cHd5WDydbASL2n5%2F6%2Fsz7agOhL6bg6WCVl3lDbQG91jMcy%2FzIFagyeHuAX%2FkjO4RZQdz6bp85yEoLRGNhCK7naoe33yLt94DsWR36kIjIubVHaKO7UT2euNwV9eVa3G8i9WkomL%2FsCoJ41hWA8AYh6prcFOEoLMgSqk0mLxHQrO%2FF3UhSMAoDEviVTCBmPO%2BBjqkAZZanLj9j4NoV27wNKKWzI0K%2Bzb4FwN9LNrBx7FbsavMJMSuqIPW7Y9ehI%2FFpe%2By%2FQBtJfVsEdDHYU3BKazKEgwJDsrpsMjpINMto2CVtJLiuAXNbJ3xVbXCYOX7NN2wId4sCqtNu5Pnu3Wq4L0KDWuNa8J91YFSTjrXGEvzkZxiA6gYyHakqu8gP3yKumAcLXPuQZyC0m6yiXbV53fSQvFlsSFo&X-Amz-Signature=82288baacc60b51e2a249739b6e8d2ac096519be8c96928a86a6c772f24fd9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
