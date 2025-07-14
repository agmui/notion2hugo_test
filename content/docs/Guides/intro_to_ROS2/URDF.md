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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667745Y7XJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC5J9ZM890isn85llSH6AolZ2w%2Fjn52SjH14FG07rTchQIhAPBrmBCZ8RG4wRKEIwkznMHPiooyFixnnGrJAaAfeMsxKv8DCCMQABoMNjM3NDIzMTgzODA1IgxwvqaXO23jZ2lN2cYq3AO818GvTnatfCIHQP7y2lPqZOgf7V9mq0VaXBGLdE3H5fwlVshw51ZdZ2DRjZVQCmTLXTyU7bLdgBD2W6m4xWHle75USGAB%2B28yHLnCgJrO2Xc1nyQ%2BA2JF3RW0vCOKBdvRtj6AS1thryjgaPk8mx2uJO0ys%2BhEOe%2B9C%2F1GlZ7CcxvZ359%2FesIcUxZBn6iuP%2BGBXaLREWJKa644Vn%2FztNulSCeCKstB%2BaIcSBy45MQKhqRV4bBNoDhXQAfrjml8cWSu%2BHDD2AiDHoTpoMs4mwr60qAKCuwlHccL11h3zPjx%2F1I6Aq9aRu5HQHUMoH%2FNEEFD5kSgW4vq7cKG0sib7zKotrAIFY8HFIEInLJGQcRKZR%2BvNBz%2BxhI%2BlIdw7YY15M2GR0LS0ajfjjDLkxm5b790Ip13lX55bTsnwIFjAOa6%2F5a%2BQMG2Vw3EDJJpNpW%2Bxg%2Bw6VHwJ1VoPbizFXB2CBpa1p6YFYPwKe1nmlMbO%2BR8ZozDgzFjtROkJr5a%2Fd2CkKWK5HVGcdsXxd%2BVcAPgYiypizaP21TCDrhmeK24MLbOwwKNsamrjN5OJsN8A8V6pc2RydEQW731qnh%2FmeIXOiZ%2Fdq6S0iXUgtaFVHbArML4LasYTFcm6Wap9i01uTCqzNHDBjqkAeHW0MC1fRIUTXuHJVITpLsKH3O%2BAK4BaLo0bDO80PYqALctGRmbn6vLZ7WC2nt%2Fth%2FIt73QHDHnTZ%2FxfzKjrfmw992S9XG8Q53tWQmTSkNFTD%2FPongWRqYbu9XjJMHHGzno2P4i9Bi0KIVZWtjiajpnuxfjOkSPHrcVPIiD4gEs%2FR2rx0ruIvL%2B%2B%2B24r85P90IRPne40mWP2TQmmR6aFf6PVJoT&X-Amz-Signature=f0fe888901dd48424a53d66cbda18e6882575fa8298ba8f4582b6f0967052629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667745Y7XJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQC5J9ZM890isn85llSH6AolZ2w%2Fjn52SjH14FG07rTchQIhAPBrmBCZ8RG4wRKEIwkznMHPiooyFixnnGrJAaAfeMsxKv8DCCMQABoMNjM3NDIzMTgzODA1IgxwvqaXO23jZ2lN2cYq3AO818GvTnatfCIHQP7y2lPqZOgf7V9mq0VaXBGLdE3H5fwlVshw51ZdZ2DRjZVQCmTLXTyU7bLdgBD2W6m4xWHle75USGAB%2B28yHLnCgJrO2Xc1nyQ%2BA2JF3RW0vCOKBdvRtj6AS1thryjgaPk8mx2uJO0ys%2BhEOe%2B9C%2F1GlZ7CcxvZ359%2FesIcUxZBn6iuP%2BGBXaLREWJKa644Vn%2FztNulSCeCKstB%2BaIcSBy45MQKhqRV4bBNoDhXQAfrjml8cWSu%2BHDD2AiDHoTpoMs4mwr60qAKCuwlHccL11h3zPjx%2F1I6Aq9aRu5HQHUMoH%2FNEEFD5kSgW4vq7cKG0sib7zKotrAIFY8HFIEInLJGQcRKZR%2BvNBz%2BxhI%2BlIdw7YY15M2GR0LS0ajfjjDLkxm5b790Ip13lX55bTsnwIFjAOa6%2F5a%2BQMG2Vw3EDJJpNpW%2Bxg%2Bw6VHwJ1VoPbizFXB2CBpa1p6YFYPwKe1nmlMbO%2BR8ZozDgzFjtROkJr5a%2Fd2CkKWK5HVGcdsXxd%2BVcAPgYiypizaP21TCDrhmeK24MLbOwwKNsamrjN5OJsN8A8V6pc2RydEQW731qnh%2FmeIXOiZ%2Fdq6S0iXUgtaFVHbArML4LasYTFcm6Wap9i01uTCqzNHDBjqkAeHW0MC1fRIUTXuHJVITpLsKH3O%2BAK4BaLo0bDO80PYqALctGRmbn6vLZ7WC2nt%2Fth%2FIt73QHDHnTZ%2FxfzKjrfmw992S9XG8Q53tWQmTSkNFTD%2FPongWRqYbu9XjJMHHGzno2P4i9Bi0KIVZWtjiajpnuxfjOkSPHrcVPIiD4gEs%2FR2rx0ruIvL%2B%2B%2B24r85P90IRPne40mWP2TQmmR6aFf6PVJoT&X-Amz-Signature=f284cde7411681586c35f9bc7660266798cecc67398eee7e46037b5614111dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
