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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=7feba9479d56f905cc7d534db8a9238c96a3301734e8a1b6fcabb1c0e37de33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=57f0cc9abe221502805e6be8944d14cd38e6b38b6ad5a1d5986c4e038dc1ab61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=257df66d1a3d523cbeccae22f127452ebf564da4c11f3ad754870b6332c5b240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=e844ce89e81003cc69c65cbdd060af4135c9c5dd1ff40cc2722861ebe1df4531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=ebdc3cb2b9684819298112c7ca4f330d1aac012291b21c7b1e4589f3e0e7173e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=4340dd3c5c5263030ab5d56643f93bbd063ef729279c67e5c521a3ecaf8e12f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=9121215a5b853ed467b048ed3c09eee95c01462390b269610aec033f577d4ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=12e1a12015012aec372655f662b9857b463bffb3dfd50d477081af9a56fb4f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=726b93b41ecd712de7fde3f4e20f15b4380f5e66afa4dac89ef12dd33aaf637b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=d046cdc7b7c1045ed53a05be512945d4f4a83cece186d7832256fd74ec6d5fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=c0ede35becc456a6f6f869564c6cb7a6cf56190e295122e6e2c57d779a48d894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=d5f8e62b89f36a61f89b4067390ed6b8c326092e98efe7beb87e2468fd07ea0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3IIVGTR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDmBVjlFeOvdmGCkpulmFP%2Btbq%2B06GPDz3JCu2WezcAqAIhALzYExfeSI5DATivdFcnLzwjOrhsbkY2P4gulPVZGb3aKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4cbPUqq2PX27t%2Fc8q3AMiMkE7v7DUIYlXqieOWoCICOUS38WSSFkHgRQ9PQhU%2BEABWhvVBSjtOXrMZ3qSj9yL75OwL8dPIx01yQE%2FCAfRtTpx9%2B1d7jsALWKSEpPtV%2Bi8gVNvbx3KwV0RIZn1SIdHK2Yjm7oTiDNr5lSOjohHFbUIRo8RPJF7H0xma%2FOmTRXuaO764yNFSRfDY10T5dMYRuAp0juZDeQDHupeEE0QpoA0pIhpb3ctHA7SIXpkQgXQupN7%2ByBWmXaqPp%2BXooNohQWNUPJJ8D7MXYwWo4MSmuRNjz55eQxcotnOR2Te1GnXgAEt7m7tW2lC6RA0NonCRWd62f3rc7mQEL6HQhqdqClVsZqbUJjR2Z8cTU0WcWfgRSIL1aL9UCOUYUM6Sxgv3kpLCL27mDp4KvHEnsdZ2M9Ec1UPSMLBynunEnKZPHmG1CewIWKFVjcyzcMR2YWYBgJKxuFb15q4GBF0H1VDjisx7PVm7Wt8ebf7EY1%2B5H%2BqKaKcWRa5ssKKm0yLsMt8Lpd6mQC%2FIvk3mgNHn3U8TUKwzH6TScYfPT3t6LHBs3SkEzr9PVs5vF7vqWZUERu9Jh3mwmwuK%2F0FDk4U576lJ%2Ft%2FMSJr3Eci4X23GhVpIYu7kc62QUIynWKGwjCP%2BtXEBjqkAclMJyTe5VEItbdGYaHe43K6OERP%2BuyTI%2Bc76BzqDCcaoMkoF%2BJzZLh0kYyhoh4TgmgAXYW1A1wX%2F7yUTbapfnww46bqPIwiP6RqkwR7JCkUNVxAq5Du8aIsrnZ7VXniunD%2B8VKDGbEuizbOgG%2BxLFR6%2Bn2t4cZ2n%2FmQh7yGTmgj5k2z6TdOkFtlHLVk%2FJks23Yf5Fu6cTTsKGCH%2B1s1OzRMlXxV&X-Amz-Signature=1ab35845d103c6ad8c26d8b7d8e322b800088a7ee65ac0330c086342de146226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
