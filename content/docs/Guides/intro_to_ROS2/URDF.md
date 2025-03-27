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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KI5QBO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsfLDrS4BFrBKwNCtRgj%2BlaUtw0pylIuIuN3jVC7KqcgIhAK1YBakWG82JzMrqz%2B4M%2FgMobQI2dOqdk%2FTsZyRjQcGSKv8DCEEQABoMNjM3NDIzMTgzODA1IgxLJ2TQg%2FWcxdpPzEYq3AMmTkHvGe8%2FhBBZ517SgBmMWmhTLB%2FPBpKbk%2BM%2BE52lKyukMDdVOwNjxV5Z49zZyOAVs8X1zDo2Nju%2BQqnnG3e1%2F20GeAEzy%2FsaI5no5CD6iM2bXhuGZ3x7H0gMJEawAaiyVjDmjuoGOfYEqyGw31qB5%2F3F%2B8mJ5gqdvbLvKGy65bi8PvNBHV%2BQtqDYJ9fxldvRpyuxe39kFl0DiVZ28SlL37Ai7KUwcJXk3ZbwQxVLj6vbCkyK5yqT%2FdRhYNyRDJ6JCqt6RVRS%2Bgq8F6H14vBlSQ9kmknIzjl68bR906HIkMqD%2FLpn0CcC8cFGe94UVos9beMXxconvrswuXTwgSSVjQR1e32eYr6iGWOmBM4twzgzLNOsVgwuFVBEM7qAIMYkksK6IsdMpKiojoNbrqSU96P%2F7W9P2R6%2BTO3iN1HpfOVSESsFRqR6bsStr3C%2BnyEDOglJkNPSdn4a8YkMnPMFcO2w1AuXvcydG1i08LCmnwjdLty6jXds3K5jGaNjCL%2FYExDVmn4q6dsYliimDBfPnJXbUdsxCCy9cjhhyrNCeBCJ2Ezm4CGDR7OwPyMieDd1DPqPk9aDJG9cl48hipCdoNaGJFgolSQiFM6B4mG6045nKSjBHUpdmxJAaDDnhZS%2FBjqkAQY0nwFyRRnsozBikvTgbIPeobJ8YJ8JcKY7PLLBvJzWAniIJNdPdpDhmd4G1kTrFgPPK2nZ73Ec5nPichK0Vo6M49Vc4Ij5mmomezldFeDN0LhKowQUHyan9e00ClMFIm8xtrsxr%2Ff1R%2FwaG2akEebCi5Proi6UJx7jaB4TqCv448HqVJw5xDR1DEgTQEf%2FqSOAUNFY0K%2BmUKElxh7zUHjfn3q0&X-Amz-Signature=45acc305f381d696a4b2515ba30ece606e2e2134c58a2e26c7a4ab429e833055&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KI5QBO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsfLDrS4BFrBKwNCtRgj%2BlaUtw0pylIuIuN3jVC7KqcgIhAK1YBakWG82JzMrqz%2B4M%2FgMobQI2dOqdk%2FTsZyRjQcGSKv8DCEEQABoMNjM3NDIzMTgzODA1IgxLJ2TQg%2FWcxdpPzEYq3AMmTkHvGe8%2FhBBZ517SgBmMWmhTLB%2FPBpKbk%2BM%2BE52lKyukMDdVOwNjxV5Z49zZyOAVs8X1zDo2Nju%2BQqnnG3e1%2F20GeAEzy%2FsaI5no5CD6iM2bXhuGZ3x7H0gMJEawAaiyVjDmjuoGOfYEqyGw31qB5%2F3F%2B8mJ5gqdvbLvKGy65bi8PvNBHV%2BQtqDYJ9fxldvRpyuxe39kFl0DiVZ28SlL37Ai7KUwcJXk3ZbwQxVLj6vbCkyK5yqT%2FdRhYNyRDJ6JCqt6RVRS%2Bgq8F6H14vBlSQ9kmknIzjl68bR906HIkMqD%2FLpn0CcC8cFGe94UVos9beMXxconvrswuXTwgSSVjQR1e32eYr6iGWOmBM4twzgzLNOsVgwuFVBEM7qAIMYkksK6IsdMpKiojoNbrqSU96P%2F7W9P2R6%2BTO3iN1HpfOVSESsFRqR6bsStr3C%2BnyEDOglJkNPSdn4a8YkMnPMFcO2w1AuXvcydG1i08LCmnwjdLty6jXds3K5jGaNjCL%2FYExDVmn4q6dsYliimDBfPnJXbUdsxCCy9cjhhyrNCeBCJ2Ezm4CGDR7OwPyMieDd1DPqPk9aDJG9cl48hipCdoNaGJFgolSQiFM6B4mG6045nKSjBHUpdmxJAaDDnhZS%2FBjqkAQY0nwFyRRnsozBikvTgbIPeobJ8YJ8JcKY7PLLBvJzWAniIJNdPdpDhmd4G1kTrFgPPK2nZ73Ec5nPichK0Vo6M49Vc4Ij5mmomezldFeDN0LhKowQUHyan9e00ClMFIm8xtrsxr%2Ff1R%2FwaG2akEebCi5Proi6UJx7jaB4TqCv448HqVJw5xDR1DEgTQEf%2FqSOAUNFY0K%2BmUKElxh7zUHjfn3q0&X-Amz-Signature=31b95b47014250a23e2705ea047c694d8213bed5156d4d42be2fc40fb22ff287&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
