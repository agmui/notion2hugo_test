---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=e54254ad43a2cd895553de4c9b5fd2c8ff584c5846c462c97e05ebb819732d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=0e5fd17c84a65da8cd1bbb135ff065cabb0c76862433266657f375cf0195d4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=ae34589be4696bc1bd5f5947710e760e5447227cbccc9b59266194f040443f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=0c5cb8780dfd99d2ac89fc9def6ae3b6f0f80975042e97ce1a3db38090e39319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=236750eeb7c7d845e3dcdf3fbde2e4b609b52bdcf5b612147c506e181b4c61b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=8d2539890701733c78dc922c052a42dd2e8568e3a03fed3513cf7960ec091dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=cad26a65bc744d3e319514d1cbf72f03bb689d993c08fdb6b0471019ee2751df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=e4d849da33c66dc4f2350a8e7fccddd69d0fe315d760a7551caaa897cf1db35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=173025288a43475ceb70f5c72d412929ebc45ad67b80ac33c7b9e2866eb3083b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=344e6a1b71b5306b01af088b69c060693732cf8f177f2d969934f0afee35ea7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=0adb13af0c2102a6ba09c6d58591183c2617d7b8ce259b1f9f0b80a11df79551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=1da23265ee765e4f548e5d89515ddf418515732c8a1d5c35f839427b5e5d93af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4UGVNB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHJ4UTc0nLx4lg0WS2I6DJjiwCVijXrJwtTSIzZOm4jhAiBcsYxKUeZqutQgaaF8T0FRoFR2tP2hKcrv8f2G%2BndMkSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ0lvIo%2Fe3T%2FqCrAvKtwD5Od4iHneJmui0QSKvCAQpOzrnIzp5NSfkcelADghBX4MaQD9tn2fY0B%2BfoasZx96cZFFSfv4caCRgteEP04WnBf79A04Q%2B%2BjnNGEvMml81jNKdM32BlQQWzhOZPliHUiTKneDCK9c2g7Sa1TXviQs5jARqDoFyAii5hdqaYozvmnfxUlz5OTqmPeKdKmbRM94KIXtGlbOtCp9kUTrfoqFVSuf3nuggvt1Y8%2B1NpXgawvUuFhHmYbM6JGkRwpK2DC5NbhZboejDrUznWt8t5qOQEQorE05%2BNfAylQtoGc%2F3Clu05iS%2BYqmUmY%2FVrb6tNp61NogjLD4pFCD7EIzjMayLJZaPSA19o6R2oVJPboiXWlXChDA5nMhGxkxUYl2GO3KoqdDzzkpLQBld3wb83zJugU4TjGncg5YVuD2%2FudmYgPIlvefx%2BPszuYn1lzWciGERByMJXNw3%2F7jeVFgGzbENY3SZdAit0LbYBRV6LSGxloxYcg3erXrQwzrNuTAtJO890teiO6huiixbLrVyeCbJyUzKSEt%2BzHHfUdJ21Q0puuvB3rIGCe8aNv1NEauU3aq9HREQj2qQT3D4%2BO3qeR6%2BUYCToRDRMuOb%2B5U1bHIXi4W%2BhlgE0mRt3mI7YwvYLYxAY6pgGhJFye5e65OKPJW0itXfq5dATtNglOpIJ%2FPqpciJ5OxN3Y4eULfk81TmkiP3Ko4093a5%2B3KG0LwJCKtefGqNWlvIAL4t5cO5ZH2uzn06pjIhACxLgHWaU8gNQqz3dXzvRz2Ee9IiEayEucIq1gwYvc%2FZvMWzENBmQhbcdmuR%2BYwQwdKge8%2BjVcJmNCXjYnkuiaYYPzlsELH%2FuNXGzQhyZgyMe%2FxXxz&X-Amz-Signature=9808788f9e533afdd3bc1dd1f73edbefab3b79dc6e2fa9ad0073ca02061f466d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
