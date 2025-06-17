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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFMBWTL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAdnEve91kqN8JcPb4iXXHkcB4BUu1BMEOV678EeHrEAIhAMFF7%2FTL4PLlkhljvWdJQxEOmcBo6xI6ZtjZezjRzx8WKv8DCHUQABoMNjM3NDIzMTgzODA1IgxZ51Fd3M%2BGeK%2F922Yq3AN6GSPfMsv4hXORD%2Fy3gazpzAtQe9Blgyae1CiIZ%2BGf%2BtTjZmC1fmY1Tj3ahSNWOhnQGPs7iUTArenDvy9RAltcBm5H0V5qFbHytTgQkUwQRK2kbKOVYDxCYGufrL%2FYbErXgQgRSea2rDjTtfXnnpbLFhlLIj5yZK91euNhe99QNhCvDghFWBEQCmu4%2FbQL2Jve1BnEtl7pqXRFc82vwP%2B%2FSB4zwRuRPe31ryl47P2dBq01TbYerGPWHkDv8TGTgj%2Fb2z%2BaJl8bV%2FaRYB9FHPjEnpteEewB15NeWBm9qTumqpoF1zMaBbe7uP1VAQLkT0PkzR%2BQUOT6MhBqMQuUx8q9BpS7f7UHjo2pzvYphNCMf6cdkTuWOFQdiMf2zUYnW%2BCMeut2JQOVpWM9oRQhPrumFWXnMPMIth8icYf2H%2B1Uz%2FJhpH%2BlJnzrv0smP%2Fdligu%2FQodzmJDLuueHSXvq2r4dL1j%2BoTdHUiqg14iC0etZQYGQxmgyiVsa42HB4fqwyn4vNnoj6GDAr4v44DvkwgTJcfjt%2FgnOvceAoZY6hzuN01XyX72zKlUC8waiUse8O3cUPz%2BKs7Wr1Dbbuz8pXhu%2FVqiSTaDoisB2UdC2wjmL4oMRDCQKwh7b%2FE5CKDDQu8XCBjqkAfnzl5PQ6HFlbdFTiY7TSmn58R4QS1%2Ft5H1fpz3NxEYp5rjOmNB6NzNCY9Bar9HOkwfpWAcy49ybkSoGT3%2B2jG6vM%2Bkhwr9Xx8dUYjt8RUzKsLPHqnKtopIJ%2BTqCene1eG2GUu%2BBD%2BIbgAW1oraFNh25FB5TNtLwdpMDwcmz5ZTFFZmuCp2THZin4n%2FI0SPRxHcU5C3UIEiHVrxA7Hte%2FGoOCoNI&X-Amz-Signature=1cd8d3920d9e9148c7e0467b10dbdbbbfc405c7c42fcba959b57b7727b92913b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFMBWTL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAdnEve91kqN8JcPb4iXXHkcB4BUu1BMEOV678EeHrEAIhAMFF7%2FTL4PLlkhljvWdJQxEOmcBo6xI6ZtjZezjRzx8WKv8DCHUQABoMNjM3NDIzMTgzODA1IgxZ51Fd3M%2BGeK%2F922Yq3AN6GSPfMsv4hXORD%2Fy3gazpzAtQe9Blgyae1CiIZ%2BGf%2BtTjZmC1fmY1Tj3ahSNWOhnQGPs7iUTArenDvy9RAltcBm5H0V5qFbHytTgQkUwQRK2kbKOVYDxCYGufrL%2FYbErXgQgRSea2rDjTtfXnnpbLFhlLIj5yZK91euNhe99QNhCvDghFWBEQCmu4%2FbQL2Jve1BnEtl7pqXRFc82vwP%2B%2FSB4zwRuRPe31ryl47P2dBq01TbYerGPWHkDv8TGTgj%2Fb2z%2BaJl8bV%2FaRYB9FHPjEnpteEewB15NeWBm9qTumqpoF1zMaBbe7uP1VAQLkT0PkzR%2BQUOT6MhBqMQuUx8q9BpS7f7UHjo2pzvYphNCMf6cdkTuWOFQdiMf2zUYnW%2BCMeut2JQOVpWM9oRQhPrumFWXnMPMIth8icYf2H%2B1Uz%2FJhpH%2BlJnzrv0smP%2Fdligu%2FQodzmJDLuueHSXvq2r4dL1j%2BoTdHUiqg14iC0etZQYGQxmgyiVsa42HB4fqwyn4vNnoj6GDAr4v44DvkwgTJcfjt%2FgnOvceAoZY6hzuN01XyX72zKlUC8waiUse8O3cUPz%2BKs7Wr1Dbbuz8pXhu%2FVqiSTaDoisB2UdC2wjmL4oMRDCQKwh7b%2FE5CKDDQu8XCBjqkAfnzl5PQ6HFlbdFTiY7TSmn58R4QS1%2Ft5H1fpz3NxEYp5rjOmNB6NzNCY9Bar9HOkwfpWAcy49ybkSoGT3%2B2jG6vM%2Bkhwr9Xx8dUYjt8RUzKsLPHqnKtopIJ%2BTqCene1eG2GUu%2BBD%2BIbgAW1oraFNh25FB5TNtLwdpMDwcmz5ZTFFZmuCp2THZin4n%2FI0SPRxHcU5C3UIEiHVrxA7Hte%2FGoOCoNI&X-Amz-Signature=fb42cecca3e7d0859e34440be186668adf2e1b12e850a5a7f813f3c347c3f579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
