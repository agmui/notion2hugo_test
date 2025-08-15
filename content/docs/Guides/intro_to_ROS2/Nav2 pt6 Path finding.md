---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=af82a8c9851e9d9d97268cfe5c7568ddc673966b956c446b5bb5ebec3f39331d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=336b42652c609a69a389325bd440783e76023654d849219de4773f7743f3ce24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=d0e7d97e956c25fe00b44ccb1eb68a90c86a783cba85c174768d9ed9e26a5816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=37fedb5a789dddcab53b2d05c002642c49aaa323b93949a46aed377719286b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=3f18f3edee1f9ae2595e12cc6b9187cec05aa01b657ac956fba83e4e2257912a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=af81af0b1705dc0e3ece9c8c6babece9ee390b44c2bc6e8e02437340605ba251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=f64adaf2c14867fe980b1c141b13830937e7f4397add2399ce0c51161f059dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=e441e4728c6700fc031a44072aa2d556033803962f73b23842db0c52180746f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=5fd0b989ffb33e01ef64026cc7ee27a03c02f2478c8a446f1f0d2e55825555d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=97b962edb58f3cc3b83358e96a85900434d51a4ddef28dbce4ad11938fcea082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=ac9b165e38ad80ca74320f7dce97f90d530271f67497c40512ba438eba1c4a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=58426e92bfea195bc8baf11d26e59124e50751d548cb5a1bef50e361587fa0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMRDFID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGJ%2F84OL1BlCjmhzzkgrG16gLTwLzIMeJAyYuxYdpv2xAiEAzZGj2TaBetVLZi5qZk5%2F9v5vNzvttCFKi05C2cJ2RtQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE3y28BfSWFVHDyS2SrcAzVNhQS3foQDQni%2FF3z5gbmiT%2BIKCSY9oGhbuVNwYlNnDvn0F0%2F4L9oXiX9wY1bnY3Gw1jwvOsqyzxcLUPVgMhnUVnW4mR7CP4PZ0tzTYVX9YUv8pPUjBIsosPOCVIo89WdUzJ95rPmgWxKVl%2FegNTJuJrTXrJDxEmNK1rqd8Pxdt3jBz8lBGbF9uQkZiTQY7R4yI3EUpea7DD47kIXq2FyfvpK9SEyLYaCs1HxpHAv1sHELgDOWjSdlAoQsL0JQURtPYC8nB%2BS3P3aEc5R5SDy25S%2BR3Tn2fCw9DU4WCa2BFbJNLl6w3kdumSnKVgtaKWw5LsdDuMoM7tQK57GUNHNf%2BWqxQevLSE%2Brq0hYVWlcZhHuvJ2kagscjNz1lQWAeWgkLDKRWBLGRfAEa2GB5eB0aaGZBP6dmORO6VhQ4EsRgvmHFSf1cqCfO6LZJdnszqLv2TmfUFyz8y7Wy6EXC5IQMSm9tObl5jWb86ChPEvdplY9eywYkZqRxsNwSvlPIIIt%2FaZjyQAf9G%2Bn0326TetVE5JHTqoA6%2B8JmW8mx2mmAl8Khdk3OfHlf0HDA5bv5ArFWUGQRa2g2ey5vOlJR0zBYYu%2BloCx2kaawOeUK%2FufSY3OO%2BEu%2Fq0YmA4sMJLb%2FcQGOqUB7o%2F89tTsvHwcD%2BM4cPkQhTEa%2FtVfZjpvtopmZc4%2FdSDr1R6UaopDVCMvhqAXYEC6dFuQ3wAXzNJwAalsK7TVDWowFyrkfzHQhYTUz1P%2Ftonsjo%2B5EOv%2FNwIkaZ%2FlojqJyM%2Bcxwa4AmxVUHqe8GANaTkbH3Y1pH6q84vaynYTEwQ7avyAehwjnCK60Xle51QhkszXxe9tEH0djuV403BjTSvKzMAN&X-Amz-Signature=b9079c6e6b354b3322530808715855cc49386e2425da00bc112fa6a61ae5f889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
