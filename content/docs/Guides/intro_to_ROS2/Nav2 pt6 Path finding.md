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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=cb71ac50c41f4ef4b14e4864d3ec53be64161c483c1b0eaa5d28be5ccdae6b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=1ce661de4531f1de5b490c50d5554176ae348563063edd56f859c9fd35b760ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=fd1bb4186c6a0f54e72191421dc399b41c0808d97244b02dce3c32a12ed56cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=cfa4cda31b7985848210696c7925c050cf72074fc0018cf619b04e31a6702cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=917fa80ace94c2d382e4f31db1c861918ba78b9121446db158cc70765bd02f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=acf273957e0432da74dc5b05dc9a01319343b60ccdc1df461268812a8d525444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=6f56c87d3f17b84b63c43ed9c1b182ebff5ca2c170e3256abfd0ad236fd81466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=ff70a1d79a00a71a1838c761ae65a0da4769104a3d83a00e4dcad0683ee2a3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=4a2c18a7626271d7c8450fe1b46261f5cd6508a1625b99bb40aaf18f3323e7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=88ea4685c489a76284d6a1eed9a2748173c55ceaf820741502440b1d50313e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=916559ce14b1bbe319ab42a427e98c8a042c69f13ff9c6881bd86b17987406a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=3c8b1942dd722701eddd72a6cca886ce248039d1dec2f6a38d7f32ad054b147e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKD33ZI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaSmye9LayZ4nlcAanEN4KSgy2VxZEgULLwEKxxK4GNwIgcUN78kMoXJS22ASwGO%2FDPr2zdIgtIJKRFp3pifFGQEkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCMZXGDcYGMvh8E4OircAyQ0NmAmqXGSwT4bvSE5DcqROf%2FpD58P2K%2BHGMuM4G8BCO4vUG2prgwtLHAO1Kf8omHEtAHzGheccP2P5r7p%2BNBaBiK9CpPn6ZOWXU7CJiylv4S44FJt%2FE7TdzHLXM6ln2CRRdTw3GwRzuMm4XtVL2J3Jfsx7151VUdQv3jjEsJCyVmZ4o4EMQ%2FqYOiN4wIcW%2FGMbCnm3B5ydMohjopPgXnZ%2FNB5u9hkm88ScRdI8MP4frdh%2Fq3HaG3NDNBmEnV8LT9mQC3nb7i2F932uyOn0qqHeFdiV4tOPjVEOxi%2FQ58ZQ4dnzRJo1z5t2dIaJY3BminpgEzkbmfXhUp6kIRRos6PhormQ%2BW6VTZSr4%2Fx4A4dvvP54Y70knRqJX1nE65%2BV5ZRmAMhZZ1abNEez0I6O%2FRu9KhCRl%2F7%2B%2FyjppZfvw11QCEzDPI1f4%2BlibRqDjGVNNyV6XBS8qJVA7ZuojxVHE4wQ%2Bx6QrFklmXq8GsJyPIBnoH0wOBz57HFTDzFvW%2FTDU%2B2k%2FngBRVTbLVvGKjtUic%2BmWm4MtfO3Pafv3XeWkIE2Tmxt%2FPfsuMxUrtG3zYzEXs8UHpAzfGKLw8hACD07wgMVpqg1XF55gSbUUuWIOQnFA%2BPfpH8j5AD%2BqGvMNTa78QGOqUBiAn%2BxF6n5ugnJS%2B%2BCIpO7ynZFxQB0Fb%2B%2F0MX4nnifrm%2F9PBZmQLlvG%2F8vdQl1TiMAtcNkvWvv9%2BPKe8wG8lyqKjzXhiXh9xgTldCXfxA53ocBxH604F8Jzb6PmUeFvq9dJMQJr8%2FqFjb3HOGfUT%2Bfak3DQBo9Lcnle7Pyt0Bdv2HGEo1OMk1u%2BkKgFQA%2BBCZye1%2Bfv4KCNYe1hdw3jz4c1FtrnHY&X-Amz-Signature=6a5650958cc7e505ff5c96cc6d8b7b71122fb874fcadba2e4c2b3a34a3f3271c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
