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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECFIC3S%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHFSLxYUVD9RALluPsLedBX3p7ECQ3kpcu%2Bg6qA%2FmElLAiBFulJk2zVRHWIGdpFMayk07cbtNZYlvj4Z7e71fbLdKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A8PvKdYyI9jVgPuKtwDDO7H92sH%2FOLYkm9npRuScXGReccUZAJZawtdVdaJPoefKie7hjZS36B572t%2FxTalalPj5p2y1PFEACFTZ9PpEuLHumF%2BrwmSj5NMLaxUTRHR25aP5KXddr9SWUsrIHIwLZVbDqXc6tuMEuka6CbKTp4MlbyNu85r7IbvHtIFu%2BL528kDJWigtjdAzxP9YYdkCGgOxAGbERzRv%2B6EZgsnfc8TeF1ezUZ7BHFaPgwQGOJYPx7AXEkNO8XpjC9s%2B3HRZrQdZB8kgDmF2EBw9jIuKgVXVEN3EjjmwdoeBJe%2BXF4GV67tpo%2B0rHVFUtIHsJ%2BpkcTA8EOP%2FsvGTOGi5GbMB1K4juUT748Vxc8n5%2BshGF25BN%2FAFs%2BSiH0%2B9ADjRq4NnPo6z5GocohFXWA%2FYsrG3beJ9LQQoPeuwt7KI%2FCfUxf5R2rKl8mJNorfX2KDCGQbBtSgxn6gfMc61%2BtFFgz1NGoFyZkLDbj9bZnpVKCY%2BF7AN4bbN9cI2sQ%2FPfbO%2BPlwOgUsELZxfcYJly8h6siQQAKbzAFseSFGJpKHvujjVTDXEcOW9PJLSrVIEwSFNbUwjR6TezHm2XzFHaK5eJW8FNZcRKYPcm%2FRE8coiNuA433lM37%2FCMPnHlvkLVIwybvEvgY6pgHJtJhHL8gBBXJoNUJkG8LuQABPdfPDyz3TKl6pTY7RKtJ7T0lbCdW207RXb4UF%2BZb6CK%2Fbtsmf9sAldDSgSvFh%2FNl7mQosTyZVFUQ8KlT0q%2FVlhD6Otxwc6o6mISLqXk0wJXjZv0nFx85s9FCDjNlwsBi%2F3u%2FTHrIAInjcijFExIBgqhSl%2BCJzvrNQq6u77X8CrNU7FCeGVVw9Ar3%2BMBqdbOAgEkXq&X-Amz-Signature=2b96fc1a55bd5e1570fbe93c3e63910eb292041f952e8d624bb76ee28ac3ec5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YECFIC3S%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHFSLxYUVD9RALluPsLedBX3p7ECQ3kpcu%2Bg6qA%2FmElLAiBFulJk2zVRHWIGdpFMayk07cbtNZYlvj4Z7e71fbLdKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7A8PvKdYyI9jVgPuKtwDDO7H92sH%2FOLYkm9npRuScXGReccUZAJZawtdVdaJPoefKie7hjZS36B572t%2FxTalalPj5p2y1PFEACFTZ9PpEuLHumF%2BrwmSj5NMLaxUTRHR25aP5KXddr9SWUsrIHIwLZVbDqXc6tuMEuka6CbKTp4MlbyNu85r7IbvHtIFu%2BL528kDJWigtjdAzxP9YYdkCGgOxAGbERzRv%2B6EZgsnfc8TeF1ezUZ7BHFaPgwQGOJYPx7AXEkNO8XpjC9s%2B3HRZrQdZB8kgDmF2EBw9jIuKgVXVEN3EjjmwdoeBJe%2BXF4GV67tpo%2B0rHVFUtIHsJ%2BpkcTA8EOP%2FsvGTOGi5GbMB1K4juUT748Vxc8n5%2BshGF25BN%2FAFs%2BSiH0%2B9ADjRq4NnPo6z5GocohFXWA%2FYsrG3beJ9LQQoPeuwt7KI%2FCfUxf5R2rKl8mJNorfX2KDCGQbBtSgxn6gfMc61%2BtFFgz1NGoFyZkLDbj9bZnpVKCY%2BF7AN4bbN9cI2sQ%2FPfbO%2BPlwOgUsELZxfcYJly8h6siQQAKbzAFseSFGJpKHvujjVTDXEcOW9PJLSrVIEwSFNbUwjR6TezHm2XzFHaK5eJW8FNZcRKYPcm%2FRE8coiNuA433lM37%2FCMPnHlvkLVIwybvEvgY6pgHJtJhHL8gBBXJoNUJkG8LuQABPdfPDyz3TKl6pTY7RKtJ7T0lbCdW207RXb4UF%2BZb6CK%2Fbtsmf9sAldDSgSvFh%2FNl7mQosTyZVFUQ8KlT0q%2FVlhD6Otxwc6o6mISLqXk0wJXjZv0nFx85s9FCDjNlwsBi%2F3u%2FTHrIAInjcijFExIBgqhSl%2BCJzvrNQq6u77X8CrNU7FCeGVVw9Ar3%2BMBqdbOAgEkXq&X-Amz-Signature=41dd2e4e12de8c71bc6daf00712549d8d2bd6874322b652783a82a40249b8458&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
