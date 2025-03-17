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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DN55BLO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTRnzjMpcRiRXd3Sd1i5CNpeLr39V8p%2BZ1j00xYE%2BJWAiAktBUa3pDoAFCS8LSOfzp4HGFitbldpUr0i%2Bi1XEcrcSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMibSsf%2BTf%2Ffz1XOVtKtwD8kKmdY6YBz3W55I%2FeTvmbQjb%2FbTol6DU1PX7Y8cy1tOYisuza7yoej%2FCbxfUny4xQk0KJsqorBFdtwjQgZSuVNtxlLl2dlEpQhLHa35b1hnSDtb5lZZip1iT7LKg8UddSurjJvIPWSbyzaoCQjnjx6KCJcUhTrrPgq21JCevihXr8ep2pQs6XqYpsojNHAgPXydSEZGVbpAGN0ZySv0Ut1tF1QYkkuZnECsxx95248JSZTC8Ip4Evw6Mp%2FCuBaKCPVDJ9rpIq0o1mwSXfCGiwwV4akkAG%2Bf%2F8Z35pCKrirSuNP2sILXnsXW0gNZVBNj2MhtWUBDULNH7kPDWuGzc4wZueZv%2BNDnI8WQVXsclZjNuAB2g1rBdxHQ7e0O5u3KKHFCyXm5vC7EzsmZCEQ6k6yjfehWa3u9LnuMK7DmqpShwwHW2TRyLIEzyQRvL4Bsnj8%2B%2FSwS0KJw9eEu0ObmawA%2BwwiDamJW9VBebavBb6%2B646WqsoaL6ptBVYvQ%2B7fcUBUuk%2FoD8OXleGM6dpnP8PnGtRwWFA9sUwCdvMH1heQapdfdw666ks96gEQdvgwXVMr0MMlrDSODdMVEjrDiuoLph2pKzj1fRBrPNQN6KwMHgzsJmZFp0%2BbZEq04wjtvevgY6pgF01rSKDraSW0N68g3qjoxP2bBkLEol8KEoFtjCyFWJYaqbxCdDJNFRcGrMJp088FCw%2F%2F7qMAfel6dzdg3AJxHioZUbZgtHisyVLMFHbOzC3ykLWNut8VR04buLQ8YBjXhEeMXNt7m%2BsrjYRrjjkm86%2F4t0xlPQ8Ug%2BxVB7FlhhMVd1tsoJgNquKdTbMXRjj31Pa38AtxbCUwI%2BRRx0vq6aovieexiH&X-Amz-Signature=cd4c45a8f0b89fc427e2bd4ab3c4e6be50e01d8030d3679377e2895009f0ea12&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DN55BLO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTRnzjMpcRiRXd3Sd1i5CNpeLr39V8p%2BZ1j00xYE%2BJWAiAktBUa3pDoAFCS8LSOfzp4HGFitbldpUr0i%2Bi1XEcrcSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMibSsf%2BTf%2Ffz1XOVtKtwD8kKmdY6YBz3W55I%2FeTvmbQjb%2FbTol6DU1PX7Y8cy1tOYisuza7yoej%2FCbxfUny4xQk0KJsqorBFdtwjQgZSuVNtxlLl2dlEpQhLHa35b1hnSDtb5lZZip1iT7LKg8UddSurjJvIPWSbyzaoCQjnjx6KCJcUhTrrPgq21JCevihXr8ep2pQs6XqYpsojNHAgPXydSEZGVbpAGN0ZySv0Ut1tF1QYkkuZnECsxx95248JSZTC8Ip4Evw6Mp%2FCuBaKCPVDJ9rpIq0o1mwSXfCGiwwV4akkAG%2Bf%2F8Z35pCKrirSuNP2sILXnsXW0gNZVBNj2MhtWUBDULNH7kPDWuGzc4wZueZv%2BNDnI8WQVXsclZjNuAB2g1rBdxHQ7e0O5u3KKHFCyXm5vC7EzsmZCEQ6k6yjfehWa3u9LnuMK7DmqpShwwHW2TRyLIEzyQRvL4Bsnj8%2B%2FSwS0KJw9eEu0ObmawA%2BwwiDamJW9VBebavBb6%2B646WqsoaL6ptBVYvQ%2B7fcUBUuk%2FoD8OXleGM6dpnP8PnGtRwWFA9sUwCdvMH1heQapdfdw666ks96gEQdvgwXVMr0MMlrDSODdMVEjrDiuoLph2pKzj1fRBrPNQN6KwMHgzsJmZFp0%2BbZEq04wjtvevgY6pgF01rSKDraSW0N68g3qjoxP2bBkLEol8KEoFtjCyFWJYaqbxCdDJNFRcGrMJp088FCw%2F%2F7qMAfel6dzdg3AJxHioZUbZgtHisyVLMFHbOzC3ykLWNut8VR04buLQ8YBjXhEeMXNt7m%2BsrjYRrjjkm86%2F4t0xlPQ8Ug%2BxVB7FlhhMVd1tsoJgNquKdTbMXRjj31Pa38AtxbCUwI%2BRRx0vq6aovieexiH&X-Amz-Signature=f9c20fcced6d6d042d98d8feb5e7798b52fb41b2fc8ff42baf26af8696eb2dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
