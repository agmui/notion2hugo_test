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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2Q363J%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2BAfJkS%2Bxj5i9sliGMssxcYiK9HT2MsE%2BYU%2BV78vNYAiAXEoAHUERN89nBSSacuH4OLXrYe9a8aeTwkofM6EjPHCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM05bQFx4aVLT97leHKtwD2mNgyNBk1XHkHp3lzOjz8ae2V9KpwlfPNe5l1iFd4wskfRsaJAZVXHigcJEwtCrspC2Hc3gRoDW3ZS0H79i1Im1%2BLaeaEEe5qWE9ZVI9dv4HuS%2BIjuMECqfP9BgIxttfR9dd9NlFgBaS1VYL415g41voIamV3njQKy1ro4udwE1EvZg9t0TF8HsXviIpdm4nkWfxBeinrQItEc9fAwkrfrHwB5oC9twvv3OK6lTfGp6sYercDIk9dfqAWvIQu%2BbOlAFH0m2VGym%2FgT2thTQWMA7IZ%2F%2BEpgqXtBqxXLpXGMFYkom3YpSiFt%2FULwyy687VVDUnIFBZU7ox41%2FGjcKfspMdn9abWLZS8jybGTJZUxsp497HqMsQifaLRf%2BFsAa4%2BqLR4FghrLtzRj9N8uujqWSvHmcjrw4%2BsBGT99TSVt9rL6rUT%2F5plgfqsPNfT24MyDLQms6XaqmVqSMWtdtnBi2svDUJKqo3ngO2FeNqS3Vg5nlmpct8psz2aLRNQGaPq91%2BL%2B%2FowKYvTnV%2BrndkrQSgOXJm0h9IrVRzlSX9FjQFc07d%2BH2EiSikqTNXmOuihQ7Bs2zvm%2BRCNo%2BPD83C8qUtdBGZLVw4OEu%2BZT%2FyC16Xr6vobvvnX%2BfNQ%2BEwguPyvwY6pgFsxN9v7Ze1TQo3EkYXrn6BiJmiFgEChl3fx0Ot2SHmC4d97xd%2BQMybkqvxuttCS4ED3EmTBkSzGaaj5A7JU%2FL7nogPeheLXEFSI0aN%2FkTHZzy2fZLEyZXkzHQxMgASj5gNSj9uoTawJybc9SeGNMmO1Y0YshlU2IjxSF7sBowX%2FhmpsJmNUjH8dH69l62ToreA7RCM%2FmmDJxOA0eurF58%2FCIiIdzRS&X-Amz-Signature=3bfb0c09635baf9697c5a724bce65ba7301b577742cd0b128f67c3630b30ace5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2Q363J%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHh%2BAfJkS%2Bxj5i9sliGMssxcYiK9HT2MsE%2BYU%2BV78vNYAiAXEoAHUERN89nBSSacuH4OLXrYe9a8aeTwkofM6EjPHCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM05bQFx4aVLT97leHKtwD2mNgyNBk1XHkHp3lzOjz8ae2V9KpwlfPNe5l1iFd4wskfRsaJAZVXHigcJEwtCrspC2Hc3gRoDW3ZS0H79i1Im1%2BLaeaEEe5qWE9ZVI9dv4HuS%2BIjuMECqfP9BgIxttfR9dd9NlFgBaS1VYL415g41voIamV3njQKy1ro4udwE1EvZg9t0TF8HsXviIpdm4nkWfxBeinrQItEc9fAwkrfrHwB5oC9twvv3OK6lTfGp6sYercDIk9dfqAWvIQu%2BbOlAFH0m2VGym%2FgT2thTQWMA7IZ%2F%2BEpgqXtBqxXLpXGMFYkom3YpSiFt%2FULwyy687VVDUnIFBZU7ox41%2FGjcKfspMdn9abWLZS8jybGTJZUxsp497HqMsQifaLRf%2BFsAa4%2BqLR4FghrLtzRj9N8uujqWSvHmcjrw4%2BsBGT99TSVt9rL6rUT%2F5plgfqsPNfT24MyDLQms6XaqmVqSMWtdtnBi2svDUJKqo3ngO2FeNqS3Vg5nlmpct8psz2aLRNQGaPq91%2BL%2B%2FowKYvTnV%2BrndkrQSgOXJm0h9IrVRzlSX9FjQFc07d%2BH2EiSikqTNXmOuihQ7Bs2zvm%2BRCNo%2BPD83C8qUtdBGZLVw4OEu%2BZT%2FyC16Xr6vobvvnX%2BfNQ%2BEwguPyvwY6pgFsxN9v7Ze1TQo3EkYXrn6BiJmiFgEChl3fx0Ot2SHmC4d97xd%2BQMybkqvxuttCS4ED3EmTBkSzGaaj5A7JU%2FL7nogPeheLXEFSI0aN%2FkTHZzy2fZLEyZXkzHQxMgASj5gNSj9uoTawJybc9SeGNMmO1Y0YshlU2IjxSF7sBowX%2FhmpsJmNUjH8dH69l62ToreA7RCM%2FmmDJxOA0eurF58%2FCIiIdzRS&X-Amz-Signature=cb377a5bca8a34389cbdd285de69e4808a915128b190aa7ad60d37bfcd4bec5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
