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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSE5JVOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCd0Dm%2BUnfUmtjGet90tFlOuFmiS7UhHRKSwGNsOtuNqQIgO1xgEMxxwnxZxvXqn2atmWJH5kGcSaWpRHkIMYw%2BXt4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnQbD%2BBPlQfEZwHuSrcA0oyemfdM4U%2BruA2xHyitzNJV0FmPbWzYNHGB6AqgejAPbtAlOq1UyCsZMyP%2BxFqhmqMP36VHSB9SmkCZf2d3ypFXX9CxMv3m%2BqQ09y0Wb4O%2F939nvGvfvtioWLjjMe9LPM6Vc1kg%2BB2ou3mt2t%2BUBnB1y7tVsGLqHTCHVDguyG4iCauMdaEEC2FB9ojH5%2FtaRDSEVzoAvxdVa8zi5RCB4pa16AxM9urK7vfGxf%2Bwg8es3ipxRQNHaiKzLIz3q%2BUkTFqlVIPf92ajRdpADWBvGy0upgtKtMqUW89FQpKAjEfOlFPFfp%2BzHJim3Ynt6eZtPSuS9YTYw3s%2BgyoTV5Zi6G2zV4K%2FAPNnEVBk43iRlrVg%2B4M5YDiaQdOc5omXnhOK5B83UdtZiFmIUalpvo39Lt5cfPoQcZEcEbk1wVRbjav7Fttgm2iuyrpIx4MrnTUClT4ErfpDSZbevfx%2ByQTs2OKwQ%2B0fT68WH7bMCXkj9K6qRJ80o4FJ1nJ2e3hDsw8Wqwq5irz2Ml6jSGPKng%2FvoCl3hiyY9RghbECWyiGs9dBXRyoZdjIHdaCjPGeZxQIlK0Txoh8xRht5I79kqRm4HNY5ybzjHq0U8pCSKtWRR%2FiBnw7%2FuEchMSvulxSMJG%2B7r8GOqUBjnpnXBL4qeDyHrwiQ%2FNVcFaVVO19TPWnOn%2BPdBVAnYjRh2FUTrHl0Q%2B%2B7LBosd8F5bjf6B8HBMhBgVVeYgBN6ZdbIid8DKLZIcYRFm6QIgP5g1KGKvB6xUqcVs8%2BHppuVZx%2B%2FiO5g8XaXpmaKMHA2DVbChC6JMJER1tB6Qxt9BVo%2BUvH5%2BcFMkf4kDPtsxKICGZFLnKTJbZDpa2nK9eLbKUcOWsq&X-Amz-Signature=07e25485f7f588a55bd7b961c32e532300a993ddf03c9b853c096b7e5fa19e26&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSE5JVOI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCd0Dm%2BUnfUmtjGet90tFlOuFmiS7UhHRKSwGNsOtuNqQIgO1xgEMxxwnxZxvXqn2atmWJH5kGcSaWpRHkIMYw%2BXt4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnQbD%2BBPlQfEZwHuSrcA0oyemfdM4U%2BruA2xHyitzNJV0FmPbWzYNHGB6AqgejAPbtAlOq1UyCsZMyP%2BxFqhmqMP36VHSB9SmkCZf2d3ypFXX9CxMv3m%2BqQ09y0Wb4O%2F939nvGvfvtioWLjjMe9LPM6Vc1kg%2BB2ou3mt2t%2BUBnB1y7tVsGLqHTCHVDguyG4iCauMdaEEC2FB9ojH5%2FtaRDSEVzoAvxdVa8zi5RCB4pa16AxM9urK7vfGxf%2Bwg8es3ipxRQNHaiKzLIz3q%2BUkTFqlVIPf92ajRdpADWBvGy0upgtKtMqUW89FQpKAjEfOlFPFfp%2BzHJim3Ynt6eZtPSuS9YTYw3s%2BgyoTV5Zi6G2zV4K%2FAPNnEVBk43iRlrVg%2B4M5YDiaQdOc5omXnhOK5B83UdtZiFmIUalpvo39Lt5cfPoQcZEcEbk1wVRbjav7Fttgm2iuyrpIx4MrnTUClT4ErfpDSZbevfx%2ByQTs2OKwQ%2B0fT68WH7bMCXkj9K6qRJ80o4FJ1nJ2e3hDsw8Wqwq5irz2Ml6jSGPKng%2FvoCl3hiyY9RghbECWyiGs9dBXRyoZdjIHdaCjPGeZxQIlK0Txoh8xRht5I79kqRm4HNY5ybzjHq0U8pCSKtWRR%2FiBnw7%2FuEchMSvulxSMJG%2B7r8GOqUBjnpnXBL4qeDyHrwiQ%2FNVcFaVVO19TPWnOn%2BPdBVAnYjRh2FUTrHl0Q%2B%2B7LBosd8F5bjf6B8HBMhBgVVeYgBN6ZdbIid8DKLZIcYRFm6QIgP5g1KGKvB6xUqcVs8%2BHppuVZx%2B%2FiO5g8XaXpmaKMHA2DVbChC6JMJER1tB6Qxt9BVo%2BUvH5%2BcFMkf4kDPtsxKICGZFLnKTJbZDpa2nK9eLbKUcOWsq&X-Amz-Signature=19b63960a2be73a0a988e0e010199ac8bfab8aaac8c1839fceb8f4401cd6dbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
