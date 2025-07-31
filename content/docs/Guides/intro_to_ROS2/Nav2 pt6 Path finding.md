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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=2a03019b49b780cf187e77c1f1e8cc180746e349ab86a224dbc0e22acb65a0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=e23d378e51169f054a64b0b2a8bf0d29b6ee6bdcfe6b3f83c7191b2b2c1950ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=654d9845e78acf1a9b7916e3fd88485a25a2254425d0f1b65be747d349627762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=a0556502a96bbf15caaebcd9bc93fd4bcf463fcd5e8772d98bc5034da8ca2deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=be90a824e3e5a52322486b1ef283c018f9e44d662e107dcee0954cee3b94be4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=000309e7a8c41cd19790d0b139a0d536ca5215f3a674c9d07922430f448f7392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=48e48cb63624ad44131a764f8ac360d31d87abea9e72c519947c8adccc1a973c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=92254b50605bbfcb6a954cb7098992c169cf4c7b42dcd2d4a4980f43b3ca5404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=3b54a12ed6938b09f708f06972fd29f4cb63e6f9e8c90557d0a98412d57bccf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=69e80ed60fb754a7273a15219c48e9706768cc9d33dedfad559935e0beeb1e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=24945a89b6506ff053de1540a96556a8c3675b0c099de61aeafe0777713ee902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=921bafa12011ff386d4923cef34979f0f82489fff4357a21a1a02f4003cb8d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MVVWDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCFRy40mDwPSTbPcWNJtZ%2BMTGUTg7ZfdQ8DfDgy2c1nAiB8SxuUx0ZVgX6wOadQitkI4mjFJkTUJJfek3HxBKvY4iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRvUeRk0eC%2B%2FPYEpKtwDTU6G83uoKAMk1AhyJ756JrFEdkUJqZj33O5%2FrnEn5CKVC2oVqiK%2BSTVv%2BShd7vLn2edkm%2Fd4N3JOgSucAnbCEADjYPeWSLyh7bcjwC%2F32sRMy9AXHYI1kMqxGZEOuRIVpqELVsH0lX8r4rH54edgQl2b6IcVfphTS%2BmPEJYGoKUL94M6rxQZvU3LBynFyJ8XcFLNuAGj11G5IQIDDvYfUWe%2FXw9uGHBSwBckcTmfUZ04YsGOAVfVu6CADrR8PqJXvDo%2BmK9ciQBKHxTjUH3s%2FzX8mY8F8%2FKURMsRdZP2TdMvmCAGUf6K%2BLe7WDVYFtOtxMwD%2FE08LZvr8GhtF%2BJllfaNC2FN5%2BWURk0c7D44t8FseWKEx8nvn679UVeRCxDJC1xTQHGODavPvEJ97tpv2yTn2dAZK0qDaHf3xnQOXRpkn8FWlgoKzat9YMUN2sqsaCJX4gf6B%2B4LPWAye6bc4vDf49DU7gu0JctM%2FjZsGb%2FeBMKtZEkrQpoBkK9XnoiU0ibjnS4Ec4niu83XROugVHIvDCFZyt76K2hAIvQj0StcbbeFiBrstRxYo3IDIo5jwCUdzZgPytRsA29GbdX6y%2BQwJKyTxqszVNNT9bNQhP77WWGXoB4Y6Y64%2BlQwooGvxAY6pgHxlYejcXmHWA%2BTZ8XbFv30D5CupHoVdYazWydoYLiD12veEN2C%2Fs9lLk0CnIZClYh7v3Uxkj6MuPrx%2BfpIT0gG2BEQyL6wu9h82izOkF4zEbaaSimpT7DW91YsanhNaTNrXnFxa6bYuvuHu8JVovDJ6gYzMVXeocu4XYtA2gtfsOtIc%2FAN7d9WYb7tKX7YXytVLTLPB5fgYJRm4c5vZy69rZ1G%2F%2F27&X-Amz-Signature=0bc57d90c940fc8e9e98b422ea22a6051f626b06531a580122932b1c8e2c6c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
