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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5AYQEK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCRyBVW66lKcMtNBAyRPhpG2XoceenkYqbFjr1WHHa5WwIhALgiUJYv64GuSv5TiPCoflSfvwT4%2BVUitbvwqca0ogC6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6I%2BBlUg9IR9rwRx8q3ANlhoaVLvUffKMtVgWrbmzsCc2GtJcaAQECzC3oybyKyZRh2wEvq7s1ojtwGdFq7Av3d59HAtGVjKqsL5b7ruoSCP%2BBCBd%2BTL9fkCipJ8znvvfKZyrU5Cm3p4BpFpOe0pXpY%2FrJd%2FNO%2BnTaTtNEzRN9Tp6uvtz6Vfbo%2FyQDeHepst%2FnrbNQNcFydeBJxHYlgwvg2ZmVpOQxTisqEvHLEi7ocZ8RDY5cVfZKi%2Fls318q9DvN5sCALU6iE7R2AcTxP092jLBVFa2Vg51b6lfbCvX9OJWIxN7VstVXJa3UyXvDgdK5%2FFxsxCEko6g6BMsr8rtHKB0lfTUtpW7odGYJiT03rbVi9QrCmyDQUnvjSkarKdYAV5tekaqt1sfG0OXA%2BUxtKsv%2FabYDqsHZkBMuFsIPQDWJh6uksLChXR3oypMkj%2FkEz4wvGmr%2FIpt2iu7YYb8cdNhrQ41Afo0LlCM2YxlGqxgwhGo99YCTiog%2B4Mrfn26QXZp2sl1Tfgb3Y0JJ1LgedTMDc80i8OKJyqzcASPYPdW3mqoJ2fMgaiWZoiDa%2FFy131OLcljYLh2V4n7dWMlbzh2xCj0Wbw0Ox85bO7hThY6hL7TdYc3eixinFgmtJ%2BeKw1MnKwzfYbCq7DCd8KO%2FBjqkAdbvRJrs5V%2Bs%2BCSbEXi8AyF4wsGNksA%2FGTKuT9hITl%2BkpEpsgMdv0O8mEMpJWEyWkchdhTd8q5LQiccqPAPUDEQo9gvxRWfvvbP2PmPt4yysXUvrupyIAXUHkuqOlqbmSJz%2B%2FtsWX7xPMxdr8jfqxGRhAjiviy%2Fjv2NgcR3kWq1KBJpb%2BywHhbMo%2BrPp%2BZcJ6BfhInB%2F5h3N5X1JgBWWV81E%2FWm%2B&X-Amz-Signature=5ac9e08752cdd4aba83f00c31eba193a869b9f5f8e44d79236b702b236ff1cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5AYQEK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCRyBVW66lKcMtNBAyRPhpG2XoceenkYqbFjr1WHHa5WwIhALgiUJYv64GuSv5TiPCoflSfvwT4%2BVUitbvwqca0ogC6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6I%2BBlUg9IR9rwRx8q3ANlhoaVLvUffKMtVgWrbmzsCc2GtJcaAQECzC3oybyKyZRh2wEvq7s1ojtwGdFq7Av3d59HAtGVjKqsL5b7ruoSCP%2BBCBd%2BTL9fkCipJ8znvvfKZyrU5Cm3p4BpFpOe0pXpY%2FrJd%2FNO%2BnTaTtNEzRN9Tp6uvtz6Vfbo%2FyQDeHepst%2FnrbNQNcFydeBJxHYlgwvg2ZmVpOQxTisqEvHLEi7ocZ8RDY5cVfZKi%2Fls318q9DvN5sCALU6iE7R2AcTxP092jLBVFa2Vg51b6lfbCvX9OJWIxN7VstVXJa3UyXvDgdK5%2FFxsxCEko6g6BMsr8rtHKB0lfTUtpW7odGYJiT03rbVi9QrCmyDQUnvjSkarKdYAV5tekaqt1sfG0OXA%2BUxtKsv%2FabYDqsHZkBMuFsIPQDWJh6uksLChXR3oypMkj%2FkEz4wvGmr%2FIpt2iu7YYb8cdNhrQ41Afo0LlCM2YxlGqxgwhGo99YCTiog%2B4Mrfn26QXZp2sl1Tfgb3Y0JJ1LgedTMDc80i8OKJyqzcASPYPdW3mqoJ2fMgaiWZoiDa%2FFy131OLcljYLh2V4n7dWMlbzh2xCj0Wbw0Ox85bO7hThY6hL7TdYc3eixinFgmtJ%2BeKw1MnKwzfYbCq7DCd8KO%2FBjqkAdbvRJrs5V%2Bs%2BCSbEXi8AyF4wsGNksA%2FGTKuT9hITl%2BkpEpsgMdv0O8mEMpJWEyWkchdhTd8q5LQiccqPAPUDEQo9gvxRWfvvbP2PmPt4yysXUvrupyIAXUHkuqOlqbmSJz%2B%2FtsWX7xPMxdr8jfqxGRhAjiviy%2Fjv2NgcR3kWq1KBJpb%2BywHhbMo%2BrPp%2BZcJ6BfhInB%2F5h3N5X1JgBWWV81E%2FWm%2B&X-Amz-Signature=b521c215d7db38222bed6eb59c611f1138926391d4855c4c5cbcc81640480feb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
