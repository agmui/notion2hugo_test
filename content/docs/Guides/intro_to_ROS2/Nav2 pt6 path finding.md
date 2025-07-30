---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=0a7f910e6a389c4fa9a8a01a91cee881771567ae21a0c20d5906944bdc3994cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=78d2ca4eefb4c1ce7b950ae9312e6799728edb7702b14b164dd98c910adc6e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=8278c82bf4f26703364beebb0b6a30980f4dd6b7833b6f2a1f5c2234cf940fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=dbfd6c751cbdff140977cabe80aa90db89ba89e04e215e652c5d67d195bda301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=42bf5da907b58d43279a6f26949760e8721e170ba2af6060f9b10d29e8229afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=1758142292e7484521d82e19095793ae32fe82faa826f3f722108c9dbc343c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=53364e34ed0b42973ebf4d9f491a54f5cd3c00dfff3c58ff2e87cc54e86344eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=7e3f4ebfd2392282ff92ed0913d0cb5f39aeeedadcac657de4409342055b2b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=50bd1b1a3d5defb147e9d8624161cb4df34a4a94ff531f4f729cb70806d89b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=9357776690de0ae8d58decfeef49c802168354bc89b0fbc85124063edc1944d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=482033a5d19c3394d255380193653590aa5dd813cef5631b81d305d66873504d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=f3dba26969ccc39f869a30659797a34d834e4a09759089d3665db87e491e64d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FMR3M3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1t%2BWqF%2FMPQbKKnzCLnCFvdQlNFX24Fui49qPDwe%2BnCwIhAOgpAfFMfvZ9PM51qwXdFK7NStccXjEOWiuj6ESKpCvTKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfIPF9fQpzsqgOVV8q3AP%2Bzrx3ibRPfBKl1yonoFERcbE96kGbHiPwxel3SCF6A2VDTfgP3U79uHw6BeYFDxEIFCdBNPSieAIm6L29K9%2BP%2BuaD8E3Ap8nzXP9E6t2MRRMVmscl9uls%2FpMn5PSsJD%2F%2FrfZrEqz5AqEqgyr%2FWakpACEpMXLLUz2MEs3dpWdNXj0ZqjhdbSI883wK6WDSWg4gJCi7snzJK4PmiYZdmrxyfbWWPVNjJ6KKVH6IQDGPrI0LpTSjhjp6YzDZUwV22QHcFzrJLim1xpPZ61Z4%2Fcqz9KRQz1cYs7Ip%2FqRvPKZAhFVqu1uk52gxJaPNh6KKNNpxcFy6NFvkf%2BacV0iJmleDhsdnzGEUIdiG566TuCY5SlG0H%2BpCfOMJCRaffo1It6v9cOMJe%2B0pS2ALdOSFi3i7SiyViwKse5py9A%2FvyylnovPmvyKlgcf%2FKVbnvNZrvVT%2FgZx2BuqW10OoqMnU%2BfJvjUp6exAoYYqUJMzxVKcQjQTqCqqIkG19pSW65BX7kGVp%2F2Fuw3oT0AMjjMtgf%2BzkQiniNcnzK69BNRoHMd0DYgSjGjVlwxNsynbYo2l1ocOz4fG91W2mYnQblII03Sn%2FGDBFYClwqR8nI0blWP7OXXGwZ%2FT7cdarez3TJjCc8qXEBjqkAVtT3j8NDcIRWxEBblgHqfAbOJqk%2BgJxDEmGmI2AdB6K%2FsYGVlZo59ii8bhjURWOnKmgy7vDgy%2B4senB%2Fnvq903ACjvm5OAab8%2F1Nuoz0cy8AWA9%2FuZzqPZO%2BNstb1%2BPgkOqGV6djOEqA%2BP3Iy%2BQFmNuIs4B7G0KmW8sWdLzyyyc6%2FhFFq5ADUQwsM86Zbroq8%2Fb8LGXxUZWUsWMDb%2BOskWzCTU%2B&X-Amz-Signature=66e207b34593d9a68404d54ef3ecea9f985e369a08b1c33e725a7f96ef722d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
