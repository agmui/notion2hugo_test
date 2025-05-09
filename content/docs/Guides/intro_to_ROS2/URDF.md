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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64SFBWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg27aD4Wr4jOjhR8xtaqPqOkiZByEYdTbzJFGB2X2G%2FQIhAKbSdoXFUzRyj8S1kUMcnam%2Fspon394QibqZzgo%2FA1BBKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0dXuu9iA8US%2BEbCMq3ANvTNS3AVVhPvu%2FhY2qrgfTn6VVMsYgoHNZhXYuBzPzScU897IYO1HEMLvem9ZM%2BpZMU0yLsLJHCbBh%2B9bZ%2FkgX6TQyj6rwE2EJdxeJt5Vq56TE3QXjoO5RFzcbUKlWnWDVIetS9%2FlJ3XRugs31mNSUQocXwMGy%2FvDiZ8vwqw%2BvO%2B%2FOFKdzfFl%2B4fVIEnm%2FM1L%2FMLi5y12ZjmZfRiRc6T%2Bws%2Be9ueMoylCMfKUecTRzmDSScepNTXpNMc963dRTuFAFgCLC5pdafhvZdmU5y5ZjuVm9ayg2BAs7OTAMOY5PHT96LRhVuk7JFnaiEOPrmJpPE%2Fjgv%2F8pyg%2F%2BFsSo1I8epmVlQSsObeLunJiiHqVJN3gtjB2KsgtPTFvSTJRA7rCy4A%2BkViavr%2FNdB2BuRpXQ0nvFh%2B10t%2Bbw0zOuJPcQWxPq0BSp9BzJKviDaRrSuK5Cd8alF4CIdPaLRWzDK3TcE6JKOjlmlAqSALiA3FMxbtQoBBCZLsaVedmIpdq7fYxChFvc%2BGwDWEA58kjNgZN64EcR%2FJJNqNBwprez2SS3R8y%2BIseguSvBCRY6KGpf9yTtZSzEOH44FdMtkZ19W1yr8V7%2BfiXd%2BkKC6aW46e35WWdeZzY1TO5VU%2BtSKzC%2B7%2FfABjqkAb1xAQTpIW6jfySVBTYJ%2FMfVxYhsq6EfHKUIKvYYpcFTV3mn5WpADzeNtViPPmA572aO8fEBjy%2BRnEFtRblw2qDppaaFH2ezxoULWSWImR2I10vTUlBhnrQNK2zw3NLQbvti0ew2n7a8Qtx8Miex4iqXHhXiWjaU63qK9q98cUOktvMq2NkVXiqtlCm3IW4a8kTOQdfzaTQy%2FyI55R4NHx36lb5y&X-Amz-Signature=818a0b50f97d55a76f4c3bc70af2a703a384cebc0a3c322a0defdd1897f66d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64SFBWU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg27aD4Wr4jOjhR8xtaqPqOkiZByEYdTbzJFGB2X2G%2FQIhAKbSdoXFUzRyj8S1kUMcnam%2Fspon394QibqZzgo%2FA1BBKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0dXuu9iA8US%2BEbCMq3ANvTNS3AVVhPvu%2FhY2qrgfTn6VVMsYgoHNZhXYuBzPzScU897IYO1HEMLvem9ZM%2BpZMU0yLsLJHCbBh%2B9bZ%2FkgX6TQyj6rwE2EJdxeJt5Vq56TE3QXjoO5RFzcbUKlWnWDVIetS9%2FlJ3XRugs31mNSUQocXwMGy%2FvDiZ8vwqw%2BvO%2B%2FOFKdzfFl%2B4fVIEnm%2FM1L%2FMLi5y12ZjmZfRiRc6T%2Bws%2Be9ueMoylCMfKUecTRzmDSScepNTXpNMc963dRTuFAFgCLC5pdafhvZdmU5y5ZjuVm9ayg2BAs7OTAMOY5PHT96LRhVuk7JFnaiEOPrmJpPE%2Fjgv%2F8pyg%2F%2BFsSo1I8epmVlQSsObeLunJiiHqVJN3gtjB2KsgtPTFvSTJRA7rCy4A%2BkViavr%2FNdB2BuRpXQ0nvFh%2B10t%2Bbw0zOuJPcQWxPq0BSp9BzJKviDaRrSuK5Cd8alF4CIdPaLRWzDK3TcE6JKOjlmlAqSALiA3FMxbtQoBBCZLsaVedmIpdq7fYxChFvc%2BGwDWEA58kjNgZN64EcR%2FJJNqNBwprez2SS3R8y%2BIseguSvBCRY6KGpf9yTtZSzEOH44FdMtkZ19W1yr8V7%2BfiXd%2BkKC6aW46e35WWdeZzY1TO5VU%2BtSKzC%2B7%2FfABjqkAb1xAQTpIW6jfySVBTYJ%2FMfVxYhsq6EfHKUIKvYYpcFTV3mn5WpADzeNtViPPmA572aO8fEBjy%2BRnEFtRblw2qDppaaFH2ezxoULWSWImR2I10vTUlBhnrQNK2zw3NLQbvti0ew2n7a8Qtx8Miex4iqXHhXiWjaU63qK9q98cUOktvMq2NkVXiqtlCm3IW4a8kTOQdfzaTQy%2FyI55R4NHx36lb5y&X-Amz-Signature=0d76f7bdf8410f4dfd5095039f8a781c8f8a74846e972a4059e18bc9f74da6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
