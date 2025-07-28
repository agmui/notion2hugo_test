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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CS5NE5J%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDa6K%2BPf9KmX8vj7dmbZJQ1jJTyFIShAkTkpBxLAd81%2BAiB3Qq2%2FmIaKT1ImZtfH5LDiueEq%2BdsCN6Fzb4h7aVrnNSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyyFePA9tQfzn9aUZKtwDrEhC3UMWYwRzXQSwPs7LnpTXJBM4PGfoxvXa2QggPkE3NBD2RUWH2iRHHCPBYyRL%2FR4RJ1pI6eOYz%2F3CVHL1D%2FOsLHEXJpTK8jd85Qv1UdBM%2Fe3%2BVyGgGITS553g%2Bq48x52o8xlFdyTs9LRrUAES%2BvgsYP1ko3QtC391lgCYwTsyAyDPFgDb8S8gHKlgjTJcOFcH4rmJpnin8uI8JR8vuONC8nNQzIjoqtp6XiVni%2BQ7efkX6CLOo2mvXjinoeDj1I4ryOINxd1r2GA7m6fmXj2dRf6mJWph2TJ%2Bw%2BVgoSwCZ3tGfNUTjKDbIK4SVsV614YCWb6%2BG6XolYvmJ%2FXAoY6wlDjzq10Fu11BAOzGhNE6VYWhC39Kn8UTsLNqmZjPr5T8bu%2BNhWPKibeYxut1ilhkmSYs0UDHP5xuj5cI7emwLl9htONfxcDSLpeglS93lnTVueoiCNkdLucjMeAoq9vgDQpEFXrC2LaBG59f%2FrFNIbYujbiXcH3sVKzRhJe9UEvn5hp79TrhIQVxupJ7GCPmfcsNnlFMX3WM5w%2F%2B%2BNTqKfGW5cYNMQgyv0rIhgcT9pJhL9ZdJaUCs3MQnbITB%2BT0py2vlI8W9OdTc%2FMNbv56c%2FiHzfXvAZNbpHMwrvKfxAY6pgEzYjowxbtLTdnexS%2FH9Q4oyMGeLKRyWlnGv4oIusHq1faUdSWpBz%2Fo1PfqDOLR0H%2BPz%2Fty23hn5RV7VZWOe7TEls4qda9iDLoFMGlLGxD%2B1%2B5Y1eZsRSpv5iD0aeIo3nx2Yq827O7ZbXatHtCq4%2FfknolbjaJMcHbEJ2eCbZfvnnXDViI00PIuv44VNIbmdsN7U1F%2BtoUhieIoeQUouEyWp3fD6KJ1&X-Amz-Signature=ce601e3ee52bb3b7e18adfe4a7e63bbd2ab1bf0a76f7c890a1fbf8d7ee21c8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CS5NE5J%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDa6K%2BPf9KmX8vj7dmbZJQ1jJTyFIShAkTkpBxLAd81%2BAiB3Qq2%2FmIaKT1ImZtfH5LDiueEq%2BdsCN6Fzb4h7aVrnNSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyyFePA9tQfzn9aUZKtwDrEhC3UMWYwRzXQSwPs7LnpTXJBM4PGfoxvXa2QggPkE3NBD2RUWH2iRHHCPBYyRL%2FR4RJ1pI6eOYz%2F3CVHL1D%2FOsLHEXJpTK8jd85Qv1UdBM%2Fe3%2BVyGgGITS553g%2Bq48x52o8xlFdyTs9LRrUAES%2BvgsYP1ko3QtC391lgCYwTsyAyDPFgDb8S8gHKlgjTJcOFcH4rmJpnin8uI8JR8vuONC8nNQzIjoqtp6XiVni%2BQ7efkX6CLOo2mvXjinoeDj1I4ryOINxd1r2GA7m6fmXj2dRf6mJWph2TJ%2Bw%2BVgoSwCZ3tGfNUTjKDbIK4SVsV614YCWb6%2BG6XolYvmJ%2FXAoY6wlDjzq10Fu11BAOzGhNE6VYWhC39Kn8UTsLNqmZjPr5T8bu%2BNhWPKibeYxut1ilhkmSYs0UDHP5xuj5cI7emwLl9htONfxcDSLpeglS93lnTVueoiCNkdLucjMeAoq9vgDQpEFXrC2LaBG59f%2FrFNIbYujbiXcH3sVKzRhJe9UEvn5hp79TrhIQVxupJ7GCPmfcsNnlFMX3WM5w%2F%2B%2BNTqKfGW5cYNMQgyv0rIhgcT9pJhL9ZdJaUCs3MQnbITB%2BT0py2vlI8W9OdTc%2FMNbv56c%2FiHzfXvAZNbpHMwrvKfxAY6pgEzYjowxbtLTdnexS%2FH9Q4oyMGeLKRyWlnGv4oIusHq1faUdSWpBz%2Fo1PfqDOLR0H%2BPz%2Fty23hn5RV7VZWOe7TEls4qda9iDLoFMGlLGxD%2B1%2B5Y1eZsRSpv5iD0aeIo3nx2Yq827O7ZbXatHtCq4%2FfknolbjaJMcHbEJ2eCbZfvnnXDViI00PIuv44VNIbmdsN7U1F%2BtoUhieIoeQUouEyWp3fD6KJ1&X-Amz-Signature=79c5b0fe164bcca14d01be8b9b6b95fa7e76b31f63556400e0a662ec5987927a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
