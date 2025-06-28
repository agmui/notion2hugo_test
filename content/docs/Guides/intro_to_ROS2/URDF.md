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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDARWBM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzFZK3kN6ZhY4xQek7qRaKrCqZ4LB%2BBp1GgB8F3jthpAiAX4CW7uv8Y6MCyJp1kIbz%2B8kkfhAGD9nxZVcVkb%2BlYPyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOvXSM7sHPAsgM%2FpKtwD3uvYlZI5QqSiypdxY779foXJHZmTYZmzsHVrQ67IoKkWAAzad7r0QDClWXv76xq1q9chIOnwF8ux%2FMuMl4Apc%2B4PaJ562kMVsYY8A%2F%2FJ5%2BKSTJC7W34Dw27Z7UgCouCdpB8w2jvkRoiMreHUJe%2FeAX0oNxax1XTwqgy2YgmvkLGx%2BLh%2BJH8f6BubC7NOk8JwcyrH27VubVUxbKRWCs7fK319ozNDh1zDPAg4W5jfOpKOxYrfKCwUnemk0hfFcpzzfhWp4YVDO%2BhkklRF5xekZUAaIujbv7ubD7KGi1JOwkIh4zEobDEnDfo908o1kGKmmm2A6pGbk1B4umwcY0KZmFOGVQbcequ7jlSAkI8d8cpf76cK9RDWEyz5Mj88XsMxDLbjnKar0Wfm1BRoVbGdM0IqSjKTbVlCDJ5dON9J38bsOULUpMugVD8odD%2FvizsJu2Wqn%2F%2FdPAYtXrnIQJ0Pod7wvRhUFdQeKVNsP3x2Y5piKexCtJtEdWhAg%2B1dQ835LDkxFBRFrEWxXcB3oqLiAN9eCpwuK3XEbxuiEfvWib5Pl4XiMw4RDhruT343VJMmZDaEZ%2BW8%2BsL74OBHL0citUH48WypWYYNd%2FKliubQNw4IAOiF8HLBxIFd2uUwnJD%2FwgY6pgEYNm3%2BqFjswCIrmasDEL9dlgAwpo0XL78uEYau0%2F8CJn65QVovKzwEcyv5dkdoibEfwyxH1nit7m0aqWqk0s8uV4b%2BV5FNp%2BDds00u6qTYc4y4%2FQbWQ4EVWfCQk9afZrpXBHLnXCCtJ76mfTaXHq8Yg9O2gNlvrzq43n4Wigs%2FubDR4nubJA8OImbU8j2eaMV7Efx1fHDFQfeCMP%2Bu4IpbzADIBGFN&X-Amz-Signature=5c14e84540e6c1e782505cf13fe5ff7e757a9172249b855dc290285c58793c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDARWBM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzFZK3kN6ZhY4xQek7qRaKrCqZ4LB%2BBp1GgB8F3jthpAiAX4CW7uv8Y6MCyJp1kIbz%2B8kkfhAGD9nxZVcVkb%2BlYPyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwOvXSM7sHPAsgM%2FpKtwD3uvYlZI5QqSiypdxY779foXJHZmTYZmzsHVrQ67IoKkWAAzad7r0QDClWXv76xq1q9chIOnwF8ux%2FMuMl4Apc%2B4PaJ562kMVsYY8A%2F%2FJ5%2BKSTJC7W34Dw27Z7UgCouCdpB8w2jvkRoiMreHUJe%2FeAX0oNxax1XTwqgy2YgmvkLGx%2BLh%2BJH8f6BubC7NOk8JwcyrH27VubVUxbKRWCs7fK319ozNDh1zDPAg4W5jfOpKOxYrfKCwUnemk0hfFcpzzfhWp4YVDO%2BhkklRF5xekZUAaIujbv7ubD7KGi1JOwkIh4zEobDEnDfo908o1kGKmmm2A6pGbk1B4umwcY0KZmFOGVQbcequ7jlSAkI8d8cpf76cK9RDWEyz5Mj88XsMxDLbjnKar0Wfm1BRoVbGdM0IqSjKTbVlCDJ5dON9J38bsOULUpMugVD8odD%2FvizsJu2Wqn%2F%2FdPAYtXrnIQJ0Pod7wvRhUFdQeKVNsP3x2Y5piKexCtJtEdWhAg%2B1dQ835LDkxFBRFrEWxXcB3oqLiAN9eCpwuK3XEbxuiEfvWib5Pl4XiMw4RDhruT343VJMmZDaEZ%2BW8%2BsL74OBHL0citUH48WypWYYNd%2FKliubQNw4IAOiF8HLBxIFd2uUwnJD%2FwgY6pgEYNm3%2BqFjswCIrmasDEL9dlgAwpo0XL78uEYau0%2F8CJn65QVovKzwEcyv5dkdoibEfwyxH1nit7m0aqWqk0s8uV4b%2BV5FNp%2BDds00u6qTYc4y4%2FQbWQ4EVWfCQk9afZrpXBHLnXCCtJ76mfTaXHq8Yg9O2gNlvrzq43n4Wigs%2FubDR4nubJA8OImbU8j2eaMV7Efx1fHDFQfeCMP%2Bu4IpbzADIBGFN&X-Amz-Signature=22aa48e107e5b180bf197f1a9b98e4a1aaa10669419ac0ba5066bf09ade7a461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
