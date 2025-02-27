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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MDRHUC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDek9xurFG%2FA5fGrnP1BYXhn%2BoQ7oe%2FbCO4v%2FojLKls9QIhALbwqHGdQ%2B9TCJff%2F%2FE8bvW%2BwOkvccjdMLkiG6goFtnKKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwH0Phu1%2BFlLDbEwYq3ANmtK2QYjjb%2BT2ED7bcJg2efeMPxleE6AiH1ufDSV9Z5uxXuQ2R1jsjjMjAgLTHgTsnH230ThnoR4%2BtmuZ9BXAMFJX1TOpJ0hyJoKSJj4BX2mF0RyAP0n6%2FWDpM1Li0x8z2EA%2BaVFkvp6DRX9Y%2F3g9OflOMnpfxiPMLYAsL375kiZ9UKjxn9K2oQdwozPbyRiWGHC2XC71cxKbShsTSu3M%2BpIsuM%2BwkoRhmsPrZl3Slx9BPU0j%2BPzzqtTGDf%2BqBd9Yt6wpg67Zs1HhRaVBgkEIlsOI0O2F7UA8fSAJ2gFB0M5eLAo8jhnyXvMtHvuxmiUphj6fDyrWyl3azdW5VnzZrk0e3jEsvARB3TcFojArHffSxc%2B4U91NS1oNj7mIls40ToXIfzoTpUyhYjmbpCPSLHrV4hhOzuqOlVLCVivTtOkkGCBR8h3hGIUgbinBQ7a1SyOmUHRrw0RCy5H7r8EVsXCHgdVsgQhQlTe6HiKMl7ChlGMFzKpjpo3qvv79yFAuaw359N8%2Bm6PG4ZPkCqjMy337anwVihfHP0doZVIKghTokqdGQ0cKKM2%2FA8f2aVnk0NAPzCpW02Y4TkC36MpNXt27PNn3kFGt4dzOaOe66k8ts8jFbttXOYilbqTDB2YO%2BBjqkAa8yZjOce8jz0eX1tfkThZ8%2Bb7bFUSCOSoiCOXFTuIFWMxyf10IbDtn2kjLbcDU9YlgevsoQisEkNDTxOTDDIedP15u%2F9GcJaBZYybXDWhZVMjxzFHENF96YDmJCf2xxZ11wLasWwiFBjbTRrW2ZGTyd64s%2BlQKti7mNYbEp8wBmelJUzABzmzCcVd%2BlMEhItiKO0vzMqHVghpjXiXzu8UOyhpd8&X-Amz-Signature=70983f63e4360caa12deb8504a55156859466efd84bead8e5ba283a0b3002c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MDRHUC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDek9xurFG%2FA5fGrnP1BYXhn%2BoQ7oe%2FbCO4v%2FojLKls9QIhALbwqHGdQ%2B9TCJff%2F%2FE8bvW%2BwOkvccjdMLkiG6goFtnKKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwH0Phu1%2BFlLDbEwYq3ANmtK2QYjjb%2BT2ED7bcJg2efeMPxleE6AiH1ufDSV9Z5uxXuQ2R1jsjjMjAgLTHgTsnH230ThnoR4%2BtmuZ9BXAMFJX1TOpJ0hyJoKSJj4BX2mF0RyAP0n6%2FWDpM1Li0x8z2EA%2BaVFkvp6DRX9Y%2F3g9OflOMnpfxiPMLYAsL375kiZ9UKjxn9K2oQdwozPbyRiWGHC2XC71cxKbShsTSu3M%2BpIsuM%2BwkoRhmsPrZl3Slx9BPU0j%2BPzzqtTGDf%2BqBd9Yt6wpg67Zs1HhRaVBgkEIlsOI0O2F7UA8fSAJ2gFB0M5eLAo8jhnyXvMtHvuxmiUphj6fDyrWyl3azdW5VnzZrk0e3jEsvARB3TcFojArHffSxc%2B4U91NS1oNj7mIls40ToXIfzoTpUyhYjmbpCPSLHrV4hhOzuqOlVLCVivTtOkkGCBR8h3hGIUgbinBQ7a1SyOmUHRrw0RCy5H7r8EVsXCHgdVsgQhQlTe6HiKMl7ChlGMFzKpjpo3qvv79yFAuaw359N8%2Bm6PG4ZPkCqjMy337anwVihfHP0doZVIKghTokqdGQ0cKKM2%2FA8f2aVnk0NAPzCpW02Y4TkC36MpNXt27PNn3kFGt4dzOaOe66k8ts8jFbttXOYilbqTDB2YO%2BBjqkAa8yZjOce8jz0eX1tfkThZ8%2Bb7bFUSCOSoiCOXFTuIFWMxyf10IbDtn2kjLbcDU9YlgevsoQisEkNDTxOTDDIedP15u%2F9GcJaBZYybXDWhZVMjxzFHENF96YDmJCf2xxZ11wLasWwiFBjbTRrW2ZGTyd64s%2BlQKti7mNYbEp8wBmelJUzABzmzCcVd%2BlMEhItiKO0vzMqHVghpjXiXzu8UOyhpd8&X-Amz-Signature=d2dd72071a68ef68370faddf67084382e2a23ca7b444ded12900f084196fe83b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
