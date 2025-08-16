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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=5955aff1dc12fd36ab776057bee9325cca5ce8eba7ea329d169d21fe1050660e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=f45e7c84004bda8b312ab88f873dbf4f8abc2b921227da7a5ea5298d38ac55eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=ec31de6897c0ffbd6c44c89b07d1f2b62601e81254378d106186fa4d7d798215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=835268d120de2a02bb80ce78537adb6f6936a1c5bf32ad84ff4e9f7632f89320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=e57485b20d50a5491e45e823af9192044f4170b13b946a1da2d70e75689a89d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=6a8b38e9e9cf9eeaeced6c6c1c73c450c774f6acf932096f7e3a304fb3958321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=1fba362ad154f8a6f4b5f96886dc3f65e1752f7145562da25e5a66a7730f8cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=935c87c11777aeb424c19a410969706397c3af3368ba40f51af234da96e5a8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=06eb74e9177a10612add36045293632b4fb87908bc9a962ce83ccb7b6bd7d00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=51d0f5f40d5fbf68949e678e4540be19cb3d965fbc820640abfce5fdcd3c07cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=67584a2ea0fb2d63c64dd24a14f30f651e73029c3f449b5e64e74d36713fae3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=aff8ec6ce97dc7b70f07c9761a7fa06fc07700eb5c3c691524cf21d6a803bf06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY2D77V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvR5VNq9GkYcwd64FWQ1iJe6I3zebtcBjO0KxHMbINoAiEAt5aaVibT8TBBcW8Ml4QveM6Y0%2Fm5yUvQ7JGNC5HhDEYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJGNqk2LDdtBm5ZZxyrcAxX8JCsn4ubvXddIPxHYGQzr2x2h22tRUoTNrd0YZ9p5Zt4pgSh4V3Gb3FBDYq%2BoEx6H6cdKv6KIlJL%2F3GCe1K%2FNqbUS9NF830bh73Ec8juUymEbjjrL%2B9jaeDl4lxYHbIO4TW3hDTrpmViDwINTeDUhqJeqYH3J6kIodvyTzXcyG9mqfpXYzcDQTeeJtxG9YA0vTnWK69NHisL%2B2KqH5YOi4%2FUZGwIDH6dwkkT6mamBdCuYuf7LW5sUI13I0Hmq1gHL8t8COb45yLVpyw4ziE8crkDmrf%2Fm3UjzQv5lfV9GJgTg4CF8AsFWPOeOs6uGL89vW3oudLTsOLl2oSvs3DooxogTwGmmootxmPStQz1kep8a1xTjLjb5Q35OuvwEtwZtY4l3rg6acBV%2Bpa5beh0F1e0CkZUs0NZrwQFb8Vunih8gjGVIVvkxpC8zPZ%2FCpJKjM0oA%2BBIru99qF%2BLgAcyP0IXeQu8DkxQBW3MDEyYMX8QvLUg1oTrBv6MKMaZDFyjfJgq7VURitnd%2BqA026KuOnFFJxAOn%2FDqg1d6pd6nSJB0a%2F9tCzmvBTl6PhGpayolWnDuSsQ%2BwnY7UIUhOKumoLCfSyJdOemLyaQKvxcV2Q0%2BNFxLc4WjAqkjzMKCLgMUGOqUB1yCvCGRJ4n861GxY5CwSr%2FaG8EVOKkmTdkJn9Pj%2Fzg%2Bi3Vnr7%2BQ8wt8x116eF2S3wyU26975BdJfgTsUtT7rzEP4Ehf9GuJaVgUgMQJ8eCDC8vtpF1sE0qTPTva0fs26EdZXDy%2FWHxwl%2BgLsDmfJPAhHyVVpGmZZp%2FfQC0rWOhmGNdJ6zRbDQWvsqJ1I3JUUMPjYxOvHu9YcjBhR1ED6CtW%2BJPJJ&X-Amz-Signature=8cc58c928ddfcd1b9c7b4b3d65048d1fce38f834bcc19ecb1e769ecd35f7c868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
