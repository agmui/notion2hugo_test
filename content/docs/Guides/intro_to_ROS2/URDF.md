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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOC3LGY7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDE9qtavdiGKA58cKWxpOhdmAyE2QCYO6oCtMuM%2BfwajgIhAJCcLnJR%2FoGrkL79093b0G4wd0sOoS77P3wQ4bKmXB4RKv8DCEMQABoMNjM3NDIzMTgzODA1IgxXvF82Grhzu5%2BxEO4q3APWPrBymDwCZVvdzSxQLWwUnwFNpQFTSG82GQdQrLuCvgdXcbo3bTk8AqaqXVdoSL8TkW0YDy4z9XSqdYTkWraT%2FbH0lfOh5vte9FJqBST8ROiR3KZZe2wDjKQWYPOdd9upxubLIWPQ%2BTaccSiQfS8raYj8DGF5L422pDiVf4iwwUXYbY6eYYRc%2B4fcl4CzZayEiI5pWe4J1hVcmj4SZ76kujJDjMqG6J3t1LSZBb%2BAvurJcwxqvNxbNlo9x%2BENHtJTGY4y9UevrDmt%2BcEUFb9S%2FQv4u233YgM%2BgMMqoptQ5J%2FFA3IIoBDyySDTE1B36z%2F3VyrAoB9pjgNMGCbfLMcWKujSByLvLareeQ%2FpeJLN6tfMLVHRGbp2qdZDqU1b%2F46ov4vU8ZV0eLQUCpS9z0cbh6nQImSykixrf5oo5aERqosBlKWBHeGCyZ7rdedSFmtj43%2Fj6Coxa%2BP18cir19DSxpCc4wdZS97i%2BfuibaRppt3h45t4CzRRxXGbQ0loihC41rKFLXnZCOY%2F5gsP536AXthr5RMA9q5UYkRZCWFlNqQzl4SNQ80PZHRkQ8I%2FTDHFBuo2%2BcvRPy7sRqNVf%2B0Tpvkz2T1mI2i%2Bhegefyczfxsgo5qteErT6DRv%2BjDyova9BjqkAax%2FBHO22qDpYaYn%2FzHu84nxhkSIFd8jc40UUBNL15JeI2dc5kU%2BirAfykdr5ILvhaee0hIcuCOFuvcgU47u06NGn1PHXu4f50%2Bmgz9CLH19%2FGIVzG5doOMx0S%2BcJmuMN3RufPpKpuS8XL%2BW3KpJvBlipkb4PDB7rnAHoFhgsvm4saPHHzbRcvQyYFCtfEX96SbZ%2F%2BbMTtfBwaQEy243zrt48iCb&X-Amz-Signature=f245f3912268dc639de0bd5c655f090f361f5b5ba9e26a36465b24df1831ac18&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOC3LGY7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDE9qtavdiGKA58cKWxpOhdmAyE2QCYO6oCtMuM%2BfwajgIhAJCcLnJR%2FoGrkL79093b0G4wd0sOoS77P3wQ4bKmXB4RKv8DCEMQABoMNjM3NDIzMTgzODA1IgxXvF82Grhzu5%2BxEO4q3APWPrBymDwCZVvdzSxQLWwUnwFNpQFTSG82GQdQrLuCvgdXcbo3bTk8AqaqXVdoSL8TkW0YDy4z9XSqdYTkWraT%2FbH0lfOh5vte9FJqBST8ROiR3KZZe2wDjKQWYPOdd9upxubLIWPQ%2BTaccSiQfS8raYj8DGF5L422pDiVf4iwwUXYbY6eYYRc%2B4fcl4CzZayEiI5pWe4J1hVcmj4SZ76kujJDjMqG6J3t1LSZBb%2BAvurJcwxqvNxbNlo9x%2BENHtJTGY4y9UevrDmt%2BcEUFb9S%2FQv4u233YgM%2BgMMqoptQ5J%2FFA3IIoBDyySDTE1B36z%2F3VyrAoB9pjgNMGCbfLMcWKujSByLvLareeQ%2FpeJLN6tfMLVHRGbp2qdZDqU1b%2F46ov4vU8ZV0eLQUCpS9z0cbh6nQImSykixrf5oo5aERqosBlKWBHeGCyZ7rdedSFmtj43%2Fj6Coxa%2BP18cir19DSxpCc4wdZS97i%2BfuibaRppt3h45t4CzRRxXGbQ0loihC41rKFLXnZCOY%2F5gsP536AXthr5RMA9q5UYkRZCWFlNqQzl4SNQ80PZHRkQ8I%2FTDHFBuo2%2BcvRPy7sRqNVf%2B0Tpvkz2T1mI2i%2Bhegefyczfxsgo5qteErT6DRv%2BjDyova9BjqkAax%2FBHO22qDpYaYn%2FzHu84nxhkSIFd8jc40UUBNL15JeI2dc5kU%2BirAfykdr5ILvhaee0hIcuCOFuvcgU47u06NGn1PHXu4f50%2Bmgz9CLH19%2FGIVzG5doOMx0S%2BcJmuMN3RufPpKpuS8XL%2BW3KpJvBlipkb4PDB7rnAHoFhgsvm4saPHHzbRcvQyYFCtfEX96SbZ%2F%2BbMTtfBwaQEy243zrt48iCb&X-Amz-Signature=97569ae2f80a7a3cf4d29441473579da81bd9484c98c05c40d050f648edb98de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
