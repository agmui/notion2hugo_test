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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUYUCZU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHVlkd0TI%2BbyXspMCJU6pjzfANRkEnvKEU%2B0%2FV9H7xEAiEA%2Fww37fico70XNwlr4jNVB8j3SSvExkE7ydvRqdWTDRkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKcDg0fUJ86Wy0bx%2ByrcAwEmzapXifHtpBN45wcHBf7QWrLqOa9OHR1ZDHC5zMvSD%2BGid4v49KBSxbQKPTFJ4xWlyMxWnNYJ6DyZc439X3esKZs522UEY%2FOXYlsPu8dB6Ma9R1Uq1G8Vqe3DQPu1kjrTbNBiG7pp9iXkpMEgD3X%2Fe7cFxDw4063%2Fj6%2Btpv3c8OyR1o6FOfoj%2FCbVfgOmdBERBtY9KP0kHGKYHqOyocAIuEAPMXuzKY9aODx5voktZzFhlWKxau0DP8d4DDnSUYw2omLRSlzN%2Btpx2xmM10aZEnB73mzbQNrbcPSbV08vrKzMWURFvXPIHvYmj12mUz2qqg%2BYyqVOIqtyh0zJvoZOm8tKj%2BHdnERTbdr%2Bd8EDhKxwkoYKlqRcaYdjt1l0YG%2BjuMn2X%2BQMfNupT9f9RmNsAygKxRktypP9l4lWN8HRuvq6E%2FORMhZKS%2BEKZtrCWr8W%2BSMCjXVLDHXBJxPKj2JKj6R21zSWRtJYg2eArQ0zdQvH6X3AVdRRALB8bFE3CN6tuzjzyjEG7zIcW82lEhVUdOIoOs%2BSVTKghHfEneCrok4c3Ea0k7qrpf5QPecipODP%2Bn%2BkpADFmzGn5KzgYxDIdi4Eo2muZ71TwjlqgsC2%2Bo2Yj2IakcDxX5I0ML%2Fk18EGOqUBdK0Ca9be7qGy7Gz9uhuPGbxImHwyV5%2BGB8FerB0sgXKrERZQluIzn%2FH5jk0Ag3iSHsI%2FhcNYT9Gbxn174pEAlQs8KDsjEd0LJA21zGu5uB3nlv5mBJ4EsK6ASVf%2BdvO%2FwtC8PdIPbX%2F5llfEvCranmgGl2BWHXPmLdEBZkFykV2IylxjFyZ5oLMw2rSh3J62pB%2FwwBccetTaVM94d3qUShr4Awrf&X-Amz-Signature=6d981f79317ac80804a5dd53d7c8a303f10362f4f502c990a59eda9e8513e9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUYUCZU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHVlkd0TI%2BbyXspMCJU6pjzfANRkEnvKEU%2B0%2FV9H7xEAiEA%2Fww37fico70XNwlr4jNVB8j3SSvExkE7ydvRqdWTDRkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKcDg0fUJ86Wy0bx%2ByrcAwEmzapXifHtpBN45wcHBf7QWrLqOa9OHR1ZDHC5zMvSD%2BGid4v49KBSxbQKPTFJ4xWlyMxWnNYJ6DyZc439X3esKZs522UEY%2FOXYlsPu8dB6Ma9R1Uq1G8Vqe3DQPu1kjrTbNBiG7pp9iXkpMEgD3X%2Fe7cFxDw4063%2Fj6%2Btpv3c8OyR1o6FOfoj%2FCbVfgOmdBERBtY9KP0kHGKYHqOyocAIuEAPMXuzKY9aODx5voktZzFhlWKxau0DP8d4DDnSUYw2omLRSlzN%2Btpx2xmM10aZEnB73mzbQNrbcPSbV08vrKzMWURFvXPIHvYmj12mUz2qqg%2BYyqVOIqtyh0zJvoZOm8tKj%2BHdnERTbdr%2Bd8EDhKxwkoYKlqRcaYdjt1l0YG%2BjuMn2X%2BQMfNupT9f9RmNsAygKxRktypP9l4lWN8HRuvq6E%2FORMhZKS%2BEKZtrCWr8W%2BSMCjXVLDHXBJxPKj2JKj6R21zSWRtJYg2eArQ0zdQvH6X3AVdRRALB8bFE3CN6tuzjzyjEG7zIcW82lEhVUdOIoOs%2BSVTKghHfEneCrok4c3Ea0k7qrpf5QPecipODP%2Bn%2BkpADFmzGn5KzgYxDIdi4Eo2muZ71TwjlqgsC2%2Bo2Yj2IakcDxX5I0ML%2Fk18EGOqUBdK0Ca9be7qGy7Gz9uhuPGbxImHwyV5%2BGB8FerB0sgXKrERZQluIzn%2FH5jk0Ag3iSHsI%2FhcNYT9Gbxn174pEAlQs8KDsjEd0LJA21zGu5uB3nlv5mBJ4EsK6ASVf%2BdvO%2FwtC8PdIPbX%2F5llfEvCranmgGl2BWHXPmLdEBZkFykV2IylxjFyZ5oLMw2rSh3J62pB%2FwwBccetTaVM94d3qUShr4Awrf&X-Amz-Signature=18a0b6f2d7d28da723f4182f0b20b3dd825b1ba9f4c152452f5082832fe4d378&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
