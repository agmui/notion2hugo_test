---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QT23AHZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6asE%2Bg1YwdWUTrWKAtMF4olOyTQF%2BKFNCo86XVvYLTAIhAOI3XaqTtGAsWki0sTSZhrhYkGvUD2MiH0sLGPnXXCZVKv8DCHcQABoMNjM3NDIzMTgzODA1IgzE8n%2FoB6uRvutAnBYq3APSrwzedg1ySuym78nOFsDWy%2FedmJLqnyjLZL1TG36O6N1IjmHjRi6e9vjxo2ODzvStYp0QrAhrGjTDdquZJkGJ99BZIEouOWxMIK8qH0jZGKvkVV9hQGt6kzrcAzDs%2B%2BbC1LGaLKdJm1iKrvWmDhDw2vBCtpzvv929L%2F1LmnJMfn0ypae2B6%2BwLsSMnAQkBjHRBbfCvfK%2BDWSD21X7GqIPJC78MsxopXqorkf2U%2FOZjs8H4rkSf0QpCRtTLAjIk93dQ%2BI2ERIIlS0Jii9iuEKdTCtxCzGM8cbuOPdX1ZF%2FK6%2FATGstgAGDxDVlX%2BJE1xorHCy9kloMN6nM%2F101Jr0KcErj6c3DxdGiYM1XM5moQKPV6x6GU8wUd5UZgHed2kiW3c2QIvLdex7U5jrE7kwYjbCNEOsdHUqA5tqxxPFDQmINBbbQxXMjj3WUaS9JkhriVW9bTmyLmdgUsHHvKARH4m9scC775hkz8r38Tx5MPBYhKUp7derxY3DvLjsp7DWENXZsQ9kfdVqMWn%2FCx2aAH%2Bc%2BH%2FNK9PpouoUoNa%2FfvgtG5qciGf2QgeAqHH7BJGQ%2BnOidkEhbFhD%2Fj9aQQXY9LXr%2B9bzYuoLo98L6sy%2FH1%2F1UzyIdQ%2Bp1gEkDkDCenYLFBjqkAUQtPs0ctV5DhaBr%2FcLEpUOoKVm6pE%2BzKa0LS2cEu2wneB6tDGyRwQYixIOhEFijgNFANmGJsj0rM3g4lOWoazqIy27oPiXcwzAB7GK1A3DvA7ZFb9Rr5ewRxwUv67Pp7t7eMl50128OgsJLZ5CB50BpcWW7Ol%2BNV%2Fh8P5QWJUFag33S%2Bgy2n35cJnHNJoqvL0g979zphMMYLCu8ZWFFihudlWot&X-Amz-Signature=48045e59cbd4da91342a5fdfb0c49b75aff3eaad634e6d6ab153084d6a2d21a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QT23AHZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6asE%2Bg1YwdWUTrWKAtMF4olOyTQF%2BKFNCo86XVvYLTAIhAOI3XaqTtGAsWki0sTSZhrhYkGvUD2MiH0sLGPnXXCZVKv8DCHcQABoMNjM3NDIzMTgzODA1IgzE8n%2FoB6uRvutAnBYq3APSrwzedg1ySuym78nOFsDWy%2FedmJLqnyjLZL1TG36O6N1IjmHjRi6e9vjxo2ODzvStYp0QrAhrGjTDdquZJkGJ99BZIEouOWxMIK8qH0jZGKvkVV9hQGt6kzrcAzDs%2B%2BbC1LGaLKdJm1iKrvWmDhDw2vBCtpzvv929L%2F1LmnJMfn0ypae2B6%2BwLsSMnAQkBjHRBbfCvfK%2BDWSD21X7GqIPJC78MsxopXqorkf2U%2FOZjs8H4rkSf0QpCRtTLAjIk93dQ%2BI2ERIIlS0Jii9iuEKdTCtxCzGM8cbuOPdX1ZF%2FK6%2FATGstgAGDxDVlX%2BJE1xorHCy9kloMN6nM%2F101Jr0KcErj6c3DxdGiYM1XM5moQKPV6x6GU8wUd5UZgHed2kiW3c2QIvLdex7U5jrE7kwYjbCNEOsdHUqA5tqxxPFDQmINBbbQxXMjj3WUaS9JkhriVW9bTmyLmdgUsHHvKARH4m9scC775hkz8r38Tx5MPBYhKUp7derxY3DvLjsp7DWENXZsQ9kfdVqMWn%2FCx2aAH%2Bc%2BH%2FNK9PpouoUoNa%2FfvgtG5qciGf2QgeAqHH7BJGQ%2BnOidkEhbFhD%2Fj9aQQXY9LXr%2B9bzYuoLo98L6sy%2FH1%2F1UzyIdQ%2Bp1gEkDkDCenYLFBjqkAUQtPs0ctV5DhaBr%2FcLEpUOoKVm6pE%2BzKa0LS2cEu2wneB6tDGyRwQYixIOhEFijgNFANmGJsj0rM3g4lOWoazqIy27oPiXcwzAB7GK1A3DvA7ZFb9Rr5ewRxwUv67Pp7t7eMl50128OgsJLZ5CB50BpcWW7Ol%2BNV%2Fh8P5QWJUFag33S%2Bgy2n35cJnHNJoqvL0g979zphMMYLCu8ZWFFihudlWot&X-Amz-Signature=aaf08cf92b27836d8aa29eb1faa154688f6b9008d31250f6b0700172a9e3e464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
