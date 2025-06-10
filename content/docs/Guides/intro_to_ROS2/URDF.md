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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPFCAJE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdYN2kF9uYejNDT%2BekxolzoXD68Rp3Fzppz4wbbHHq3AiEA6Mx1cDkkmspA3%2BC%2F%2Bqjhfwx9OugYl%2Bgp9jGcpz5GUq0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVCMglqbB7MsfZ%2FXCrcA9a%2FkfM8zreaV8U4lho71Mw6CupiENgSJSAvQ1AAcIh2mUjqzYbG4z8yWVvVqifAHIe82FmrRCvef4sWWjQEXBt%2FKqPphdonsPMmN2ggvQ%2BVYE1mT2Rd2KoKpFglJ7cy3CqcegEohart%2FN0Xw3eXyvojd0b10I0IYM%2BoTkXgKjmMoXwUarfzQVt815QFAO9u9GXLhOyF0nkieX6gK%2BaE4%2BEVW5r1vnUJlcUIGRSNOUb9GecvztYNrnYrSq2bzHX6p04QVTqqwyjJfZu1JynvhLrCgbHuibGzKNbi37Kb%2BHUMtD202K3HG7RC633DHw88abPWDptC7Ebdol1NNQcjB0ZUXgYeb1dvQ8FH%2BHSW44V3Q5Z%2BgpnigX23x9Aa3iJeDLqJjk3SQ%2BHSnJ5zbTL%2Fo5D6LZfkLbA7CnYXaM2kukjIbPPDWCitk5%2FsMqv5PUSvAyW5MHnG%2FLGHbtJ35YhJKVcjeXQAtFOJDIxKWD4WwvcxlXg2YuwYLnx3nNi%2F0Tz08pTUtHTezOA%2B6Dty9QpPwUy0AhrJ%2B20Z9mGFhY3rOSeTfMeEjlifBFljYoWEvAKq3NoBjWX1XYWPqf4sx5bUKyKYm3XiaPYjU%2FzT8n6PO6f9lbtW74YqKcMCvaR1MNiIosIGOqUB5n3er%2FqVW2OUv2EkgrU%2BM6zGYOtr0t5tinG6Yt4N%2FVRA1a2LZSTGxi8y0zDVJovxnHw9AVi4UB4eWEDIvCuhw4QE9tC9p%2BSEt9cCQ0Kc9bnJb2zYpf%2FTsJW21ZIEr7mhFqX6Awk6rndPfdvsz2VqR6UfaJkmmfwO1d21DmBDhK8gMnIDVyhSLfk3sI%2FGRG%2Fjt9Ti02fOVaeLCXQNQtY0OErYlIqN&X-Amz-Signature=f138e22552aca9bb1210cefec83102da1a15e8ab8fc9581472d9089d634b0d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPFCAJE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdYN2kF9uYejNDT%2BekxolzoXD68Rp3Fzppz4wbbHHq3AiEA6Mx1cDkkmspA3%2BC%2F%2Bqjhfwx9OugYl%2Bgp9jGcpz5GUq0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVCMglqbB7MsfZ%2FXCrcA9a%2FkfM8zreaV8U4lho71Mw6CupiENgSJSAvQ1AAcIh2mUjqzYbG4z8yWVvVqifAHIe82FmrRCvef4sWWjQEXBt%2FKqPphdonsPMmN2ggvQ%2BVYE1mT2Rd2KoKpFglJ7cy3CqcegEohart%2FN0Xw3eXyvojd0b10I0IYM%2BoTkXgKjmMoXwUarfzQVt815QFAO9u9GXLhOyF0nkieX6gK%2BaE4%2BEVW5r1vnUJlcUIGRSNOUb9GecvztYNrnYrSq2bzHX6p04QVTqqwyjJfZu1JynvhLrCgbHuibGzKNbi37Kb%2BHUMtD202K3HG7RC633DHw88abPWDptC7Ebdol1NNQcjB0ZUXgYeb1dvQ8FH%2BHSW44V3Q5Z%2BgpnigX23x9Aa3iJeDLqJjk3SQ%2BHSnJ5zbTL%2Fo5D6LZfkLbA7CnYXaM2kukjIbPPDWCitk5%2FsMqv5PUSvAyW5MHnG%2FLGHbtJ35YhJKVcjeXQAtFOJDIxKWD4WwvcxlXg2YuwYLnx3nNi%2F0Tz08pTUtHTezOA%2B6Dty9QpPwUy0AhrJ%2B20Z9mGFhY3rOSeTfMeEjlifBFljYoWEvAKq3NoBjWX1XYWPqf4sx5bUKyKYm3XiaPYjU%2FzT8n6PO6f9lbtW74YqKcMCvaR1MNiIosIGOqUB5n3er%2FqVW2OUv2EkgrU%2BM6zGYOtr0t5tinG6Yt4N%2FVRA1a2LZSTGxi8y0zDVJovxnHw9AVi4UB4eWEDIvCuhw4QE9tC9p%2BSEt9cCQ0Kc9bnJb2zYpf%2FTsJW21ZIEr7mhFqX6Awk6rndPfdvsz2VqR6UfaJkmmfwO1d21DmBDhK8gMnIDVyhSLfk3sI%2FGRG%2Fjt9Ti02fOVaeLCXQNQtY0OErYlIqN&X-Amz-Signature=cc5aa84530e7c65c0cbeb950ad3ec96169c3364ec387e5b591b1a5afd6672ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
