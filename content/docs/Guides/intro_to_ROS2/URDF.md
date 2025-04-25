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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSIOY4J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVxC7QFdb9jkLyXcg%2BJm1QFmB15zL3N9he4%2F4TO6lFPAIgfregfT4CR03g%2BB%2B5F1kVljqM1M7aG9RIFc6Ak3%2Fid8Aq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKleEL%2BIFatq%2BT7unyrcA2eldLxP3elwZhV%2BE6RSs3cHVXb7WvK7KBpBTm%2BcvRzKQ3oJmTHT6Sal1R6VNoGyCRmToRGXCogh4SjZ7rdFaZWscjI0Ie%2FeUl%2B4emhPPusTNANE%2F%2FO%2FA83FwYrk%2B%2BhpzVlt0W1QaGurLT4CZyw%2Fc8MAConCWbexkZdkv3hFskKJlqy6KvcJfPzse1bX3SBLBKB%2Bp0i5I6ixZBygh6kP5gQZAY2VbgbenbVO2l3%2Ba2Ag5oPvP6W%2BDpUL1BOpY9gBvdTybcbeMA40vJcTPIoGXO2egjo8RKSX05CWeQJI%2Bzl57BqnVsMz%2Flm2HLgDkg9kdSHv9g7QgVOjPldRrYCXO7ObXD7mzeZjmL38W8XuW74taV4giiNobu8djbLUlPAqL4TkejTFur45yYyYJHWntJhP2u32gJZ%2B20UI9FRGkO%2F7ep05i33CQs9ZbM49tAT1CXV4Xo3l3DRRnOzu0aSnDCkM7CtuxrNtQ%2BRRZIB7ZealI6FTy3dEd4ojCF7BNcvifgCFgF0hnmOs67O4dO5HK8ycDUXknhFn3F9smr6V4DPdg1lcYsjxb8VK61XYdUuLM%2FhrVsFh6rwrbFSccORTbmxTQLuvHMQxr23WA8OJhSiFF1u%2FJZvFu4hh2QCsMOz6q8AGOqUBw7DrXcppkY%2Fp4ceUTNBrzqgntKCOeBNhaauxRn5ZnbxFzY0Y%2FrgSq%2Ft%2FNWQVaobXzuvG94OlWJDgUS0RD5uLwfNqUags9cfyfG8LUHvzkVP6rMEQgiq1gsWPZc9nim%2BK6JXWiWre0k%2BBUogAhS%2FotoxyACEuo%2FaYAYx8OP%2BXNYu0v8hlIFj1ZY0Xc%2Fg1uGWby%2Bami6KA8yyWqWbPfwLyO3nhj2Jo&X-Amz-Signature=8922f9a50af75ec4c37d73673f7c9e8b2dea54ef3c69e0f858faaa25864a5c63&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSIOY4J%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVxC7QFdb9jkLyXcg%2BJm1QFmB15zL3N9he4%2F4TO6lFPAIgfregfT4CR03g%2BB%2B5F1kVljqM1M7aG9RIFc6Ak3%2Fid8Aq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKleEL%2BIFatq%2BT7unyrcA2eldLxP3elwZhV%2BE6RSs3cHVXb7WvK7KBpBTm%2BcvRzKQ3oJmTHT6Sal1R6VNoGyCRmToRGXCogh4SjZ7rdFaZWscjI0Ie%2FeUl%2B4emhPPusTNANE%2F%2FO%2FA83FwYrk%2B%2BhpzVlt0W1QaGurLT4CZyw%2Fc8MAConCWbexkZdkv3hFskKJlqy6KvcJfPzse1bX3SBLBKB%2Bp0i5I6ixZBygh6kP5gQZAY2VbgbenbVO2l3%2Ba2Ag5oPvP6W%2BDpUL1BOpY9gBvdTybcbeMA40vJcTPIoGXO2egjo8RKSX05CWeQJI%2Bzl57BqnVsMz%2Flm2HLgDkg9kdSHv9g7QgVOjPldRrYCXO7ObXD7mzeZjmL38W8XuW74taV4giiNobu8djbLUlPAqL4TkejTFur45yYyYJHWntJhP2u32gJZ%2B20UI9FRGkO%2F7ep05i33CQs9ZbM49tAT1CXV4Xo3l3DRRnOzu0aSnDCkM7CtuxrNtQ%2BRRZIB7ZealI6FTy3dEd4ojCF7BNcvifgCFgF0hnmOs67O4dO5HK8ycDUXknhFn3F9smr6V4DPdg1lcYsjxb8VK61XYdUuLM%2FhrVsFh6rwrbFSccORTbmxTQLuvHMQxr23WA8OJhSiFF1u%2FJZvFu4hh2QCsMOz6q8AGOqUBw7DrXcppkY%2Fp4ceUTNBrzqgntKCOeBNhaauxRn5ZnbxFzY0Y%2FrgSq%2Ft%2FNWQVaobXzuvG94OlWJDgUS0RD5uLwfNqUags9cfyfG8LUHvzkVP6rMEQgiq1gsWPZc9nim%2BK6JXWiWre0k%2BBUogAhS%2FotoxyACEuo%2FaYAYx8OP%2BXNYu0v8hlIFj1ZY0Xc%2Fg1uGWby%2Bami6KA8yyWqWbPfwLyO3nhj2Jo&X-Amz-Signature=871c2eb4c86e68271487ab8ce8d5d55c1dcf86bb03f67dd7e294ed86c13e64c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
