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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QILJLA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJFMEMCIAlhKGQH4yZMAqj8%2FIumkIntCmfjgrqdYbCOu8jk1VqtAh9rtrx4RsikdO9Q8KKPtHdvZZpUawArODHl4mkTUNaAKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ%2FEtDWk55MQhV%2FDsq3AN4gw1n4i1QGT3TZ7l8kwI%2B2I%2B4ogmfBk4cqDioDJ9172VkaAaH%2BnRvTYZA1gOre4J0povime90ArhjubxTbQFoxl3y6ea2V5WRmGzIprmQgBtATdjRMW0kbKWU24eXyd3MM%2BEi605MZ414QoDr2GP4IUWFQvEW%2F%2Bzk%2BGlFFRmb0ZQ%2BC6qR4XD861pfHIIrZNYNSpivKELa00DUb49J0Qfau7N78z9DQp3hYsKw5sde01NHMx%2BOlFAoSSs9p%2BaevRSJkRsSlRLCwo85erivpr1G4tLF5MnJBEKYbu41okEs8f9ESyKPvSDXokl8x9nOJqo59%2FPfaffMcEZ5SYgzVRw7hh5B5ems2cPumIGmHGW%2FBl1j0Y0oy8q63bkXQ8c65pSNHvwK2jLdqoP5xMp44aehoi3wcghNh4HzyTP9PUba2SEt6SgPKSprWsvJfkmMsOCF9I76LyYqAN7xZQM3Ue%2FKTbcC4ReVlADrNimuYWEgAeiC7GDcHBKz6zJfci27SkHQVuhQt9xHGd99IJdO7EFz4IHX%2BFR%2FWFqHrUnAb5lMB84j3jaiD%2B%2BQXNL0e83fK7qGMfDyW%2F%2F4%2FQ1kO%2Bkhlo6OfeaFg%2FLOKaXCzHL772qM3Qo4AEj2gYA0A6zlGTDD9oO%2BBjqnAQRovJSLFUkRDURpjLOGlFeCnyNXKz1xbazRiq902n%2BASRTOcBesU5aefq90ORRroHtizxt5FJtBVrsRAsVq2oeYe2OIAxr5gxpVPyjf1j7DQn1jYHt7B9LI77zGCrYie%2Bfb5e60VPRXXSVIXrI8YRUDS4qLUse6vaBLH6WdEGQliqtmRzi7oaOmgC8GZH5rUwM9NFtzPHcOBztT2CywZUbywwro8lcY&X-Amz-Signature=f300159c0bab6a8f429c8c6ff0ae25463eea222b250baf069fdbf4cb32adf425&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QILJLA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJFMEMCIAlhKGQH4yZMAqj8%2FIumkIntCmfjgrqdYbCOu8jk1VqtAh9rtrx4RsikdO9Q8KKPtHdvZZpUawArODHl4mkTUNaAKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ%2FEtDWk55MQhV%2FDsq3AN4gw1n4i1QGT3TZ7l8kwI%2B2I%2B4ogmfBk4cqDioDJ9172VkaAaH%2BnRvTYZA1gOre4J0povime90ArhjubxTbQFoxl3y6ea2V5WRmGzIprmQgBtATdjRMW0kbKWU24eXyd3MM%2BEi605MZ414QoDr2GP4IUWFQvEW%2F%2Bzk%2BGlFFRmb0ZQ%2BC6qR4XD861pfHIIrZNYNSpivKELa00DUb49J0Qfau7N78z9DQp3hYsKw5sde01NHMx%2BOlFAoSSs9p%2BaevRSJkRsSlRLCwo85erivpr1G4tLF5MnJBEKYbu41okEs8f9ESyKPvSDXokl8x9nOJqo59%2FPfaffMcEZ5SYgzVRw7hh5B5ems2cPumIGmHGW%2FBl1j0Y0oy8q63bkXQ8c65pSNHvwK2jLdqoP5xMp44aehoi3wcghNh4HzyTP9PUba2SEt6SgPKSprWsvJfkmMsOCF9I76LyYqAN7xZQM3Ue%2FKTbcC4ReVlADrNimuYWEgAeiC7GDcHBKz6zJfci27SkHQVuhQt9xHGd99IJdO7EFz4IHX%2BFR%2FWFqHrUnAb5lMB84j3jaiD%2B%2BQXNL0e83fK7qGMfDyW%2F%2F4%2FQ1kO%2Bkhlo6OfeaFg%2FLOKaXCzHL772qM3Qo4AEj2gYA0A6zlGTDD9oO%2BBjqnAQRovJSLFUkRDURpjLOGlFeCnyNXKz1xbazRiq902n%2BASRTOcBesU5aefq90ORRroHtizxt5FJtBVrsRAsVq2oeYe2OIAxr5gxpVPyjf1j7DQn1jYHt7B9LI77zGCrYie%2Bfb5e60VPRXXSVIXrI8YRUDS4qLUse6vaBLH6WdEGQliqtmRzi7oaOmgC8GZH5rUwM9NFtzPHcOBztT2CywZUbywwro8lcY&X-Amz-Signature=efc6fa274d5b03db34bc7cfbd37c646636cd6ec86b0c43a0fb1f30ba927c9e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
