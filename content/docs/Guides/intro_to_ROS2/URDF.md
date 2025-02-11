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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIHBVA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoaGZRU%2F6f%2BHUhzs56nO0emmTPKK38nZszH3SIIxDsDgIhAILBC5pYqvLpD41ajf06qPdhoQzS2zsQupBJzTn1uBghKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDfkWSRC%2FaVETl5%2B8q3APwavdRmMyGKYl9omKcNVDwrGOQkjNwIiGwXYi6JxZKCOnOo1xpi7qkDCpOFxTqSbGemniP7nr7TRieX0tEeOY%2FAH134s7SGCcn5puQEYfV3hINHo7WIcvViUsk8GTrxLeXBMMTwN8YuZ0VUa2%2FDO4Clu2isYZoKQIGS%2FswJmjInbmn%2BPtALsyZ%2FnAi2R6hTzNF6hOHgzazIzZsUM%2Fp8UPpr3HR9LLoRaeABQSEl5mS6OL0Phb5osoT4DnftKCyXlHAXfVCb4gxDOETeMmM2W81skItNrTTAJ10Ou2MVUsDEJzPsNul%2Fag6ClZBMjbm7ENIpixVgU7LmgaGKIz0zJS0k2KCQeNyLpebh4haykieA%2Bofe5TjKS%2BJz6pmFP4o0bQQBJZ8Dk8%2BebEH8d31ayTUT1ohBc2HSuRS6h9jdEoZhmfDDMcZ1PYQPtdmqNxcSvFRcygwcJZapInBh8NCD%2BNs8WE8PSBpzU2UqjL1XiNBinggascu8JAr2wZr2Rg36dOK0pcikk8i5JHbe3zTQ%2F4zWibvut2rAARWCDkNObIJDu2zm415l2ZgnlUCCvZcAMJfzC%2BAsCWq0kmg1efwbsl5zOtOxR6CZbcA08QuSYgGTJ31jxERkXxgWVixgzCU06y9BjqkAcJoJm0nJ9%2FCElPj7wC0vMGTpi2Q9f6RDnKzjDHAtGEhFoBN4Od3WFmI0trTismlOChqyVUFUKpENulGvTC1cj8PJXiIKZqshzLOojyjKtgWGOTLVebd%2BXQ%2Fmok%2FRuxXdnInGBElJQjsGa6nRwoSEmMwVRFxZvj0%2B%2F2oVjGBxmLBmtkQxUGjYMIMMTTgRn1aUceKFOI37fMRyzPpgdz4iP6QRugU&X-Amz-Signature=c5a5a7567f57e6e73b11717b48eae4edd74ea9be8950ec25e72b19adf17e42de&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZOIHBVA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoaGZRU%2F6f%2BHUhzs56nO0emmTPKK38nZszH3SIIxDsDgIhAILBC5pYqvLpD41ajf06qPdhoQzS2zsQupBJzTn1uBghKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDfkWSRC%2FaVETl5%2B8q3APwavdRmMyGKYl9omKcNVDwrGOQkjNwIiGwXYi6JxZKCOnOo1xpi7qkDCpOFxTqSbGemniP7nr7TRieX0tEeOY%2FAH134s7SGCcn5puQEYfV3hINHo7WIcvViUsk8GTrxLeXBMMTwN8YuZ0VUa2%2FDO4Clu2isYZoKQIGS%2FswJmjInbmn%2BPtALsyZ%2FnAi2R6hTzNF6hOHgzazIzZsUM%2Fp8UPpr3HR9LLoRaeABQSEl5mS6OL0Phb5osoT4DnftKCyXlHAXfVCb4gxDOETeMmM2W81skItNrTTAJ10Ou2MVUsDEJzPsNul%2Fag6ClZBMjbm7ENIpixVgU7LmgaGKIz0zJS0k2KCQeNyLpebh4haykieA%2Bofe5TjKS%2BJz6pmFP4o0bQQBJZ8Dk8%2BebEH8d31ayTUT1ohBc2HSuRS6h9jdEoZhmfDDMcZ1PYQPtdmqNxcSvFRcygwcJZapInBh8NCD%2BNs8WE8PSBpzU2UqjL1XiNBinggascu8JAr2wZr2Rg36dOK0pcikk8i5JHbe3zTQ%2F4zWibvut2rAARWCDkNObIJDu2zm415l2ZgnlUCCvZcAMJfzC%2BAsCWq0kmg1efwbsl5zOtOxR6CZbcA08QuSYgGTJ31jxERkXxgWVixgzCU06y9BjqkAcJoJm0nJ9%2FCElPj7wC0vMGTpi2Q9f6RDnKzjDHAtGEhFoBN4Od3WFmI0trTismlOChqyVUFUKpENulGvTC1cj8PJXiIKZqshzLOojyjKtgWGOTLVebd%2BXQ%2Fmok%2FRuxXdnInGBElJQjsGa6nRwoSEmMwVRFxZvj0%2B%2F2oVjGBxmLBmtkQxUGjYMIMMTTgRn1aUceKFOI37fMRyzPpgdz4iP6QRugU&X-Amz-Signature=b43dda8c408e190448f917b079ef2ed57ba90bb510a93c79a9f508c839274462&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
