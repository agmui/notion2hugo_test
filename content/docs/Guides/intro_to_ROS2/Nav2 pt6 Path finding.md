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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=2c8a093bc7ea8a7dd5a8e16674544f05bf7a62de0aaa1c1c42e56659f167bfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=d24b99dcaf06542f8c5f7141464531e8defa71da9eef7314dcbdc4e0c21fe5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=28afcedf7a0c0ca5ec11734a7f93d05df0ed60e7902631cc751ebbe0b09ec45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=abf0a349de2919caeefd3dcb8f68772614d1466187426f11f208b703bc3e3fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=e585704e2512064df9cb1bf6cb4b4671eceeb48b99b04bc4d0248dae1721865d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=e2c479208ec02def411052c71c46f2c411d76952465790beecd500b3834ec861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=81b8b7341e7921af4f7bd5be01ee13057a5f200b60c90771e619a59635fa6602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=1be27ee9f84b254e77bbd0335c415732c4f2568b5d38da5e1505f07bd6159080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=2ba804c08d9681c1f360fe75d49f834aaf458a066f0c0f48fdaf501e60c616f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=fb20800fc4b6f2170f929ede56bf03a3339a0d77f0867025914c877081631664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=1313fc97776e1e9d3dcf772eea49754e00af95d6fb0e8807634c92db30c2f112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=0f5657d0dcb1221e61f2cd8b9bc82c73f547ba4c43fd56fa7cd4a8c17e1bd615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFYHBYM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEls%2F9i%2Bcu9uv9l86WWSY4rIoZOIUS2Xdk3KOdhNabuTAiEAlv7QagRg2RtjKVay3hizbuppM0bgJ43f5ETheQDD1PYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDORQEUIeDixxeBt4%2FCrcA5JYAx9TOmzlyzR3qmB5L6PgcXIrOL8XPKwYpNFrkY0q81J1%2F03Xocv68ZHbB8yYQT12ZYrEDZF5MCgNTXLRvSTLr9GAKvBR%2FFjCy%2FK1I24zkvNwjwFaEzJNoq47XuvKOhmZje4ArRXrqFu3ZO%2BIrxkY1V3MJZkm2UBqhjDgNjN8ASle8ELB1gYPI%2BFhJ3cKR8xbHJFkE500cxq6srT1zoIpB9TRd4tkLpYfPod7m0O5x%2FBwNsHjlDVWnhbaT3W%2FR495Q%2F9VHihPfDzBXbVeVKr7RakoOq9VN%2FCXT5QnSiRQpZhnaCrDtykvtpPgbJ0491md%2BDVLEQGl2rzsnJU26k7cRs6YXf7w%2BcH56O4%2Fg6oSTtg80ldpsLXBPw7MKJFRxoUN9JjjUilaDzUJ8jhYX1OK7RItYXvLM2SUK89FU8tAeXa18pEdk6ZCatA6Vl1pvDZRSSCkBeSGEOEbtARP0LGj5Te1SbJzgmD6Gx9Uj490JvTvLEtte3qKDCYJds2%2FPQ2RWAXgprZ4XNMrDasrHqb56jZPKTv%2FTbpruKns7K8kX3OA%2FsPkERQriz82pR9%2FF%2FwvVfE1qiK2uRhzx1n3vs3GtLJpQVf909Gv1rfJ87h5uCiADqqVgCYusVHmMJ7G88QGOqUBxtjDjGAKegpGBVw5aNNsC1WIwMgGamEa4P%2FaVIhus8utyMNplRrDW1qzlJC8F5yWPOSWlHna2XpxZSNKoU2sy%2ByyEiMFttaO9RJCUJkZk8QBbdqJpkcG8sSEttC7fTu0UzYMeKLu%2FLFmFQQM%2B%2BEoq7ZyqkHZTnskM%2FnBqIc%2F0WbRIltw2YS6J8MiW0HLGG3CdpO30URyedma8m%2FLGRLlqhBfuSUx&X-Amz-Signature=a4322e3da54a7034895a1e02a2ae66402d593caee6d3967cb359bcb1f1388022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
