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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI222HAM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGdlGeBahuou0evLDwiTreSnuRlKSCLydbikd2SDhiRvAiAC2pqpCiUboku4cVG6GH7gRZ0X6o7fTEVp7hDEDR1lTir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWl6%2B%2Bvbcjbf3v9qGKtwDKCeLJPvdDxawGx8gB6bO35nl5g1ub62aju%2Bzf85qpwLfgst3C26LxuDvK8wjVdUP38py2AHvMdXJDZEEuhJ5mCHY47DqIlpVwh22w0fCPC2Jv95Gf1vV5cpSOvjIyXrcD88UP%2B4Bi47jhFRP7VuIl9TU0dskp0TYxipzFraSEdqBhMawCCLHJkKHkanCphn%2FFKmD4hUHxE3wxaiJgJbysSiolOLGvA011hEs5HZWcuFelWvcMT4JetXgBUAQx2DB1ztjhQgLf%2FVhyqrlXzkBWP5Pj0b5ftCth5PylscVf4P9VhJ%2B0H3lTl6%2FtMRME5sak96ueY0NM6I47qRh0t4%2F03KOiqFJaYi32mUTfSgzb%2B%2BMWff72tm390L686nJL07KDi84sKaJUGmSXYCdkoJVWOZ%2FLxNPjPyUMm%2FPwjfV7CU12zEXBt5VC8taE0hiKk1ZFwdDcyTTktQMW7DKXuJdaLeBZhGLUwCxmtMh%2BGyQwBKmcBo5JBWY8buIiyNxx%2FLBpSZD3YgSa2b2RXk7y15%2F0r3EXyoYTWuIQt6DorY4Ac0dnzN%2BoT3WfmS6AL9Dz%2FHyK%2F3%2B%2Fh6NxINkT7tpc2E6Sfi6X%2FJyP3ftpc%2FfcixvYkp49Bq5PsVcn7BMzXIwscGTxAY6pgH5hjuCeIyTQpFpfk0dSr2pYPGLMPwWW4gD3RHJmRT3yIXqayAMc3Gpl12SkGkGA4VkNLgp7PyUpOOPrf1SyYJFGZFal4MwYnVA0TwCdJvoloychfeRQPomJsu8fVIBqYM6%2FPyhuK1gm0%2FiIzczJq6XcOlPbcfE7oCVpGcYqbEnPefShPPc%2FRB5LrcH2YKwGQencP2UzuTjB3XpWgMpreSlxdx%2F3Aqp&X-Amz-Signature=33b5412f4e479877d23be39b35bc653e18793ac9d0b098cd1e2a6a83be01fe7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI222HAM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGdlGeBahuou0evLDwiTreSnuRlKSCLydbikd2SDhiRvAiAC2pqpCiUboku4cVG6GH7gRZ0X6o7fTEVp7hDEDR1lTir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWl6%2B%2Bvbcjbf3v9qGKtwDKCeLJPvdDxawGx8gB6bO35nl5g1ub62aju%2Bzf85qpwLfgst3C26LxuDvK8wjVdUP38py2AHvMdXJDZEEuhJ5mCHY47DqIlpVwh22w0fCPC2Jv95Gf1vV5cpSOvjIyXrcD88UP%2B4Bi47jhFRP7VuIl9TU0dskp0TYxipzFraSEdqBhMawCCLHJkKHkanCphn%2FFKmD4hUHxE3wxaiJgJbysSiolOLGvA011hEs5HZWcuFelWvcMT4JetXgBUAQx2DB1ztjhQgLf%2FVhyqrlXzkBWP5Pj0b5ftCth5PylscVf4P9VhJ%2B0H3lTl6%2FtMRME5sak96ueY0NM6I47qRh0t4%2F03KOiqFJaYi32mUTfSgzb%2B%2BMWff72tm390L686nJL07KDi84sKaJUGmSXYCdkoJVWOZ%2FLxNPjPyUMm%2FPwjfV7CU12zEXBt5VC8taE0hiKk1ZFwdDcyTTktQMW7DKXuJdaLeBZhGLUwCxmtMh%2BGyQwBKmcBo5JBWY8buIiyNxx%2FLBpSZD3YgSa2b2RXk7y15%2F0r3EXyoYTWuIQt6DorY4Ac0dnzN%2BoT3WfmS6AL9Dz%2FHyK%2F3%2B%2Fh6NxINkT7tpc2E6Sfi6X%2FJyP3ftpc%2FfcixvYkp49Bq5PsVcn7BMzXIwscGTxAY6pgH5hjuCeIyTQpFpfk0dSr2pYPGLMPwWW4gD3RHJmRT3yIXqayAMc3Gpl12SkGkGA4VkNLgp7PyUpOOPrf1SyYJFGZFal4MwYnVA0TwCdJvoloychfeRQPomJsu8fVIBqYM6%2FPyhuK1gm0%2FiIzczJq6XcOlPbcfE7oCVpGcYqbEnPefShPPc%2FRB5LrcH2YKwGQencP2UzuTjB3XpWgMpreSlxdx%2F3Aqp&X-Amz-Signature=fd91beea74aa2d1a1c255925bf801337cbe468cfb935548951832fa651268da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI222HAM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGdlGeBahuou0evLDwiTreSnuRlKSCLydbikd2SDhiRvAiAC2pqpCiUboku4cVG6GH7gRZ0X6o7fTEVp7hDEDR1lTir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWl6%2B%2Bvbcjbf3v9qGKtwDKCeLJPvdDxawGx8gB6bO35nl5g1ub62aju%2Bzf85qpwLfgst3C26LxuDvK8wjVdUP38py2AHvMdXJDZEEuhJ5mCHY47DqIlpVwh22w0fCPC2Jv95Gf1vV5cpSOvjIyXrcD88UP%2B4Bi47jhFRP7VuIl9TU0dskp0TYxipzFraSEdqBhMawCCLHJkKHkanCphn%2FFKmD4hUHxE3wxaiJgJbysSiolOLGvA011hEs5HZWcuFelWvcMT4JetXgBUAQx2DB1ztjhQgLf%2FVhyqrlXzkBWP5Pj0b5ftCth5PylscVf4P9VhJ%2B0H3lTl6%2FtMRME5sak96ueY0NM6I47qRh0t4%2F03KOiqFJaYi32mUTfSgzb%2B%2BMWff72tm390L686nJL07KDi84sKaJUGmSXYCdkoJVWOZ%2FLxNPjPyUMm%2FPwjfV7CU12zEXBt5VC8taE0hiKk1ZFwdDcyTTktQMW7DKXuJdaLeBZhGLUwCxmtMh%2BGyQwBKmcBo5JBWY8buIiyNxx%2FLBpSZD3YgSa2b2RXk7y15%2F0r3EXyoYTWuIQt6DorY4Ac0dnzN%2BoT3WfmS6AL9Dz%2FHyK%2F3%2B%2Fh6NxINkT7tpc2E6Sfi6X%2FJyP3ftpc%2FfcixvYkp49Bq5PsVcn7BMzXIwscGTxAY6pgH5hjuCeIyTQpFpfk0dSr2pYPGLMPwWW4gD3RHJmRT3yIXqayAMc3Gpl12SkGkGA4VkNLgp7PyUpOOPrf1SyYJFGZFal4MwYnVA0TwCdJvoloychfeRQPomJsu8fVIBqYM6%2FPyhuK1gm0%2FiIzczJq6XcOlPbcfE7oCVpGcYqbEnPefShPPc%2FRB5LrcH2YKwGQencP2UzuTjB3XpWgMpreSlxdx%2F3Aqp&X-Amz-Signature=f9e528e96469fb16fd2e65410357ea3966ac90db29f008b997f43fd71f49bb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI222HAM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGdlGeBahuou0evLDwiTreSnuRlKSCLydbikd2SDhiRvAiAC2pqpCiUboku4cVG6GH7gRZ0X6o7fTEVp7hDEDR1lTir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWl6%2B%2Bvbcjbf3v9qGKtwDKCeLJPvdDxawGx8gB6bO35nl5g1ub62aju%2Bzf85qpwLfgst3C26LxuDvK8wjVdUP38py2AHvMdXJDZEEuhJ5mCHY47DqIlpVwh22w0fCPC2Jv95Gf1vV5cpSOvjIyXrcD88UP%2B4Bi47jhFRP7VuIl9TU0dskp0TYxipzFraSEdqBhMawCCLHJkKHkanCphn%2FFKmD4hUHxE3wxaiJgJbysSiolOLGvA011hEs5HZWcuFelWvcMT4JetXgBUAQx2DB1ztjhQgLf%2FVhyqrlXzkBWP5Pj0b5ftCth5PylscVf4P9VhJ%2B0H3lTl6%2FtMRME5sak96ueY0NM6I47qRh0t4%2F03KOiqFJaYi32mUTfSgzb%2B%2BMWff72tm390L686nJL07KDi84sKaJUGmSXYCdkoJVWOZ%2FLxNPjPyUMm%2FPwjfV7CU12zEXBt5VC8taE0hiKk1ZFwdDcyTTktQMW7DKXuJdaLeBZhGLUwCxmtMh%2BGyQwBKmcBo5JBWY8buIiyNxx%2FLBpSZD3YgSa2b2RXk7y15%2F0r3EXyoYTWuIQt6DorY4Ac0dnzN%2BoT3WfmS6AL9Dz%2FHyK%2F3%2B%2Fh6NxINkT7tpc2E6Sfi6X%2FJyP3ftpc%2FfcixvYkp49Bq5PsVcn7BMzXIwscGTxAY6pgH5hjuCeIyTQpFpfk0dSr2pYPGLMPwWW4gD3RHJmRT3yIXqayAMc3Gpl12SkGkGA4VkNLgp7PyUpOOPrf1SyYJFGZFal4MwYnVA0TwCdJvoloychfeRQPomJsu8fVIBqYM6%2FPyhuK1gm0%2FiIzczJq6XcOlPbcfE7oCVpGcYqbEnPefShPPc%2FRB5LrcH2YKwGQencP2UzuTjB3XpWgMpreSlxdx%2F3Aqp&X-Amz-Signature=af612391b72a84fc3dcb158115b56f90c0d55fe575f0c1d13f1b65633d91e2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI222HAM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGdlGeBahuou0evLDwiTreSnuRlKSCLydbikd2SDhiRvAiAC2pqpCiUboku4cVG6GH7gRZ0X6o7fTEVp7hDEDR1lTir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWl6%2B%2Bvbcjbf3v9qGKtwDKCeLJPvdDxawGx8gB6bO35nl5g1ub62aju%2Bzf85qpwLfgst3C26LxuDvK8wjVdUP38py2AHvMdXJDZEEuhJ5mCHY47DqIlpVwh22w0fCPC2Jv95Gf1vV5cpSOvjIyXrcD88UP%2B4Bi47jhFRP7VuIl9TU0dskp0TYxipzFraSEdqBhMawCCLHJkKHkanCphn%2FFKmD4hUHxE3wxaiJgJbysSiolOLGvA011hEs5HZWcuFelWvcMT4JetXgBUAQx2DB1ztjhQgLf%2FVhyqrlXzkBWP5Pj0b5ftCth5PylscVf4P9VhJ%2B0H3lTl6%2FtMRME5sak96ueY0NM6I47qRh0t4%2F03KOiqFJaYi32mUTfSgzb%2B%2BMWff72tm390L686nJL07KDi84sKaJUGmSXYCdkoJVWOZ%2FLxNPjPyUMm%2FPwjfV7CU12zEXBt5VC8taE0hiKk1ZFwdDcyTTktQMW7DKXuJdaLeBZhGLUwCxmtMh%2BGyQwBKmcBo5JBWY8buIiyNxx%2FLBpSZD3YgSa2b2RXk7y15%2F0r3EXyoYTWuIQt6DorY4Ac0dnzN%2BoT3WfmS6AL9Dz%2FHyK%2F3%2B%2Fh6NxINkT7tpc2E6Sfi6X%2FJyP3ftpc%2FfcixvYkp49Bq5PsVcn7BMzXIwscGTxAY6pgH5hjuCeIyTQpFpfk0dSr2pYPGLMPwWW4gD3RHJmRT3yIXqayAMc3Gpl12SkGkGA4VkNLgp7PyUpOOPrf1SyYJFGZFal4MwYnVA0TwCdJvoloychfeRQPomJsu8fVIBqYM6%2FPyhuK1gm0%2FiIzczJq6XcOlPbcfE7oCVpGcYqbEnPefShPPc%2FRB5LrcH2YKwGQencP2UzuTjB3XpWgMpreSlxdx%2F3Aqp&X-Amz-Signature=5422562fa6df6d0e06a911d2273baeaa823a5db8a62d7cca88a920de5a8431cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI222HAM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGdlGeBahuou0evLDwiTreSnuRlKSCLydbikd2SDhiRvAiAC2pqpCiUboku4cVG6GH7gRZ0X6o7fTEVp7hDEDR1lTir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMWl6%2B%2Bvbcjbf3v9qGKtwDKCeLJPvdDxawGx8gB6bO35nl5g1ub62aju%2Bzf85qpwLfgst3C26LxuDvK8wjVdUP38py2AHvMdXJDZEEuhJ5mCHY47DqIlpVwh22w0fCPC2Jv95Gf1vV5cpSOvjIyXrcD88UP%2B4Bi47jhFRP7VuIl9TU0dskp0TYxipzFraSEdqBhMawCCLHJkKHkanCphn%2FFKmD4hUHxE3wxaiJgJbysSiolOLGvA011hEs5HZWcuFelWvcMT4JetXgBUAQx2DB1ztjhQgLf%2FVhyqrlXzkBWP5Pj0b5ftCth5PylscVf4P9VhJ%2B0H3lTl6%2FtMRME5sak96ueY0NM6I47qRh0t4%2F03KOiqFJaYi32mUTfSgzb%2B%2BMWff72tm390L686nJL07KDi84sKaJUGmSXYCdkoJVWOZ%2FLxNPjPyUMm%2FPwjfV7CU12zEXBt5VC8taE0hiKk1ZFwdDcyTTktQMW7DKXuJdaLeBZhGLUwCxmtMh%2BGyQwBKmcBo5JBWY8buIiyNxx%2FLBpSZD3YgSa2b2RXk7y15%2F0r3EXyoYTWuIQt6DorY4Ac0dnzN%2BoT3WfmS6AL9Dz%2FHyK%2F3%2B%2Fh6NxINkT7tpc2E6Sfi6X%2FJyP3ftpc%2FfcixvYkp49Bq5PsVcn7BMzXIwscGTxAY6pgH5hjuCeIyTQpFpfk0dSr2pYPGLMPwWW4gD3RHJmRT3yIXqayAMc3Gpl12SkGkGA4VkNLgp7PyUpOOPrf1SyYJFGZFal4MwYnVA0TwCdJvoloychfeRQPomJsu8fVIBqYM6%2FPyhuK1gm0%2FiIzczJq6XcOlPbcfE7oCVpGcYqbEnPefShPPc%2FRB5LrcH2YKwGQencP2UzuTjB3XpWgMpreSlxdx%2F3Aqp&X-Amz-Signature=184fe7e0a73dfc806f2b24ed5358e183f93424e0ab11c02d936578c7fa8640a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
