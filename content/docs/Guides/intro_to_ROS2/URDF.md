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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FUSJLL5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXt0h7hSmzkH%2Fj9mnqItB4MVNyhh5YXYibx8f3VYvMRgIgKZQB2FkdncYCVF2raqtLbIaaEn45jLO14tYfQfTf8OwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGT2tpf%2BXfWrixeGoyrcA5Nx0Xj1geosFyUGSujlsu8WZjAkkNny%2FQbfIuRtT%2B4Oej%2F2bX%2F%2FkHw8l1uYA3jDf1ihOLOfOvE%2BoCei19l7NtAbmEhcyyzFm%2B4k%2BPpeiDmbPrrRMkW519kb6v1QwyrJa94NgTIN7gFsi7AHyXAlAIlXV6AU8PP8Bl34N2m3zUDeLIJn0Zmy4%2B5hQeWNYj438AFMbBbgI05Apj%2B3DXHyjIdKz%2F2dpBZjqDsrP94REU%2FBv8BTNv39LkU1ZAnwUvn3ZA8vbU9eJTmTTA61ir5VcMLgftNFn%2BmFdfAMyWOKFAxHmArIuuf%2BaYNHllG0oas1sRSl0ZmMUTJOyzCFW1Bftmk9IAmZhAqu91MCpQHGUBbBj%2BNBtPI%2F%2FFzIz7TICUjTTB40UfJDfHVBnJzQOOQSuV8UGy9pPXug%2FMLADz5sXrhGsnOC0l4m9xqBHzJMohbwKYeZAjNWHqYHlR%2BgyzVYv%2F42L2uMylfGykZadDg2ksIkBWaK%2BTWk%2FHN4NLpO3I1u7kZETfVQUeNRssfYAei9dMSs1lAICe8RNgjoqtlC9P7IErj1REgTxXX2H9D1hJgyY%2BKS8AZUJsuP1SoBRA2YsWIhCU2Pv1jwIApLiwYRtGJZiRORA%2FBpTIn1SRIgMOGji8MGOqUBsU9WfF5M8vGpUIO9vW1OJ5k%2Fku6mNcWSaiM4DXN8Re1%2BsfZJpYEKuVf1kZbbhPwPaR%2FJrXSYEg10EKncGIYEOEuMWYm14o%2BvIIAudCqaJlZLrc48GGI66Gjw88cjxhN3wEiPBpOyeY1MXTSJ%2FoBSl%2BNUxD7gZK7AFgIkf2jlZRtzW5L6fstDnh9jnjgwJ0xXKShUaJfESKHfwfzYp3KaJEe5EtVx&X-Amz-Signature=28bdd95eb6f60e726801985dc32967488bc7f1c62f1a5958a31ee8f06f1716a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FUSJLL5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXt0h7hSmzkH%2Fj9mnqItB4MVNyhh5YXYibx8f3VYvMRgIgKZQB2FkdncYCVF2raqtLbIaaEn45jLO14tYfQfTf8OwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGT2tpf%2BXfWrixeGoyrcA5Nx0Xj1geosFyUGSujlsu8WZjAkkNny%2FQbfIuRtT%2B4Oej%2F2bX%2F%2FkHw8l1uYA3jDf1ihOLOfOvE%2BoCei19l7NtAbmEhcyyzFm%2B4k%2BPpeiDmbPrrRMkW519kb6v1QwyrJa94NgTIN7gFsi7AHyXAlAIlXV6AU8PP8Bl34N2m3zUDeLIJn0Zmy4%2B5hQeWNYj438AFMbBbgI05Apj%2B3DXHyjIdKz%2F2dpBZjqDsrP94REU%2FBv8BTNv39LkU1ZAnwUvn3ZA8vbU9eJTmTTA61ir5VcMLgftNFn%2BmFdfAMyWOKFAxHmArIuuf%2BaYNHllG0oas1sRSl0ZmMUTJOyzCFW1Bftmk9IAmZhAqu91MCpQHGUBbBj%2BNBtPI%2F%2FFzIz7TICUjTTB40UfJDfHVBnJzQOOQSuV8UGy9pPXug%2FMLADz5sXrhGsnOC0l4m9xqBHzJMohbwKYeZAjNWHqYHlR%2BgyzVYv%2F42L2uMylfGykZadDg2ksIkBWaK%2BTWk%2FHN4NLpO3I1u7kZETfVQUeNRssfYAei9dMSs1lAICe8RNgjoqtlC9P7IErj1REgTxXX2H9D1hJgyY%2BKS8AZUJsuP1SoBRA2YsWIhCU2Pv1jwIApLiwYRtGJZiRORA%2FBpTIn1SRIgMOGji8MGOqUBsU9WfF5M8vGpUIO9vW1OJ5k%2Fku6mNcWSaiM4DXN8Re1%2BsfZJpYEKuVf1kZbbhPwPaR%2FJrXSYEg10EKncGIYEOEuMWYm14o%2BvIIAudCqaJlZLrc48GGI66Gjw88cjxhN3wEiPBpOyeY1MXTSJ%2FoBSl%2BNUxD7gZK7AFgIkf2jlZRtzW5L6fstDnh9jnjgwJ0xXKShUaJfESKHfwfzYp3KaJEe5EtVx&X-Amz-Signature=b26b2afd34d77cf913d4ad4a8803b061cdfc34b2d4eb4ef27cc50eb5d502ec88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
