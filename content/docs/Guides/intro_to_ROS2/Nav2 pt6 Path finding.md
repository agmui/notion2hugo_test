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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=8a1f655d4b650eb1e75cb7f874432cdb6ce89303573d7c325054d2fc83ab5ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=5db1cd39a4072967e3cea4c0a5fcc40812f925f6f6e92742383f94186a74ff65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=13aebd07908883b5c26f392840f44fcad41dce0ab81b318e0ea78acac324a993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=fa645a1aeaeabdb488eab10efd342c44e9f1eb4359fbe45cd535bbc60ae68b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=71a34fed790ceb62b21a72cb99ef9d51d459d5f2ffe15bdcd8dac532c4883c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=b4c2f5ef0ce3edb94cfd4f8b03bfe7337783a86f4873493880bf2183fb05bca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=03d61e23f9f463633991cfc9738a1df4e7c3eb4ac9dada09dd7aae74ca9c11a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=d5aab0626a76ca37625ed8396105af8606be8e6a7be40cb547843427d92e2b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=f9635155646d1a9012116a915eb4096604abab78d1c6ea152406fd47cfd57eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=ef26213739981363bf0faf0314e41b62187cf123adcc3f8f95a3bcd1a6ce482c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=f81c48a6e137f82b2ac884780fd8bb9e9fe0b1b4d935f8e29a85cf3dfce45dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=b3ab45d6b6e7f77cd53c5b42618b52a160618c0875eaa1f4876c7a82e8467e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAY7AVZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDXHJFPUE1yMrIMETF8UplfQi%2BNJyErUeE7KmVGMuBs3gIgcitMdNO7ZUtFc%2FVhbDmdcfGZy1cxGPFXJa2jHbfquvwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKX%2Fg1n3uZYvnH%2FsyrcA1g1bZ7UrsXb2b8qnNqwUSDXOpuSFa%2BzqmBSbzMb5H872ytc5zuCcnzWdvYwV3%2BoG0zcUULfGOdSEwnt6uCfyXKgx0Ihlfy2GvRYJLZKvaB9Mu5qsXMRH6%2FstsGzKgfObwtgmN%2BzS2Qo0keyKv7wWdmy5hjmh6SGhEzERjXXumiVvD3ZUGwtKd2HPLE64KlRPnHV3%2FjTdHO46Mzxi3gQ52KnH0ZEbum1nFjtY9ZN6lQZRPUp1v1EqneejozEk2HXkPiBS6TN5wLQuZ9foUze3qLUiSc8hVwxJj%2FxNv%2BpGkiNT9B0p8Q3nHj6ihCQIySgdrpbwxLegqDvrq7eq2d9rQsyWIyQHE8ARTyrpbBswNiv5bujqAmJAOhFYOCrnZEMvjdnEUCoKrOwY6i7bNgZ%2BKcUus3BeYSWCyVSfKR%2BsFiQDMS7880ys1z9rkPw5tWHvgc0DiC7PWdSGG1kYYoD14EpA%2FPVpow7%2FmqZudQymjwNUfinyqpxsKehQUehg1OAODegGs7PBdNKm%2BzU5KbTaB3yNPnJHtPnyoe7xevrPaEfwxeMxflSzZ%2FS07PpAJq4%2FAkJWYXxkJtrV8E09ZjGxCbpdciIOQYPDJxR1P5zN%2FiLrqqgU0hj60LTsaGDMPmf1sQGOqUBzOk3x%2F7uo8oWtweMDkLQX%2BlTbkxr1rQRqe%2BiBR9ic92w5ca%2BliJWlbp8F%2BB19q%2Bv70eEv8n%2BtVeC0xTVi4a7pzwmk5wQ6iqfydDA0SMNE3yDRpWWobtk%2FNxiB2mkj4wuQj92FMSPH4NlLqJAxnV0f4%2FwWv5nYxY2Usej8dcBfBhgSHx%2BAhu6ELSvWcAy1XfMdE7bf3ZhSTCnsJ2sIxIWt98K1mtO&X-Amz-Signature=ed74a32c4428df669610a58865ba226251f08eba9cb8fa526c3620a95cbd2e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
