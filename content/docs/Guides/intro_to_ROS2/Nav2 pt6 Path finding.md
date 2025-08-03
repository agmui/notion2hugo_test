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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=4cb8192c639b1817e37e8aabe9ad1e40cbcecae4a10f250b8b5a52bda2f5c1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=37b75beae426b34a825984bb65524e5b6107c4f2941e9e65c397f4f986cf867b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=6015acd7322d5ba300ee6b63e218b3c81e9e69736bf9a7f5d3b83dae76c24e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=c3c13dc791b1b81a0d4908775e10010a9df05ea58ad8fe771c5fe5ef52d596da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=1641d23024b97244d82b804cbabfcf7d896937f5feeed399d97e14c452a1c033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=bbfb823c32512ac18af4ba2093fbbc6b01fbe8c999d409a01a8fdb856e827b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=60b5dd9df0b79924b74c906d9520fd5022467747fa09eea95f9c6269f76ad890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=a4cafebdc21debeaba86ed36b53f7023145d3cdee6d2b275f5920c7d75786af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=783e2becd95e03c18873f964a229b10e44b4d7b6ddd5802417b9696039f8a276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=a2fbdae28ff33e6fcf29fa663c1bfa1f07b8bc097b7f29f7ff7aa182dd9ed81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=90f8fc9394453e26d9f014c0ae3e4d68eab23471216fe0d6d363e5be22901274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=52b093101a7cfc335df95b51f35c579d47c107d6a907f3d90ddf1257d052ffb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOCIBS3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBobZkqQBwn1kr9ZxXy9fttxTPb9YzRuSGKCPfFLgH%2FAiAhu37MIyHGm45nRM%2BIH4eLQzlxaq9pT4tkFuH1AnTTVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXpygp8XIIsYWej8AKtwDF1W%2Ffk3socVx1e3TwPaSnIRQlDQ5W4mSujX%2B5PMRCc%2FeBUanCtdMDdZgPE9M%2BE7dXHo5Nwl7TZ1xZUC8VHMaJMiV2dlL5NC8a%2B9xjBFfJE%2F2aOjtGv7%2F43OwxVrVskYzOeT%2Fhp8H1v8FFaTI5oGxCl1KNtVzuE%2BPauUdhhgW0cMmRVZMFnY%2FycKmmHC%2BE76ika8XO%2FtLgN6qp7ywlMPs%2FmS%2BAnYLwNyUt20ZCBHk%2F6znboWGtp0MBE4HSSjKk%2BV6ooxw4JcSVQxMPj3QiOCjkHAyHnm8vlUzO9zeSztrCLQFvj%2B%2FZXISageYUQLLCo5JxUsjUMb1BfelH0qlWssA7iG%2BRUFi8sZBoAK6Kd2hsu732PSrPEGPc1JqY1aiuxJ2i4DhSsah9ycUxC6scDgp5RXTKzCwNRpKKgAsQDWPTi%2FGOeENWl4k7RqKX8%2FgJqDySUX%2Bm4N0paiNxxU7f8%2BqOBly7YZGOvU8%2F9bvoviAr3FSdvLylwReCqXkNFNhJGxNh9LQq8hhZn3m%2BHb3OdIR3G7LTAr1tZ7d%2Fv9OrT4rJeyDW7Y3tTHELn96iFFDUX55e1S%2F9maXMyxCt3AmPKSsw7gdLvl6wqNKTp4d4nFieJHW73O1hFBHj%2F8SZ9Awwtm%2BxAY6pgHUeI%2FdLp%2Baww23DQ8oFCP3U71v3X9yQo8%2FWBSPlloMNkVzDtTvVJEgZG6qMJeCSuYPt1q9aAa1YUBNicGyqCw9mbeOD%2FeaHXM0N35IJNAfptBplTYEkt1AZu8w4S64qdagEhW8muh%2FiLDy%2FEQIXIoFyaONfoNI3%2BLo6SG3e7xUgpXAiU%2FTa5FM2L2wtwf28aAyeqoNN%2B2Nj3fnLIv%2B5o0ZZ%2FWWd9di&X-Amz-Signature=db69fbedcba697ff5de74178afac608914ed55760fd48cbfef0fbb15a2fb158f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
