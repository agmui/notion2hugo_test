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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LX6LGVK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCwPp2I0MQCOoGkNELqX49fpqIPLGV1Hu%2FrEil%2BToiQmwIgDP%2BSOCTupT6s8wtkae0dA86TOg5xbpMRJaGv4JwfhHEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhqAXeFiXbNH%2FXc4SrcA05UKizXnaLVmnjdcB0moiPGZMfpK7t5nj7Vqg%2Funy7h4wMe2bdEjJpt%2F%2BRLfEo%2B5jnacu09ZTQJ1p41kFLw86Ba%2BdPDdyf0PQ1WgsbqoZ4zt3FSPBT1xOfdmQnxxMnBcim8RE6OPhv2bpQTATSMfJM3qE%2FS6DvUkKN05YP3T7jAFJ2nnsJnw1Vs%2FJ2epMAjtncAmna8x24aa0a9JBd2lndhk9drmSGMM6KGfieDlOhIt8toLIN3ApK0Vul2XX5aNeGcQ%2FNG2IbbNDhieVmZy67I8xVovHJppIwP%2Fj74eGv07uyRlb5l9v25E5FirYS01a02HO8PY6MIkFzH7NL1tOTHErOFWPMR6HzlLHvidi4y5X1kDTxUnCVnsmwXD%2FdASIl2%2FEtWwBBoah0MA%2B5WT%2BJkOhMXTPCttx%2FKPqjcQnoRbtlIprRjiCUKJe4pBbCzxQxoOt3eICcFdoN1QUhldNVUGeRMGOM3MBa9G44rQK598RB%2FO%2F7aKEzUA5GwMpEfGFm9MDUOYrPYtKgn%2Fl8OKEa2uzE6Y7VHDU1e%2F8k3Rf%2FHqxVDVVcXWLHv6BBSkXRls%2BN4O6ZcEmobebUCAbK2u9EqdobtRvmYKnW7pXM%2BgWFzLjDSFvCl%2BbLxHolSMNTEhcEGOqUBwMnfyB4Uv%2Fsf4sWCXI38XztOPb2UpbY%2BQq5y%2B53hzTD4Oj9jPKLkixbzY7nP2exoehAqtKstv7WyEIiJdFLbUml8aPOGdS4gVoH8D0fVvBckQ6munBre4oPvvq2n1VZIFhslnBGIGXcSWBU7z3YWYfjyfkuDMWGaHCtH9bd8SXJTY9uU920vNYVXDYZnaE8udwukQLrobmd2SHtR3tkam%2FDeglL6&X-Amz-Signature=17aa85c920b7f4c5bd96cc6c727d6285b64031f17e2f0d4d12dd9bc6bdf8dd87&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LX6LGVK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCwPp2I0MQCOoGkNELqX49fpqIPLGV1Hu%2FrEil%2BToiQmwIgDP%2BSOCTupT6s8wtkae0dA86TOg5xbpMRJaGv4JwfhHEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhqAXeFiXbNH%2FXc4SrcA05UKizXnaLVmnjdcB0moiPGZMfpK7t5nj7Vqg%2Funy7h4wMe2bdEjJpt%2F%2BRLfEo%2B5jnacu09ZTQJ1p41kFLw86Ba%2BdPDdyf0PQ1WgsbqoZ4zt3FSPBT1xOfdmQnxxMnBcim8RE6OPhv2bpQTATSMfJM3qE%2FS6DvUkKN05YP3T7jAFJ2nnsJnw1Vs%2FJ2epMAjtncAmna8x24aa0a9JBd2lndhk9drmSGMM6KGfieDlOhIt8toLIN3ApK0Vul2XX5aNeGcQ%2FNG2IbbNDhieVmZy67I8xVovHJppIwP%2Fj74eGv07uyRlb5l9v25E5FirYS01a02HO8PY6MIkFzH7NL1tOTHErOFWPMR6HzlLHvidi4y5X1kDTxUnCVnsmwXD%2FdASIl2%2FEtWwBBoah0MA%2B5WT%2BJkOhMXTPCttx%2FKPqjcQnoRbtlIprRjiCUKJe4pBbCzxQxoOt3eICcFdoN1QUhldNVUGeRMGOM3MBa9G44rQK598RB%2FO%2F7aKEzUA5GwMpEfGFm9MDUOYrPYtKgn%2Fl8OKEa2uzE6Y7VHDU1e%2F8k3Rf%2FHqxVDVVcXWLHv6BBSkXRls%2BN4O6ZcEmobebUCAbK2u9EqdobtRvmYKnW7pXM%2BgWFzLjDSFvCl%2BbLxHolSMNTEhcEGOqUBwMnfyB4Uv%2Fsf4sWCXI38XztOPb2UpbY%2BQq5y%2B53hzTD4Oj9jPKLkixbzY7nP2exoehAqtKstv7WyEIiJdFLbUml8aPOGdS4gVoH8D0fVvBckQ6munBre4oPvvq2n1VZIFhslnBGIGXcSWBU7z3YWYfjyfkuDMWGaHCtH9bd8SXJTY9uU920vNYVXDYZnaE8udwukQLrobmd2SHtR3tkam%2FDeglL6&X-Amz-Signature=1b0418695a0da80559d1a474ab25fbe984f9c14a1ba36a58985ee68b602c39e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
