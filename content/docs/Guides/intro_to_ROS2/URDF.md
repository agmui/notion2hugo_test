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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZRGZT2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKqPP%2FCo2MEURPKblza2S8izJRa1dhv4CjiCvF6DiBAiEAmOmIdhgzfpWKdM%2FTkeeMsSfEdVFW5cbh9KPFAgK6gMcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLIxGt5nU6Ur9w6KWSrcA%2B0HKUaaw1zVZGe1Umb19qMX6jedooV370foCRmCJPGpVS%2Fnas9D85OUa6t65URcmsgfBIC%2FEUvI0iX28w6CJyg1eUX60QA70K4HKEiKfAObPkBUO0gIPtVB9wFuWzod6CI5LH%2B6pPh6KLVrImKmIUUn11t72agdYl9vXckjCjb76L7Yh92kIJAimokCKZKoqDZUSNSoytrQW9yGPr0LEw%2B5wb9q7Rf1AipG3GO5N9MbAMhYP8pdMDlk0DnhIKIW4djDY1XyBxaIhs3Un%2BnHx3pKnUnFNjtyl6hSJ5di2k7m%2FYl%2BJQxZ8Ikgg8eBYwqX7UUS4H5eXj%2F2i4vSZ2vWGIK3FekYoirYKxg8acbgMcNSLKVJ%2BF7og8LNaG0KUYQeX2IpIz5NdLYQbx7CRtMT58ZIi5JOIlgGmZPfINOunmRPsERjfj3YHbiFdWzru9EeA%2Bl3M7Fl1Xcpvxbg%2BWK0iK8qqrub8oywq9%2BsnoZk2sNxzk7YzmgiEsQ0YUloiq7Cfj3qPJQJrkVV6yPB8iY3xr7l5d0MBpBOULu%2FtQb0ptsoGFFAm2p%2FbZHsjkE58RTzYRMoBGn00gYV7do8DBIC9yaiTM2PK2KB85ZR%2BfEuhcKFeGLikObSN8eom8%2FmMICEur0GOqUBt9SddXgH1CShk7J6OraoVMUPlslVvtmlXHlS2Q%2BT1UI%2B%2Bxav1q9mwk45r6z6glnv1vyCphhOtaoMQGvR8LAAeVGdRsc38mdv12tAAilZtDJwL%2BtGljbCeJv6Y1SQqObVaB1YzSXdUDf6Hd3tda0K0UwhQKbwOkccxFNyLb8RIyWmKsDjSUOm90Qu9pyCrEJbnHWXGNYLVPyc0A0ZaYRhlapgymBH&X-Amz-Signature=967c9b64356d48d2942ea483124afac776b9a2bcb51c4565842379be6fc8b203&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZRGZT2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiKqPP%2FCo2MEURPKblza2S8izJRa1dhv4CjiCvF6DiBAiEAmOmIdhgzfpWKdM%2FTkeeMsSfEdVFW5cbh9KPFAgK6gMcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLIxGt5nU6Ur9w6KWSrcA%2B0HKUaaw1zVZGe1Umb19qMX6jedooV370foCRmCJPGpVS%2Fnas9D85OUa6t65URcmsgfBIC%2FEUvI0iX28w6CJyg1eUX60QA70K4HKEiKfAObPkBUO0gIPtVB9wFuWzod6CI5LH%2B6pPh6KLVrImKmIUUn11t72agdYl9vXckjCjb76L7Yh92kIJAimokCKZKoqDZUSNSoytrQW9yGPr0LEw%2B5wb9q7Rf1AipG3GO5N9MbAMhYP8pdMDlk0DnhIKIW4djDY1XyBxaIhs3Un%2BnHx3pKnUnFNjtyl6hSJ5di2k7m%2FYl%2BJQxZ8Ikgg8eBYwqX7UUS4H5eXj%2F2i4vSZ2vWGIK3FekYoirYKxg8acbgMcNSLKVJ%2BF7og8LNaG0KUYQeX2IpIz5NdLYQbx7CRtMT58ZIi5JOIlgGmZPfINOunmRPsERjfj3YHbiFdWzru9EeA%2Bl3M7Fl1Xcpvxbg%2BWK0iK8qqrub8oywq9%2BsnoZk2sNxzk7YzmgiEsQ0YUloiq7Cfj3qPJQJrkVV6yPB8iY3xr7l5d0MBpBOULu%2FtQb0ptsoGFFAm2p%2FbZHsjkE58RTzYRMoBGn00gYV7do8DBIC9yaiTM2PK2KB85ZR%2BfEuhcKFeGLikObSN8eom8%2FmMICEur0GOqUBt9SddXgH1CShk7J6OraoVMUPlslVvtmlXHlS2Q%2BT1UI%2B%2Bxav1q9mwk45r6z6glnv1vyCphhOtaoMQGvR8LAAeVGdRsc38mdv12tAAilZtDJwL%2BtGljbCeJv6Y1SQqObVaB1YzSXdUDf6Hd3tda0K0UwhQKbwOkccxFNyLb8RIyWmKsDjSUOm90Qu9pyCrEJbnHWXGNYLVPyc0A0ZaYRhlapgymBH&X-Amz-Signature=5344488fc042ead510ff7ef9107f3fc7c95817f444fa98b08b0bfb68c34704ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
