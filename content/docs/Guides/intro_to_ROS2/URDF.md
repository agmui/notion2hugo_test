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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIV4RIR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqMTJmpD8V4dCAW4aESD0luslRDIFE0N4zQLiO1ouLIQIhAKBtBkSx6Ap4G1Jj5kwErUWgKGcz3C8Vh%2BcGyEvItlOrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIqg1FKUZgkRMra0sq3APjo5wcBSt4JY%2BPjt2y5LBWcOs2mJMNzXGzmvLLng4rcTmPAX5X5wxmDpIw5egsM5HoIIcJJF%2F6IUz3cqgqvwCLpLX7dxqsksMkK5eMksysRFuK4mkmyDGl2r9WanL5BzVJpUaj4ia22LVX8RP%2FlQjXdGcom06ITX5HUwsoIdl2gY%2BpFa%2BNbKURlRhQ2uv%2FwgNpYMlUs5BhmjQJZm%2F4S9u1QVYWmDANoGSkGHxLZWpYfMZYJqiyaPRT0KuiQGDTkE81Qbp3bjxEFLQrb6T2CqVlCPG25h8cusExl9dmQQCKpZhwc9ygezlJ2Bv39HHH%2Bmq85F%2BEoRWHgG7TpgqZj0mUaqyFJa0ZeuGf2AzkXlOlWKozvfvFl4YG2jeGIufdzISwrzlsoPXf72a0n6FNpT1ubqB0as7LgZc0w09BCRs3uoJLknxAsRDho0pEtAVAW2Cj5vslMFCL2v%2FsrlAOVCCQaTBBeGOEDupYmHn6XhqP2CVTD86d21YJCC2P7SYsUSkBlX4X18DhKjofK%2Fr6%2FiEVVjOWDzzc84QeLpFtt0EiozTyvBH1JqZISMWAwgMgtQQxPaXh7pwi0RMGmcy4r8Qdk3JLYr%2BPs7xhIZsNwUCrkDEaX8vfbu7v%2FBnLOjDm7rrDBjqkAf04tRK15NgSApiiIYbzXoi11IiCshZ9ItvPAP8G1f7ISZZVUJOsbIq0XhrmpBdyqk5iO%2B%2F81nHrv3PRh6JwB1xt%2F%2Fj4FlHg%2FhSlI9tAi%2B2WYwdLSoF4hPtyLX%2FaDjSCO8R8KtgJbRhtone8s45AOXPsdFpBIJDIxfszzWlsE%2F4E%2F9IcJvHV5JNST70ickkAcMdugnavWM9EUOgis6uW%2FULh1FA%2B&X-Amz-Signature=59c823b86ece2d223c0625281d36f2991ab649740a35efe871fa56d4966cc59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIV4RIR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqMTJmpD8V4dCAW4aESD0luslRDIFE0N4zQLiO1ouLIQIhAKBtBkSx6Ap4G1Jj5kwErUWgKGcz3C8Vh%2BcGyEvItlOrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIqg1FKUZgkRMra0sq3APjo5wcBSt4JY%2BPjt2y5LBWcOs2mJMNzXGzmvLLng4rcTmPAX5X5wxmDpIw5egsM5HoIIcJJF%2F6IUz3cqgqvwCLpLX7dxqsksMkK5eMksysRFuK4mkmyDGl2r9WanL5BzVJpUaj4ia22LVX8RP%2FlQjXdGcom06ITX5HUwsoIdl2gY%2BpFa%2BNbKURlRhQ2uv%2FwgNpYMlUs5BhmjQJZm%2F4S9u1QVYWmDANoGSkGHxLZWpYfMZYJqiyaPRT0KuiQGDTkE81Qbp3bjxEFLQrb6T2CqVlCPG25h8cusExl9dmQQCKpZhwc9ygezlJ2Bv39HHH%2Bmq85F%2BEoRWHgG7TpgqZj0mUaqyFJa0ZeuGf2AzkXlOlWKozvfvFl4YG2jeGIufdzISwrzlsoPXf72a0n6FNpT1ubqB0as7LgZc0w09BCRs3uoJLknxAsRDho0pEtAVAW2Cj5vslMFCL2v%2FsrlAOVCCQaTBBeGOEDupYmHn6XhqP2CVTD86d21YJCC2P7SYsUSkBlX4X18DhKjofK%2Fr6%2FiEVVjOWDzzc84QeLpFtt0EiozTyvBH1JqZISMWAwgMgtQQxPaXh7pwi0RMGmcy4r8Qdk3JLYr%2BPs7xhIZsNwUCrkDEaX8vfbu7v%2FBnLOjDm7rrDBjqkAf04tRK15NgSApiiIYbzXoi11IiCshZ9ItvPAP8G1f7ISZZVUJOsbIq0XhrmpBdyqk5iO%2B%2F81nHrv3PRh6JwB1xt%2F%2Fj4FlHg%2FhSlI9tAi%2B2WYwdLSoF4hPtyLX%2FaDjSCO8R8KtgJbRhtone8s45AOXPsdFpBIJDIxfszzWlsE%2F4E%2F9IcJvHV5JNST70ickkAcMdugnavWM9EUOgis6uW%2FULh1FA%2B&X-Amz-Signature=2bb2b78a047e99ccc6a78d04738c268488593bcce9575a278c2067116091f258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
