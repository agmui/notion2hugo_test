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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR33V6QK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDwPsW2QKapweM%2Bri%2FxuexjEo9%2FLjNzl4VUe2Y4ayYb3gIgFSZCt%2BUBPjbaKd8tWAqqHUkOlp5u%2BkFWGwHD0C0fyFwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKj%2BHbbdOc%2FL%2BYbL0yrcA%2BOM59XI6PNIKSOlzEZcHFasynxWdnJjiTaOM04N1ZOI%2BxliwpKoLt05u6uMxoJ8Ga%2BS2WpabCGLnqR%2BFRBwIgDKz8WFFVib0rR5bK%2B9bzyNqgI12NLL3%2B39AhJ%2FoY5LFYMdGAKV8T%2FSWmjuvWWiRw%2F%2FLJhp8DwOogR5dA8d2Cqzep7A1LhtttrPeRGbZOEVLHkk0D8y2MXZh9qhG7E6cbyZqlkaw1yU2LMwnVP5MbV7ZKngMVY5VHV3WscjY9Y8qhXVHRGSs6tn8HtZwX%2FvFF9iufGIOoT9YPkffRBzrQS6SfnCfZli6yAqjSW2fZ5wTSnJ9R5jha5Q9wfR5VW6KozjPT76PiBMY5HGXb%2BQl6aRP8lmqNedOj9Yg6o9Za3W0WPvincU6Z8%2B5dbfI%2FLnnN%2Bnn3MipcQ6ocy3y2uoOv0OXU%2FXTpvcxxHx0Cbg9rIksf8a5nu1XQ73Ma3kbS03ocr1za6yedNEyNCZEzEzO7jTPEi8DxQWRYcJLTP103FKHoJBVZaUTu6yx1n%2F7h7PB7EdzL5960zDVjAb17ZjEA20NSYlU2sqT3aJzN1J9T8KUSXqnku99J0te9GpWsUWHZ%2BI5ty3Gfo0td%2FGNKyGekZgsJgDpvS7eDt33LTsMMS8674GOqUBLcYvMlyB7cvd%2BMWyF%2B8foiwFb5yKBGqAYEzf%2BjSuei%2Fjw%2Fnb4j9Y%2BNUvWPimYI2F2WUiJBCVYOAwZ1ayWs7tq2S9CPFPrMb63OP5XNiloz%2FIqQVnTXYqJGDim%2FHetcZ1Ig5nkC6WBfTH9hJnpeE2lcgFbln%2Bio5oI0UaxC4FgJUahrfvoSXIfIZMvmZis8gtBzeZeYCg3M1P5o7mmGAPlfM%2BePdY&X-Amz-Signature=2587557498b77cb60db2e851e52c2f03f447ac8855d8715ccea895fce7db44d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR33V6QK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDwPsW2QKapweM%2Bri%2FxuexjEo9%2FLjNzl4VUe2Y4ayYb3gIgFSZCt%2BUBPjbaKd8tWAqqHUkOlp5u%2BkFWGwHD0C0fyFwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKj%2BHbbdOc%2FL%2BYbL0yrcA%2BOM59XI6PNIKSOlzEZcHFasynxWdnJjiTaOM04N1ZOI%2BxliwpKoLt05u6uMxoJ8Ga%2BS2WpabCGLnqR%2BFRBwIgDKz8WFFVib0rR5bK%2B9bzyNqgI12NLL3%2B39AhJ%2FoY5LFYMdGAKV8T%2FSWmjuvWWiRw%2F%2FLJhp8DwOogR5dA8d2Cqzep7A1LhtttrPeRGbZOEVLHkk0D8y2MXZh9qhG7E6cbyZqlkaw1yU2LMwnVP5MbV7ZKngMVY5VHV3WscjY9Y8qhXVHRGSs6tn8HtZwX%2FvFF9iufGIOoT9YPkffRBzrQS6SfnCfZli6yAqjSW2fZ5wTSnJ9R5jha5Q9wfR5VW6KozjPT76PiBMY5HGXb%2BQl6aRP8lmqNedOj9Yg6o9Za3W0WPvincU6Z8%2B5dbfI%2FLnnN%2Bnn3MipcQ6ocy3y2uoOv0OXU%2FXTpvcxxHx0Cbg9rIksf8a5nu1XQ73Ma3kbS03ocr1za6yedNEyNCZEzEzO7jTPEi8DxQWRYcJLTP103FKHoJBVZaUTu6yx1n%2F7h7PB7EdzL5960zDVjAb17ZjEA20NSYlU2sqT3aJzN1J9T8KUSXqnku99J0te9GpWsUWHZ%2BI5ty3Gfo0td%2FGNKyGekZgsJgDpvS7eDt33LTsMMS8674GOqUBLcYvMlyB7cvd%2BMWyF%2B8foiwFb5yKBGqAYEzf%2BjSuei%2Fjw%2Fnb4j9Y%2BNUvWPimYI2F2WUiJBCVYOAwZ1ayWs7tq2S9CPFPrMb63OP5XNiloz%2FIqQVnTXYqJGDim%2FHetcZ1Ig5nkC6WBfTH9hJnpeE2lcgFbln%2Bio5oI0UaxC4FgJUahrfvoSXIfIZMvmZis8gtBzeZeYCg3M1P5o7mmGAPlfM%2BePdY&X-Amz-Signature=952f615e83f1b2b4d3340559546ee8a3697845a9a88f1a298b5a5953cdbbd0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
