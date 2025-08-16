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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=55b05aaa00838522b31e9f3e557b05c64aae6b5ce54aa6b68915d7174680aa6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=d375434a0d44908a3e238f23ed2580f50cedbc4668a2eb1d45c4c38f023ab746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=9805982505802a021528197acef04e9ef03913541a8cdc8aa141bfce2e319188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=18c4879a236a1b4c76fc56e443a04645a010bca19c952d9e927a425e42dc8758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=6598a3e037dede3a5597fdfc346497ce1a3f6186ed1712cb5505d783840b077e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=76834a13eaafd4f9612068d6cddd6d9cedcad4ce87c6b3a959349bcd99e74bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=7af4882dc58ecaa9f68f4388bb2fe6b9288b152549b4849483ea6a1b431e4469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=4eef49cb9f540e17f0ca9e2155a955b61dc3bbcceaebf3249dabb1b7ac2f989a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=afc79b86f7b9f064cdb826fca8bc45faf19a520c1926e48330f31d061a2637c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=0234b2d4aebc22b1be374717656a632eca9b4c732affd619a2e4b57cd827f9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=4caed02d4b0f5582320a2d9de0a8e81a0c0f71a42d75c0c352b5ed36b0ae2fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=53d003dd3770f4454678bc1376bd22ea62b6feee9dbd0afd8cd167a900172712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FIRPDP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIErhSBg%2Fjc1dnED%2BRVoBZKeFjZlRPvkUBKW9BEHYNbSIAiB4IJ%2FQ1abKz%2FDtjqgiA7MEQJiGNsatOFoP3sEJL1blUSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7%2FOfESOcdXavjqIHKtwDOQnc7LJI0QQM9bWiqBIE5clG9YwgrhaXrLm9wAAOM%2BvwDjHgSckSN8UhT%2BPKCNTm81cDsBik5X7AIKyR6tZoVJbE9XfgSRUrDlyVgNRwX2vqM9jBYqswEf3h8P7Nh1oXapPypGhoznYCaQy0fn1VjDgG%2BXzbpSJU38TCV%2F1q0JsBBAkWlY%2FJdvMgESc8nLDfgjyiAE2ntSDZL1LEP9S1nHuUWe%2FpBvW8ihLMgs0Ks8MkmymXIx76X0o%2FaRvpaKIWzHoo%2BOLqevoJQV%2BDwpB5I0SZLGPhkJIzofDv342bkantM6fKzYI4CBBxod6JiG639%2FFSjRh4DxNnbx98b4cM%2B1PpUIDaLCWUApGuQxUPgfu3ArqS6Yxjufv0s8EOY1W8fWd3slboYBN9jnp1YbCyQJCTmsZLvOrYzVbb%2B9yBKoAWOcdbIsCXtBuQOX3bDFhrPmxkLimy7W7TLZHnbU4ZczweVktT0JbUM%2BQyoP6S7LsIvkQPzkyVO4qPnvFT8%2BS7%2B6ELHBdiQCpuSXkwKCGwM9vuOuIPgaawfEq%2BWUa%2FlKw2Z5v8ILPxvx8oZC1LYbxmSvQQ9dabmIWZxVL%2FaxbZsq%2BiC%2FPmnuTHwVDVi8Gj2Opr%2B4QyuYfgd56dW%2F4wzZSCxQY6pgG6xwrjRkWgQtbS8%2BPfnE0Z5tZsdpTAWYz%2BZEJVodYXO1VkYjJu7y2J5Sn0DAZGADDgkIRXuX8be27HfkNhREzd5ob%2B8rMTr6UfWlgKecR0WueYHoRKU22JnRJWR3VXAE9FRc2YGnojEK0NbxsKtnAjf8lfG2ADJZbSROjMfT2f%2BfGstzbuPYiG3dX%2F52buDX0q2bWw2y9fCwvvUo%2Ff0JRE9PK%2BkVjs&X-Amz-Signature=06dc193ba8af4d2a9fbf075adad934fa008415a288e21f254f0e54f2f81bc60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
