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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666F4ZVGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDXHtSiqZnVeWeaqF7jet%2BsosIFcu4XP%2BxOrJmhL3coDQIgP3K1%2BzU3aOkBWLsc%2FBgt3HJ%2BoGzNFtK5FekvWYU1wtcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfO9rm2Hht%2BHl8%2FBircA8Ef7whoiuIPOnsh9o57Wwo3Xk2Nk3Y2rSSwV6gsk3ucEqO%2FjkmEUMHZlT4c454bUCwb%2FGt7YFFdfLUiGvhBghV%2BojXv%2Fy%2FMSj0gU69Sx5O1vRC%2BMlbUdixSx1yb94EYUQOqhlV8GA7VPQJ1WHefjWdhErzz3yRZeg1iwIdXJH9nrPXPlTqPP7dF8kZPGk8h72hzATiJBLJZexUhuMQakuxpE4I7EIxOVU%2BuvKuSFEBKggewREHQuYo0yFZ80dwAF8RJ%2F6ri1rL75wvWRfK1kYI94F3GFztQTQ4b39N7G6ZEiue7xHSOLf5MdoMU3y1jCuvRozAW9uWxzQpZ88jXViY%2FUHVfqLHda8Acw0gqPI45k5RDnUCyQl7P6HL0bayGq49pyQgSo7l17SzZu70ktk1ok5kKN1w5zazvTZmnGykzozXwQhTSuCsXO3Bf5FLXjuk3ezY%2BurV1aow99nPN0tiMJpLDFIlnAt2owQ4LCroD%2FMtd4eMxp2RIlHS%2BzxiuXRP9%2Bo8amwCWiDPfKE59wVsGDjGuTOzvlODH6lmqvu0%2Bw7Oqk0KX2bKudI3sF6nAiUAMWKe%2FUZ23Q2ieJK7mQhbRZ6K1cMq8AR6IzGoPzj4lf%2Fg%2B5xRh0U%2FPlU3zMOqpvL4GOqUBPmGgqaP%2Bw6AD2ctdqQc%2FouALMhkPcIPygAb44Na07hy53VvccvHRYkq7uPeICDf%2Bl4JreLvdV72609jLJpoh46lmwM37HtxfiuMpGTPcGpmrxzKW%2Fp1g7EZSM60mKlmEWy7go8y8eVECJhb%2BiJ93ZEJtdp8eyE2Fz7ltjz0oIlzMPGGQAOrZZSd12aiABOVf%2FWnyN0NT9Gl45fYh1YxGK3XS6XeG&X-Amz-Signature=4d7f2d7ca0906d0866b82ea2f166be463c5fa6188013404078628d8e6f60c265&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666F4ZVGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDXHtSiqZnVeWeaqF7jet%2BsosIFcu4XP%2BxOrJmhL3coDQIgP3K1%2BzU3aOkBWLsc%2FBgt3HJ%2BoGzNFtK5FekvWYU1wtcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfO9rm2Hht%2BHl8%2FBircA8Ef7whoiuIPOnsh9o57Wwo3Xk2Nk3Y2rSSwV6gsk3ucEqO%2FjkmEUMHZlT4c454bUCwb%2FGt7YFFdfLUiGvhBghV%2BojXv%2Fy%2FMSj0gU69Sx5O1vRC%2BMlbUdixSx1yb94EYUQOqhlV8GA7VPQJ1WHefjWdhErzz3yRZeg1iwIdXJH9nrPXPlTqPP7dF8kZPGk8h72hzATiJBLJZexUhuMQakuxpE4I7EIxOVU%2BuvKuSFEBKggewREHQuYo0yFZ80dwAF8RJ%2F6ri1rL75wvWRfK1kYI94F3GFztQTQ4b39N7G6ZEiue7xHSOLf5MdoMU3y1jCuvRozAW9uWxzQpZ88jXViY%2FUHVfqLHda8Acw0gqPI45k5RDnUCyQl7P6HL0bayGq49pyQgSo7l17SzZu70ktk1ok5kKN1w5zazvTZmnGykzozXwQhTSuCsXO3Bf5FLXjuk3ezY%2BurV1aow99nPN0tiMJpLDFIlnAt2owQ4LCroD%2FMtd4eMxp2RIlHS%2BzxiuXRP9%2Bo8amwCWiDPfKE59wVsGDjGuTOzvlODH6lmqvu0%2Bw7Oqk0KX2bKudI3sF6nAiUAMWKe%2FUZ23Q2ieJK7mQhbRZ6K1cMq8AR6IzGoPzj4lf%2Fg%2B5xRh0U%2FPlU3zMOqpvL4GOqUBPmGgqaP%2Bw6AD2ctdqQc%2FouALMhkPcIPygAb44Na07hy53VvccvHRYkq7uPeICDf%2Bl4JreLvdV72609jLJpoh46lmwM37HtxfiuMpGTPcGpmrxzKW%2Fp1g7EZSM60mKlmEWy7go8y8eVECJhb%2BiJ93ZEJtdp8eyE2Fz7ltjz0oIlzMPGGQAOrZZSd12aiABOVf%2FWnyN0NT9Gl45fYh1YxGK3XS6XeG&X-Amz-Signature=f6c6b9e3c47b5de33633fa5de57d5d5d1922f3ec28a46905fc75f38fe396f98e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
