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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSN2ROZC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD9pYi5fSXsf%2BMXqj5ReOYbwBjWBVAdDkutrBYWUT3kdwIhAOdkcWURs0Fg%2B%2F3U5Ldi1Nry1x8uZ%2Ff5DPzeaSUZalCNKv8DCHwQABoMNjM3NDIzMTgzODA1IgxlPYItc01uFhHcYmIq3AOL%2BWq2xQsstqGpUL6ccYaKWdTYJ9PTh%2Fz5p3LkE8ojA3pUE%2ByTVErdlb4f%2FXuH1w1UUAbAiw8BT6fmGequEmVN0SB3c0NoRxoYGw3VkF8iZ%2FwX4vuAxeImIWr%2F4dMYY4jVNxssEVXfAVMeCFjVh3c66xg390rBFiBcCQH1cKeXMFDGWMhqxAv%2BthnDnI5J%2FbeCqt8PguJGHquE%2BVdvuBhxJPF7IucNFBeKTBLcG%2FVl69x8OtunZK7DrAEfJL4r4yCdBzo%2B97E2%2FObrQqhy%2BjduBOq9G8Re%2Bepb8W0Uipezq%2FYsjpgY2UzD5EEtMZfTBVmeuJOBOLHcAgdXAAr89bl77aPlgKKvPHeSAU%2B1Fzy3QRlWX25nBZCl%2BgViwDFzwBrIRqCeu%2BvE205a%2F%2F4G7OTwGNZoXX9P%2B%2BtDjkvm7GiUoAC%2FzeTt1wTHcIO6xt8GcfQnyKMehpz%2Bg%2FMk9IatTYAISVYJt12LAzo6WdrAlVJi8tb7%2Bw5QqxQ94OJ1Kpv%2FnihSB4Afau1WmIv31DI6OyqHV%2BaVEr9SqAky8fVY35%2BL2MVgL8oORPs4xbRUUOPk%2FeJV77ESNvFNDMGQg2B1AwbKENWP%2FfaXmzKuCqlrnpou5EdSVrRJ%2Blk4XV9SSTCG8YK%2BBjqkAb9wotdaq%2BxlmIQCZJ53iB1OXm1kN%2Bv%2FvqBL9OnJejGuxP%2FUBOU5B6j4To9FZqoJMjQnKynGgV7wkBZPKmhhQ%2Bm%2FMp9TKfmmrzPAFERlJc940VFggYVQ2CMOv0SNMDPLp3rxQODo6lnhzGUsYhPaPvqDVJZ7uzbzFOMJWCxLwIypP%2B%2BETVOcZLIepex%2FF0eoZCScIe2IPeX2riwAftzi4YvAHwP%2B&X-Amz-Signature=d80f3ebb6c9b63429af884782dbbeab3821c2ef49eb6f65962c15f30ed0bdb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSN2ROZC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD9pYi5fSXsf%2BMXqj5ReOYbwBjWBVAdDkutrBYWUT3kdwIhAOdkcWURs0Fg%2B%2F3U5Ldi1Nry1x8uZ%2Ff5DPzeaSUZalCNKv8DCHwQABoMNjM3NDIzMTgzODA1IgxlPYItc01uFhHcYmIq3AOL%2BWq2xQsstqGpUL6ccYaKWdTYJ9PTh%2Fz5p3LkE8ojA3pUE%2ByTVErdlb4f%2FXuH1w1UUAbAiw8BT6fmGequEmVN0SB3c0NoRxoYGw3VkF8iZ%2FwX4vuAxeImIWr%2F4dMYY4jVNxssEVXfAVMeCFjVh3c66xg390rBFiBcCQH1cKeXMFDGWMhqxAv%2BthnDnI5J%2FbeCqt8PguJGHquE%2BVdvuBhxJPF7IucNFBeKTBLcG%2FVl69x8OtunZK7DrAEfJL4r4yCdBzo%2B97E2%2FObrQqhy%2BjduBOq9G8Re%2Bepb8W0Uipezq%2FYsjpgY2UzD5EEtMZfTBVmeuJOBOLHcAgdXAAr89bl77aPlgKKvPHeSAU%2B1Fzy3QRlWX25nBZCl%2BgViwDFzwBrIRqCeu%2BvE205a%2F%2F4G7OTwGNZoXX9P%2B%2BtDjkvm7GiUoAC%2FzeTt1wTHcIO6xt8GcfQnyKMehpz%2Bg%2FMk9IatTYAISVYJt12LAzo6WdrAlVJi8tb7%2Bw5QqxQ94OJ1Kpv%2FnihSB4Afau1WmIv31DI6OyqHV%2BaVEr9SqAky8fVY35%2BL2MVgL8oORPs4xbRUUOPk%2FeJV77ESNvFNDMGQg2B1AwbKENWP%2FfaXmzKuCqlrnpou5EdSVrRJ%2Blk4XV9SSTCG8YK%2BBjqkAb9wotdaq%2BxlmIQCZJ53iB1OXm1kN%2Bv%2FvqBL9OnJejGuxP%2FUBOU5B6j4To9FZqoJMjQnKynGgV7wkBZPKmhhQ%2Bm%2FMp9TKfmmrzPAFERlJc940VFggYVQ2CMOv0SNMDPLp3rxQODo6lnhzGUsYhPaPvqDVJZ7uzbzFOMJWCxLwIypP%2B%2BETVOcZLIepex%2FF0eoZCScIe2IPeX2riwAftzi4YvAHwP%2B&X-Amz-Signature=6a90857f61e25a3d4efa10ecb16adfe62960d2921bd03bb8a544a3e1cef3aef3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
