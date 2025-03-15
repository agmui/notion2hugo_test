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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRYDMZOW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2HLLAu2XljfLCnvqeT9o%2FCvCWyOJ0GHqvezy5Cs9ppwIhAKb1a7A4wmgz5wayA7LjlsSW0Y5QsNv0t%2FZ79S6UisrIKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeRtE7n%2BROtbzuKn0q3APyWiWnK%2F9UtWUrEj59heCxe08UaivQslBuAQFxZvsw9ODXbntmf6KC2RzcLT%2B%2B2jlopexFV16vGVOvta8eYPsn2r6iomGoXzyw7sG2oqOfPoh7O3tdi7OyBk7R%2FD6qNYxlodY3Kg%2BEetNAE%2FwYKUjYV0QwrG3ZsIHuoS9U0SDQokftyKgrVstnpJ1WV0Xpuz%2BJDpD7UMxqPfm0hLdUIcMRiZYkk%2BtJ0sDzN5pDOZdY168Qp8wcOiEjVftuX46dedhr%2BxCGERaQmDm6x7OIjjNVLBHIsik%2FJiPXCXZYVyHcECz9QKsz7UMrgSJJIwqC2kKPofAh1Tnx1x9tpGxepiwpMXg5umB0x5K90nHkg08%2F2IYFrAKtc6DOcMEnVS1aoJWx0vAoi%2BgKoUQgAiIbzHQONjXsCNXkXl7nmYiqVbPQd%2FeMXYFhnuQOPn6ufHcm9MgydYz8O08erV8TJyDlMWJbEv8r5Vau93Mxwka3V0NuK9X1ypZuHyu7Z409ZOiScfBsMkL5coAlTQd3dfK6brUdEozFCQX%2FCo6gs3B%2BMFS17cjr%2FBoMl6DOFUxaE3hZMb6eY2Owgl2r4xycu7bhJlouh0PyaV6DCJ9RQGxdDc7BQxoNdoibtuxePw%2FiPTCGjdO%2BBjqkAU7h9VPkRO0BJLcCZIh7SxWE67vIlJP3hFSjo5fVPg%2FYsqT5dEaoMY%2Fbfnpf%2F4H%2BmrrVB%2Fktry5mWJp5eFObycTqRm7S2hQHn8Qli0kcrA4CzE36dwnoR%2BQkFhws0kifkR%2F7P4zATaJ%2FblbSXM3XN%2BZyZP3yp6Y8zEhPpT1J5dyQ9B79A5BpI4QjjRTvC4BZBCWMfhpn%2BTJe9QUtpg9qMFh1vUx6&X-Amz-Signature=c9fa8bcb8d6af05b8410c168bb268bff2c5618ce364539b5132a0d556cb13973&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRYDMZOW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2HLLAu2XljfLCnvqeT9o%2FCvCWyOJ0GHqvezy5Cs9ppwIhAKb1a7A4wmgz5wayA7LjlsSW0Y5QsNv0t%2FZ79S6UisrIKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeRtE7n%2BROtbzuKn0q3APyWiWnK%2F9UtWUrEj59heCxe08UaivQslBuAQFxZvsw9ODXbntmf6KC2RzcLT%2B%2B2jlopexFV16vGVOvta8eYPsn2r6iomGoXzyw7sG2oqOfPoh7O3tdi7OyBk7R%2FD6qNYxlodY3Kg%2BEetNAE%2FwYKUjYV0QwrG3ZsIHuoS9U0SDQokftyKgrVstnpJ1WV0Xpuz%2BJDpD7UMxqPfm0hLdUIcMRiZYkk%2BtJ0sDzN5pDOZdY168Qp8wcOiEjVftuX46dedhr%2BxCGERaQmDm6x7OIjjNVLBHIsik%2FJiPXCXZYVyHcECz9QKsz7UMrgSJJIwqC2kKPofAh1Tnx1x9tpGxepiwpMXg5umB0x5K90nHkg08%2F2IYFrAKtc6DOcMEnVS1aoJWx0vAoi%2BgKoUQgAiIbzHQONjXsCNXkXl7nmYiqVbPQd%2FeMXYFhnuQOPn6ufHcm9MgydYz8O08erV8TJyDlMWJbEv8r5Vau93Mxwka3V0NuK9X1ypZuHyu7Z409ZOiScfBsMkL5coAlTQd3dfK6brUdEozFCQX%2FCo6gs3B%2BMFS17cjr%2FBoMl6DOFUxaE3hZMb6eY2Owgl2r4xycu7bhJlouh0PyaV6DCJ9RQGxdDc7BQxoNdoibtuxePw%2FiPTCGjdO%2BBjqkAU7h9VPkRO0BJLcCZIh7SxWE67vIlJP3hFSjo5fVPg%2FYsqT5dEaoMY%2Fbfnpf%2F4H%2BmrrVB%2Fktry5mWJp5eFObycTqRm7S2hQHn8Qli0kcrA4CzE36dwnoR%2BQkFhws0kifkR%2F7P4zATaJ%2FblbSXM3XN%2BZyZP3yp6Y8zEhPpT1J5dyQ9B79A5BpI4QjjRTvC4BZBCWMfhpn%2BTJe9QUtpg9qMFh1vUx6&X-Amz-Signature=ea39fe3225e549617e367e91be039def241d1aa8e35b8972d5227555366b34f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
