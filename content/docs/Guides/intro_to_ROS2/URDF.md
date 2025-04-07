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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JI543ZD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BeHiZDNMZR2XU1MEnumOvnNrvQbkYmSvXPHci7AkQAIgGzZW%2BfaFZqxtFHYmhbRI%2Bhc8UY7%2BeDNxsEXKL8Z4OWYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD%2BYn3BxsirWB94QeCrcA%2BD8qOf8JHTCh2et1bSMcaH1dlrrA109u8k9J299orqSXkQHsicQDju2wJo6hxZWMVtzW7fOSbeyjNtl0hEd5bXjhTwesO20HcjrxRy6ppZNQXGFogsF%2B%2B4K7Wc7iRlLrcIhdX9pVE5x2nIgQQ4heIlP9cI527xnBMhQp368dbIbkfoVrjRgzuTDU1%2Bml3xClJMUjPWnCF76%2BAfjfedXQYTFuh1QJTCShj3MT2uouoD3J7QCDoFXZzzd9yFzGTBdeYGTBnJNA7kwLK1%2F%2FwLoPEalyIt51Zs9GiHRfTnMl2FHdneqVHZGz6XQElNStjqncMBFI0WuRRp9Vn%2FS8MDQea3GXa44IEKeeKBESEn%2BbhoAcCjVWxxxSz6EPyt8cXzWjnyt0gX0%2BJHhcr3Lorq49GAvr%2BEp%2FS7VjR3UEePOFb%2FtZ0B%2FcSVOcdGzWkTnGAPU7RBFY7KrXQRFu3HK1NT%2F7IaLtA5aW7lWzE06LrBgi1KhinW5JnU92NlRIkeOuv1UtR6S9Ffj71c%2F3JeuvFrJHI1KtnBn3hNavAL0yDKeq73WCl3rJsVcHPJM5EEdlC17GlrCqzIMOjzkji88nEFIKyiaTjUg%2FDz74xQ%2FhxP3v411%2Fai%2F4B%2FwjMS9hYZmML66zr8GOqUBsFg30Cvx0CZ9PC4IQkJC8zjlNnRwgmU%2Bauoz7AuNubyI%2BWZ7vzwB5qOi67HlvpdVb4b81GGT1AHnSbSkPcOnoRyKavAYPRwp1UbHJHGx6Zd5OXTes%2BEYkqXrvNrljJRYK20GcQndYzUTTwLIz2yjQJntKkVT1Wk7aB7dVlvdHpdGahL%2FNOaJYciazpYaM3NxPUSNhncld2SZhJ35AVfYRZ9lsY5I&X-Amz-Signature=544a215127926c7d522e42d256c8edaaf28396afea894a62e0331e27bd0bce90&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JI543ZD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BeHiZDNMZR2XU1MEnumOvnNrvQbkYmSvXPHci7AkQAIgGzZW%2BfaFZqxtFHYmhbRI%2Bhc8UY7%2BeDNxsEXKL8Z4OWYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD%2BYn3BxsirWB94QeCrcA%2BD8qOf8JHTCh2et1bSMcaH1dlrrA109u8k9J299orqSXkQHsicQDju2wJo6hxZWMVtzW7fOSbeyjNtl0hEd5bXjhTwesO20HcjrxRy6ppZNQXGFogsF%2B%2B4K7Wc7iRlLrcIhdX9pVE5x2nIgQQ4heIlP9cI527xnBMhQp368dbIbkfoVrjRgzuTDU1%2Bml3xClJMUjPWnCF76%2BAfjfedXQYTFuh1QJTCShj3MT2uouoD3J7QCDoFXZzzd9yFzGTBdeYGTBnJNA7kwLK1%2F%2FwLoPEalyIt51Zs9GiHRfTnMl2FHdneqVHZGz6XQElNStjqncMBFI0WuRRp9Vn%2FS8MDQea3GXa44IEKeeKBESEn%2BbhoAcCjVWxxxSz6EPyt8cXzWjnyt0gX0%2BJHhcr3Lorq49GAvr%2BEp%2FS7VjR3UEePOFb%2FtZ0B%2FcSVOcdGzWkTnGAPU7RBFY7KrXQRFu3HK1NT%2F7IaLtA5aW7lWzE06LrBgi1KhinW5JnU92NlRIkeOuv1UtR6S9Ffj71c%2F3JeuvFrJHI1KtnBn3hNavAL0yDKeq73WCl3rJsVcHPJM5EEdlC17GlrCqzIMOjzkji88nEFIKyiaTjUg%2FDz74xQ%2FhxP3v411%2Fai%2F4B%2FwjMS9hYZmML66zr8GOqUBsFg30Cvx0CZ9PC4IQkJC8zjlNnRwgmU%2Bauoz7AuNubyI%2BWZ7vzwB5qOi67HlvpdVb4b81GGT1AHnSbSkPcOnoRyKavAYPRwp1UbHJHGx6Zd5OXTes%2BEYkqXrvNrljJRYK20GcQndYzUTTwLIz2yjQJntKkVT1Wk7aB7dVlvdHpdGahL%2FNOaJYciazpYaM3NxPUSNhncld2SZhJ35AVfYRZ9lsY5I&X-Amz-Signature=62d8d3bc496d7b1caa19ff9541976d8b4e18cc8e2bae476604f83cd13e097b45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
