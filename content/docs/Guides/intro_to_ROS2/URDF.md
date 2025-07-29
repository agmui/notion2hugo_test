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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBBVZYG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdz5OquXzLjOHNE%2BymdL2Z4u7RIvC%2BmdCCmiEAXcveOQIhANCnOl8Z7fLAMdCI2dHYzxngPxfQ9vlOcGRLra3KQw0LKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZNOHnj8Gz%2FH2ZMcEq3APrXq5cfP%2F351zX0D81a8XL2HMaFdtW7oQJWGt7cFqaEAaDH8SaYuqS%2Fq7s7iL7Z%2BJfLK4N7WJkuIUMBe%2Bhbv0hbSjyZMSuqe%2B%2BTiINlk6RhficdyjBbsVh6MmV7V44fUfygrilqd3C9ttOe8Xn6nz1rdfAt%2BkZoYiAn6owyrMAcMneY5cZgJwWgW19ihA8MC5raTN8bqtWz7CgyAxwsJBJb49ADcOKRKc5peTyJLmFzEWosCtMAWcqQhE6E9KyfsTNEPanEkzA7heWUkaDtYo92RkxGVgRW0Q0QEVyBq1oXUldkh7pKmOoqblYaigA0qM2edXBQUJcddhNONjxWXUGk7gqEk%2FLZHNgjqSnCryaiqFQFL%2FN%2FRNohiskcg1myAfqLzLjEaNBC8bVbCa93b0yak3ah%2FYytI4KY%2BwGTr5IabIl7grHmdAJBP89vqCAZfTEzxR%2BlCmx1UTzlIfNddf%2B7CY3xtNlO5DGbbqgrbED0HrPgy4Kl34zBJUDNh2Ua8ai7ewqd0X%2BXXU5Iu6tl%2F7o7IUNz47u5vDTSqKvQ0vEJsi3Rp3RIVXQidXDlo5Sg6pyDpCS1dLdQ6X58zGPNFUr7AA9DvAqV29fsdzEVgiJrGdjH5Ihg5spiqdA%2FzCtiqXEBjqkAWgSE1xYuu5UA%2BNn5sXPxAgp9bkqTFCE7ECIZfN6IOjGI%2BHGzp3RQAM3b7kfmvUaws1EUQSAuHf2AUZ7JR0bAnZEv9h0JxlBB1%2BszjM%2BTNVeMVwG%2FbSIe0JXVJ82upqLzzVp8yoyE8WeWhW3NExV0leWfHFDndB3gemXwNZrLNZS8N507TJrB70OWXeco8hhbe0U%2Bmnk3De0T4atfYEPrP8D7pvp&X-Amz-Signature=5224da5a773ec239f698e1e5f70e832ce131c8c5025f1ed700f4cfdde8fc8153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBBVZYG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdz5OquXzLjOHNE%2BymdL2Z4u7RIvC%2BmdCCmiEAXcveOQIhANCnOl8Z7fLAMdCI2dHYzxngPxfQ9vlOcGRLra3KQw0LKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZNOHnj8Gz%2FH2ZMcEq3APrXq5cfP%2F351zX0D81a8XL2HMaFdtW7oQJWGt7cFqaEAaDH8SaYuqS%2Fq7s7iL7Z%2BJfLK4N7WJkuIUMBe%2Bhbv0hbSjyZMSuqe%2B%2BTiINlk6RhficdyjBbsVh6MmV7V44fUfygrilqd3C9ttOe8Xn6nz1rdfAt%2BkZoYiAn6owyrMAcMneY5cZgJwWgW19ihA8MC5raTN8bqtWz7CgyAxwsJBJb49ADcOKRKc5peTyJLmFzEWosCtMAWcqQhE6E9KyfsTNEPanEkzA7heWUkaDtYo92RkxGVgRW0Q0QEVyBq1oXUldkh7pKmOoqblYaigA0qM2edXBQUJcddhNONjxWXUGk7gqEk%2FLZHNgjqSnCryaiqFQFL%2FN%2FRNohiskcg1myAfqLzLjEaNBC8bVbCa93b0yak3ah%2FYytI4KY%2BwGTr5IabIl7grHmdAJBP89vqCAZfTEzxR%2BlCmx1UTzlIfNddf%2B7CY3xtNlO5DGbbqgrbED0HrPgy4Kl34zBJUDNh2Ua8ai7ewqd0X%2BXXU5Iu6tl%2F7o7IUNz47u5vDTSqKvQ0vEJsi3Rp3RIVXQidXDlo5Sg6pyDpCS1dLdQ6X58zGPNFUr7AA9DvAqV29fsdzEVgiJrGdjH5Ihg5spiqdA%2FzCtiqXEBjqkAWgSE1xYuu5UA%2BNn5sXPxAgp9bkqTFCE7ECIZfN6IOjGI%2BHGzp3RQAM3b7kfmvUaws1EUQSAuHf2AUZ7JR0bAnZEv9h0JxlBB1%2BszjM%2BTNVeMVwG%2FbSIe0JXVJ82upqLzzVp8yoyE8WeWhW3NExV0leWfHFDndB3gemXwNZrLNZS8N507TJrB70OWXeco8hhbe0U%2Bmnk3De0T4atfYEPrP8D7pvp&X-Amz-Signature=80bc1486fc4c46afc818400ce56db252f4f30ce1bd0c35635fc64c94f2d30d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
