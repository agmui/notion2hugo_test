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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSCKEIX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCT3m%2FShsJOHrI3QqNVkewCktBl9Lq%2BfSmy43txAvo5GAIgf5eMcpdmh7IDfc98htD5Q3ONdek1CTZDyz1MAZYSeIwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOU4TNCe%2FeD2ylyMUircA8QylztStIHjgwV4PTMbwSoonVlEdxnvOG7cTKf1DUOE43XFGVEq4aS%2FX%2BSMV4cbGtcVdY6gfrUWfaIuwoYn4O7VK0nJwA3iMy2PYxsSry%2FoJX5dWqHRoqBfUZaDwaOhsprKk8HCkBTimZ3bpB28i8rb3I0mSc49DvXa5TYrfwaqKrcOUAWvtafYopH4%2BTURoRx3FPURpvv4sGiZwyj2dqOBTFi4WCLESzfQtT%2FNhuIZufqwkuiue6Y4ktq8Lg5VhXqQz71hBYpihZJE3lLNaDZK1W5xeIyDCszS7yEq4NVsNQ7tu9ENDBSs3rjQrtqvUQzMB4e0ZP99Pkf%2BDDyWZsMZoBrNre3hXSOtevSnl9GgjFzFsJ559uQEVjFFdPTImlpvSQiX%2Fm5ZkPGBZgKCKRzXol88b5QMgTP3RwWNY9WPY6B4cADZPDz7xuXqyoOaZ%2FzCpf8b%2BLf6VK8zliGabq1DRqfzKO7mb9sfZE3LtjNmplCRNOJmBjhfQfN1IzNCrk9rjs0Uu0sT6qcQtB5odFQSx4kabIkCZEKuas%2BDLmHA%2FZBQxzt%2Fja%2FsQLV5J2EHj%2B%2FagwkRh8Dma9rQIur4wNC%2FNAl37SSWsSUXHlgVsNgLYxH9lUZC%2FPCeHgTfMNKhpMAGOqUBMPdIUgJpE3SBhqi5oNAkwMeciQbR7tfN8lD8RdEJGiKhbdWZUSJc0V71jzkPoNkCjw%2FCtjX9gYHTkgVkw5vDMvR6pD37a9M1XF%2BbQShVpKk%2FWWeKNEPf3fuajpBjtYRgWsboWWDNAMUxKthlkQirFBdml9sDYucotlraOan497sUMx7kvb%2BW7kICWzOfTOKF5yM%2BWcHr6wbBUSED81Jj7vaWNgX8&X-Amz-Signature=b88e885240e029cf35579e5601575d4200f3643175e8835ebc02aad7773bd757&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSCKEIX%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCT3m%2FShsJOHrI3QqNVkewCktBl9Lq%2BfSmy43txAvo5GAIgf5eMcpdmh7IDfc98htD5Q3ONdek1CTZDyz1MAZYSeIwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOU4TNCe%2FeD2ylyMUircA8QylztStIHjgwV4PTMbwSoonVlEdxnvOG7cTKf1DUOE43XFGVEq4aS%2FX%2BSMV4cbGtcVdY6gfrUWfaIuwoYn4O7VK0nJwA3iMy2PYxsSry%2FoJX5dWqHRoqBfUZaDwaOhsprKk8HCkBTimZ3bpB28i8rb3I0mSc49DvXa5TYrfwaqKrcOUAWvtafYopH4%2BTURoRx3FPURpvv4sGiZwyj2dqOBTFi4WCLESzfQtT%2FNhuIZufqwkuiue6Y4ktq8Lg5VhXqQz71hBYpihZJE3lLNaDZK1W5xeIyDCszS7yEq4NVsNQ7tu9ENDBSs3rjQrtqvUQzMB4e0ZP99Pkf%2BDDyWZsMZoBrNre3hXSOtevSnl9GgjFzFsJ559uQEVjFFdPTImlpvSQiX%2Fm5ZkPGBZgKCKRzXol88b5QMgTP3RwWNY9WPY6B4cADZPDz7xuXqyoOaZ%2FzCpf8b%2BLf6VK8zliGabq1DRqfzKO7mb9sfZE3LtjNmplCRNOJmBjhfQfN1IzNCrk9rjs0Uu0sT6qcQtB5odFQSx4kabIkCZEKuas%2BDLmHA%2FZBQxzt%2Fja%2FsQLV5J2EHj%2B%2FagwkRh8Dma9rQIur4wNC%2FNAl37SSWsSUXHlgVsNgLYxH9lUZC%2FPCeHgTfMNKhpMAGOqUBMPdIUgJpE3SBhqi5oNAkwMeciQbR7tfN8lD8RdEJGiKhbdWZUSJc0V71jzkPoNkCjw%2FCtjX9gYHTkgVkw5vDMvR6pD37a9M1XF%2BbQShVpKk%2FWWeKNEPf3fuajpBjtYRgWsboWWDNAMUxKthlkQirFBdml9sDYucotlraOan497sUMx7kvb%2BW7kICWzOfTOKF5yM%2BWcHr6wbBUSED81Jj7vaWNgX8&X-Amz-Signature=008a47db230688e40bc938ad20634985ab3b0b07e71a97607f49dc735aa076ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
