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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=71a08e979979c756fe31f9cdc04c80963a5fe97b34d968fe6de1caf8cabb7e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=80e61e648a59be07c1f277ea410e05e92e35a956b6eeedb0e48647be4598b5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=285dcd09b0667a7cb40ce3934737c8ae3e43558072c64f0ea92f217cd839d391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=c19e88683f5a355e8b5d0684af2208ba46f2237c642d30d5d9cf0290b9221656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=0e8124b916c159b5c9cfcc7c86271aab75aa272a0bbddf3521a842dd273f75ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=ae2c11e8eaea268725cff4f272b19f56169907f5f0c042284a91a3bf6a086ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=e05905214c2c128da5ddcf58e1fb80a5c5b9e63689f526284fd60a62199a739c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=9798148ec01f0983fbeff876b7d5acff205d3dbbbeda36003d17a9deb4c5589c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=5bd73eac87ca96140fea2073b39b1a857ac92ead91b89e723e2663d55b380ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=4433ed66dff195365d4443144578c9032e2c35add4f1d954b284c198c53aacf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=55af756aa7d103d172c1d27f9e7e50f27787d156f5c8c75eefbdb85ba8a93994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=0c02c0b19b28a0a524496e3ecbf0e6325c316970a1f3743dde7a6264ebfad5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6BZCDW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFevzXwIOxeXQwUWoLnbjY4OujuPCO6xE8j4%2BS85VxMhAiEAxcCKhgCxfbQdWBKWEmG4PBUuv5sw9V%2F0Xh5U%2BMJUQS0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXJVLJbi3l6PwkhIircA88QQUTWAx4jmWzL8UzdFXQsEvE6D3Ltu8WZh7xoMcsQD0oqvIrMsmXEDSCTwnr5CmxLnMgzROhXVj%2B4W35QwiV%2BNfc4FABTcasr3MFbl%2BtoRIIv13dDpj58UFcSiC4hmKwVv6H2ZYPz0j1SozOYp8h%2FUUMgJPWMeSQjKigGh1PBRXrAyqVABBCgQs0ul%2F6DEVJ1SkPRhLxWqZHiuuChsYnAwZ0SH06Jyyo3qvpo4EPEu%2B0HSZOtZqOaExWQGsqndciZntscStsj96IdL2spsQP2QHHKmi1kjt%2F%2Bkvl0UaMILryPFqqFY%2FLdgh7rD3JF3miDybb2CI9D2zCJj%2B%2F1cJyEcsaE1fTuxfY0AE9lEOjo9oS4sCSyjm6r%2BSNSr2aaDLzm1wpwno%2B6Tu2hPIwQUF08apizDdu0FMcGjvZJHxFWV6jon%2Bk4uzKl4qzoaA%2BJWW84VFZZf1tX8ZYtObyP0Fr0BvePIvEI23C9%2Fg1RELxz9Gr%2BZ%2BZ4C%2F7Nf3k7eVAwEu3Opb22gMk77m3Zlq8TkwbmVY9sNTvr%2BxQpJrgcVRegcYPn%2BdPmlV1TQCP5JjVG19V%2FlLaf75sB2wxwhLcw1L0klRaDKVdAs9D452kG%2BDJ7gvhqV73oNqGwGjWRMJ%2F4gMUGOqUBs%2Fi81fMrtNJd5yCl7OQZuDVWmqPmAwV7RuegT97hhn6w1BSm%2Bw1olBhupI8KtYxiKzfAWgKKsITeza2xqGHN7eUrPxCKKsiz2SrGkhntPSW2RT0dfu%2BUPJQRf6u4u6lCRm87Dk2li7AJYD2buErTBoVe%2FvnDrCcj9eoEyuJMVMAJnUJv9O0zOKSq7IEYgPwy0UVc%2B3U97sznp7fymNFXXTrz0SbC&X-Amz-Signature=492778ae95753ba937fd540b1f4ba39076ab9104667416a44f6dfd5fb4d943dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
