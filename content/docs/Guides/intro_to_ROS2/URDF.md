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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Q226UK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIqwkq4OMMWA9GFobizNGG7UiRUBC00%2FRwaXQ5Fqy23QIgMfpInSNXqCmSjfPT8SUv6yZsBAbdFkvo8oeXoxmde4Uq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL8NGoA1QExczVSWpCrcAySxusbCusZanY3OmLJ3Bs2LCrb%2Fz2Jy%2BUmTTSuR%2FgUByd90gsmNcCSr50NXtCIUF7KgCiyIDVEx38oGXSQ9cwH4dqM0sjB4sjAh4oIn9JN4Hg%2Fv5KtipDUJw7CJzXw37SScpcYEiC3DKZCVo7fmfP61KIBJ2RJ8hr74vOv8vNPNlxk0GG%2Fc90LR7K1OyaRGZmCSvRfaxr1QYrKsAkgRBnReheWK54mBIpFUqRSZUXUM0t1NAgkz5MOFsDNJzpi%2FDQYuc15YFipfTQwD1M3eSXY1nXQasyAaGSwK6VzNc%2FvHjH6%2BUZrSv8zh%2BE3F%2FZ1S%2Foywv%2BMr3EksocQVupmGbZI0QIaOUJAAHLfSqJcMJr3ysAjXre9bOlnpHHMsOSeux5aryC1cK7MqhFOgEvigykY9OCh2rc09yq0Bv92tndw2Aos3E%2Fa8OL6jq4or018N3c8kffbjpnON3AQTCcEQIIHmy7K3K67auXqBNeb9mZEcPzHyCU7YDRp8n1CdB4BeDxFiBzVz1xtMSNRNhLF363tY%2BB36qpGMHSHG6qP6O87zQkJJ%2FTfY5A8Rv51VAW0%2Fp6qWE3BjYI%2F29L%2B3YCJAdEn9Wg1TjTqPLXbxJAkzEVzm1pkzwZVTLtpsIlDYMK3jv8IGOqUBt5IgUsRCqSZE5K07zBZ%2Bx50IGbhOY%2BM%2BAcuLnSecYBodjEt5zmO6mfWgySTtGe33qp8RL5tV14fQY0zXfmqSlnGSrBbqyI5F4KX0%2F1OiF5kvKSGpw4nyp8A%2FtY476DsxZQjmZIsuxcAV%2BllCYKbhoAxRtMCC04Y3WXlwXmMTmvjIVt46a07R7djf%2F1WKBgCbG31ljSJpoyaTLvc%2BSwaCFao59o9c&X-Amz-Signature=1d15ccb61ab1dbdc8ae53a058364ddc87c34a9d6bf69886758294ece5646f444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Q226UK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIqwkq4OMMWA9GFobizNGG7UiRUBC00%2FRwaXQ5Fqy23QIgMfpInSNXqCmSjfPT8SUv6yZsBAbdFkvo8oeXoxmde4Uq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL8NGoA1QExczVSWpCrcAySxusbCusZanY3OmLJ3Bs2LCrb%2Fz2Jy%2BUmTTSuR%2FgUByd90gsmNcCSr50NXtCIUF7KgCiyIDVEx38oGXSQ9cwH4dqM0sjB4sjAh4oIn9JN4Hg%2Fv5KtipDUJw7CJzXw37SScpcYEiC3DKZCVo7fmfP61KIBJ2RJ8hr74vOv8vNPNlxk0GG%2Fc90LR7K1OyaRGZmCSvRfaxr1QYrKsAkgRBnReheWK54mBIpFUqRSZUXUM0t1NAgkz5MOFsDNJzpi%2FDQYuc15YFipfTQwD1M3eSXY1nXQasyAaGSwK6VzNc%2FvHjH6%2BUZrSv8zh%2BE3F%2FZ1S%2Foywv%2BMr3EksocQVupmGbZI0QIaOUJAAHLfSqJcMJr3ysAjXre9bOlnpHHMsOSeux5aryC1cK7MqhFOgEvigykY9OCh2rc09yq0Bv92tndw2Aos3E%2Fa8OL6jq4or018N3c8kffbjpnON3AQTCcEQIIHmy7K3K67auXqBNeb9mZEcPzHyCU7YDRp8n1CdB4BeDxFiBzVz1xtMSNRNhLF363tY%2BB36qpGMHSHG6qP6O87zQkJJ%2FTfY5A8Rv51VAW0%2Fp6qWE3BjYI%2F29L%2B3YCJAdEn9Wg1TjTqPLXbxJAkzEVzm1pkzwZVTLtpsIlDYMK3jv8IGOqUBt5IgUsRCqSZE5K07zBZ%2Bx50IGbhOY%2BM%2BAcuLnSecYBodjEt5zmO6mfWgySTtGe33qp8RL5tV14fQY0zXfmqSlnGSrBbqyI5F4KX0%2F1OiF5kvKSGpw4nyp8A%2FtY476DsxZQjmZIsuxcAV%2BllCYKbhoAxRtMCC04Y3WXlwXmMTmvjIVt46a07R7djf%2F1WKBgCbG31ljSJpoyaTLvc%2BSwaCFao59o9c&X-Amz-Signature=7a7ef32ad0e395f3264b17f21fd5a3e91a1771a597febbcb2a8bb8d5ce6635d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
