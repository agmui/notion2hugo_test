---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEJUJL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWhu8J6ii1DFihhfs2sQ0Oyb%2FGrw9dPR5EXJD88bf1vgIhALh6KkjWG%2FVoJ8Wodty%2Ffqyd0C9nBuuEHBBut9YNgam%2FKv8DCH8QABoMNjM3NDIzMTgzODA1IgzLj4DPwvSdxVNbBjkq3AMVs33QJRhklTMi6Ju7xYORsE5FQipYmfY2rCmndTHuXg0NCxJwNZLp5jqJK%2BqDdAxj4VIUEYoXo2NQhciNKCn9cg3%2FCCF7mdzdczNv3QiaY5p1i6ZqfKuLvtqbC7cKhoezQ2nUQD%2BqvzsBaN%2FN5lvO6WH18NGykR1E2XvVIJq8cnSelOFq1Ap1pbWGRAOiYLF6U0969FXca6wNt60sgiHEcy2BX1Y%2BC4n5wFH5ZrbZl71whthbqusYZ6u57%2BDvKNz6xxCwn8lbiE8sNlDWdiqkzYj0HSZlV4gzChW2hbwg90aZrnT6SR177jhGlW4lxXugMpHy9%2BX%2BlBAbQMpkVrxV1YdLMrfrtt%2BEF%2BzW33XZkdVV9OmkbidI%2B2SE322u64CGlH089kZ%2FpaZi17sVXTSGhCIcqCaJZwZnaIyxvxkMKLlw%2FAet6nJiW76QEIDrPgsK0nkqN6LvZUKmlzKoVJ6NTpqDVJL9%2BUJDHFgR2%2FjnCP4VUfENxRG9wnNyfMltWBCrTvOczKJmANxUOCgVc4fh2ibcC3gIat5LvUzJLGPnvFIdV1eLx0ai%2FNtMvWz%2FTZ8csr35EoOhcogczXLy3%2FmG8pzCAGaKW1BNZ6PYvhUtgTIyY8AaLeKaJBMEYjCZyZrEBjqkATPylFfm%2BDaJcaNVvAm8a19csAZkd%2FXwYkQ%2FHkwY466gzC9UdC%2BcRp9vOnBOhzJvF8xm6JJ%2FzLD2%2F7KuVbAYG1THwvhWeA1UqfI9bHR6VL8a%2BBwmDOlYe6ruGkhiarX0MnGtTSSEE33QicXgpUE0nLOqYs38HLQP7ahe%2BzjE9qPSk1vCZg50P1amhqgxoY6szHTboeCB8prXRNqa1dJ1cjKtcszp&X-Amz-Signature=0766170bf2834fcf3aaaa2a5d253e08e41a502cbf8d471c5f48f9696f68b0d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEJUJL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWhu8J6ii1DFihhfs2sQ0Oyb%2FGrw9dPR5EXJD88bf1vgIhALh6KkjWG%2FVoJ8Wodty%2Ffqyd0C9nBuuEHBBut9YNgam%2FKv8DCH8QABoMNjM3NDIzMTgzODA1IgzLj4DPwvSdxVNbBjkq3AMVs33QJRhklTMi6Ju7xYORsE5FQipYmfY2rCmndTHuXg0NCxJwNZLp5jqJK%2BqDdAxj4VIUEYoXo2NQhciNKCn9cg3%2FCCF7mdzdczNv3QiaY5p1i6ZqfKuLvtqbC7cKhoezQ2nUQD%2BqvzsBaN%2FN5lvO6WH18NGykR1E2XvVIJq8cnSelOFq1Ap1pbWGRAOiYLF6U0969FXca6wNt60sgiHEcy2BX1Y%2BC4n5wFH5ZrbZl71whthbqusYZ6u57%2BDvKNz6xxCwn8lbiE8sNlDWdiqkzYj0HSZlV4gzChW2hbwg90aZrnT6SR177jhGlW4lxXugMpHy9%2BX%2BlBAbQMpkVrxV1YdLMrfrtt%2BEF%2BzW33XZkdVV9OmkbidI%2B2SE322u64CGlH089kZ%2FpaZi17sVXTSGhCIcqCaJZwZnaIyxvxkMKLlw%2FAet6nJiW76QEIDrPgsK0nkqN6LvZUKmlzKoVJ6NTpqDVJL9%2BUJDHFgR2%2FjnCP4VUfENxRG9wnNyfMltWBCrTvOczKJmANxUOCgVc4fh2ibcC3gIat5LvUzJLGPnvFIdV1eLx0ai%2FNtMvWz%2FTZ8csr35EoOhcogczXLy3%2FmG8pzCAGaKW1BNZ6PYvhUtgTIyY8AaLeKaJBMEYjCZyZrEBjqkATPylFfm%2BDaJcaNVvAm8a19csAZkd%2FXwYkQ%2FHkwY466gzC9UdC%2BcRp9vOnBOhzJvF8xm6JJ%2FzLD2%2F7KuVbAYG1THwvhWeA1UqfI9bHR6VL8a%2BBwmDOlYe6ruGkhiarX0MnGtTSSEE33QicXgpUE0nLOqYs38HLQP7ahe%2BzjE9qPSk1vCZg50P1amhqgxoY6szHTboeCB8prXRNqa1dJ1cjKtcszp&X-Amz-Signature=d8b9c53bc9acd50653823ce8884f2aab35aa30b287492dc196d1d755d0ae5919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEJUJL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWhu8J6ii1DFihhfs2sQ0Oyb%2FGrw9dPR5EXJD88bf1vgIhALh6KkjWG%2FVoJ8Wodty%2Ffqyd0C9nBuuEHBBut9YNgam%2FKv8DCH8QABoMNjM3NDIzMTgzODA1IgzLj4DPwvSdxVNbBjkq3AMVs33QJRhklTMi6Ju7xYORsE5FQipYmfY2rCmndTHuXg0NCxJwNZLp5jqJK%2BqDdAxj4VIUEYoXo2NQhciNKCn9cg3%2FCCF7mdzdczNv3QiaY5p1i6ZqfKuLvtqbC7cKhoezQ2nUQD%2BqvzsBaN%2FN5lvO6WH18NGykR1E2XvVIJq8cnSelOFq1Ap1pbWGRAOiYLF6U0969FXca6wNt60sgiHEcy2BX1Y%2BC4n5wFH5ZrbZl71whthbqusYZ6u57%2BDvKNz6xxCwn8lbiE8sNlDWdiqkzYj0HSZlV4gzChW2hbwg90aZrnT6SR177jhGlW4lxXugMpHy9%2BX%2BlBAbQMpkVrxV1YdLMrfrtt%2BEF%2BzW33XZkdVV9OmkbidI%2B2SE322u64CGlH089kZ%2FpaZi17sVXTSGhCIcqCaJZwZnaIyxvxkMKLlw%2FAet6nJiW76QEIDrPgsK0nkqN6LvZUKmlzKoVJ6NTpqDVJL9%2BUJDHFgR2%2FjnCP4VUfENxRG9wnNyfMltWBCrTvOczKJmANxUOCgVc4fh2ibcC3gIat5LvUzJLGPnvFIdV1eLx0ai%2FNtMvWz%2FTZ8csr35EoOhcogczXLy3%2FmG8pzCAGaKW1BNZ6PYvhUtgTIyY8AaLeKaJBMEYjCZyZrEBjqkATPylFfm%2BDaJcaNVvAm8a19csAZkd%2FXwYkQ%2FHkwY466gzC9UdC%2BcRp9vOnBOhzJvF8xm6JJ%2FzLD2%2F7KuVbAYG1THwvhWeA1UqfI9bHR6VL8a%2BBwmDOlYe6ruGkhiarX0MnGtTSSEE33QicXgpUE0nLOqYs38HLQP7ahe%2BzjE9qPSk1vCZg50P1amhqgxoY6szHTboeCB8prXRNqa1dJ1cjKtcszp&X-Amz-Signature=c02d860541b628d902cb4c00e3c0efdedf2abe22dd6aec72c28dcb2d84d7650d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEJUJL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWhu8J6ii1DFihhfs2sQ0Oyb%2FGrw9dPR5EXJD88bf1vgIhALh6KkjWG%2FVoJ8Wodty%2Ffqyd0C9nBuuEHBBut9YNgam%2FKv8DCH8QABoMNjM3NDIzMTgzODA1IgzLj4DPwvSdxVNbBjkq3AMVs33QJRhklTMi6Ju7xYORsE5FQipYmfY2rCmndTHuXg0NCxJwNZLp5jqJK%2BqDdAxj4VIUEYoXo2NQhciNKCn9cg3%2FCCF7mdzdczNv3QiaY5p1i6ZqfKuLvtqbC7cKhoezQ2nUQD%2BqvzsBaN%2FN5lvO6WH18NGykR1E2XvVIJq8cnSelOFq1Ap1pbWGRAOiYLF6U0969FXca6wNt60sgiHEcy2BX1Y%2BC4n5wFH5ZrbZl71whthbqusYZ6u57%2BDvKNz6xxCwn8lbiE8sNlDWdiqkzYj0HSZlV4gzChW2hbwg90aZrnT6SR177jhGlW4lxXugMpHy9%2BX%2BlBAbQMpkVrxV1YdLMrfrtt%2BEF%2BzW33XZkdVV9OmkbidI%2B2SE322u64CGlH089kZ%2FpaZi17sVXTSGhCIcqCaJZwZnaIyxvxkMKLlw%2FAet6nJiW76QEIDrPgsK0nkqN6LvZUKmlzKoVJ6NTpqDVJL9%2BUJDHFgR2%2FjnCP4VUfENxRG9wnNyfMltWBCrTvOczKJmANxUOCgVc4fh2ibcC3gIat5LvUzJLGPnvFIdV1eLx0ai%2FNtMvWz%2FTZ8csr35EoOhcogczXLy3%2FmG8pzCAGaKW1BNZ6PYvhUtgTIyY8AaLeKaJBMEYjCZyZrEBjqkATPylFfm%2BDaJcaNVvAm8a19csAZkd%2FXwYkQ%2FHkwY466gzC9UdC%2BcRp9vOnBOhzJvF8xm6JJ%2FzLD2%2F7KuVbAYG1THwvhWeA1UqfI9bHR6VL8a%2BBwmDOlYe6ruGkhiarX0MnGtTSSEE33QicXgpUE0nLOqYs38HLQP7ahe%2BzjE9qPSk1vCZg50P1amhqgxoY6szHTboeCB8prXRNqa1dJ1cjKtcszp&X-Amz-Signature=fed5e136dc4fd85f219025a5007bacd7b479e9e3d0e4a392ab5573c231fb1f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEJUJL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWhu8J6ii1DFihhfs2sQ0Oyb%2FGrw9dPR5EXJD88bf1vgIhALh6KkjWG%2FVoJ8Wodty%2Ffqyd0C9nBuuEHBBut9YNgam%2FKv8DCH8QABoMNjM3NDIzMTgzODA1IgzLj4DPwvSdxVNbBjkq3AMVs33QJRhklTMi6Ju7xYORsE5FQipYmfY2rCmndTHuXg0NCxJwNZLp5jqJK%2BqDdAxj4VIUEYoXo2NQhciNKCn9cg3%2FCCF7mdzdczNv3QiaY5p1i6ZqfKuLvtqbC7cKhoezQ2nUQD%2BqvzsBaN%2FN5lvO6WH18NGykR1E2XvVIJq8cnSelOFq1Ap1pbWGRAOiYLF6U0969FXca6wNt60sgiHEcy2BX1Y%2BC4n5wFH5ZrbZl71whthbqusYZ6u57%2BDvKNz6xxCwn8lbiE8sNlDWdiqkzYj0HSZlV4gzChW2hbwg90aZrnT6SR177jhGlW4lxXugMpHy9%2BX%2BlBAbQMpkVrxV1YdLMrfrtt%2BEF%2BzW33XZkdVV9OmkbidI%2B2SE322u64CGlH089kZ%2FpaZi17sVXTSGhCIcqCaJZwZnaIyxvxkMKLlw%2FAet6nJiW76QEIDrPgsK0nkqN6LvZUKmlzKoVJ6NTpqDVJL9%2BUJDHFgR2%2FjnCP4VUfENxRG9wnNyfMltWBCrTvOczKJmANxUOCgVc4fh2ibcC3gIat5LvUzJLGPnvFIdV1eLx0ai%2FNtMvWz%2FTZ8csr35EoOhcogczXLy3%2FmG8pzCAGaKW1BNZ6PYvhUtgTIyY8AaLeKaJBMEYjCZyZrEBjqkATPylFfm%2BDaJcaNVvAm8a19csAZkd%2FXwYkQ%2FHkwY466gzC9UdC%2BcRp9vOnBOhzJvF8xm6JJ%2FzLD2%2F7KuVbAYG1THwvhWeA1UqfI9bHR6VL8a%2BBwmDOlYe6ruGkhiarX0MnGtTSSEE33QicXgpUE0nLOqYs38HLQP7ahe%2BzjE9qPSk1vCZg50P1amhqgxoY6szHTboeCB8prXRNqa1dJ1cjKtcszp&X-Amz-Signature=04249c171a233644e8aff0bc315365090f5c4cdce9039a8d7f2a06694b028794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEJUJL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCWhu8J6ii1DFihhfs2sQ0Oyb%2FGrw9dPR5EXJD88bf1vgIhALh6KkjWG%2FVoJ8Wodty%2Ffqyd0C9nBuuEHBBut9YNgam%2FKv8DCH8QABoMNjM3NDIzMTgzODA1IgzLj4DPwvSdxVNbBjkq3AMVs33QJRhklTMi6Ju7xYORsE5FQipYmfY2rCmndTHuXg0NCxJwNZLp5jqJK%2BqDdAxj4VIUEYoXo2NQhciNKCn9cg3%2FCCF7mdzdczNv3QiaY5p1i6ZqfKuLvtqbC7cKhoezQ2nUQD%2BqvzsBaN%2FN5lvO6WH18NGykR1E2XvVIJq8cnSelOFq1Ap1pbWGRAOiYLF6U0969FXca6wNt60sgiHEcy2BX1Y%2BC4n5wFH5ZrbZl71whthbqusYZ6u57%2BDvKNz6xxCwn8lbiE8sNlDWdiqkzYj0HSZlV4gzChW2hbwg90aZrnT6SR177jhGlW4lxXugMpHy9%2BX%2BlBAbQMpkVrxV1YdLMrfrtt%2BEF%2BzW33XZkdVV9OmkbidI%2B2SE322u64CGlH089kZ%2FpaZi17sVXTSGhCIcqCaJZwZnaIyxvxkMKLlw%2FAet6nJiW76QEIDrPgsK0nkqN6LvZUKmlzKoVJ6NTpqDVJL9%2BUJDHFgR2%2FjnCP4VUfENxRG9wnNyfMltWBCrTvOczKJmANxUOCgVc4fh2ibcC3gIat5LvUzJLGPnvFIdV1eLx0ai%2FNtMvWz%2FTZ8csr35EoOhcogczXLy3%2FmG8pzCAGaKW1BNZ6PYvhUtgTIyY8AaLeKaJBMEYjCZyZrEBjqkATPylFfm%2BDaJcaNVvAm8a19csAZkd%2FXwYkQ%2FHkwY466gzC9UdC%2BcRp9vOnBOhzJvF8xm6JJ%2FzLD2%2F7KuVbAYG1THwvhWeA1UqfI9bHR6VL8a%2BBwmDOlYe6ruGkhiarX0MnGtTSSEE33QicXgpUE0nLOqYs38HLQP7ahe%2BzjE9qPSk1vCZg50P1amhqgxoY6szHTboeCB8prXRNqa1dJ1cjKtcszp&X-Amz-Signature=d3094a8d81a2f44e6da75b3981dee12b5edb81e266f83b5b6b17973bcf4624fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
