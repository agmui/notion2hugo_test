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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW5EFZZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDuUEiBMz7r3yuXsiMqH61qo%2FiG05Yp41EVWZqmWBzsngIhAL1x4hgyeO%2FMFtYcyRX6nNuOfKHy4y8T34U2FMEw5Tk4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgzTcwfUvl8NhvUSq1Eq3AMK84EYAA5v9xYyUqfnil%2B5u3GiOCPMPck25KwAShWOko2eJmW2E%2BV3suc85XAe3zbNBRz2naxcduvuP9hoqiYtngvDoRD9IQaURe02Xgg0qNy5%2BAq1Ig7LfBgKHGXpwi1XUlpI%2FS5886Sh2l9yDgHbssRblv%2B1TMle2O6zrvy8B7RXGgFKO8GZWmRisijHnP4CeigJVhEm1j7hY7FdyiRMTL2iHtfy2RKcwymzHCZY7j0IkFGAdFwbBmEDRhJN%2FQ7d0TI%2BWEa7j8b56%2FnYeMVtNe7uoYyflkiiJQ245U%2FlM56vpB6XEI4tb3ojtaRwhBdVtbu7KKkp60ETyO7%2FWU3Phv3u%2B%2BGrDhc8czDI9u48xaNDY41HyOiziFIT1rGAmnSVFtMGxUb%2FTeBIlFZdg0v7iRdlECL0r7gdUQ%2Fd9z3kIbmQNMpLl6nHYWdYx%2BqcvmrzbESXnHXpbwHVXDmxWRka2WjpVQ%2FGtgsm9ryAMoueYkBr3rpCb5kFp3QDweDdoX3DNm5F271NmPZ4OHxeyoAwqO11nfj7Bba9xbwLYu1rDZmByLviQBZ%2Bin8SjS6%2Fo4DDI9qGAvbhj1HpJoCLIxysUfBqSD6mRvI45sEDPz5rJwfJIioD%2BziP9C7LTDCckuPDBjqkAZVeC1lKegUYHkcGCCB8i%2BhFU2o3I%2F552eMA8X7BbbB39B8V%2BapQ2yj90kBPD6cFYmAbuYkqAdS43XM1da9TUdIKexaYYjS3Q7yci6Ao%2BmyPU7jPWrFPuDhsAhPeguo5SwD3cq0EFhTJF60i4%2BF0idp6G4OkDYcfO89BCtxEqPfjzZYQ8LSb37u5OMDEqli0w3zn4Joau7OZAotW7FFzLutr7NTD&X-Amz-Signature=692406781a39d3105eae9e6c31e6a0e089a59d561f33e7758b5e1274e8fe78a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMW5EFZZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDuUEiBMz7r3yuXsiMqH61qo%2FiG05Yp41EVWZqmWBzsngIhAL1x4hgyeO%2FMFtYcyRX6nNuOfKHy4y8T34U2FMEw5Tk4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgzTcwfUvl8NhvUSq1Eq3AMK84EYAA5v9xYyUqfnil%2B5u3GiOCPMPck25KwAShWOko2eJmW2E%2BV3suc85XAe3zbNBRz2naxcduvuP9hoqiYtngvDoRD9IQaURe02Xgg0qNy5%2BAq1Ig7LfBgKHGXpwi1XUlpI%2FS5886Sh2l9yDgHbssRblv%2B1TMle2O6zrvy8B7RXGgFKO8GZWmRisijHnP4CeigJVhEm1j7hY7FdyiRMTL2iHtfy2RKcwymzHCZY7j0IkFGAdFwbBmEDRhJN%2FQ7d0TI%2BWEa7j8b56%2FnYeMVtNe7uoYyflkiiJQ245U%2FlM56vpB6XEI4tb3ojtaRwhBdVtbu7KKkp60ETyO7%2FWU3Phv3u%2B%2BGrDhc8czDI9u48xaNDY41HyOiziFIT1rGAmnSVFtMGxUb%2FTeBIlFZdg0v7iRdlECL0r7gdUQ%2Fd9z3kIbmQNMpLl6nHYWdYx%2BqcvmrzbESXnHXpbwHVXDmxWRka2WjpVQ%2FGtgsm9ryAMoueYkBr3rpCb5kFp3QDweDdoX3DNm5F271NmPZ4OHxeyoAwqO11nfj7Bba9xbwLYu1rDZmByLviQBZ%2Bin8SjS6%2Fo4DDI9qGAvbhj1HpJoCLIxysUfBqSD6mRvI45sEDPz5rJwfJIioD%2BziP9C7LTDCckuPDBjqkAZVeC1lKegUYHkcGCCB8i%2BhFU2o3I%2F552eMA8X7BbbB39B8V%2BapQ2yj90kBPD6cFYmAbuYkqAdS43XM1da9TUdIKexaYYjS3Q7yci6Ao%2BmyPU7jPWrFPuDhsAhPeguo5SwD3cq0EFhTJF60i4%2BF0idp6G4OkDYcfO89BCtxEqPfjzZYQ8LSb37u5OMDEqli0w3zn4Joau7OZAotW7FFzLutr7NTD&X-Amz-Signature=d5b9f8571491d50d3314131a36643cc5af7d2495fff9f7c3e9fffd32bac74f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
