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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=e0c50c97c2ba76b358ad8fcdbf0dbc684d5e520dc4e6d871996f00deef14805f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=ecd24dbcca5d8e4f21ef3ebadb69f7f4748b085a5c3d2f2cb48c180546ae1cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=6495fce284f9b3b72d40bd9dd552a8fc8293f03a5ded7037ed521e2756d85248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=3373deda1b3ea034f79f0834e8f28b6b7cea75715f2823702679dd10b3de3d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=38637375559ed6b6ab64db44c7eb009916df4d307d13681fa5d181d7098558c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=8355abcc6c20ee8350954f8b6e980a96f689ca5e4dfbc657c1910fc91242b22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=9a92d5347baabb473c550c0e70834b7476904d003503368f7e6263fa79c90082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=5e149375dbe1665eb32070d052a486a16d0faf0900a6856435ade30d0d92347f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=f92886517b5fe29a0acc20575d1ef1b189001783a5071a0503ac7d33f8975651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=5a27cbacdb5fd96a80e57afdda1bed16342bf578c170721730726b50f90b7839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=ecb709205dbbf71684ef5aeabbdcd36a4a75c961432d53b17f0df4a1d91e8fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=c112c34e2f69de7ec0f0436d7f81d0dde0ba726ee00fbc181a4f8058c41641a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQ6QBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VeeOmZMHlgEiFsUTi6qAf4eWIzIShJQhFC6OK4gFsQIhAJUttn66oGc2E9lwILIUnocHVQl3YYLJYlkyxR4jQyvpKv8DCEEQABoMNjM3NDIzMTgzODA1Igydq3hIXmq9fYdNeBMq3AOTMlxC7ehd4pDqi8pzVJVOGm7le5OKUqXvX6a3O2g%2Bc5N2P%2FE8Dhgqy3yOWj1BWLloK9IDC9yBmtg7EusMMN9ECbzm6WxY9pXae3o9IEVrrlZxfQM%2BbztlPW05EKYTXxSzPSNglQPyTLPcKvE6Uj9NfFpTtU%2BBdalxiK5tkAMroHTZK2zAcXxmgnMpnXfcp0dIeJjifglj4kho1jOBcdZdIoD449yxHGTwjQCbGvuePhI67TOL1%2F85J0RlQDfpE3%2FOhfNFDw8oee9Oz%2BtYFAwZCgE19A3py1lZ2VSsqc7tn4bxxr67PGUGaXAJ2QZ%2Fh5daptTInm9vpiV2KjZBBgVzeIOM6aBdWKCVXbP0H2p2YDcRVV%2FXbo9LU%2FJX9WsbP18PS6qoTn4cQq7GgtEByMvK2rWKEU3f16X28WT7fGoyvGeimbYR8bYNylG7lNVuSECiORp81oi4rz3CmeCiKVifMBHJce2Og%2FKWix4nd08IkXv%2B6Wfy1ZrTzYj3k0IaG1T9msJb7UWrw%2FZ3UfPsk7VEhBg3thZPoYoIHEDPoMZkdGns3UaYzil5dvEH0giOJqNGPmEkHL8cqIfS7lMzCpprPmH%2BgSmxzz2%2FdAwlo%2FoMpIIDi2FD%2BZNHQrsRHDD3rfbEBjqkAfzI2bScoOyNwOG%2FmBdKT%2Fj5Xc9%2BIVU3mhLT%2By8nHLffGDa1s3D1JCfPMFbODK8gOuDJ6Pl16OxrI5MM0okCsp9tVmfsNxOCW2sOIwd0SU9K8NdsjmfxIaaAwPB5rAC%2B3DhqucpqfGIxaQzXRRBS1YKZU3glfJQZCjJTXgXFmE2%2FSA%2FMVwq8RXTQbGn9Nkw%2BBoM9q%2BfqeELs2RIPengkgJYpQ75f&X-Amz-Signature=321bff19e890e82bac1337b9ae1bc13239092d90d19731466f7a7b43e2b20483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
