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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERIIITL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCUChDqa7Trb1dl7OR5VDz7Bi08BG9GF%2BbX%2FjgPrKIz2wIgcYnHij%2BdnpXYC4gc0GjVW54sHCdBWp6UPcYEzhx4upcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1X9GWglKqfTSSWSrcAxT9bGbmKESztxWpuZFhXDnTMJ4RxlMHU%2FT8kQBtvBlCBrTMLz4%2Fo%2FbFHxe6VSQ2b9IHF%2BRma6BhlQOu7tfsh32A3FIBTMOjaxPdhC39SLiXrKUCFEcm9YkPpHv73gfa1c2%2BKVbswO4aBSnzSSyR224u28sFL7%2FKrlhC7Jz8oytiMadrGyUkpXYgqpTbuKN%2FthvmaBa2akB3j%2FM1UEZr32jwbY6a2uKZvT001vZtbywX5Wjh2Zqv8H%2BG8c%2BRcLP%2Bd%2B8cGmowteUdf1wBQbCXpDpPI5CDCGm2eJ8lxqldYET2JCRJ%2F2w%2FRf0gZLDBHHeyAz7UXTa%2Bp3qJJjg9qD1Uz11b2xPu%2B%2B%2BAMz9O6ks2x43SzoS4gU%2Bp1Ccs69xorB7qBu%2F%2FlbypBLG%2B%2FrgcMwpUGeUS%2Fp9YDa4eeaThhXeB%2F%2BMcq9uY4B84bAGK2JJ2PbRg7hdsN1OJxbKLa0a%2Bb7%2FWJhxBZYxNkv6gRN%2BmlUNeyK0iKHVoEywomDBgBT0fAfY4lO4DUkQBHnVbL%2BPgwQu28nRDByLrvO8h05Mat%2B%2F5myvpDCQPwjaRKojnKCl6zTqPNqkvZuHgdJXGgGTCEijG4PshA5vbFX%2BEasl237%2FVsNKUmrjCmQkJ8GdnCxtaMJOLn8QGOqUBXMjwUuzV%2FsD5SFiUyKc2PgbJQtmUkabI57VJGSx98auZZSJjgyFdMheGYcbEQEpKpqCOjd3mZh1pyy3CLy%2BVhsrnY8Is2W7BcCSE%2BdFMLR%2BZcLaBcPmxamQKlzG7Tqc%2FHuxUSE8x3831YjktaoixQybqQ2nAwrNUaItuIYQrIQiBCGOiQop5ZYJzNXfd7WK04REsTX5XXETEp98kIsxM1TqG2d5m&X-Amz-Signature=31f495aed0bbe4908282d9bc3b9b512d10ce7f41a83f230273d1cbb1b4335c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERIIITL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCUChDqa7Trb1dl7OR5VDz7Bi08BG9GF%2BbX%2FjgPrKIz2wIgcYnHij%2BdnpXYC4gc0GjVW54sHCdBWp6UPcYEzhx4upcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1X9GWglKqfTSSWSrcAxT9bGbmKESztxWpuZFhXDnTMJ4RxlMHU%2FT8kQBtvBlCBrTMLz4%2Fo%2FbFHxe6VSQ2b9IHF%2BRma6BhlQOu7tfsh32A3FIBTMOjaxPdhC39SLiXrKUCFEcm9YkPpHv73gfa1c2%2BKVbswO4aBSnzSSyR224u28sFL7%2FKrlhC7Jz8oytiMadrGyUkpXYgqpTbuKN%2FthvmaBa2akB3j%2FM1UEZr32jwbY6a2uKZvT001vZtbywX5Wjh2Zqv8H%2BG8c%2BRcLP%2Bd%2B8cGmowteUdf1wBQbCXpDpPI5CDCGm2eJ8lxqldYET2JCRJ%2F2w%2FRf0gZLDBHHeyAz7UXTa%2Bp3qJJjg9qD1Uz11b2xPu%2B%2B%2BAMz9O6ks2x43SzoS4gU%2Bp1Ccs69xorB7qBu%2F%2FlbypBLG%2B%2FrgcMwpUGeUS%2Fp9YDa4eeaThhXeB%2F%2BMcq9uY4B84bAGK2JJ2PbRg7hdsN1OJxbKLa0a%2Bb7%2FWJhxBZYxNkv6gRN%2BmlUNeyK0iKHVoEywomDBgBT0fAfY4lO4DUkQBHnVbL%2BPgwQu28nRDByLrvO8h05Mat%2B%2F5myvpDCQPwjaRKojnKCl6zTqPNqkvZuHgdJXGgGTCEijG4PshA5vbFX%2BEasl237%2FVsNKUmrjCmQkJ8GdnCxtaMJOLn8QGOqUBXMjwUuzV%2FsD5SFiUyKc2PgbJQtmUkabI57VJGSx98auZZSJjgyFdMheGYcbEQEpKpqCOjd3mZh1pyy3CLy%2BVhsrnY8Is2W7BcCSE%2BdFMLR%2BZcLaBcPmxamQKlzG7Tqc%2FHuxUSE8x3831YjktaoixQybqQ2nAwrNUaItuIYQrIQiBCGOiQop5ZYJzNXfd7WK04REsTX5XXETEp98kIsxM1TqG2d5m&X-Amz-Signature=36f7ea5a5062818f6ee910159fd8f61af3b39b4d3d0885ab4134236168f4a72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERIIITL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCUChDqa7Trb1dl7OR5VDz7Bi08BG9GF%2BbX%2FjgPrKIz2wIgcYnHij%2BdnpXYC4gc0GjVW54sHCdBWp6UPcYEzhx4upcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1X9GWglKqfTSSWSrcAxT9bGbmKESztxWpuZFhXDnTMJ4RxlMHU%2FT8kQBtvBlCBrTMLz4%2Fo%2FbFHxe6VSQ2b9IHF%2BRma6BhlQOu7tfsh32A3FIBTMOjaxPdhC39SLiXrKUCFEcm9YkPpHv73gfa1c2%2BKVbswO4aBSnzSSyR224u28sFL7%2FKrlhC7Jz8oytiMadrGyUkpXYgqpTbuKN%2FthvmaBa2akB3j%2FM1UEZr32jwbY6a2uKZvT001vZtbywX5Wjh2Zqv8H%2BG8c%2BRcLP%2Bd%2B8cGmowteUdf1wBQbCXpDpPI5CDCGm2eJ8lxqldYET2JCRJ%2F2w%2FRf0gZLDBHHeyAz7UXTa%2Bp3qJJjg9qD1Uz11b2xPu%2B%2B%2BAMz9O6ks2x43SzoS4gU%2Bp1Ccs69xorB7qBu%2F%2FlbypBLG%2B%2FrgcMwpUGeUS%2Fp9YDa4eeaThhXeB%2F%2BMcq9uY4B84bAGK2JJ2PbRg7hdsN1OJxbKLa0a%2Bb7%2FWJhxBZYxNkv6gRN%2BmlUNeyK0iKHVoEywomDBgBT0fAfY4lO4DUkQBHnVbL%2BPgwQu28nRDByLrvO8h05Mat%2B%2F5myvpDCQPwjaRKojnKCl6zTqPNqkvZuHgdJXGgGTCEijG4PshA5vbFX%2BEasl237%2FVsNKUmrjCmQkJ8GdnCxtaMJOLn8QGOqUBXMjwUuzV%2FsD5SFiUyKc2PgbJQtmUkabI57VJGSx98auZZSJjgyFdMheGYcbEQEpKpqCOjd3mZh1pyy3CLy%2BVhsrnY8Is2W7BcCSE%2BdFMLR%2BZcLaBcPmxamQKlzG7Tqc%2FHuxUSE8x3831YjktaoixQybqQ2nAwrNUaItuIYQrIQiBCGOiQop5ZYJzNXfd7WK04REsTX5XXETEp98kIsxM1TqG2d5m&X-Amz-Signature=ddd14b60bcfd1f519071841b1f789785974fb262d211b66b3ce59afea57363f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERIIITL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCUChDqa7Trb1dl7OR5VDz7Bi08BG9GF%2BbX%2FjgPrKIz2wIgcYnHij%2BdnpXYC4gc0GjVW54sHCdBWp6UPcYEzhx4upcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1X9GWglKqfTSSWSrcAxT9bGbmKESztxWpuZFhXDnTMJ4RxlMHU%2FT8kQBtvBlCBrTMLz4%2Fo%2FbFHxe6VSQ2b9IHF%2BRma6BhlQOu7tfsh32A3FIBTMOjaxPdhC39SLiXrKUCFEcm9YkPpHv73gfa1c2%2BKVbswO4aBSnzSSyR224u28sFL7%2FKrlhC7Jz8oytiMadrGyUkpXYgqpTbuKN%2FthvmaBa2akB3j%2FM1UEZr32jwbY6a2uKZvT001vZtbywX5Wjh2Zqv8H%2BG8c%2BRcLP%2Bd%2B8cGmowteUdf1wBQbCXpDpPI5CDCGm2eJ8lxqldYET2JCRJ%2F2w%2FRf0gZLDBHHeyAz7UXTa%2Bp3qJJjg9qD1Uz11b2xPu%2B%2B%2BAMz9O6ks2x43SzoS4gU%2Bp1Ccs69xorB7qBu%2F%2FlbypBLG%2B%2FrgcMwpUGeUS%2Fp9YDa4eeaThhXeB%2F%2BMcq9uY4B84bAGK2JJ2PbRg7hdsN1OJxbKLa0a%2Bb7%2FWJhxBZYxNkv6gRN%2BmlUNeyK0iKHVoEywomDBgBT0fAfY4lO4DUkQBHnVbL%2BPgwQu28nRDByLrvO8h05Mat%2B%2F5myvpDCQPwjaRKojnKCl6zTqPNqkvZuHgdJXGgGTCEijG4PshA5vbFX%2BEasl237%2FVsNKUmrjCmQkJ8GdnCxtaMJOLn8QGOqUBXMjwUuzV%2FsD5SFiUyKc2PgbJQtmUkabI57VJGSx98auZZSJjgyFdMheGYcbEQEpKpqCOjd3mZh1pyy3CLy%2BVhsrnY8Is2W7BcCSE%2BdFMLR%2BZcLaBcPmxamQKlzG7Tqc%2FHuxUSE8x3831YjktaoixQybqQ2nAwrNUaItuIYQrIQiBCGOiQop5ZYJzNXfd7WK04REsTX5XXETEp98kIsxM1TqG2d5m&X-Amz-Signature=06acfc15f2fd038f954ec01b2ad3a138473fbb91e7a36f89549d795b26aec868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERIIITL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCUChDqa7Trb1dl7OR5VDz7Bi08BG9GF%2BbX%2FjgPrKIz2wIgcYnHij%2BdnpXYC4gc0GjVW54sHCdBWp6UPcYEzhx4upcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1X9GWglKqfTSSWSrcAxT9bGbmKESztxWpuZFhXDnTMJ4RxlMHU%2FT8kQBtvBlCBrTMLz4%2Fo%2FbFHxe6VSQ2b9IHF%2BRma6BhlQOu7tfsh32A3FIBTMOjaxPdhC39SLiXrKUCFEcm9YkPpHv73gfa1c2%2BKVbswO4aBSnzSSyR224u28sFL7%2FKrlhC7Jz8oytiMadrGyUkpXYgqpTbuKN%2FthvmaBa2akB3j%2FM1UEZr32jwbY6a2uKZvT001vZtbywX5Wjh2Zqv8H%2BG8c%2BRcLP%2Bd%2B8cGmowteUdf1wBQbCXpDpPI5CDCGm2eJ8lxqldYET2JCRJ%2F2w%2FRf0gZLDBHHeyAz7UXTa%2Bp3qJJjg9qD1Uz11b2xPu%2B%2B%2BAMz9O6ks2x43SzoS4gU%2Bp1Ccs69xorB7qBu%2F%2FlbypBLG%2B%2FrgcMwpUGeUS%2Fp9YDa4eeaThhXeB%2F%2BMcq9uY4B84bAGK2JJ2PbRg7hdsN1OJxbKLa0a%2Bb7%2FWJhxBZYxNkv6gRN%2BmlUNeyK0iKHVoEywomDBgBT0fAfY4lO4DUkQBHnVbL%2BPgwQu28nRDByLrvO8h05Mat%2B%2F5myvpDCQPwjaRKojnKCl6zTqPNqkvZuHgdJXGgGTCEijG4PshA5vbFX%2BEasl237%2FVsNKUmrjCmQkJ8GdnCxtaMJOLn8QGOqUBXMjwUuzV%2FsD5SFiUyKc2PgbJQtmUkabI57VJGSx98auZZSJjgyFdMheGYcbEQEpKpqCOjd3mZh1pyy3CLy%2BVhsrnY8Is2W7BcCSE%2BdFMLR%2BZcLaBcPmxamQKlzG7Tqc%2FHuxUSE8x3831YjktaoixQybqQ2nAwrNUaItuIYQrIQiBCGOiQop5ZYJzNXfd7WK04REsTX5XXETEp98kIsxM1TqG2d5m&X-Amz-Signature=3f62b466b0aa69160eae38649f882cfe0007a6c0d35ac7bb36572a3b32e16549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERIIITL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCUChDqa7Trb1dl7OR5VDz7Bi08BG9GF%2BbX%2FjgPrKIz2wIgcYnHij%2BdnpXYC4gc0GjVW54sHCdBWp6UPcYEzhx4upcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1X9GWglKqfTSSWSrcAxT9bGbmKESztxWpuZFhXDnTMJ4RxlMHU%2FT8kQBtvBlCBrTMLz4%2Fo%2FbFHxe6VSQ2b9IHF%2BRma6BhlQOu7tfsh32A3FIBTMOjaxPdhC39SLiXrKUCFEcm9YkPpHv73gfa1c2%2BKVbswO4aBSnzSSyR224u28sFL7%2FKrlhC7Jz8oytiMadrGyUkpXYgqpTbuKN%2FthvmaBa2akB3j%2FM1UEZr32jwbY6a2uKZvT001vZtbywX5Wjh2Zqv8H%2BG8c%2BRcLP%2Bd%2B8cGmowteUdf1wBQbCXpDpPI5CDCGm2eJ8lxqldYET2JCRJ%2F2w%2FRf0gZLDBHHeyAz7UXTa%2Bp3qJJjg9qD1Uz11b2xPu%2B%2B%2BAMz9O6ks2x43SzoS4gU%2Bp1Ccs69xorB7qBu%2F%2FlbypBLG%2B%2FrgcMwpUGeUS%2Fp9YDa4eeaThhXeB%2F%2BMcq9uY4B84bAGK2JJ2PbRg7hdsN1OJxbKLa0a%2Bb7%2FWJhxBZYxNkv6gRN%2BmlUNeyK0iKHVoEywomDBgBT0fAfY4lO4DUkQBHnVbL%2BPgwQu28nRDByLrvO8h05Mat%2B%2F5myvpDCQPwjaRKojnKCl6zTqPNqkvZuHgdJXGgGTCEijG4PshA5vbFX%2BEasl237%2FVsNKUmrjCmQkJ8GdnCxtaMJOLn8QGOqUBXMjwUuzV%2FsD5SFiUyKc2PgbJQtmUkabI57VJGSx98auZZSJjgyFdMheGYcbEQEpKpqCOjd3mZh1pyy3CLy%2BVhsrnY8Is2W7BcCSE%2BdFMLR%2BZcLaBcPmxamQKlzG7Tqc%2FHuxUSE8x3831YjktaoixQybqQ2nAwrNUaItuIYQrIQiBCGOiQop5ZYJzNXfd7WK04REsTX5XXETEp98kIsxM1TqG2d5m&X-Amz-Signature=34ad99a1cdfe6cd5e309e1e502714f9294f8ed5c94f6e927a5f8a8cda8799cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
