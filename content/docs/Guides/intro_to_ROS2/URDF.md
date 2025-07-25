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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NK3WLX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG%2FZF15vv5Sk7qNCNQiqdSjEAjT6aW1Xb5zynbW6vkTLAiBjhMJZUGlFY1Lcxq%2FNMJBqovoOps%2F8Z6vMlJf9AN8bLCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM0NhAKuCpFSpvUJGRKtwD7QTEdhKUbNgy90EZ%2BCjgYjGdOUdKirkp6rmuKbsZMNldrNJbIYks2cUC%2BREViYWN%2BvWPy4D9v91KrvMPniycHS2x%2BZXdku4z6TtqidiuYbYWqJZ4VCvQzeFf6oqE%2FjOGScq09gFgmIrRH9SH%2Fzx7eYyA5Ye1RsLwvE%2BoSPXRqDJcx5KGgH0DQfqg8Ueo%2Fq%2FFZ7G2JfS6cb3aaDnXRoe1BhYkTjq42z1WxE9H4pcXvcEJTzpYFmclkdhFV1SBkvTR2DtLu7ePXRcUQ6IqvrHc1avJjbM1aphEKaThigO7br50E%2F%2B6b79H5ve3dW%2B9H6TLhYyTlfTIs6MAekPin9iTYfTMQTsiW%2ByndDipKWr%2BCiWsnC6u9pExIu9kq0TVcBRX%2F%2FidXwJWP8ml7DgXuA%2FbzWlBs3TiI3Skz0%2F6J15bFdFwRRCAa%2FXH120fbWuq5wJAlNRGg3W62zBJxZTfU7RBrAQcHd7POjPR91CG26nmh7%2B%2B8mmmwotCrq%2BiJE6SIQzTdwyNY8cSsGn4d4ViFjoSJTWnkmVfZIRt1KVfUQ5io5%2Bq6%2FOhjDD17q2PLAWx2WsPGEoV68GI%2BtX7cqZrINd9onKj4UN98Tqw404vekDvZ7jRpUYWcNe9%2BQ%2FFjLcwiNGPxAY6pgFqTfKAzoG1KRIx%2BNOvh1i7PLBKHkILQpzX2KnFQBJV7F4NLaG0%2F%2FY%2FZ%2BJvHQp9EddPxPDVdasVr%2F0jQoNn55QaLxwSuKZ1AOBl5LH5s04qyFn8WruzaNDUgzGTJ%2F2uYMavJS0wEUYt%2F3yU%2BqjAfF8%2B9dfOhF2ELG9OLo9RlE8fIllmsX9tA9qwvvuPXeCQfW%2BwQepHzKk3zgH3x4dSW9jIp19l%2F7xL&X-Amz-Signature=2dd0b470a708ce826c1dcb19285fe22d69016a939c2a649311da5e0b40ff6dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NK3WLX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG%2FZF15vv5Sk7qNCNQiqdSjEAjT6aW1Xb5zynbW6vkTLAiBjhMJZUGlFY1Lcxq%2FNMJBqovoOps%2F8Z6vMlJf9AN8bLCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM0NhAKuCpFSpvUJGRKtwD7QTEdhKUbNgy90EZ%2BCjgYjGdOUdKirkp6rmuKbsZMNldrNJbIYks2cUC%2BREViYWN%2BvWPy4D9v91KrvMPniycHS2x%2BZXdku4z6TtqidiuYbYWqJZ4VCvQzeFf6oqE%2FjOGScq09gFgmIrRH9SH%2Fzx7eYyA5Ye1RsLwvE%2BoSPXRqDJcx5KGgH0DQfqg8Ueo%2Fq%2FFZ7G2JfS6cb3aaDnXRoe1BhYkTjq42z1WxE9H4pcXvcEJTzpYFmclkdhFV1SBkvTR2DtLu7ePXRcUQ6IqvrHc1avJjbM1aphEKaThigO7br50E%2F%2B6b79H5ve3dW%2B9H6TLhYyTlfTIs6MAekPin9iTYfTMQTsiW%2ByndDipKWr%2BCiWsnC6u9pExIu9kq0TVcBRX%2F%2FidXwJWP8ml7DgXuA%2FbzWlBs3TiI3Skz0%2F6J15bFdFwRRCAa%2FXH120fbWuq5wJAlNRGg3W62zBJxZTfU7RBrAQcHd7POjPR91CG26nmh7%2B%2B8mmmwotCrq%2BiJE6SIQzTdwyNY8cSsGn4d4ViFjoSJTWnkmVfZIRt1KVfUQ5io5%2Bq6%2FOhjDD17q2PLAWx2WsPGEoV68GI%2BtX7cqZrINd9onKj4UN98Tqw404vekDvZ7jRpUYWcNe9%2BQ%2FFjLcwiNGPxAY6pgFqTfKAzoG1KRIx%2BNOvh1i7PLBKHkILQpzX2KnFQBJV7F4NLaG0%2F%2FY%2FZ%2BJvHQp9EddPxPDVdasVr%2F0jQoNn55QaLxwSuKZ1AOBl5LH5s04qyFn8WruzaNDUgzGTJ%2F2uYMavJS0wEUYt%2F3yU%2BqjAfF8%2B9dfOhF2ELG9OLo9RlE8fIllmsX9tA9qwvvuPXeCQfW%2BwQepHzKk3zgH3x4dSW9jIp19l%2F7xL&X-Amz-Signature=b535385120b819048b92aa435b1939f8c3363e16f523409f7b131a0815a514e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
