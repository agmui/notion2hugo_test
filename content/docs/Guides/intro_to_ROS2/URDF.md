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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQ4KBUH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKOycjqxfkAqYv4b933FGVaz2T09Rtc9M%2BveB0K4YEdgIgcojZ1u623hMKltsxKI32Tc0zi%2B0z4XLDyqkqDWCIGAMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMXv7eiPXj3Agll%2ByrcA%2F2HorepW3j1hM0%2FLLvfW%2Br6XI9VqumQOTpL8haljmQ%2FgblNPTjf9mKsKvJNh4GDDh%2FuUHNp%2Bq%2FO0NIaQUqmbxr7I3%2F5kys9s8icIWtg6qMeGmMmNY766ddEA9HldYsvGsgVqdMSansr3QcfhAkXhxNPZXefwWjoAaLgeb%2FgxyNIZp6GCclPeUlg2X8PPmcHCoA58ql9jNeAeWMJizAi0YK4hqQ%2FTLPXLxLOH5ZY5pP78zkNM1iJBC%2ByEWjQx19XvSQmvYHLtrykDba0GJCSG6O0r%2BTqd54qlYfYI%2Bu3wD%2BFgDfDy7OgE%2F5NuEjgMdVubn5geG4hdKwecxXNlyoGxYUSrO52yLPW3B5dqXzc%2BXazEi8p07ahoqZuKUbRHO1bFrUWy1gDQOuUEdwvbG2ukHRcmD%2BoaKvRdfsJl2AcMW02OnoQg3h2O0NUgKgmRZzie9P79TqHh5Nkny271FMuhs3jXR3orAbyUV3ohh8c1hUMJsgN3IuJ%2FMYvPlaG81st8KTcDDLAF8VIPS1L0Yf4X60P62Vl527Qr%2BaqxZzYiwodBi82fcNlP9FA1nTLF7J0PBxoESkh3ilChD8T5EIymjWuwe%2FPb32fKqKBvAaAxhuB4d%2B1IaGSXwPaNFloMM3n08IGOqUB3XSeJu2Z%2BGhMGfmpwXAqs9MONU4PUyg62cwQv5X0%2FmWXxD2FxfF5LD8rE10GnMprIXpw127Qb2ASUEeRqytXoTSq%2F98D4aCMa57DbCnu9kUMzim96sF39GAjfPhCHTJK77vTWRyX0H7FOAyBrqfNzIiK1EHNtrIphOjuBJeJ%2B8lzbx3RafyUZN2P5ooN3CAv0Vp7Omvf8IyV0PPv1hvDU1H90WOp&X-Amz-Signature=361a947d3f2cfc1b543b32a40d71ab0c6c6d02ed821a75e70406dd7fd13c77a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQ4KBUH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKOycjqxfkAqYv4b933FGVaz2T09Rtc9M%2BveB0K4YEdgIgcojZ1u623hMKltsxKI32Tc0zi%2B0z4XLDyqkqDWCIGAMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMXv7eiPXj3Agll%2ByrcA%2F2HorepW3j1hM0%2FLLvfW%2Br6XI9VqumQOTpL8haljmQ%2FgblNPTjf9mKsKvJNh4GDDh%2FuUHNp%2Bq%2FO0NIaQUqmbxr7I3%2F5kys9s8icIWtg6qMeGmMmNY766ddEA9HldYsvGsgVqdMSansr3QcfhAkXhxNPZXefwWjoAaLgeb%2FgxyNIZp6GCclPeUlg2X8PPmcHCoA58ql9jNeAeWMJizAi0YK4hqQ%2FTLPXLxLOH5ZY5pP78zkNM1iJBC%2ByEWjQx19XvSQmvYHLtrykDba0GJCSG6O0r%2BTqd54qlYfYI%2Bu3wD%2BFgDfDy7OgE%2F5NuEjgMdVubn5geG4hdKwecxXNlyoGxYUSrO52yLPW3B5dqXzc%2BXazEi8p07ahoqZuKUbRHO1bFrUWy1gDQOuUEdwvbG2ukHRcmD%2BoaKvRdfsJl2AcMW02OnoQg3h2O0NUgKgmRZzie9P79TqHh5Nkny271FMuhs3jXR3orAbyUV3ohh8c1hUMJsgN3IuJ%2FMYvPlaG81st8KTcDDLAF8VIPS1L0Yf4X60P62Vl527Qr%2BaqxZzYiwodBi82fcNlP9FA1nTLF7J0PBxoESkh3ilChD8T5EIymjWuwe%2FPb32fKqKBvAaAxhuB4d%2B1IaGSXwPaNFloMM3n08IGOqUB3XSeJu2Z%2BGhMGfmpwXAqs9MONU4PUyg62cwQv5X0%2FmWXxD2FxfF5LD8rE10GnMprIXpw127Qb2ASUEeRqytXoTSq%2F98D4aCMa57DbCnu9kUMzim96sF39GAjfPhCHTJK77vTWRyX0H7FOAyBrqfNzIiK1EHNtrIphOjuBJeJ%2B8lzbx3RafyUZN2P5ooN3CAv0Vp7Omvf8IyV0PPv1hvDU1H90WOp&X-Amz-Signature=eb7ab215bf1bc0fee186681f2a4cbc29c2be59ebf82121abb979b7d37c6c345d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
