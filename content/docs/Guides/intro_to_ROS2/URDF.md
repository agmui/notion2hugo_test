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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDEY25Z%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMbS%2FwLPVXxVSOyE5l4FRoKBMNYfEz6Wfo6NLpahb%2FTAIhAKAxwRH%2FMUkPt8dPjkSdCqMOsElRW19FeYHmGlWOs%2B18KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvbpqdJ7FZWErOP4Aq3AMa8augxlmfdjtwQcR%2B2VEBasU9uDF%2BVHfIT2r55ucVmpAUsnuG%2FsZVhJCPAorl%2BWjNQePI780pCFmr2bJbN%2FxulyuLU9PiwuYhCX7eSiHAf%2BpfifGR1qfDRijWMDp0fux6n9py8DHtkTt7A3dSMKk7GL8EwAv05jrVL89EtmxnIxX5lpjn65%2F62%2Fg%2BzYxhu5vqes2sTwI0A636f%2FEiO4MW4Aup4367yoYZatXJzcvVnu5FtOt5a1StqFrXToIf5Z1jkFXPW%2FwsBNtCy2KScyHn12XxhinsY8aM4cQA4tsKqrt%2Bs%2FtTXXp%2Bj9GqXJQP2D9mQP0StRXKrPntiF9CEQrk3O4RpDk%2FVGIa5sBSEi6OtFEd7R2use1ZOdCLNJIWKdY7wG6EPGYeCHXV4IEKXM3ew0l0IV%2BUoFJcgQsywbwikUAKVHOaVckYInR01Qos1lSKEF6lFgAl4i7netOC0TsHhk56FOynP22fUCvI5O3kmMkcsQ7YlxRrkLkVl5TOnO3KA8SF4%2F4dQas7K5rBfQx0QbKk6K0DP9GJrgWBflySDjnUzwmT51GS5JH9OaTd7CLfffBSHCfcCF4ScSdwjViUHNjTCOXpGCmaPxCWd1rxDFZgVbuwoi17ERC8UTC21ffABjqkAbCGPMSIAsR8z1vJc%2Fai5f6UtKduyz6jYcF4SKg4LHK37xl9Jn7tF03FdiYtbgDCuLIFdpIORWNRcvPpTlVYX5%2ByrxyHdCgwil3Zd1%2BERm47eikcWW0LIlU2krUP2527fltI9ikaMLHyB36bljgTFPLNTC0FfsKmm2fZ2xtooGQXN5T%2F8a03W5V286j5p3vFk7Pj%2B4FIf3OLkPYMcScp7D2gDWef&X-Amz-Signature=19949c4b10e0829f0db47777aa644bf0afd5944d57962242184bc5c4dc8a5df2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDEY25Z%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMbS%2FwLPVXxVSOyE5l4FRoKBMNYfEz6Wfo6NLpahb%2FTAIhAKAxwRH%2FMUkPt8dPjkSdCqMOsElRW19FeYHmGlWOs%2B18KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvbpqdJ7FZWErOP4Aq3AMa8augxlmfdjtwQcR%2B2VEBasU9uDF%2BVHfIT2r55ucVmpAUsnuG%2FsZVhJCPAorl%2BWjNQePI780pCFmr2bJbN%2FxulyuLU9PiwuYhCX7eSiHAf%2BpfifGR1qfDRijWMDp0fux6n9py8DHtkTt7A3dSMKk7GL8EwAv05jrVL89EtmxnIxX5lpjn65%2F62%2Fg%2BzYxhu5vqes2sTwI0A636f%2FEiO4MW4Aup4367yoYZatXJzcvVnu5FtOt5a1StqFrXToIf5Z1jkFXPW%2FwsBNtCy2KScyHn12XxhinsY8aM4cQA4tsKqrt%2Bs%2FtTXXp%2Bj9GqXJQP2D9mQP0StRXKrPntiF9CEQrk3O4RpDk%2FVGIa5sBSEi6OtFEd7R2use1ZOdCLNJIWKdY7wG6EPGYeCHXV4IEKXM3ew0l0IV%2BUoFJcgQsywbwikUAKVHOaVckYInR01Qos1lSKEF6lFgAl4i7netOC0TsHhk56FOynP22fUCvI5O3kmMkcsQ7YlxRrkLkVl5TOnO3KA8SF4%2F4dQas7K5rBfQx0QbKk6K0DP9GJrgWBflySDjnUzwmT51GS5JH9OaTd7CLfffBSHCfcCF4ScSdwjViUHNjTCOXpGCmaPxCWd1rxDFZgVbuwoi17ERC8UTC21ffABjqkAbCGPMSIAsR8z1vJc%2Fai5f6UtKduyz6jYcF4SKg4LHK37xl9Jn7tF03FdiYtbgDCuLIFdpIORWNRcvPpTlVYX5%2ByrxyHdCgwil3Zd1%2BERm47eikcWW0LIlU2krUP2527fltI9ikaMLHyB36bljgTFPLNTC0FfsKmm2fZ2xtooGQXN5T%2F8a03W5V286j5p3vFk7Pj%2B4FIf3OLkPYMcScp7D2gDWef&X-Amz-Signature=de92b2c62a722bceeee318453d659c2929301c88c574ea2180afd3412636b33d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
