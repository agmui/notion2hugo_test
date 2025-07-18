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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKMDHCY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIENN1uU4zONgU0k08KZaK7zDQ5qw7kUq0MblPuP2I15EAiEA7DEv%2F9xZUXmcbVuMdjgMkgjAVQydkUVdMj1s3Kq940IqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS2rV4P13hh3LIcKSrcA2boXIhZtfRfKZ2fluJPP2%2B6UVw%2Bi4GTkT6lE5%2ByJMlgtuy%2BEXDoSyq3vsCyzX5%2FOmGBmMdZW%2Bj3zKRmwRF6Bn1YM2tSxdk6tg6IXW7kU4QOgF2p5oDqOSr81WWvDIWkbd%2BSXDoyjoMdrkIguQs17UmPJ43%2FUHG8iFZmDLWQ1kHNFJV6UNsW70rFAVbXosp0b2qmwDKXDgC%2BhCvUrvY77h3Y5v97nKJw9eReciME9grnKOwLOCjAhUtRsVIOjpoY1P7xW0%2FcuaLR55lAm0PplHTd1imHDfzQWK8tZvr7jcCh4FwbkKq%2BfbFDLIpKFoGi17r07Hvi907CSnyxaXM4aisf1DyrQRlWMRTrRByWNyjA6UeT0AEYbps9WGSk90gB3WfqJOXsB8LZIDaNIIdEn7nvk3lX0ULFBYtEd06IpPjy6NRiBTsAbOxHcnJMVCeyodCumpf7viSrro1s%2BIXCy5pGO%2FfL9bkAE49Vi8gHbJjQrvIJKTWaVs3voMYc0TErKNvL8r%2FYNPN1YiZo2TP81QnUnB%2Fuk93aZTkwip6gsndcXevaaMwKYVjl%2Bd9mL3qCneGHdPsHcTaKquc%2FJZrvWUVrBwLtdbnQOD6ujAoQL2Qe%2B4kW6TznmuCe9o2QMLmK68MGOqUBFAKQhPAEo4nSvAWP0iA2kQIvsyahaZBYMMvjMb%2BTbLG533YL0%2B%2BOhgdtV8sUzFacENQ3d9e4QU9MZOXYtCfCPsMLhsNJ3D%2FG%2FVKpusFMcsiFbco8dLLbKSJvi6P%2BFMXULS9v%2FcS4627Y134At9gWfdavzVb5osppEXYDll9dqRDFhQBLP17qIm5Kvg32Av5tfW3lFqxMBqyDkvEP2Ue4R4asI%2Fmg&X-Amz-Signature=a06f6f465e1c1458af91e1fe443ad34003d9690bee1c15a7ed6a224bac984838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKMDHCY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIENN1uU4zONgU0k08KZaK7zDQ5qw7kUq0MblPuP2I15EAiEA7DEv%2F9xZUXmcbVuMdjgMkgjAVQydkUVdMj1s3Kq940IqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS2rV4P13hh3LIcKSrcA2boXIhZtfRfKZ2fluJPP2%2B6UVw%2Bi4GTkT6lE5%2ByJMlgtuy%2BEXDoSyq3vsCyzX5%2FOmGBmMdZW%2Bj3zKRmwRF6Bn1YM2tSxdk6tg6IXW7kU4QOgF2p5oDqOSr81WWvDIWkbd%2BSXDoyjoMdrkIguQs17UmPJ43%2FUHG8iFZmDLWQ1kHNFJV6UNsW70rFAVbXosp0b2qmwDKXDgC%2BhCvUrvY77h3Y5v97nKJw9eReciME9grnKOwLOCjAhUtRsVIOjpoY1P7xW0%2FcuaLR55lAm0PplHTd1imHDfzQWK8tZvr7jcCh4FwbkKq%2BfbFDLIpKFoGi17r07Hvi907CSnyxaXM4aisf1DyrQRlWMRTrRByWNyjA6UeT0AEYbps9WGSk90gB3WfqJOXsB8LZIDaNIIdEn7nvk3lX0ULFBYtEd06IpPjy6NRiBTsAbOxHcnJMVCeyodCumpf7viSrro1s%2BIXCy5pGO%2FfL9bkAE49Vi8gHbJjQrvIJKTWaVs3voMYc0TErKNvL8r%2FYNPN1YiZo2TP81QnUnB%2Fuk93aZTkwip6gsndcXevaaMwKYVjl%2Bd9mL3qCneGHdPsHcTaKquc%2FJZrvWUVrBwLtdbnQOD6ujAoQL2Qe%2B4kW6TznmuCe9o2QMLmK68MGOqUBFAKQhPAEo4nSvAWP0iA2kQIvsyahaZBYMMvjMb%2BTbLG533YL0%2B%2BOhgdtV8sUzFacENQ3d9e4QU9MZOXYtCfCPsMLhsNJ3D%2FG%2FVKpusFMcsiFbco8dLLbKSJvi6P%2BFMXULS9v%2FcS4627Y134At9gWfdavzVb5osppEXYDll9dqRDFhQBLP17qIm5Kvg32Av5tfW3lFqxMBqyDkvEP2Ue4R4asI%2Fmg&X-Amz-Signature=ede31ed43b1a4e222825896cbcfa1518ce6582a13d0e914792a58c373f3231ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
