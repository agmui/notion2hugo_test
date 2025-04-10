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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHSC7PI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDoELEoYTyBUZl45YmqwQ6wUkOd2beyUUwkJkj3e0QT%2FAIhAL5X26Fp%2BgHLf1UWd%2BgGg5tMMD9KtAcdibMOUSPsgStUKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUWu9S2bJ1%2F7CkZ5Qq3ANsY86TF0nhV5kDC%2FjFyQvcKuhCL4spBNBu3Y2gD%2Bq1hT5Vr0gwA2CmfKKlWtdZdYJTVGTyPOwEuujF9zCW4W2F91qCprOavaknpaFovFLO0ASURTo88Sa%2BmQQr9SvhQh3563hfg5P49%2FEqfPIoAK2JAwKOJeQq9%2B0jiG6wAbA48Y1owDr58%2Bx3lme0C55UTd7PUDfYjqdJxLz8Ts6nuXsLrkwojvbYlFloN3Zl7mEnU6WOrnFQlZ9NSlN%2BzkbZuVH3qcJ8zC5sfranKd7YTg7o%2BGBSIV2f1lpmEG%2B73jEN7cHSo7fpqmiv2MMbXowEx6dHHOWHMphkMvZh2yZc8eMxCyTt2IjTDdu8ZvS5CifkHEhYFYWzb8C3uiPX7e0aXrxBn4hF8YV1odnkx1unPyki7GW7BxeLpfp%2Fl5Z9qwif38ht0FMiDewSPzGCoz8dItaqt0irEkUhLHm%2Bjd%2BkmKBrR23EIjBLS1MMPx6VfjGv%2BRFT2zkuB2%2FvUjm0YM4LJneg2o%2F9FVDzwvmNHyM1VR0BEOg7RM%2BPuqd8PO7zFUWeGjb7joreFJj08aeIPBcwMlMJoMGEvhNCDzOwa1yzZS%2F1OogNlSEfmkLLFvaMnDIwBEFrmfAfCCZw27XHUjDPpN6%2FBjqkAdv7Vg%2Bv45Ahr2dCJpSA3cdy3LHK956z6GLO0hCNYZ74z%2BS6FwgmOg4irGhBNqAlQRJEb%2FjmwBRXsro%2FZLLvUEpf8LebdqyR9I9sijgv9cj8pgzkiLgW3B7HMmVqAujwONjBSIfh%2B6uiDFfDBaflTWIaJRqgZlJhXXFhgLpwG%2BU8IpBvGkYZP%2FsBdOJzo3Q4McitYvwlos23BsUF6YLK7IRfo0CC&X-Amz-Signature=056da971ea0bcfb8b97b8bc1663f7a294f9600bdb0a1b12dd5a905214a3fe9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHSC7PI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDoELEoYTyBUZl45YmqwQ6wUkOd2beyUUwkJkj3e0QT%2FAIhAL5X26Fp%2BgHLf1UWd%2BgGg5tMMD9KtAcdibMOUSPsgStUKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUWu9S2bJ1%2F7CkZ5Qq3ANsY86TF0nhV5kDC%2FjFyQvcKuhCL4spBNBu3Y2gD%2Bq1hT5Vr0gwA2CmfKKlWtdZdYJTVGTyPOwEuujF9zCW4W2F91qCprOavaknpaFovFLO0ASURTo88Sa%2BmQQr9SvhQh3563hfg5P49%2FEqfPIoAK2JAwKOJeQq9%2B0jiG6wAbA48Y1owDr58%2Bx3lme0C55UTd7PUDfYjqdJxLz8Ts6nuXsLrkwojvbYlFloN3Zl7mEnU6WOrnFQlZ9NSlN%2BzkbZuVH3qcJ8zC5sfranKd7YTg7o%2BGBSIV2f1lpmEG%2B73jEN7cHSo7fpqmiv2MMbXowEx6dHHOWHMphkMvZh2yZc8eMxCyTt2IjTDdu8ZvS5CifkHEhYFYWzb8C3uiPX7e0aXrxBn4hF8YV1odnkx1unPyki7GW7BxeLpfp%2Fl5Z9qwif38ht0FMiDewSPzGCoz8dItaqt0irEkUhLHm%2Bjd%2BkmKBrR23EIjBLS1MMPx6VfjGv%2BRFT2zkuB2%2FvUjm0YM4LJneg2o%2F9FVDzwvmNHyM1VR0BEOg7RM%2BPuqd8PO7zFUWeGjb7joreFJj08aeIPBcwMlMJoMGEvhNCDzOwa1yzZS%2F1OogNlSEfmkLLFvaMnDIwBEFrmfAfCCZw27XHUjDPpN6%2FBjqkAdv7Vg%2Bv45Ahr2dCJpSA3cdy3LHK956z6GLO0hCNYZ74z%2BS6FwgmOg4irGhBNqAlQRJEb%2FjmwBRXsro%2FZLLvUEpf8LebdqyR9I9sijgv9cj8pgzkiLgW3B7HMmVqAujwONjBSIfh%2B6uiDFfDBaflTWIaJRqgZlJhXXFhgLpwG%2BU8IpBvGkYZP%2FsBdOJzo3Q4McitYvwlos23BsUF6YLK7IRfo0CC&X-Amz-Signature=14bc56bd52aba830861d40b78e20fa545f481d2194aedd4ae256399a8c0a510c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
