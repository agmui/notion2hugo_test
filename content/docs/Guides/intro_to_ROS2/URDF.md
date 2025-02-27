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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGLP5BD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDFXjMAi8yhLlcCirABfDzjsesejpZsL%2FVwK0T45pjm%2FgIhAN9h5teR65imPaFsVy2NoDiQzWgtiPSNRLVNFgINnX83Kv8DCHsQABoMNjM3NDIzMTgzODA1Igzyu7UQsu13lpFFyIkq3AMcKQ6mZzGKvIH4GOsx5i3pwJxliQM0AWn7jvV%2Bt3BT9J4yjpTwwRRMWXSkm2alCbLgqOhBaLuIAr6ZpStbYLqb0%2BqpPSd0Ao885KqT2AifCVqRroZe898DYzLmHqC7N%2FIdwjQlKSmWlGsAQbEzCpyW0zawaQWUp%2FQSKoSUaM%2Fq0GDTyoNg7YhiHDH7WW7mnAlaxTMb0Ey7hTn2ZLUVB1aeTQzLgwXl6Tz%2FZRScaaP0Qu5g6HVrFLbrm2XLpE0CqbKMrJ6d3YKRDJ3Ncx8iaKNP8L2V14%2BcnbjeiWlOYNjbglBgmgOEm6oDPy%2F21nKi0wiFcagkzzknBadVFn6LRbS6BuHESVbuUJ%2Bb8yaoy8A1cPOGpS0cLo3dCXKGw%2BoIShxTzV242aM8Ujgjasz9Nd2fOmptHdN4rdHXTmNKbi%2FEB4FBP2wOX0W2PRz8RL%2BUK%2BZ75d%2FBGarik3JzChFunRUFfwmbaZAPGciv9xPxrMqRuygGo7vcyoVK%2F021CWs48JDxWZ6KdfWa66uDEYdnB1m5KTv%2FXUr0hDSQtJvXBcNYthqcWY%2B%2Flpv94k4H7wn1bEF%2Bm626KmnmyN6D%2BU%2Fljl1TZ8JzmyNlEzZlutQ1Ev0d4rFYlFvWOnSNLv0NoDCQ0oK%2BBjqkAXII8%2B5A1EFMw8myKhMmHdJMG5N6IbemL81VqHUdz5qYr%2BlGQecCdQylqOJn6Sx3v4H%2FBvuyhKsrAPMupE4fevDNsWlklYW%2Bp2gDPOBuxwSQrlX9R9%2BiWONe2IfvxVRFpqfm103cJnQmdUZ7SK%2B96S6IBtZC69P06via6jEVAJsZ82%2BLa5dfnLXkVud%2BIXlIl8hrp%2FFMotnyK%2BLzCM80A3DFM66n&X-Amz-Signature=c9df4b8d9acf21888f8ae6375e5af8d1f1fe31d1039280b870fff7c1743dfcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGLP5BD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDFXjMAi8yhLlcCirABfDzjsesejpZsL%2FVwK0T45pjm%2FgIhAN9h5teR65imPaFsVy2NoDiQzWgtiPSNRLVNFgINnX83Kv8DCHsQABoMNjM3NDIzMTgzODA1Igzyu7UQsu13lpFFyIkq3AMcKQ6mZzGKvIH4GOsx5i3pwJxliQM0AWn7jvV%2Bt3BT9J4yjpTwwRRMWXSkm2alCbLgqOhBaLuIAr6ZpStbYLqb0%2BqpPSd0Ao885KqT2AifCVqRroZe898DYzLmHqC7N%2FIdwjQlKSmWlGsAQbEzCpyW0zawaQWUp%2FQSKoSUaM%2Fq0GDTyoNg7YhiHDH7WW7mnAlaxTMb0Ey7hTn2ZLUVB1aeTQzLgwXl6Tz%2FZRScaaP0Qu5g6HVrFLbrm2XLpE0CqbKMrJ6d3YKRDJ3Ncx8iaKNP8L2V14%2BcnbjeiWlOYNjbglBgmgOEm6oDPy%2F21nKi0wiFcagkzzknBadVFn6LRbS6BuHESVbuUJ%2Bb8yaoy8A1cPOGpS0cLo3dCXKGw%2BoIShxTzV242aM8Ujgjasz9Nd2fOmptHdN4rdHXTmNKbi%2FEB4FBP2wOX0W2PRz8RL%2BUK%2BZ75d%2FBGarik3JzChFunRUFfwmbaZAPGciv9xPxrMqRuygGo7vcyoVK%2F021CWs48JDxWZ6KdfWa66uDEYdnB1m5KTv%2FXUr0hDSQtJvXBcNYthqcWY%2B%2Flpv94k4H7wn1bEF%2Bm626KmnmyN6D%2BU%2Fljl1TZ8JzmyNlEzZlutQ1Ev0d4rFYlFvWOnSNLv0NoDCQ0oK%2BBjqkAXII8%2B5A1EFMw8myKhMmHdJMG5N6IbemL81VqHUdz5qYr%2BlGQecCdQylqOJn6Sx3v4H%2FBvuyhKsrAPMupE4fevDNsWlklYW%2Bp2gDPOBuxwSQrlX9R9%2BiWONe2IfvxVRFpqfm103cJnQmdUZ7SK%2B96S6IBtZC69P06via6jEVAJsZ82%2BLa5dfnLXkVud%2BIXlIl8hrp%2FFMotnyK%2BLzCM80A3DFM66n&X-Amz-Signature=d7eeb286bc183eb4aabc64d55b57d6a72ea2f1b661765935936ce3c32f9a33c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
