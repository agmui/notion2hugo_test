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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSDQFGJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDrEim5YyOsdFtYwp1YJVyVfVoznPVVWxK5htt5xvSeQIgXDiEaWPxUrhb1yA8ag5Kispwm7y2mP6GvbiVTuTX2JcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuATIheoVcEqJzooCrcA98opiGZnwt7PHI9B%2BXkTzRcxp1zx4lp9X0Att0Q69ovwgn3m57nNyKeV7WqoZouYSD6RptlB5uYTvyCGl%2FjT1TVpa21WpN%2FO7%2FMOxqQioPj79SsTdqijnJL8bONuIFq6CmXwDZtiyawZ7hEuZOH2vgpMv6FJZcnXWr6iluqXs5Vv8g4WwRZSxAWILOhE7NlYhuWskH9LP2sik3carZB5T60UJOm753Ypy%2FkJ%2FTMEDiQS%2BaW5RQwJfewGynHZZvS01yBBU%2B8qTZqQlU88Wbn5nQoKAQwfDNxK8VTda8TdVjHDtyRt%2FosF8Xvlx7KwPWRvedQGhdZ627XMUezeXlLvtJNbioBUq1dYwnNGbvn9aW%2BQqtRYiB%2BvYz3UTQRpHP8%2BRmhAdzJSets8kvNevjRgWToxLHLBTsHXOq%2BUDslW0XSaXdsIAHQOdu9EfHxbE9cKYv%2BKL3aPhAH1xML2k1fThtCYGNIHquznhoJfJLCs7ftsNW8cTFb3Gct04TtIepiIypH5I8Yk3k4Xf1JyzmIQiXCLOLpT%2BwuLvNAzuEDEe39ALvqoqejmiG53cIryPUfq5V1KEPBQBH43N%2FF%2F8GsxzvJufzQzKw7w167eLwuAmLll8nU7t9xntvsRfd0MJGi0b4GOqUBEbCOTCofIrX%2BIL1N7ZWXUZPXnF58Lvz%2F%2Bjs9BcTw7YXJg9HiAuwa62RA9rAPK%2FRMSnn21GF3M0dcc4BQSmjpPiGRfm94aqXM2%2Bxpast%2FC5NRv91NogIEPq4iJCSc8LrMaeHX47jbNay8SfIiThJiBYxyYZsfvsDP7I4RFcPPB144gAxHcsdOmk704nq98aY3NRr30yHcgfvjGsquur0ThUH16eS0&X-Amz-Signature=248290332bc6bdae8a88de96872378956fff7cb12100c4e28a898f6cd1fa3ead&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSDQFGJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDrEim5YyOsdFtYwp1YJVyVfVoznPVVWxK5htt5xvSeQIgXDiEaWPxUrhb1yA8ag5Kispwm7y2mP6GvbiVTuTX2JcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuATIheoVcEqJzooCrcA98opiGZnwt7PHI9B%2BXkTzRcxp1zx4lp9X0Att0Q69ovwgn3m57nNyKeV7WqoZouYSD6RptlB5uYTvyCGl%2FjT1TVpa21WpN%2FO7%2FMOxqQioPj79SsTdqijnJL8bONuIFq6CmXwDZtiyawZ7hEuZOH2vgpMv6FJZcnXWr6iluqXs5Vv8g4WwRZSxAWILOhE7NlYhuWskH9LP2sik3carZB5T60UJOm753Ypy%2FkJ%2FTMEDiQS%2BaW5RQwJfewGynHZZvS01yBBU%2B8qTZqQlU88Wbn5nQoKAQwfDNxK8VTda8TdVjHDtyRt%2FosF8Xvlx7KwPWRvedQGhdZ627XMUezeXlLvtJNbioBUq1dYwnNGbvn9aW%2BQqtRYiB%2BvYz3UTQRpHP8%2BRmhAdzJSets8kvNevjRgWToxLHLBTsHXOq%2BUDslW0XSaXdsIAHQOdu9EfHxbE9cKYv%2BKL3aPhAH1xML2k1fThtCYGNIHquznhoJfJLCs7ftsNW8cTFb3Gct04TtIepiIypH5I8Yk3k4Xf1JyzmIQiXCLOLpT%2BwuLvNAzuEDEe39ALvqoqejmiG53cIryPUfq5V1KEPBQBH43N%2FF%2F8GsxzvJufzQzKw7w167eLwuAmLll8nU7t9xntvsRfd0MJGi0b4GOqUBEbCOTCofIrX%2BIL1N7ZWXUZPXnF58Lvz%2F%2Bjs9BcTw7YXJg9HiAuwa62RA9rAPK%2FRMSnn21GF3M0dcc4BQSmjpPiGRfm94aqXM2%2Bxpast%2FC5NRv91NogIEPq4iJCSc8LrMaeHX47jbNay8SfIiThJiBYxyYZsfvsDP7I4RFcPPB144gAxHcsdOmk704nq98aY3NRr30yHcgfvjGsquur0ThUH16eS0&X-Amz-Signature=d4c73d9e0d88e5608638334724cc51593a8be95de68fbd90a657360e4ea6fabf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
