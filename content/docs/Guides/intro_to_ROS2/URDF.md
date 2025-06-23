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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ASDQPPE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD4w3oxsIJzN50LySNCLShgrZGS3SPwvm%2F%2Bkw6mU2Q7ugIgKLLcJFnZGjQM6jouwef9Dg%2BnKiVNOfapsyg9oFd%2BAYMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLKQ307e0eoDXKmdSrcA0rjs5yglT8tFPazmsFTNFhQziMorELvOvwkMvpEmSlA8R4fjlMZiNBqpPhmY3Wm2qt7LAr7cDoyPIB8zLhA1jmmSvHvzaxjMKm%2BUDhIjocCHqSbjFyx%2F%2FwcJ0oDmQvjbjfsqFGGiTC%2FvMHzeVvdyWbWEQAJEMIObRXzQ2vIVJ3u3OSMbDx94cJYX9F947f%2F4UppMF28gs4%2FZcV8eEFzx2Y0tjJLfNCeFSzGy1QrTTQZ%2F5psXXjZwE56vFhK36XdNFmPtxCjj%2FiCH0ZRA0qH1zzqk4YKFrTClCTF9lpv2RlMguhEyey1eA8GQSymmzOIBqgyVlyknvMHodKLXw%2BfPy5Ja8lqcJOCVP45mL1DjuU%2FrbKD9bvwwB%2BxVw8TgQhZm4kFblquhbpSaxKbIYary37VEzm0hhJyWl0znqe3Xl5wkQ6h8q6NAWexX%2BEK0EBzoqnZR1STWh6nMjO7KPa%2BS5%2B7EsVUHBKKzzf5WjAOozgtSIsN2U7W9elgOWMFSpZu0vld9xrnB69FIPFVyj0kaDaEqvbkLS7rr4diQka1qJUbV1On36q0XFjHIl1g8ae%2BbgXqT8FnM8fgM1QqgtJhoPDFQBSVkkPRLU013TZubNPj1%2F5wHvF1bxZ5QIyJMLnL48IGOqUB7AYmJda838EuonLSHEXlHe%2FAxHo%2BNaIuzgua3FAILkTuE9XP4xmVcwXcXBAtyxdWfig5kImgvzMbETF0DTJ9hSp6hbo7L0wKJG06mz6K2cp9DvbeulA2kktkO9mn0brXJuHjk52TxfYgHeQAyysoRhxy12chDQz76uB5ENksCm9iHqovgdzrug1xOKVlFB1EW%2FIR8o%2FLWpNbCgYMbBe5%2Fo%2B5d7Ni&X-Amz-Signature=af4381bbe960b10761dfe57b5593d70a8093c30aca30025699bab8756ec0aa5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ASDQPPE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD4w3oxsIJzN50LySNCLShgrZGS3SPwvm%2F%2Bkw6mU2Q7ugIgKLLcJFnZGjQM6jouwef9Dg%2BnKiVNOfapsyg9oFd%2BAYMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLKQ307e0eoDXKmdSrcA0rjs5yglT8tFPazmsFTNFhQziMorELvOvwkMvpEmSlA8R4fjlMZiNBqpPhmY3Wm2qt7LAr7cDoyPIB8zLhA1jmmSvHvzaxjMKm%2BUDhIjocCHqSbjFyx%2F%2FwcJ0oDmQvjbjfsqFGGiTC%2FvMHzeVvdyWbWEQAJEMIObRXzQ2vIVJ3u3OSMbDx94cJYX9F947f%2F4UppMF28gs4%2FZcV8eEFzx2Y0tjJLfNCeFSzGy1QrTTQZ%2F5psXXjZwE56vFhK36XdNFmPtxCjj%2FiCH0ZRA0qH1zzqk4YKFrTClCTF9lpv2RlMguhEyey1eA8GQSymmzOIBqgyVlyknvMHodKLXw%2BfPy5Ja8lqcJOCVP45mL1DjuU%2FrbKD9bvwwB%2BxVw8TgQhZm4kFblquhbpSaxKbIYary37VEzm0hhJyWl0znqe3Xl5wkQ6h8q6NAWexX%2BEK0EBzoqnZR1STWh6nMjO7KPa%2BS5%2B7EsVUHBKKzzf5WjAOozgtSIsN2U7W9elgOWMFSpZu0vld9xrnB69FIPFVyj0kaDaEqvbkLS7rr4diQka1qJUbV1On36q0XFjHIl1g8ae%2BbgXqT8FnM8fgM1QqgtJhoPDFQBSVkkPRLU013TZubNPj1%2F5wHvF1bxZ5QIyJMLnL48IGOqUB7AYmJda838EuonLSHEXlHe%2FAxHo%2BNaIuzgua3FAILkTuE9XP4xmVcwXcXBAtyxdWfig5kImgvzMbETF0DTJ9hSp6hbo7L0wKJG06mz6K2cp9DvbeulA2kktkO9mn0brXJuHjk52TxfYgHeQAyysoRhxy12chDQz76uB5ENksCm9iHqovgdzrug1xOKVlFB1EW%2FIR8o%2FLWpNbCgYMbBe5%2Fo%2B5d7Ni&X-Amz-Signature=a3b0e6c97f7edd4061bd8aeed7fcb4ba92cbceafcdf7559cc1b0282760b5655f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
