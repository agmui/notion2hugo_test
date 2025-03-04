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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DQDCCN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXueU7QRitM8ZVhBJ2hj%2Fn5VA15jYC3CqgXEzI6I58YwIhAKIVAtzDQdeB%2FHkNd4OcCqWzlBDKQbpDOA0Nud9DoKLOKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5synC%2BhnXGMFWsUsq3AP9XKfNaLHHu0L5IJISZCxTBtqZdmbiAGN0vy4G%2FJ4S%2FLc0gktVSPfWqvGOVyGV4PQxEkRaGo88xzY15VV8UGJpufWcF7OJaY6zZ4z6KNDjjZqNMKCr9o%2BbwYvaqktOIvBxbfDZi0y4E5fLChiWIvsENnVFao0%2BZpD9hvIPtLnbntEAEOgkQfQAYd4C9zVxfsQCg1amvxLuTrmO%2BTqS1rHk3qVH%2BSnYviuHu6SVqyY9D4RNKWehpv0kOcgsFbi9HsSW9Z2z4xclS%2FtEbTZvQA6RwWm5nYTxwClznRZfxy6T1uh%2FgJ2PNeD%2FYKXdWsm5eqogtIt3icKPEkKWA7Cryq41VrTLsTkoeN6pBhHsMdnrrp%2BIyfYTONvRDzNrAQhZRXRgnKj%2F7Rk0kxk7bCH%2BYxioeSwZlBxG9%2F78MQlfbUD3CsUo2PApefI9X5QaHYPGdWQ4EqU65c46n%2FQ4P97plb5Lz%2F1905L3JQ6EEHck3waz%2F02REjjJamlKrw8TvZQnSvHY%2BSPIjKzhyla%2Bc1RoG3B5MYoeTOFGm2LLdd2Shz%2FrPkeBszQc2fE1bYLMuquae4TSU2PA1rAdkUuVnB9vh1OBiPYL%2F8x%2BJlel%2BNIF9q2C4fA2ewxguCUXXfRxrzCJ%2BZi%2BBjqkAT6aeoeshS34Qvpe5TK1%2FUx%2BDDkGVWyj%2FM9mMCoXcvjcfo5%2Ftq3W6flVPMo4y%2Bi%2FAJTAqM3JeExtU6xEnrbh3J3XdLoI24798%2FEAM8gxIAJMN2p%2FIs78ZlTdx7AfqfCZUpWhI9O5A9m5zQprPmyiUHVOmz8PfxP54gX2D8lhwCDRzyut5P%2FEs%2FnSH2yklV6qpvtDqolVa9KWdFsa3VPL9eoy82xt&X-Amz-Signature=1360977dba590544d4e7a692b0a8e54c0548d4f496954fb95b984e4c51eae971&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DQDCCN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXueU7QRitM8ZVhBJ2hj%2Fn5VA15jYC3CqgXEzI6I58YwIhAKIVAtzDQdeB%2FHkNd4OcCqWzlBDKQbpDOA0Nud9DoKLOKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5synC%2BhnXGMFWsUsq3AP9XKfNaLHHu0L5IJISZCxTBtqZdmbiAGN0vy4G%2FJ4S%2FLc0gktVSPfWqvGOVyGV4PQxEkRaGo88xzY15VV8UGJpufWcF7OJaY6zZ4z6KNDjjZqNMKCr9o%2BbwYvaqktOIvBxbfDZi0y4E5fLChiWIvsENnVFao0%2BZpD9hvIPtLnbntEAEOgkQfQAYd4C9zVxfsQCg1amvxLuTrmO%2BTqS1rHk3qVH%2BSnYviuHu6SVqyY9D4RNKWehpv0kOcgsFbi9HsSW9Z2z4xclS%2FtEbTZvQA6RwWm5nYTxwClznRZfxy6T1uh%2FgJ2PNeD%2FYKXdWsm5eqogtIt3icKPEkKWA7Cryq41VrTLsTkoeN6pBhHsMdnrrp%2BIyfYTONvRDzNrAQhZRXRgnKj%2F7Rk0kxk7bCH%2BYxioeSwZlBxG9%2F78MQlfbUD3CsUo2PApefI9X5QaHYPGdWQ4EqU65c46n%2FQ4P97plb5Lz%2F1905L3JQ6EEHck3waz%2F02REjjJamlKrw8TvZQnSvHY%2BSPIjKzhyla%2Bc1RoG3B5MYoeTOFGm2LLdd2Shz%2FrPkeBszQc2fE1bYLMuquae4TSU2PA1rAdkUuVnB9vh1OBiPYL%2F8x%2BJlel%2BNIF9q2C4fA2ewxguCUXXfRxrzCJ%2BZi%2BBjqkAT6aeoeshS34Qvpe5TK1%2FUx%2BDDkGVWyj%2FM9mMCoXcvjcfo5%2Ftq3W6flVPMo4y%2Bi%2FAJTAqM3JeExtU6xEnrbh3J3XdLoI24798%2FEAM8gxIAJMN2p%2FIs78ZlTdx7AfqfCZUpWhI9O5A9m5zQprPmyiUHVOmz8PfxP54gX2D8lhwCDRzyut5P%2FEs%2FnSH2yklV6qpvtDqolVa9KWdFsa3VPL9eoy82xt&X-Amz-Signature=5507461fc7676644480741cfe9a8a8d78c8772ec7fda9f3396c0588eecc97034&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
