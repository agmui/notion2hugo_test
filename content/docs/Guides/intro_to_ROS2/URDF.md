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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANGP6HP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjLYlph7xOaUKXFWUvF4LNn6vsmrHgrqVuyJil%2BwHLggIgepAijE5PWbLWFgbK77V2sheXXfPnX3c1AIrj%2FQka5sgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK9RYBoB1D4Y3%2F2Y%2FyrcA%2B4%2B6VEIqpkVJW2feE3fwNMRw6lRef05aEla6W31pW3aOqaejFlysBPWRr5MhwCNSEAcQzfbE%2FMh1N3kG4VJI5p%2FMEVvz2VL3A2H4jVwCzJ%2Bo%2BOGvNo57DS9Zqy80e388rFLB%2B8ehk3YronauPVZQa8w4yo8mUEWoQ9KJVWKOBbFiodCFqng0WQCBXwo20i5LSva30Ves2%2FKjuHrlbGxbmvQUFPDKqxjEDd1rrrWdOJMxxRz653OjvDlPSlYTSIX5JqXocHTQRJaCGCW0Nw6QmqtQQcVCQ6%2B5%2FSlwerVFH1i5HlsQ1Ee7TRQQE8n3IIbFpda%2FhRL7X76oqz5gp2ADKCggumOtA3s02iCun61ERjdll6szToX%2FAdb9KqQ%2ByL2i7GmU40inuIYtQu%2F8aDZegQ98g%2BjG0kYRvOJJVDT6ol%2FJMGjBF8Y1INEdxaGoF49PkJcK83wmRPvMmfej2FjYbKVCiQq5Q6AW6QU28n%2F98r499gYaA37xwAZMCwkpctMamdJ5LZ%2B%2B2%2B20fn7ouZmg95KYVP%2FUKZ7E0wr7smkCe4Tbn%2BBdZS%2B6WfPkYRF4kPZGoMXtMGFe%2F%2BwUfwPPJdzFW%2FtskZl%2BCKm%2FwlzEYLV0xtCcLimryVKPjMF5gAcMOWiw78GOqUBz9FikBDq3CHVqz4TtEAOR8oTam0eSGA%2BdqIsdbm38%2BxCv1EOXZ6qAg1tqrxWdtYAysGUaYkaE2WP2nbTPmidfD8M6qF3D0sjcA665%2B899piwhZQ0UK8xiHQaBKkrgh5q3TsMJpd%2B1cK%2FM9jnxDOws3MnwRbVF%2B%2Bf7SwpQSYqMdGI%2FbRZHqpVioTinT6Mc%2BdXAqVomhlEAFdhIwV4crLzmbk6BSzH&X-Amz-Signature=b913d7f0d15461838ae40eacb4a29cce890ed5b1f44b04b3df2e125135b5773d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANGP6HP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjLYlph7xOaUKXFWUvF4LNn6vsmrHgrqVuyJil%2BwHLggIgepAijE5PWbLWFgbK77V2sheXXfPnX3c1AIrj%2FQka5sgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDK9RYBoB1D4Y3%2F2Y%2FyrcA%2B4%2B6VEIqpkVJW2feE3fwNMRw6lRef05aEla6W31pW3aOqaejFlysBPWRr5MhwCNSEAcQzfbE%2FMh1N3kG4VJI5p%2FMEVvz2VL3A2H4jVwCzJ%2Bo%2BOGvNo57DS9Zqy80e388rFLB%2B8ehk3YronauPVZQa8w4yo8mUEWoQ9KJVWKOBbFiodCFqng0WQCBXwo20i5LSva30Ves2%2FKjuHrlbGxbmvQUFPDKqxjEDd1rrrWdOJMxxRz653OjvDlPSlYTSIX5JqXocHTQRJaCGCW0Nw6QmqtQQcVCQ6%2B5%2FSlwerVFH1i5HlsQ1Ee7TRQQE8n3IIbFpda%2FhRL7X76oqz5gp2ADKCggumOtA3s02iCun61ERjdll6szToX%2FAdb9KqQ%2ByL2i7GmU40inuIYtQu%2F8aDZegQ98g%2BjG0kYRvOJJVDT6ol%2FJMGjBF8Y1INEdxaGoF49PkJcK83wmRPvMmfej2FjYbKVCiQq5Q6AW6QU28n%2F98r499gYaA37xwAZMCwkpctMamdJ5LZ%2B%2B2%2B20fn7ouZmg95KYVP%2FUKZ7E0wr7smkCe4Tbn%2BBdZS%2B6WfPkYRF4kPZGoMXtMGFe%2F%2BwUfwPPJdzFW%2FtskZl%2BCKm%2FwlzEYLV0xtCcLimryVKPjMF5gAcMOWiw78GOqUBz9FikBDq3CHVqz4TtEAOR8oTam0eSGA%2BdqIsdbm38%2BxCv1EOXZ6qAg1tqrxWdtYAysGUaYkaE2WP2nbTPmidfD8M6qF3D0sjcA665%2B899piwhZQ0UK8xiHQaBKkrgh5q3TsMJpd%2B1cK%2FM9jnxDOws3MnwRbVF%2B%2Bf7SwpQSYqMdGI%2FbRZHqpVioTinT6Mc%2BdXAqVomhlEAFdhIwV4crLzmbk6BSzH&X-Amz-Signature=c792d71266c38e63a5a9219192cf9f6f3b9c6120fdafe74cc367b927fab018a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
