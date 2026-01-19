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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=c8f5890cb150b12df8097c78f75dcc268adcc9c5096ca4cec78218db2a8759cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=dbbd770f1d7f901f5ba327f24366954053d7621564cffc02c8b02f3ecf53c5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=25174b9a0c7a4cedab5335da4488b90866d88a5eab916ad42f6a04a15c4f656e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=654a00794e21b5d3f855d798cc90b0655e97f561a0f268e78a453fd93a3a2d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=2bcb3d4c97215e9f377c5a5404c4baec34a1e0c96e8c6e9d064f81648d944fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=6b825c50b9ca763e2146ccaf591541f5e9db0885c4643f154335f5471c2bc3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=9edc5897ffabd36b2339a260007138eba37ecc1a5e17338def0ddb5e696ea898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=242c4dde6071d1e55e823afebbf8008829c71cc04941aecf9bf88471b00df75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=f42d90f1455448d53417688bd6548baf34ac07d9c5dd98188b87aed505db713f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=5beb825f119f9bff39d2b389f0e10f82103cfce7ed2190b9a9f1473b663dda07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=f6f7efb13a411083da4ec1e944c5e11370c5e6af2b6ab5832db36d1273a5d308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=39f259add2d14df581385bc7a625e9fb1fc60292bc0de8e7b90da6cccef2974f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJG4I75%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkVilXxFER8x0qMKQv6E02Fi1WSMheBEVLXO24WbSpAIhAMQCRgsbKVseVz3LN2jLmrHg%2BzYj66yj%2F9WLQfsGDKpoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxahMBg1wSgR3uuOKQq3AM%2FwaeqSm1aqjumPlYUU7pjhtAvWRrvnXH2U8PmWT3HevBskCDKF2hFh55HOZQ4t6EqkwRTVUn9MJf5zaDYWwCcYSWBeMJlEf%2BVqZ7PA0OsXpx0tvgekXu9ljL7cNNnn7a2eLVwneH8l78KkIe3t6Pb2ejjraCrje3GQWkogPH8CARw8TvelKfUOqpU4AcsaVPCms2eohECkFhwZ1ik%2FvArv5%2B6zyGFPrMfDzKnVRQ7mUxbIqtFdzcmDBqSDO%2BWrhneRXfbtCZD%2FWjpeqgaC9uAlJm5viZO4t7Cy2VqBP%2BK5Fe8cVUsngcqHSYk%2FgaHPoo5U4kMWBMwb2gmxI9znVnao7mUkRv7DGL5lnlpgSQ5q33t38YNZhy4iOXB7B4BpdiRyLt62fuklIh%2B75UeL0kYlzw%2FlnUxmSrLb%2Fj203d5D6Iz9Eq%2B0%2Bm2rbfsiurNgVCtTp%2BTt9wg7O4FvLVNrsKRg9yhU8YybghD9d9kGQpZ8nZDehl510LyDfHB%2FlAXZ0baKw7SszO%2Fm0xOKnt7KZkJTy8Un2fnzg9E590t%2BcrFZO4qbW4BQHXxw%2FaudcFszuc%2FQv64v3a1TaoaavtvhIvHJ%2F7lwO4PZxotn3f%2BySLdbOR837TuO9a4oyWIizCa3bXLBjqkAatXX%2BD9mYIfcKLmNxKeFAPdiQEmAFqNFER7RD9qnAnVbru7kOvOVy939JcsowB8QroxmsG6%2FJKdeumyBEUlSAb%2FSgS84qj2IcXwjR24eDaoQF4gmnr2i2P%2FYxERmOhQTX2cib8z0YbPqhFKbB6y1dLIcbyYK7sO7rdXH3NcOwqGG6gU%2BnBZcOFMqRFFyhD05jN1NUWw4qg314OHJdBNMmZALqrM&X-Amz-Signature=c0782e9238bd7302097cf13fb520366533aa6fcf9e278224e4d32dc849317317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
