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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VA4QO27%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA85H1DPOLTgera7d0EMIFr226UK3lLoJdtB8Glb%2FWwLAiArVd1a6gSClta6MAchmKiOBZ0iIms23UE8OSsdPTKuqSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMj8SIfZ65qISAK8aGKtwDrXarevVJ1kacCMc87nTJDEJRRszwUvH%2FJLEZt7l1Ak59nDp6pExs6vHkLqLEn%2FloweiAA%2FGeIG2XjjE%2FbndKL2jJ4p07jZufZNLjXcDvdrLRmzTegjvBn54ege3PtUz9LCBxqHXmlCr5VSOtb7nAvMLF6sKMm5wtqL0bFomORo9GamILvnfINNe6%2Bgnd8kiRTMGnXO5FLTr%2FXE1lLNyRdvzwZJ0pT%2Fk06QOP4oDaYNmd1jID%2BmBIKeoykq1ujZjjcBLCSVQhrLHXqzMsQVjUWpFRPd2rBoCioLNE2YKOdYaX2OBBf3QsCdTvaBXfLAKkHYEACeubm035lvw60XoBjYJBg81gocfbrOrO%2F3tn2MX%2FGUNGkvLEg25Yb19M6GmWUAvQRHgmXw8FUu5J27YI1dVnXEysS1IaT2VNMNAYuAAwfGZWmB0VHxIoWptB63JKPMMuC682zNfwlG1mvzSgz50Ae76BpmollVIHwyRoxsVH639Me9Hz5dArbGpgQy35uUIZkNbthdDHwjwBvm4lDqwHqADXCpZ3MXrF3Ow4A4f7po2sGmWzePm6dJK6YyspF8Ur8AaykC%2FerM%2BAtfQBuAcT%2ByQN4rHR3PYA5BGii9UtvOknaHmMaI3OZqEw2bDlwAY6pgEJmrKI1HXgMBEKCfVGvFu5mo33qSx3gsAZkrUyKGAs04ryy%2BSn9spnCSvV9NDneNiFToNUCkcz2hF8FeVzoNb5d0wLpL57l4isCsVRjUIdBtDLiPFnb6gdCOIo1K34P9BsG3opY8BKaccrwXM%2BctRYMBbDhqNMA0lvfZzYQdL7O8%2FUOEi2dPoSCPNHdesh7Gg9Q84jXZnyp9sJNpsltoQYrQOYxikf&X-Amz-Signature=e6d13ae8901abcd7f131532a64260639bfe42ce3cadb79fa770b1bc2e7c5c311&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VA4QO27%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA85H1DPOLTgera7d0EMIFr226UK3lLoJdtB8Glb%2FWwLAiArVd1a6gSClta6MAchmKiOBZ0iIms23UE8OSsdPTKuqSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMj8SIfZ65qISAK8aGKtwDrXarevVJ1kacCMc87nTJDEJRRszwUvH%2FJLEZt7l1Ak59nDp6pExs6vHkLqLEn%2FloweiAA%2FGeIG2XjjE%2FbndKL2jJ4p07jZufZNLjXcDvdrLRmzTegjvBn54ege3PtUz9LCBxqHXmlCr5VSOtb7nAvMLF6sKMm5wtqL0bFomORo9GamILvnfINNe6%2Bgnd8kiRTMGnXO5FLTr%2FXE1lLNyRdvzwZJ0pT%2Fk06QOP4oDaYNmd1jID%2BmBIKeoykq1ujZjjcBLCSVQhrLHXqzMsQVjUWpFRPd2rBoCioLNE2YKOdYaX2OBBf3QsCdTvaBXfLAKkHYEACeubm035lvw60XoBjYJBg81gocfbrOrO%2F3tn2MX%2FGUNGkvLEg25Yb19M6GmWUAvQRHgmXw8FUu5J27YI1dVnXEysS1IaT2VNMNAYuAAwfGZWmB0VHxIoWptB63JKPMMuC682zNfwlG1mvzSgz50Ae76BpmollVIHwyRoxsVH639Me9Hz5dArbGpgQy35uUIZkNbthdDHwjwBvm4lDqwHqADXCpZ3MXrF3Ow4A4f7po2sGmWzePm6dJK6YyspF8Ur8AaykC%2FerM%2BAtfQBuAcT%2ByQN4rHR3PYA5BGii9UtvOknaHmMaI3OZqEw2bDlwAY6pgEJmrKI1HXgMBEKCfVGvFu5mo33qSx3gsAZkrUyKGAs04ryy%2BSn9spnCSvV9NDneNiFToNUCkcz2hF8FeVzoNb5d0wLpL57l4isCsVRjUIdBtDLiPFnb6gdCOIo1K34P9BsG3opY8BKaccrwXM%2BctRYMBbDhqNMA0lvfZzYQdL7O8%2FUOEi2dPoSCPNHdesh7Gg9Q84jXZnyp9sJNpsltoQYrQOYxikf&X-Amz-Signature=f66f66a1a3199c641b9f90fd1688b0575d74d5c5bf3ac6b43a9baa30736f027b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
