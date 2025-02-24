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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJSPE7L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVEDuJmfG3X3YUwyK62citOAGhqMfnsZop3MjhqHI4gAiEA%2BfsDYQO3K6F7t1TqshDB4i8INasmZs9R0Uwcy1rza80q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDO61wNk%2FIq3GXcN2TCrcAzNhyLrrDz8wlO51lXt3pFcco8NecY1Hq%2F0TaJSmYORn7a2yXe7oeTeUXr2m370mWWGRCrlBBGToWM5GTKABx0LqTGLRxzfdGUzIWEf%2BldceqeX%2BCtkHuf45REfOUp4Rr7eQfn0pM1g%2FHMXReN0OyNu0aMh3yXrDUhmhEm%2BELIwcCQM0iJe7Ys0ycnjvxXjnjBAzsLcQn%2FZl50Eic3oMLNLKepont%2B874InOkjKWviMb7lMU6VAf6xAqRvfeFPXH1EQadv2vIndgAgi7zxVZik4MAW82Or4xUXe%2B8yPJnem9wxSjqJvW3d51RRufx0SEZ0amG%2BI9vcKpKhHh8BxmdUCvxnK9HepsYTXUil2dYrV1l0I8igZwnDXkKzFCALAvAtgQQML3Qs2brKPPNNt6McbA01uRpA2P3%2BKQv1uiBe6exC5B%2FVyCmj5Iq1X6lSZnTegaar7WLzgQJ5YdNFFrHNwrZbUMvpsmlRphN%2BVb07U2lACkTQAeyqGqZHAZleGCSSp2RSg3d2ITgI0GAeFMguh1a5b578DPITQEiu6gYghj%2F7jTIV6n3SKkGx4bnBJQ76lolLHf7P5u9JCAZqqyEDP2TqgJBBgCIArXM4demFqwLNXn5AIRYZnH2Li7MNTx7r0GOqUB0Sro%2BssT5Z5ODpZLvJ6VMSXsGoIoMt597jhN5zUPfjuQMFX%2FXw5Fitu4U2KuNjFcMnvw91Bea5GkCwAQh5KNqz1ua6klfazY1Vrvide5ywYLmHY0pcIxv4K3HdaFGZfNa5w22JtJMQh6MSHmOCOIwU9c69VMe8vqeTalD%2BC9CLg5RbiE%2BJhqv2OwtPaPAHto11c8jGeo73opwjIDgAmQ03%2BxsaJD&X-Amz-Signature=5fc20defbf59986a9bc1685b9c0282276961783fc3d9030305b496cd0ff8308b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJSPE7L%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVEDuJmfG3X3YUwyK62citOAGhqMfnsZop3MjhqHI4gAiEA%2BfsDYQO3K6F7t1TqshDB4i8INasmZs9R0Uwcy1rza80q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDO61wNk%2FIq3GXcN2TCrcAzNhyLrrDz8wlO51lXt3pFcco8NecY1Hq%2F0TaJSmYORn7a2yXe7oeTeUXr2m370mWWGRCrlBBGToWM5GTKABx0LqTGLRxzfdGUzIWEf%2BldceqeX%2BCtkHuf45REfOUp4Rr7eQfn0pM1g%2FHMXReN0OyNu0aMh3yXrDUhmhEm%2BELIwcCQM0iJe7Ys0ycnjvxXjnjBAzsLcQn%2FZl50Eic3oMLNLKepont%2B874InOkjKWviMb7lMU6VAf6xAqRvfeFPXH1EQadv2vIndgAgi7zxVZik4MAW82Or4xUXe%2B8yPJnem9wxSjqJvW3d51RRufx0SEZ0amG%2BI9vcKpKhHh8BxmdUCvxnK9HepsYTXUil2dYrV1l0I8igZwnDXkKzFCALAvAtgQQML3Qs2brKPPNNt6McbA01uRpA2P3%2BKQv1uiBe6exC5B%2FVyCmj5Iq1X6lSZnTegaar7WLzgQJ5YdNFFrHNwrZbUMvpsmlRphN%2BVb07U2lACkTQAeyqGqZHAZleGCSSp2RSg3d2ITgI0GAeFMguh1a5b578DPITQEiu6gYghj%2F7jTIV6n3SKkGx4bnBJQ76lolLHf7P5u9JCAZqqyEDP2TqgJBBgCIArXM4demFqwLNXn5AIRYZnH2Li7MNTx7r0GOqUB0Sro%2BssT5Z5ODpZLvJ6VMSXsGoIoMt597jhN5zUPfjuQMFX%2FXw5Fitu4U2KuNjFcMnvw91Bea5GkCwAQh5KNqz1ua6klfazY1Vrvide5ywYLmHY0pcIxv4K3HdaFGZfNa5w22JtJMQh6MSHmOCOIwU9c69VMe8vqeTalD%2BC9CLg5RbiE%2BJhqv2OwtPaPAHto11c8jGeo73opwjIDgAmQ03%2BxsaJD&X-Amz-Signature=476563c780e2f1799e72da173388bd05d05ce7daf180051157d33bf38f772ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
