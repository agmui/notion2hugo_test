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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCSAXLX4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUH2dU2%2BkR9%2FGER1%2FrzGL%2BzAzLzvXqBEwum2%2FF%2Bg%2FA5AiEA4i6ZfLACaCZg4MyHqtfAFyCpqDn8fKJbBFxLsyUJyBkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1LeorNIw3Ruk5eqircA2Ap4MQG1p3Zph00xL3VvN%2Bh9muR6t9UnRYYdsY2FgAcH3azcpxYNgx7jxEgBtS3nykrxrDI5gokzhRhsCTk%2BaW2l6PwrgFOxnhWvbh39amf833ohmHkEZKZde7XhDfnrFoB6gndJ5vd6Cj1dofcdxho0T3XXMMFi%2BlUE6hWg64SalPh%2FjqAlnYEQGtUo4BWi3rdAjpQc336M3rP8iNW%2F4IAZa0bvcT3%2BzQMuvjCZ7xV1kbVlaEwGoZZhC%2BQ4bvjH3s2shFzX6q5NZJbEU%2ByxzOrwoO3Q7IUzilubu4m038cW%2F%2BI%2BubpjiQPE2VTw%2FJ0qc0cubPTRxSWMgqLNbneYnPcu3BqMhRC6OdQ%2B14JJBOefm9dJ%2FAWrdeqlwJZi26q5fEZkgNxjMGim%2Fidhu5R7jzqfU7b906CWb%2Bxog6bZogOsXIbqcgYKK%2F69Bj1S9aDsFtA6CWo0BIjm03uztfmqwGM9eOiI1ervu0lrEtbJ052BLXkVCOmBIl4dD134pMPyqsEkUGu1UtYCSoMo08fLn1M1Qhjjq9fcCRG1Gdcoa5C2EbZHbDfcHsncQrQvTqfVBzKi8kck1K5Ngoh87aoryQGwMS%2B7VMy%2FX2jB0vSlaM4vZhX5bXF0MFdPsN2MNKjyr4GOqUBmy8r26vCUK0vVRYLqrjGlezDoDi78NPVfNfqTUTgwygPg%2BcMJLj9OgU2xY0CWaaX6wo3TUCHO2KJvIqlEcKtLApx0QUBJUpvlQHuhbetObTQuVDzlk5qSq89ArhT4dllPwBx9VezSKqXMF7xDEBsnB48nxwCO3AirOsuerdGWfDQ6f3bISysXXn5AXbgHB9T%2FbrpkCOGsVedO3tRdg%2BYt28Ehlmm&X-Amz-Signature=32271ebde55ee87f36bc3e14bd0aeaf883e8e2717087247111964faab3a21cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCSAXLX4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUH2dU2%2BkR9%2FGER1%2FrzGL%2BzAzLzvXqBEwum2%2FF%2Bg%2FA5AiEA4i6ZfLACaCZg4MyHqtfAFyCpqDn8fKJbBFxLsyUJyBkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1LeorNIw3Ruk5eqircA2Ap4MQG1p3Zph00xL3VvN%2Bh9muR6t9UnRYYdsY2FgAcH3azcpxYNgx7jxEgBtS3nykrxrDI5gokzhRhsCTk%2BaW2l6PwrgFOxnhWvbh39amf833ohmHkEZKZde7XhDfnrFoB6gndJ5vd6Cj1dofcdxho0T3XXMMFi%2BlUE6hWg64SalPh%2FjqAlnYEQGtUo4BWi3rdAjpQc336M3rP8iNW%2F4IAZa0bvcT3%2BzQMuvjCZ7xV1kbVlaEwGoZZhC%2BQ4bvjH3s2shFzX6q5NZJbEU%2ByxzOrwoO3Q7IUzilubu4m038cW%2F%2BI%2BubpjiQPE2VTw%2FJ0qc0cubPTRxSWMgqLNbneYnPcu3BqMhRC6OdQ%2B14JJBOefm9dJ%2FAWrdeqlwJZi26q5fEZkgNxjMGim%2Fidhu5R7jzqfU7b906CWb%2Bxog6bZogOsXIbqcgYKK%2F69Bj1S9aDsFtA6CWo0BIjm03uztfmqwGM9eOiI1ervu0lrEtbJ052BLXkVCOmBIl4dD134pMPyqsEkUGu1UtYCSoMo08fLn1M1Qhjjq9fcCRG1Gdcoa5C2EbZHbDfcHsncQrQvTqfVBzKi8kck1K5Ngoh87aoryQGwMS%2B7VMy%2FX2jB0vSlaM4vZhX5bXF0MFdPsN2MNKjyr4GOqUBmy8r26vCUK0vVRYLqrjGlezDoDi78NPVfNfqTUTgwygPg%2BcMJLj9OgU2xY0CWaaX6wo3TUCHO2KJvIqlEcKtLApx0QUBJUpvlQHuhbetObTQuVDzlk5qSq89ArhT4dllPwBx9VezSKqXMF7xDEBsnB48nxwCO3AirOsuerdGWfDQ6f3bISysXXn5AXbgHB9T%2FbrpkCOGsVedO3tRdg%2BYt28Ehlmm&X-Amz-Signature=5587bb418a442756b1414cbbca3eaa36717254a6d6a01b8024de13be17bbf081&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
