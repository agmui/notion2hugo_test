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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=367acaabe44e4b12c5af839dabfdc0bb3343bdb04bf59d01d7296aa95783a3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=c40cf1855ad63a035978e1aba2e7676611650c18c7e4acedd7b00ea9edd18fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=12f7172321d4de2cbbd06354a5bb00c92a846ba71ac0998e5528dd094494869f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=558311620c022ef9e16d510c1556b3dae3e349f8df92a81c44eab9972f4ca34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=7b41aec55e93094c82a3e8bcc095e1bf0e799336830bac0bbd5a3716aa959ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=52facc18331bd224df800eb9b7abedb9ca771cf9413f74326130a53e65ef34f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=1ddd11c6abec8fb617963733dc1ff69a09fbfcbba7e045dd9789f0409d965516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=449623f253c0ab4ad92eba429deb7de558b2aab030b7a0e13297ce97c7c9ee94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=360936fbf04a8b40ff6eeab83bc9d672b20ca28d24957a04a239c675c7eba37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=4dba46ad37356fcac6fbe2d2e67867c3ef10a84beadfda19ba7fae179c9c65f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=4e34793aca5e9d3c3d3a495a1f725768d56b25c40708749d5a0f2579d4ef7a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=6a2d078cf2f5102bf42c812186ee66c9619597979f2d7c1679fd8ec654d7988e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH3XQB5%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRivBd0akxd9zA7gpqTPNs99W5K6Se1TphggAR7PwwTAiB8s%2BwWjX2zq85WaOdLDoUQYunHerWqt5fCQ1hk2CX9UCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoeJhXrHMCPBE2hKtwDd2OlNeWAGaA3GEI0EyNJUFBKOx%2BiFx4XvxObd8jcvXxKMHHui5KnSXVrPomnNCkTYHiG9lgAN%2BhDgf6K46tOe4dNIaepxkYbXmw1DfLYxijV9546r3SdbIL3T7xkZ%2BBeEVIctQA7nb2wxMmtrHbiXr4gRHxQDkPoZpiujnG40AhFk9%2BQ4orhWzBpSFIHF9EQMn%2Bhspp9DSCsClMLjEfKd2m%2BCuFTIa3mIqsn7tQggeDb2N07K6d0SzfmfCPT3xozF4kVJ3fIJkrQBsWjM1jyq0xrM7VOu%2FpokumV2kJOAmnIrSkTIZiqtMT9zqNeGSFdajYndgq%2BjaKmnQxcXgDSPDCHm6U7hRjPeU74vtl2Zita8Ea2Rg0LXLAiRXSUkusAusYqcWgcwFpTDjc2PeHPLlkVFPAJsj2OTlaPWMbP2FleoifGiSRDFNHRItBc%2BaTXG6EJSuNAwen4LmtyDmx2afgr4F6p6stwfdapx%2B4K5HRnJ%2BHiDpOWqfS2pqqDzuv%2Fi6yix6ekAMlwHbjmUZyGUJCHxJ9HViUSvA%2BL3b5h8QgVvpRTt2caP%2BETYpZJiTa6S%2BXhtaaO4qeMDewWkCM9%2BFueffQBW%2FeDJWMSBQo5dTic6IdbCH5h6wgh834woNKT0QY6pgGtmBhg%2FMF%2BTPyaUPBWx1jyOxdNKHZ4kboiQrmRyytOr1CwvsVUuduhauSSs8otgrPvXyhedgKwqml1AqBKdLzzrMXNdtFmNquyUXzkJ%2BxuMc3A8wNNsxOctzdocVHJDQZ2kJS52eT3sKY1q3cLv%2F%2B5QZfQC6OK5C760ZyLN5TFKdxuUfIEGyRjg%2BZP3N8vdCgouax9eiWYFjtnY%2FrMZ3MXDwe6BmYq&X-Amz-Signature=76c4523ad7b2f2d120be2d8fd5dd79c94301da6cbd5d0b4c9cc0dbe0fa788ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
