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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NSW44SG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxvBjs3DzdeVT9cwLMWbj14XFrtmoC34QHhxnrYp5sswIhAJqqyAfv3KwFUOfDFMjhTBiGh%2BL903XiOZupGYEnRqQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydshekRuJrSDeVPP4q3AOr13YHADC78MQh%2B75dW0C2cL95NhfgJyiOxU7pq%2B7fzHUfzqWGGLB3D8KCHZMbBa6WwlrHl1fpRJXnBG4tmKzaqQJJGB53sHYxQ3UFwPNtmtB%2B1udByMwLqGMRa4m2ODFw0tWUDMK18T8qPPp%2BP6S0HAf9gimMXWUizvrYG8vm7ixlRvh1hxJoU1bZE%2FfwfCRXdH4PH1XKArM03OQjtm%2BUu33PeZGyq1y%2BTD6pQFb4k9X%2BHtLWfI3vhqVGd91QG4uMzlTuFABQvYIk2pineLmoTzUMuknT740zu2N%2Byp822CNiLEbP2DYy4Z2zTWX1kzakatPmgwCK7f293P8hjGstuEXplypxLsQ%2BDLMtEZxbawRZw9iNi8QcNBPXLuaBc89TqHLstIGcSQsUUYMXm5prjpdJsGc4xBJD5bJRpctFHxLkyYwtu5gugyxFhNLldFPEiaDhfBAtSYzIeiuNzxs82k%2Fr0L%2FWmHpxUiJ0nTTxKB4XmUfqeiISvP9Rzin5rncJZ3lpx%2BcvUlS0k4JU%2BSQJrUaWdCGAGDdMP3%2BzJ%2FWLk9gVdK2htFRXVSj85gz3H3I4%2BjXRTfUykYEnZC4XEd28tryQ19qQRkhn0IOblpdoqWGYZnvnof5zrBkG6DCM%2BpXCBjqkAU3%2BBs5Z9iLbu%2BWaNuHzJfCr6oa%2FEJGwMh4HPNqlsPrHXhQ%2BLPnXHmYH%2F8jYwt72fWbzQ6YSstrmsXkwVqJdSkZKJz6Bd0YFXsPmp93PHReTZMCgsXOSBRa8VWYjPOjzvdvxuen6InES9Maqf95Ctp6E3cN1Z9JibRCqRUivuhgDBUGGRuWLNem7S0TVvdbQQvbVIDpzaiQ6L1mXYENQItZ7xH9s&X-Amz-Signature=a8c61c1c939f2509b46ff00b39eb675b3c64ac703786ac132a48f2df7d9a1a30&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NSW44SG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxvBjs3DzdeVT9cwLMWbj14XFrtmoC34QHhxnrYp5sswIhAJqqyAfv3KwFUOfDFMjhTBiGh%2BL903XiOZupGYEnRqQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydshekRuJrSDeVPP4q3AOr13YHADC78MQh%2B75dW0C2cL95NhfgJyiOxU7pq%2B7fzHUfzqWGGLB3D8KCHZMbBa6WwlrHl1fpRJXnBG4tmKzaqQJJGB53sHYxQ3UFwPNtmtB%2B1udByMwLqGMRa4m2ODFw0tWUDMK18T8qPPp%2BP6S0HAf9gimMXWUizvrYG8vm7ixlRvh1hxJoU1bZE%2FfwfCRXdH4PH1XKArM03OQjtm%2BUu33PeZGyq1y%2BTD6pQFb4k9X%2BHtLWfI3vhqVGd91QG4uMzlTuFABQvYIk2pineLmoTzUMuknT740zu2N%2Byp822CNiLEbP2DYy4Z2zTWX1kzakatPmgwCK7f293P8hjGstuEXplypxLsQ%2BDLMtEZxbawRZw9iNi8QcNBPXLuaBc89TqHLstIGcSQsUUYMXm5prjpdJsGc4xBJD5bJRpctFHxLkyYwtu5gugyxFhNLldFPEiaDhfBAtSYzIeiuNzxs82k%2Fr0L%2FWmHpxUiJ0nTTxKB4XmUfqeiISvP9Rzin5rncJZ3lpx%2BcvUlS0k4JU%2BSQJrUaWdCGAGDdMP3%2BzJ%2FWLk9gVdK2htFRXVSj85gz3H3I4%2BjXRTfUykYEnZC4XEd28tryQ19qQRkhn0IOblpdoqWGYZnvnof5zrBkG6DCM%2BpXCBjqkAU3%2BBs5Z9iLbu%2BWaNuHzJfCr6oa%2FEJGwMh4HPNqlsPrHXhQ%2BLPnXHmYH%2F8jYwt72fWbzQ6YSstrmsXkwVqJdSkZKJz6Bd0YFXsPmp93PHReTZMCgsXOSBRa8VWYjPOjzvdvxuen6InES9Maqf95Ctp6E3cN1Z9JibRCqRUivuhgDBUGGRuWLNem7S0TVvdbQQvbVIDpzaiQ6L1mXYENQItZ7xH9s&X-Amz-Signature=f1db48102aa7eb62a2c62938c6a0c188dec04377f15b9009845455c43feff648&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
