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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV7A2PXC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93UmgUwM%2FD2GQtIPL%2B%2B%2BaE5WgSyMAzc65Sr6JLT%2BS5AIhALKezfSK90bYaaX6FH5Eqoqj8aQRZS4VY3hHdR%2FCUUyrKv8DCFgQABoMNjM3NDIzMTgzODA1IgzEg%2B1mDSNO63UJiKUq3AMMAWpmkGKKSx%2ByVYdZeO%2B3Z7hoUKqpjkQu6HkoywtjG7bUuQdoLUiBmAbvv85ITPmonmcHQ20PL5vpuPrmFjOFj1DqzJcGX%2BsRgAHrIhzOB8gyH87BiJo%2Bzi4WGTbxYbjeitfiUsabbQT6PedymhWQix6l2TJh4LOUwFlPBlMhyuuOWA0qtkYVDi4MOQ%2Fqqc4gz%2B4x65M5kKc%2BdG1aRbKX4ZjMR48gHVtWzhjsO0G%2FcWa9O2pHh%2BbbwfWknQNXQtRi6bHl54kF8tfUjfUapZuPHVVTlBeb%2FO70bLrlShOZLS108ya267atTOiM5Y9W1cZkEXNgenjeonOSIZaZgc8nlJ%2Bw51sN5%2B5N6JubM59WJlX6CFJgOG3hyxD54WVx3L5YF4zLhmIfL8MKkyTB%2B5ZisX5HDmeOAxD4VG436ZclZu9As2UskpzbWtL3QZlxDUewObYV0qd3HNmLDLEu0W5iNFXgxkVk5qCRqo9M4TVim3N6rZHa30IEmKtUrUwoD8flltr3alVLYzp5hwqNxtzC0TpYb9CUh7i5kZ2ICHfdZsrVs9QT3Kg8Uzl25fVn8NXzrFrB%2BDmBR%2BYi3tVvFDMWL93SDfBANN7Z5IiY8iE5uGwsoBJQZwMN1Om88TCB4aDBBjqkAfyGeA12n4AX3xMmoJewB%2FPctcQIqAeY1w1u%2BQ8WTS9KmjgE2iGo9yjRhw7xXVQmXIf1oJU4REjMwMKagNXPFG9xvzQgXvZySXu8FssTSljqQqX1RdLxCFnJ7M3qyTDbIYjs3C%2B%2BCbmAqTGsUcDIEWCEbK%2BWZ1BRMfR1ykzEl5rs4iFb%2Bh4BS%2B6jFvNtn7utudegsvN2PAVLRBoVBb6dCnSjNtIV&X-Amz-Signature=b92e9587d12ec949f628610918ab0585e9cf2930a2d4b1d109509556de6f9af1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV7A2PXC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93UmgUwM%2FD2GQtIPL%2B%2B%2BaE5WgSyMAzc65Sr6JLT%2BS5AIhALKezfSK90bYaaX6FH5Eqoqj8aQRZS4VY3hHdR%2FCUUyrKv8DCFgQABoMNjM3NDIzMTgzODA1IgzEg%2B1mDSNO63UJiKUq3AMMAWpmkGKKSx%2ByVYdZeO%2B3Z7hoUKqpjkQu6HkoywtjG7bUuQdoLUiBmAbvv85ITPmonmcHQ20PL5vpuPrmFjOFj1DqzJcGX%2BsRgAHrIhzOB8gyH87BiJo%2Bzi4WGTbxYbjeitfiUsabbQT6PedymhWQix6l2TJh4LOUwFlPBlMhyuuOWA0qtkYVDi4MOQ%2Fqqc4gz%2B4x65M5kKc%2BdG1aRbKX4ZjMR48gHVtWzhjsO0G%2FcWa9O2pHh%2BbbwfWknQNXQtRi6bHl54kF8tfUjfUapZuPHVVTlBeb%2FO70bLrlShOZLS108ya267atTOiM5Y9W1cZkEXNgenjeonOSIZaZgc8nlJ%2Bw51sN5%2B5N6JubM59WJlX6CFJgOG3hyxD54WVx3L5YF4zLhmIfL8MKkyTB%2B5ZisX5HDmeOAxD4VG436ZclZu9As2UskpzbWtL3QZlxDUewObYV0qd3HNmLDLEu0W5iNFXgxkVk5qCRqo9M4TVim3N6rZHa30IEmKtUrUwoD8flltr3alVLYzp5hwqNxtzC0TpYb9CUh7i5kZ2ICHfdZsrVs9QT3Kg8Uzl25fVn8NXzrFrB%2BDmBR%2BYi3tVvFDMWL93SDfBANN7Z5IiY8iE5uGwsoBJQZwMN1Om88TCB4aDBBjqkAfyGeA12n4AX3xMmoJewB%2FPctcQIqAeY1w1u%2BQ8WTS9KmjgE2iGo9yjRhw7xXVQmXIf1oJU4REjMwMKagNXPFG9xvzQgXvZySXu8FssTSljqQqX1RdLxCFnJ7M3qyTDbIYjs3C%2B%2BCbmAqTGsUcDIEWCEbK%2BWZ1BRMfR1ykzEl5rs4iFb%2Bh4BS%2B6jFvNtn7utudegsvN2PAVLRBoVBb6dCnSjNtIV&X-Amz-Signature=e8399d616b86519e4e9da9dd0a9130ea80d5c72c17d1cb59ceb0b858e8d36f38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
