---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2SHUP5C%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBN%2B2JIJ9MyTcq0sxXzVjiLqXHN%2FGYvGXA4J571hWMUpAiEAg%2BhL8p9souibk28bgfKglNI%2BB4tTG4ciW9bgnIrYvm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB54S0Zpc50gP43jkyrcAwhFql2n%2Bjhu0iVHGvuXWhyC%2Fq3xuxMyWhy1rlnbgSHI7M0tdasATD1vPd%2FY9nzdQ7Zpc6UDrSpGrMQLY0cwzONKMetqUrYrgcbmRfMcB0z%2B%2FgtI%2Be2v8EwXVa8DbKLPcyAkG0c8wuX6Rr4Q3jBWeUCEaqDXIUP75eGk4nSxtQ%2FGqrG4RZk%2BXhhfm3XQePvafWneGjQyDW83z8OXNhBpXOshxAn1zu7CzNz0sQUGslpj5Jek4T9%2BvttFv5soJQzE7FEOJxWneBzczb0n7iwgECFQqbHeqNLMd4IEtrlyTJ9XeqirSMkTzDX1t1SF33BhKnzMfoBLlXlDdCN0KQA0THWyXNmFs7FQGn9po1bVUIR3hfmthU8PQiTKzw3fX3EnaN7DcxOTh0TKuEmUld0mB5NmhCvoSXOKOCYUWlgqMC56XDSO0FKhae%2Fme351MjbNKh9QKLiBBqlYjbEe9AyY%2BKcudq4vJ%2F9c4bpEzGSXOi%2Bu4B5%2BekJNDw4CjnnxlyT4dsKP4qnVsD5gKR%2BfnHvX18J7NDcOuL62l5qjdn%2FWVbyOIfxU99Qg%2BH8jfHdh41bPZ41ex5g55uhWEEafGjBJxCwrdOdYako7IGxHWaU7mNlRn3sXsc0oJ3rkxXyhMKfWh9IGOqUBEVK7Xp1cv%2Bt5WilWRqa0cnPhE3UdsW%2Bsl%2B%2Ftl%2FPZ3%2FhJgVCfvhQDAXXQNXvwwDFkgpLRWwSnU7oPhx%2B07R5JelkLB%2BfdVgOeaCAR0LuPfqXiltRu1CoHr6Wjdoms24IcuMXFnfE78xkrywTJjdg9WCP7UTX1LnDI7%2B59dMgNJ8D%2Fiv7cQCLlsXRKdZOB9iF1yJGFw%2Fv%2FbJWhimU%2FEYYe6KhAhXMn&X-Amz-Signature=6e15dc92e274dc53bd7eac4deea9bb95b37e807b5c1996b0f1cae65890390a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2SHUP5C%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBN%2B2JIJ9MyTcq0sxXzVjiLqXHN%2FGYvGXA4J571hWMUpAiEAg%2BhL8p9souibk28bgfKglNI%2BB4tTG4ciW9bgnIrYvm4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB54S0Zpc50gP43jkyrcAwhFql2n%2Bjhu0iVHGvuXWhyC%2Fq3xuxMyWhy1rlnbgSHI7M0tdasATD1vPd%2FY9nzdQ7Zpc6UDrSpGrMQLY0cwzONKMetqUrYrgcbmRfMcB0z%2B%2FgtI%2Be2v8EwXVa8DbKLPcyAkG0c8wuX6Rr4Q3jBWeUCEaqDXIUP75eGk4nSxtQ%2FGqrG4RZk%2BXhhfm3XQePvafWneGjQyDW83z8OXNhBpXOshxAn1zu7CzNz0sQUGslpj5Jek4T9%2BvttFv5soJQzE7FEOJxWneBzczb0n7iwgECFQqbHeqNLMd4IEtrlyTJ9XeqirSMkTzDX1t1SF33BhKnzMfoBLlXlDdCN0KQA0THWyXNmFs7FQGn9po1bVUIR3hfmthU8PQiTKzw3fX3EnaN7DcxOTh0TKuEmUld0mB5NmhCvoSXOKOCYUWlgqMC56XDSO0FKhae%2Fme351MjbNKh9QKLiBBqlYjbEe9AyY%2BKcudq4vJ%2F9c4bpEzGSXOi%2Bu4B5%2BekJNDw4CjnnxlyT4dsKP4qnVsD5gKR%2BfnHvX18J7NDcOuL62l5qjdn%2FWVbyOIfxU99Qg%2BH8jfHdh41bPZ41ex5g55uhWEEafGjBJxCwrdOdYako7IGxHWaU7mNlRn3sXsc0oJ3rkxXyhMKfWh9IGOqUBEVK7Xp1cv%2Bt5WilWRqa0cnPhE3UdsW%2Bsl%2B%2Ftl%2FPZ3%2FhJgVCfvhQDAXXQNXvwwDFkgpLRWwSnU7oPhx%2B07R5JelkLB%2BfdVgOeaCAR0LuPfqXiltRu1CoHr6Wjdoms24IcuMXFnfE78xkrywTJjdg9WCP7UTX1LnDI7%2B59dMgNJ8D%2Fiv7cQCLlsXRKdZOB9iF1yJGFw%2Fv%2FbJWhimU%2FEYYe6KhAhXMn&X-Amz-Signature=0fee7ffcf107423998cc2d197492955b4335ce0b63aa83baf787358eb123885b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
