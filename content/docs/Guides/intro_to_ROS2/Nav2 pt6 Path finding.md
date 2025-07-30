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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=b77e253131ae012ff4e44aa8dc2e9d30de8f16c463e7b30c72975a590f463203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=584234ebbb1627da58c3966ea8bd1db06832f452ddf2b40f75b17300e76d06cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=c431270a677b9de2189d2d14ed400d285ea5c2c2db62479b8761e4cbd573fac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=205f9ebc8e6488f245b9e0b5585f8a0c0f444de5fae52be9e85b33bb441206e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=22041a208cd7d56b1a8ac8db6dbf81971e8fec0dfaa33a98489197ed69b60bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=866efc339f4af542af0b86fb3f236a7806b3408437c47e4b7afab436d93808ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=099017f63c3d36166bbfd5dbdf1241cd125b45676d4f2d8af8682968b6f8b6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=5efb86262be0aed496e711023d751ff25acacdf339c73aa24b3de069a81c8b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=d8b8a36d595d54ee1a2abf232d107ab53ee0802ceb385882b71874cd0d5b287e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=d68c4ecfb0e6f4f132efbe08b72b4c1cc12f98f5e2794d5236f75638b9cdc0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=516b969052500533996f7ed248cc5377ae3d035d131441baa89c43aab8e031d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=5d07abca2a308cd77e86905aff6a9ae6a7027e605aadb54d6390639195b3f449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y536MSP5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jzibgVTjGXyaMv5LKbbJ1I8uWyYPeQFEWrLt6c4zAAIgLCuIo3NKa6vy41pE7B94Yv4YkAOaig5lHIODTcflZzgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLee66qW70tSmR%2FanyrcA7BDKKw8mqd5QwKBfwLFSXBTvKSf72TxHUpnS1sdW8DZZGQ4O5ZUEpmQiApkKFDo14BxllF7wHiEIcUfHt%2BTvsINSMgIgWGFqsbk%2Bl33xd74%2F%2BPJXAfEW9KFEQsqRmJuEDXeA%2BTmMwjEXelEibpBvoz4xlIVTow021UJRV7UjN1nats1nAOH2jBiClNi%2FhPjJK5ZGapRH8QHNsKMkq5A3VAE5C7qf1zNq2aeIbWRMt2gwpWvqn%2Bf5vwT6QJdEwmkpwJzaNS6jZTG2xmvIeMA7ynC9bsnt%2FKimJoLg3TXksEQCJw8qhuArJfiZnSrVTtOUzcn5QQa5txl%2FZW3s%2FBKz6%2FhfQn2i1f6eVH2PSZwFOc8Ud2vQvzu3fZSDOYpJXf68uD2QaBiSlJ%2F3kdhSjWZ9VS2ZfnUaq1qn9SS1omaHsmrQySn2iDTofUgzYRJr3wKzw0m%2BL%2FwpB3Pv1DKR5R9nvZYRjqdwBNYCEdLzLQwAC%2FLYw44OEbKpPqLYXm8Kl11WVDtlMvQX22bnoprX%2BvGLCSQTzQfsN%2BXIWNCCQ07Ywt7SYI43MZO9HvWh5kPLLfZHerkQWOCw2%2F8XPIZWTPS6egDx4I%2B1I5AFeQPhKA4LkkOnjshZSwnNsQeS56wMJOjqMQGOqUB7nu7E7ZExMEBJl7jaG4%2BG4mgPlFZU%2FlhmgceZe2uJLhEsR3DMDoWjLX%2B5yuvEbCjueLaXx%2BO8XusC%2FGck43QDM7RQBKglotqF8ALFgKPkJInGbQDU614BnFeLjM3CVgcRMxlzCr8%2F6PktDuQGKy5BAR6%2B1AAL547L0Ym6PHuK8LbmVofaII3LrMh8AhikOqbJ4rCBLir9tPbx4howPZRBKzhNEM2&X-Amz-Signature=c4830248c619fe8c20ca5caac063f31d3b7a81b22d11028c3a68a85c31fac977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
