---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=0d10fe7b533afff480bafd4a18afae47dc28ead1ed6b9da30900a3d310b2975d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=11b356a1dbf5d641137b203af553df28564cc19993d7938a546a3ceefe718277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=2a89b211cf09d350de11166e3319c1e6d3910a8fc0928de5371fcc45320ededc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=91b2e51db4273186a91a2ca3d176b71ab6d9934b8c56c32536cef613370ab4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=213a14f8bde18c30db93a7cb8e370126a1879f85e4965f17904ab82d49c7a169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=c451bd78a084579e5ebf8234027affe42a826cc4a95de9c73c42b6b4fd203de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=c0dff157eea2964a444133e415f8fdf4b256448d49c08ce90e0ab2889b3c32fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=6c12e029cb1a23ae63c0de9ec478ec0eaeb0b06ba1c5dd7f918ea3d3c0de20ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=f4f3093c4717824820eefcbc6c632aa40c68289124baab829efd09a070161733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=4c6e187e1ef27afecae558f3046f2dcfa48132d42cdac4c62be108b819334322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=bf66fb54e40e95dbc7fce6732dafcf26e63183f156b72e0920771f4fd839c910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=d01feffe4f099f3b349d069a84e990b67fa3ec3b838035eca4f17d58b98e85b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RKMHBC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOe6mMiP0q4WT15fm%2BfLpbtZIWnVNFwVL0ktDX9jVHPAiBdkE%2F0ChNpb9%2BQMSgcWP7%2FhshjOQP1B2EybAmfbQWvNSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEekClAcnDCHpdqI%2FKtwDZMlmpkF4I6%2BUWHOrvRQhQ%2Fh6otjbli4I0XrpnIuWIjiXMKM%2FygU17XbpGL2QG57rBp3gRq0xCxoZnx%2F2U7hDHR9Lh04E5pynLwMEOYwFYoz%2BKrQhfUQbhZH87tcvXqremz3paFxW1Gc2Z8xuYNflblJNbBEkD6fp3PQdQt34JNW549ex6W7wuzmB8hKkW8ETPSTvNnB9Gb0NOrzwPFzBZcuAj0sPqyvbZHcQPT%2BBTqNsrwUwJ1OqnpwP%2BuucwZsUwZQHzb2Y58PjbwPbrLvOcpaOSJbk%2BvTRd%2Fr%2FYmbnUwXoGQX3JV2A%2Frd8fRRFymiykQXRYITVwRncGkA%2F1CEEcOvl9mQUOCaXzCD99ufVczeaNl1ohtwHdJZOvvjv6zKeFAxX3vGFzToMd8vlKftTxarzXnSznw5Z8qGk2kBDzG87XKAqAugy0TGL6DSfURE8r3VinQW9pgNdE3v%2FPXQYmEE4uIJRyzyhOmJ9EoB1zgD4W95iYzAuEmbysFrN6yPH6X22ImJ%2FcV6C2w2vHtZJ3wLqPdYwWXMHgQ8sSitcoKsjKhjFpW%2F9iMC8W5KI85%2FJ1nMiaxdavxXisvHC%2BWjipB%2BzOrY69bmTRxn0rui%2Bxl2RxXoc%2BGOmqZXJwZ4wuLayxAY6pgEMOiyan7R6Cee32wLQvMohtlLrCQhH94Pz3%2BORw8nB677yTp6%2BOOBvsCGuNRtA73WYPT%2FsPpM%2BgbOoZ1r6gDHa3V1mZoRT0M4rFpcI6vhAeLE3f%2F0YhI3dgyhJkIXzdnryC3YrPD6khmc8o%2FLPb1j04BQyMKhELuCm2Rn52nsMH6wOyzxAErh%2Bu6ThkZJZhCZUKOPSZGmSescJ27rxhWDdDEI5ChmI&X-Amz-Signature=b94ee181296fb58880f85952dec62956af53ae7899ac072238897dd0b66e8db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
