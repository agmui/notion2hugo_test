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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISS3PZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIB6aiTCN2NRsaDFd49Lf3h64qWR2TodHSA%2Bc%2Bg5a0JTSAiEAzIZmi1JijgXG97o%2BYsMfeSVf%2FXZAWZfnswNo3HPGNwUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDK4Eiwu2OUavPzntUCrcAxJxoHlYtZ7PrxlkL2FMFBww1t37gH8JJR6GB2tsodnR6ij5xm%2Blo%2F%2FCNhIt%2Ftup1HGSVAlV1GxEuXqcR9sE0TYEs5mbV%2F83w9g77iB0mStNs%2B%2FATjO%2Fbi2r7QJL5QWPpga9oE7q57L1xUU%2FW1aqc0XJeFTQb1Xbu1%2FpFbPAVwoKVceo3921g7qGiA4Q1%2BXoW%2FOLkogwAReVstVO4J0lRMKyB%2FL3oMB4Zu8F6%2BIHw3GAjLunsSO%2BF9YTS03nT4oXNF8xYScb5tPrPCRRu5lnAGuRwdD2xTxauyc887i6uqeEDHoiYq5P1hP7WWZQJ5JB2co0EcU4vH4NrvQwdhJOWK5gvaWVSnzgKdAojndB15q2Oz8f58K85sKEU%2F6RmRqppYxriQWhShiJB7ohOXf%2FDbaotLTpGD7%2BdErhiPrCjUff1ZXdOucs3P5xsVIekXcl6FTxkYkZa9A32E8oiaB1LL%2FiEe%2FGXmnMasxUFlVl9eyN%2F1K6nkczXlkAZTszxhNHN3yUWJDPfAv9gaimnIS55w50g6HAUK6gYjUualjO7d%2BQIlBIVe8LrW0q1NEDS8Ies9mCfF6ni2HK1Ec6LuHRYNXDBRg68cQYIIiSnkKfNDt%2B9n%2Fav61eFQKpG4O%2FMN%2FehcIGOqUBqzZq4woxHjKe5%2BjbDr5JSW1BgMjYGYqdj6i4v8FzZBt349eq2pAxDxpOU8ExKs8GIpfiD9VuTZJWq%2BWXEXaeGUDT0Dtr3USCrMo8%2ByAwOXFGbdU%2FSRC%2FnvPR7h%2FvdJH6VwxJMPR0DLf4xaqAUbMKezdHsiY9kJZK%2B10gtDg0RSupkBYtwguX2VCKAUL91UtayBeAZlrl%2FssKi%2FbM7gM0059rY%2BL2&X-Amz-Signature=e7a09019bd756e6aa525dd412c9ffe0c99d80ebb7508f97b860d97c4a57fa098&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISS3PZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIB6aiTCN2NRsaDFd49Lf3h64qWR2TodHSA%2Bc%2Bg5a0JTSAiEAzIZmi1JijgXG97o%2BYsMfeSVf%2FXZAWZfnswNo3HPGNwUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDK4Eiwu2OUavPzntUCrcAxJxoHlYtZ7PrxlkL2FMFBww1t37gH8JJR6GB2tsodnR6ij5xm%2Blo%2F%2FCNhIt%2Ftup1HGSVAlV1GxEuXqcR9sE0TYEs5mbV%2F83w9g77iB0mStNs%2B%2FATjO%2Fbi2r7QJL5QWPpga9oE7q57L1xUU%2FW1aqc0XJeFTQb1Xbu1%2FpFbPAVwoKVceo3921g7qGiA4Q1%2BXoW%2FOLkogwAReVstVO4J0lRMKyB%2FL3oMB4Zu8F6%2BIHw3GAjLunsSO%2BF9YTS03nT4oXNF8xYScb5tPrPCRRu5lnAGuRwdD2xTxauyc887i6uqeEDHoiYq5P1hP7WWZQJ5JB2co0EcU4vH4NrvQwdhJOWK5gvaWVSnzgKdAojndB15q2Oz8f58K85sKEU%2F6RmRqppYxriQWhShiJB7ohOXf%2FDbaotLTpGD7%2BdErhiPrCjUff1ZXdOucs3P5xsVIekXcl6FTxkYkZa9A32E8oiaB1LL%2FiEe%2FGXmnMasxUFlVl9eyN%2F1K6nkczXlkAZTszxhNHN3yUWJDPfAv9gaimnIS55w50g6HAUK6gYjUualjO7d%2BQIlBIVe8LrW0q1NEDS8Ies9mCfF6ni2HK1Ec6LuHRYNXDBRg68cQYIIiSnkKfNDt%2B9n%2Fav61eFQKpG4O%2FMN%2FehcIGOqUBqzZq4woxHjKe5%2BjbDr5JSW1BgMjYGYqdj6i4v8FzZBt349eq2pAxDxpOU8ExKs8GIpfiD9VuTZJWq%2BWXEXaeGUDT0Dtr3USCrMo8%2ByAwOXFGbdU%2FSRC%2FnvPR7h%2FvdJH6VwxJMPR0DLf4xaqAUbMKezdHsiY9kJZK%2B10gtDg0RSupkBYtwguX2VCKAUL91UtayBeAZlrl%2FssKi%2FbM7gM0059rY%2BL2&X-Amz-Signature=d0469944af6ea0efb409ca723a996e6b9a8ab47e0b50c6c6259f9cc224c0cbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
