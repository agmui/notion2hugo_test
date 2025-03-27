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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNZQ2EL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ5Ss%2Fr7p1UGrT%2BJTXQTL1%2BPpCsPBarAT2hBz9PAI5CAiEA59mmY%2BmnLGYk%2B1477B3Sgty3WbNsbRw1mxzu1ESR9K8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGVAKIAkrCfJst89DCrcA%2BYmlu7Ax%2BsG5xOsNchjPXKBJn9zK9yhiPkCdp5I19fLff3lq7MEls109v%2FmJjQ2F5AANmAH%2FIH23vm8ms4hfDxNpzoqsBJsIRAcjic8UB0qAzEJ0b4Z8h4lmSGSkfJvMUHxutyhlx%2Fdeuq2Y1KMGmxVgRRMKcKgA6i0QG9xiTKAgvE5z2mZCUpFOrnFtS4N4O9L9IKoQZPg9qo2uT4VtQDi7EfefJd5uliMFaLvucyYcFpc%2B8jSMCww6YFIwWyg4wxHZJmVo1c0TaLocsvsPjA6BW35OUjYhF%2B4aIzaC9quq3Wpf0WjPpyc7KmsfSYW965DSBc4y4zUR86%2F6URzHokp800Hzp6b9jiWhcggAjlsJsGeKnE6rX9ajxeTWCrmgMblOV8LnkoFrPRbh97sxCOh%2FTpQ8s3Ptajm3SOMTUg7ck%2BAD5NGk%2FIaEZSbZShjEpPbr3Dtfh4x2ZqDu1hlR8wIBgZRXKcVyAJzy2CO88mgePZIT%2FjcMhMLGvLLmfcUUhzUSllmKWbUestGQRhmyAF4G48BNWXozsZDwQn%2BWq8okGfufKpGPkGfWEnVn7IYbI6e5I5bWYpcYn%2BcMP2XqeH6cMqiUiB1dvTRN1ZExVh5Zs2UHLo3UxNco5BHMJi%2BlL8GOqUB6sbjzOfGdvo670i%2BVyOxSxF3O3WeJo8G%2BJt%2BX%2B3Rjb7SFl5j5F5EjB9J0xWdqV492SY1ABGj95krM0E%2Fkd2Iy9%2FTWPF%2FOeg4CAO0uAEOQUlOHVCLdtNiH9ungWerDFXp0oVswFNdLAUL0fm1RNTSblPDY%2BT4j2leqgJyeRlDpUelgSshIwO4J7uzXtpFjyE2k4DEXxtZNom3JV1EJReTD4MIf5mS&X-Amz-Signature=faeaad4ba55a052601dea238bdc2d49d152a74886c3c0ac5c16d976c9023e91b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNZQ2EL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ5Ss%2Fr7p1UGrT%2BJTXQTL1%2BPpCsPBarAT2hBz9PAI5CAiEA59mmY%2BmnLGYk%2B1477B3Sgty3WbNsbRw1mxzu1ESR9K8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGVAKIAkrCfJst89DCrcA%2BYmlu7Ax%2BsG5xOsNchjPXKBJn9zK9yhiPkCdp5I19fLff3lq7MEls109v%2FmJjQ2F5AANmAH%2FIH23vm8ms4hfDxNpzoqsBJsIRAcjic8UB0qAzEJ0b4Z8h4lmSGSkfJvMUHxutyhlx%2Fdeuq2Y1KMGmxVgRRMKcKgA6i0QG9xiTKAgvE5z2mZCUpFOrnFtS4N4O9L9IKoQZPg9qo2uT4VtQDi7EfefJd5uliMFaLvucyYcFpc%2B8jSMCww6YFIwWyg4wxHZJmVo1c0TaLocsvsPjA6BW35OUjYhF%2B4aIzaC9quq3Wpf0WjPpyc7KmsfSYW965DSBc4y4zUR86%2F6URzHokp800Hzp6b9jiWhcggAjlsJsGeKnE6rX9ajxeTWCrmgMblOV8LnkoFrPRbh97sxCOh%2FTpQ8s3Ptajm3SOMTUg7ck%2BAD5NGk%2FIaEZSbZShjEpPbr3Dtfh4x2ZqDu1hlR8wIBgZRXKcVyAJzy2CO88mgePZIT%2FjcMhMLGvLLmfcUUhzUSllmKWbUestGQRhmyAF4G48BNWXozsZDwQn%2BWq8okGfufKpGPkGfWEnVn7IYbI6e5I5bWYpcYn%2BcMP2XqeH6cMqiUiB1dvTRN1ZExVh5Zs2UHLo3UxNco5BHMJi%2BlL8GOqUB6sbjzOfGdvo670i%2BVyOxSxF3O3WeJo8G%2BJt%2BX%2B3Rjb7SFl5j5F5EjB9J0xWdqV492SY1ABGj95krM0E%2Fkd2Iy9%2FTWPF%2FOeg4CAO0uAEOQUlOHVCLdtNiH9ungWerDFXp0oVswFNdLAUL0fm1RNTSblPDY%2BT4j2leqgJyeRlDpUelgSshIwO4J7uzXtpFjyE2k4DEXxtZNom3JV1EJReTD4MIf5mS&X-Amz-Signature=3f7ccce8cf9c903e18891940b95c85f9b9734f7ad65fa06ec061e3d333ed6d84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
