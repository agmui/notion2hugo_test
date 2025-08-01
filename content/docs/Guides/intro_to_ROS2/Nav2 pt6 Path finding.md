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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=98d5ac472c881b1e46386cba322297c37b1f872a443d0a3c96e96658355a45c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=6f68aa1ae795b0aa47b522649c471fcf7476c6c254c5e30940c856c5a30b5f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=0ee3517ccb98b8d341e37cb63073b35d3831e0141e4d71efbdadceec287b4a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=f9bf3132406eef8e267a5c1ead24b51d455a1c6a32b9aab3925d0b7fa0752277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=813fc6c3d6b65164c9697f23519183a5cc2225c9300d58f829fb51a2fa4d286e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=411134c3f1e76015cf9ff7f4027379b4ee6193786c8b914bd66f575ee6223737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=865cb600c642541f8ef77b2a2dec3fcb0f82d64ed92e1b6e4d3ef96622d41683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=acbf40ccaf539dc00a283b4a3dbcd37ee639b8dee88b22eea10245efadff97fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=b028da7bf8af3207b625552a9b56737545b01283095f0eab97e6d51e762f73b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=bba55a4b16523c2d991e315a1d9fa21d14d69674b425000c65d6fd3da5b3627a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=91c1da27bc5430037505b2de67067819fe966e9855283ef1131972c778cb1e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=cf3f8de92e270452722c1149d4d073c9004584fe9c4d855270eb7d281741afe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTURHC65%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFSC17fxRSACd8vqJ9e91N2ItHTXKY7FoXMfuZsRI6pgIgc3og64E8IbgfIcuS8obBFvTUggNgSG%2FePK3iPsLx1y4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3ruJWGQIJ2MR%2BJFSrcA1twwmFb2%2BXSzgHP1Z%2F9CqpxnVqTI5wAeLwGy3x9qEd9y6I4UDGwFuqXBOBbAZB12KLaTIa9lxwNd4Jp6DOIl1MnK5bu7BtuvVimkV9I5Ww%2FgxlZOE%2BTqYI9cHGzDresTggrFHMRnjtwlESI5zqiHhYhN5I%2Fcds5K1tANkFAIfyi5%2Bbh4GHs1TQIBEJMM4qEkqTX%2BTuNtQu8PAzJifn%2BDF%2B2qS6%2BvPgvPySS4HOItOs7nU4O9Wv%2FI6EbS4mF%2BC4rv8A%2Bm6GNKp07VShHXwEgWBXrOeg19Zar%2FWstWHaSQpKEa3lQkSEi30jbsRTO1PyObxKWfzOs4YJhQN7IC8vW%2BZed1%2BKb06RIxgvAp2lLaH1Sm3XXuZiSTtJbA2HIduGAd%2BMYIn3JrUx%2FB6CdSxBXOVBLTI0V%2FSzDI2jMA7UhQd%2FkoX7bi2cMo4kMV9DJCodlBjbMS1lh3SUJH9VGNTYSkRXetx8OfWuEvdNcCu%2BDQcTdNgoulKmKI1BHaOE4CjsHYVAalatPKZ0INGFgKAo%2BPNAkENRyhp89yvOdu%2FJJMzNRQKHHBRQcH2hQTp4ZnUFwMA%2Bc3swV%2BQ8bLZHSB5dnzQwlGR8vHET3ES3mECHLC67uiwianjBztCzRVEdAMMGJs8QGOqUBw8EtgW6JdAfVJNYNYLb5WqloNR2WlwaxaWQA6NFwsTaQjFGmoCS8UPyzLH%2BbS7J9%2F0n2Z4XqlJqGCMq3DUQCDfY8fLF2rk7M5wfawYqVMajEfzYJ%2Fe2%2FMqFKTtYXkm%2FE6FIJmfxaBrb8bBJ3AE3w0uR3ISPz%2B96oBf1TpFk%2Fl1W5o6NvX%2BZU7dzt7omVryViYN%2BsPmYcXWcmDVS%2FiIUGd6mtmRkC&X-Amz-Signature=40301bf00d970378faff69941a3c7716b5957e113850b7c95747b594fadce7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
