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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=e193b20e20c11f516614853c6b8761ed3fc03620d59543ab3be67a63e9fc18e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=a977e46a76cc6144a543b95c9fb5cbca591ce308ea8736328d56ef1303fdfecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=3bdc5d3d0d2320087b5f770585560c9a1f39ea8a4399daff0f16eda5e7b8004a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=01cb029e637c4d820cf3a34d68cd12acd62f983763b168b93214af4d589136b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=d6c3d8df762900ff447abe75c18ca243fa728bfd0bb947d518ee5ade8b7e7e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=65c4efa5359df63d068a68dd03e3e67d9d85f1456cd423dca9729e947f03fc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=79275d7efe8f7b73e15d3d420b99d04371439bef17113a0a84bb9dea3f73dfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=771f4078242a26fd0fb126694d738314a375c14de92338c6bd519fc7cda717fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=f14a21528468182fef4cc9e492449214143cb4450d498eb5aed3a1b5be082883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=c676cfd4c482274f0122ba392495538cca4ba4645a37e9047bcc99080fd5e646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=e9ede05d56959aa2d4c2772b57e81c0be923518e611b601f5794d627018f8120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=630ea8ce5272dd27dae7c9291c9af40b5583626d5a7f9be9e5f76e9d81a205e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ75WDLG%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE4KhersMI%2Fb7wLbM6SpvVv2DHZYs7Imn46%2F6zGl8JjSAiA3L8gEDEYNVBmz595b%2FGTBCa5zJ8Gukb3Vc2EetPrA%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOHgUV621QNvCdSBKtwDFrgmYBb4nWwVnjA%2FfJufL95R2BYslSW5vlhqcTzhGsGbeRdGThPHXsPWG0XBK276mPYk5t3XsDfVqtHVKcq9GVM1RsmoewDTctl9Ue%2Fteo1kcfKTkjKPqulLfZIV1iGFeqgvFBehZuqvE%2FMio92uRgus%2BggOQUH8hnQGcu3PN54ZZDvqOJ35ICph5ZpwnJhVgQGAbkffpQKkl8CGHEk40lRvYEXniwzd%2BrH1lD6NMAqKnztTcDg9xtIKd51BrzZfLBLWudAQlgUZuQmhn7bA09cWjUdMOluBbhOp6Cz6%2BMiWMcEZ2a5o%2Bup90FUyDNR6Eh70ejkJCOeO%2F6BV%2FU%2F%2BOcUOjNb5sl0UBv53vV0DjSye7yYWCOvuNQA4P8AlzFldRhVHJD0xTwRfJbLircGkJjCvXvVrRVsQpyN48EnXNJHkJsPwslNftdRXYC9ygsbUb%2BE3A5Td3mJ%2FW6bFcfePA4ADBP7JPYVHytre9qDX%2BEuTcJBKxvOnYMCi5A%2BdN6Dq93tYY%2BWUoVsjIwkLB%2FXntUy7Z7twUhMG0wYQX6Cb8rI%2BJF0iDJyP8EbfYoaeoWWqiiTlC9LiFahYdPG1aSLHAVk3m9IK2YjBbWhBMjkxxVNkKDVBVn5se%2FcW638w%2BpK%2FzAY6pgE8GAlRYHDzOFyHYe5muSvHYCUrWWNqErEXu1orLyQh6K19U4xyHbHMUbyuS7D1vTG9Q4BAaFlY1xBlXJx8c1eNP395TBkMWwNim32yQ5l9Hz7wKHULCLJw%2Bzu7GdrftX%2B%2BiovIOlSX4nxZGEfIr5r1lFVqZqMjcPtkUpVkxAExq2KL3MgZ0Pk29lBIzkn%2F6zn%2FN7kwcUiTo%2BdQhEvRAuPzMHQymyRJ&X-Amz-Signature=c149eeb30362e684c33ba231c297fd20ebaaf55bfa029a160095e3c7e920a7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
