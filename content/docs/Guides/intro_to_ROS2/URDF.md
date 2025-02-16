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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSM5FNL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDtHsj32Ti%2ByIvWnAzjGdupPM%2BRozkGAvFkky0RiqlXOQIhAIqiUM%2BlPKDOWy4iyfsMgiDDQw9RgNxjHCb2TOOwr7%2FGKv8DCFIQABoMNjM3NDIzMTgzODA1Igxb0ZKGPPygqJ0Wq6gq3AMsOju7HZeryFlEVH5BRdhcxnpIPUP8jBz5joebg%2BGsb7etZFB1IvVKS0vDWEAFo5e6RUJ6j0Nyp0msC3HRx%2FyuQpwzTHYhECfbfg5dsgDIDfcnS8ZuFuc41AHzxdPXqR1%2B874vogbzR2HSWv3W027SKHrCKI46Sf0s15wNHiNBvcHU8iGUPjppnKxj2krvNyqnyIaks8MKDF8oi%2FU3NXPwPSK9zA3EoYFXt4j7V7%2BqtVBvXKlfJr0VASzgpYfi2cPO6DsIrgxg5LDp%2BUSp1nZgiMYGkuGPxOWnbcErRlnerj8zH8jwWuWNzxFJlty0t02lfG%2FQIkdblvMoPFBCd4QD9V0fLoSCIqY9cMRoiDLP%2FwyrUd9pLZSrglZcWr8qyIZT%2BM44vIAmeQu55rnwRNjpoEScq%2BlqFO5wcZ4xWtUPJ%2FJboKsOHwC%2Bu9HS%2BWDSgSq2HYNaPFcix9SYh3gzmktSubHmGBgv7A3527h0yLTJo%2BS7qdH6wVV3JrZ8oAxOvM8FgAEIhct%2BIFxQ4t9rjAsh4ChVNtZzL02nRBorXt56nJYGyTv6NkKNnyAvUZXrbPDNjWmbGu7idbcvZqMhS8puey7Gj%2FNSvR9OrgDFSVUFRgrtSJF%2FMt1MckaGezDa5cS9BjqkAWxtldht9r1mCNugeZh0MjhgTnmIQHY9Dt94Eh%2B2v7UTTLwER%2Fih04%2F3d3GYTzUHKIGWAysvjtY1G39%2FLe1aSH5pqeSdpaULks0pupbkbCYeXfpRavEE6pApy52Yeg2rMVfIeo2ILNLQsGGrhMdwZhdpIGrRIFzj7iRPqKxHaiFrGEwEbqkLjySwdRbtLQl%2B%2BJQagnvDIGpEEoGTbPu%2FlS97jcCs&X-Amz-Signature=efd1ac8c596746eebd40d20926a8781c1026ec0b24ef9a63a43588cdf034cd08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSM5FNL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDtHsj32Ti%2ByIvWnAzjGdupPM%2BRozkGAvFkky0RiqlXOQIhAIqiUM%2BlPKDOWy4iyfsMgiDDQw9RgNxjHCb2TOOwr7%2FGKv8DCFIQABoMNjM3NDIzMTgzODA1Igxb0ZKGPPygqJ0Wq6gq3AMsOju7HZeryFlEVH5BRdhcxnpIPUP8jBz5joebg%2BGsb7etZFB1IvVKS0vDWEAFo5e6RUJ6j0Nyp0msC3HRx%2FyuQpwzTHYhECfbfg5dsgDIDfcnS8ZuFuc41AHzxdPXqR1%2B874vogbzR2HSWv3W027SKHrCKI46Sf0s15wNHiNBvcHU8iGUPjppnKxj2krvNyqnyIaks8MKDF8oi%2FU3NXPwPSK9zA3EoYFXt4j7V7%2BqtVBvXKlfJr0VASzgpYfi2cPO6DsIrgxg5LDp%2BUSp1nZgiMYGkuGPxOWnbcErRlnerj8zH8jwWuWNzxFJlty0t02lfG%2FQIkdblvMoPFBCd4QD9V0fLoSCIqY9cMRoiDLP%2FwyrUd9pLZSrglZcWr8qyIZT%2BM44vIAmeQu55rnwRNjpoEScq%2BlqFO5wcZ4xWtUPJ%2FJboKsOHwC%2Bu9HS%2BWDSgSq2HYNaPFcix9SYh3gzmktSubHmGBgv7A3527h0yLTJo%2BS7qdH6wVV3JrZ8oAxOvM8FgAEIhct%2BIFxQ4t9rjAsh4ChVNtZzL02nRBorXt56nJYGyTv6NkKNnyAvUZXrbPDNjWmbGu7idbcvZqMhS8puey7Gj%2FNSvR9OrgDFSVUFRgrtSJF%2FMt1MckaGezDa5cS9BjqkAWxtldht9r1mCNugeZh0MjhgTnmIQHY9Dt94Eh%2B2v7UTTLwER%2Fih04%2F3d3GYTzUHKIGWAysvjtY1G39%2FLe1aSH5pqeSdpaULks0pupbkbCYeXfpRavEE6pApy52Yeg2rMVfIeo2ILNLQsGGrhMdwZhdpIGrRIFzj7iRPqKxHaiFrGEwEbqkLjySwdRbtLQl%2B%2BJQagnvDIGpEEoGTbPu%2FlS97jcCs&X-Amz-Signature=844228db83907685a09217c70e390e8be8ee7baf700448f797034e6328270a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
