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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTQDQJ2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg1Afb0ZwiyU18L0JREKtCE1j2%2BvDzNzVopKCx1c%2FdLAiAw8yPdRAQcJZfHvYi4pO4YVsL0hR4UG4cXTD1aTQHXFCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmXIMg%2FMD3m7%2B4ESuKtwDsYXCtwqsyfsdExbmO%2FbTBqH%2FGLPR3j0I7m1LVtJmCm63WR90yS2m2FmkaoC5dCUMVunujUi2pncHj1Vrfk0pvhvH0VsJyZNGxT%2FGwMA6VBz3FfGPzAYH%2FW7LGjF0mn2oiOyQI8UXIsU4kIYc%2Fc%2FCSHS%2FqRyqsyDFiQWf9LRyyrIbYu97QHcCB3QMWexcsckxBrckwuUbBcaOv%2B3x7fBnYuTJoOfi3UXzlJL2ak5iQrdgL7lgtDSwy%2Fg91tYQ837z2RyDn3sH9FQ5E4J%2FdtHMSH3JuTqnegosJV1wMvYtZThZ2NUEAyf09CLfB9p5cyj93hcUCgpkTbLGRzwH2pzkM6uEyr2W76SfqkCmYJaEWgHrdUf%2BD55eGHJSElPs4qeELd9jvc7GSkT6ZVwXhBFyYQkqstVqmdtC0YhWursichjJWd8BqGCKK%2FWrN0BYY6YtupgHyGhBS%2BOKCxAIBbbDJZvKuOBU7zH49avaYsFLLd2MdtzxqC%2FsEvwDNHm2hDytnz3C%2BW%2Fpj25%2BBEXppIrbT5S3gZklu5N0sUG0TlEcp425LYt4AE3cI%2FzW5Trr7JYlrm57SwFD48RnVMBID9yXxHYPfavMayjZB3Qy15gflEY7I4RqUJBfdeqFhvkwi%2Fv2vAY6pgEXMRMhwIAjVqYPOpIbXO6qrci%2Bt%2FnKKxL5h5bnrSVOjX5rIikkfwDUUFCXjP0TOaUP%2B5aQNzscT62CcbRhV%2Fl05xiLl4MYn54NRFg6GbAgbv2DLVOM6y0DlPkoivkXf93pOr4bCEqzbduD4YYbuXF4oCwxSr%2FycU%2BwGKZ5DAQ1EBkl0v8Fy3Z32P%2FayEF2ngne7rQpdJvwxu31x70JwROD1Q7cfnU5&X-Amz-Signature=ae85055765ce7de8bd57ee71b9cc28c22b9a11703d2aff908f425d16a9381bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTQDQJ2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg1Afb0ZwiyU18L0JREKtCE1j2%2BvDzNzVopKCx1c%2FdLAiAw8yPdRAQcJZfHvYi4pO4YVsL0hR4UG4cXTD1aTQHXFCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmXIMg%2FMD3m7%2B4ESuKtwDsYXCtwqsyfsdExbmO%2FbTBqH%2FGLPR3j0I7m1LVtJmCm63WR90yS2m2FmkaoC5dCUMVunujUi2pncHj1Vrfk0pvhvH0VsJyZNGxT%2FGwMA6VBz3FfGPzAYH%2FW7LGjF0mn2oiOyQI8UXIsU4kIYc%2Fc%2FCSHS%2FqRyqsyDFiQWf9LRyyrIbYu97QHcCB3QMWexcsckxBrckwuUbBcaOv%2B3x7fBnYuTJoOfi3UXzlJL2ak5iQrdgL7lgtDSwy%2Fg91tYQ837z2RyDn3sH9FQ5E4J%2FdtHMSH3JuTqnegosJV1wMvYtZThZ2NUEAyf09CLfB9p5cyj93hcUCgpkTbLGRzwH2pzkM6uEyr2W76SfqkCmYJaEWgHrdUf%2BD55eGHJSElPs4qeELd9jvc7GSkT6ZVwXhBFyYQkqstVqmdtC0YhWursichjJWd8BqGCKK%2FWrN0BYY6YtupgHyGhBS%2BOKCxAIBbbDJZvKuOBU7zH49avaYsFLLd2MdtzxqC%2FsEvwDNHm2hDytnz3C%2BW%2Fpj25%2BBEXppIrbT5S3gZklu5N0sUG0TlEcp425LYt4AE3cI%2FzW5Trr7JYlrm57SwFD48RnVMBID9yXxHYPfavMayjZB3Qy15gflEY7I4RqUJBfdeqFhvkwi%2Fv2vAY6pgEXMRMhwIAjVqYPOpIbXO6qrci%2Bt%2FnKKxL5h5bnrSVOjX5rIikkfwDUUFCXjP0TOaUP%2B5aQNzscT62CcbRhV%2Fl05xiLl4MYn54NRFg6GbAgbv2DLVOM6y0DlPkoivkXf93pOr4bCEqzbduD4YYbuXF4oCwxSr%2FycU%2BwGKZ5DAQ1EBkl0v8Fy3Z32P%2FayEF2ngne7rQpdJvwxu31x70JwROD1Q7cfnU5&X-Amz-Signature=2b3697f603ca67a99ccb5de9d82c1560f3c850fed60ec18f450765de5e891c84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
