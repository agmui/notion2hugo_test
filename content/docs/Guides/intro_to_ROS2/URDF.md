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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGRRZ6Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDcGt4lgSa3Hcip3TYwC1Uuy2oa8XJO0xQOVC5EYo74FAIhALplbotoxRr%2FhBMEG1%2ByFdMVVQjo5Jh5puwdSY6ArgwVKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoWxIvZgvCjY7V%2FpYq3AMwIW%2Bc65Sz%2BehYvSYkpmf%2Bdgt2xxRYu5GlHyo1m8OgW3MB9cctW11xmwe3ZmaAyHM%2FmqqBc0Mdq%2FixYX2%2FkZ7kBlAWwbuvCOHT0tNFDomo8djLHpp4JX0D2JYSj4vNZUGO10WSj2DdgJgahiUXIim4bfFZfrVU8r2tdh4VO7e3QhttDQEWSoDpTSSTkE6aCFVTaxkVRuFe4E46EPWe27OUZYLLUdfep01F5AaqqWENQ2aLBcruRDHk3EtMbrwuOd9gj8Ttgv6EHX4BsAHHQ8nESKnaXM5yr99CEfDg5bZ9Qud5YV1EyH5Hqe4x3X2qqsjnHUdfDyZX2XsMEabfAa4psadgQDXZIUXCTc%2Fp5fEIsmMSvIesBWSN2mVVuDfKXGgVD75mvTG4oJ1gqH%2BH8pp2wz%2Fmb8y%2F3V9NARRZnFjLBLyol7rIWT4OuICCvRbeIZXR1yH%2BRCZnWLRkXtInmVBG4ryJ90rAVgidIFHKTNxZLDkN%2FwaW6SYsEq2CQVWkMm9zDcYvcoTKzH%2FlAJSzPlJMPy8mrMgow1A437ol1SIVp%2BiFpJziy5gEzqgWuTuE79F8lBbveXixmmMpERTDb9DroU6X3%2FxeR%2Bui1CP7nsH9bCnUxfi%2FVk3jy22YIjDi2t2%2FBjqkAd7bnzum1v2EiAX92wcW%2BI501EENFvfP652vCP9wzPWLXcnaODShbb8%2FkqIHXboYJee2yJvbk62gSGASaWRznT8P5qDD0a5ccAzWwE8zdgMbGTv6jk6zOtUKsIEPg6q%2Fu7ZcSvV17ifwTjpOHjXiPhbHUzxUqVGW8h0GErTfpo4cFEzeb%2BJ7xOKJ%2BaVYCVRAdvKHUJum0Z1c9KAente7PafUX1Bh&X-Amz-Signature=2e6ef4bb4e58d86846ba267e891a74a19a2c30fb68d3609af879e5f3b75fbdec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NGRRZ6Y%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDcGt4lgSa3Hcip3TYwC1Uuy2oa8XJO0xQOVC5EYo74FAIhALplbotoxRr%2FhBMEG1%2ByFdMVVQjo5Jh5puwdSY6ArgwVKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoWxIvZgvCjY7V%2FpYq3AMwIW%2Bc65Sz%2BehYvSYkpmf%2Bdgt2xxRYu5GlHyo1m8OgW3MB9cctW11xmwe3ZmaAyHM%2FmqqBc0Mdq%2FixYX2%2FkZ7kBlAWwbuvCOHT0tNFDomo8djLHpp4JX0D2JYSj4vNZUGO10WSj2DdgJgahiUXIim4bfFZfrVU8r2tdh4VO7e3QhttDQEWSoDpTSSTkE6aCFVTaxkVRuFe4E46EPWe27OUZYLLUdfep01F5AaqqWENQ2aLBcruRDHk3EtMbrwuOd9gj8Ttgv6EHX4BsAHHQ8nESKnaXM5yr99CEfDg5bZ9Qud5YV1EyH5Hqe4x3X2qqsjnHUdfDyZX2XsMEabfAa4psadgQDXZIUXCTc%2Fp5fEIsmMSvIesBWSN2mVVuDfKXGgVD75mvTG4oJ1gqH%2BH8pp2wz%2Fmb8y%2F3V9NARRZnFjLBLyol7rIWT4OuICCvRbeIZXR1yH%2BRCZnWLRkXtInmVBG4ryJ90rAVgidIFHKTNxZLDkN%2FwaW6SYsEq2CQVWkMm9zDcYvcoTKzH%2FlAJSzPlJMPy8mrMgow1A437ol1SIVp%2BiFpJziy5gEzqgWuTuE79F8lBbveXixmmMpERTDb9DroU6X3%2FxeR%2Bui1CP7nsH9bCnUxfi%2FVk3jy22YIjDi2t2%2FBjqkAd7bnzum1v2EiAX92wcW%2BI501EENFvfP652vCP9wzPWLXcnaODShbb8%2FkqIHXboYJee2yJvbk62gSGASaWRznT8P5qDD0a5ccAzWwE8zdgMbGTv6jk6zOtUKsIEPg6q%2Fu7ZcSvV17ifwTjpOHjXiPhbHUzxUqVGW8h0GErTfpo4cFEzeb%2BJ7xOKJ%2BaVYCVRAdvKHUJum0Z1c9KAente7PafUX1Bh&X-Amz-Signature=04f03b8cbb1bc50683ec63d0f7a936e06e7672f68b0daa943f4f74b2782aa3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
