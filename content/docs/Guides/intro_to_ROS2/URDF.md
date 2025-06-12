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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWNGULF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHiG1g55xRxGfTQN8VEaZ0aWcO5BLo1dU9%2FBix7Q5NimAiEAjWJ0gqnHKBtzj5Hvq1OHZBxYKf62GXc%2BCoK4KxyjlVcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZTQY2CHvqnoaBylyrcA%2BwG25oo%2BOo%2BaI%2BXQOC3VvF0z2JtoBGFhafm%2FzGumGqnWUanyeqok7qrwU4tOoAa8%2BPxN0TPCH46hg%2BxZzirskz9IAyK%2FhBFPYT2V4mBNP3EPQVZIN6N7D%2BQ3cRMe2ny089zQ6TGM18mra4qBf67%2B8tRYbG7Wn%2FvAvqaJ7NNVmB47VDwdfCu%2B%2Bmfexn2ThhPr9hI9GF2Fp2jqGBnRkChgnZ8naVFdGCYJMiPRACipOIt1q7cRY53pQl4VY6K45%2FxmbtrpVXZs18l2joTvwvJo%2FybmGhjbZVCrJx%2B9Fzve3B21Ebuum7%2BNlSdy%2F9FitqU50uJcD45UFPMJPs%2BrPwgpCQiNMdqNqfJJ4aWoDo8zYZJAiyE%2FPMkdng5Huv3sX8BE35soDHlGTa5ie%2BzOdysG6RENP9lMP4Xc0AiOC%2Fy0GJWkGcZT8ivtdCeT5DJwSzKv9kzzBBSn%2FrAQvs2wmlrJwe%2FgBwdk1BiAax1eCg0%2BYdtpRGXE0dAg%2F2XgZt0u%2FbcK%2BBThSw2%2FbjLi8mboebK9EHwVtBupyaJjWzI0gJUA0ovTy0vSXt1wThN6bC62M2HPkb8bpCaqPcluueR0iNzczU7GG23TvWn%2BSE%2Br27hMl9yBVuQohld%2BlF%2FEQZUMNOOq8IGOqUB%2BXxwkZWvgoO8sYjOBshjnHvjep2ldtpbBMCbFvPsJ28Pg%2FEdPdMpTHUou6jOJ78QZGqazvZusjL2TYIEMfkj%2FERzS%2B0JMn10bn6BBHqXAz2x61TrN%2Faiwn1XKgBTLhgN9VikGKHrrHrEjSQLpJoh3ai0fXAiEFhC71309dL4MIZovjffyHbY%2FbIxoWQSmVF91nTGCkJ%2F28sWi%2Fk7HyvwdIaGuI7o&X-Amz-Signature=da37003c8691c3ceda85846afb1362cc3edc104da3af071d16d20859afa75bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWNGULF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHiG1g55xRxGfTQN8VEaZ0aWcO5BLo1dU9%2FBix7Q5NimAiEAjWJ0gqnHKBtzj5Hvq1OHZBxYKf62GXc%2BCoK4KxyjlVcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZTQY2CHvqnoaBylyrcA%2BwG25oo%2BOo%2BaI%2BXQOC3VvF0z2JtoBGFhafm%2FzGumGqnWUanyeqok7qrwU4tOoAa8%2BPxN0TPCH46hg%2BxZzirskz9IAyK%2FhBFPYT2V4mBNP3EPQVZIN6N7D%2BQ3cRMe2ny089zQ6TGM18mra4qBf67%2B8tRYbG7Wn%2FvAvqaJ7NNVmB47VDwdfCu%2B%2Bmfexn2ThhPr9hI9GF2Fp2jqGBnRkChgnZ8naVFdGCYJMiPRACipOIt1q7cRY53pQl4VY6K45%2FxmbtrpVXZs18l2joTvwvJo%2FybmGhjbZVCrJx%2B9Fzve3B21Ebuum7%2BNlSdy%2F9FitqU50uJcD45UFPMJPs%2BrPwgpCQiNMdqNqfJJ4aWoDo8zYZJAiyE%2FPMkdng5Huv3sX8BE35soDHlGTa5ie%2BzOdysG6RENP9lMP4Xc0AiOC%2Fy0GJWkGcZT8ivtdCeT5DJwSzKv9kzzBBSn%2FrAQvs2wmlrJwe%2FgBwdk1BiAax1eCg0%2BYdtpRGXE0dAg%2F2XgZt0u%2FbcK%2BBThSw2%2FbjLi8mboebK9EHwVtBupyaJjWzI0gJUA0ovTy0vSXt1wThN6bC62M2HPkb8bpCaqPcluueR0iNzczU7GG23TvWn%2BSE%2Br27hMl9yBVuQohld%2BlF%2FEQZUMNOOq8IGOqUB%2BXxwkZWvgoO8sYjOBshjnHvjep2ldtpbBMCbFvPsJ28Pg%2FEdPdMpTHUou6jOJ78QZGqazvZusjL2TYIEMfkj%2FERzS%2B0JMn10bn6BBHqXAz2x61TrN%2Faiwn1XKgBTLhgN9VikGKHrrHrEjSQLpJoh3ai0fXAiEFhC71309dL4MIZovjffyHbY%2FbIxoWQSmVF91nTGCkJ%2F28sWi%2Fk7HyvwdIaGuI7o&X-Amz-Signature=ef55e6fc060f1106499ae04d5cc1082aad81c5f8eddbf4ada248bc58ef730ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
