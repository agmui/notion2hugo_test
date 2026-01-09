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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=dff2f775cbdc31b8391696d76f4ada4675fa84174c1971e4ba35dd7c087ccf48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=188cfb005b9a1c111514dde3f17d21d1d715ca5c1725665009f38fd4777130e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=6d57bc856c921c8123377c16062f3466864f971e8ac41d540fc10a28122d0465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=5f608db62e41abdee5aa2adaa00b5476ae87213acfc6ca64d91ab83cbd54826a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=67c0554e37af822cf2f79a90b3f5907917921bfa246dc89783e2e84ce21bc2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=017735a3f5e2744f03c104f6d752ba30816a8ba9d0bfb105a170cce9f5f900b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=883fac3966c4d61fd1e130fc33c960b0df107a39da56d0185cf6d79f43aea9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=16199444901c29028ab5ab133ddc3280ecdd7bbd1392fbe77df6550919760e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=15b707c55dd256a53d3d8817ad08c6e3bad335021b17806d63a1e416f0b69c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=e855872bcf7e49c7263f098daf416ce004f004624c894121b9dba5962df11cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=59555f989e832d93aa7d9b0013e270d60b6e5ee00d695349aee3889f67b73534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=aadf294725d50eb9f0986163a07282a0f2c0d7e1792e82308f3916e58865d3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVIKPPT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg2xDGRMJtSxvAome5Jr%2BRaIKKkrUUarOpmZKijes%2BgIgTzDVHPp64qKJT2nWhyVDqV8%2F8fBrRu%2BA4e6iYZUUm%2BEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOESNESvwmVSnUxRFircAzNJa2NRq2nLgOcbktPdtXsGw8rRkrJRaO3%2FlDUtYj5iNJQmil6oLz%2Bq0duHuGirLh4FmvQ%2BAWyETRNWwFJ9d6qkGez4fMLw6Ke0AkKYnybtQW4offkzEmTiH4VHJo6kCcdDlz020mMm%2F0FBNn2wXfFQ%2BrLvCpYM2BZX3ukXI9G%2FpzED4oubDJNj%2FM7%2B4r2ciQk7EMEFq4CsBh2l6%2FZTs4pekgq8Rbe3xEhww7lrYNl%2FNdm7aKrLpVJ7hF4j8TXuGUQHJFzleyiyTavZhOCmIYum8Q8rUPjZCR2YJo3viu1536cnZ6%2FlNSh6zv58XlixPUayotGIxg9baFvYqghmUNIKaFEHCPEYLhnTLbYm%2BGLKTj2CILzUMkuFrfYyZbDZHkq7Sz%2FCMPD7%2FMnYdJp%2FzBWFffYO1eIVicTTlayD7hiBJYQXlVD1KRsiOREWYlAupEfV%2Bc6zw3RXMQbTEtX5UXVbCylhfWpMqh%2FaiunVGs9VkHbnvijOG5xMUL12J4JHi%2BlH4cci0FDYFWCc6THfiUnwL4Z6kURcbYWmzLBu2BH3qoH632LQD0s1PWHbK%2BKdV%2FBPSqNIqpF8Uq7AyBwsOwiZXUbhqVjfxCvT%2BXxiRwe6SHyktow%2BXpbqgG5eMKukgcsGOqUBANoocx65rvx66TNpk1qB0UAgR7uQQAYZ8pseUGsIClTMsIbLOvBjj0DRzzPDTpOxEkM2Af%2FiAQQdu9VDgeOebPZDmMyfkg5N%2F3VUGw1dUwiT2p%2FMoVACEEOUMSUES2cvQ2QiA4n8peOzWjI3yfL%2Fui9sltvFdo6mrC2KR%2Be6p7UZxc5kiHTNcaa6zUYDaKrh4iD62BwOlBAZQesePp5CHCMy551W&X-Amz-Signature=a6c776d5864fac537c4b9d8e5b033bc5fa9e7214d9e9996fb44e917930e7eddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
