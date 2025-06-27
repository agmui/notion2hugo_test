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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PAF642H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCfkfGP1edRJAYXxLzqEH2VtVnVSjeCUUbrRyrBur2wygIhAKoFE8vzYAc0UqkSQJXMBZmpu%2BZdAJ1eM6fe6X40LmTeKv8DCGoQABoMNjM3NDIzMTgzODA1IgyKikA5Z77kiatMAX0q3AOmlIqQZQuRr9%2FrPFMs%2BoJOmgHE95qolhMne11wnfSGqnzukPnGgNk8T%2BNpdTk1DkGTCuHwxZPo3FT3kmtvsih%2Be4D8c5APZOgfTzyxxm3E7L454Ob%2Bnf%2BpT10abJK5Rj9I5Iz6XoDkA2kGOm7ilc%2FTAQUXii%2FfdVX6%2FgpOB5T1sFlF9tq7aQVMaTR3LRCdBSnT6zR2%2F0lp%2F%2BXI99kT22epmzbk6WmOZ8mS7OsmLOlpAyiZPw2mETS3u1M%2FX3G%2B9LWcalSXn5V6U%2BDVSrnkPzjvq6Bidqy1E6KNiMh32lnpG1VWh%2BxQxXp29fvf%2FMtVxk46t2dwCHOVhE0EzqCmKcPLvuq3f0%2BaqSXJ3bTOeG%2FUlX1A%2F47GqkTngAaYrbTY8vzFqdEWGp5AKOEw8MdUDlbEW5BSpIwvMA2bPeFKuYHVFBoSrLf6AbaWpNkqXin%2BbVR%2BCCDmkpnrDmlyx5gM1mKRJ2cPFvWVaDL%2BZQM17DNGmFQnj8T3OXb7ah48lDrTPKlWwa22Jq6ljaiwu1Wzri6b2uv%2FXF6NPA%2BlUAvghDgMT%2FdXrhLSvM%2FwPOLrqmDW3PTIMgDxSyT6bkpfhk52Bnm0v53EXhsK3NQPV6zWNN55tmHdaB1IzyNAn2K%2BlDCvy%2FfCBjqkASQTccPjYdM2OtmaX2Q05jlatnPmNJC6Xu1Yo0G8TNIBBnVj0bu6dT68tnO3cYA03pybjKmh0Mv%2FNdsPfwKR4QkRHbpp1BN5JO8zolLpiJCszpPK4Sc7aU7opSaNn8vVs1O8TC84R%2BLNnCohjDWtKRqKG8sEaPv1Un14rM6WIZaKi9vOE2rpAP4YwD7OQXCCjehiDr%2BvcxLPahJkV9sHgYeY7kQa&X-Amz-Signature=c2e3b70bf10f5bd49b406810dd88b81a01bf4e19aad4680f9c1deb96ffee78e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PAF642H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCfkfGP1edRJAYXxLzqEH2VtVnVSjeCUUbrRyrBur2wygIhAKoFE8vzYAc0UqkSQJXMBZmpu%2BZdAJ1eM6fe6X40LmTeKv8DCGoQABoMNjM3NDIzMTgzODA1IgyKikA5Z77kiatMAX0q3AOmlIqQZQuRr9%2FrPFMs%2BoJOmgHE95qolhMne11wnfSGqnzukPnGgNk8T%2BNpdTk1DkGTCuHwxZPo3FT3kmtvsih%2Be4D8c5APZOgfTzyxxm3E7L454Ob%2Bnf%2BpT10abJK5Rj9I5Iz6XoDkA2kGOm7ilc%2FTAQUXii%2FfdVX6%2FgpOB5T1sFlF9tq7aQVMaTR3LRCdBSnT6zR2%2F0lp%2F%2BXI99kT22epmzbk6WmOZ8mS7OsmLOlpAyiZPw2mETS3u1M%2FX3G%2B9LWcalSXn5V6U%2BDVSrnkPzjvq6Bidqy1E6KNiMh32lnpG1VWh%2BxQxXp29fvf%2FMtVxk46t2dwCHOVhE0EzqCmKcPLvuq3f0%2BaqSXJ3bTOeG%2FUlX1A%2F47GqkTngAaYrbTY8vzFqdEWGp5AKOEw8MdUDlbEW5BSpIwvMA2bPeFKuYHVFBoSrLf6AbaWpNkqXin%2BbVR%2BCCDmkpnrDmlyx5gM1mKRJ2cPFvWVaDL%2BZQM17DNGmFQnj8T3OXb7ah48lDrTPKlWwa22Jq6ljaiwu1Wzri6b2uv%2FXF6NPA%2BlUAvghDgMT%2FdXrhLSvM%2FwPOLrqmDW3PTIMgDxSyT6bkpfhk52Bnm0v53EXhsK3NQPV6zWNN55tmHdaB1IzyNAn2K%2BlDCvy%2FfCBjqkASQTccPjYdM2OtmaX2Q05jlatnPmNJC6Xu1Yo0G8TNIBBnVj0bu6dT68tnO3cYA03pybjKmh0Mv%2FNdsPfwKR4QkRHbpp1BN5JO8zolLpiJCszpPK4Sc7aU7opSaNn8vVs1O8TC84R%2BLNnCohjDWtKRqKG8sEaPv1Un14rM6WIZaKi9vOE2rpAP4YwD7OQXCCjehiDr%2BvcxLPahJkV9sHgYeY7kQa&X-Amz-Signature=9abee2bdb22b9e24bf3c4a46b639624c15e8dcf0b36aa58054dfcba8fe0fd406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
