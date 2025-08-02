---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T07:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T07:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCS37DS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDSRzWnQgJYT9qvPUgeF5fVuLodPRdBCfXonhLUIdd6AiBa5j9bRl%2FwIrrKYt73%2FJni%2FStvfiCuiy7vQsCHbkp1pir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuse4TL6q3No70WFoKtwDOip6TSEhQxK7SV8W3WlBfDQM3HAmvvJ09aZDekshgTxiXcDyCita1TcsBL94HTT35KJMhjH16IYEsywURc0OGOsYua5%2FCh8aGvSrtzp76ngGo0hLRiH31MQLVHpTKgS%2FmJ1tvWu5kdJAmwIelJKJ043zOOj%2F9td8nyXFIPC3cj6PkrSEJ57cE%2BY7h37AD%2BYIPYK92h%2BSQNU2AQHP%2Bh%2FkX0nPOCyIsvEbP8feSw0qZzQR4QZwFmciPElclgugL3x1J4mrKKaFaID7ByxVAq7pyNblkuVU6%2FfvErSixj6O5Lhy9k7ilS2X6X39zBM%2FNqU%2FLg05zRpVYkwMTKi5t%2Bk7kaZO9uoiRE5VKOA%2F%2FPKiN0BsPVCA3LjI8VWaHSNoZvQV6kWq%2FjrQgEAY%2BNtwhpRV8B3OtmO1iy6zai2NHRCFtuHQMO1DsfnIaX0ANoO9tNo%2FaKNl7gDag34HZXAOtlZY532vuqLkGKG0Q4wS2tLkhn2EgMIpxgFKiwvmkIFFOV8Ht9Lqu%2BmUse%2BDsZGw29vmwQ5DLS7Oh%2Bmxw5k1NM0YbBPjVxPmdQRHkVI%2BbBS5J4OtdPPgllRKdGbU2YaXCTcLdu57p7I1oCtZjus8svDf9N7ALz8%2FJBAUzeHk7Hwwh%2FC2xAY6pgH0MGQuvMgLAKBZAR%2BUMmBMsPENgxJFq2sJZJ8L%2BwGQBVIvHGIi1YhkI4RE97hQyxAfFqDeZDCnHbDUdJyi4JctrvEXfS5kaNAEeDaylan6902PF0IkY7jBZZ0aDe1S4JtWC6cpjkWgmAFt7SrbVUFrO30ZOjrLjI9PQII0SBFci0wO8DYiqFu%2Bt%2BDveifcUCjjIi7wCdHJmtZ8hNUVe5r9kmu5o67k&X-Amz-Signature=90d2739f67dbcefde84870d21453af45de1f07a5fb7b4326a6161b43ddb4ae8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCS37DS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDSRzWnQgJYT9qvPUgeF5fVuLodPRdBCfXonhLUIdd6AiBa5j9bRl%2FwIrrKYt73%2FJni%2FStvfiCuiy7vQsCHbkp1pir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuse4TL6q3No70WFoKtwDOip6TSEhQxK7SV8W3WlBfDQM3HAmvvJ09aZDekshgTxiXcDyCita1TcsBL94HTT35KJMhjH16IYEsywURc0OGOsYua5%2FCh8aGvSrtzp76ngGo0hLRiH31MQLVHpTKgS%2FmJ1tvWu5kdJAmwIelJKJ043zOOj%2F9td8nyXFIPC3cj6PkrSEJ57cE%2BY7h37AD%2BYIPYK92h%2BSQNU2AQHP%2Bh%2FkX0nPOCyIsvEbP8feSw0qZzQR4QZwFmciPElclgugL3x1J4mrKKaFaID7ByxVAq7pyNblkuVU6%2FfvErSixj6O5Lhy9k7ilS2X6X39zBM%2FNqU%2FLg05zRpVYkwMTKi5t%2Bk7kaZO9uoiRE5VKOA%2F%2FPKiN0BsPVCA3LjI8VWaHSNoZvQV6kWq%2FjrQgEAY%2BNtwhpRV8B3OtmO1iy6zai2NHRCFtuHQMO1DsfnIaX0ANoO9tNo%2FaKNl7gDag34HZXAOtlZY532vuqLkGKG0Q4wS2tLkhn2EgMIpxgFKiwvmkIFFOV8Ht9Lqu%2BmUse%2BDsZGw29vmwQ5DLS7Oh%2Bmxw5k1NM0YbBPjVxPmdQRHkVI%2BbBS5J4OtdPPgllRKdGbU2YaXCTcLdu57p7I1oCtZjus8svDf9N7ALz8%2FJBAUzeHk7Hwwh%2FC2xAY6pgH0MGQuvMgLAKBZAR%2BUMmBMsPENgxJFq2sJZJ8L%2BwGQBVIvHGIi1YhkI4RE97hQyxAfFqDeZDCnHbDUdJyi4JctrvEXfS5kaNAEeDaylan6902PF0IkY7jBZZ0aDe1S4JtWC6cpjkWgmAFt7SrbVUFrO30ZOjrLjI9PQII0SBFci0wO8DYiqFu%2Bt%2BDveifcUCjjIi7wCdHJmtZ8hNUVe5r9kmu5o67k&X-Amz-Signature=bbaf0205c3737d3ef1e70c8a67ff8eaeb1c8f6a6654369671a44af1c5f5a9011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
