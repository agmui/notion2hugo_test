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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23NAZ6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCnvCswVY9RoGpg%2Byn8A8JdUYPpwEwDObYy9Nkatl3NWgIgDOXPMfiWnivXdnPdflUtiXTu9e%2B40q%2FcfMIoACaNFaQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeU07%2BL9h5AplngkyrcAzSws22NwwxhFrJBLpaCW4ZNzDEgH%2F%2BKZZGQ8rmE15RzurlE8FD1kS61bHsYknyFwC7knM9sGz%2FpiT9KBJ0SQwLX1VZgTnXojaKfL1XjAFUuFSWtHn8OCc1txcatjrARpBNiUCjDFF5vO7weKeFashv49aCtAi6Bp2Oh%2F0uDunc61jt57WEaOdN%2BUd8mXklBp0TV3QMjt1X8JfVhNRG21SucwJidOAm81ECU47vOWzlCt%2FSY1F%2B1lUNG0u5AByptIDfGfzzuHPdFcUeoScF9gp4RP81O4lZpcdaUQTEIHcKn%2BVzy8pdQeSgcH0F0PQlHpay8wW2r%2F4HjJjsFlOgrlXGdZy70E5hIDyjsE%2Fsh3SS8qQi77gx%2B%2BXv%2FN7QUcdmrrG5t%2BiFw4My9ghKq3Poe6StTVk%2BoQLkNQLBfVbw0xB9KeLap%2FG7PUMdCYkU4CuN2NYtB2UmQ39G5aUdw%2BeBzVNzzLWF%2FXcY9IbXKCwSmvV2hRd4SXrtRpPEyKhJPko%2BNXT0vYqo%2F0AFW4vz6Y4IF%2BHYL9TsYEhypkc0D5iOyiwv6kpT9SqN%2FwBNG7yF2gtsWRRQDq1GQ8dutmKC0%2F%2FHHntNcCeb4pZVDoXRIm%2FTy%2Bvb%2BGi%2BD58Pc2MhMGtKmMLWI0sQGOqUB%2Fh6RxFabY8ivsfZlPe%2Bkl1xgO%2Bg540iaWZsGWES2993k7VZYAR0P4pTfDFNmJtvsEf4sTEuUU%2FHx%2FDj8q%2FBZ5cuKW0cL6Qz3G4ENlFLsJ9yspvgd6TTwhC0L4og6oVc%2BZU8WPZ19qwkeSJBchyb8uRL6ft14N%2BqzVg4RLPRyZtFTjlv9g9JyYOhdDP4%2B9EZ0V9os%2FEiUuT%2BjbmpkfoXfmHjG4%2Fnv&X-Amz-Signature=5c89deaa1462fc424818fd43972fec7de8963c9a9aba36a1835944c99fe2a809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23NAZ6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCnvCswVY9RoGpg%2Byn8A8JdUYPpwEwDObYy9Nkatl3NWgIgDOXPMfiWnivXdnPdflUtiXTu9e%2B40q%2FcfMIoACaNFaQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeU07%2BL9h5AplngkyrcAzSws22NwwxhFrJBLpaCW4ZNzDEgH%2F%2BKZZGQ8rmE15RzurlE8FD1kS61bHsYknyFwC7knM9sGz%2FpiT9KBJ0SQwLX1VZgTnXojaKfL1XjAFUuFSWtHn8OCc1txcatjrARpBNiUCjDFF5vO7weKeFashv49aCtAi6Bp2Oh%2F0uDunc61jt57WEaOdN%2BUd8mXklBp0TV3QMjt1X8JfVhNRG21SucwJidOAm81ECU47vOWzlCt%2FSY1F%2B1lUNG0u5AByptIDfGfzzuHPdFcUeoScF9gp4RP81O4lZpcdaUQTEIHcKn%2BVzy8pdQeSgcH0F0PQlHpay8wW2r%2F4HjJjsFlOgrlXGdZy70E5hIDyjsE%2Fsh3SS8qQi77gx%2B%2BXv%2FN7QUcdmrrG5t%2BiFw4My9ghKq3Poe6StTVk%2BoQLkNQLBfVbw0xB9KeLap%2FG7PUMdCYkU4CuN2NYtB2UmQ39G5aUdw%2BeBzVNzzLWF%2FXcY9IbXKCwSmvV2hRd4SXrtRpPEyKhJPko%2BNXT0vYqo%2F0AFW4vz6Y4IF%2BHYL9TsYEhypkc0D5iOyiwv6kpT9SqN%2FwBNG7yF2gtsWRRQDq1GQ8dutmKC0%2F%2FHHntNcCeb4pZVDoXRIm%2FTy%2Bvb%2BGi%2BD58Pc2MhMGtKmMLWI0sQGOqUB%2Fh6RxFabY8ivsfZlPe%2Bkl1xgO%2Bg540iaWZsGWES2993k7VZYAR0P4pTfDFNmJtvsEf4sTEuUU%2FHx%2FDj8q%2FBZ5cuKW0cL6Qz3G4ENlFLsJ9yspvgd6TTwhC0L4og6oVc%2BZU8WPZ19qwkeSJBchyb8uRL6ft14N%2BqzVg4RLPRyZtFTjlv9g9JyYOhdDP4%2B9EZ0V9os%2FEiUuT%2BjbmpkfoXfmHjG4%2Fnv&X-Amz-Signature=e1ffc110024ee445ea118f92a088d944efc665c78d73e5a108202015fc262281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
