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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=e1f56df29f1134e2e1deafcc9c325fab61ee6e25db2c0884ed01ff65b0e30613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=9d00c223fb186baf3f4c679292610448f1934ce878cfeabebb909cb77f4d349f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=c0f7614c83efd0f908deabbb3f33e9bf290dce601b668182df52cdc9d8729500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=bed48f5addaadbe50fbf9af9c7f7eb32840b008fb6152f8d20c4fda36ef3c645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=43b67778388df0471cfbc5d88195e078d140d2dca7ea90c876a7ac4cd12a5a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=211529e6bb3b1a58092ce80ddf5abfe07cab591012c5042b446dd4cf4ce80fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=85f381fd3225f8ba6e1ec701345cba14135cac8e979b5a03604d1831694128d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=bbe9c0a8ddc327a6e8d1c475e3663a95ba4acbfb0e0065030690df2f9e42866c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=caec2160d87188fd81ef755cb6409ac4d5cfa8ef46f4394b113a976460ade559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=206229a8c1b17839c8f41bb02bbe474e34bd7dc97fce8ec3206564016b9c3865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=28ed1105ab390aac2603fb8c5533a36e553a9fdc0421d5b7d9aac677bec193a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=dea65a608c9ed3fd9cf594fdf01ffd1115d2dd855d9cbcc4e4ca72015fc46ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS3GXGZ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD01Bu0BfIhkegtKO77uljCPtV5HfDzzRsHP45m%2BZNseAIhAPaV9DUSrhU4krhTGVO%2FFFzAylY5gXWECEU9qJyYmNboKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcppCNyvo6ICgB4xUq3ANzP8Y00hGTOXL9OJzkJokOBnsP7pmOj0vh5Z4P%2BC3isik46lZ6jLupg4D5GpJOHrwutwudJdNxOs7AhuHCqjjwRUUtTnpVhE%2F2H%2Brc%2FbB0a7seyAd6bBThXMgioR8w31qrO95cOVBjEdc%2FS22JvpwPgstsZNKarlpzNDcg8%2B9d9GoICtv8UvG2e0Rst%2FyhzNlKDuxz%2BzJw9ZQ8pcf5uZQmz6zpZw0NBcKfvyFT8nneueiYBZZGHsvBrIdKDaXP9kQJKKyiRJGxKwux5WDeKKoC%2FkBcKTUt8veqFYht1tGGDyP6%2F6plrQzLReJxqcwlkIYl8nEXOJGTsUIpy8YcbEpxu07lpeC2XaIZnwnewPtStYYtFMaEenzf5vxdPC8MveBjQCusYQAqnzePZsDwlDIDuxM65DKSmzX2gdSTz5LiWxNK1y5icK%2F3sf9pqeGDhP4TR4ZAwsla0Bo8SGfCCbD%2FAnjaa3%2FUMKxmiTemBTPm9WUb%2Bzr0V%2B7ubdw4z0gTXcl%2F1hkJSeUgUR0DBxfi5zLr1H4hlbKDGi1c1PMyWnG3HEwp8kWzr8DzCQkr3UXF5xxQ8Lw7GkIDe3kUyhVLHebcOLLZ0pDM6HR%2FcJrIsEMCfzztGz0MUDtDEnETBTD5h6nUBjqkAbHlwLrHU4YYQ7eoWJBQpsyks1L%2F2rDiGBm2g14zGam7fVFZ30wlCdQCwBIRYjZNdCsXiIB9BuOCkPdW0Ma9WiYP9LrnVPEOs%2BrXesnMmOAoLyyjpvU%2F%2B5TvazHGn2GYFEuXBUtNAsQu6NboEBrpBK%2FH9Txa1CAgXI%2BaR3l2GcVGZEQYAtMlOjXAe%2BfQFPbTc2Qzl5EeADUSM2Jbj5nu6XYzVOCv&X-Amz-Signature=865de44130f7297b173da84280adbe79f497d0fab4872bf6c2d2a1ec6dc9e987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
