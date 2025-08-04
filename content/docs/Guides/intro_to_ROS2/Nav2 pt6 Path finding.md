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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=f266073ca1a9627abcfff72ea94acab6cfe2b864bd703ae9c7fd89a268bff238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=4b30d9d84fc5ae07524348bd5fcf217b058a21c485b89d9e6d4cb26d196efbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=be2e92e0ed7dfe6f9dee451899ad4fa4cda3a25b8f8e8a0f94864b13921a87df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=4d27018c2bbaade7861b4ea3ab7309495a32696f706cda30460979277a0fd2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=30a7af7e988439d5fac3abee39e2b4e3f9e0051a37aba47b9c0ae2f632bb2fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=443b4ae5f7f3122c9459c85b64e34dfe89ed07d22f9b253880e3ea7504e95d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=534b1d08110d7b0a83bd0bf8ff0a718204b4f9dad5d867099dd52095cd292ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=3848997a5a4c6383c7e1c8d1bdb7e084f202750fa70692473eac46097c57d102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=7aabcd7d46b2cdacae709a495db33b0ac0126dd111c532a36af5986c8e85aeda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=20716fb967c4f348c47885f66dcc7c0dbe7d2c23ddce8ee9cf8ec67b40e74011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=2e0938fd877e28503cdd81df976a8dcd35ea171b3e50ea72a26a1f651b1fb94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=771894765fd1495573aaf6b7e73e8cfe1b73efeae168761d1649596a1bd37f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSN762F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfWXFzPScmQR0J0AUPpzSPN%2FzmrQO5d5jI2IA3%2FGHNyAIhALEjKD56WR%2F%2F1hetO%2BM7oxKkLvB8yjorYJQoBl9Dp%2FLOKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrNa4AqAywNWWnQG8q3APP9yqd%2BGPhFICe4ogYwZM%2FU0nSNjYoxOHIh2%2BoyEBqG49PlfArJzRlc3dJODtk0NWWwIHAg1T7nacLpLoz4dPZ%2FWkb4Py2PrdlPNldJqUgEj%2Fts%2FTHhHCE5TOZvWKhd9kwvWfYgbP9v19yuQREQA47gKLZpQdgZxZucszEOaL9x3mf1GqtE7rB4yj%2B29bxllfY1Vx%2BBVzCoQqeBzEEKN9FVoiqzDMpyGqrH8xrrD%2Fxt3xiIld6CtIMxwsLuKopv5yxvtoXc0%2F%2FhQ%2Fz32PiR%2FcKTAZhKPbvDOSh%2BGDJUVs44jX9MAm0KtfQsJ5AnpjFNPjjfZlNpMh9uj%2B39ELLSu8tFxiVk%2Bo9w069TGX1VQwwg6%2B58mG2eDgXZnxhCq2TKj0v0NLwfrD%2BnJvY7NbX9rSp6Sd1bwBs%2F71noM1LdF3yzfp2R6RSvh1LIenKFt16eah22OFazftlCsyCq5aM76RL2IocjSLUVWOzLsUDPJulNOrx9fTmYlmrRuVjftFQxMwXIfsj%2BOBRr2NX0zYzteobf2LIuPcvK2iccfIVNvUA2eQuWmw%2Ft%2F6pGUehcVuIS7FSb3sjb7w3Iaj7O7lTTvMAEtGJTMuXgbfAH%2FJHUtVxuwUGnagB4ss2c%2FReZjCzzsPEBjqkAbpAMjByvgdE2wPEvYxajdC3s1dGi66Aml1Z3B5uVl3p%2FQ0%2FR31ddGEQbi2xvUCHuWBDXr6UbHMfXgVwIU4DrnwymjtjG6b%2Bnb8DI5j4hUdYI2qLPc5SXwXxlXWC9HFRNvkB9Q46u1ohxOu4TVTHa4rjAX5DBPx4eJYE8nUv%2FibD%2Bw3aAgrWSYoPb1XdPdkrysqJCpwYLdIUNgz43exZblEamAIp&X-Amz-Signature=5e11276929de3149184c5c23f81d4ba0568b8dc6ea8ef6e67a06dcf25887a3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
