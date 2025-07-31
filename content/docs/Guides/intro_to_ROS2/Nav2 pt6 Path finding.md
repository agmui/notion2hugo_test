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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=f7d8bf2f38ac39f1cd090d294f26bbf13512d9f9b9499b49c6be3fe55b9d7db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=cb41254d367478c8bd2c3e649ea2b9942e3c8bbd76ca687bef4011fe267dc82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=0124d21a6c3b4e1d2921f3480ef226ae557caea5ea1a881dc2ccd76b9bc8971b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=3cb48d45af1b2f3078fcf49c169aed50590a07ec1c868556ff783ee16cf88b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=0750607f934acbc3a506446412e906c16f19567ada8b91c066ff6495715335f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=2878bf4d994683b442986b4b18b7f35c2467ee188f5f7b4312cd872804a8765d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=aa909863defd4b0d7aedb3accf660109a87d6a5eb0f38f01fd7bf0433106765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=e88e38c7916848ade15708e18dc54bf12746375846a670fadccd657716a5bd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=f2d2d11418183d568b7c4242b35b161991e150892b460423a897d9d5a28ab90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=54bb32756114296b15a68e91d63b1930cb8cd6d54e3467607096cd8de9b67405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=f39da4e30ea8c8f543d2bd895c273c2c1879ab025b0e26045c80c4a2b0c04f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=77ee69e6e294d88f8f383e12da9df69d077cd62e901b3b9e2ac54bbba4415e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQUPB6VP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlj823JFlKX4beHUpcbqwJDchGiGbtzBRi85yOmQT5EAiBIAPmnCIubm77NvEKS5g50qJ39NvKdXneAJySofbiivCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJoj3xHl5nrAB1FoKtwDZ9XQMu3mGbifulKQ5qI6KGxkocB3845kiJUYUVRt8%2FQfAHbhsZ4WI7k6jHQ6nccsHYmkB2T4zXZUY7rp7v8FoKP%2FnxGw6L0eRU%2F7Gcw6J9mA4FTqpbX7mchMOoa3AgI3qTVdzq%2BkjRTBVomH7BLdvqaVSaqIp971sv%2BMnjayd%2FMjd8We2EcMVQ5%2Fa9KBBKHhnZigl9ceG4%2FthEu5ZOmbAp7CjMacv64xMEYaSTrTt4xppAeSbPI6Azh6pZy0dLgg49rrC8OQdKXlbwykYXHe%2FLo66YxRgf4bFRTrUVUsWTVPLlJAV3EUpRy2ssBMib5H%2FRo%2BMCvBQ4w%2Bl50QpfzC3jLiSuXJia5b5%2BySQ0k3LWHOWyM3LjdVLUTy%2FgFA4AGs1tKOdNhxVh%2FW5tgsHUXY4DSsRyWPyKtxD3egyOi%2FdyMg0%2BJ6BfZ3PdPX5V%2Bdo538beFInJ8bbGQMB%2BI03jfkrdTIp7kPhDhRSN9Ryx1N1Ata5RffddbtbUgAz9kvBpadG6xTVQ4JF3YwKNjBASiV5mal1jZ4SoNFC2b8J1%2BGoPq3ZHlYYHvF5wmmwvxsxQH%2BYe%2BYEBz613npR8QgP3ORRuVvbGqJSuQqp1HojggyP1h0jpuDS1GrW9n2yMMwz5msxAY6pgHu4XFuvcXgi4de6cy5VcR%2FF65NXMUMp6sxS5k0kffKby2s6VzN49Z8ZCINJi9UY%2BKeYghe0Vtexay69la%2B3cgUBJHxA%2FG29RZxeGAEWGQ5%2F%2F934gmXhNruqIvYmTH%2BT7H53cSg%2Bp%2FJ35vlzi34YWF8B9zB8txl05YhLlSb5z032AGRD%2BFWG5ZH48HDiF2SZUBXgetMjRs0HQ5UVYqmzZ5gq0%2BXDB1t&X-Amz-Signature=e655606ebf75eb2e22c6e6bb553d59ea99bc3160836e7009ae39d413783b39df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
