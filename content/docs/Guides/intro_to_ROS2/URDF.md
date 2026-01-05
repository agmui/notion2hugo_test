---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X6M5HY7%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICJKMhHOhe0KmiwcEtP2xTwU%2FA47aC5wiwIMdPYe95NgAiEA8Yd%2FTAJHI%2FxTmAwiHftQ4ukvAxXu0TpNxEWJgdD0q9Aq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDElQc6kL1pi%2BX5It%2ByrcA2RV1qfgnK5%2F18fTWPR0QdHEgHQdiWIwl%2Frq7Gx3%2Bvoy5ksRBDSOwwfLFqmRgONtClKaQq9KSSfWd4Iyv6HlmzzfKlkwPYsWBN0oJU9ARoEZ0iJ%2BDM%2F%2FEllHIO7bF3LeZLE%2FyZZHqGfoU8093IANFMjtYmMPje%2FEDIL7FfnOjjdLYBhWhM1A%2BskPCXuRo%2Faed%2BeJ4Yi6OSyZqT7zd%2FCh2%2B7Ts3FD5XiV%2BH8cUWQ%2BRtxKVYyTD%2FasnW23cnEQEEkAR3eIoGiknBe%2BHEuIc4DiCX%2Bt53mfh%2BN2Y3ZreaOGSqIlJZno35iM00nwS2Er5dTAr%2B431HC3qhNiOh3DbF02mdqdnG9T3eOtmqteetvNn2yD49%2B329GEJp5hkm%2Bz%2Bt9YHDcw%2Fp6C8gmgSTklXRMkCbxZz3PiStEMJphTstktFUGgsSq1kKgjRaLSrtYnphRz1QQIXUiaRikr2YUQItdbHlo75A2hxFArdaXvif4F5%2F7FXmB%2BgqZqAwMDMiIziH0sFs7HbmEe2n%2Fml1imZbM6Obf5v9ocUJYSgMjzkhBRDUIY6BvAQ6MI4GRZvXeSb2%2BdG%2Be%2FCCdmmni55VLTLmzxOLsQLMmJyLm0Wrrhvpv4DFZEUS6spexDiUXzwEKOMJ%2Bv7MoGOqUBQFpj4x7Lk7M3VnnLOTGaI23kL%2BPuzCmKnlu9%2FfTnMoswR%2F84XfmxixkaN4Uj%2FZGA1PdvMul%2BzNy4j96FrqXy9f12sD5gFhghgGEr8mG83Rq%2FK%2Bu8NGVe3X3zkOoQv8lqBcJM7iDlwEWRuS7HG9xRGwdyG5j2XrKXGaVY3LlbfrENEpCNockTQmF4TR4cFfEwUdVofIDiUtRyVIUTvmMDpJPorG1z&X-Amz-Signature=8a308add76e7395a09a039097ddceb8a219e042f831e3c0e9c4b4ea55f4d76d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X6M5HY7%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICJKMhHOhe0KmiwcEtP2xTwU%2FA47aC5wiwIMdPYe95NgAiEA8Yd%2FTAJHI%2FxTmAwiHftQ4ukvAxXu0TpNxEWJgdD0q9Aq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDElQc6kL1pi%2BX5It%2ByrcA2RV1qfgnK5%2F18fTWPR0QdHEgHQdiWIwl%2Frq7Gx3%2Bvoy5ksRBDSOwwfLFqmRgONtClKaQq9KSSfWd4Iyv6HlmzzfKlkwPYsWBN0oJU9ARoEZ0iJ%2BDM%2F%2FEllHIO7bF3LeZLE%2FyZZHqGfoU8093IANFMjtYmMPje%2FEDIL7FfnOjjdLYBhWhM1A%2BskPCXuRo%2Faed%2BeJ4Yi6OSyZqT7zd%2FCh2%2B7Ts3FD5XiV%2BH8cUWQ%2BRtxKVYyTD%2FasnW23cnEQEEkAR3eIoGiknBe%2BHEuIc4DiCX%2Bt53mfh%2BN2Y3ZreaOGSqIlJZno35iM00nwS2Er5dTAr%2B431HC3qhNiOh3DbF02mdqdnG9T3eOtmqteetvNn2yD49%2B329GEJp5hkm%2Bz%2Bt9YHDcw%2Fp6C8gmgSTklXRMkCbxZz3PiStEMJphTstktFUGgsSq1kKgjRaLSrtYnphRz1QQIXUiaRikr2YUQItdbHlo75A2hxFArdaXvif4F5%2F7FXmB%2BgqZqAwMDMiIziH0sFs7HbmEe2n%2Fml1imZbM6Obf5v9ocUJYSgMjzkhBRDUIY6BvAQ6MI4GRZvXeSb2%2BdG%2Be%2FCCdmmni55VLTLmzxOLsQLMmJyLm0Wrrhvpv4DFZEUS6spexDiUXzwEKOMJ%2Bv7MoGOqUBQFpj4x7Lk7M3VnnLOTGaI23kL%2BPuzCmKnlu9%2FfTnMoswR%2F84XfmxixkaN4Uj%2FZGA1PdvMul%2BzNy4j96FrqXy9f12sD5gFhghgGEr8mG83Rq%2FK%2Bu8NGVe3X3zkOoQv8lqBcJM7iDlwEWRuS7HG9xRGwdyG5j2XrKXGaVY3LlbfrENEpCNockTQmF4TR4cFfEwUdVofIDiUtRyVIUTvmMDpJPorG1z&X-Amz-Signature=692ad63e19ebc6b318c530677862756ab691bdc5e82669043be6365566e35273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
