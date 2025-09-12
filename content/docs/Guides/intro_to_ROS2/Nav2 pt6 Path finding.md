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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=753198723355c881231599e352abf1988fcc2abe3b2ab64f31996e2dbcf71cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=a89e6c6ff84d057dda66dfb784846bc3c2fab4a3542b53cd139883be8fb78e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=70de4e1d16918a2899feacf769d7f38e69da0b69a8b6116cede9dd250882f855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=ece875d49ca867996f6deb33100471b355eaffb5969fe6362e9aa853721da302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=1fb44bb0b090cd80a79ebafcd483fb959d2fbaded22ae68419055d00762e8b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=e8e27e7506cf739d5e81d12a28c06d0816366503d7006a155dfc7ca689da07e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=ae908b51064547af442770d420d5dd38d35e2a092b9c9709e74beb5c6919049b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=a79328f5f5cbde2f5d1d28d0701394727b8cea907f07e23d45ff9703857e627d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=56c775a8d1c1432b150d7b756d4067a40178cbcce644a937428ec1f55fbb2cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=768c7885296daf0d6c25a29fc2e0bc91947fe4ee28f895d81146d6f84e309edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=f443ff7ed350b9da8a3bf461054391c3ff53c6adbb5f7459f4f1dde96f91d65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=12a667d9676ef9166e632d7f5c68d265d64c93d86eeab106de20882b7c2e6982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURP36V4%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrj0cLOloVmBMhYwu%2FtKaTl%2Bfs2Pq0lUUgKTecHQKpwgIhAN80oi5Kz%2F07%2BJKKnmFD9Gc5581mDhu04VX6LtwA73E4Kv8DCCEQABoMNjM3NDIzMTgzODA1Igz66diQnIMUvW%2BtNwwq3ANotlG58PWArX8zrbWvxsALxUZjwEL7elfQr7%2BEY0u6F1Bp0D9Ugb8F8JGObdeqWDl8g%2Bckn0uXBBgF%2B%2Fng%2Bi%2BVlh1y73Jm1wTmo8LyXVYAkyIo1%2BP2KQPv%2BQ5R5Yk9UryGsPD6fFmSgmjbaTtbJLWTlXvpSOh9YZXy%2B10YBk3DuzpLvZKUoFHjMwEEglJfyTk0zc1nSPuf9hXkYbIGDoXWiU0ChQWg4vbCn23jkf5dDmcZW9fiO0kNOgyqgMzKRTLnj9Ca5EqW4okptuP2L7zxjm%2FXf9CvwLI7%2Fq3BbgrFQhkHHNVR6vpLYAk6hhBsWTDEXkd3NTmkY%2FjTJCKTEGFMUTOXe3WRyJHMQu3Dg%2FaLKdGImbp9vq%2BjBJFtdNZm4DPY36UAeQnA5QxpYltC79kwVCFQiPfo6RD4PqMRoULxUIex88hsM1vsQFusituWEIAmqa72DkyisqypSGGb0s6jgGvkACXdS0tKBteiZxa0YPv74jzVo9syNGJKkkX5FM61KtFPNIzuJeCjDcJQkBs8%2FVjAJBs3RC9gELZun3Prs%2B1IG%2FlOU3EVnzsZ37CFdtZjFJnxbQxLBcPU8MLaOTercu8qYq5dANYkCSg8LhYPIOS%2Bc4gxVMpaCRJdGjDA0Y3GBjqkAdKKXG6BC%2BVaERgI15091At0FtZHKmeqR6CIUNRflj%2BLrS0dcOQTfiqXjyfGzbX6Qi475qEgU4%2FBoUaauddRTyZOzEcDxjfLy7xAYO20P9pvHgMZQ2074VzVzc27dElSXJOMlCfEkv%2Ffkky1sDfgIf2Bt3Hoe3llcVNo5nkGrP%2BoZHWWZoxrXhJGc02Kd6k%2FHDBD7LlTzp8I%2FklhdIZ0GP7myXQd&X-Amz-Signature=5487c3b28ddea4104144d364db83848fdb17dd2f9d0f2992710560f98a25340a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
