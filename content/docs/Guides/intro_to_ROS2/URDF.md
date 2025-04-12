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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CB32MIL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDUQ55SIK36JwPZJ%2F3ukAtExw10V5sVtcto5DtYKRaKlAIgE18lwMewg2b6FezPsAPH3rMFLai0nSUn%2FGRTE139EGgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiRUYzhCSlK34cMwircA0zw0jv6NNWTqMgxtxCk9IeJNLBWg8q4vBwuWPiBMMHG0y8zLwM7I%2B7aCpTypVtvoilUuPrWrzmAtpeUoBesImnpXjeKOvtsPGYtDYUJMh4vxkEmkl7Z5NfLyYsm%2FO9e9pLBgwyHPo1LALn78Hla%2BHTOgeCrDkoF9wrCxCPoBo9pLMXL7OiluzREU10UEIyFhkd235Mw8yN5hXFxofx0X28Qj48Cuw4Wg6w%2BsSZ%2FRfIBHddZxpZrYMV6oQV2%2BikuNSbNkcaG0YnoQlUPP%2BO3qIDbfXgnGG3OrnChASlq5DcJYn9O7TRH5L%2FXYDUsW%2FxabAdq3rl7%2FDIk%2FFNAmi2zrxapZP9TMRlmTG%2By9AYYR1dxnuiG4WEN4SyL7mtFUI8yBCBRDrQx0%2BarWf3jNNBPawJaJHoRt%2Bg%2BTqkU1ch7Yln%2BNS78FCwIToaJ6%2FhPVARLPs3aBNbvSdX7igclYPRxBPM0Ik5W%2FWSiIzrstHKTZs3zpq2%2FwhAk%2BGeaXxHhK86ClyHAKpAkR%2B%2BLLgNubXrxwIo7y0eAo3g1eO0bcBvkGs%2BPNXjjjBD2JFHNNlh5M6l92xAmoo3G1Yb8FHClnza8pNlwhln9DJauTrBSCONnDSFJbfisqDuV5v4gY%2BHdMIqF578GOqUBHcICAL93J0EIXhJ%2Fh6aFWFZHYAoK%2B4fA9apiCGiZ8dlsohZ5F7jAEK6KkywsETMaRa1JjUNlFFBqAfgKeIAhYcSSE%2Bg1Fzmw6MMVwaFF9EZsM%2FqJ6FnTMZftTd5uxwfKqyZXgn5IKpQt5S2pF0WAhLV7Hmzx8B1FuNsTuxlzGjKwPJO29bDobwcWivBrRC6jlG65DRrqd9QkQ79iwWq0Uh17kJ3Z&X-Amz-Signature=f20441bf5d7b00c769f148bf37e1cffdaedfc113a4c2f330dc89d8ccf23a4e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CB32MIL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDUQ55SIK36JwPZJ%2F3ukAtExw10V5sVtcto5DtYKRaKlAIgE18lwMewg2b6FezPsAPH3rMFLai0nSUn%2FGRTE139EGgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiRUYzhCSlK34cMwircA0zw0jv6NNWTqMgxtxCk9IeJNLBWg8q4vBwuWPiBMMHG0y8zLwM7I%2B7aCpTypVtvoilUuPrWrzmAtpeUoBesImnpXjeKOvtsPGYtDYUJMh4vxkEmkl7Z5NfLyYsm%2FO9e9pLBgwyHPo1LALn78Hla%2BHTOgeCrDkoF9wrCxCPoBo9pLMXL7OiluzREU10UEIyFhkd235Mw8yN5hXFxofx0X28Qj48Cuw4Wg6w%2BsSZ%2FRfIBHddZxpZrYMV6oQV2%2BikuNSbNkcaG0YnoQlUPP%2BO3qIDbfXgnGG3OrnChASlq5DcJYn9O7TRH5L%2FXYDUsW%2FxabAdq3rl7%2FDIk%2FFNAmi2zrxapZP9TMRlmTG%2By9AYYR1dxnuiG4WEN4SyL7mtFUI8yBCBRDrQx0%2BarWf3jNNBPawJaJHoRt%2Bg%2BTqkU1ch7Yln%2BNS78FCwIToaJ6%2FhPVARLPs3aBNbvSdX7igclYPRxBPM0Ik5W%2FWSiIzrstHKTZs3zpq2%2FwhAk%2BGeaXxHhK86ClyHAKpAkR%2B%2BLLgNubXrxwIo7y0eAo3g1eO0bcBvkGs%2BPNXjjjBD2JFHNNlh5M6l92xAmoo3G1Yb8FHClnza8pNlwhln9DJauTrBSCONnDSFJbfisqDuV5v4gY%2BHdMIqF578GOqUBHcICAL93J0EIXhJ%2Fh6aFWFZHYAoK%2B4fA9apiCGiZ8dlsohZ5F7jAEK6KkywsETMaRa1JjUNlFFBqAfgKeIAhYcSSE%2Bg1Fzmw6MMVwaFF9EZsM%2FqJ6FnTMZftTd5uxwfKqyZXgn5IKpQt5S2pF0WAhLV7Hmzx8B1FuNsTuxlzGjKwPJO29bDobwcWivBrRC6jlG65DRrqd9QkQ79iwWq0Uh17kJ3Z&X-Amz-Signature=6cd544707ae7c380784a43bc9440c3ae4b839caa8f906c8ecd35a0394a5d0ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
