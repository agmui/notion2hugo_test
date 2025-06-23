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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTDGWL7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGWqmDSCu2%2ByX9PIOFmUvFWuAKjj0lAroHGJ8FvSWv%2F2AiAuxzd7d8XwgHVGNAM4yEdDD8GKmgUjWs6OVv3UT0mR3iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0q9LhHf9pYE5X6%2FKtwDjHNH5uVyBscRjAlPvZNr3BQ8zLYn0U8sW%2F41YqDAP7nHQ80H%2FvBXuTHluB9lpmez5eIHkJs%2BZXI9EcaTmMCBBQlRDDdosXnQRUkYSeEuWFFdHyTENz2YsyNcgzgLkA1aVYh5KDKsdQf8V2mkG3NA4GsVXDU6WConJMtKcmlRxNW0A%2Fb%2BRt0qwfOPSWSmjwTcthyGr0nlULu5BnpVAG7q8VdZowmWw2b0fuHoSNSNFNhMt5dW%2BeoOufsx4cNsCOpM9Oy5Q8Ol%2BYnptj%2FMN0%2FG7BuwsJwF%2FFUErCGlmTd720Krdlkabjb%2F5%2B6WiML0qfKNZIQno8HlHLvLOQ3huoMzHM8McJweOptQIW5LCoO5S4JsPWsdIa2d0QnvWynTR8NLH9D42Fn0eHJ4RoF3HuVSYjmlnHrGEAO%2B7tCvD0W7DN25SYvAwciOS%2FSFPUwTADEl2C3YdR1nWB7PPtNIrMjRB9TDIwsPWv%2BfcTK64GEMybMrK3eBRR6Izz4S%2BSpp9e5m0of2U76jAUWYq%2BWfEOGjlGfs5bJNrOnF9Ory3fwRfxCxJ%2BnLftp2G%2BXz6%2F90E5Zp8Ora9ac4Bid3rKslcvFVjTTFaNLhLHYVU5UgbebU3iR8GX44NHlB%2B9MXuJowmKjiwgY6pgHeABSAVzUMOHJE0HMf%2BJ2F0XcmcZDlTO%2FbJlJe10sPJOGxsWW8dC%2BE3qVe4wVjNmYdJqkvkrUCb7MhTCsyMZ6YFIZAlf23gs%2BnYgZ7OgSxp%2BwUNDg%2B4W3I3tm1uxCd%2FLo%2F29mBshGQwtpvE7R2A5jcimSUoqpumV7YiFk6gHFffKUzMyotE8E5rx4Utr5HTCHRa3b%2FhXKRyY4Igreg%2BVxYBzg8njkC&X-Amz-Signature=14c20fcb3093a7687e8f616dd484e2c9b3f74a7222201f18293098c0a4ebd334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTDGWL7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGWqmDSCu2%2ByX9PIOFmUvFWuAKjj0lAroHGJ8FvSWv%2F2AiAuxzd7d8XwgHVGNAM4yEdDD8GKmgUjWs6OVv3UT0mR3iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0q9LhHf9pYE5X6%2FKtwDjHNH5uVyBscRjAlPvZNr3BQ8zLYn0U8sW%2F41YqDAP7nHQ80H%2FvBXuTHluB9lpmez5eIHkJs%2BZXI9EcaTmMCBBQlRDDdosXnQRUkYSeEuWFFdHyTENz2YsyNcgzgLkA1aVYh5KDKsdQf8V2mkG3NA4GsVXDU6WConJMtKcmlRxNW0A%2Fb%2BRt0qwfOPSWSmjwTcthyGr0nlULu5BnpVAG7q8VdZowmWw2b0fuHoSNSNFNhMt5dW%2BeoOufsx4cNsCOpM9Oy5Q8Ol%2BYnptj%2FMN0%2FG7BuwsJwF%2FFUErCGlmTd720Krdlkabjb%2F5%2B6WiML0qfKNZIQno8HlHLvLOQ3huoMzHM8McJweOptQIW5LCoO5S4JsPWsdIa2d0QnvWynTR8NLH9D42Fn0eHJ4RoF3HuVSYjmlnHrGEAO%2B7tCvD0W7DN25SYvAwciOS%2FSFPUwTADEl2C3YdR1nWB7PPtNIrMjRB9TDIwsPWv%2BfcTK64GEMybMrK3eBRR6Izz4S%2BSpp9e5m0of2U76jAUWYq%2BWfEOGjlGfs5bJNrOnF9Ory3fwRfxCxJ%2BnLftp2G%2BXz6%2F90E5Zp8Ora9ac4Bid3rKslcvFVjTTFaNLhLHYVU5UgbebU3iR8GX44NHlB%2B9MXuJowmKjiwgY6pgHeABSAVzUMOHJE0HMf%2BJ2F0XcmcZDlTO%2FbJlJe10sPJOGxsWW8dC%2BE3qVe4wVjNmYdJqkvkrUCb7MhTCsyMZ6YFIZAlf23gs%2BnYgZ7OgSxp%2BwUNDg%2B4W3I3tm1uxCd%2FLo%2F29mBshGQwtpvE7R2A5jcimSUoqpumV7YiFk6gHFffKUzMyotE8E5rx4Utr5HTCHRa3b%2FhXKRyY4Igreg%2BVxYBzg8njkC&X-Amz-Signature=cf33a677fae11f7accc37daa4546708e92e96a4fedb1aba5d5854b06bebb0625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
