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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=51cb6056597df9fbfb51da06c235f1d62a81db91ec14af838ff04bb8f06c37ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=9181227accb2dfaf2d9c11535eb35ed0798ead300fa24e69c4653dd52a83e30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=76c69397950b8a5cd047d2eb122ca538cfeb6f16e78f7d86d6bb3a9719884076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=db8493a0fdf199104f41d06146ccaa2fd01bee78df9f6c31654b31c9019ca52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=2111730dba255c06643f51c8cb296ad53e28665eea3273e3f240cbd1165523c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=b40cb1a0832107a6df9db42c2dc9b67e8f7b8c10114df772bb9615cca5e46303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=61259e008d20f665d50e056e59e6609bb0b1e442ba44c23aac12ba448d6338f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=e35a1ee60ce492fa7f3e7fae29d8c3db3828b52151b2fe836a9a7d1a78100606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=a239c25bec333f4559e66ce866dfef1634005a874c93d81683238069d57768ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=294900178eea7e2e5607e1ba2e27e2b30bc4f57613670a7dd837f3c04fd15d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=a57552919b12a729ba177c9dd6476191230c011172ff7e6e18c610b784bf396a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=37ab3922832faef0526ab7021ae93f2dfd247415e147bbc0d1b00b62213585bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQARDMYP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOBPtWcMim3%2BWKic6d8qcnLesZTON%2FBvL7rB9w1Fh1TgIhAMKMxtUYA0tRmRdcnV47Lbh936t7s84QK6dHLNMTSavRKv8DCH0QABoMNjM3NDIzMTgzODA1IgzWGfQkHb5XkrdhQTwq3ANuZLnYcEtXObLZCiLog6iNCjJjVLrqFOOCFNH80eZHd05BNZH6LWuWy7vnaCyOIbzT4Tg9ab8YuEob8ZB598uep5pnSd8431ImCBoLQ2Kr8%2BHxF1ewB6nIippFLNHZ%2Fu5Zg7%2FKoE6%2F38XPD9LZXsI%2B08jxStSdaIAgkcni9737hF7dBaaxeDZH7bBNMmbYrlJYNib4aht98tyFRSvLsT8Vr93kTCG4vU%2F%2BP2CMv%2FOezSKnQ0e64lw44ceJVs123dYOrhT8dP4luNJSFU5Lf%2BtIztdSq87aOJ0TOxeBkZP9rRfleZGJaixhFx8S8BJeSvaf2ss3xP%2BlkvjLH6ImP%2FQUmYHbCYwVCOAcUZ7UmjrHE%2B1xc0Z8zY4oUc5AenbqnH6L5SR1jNYAoSwvgOxxXhXIZNrFfp2HQcAzXOpjBIbNDlXEypng%2FdRllZy89DIZtJq3PnZO7EURfDU3pep4g5qD56AtPYDB7IksdqbGTgZyzZ67to1qUI2aUOf6%2F%2BAz3%2BpQAolWfeObvS99v9gmyaYvi71lqLs37An%2BPcaIAj8nwx%2FwP9JXxx4ZzR6pBY%2FsZoAdh74X9xU1g2hMoiNW4DVrmOwgMkFZBRvsHaL0PY2XKgDBbnuo4%2BVI%2BulydTDo6s7EBjqkAbdE1tWm3sxHdwKKc2wktyOBnM8LauPtDoVJkpiK3WrtriR5xTxBW1kCx3kaq9n8AzZJlXi%2BgAzErgCiZkoeV%2FGDyuXsMs6GVrmkJjlrdQpjRiDdlcU8LUvm6kM%2F%2Bd3kyl11STKuDwW2ioP%2FqKEI7scP5n4K%2B6x5T97C2tFdeLN5cN0k0MY6%2F3nK2tR8n%2B%2BSLH%2Bvei0mCNfo9gg87hVnSMrs8A1c&X-Amz-Signature=582e88820f2777fccccb4f4cfb25dd09cf362fe34563c8b18bbf41c481abce6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
