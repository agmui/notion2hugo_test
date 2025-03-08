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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TPLIQP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICpJ%2FSutLDfsF7KfZSVORBPIrmRUyjUyQEg5wfFpI86cAiEA7JgERyulQgH8SChCt78GWoLPUTxessz6sXYt%2FvDOsdsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNFMLXoZ9UNMZo0UCSrcA40g%2FY6Cj9uConzu%2BWcX8HscHOtbIC%2B14YShtbl2FXghQ4pG6LPB7WXoFUXXvFXgd7dM5h82SkQWI36Mx1mg7hsxpWHGzojkGptyPVuPPUcmmg2oAAkoVTg%2B17ojWTCX4QjECMlXQu6HPLpvTAZMIuv2ZquABHhF%2BRJvrfep4afbQtdWxq42EA2TYMbYS6IpP%2FAZs3Hqgf8nNmhOCWPoIqmaeV8Sja9LLzWpB5rAxIyXqjhQizD1cdOtTEVsIc818WmCuLdso3wG0ggw4GfJca9X0pbq3xhxtU40%2B7LV7Lj10L9rMiWR3nHz0ZIOItwQxwcZq7dIFKLWhuAx2vjj7HNH75WsTfFYiBD5YUbmGVrvq4xDRv2uGFQcKzemDcaHeKR5h0ee3lwnuiOYxT%2Fs3hYFzCeMQqFOdvprn%2B8ebx7QZNlKn9aeAZ5pvaxrz3Zmtp9kBCXC5yjVh90iRR8qaaBsfoT4JBYNC9399OU9ttnQDHZVVlz9D2fDAydHOr7LG6NaMRZ5n%2FkIjxO2eX7CkfZsBl6c1bkaQvlE5cI0xZke8Vk9cl7yFnebsODrsHPXzec9HsxNmvOJHhLtM755aWU0qb%2Fts3nGEDtatjzg19Co3S2MMu1wf10UfJ3DMKb%2Brb4GOqUBiojuNbO5RFpdMdxcTBeL5JDf%2FiHZi4Rx4rofssx%2BfDt56mXJ9v5xlzukpL4KrHEUt%2BGIVDQut00VCNkr303mFk1S2vlzUYNn5PeBTC6uyWc3fHlJ5oekRV4T2G1DaEcLqB2j48q5DLOXjfzTR%2BlpAO6KtP%2BJyG6rziae0aDequYTtWWelVLIFo7%2FjbskBkl1NkrTvoNQ99DVe%2FK2Li1FobNZuPKN&X-Amz-Signature=84cd911193b42ac588bfb27bc245a8d4cf7dc8fcd652346d456b29970d65aedf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TPLIQP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICpJ%2FSutLDfsF7KfZSVORBPIrmRUyjUyQEg5wfFpI86cAiEA7JgERyulQgH8SChCt78GWoLPUTxessz6sXYt%2FvDOsdsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNFMLXoZ9UNMZo0UCSrcA40g%2FY6Cj9uConzu%2BWcX8HscHOtbIC%2B14YShtbl2FXghQ4pG6LPB7WXoFUXXvFXgd7dM5h82SkQWI36Mx1mg7hsxpWHGzojkGptyPVuPPUcmmg2oAAkoVTg%2B17ojWTCX4QjECMlXQu6HPLpvTAZMIuv2ZquABHhF%2BRJvrfep4afbQtdWxq42EA2TYMbYS6IpP%2FAZs3Hqgf8nNmhOCWPoIqmaeV8Sja9LLzWpB5rAxIyXqjhQizD1cdOtTEVsIc818WmCuLdso3wG0ggw4GfJca9X0pbq3xhxtU40%2B7LV7Lj10L9rMiWR3nHz0ZIOItwQxwcZq7dIFKLWhuAx2vjj7HNH75WsTfFYiBD5YUbmGVrvq4xDRv2uGFQcKzemDcaHeKR5h0ee3lwnuiOYxT%2Fs3hYFzCeMQqFOdvprn%2B8ebx7QZNlKn9aeAZ5pvaxrz3Zmtp9kBCXC5yjVh90iRR8qaaBsfoT4JBYNC9399OU9ttnQDHZVVlz9D2fDAydHOr7LG6NaMRZ5n%2FkIjxO2eX7CkfZsBl6c1bkaQvlE5cI0xZke8Vk9cl7yFnebsODrsHPXzec9HsxNmvOJHhLtM755aWU0qb%2Fts3nGEDtatjzg19Co3S2MMu1wf10UfJ3DMKb%2Brb4GOqUBiojuNbO5RFpdMdxcTBeL5JDf%2FiHZi4Rx4rofssx%2BfDt56mXJ9v5xlzukpL4KrHEUt%2BGIVDQut00VCNkr303mFk1S2vlzUYNn5PeBTC6uyWc3fHlJ5oekRV4T2G1DaEcLqB2j48q5DLOXjfzTR%2BlpAO6KtP%2BJyG6rziae0aDequYTtWWelVLIFo7%2FjbskBkl1NkrTvoNQ99DVe%2FK2Li1FobNZuPKN&X-Amz-Signature=e8f98bdd57d9900fb60f8503785a51dd15425a9bdfd3ee8a521d94aec4f38bca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
