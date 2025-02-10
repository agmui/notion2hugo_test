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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG7AUSI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN2BqUMDxouZEZFMiDkrWJlWC7eUzNzkW8E58e4O7%2FLgIgbLkEkn2IgDhwL%2BDuUSrzldz%2FwqGKyEPjCXkfKHmA488qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC5Io2paJZw4sJg0yrcA%2BCzecVbLnLwc9F9T9c%2BtsrjWFaYiZyklGsqxJnOlymap4sXSxylo81JFEqdYc5Dor%2F1Lsv04xCwl92hH88U8JJeJclX0QhLzzzRXxqcsOcYXYhIxxSUVnteQM7OjWeVdKO4j2sOqGU31hQ4AeiAhy2WywcBfinfTC9VeGaaz1htUI%2BZ1Izmdne%2FjiQY9H%2BQ54YoSSeeIezi4aqCJmpFZEzaXpXAlhJEIsGkHl2hvgw8T39esR9KP8KUc%2BrKX6zFXU0%2FNPhG3Mzxo2iqDGwdMOZ6kHgpIWWYY%2BeeqLoIktbnK1TiFyERPCxWwQftwwqDW%2F1G5aun%2F9RdxQaLjPcsRCD0Bupfgn%2BpicjaQVLzAWltBNkZlk17N5SL2bT7L9%2FhMNXRfPWlwJN%2FqROhwfqibzwL1yZvBApEN5yeqYyU1K9OJqzI6EH4z6gjWEE0q6lyWFrJAj9EkvKkqZMtSHMtkmlZUplvQVSIjOLSN89hAqY1m0bzIOHm0g4YOfOIX2nOc4Xhu43KkAGxc2obHkhyRKRcqXN3XqaabOWA6Yfa60tUzXaJzLREt6DeBYgKo6OkiIR5Bne4Xw0qs1AqjyqMHQYa8Dl4KY5aZ9fPHwO168KxHodIp88EGO9XzhUvMLrNqb0GOqUB%2BJP39fVX8ysAw9NuvagxgSisGRrQ5w2V5NpNSuTHz8r85ahAoqsRL9v8hYhyLs0oSbciTmjAX5o8mi798Pu4fheDQaR42xHAatH4HfswTNHi81R%2BF5VysCF42UjtgxG3UnCMHpQrHnh%2BwDaGSFehclnizYPcUWRYHD3DaVphhtJAJ09xqwG5M0YU9fNLXAg6vIEFHKyFwgpctsXtuX%2FhmGRfAhPs&X-Amz-Signature=bc92fe402480a6640fcf3d586ddbe87c088ead510211a3f625d94fecb7aa4a22&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG7AUSI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN2BqUMDxouZEZFMiDkrWJlWC7eUzNzkW8E58e4O7%2FLgIgbLkEkn2IgDhwL%2BDuUSrzldz%2FwqGKyEPjCXkfKHmA488qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC5Io2paJZw4sJg0yrcA%2BCzecVbLnLwc9F9T9c%2BtsrjWFaYiZyklGsqxJnOlymap4sXSxylo81JFEqdYc5Dor%2F1Lsv04xCwl92hH88U8JJeJclX0QhLzzzRXxqcsOcYXYhIxxSUVnteQM7OjWeVdKO4j2sOqGU31hQ4AeiAhy2WywcBfinfTC9VeGaaz1htUI%2BZ1Izmdne%2FjiQY9H%2BQ54YoSSeeIezi4aqCJmpFZEzaXpXAlhJEIsGkHl2hvgw8T39esR9KP8KUc%2BrKX6zFXU0%2FNPhG3Mzxo2iqDGwdMOZ6kHgpIWWYY%2BeeqLoIktbnK1TiFyERPCxWwQftwwqDW%2F1G5aun%2F9RdxQaLjPcsRCD0Bupfgn%2BpicjaQVLzAWltBNkZlk17N5SL2bT7L9%2FhMNXRfPWlwJN%2FqROhwfqibzwL1yZvBApEN5yeqYyU1K9OJqzI6EH4z6gjWEE0q6lyWFrJAj9EkvKkqZMtSHMtkmlZUplvQVSIjOLSN89hAqY1m0bzIOHm0g4YOfOIX2nOc4Xhu43KkAGxc2obHkhyRKRcqXN3XqaabOWA6Yfa60tUzXaJzLREt6DeBYgKo6OkiIR5Bne4Xw0qs1AqjyqMHQYa8Dl4KY5aZ9fPHwO168KxHodIp88EGO9XzhUvMLrNqb0GOqUB%2BJP39fVX8ysAw9NuvagxgSisGRrQ5w2V5NpNSuTHz8r85ahAoqsRL9v8hYhyLs0oSbciTmjAX5o8mi798Pu4fheDQaR42xHAatH4HfswTNHi81R%2BF5VysCF42UjtgxG3UnCMHpQrHnh%2BwDaGSFehclnizYPcUWRYHD3DaVphhtJAJ09xqwG5M0YU9fNLXAg6vIEFHKyFwgpctsXtuX%2FhmGRfAhPs&X-Amz-Signature=c4a6fed3172921a793e5610e6530c5738ab49bbf54c9196c1634257e1cca37c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
