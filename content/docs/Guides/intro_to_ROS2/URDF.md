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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXE6WYK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAv%2F2zYFzcoHDRixmHnbf0AZXcXfUsoOYbMMBX7ORgRTAiEAyJGo5SKVWjXzbxm1fJWszdfEjszosoIg5kfZ4yeMrEAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKh1egnlRdRstkSFlSrcA91molMJrcuQUUjvgVr4eJ1Udze4xqmUjCKmXAYtuMyyXwqzjjPEGOuINWzp6%2B0ox7xekBJHe1oe1aPhGO5la2njqBgQe6gxSyXcW5AiU6uGsEBtBHTXh6RJzqNNTtK0QqtNF6jCimJ3LDDGYxi%2BEmK%2FHwqlekHUGxHJYqjAXgB8Y1Ad37VHT6luIiP03cAP3%2BoNfW9gWX3S6bUoOn24F63BfX5ISyiMLjd3FhN1vrBj1WIEaABYSCEIvjPtWHMYO5f5CWKEgdYdm81wzv6YKPP0Eq1bAORJzjIK2fF5JZU0inNYe6pIHtlWhd%2FjB6RVF9cVTo42ohgl5%2F772rrKMM33Lmc4SEzx4TifRXkQP7k6v5OUwrdbOPz3ZH%2BDBxqkIkhugeN9D3xQZitEq4L6YZwVHE0b1WKi4ZnkJAUh3Y1fHJvjHgr6zTq6mS4DCIz9fsB9aly2SQOK7mQ1GxKVzhSVnT3hIfyJhlU3pjeEF0BXUxQRGLXzyXHLD71nEXwtURGaGFKRlerNQJoRfonYB2WLcA92%2B0xmFsVL%2FS%2FWdzKkAIkYIYjIJpGSG211gexPnmGmbEhAAX5bLn0oefg8xVLcvAqOuAu8qkazMN%2FGvRcsAZ7cwBttN6Xr58BVMKzfl8QGOqUB28OKDulXOjLgJlW8dlLK60sQv5E5P4ichkl1SjKaXZbIrC%2BZtJTw7HvXofY55UXJwo5L43U%2BvpSp1ekPYFqlLQVNwPm7T9HSLCp1ZK19J9bijh55n5EycqmIz2Va3gsnaA4vlwRnhnarXnYGpyYZPX8XL8Zfr2R%2Fvrj6HARwUKjlSEfJcz5X6z%2Bb028kmmzaUJv3DcJdL9IZ%2FBOfchmWgAMngYxs&X-Amz-Signature=fa04ea45fa6cb79f44b29d2b3995a6e7632831b889d159a3267f6045333df8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXE6WYK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIAv%2F2zYFzcoHDRixmHnbf0AZXcXfUsoOYbMMBX7ORgRTAiEAyJGo5SKVWjXzbxm1fJWszdfEjszosoIg5kfZ4yeMrEAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKh1egnlRdRstkSFlSrcA91molMJrcuQUUjvgVr4eJ1Udze4xqmUjCKmXAYtuMyyXwqzjjPEGOuINWzp6%2B0ox7xekBJHe1oe1aPhGO5la2njqBgQe6gxSyXcW5AiU6uGsEBtBHTXh6RJzqNNTtK0QqtNF6jCimJ3LDDGYxi%2BEmK%2FHwqlekHUGxHJYqjAXgB8Y1Ad37VHT6luIiP03cAP3%2BoNfW9gWX3S6bUoOn24F63BfX5ISyiMLjd3FhN1vrBj1WIEaABYSCEIvjPtWHMYO5f5CWKEgdYdm81wzv6YKPP0Eq1bAORJzjIK2fF5JZU0inNYe6pIHtlWhd%2FjB6RVF9cVTo42ohgl5%2F772rrKMM33Lmc4SEzx4TifRXkQP7k6v5OUwrdbOPz3ZH%2BDBxqkIkhugeN9D3xQZitEq4L6YZwVHE0b1WKi4ZnkJAUh3Y1fHJvjHgr6zTq6mS4DCIz9fsB9aly2SQOK7mQ1GxKVzhSVnT3hIfyJhlU3pjeEF0BXUxQRGLXzyXHLD71nEXwtURGaGFKRlerNQJoRfonYB2WLcA92%2B0xmFsVL%2FS%2FWdzKkAIkYIYjIJpGSG211gexPnmGmbEhAAX5bLn0oefg8xVLcvAqOuAu8qkazMN%2FGvRcsAZ7cwBttN6Xr58BVMKzfl8QGOqUB28OKDulXOjLgJlW8dlLK60sQv5E5P4ichkl1SjKaXZbIrC%2BZtJTw7HvXofY55UXJwo5L43U%2BvpSp1ekPYFqlLQVNwPm7T9HSLCp1ZK19J9bijh55n5EycqmIz2Va3gsnaA4vlwRnhnarXnYGpyYZPX8XL8Zfr2R%2Fvrj6HARwUKjlSEfJcz5X6z%2Bb028kmmzaUJv3DcJdL9IZ%2FBOfchmWgAMngYxs&X-Amz-Signature=2a226d5e7cb6af855a77475412debf183c95daf33f23327132759ff6e1301bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
