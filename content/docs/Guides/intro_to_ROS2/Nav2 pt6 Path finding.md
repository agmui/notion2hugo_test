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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=4613e40e70b82ae59b75e62f4b835db28b8a30eb2b59136272aad3482764af7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=6665db706a2cb60a471ec77563c88667ee6a267edfe822571d9b0dcd6159ff1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=fab2d1b4f596da04ee59daf0d3dfae84b9eb7a913ae3acf3afd465ea06673126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=f421392e316860284b93f7f67307760013284fa5ad3cecbd3c42bc5994856aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=1d6679f5596b64c04b40b27c8bb472d099af4dc2e419f472aecc16d5eac4d76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=49116985630944fbc7478674813adc728fb0081d6a259e4e1cbaf8c68011e86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=87892935fa434057a94309094b5b5d994d56a418bcbb043c348dde070378009b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=3ca4a15c770b4d15fad1bf29ebaa294514d996bc434aa1b7ab96c3fead973613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=16d768e11c4829c2a9d7d667cf3f52ac68d2a81a18c390674df689ad86b5c9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=5c3c9efdc21b9d6963f71a64c011ba27088f2db26aa123909f62c3218777acf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=43bc36a59b50c475cf2f444a9cd9162778aa76486797087b79b47ede8fa62151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=d6e2a1465dadf8bc0e100abc9da3278615e332bf547ed4a53f610ea41cfe365e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHS4H6A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEX55ZtOmFEcrh2uWAooMCBbmLS2uN4v%2FAFQDOC4DykwIgeP5uTUiHFWuyyzOHaVLkjcswfHBZeFsvxkdBz7G0AIQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMuLrbl8UeX%2FKmYbTyrcAwV9mB6fNNjKDNl7%2B8p%2BVcQGodJfQB5OURIpmxNprHr6hQza1KX94YKJjUNkS%2FZ1XemfWSUJjZv43P3BpGxMtdLvLSlewg%2FGBejDk8dAqzhuF%2Fcay3hi%2FNUMxXxCVkHDvfr7%2FCdM23jRjjeSrAFymc4jqL28%2FvapI6upv0XBwEA1pFD7OGImSvX3kJbt%2BT0tkJGEX808FfzOakANxkcCPzBZ1cDS27JCDb9rkLwfIkLqzHZFCQ%2FulMvqrWC3qoUSmz8qJQsva8vEXOYPpu7R2RLu8kj%2FGt%2BymA2uRfnIxu5hu7R8iNn22rt%2Bpd%2B9EEdnrQEin1xz7u%2BHPD%2BrZO%2Bqg%2FWPIITj%2FkwDLISgplk%2BEAJuYd8dvzUzNuS5noEhdzPybhkatItMKBlDCPBQtBCH4i4kybG4hHcI7t%2BZPo4rr7a5CFfjV5suS%2BMg4072rNo3S1YbcRwqZKbMIfiKUgRg2gTH1BC5FeLdZAmKqMkEezb86MW6CPpvR6IUke1sW6e5jotOdb6rmZmJUKSP6WH%2FZAyLpMcTqKmT34q3Qlf8WxbYltnC4uKrZuwfcXXLd0Yw7vAF8AzaJ7e3HyWslAEWKzgpK5QVand19oIfeVkrPgtgJOhEXiN89l%2BQHDaNMPKAusQGOqUBPXCbnhv1NZ%2FNs5HtMOsL1%2Bgckw9D%2FOmiGkheL%2FL1%2FPpzOkyPqZ4whhKcfDglly6%2BXJIv0cBaD6oNY7QZsuWMoIIjtCodMQYnrcUcAtD3Mpp%2FZq2aZAVb%2FVHnZWXsQhFrToJJZzNAsr4aCC6YNTSiafTxFc3k5JCN2V9xGEKpeOCLDtFcTXW1yNbhJ6GDsiah8TyLcqIDRPP2pAI6u0jhtfwmidyt&X-Amz-Signature=4bc647acd9c4611bf712916be0e3c1e230f8b765b5ac98f186ad5973bbf2735e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
